(function(angular){
'use strict';
angular.module(
	'EasySnapsApp',
	[
	'btford.markdown',
	'CopyApp'
	]
);
	/**
	 * @ngdoc constant
	 * @name debug
	 * @module watchapp
	 *
	 * @description Sets status debug mode
	 *
	 * @todo  Would be nice if this could be set in the dom so we could use 
	 * laravels .env values. 
	 */
	angular.module('EasySnapsApp').constant('debug', true);
})(angular);

(function(angular){
//Uses the debug config value to turn debug Info off or on. Information can be found
// at https://docs.angularjs.org/guide/production
angular.module('EasySnapsApp').config(['$compileProvider', 'debug', function ($compileProvider, debug) {

 	$compileProvider.debugInfoEnabled(debug);
  
}]);

})(angular);

(function(angular){
//Uses the debug config value to turn debug Info off or on. Information can be found
// at https://docs.angularjs.org/guide/production
angular.module('EasySnapsApp').filter('percentage', ['$filter', function ($filter) {
  return function (input, decimals) {
    return $filter('number')(input * 100, decimals) + '%';
  };
}]);

})(angular);