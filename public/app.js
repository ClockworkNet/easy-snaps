/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	var _notice = __webpack_require__(7);

	var _notice2 = _interopRequireDefault(_notice);

	var _output = __webpack_require__(14);

	var _output2 = _interopRequireDefault(_output);

	var _gbu = __webpack_require__(19);

	var _gbu2 = _interopRequireDefault(_gbu);

	var _projects = __webpack_require__(24);

	var _projects2 = _interopRequireDefault(_projects);

	var _percent = __webpack_require__(5);

	var _percent2 = _interopRequireDefault(_percent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(29);

	_vue2.default.component('notice', _notice2.default);
	_vue2.default.component('snapshot', _output2.default);
	_vue2.default.component('gbu', _gbu2.default);
	_vue2.default.component('projects', _projects2.default);

	_vue2.default.filter('percent', _percent2.default);

	var app = new _vue2.default(_app2.default);

	app.$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * Vue.js v2.1.8
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _toString(val) {
	  return val == null ? '' : (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' ? JSON.stringify(val, null, 2) : String(val);
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber(val) {
	  var n = parseFloat(val, 10);
	  return n || n === 0 ? n : val;
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap(str, expectsLowerCase) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase ? function (val) {
	    return map[val.toLowerCase()];
	  } : function (val) {
	    return map[val];
	  };
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1(arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1);
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive(value) {
	  return typeof value === 'string' || typeof value === 'number';
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached(fn) {
	  var cache = Object.create(null);
	  return function cachedFn(str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str));
	  };
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) {
	    return c ? c.toUpperCase() : '';
	  });
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1(fn, ctx) {
	  function boundFn(a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn;
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}

	/**
	 * Mix properties into target object.
	 */
	function extend(to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to;
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject(obj) {
	  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject(arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res;
	}

	/**
	 * Perform no operation.
	 */
	function noop() {}

	/**
	 * Always return false.
	 */
	var no = function no() {
	  return false;
	};

	/**
	 * Return same value
	 */
	var identity = function identity(_) {
	  return _;
	};

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys(modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || []);
	  }, []).join(',');
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual(a, b) {
	  var isObjectA = isObject(a);
	  var isObjectB = isObject(b);
	  if (isObjectA && isObjectB) {
	    return JSON.stringify(a) === JSON.stringify(b);
	  } else if (!isObjectA && !isObjectB) {
	    return String(a) === String(b);
	  } else {
	    return false;
	  }
	}

	function looseIndexOf(arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: process.env.NODE_ENV !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: [],

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Parse the real tag name for the specific platform.
	   */
	  parsePlatformTagName: identity,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: ['component', 'directive', 'filter'],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated'],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}

	/**
	 * Define a property.
	 */
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath(path) {
	  if (bailRE.test(path)) {
	    return;
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) {
	          return;
	        }
	        obj = obj[segments[i]];
	      }
	      return obj;
	    };
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer;
	var isServerRendering = function isServerRendering() {
	  if (_isServer === undefined) {
	    /* istanbul ignore if */
	    if (!inBrowser && typeof global !== 'undefined') {
	      // detect presence of vue-server-renderer and avoid
	      // Webpack shimming the process
	      _isServer = global['process'].env.VUE_ENV === 'server';
	    } else {
	      _isServer = false;
	    }
	  }
	  return _isServer;
	};

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var logError = function logError(err) {
	      console.error(err);
	    };
	    timerFunc = function timerFunc() {
	      p.then(nextTickHandler).catch(logError);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) {
	        setTimeout(noop);
	      }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) ||
	  // PhantomJS and iOS 7.x
	  MutationObserver.toString() === '[object MutationObserverConstructor]')) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function timerFunc() {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function timerFunc() {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick(cb, ctx) {
	    var _resolve;
	    callbacks.push(function () {
	      if (cb) {
	        cb.call(ctx);
	      }
	      if (_resolve) {
	        _resolve(ctx);
	      }
	    });
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	    if (!cb && typeof Promise !== 'undefined') {
	      return new Promise(function (resolve) {
	        _resolve = resolve;
	      });
	    }
	  };
	}();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    function Set() {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has(key) {
	      return this.set[key] === true;
	    };
	    Set.prototype.add = function add(key) {
	      this.set[key] = true;
	    };
	    Set.prototype.clear = function clear() {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }();
	}

	var warn = noop;
	var formatComponentName;

	if (process.env.NODE_ENV !== 'production') {
	  var hasConsole = typeof console !== 'undefined';

	  warn = function warn(msg, vm) {
	    if (hasConsole && !config.silent) {
	      console.error("[Vue warn]: " + msg + " " + (vm ? formatLocation(formatComponentName(vm)) : ''));
	    }
	  };

	  formatComponentName = function formatComponentName(vm) {
	    if (vm.$root === vm) {
	      return 'root instance';
	    }
	    var name = vm._isVue ? vm.$options.name || vm.$options._componentTag : vm.name;
	    return (name ? "component <" + name + ">" : "anonymous component") + (vm._isVue && vm.$options.__file ? " at " + vm.$options.__file : '');
	  };

	  var formatLocation = function formatLocation(str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return "\n(found in " + str + ")";
	  };
	}

	/*  */

	var uid$1 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub(sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub(sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend() {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify() {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget(_target) {
	  if (Dep.target) {
	    targetStack.push(Dep.target);
	  }
	  Dep.target = _target;
	}

	function popTarget() {
	  Dep.target = targetStack.pop();
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) {
	      ob.observeArray(inserted);
	    }
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk(obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray(items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe(value, asRootData) {
	  if (!isObject(value)) {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (observerState.shouldConvert && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (asRootData && ob) {
	    ob.vmCount++;
	  }
	  return ob;
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1(obj, key, val, customSetter) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      /* eslint-disable no-self-compare */
	      if (newVal === value || newVal !== newVal && value !== value) {
	        return;
	      }
	      /* eslint-enable no-self-compare */
	      if (process.env.NODE_ENV !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set$1(obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val;
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || ob && ob.vmCount) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
	    return;
	  }
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val;
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del(obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || ob && ob.vmCount) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
	    return;
	  }
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray(value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	if (process.env.NODE_ENV !== 'production') {
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
	    }
	    return defaultStrat(parent, child);
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData(to, from) {
	  if (!from) {
	    return to;
	  }
	  var key, toVal, fromVal;
	  var keys = Object.keys(from);
	  for (var i = 0; i < keys.length; i++) {
	    key = keys[i];
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set$1(to, key, fromVal);
	    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}

	/**
	 * Data
	 */
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook(parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, childVal) : res;
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) {
	    return parentVal;
	  }
	  if (!parentVal) {
	    return childVal;
	  }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};

	/**
	 * Other object hashes.
	 */
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) {
	    return parentVal;
	  }
	  if (!parentVal) {
	    return childVal;
	  }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};

	/**
	 * Validate component names
	 */
	function checkComponents(options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps(options) {
	  var props = options.props;
	  if (!props) {
	    return;
	  }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val) ? val : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives(options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions(parent, child, vm) {
	  if (process.env.NODE_ENV !== 'production') {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function' ? mergeOptions(parent, extendsFrom.options, vm) : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$3) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  // check local registration variations first
	  if (hasOwn(assets, id)) {
	    return assets[id];
	  }
	  var camelizedId = camelize(id);
	  if (hasOwn(assets, camelizedId)) {
	    return assets[camelizedId];
	  }
	  var PascalCaseId = capitalize(camelizedId);
	  if (hasOwn(assets, PascalCaseId)) {
	    return assets[PascalCaseId];
	  }
	  // fallback to prototype chain
	  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}

	/*  */

	function validateProp(key, propOptions, propsData, vm) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isType(Boolean, prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value;
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue(vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined;
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm[key] !== undefined) {
	    return vm[key];
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function ? def.call(vm) : def;
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp(prop, name, value, vm, absent) {
	  if (prop.required && absent) {
	    warn('Missing required prop: "' + name + '"', vm);
	    return;
	  }
	  if (value == null && !prop.required) {
	    return;
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType || '');
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn('Invalid prop: type check failed for prop "' + name + '".' + ' Expected ' + expectedTypes.map(capitalize).join(', ') + ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.', vm);
	    return;
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType(value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType(fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1];
	}

	function isType(type, fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === getType(type);
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === getType(type)) {
	      return true;
	    }
	  }
	  /* istanbul ignore next */
	  return false;
	}

	var util = Object.freeze({
	  defineReactive: defineReactive$$1,
	  _toString: _toString,
	  toNumber: toNumber,
	  makeMap: makeMap,
	  isBuiltInTag: isBuiltInTag,
	  remove: remove$1,
	  hasOwn: hasOwn,
	  isPrimitive: isPrimitive,
	  cached: cached,
	  camelize: camelize,
	  capitalize: capitalize,
	  hyphenate: hyphenate,
	  bind: bind$1,
	  toArray: toArray,
	  extend: extend,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  toObject: toObject,
	  noop: noop,
	  no: no,
	  identity: identity,
	  genStaticKeys: genStaticKeys,
	  looseEqual: looseEqual,
	  looseIndexOf: looseIndexOf,
	  isReserved: isReserved,
	  def: def,
	  parsePath: parsePath,
	  hasProto: hasProto,
	  inBrowser: inBrowser,
	  UA: UA,
	  isIE: isIE,
	  isIE9: isIE9,
	  isEdge: isEdge,
	  isAndroid: isAndroid,
	  isIOS: isIOS,
	  isServerRendering: isServerRendering,
	  devtools: devtools,
	  nextTick: nextTick,
	  get _Set() {
	    return _Set;
	  },
	  mergeOptions: mergeOptions,
	  resolveAsset: resolveAsset,
	  get warn() {
	    return warn;
	  },
	  get formatComponentName() {
	    return formatComponentName;
	  },
	  validateProp: validateProp
	});

	/* not type checking this file because flow doesn't play well with Proxy */

	var initProxy;

	if (process.env.NODE_ENV !== 'production') {
	  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
	  );

	  var warnNonPresent = function warnNonPresent(target, key) {
	    warn("Property or method \"" + key + "\" is not defined on the instance but " + "referenced during render. Make sure to declare reactive data " + "properties in the data option.", target);
	  };

	  var hasProxy = typeof Proxy !== 'undefined' && Proxy.toString().match(/native code/);

	  if (hasProxy) {
	    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
	    config.keyCodes = new Proxy(config.keyCodes, {
	      set: function set(target, key, value) {
	        if (isBuiltInModifier(key)) {
	          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
	          return false;
	        } else {
	          target[key] = value;
	          return true;
	        }
	      }
	    });
	  }

	  var hasHandler = {
	    has: function has(target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warnNonPresent(target, key);
	      }
	      return has || !isAllowed;
	    }
	  };

	  var getHandler = {
	    get: function get(target, key) {
	      if (typeof key === 'string' && !(key in target)) {
	        warnNonPresent(target, key);
	      }
	      return target[key];
	    }
	  };

	  initProxy = function initProxy(vm) {
	    if (hasProxy) {
	      // determine which proxy handler to use
	      var options = vm.$options;
	      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
	      vm._renderProxy = new Proxy(vm, handlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */

	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState() {
	  queue.length = 0;
	  has$1 = {};
	  if (process.env.NODE_ENV !== 'production') {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue() {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) {
	    return a.id - b.id;
	  });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
	        break;
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher(watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$2 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher(vm, expOrFn, cb, options) {
	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  if (options) {
	    this.deep = !!options.deep;
	    this.user = !!options.user;
	    this.lazy = !!options.lazy;
	    this.sync = !!options.sync;
	  } else {
	    this.deep = this.user = this.lazy = this.sync = false;
	  }
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.expression = process.env.NODE_ENV !== 'production' ? expOrFn.toString() : '';
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      process.env.NODE_ENV !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
	    }
	  }
	  this.value = this.lazy ? undefined : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get() {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value;
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep(dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps() {
	  var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update() {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run() {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated.
	    isObject(value) || this.deep) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            process.env.NODE_ENV !== 'production' && warn("Error in watcher \"" + this.expression + "\"", this.vm);
	            throw e;
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate() {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend() {
	  var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown() {
	  var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed.
	    if (!this.vm._isBeingDestroyed) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse(val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse(val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if (!isA && !isObject(val) || !Object.isExtensible(val)) {
	    return;
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return;
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) {
	      _traverse(val[i], seen);
	    }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      _traverse(val[keys[i]], seen);
	    }
	  }
	}

	/*  */

	function initState(vm) {
	  vm._watchers = [];
	  var opts = vm.$options;
	  if (opts.props) {
	    initProps(vm, opts.props);
	  }
	  if (opts.methods) {
	    initMethods(vm, opts.methods);
	  }
	  if (opts.data) {
	    initData(vm);
	  } else {
	    observe(vm._data = {}, true /* asRootData */);
	  }
	  if (opts.computed) {
	    initComputed(vm, opts.computed);
	  }
	  if (opts.watch) {
	    initWatch(vm, opts.watch);
	  }
	}

	var isReservedProp = { key: 1, ref: 1, slot: 1 };

	function initProps(vm, props) {
	  var propsData = vm.$options.propsData || {};
	  var keys = vm.$options._propKeys = Object.keys(props);
	  var isRoot = !vm.$parent;
	  // root instance props should be converted
	  observerState.shouldConvert = isRoot;
	  var loop = function loop(i) {
	    var key = keys[i];
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      if (isReservedProp[key]) {
	        warn("\"" + key + "\" is a reserved attribute and cannot be used as component prop.", vm);
	      }
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	        if (vm.$parent && !observerState.isSettingProps) {
	          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
	        }
	      });
	    } else {
	      defineReactive$$1(vm, key, validateProp(key, props, propsData, vm));
	    }
	  };

	  for (var i = 0; i < keys.length; i++) {
	    loop(i);
	  }observerState.shouldConvert = true;
	}

	function initData(vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    process.env.NODE_ENV !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      process.env.NODE_ENV !== 'production' && warn("The data property \"" + keys[i] + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data, true /* asRootData */);
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed(vm, computed) {
	  for (var key in computed) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && key in vm) {
	      warn("existing instance property \"" + key + "\" will be " + "overwritten by a computed property with the same name.", vm);
	    }
	    var userDef = computed[key];
	    if (typeof userDef === 'function') {
	      computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	      computedSharedDefinition.set = noop;
	    } else {
	      computedSharedDefinition.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, vm) : bind$1(userDef.get, vm) : noop;
	      computedSharedDefinition.set = userDef.set ? bind$1(userDef.set, vm) : noop;
	    }
	    Object.defineProperty(vm, key, computedSharedDefinition);
	  }
	}

	function makeComputedGetter(getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter() {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value;
	  };
	}

	function initMethods(vm, methods) {
	  for (var key in methods) {
	    vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	    if (process.env.NODE_ENV !== 'production' && methods[key] == null) {
	      warn("method \"" + key + "\" has an undefined value in the component definition. " + "Did you reference the function correctly?", vm);
	    }
	  }
	}

	function initWatch(vm, watch) {
	  for (var key in watch) {
	    var handler = watch[key];
	    if (Array.isArray(handler)) {
	      for (var i = 0; i < handler.length; i++) {
	        createWatcher(vm, key, handler[i]);
	      }
	    } else {
	      createWatcher(vm, key, handler);
	    }
	  }
	}

	function createWatcher(vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin(Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data;
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    dataDef.set = function (newData) {
	      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set$1;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	}

	function proxy(vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter() {
	        return vm._data[key];
	      },
	      set: function proxySetter(val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode(tag, data, children, text, elm, context, componentOptions) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = undefined;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var createEmptyVNode = function createEmptyVNode() {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node;
	};

	function createTextVNode(val) {
	  return new VNode(undefined, undefined, undefined, String(val));
	}

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode) {
	  var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions);
	  cloned.ns = vnode.ns;
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned;
	}

	function cloneVNodes(vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res;
	}

	/*  */

	function mergeVNodeHook(def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners(on, oldOn, add, remove$$1, vm) {
	  var name, cur, old, fn, event, capture, once;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      process.env.NODE_ENV !== 'production' && warn("Invalid handler for event \"" + name + "\": got " + String(cur), vm);
	    } else if (!old) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      if (Array.isArray(cur)) {
	        add(event, cur.invoker = arrInvoker(cur), once, capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, once, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) {
	          old[i] = cur[i];
	        }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      once = name.charAt(0) === '~'; // Prefixed last, checked first
	      event = once ? name.slice(1) : name;
	      capture = event.charAt(0) === '!';
	      event = capture ? event.slice(1) : event;
	      remove$$1(event, oldOn[name].invoker, capture);
	    }
	  }
	}

	function arrInvoker(arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  };
	}

	function fnInvoker(o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  };
	}

	/*  */

	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// nomralization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
	function simpleNormalizeChildren(children) {
	  for (var i = 0; i < children.length; i++) {
	    if (Array.isArray(children[i])) {
	      return Array.prototype.concat.apply([], children);
	    }
	  }
	  return children;
	}

	// 2. When the children contains constrcuts that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
	function normalizeChildren(children) {
	  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
	}

	function normalizeArrayChildren(children, nestedIndex) {
	  var res = [];
	  var i, c, last;
	  for (i = 0; i < children.length; i++) {
	    c = children[i];
	    if (c == null || typeof c === 'boolean') {
	      continue;
	    }
	    last = res[res.length - 1];
	    //  nested
	    if (Array.isArray(c)) {
	      res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || '') + "_" + i));
	    } else if (isPrimitive(c)) {
	      if (last && last.text) {
	        last.text += String(c);
	      } else if (c !== '') {
	        // convert primitive to vnode
	        res.push(createTextVNode(c));
	      }
	    } else {
	      if (c.text && last && last.text) {
	        res[res.length - 1] = createTextVNode(last.text + c.text);
	      } else {
	        // default key for nested array children (likely generated by v-for)
	        if (c.tag && c.key == null && nestedIndex != null) {
	          c.key = "__vlist" + nestedIndex + "_" + i + "__";
	        }
	        res.push(c);
	      }
	    }
	  }
	  return res;
	}

	/*  */

	function getFirstComponentChild(children) {
	  return children && children.filter(function (c) {
	    return c && c.componentOptions;
	  })[0];
	}

	/*  */

	function initEvents(vm) {
	  vm._events = Object.create(null);
	  vm._hasHookEvent = false;
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  if (listeners) {
	    updateComponentListeners(vm, listeners);
	  }
	}

	var target;

	function add$1(event, fn, once) {
	  if (once) {
	    target.$once(event, fn);
	  } else {
	    target.$on(event, fn);
	  }
	}

	function remove$2(event, fn) {
	  target.$off(event, fn);
	}

	function updateComponentListeners(vm, listeners, oldListeners) {
	  target = vm;
	  updateListeners(listeners, oldListeners || {}, add$1, remove$2, vm);
	}

	function eventsMixin(Vue) {
	  var hookRE = /^hook:/;
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    // optimize hook:event cost by using a boolean flag marked at registration
	    // instead of a hash lookup
	    if (hookRE.test(event)) {
	      vm._hasHookEvent = true;
	    }
	    return vm;
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on() {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm;
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm;
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm;
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return vm;
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm;
	  };
	}

	/*  */

	var activeInstance = null;

	function initLifecycle(vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin(Vue) {
	  Vue.prototype._mount = function (el, hydrating) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = createEmptyVNode;
	      if (process.env.NODE_ENV !== 'production') {
	        /* istanbul ignore if */
	        if (vm.$options.template && vm.$options.template.charAt(0) !== '#') {
	          warn('You are using the runtime-only build of Vue where the template ' + 'option is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
	        } else {
	          warn('Failed to mount component: template or render function not defined.', vm);
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm;
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevVnode = vm._vnode;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    vm._vnode = vnode;
	    // Vue.prototype.__patch__ is injected in entry points
	    // based on the rendering backend used.
	    if (!prevVnode) {
	      // initial render
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */
	      , vm.$options._parentElm, vm.$options._refElm);
	    } else {
	      // updates
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (propsData, listeners, parentVnode, renderChildren) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$vnode = parentVnode; // update vm's placeholder node without re-render
	    if (vm._vnode) {
	      // update child tree's parent
	      vm._vnode.parent = parentVnode;
	    }
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      if (process.env.NODE_ENV !== 'production') {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      updateComponentListeners(vm, listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, parentVnode.context);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return;
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook(vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  if (vm._hasHookEvent) {
	    vm.$emit('hook:' + hook);
	  }
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent(Ctor, data, context, children, tag) {
	  if (!Ctor) {
	    return;
	  }

	  var baseCtor = context.$options._base;
	  if (isObject(Ctor)) {
	    Ctor = baseCtor.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    if (process.env.NODE_ENV !== 'production') {
	      warn("Invalid Component definition: " + String(Ctor), context);
	    }
	    return;
	  }

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return;
	      }
	    }
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children);
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children });
	  return vnode;
	}

	function createFunctionalComponent(Ctor, propsData, data, context, children) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  // ensure the createElement function in functional components
	  // gets a unique context - this is necessary for correct named slot check
	  var _context = Object.create(context);
	  var h = function h(a, b, c, d) {
	    return createElement(_context, a, b, c, d, true);
	  };
	  var vnode = Ctor.options.render.call(null, h, {
	    props: props,
	    data: data,
	    parent: context,
	    children: children,
	    slots: function slots() {
	      return resolveSlots(children, context);
	    }
	  });
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode;
	}

	function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
	parent, // activeInstance in lifecycle state
	parentElm, refElm) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children,
	    _parentElm: parentElm || null,
	    _refElm: refElm || null
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options);
	}

	function init(vnode, hydrating, parentElm, refElm) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  } else if (vnode.data.keepAlive) {
	    // kept-alive components, treat as a patch
	    var mountedNode = vnode; // work around flow
	    prepatch(mountedNode, mountedNode);
	  }
	}

	function prepatch(oldVnode, vnode) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(options.propsData, // updated props
	  options.listeners, // updated listeners
	  vnode, // new parent vnode
	  options.children // new children
	  );
	}

	function insert(vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1(vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent(factory, baseCtor, cb) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function resolve(res) {
	      if (isObject(res)) {
	        res = baseCtor.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function reject(reason) {
	      process.env.NODE_ENV !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved;
	  }
	}

	function extractProps(data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return;
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey) || checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res;
	}

	function checkProp(res, hash, key, altKey, preserve) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true;
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true;
	    }
	  }
	  return false;
	}

	function mergeHooks(data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1(one, two) {
	  return function (a, b, c, d) {
	    one(a, b, c, d);
	    two(a, b, c, d);
	  };
	}

	/*  */

	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
	  if (Array.isArray(data) || isPrimitive(data)) {
	    normalizationType = children;
	    children = data;
	    data = undefined;
	  }
	  if (alwaysNormalize) {
	    normalizationType = ALWAYS_NORMALIZE;
	  }
	  return _createElement(context, tag, data, children, normalizationType);
	}

	function _createElement(context, tag, data, children, normalizationType) {
	  if (data && data.__ob__) {
	    process.env.NODE_ENV !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
	    return createEmptyVNode();
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return createEmptyVNode();
	  }
	  // support single function children as default scoped slot
	  if (Array.isArray(children) && typeof children[0] === 'function') {
	    data = data || {};
	    data.scopedSlots = { default: children[0] };
	    children.length = 0;
	  }
	  if (normalizationType === ALWAYS_NORMALIZE) {
	    children = normalizeChildren(children);
	  } else if (normalizationType === SIMPLE_NORMALIZE) {
	    children = simpleNormalizeChildren(children);
	  }
	  var vnode, ns;
	  if (typeof tag === 'string') {
	    var Ctor;
	    ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
	    } else if (Ctor = resolveAsset(context.$options, 'components', tag)) {
	      // component
	      vnode = createComponent(Ctor, data, context, children, tag);
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      vnode = new VNode(tag, data, children, undefined, undefined, context);
	    }
	  } else {
	    // direct component options / constructor
	    vnode = createComponent(tag, data, context, children);
	  }
	  if (vnode) {
	    if (ns) {
	      applyNS(vnode, ns);
	    }
	    return vnode;
	  } else {
	    return createEmptyVNode();
	  }
	}

	function applyNS(vnode, ns) {
	  vnode.ns = ns;
	  if (vnode.tag === 'foreignObject') {
	    // use default namespace inside foreignObject
	    return;
	  }
	  if (vnode.children) {
	    for (var i = 0, l = vnode.children.length; i < l; i++) {
	      var child = vnode.children[i];
	      if (child.tag && !child.ns) {
	        applyNS(child, ns);
	      }
	    }
	  }
	}

	/*  */

	function initRender(vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  var parentVnode = vm.$options._parentVnode;
	  var renderContext = parentVnode && parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
	  vm.$scopedSlots = {};
	  // bind the createElement fn to this instance
	  // so that we get proper render context inside it.
	  // args order: tag, data, children, normalizationType, alwaysNormalize
	  // internal version is used by render functions compiled from templates
	  vm._c = function (a, b, c, d) {
	    return createElement(vm, a, b, c, d, false);
	  };
	  // normalization is always applied for the public version, used in
	  // user-written render functions.
	  vm.$createElement = function (a, b, c, d) {
	    return createElement(vm, a, b, c, d, true);
	  };
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin(Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    return nextTick(fn, this);
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (_parentVnode && _parentVnode.data.scopedSlots) {
	      vm.$scopedSlots = _parentVnode.data.scopedSlots;
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn("Error when rendering " + formatComponentName(vm) + ":");
	        }
	        throw e;
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
	        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
	      }
	      vnode = createEmptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode;
	  };

	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // convert text to vnode
	  Vue.prototype._v = createTextVNode;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = createEmptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic(index, isInFor) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree);
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, "__static__" + index, false);
	    return tree;
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce(tree, index, key) {
	    markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
	    return tree;
	  };

	  function markStatic(tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], key + "_" + i, isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode(node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  Vue.prototype._f = function resolveFilter(id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity;
	  };

	  // render v-for
	  Vue.prototype._l = function renderList(val, render) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val) || typeof val === 'string') {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret;
	  };

	  // renderSlot
	  Vue.prototype._t = function (name, fallback, props, bindObject) {
	    var scopedSlotFn = this.$scopedSlots[name];
	    if (scopedSlotFn) {
	      // scoped slot
	      props = props || {};
	      if (bindObject) {
	        extend(props, bindObject);
	      }
	      return scopedSlotFn(props) || fallback;
	    } else {
	      var slotNodes = this.$slots[name];
	      // warn duplicate slot usage
	      if (slotNodes && process.env.NODE_ENV !== 'production') {
	        slotNodes._rendered && warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " + "- this will likely cause render errors.", this);
	        slotNodes._rendered = true;
	      }
	      return slotNodes || fallback;
	    }
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps(data, tag, value, asProp) {
	    if (value) {
	      if (!isObject(value)) {
	        process.env.NODE_ENV !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(tag, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data;
	  };

	  // check v-on keyCodes
	  Vue.prototype._k = function checkKeyCodes(eventKeyCode, key, builtInAlias) {
	    var keyCodes = config.keyCodes[key] || builtInAlias;
	    if (Array.isArray(keyCodes)) {
	      return keyCodes.indexOf(eventKeyCode) === -1;
	    } else {
	      return keyCodes !== eventKeyCode;
	    }
	  };
	}

	function resolveSlots(children, context) {
	  var slots = {};
	  if (!children) {
	    return slots;
	  }
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) && child.data && (name = child.data.slot)) {
	      var slot = slots[name] || (slots[name] = []);
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(defaultSlot.length === 1 && (defaultSlot[0].text === ' ' || defaultSlot[0].isComment))) {
	    slots.default = defaultSlot;
	  }
	  return slots;
	}

	/*  */

	var uid = 0;

	function initMixin(Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
	    }
	    /* istanbul ignore else */
	    if (process.env.NODE_ENV !== 'production') {
	      initProxy(vm);
	    } else {
	      vm._renderProxy = vm;
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent(vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  opts._parentElm = options._parentElm;
	  opts._refElm = options._refElm;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions(Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      extendOptions._scopeId = options._scopeId;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options;
	}

	function Vue$3(options) {
	  if (process.env.NODE_ENV !== 'production' && !(this instanceof Vue$3)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$3);
	stateMixin(Vue$3);
	eventsMixin(Vue$3);
	lifecycleMixin(Vue$3);
	renderMixin(Vue$3);

	/*  */

	function initUse(Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	}

	/*  */

	function initMixin$1(Vue) {
	  Vue.mixin = function (mixin) {
	    this.options = mergeOptions(this.options, mixin);
	  };
	}

	/*  */

	function initExtend(Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var SuperId = Super.cid;
	    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
	    if (cachedCtors[SuperId]) {
	      return cachedCtors[SuperId];
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characters and the hyphen, ' + 'and must start with a letter.');
	      }
	    }
	    var Sub = function VueComponent(options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension/mixin/plugin usage
	    Sub.extend = Super.extend;
	    Sub.mixin = Super.mixin;
	    Sub.use = Super.use;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    cachedCtors[SuperId] = Sub;
	    return Sub;
	  };
	}

	/*  */

	function initAssetRegisters(Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = this.options._base.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}

	/*  */

	var patternTypes = [String, RegExp];

	function matches(pattern, name) {
	  if (typeof pattern === 'string') {
	    return pattern.split(',').indexOf(name) > -1;
	  } else {
	    return pattern.test(name);
	  }
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  props: {
	    include: patternTypes,
	    exclude: patternTypes
	  },
	  created: function created() {
	    this.cache = Object.create(null);
	  },
	  render: function render() {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      // check pattern
	      var name = opts.Ctor.options.name || opts.tag;
	      if (name && (this.include && !matches(this.include, name) || this.exclude && matches(this.exclude, name))) {
	        return vnode;
	      }
	      var key = vnode.key == null
	      // same constructor may get registered as different local components
	      // so cid alone is not enough (#3269)
	      ? opts.Ctor.cid + (opts.tag ? "::" + opts.tag : '') : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode;
	  },
	  destroyed: function destroyed() {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI(Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () {
	    return config;
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    configDef.set = function () {
	      warn('Do not replace the Vue.config object, set individual fields instead.');
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set$1;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  // this is used to identify the "base" constructor to extend all plain-object
	  // components with in Weex's multi-instance scenarios.
	  Vue.options._base = Vue;

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$3);

	Object.defineProperty(Vue$3.prototype, '$isServer', {
	  get: isServerRendering
	});

	Vue$3.version = '2.1.8';

	/*  */

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select');
	var mustUseProp = function mustUseProp(tag, attr) {
	  return attr === 'value' && acceptValue(tag) || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function isXlink(name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
	};

	var getXlinkProp = function getXlinkProp(name) {
	  return isXlink(name) ? name.slice(6, name.length) : '';
	};

	var isFalsyAttrValue = function isFalsyAttrValue(val) {
	  return val == null || val === false;
	};

	/*  */

	function genClassForVnode(vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while (parentNode = parentNode.parent) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data);
	}

	function mergeClassData(child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class ? [child.class, parent.class] : parent.class
	  };
	}

	function genClassFromData(data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass));
	  }
	  /* istanbul ignore next */
	  return '';
	}

	function concat(a, b) {
	  return a ? b ? a + ' ' + b : a : b || '';
	}

	function stringifyClass(value) {
	  var res = '';
	  if (!value) {
	    return res;
	  }
	  if (typeof value === 'string') {
	    return value;
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if (stringified = stringifyClass(value[i])) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1);
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) {
	        res += key + ' ';
	      }
	    }
	    return res.slice(0, -1);
	  }
	  /* istanbul ignore next */
	  return res;
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML'
	};

	var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template');

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,' + 'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

	var isPreTag = function isPreTag(tag) {
	  return tag === 'pre';
	};

	var isReservedTag = function isReservedTag(tag) {
	  return isHTMLTag(tag) || isSVG(tag);
	};

	function getTagNamespace(tag) {
	  if (isSVG(tag)) {
	    return 'svg';
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math';
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement(tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true;
	  }
	  if (isReservedTag(tag)) {
	    return false;
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag];
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	  } else {
	    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	      return document.createElement('div');
	    }
	  }
	  return el;
	}

	/*  */

	function createElement$1(tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm;
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm;
	}

	function createElementNS(namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName);
	}

	function createTextNode(text) {
	  return document.createTextNode(text);
	}

	function createComment(text) {
	  return document.createComment(text);
	}

	function insertBefore(parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild(node, child) {
	  node.removeChild(child);
	}

	function appendChild(node, child) {
	  node.appendChild(child);
	}

	function parentNode(node) {
	  return node.parentNode;
	}

	function nextSibling(node) {
	  return node.nextSibling;
	}

	function tagName(node) {
	  return node.tagName;
	}

	function setTextContent(node, text) {
	  node.textContent = text;
	}

	function setAttribute(node, key, val) {
	  node.setAttribute(key, val);
	}

	var nodeOps = Object.freeze({
	  createElement: createElement$1,
	  createElementNS: createElementNS,
	  createTextNode: createTextNode,
	  createComment: createComment,
	  insertBefore: insertBefore,
	  removeChild: removeChild,
	  appendChild: appendChild,
	  parentNode: parentNode,
	  nextSibling: nextSibling,
	  tagName: tagName,
	  setTextContent: setTextContent,
	  setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create(_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update(oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy(vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef(vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) {
	    return;
	  }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'activate', 'update', 'remove', 'destroy'];

	function isUndef(s) {
	  return s == null;
	}

	function isDef(s) {
	  return s != null;
	}

	function sameVnode(vnode1, vnode2) {
	  return vnode1.key === vnode2.key && vnode1.tag === vnode2.tag && vnode1.isComment === vnode2.isComment && !vnode1.data === !vnode2.data;
	}

	function createKeyToOldIdx(children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) {
	      map[key] = i;
	    }
	  }
	  return map;
	}

	function createPatchFunction(backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) {
	        cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);
	      }
	    }
	  }

	  function emptyNodeAt(elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
	  }

	  function createRmCb(childElm, listeners) {
	    function remove$$1() {
	      if (--remove$$1.listeners === 0) {
	        removeNode(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1;
	  }

	  function removeNode(el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html / v-text
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  var inPre = 0;
	  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {
	    vnode.isRootInsert = !nested; // for transition enter check
	    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
	      return;
	    }

	    var data = vnode.data;
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (data && data.pre) {
	          inPre++;
	        }
	        if (!inPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) && config.isUnknownElement(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
	        }
	      }
	      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
	      setScope(vnode);

	      /* istanbul ignore if */
	      {
	        createChildren(vnode, children, insertedVnodeQueue);
	        if (isDef(data)) {
	          invokeCreateHooks(vnode, insertedVnodeQueue);
	        }
	        insert(parentElm, vnode.elm, refElm);
	      }

	      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
	        inPre--;
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	      insert(parentElm, vnode.elm, refElm);
	    }
	  }

	  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i = vnode.data;
	    if (isDef(i)) {
	      var isReactivated = isDef(vnode.child) && i.keepAlive;
	      if (isDef(i = i.hook) && isDef(i = i.init)) {
	        i(vnode, false /* hydrating */, parentElm, refElm);
	      }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        if (isReactivated) {
	          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
	        }
	        return true;
	      }
	    }
	  }

	  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
	    var i;
	    // hack for #4339: a reactivated component with inner transition
	    // does not trigger because the inner node's created hooks are not called
	    // again. It's not ideal to involve module-specific logic in here but
	    // there doesn't seem to be a better way to do it.
	    var innerNode = vnode;
	    while (innerNode.child) {
	      innerNode = innerNode.child._vnode;
	      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
	        for (i = 0; i < cbs.activate.length; ++i) {
	          cbs.activate[i](emptyNode, innerNode);
	        }
	        insertedVnodeQueue.push(innerNode);
	        break;
	      }
	    }
	    // unlike a newly created component,
	    // a reactivated keep-alive component doesn't insert itself
	    insert(parentElm, vnode.elm, refElm);
	  }

	  function insert(parent, elm, ref) {
	    if (parent) {
	      if (ref) {
	        nodeOps.insertBefore(parent, elm, ref);
	      } else {
	        nodeOps.appendChild(parent, elm);
	      }
	    }
	  }

	  function createChildren(vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable(vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag);
	  }

	  function invokeCreateHooks(vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) {
	        i.create(emptyNode, vnode);
	      }
	      if (i.insert) {
	        insertedVnodeQueue.push(vnode);
	      }
	    }
	  }

	  function initComponent(vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope(vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) && i !== vnode.context && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
	    }
	  }

	  function invokeDestroyHook(vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
	        i(vnode);
	      }
	      for (i = 0; i < cbs.destroy.length; ++i) {
	        cbs.destroy[i](vnode);
	      }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else {
	          // Text node
	          removeNode(ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook(vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeNode(vnode.elm);
	    }
	  }

	  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, refElm;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) {
	        // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) {
	        // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) {
	          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
	        }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) {
	          // New element
	          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
	            warn('It seems there are duplicate keys that is causing an update error. ' + 'Make sure each v-for item has a unique key.');
	          }
	          if (sameVnode(elmToMove, newStartVnode)) {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            // same key but different element. treat as new element
	            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return;
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic && oldVnode.isStatic && vnode.key === oldVnode.key && (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      vnode.child = oldVnode.child;
	      return;
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) {
	        cbs.update[i](oldVnode, vnode);
	      }
	      if (isDef(i = data.hook) && isDef(i = i.update)) {
	        i(oldVnode, vnode);
	      }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) {
	          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
	        }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) {
	          nodeOps.setTextContent(elm, '');
	        }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
	        i(oldVnode, vnode);
	      }
	    }
	  }

	  function invokeInsertHook(vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  // list of modules that can skip create hook during hydration because they
	  // are already rendered on the client or has no need for initialization
	  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

	  // Note: this is a browser-only function so we can assume elms are DOM nodes.
	  function hydrate(elm, vnode, insertedVnodeQueue) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false;
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) {
	        i(vnode, true /* hydrating */);
	      }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true;
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        // empty element, allow client to pick up and populate children
	        if (!elm.hasChildNodes()) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          var childNode = elm.firstChild;
	          for (var i$1 = 0; i$1 < children.length; i$1++) {
	            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
	              childrenMatch = false;
	              break;
	            }
	            childNode = childNode.nextSibling;
	          }
	          // if childNode is not null, it means the actual childNodes list is
	          // longer than the virtual children list.
	          if (!childrenMatch || childNode) {
	            if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined' && !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
	            }
	            return false;
	          }
	        }
	      }
	      if (isDef(data)) {
	        for (var key in data) {
	          if (!isRenderedModule(key)) {
	            invokeCreateHooks(vnode, insertedVnodeQueue);
	            break;
	          }
	        }
	      }
	    } else if (elm.data !== vnode.text) {
	      elm.data = vnode.text;
	    }
	    return true;
	  }

	  function assertNodeMatch(node, vnode) {
	    if (vnode.tag) {
	      return vnode.tag.indexOf('vue-component') === 0 || vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
	    } else {
	      return node.nodeType === (vnode.isComment ? 8 : 3);
	    }
	  }

	  return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
	    if (!vnode) {
	      if (oldVnode) {
	        invokeDestroyHook(oldVnode);
	      }
	      return;
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount (likely as component), create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        // patch existing root node
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode;
	            } else if (process.env.NODE_ENV !== 'production') {
	              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        // replacing existing element
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);
	        createElm(vnode, insertedVnodeQueue, parent, nodeOps.nextSibling(elm));

	        if (vnode.parent) {
	          // component root element replaced.
	          // update parent placeholder node element, recursively
	          var ancestor = vnode.parent;
	          while (ancestor) {
	            ancestor.elm = vnode.elm;
	            ancestor = ancestor.parent;
	          }
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm;
	  };
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives(vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives(oldVnode, vnode) {
	  if (oldVnode.data.directives || vnode.data.directives) {
	    _update(oldVnode, vnode);
	  }
	}

	function _update(oldVnode, vnode) {
	  var isCreate = oldVnode === emptyNode;
	  var isDestroy = vnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function callInsert() {
	      for (var i = 0; i < dirsWithInsert.length; i++) {
	        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
	      }
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      for (var i = 0; i < dirsWithPostpatch.length; i++) {
	        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
	      }
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1(dirs, vm) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res;
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res;
	}

	function getRawDirName(dir) {
	  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
	}

	function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
	  }
	}

	var baseModules = [ref, directives];

	/*  */

	function updateAttrs(oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return;
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  // #4391: in IE9, setting type can reset value for input[type=radio]
	  /* istanbul ignore if */
	  if (isIE9 && attrs.value !== oldAttrs.value) {
	    setAttr(elm, 'value', attrs.value);
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr(el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass(oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class && (!oldData || !oldData.staticClass && !oldData.class)) {
	    return;
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	/*  */

	var target$1;

	function add$2(event, _handler, once, capture) {
	  if (once) {
	    var oldHandler = _handler;
	    _handler = function handler(ev) {
	      remove$3(event, _handler, capture);
	      arguments.length === 1 ? oldHandler(ev) : oldHandler.apply(null, arguments);
	    };
	  }
	  target$1.addEventListener(event, _handler, capture);
	}

	function remove$3(event, handler, capture) {
	  target$1.removeEventListener(event, handler, capture);
	}

	function updateDOMListeners(oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return;
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  target$1 = vnode.elm;
	  updateListeners(on, oldOn, add$2, remove$3, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps(oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return;
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    cur = props[key];
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if (key === 'textContent' || key === 'innerHTML') {
	      if (vnode.children) {
	        vnode.children.length = 0;
	      }
	      if (cur === oldProps[key]) {
	        continue;
	      }
	    }
	    // #4521: if a click event triggers update before the change event is
	    // dispatched on a checkbox/radio input, the input's checked state will
	    // be reset and fail to trigger another update.
	    /* istanbul ignore next */
	    if (key === 'checked' && !isDirty(elm, cur)) {
	      continue;
	    }
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (shouldUpdateValue(elm, vnode, strCur)) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	// check platforms/web/util/attrs.js acceptValue


	function shouldUpdateValue(elm, vnode, checkVal) {
	  if (!elm.composing && (vnode.tag === 'option' || isDirty(elm, checkVal) || isInputChanged(vnode, checkVal))) {
	    return true;
	  }
	  return false;
	}

	function isDirty(elm, checkVal) {
	  return document.activeElement !== elm && elm.value !== checkVal;
	}

	function isInputChanged(vnode, newVal) {
	  var value = vnode.elm.value;
	  var modifiers = vnode.elm._vModifiers; // injected by v-model runtime
	  if (modifiers && modifiers.number || vnode.elm.type === 'number') {
	    return toNumber(value) !== toNumber(newVal);
	  }
	  if (modifiers && modifiers.trim) {
	    return value.trim() !== newVal.trim();
	  }
	  return value !== newVal;
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var parseStyleText = cached(function (cssText) {
	  var res = {};
	  var listDelimiter = /;(?![^(]*\))/g;
	  var propertyDelimiter = /:(.+)/;
	  cssText.split(listDelimiter).forEach(function (item) {
	    if (item) {
	      var tmp = item.split(propertyDelimiter);
	      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
	    }
	  });
	  return res;
	});

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData(data) {
	  var style = normalizeStyleBinding(data.style);
	  // static style is pre-processed into an object during compilation
	  // and is always a fresh object, so it's safe to merge into it
	  return data.staticStyle ? extend(data.staticStyle, style) : style;
	}

	// normalize possible array / string values into Object
	function normalizeStyleBinding(bindingStyle) {
	  if (Array.isArray(bindingStyle)) {
	    return toObject(bindingStyle);
	  }
	  if (typeof bindingStyle === 'string') {
	    return parseStyleText(bindingStyle);
	  }
	  return bindingStyle;
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle(vnode, checkChild) {
	  var res = {};
	  var styleData;

	  if (checkChild) {
	    var childNode = vnode;
	    while (childNode.child) {
	      childNode = childNode.child._vnode;
	      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
	        extend(res, styleData);
	      }
	    }
	  }

	  if (styleData = normalizeStyleData(vnode.data)) {
	    extend(res, styleData);
	  }

	  var parentNode = vnode;
	  while (parentNode = parentNode.parent) {
	    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
	      extend(res, styleData);
	    }
	  }
	  return res;
	}

	/*  */

	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function setProp(el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else if (importantRE.test(val)) {
	    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && prop in testEl.style) {
	    return prop;
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed;
	    }
	  }
	});

	function updateStyle(oldVnode, vnode) {
	  var data = vnode.data;
	  var oldData = oldVnode.data;

	  if (!data.staticStyle && !data.style && !oldData.staticStyle && !oldData.style) {
	    return;
	  }

	  var cur, name;
	  var el = vnode.elm;
	  var oldStaticStyle = oldVnode.data.staticStyle;
	  var oldStyleBinding = oldVnode.data.style || {};

	  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
	  var oldStyle = oldStaticStyle || oldStyleBinding;

	  var style = normalizeStyleBinding(vnode.data.style) || {};

	  vnode.data.style = style.__ob__ ? extend({}, style) : style;

	  var newStyle = getStyle(vnode, true);

	  for (name in oldStyle) {
	    if (newStyle[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in newStyle) {
	    cur = newStyle[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass(el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return;
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) {
	        return el.classList.add(c);
	      });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass(el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return;
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) {
	        return el.classList.remove(c);
	      });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = inBrowser && window.requestAnimationFrame || setTimeout;
	function nextFrame(fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass(el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass(el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds(el, expectedType, cb) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) {
	    return cb();
	  }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function end() {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function onEnd(e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo(el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
	    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
	  }
	  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  };
	}

	function getTimeout(delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i]);
	  }));
	}

	function toMs(s) {
	  return Number(s.slice(0, -1)) * 1000;
	}

	/*  */

	function enter(vnode, toggleDisplay) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return;
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return;
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterToClass = data.enterToClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearToClass = data.appearToClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var context = activeInstance;
	  var transitionNode = activeInstance.$vnode;
	  while (transitionNode && transitionNode.parent) {
	    transitionNode = transitionNode.parent;
	    context = transitionNode.context;
	  }

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return;
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var toClass = isAppear ? appearToClass : enterToClass;
	  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
	  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
	  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
	  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = enterHook &&
	  // enterHook may be a bound method which exposes
	  // the length of original fn as _length
	  (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, toClass);
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.context === vnode.context && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      addTransitionClass(el, toClass);
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    toggleDisplay && toggleDisplay();
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave(vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm();
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return;
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveToClass = data.leaveToClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl = leave &&
	  // leave hook may be a bound method which exposes
	  // the length of original fn as _length
	  (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveToClass);
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave() {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return;
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        addTransitionClass(el, leaveToClass);
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition(def$$1) {
	  if (!def$$1) {
	    return;
	  }
	  /* istanbul ignore else */
	  if ((typeof def$$1 === 'undefined' ? 'undefined' : _typeof(def$$1)) === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res;
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1);
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: name + "-enter",
	    leaveClass: name + "-leave",
	    appearClass: name + "-enter",
	    enterToClass: name + "-enter-to",
	    leaveToClass: name + "-leave-to",
	    appearToClass: name + "-enter-to",
	    enterActiveClass: name + "-enter-active",
	    leaveActiveClass: name + "-leave-active",
	    appearActiveClass: name + "-enter-active"
	  };
	});

	function once(fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  };
	}

	function _enter(_, vnode) {
	  if (!vnode.data.show) {
	    enter(vnode);
	  }
	}

	var transition = inBrowser ? {
	  create: _enter,
	  activate: _enter,
	  remove: function remove(vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [attrs, klass, events, domProps, style, transition];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted(el, binding, vnode) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn("v-model is not supported on element type: <" + vnode.tag + ">. " + 'If you are working with contenteditable, it\'s recommended to ' + 'wrap a library dedicated for that purpose inside a custom component.', vnode.context);
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function cb() {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (vnode.tag === 'textarea' || el.type === 'text') {
	      el._vModifiers = binding.modifiers;
	      if (!binding.modifiers.lazy) {
	        if (!isAndroid) {
	          el.addEventListener('compositionstart', onCompositionStart);
	          el.addEventListener('compositionend', onCompositionEnd);
	        }
	        /* istanbul ignore if */
	        if (isIE9) {
	          el.vmodel = true;
	        }
	      }
	    }
	  },
	  componentUpdated: function componentUpdated(el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple ? binding.value.some(function (v) {
	        return hasNoMatchingOption(v, el.options);
	      }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected(el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    process.env.NODE_ENV !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
	    return;
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return;
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption(value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false;
	    }
	  }
	  return true;
	}

	function getValue(option) {
	  return '_value' in option ? option._value : option.value;
	}

	function onCompositionStart(e) {
	  e.target.composing = true;
	}

	function onCompositionEnd(e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger(el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode(vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.child._vnode) : vnode;
	}

	var show = {
	  bind: function bind(el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    if (value && transition && !isIE9) {
	      vnode.data.show = true;
	      enter(vnode, function () {
	        el.style.display = originalDisplay;
	      });
	    } else {
	      el.style.display = value ? originalDisplay : 'none';
	    }
	  },

	  update: function update(el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) {
	      return;
	    }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      vnode.data.show = true;
	      if (value) {
	        enter(vnode, function () {
	          el.style.display = el.__vOriginalDisplay;
	        });
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  },

	  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
	    if (!isDestroy) {
	      el.style.display = el.__vOriginalDisplay;
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterToClass: String,
	  leaveToClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String,
	  appearToClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild(vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children));
	  } else {
	    return vnode;
	  }
	}

	function extractTransitionData(comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data;
	}

	function placeholder(h, rawChild) {
	  return (/\d-keep-alive$/.test(rawChild.tag) ? h('keep-alive') : null
	  );
	}

	function hasParentTransition(vnode) {
	  while (vnode = vnode.parent) {
	    if (vnode.data.transition) {
	      return true;
	    }
	  }
	}

	function isSameChild(child, oldChild) {
	  return oldChild.key === child.key && oldChild.tag === child.tag;
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render(h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return;
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) {
	      return c.tag;
	    });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return;
	    }

	    // warn multiple elements
	    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
	      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if (process.env.NODE_ENV !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn('invalid <transition> mode: ' + mode, this.$parent);
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild;
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild;
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild);
	    }

	    var key = child.key = child.key == null || child.isStatic ? "__v" + (child.tag + this._uid) + "__" : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) {
	      return d.name === 'show';
	    })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild);
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function performLeave() {
	          delayedLeave();
	        };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild;
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render(h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c;(c.data || (c.data = {})).transition = transitionData;
	        } else if (process.env.NODE_ENV !== 'production') {
	          var opts = c.componentOptions;
	          var name = opts ? opts.Ctor.options.name || opts.tag : c.tag;
	          warn("<transition-group> children must be keyed: <" + name + ">");
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children);
	  },

	  beforeUpdate: function beforeUpdate() {
	    // force removing pass
	    this.__patch__(this._vnode, this.kept, false, // hydrating
	    true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated() {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name || 'v') + '-move';
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return;
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove(el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false;
	      }
	      if (this._hasMove != null) {
	        return this._hasMove;
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return this._hasMove = info.hasTransform;
	    }
	  }
	};

	function callPendingCbs(c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition(c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation(c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$3.config.isUnknownElement = isUnknownElement;
	Vue$3.config.isReservedTag = isReservedTag;
	Vue$3.config.getTagNamespace = getTagNamespace;
	Vue$3.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$3.options.directives, platformDirectives);
	extend(Vue$3.options.components, platformComponents);

	// install platform patch function
	Vue$3.prototype.__patch__ = inBrowser ? patch$1 : noop;

	// wrap mount
	Vue$3.prototype.$mount = function (el, hydrating) {
	  el = el && inBrowser ? query(el) : undefined;
	  return this._mount(el, hydrating);
	};

	if (process.env.NODE_ENV !== 'production' && inBrowser && typeof console !== 'undefined') {
	  console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
	}

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$3);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && !isEdge && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode(content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0;
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var decoder;

	function decode(html) {
	  decoder = decoder || document.createElement('div');
	  decoder.innerHTML = html;
	  return decoder.textContent;
	}

	/*  */

	var isUnaryTag = makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' + 'link,meta,param,source,track,wbr', true);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source', true);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' + 'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' + 'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' + 'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' + 'title,tr,track', true);

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	// attr value double quotes
	/"([^"]*)"+/.source,
	// attr value, single quotes
	/'([^']*)'+/.source,
	// attr value, no quotes
	/([^\s"'=<>`]+)/.source];
	var attribute = new RegExp('^\\s*' + singleAttrIdentifier.source + '(?:\\s*(' + singleAttrAssign.source + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?');

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function hasLang(attr) {
	  return attr.name === 'lang' && attr.value !== 'html';
	};
	var isSpecialTag = function isSpecialTag(tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true;
	  }
	  if (isSFC && stack.length === 1) {
	    // top-level template that has no pre-processor
	    if (tag === 'template' && !stack[0].attrs.some(hasLang)) {
	      return false;
	    } else {
	      return true;
	    }
	  }
	  return false;
	};

	var reCache = {};

	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;

	function decodeAttr(value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value.replace(ltRE, '<').replace(gtRE, '>').replace(ampRE, '&').replace(quoteRE, '"');
	}

	function parseHTML(html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue;
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue;
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue;
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue;
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue;
	        }
	      }

	      var text = void 0,
	          rest$1 = void 0,
	          next = void 0;
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (!endTag.test(rest$1) && !startTagOpen.test(rest$1) && !comment.test(rest$1) && !conditionalComment.test(rest$1)) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) {
	            break;
	          }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }

	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }

	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text.replace(/<!--([\s\S]*?)-->/g, '$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return '';
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }

	    if (html === last && options.chars) {
	      options.chars(html);
	      break;
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function advance(n) {
	    index += n;
	    html = html.substring(n);
	  }

	  function parseStartTag() {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match;
	      }
	    }
	  }

	  function handleStartTag(match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') {
	          delete args[3];
	        }
	        if (args[4] === '') {
	          delete args[4];
	        }
	        if (args[5] === '') {
	          delete args[5];
	        }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(value, options.shouldDecodeNewlines)
	      };
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag(tag, tagName, start, end) {
	    var pos;
	    if (start == null) {
	      start = index;
	    }
	    if (end == null) {
	      end = index;
	    }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break;
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}

	/*  */

	function parseFilters(exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var inTemplateString = false;
	  var inRegex = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      if (c === 0x27 && prev !== 0x5C) {
	        inSingle = false;
	      }
	    } else if (inDouble) {
	      if (c === 0x22 && prev !== 0x5C) {
	        inDouble = false;
	      }
	    } else if (inTemplateString) {
	      if (c === 0x60 && prev !== 0x5C) {
	        inTemplateString = false;
	      }
	    } else if (inRegex) {
	      if (c === 0x2f && prev !== 0x5C) {
	        inRegex = false;
	      }
	    } else if (c === 0x7C && // pipe
	    exp.charCodeAt(i + 1) !== 0x7C && exp.charCodeAt(i - 1) !== 0x7C && !curly && !square && !paren) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x60:
	          inTemplateString = true;break; // `
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	      if (c === 0x2f) {
	        // /
	        var j = i - 1;
	        var p = void 0;
	        // find first non-whitespace prev char
	        for (; j >= 0; j--) {
	          p = exp.charAt(j);
	          if (p !== ' ') {
	            break;
	          }
	        }
	        if (!p || !/[\w$]/.test(p)) {
	          inRegex = true;
	        }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  function pushFilter() {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }

	  return expression;
	}

	function wrapFilter(exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return "_f(\"" + filter + "\")(" + exp + ")";
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return "_f(\"" + name + "\")(" + exp + "," + args;
	  }
	}

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g');
	});

	function parseText(text, delimiters) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while (match = tagRE.exec(text)) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push("_s(" + exp + ")");
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+');
	}

	/*  */

	function baseWarn(msg) {
	  console.error("[Vue parser]: " + msg);
	}

	function pluckModuleFunction(modules, key) {
	  return modules ? modules.map(function (m) {
	    return m[key];
	  }).filter(function (_) {
	    return _;
	  }) : [];
	}

	function addProp(el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr(el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective(el, name, rawName, value, arg, modifiers) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler(el, name, value, modifiers, important) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  if (modifiers && modifiers.once) {
	    delete modifiers.once;
	    name = '~' + name; // mark the event as once
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}

	function getBindingAttr(el, name, getStatic) {
	  var dynamicValue = getAndRemoveAttr(el, ':' + name) || getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return parseFilters(dynamicValue);
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue);
	    }
	  }
	}

	function getAndRemoveAttr(el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break;
	      }
	    }
	  }
	  return val;
	}

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;

	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */

	function parseModel(val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;

	  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
	    return {
	      exp: val,
	      idx: null
	    };
	  }

	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }

	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  };
	}

	function next() {
	  return str.charCodeAt(++index$1);
	}

	function eof() {
	  return index$1 >= len;
	}

	function isStringStart(chr) {
	  return chr === 0x22 || chr === 0x27;
	}

	function parseBracket(chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue;
	    }
	    if (chr === 0x5B) {
	      inBracket++;
	    }
	    if (chr === 0x5D) {
	      inBracket--;
	    }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break;
	    }
	  }
	}

	function parseString(chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break;
	    }
	  }
	}

	/*  */

	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(decode);

	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;

	/**
	 * Convert HTML string to AST.
	 */
	function parse(template, options) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start(tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = currentParent && currentParent.ns || platformGetTagNamespace(tag);

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }

	      if (isForbiddenTag(element) && !isServerRendering()) {
	        element.forbidden = true;
	        process.env.NODE_ENV !== 'production' && warn$1('Templates should only be responsible for mapping the state to the ' + 'UI. Avoid placing tags with side-effects in your templates, such as ' + "<" + tag + ">" + ', as they will not be parsed.');
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }

	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);

	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;

	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }

	      function checkRootConstraints(el) {
	        if (process.env.NODE_ENV !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1("Cannot use <" + el.tag + "> as component root element because it may " + 'contain multiple nodes:\n' + template);
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1('Cannot use v-for on stateful component root element because ' + 'it renders multiple elements:\n' + template);
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow root elements with v-if, v-else-if and v-else
	        if (root.if && (element.elseif || element.else)) {
	          checkRootConstraints(element);
	          addIfCondition(root, {
	            exp: element.elseif,
	            block: element
	          });
	        } else if (process.env.NODE_ENV !== 'production' && !warned) {
	          warned = true;
	          warn$1("Component template should contain exactly one root element:" + "\n\n" + template + "\n\n" + "If you are using v-if on multiple elements, " + "use v-else-if to chain them instead.");
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.elseif || element.else) {
	          processIfConditions(element, currentParent);
	        } else if (element.slotScope) {
	          // scoped slot
	          currentParent.plain = false;
	          var name = element.slotTarget || 'default';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },

	    end: function end() {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },

	    chars: function chars(text) {
	      if (!currentParent) {
	        if (process.env.NODE_ENV !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1('Component template requires a root element, rather than just text:\n\n' + template);
	        }
	        return;
	      }
	      // IE textarea placeholder bug
	      /* istanbul ignore if */
	      if (isIE && currentParent.tag === 'textarea' && currentParent.attrsMap.placeholder === text) {
	        return;
	      }
	      var children = currentParent.children;
	      text = inPre || text.trim() ? decodeHTMLCached(text)
	      // only preserve whitespace if its not right after a starting tag
	      : preserveWhitespace && children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else if (text !== ' ' || children[children.length - 1].text !== ' ') {
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root;
	}

	function processPre(el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}

	function processRawAttrs(el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}

	function processKey(el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}

	function processRef(el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}

	function processFor(el) {
	  var exp;
	  if (exp = getAndRemoveAttr(el, 'v-for')) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      process.env.NODE_ENV !== 'production' && warn$1("Invalid v-for expression: " + exp);
	      return;
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}

	function processIf(el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	    addIfCondition(el, {
	      exp: exp,
	      block: el
	    });
	  } else {
	    if (getAndRemoveAttr(el, 'v-else') != null) {
	      el.else = true;
	    }
	    var elseif = getAndRemoveAttr(el, 'v-else-if');
	    if (elseif) {
	      el.elseif = elseif;
	    }
	  }
	}

	function processIfConditions(el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    addIfCondition(prev, {
	      exp: el.elseif,
	      block: el
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn$1("v-" + (el.elseif ? 'else-if="' + el.elseif + '"' : 'else') + " " + "used on element <" + el.tag + "> without corresponding v-if.");
	  }
	}

	function findPrevElement(children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].type === 1) {
	      return children[i];
	    } else {
	      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
	        warn$1("text \"" + children[i].text.trim() + "\" between v-if and v-else(-if) " + "will be ignored.");
	      }
	      children.pop();
	    }
	  }
	}

	function addIfCondition(el, condition) {
	  if (!el.ifConditions) {
	    el.ifConditions = [];
	  }
	  el.ifConditions.push(condition);
	}

	function processOnce(el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}

	function processSlot(el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	    if (process.env.NODE_ENV !== 'production' && el.key) {
	      warn$1("`key` does not work on <slot> because slots are abstract outlets " + "and can possibly expand into multiple elements. " + "Use the key on a wrapping element instead.");
	    }
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
	    }
	    if (el.tag === 'template') {
	      el.slotScope = getAndRemoveAttr(el, 'scope');
	    }
	  }
	}

	function processComponent(el) {
	  var binding;
	  if (binding = getBindingAttr(el, 'is')) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}

	function processAttrs(el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) {
	        // v-bind
	        name = name.replace(bindRE, '');
	        value = parseFilters(value);
	        isProp = false;
	        if (modifiers) {
	          if (modifiers.prop) {
	            isProp = true;
	            name = camelize(name);
	            if (name === 'innerHtml') {
	              name = 'innerHTML';
	            }
	          }
	          if (modifiers.camel) {
	            name = camelize(name);
	          }
	        }
	        if (isProp || platformMustUseProp(el.tag, name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) {
	        // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else {
	        // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if (process.env.NODE_ENV !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      if (process.env.NODE_ENV !== 'production') {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(name + "=\"" + value + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div id="{{ val }}">, use <div :id="val">.');
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	      // #4530 also bind special attributes as props even if they are static
	      // so that patches between dynamic/static are consistent
	      if (platformMustUseProp(el.tag, name)) {
	        if (name === 'value') {
	          addProp(el, name, JSON.stringify(value));
	        } else {
	          addProp(el, name, 'true');
	        }
	      }
	    }
	  }
	}

	function checkInFor(el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true;
	    }
	    parent = parent.parent;
	  }
	  return false;
	}

	function parseModifiers(name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) {
	      ret[m.slice(1)] = true;
	    });
	    return ret;
	  }
	}

	function makeAttrsMap(attrs) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if (process.env.NODE_ENV !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map;
	}

	function isForbiddenTag(el) {
	  return el.tag === 'style' || el.tag === 'script' && (!el.attrsMap.type || el.attrsMap.type === 'text/javascript');
	}

	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug(attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res;
	}

	function checkForAliasModel(el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1("<" + el.tag + " v-model=\"" + value + "\">: " + "You are binding v-model directly to a v-for iteration alias. " + "This will not be able to modify the v-for source array because " + "writing to the alias is like modifying a function local variable. " + "Consider using an array of objects and use v-model on an object property instead.");
	    }
	    _el = _el.parent;
	  }
	}

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize(root, options) {
	  if (!root) {
	    return;
	  }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || no;
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1(keys) {
	  return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs' + (keys ? ',' + keys : ''));
	}

	function markStatic(node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    // do not make component slot content static. this avoids
	    // 1. components not able to mutate slot nodes
	    // 2. static slot content fails for hot-reloading
	    if (!isPlatformReservedTag(node.tag) && node.tag !== 'slot' && node.attrsMap['inline-template'] == null) {
	      return;
	    }
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}

	function markStaticRoots(node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    // For a node to qualify as a static root, it should have children that
	    // are not just static text. Otherwise the cost of hoisting out will
	    // outweigh the benefits and it's better off to just always render it fresh.
	    if (node.static && node.children.length && !(node.children.length === 1 && node.children[0].type === 3)) {
	      node.staticRoot = true;
	      return;
	    } else {
	      node.staticRoot = false;
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	    if (node.ifConditions) {
	      walkThroughConditionsBlocks(node.ifConditions, isInFor);
	    }
	  }
	}

	function walkThroughConditionsBlocks(conditionBlocks, isInFor) {
	  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
	    markStaticRoots(conditionBlocks[i].block, isInFor);
	  }
	}

	function isStatic(node) {
	  if (node.type === 2) {
	    // expression
	    return false;
	  }
	  if (node.type === 3) {
	    // text
	    return true;
	  }
	  return !!(node.pre || !node.hasBindings && // no dynamic bindings
	  !node.if && !node.for && // not v-if or v-for or v-else
	  !isBuiltInTag(node.tag) && // not a built-in
	  isPlatformReservedTag(node.tag) && // not a component
	  !isDirectChildOfTemplateFor(node) && Object.keys(node).every(isStaticKey));
	}

	function isDirectChildOfTemplateFor(node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false;
	    }
	    if (node.for) {
	      return true;
	    }
	  }
	  return false;
	}

	/*  */

	var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;',
	  ctrl: 'if(!$event.ctrlKey)return;',
	  shift: 'if(!$event.shiftKey)return;',
	  alt: 'if(!$event.altKey)return;',
	  meta: 'if(!$event.metaKey)return;'
	};

	function genHandlers(events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + genHandler(name, events[name]) + ",";
	  }
	  return res.slice(0, -1) + '}';
	}

	function genHandler(name, handler) {
	  if (!handler) {
	    return 'function(){}';
	  } else if (Array.isArray(handler)) {
	    return "[" + handler.map(function (handler) {
	      return genHandler(name, handler);
	    }).join(',') + "]";
	  } else if (!handler.modifiers) {
	    return fnExpRE.test(handler.value) || simplePathRE.test(handler.value) ? handler.value : "function($event){" + handler.value + "}";
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value) ? handler.value + '($event)' : handler.value;
	    return 'function($event){' + code + handlerCode + '}';
	  }
	}

	function genKeyFilter(keys) {
	  return "if(" + keys.map(genFilterCode).join('&&') + ")return;";
	}

	function genFilterCode(key) {
	  var keyVal = parseInt(key, 10);
	  if (keyVal) {
	    return "$event.keyCode!==" + keyVal;
	  }
	  var alias = keyCodes[key];
	  return "_k($event.keyCode," + JSON.stringify(key) + (alias ? ',' + JSON.stringify(alias) : '') + ")";
	}

	/*  */

	function bind$2(el, dir) {
	  el.wrapData = function (code) {
	    return "_b(" + code + ",'" + el.tag + "'," + dir.value + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")";
	  };
	}

	/*  */

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};

	/*  */

	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var isPlatformReservedTag$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;

	function generate(ast, options) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  isPlatformReservedTag$1 = options.isReservedTag || no;
	  var code = ast ? genElement(ast) : '_c("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: "with(this){return " + code + "}",
	    staticRenderFns: currentStaticRenderFns
	  };
	}

	function genElement(el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el);
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el);
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el);
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el);
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0';
	  } else if (el.tag === 'slot') {
	    return genSlot(el);
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);

	      var children = el.inlineTemplate ? null : genChildren(el, true);
	      code = "_c('" + el.tag + "'" + (data ? "," + data : '') + (children ? "," + children : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code;
	  }
	}

	// hoist static sub-trees out
	function genStatic(el) {
	  el.staticProcessed = true;
	  staticRenderFns.push("with(this){return " + genElement(el) + "}");
	  return "_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")";
	}

	// v-once
	function genOnce(el) {
	  el.onceProcessed = true;
	  if (el.if && !el.ifProcessed) {
	    return genIf(el);
	  } else if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break;
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      process.env.NODE_ENV !== 'production' && warn$2("v-once can only be used inside v-for that is keyed. ");
	      return genElement(el);
	    }
	    return "_o(" + genElement(el) + "," + onceCount++ + (key ? "," + key : "") + ")";
	  } else {
	    return genStatic(el);
	  }
	}

	function genIf(el) {
	  el.ifProcessed = true; // avoid recursion
	  return genIfConditions(el.ifConditions.slice());
	}

	function genIfConditions(conditions) {
	  if (!conditions.length) {
	    return '_e()';
	  }

	  var condition = conditions.shift();
	  if (condition.exp) {
	    return "(" + condition.exp + ")?" + genTernaryExp(condition.block) + ":" + genIfConditions(conditions);
	  } else {
	    return "" + genTernaryExp(condition.block);
	  }

	  // v-if with v-once should generate code like (a)?_m(0):_m(1)
	  function genTernaryExp(el) {
	    return el.once ? genOnce(el) : genElement(el);
	  }
	}

	function genFor(el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? "," + el.iterator1 : '';
	  var iterator2 = el.iterator2 ? "," + el.iterator2 : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," + "function(" + alias + iterator1 + iterator2 + "){" + "return " + genElement(el) + '})';
	}

	function genData(el) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) {
	    data += dirs + ',';
	  }

	  // key
	  if (el.key) {
	    data += "key:" + el.key + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + el.ref + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // pre
	  if (el.pre) {
	    data += "pre:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + el.tag + "\",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + genProps(el.attrs) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + genProps(el.props) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += genHandlers(el.events) + ",";
	  }
	  if (el.nativeEvents) {
	    data += genHandlers(el.nativeEvents, true) + ",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + el.slotTarget + ",";
	  }
	  // scoped slots
	  if (el.scopedSlots) {
	    data += genScopedSlots(el.scopedSlots) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var inlineTemplate = genInlineTemplate(el);
	    if (inlineTemplate) {
	      data += inlineTemplate + ",";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data;
	}

	function genDirectives(el) {
	  var dirs = el.directives;
	  if (!dirs) {
	    return;
	  }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + dir.name + "\",rawName:\"" + dir.rawName + "\"" + (dir.value ? ",value:(" + dir.value + "),expression:" + JSON.stringify(dir.value) : '') + (dir.arg ? ",arg:\"" + dir.arg + "\"" : '') + (dir.modifiers ? ",modifiers:" + JSON.stringify(dir.modifiers) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']';
	  }
	}

	function genInlineTemplate(el) {
	  var ast = el.children[0];
	  if (process.env.NODE_ENV !== 'production' && (el.children.length > 1 || ast.type !== 1)) {
	    warn$2('Inline-template components must have exactly one child element.');
	  }
	  if (ast.type === 1) {
	    var inlineRenderFns = generate(ast, currentOptions);
	    return "inlineTemplate:{render:function(){" + inlineRenderFns.render + "},staticRenderFns:[" + inlineRenderFns.staticRenderFns.map(function (code) {
	      return "function(){" + code + "}";
	    }).join(',') + "]}";
	  }
	}

	function genScopedSlots(slots) {
	  return "scopedSlots:{" + Object.keys(slots).map(function (key) {
	    return genScopedSlot(key, slots[key]);
	  }).join(',') + "}";
	}

	function genScopedSlot(key, el) {
	  return key + ":function(" + String(el.attrsMap.scope) + "){" + "return " + (el.tag === 'template' ? genChildren(el) || 'void 0' : genElement(el)) + "}";
	}

	function genChildren(el, checkSkip) {
	  var children = el.children;
	  if (children.length) {
	    var el$1 = children[0];
	    // optimize single v-for
	    if (children.length === 1 && el$1.for && el$1.tag !== 'template' && el$1.tag !== 'slot') {
	      return genElement(el$1);
	    }
	    var normalizationType = getNormalizationType(children);
	    return "[" + children.map(genNode).join(',') + "]" + (checkSkip ? normalizationType ? "," + normalizationType : '' : '');
	  }
	}

	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
	function getNormalizationType(children) {
	  var res = 0;
	  for (var i = 0; i < children.length; i++) {
	    var el = children[i];
	    if (needsNormalization(el) || el.if && el.ifConditions.some(function (c) {
	      return needsNormalization(c.block);
	    })) {
	      res = 2;
	      break;
	    }
	    if (maybeComponent(el) || el.if && el.ifConditions.some(function (c) {
	      return maybeComponent(c.block);
	    })) {
	      res = 1;
	    }
	  }
	  return res;
	}

	function needsNormalization(el) {
	  return el.for || el.tag === 'template' || el.tag === 'slot';
	}

	function maybeComponent(el) {
	  return el.type === 1 && !isPlatformReservedTag$1(el.tag);
	}

	function genNode(node) {
	  if (node.type === 1) {
	    return genElement(node);
	  } else {
	    return genText(node);
	  }
	}

	function genText(text) {
	  return "_v(" + (text.type === 2 ? text.expression // no need for () because already wrapped in _s()
	  : transformSpecialNewlines(JSON.stringify(text.text))) + ")";
	}

	function genSlot(el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  var res = "_t(" + slotName + (children ? "," + children : '');
	  var attrs = el.attrs && "{" + el.attrs.map(function (a) {
	    return camelize(a.name) + ":" + a.value;
	  }).join(',') + "}";
	  var bind$$1 = el.attrsMap['v-bind'];
	  if ((attrs || bind$$1) && !children) {
	    res += ",null";
	  }
	  if (attrs) {
	    res += "," + attrs;
	  }
	  if (bind$$1) {
	    res += (attrs ? '' : ',null') + "," + bind$$1;
	  }
	  return res + ')';
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent(componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el, true);
	  return "_c(" + componentName + "," + genData(el) + (children ? "," + children : '') + ")";
	}

	function genProps(props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + prop.name + "\":" + transformSpecialNewlines(prop.value) + ",";
	  }
	  return res.slice(0, -1);
	}

	// #3895, #4268
	function transformSpecialNewlines(text) {
	  return text.replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
	}

	/*  */

	/**
	 * Compile a template.
	 */
	function compile$1(template, options) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  };
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + ('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' + 'super,throw,while,yield,delete,export,import,return,switch,default,' + 'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors(ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors;
	}

	function checkNode(node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, "v-for=\"" + value + "\"", errors);
	          } else {
	            checkExpression(value, name + "=\"" + value + "\"", errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}

	function checkFor(node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier(ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push("- invalid " + type + " \"" + ident + "\" in expression: " + text);
	  }
	}

	function checkExpression(exp, text, errors) {
	  try {
	    new Function("return " + exp);
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push("- avoid using JavaScript keyword as property name: " + "\"" + keywordMatch[0] + "\" in expression " + text);
	    } else {
	      errors.push("- invalid expression: " + text);
	    }
	  }
	}

	/*  */

	function transformNode(el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if (process.env.NODE_ENV !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn("class=\"" + staticClass + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div class="{{ val }}">, use <div :class="val">.');
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}

	function genData$1(el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + el.staticClass + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + el.classBinding + ",";
	  }
	  return data;
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};

	/*  */

	function transformNode$1(el, options) {
	  var warn = options.warn || baseWarn;
	  var staticStyle = getAndRemoveAttr(el, 'style');
	  if (staticStyle) {
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production') {
	      var expression = parseText(staticStyle, options.delimiters);
	      if (expression) {
	        warn("style=\"" + staticStyle + "\": " + 'Interpolation inside attributes has been removed. ' + 'Use v-bind or the colon shorthand instead. For example, ' + 'instead of <div style="{{ val }}">, use <div :style="val">.');
	      }
	    }
	    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
	  }

	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}

	function genData$2(el) {
	  var data = '';
	  if (el.staticStyle) {
	    data += "staticStyle:" + el.staticStyle + ",";
	  }
	  if (el.styleBinding) {
	    data += "style:(" + el.styleBinding + "),";
	  }
	  return data;
	}

	var style$1 = {
	  staticKeys: ['staticStyle'],
	  transformNode: transformNode$1,
	  genData: genData$2
	};

	var modules$1 = [klass$1, style$1];

	/*  */

	var warn$3;

	function model$1(el, dir, _warn) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  if (process.env.NODE_ENV !== 'production') {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3("<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" + "v-model does not support dynamic input types. Use v-if branches instead.");
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true;
	}

	function genCheckboxModel(el, value, modifiers) {
	  if (process.env.NODE_ENV !== 'production' && el.attrsMap.checked != null) {
	    warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked', "Array.isArray(" + value + ")" + "?_i(" + value + "," + valueBinding + ")>-1" + (trueValueBinding === 'true' ? ":(" + value + ")" : ":_q(" + value + "," + trueValueBinding + ")"));
	  addHandler(el, 'change', "var $$a=" + value + "," + '$$el=$event.target,' + "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" + 'if(Array.isArray($$a)){' + "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," + '$$i=_i($$a,$$v);' + "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" + "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" + "}else{" + value + "=$$c}", null, true);
	}

	function genRadioModel(el, value, modifiers) {
	  if (process.env.NODE_ENV !== 'production' && el.attrsMap.checked != null) {
	    warn$3("<" + el.tag + " v-model=\"" + value + "\" checked>:\n" + "inline checked attributes will be ignored when using v-model. " + 'Declare initial values in the component\'s data option instead.');
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? "_n(" + valueBinding + ")" : valueBinding;
	  addProp(el, 'checked', "_q(" + value + "," + valueBinding + ")");
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel(el, value, modifiers) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3("<" + el.tag + " v-model=\"" + value + "\" value=\"" + el.attrsMap.value + "\">:\n" + 'inline value attributes will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3("<textarea v-model=\"" + value + "\">:\n" + 'inline content inside <textarea> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	    }
	  }

	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || isIE && type === 'range' ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';

	  var valueExpression = isNative ? "$event.target.value" + (trim ? '.trim()' : '') : trim ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
	  valueExpression = number || type === 'number' ? "_n(" + valueExpression + ")" : valueExpression;

	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }

	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if (process.env.NODE_ENV !== 'production' && type === 'file') {
	    warn$3("<" + el.tag + " v-model=\"" + value + "\" type=\"file\">:\n" + "File inputs are read only. Use a v-on:change listener instead.");
	  }

	  addProp(el, 'value', isNative ? "_s(" + value + ")" : "(" + value + ")");
	  addHandler(el, event, code, null, true);
	  if (trim || number || type === 'number') {
	    addHandler(el, 'blur', '$forceUpdate()');
	  }
	}

	function genSelect(el, value, modifiers) {
	  if (process.env.NODE_ENV !== 'production') {
	    el.children.some(checkOptionWarning);
	  }

	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" + ".call($event.target.options,function(o){return o.selected})" + ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" + "return " + (number ? '_n(val)' : 'val') + "})" + (el.attrsMap.multiple == null ? '[0]' : '');

	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning(option) {
	  if (option.type === 1 && option.tag === 'option' && option.attrsMap.selected != null) {
	    warn$3("<select v-model=\"" + option.parent.attrsMap['v-model'] + "\">:\n" + 'inline selected attributes on <option> will be ignored when using v-model. ' + 'Declare initial values in the component\'s data option instead.');
	    return true;
	  }
	  return false;
	}

	function genAssignmentCode(value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return value + "=" + assignment;
	  } else {
	    return "var $$exp = " + modelRs.exp + ", $$idx = " + modelRs.idx + ";" + "if (!Array.isArray($$exp)){" + value + "=" + assignment + "}" + "else{$$exp.splice($$idx, 1, " + assignment + ")}";
	  }
	}

	/*  */

	function text(el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', "_s(" + dir.value + ")");
	  }
	}

	/*  */

	function html(el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', "_s(" + dir.value + ")");
	  }
	}

	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};

	/*  */

	var cache = Object.create(null);

	var baseOptions = {
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};

	function compile$$1(template, options) {
	  options = options ? extend(extend({}, baseOptions), options) : baseOptions;
	  return compile$1(template, options);
	}

	function compileToFunctions(template, options, vm) {
	  var _warn = options && options.warn || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn('It seems you are using the standalone build of Vue.js in an ' + 'environment with Content Security Policy that prohibits unsafe-eval. ' + 'The template compiler cannot work in this environment. Consider ' + 'relaxing the policy to allow unsafe-eval or pre-compiling your ' + 'templates into render functions.');
	      }
	    }
	  }
	  var key = options && options.delimiters ? String(options.delimiters) + template : template;
	  if (cache[key]) {
	    return cache[key];
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) {
	      return fn === noop;
	    })) {
	      _warn("failed to compile template:\n\n" + template + "\n\n" + detectErrors(compiled.ast).join('\n') + '\n\n', vm);
	    }
	  }
	  return cache[key] = res;
	}

	function makeFunction(code) {
	  try {
	    return new Function(code);
	  } catch (e) {
	    return noop;
	  }
	}

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML;
	});

	var mount = Vue$3.prototype.$mount;
	Vue$3.prototype.$mount = function (el, hydrating) {
	  el = el && query(el);

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    process.env.NODE_ENV !== 'production' && warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");
	    return this;
	  }

	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	          /* istanbul ignore if */
	          if (process.env.NODE_ENV !== 'production' && !template) {
	            warn("Template element not found or is empty: " + options.template, this);
	          }
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          warn('invalid template option:' + template, this);
	        }
	        return this;
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating);
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}

	Vue$3.compile = compileToFunctions;

	module.exports = Vue$3;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(4)

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/conner/Projects/easy-snaps/src/vue-components/app.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-158a3cf8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-158a3cf8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] app.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _percent = __webpack_require__(5);

	var _percent2 = _interopRequireDefault(_percent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _data = {
	  notice: [],
	  targetHours: 40,
	  projects: [],
	  gbu: { good: '', bad: '', ugly: '' }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  data: function data() {
	    return _data;
	  },

	  computed: {
	    snapshot: function snapshot() {
	      return {
	        notice: this.notice,
	        gbu: this.gbu,
	        projects: this.projects
	      };
	    },
	    usedHours: function usedHours() {
	      return this.projects.reduce(function (a, b) {
	        return a + b.hours;
	      }, 0);
	    },
	    displayPercentUsed: function displayPercentUsed() {
	      return (0, _percent2.default)(this.projects.reduce(function (a, b) {
	        return a + b.hours;
	      }, 0) / this.targetHours);
	    },
	    percentUsed: function percentUsed() {
	      return (0, _percent2.default)(this.projects.reduce(function (a, b) {
	        return a + b.hours;
	      }, 0) / this.targetHours, 2, false);
	    }
	  },
	  mounted: function mounted() {
	    console.log('App Started.');
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (value, decimals, symbol) {
	  if (!value) {
	    value = 0;
	  }

	  if (!decimals) {
	    decimals = 0;
	  }

	  if (symbol !== false) {
	    symbol = true;
	  }

	  value = value * 100;
	  value = Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
	  if (symbol) {
	    value = value + '%';
	  }
	  return value;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "application row"
	  }, [_c('div', {
	    staticClass: "small-12 column"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "small-12 medium-6 column"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "small-12 medium-6 column"
	  }, [_c('label', [_vm._v("Total Hours Available This Week"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.targetHours),
	      expression: "targetHours"
	    }],
	    attrs: {
	      "type": "number"
	    },
	    domProps: {
	      "value": _vm._s(_vm.targetHours)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.targetHours = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "small-12 medium-6 column"
	  }, [_c('label', [_vm._v("Total Hours Accounted For"), _c('input', {
	    attrs: {
	      "type": "number",
	      "disabled": ""
	    },
	    domProps: {
	      "value": _vm.usedHours
	    }
	  })])])]), _vm._v(" "), (_vm.percentUsed > 87) ? _c('progress', {
	    staticClass: "success",
	    attrs: {
	      "max": "100",
	      "value": _vm.percentUsed
	    }
	  }) : (_vm.percentUsed > 60) ? _c('progress', {
	    staticClass: "warning",
	    attrs: {
	      "max": "100",
	      "value": _vm.percentUsed
	    }
	  }) : _c('progress', {
	    staticClass: "alert",
	    attrs: {
	      "max": "100",
	      "value": _vm.percentUsed
	    }
	  }), _vm._v(" "), _c('projects', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.projects),
	      expression: "projects"
	    }],
	    attrs: {
	      "totalHours": _vm.targetHours
	    },
	    domProps: {
	      "value": (_vm.projects)
	    },
	    on: {
	      "input": function($event) {
	        _vm.projects = $event
	      }
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "small-12 medium-6 column"
	  }, [_c('notice', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.notice),
	      expression: "notice"
	    }],
	    domProps: {
	      "value": (_vm.notice)
	    },
	    on: {
	      "input": function($event) {
	        _vm.notice = $event
	      }
	    }
	  }), _vm._v(" "), _c('gbu', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.gbu),
	      expression: "gbu"
	    }],
	    domProps: {
	      "value": (_vm.gbu)
	    },
	    on: {
	      "input": function($event) {
	        _vm.gbu = $event
	      }
	    }
	  })], 1)])]), _vm._v(" "), _c('div', {
	    staticClass: "small-12 medium-12 column"
	  }, [_c('snapshot', {
	    attrs: {
	      "snapshot": _vm.snapshot,
	      "totalHours": _vm.targetHours
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-158a3cf8", module.exports)
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(8)

	/* script */
	__vue_exports__ = __webpack_require__(12)

	/* template */
	var __vue_template__ = __webpack_require__(13)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/conner/Projects/easy-snaps/src/vue-components/notice.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-31af6845"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31af6845", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-31af6845", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] notice.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31af6845&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./notice.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-31af6845&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./notice.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/**\n * Foundation for Sites by ZURB\n * Version 6.3.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var id = 1;

	exports.default = {
	    props: ['value'],
	    data: function data() {
	        return {
	            lines: [],
	            line: '',
	            editing: false
	        };
	    },

	    methods: {
	        addLine: function addLine() {
	            this.lines.push({ id: newId(), text: this.line });
	            this.line = '';
	            this.editing = false;
	            this.updateValue(this.lines);
	        },
	        removeLine: function removeLine(line) {
	            this.lines.splice(this.lines.indexOf(line), 1);
	            this.updateValue(this.lines);
	        },
	        editLine: function editLine(line) {
	            this.editing = true;
	            this.lines.splice(this.lines.indexOf(line), 1);
	            this.line = line.text;
	        },
	        swapUp: function swapUp(line) {
	            this.lines.splice(this.lines.indexOf(line), 1, this.lines.splice(this.lines.indexOf(line) - 1, 1, line)[0]);
	            this.updateValue(this.lines);
	        },
	        swapDown: function swapDown(line) {
	            this.lines.splice(this.lines.indexOf(line), 1, this.lines.splice(this.lines.indexOf(line) + 1, 1, line)[0]);
	            this.updateValue(this.lines);
	        },

	        isLast: function isLast(line) {
	            return this.lines.length - 1 === this.lines.indexOf(line);
	        },
	        isFirst: function isFirst(line) {
	            return 0 === this.lines.indexOf(line);
	        },
	        updateValue: function updateValue(lines) {
	            this.$emit('input', lines.map(function (line) {
	                return line.text;
	            }));
	        }
	    }
	};


	function newId() {
	    return id++;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [(_vm.lines.length) ? _c('ul', _vm._l((_vm.lines), function(line) {
	    return _c('li', {
	      key: line.id
	    }, [_vm._v(_vm._s(line.text) + "\n               "), _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.editLine(line)
	        }
	      }
	    }, [_vm._v("Edit")]), _vm._v(" "), _c('button', {
	      staticClass: "alert button tiny",
	      on: {
	        "click": function($event) {
	          _vm.removeLine(line)
	        }
	      }
	    }, [_vm._v("Remove")]), _vm._v(" "), (!_vm.isFirst(line) && _vm.lines.length > 1) ? _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.swapUp(line)
	        }
	      }
	    }, [_vm._v("Up")]) : _vm._e(), _vm._v(" "), (!_vm.isLast(line) && _vm.lines.length > 1) ? _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.swapDown(line)
	        }
	      }
	    }, [_vm._v("Down")]) : _vm._e()])
	  })) : _vm._e(), _vm._v(" "), _c('fieldset', {
	    staticClass: "fieldset"
	  }, [(_vm.editing) ? _c('legend', [_vm._v("Edit Notice")]) : _c('legend', [_vm._v("Add Notice")]), _vm._v(" "), _c('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.line),
	      expression: "line"
	    }],
	    domProps: {
	      "value": _vm._s(_vm.line)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.line = $event.target.value
	      }
	    }
	  }), _vm._v(" "), (_vm.editing) ? _c('button', {
	    staticClass: "button success",
	    on: {
	      "click": _vm.addLine
	    }
	  }, [_vm._v("Update")]) : _c('button', {
	    staticClass: "button success",
	    on: {
	      "click": _vm.addLine
	    }
	  }, [_vm._v("Add")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-31af6845", module.exports)
	  }
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(15)

	/* script */
	__vue_exports__ = __webpack_require__(17)

	/* template */
	var __vue_template__ = __webpack_require__(18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/conner/Projects/easy-snaps/src/vue-components/output.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-3169adee"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3169adee", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3169adee", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] output.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3169adee&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./output.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3169adee&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./output.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/**\n * Foundation for Sites by ZURB\n * Version 6.3.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _percent = __webpack_require__(5);

	var _percent2 = _interopRequireDefault(_percent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: ['snapshot', 'totalHours'],
	    methods: {
	        displayPercentUsed: function displayPercentUsed(hours) {
	            return (0, _percent2.default)(hours / this.totalHours);
	        }
	    },
	    computed: {
	        availableHours: function availableHours() {
	            return this.totalHours - this.snapshot.projects.map(function (project, prev) {
	                return prev + project.hours;
	            }, 0);
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('h2', [_vm._v("Notice")]), _vm._v(" "), _c('ul', _vm._l((_vm.snapshot.notice), function(line) {
	    return _c('li', [_vm._v(_vm._s(line))])
	  })), _vm._v(" "), _c('h2', [_vm._v("Working On This Week")]), _vm._v(" "), _c('ul', [_vm._l((_vm.snapshot.projects), function(project) {
	    return _c('li', [_c('strong', [_vm._v(_vm._s(project.client))]), _vm._v(": " + _vm._s(project.description) + " | " + _vm._s(project.hours) + " Hours (" + _vm._s(_vm.displayPercentUsed(project.hours)) + ")")])
	  }), _vm._v(" "), (_vm.snapshot.projects.length > 0 && _vm.availableHours > 0) ? _c('li', [_vm._v("Available for Additional Billable Work | " + _vm._s(_vm.availableHours) + "\n    ")]) : _vm._e()], 2), _vm._v(" "), _c('h2', [_vm._v("Good, Bad, Ugly")]), _vm._v(" "), _c('ul', [(_vm.snapshot.gbu.good) ? _c('li', [_vm._v("Good: " + _vm._s(_vm.snapshot.gbu.good))]) : _vm._e(), _vm._v(" "), (_vm.snapshot.gbu.bad) ? _c('li', [_vm._v("Bad: " + _vm._s(_vm.snapshot.gbu.bad))]) : _vm._e(), _vm._v(" "), (_vm.snapshot.gbu.ugly) ? _c('li', [_vm._v("Ugly: " + _vm._s(_vm.snapshot.gbu.ugly))]) : _vm._e()])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3169adee", module.exports)
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(20)

	/* script */
	__vue_exports__ = __webpack_require__(22)

	/* template */
	var __vue_template__ = __webpack_require__(23)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/conner/Projects/easy-snaps/src/vue-components/gbu.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1b02e1dd"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1b02e1dd", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1b02e1dd", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] gbu.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1b02e1dd&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gbu.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1b02e1dd&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./gbu.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/**\n * Foundation for Sites by ZURB\n * Version 6.3.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: ['value'],
	    data: function data() {
	        return {
	            good: '',
	            bad: '',
	            ugly: ''
	        };
	    },

	    methods: {
	        change: function change() {
	            this.$emit('input', {
	                good: this.good,
	                bad: this.bad,
	                ugly: this.ugly
	            });
	        }
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('fieldset', {
	    staticClass: "fieldset"
	  }, [_c('legend', [_vm._v("Good, Bad, and Ugly")]), _vm._v(" "), _c('label', [_vm._v("Good"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.good),
	      expression: "good"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.good)
	    },
	    on: {
	      "blur": _vm.change,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.good = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Bad"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.bad),
	      expression: "bad"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.bad)
	    },
	    on: {
	      "blur": _vm.change,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.bad = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('label', [_vm._v("Ugly"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.ugly),
	      expression: "ugly"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.ugly)
	    },
	    on: {
	      "blur": _vm.change,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.ugly = $event.target.value
	      }
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1b02e1dd", module.exports)
	  }
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(25)

	/* script */
	__vue_exports__ = __webpack_require__(27)

	/* template */
	var __vue_template__ = __webpack_require__(28)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/conner/Projects/easy-snaps/src/vue-components/projects.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-050830b2"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-050830b2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-050830b2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] projects.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-050830b2&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./projects.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-050830b2&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./projects.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "/**\n * Foundation for Sites by ZURB\n * Version 6.3.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var id = 1;
	var project_template = { client: '', description: '', hours: 0 };

	exports.default = {
	    props: ['value', 'totalHours'],
	    data: function data() {
	        return {
	            projects: [],
	            project: getTemplate(),
	            editing: false
	        };
	    },

	    methods: {
	        addProject: function addProject() {
	            var new_project = Object.assign({}, this.project, { id: newId() });
	            this.projects.push(new_project);
	            this.project = getTemplate();
	            this.editing = false;
	            this.updateValue(this.projects);
	        },
	        removeProject: function removeProject(project) {
	            this.projects.splice(this.projects.indexOf(project), 1);
	            this.updateValue(this.projects);
	        },
	        editProject: function editProject(project) {
	            var client = project.client,
	                description = project.description,
	                hours = project.hours;

	            this.projects.splice(this.projects.indexOf(project), 1);
	            this.project = Object.assign({}, { 'client': client, 'description': description, 'hours': hours });
	            this.editing = true;
	        },
	        swapUp: function swapUp(project) {
	            this.projects.splice(this.projects.indexOf(project), 1, this.projects.splice(this.projects.indexOf(project) - 1, 1, project)[0]);
	            this.updateValue(this.projects);
	        },
	        swapDown: function swapDown(project) {
	            this.projects.splice(this.projects.indexOf(project), 1, this.projects.splice(this.projects.indexOf(project) + 1, 1, project)[0]);
	            this.updateValue(this.projects);
	        },

	        isLast: function isLast(project) {
	            return this.projects.length - 1 === this.projects.indexOf(project);
	        },
	        isFirst: function isFirst(project) {
	            return 0 === this.projects.indexOf(project);
	        },
	        getPercent: function getPercent(hours) {
	            return hours / this.totalHours;
	        },
	        updateValue: function updateValue(projects) {
	            this.$emit('input', projects.map(function (project) {
	                var client = project.client,
	                    description = project.description,
	                    hours = project.hours;

	                return Object.assign({}, { 'client': client, 'description': description, 'hours': hours });
	            }));
	        }
	    }
	};


	function newId() {
	    return id++;
	}
	function getTemplate() {
	    return Object.assign({}, project_template);
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [(_vm.projects.length) ? _c('ul', _vm._l((_vm.projects), function(project) {
	    return _c('li', {
	      key: project.id
	    }, [_c('strong', [_vm._v(_vm._s(project.client))]), _vm._v(" |\n                " + _vm._s(project.description) + "\n                - " + _vm._s(project.hours) + "\n               "), _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.editProject(project)
	        }
	      }
	    }, [_vm._v("Edit")]), _vm._v(" "), _c('button', {
	      staticClass: "alert button tiny",
	      on: {
	        "click": function($event) {
	          _vm.removeProject(project)
	        }
	      }
	    }, [_vm._v("Remove")]), _vm._v(" "), (!_vm.isFirst(project) && _vm.projects.length > 1) ? _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.swapUp(project)
	        }
	      }
	    }, [_vm._v("Up")]) : _vm._e(), _vm._v(" "), (!_vm.isLast(project) && _vm.projects.length > 1) ? _c('button', {
	      staticClass: "button primary tiny",
	      on: {
	        "click": function($event) {
	          _vm.swapDown(project)
	        }
	      }
	    }, [_vm._v("Down")]) : _vm._e()])
	  })) : _vm._e(), _vm._v(" "), _c('fieldset', {
	    staticClass: "fieldset"
	  }, [(_vm.editing) ? _c('legend', [_vm._v("Edit Project")]) : _c('legend', [_vm._v("Add Project")]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "small-8 column"
	  }, [_c('label', [_vm._v("Client"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.project.client),
	      expression: "project.client"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.project.client)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.project.client = $event.target.value
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "small-4 column"
	  }, [_c('label', [_vm._v("Hours"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.project.hours),
	      expression: "project.hours"
	    }],
	    attrs: {
	      "type": "number"
	    },
	    domProps: {
	      "value": _vm._s(_vm.project.hours)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.project.hours = _vm._n($event.target.value)
	      },
	      "blur": function($event) {
	        _vm.$forceUpdate()
	      }
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "small-12 column"
	  }, [_c('label', [_vm._v("Description"), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.project.description),
	      expression: "project.description"
	    }],
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.project.description)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.project.description = $event.target.value
	      }
	    }
	  })])])]), _vm._v(" "), (_vm.editing) ? _c('button', {
	    staticClass: "button success",
	    on: {
	      "click": _vm.addProject
	    }
	  }, [_vm._v("Update")]) : _c('button', {
	    staticClass: "button success",
	    on: {
	      "click": _vm.addProject
	    }
	  }, [_vm._v("Add")])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-050830b2", module.exports)
	  }
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Echo exposes an expressive API for subscribing to channels and listening
	 * for events that are broadcast by Laravel. Echo and event broadcasting
	 * allows your team to easily build robust real-time web applications.
	 */

	// import Echo from "laravel-echo"

	// window.Echo = new Echo({
	//     broadcaster: 'pusher',
	//     key: 'your-pusher-key'
	// });
	__webpack_require__(30);
	/**
	 * Vue is a modern JavaScript library for building interactive web interfaces
	 * using reactive data binding and reusable components. Vue's API is clean
	 * and simple, leaving you to focus on building your next great project.
	 */

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(32)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * Foundation for Sites by ZURB\n * Version 6.3.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n/*! normalize-scss | MIT/GPLv2 License | bit.ly/normalize-scss */\n/* Document\n       ========================================================================== */\n/**\n     * 1. Change the default font family in all browsers (opinionated).\n     * 2. Correct the line height in all browsers.\n     * 3. Prevent adjustments of font size after orientation changes in\n     *    IE on Windows Phone and in iOS.\n     */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  line-height: 1.15;\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n  /* 3 */ }\n\n/* Sections\n       ========================================================================== */\n/**\n     * Remove the margin in all browsers (opinionated).\n     */\nbody {\n  margin: 0; }\n\n/**\n     * Add the correct display in IE 9-.\n     */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n     * Correct the font size and margin on `h1` elements within `section` and\n     * `article` contexts in Chrome, Firefox, and Safari.\n     */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\nfigcaption,\nfigure {\n  display: block; }\n\n/**\n     * Add the correct margin in IE 8.\n     */\nfigure {\n  margin: 1em 40px; }\n\n/**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n     * Add the correct display in IE.\n     */\nmain {\n  display: block; }\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Links\n       ========================================================================== */\n/**\n     * 1. Remove the gray background on active links in IE 10.\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n     */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n     * Remove the outline on focused links when they are also active or hovered\n     * in all browsers (opinionated).\n     */\na:active,\na:hover {\n  outline-width: 0; }\n\n/* Text-level semantics\n       ========================================================================== */\n/**\n     * 1. Remove the bottom border in Firefox 39-.\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n     * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n     */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd `em` font sizing in all browsers.\n     */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n     * Add the correct font style in Android 4.3-.\n     */\ndfn {\n  font-style: italic; }\n\n/**\n     * Add the correct background and color in IE 9-.\n     */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n     * Add the correct font size in all browsers.\n     */\nsmall {\n  font-size: 80%; }\n\n/**\n     * Prevent `sub` and `sup` elements from affecting the line height in\n     * all browsers.\n     */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n     * Add the correct display in iOS 4-7.\n     */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n     * Remove the border on images inside links in IE 10-.\n     */\nimg {\n  border-style: none; }\n\n/**\n     * Hide the overflow in IE.\n     */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n       ========================================================================== */\n/**\n     * 1. Change the font styles in all browsers (opinionated).\n     * 2. Remove the margin in Firefox and Safari.\n     */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n     * Show the overflow in IE.\n     */\nbutton {\n  overflow: visible; }\n\n/**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n     * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n     *    controls in Android 4.\n     * 2. Correct the inability to style clickable types in iOS and Safari.\n     */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  /**\n       * Remove the inner border and padding in Firefox.\n       */\n  /**\n       * Restore the focus styles unset by the previous rule.\n       */ }\n  button::-moz-focus-inner,\n  [type=\"button\"]::-moz-focus-inner,\n  [type=\"reset\"]::-moz-focus-inner,\n  [type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0; }\n  button:-moz-focusring,\n  [type=\"button\"]:-moz-focusring,\n  [type=\"reset\"]:-moz-focusring,\n  [type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText; }\n\n/**\n     * Show the overflow in Edge.\n     */\ninput {\n  overflow: visible; }\n\n/**\n     * 1. Add the correct box sizing in IE 10-.\n     * 2. Remove the padding in IE 10-.\n     */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n  /**\n       * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n       */ }\n  [type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\n    -webkit-appearance: none; }\n\n/**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to `inherit` in Safari.\n     */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/**\n     * Change the border, margin, and padding in all browsers (opinionated).\n     */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\n/**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from `fieldset` elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    `fieldset` elements in all browsers.\n     */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  color: inherit;\n  /* 2 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n     * 1. Add the correct display in IE 9-.\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n     * Remove the default vertical scrollbar in IE.\n     */\ntextarea {\n  overflow: auto; }\n\n/* Interactive\n       ========================================================================== */\n/*\n     * Add the correct display in Edge, IE, and Firefox.\n     */\ndetails {\n  display: block; }\n\n/*\n     * Add the correct display in all browsers.\n     */\nsummary {\n  display: list-item; }\n\n/*\n     * Add the correct display in IE 9-.\n     */\nmenu {\n  display: block; }\n\n/* Scripting\n       ========================================================================== */\n/**\n     * Add the correct display in IE 9-.\n     */\ncanvas {\n  display: inline-block; }\n\n/**\n     * Add the correct display in IE.\n     */\ntemplate {\n  display: none; }\n\n/* Hidden\n       ========================================================================== */\n/**\n     * Add the correct display in IE 10-.\n     */\n[hidden] {\n  display: none; }\n\n.foundation-mq {\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  box-sizing: border-box;\n  font-size: 100%; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #fefefe;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  padding: 0;\n  appearance: none;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  line-height: 1; }\n  [data-whatinput='mouse'] button {\n    outline: 0; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.align-right {\n  justify-content: flex-end; }\n\n.align-center {\n  justify-content: center; }\n\n.align-justify {\n  justify-content: space-between; }\n\n.align-spaced {\n  justify-content: space-around; }\n\n.align-top {\n  align-items: flex-start; }\n\n.align-self-top {\n  align-self: flex-start; }\n\n.align-bottom {\n  align-items: flex-end; }\n\n.align-self-bottom {\n  align-self: flex-end; }\n\n.align-middle {\n  align-items: center; }\n\n.align-self-middle {\n  align-self: center; }\n\n.align-stretch {\n  align-items: stretch; }\n\n.align-self-stretch {\n  align-self: stretch; }\n\n.small-order-1 {\n  order: 1; }\n\n.small-order-2 {\n  order: 2; }\n\n.small-order-3 {\n  order: 3; }\n\n.small-order-4 {\n  order: 4; }\n\n.small-order-5 {\n  order: 5; }\n\n.small-order-6 {\n  order: 6; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-order-1 {\n    order: 1; }\n  .medium-order-2 {\n    order: 2; }\n  .medium-order-3 {\n    order: 3; }\n  .medium-order-4 {\n    order: 4; }\n  .medium-order-5 {\n    order: 5; }\n  .medium-order-6 {\n    order: 6; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-order-1 {\n    order: 1; }\n  .large-order-2 {\n    order: 2; }\n  .large-order-3 {\n    order: 3; }\n  .large-order-4 {\n    order: 4; }\n  .large-order-5 {\n    order: 5; }\n  .large-order-6 {\n    order: 6; } }\n\n.row {\n  max-width: 75rem;\n  margin-right: auto;\n  margin-left: auto;\n  display: flex;\n  flex-flow: row wrap; }\n  .row .row {\n    margin-right: -0.625rem;\n    margin-left: -0.625rem; }\n    @media print, screen and (min-width: 40em) {\n      .row .row {\n        margin-right: -0.9375rem;\n        margin-left: -0.9375rem; } }\n    @media print, screen and (min-width: 64em) {\n      .row .row {\n        margin-right: -0.9375rem;\n        margin-left: -0.9375rem; } }\n  .row.expanded {\n    max-width: none; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .row.is-collapse-child,\n  .row.collapse > .column > .row,\n  .row.collapse > .columns > .row {\n    margin-right: 0;\n    margin-left: 0; }\n\n.column, .columns {\n  flex: 1 1 0px;\n  padding-right: 0.625rem;\n  padding-left: 0.625rem;\n  min-width: initial; }\n  @media print, screen and (min-width: 40em) {\n    .column, .columns {\n      padding-right: 0.9375rem;\n      padding-left: 0.9375rem; } }\n\n.column.row.row, .row.row.columns {\n  display: flex; }\n\n.row .column.row.row, .row .row.row.columns {\n  margin-right: 0;\n  margin-left: 0;\n  padding-right: 0;\n  padding-left: 0; }\n\n.flex-container {\n  display: flex; }\n\n.flex-child-auto {\n  flex: 1 1 auto; }\n\n.flex-child-grow {\n  flex: 1 0 auto; }\n\n.flex-child-shrink {\n  flex: 0 1 auto; }\n\n.flex-dir-row {\n  flex-direction: row; }\n\n.flex-dir-row-reverse {\n  flex-direction: row-reverse; }\n\n.flex-dir-column {\n  flex-direction: column; }\n\n.flex-dir-column-reverse {\n  flex-direction: column-reverse; }\n\n.small-1 {\n  flex: 0 0 8.33333%;\n  max-width: 8.33333%; }\n\n.small-offset-0 {\n  margin-left: 0%; }\n\n.small-2 {\n  flex: 0 0 16.66667%;\n  max-width: 16.66667%; }\n\n.small-offset-1 {\n  margin-left: 8.33333%; }\n\n.small-3 {\n  flex: 0 0 25%;\n  max-width: 25%; }\n\n.small-offset-2 {\n  margin-left: 16.66667%; }\n\n.small-4 {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%; }\n\n.small-offset-3 {\n  margin-left: 25%; }\n\n.small-5 {\n  flex: 0 0 41.66667%;\n  max-width: 41.66667%; }\n\n.small-offset-4 {\n  margin-left: 33.33333%; }\n\n.small-6 {\n  flex: 0 0 50%;\n  max-width: 50%; }\n\n.small-offset-5 {\n  margin-left: 41.66667%; }\n\n.small-7 {\n  flex: 0 0 58.33333%;\n  max-width: 58.33333%; }\n\n.small-offset-6 {\n  margin-left: 50%; }\n\n.small-8 {\n  flex: 0 0 66.66667%;\n  max-width: 66.66667%; }\n\n.small-offset-7 {\n  margin-left: 58.33333%; }\n\n.small-9 {\n  flex: 0 0 75%;\n  max-width: 75%; }\n\n.small-offset-8 {\n  margin-left: 66.66667%; }\n\n.small-10 {\n  flex: 0 0 83.33333%;\n  max-width: 83.33333%; }\n\n.small-offset-9 {\n  margin-left: 75%; }\n\n.small-11 {\n  flex: 0 0 91.66667%;\n  max-width: 91.66667%; }\n\n.small-offset-10 {\n  margin-left: 83.33333%; }\n\n.small-12 {\n  flex: 0 0 100%;\n  max-width: 100%; }\n\n.small-offset-11 {\n  margin-left: 91.66667%; }\n\n.small-order-1 {\n  order: 1; }\n\n.small-order-2 {\n  order: 2; }\n\n.small-order-3 {\n  order: 3; }\n\n.small-order-4 {\n  order: 4; }\n\n.small-order-5 {\n  order: 5; }\n\n.small-order-6 {\n  order: 6; }\n\n.small-up-1 {\n  flex-wrap: wrap; }\n  .small-up-1 > .column, .small-up-1 > .columns {\n    flex: 0 0 100%;\n    max-width: 100%; }\n\n.small-up-2 {\n  flex-wrap: wrap; }\n  .small-up-2 > .column, .small-up-2 > .columns {\n    flex: 0 0 50%;\n    max-width: 50%; }\n\n.small-up-3 {\n  flex-wrap: wrap; }\n  .small-up-3 > .column, .small-up-3 > .columns {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n\n.small-up-4 {\n  flex-wrap: wrap; }\n  .small-up-4 > .column, .small-up-4 > .columns {\n    flex: 0 0 25%;\n    max-width: 25%; }\n\n.small-up-5 {\n  flex-wrap: wrap; }\n  .small-up-5 > .column, .small-up-5 > .columns {\n    flex: 0 0 20%;\n    max-width: 20%; }\n\n.small-up-6 {\n  flex-wrap: wrap; }\n  .small-up-6 > .column, .small-up-6 > .columns {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n\n.small-up-7 {\n  flex-wrap: wrap; }\n  .small-up-7 > .column, .small-up-7 > .columns {\n    flex: 0 0 14.28571%;\n    max-width: 14.28571%; }\n\n.small-up-8 {\n  flex-wrap: wrap; }\n  .small-up-8 > .column, .small-up-8 > .columns {\n    flex: 0 0 12.5%;\n    max-width: 12.5%; }\n\n.small-collapse > .column, .small-collapse > .columns {\n  padding-right: 0;\n  padding-left: 0; }\n\n.small-uncollapse > .column, .small-uncollapse > .columns {\n  padding-right: 0.625rem;\n  padding-left: 0.625rem; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .medium-offset-0 {\n    margin-left: 0%; }\n  .medium-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .medium-offset-1 {\n    margin-left: 8.33333%; }\n  .medium-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .medium-offset-2 {\n    margin-left: 16.66667%; }\n  .medium-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .medium-offset-3 {\n    margin-left: 25%; }\n  .medium-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .medium-offset-4 {\n    margin-left: 33.33333%; }\n  .medium-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .medium-offset-5 {\n    margin-left: 41.66667%; }\n  .medium-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .medium-offset-6 {\n    margin-left: 50%; }\n  .medium-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .medium-offset-7 {\n    margin-left: 58.33333%; }\n  .medium-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .medium-offset-8 {\n    margin-left: 66.66667%; }\n  .medium-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .medium-offset-9 {\n    margin-left: 75%; }\n  .medium-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .medium-offset-10 {\n    margin-left: 83.33333%; }\n  .medium-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .medium-offset-11 {\n    margin-left: 91.66667%; }\n  .medium-order-1 {\n    order: 1; }\n  .medium-order-2 {\n    order: 2; }\n  .medium-order-3 {\n    order: 3; }\n  .medium-order-4 {\n    order: 4; }\n  .medium-order-5 {\n    order: 5; }\n  .medium-order-6 {\n    order: 6; }\n  .medium-up-1 {\n    flex-wrap: wrap; }\n    .medium-up-1 > .column, .medium-up-1 > .columns {\n      flex: 0 0 100%;\n      max-width: 100%; }\n  .medium-up-2 {\n    flex-wrap: wrap; }\n    .medium-up-2 > .column, .medium-up-2 > .columns {\n      flex: 0 0 50%;\n      max-width: 50%; }\n  .medium-up-3 {\n    flex-wrap: wrap; }\n    .medium-up-3 > .column, .medium-up-3 > .columns {\n      flex: 0 0 33.33333%;\n      max-width: 33.33333%; }\n  .medium-up-4 {\n    flex-wrap: wrap; }\n    .medium-up-4 > .column, .medium-up-4 > .columns {\n      flex: 0 0 25%;\n      max-width: 25%; }\n  .medium-up-5 {\n    flex-wrap: wrap; }\n    .medium-up-5 > .column, .medium-up-5 > .columns {\n      flex: 0 0 20%;\n      max-width: 20%; }\n  .medium-up-6 {\n    flex-wrap: wrap; }\n    .medium-up-6 > .column, .medium-up-6 > .columns {\n      flex: 0 0 16.66667%;\n      max-width: 16.66667%; }\n  .medium-up-7 {\n    flex-wrap: wrap; }\n    .medium-up-7 > .column, .medium-up-7 > .columns {\n      flex: 0 0 14.28571%;\n      max-width: 14.28571%; }\n  .medium-up-8 {\n    flex-wrap: wrap; }\n    .medium-up-8 > .column, .medium-up-8 > .columns {\n      flex: 0 0 12.5%;\n      max-width: 12.5%; } }\n\n@media print, screen and (min-width: 40em) and (min-width: 40em) {\n  .medium-expand {\n    flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 40em) {\n  .medium-flex-dir-row {\n    flex-direction: row; }\n  .medium-flex-dir-row-reverse {\n    flex-direction: row-reverse; }\n  .medium-flex-dir-column {\n    flex-direction: column; }\n  .medium-flex-dir-column-reverse {\n    flex-direction: column-reverse; }\n  .medium-flex-child-auto {\n    flex: 1 1 auto; }\n  .medium-flex-child-grow {\n    flex: 1 0 auto; }\n  .medium-flex-child-shrink {\n    flex: 0 1 auto; } }\n\n.row.medium-unstack > .column, .row.medium-unstack > .columns {\n  flex: 0 0 100%; }\n  @media print, screen and (min-width: 40em) {\n    .row.medium-unstack > .column, .row.medium-unstack > .columns {\n      flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 40em) {\n  .medium-collapse > .column, .medium-collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\n    padding-right: 0.9375rem;\n    padding-left: 0.9375rem; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-1 {\n    flex: 0 0 8.33333%;\n    max-width: 8.33333%; }\n  .large-offset-0 {\n    margin-left: 0%; }\n  .large-2 {\n    flex: 0 0 16.66667%;\n    max-width: 16.66667%; }\n  .large-offset-1 {\n    margin-left: 8.33333%; }\n  .large-3 {\n    flex: 0 0 25%;\n    max-width: 25%; }\n  .large-offset-2 {\n    margin-left: 16.66667%; }\n  .large-4 {\n    flex: 0 0 33.33333%;\n    max-width: 33.33333%; }\n  .large-offset-3 {\n    margin-left: 25%; }\n  .large-5 {\n    flex: 0 0 41.66667%;\n    max-width: 41.66667%; }\n  .large-offset-4 {\n    margin-left: 33.33333%; }\n  .large-6 {\n    flex: 0 0 50%;\n    max-width: 50%; }\n  .large-offset-5 {\n    margin-left: 41.66667%; }\n  .large-7 {\n    flex: 0 0 58.33333%;\n    max-width: 58.33333%; }\n  .large-offset-6 {\n    margin-left: 50%; }\n  .large-8 {\n    flex: 0 0 66.66667%;\n    max-width: 66.66667%; }\n  .large-offset-7 {\n    margin-left: 58.33333%; }\n  .large-9 {\n    flex: 0 0 75%;\n    max-width: 75%; }\n  .large-offset-8 {\n    margin-left: 66.66667%; }\n  .large-10 {\n    flex: 0 0 83.33333%;\n    max-width: 83.33333%; }\n  .large-offset-9 {\n    margin-left: 75%; }\n  .large-11 {\n    flex: 0 0 91.66667%;\n    max-width: 91.66667%; }\n  .large-offset-10 {\n    margin-left: 83.33333%; }\n  .large-12 {\n    flex: 0 0 100%;\n    max-width: 100%; }\n  .large-offset-11 {\n    margin-left: 91.66667%; }\n  .large-order-1 {\n    order: 1; }\n  .large-order-2 {\n    order: 2; }\n  .large-order-3 {\n    order: 3; }\n  .large-order-4 {\n    order: 4; }\n  .large-order-5 {\n    order: 5; }\n  .large-order-6 {\n    order: 6; }\n  .large-up-1 {\n    flex-wrap: wrap; }\n    .large-up-1 > .column, .large-up-1 > .columns {\n      flex: 0 0 100%;\n      max-width: 100%; }\n  .large-up-2 {\n    flex-wrap: wrap; }\n    .large-up-2 > .column, .large-up-2 > .columns {\n      flex: 0 0 50%;\n      max-width: 50%; }\n  .large-up-3 {\n    flex-wrap: wrap; }\n    .large-up-3 > .column, .large-up-3 > .columns {\n      flex: 0 0 33.33333%;\n      max-width: 33.33333%; }\n  .large-up-4 {\n    flex-wrap: wrap; }\n    .large-up-4 > .column, .large-up-4 > .columns {\n      flex: 0 0 25%;\n      max-width: 25%; }\n  .large-up-5 {\n    flex-wrap: wrap; }\n    .large-up-5 > .column, .large-up-5 > .columns {\n      flex: 0 0 20%;\n      max-width: 20%; }\n  .large-up-6 {\n    flex-wrap: wrap; }\n    .large-up-6 > .column, .large-up-6 > .columns {\n      flex: 0 0 16.66667%;\n      max-width: 16.66667%; }\n  .large-up-7 {\n    flex-wrap: wrap; }\n    .large-up-7 > .column, .large-up-7 > .columns {\n      flex: 0 0 14.28571%;\n      max-width: 14.28571%; }\n  .large-up-8 {\n    flex-wrap: wrap; }\n    .large-up-8 > .column, .large-up-8 > .columns {\n      flex: 0 0 12.5%;\n      max-width: 12.5%; } }\n\n@media print, screen and (min-width: 64em) and (min-width: 64em) {\n  .large-expand {\n    flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-flex-dir-row {\n    flex-direction: row; }\n  .large-flex-dir-row-reverse {\n    flex-direction: row-reverse; }\n  .large-flex-dir-column {\n    flex-direction: column; }\n  .large-flex-dir-column-reverse {\n    flex-direction: column-reverse; }\n  .large-flex-child-auto {\n    flex: 1 1 auto; }\n  .large-flex-child-grow {\n    flex: 1 0 auto; }\n  .large-flex-child-shrink {\n    flex: 0 1 auto; } }\n\n.row.large-unstack > .column, .row.large-unstack > .columns {\n  flex: 0 0 100%; }\n  @media print, screen and (min-width: 64em) {\n    .row.large-unstack > .column, .row.large-unstack > .columns {\n      flex: 1 1 0px; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-collapse > .column, .large-collapse > .columns {\n    padding-right: 0;\n    padding-left: 0; }\n  .large-uncollapse > .column, .large-uncollapse > .columns {\n    padding-right: 0.9375rem;\n    padding-left: 0.9375rem; } }\n\n.shrink {\n  flex: 0 0 auto;\n  max-width: 100%; }\n\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\np {\n  margin-bottom: 1rem;\n  font-size: inherit;\n  line-height: 1.6;\n  text-rendering: optimizeLegibility; }\n\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 80%;\n  line-height: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  color: inherit;\n  text-rendering: optimizeLegibility; }\n  h1 small,\n  h2 small,\n  h3 small,\n  h4 small,\n  h5 small,\n  h6 small {\n    line-height: 0;\n    color: #cacaca; }\n\nh1 {\n  font-size: 1.5rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\nh2 {\n  font-size: 1.25rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\nh3 {\n  font-size: 1.1875rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\nh4 {\n  font-size: 1.125rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\nh5 {\n  font-size: 1.0625rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\nh6 {\n  font-size: 1rem;\n  line-height: 1.4;\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\n\n@media print, screen and (min-width: 40em) {\n  h1 {\n    font-size: 3rem; }\n  h2 {\n    font-size: 2.5rem; }\n  h3 {\n    font-size: 1.9375rem; }\n  h4 {\n    font-size: 1.5625rem; }\n  h5 {\n    font-size: 1.25rem; }\n  h6 {\n    font-size: 1rem; } }\n\na {\n  line-height: inherit;\n  color: #1779ba;\n  text-decoration: none;\n  cursor: pointer; }\n  a:hover, a:focus {\n    color: #1468a0; }\n  a img {\n    border: 0; }\n\nhr {\n  clear: both;\n  max-width: 75rem;\n  height: 0;\n  margin: 1.25rem auto;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #cacaca;\n  border-left: 0; }\n\nul,\nol,\ndl {\n  margin-bottom: 1rem;\n  list-style-position: outside;\n  line-height: 1.6; }\n\nli {\n  font-size: inherit; }\n\nul {\n  margin-left: 1.25rem;\n  list-style-type: disc; }\n\nol {\n  margin-left: 1.25rem; }\n\nul ul, ol ul, ul ol, ol ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\n\ndl {\n  margin-bottom: 1rem; }\n  dl dt {\n    margin-bottom: 0.3rem;\n    font-weight: bold; }\n\nblockquote {\n  margin: 0 0 1rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #cacaca; }\n  blockquote, blockquote p {\n    line-height: 1.6;\n    color: #8a8a8a; }\n\ncite {\n  display: block;\n  font-size: 0.8125rem;\n  color: #8a8a8a; }\n  cite:before {\n    content: \"\\2014   \"; }\n\nabbr {\n  border-bottom: 1px dotted #0a0a0a;\n  color: #0a0a0a;\n  cursor: help; }\n\nfigure {\n  margin: 0; }\n\ncode {\n  padding: 0.125rem 0.3125rem 0.0625rem;\n  border: 1px solid #cacaca;\n  background-color: #e6e6e6;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #0a0a0a; }\n\nkbd {\n  margin: 0;\n  padding: 0.125rem 0.25rem 0;\n  background-color: #e6e6e6;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  color: #0a0a0a; }\n\n.subheader {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n  line-height: 1.4;\n  color: #8a8a8a; }\n\n.lead {\n  font-size: 125%;\n  line-height: 1.6; }\n\n.stat {\n  font-size: 2.5rem;\n  line-height: 1; }\n  p + .stat {\n    margin-top: -1rem; }\n\n.no-bullet {\n  margin-left: 0;\n  list-style: none; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n@media print, screen and (min-width: 40em) {\n  .medium-text-left {\n    text-align: left; }\n  .medium-text-right {\n    text-align: right; }\n  .medium-text-center {\n    text-align: center; }\n  .medium-text-justify {\n    text-align: justify; } }\n\n@media print, screen and (min-width: 64em) {\n  .large-text-left {\n    text-align: left; }\n  .large-text-right {\n    text-align: right; }\n  .large-text-center {\n    text-align: center; }\n  .large-text-justify {\n    text-align: justify; } }\n\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    box-shadow: none !important;\n    color: black !important;\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  .ir a:after,\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #8a8a8a;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\ntextarea {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.4375rem;\n  margin: 0 0 1rem;\n  padding: 0.5rem;\n  border: #ccd0d2;\n  border-radius: 0;\n  background-color: #fefefe;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  font-family: inherit;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #0a0a0a;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  appearance: none; }\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\n  textarea:focus {\n    outline: none;\n    border: #98cbe8;\n    background-color: #fefefe;\n    box-shadow: 0 0 5px #cacaca;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n\ntextarea {\n  max-width: 100%; }\n  textarea[rows] {\n    height: auto; }\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #cacaca; }\n\ninput:disabled, input[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: #e6e6e6;\n  cursor: not-allowed; }\n\n[type='submit'],\n[type='button'] {\n  appearance: none;\n  border-radius: 0; }\n\ninput[type='search'] {\n  box-sizing: border-box; }\n\n[type='file'],\n[type='checkbox'],\n[type='radio'] {\n  margin: 0 0 1rem; }\n\n[type='checkbox'] + label,\n[type='radio'] + label {\n  display: inline-block;\n  vertical-align: baseline;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0; }\n  [type='checkbox'] + label[for],\n  [type='radio'] + label[for] {\n    cursor: pointer; }\n\nlabel > [type='checkbox'],\nlabel > [type='radio'] {\n  margin-right: 0.5rem; }\n\n[type='file'] {\n  width: 100%; }\n\nlabel {\n  display: block;\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #0a0a0a; }\n  label.middle {\n    margin: 0 0 1rem;\n    padding: 0.5rem 0; }\n\n.help-text {\n  margin-top: -0.5rem;\n  font-size: 0.8125rem;\n  font-style: italic;\n  color: #0a0a0a; }\n\n.input-group {\n  display: table;\n  width: 100%;\n  margin-bottom: 1rem; }\n  .input-group > :first-child {\n    border-radius: 0 0 0 0; }\n  .input-group > :last-child > * {\n    border-radius: 0 0 0 0; }\n\n.input-group-label, .input-group-field, .input-group-button, .input-group-button a,\n.input-group-button input,\n.input-group-button button,\n.input-group-button label {\n  margin: 0;\n  white-space: nowrap;\n  display: table-cell;\n  vertical-align: middle; }\n\n.input-group-label {\n  padding: 0 1rem;\n  border: 1px solid #cacaca;\n  background: #e6e6e6;\n  color: #0a0a0a;\n  text-align: center;\n  white-space: nowrap;\n  width: 1%;\n  height: 100%; }\n  .input-group-label:first-child {\n    border-right: 0; }\n  .input-group-label:last-child {\n    border-left: 0; }\n\n.input-group-field {\n  border-radius: 0;\n  height: 2.5rem; }\n\n.input-group-button {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  width: 1%;\n  height: 100%; }\n  .input-group-button a,\n  .input-group-button input,\n  .input-group-button button,\n  .input-group-button label {\n    height: 2.5rem;\n    padding-top: 0;\n    padding-bottom: 0;\n    font-size: 1rem; }\n\n.input-group .input-group-button {\n  display: table-cell; }\n\nfieldset {\n  margin: 0;\n  padding: 0;\n  border: 0; }\n\nlegend {\n  max-width: 100%;\n  margin-bottom: 0.5rem; }\n\n.fieldset {\n  margin: 1.125rem 0;\n  padding: 1.25rem;\n  border: 1px solid #cacaca; }\n  .fieldset legend {\n    margin: 0;\n    margin-left: -0.1875rem;\n    padding: 0 0.1875rem;\n    background: #fefefe; }\n\nselect {\n  height: 2.4375rem;\n  margin: 0 0 1rem;\n  padding: 0.5rem;\n  appearance: none;\n  border: #ccd0d2;\n  border-radius: 0;\n  background-color: #fefefe;\n  font-family: inherit;\n  font-size: 1rem;\n  line-height: normal;\n  color: #0a0a0a;\n  background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='32' height='24' viewBox='0 0 32 24'><polygon points='0,0 32,0 16,24' style='fill: rgb%28138, 138, 138%29'></polygon></svg>\");\n  background-origin: content-box;\n  background-position: right -1rem center;\n  background-repeat: no-repeat;\n  background-size: 9px 6px;\n  padding-right: 1.5rem;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n  @media screen and (min-width: 0\\0) {\n    select {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\n  select:focus {\n    outline: none;\n    border: #98cbe8;\n    background-color: #fefefe;\n    box-shadow: 0 0 5px #cacaca;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n  select:disabled {\n    background-color: #e6e6e6;\n    cursor: not-allowed; }\n  select::-ms-expand {\n    display: none; }\n  select[multiple] {\n    height: auto;\n    background-image: none; }\n\n.is-invalid-input:not(:focus) {\n  border-color: #cc4b37;\n  background-color: #f9ecea; }\n  .is-invalid-input:not(:focus)::placeholder {\n    color: #cc4b37; }\n\n.is-invalid-label {\n  color: #cc4b37; }\n\n.form-error {\n  display: none;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #cc4b37; }\n  .form-error.is-visible {\n    display: block; }\n\n.menu {\n  margin: 0;\n  list-style-type: none; }\n  .menu > li {\n    display: table-cell;\n    vertical-align: middle; }\n    [data-whatinput='mouse'] .menu > li {\n      outline: 0; }\n  .menu > li > a {\n    display: block;\n    padding: 0.7rem 1rem;\n    line-height: 1; }\n  .menu input,\n  .menu select,\n  .menu a,\n  .menu button {\n    margin-bottom: 0; }\n  .menu > li > a img,\n  .menu > li > a i,\n  .menu > li > a svg {\n    vertical-align: middle; }\n    .menu > li > a img + span,\n    .menu > li > a i + span,\n    .menu > li > a svg + span {\n      vertical-align: middle; }\n  .menu > li > a img,\n  .menu > li > a i,\n  .menu > li > a svg {\n    margin-right: 0.25rem;\n    display: inline-block; }\n  .menu > li, .menu.horizontal > li {\n    display: table-cell; }\n  .menu.expanded {\n    display: table;\n    width: 100%;\n    table-layout: fixed; }\n    .menu.expanded > li:first-child:last-child {\n      width: 100%; }\n  .menu.vertical > li {\n    display: block; }\n  @media print, screen and (min-width: 40em) {\n    .menu.medium-horizontal > li {\n      display: table-cell; }\n    .menu.medium-expanded {\n      display: table;\n      width: 100%;\n      table-layout: fixed; }\n      .menu.medium-expanded > li:first-child:last-child {\n        width: 100%; }\n    .menu.medium-vertical > li {\n      display: block; } }\n  @media print, screen and (min-width: 64em) {\n    .menu.large-horizontal > li {\n      display: table-cell; }\n    .menu.large-expanded {\n      display: table;\n      width: 100%;\n      table-layout: fixed; }\n      .menu.large-expanded > li:first-child:last-child {\n        width: 100%; }\n    .menu.large-vertical > li {\n      display: block; } }\n  .menu.simple li {\n    display: inline-block;\n    margin-right: 1rem;\n    line-height: 1; }\n  .menu.simple a {\n    padding: 0; }\n  .menu.align-right::before, .menu.align-right::after {\n    display: table;\n    content: ' '; }\n  .menu.align-right::after {\n    clear: both; }\n  .menu.align-right > li {\n    float: right; }\n  .menu.icon-top > li > a {\n    text-align: center; }\n    .menu.icon-top > li > a img,\n    .menu.icon-top > li > a i,\n    .menu.icon-top > li > a svg {\n      display: block;\n      margin: 0 auto 0.25rem; }\n  .menu.icon-top.vertical a > span {\n    margin: auto; }\n  .menu.nested {\n    margin-left: 1rem; }\n  .menu .active > a {\n    background: #1779ba;\n    color: #fefefe; }\n  .menu.menu-bordered li {\n    border: 1px solid #e6e6e6; }\n    .menu.menu-bordered li:not(:first-child) {\n      border-top: 0; }\n  .menu.menu-hover li:hover {\n    background-color: #e6e6e6; }\n\n.menu-text {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding: 0.7rem 1rem;\n  font-weight: bold;\n  line-height: 1;\n  color: inherit; }\n\n.menu-centered {\n  text-align: center; }\n  .menu-centered > .menu {\n    display: inline-block; }\n\n.no-js [data-responsive-menu] ul {\n  display: none; }\n\n.button {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 0 1rem 0;\n  padding: 0.85em 1em;\n  -webkit-appearance: none;\n  border: 1px solid transparent;\n  border-radius: 0;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  font-size: 0.9rem;\n  line-height: 1;\n  text-align: center;\n  cursor: pointer;\n  background-color: #1779ba;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #14679e;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-left: 0; }\n  .button.primary {\n    background-color: #1779ba;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #126195;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #767676;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #5e5e5e;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #0a0a0a; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #0a0a0a; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #0a0a0a; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #0a0a0a; }\n  .button.alert {\n    background-color: #cc4b37;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #a53b2a;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #1779ba;\n    color: #1779ba; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #0c3d5d;\n      color: #0c3d5d; }\n    .button.hollow.primary {\n      border: 1px solid #1779ba;\n      color: #1779ba; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #0c3d5d;\n        color: #0c3d5d; }\n    .button.hollow.secondary {\n      border: 1px solid #767676;\n      color: #767676; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #3b3b3b;\n        color: #3b3b3b; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #cc4b37;\n      color: #cc4b37; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #67251a;\n        color: #67251a; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed; }\n    .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #1779ba;\n      color: #fefefe; }\n    .button.disabled.primary, .button[disabled].primary {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.primary:hover, .button.disabled.primary:focus, .button[disabled].primary:hover, .button[disabled].primary:focus {\n        background-color: #1779ba;\n        color: #fefefe; }\n    .button.disabled.secondary, .button[disabled].secondary {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n        background-color: #767676;\n        color: #fefefe; }\n    .button.disabled.success, .button[disabled].success {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n        background-color: #3adb76;\n        color: #fefefe; }\n    .button.disabled.warning, .button[disabled].warning {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n        background-color: #ffae00;\n        color: #fefefe; }\n    .button.disabled.alert, .button[disabled].alert {\n      opacity: 0.25;\n      cursor: not-allowed; }\n      .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n        background-color: #cc4b37;\n        color: #fefefe; }\n  .button.dropdown::after {\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    content: '';\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-color: #fefefe transparent transparent;\n    position: relative;\n    top: 0.4em;\n    display: inline-block;\n    float: right;\n    margin-left: 1em; }\n  .button.arrow-only::after {\n    top: -0.1em;\n    float: none;\n    margin-left: 0; }\n\nprogress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem;\n  appearance: none;\n  border-radius: 0;\n  border: 0;\n  background: #cacaca; }\n  progress::-webkit-progress-bar {\n    background: #cacaca;\n    border-radius: 0; }\n  progress::-webkit-progress-value {\n    background: #1779ba;\n    border-radius: 0; }\n  progress::-moz-progress-bar {\n    background: #1779ba;\n    border-radius: 0; }\n  progress.primary {\n    color: #1779ba; }\n    progress.primary::-webkit-progress-value {\n      background: #1779ba; }\n    progress.primary::-moz-progress-bar {\n      background: #1779ba; }\n  progress.secondary {\n    color: #767676; }\n    progress.secondary::-webkit-progress-value {\n      background: #767676; }\n    progress.secondary::-moz-progress-bar {\n      background: #767676; }\n  progress.success {\n    color: #3adb76; }\n    progress.success::-webkit-progress-value {\n      background: #3adb76; }\n    progress.success::-moz-progress-bar {\n      background: #3adb76; }\n  progress.warning {\n    color: #ffae00; }\n    progress.warning::-webkit-progress-value {\n      background: #ffae00; }\n    progress.warning::-moz-progress-bar {\n      background: #ffae00; }\n  progress.alert {\n    color: #cc4b37; }\n    progress.alert::-webkit-progress-value {\n      background: #cc4b37; }\n    progress.alert::-moz-progress-bar {\n      background: #cc4b37; }\n  progress::-ms-fill {\n    border-radius: 0;\n    border: 0; }\n\nhtml, body {\n  overflow-y: visible; }\n", ""]);

	// exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);