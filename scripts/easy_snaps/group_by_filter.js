/**
 * @ngdoc filter
 * @name GrouptByDate
 * @module watchapp
 * @requires  
 *
 * @description Groups items by their dates on a daily level. Can pass the date you wish
 * to group by in the filter. 
 */
(function(angular){

  'use strict';
  angular.module('EasySnapsApp').provider('filterWatcher', function() {

    this.$get = ['$window', '$rootScope', function($window, $rootScope) {
      var isDefined = angular.isDefined,
      isUndefined = angular.isUndefined,
      isFunction = angular.isFunction,
      isString = angular.isString,
      isNumber = angular.isNumber,
      isObject = angular.isObject,
      isArray = angular.isArray,
      forEach = angular.forEach,
      extend = angular.extend,
      copy = angular.copy,
      equals = angular.equals;
      function isScope(obj) {
        return obj && obj.$evalAsync && obj.$watch;
      }
      /**
       * Cache storing
       * @type {Object}
       */
       var $$cache = {};

      /**
       * Scope listeners container
       * scope.$destroy => remove all cache keys
       * bind to current scope.
       * @type {Object}
       */
       var $$listeners = {};

      /**
       * $timeout without triggering the digest cycle
       * @type {function}
       */
       var $$timeout = $window.setTimeout;

      /**
       * @description
       * get `HashKey` string based on the given arguments.
       * @param fName
       * @param args
       * @returns {string}
       */
       function getHashKey(fName, args) {
        return [fName, angular.toJson(args)]
        .join('#')
        .replace(/"/g,'');
      }

      /**
       * @description
       * fir on $scope.$destroy,
       * remove cache based scope from `$$cache`,
       * and remove itself from `$$listeners`
       * @param event
       */
       function removeCache(event) {
        var id = event.targetScope.$id;
        forEach($$listeners[id], function(key) {
          delete $$cache[key];
        });
        delete $$listeners[id];
      }

      /**
       * @description
       * for angular version that greater than v.1.3.0
       * if clear cache when the digest cycle end.
       */
       function cleanStateless() {
        $$timeout(function() {
          if(!$rootScope.$$phase)
            $$cache = {};
        });
      }

      /**
       * @description
       * Store hashKeys in $$listeners container
       * on scope.$destroy, remove them all(bind an event).
       * @param scope
       * @param hashKey
       * @returns {*}
       */
       function addListener(scope, hashKey) {
        var id = scope.$id;
        if(isUndefined($$listeners[id])) {
          scope.$on('$destroy', removeCache);
          $$listeners[id] = [];
        }
        return $$listeners[id].push(hashKey);
      }

      /**
       * @description
       * return the `cacheKey` or undefined.
       * @param filterName
       * @param args
       * @returns {*}
       */
       function $$isMemoized(filterName, args) {
        var hashKey = getHashKey(filterName, args);
        return $$cache[hashKey];
      }

      /**
       * @description
       * store `result` in `$$cache` container, based on the hashKey.
       * add $destroy listener and return result
       * @param filterName
       * @param args
       * @param scope
       * @param result
       * @returns {*}
       */
       function $$memoize(filterName, args, scope, result) {
        var hashKey = getHashKey(filterName, args);
        //store result in `$$cache` container
        $$cache[hashKey] = result;
        // for angular versions that less than 1.3
        // add to `$destroy` listener, a cleaner callback
        if(isScope(scope)) {
          addListener(scope, hashKey);
        } else {
          cleanStateless();
        }
        return result;
      }

      return {
        isMemoized: $$isMemoized,
        memoize: $$memoize
      };

    }];
  });
/**
 * @ngdoc filter
 * @name groupBy
 * @module watchapp
 * @requires  
 *
 * @description Groups items by a key value.
 */

  'use strict';
  angular.module('EasySnapsApp').filter('groupBy', [ '$parse', 'filterWatcher', function ( $parse, filterWatcher ) {
    return function (collection, property) {
     var isDefined = angular.isDefined,
     isUndefined = angular.isUndefined,
     isFunction = angular.isFunction,
     isString = angular.isString,
     isNumber = angular.isNumber,
     isObject = angular.isObject,
     isArray = angular.isArray,
     forEach = angular.forEach,
     extend = angular.extend,
     copy = angular.copy,
     equals = angular.equals;
     if(!isObject(collection) || isUndefined(property)) {
      return collection;
    }

    var getterFn = $parse(property);

    return filterWatcher.isMemoized('groupBy', arguments) ||
    filterWatcher.memoize('groupBy', arguments, this,
      _groupBy(collection, getterFn));

      /**
       * groupBy function
       * @param collection
       * @param getter
       * @returns {{}}
       */
       function _groupBy(collection, getter) {
        var result = {};
        var prop;

        forEach( collection, function( elm ) {
          prop = getter(elm);

          if(!result[prop]) {
            result[prop] = [];
          }
          result[prop].push(elm);
        });
        return result;
      }
    };
  }]);
})(angular);