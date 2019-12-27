/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/includes/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./logs/tmp/config/portion.server.1577438257465.js":
/*!*********************************************************!*\
  !*** ./logs/tmp/config/portion.server.1577438257465.js ***!
  \*********************************************************/
/*! exports provided: template, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
// 核心代码中引用的配置文件 (部分)
var template = "./src/template.ejs";
var server =  true ? {
  "koaStatic": {
    "maxage": 0,
    "hidden": true,
    "index": "index.html",
    "defer": false,
    "gzip": true,
    "extensions": false
  },
  "renderCache": {
    "maxAge": 10000
  },
  "proxyRequestOrigin": {
    "protocol": "https"
  },
  "inject": __webpack_require__(/*! ../../../src/_server/inject.js */ "./src/_server/inject.js").default,
  "before": __webpack_require__(/*! ../../../src/_server/lifecycle/before */ "./src/_server/lifecycle/before.js").default,
  "after": __webpack_require__(/*! ../../../src/_server/lifecycle/after */ "./src/_server/lifecycle/after.js").default
} : undefined;

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Indicates that navigation was caused by a call to history.push.
 */

var PUSH = exports.PUSH = 'PUSH';
/**
 * Indicates that navigation was caused by a call to history.replace.
 */

var REPLACE = exports.REPLACE = 'REPLACE';
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */

var POP = exports.POP = 'POP';

/***/ }),

/***/ "./node_modules/history/lib/AsyncUtils.js":
/*!************************************************!*\
  !*** ./node_modules/history/lib/AsyncUtils.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
  var currentTurn = 0,
      isDone = false;
  var isSync = false,
      hasNext = false,
      doneArgs = void 0;

  var done = function done() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    isDone = true;

    if (isSync) {
      // Iterate instead of recursing if possible.
      doneArgs = args;
      return;
    }

    callback.apply(undefined, args);
  };

  var next = function next() {
    if (isDone) return;
    hasNext = true;
    if (isSync) return; // Iterate instead of recursing if possible.

    isSync = true;

    while (!isDone && currentTurn < turns && hasNext) {
      hasNext = false;
      work(currentTurn++, next, done);
    }

    isSync = false;

    if (isDone) {
      // This means the loop finished synchronously.
      callback.apply(undefined, doneArgs);
      return;
    }

    if (currentTurn >= turns && hasNext) {
      isDone = true;
      callback();
    }
  };

  next();
};

/***/ }),

/***/ "./node_modules/history/lib/LocationUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/LocationUtils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createQuery = exports.createQuery = function createQuery(props) {
  return _extends(Object.create(null), props);
};

var createLocation = exports.createLocation = function createLocation() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Actions.POP;
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : undefined;
  var pathname = object.pathname || '/';
  var search = object.search || '';
  var hash = object.hash || '';
  var state = object.state;
  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
};

var isDate = function isDate(object) {
  return Object.prototype.toString.call(object) === '[object Date]';
};

var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
  if (a === b) return true;
  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (typeofA !== typeofB) return false;
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : undefined : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : undefined : void 0;

    if (!Array.isArray(a)) {
      var keysofA = Object.keys(a);
      var keysofB = Object.keys(b);
      return keysofA.length === keysofB.length && keysofA.every(function (key) {
        return statesAreEqual(a[key], b[key]);
      });
    }

    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return statesAreEqual(item, b[index]);
    });
  } // All other serializable types (string, number, boolean)
  // should be strict equal.


  return false;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.key === b.key && // a.action === b.action && // Different action !== location change.
  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
};

/***/ }),

/***/ "./node_modules/history/lib/PathUtils.js":
/*!***********************************************!*\
  !*** ./node_modules/history/lib/PathUtils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
  var _parsePath = parsePath(path),
      pathname = _parsePath.pathname,
      search = _parsePath.search,
      hash = _parsePath.hash;

  return createPath({
    pathname: pathname,
    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
    hash: hash
  });
};

var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
  var _parsePath2 = parsePath(path),
      pathname = _parsePath2.pathname,
      search = _parsePath2.search,
      hash = _parsePath2.hash;

  return createPath({
    pathname: pathname,
    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
      return prefix === '?' ? prefix : suffix;
    }),
    hash: hash
  });
};

var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
  var _parsePath3 = parsePath(path),
      search = _parsePath3.search;

  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
  return match && match[1];
};

var extractPath = function extractPath(string) {
  var match = string.match(/^(https?:)?\/\/[^\/]*/);
  return match == null ? string : string.substring(match[0].length);
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = extractPath(path);
  var search = '';
  var hash = '';
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : undefined;
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';
  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  if (location == null || typeof location === 'string') return location;
  var basename = location.basename,
      pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = (basename || '') + pathname;
  if (search && search !== '?') path += search;
  if (hash) path += hash;
  return path;
};

/***/ }),

/***/ "./node_modules/history/lib/createHistory.js":
/*!***************************************************!*\
  !*** ./node_modules/history/lib/createHistory.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AsyncUtils = __webpack_require__(/*! ./AsyncUtils */ "./node_modules/history/lib/AsyncUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _runTransitionHook = __webpack_require__(/*! ./runTransitionHook */ "./node_modules/history/lib/runTransitionHook.js");

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createHistory = function createHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getCurrentLocation = options.getCurrentLocation,
      getUserConfirmation = options.getUserConfirmation,
      pushLocation = options.pushLocation,
      replaceLocation = options.replaceLocation,
      go = options.go,
      keyLength = options.keyLength;
  var currentLocation = void 0;
  var pendingLocation = void 0;
  var beforeListeners = [];
  var listeners = [];
  var allKeys = [];

  var getCurrentIndex = function getCurrentIndex() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
    if (currentLocation) return allKeys.indexOf(currentLocation.key);
    return -1;
  };

  var updateLocation = function updateLocation(nextLocation) {
    var currentIndex = getCurrentIndex();
    currentLocation = nextLocation;

    if (currentLocation.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
    } else if (currentLocation.action === _Actions.REPLACE) {
      allKeys[currentIndex] = currentLocation.key;
    }

    listeners.forEach(function (listener) {
      return listener(currentLocation);
    });
  };

  var listenBefore = function listenBefore(listener) {
    beforeListeners.push(listener);
    return function () {
      return beforeListeners = beforeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var listen = function listen(listener) {
    listeners.push(listener);
    return function () {
      return listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
        return result != null ? done(result) : next();
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          return callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  };

  var transitionTo = function transitionTo(nextLocation) {
    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do

    pendingLocation = nextLocation;
    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation

      pendingLocation = null;

      if (ok) {
        // Treat PUSH to same path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = (0, _PathUtils.createPath)(currentLocation);
          var nextPath = (0, _PathUtils.createPath)(nextLocation);
          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
        }

        if (nextLocation.action === _Actions.POP) {
          updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.PUSH) {
          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
        } else if (nextLocation.action === _Actions.REPLACE) {
          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
        }
      } else if (currentLocation && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(currentLocation.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);
        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
      }
    });
  };

  var push = function push(input) {
    return transitionTo(createLocation(input, _Actions.PUSH));
  };

  var replace = function replace(input) {
    return transitionTo(createLocation(input, _Actions.REPLACE));
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength || 6);
  };

  var createHref = function createHref(location) {
    return (0, _PathUtils.createPath)(location);
  };

  var createLocation = function createLocation(location, action) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : createKey();
    return (0, _LocationUtils.createLocation)(location, action, key);
  };

  return {
    getCurrentLocation: getCurrentLocation,
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: _PathUtils.createPath,
    createHref: createHref,
    createLocation: createLocation
  };
};

exports.default = createHistory;

/***/ }),

/***/ "./node_modules/history/lib/createMemoryHistory.js":
/*!*********************************************************!*\
  !*** ./node_modules/history/lib/createMemoryHistory.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(/*! invariant */ "invariant");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(/*! ./LocationUtils */ "./node_modules/history/lib/LocationUtils.js");

var _PathUtils = __webpack_require__(/*! ./PathUtils */ "./node_modules/history/lib/PathUtils.js");

var _createHistory = __webpack_require__(/*! ./createHistory */ "./node_modules/history/lib/createHistory.js");

var _createHistory2 = _interopRequireDefault(_createHistory);

var _Actions = __webpack_require__(/*! ./Actions */ "./node_modules/history/lib/Actions.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var createStateStorage = function createStateStorage(entries) {
  return entries.filter(function (entry) {
    return entry.state;
  }).reduce(function (memo, entry) {
    memo[entry.key] = entry.state;
    return memo;
  }, {});
};

var createMemoryHistory = function createMemoryHistory() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (Array.isArray(options)) {
    options = {
      entries: options
    };
  } else if (typeof options === 'string') {
    options = {
      entries: [options]
    };
  }

  var getCurrentLocation = function getCurrentLocation() {
    var entry = entries[current];
    var path = (0, _PathUtils.createPath)(entry);
    var key = void 0,
        state = void 0;

    if (entry.key) {
      key = entry.key;
      state = readState(key);
    }

    var init = (0, _PathUtils.parsePath)(path);
    return (0, _LocationUtils.createLocation)(_extends({}, init, {
      state: state
    }), undefined, key);
  };

  var canGo = function canGo(n) {
    var index = current + n;
    return index >= 0 && index < entries.length;
  };

  var go = function go(n) {
    if (!n) return;

    if (!canGo(n)) {
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : undefined;
      return;
    }

    current += n;
    var currentLocation = getCurrentLocation(); // Change action to POP

    history.transitionTo(_extends({}, currentLocation, {
      action: _Actions.POP
    }));
  };

  var pushLocation = function pushLocation(location) {
    current += 1;
    if (current < entries.length) entries.splice(current);
    entries.push(location);
    saveState(location.key, location.state);
  };

  var replaceLocation = function replaceLocation(location) {
    entries[current] = location;
    saveState(location.key, location.state);
  };

  var history = (0, _createHistory2.default)(_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    pushLocation: pushLocation,
    replaceLocation: replaceLocation,
    go: go
  }));
  var _options = options,
      entries = _options.entries,
      current = _options.current;

  if (typeof entries === 'string') {
    entries = [entries];
  } else if (!Array.isArray(entries)) {
    entries = ['/'];
  }

  entries = entries.map(function (entry) {
    return (0, _LocationUtils.createLocation)(entry);
  });

  if (current == null) {
    current = entries.length - 1;
  } else {
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : undefined : void 0;
  }

  var storage = createStateStorage(entries);

  var saveState = function saveState(key, state) {
    return storage[key] = state;
  };

  var readState = function readState(key) {
    return storage[key];
  };

  return _extends({}, history, {
    canGo: canGo
  });
};

exports.default = createMemoryHistory;

/***/ }),

/***/ "./node_modules/history/lib/runTransitionHook.js":
/*!*******************************************************!*\
  !*** ./node_modules/history/lib/runTransitionHook.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__(/*! warning */ "warning");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var runTransitionHook = function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : undefined;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/koot/React/client-session-store.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/React/client-session-store.js ***!
  \*********************************************************/
/*! exports provided: save, addEventHandlerOnPageUnload, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventHandlerOnPageUnload", function() { return addEventHandlerOnPageUnload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/set */ "./node_modules/lodash/set.js");
/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/filter-state */ "./node_modules/koot/libs/filter-state.js");
/* harmony import */ var _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_filter_state__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






var configSessionStore = JSON.parse("{\"equipmentList\":true,\"shipList\":true}");
/** @type {Boolean} 当前是否可以/允许使用 sessionStore */

var able = function () {
  if (true) return false;
  if (!window.sessionStorage) return false;
  if (!configSessionStore) return false;
  if (configSessionStore === true) return true;
  if (configSessionStore === 'all') return true;
  return Boolean(_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore));
}();
/**
 * 保存当前 state 到 sessionStorage
 * @void
 */


var save = function save() {
  if (!able) return;
  /** @type {Object} 排除掉黑名单内的项目后的 state 对象 */

  var state = _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default()(___WEBPACK_IMPORTED_MODULE_2__["store"].getState());
  var saveState = {};

  if (configSessionStore === true || configSessionStore === 'all') {
    saveState = state;
  } else if (_typeof(configSessionStore) === 'object' && !Array.isArray(configSessionStore)) {
    // 根据配置对象存储
    var parse = function parse(obj) {
      var accumulatedKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      Object.keys(obj).forEach(function (key) {
        var currentAccumulatedKey = accumulatedKey + "[".concat(JSON.stringify(key), "]");

        if (_typeof(obj[key]) === 'object') {
          parse(obj[key], currentAccumulatedKey);
        } else if (obj[key] === true) {
          var value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, currentAccumulatedKey);
          if (typeof value !== 'undefined') lodash_set__WEBPACK_IMPORTED_MODULE_1___default()(saveState, currentAccumulatedKey, value);
        }
      });
    };

    parse(configSessionStore); // console.log(configSessionStore, state, saveState);
  }

  sessionStorage.setItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"], JSON.stringify(saveState));
  return;
};
/**
 * 向 window.onunload 添加事件：保存 state
 * @void
 */

var addEventHandlerOnPageUnload = function addEventHandlerOnPageUnload() {
  if (!able) return;
  window.addEventListener('unload', save);
  return;
};
/**
 * 从 sessionStorage 中读取 state
 * @returns {Object} 存储的 state
 */

var load = function load() {
  if (!able) return {};
  return JSON.parse(sessionStorage.getItem(_defaults_defines__WEBPACK_IMPORTED_MODULE_3__["sessionStoreKey"]) || '{}');
};

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/*! exports provided: default, getInjectedMetaTags, markInited */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInjectedMetaTags", function() { return getInjectedMetaTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInited", function() { return markInited; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @typedef Pageinfo
 * @type {Object}
 * @property {string} [title] 标题
 * @property {Array<Object.<string, string>>} [metas] meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */
// import isEqual from 'lodash/isEqual';

/**
 * 当前已注入的 meta 标签
 * @type {Array<HTMLElement>}
 */
var injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

var nodeCommentEnd;
var inited = false;
/** @type {Pageinfo} */

var infoToChange = {
  title: '',
  metas: []
};
var changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ __webpack_exports__["default"] = (function (title) {
  var metas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (true) return;

  if ( true && !inited) {
    setTimeout(function () {
      inited = true;
    });
    return;
  } // 判断 & 追加即将修改的内容

  /*
  // 如果新 meta 不存在于已有的 meta 列表，添加
  metas.forEach(metaNew => {
      if (!infoToChange.metas.length) infoToChange.metas.push(metaNew);
      if (
          !infoToChange.metas.every(metaExist => {
              console.log(metaNew, metaExist, isEqual(metaNew, metaExist));
              return isEqual(metaNew, metaExist);
          })
      ) {
          console.log('PUSH');
          infoToChange.metas.push(metaNew);
      }
  });
  */
  // 如果当前没有信息，设为当前信息


  if (!infoToChange.title && (!Array.isArray(infoToChange.metas) || !infoToChange.metas.length)) {
    infoToChange.title = title;
    infoToChange.metas = metas;
  }

  if (changeTimeout) return;
  changeTimeout = setTimeout(function () {
    doUpdate();
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

var doUpdate = function doUpdate() {
  var title = infoToChange.title,
      metas = infoToChange.metas; // 替换页面标题

  document.title = title; // 替换 metas

  var head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(function (el) {
    return head.removeChild(el);
  });
  injectedMetaTags.forEach(function (el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(function (meta) {
    return _typeof(meta) === 'object';
  }).map(function (meta) {
    var el = document.createElement('meta');

    for (var key in meta) {
      el.setAttribute(key, meta[key]);
    } // el.setAttribute(__KOOT_INJECT_ATTRIBUTE_NAME__, '')


    if (nodeCommentEnd) {
      head.insertBefore(el, nodeCommentEnd);
    } else {
      head.appendChild(el);
    }

    return el;
  });
}; //

/**
 * 获取当前已注入的 meta 标签
 * @returns {Array<HTMLElement>}
 */


var getInjectedMetaTags = function getInjectedMetaTags() {
  if (!Array.isArray(injectedMetaTags)) {
    var head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    var childNodes = head.childNodes;
    var meetStart = false;
    var meetEnd = false;
    var i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      var node = childNodes[i];

      if (node.nodeType === Node.COMMENT_NODE) {
        if (node.nodeValue === "koot-inject-metas-start") meetStart = true;

        if (node.nodeValue === "koot-inject-metas-end") {
          meetEnd = true;
          nodeCommentEnd = node;
        }
      } else if (meetStart && node.nodeType === Node.ELEMENT_NODE && node.tagName === 'META') {
        injectedMetaTags.push(node);
      }

      i++;
    }
  }

  return injectedMetaTags;
};
/** _仅针对客户端_ 标记已初始化 */

var markInited = function markInited() {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/component-extender.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/component-extender.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ */ "./node_modules/koot/index.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_9__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false */

 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'



 //





 //
// 是否已挂载了组件

var everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

var styleMap = {};
/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

var devSSRConnectIndex = 0;
/**
 * 获取数据
 * @callback callbackFetchData
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @param {Function} dispatch Redux dispatch
 * @returns {Promise}
 */

/**
 * 判断数据是否准备好
 * @callback callbackCheckLoaded
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {boolean}
 */

/**
 * 获取页面信息
 * @callback callbackGetPageInfo
 * @param {Object} state 当前 state
 * @param {Object} renderProps 封装的同构 props
 * @returns {Object}
 */

/**
 * 获取同构数据的执行方法
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Promise}
 */

var doFetchData = function doFetchData(store, renderProps, dataFetch) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return new Promise(function (resolve) {
    return resolve(result);
  });
  var result = dataFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(function (resolve) {
    return resolve(result);
  });
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


var doPageinfo = function doPageinfo(store, props, pageinfo) {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return {};
  var defaultPageInfo = {
    title: '',
    metas: []
  };
  if (typeof pageinfo !== 'function' && _typeof(pageinfo) !== 'object') return defaultPageInfo;
  var state = store.getState();

  var infos = function () {
    if (_typeof(pageinfo) === 'object') return pageinfo;
    var infos = pageinfo(state, props);
    if (_typeof(infos) !== 'object') return defaultPageInfo;
    return infos;
  }();

  var _infos$title = infos.title,
      title = _infos$title === void 0 ? defaultPageInfo.title : _infos$title,
      _infos$metas = infos.metas,
      metas = _infos$metas === void 0 ? defaultPageInfo.metas : _infos$metas;

  if (state.localeId) {
    if (!metas.some(function (meta) {
      if (meta.name === 'koot-locale-id') {
        meta.content = state.localeId;
        return true;
      }

      return false;
    })) {
      metas.push({
        name: 'koot-locale-id',
        content: state.localeId
      });
    }
  }

  return {
    title: title,
    metas: metas
  };
}; // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend')

/**
 * 高阶组件/组件装饰器：组件扩展
 * @param {Object} options 选项
 * @param {boolean|Function} [options.connect] react-redux 的 connect() 的参数。如果为 true，表示使用 connect()，但不连接任何数据
 * @param {Object|callbackGetPageInfo} [options.pageinfo]
 * @param {Object} [options.data] 同构数据相关
 * @param {callbackFetchData} [options.data.fetch]
 * @param {callbackCheckLoaded} [options.data.check]
 * @param {Object} [options.styles] 组件 CSS 结果
 * @returns {Function} 封装好的 React 组件
 */


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (WrappedComponent) {
    // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
    var _options$connect = options.connect,
        _connect = _options$connect === void 0 ? false : _options$connect,
        pageinfo = options.pageinfo,
        _options$data = options.data;

    _options$data = _options$data === void 0 ? {} : _options$data;
    var _dataFetch = _options$data.fetch,
        dataCheck = _options$data.check,
        dataResetWhenUnmount = _options$data.resetWhenUnmount,
        _styles = options.styles,
        _options$ssr = options.ssr,
        ssr = _options$ssr === void 0 ? true : _options$ssr; // console.log('extend hoc run', { name, LocaleId })
    // 样式相关

    /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

    var styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(function (obj) {
      return _typeof(obj) === 'object' && typeof obj.wrapper === 'string';
    });
    /** @type {boolean} 是否有上述结果对象 */

    var hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

    /** @type {boolean} 是否有 pageinfo 对象 */

    var hasPageinfo = typeof pageinfo === 'function' || _typeof(pageinfo) === 'object'; // 同构数据相关

    /** @type {boolean} 同构数据是否已经获取成功 */
    // let isDataPreloaded = false

    /** @type {Function} 获取同构数据 */

    var dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

    var KootReactComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(KootReactComponent, _React$Component);

      _createClass(KootReactComponent, [{
        key: "clientUpdatePageInfo",
        //
        // static contextType = StyleMapContext
        //
        value: function clientUpdatePageInfo(to) {
          if (true) return;
          if (!hasPageinfo) return;

          var _ref = typeof to === 'function' ? doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), to) : to || doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), pageinfo),
              title = _ref.title,
              metas = _ref.metas;

          Object(_client_update_page_info__WEBPACK_IMPORTED_MODULE_7__["default"])(title, metas);
        } //

      }]);

      //
      function KootReactComponent(props
      /*, context*/
      ) {
        var _this;

        _classCallCheck(this, KootReactComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(KootReactComponent).call(this, props
        /*, context*/
        ));
        /**
         * _服务器端_
         * 将组件注册到同构渲染对象中
         */

        _defineProperty(_assertThisInitialized(_this), "state", {
          loaded: typeof dataCheck === 'function' ? dataCheck(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])().getState(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(_this.props)) : undefined
        });

        _defineProperty(_assertThisInitialized(_this), "mounted", false);

        _defineProperty(_assertThisInitialized(_this), "kootClassNames", []);

        if (true) {
          var SSR =  false ? undefined : __KOOT_SSR__;

          if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__["needConnectComponents"]]) {
            if (false) {}

            var _SSR$connectedCompone = SSR.connectedComponents,
                connectedComponents = _SSR$connectedCompone === void 0 ? [] : _SSR$connectedCompone;
            connectedComponents.unshift(KootComponent);
          }
        }

        if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return _possibleConstructorReturn(_this);

        if (hasStyles) {
          _this.kootClassNames = styles.map(function (obj) {
            return obj.wrapper;
          });
          Object(_styles__WEBPACK_IMPORTED_MODULE_6__["append"])(_this.getStyleMap(), styles); // console.log('----------')
          // console.log('styles', styles)
          // console.log('theStyles', theStyles)
          // console.log('this.classNameWrapper', this.classNameWrapper)
          // console.log('----------')
        }

        return _this;
      }
      /**
       * 获取 styleMap
       * - 服务器端: 返回全局常量中的对照表
       * - 客户端: 直接返回本文件内的 styleMap
       */


      _createClass(KootReactComponent, [{
        key: "getStyleMap",
        value: function getStyleMap()
        /*context*/
        {
          // console.log('extend', { LocaleId })
          if (true) {
            if (false) {}
            if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.styleMap;
          }

          return styleMap; // return context
        } //

      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          // if (
          //     typeof prevProps.location === 'object' &&
          //     typeof this.props.location === 'object' &&
          //     prevProps.location.pathname !== this.props.location.pathname
          // )
          this.clientUpdatePageInfo();
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.mounted = true;

          if (!this.state.loaded && typeof dataFetch !== 'undefined') {
            doFetchData(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), dataFetch).then(function () {
              if (!_this2.mounted) return;

              _this2.setState({
                loaded: true
              });
            });
          }

          this.clientUpdatePageInfo();

          if (hasPageinfo && this.mounted) {
            setTimeout(function () {
              if (_this2 && _this2.mounted) {
                _this2.clientUpdatePageInfo();
              }
            }, 500);
          }

          if (everMounted) {} else {
            everMounted = true;
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;

          this.mounted = false;

          if (hasStyles) {
            Object(_styles__WEBPACK_IMPORTED_MODULE_6__["remove"])(this.getStyleMap(), styles);
          }

          if (_typeof(dataResetWhenUnmount) === 'object') {
            setTimeout(function () {
              _this3.props.dispatch({
                type: _redux__WEBPACK_IMPORTED_MODULE_8__["RESET_CERTAIN_STATE"],
                data: dataResetWhenUnmount
              });
            });
          }
        } //

      }, {
        key: "render",
        value: function render() {
          // console.log('styles', styles)
          // console.log('this', this)
          // console.log('this.kootClassNames', this.kootClassNames)
          // console.log('this.props.className', this.props.className)
          if (true) {
            if (ssr === false) return null;
            if (ssr !== true) return ssr;
          }

          if (false) {}

          var props = Object.assign({}, this.props, {
            className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
            'data-class-name': this.kootClassNames.join(' ').trim()
          });
          if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

          if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
        }
      }]);

      return KootReactComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", function (_ref3) {
      var store = _ref3.store,
          _ref3$renderProps = _ref3.renderProps,
          renderProps = _ref3$renderProps === void 0 ? {} : _ref3$renderProps;

      var _doPageinfo = doPageinfo(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), pageinfo),
          title = _doPageinfo.title,
          metas = _doPageinfo.metas;

      return {
        title: title,
        metas: metas
      };
    });

    if (typeof dataFetch !== 'undefined') {
      KootReactComponent.onServerRenderStoreExtend = function (_ref2) {
        var store = _ref2.store,
            renderProps = _ref2.renderProps;
        if (typeof dataFetch === 'undefined') return new Promise(function (resolve) {
          return resolve();
        }); // console.log('onServerRenderStoreExtend')

        return doFetchData(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), dataFetch);
      };
    } // if (_hot && __DEV__ && __CLIENT__) {
    //     const { hot, setConfig } = require('react-hot-loader')
    //     setConfig({ logLevel: 'debug' })
    //     KootComponent = hot(module)(KootComponent)
    // }
    // console.log(WrappedComponent);


    var KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
    //     typeof styles.wrapper === 'string'
    // ) {
    //     KootComponent = ImportStyle(styles)(KootComponent)
    // }

    if (_connect === true) {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function () {
        return {};
      })(KootComponent);
    } else if (typeof _connect === 'function') {
      KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_connect)(KootComponent);
    } else if (Array.isArray(_connect)) {
      KootComponent = react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"].apply(void 0, _toConsumableArray(_connect))(KootComponent);
    }

    return KootComponent;
  };
});

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/*! exports provided: fromServerProps, fromComponentProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromServerProps", function() { return fromServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromComponentProps", function() { return fromComponentProps; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
var fromServerProps = function fromServerProps() {
  var serverProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, serverProps);
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


var fromComponentProps = function fromComponentProps() {
  var componentProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return _objectSpread({}, componentProps);
};



/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"



/**
 * History Enhancer: use basename
 * 
 * Original useBasename enhancer from history also override all read methods
 * `getCurrentLocation` `listenBefore` `listen`
 * But as Diablohu tested, when read methods overrided, if the route matched used async method to get component, would fail
 * that rendering blank page and no route match event fired
 * So we only overrid write methods here. And modify the first level path in routes object to `:localeId`
 * 
 * @param {Function} createHistory
 * @returns {Object} History
 */

var kootUseBasename = function kootUseBasename(createHistory) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var history = createHistory(options);
    var basename = options.basename;

    var addBasename = function addBasename(location) {
      if (!location) return location;

      if (basename && location.basename == null) {
        if (location.pathname.toLowerCase().indexOf(basename.toLowerCase()) === 0) {
          location.pathname = location.pathname.substring(basename.length);
          location.basename = basename;
          if (location.pathname === '') location.pathname = '/';
        } else {
          location.basename = '';
        }
      }

      return location;
    };

    var prependBasename = function prependBasename(location) {
      if (!basename) return location;
      var object = typeof location === 'string' ? Object(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__["parsePath"])(location) : location;
      var pname = object.pathname;
      var normalizedBasename = basename.slice(-1) === '/' ? basename : "".concat(basename, "/");
      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
      var pathname = normalizedBasename + normalizedPathname;
      return _objectSpread({}, object, {
        pathname: pathname
      });
    }; // Override all write methods with basename-aware versions.


    var push = function push(location) {
      return history.push(prependBasename(location));
    };

    var replace = function replace(location) {
      return history.replace(prependBasename(location));
    };

    var createPath = function createPath(location) {
      return history.createPath(prependBasename(location));
    };

    var createHref = function createHref(location) {
      return history.createHref(prependBasename(location));
    };

    var createLocation = function createLocation(location) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
    };

    return _objectSpread({}, history, {
      push: push,
      replace: replace,
      createPath: createPath,
      createHref: createHref,
      createLocation: createLocation
    });
  };
};

var historyClient;

var history = function () {
  if (false) { var historyConfig, initialState; }

  if (true) {
    return undefined;
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/_cache-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/inject/_cache-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * inject 缓存键值
 */
module.exports = {
  styles: 'STYLES',
  scriptsRunFirst: 'SCRIPTS_RUN_FIRST',
  scriptsInBody: 'SCRIPTS_IN_BODY',
  uriServiceWorker: 'URI_SERVICE_WORKER'
};

/***/ }),

/***/ "./node_modules/koot/React/is-render-safe.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/React/is-render-safe.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global __KOOT_SSR__:false */
var _require = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"),
    needConnectComponents = _require.needConnectComponents;
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = function () {
  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    if (SSR[needConnectComponents]) return false;
    return true;
  }

  return true;
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/*! exports provided: LOCATION_UPDATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return LOCATION_UPDATE; });
var LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"],
    location: location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

var update = function update(location) {
  return function (dispatch) {
    return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__["update"](location));
  };
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/*! exports provided: LOCATION_UPDATE, reducer, update, REALTIME_LOCATION_REDUCER_NAME, actionUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REALTIME_LOCATION_REDUCER_NAME", function() { return REALTIME_LOCATION_REDUCER_NAME; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCATION_UPDATE", function() { return _actionType__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["update"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionUpdate", function() { return _actions__WEBPACK_IMPORTED_MODULE_3__["update"]; });





var REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__["LOCATION_UPDATE"]:
      return action.location;
  }

  return state;
});

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/*! exports provided: RESET_CERTAIN_STATE, reducers, initialState, middlewares, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CERTAIN_STATE", function() { return RESET_CERTAIN_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "middlewares", function() { return middlewares; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");
/* harmony import */ var _client_session_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-session-store */ "./node_modules/koot/React/client-session-store.js");
var _reducers;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 * ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 * │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

var RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 * ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 * ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

var reducers = (_reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"]
}, _defineProperty(_reducers, _realtime_location__WEBPACK_IMPORTED_MODULE_4__["REALTIME_LOCATION_REDUCER_NAME"], _realtime_location__WEBPACK_IMPORTED_MODULE_4__["reducer"]), _defineProperty(_reducers, _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["SERVER_REDUCER_NAME"], _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["serverReducer"]), _reducers);

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_6__["reducerLocaleId"]; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


var initialState = function () {
  if (false) {}
  if (true) return {};
}();
/**
 * @type {Array}
 */

var middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(_history__WEBPACK_IMPORTED_MODULE_8__["default"])]; // const enhancerClientModifyState = createStore => (
//     reducer,
//     preloadedState,
//     enhancer
// ) => {
//     const store = createStore(reducer, preloadedState, enhancer);
//     console.log({ store, state: store.getState() });
//     return store;
// };
// const rootReducerClientResetCertainState = (state, action) => {
//     const reset = (data, prefix = '') => {
//         for (const [key, value] of Object.entries(data)) {
//             const newKey = prefix ? `${prefix}.${key}` : key;
//             if (
//                 typeof value === 'object' &&
//                 typeof state[key] === 'object' &&
//                 !Array.isArray(state[key])
//             ) {
//                 return reset(value, newKey);
//             } else if (value === true) {
//                 console.log(newKey);
//             }
//         }
//     };
//     if (
//         __CLIENT__ &&
//         action.type === RESET_CERTAIN_STATE &&
//         typeof action.data === 'object'
//     ) {
//         reset(action.data);
//     }
// };

/**
 * 创建 redux store
 * - _注_: 与 redux 提供的 `createStore` 方法略有不同，仅需提供项目所用的 reducer 对象和中间件列表，**不需要**初始 state 对象
 * @param {Object|Function} appReducers 项目使用的 reducer，可为 `ReducersMapObject` (形式为 Object 的列表)，也可以为 `Reducer` (reducer 函数)
 * @param {Function[]} appMiddlewares 项目的中间件列表
 * @param {Function[]} appEnhancers 项目的 store 增强函数 (enhancer) 列表
 * @returns {Object} redux store
 */

var createStore = function createStore(appReducer) {
  var appMiddlewares = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var appEnhancers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  var projectReducer = function () {
    if (typeof appReducer === 'function') {
      var kootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
      return function (state, action) {
        var _sliceStateForReducer = sliceStateForReducers(state),
            appState = _sliceStateForReducer.appState,
            kootState = _sliceStateForReducer.kootState;

        return _objectSpread({}, appReducer(appState, action), {}, kootReducer(kootState, action));
      };
    } else if (_typeof(appReducer) === 'object' && !Array.isArray(appReducer)) {
      return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, appReducer, {}, reducers));
    }

    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(_objectSpread({}, reducers));
  }();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(projectReducer, initialState, redux__WEBPACK_IMPORTED_MODULE_1__["compose"].apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"].apply(void 0, _toConsumableArray(middlewares.concat(appMiddlewares)))].concat(_toConsumableArray(appEnhancers))));
};
/******************************************************************************
 * ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 * ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

var sliceStateForReducers = function sliceStateForReducers(state) {
  var appState = {};
  var kootState = {};
  var keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(function (key) {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState: appState,
    kootState: kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/*! exports provided: checkAndWriteIntoHead, append, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAndWriteIntoHead", function() { return checkAndWriteIntoHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// import React from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return React.createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap
 */
var checkAndWriteIntoHead = function checkAndWriteIntoHead() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (_typeof(styleMap) !== 'object') return;
  Object.keys(styleMap).forEach(function (wrapper) {
    var style = styleMap[wrapper];
    var el = document.querySelector("style[".concat("data-koot-module", "=").concat(wrapper, "]"));

    if (style.count > 0) {
      // 配置样式
      if (!el && style.css !== '') {
        var styleTag = document.createElement('style');
        styleTag.innerHTML = style.css; // styleTag.setAttribute('id', wrapper);

        styleTag.setAttribute("data-koot-module", wrapper);
        document.getElementsByTagName('head')[0].appendChild(styleTag);
      }
    } else {
      // 移除样式
      if (el) {
        el.remove();
      }
    }
  });
}; // const getStyleMap = (passedMap) => {
//     if (__CLIENT__)
//         return passedMap
//     if (typeof __KOOT_SSR__ === 'object') {
//         // console.log({ LocaleId })
//         return __KOOT_SSR__.styleMap.get(LocaleId)
//     }
//     return passedMap
// }

/**
 * 追加样式
 * @param {Object} styleMap
 * @param {Object|Array} style
 */

var append = function append() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return append(styleMap, theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (!styleMap[style.wrapper]) {
    styleMap[style.wrapper] = {
      css: style.css,
      count: 1
    };
  } else {
    styleMap[style.wrapper].count++;
  }

  if (false) {}
};
/**
 * 移除样式
 * @param {Object} styleMap
 * @param {*} style
 */

var remove = function remove() {
  var styleMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var style = arguments.length > 1 ? arguments[1] : undefined;
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(function (theStyle) {
    return remove(theStyle);
  });
  if (_typeof(style) !== 'object') return;

  if (styleMap[style.wrapper]) {
    styleMap[style.wrapper].count--;
  }
}; // export const idDivStylesContainer = '__KOOT_ISOMORPHIC_STYLES_CONTAINER__'
// /**
//  * 分析 HTML 代码，解析已有样式表，将其从 HTML 代码中移除，并返回可以直接写入到 head 标签内的样式表代码
//  * @param {String} html
//  * @returns {String} htmlStyles
//  */
// export const parseHtmlForStyles = (html) => {
//     const matches = html.match(new RegExp(`<div id="${idDivStylesContainer}">(.*?)</div>`, 'm'))
//     if (
//         !matches ||
//         typeof matches !== 'object' ||
//         typeof matches.index === 'undefined' ||
//         typeof matches[1] === 'undefined'
//     )
//         return {
//             html,
//             htmlStyles: ''
//         }
//     return {
//         html: html.substr(0, matches.index),
//         htmlStyles: matches[1]
//     }
// }
// /**
//  * React 组件: 样式表内容容器
//  */
// export class StylesContainer extends React.Component {
//     static contextType = StyleMapContext
//     render() {
//         return (
//             <div
//                 id={idDivStylesContainer}
//                 dangerouslySetInnerHTML={{
//                     __html: Object.keys(this.context)
//                         .filter(id => !!this.context[id].css)
//                         .map(id => `<style id="${id}">${this.context[id].css}</style>`)
//                         .join('')
//                 }}
//             />
//         )
//     }
// }

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, GET_ORIGIN_URL, TELL_CLIENT_URL, SYNC_COOKIE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return CHANGE_LANGUAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ORIGIN_URL", function() { return GET_ORIGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return TELL_CLIENT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return SYNC_COOKIE; });
var CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
var GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
var TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
var SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE_LANGUAGE: CHANGE_LANGUAGE,
  GET_ORIGIN_URL: GET_ORIGIN_URL,
  TELL_CLIENT_URL: TELL_CLIENT_URL,
  SYNC_COOKIE: SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/index.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./node_modules/koot/ReactApp/server/run.js");


/* harmony default export */ __webpack_exports__["default"] = (_run__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_dev_request_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js");
/* harmony import */ var _defaults_dev_request_uri__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_dev_request_uri__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../React/inject/_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/* harmony import */ var _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/get-sw-pathname */ "./node_modules/koot/utils/get-sw-pathname.js");
/* harmony import */ var _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n_server_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../i18n/server/get-lang-from-ctx */ "./node_modules/koot/i18n/server/get-lang-from-ctx.js");
/* harmony import */ var _i18n_get_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");
/* harmony import */ var _i18n_get_type__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n_get_type__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../i18n/locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _validate_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../validate/i18n */ "./node_modules/koot/ReactApp/server/validate/i18n.js");
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ssr */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js");
// import useRouterHistory from 'react-router/lib/useRouterHistory'
// import createMemoryHistory from 'history/lib/createMemoryHistory'
// import { syncHistoryWithStore } from 'react-router-redux'






 // import initStore from './init-store'



/**
 * KOA 中间件: 同构
 * @param {Object} options
 * @param {Object} options.reduxConfig Redux 配置
 * @param {Function} [options.reduxConfig.factoryStore] 生成 Redux Store 的方法。`factoryStore` 和 `store` 必须存在一个，且互斥
 * @param {Object} [options.reduxConfig.store] Redux Store 对象。`factoryStore` 和 `store` 必须存在一个，且互斥
 * @param {Object} [options.reduxConfig.syncCookie] 同步 cookie 到 store 的配置
 * @param {Object} options.routerConfig 路由配置对象，直接供 `react-router` 使用
 * @returns {Function} KOA middleware
 */

var middlewareIsomorphic = function middlewareIsomorphic() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var renderCacheMap = options.renderCacheMap,
      locales = options.locales,
      _options$proxyRequest = options.proxyRequestOrigin,
      proxyRequestOrigin = _options$proxyRequest === void 0 ? {} : _options$proxyRequest,
      template = options.template,
      _options$templateInje = options.templateInject,
      templateInject = _options$templateInje === void 0 ? {} : _options$templateInje; // const ssrConfig = {}
  // const localeIds = getLocaleIds()
  // if (localeIds.length) {
  //     localeIds.forEach(localeId => {
  //         styleMap.set(localeId, {})
  //     })
  // } else {
  //     styleMap.set('', {})
  // }
  // const styleMap = {}

  /**
   * @type {Map}
   * 注入内容缓存
   * 则第一级为语种ID或 `` (空字符串)
   */

  var templateInjectCache = new Map();
  /** @type {Object} chunkmap */

  var chunkmap = _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_2___default()(true);
  /** @type {Map} webpack 的入口，从 chunkmap 中抽取 */

  var entrypoints = new Map();
  /** @type {Map} 文件名与实际结果的文件名的对应表，从 chunkmap 中抽取 */

  var filemap = new Map();
  /** @type {Map} 样式表 */
  // const styleMap = new Map()

  /** @type {Object} 公用缓存空间 */

  var globalCache = new Map();
  globalCache.set('__', {});
  /** @type {String} i18n 类型 */

  var i18nType = _i18n_get_type__WEBPACK_IMPORTED_MODULE_5___default()(); // 针对 i18n 分包形式的项目，静态注入按语言缓存

  if (i18nType === 'default') {
    for (var l in chunkmap) {
      var thisLocaleId = l.substr(0, 1) === '.' ? l.substr(1) : l;
      entrypoints.set(thisLocaleId, chunkmap[l]['.entrypoints']);
      filemap.set(thisLocaleId, chunkmap[l]['.files']);
      var cache = {};

      if (true) {
        extendCacheObject(cache, chunkmap, l);
      }

      templateInjectCache.set(thisLocaleId, cache); // styleMap.set(thisLocaleId, {})
    }
  } else {
    entrypoints.set('', chunkmap['.entrypoints']);
    filemap.set('', chunkmap['.files']);
    var _cache = {};

    if (true) {
      extendCacheObject(_cache, chunkmap);
    }

    templateInjectCache.set('', _cache); // styleMap.set('', {})
  }

  if (Array.isArray(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6___default.a)) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6___default.a.forEach(function (localeId) {
      globalCache.set(localeId, {}); // Object.defineProperty(globalCache, localeId, {
      //     value: {},
      //     enumerable: false,
      //     writable: false,
      //     configurable: false
      // });
    });
  }

  return async function (ctx, next) {
    /** @type {String} 本次请求的 URL */
    var url = ctx.path + ctx.search;

    try {
      // console.log('request url', url)
      // console.log('\nSSR middleware start')

      /** @type {String} 本次请求的语种ID */
      var LocaleId = Object(_i18n_server_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_4__["default"])(ctx) || ''; // setLocaleId(LocaleId)
      // console.log(`LocaleId -> ${LocaleId}`)
      // 如果存在缓存匹配，直接返回缓存结果

      var thisRenderCache = renderCacheMap ? renderCacheMap.get(LocaleId) : undefined;
      var cached = thisRenderCache ? thisRenderCache.get(url) : false;

      if ( true && cached !== false) {
        ctx.body = cached;
        return;
      }
      /** @type {Object} 本次请求的 (当前语言的) 注入内容缓存 */


      var thisTemplateInjectCache = templateInjectCache.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 入口表 */

      var thisEntrypoints = entrypoints.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 文件名对应表 */

      var thisFilemap = filemap.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) CSS 对照表 */

      var styleMap = {}; // const thisStyleMap = styleMap.get(i18nType === 'default' ? LocaleId : '')

      if (false) {} // 生成/清理 Store
      // console.log('\x1b[36m⚑\x1b[0m' + ' Store created')
      // const Store = initStore(reduxConfig)
      // 生成 History
      // const historyConfig = {
      //     basename: LocaleId && process.env.KOOT_I18N_URL_USE === 'router'
      //         ? `/${LocaleId}`
      //         : '/'
      // }
      // const memoryHistory = useRouterHistory(() => createMemoryHistory(url))(historyConfig)

      /** @type {Object} 已生成的 History 实例 */
      // const History = syncHistoryWithStore(memoryHistory, Store)
      // eval SSR
      // [开发环境] 每次请求都重新验证一次语言包，以确保语言包的更新


      var SSRoptions = {
        ctx: ctx,
        // Store, History,
        // memoryHistory,
        LocaleId: LocaleId,
        locales:  false ? undefined : locales,
        // ssrConfig,
        // syncCookie: reduxConfig.syncCookie,
        proxyRequestOrigin: proxyRequestOrigin,
        templateInject: templateInject,
        template: template,
        thisTemplateInjectCache: thisTemplateInjectCache,
        thisEntrypoints: thisEntrypoints,
        thisFilemap: thisFilemap,
        //thisStyleMap,
        styleMap: styleMap,
        globalCache: globalCache,
        connectedComponents:  false ? undefined : []
      };

      if (false) {}

      var result = await Object(_ssr__WEBPACK_IMPORTED_MODULE_8__["default"])(SSRoptions); // console.log('eval finished', {
      //     'localeId in store': Store.getState().localeId
      // })
      // console.log('\n\n\n')

      if (result.body) {
        // HTML 结果暂存入缓存
        if (thisRenderCache) thisRenderCache.set(url, result.body);
        ctx.body = result.body;
        return;
      }

      if (result.error) throw result.error;
      if (result.redirect) return ctx.redirect(result.redirect);
      if (result.next) return await next();
    } catch (err) {
      __webpack_require__(/*! debug */ "debug")('SYSTEM:isomorphic:error')('Server-Render Error Occures: %O', err.stack);

      console.error(err);
      ctx.status = 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (middlewareIsomorphic); // ============================================================================

var extendCacheObject = function extendCacheObject(cache, chunkmap, localeId) {
  var serviceWorker = _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_3___default()(localeId ? chunkmap[localeId] : chunkmap);

  if (serviceWorker) {
    cache[_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_1__["uriServiceWorker"]] =  false ? undefined : serviceWorker;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js":
/*!*************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-unused-vars */


var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path"); // const vm = require('vm')
// const chalk = require('chalk')

/** @type {String} ssr.js 文件内容 */


var __KOOT_SSR_FILE_CONTENT__;
/**
 * 执行服务器端渲染 (Server-Side Rendering)
 */


var ssr = async function ssr(__KOOT_SSR__) {
  return new Promise(async function (resolve) {
    __KOOT_SSR__.ssrComplete = function (result) {
      return resolve(result);
    };

    if (false) {}

    if (!__KOOT_SSR_FILE_CONTENT__) {
      var fileSSR = path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_0___default()(), 'server/ssr.js');

      if (fs.existsSync(fileSSR)) {
        __KOOT_SSR_FILE_CONTENT__ = fs.readFileSync(fileSSR, 'utf-8');
      } else {
        throw new Error("No `/server/ssr.js` found. Maybe there's an error while building. Please retry `koot-build`");
      }
    } // __KOOT_SSR__.result = false
    // const {
    //     Store,
    //     History,
    //     LocaleId,
    // } = __KOOT_SSR__
    // console.log('before eval', {
    //     LocaleId, logged: __KOOT_SSR__.logged,
    //     'in __KOOT_SSR__': __KOOT_SSR__.LocaleId
    // })
    // console.log('\n' + chalk.cyanBright('eval SSR'))
    // await eval(__KOOT_SSR_FILE_CONTENT__)


    var Store, History, __KOOT_STORE__, __KOOT_HISTORY__, __KOOT_CTX__;

    var __KOOT_LOCALEID__ = __KOOT_SSR__.LocaleId;

    var __KOOT_SSR_SET_STORE__ = function __KOOT_SSR_SET_STORE__(value) {
      Store = value;
      __KOOT_STORE__ = value;
    };

    var __KOOT_SSR_SET_HISTORY__ = function __KOOT_SSR_SET_HISTORY__(value) {
      History = value;
      __KOOT_HISTORY__ = value;
    };

    var __KOOT_SSR_SET_CTX__ = function __KOOT_SSR_SET_CTX__(value) {
      __KOOT_CTX__ = value;
    };

    try {
      // eslint-disable-next-line no-eval
      eval(__KOOT_SSR_FILE_CONTENT__);
    } catch (err) {
      resolve({
        error: err
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ssr);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/router-dev.js":
/*!*********************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/router-dev.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var router = new __webpack_require__(/*! koa-router */ "koa-router")();

var _require = __webpack_require__(/*! ../../../defaults/webpack-dev-server */ "./node_modules/koot/defaults/webpack-dev-server.js"),
    publicPathPrefix = _require.publicPathPrefix,
    serviceWorkerFilename = _require.serviceWorkerFilename;

var _require2 = __webpack_require__(/*! ../../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js"),
    dll = _require2.dll,
    serviceWorker = _require2.serviceWorker;

var fileDllClient = process.env.KOOT_DEV_DLL_FILE_CLIENT;
router.get(dll, function (ctx) {
  if (fileDllClient && fs.existsSync(fileDllClient)) {
    ctx.type = 'application/javascript';
    ctx.body = fs.readFileSync(fileDllClient);
  } else {
    ctx.body = '';
  }
});
router.get(serviceWorker, async function (ctx) {
  var uri = "".concat(ctx.origin, "/").concat(publicPathPrefix, "/dist/").concat(serviceWorkerFilename);
  var res = await fetch(new Request(uri));
  ctx.body = await res.text();
  ctx.type = 'application/javascript';
});
/* harmony default export */ __webpack_exports__["default"] = (router.routes());

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/static.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/static.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-convert */ "koa-convert");
/* harmony import */ var koa_convert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_convert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/get-dir-dist-public */ "./node_modules/koot/libs/get-dir-dist-public.js");
/* harmony import */ var _libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _defaults_koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../defaults/koa-static */ "./node_modules/koot/defaults/koa-static.js");
/* harmony import */ var _defaults_koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_defaults_koa_static__WEBPACK_IMPORTED_MODULE_4__);





/**
 * KOA 中间件: 静态资源
 * @param {Object} koaStaticConfig
 * @return {Function}
 */

var staticMiddleware = function staticMiddleware() {
  var koaStaticConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var dir = _libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2___default()(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default()());
  var config = Object.assign({}, _defaults_koa_static__WEBPACK_IMPORTED_MODULE_4___default.a, koaStaticConfig); // console.log('koa-statc', {
  //     dir,
  //     config,
  //     koaStaticDefaults,
  //     koaStaticConfig
  // });

  return koa_convert__WEBPACK_IMPORTED_MODULE_0___default()(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(dir, config));
};

/* harmony default export */ __webpack_exports__["default"] = (staticMiddleware);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/*! exports provided: CHANGE_LANGUAGE, TELL_CLIENT_URL, SYNC_COOKIE, SERVER_REDUCER_NAME, serverReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_REDUCER_NAME", function() { return SERVER_REDUCER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverReducer", function() { return serverReducer; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHANGE_LANGUAGE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TELL_CLIENT_URL", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SYNC_COOKIE", function() { return _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]; });

// TODO: change to one action type , like: CHANGE_BASE_INFO


var SERVER_REDUCER_NAME = 'server';
var serverReducer = function serverReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    lang: 'en',
    origin: ''
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__["CHANGE_LANGUAGE"]:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["TELL_CLIENT_URL"]:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__["SYNC_COOKIE"]:
      return Object.assign({}, state, {
        cookie: action.data
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/render-cache.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/render-cache.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @callback cacheGet
 * 缓存检查与吐出方法
 * @param {String} url
 * @return {Boolean|String} 对该 URL 不使用缓存时返回 false，使用时返回缓存结果 String
 */

/**
 * @callback cacheSet
 * 缓存存储方法
 * @param {String} url
 * @param {String} html
 */
var defaults = __webpack_require__(/*! ../../defaults/render-cache */ "./node_modules/koot/defaults/render-cache.js");
/**
 * @class React 同构渲染缓存，基于 URL (开发环境: 禁用缓存)
 */


var KootReactRenderCache =
/*#__PURE__*/
function () {
  /**
   * @param {Object} [options={}]
   * @param {number} [options.maxAge] 缓存存在时间
   * @param {number} [options.maxCount] 最多缓存的 URL 的数量
   * @param {cacheGet} [options.get] 自定义缓存检查与吐出方法。存在时, maxAge 和 maxCount 设置将被忽略
   * @param {cacheSet} [options.set] 自定义缓存存储方法。存在时, maxAge 和 maxCount 设置将被忽略
   */
  function KootReactRenderCache() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, KootReactRenderCache);

    if (options === true) options = {};
    var _options = options,
        _options$maxAge = _options.maxAge,
        maxAge = _options$maxAge === void 0 ? defaults.maxAge : _options$maxAge,
        _options$maxCount = _options.maxCount,
        maxCount = _options$maxCount === void 0 ? defaults.maxCount : _options$maxCount;
    this.list = new Map();
    this.cachedUrls = [];
    this.maxAge = maxAge;
    this.maxCount = maxCount;
    this.customGet = options.get;
    this.customSet = options.set; // console.log({
    //     maxAge: this.maxAge,
    //     maxCount: this.maxCount
    // });
  }
  /**
   * 缓存检查与吐出方法
   * @param {String} url
   * @return {Boolean|String} 对该 URL 不使用缓存时返回 false，使用时返回缓存结果 String
   */


  _createClass(KootReactRenderCache, [{
    key: "get",
    value: function get(url) {
      if (typeof this.customGet === 'function') return this.customGet(url); // 没有该条结果，直接返回 false

      if (!this.list.has(url)) return false;

      var _this$list$get = this.list.get(url),
          html = _this$list$get.html,
          time = _this$list$get.time; // 缓存时间短于设定的最大时间，返回缓存结果


      if (Date.now() - time < this.maxAge) {
        // console.log('')
        // console.log(`cached result: ${url} | ${time} | ${Date.now() - time}`)
        // console.log('')
        return html;
      } // 否则删除已缓存结果，并返回 false


      this.remove(url);
      return false;
    }
    /**
     * 缓存存储方法
     * @param {String} url
     * @param {String} html
     */

  }, {
    key: "set",
    value: function set(url, html) {
      if (typeof this.customSet === 'function') return this.customSet(url, html); // 如果当前已缓存的 URL 数量不少于设定的最大数量
      // 移除已缓存列表里的第一条结果

      if (!this.list.has(url) && this.cachedUrls.length >= this.maxCount) {
        // console.log('')
        // console.log(`cached count out: ${url} | ${this.cachedUrls.length}`)
        // console.log('')
        this.remove(this.cachedUrls[0]); // console.log('new list', this.cachedUrls)
      } // 缓存结果


      this.cachedUrls.push(url);
      this.list.set(url, {
        html: html,
        time: Date.now()
      });
    }
    /**
     * 删除一条已缓存的条目
     * @param {*} url
     */

  }, {
    key: "remove",
    value: function remove(url) {
      this.list.delete(url);
      this.cachedUrls.splice(this.cachedUrls.indexOf(url), 1);
    }
  }]);

  return KootReactRenderCache;
}();

module.exports = KootReactRenderCache;

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/run.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/run.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME__ */ "./logs/tmp/config/portion.server.1577438257465.js");
/* harmony import */ var _utils_get_pathname_dev_server_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/get-pathname-dev-server-start */ "./node_modules/koot/utils/get-pathname-dev-server-start.js");
/* harmony import */ var _utils_get_pathname_dev_server_start__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_get_pathname_dev_server_start__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/create-koa-app */ "./node_modules/koot/libs/create-koa-app.js");
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_create_koa_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_validate_port__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/validate-port */ "./node_modules/koot/libs/validate-port.js");
/* harmony import */ var _libs_validate_port__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_libs_validate_port__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validate_create_render_cache_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate/create-render-cache-map */ "./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js");
/* harmony import */ var _validate_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validate/i18n */ "./node_modules/koot/ReactApp/server/validate/i18n.js");
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validate/template */ "./node_modules/koot/ReactApp/server/validate/template.js");
/* harmony import */ var _middlewares_router_dev__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/router-dev */ "./node_modules/koot/ReactApp/server/middlewares/router-dev.js");
/* harmony import */ var _middlewares_isomorphic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./middlewares/isomorphic */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js");
/* harmony import */ var _middlewares_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./middlewares/static */ "./node_modules/koot/ReactApp/server/middlewares/static.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable no-console */

/* __KOOT_DEV_SSR__ */
// import koaCompress from 'koa-compress';




 // import getDist from '../../utils/get-dist-path';
// import sleep from '../../utils/sleep';


 // import validateReduxConfig from '../../React/validate/redux-config'





 // require('@babel/register')
// require('@babel/polyfill')

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var fs = __webpack_require__(/*! fs-extra */ "fs-extra"); // const path = require('path');
// const chalk = require('chalk');
//

/**
 * 启动同构服务器 (KOA)
 * @async
 */


var startKootIsomorphicServer = async function startKootIsomorphicServer() {
  console.log("\r\n  \x1B[93m[koot/server]\x1B[0m initializing...");
  var serverBefore = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].before,
      serverAfter = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].after,
      renderCacheConfig = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].renderCache,
      proxyRequestOrigin = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].proxyRequestOrigin,
      templateInject = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].inject; // 决定服务器启动端口
  // 如果端口不可用，取消启动流程

  /** @type {Number} 服务器启动端口 */

  var port = await _libs_validate_port__WEBPACK_IMPORTED_MODULE_5___default()();
  if (!port) throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_3___default()('VALIDATE_PORT', 'unavailable')); // 确定 Redux 相关配置
  // const reduxConfig = await validateReduxConfig(reduxConfigRaw)
  // 确定模板内容

  var template = await Object(_validate_template__WEBPACK_IMPORTED_MODULE_8__["default"])(_KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["template"]); // 渲染缓存

  var renderCacheMap = await Object(_validate_create_render_cache_map__WEBPACK_IMPORTED_MODULE_6__["default"])(renderCacheConfig); // 语言包写入内存

  var locales =  true ? await Object(_validate_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])() : undefined; // 创建 Koa 实例 (app)

  /** @type {Koa} Koa 服务器实例 */

  var app = _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_2___default()(); // 生命周期: 服务器启动前

  if (false) {}
  if (typeof serverBefore === 'function') await serverBefore(app); // [开发环境] 挂载中间件: 主服务器代理

  if (false) {} // [生产环境] 挂载中间件: 静态资源压缩
  // if (!__DEV__)
  //     app.use(
  //         koaCompress({
  //             filter: contentType =>
  //                 /^text\//i.test(contentType) ||
  //                 /\/(javascript|css|json|ld\+json)$/i.test(contentType),
  //             threshold: 2048,
  //             flush: require('zlib').Z_SYNC_FLUSH
  //         })
  //     );
  // 挂载中间件: 静态资源访问

  app.use(Object(_middlewares_static__WEBPACK_IMPORTED_MODULE_11__["default"])(function () {
    if (_typeof(_KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].koaStatic) === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].koaStatic;
    if (_typeof(_KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].static) === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].static;
    return {};
  }())); // 挂载中间件: 同构服务器

  app.use(Object(_middlewares_isomorphic__WEBPACK_IMPORTED_MODULE_10__["default"])({
    // reduxConfig,
    renderCacheMap: renderCacheMap,
    locales: locales,
    proxyRequestOrigin: proxyRequestOrigin,
    template: template,
    templateInject: templateInject
  })); // 生命周期: 服务器即将启动

  if (false) {}
  if (typeof serverAfter === 'function') await serverAfter(app); // 初始化完成，准备启动服务器

  _libs_log__WEBPACK_IMPORTED_MODULE_4___default()(' ', 'server', "init \x1B[32m".concat('OK', "\x1B[0m!")); // [开发环境] 中间件: 请求完成后，触发 server/index.js 保存，让 PM2 重启服务器

  if (false) {} // 启动服务器


  await new Promise(function (resolve) {
    if (false) {} else {
      app.listen(port);
      setTimeout(function () {
        console.log("\x1B[32m\u221A\x1B[0m " + "\x1B[93m[koot/server]\x1B[0m listening port \x1B[32m".concat(port, "\x1B[0m"));
        console.log(' ');
        return resolve();
      });
    }
  }).catch(function (err) {
    if (err instanceof Error) err.message = _libs_error_msg__WEBPACK_IMPORTED_MODULE_3___default()('KOA_APP_LAUNCH', err.message);
    throw err;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (startKootIsomorphicServer);
startKootIsomorphicServer().catch(function (err) {
  console.error(err);
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../render-cache */ "./node_modules/koot/ReactApp/server/render-cache.js");
/* harmony import */ var _render_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_render_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n/locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1__);

 // import isI18nEnabled from '../../../i18n/is-enabled'

/**
 * 创建服务器渲染缓存存储空间
 *
 * Map 的第一级为语种ID，每个语种有独立的空间，非多语言项目为 `` (空String)
 *
 * @async
 * @param {Object|boolean} renderCacheConfig
 * @returns {Map}
 */

var createRenderCacheMap = async function createRenderCacheMap() {
  var renderCacheConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // console.log({ renderCacheConfig });
  if (renderCacheConfig === false) return false;
  var renderCache = new Map();

  if (_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.length) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(function (localeId) {
      renderCache.set(localeId, new _render_cache__WEBPACK_IMPORTED_MODULE_0___default.a(renderCacheConfig));
    });
  } else {
    renderCache.set('', new _render_cache__WEBPACK_IMPORTED_MODULE_0___default.a(renderCacheConfig));
  }

  return renderCache;
};

/* harmony default export */ __webpack_exports__["default"] = (createRenderCacheMap);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/i18n.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/i18n.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n/locales */ "./node_modules/koot/i18n/locales.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");
/**
 * 验证 i18n 相关信息
 *
 * 如果没有开启多语言，不进行任何操作
 *
 * - 将所有可用语种ID写入内存
 * - 将所有语种的语言包写入内存
 *
 * _开发环境_ 同构中间件需执行该验证方法
 *
 * @async
 * @returns {void}
 */


var validateI18n = async function validateI18n() {
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return;
  /** @type {Object} 完整语言包配置 */

  var localesFull = getLocalesFull(); // /** @type {String} 多语言类型 */
  // const type = JSON.parse(process.env.KOOT_I18N_TYPE) || false
  // const localeIds = []

  var locales = {};
  localesFull.forEach(function (arr) {
    var _arr2 = _slicedToArray(arr, 2),
        localeId = _arr2[0],
        localeObj = _arr2[1]; // localeIds.push(localeId)


    locales[localeId] = localeObj;
  }); // 服务器端注册多语言

  Object(_i18n_locales__WEBPACK_IMPORTED_MODULE_1__["setLocales"])(locales);
  return locales;
};

/* harmony default export */ __webpack_exports__["default"] = (validateI18n);
/**
 * 获取完整语言包配置
 * @returns {Object}
 */

var getLocalesFull = function getLocalesFull() {
  var locales = JSON.parse("[[\"zh\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\zh.json\",\"./locales/zh.json\"],[\"en\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\en.json\",\"./locales/en.json\"],[\"ja\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\ja.json\",\"./locales/ja.json\"]]");
  return locales.map(function (l) {
    return [l[0], fs.readJsonSync( false ? undefined : path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default()(), 'server', l[3]), 'utf-8'), l[2], l[3]];
  }); // return JSON.parse(process.env.KOOT_I18N_LOCALES);
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/template.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/template.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 验证模板内容
 * 
 * 获取环境常量 `process.env.KOOT_HTML_TEMPLATE`，并返回合法的值
 * 
 * @async
 * @param {String} template Koot 配置项: `template`
 * @returns {String}
 */

var validateTemplate = async function validateTemplate(template) {
  if (false) {}

  if (true) template = "<!DOCTYPE html>\r\n<html <%- inject.htmlLang -%>>\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n\r\n    <title><%= inject.title -%></title>\r\n\r\n    <base target=\"_self\">\r\n\r\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no,email=no,address=no\">\r\n    <meta name=\"format-detection\" content=\"email=no\">\r\n    <meta name=\"format-detection\" content=\"address=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no\">\r\n    <meta name=\"HandheldFriendly\" content=\"true\">\r\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n\r\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\r\n    <link rel=\"icon\" href=\"/icon-256.png\" type=\"image/png\" sizes=\"256x256\">\r\n    <link rel=\"icon\" href=\"/icon-128.png\" type=\"image/png\" sizes=\"128x128\">\r\n    <%- inject.manifest -%>\r\n\r\n    <meta name=\"theme-color\" content=\"#263238\" />\r\n\r\n    <!-- IE/Edge -->\r\n    <meta name=\"renderer\" content=\"webkit\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\r\n\r\n    <!-- iOS -->\r\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\r\n\r\n    <meta name=\"copyright\" content=\"Copyright (c) 2018 fleet.moe\">\r\n\r\n    <%- inject.metas -%>\r\n    <%- inject.styles -%>\r\n    <%- inject.definePath -%>\r\n</head>\r\n<body>\r\n    <div id=\"boat-loader\">LOADING...</div>\r\n    <div id=\"root\"><%- inject.react %></div>\r\n\r\n    <%- inject.svgIcons %>\r\n\r\n    <script type=\"text/javascript\"><%- content('critical.js') %></script>\r\n    <%- inject.scripts %>\r\n    \r\n    <script>\r\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n\r\n        ga('create', 'UA-63582858-4', 'auto');\r\n        ga('send', 'pageview');\r\n    </script>\r\n</body>\r\n</html>\r\n\n<!-- rendered by using koot.js 0.12.0-beta.0 -->";
  if (typeof template !== 'string') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_TEMPLATE', '`config.template` should be Pathname or EJS String')); // if (template.substr(0, 2) === './') {
  //     // template = require(`raw-loader?` + path.resolve(
  //     //     getCwd(), template
  //     // ))
  //     template = fs.readFileSync(path.resolve(
  //         getCwd(), template
  //     ), 'utf-8')
  // }
  // process.env.KOOT_HTML_TEMPLATE = template

  return template;
};

/* harmony default export */ __webpack_exports__["default"] = (validateTemplate);

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports =  false ? undefined : {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/dev-request-uri.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/defaults/dev-request-uri.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * [开发环境] 特殊的请求 URI
 */
module.exports = {
  dll: '/__koot_dev_dll',
  serviceWorker: "/__KOOT_DEV_SERVICE_WORKER.".concat( true ? encodeURIComponent("The Fleet (Yuubari)") : undefined, ".js")
};

/***/ }),

/***/ "./node_modules/koot/defaults/koa-static.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/defaults/koa-static.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  maxage: 0,
  hidden: false,
  index: 'index.html',
  defer: false,
  gzip: true,
  extensions: false
};

/***/ }),

/***/ "./node_modules/koot/defaults/render-cache.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/render-cache.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  maxAge: 5 * 1000,
  maxCount: 50
};

/***/ }),

/***/ "./node_modules/koot/defaults/webpack-dev-server.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/defaults/webpack-dev-server.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  publicPathPrefix: '__koot_webpack_dev_server__',
  entryClientHMR: 'webpack-dev-server-client',
  serviceWorkerFilename: '__KOOT_DEV_SERVICE_WORKER__.js',
  hmrOptions: {// multiStep: true,
    // fullBuildTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? 500 : undefined,
    // requestTimeout: process.env.WEBPACK_BUILD_TYPE === 'spa' ? undefined : 1000
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/*! exports provided: I18N_INIT, I18N_SET_LOCALES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_INIT", function() { return I18N_INIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18N_SET_LOCALES", function() { return I18N_SET_LOCALES; });
var I18N_INIT = '@@KOOT@@I18N_INIT';
var I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/get-language-list-from-state.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/i18n/get-language-list-from-state.js ***!
  \****************************************************************/
/*! exports provided: getLanguagelistFromState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguagelistFromState", function() { return getLanguagelistFromState; });
/**
 * 从当前的 Redux state 中获取语言列表字符串
 * 如果 uri search 中存在 fb_locale，将该值放在第一位
 * 
 * @param {object} state 当前的 Redux state
 * 
 * @returns {string} 语言列表，使用分号(;)分割
 */
var getLanguagelistFromState = function getLanguagelistFromState(_ref) {
  var _ref$server = _ref.server,
      server = _ref$server === void 0 ? {} : _ref$server,
      routing = _ref.routing;
  var fb_locale = routing && routing.locationBeforeTransitions && routing.locationBeforeTransitions.query ? routing.locationBeforeTransitions.query.fb_locale : null;
  var lang = server.lang;
  if (fb_locale) lang = fb_locale + ';' + lang;
  return lang || '';
};
/* harmony default export */ __webpack_exports__["default"] = (getLanguagelistFromState);

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\zh.json\",\"./locales/zh.json\"],[\"en\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\en.json\",\"./locales/en.json\"],[\"ja\",{},\"E:\\\\Projects\\\\WhoCallsTheFleet\\\\yuubari\\\\src\\\\locales\\\\ja.json\",\"./locales/ja.json\"]]") || [];
    } else {
      locales = [];
    }
  }

  return locales;
};

/***/ }),

/***/ "./node_modules/koot/i18n/get-type.js":
/*!********************************************!*\
  !*** ./node_modules/koot/i18n/get-type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = function () {
  return isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;
};

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
var isI18nEnabled = function isI18nEnabled() {
  if (!JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

var result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = function () {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(function (l) {
      return l[0];
    });
    if (!result.length) result = [''];
  }

  return result;
}();

/***/ }),

/***/ "./node_modules/koot/i18n/locales.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/i18n/locales.js ***!
  \*******************************************/
/*! exports provided: locales, setLocales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocales", function() { return setLocales; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global __KOOT_SSR__:false, __KOOT_SSR_STATE__:false */
var __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

var getLocalesObject = function getLocalesObject() {
  if (true) {
    if (false) {} else if ((typeof __KOOT_SSR__ === "undefined" ? "undefined" : _typeof(__KOOT_SSR__)) === 'object') return __KOOT_SSR__.locales;
  }

  if (false) {}

  return false;
};
/**
 * @type {Object}
 * 语言包对象
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 */


var locales = function () {
  return getLocalesObject() || {};
}();
var setLocales = function setLocales() {
  var newLocales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // const obj = getLocalesObject()
  if (locales) Object.assign(locales, newLocales); // console.log({ newLocales, obj, locales, 'global.__KOOT_SSR__': global.__KOOT_SSR__ })

  return locales;
};
/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 根据输入的语言列表字符串，返回语言列表array
 * 
 * @param {string} langList 语言列表字符串，eg: zh-CN,zh;q=0.8,en;q=0.6
 * 
 * @returns {array} 语言列表
 */
/* harmony default export */ __webpack_exports__["default"] = (function (langList) {
  return langList.split(',').map(function (value) {
    return value.split(';')[0];
  });
});

/***/ }),

/***/ "./node_modules/koot/i18n/parse-locale-id.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/i18n/parse-locale-id.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);


/**
 * 检查单项，如果和availableLocales内的项目有匹配，返回匹配，否则返回null
 * @param {string} input 检查项
 * @returns 匹配的 localeId 或 null
 */

var checkItem = function checkItem(input) {
  var id; // input = input.toLowerCase().replace(/_/g, '-')

  _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
    if (_localeId == input) id = _localeId;
    return id;
  });

  var parseSeg = function parseSeg(id, localeId, str) {
    if (id) return id;
    var seg = localeId.split(str);

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0] + '-' + seg[seg.length - 1]) id = _localeId;
        return id;
      });
    }

    if (!id) {
      _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.some(function (_localeId) {
        if (_localeId == seg[0]) id = _localeId;
        return id;
      });
    }

    return id || null;
  };

  id = parseSeg(id, input, '-');
  return id || null;
};
/**
 * 根据输入内容返回availableLocales内匹配的语言包ID(localeId)
 * 如果没有匹配，返回availableLocales的第一项
 * 注：仅为返回，没有赋值操作
 * 
 * @param {string|array} input 
 * 
 * @returns 匹配的语言包ID localeId 或 availableLocaleIds[0]
 */


var parseLocaleId = function parseLocaleId(input) {
  // 检查是否包含分号，如果是，按语言列表处理为array
  // eg: zh-CN,zh;q=0.8,en;q=0.6
  if (typeof input === 'string' && input.indexOf(';') > -1) input = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(input); // 检查是否为array

  if (Array.isArray(input)) {
    var id;
    input.some(function (thisId) {
      id = checkItem(thisId);
      return id;
    });
    return id || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
  } else if (!input && typeof navigator !== 'undefined') return parseLocaleId(navigator.languages || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0]);else if (input) return checkItem(input) || _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];

  return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
};

/* harmony default export */ __webpack_exports__["default"] = (parseLocaleId);

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/*! exports provided: reducerLocaleId, actionInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducerLocaleId", function() { return reducerLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionInit", function() { return actionInit; });
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");
/* harmony import */ var _get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-language-list-from-state */ "./node_modules/koot/i18n/get-language-list-from-state.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



 // import locales from '../locales'


/**
 * Redux reducer: 初始化 localeId
 * 
 * @param {*} state 
 * @param {*} action
 * 
 * @returns {*} state
 */

var reducerLocaleId = function reducerLocaleId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"]:
      return action.localeId;
  }

  return state;
}; // /**
//  * Redux reducer: 初始化 locales
//  * 
//  * @param {*} state 
//  * @param {*} action
//  * 
//  * @returns {*} state
//  */
// export const reducerLocales = (state = {}, action) => {
//     switch (action.type) {
//         case I18N_SET_LOCALES:
//             return Object.assign({}, state, action.locales)
//     }
//     return state
// }

/**
 * Redux action: 初始化
 * 
 * @param {Object} state 
 * @returns {Object}
 */

var actionInit = function actionInit(state) {
  // setLocaleId(localeId)
  var localeId =  true ? init(Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(_typeof(state) === 'object' ? Object(_get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : state), state.localeId) : undefined; // setLocaleId(localeId)

  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_3__["I18N_INIT"],
    localeId: '' + localeId
  };
}; // /**
//  * Redux action: 设置语言包内容对象
//  * 
//  * @returns {Object}
//  */
// export const actionLocales = (state) => {
//     return {
//         type: I18N_SET_LOCALES,
//         locales: locales[state.localeId]
//     }
// }

/**
 * 服务器环境：根据语言列表，初始化i18n，获得并赋值 localeId
 * 
 * @param {array|string} langList 语言列表
 * 
 * @returns (如果已初始化)locales[localeId]
 */

var init = function init() {
  var langList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var localeId = arguments.length > 1 ? arguments[1] : undefined;

  if (true) {
    // console.log(locales[localeId])
    if (typeof langList === 'string') if (langList.indexOf(';') > -1) langList = Object(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__["default"])(langList);else return init([langList], localeId);
    var parsed = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(langList); // if (parsed) setLocaleId(parsed)
    // else setLocaleId(localeId)

    if (parsed) return parsed;
    return localeId; // if (locales[localeId]) return locales[localeId]
  }
};

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-lang-from-ctx.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-lang-from-ctx.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_4__);
// import cookie from 'cookie'





/**
 * 根据 KOA Context 获取语种ID
 * @param {Object} ctx KOA Context
 * @returns {String} 匹配到的或当前项目默认语种ID
 */

var getLangFromCtx = function getLangFromCtx(ctx) {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_4___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) { var pathname; } else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]];
      ctx.redirect(ctx.url.replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)$")), '').replace(new RegExp("(\\?|&)".concat(_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"], "=(.+)&")), ''));
      return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  var cookieValue = ctx.cookies.get("spLocaleId");

  if (cookieValue && _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(cookieValue)) {
    return cookieValue;
  } // console.log('ctx.cookies.get(process.env.KOOT_I18N_COOKIE_KEY)', cookieValue)
  // 如果上一步没有结果，从请求 headers 中获取


  if (ctx.header['accept-language']) {
    // const acceptLanguage = ctx.header['accept-language']
    // const acceptLanguages = acceptLanguage.split(',').map(str => str.split(';')[0])
    // console.log('acceptLanguage', acceptLanguage)
    // console.log('acceptLanguages', acceptLanguages)
    // console.log('parsed locale id', parseLocaleId(acceptLanguage))
    var localeId = Object(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__["default"])(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale(_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0], ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId 
 */

var setLocale = function setLocale(localeId, ctx) {
  _set_cookie__WEBPACK_IMPORTED_MODULE_3___default()(localeId, ctx);
  return localeId;
};

/***/ }),

/***/ "./node_modules/koot/i18n/set-cookie.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/set-cookie.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 设置 cookie
 * @param {String} localeId
 * @param {Object} ctx Koa context
 */
module.exports = function (localeId, ctx) {
  var maxDate = 365;
  var options = {};

  if (typeof process.env.KOOT_I18N_COOKIE_DOMAIN === 'string' && process.env.KOOT_I18N_COOKIE_DOMAIN) {
    options.domain = process.env.KOOT_I18N_COOKIE_DOMAIN;
  }

  if (false) {}

  if (true) {// TODO: set cookie on server
    // console.log('ctx.host', ctx.host)
    // console.log('ctx.hostname', ctx.hostname)
    // console.log(process.env.KOOT_I18N_COOKIE_KEY, localeId, { domain: ctx.hostname, ...options })
    // ctx.cookies.set(process.env.KOOT_I18N_COOKIE_KEY, localeId, {
    //     domain: ctx.hostname,
    //     maxAge: maxDate * 24 * 60 * 60 * 1000,
    //     signed: false,
    //     ...options
    // })
  }
};

/***/ }),

/***/ "./node_modules/koot/index.js":
/*!************************************!*\
  !*** ./node_modules/koot/index.js ***!
  \************************************/
/*! exports provided: createStore, reduxForCreateStore, extend, getLocaleId, resetLocaleId, localeId, getStore, resetStore, store, getHistory, resetHistory, history, getCache, getCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduxForCreateStore", function() { return reduxForCreateStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocaleId", function() { return getLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetLocaleId", function() { return resetLocaleId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeId", function() { return localeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStore", function() { return getStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetStore", function() { return resetStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistory", function() { return getHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetHistory", function() { return resetHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "history", function() { return history; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCache", function() { return getCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCtx", function() { return getCtx; });
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_2__["default"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* global
    __KOOT_SSR__: false,
    __KOOT_STORE__: false,
    __KOOT_HISTORY__: false,
    __KOOT_LOCALEID__: false,
    __KOOT_CTX__: false,
*/
 // ============================================================================

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */



var createStore = _React_redux__WEBPACK_IMPORTED_MODULE_1__["createStore"],
    reduxForCreateStore = _objectWithoutProperties(_React_redux__WEBPACK_IMPORTED_MODULE_1__, ["createStore"]);


/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================

var getLocaleId = function getLocaleId() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_LOCALEID__ === 'undefined') return '';
    return __KOOT_LOCALEID__ || '';
  }
};
var resetLocaleId = function resetLocaleId() {
  return localeId = getLocaleId();
};
var localeId = function () {
  return getLocaleId();
}(); // ============================================================================

var getStore = function getStore() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_STORE__ === 'undefined') return '';
    return __KOOT_STORE__;
  }
};
var resetStore = function resetStore() {
  return store = getStore();
};
var store = function () {
  return getStore();
}(); // ============================================================================

var getHistory = function getHistory() {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_HISTORY__ === 'undefined') return '';
    return __KOOT_HISTORY__;
  }
};
var resetHistory = function resetHistory() {
  return history = getHistory();
};
var history = function () {
  return getHistory();
}(); // ============================================================================

var getCache = function getCache(localeId) {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default()()) return {};

  if (false) {}

  if (true) {
    var SSR =  false ? undefined : __KOOT_SSR__;
    var cache = SSR.globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get(getLocaleId());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

var getCtx = function getCtx() {
  if (false) {}
  if (false) {}
  if (typeof __KOOT_CTX__ === 'undefined') return undefined;
  return __KOOT_CTX__;
}; // ============================================================================

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/create-koa-app.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/libs/create-koa-app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Koa = __webpack_require__(/*! koa */ "koa");

var helmet = __webpack_require__(/*! koa-helmet */ "koa-helmet");

var removeSlashes = __webpack_require__(/*! ./koa-middlewares/remove-slashes */ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js");
/**
 * 创建 Koa App
 * @returns {Object} app
 */


var create = function create() {
  var app = new Koa();
  app.use(helmet());
  app.use(removeSlashes);
  return app;
};

module.exports = create;

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
var errorMsg = function errorMsg(type, msg) {
  if (typeof type === 'string' && typeof msg === 'string') return "".concat(type, "::").concat(msg);
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/filter-state.js":
/*!************************************************!*\
  !*** ./node_modules/koot/libs/filter-state.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var itemsBlacklist = ['localeId', 'realtimeLocation', 'routing', 'server'];
/**
 * 过滤 state，将黑名单内的项目删除，并返回过滤后的 state
 *
 * 黑名单中包括：
 * - `localeId`
 * - `realtimeLocation`
 * - `routing`
 * - `server`
 *
 * @param {Object} state
 * @returns {Object}
 */

var filter = function filter(oldState) {
  return itemsBlacklist.reduce(function (state, item) {
    var _ = state[item],
        rest = _objectWithoutProperties(state, [item].map(_toPropertyKey));

    return rest;
  }, oldState);
};

module.exports = filter;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = function () {
  var cwd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getCwd();
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return path.resolve(cwd, 'logs/dev', type ? ".".concat(type) : '');
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = function () {
  return  false ? undefined : "public";
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @param {Number} bundleVersionsKeep 
 * @returns {String}
 */


module.exports = function (dist, bundleVersionsKeep) {
  if (!result) {
    var base = path.resolve(dist, getDirDistPublicFoldername());

    if (true) {
      // console.log({
      //     result,
      //     base,
      //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
      // })
      result = path.resolve(base, "koot-1577438257942");
    } else {}
  }

  return result;
};

var result;

/***/ }),

/***/ "./node_modules/koot/libs/get-free-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/get-free-port.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var portfinder = __webpack_require__(/*! portfinder */ "portfinder");
/**
 * 获取可用端口
 * @async
 * @param {Number|Number[]|Object} 正在使用、被占用或保留的端口
 * @returns {Number}
 */


module.exports = async function (portUsed) {
  var portStart = 3000;
  var portEnd = 65535;
  /** @type {Array[]} 使用 portfinder 检查的端口号范围组 */

  var ranges = [[portStart, portEnd]]; // console.log('portUsed', portUsed)

  /** @type {Number[]} 忽略的端口号 */

  var portsIgnore = [];

  if (isNumber(portUsed)) {
    portsIgnore.push(parseInt(portUsed));
  } else if (Array.isArray(portUsed)) {
    portUsed.filter(function (value) {
      return isNumber(value);
    }).forEach(function (port) {
      return portsIgnore.push(parseInt(port));
    });
  } else if (_typeof(portUsed) === 'object') {
    Object.values(portUsed).filter(function (value) {
      return isNumber(value);
    }).forEach(function (port) {
      return portsIgnore.push(parseInt(port));
    });
  } // console.log('portsIgnore', portsIgnore)
  // 如果存在忽略的端口号，修改 ranges 为多组模式


  if (portsIgnore.length) {
    ranges.shift();
    var lastPort = portStart;
    portsIgnore.forEach(function (port) {
      ranges.push([lastPort, port - 1]);
      lastPort = port;
    });
  } // console.log('ranges', ranges)


  for (var _i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
    var _ranges$_i = _slicedToArray(_ranges[_i], 2),
        start = _ranges$_i[0],
        end = _ranges$_i[1];

    var result = await getFreePort(start, end); // console.log(result)

    if (result) return result;
  }
};

var isNumber = function isNumber(value) {
  return Boolean(typeof value === 'number' || !isNaN(value));
};
/**
 * 获取范围内可用的端口
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Number}
 */


var getFreePort = async function getFreePort(start, end) {
  return portfinder.getPortPromise({
    port: start,
    // minimum port
    stopPort: end // maximum port

  }).then(function (port) {
    //
    // `port` is guaranteed to be a free port
    // in this scope.
    //
    return port;
  }).catch(function ()
  /*err*/
  {//
    // Could not get a free port, `err` contains the reason.
    //
  });
};

/***/ }),

/***/ "./node_modules/koot/libs/get-log-msg.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/get-log-msg.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var chalk = __webpack_require__(/*! chalk */ "chalk");
/**
 * 生成 log 消息内容
 * @variation 只提供内容
 * @param {String} content 内容
 */

/**
* 生成 log 消息内容
* @variation 提供标记和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} content 内容
*/

/**
* 生成 log 消息内容
* @variation 提供标记、类型和内容
* @param {String|Boolean} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/


var generateLogMsg = function generateLogMsg(mark, type, content) {
  if (typeof mark !== 'undefined' && typeof type === 'undefined' && typeof content === 'undefined') return generateLogMsg('', '', mark);
  if (typeof type !== 'undefined' && typeof content === 'undefined') return generateLogMsg(mark, '', type);
  var markColor = 'cyan';
  if (mark === false) mark = '';

  switch (mark.toLowerCase()) {
    case '×':
    case 'x':
    case 'x ':
    case 'error':
      {
        mark = '× ';
        markColor = 'redBright';
        break;
      }

    case 'success':
      {
        mark = '√ ';
        markColor = 'green';
        break;
      }

    case 'cb':
    case 'callback':
      {
        mark = '⚑ ';
        markColor = 'cyan';
        break;
      }

    case 'warning':
      {
        mark = '! ';
        markColor = 'yellowBright';
        break;
      }

    case '':
      {
        break;
      }

    default:
      {
        mark = '  ';
      }
  }

  var typeColor = function () {
    switch (type) {
      default:
        return 'yellowBright';
    }
  }();

  return (mark === '' ? '' : chalk[markColor](mark)) + chalk[typeColor]("[koot".concat(type ? "/".concat(type) : '', "] ")) + content;
};

module.exports = generateLogMsg;

/***/ }),

/***/ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/koa-middlewares/remove-slashes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * KOA 中间件: 移除 URL 起始部分的多余斜线
 * @param {Object} koaStaticConfig
 * @return {Function}
 */
var removeSlashesMiddleware = async function removeSlashesMiddleware(ctx, next) {
  if (/^\/{2}/.test(ctx.url)) {
    return ctx.redirect(ctx.origin + ctx.url.replace(/^\/{2}/, '/'));
  }

  await next();
};

module.exports = removeSlashesMiddleware;

/***/ }),

/***/ "./node_modules/koot/libs/log.js":
/*!***************************************!*\
  !*** ./node_modules/koot/libs/log.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */

/**
 * 命令行 Log
 * @variation 1
 * @param {String} content 内容
 */

/**
* 命令行 Log
* @variation 2
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/

/**
* 命令行 Log
* @variation 3
* @param {String} [mark=""] 标记
* @param {String} [type=""] 操作类型
* @param {String} content 内容
*/
module.exports = function () {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js").apply(void 0, arguments));
};

/***/ }),

/***/ "./node_modules/koot/libs/validate-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/validate-port.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var isPortReachable = __webpack_require__(/*! is-port-reachable */ "is-port-reachable");

var inquirer = __webpack_require__(/*! inquirer */ "inquirer"); // const osLocale = require('os-locale')


var getPathnameDevServerStart = __webpack_require__(/*! ../utils/get-pathname-dev-server-start */ "./node_modules/koot/utils/get-pathname-dev-server-start.js");

var getFreePort = __webpack_require__(/*! ./get-free-port */ "./node_modules/koot/libs/get-free-port.js");
/**
 * @async
 * @returns {Number|Boolean} 如果最终没有结果，返回 false，否则返回可用的端口数
 */


var doValidatePort = async function doValidatePort() {
  // [开发环境] 如果 flag 文件中写有端口，直接使用该端口
  if (false) { var infos; } // const locale = osLocale.sync()
  // console.log('locale', locale)
  // 如果环境变量中不存在 SERVER_PORT 同时全局变量 __SERVER_PORT__ 存在可用值，赋值环境变量
  // __SERVER_PORT__ 为 webpack 打包时使用 definePlugin 替换入的全局变量值


  if (typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined') process.env.SERVER_PORT = "8080";
  /** @type {Boolean} 环境变量 SERVER_PORT 的端口号是否可用 */

  var isPortInEnvFree = await isPortFree(process.env.SERVER_PORT); // 如果可用，返回该端口号，结束

  if (isPortInEnvFree) return process.env.SERVER_PORT; // 如果不可用，输出日志

  logPortTaken(process.env.SERVER_PORT); // [开发环境] 修改 flag 文件，标记端口被占用，并结束

  if (false) {}
  /** @type {Boolean} 端口是否被占用 */


  var isPortTaken = true;
  /** @type {Number} 端口结果 */

  var port;

  while (isPortTaken) {
    var askForPort = await inquirer.prompt([{
      type: 'input',
      name: 'port',
      message: 'Please input a new port number (leave empty for cancel)',
      validate: function validate(input) {
        if (!input) return true;
        if (isNaN(input)) return 'Must be a number or null';
        return true;
      }
    }]);

    if (!askForPort.port) {
      isPortTaken = false;
      port = undefined;
    } else {
      port = await isPortFree(askForPort.port);
      isPortTaken = !port ? true : false;
      if (isPortTaken) logPortTaken(askForPort.port);
    }
  }

  if (port) return port;
  return false;
};
/**
 * 验证目标端口是否可用
 * @async
 * @param {Number|String} port
 * @returns {Number|Boolean} 如果端口可用，返回该端口；如果不可用，返回 false
 */


var isPortFree = async function isPortFree(port) {
  var isPortOpen = !(await isPortReachable(port));
  if (isPortOpen) return port;
  return false;
};
/**
 * log: 目标端口被占用
 * @param {Number|String} port
 */


var logPortTaken = function logPortTaken(port) {
  console.log("\x1B[31m\xD7\x1B[0m " + "\x1B[93m[koot/server]\x1B[0m port \x1B[32m".concat(port, "\x1B[0m has been taken."));
};
/**
 * 验证服务器启动端口
 *
 * 依次检查以下变量/常量，当发现可用值时进入下一步
 * - `__SERVER_PORT__`
 * - `process.env.SERVER_PORT`
 *
 * 检查设定好的端口号是否可用
 * - 如果可用，直接返回结果
 * - 如果不可用，提示下一步操作
 * - 如果不可用同时之后的操作取消，返回 false
 *
 * _生产环境_
 * 设定环境变量
 * - `SERVER_PORT` -> 指定的端口
 *
 * _开发环境_
 * 设定环境变量
 * - `SERVER_PORT` -> 随机端口
 * - `SERVER_PORT_DEV_MAIN` -> 指定的端口
 *
 * @async
 * @returns {Number|Boolean} 如果最终没有结果，返回 false，否则返回可用的端口数
 */


var validatePort = async function validatePort() {
  var port = await doValidatePort();
  if (!port) return false;

  if (false) { var portFree; }

  return port;
}; // export default validatePort;


module.exports = validatePort;

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");
/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = function () {
  var dist = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getDistPath();
  if (false) {}
  return path.resolve(dist, '.public-chunkmap.json');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

var getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @returns {Object}
 */

var getChunkmap = function getChunkmap(localeId) {
  var getFullResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (localeId === true) return getChunkmap(getFullResult || undefined, true);
  var isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var i18nType = getI18nType();
  var isI18nDefault = isI18nEnabled && i18nType === 'default';

  var chunkmap = function () {
    if (cachedChunkmap) return cachedChunkmap;
    var chunkmap;
    if (_typeof(global.chunkmap) === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".public\":\"public/koot-1561061228544/\",\".entrypoints\":{\"critical\":[\"public/koot-1561061228544/includes/chunk.7da0482283548f037e89.js\",\"public/koot-1561061228544/includes/extract.25.4c651e65c81cd7a8a3f6.css\",\"public/koot-1561061228544/includes/entry.4c651e65c81cd7a8a3f6.js\"],\"polyfill\":[\"public/koot-1561061228544/includes/entry.96792a5ce3d2b8331d59.js\"],\"client\":[\"public/koot-1561061228544/includes/chunk.7da0482283548f037e89.js\",\"public/koot-1561061228544/includes/entry.b9a0c9d3122c6293c85f.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1561061228544/includes/chunk.7da0482283548f037e89.js\",\"public/koot-1561061228544/includes/entry.7475f4c24506773d0c82.js\"]},\".files\":{\"Equipment Details~Home~People~People Details~Ship Details~Ship List.js\":\"public/koot-1561061228544/includes/chunk.070f6abbe3178234a378.js\",\"Arsenal~Equipments~Fleet Builder (WIP)~TP Calculator.js\":\"public/koot-1561061228544/includes/chunk.8146de4bd2f6b956796b.js\",\"Equipment Details~People Details~Ship Details~Ship List.js\":\"public/koot-1561061228544/includes/chunk.c9fc2b324a827bae4ea4.js\",\"commons.js\":\"public/koot-1561061228544/includes/chunk.7da0482283548f037e89.js\",\"Arsenal~Equipment Details.js\":\"public/koot-1561061228544/includes/chunk.847132a045c1d8204ca5.js\",\"vendors~Home~Ship Details.js\":\"public/koot-1561061228544/includes/chunk.3b2e80fc74b87a546b8f.js\",\"About.js\":\"public/koot-1561061228544/includes/chunk.11d930939f05a6b8b375.js\",\"Academy.js\":\"public/koot-1561061228544/includes/chunk.4b39a4e7070181af0c99.js\",\"Arsenal.js\":\"public/koot-1561061228544/includes/chunk.50855ab6df8b3947c09f.js\",\"Equipment Details.js\":\"public/koot-1561061228544/includes/chunk.caf0a96cce89914c59b6.js\",\"Equipments.js\":\"public/koot-1561061228544/includes/chunk.acc466090b8a3e39fb5b.js\",\"Ex-CGs.js\":\"public/koot-1561061228544/includes/chunk.2c722c4f2917aa6a693d.js\",\"Expeditions.js\":\"public/koot-1561061228544/includes/chunk.8157aac547b9bedd5099.js\",\"Fleet Builder.js\":\"public/koot-1561061228544/includes/chunk.320de966f36795490f2e.js\",\"Fleet Builder (WIP).js\":\"public/koot-1561061228544/includes/chunk.3ef692404c12f3272cd7.js\",\"Fleet Builder Fleet Details.js\":\"public/koot-1561061228544/includes/chunk.13112ff874485c8ab48b.js\",\"Home.js\":\"public/koot-1561061228544/includes/chunk.47454f832193ec22ef23.js\",\"People.js\":\"public/koot-1561061228544/includes/chunk.f97732d8de7e1fd35c03.js\",\"People Details.js\":\"public/koot-1561061228544/includes/chunk.1e03ea850c366c987a14.js\",\"Ship Details.css\":\"public/koot-1561061228544/includes/extract.19.d00572f8160fc652ac04.css\",\"Ship Details.js\":\"public/koot-1561061228544/includes/chunk.d00572f8160fc652ac04.js\",\"Ship List.js\":\"public/koot-1561061228544/includes/chunk.152580d46e026861440e.js\",\"Sorties.js\":\"public/koot-1561061228544/includes/chunk.049e68e17584859b7169.js\",\"TP Calculator.js\":\"public/koot-1561061228544/includes/chunk.dde48f5912c0a7aca6a1.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1561061228544/includes/entry.7475f4c24506773d0c82.js\",\"client.js\":\"public/koot-1561061228544/includes/entry.b9a0c9d3122c6293c85f.js\",\"critical.css\":\"public/koot-1561061228544/includes/extract.25.4c651e65c81cd7a8a3f6.css\",\"critical.js\":\"public/koot-1561061228544/includes/entry.4c651e65c81cd7a8a3f6.js\",\"polyfill.js\":\"public/koot-1561061228544/includes/entry.96792a5ce3d2b8331d59.js\",\"vendors~Ship Details.css\":\"public/koot-1561061228544/includes/extract.27.98bc7205e135a43963df.css\",\"vendors~Ship Details.js\":\"public/koot-1561061228544/includes/chunk.98bc7205e135a43963df.js\",\"vendors~nedb.js\":\"public/koot-1561061228544/includes/chunk.c4f22f32316468e44e9c.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1561061228544/includes/extract.all.7499c4ae23916c222d5af89f944f591c.css\"},\"service-worker\":[\"public/koot-1561061228544/service-worker.js\"],\".zh\":{\".public\":\"public/koot-1577438257942/\",\".entrypoints\":{\"critical\":[\"public/koot-1577438257942/includes/chunk.6cb090feb2e21500bd91.js\",\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\"],\"polyfill\":[\"public/koot-1577438257942/includes/chunk.6cb090feb2e21500bd91.js\",\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\"],\"client\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.6cb090feb2e21500bd91.js\",\"public/koot-1577438257942/includes/entry.632d294cb1d53c0478ca.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.6cb090feb2e21500bd91.js\",\"public/koot-1577438257942/includes/entry.fd1888336c921f14ebc3.js\"]},\".files\":{\"libs-others.js\":\"public/koot-1577438257942/includes/chunk.6cb090feb2e21500bd91.js\",\"libs.js\":\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"About.js\":\"public/koot-1577438257942/includes/chunk.f01db6dea0561d71cc24.js\",\"Academy.js\":\"public/koot-1577438257942/includes/chunk.dee0ef0fe81c915e7d12.js\",\"Arsenal.js\":\"public/koot-1577438257942/includes/chunk.5860b2c49e506a05b741.js\",\"Equipment Details.js\":\"public/koot-1577438257942/includes/chunk.f575beaddd849dbb637d.js\",\"Equipments.js\":\"public/koot-1577438257942/includes/chunk.cbe5f0d3aa212ab484fa.js\",\"Ex-CGs.js\":\"public/koot-1577438257942/includes/chunk.bdf73d4de0f615af9a15.js\",\"Expeditions.js\":\"public/koot-1577438257942/includes/chunk.18083b1a6251b9374c4a.js\",\"Fleet Builder.js\":\"public/koot-1577438257942/includes/chunk.48bc3f7e9c1efa94fc76.js\",\"Fleet Builder (WIP).js\":\"public/koot-1577438257942/includes/chunk.0143f4b4e087a4649fab.js\",\"Fleet Builder Fleet Details.js\":\"public/koot-1577438257942/includes/chunk.760c01dd4d55b681a166.js\",\"Home.js\":\"public/koot-1577438257942/includes/chunk.5f41d54d7eaac5057ac6.js\",\"People.js\":\"public/koot-1577438257942/includes/chunk.2f650d394b214549fafa.js\",\"People Details.js\":\"public/koot-1577438257942/includes/chunk.40f9699e615a4df36811.js\",\"Ship Details.css\":\"public/koot-1577438257942/includes/extract.15.d19978929947428b68bb.css\",\"Ship Details.js\":\"public/koot-1577438257942/includes/chunk.d19978929947428b68bb.js\",\"Ship List.js\":\"public/koot-1577438257942/includes/chunk.bc386b42837fd8cab756.js\",\"Sorties.js\":\"public/koot-1577438257942/includes/chunk.362917d96c8db7a37d78.js\",\"TP Calculator.js\":\"public/koot-1577438257942/includes/chunk.2325ef0116aba95c27f9.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1577438257942/includes/entry.fd1888336c921f14ebc3.js\",\"client.js\":\"public/koot-1577438257942/includes/entry.632d294cb1d53c0478ca.js\",\"critical.css\":\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"critical.js\":\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\",\"polyfill.js\":\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\",\"vendors~Ship Details.css\":\"public/koot-1577438257942/includes/extract.23.9635b71006c6c21053d9.css\",\"vendors~Ship Details.js\":\"public/koot-1577438257942/includes/chunk.9635b71006c6c21053d9.js\",\"vendors~nedb.js\":\"public/koot-1577438257942/includes/chunk.49ee3d83a45e6108a947.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1577438257942/includes/extract.all.691a9983ff2d203513045160fdcf378f.small.css\"},\"service-worker\":[\"public/koot-1577438257942/service-worker.zh.js\"]},\".en\":{\".public\":\"public/koot-1577438257942/\",\".entrypoints\":{\"critical\":[\"public/koot-1577438257942/includes/chunk.5d28010c503547e50100.js\",\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\"],\"polyfill\":[\"public/koot-1577438257942/includes/chunk.5d28010c503547e50100.js\",\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\"],\"client\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.5d28010c503547e50100.js\",\"public/koot-1577438257942/includes/entry.d2396a19a323f0fb4bba.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.5d28010c503547e50100.js\",\"public/koot-1577438257942/includes/entry.d9edec0977d0f3fd7118.js\"]},\".files\":{\"libs-others.js\":\"public/koot-1577438257942/includes/chunk.5d28010c503547e50100.js\",\"libs.js\":\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"About.js\":\"public/koot-1577438257942/includes/chunk.a8713a3ac4445b006d2c.js\",\"Academy.js\":\"public/koot-1577438257942/includes/chunk.0f535166cdba4745c86e.js\",\"Arsenal.js\":\"public/koot-1577438257942/includes/chunk.6f5ae07fbe3265febf56.js\",\"Equipment Details.js\":\"public/koot-1577438257942/includes/chunk.b12709b686d1e7fa34fa.js\",\"Equipments.js\":\"public/koot-1577438257942/includes/chunk.3aeb25e3e3dd3275b62f.js\",\"Ex-CGs.js\":\"public/koot-1577438257942/includes/chunk.e452621cac4cc6ee0684.js\",\"Expeditions.js\":\"public/koot-1577438257942/includes/chunk.1bbcc1c8e3252d5c9984.js\",\"Fleet Builder.js\":\"public/koot-1577438257942/includes/chunk.1fc55a87d5b8c3f86135.js\",\"Fleet Builder (WIP).js\":\"public/koot-1577438257942/includes/chunk.11073f8980b5a8572c78.js\",\"Fleet Builder Fleet Details.js\":\"public/koot-1577438257942/includes/chunk.24e89cfa32292ab2f2cb.js\",\"Home.js\":\"public/koot-1577438257942/includes/chunk.7e55148a065daee051ae.js\",\"People.js\":\"public/koot-1577438257942/includes/chunk.f06d8e84346a7cf38a33.js\",\"People Details.js\":\"public/koot-1577438257942/includes/chunk.03113cbd157820d8da8a.js\",\"Ship Details.css\":\"public/koot-1577438257942/includes/extract.15.468831f3578f66cd8c2b.css\",\"Ship Details.js\":\"public/koot-1577438257942/includes/chunk.468831f3578f66cd8c2b.js\",\"Ship List.js\":\"public/koot-1577438257942/includes/chunk.da7787c6792aa3c36622.js\",\"Sorties.js\":\"public/koot-1577438257942/includes/chunk.e2adfe86d642f6b732a9.js\",\"TP Calculator.js\":\"public/koot-1577438257942/includes/chunk.f87bfa1da255b7c2bb71.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1577438257942/includes/entry.d9edec0977d0f3fd7118.js\",\"client.js\":\"public/koot-1577438257942/includes/entry.d2396a19a323f0fb4bba.js\",\"critical.css\":\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"critical.js\":\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\",\"polyfill.js\":\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\",\"vendors~Ship Details.css\":\"public/koot-1577438257942/includes/extract.23.9635b71006c6c21053d9.css\",\"vendors~Ship Details.js\":\"public/koot-1577438257942/includes/chunk.9635b71006c6c21053d9.js\",\"vendors~nedb.js\":\"public/koot-1577438257942/includes/chunk.49ee3d83a45e6108a947.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1577438257942/includes/extract.all.691a9983ff2d203513045160fdcf378f.small.css\"},\"service-worker\":[\"public/koot-1577438257942/service-worker.en.js\"]},\".ja\":{\".public\":\"public/koot-1577438257942/\",\".entrypoints\":{\"critical\":[\"public/koot-1577438257942/includes/chunk.70b258b84540c82dea75.js\",\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\"],\"polyfill\":[\"public/koot-1577438257942/includes/chunk.70b258b84540c82dea75.js\",\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\"],\"client\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.70b258b84540c82dea75.js\",\"public/koot-1577438257942/includes/entry.b918ed6f6fb69e736b98.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"public/koot-1577438257942/includes/chunk.70b258b84540c82dea75.js\",\"public/koot-1577438257942/includes/entry.d9edec0977d0f3fd7118.js\"]},\".files\":{\"libs-others.js\":\"public/koot-1577438257942/includes/chunk.70b258b84540c82dea75.js\",\"libs.js\":\"public/koot-1577438257942/includes/chunk.308b1274d96ef7d2863f.js\",\"About.js\":\"public/koot-1577438257942/includes/chunk.0a7f2f8f3bfda0c7151f.js\",\"Academy.js\":\"public/koot-1577438257942/includes/chunk.4f526f06cbecacd3c21f.js\",\"Arsenal.js\":\"public/koot-1577438257942/includes/chunk.88c348c802b9f3bbb61c.js\",\"Equipment Details.js\":\"public/koot-1577438257942/includes/chunk.991de28d74475652bae8.js\",\"Equipments.js\":\"public/koot-1577438257942/includes/chunk.cffbd867a6f1f8d5a499.js\",\"Ex-CGs.js\":\"public/koot-1577438257942/includes/chunk.bb01ff250e3cdad07faf.js\",\"Expeditions.js\":\"public/koot-1577438257942/includes/chunk.a1d0ccfde69da0f98110.js\",\"Fleet Builder.js\":\"public/koot-1577438257942/includes/chunk.550cad8679aa5b5b6dac.js\",\"Fleet Builder (WIP).js\":\"public/koot-1577438257942/includes/chunk.a0051acba5f149570799.js\",\"Fleet Builder Fleet Details.js\":\"public/koot-1577438257942/includes/chunk.74bf64e39475f405a631.js\",\"Home.js\":\"public/koot-1577438257942/includes/chunk.7e55148a065daee051ae.js\",\"People.js\":\"public/koot-1577438257942/includes/chunk.cd32eb5a910afbee4837.js\",\"People Details.js\":\"public/koot-1577438257942/includes/chunk.af997e01864779134486.js\",\"Ship Details.css\":\"public/koot-1577438257942/includes/extract.15.b88eac559ed3a81d9fbc.css\",\"Ship Details.js\":\"public/koot-1577438257942/includes/chunk.b88eac559ed3a81d9fbc.js\",\"Ship List.js\":\"public/koot-1577438257942/includes/chunk.9f3687fec7e0ef94af51.js\",\"Sorties.js\":\"public/koot-1577438257942/includes/chunk.4051efbe10f51729c881.js\",\"TP Calculator.js\":\"public/koot-1577438257942/includes/chunk.cf0127eb295d355c0a44.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/koot-1577438257942/includes/entry.d9edec0977d0f3fd7118.js\",\"client.js\":\"public/koot-1577438257942/includes/entry.b918ed6f6fb69e736b98.js\",\"critical.css\":\"public/koot-1577438257942/includes/extract.21.d211d32164bc2eee139c.css\",\"critical.js\":\"public/koot-1577438257942/includes/entry.d211d32164bc2eee139c.js\",\"polyfill.js\":\"public/koot-1577438257942/includes/entry.f04d9edbde27f65055b5.js\",\"vendors~Ship Details.css\":\"public/koot-1577438257942/includes/extract.23.9635b71006c6c21053d9.css\",\"vendors~Ship Details.js\":\"public/koot-1577438257942/includes/chunk.9635b71006c6c21053d9.js\",\"vendors~nedb.js\":\"public/koot-1577438257942/includes/chunk.49ee3d83a45e6108a947.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/koot-1577438257942/includes/extract.all.691a9983ff2d203513045160fdcf378f.small.css\"},\"service-worker\":[\"public/koot-1577438257942/service-worker.ja.js\"]}}");
    } catch (e) {
      chunkmap = false;
    }

    if (_typeof(chunkmap) !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = fs.readJsonSync(getChunkmapPath());
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  }();

  if (_typeof(chunkmap) === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[".".concat(localeId)] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

var getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

var getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


var getFilePath = function getFilePath(filename, localeId) {
  var isPathname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 如果第一个参数为 true，表示标记为 pathname
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true);

  if (typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  var pathPublic = getPublicPath();
  var i18nType = getI18nType();
  var isI18nDefault = i18nType === 'default';
  var isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(new RegExp('(^\\.\\/|^)public\\/' + ( true ? "".concat("koot-1577438257942", "\\/") : undefined)), '');
  var chunkmap = getChunkmap(localeId);
  var regPublicPath = chunkmap['.public'] ? new RegExp("(^\\.\\/|^)".concat(chunkmap['.public'])) : /(^\.\/|^)public\//;
  /**************************************************************************
   * ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   * │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  var getResultPathname = function getResultPathname(pathname) {
    return pathPublic + pathname.replace(regPublicPath, '');
  };
  /**************************************************************************
   * ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *  ││├┤ ├┴┐│ ││ ┬
   * ─┴┘└─┘└─┘└─┘└─┘
   *************************************************************************/
  // console.log('----------')
  // console.log(filename)
  // console.log(chunkmap)
  // console.log(chunkmap['.files'])
  // console.log(chunkmap['.files'][filename])
  // console.log(regPublicPath)
  // console.log(pathPublic + chunkmap['.files'][filename].replace(regPublicPath, ''))
  // console.log({
  //     regPublicPath,
  //     'process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER': process.env.KOOT_CLIENT_BUNDLE_SUBFOLDER
  // })
  // console.log('----------')

  /**************************************************************************
   * ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   * │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object' && _typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    var prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (_typeof(chunkmap['.files']) === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + ".".concat(filename);
  }
  /** @type {String} 目标文件的扩展名 */


  var extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  var basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    var files = chunkmap['.entrypoints'][basename].filter(function (file) {
      return path.extname(file) === extname;
    });
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(function (file) {
      return getResultPathname(file);
    });
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (_typeof(chunkmap) === 'object') {
    var result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(function (value) {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式


  if (fs.existsSync(path.resolve(pathPublic, filename))) {
    return '/' + filename;
  }

  console.warn("File not found:" + (isI18nDefault ? "[".concat(localeId, "] ") : '') + " ".concat(filename));
  return ''; // const segs = pathname.split('/').filter(seg => seg !== '/')
  // const file = segs.pop()
  // const dir = segs.length ? `${segs.join('/')}/` : ''
  // return `/${dir}${
  //     require('./filterTargetFile')(
  //         require('./readFilesInPath')(`./${distPathname}/public/${appName ? `${appName}/` : ''}${dir}`),
  //         file
  //     )}`
};

module.exports = getFilePath; // module.exports = (pathname, pathDist = 'dist') => {
//     if (__DEV__) {
//         return `http://localhost:${process.env.WEBPACK_DEV_SERVER_PORT || '3001'}/dist/${pathname}`
//     } else {
//         const segs = pathname.split('/').filter(seg => seg !== '/')
//         const file = segs.pop()
//         const dir = segs.length ? `${segs.join('/')}/` : ''
//         return `/${dir}${
//             require('./filterTargetFile')(
//                 require('./readFilesInPath')(`./${pathDist}/public/${dir}`),
//                 file
//             )}`
//     }
// }

/***/ }),

/***/ "./node_modules/koot/utils/get-cwd.js":
/*!********************************************!*\
  !*** ./node_modules/koot/utils/get-cwd.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = function () {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs-extra */ "fs-extra");

var path = __webpack_require__(/*! path */ "path");

var getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

var p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = function () {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : function () {
      var cwd = getCwd();
      var parent = path.resolve(cwd, '..');
      var result = path.resolve(cwd, "dist-webapp");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist-webapp");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist-webapp");
    }();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-pathname-dev-server-start.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/utils/get-pathname-dev-server-start.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "path");

var getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

module.exports = function (cwd) {
  return path.resolve(getDirDevTmp(cwd), '.server-start');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");
/**
 * 获取浏览器环境中的访问根路径
 * @returns {String} 浏览器环境中的访问根路径
 */


module.exports = function () {
  var isDev =  false ||  true && false;

  if (false) {}

  if (isDev) {
    var port = getWDSport();
    var origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    return "".concat(origin, ":").concat(port, "/dist/");
  }

  return '/';
};

/***/ }),

/***/ "./node_modules/koot/utils/get-sw-pathname.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/utils/get-sw-pathname.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getPublic = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");
/**
 * 获取 service-worker 访问 URI
 * @param {String} [localeId] 如果提供，则会返回 [NAME].[localeId].js
 * @returns {String}
 */


module.exports = function (localeId) {
  if (false) {} // 如果 localeId 是对象，表示 chunkmap

  if (_typeof(localeId) === 'object') {
    var _localeId$serviceWor = localeId['service-worker'],
        sw = _localeId$serviceWor === void 0 ? [] : _localeId$serviceWor;

    if (sw.length) {
      var file = sw[0];
      var p = localeId['.public'];
      var regex = new RegExp("^".concat(p));
      var P = getPublic();
      if (regex.test(file)) return P + file.replace(regex, '');
      return P + file.replace(/^public\//, '');
    }

    return '';
  }

  var i18nType = JSON.parse("true") ? JSON.parse("\"default\"") : undefined;
  var pwaPathname = JSON.parse("\"/service-worker.js\"");
  if (i18nType !== 'default') return pwaPathname;
  if (!localeId) return pwaPathname;
  var chunks = pwaPathname.split('.');
  chunks.splice(chunks.length - 1, 0, localeId);
  return chunks.join('.');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = function () {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || false;
};

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */


function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
} // Add methods to `Stack`.


Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var _Symbol = root.Symbol;
module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);

    case 1:
      return func.call(thisArg, args[0]);

    case 2:
      return func.call(thisArg, args[0], args[1]);

    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }

  return func.apply(thisArg, args);
}

module.exports = apply;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function assignMergeValue(object, key, value) {
  if (value !== undefined && !eq(object[key], value) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */


function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** Built-in value references. */


var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */

var baseCreate = function () {
  function object() {}

  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }

    if (objectCreate) {
      return objectCreate(proto);
    }

    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */


var baseFor = createBaseFor();
module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }

  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */


var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */

function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }

  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }

  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");
/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }

  baseFor(source, function (srcValue, key) {
    stack || (stack = new Stack());

    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + '', object, source, stack) : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }

      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;

/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");
/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */


function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }

  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;

    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;

      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }

  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }

  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */


function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}

module.exports = baseSet;

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var baseSetToString = !defineProperty ? identity : function (func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};
module.exports = baseSetToString;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */

function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }

  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }

  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */


function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */

function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }

  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */


function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;
  array || (array = Array(length));

  while (++index < length) {
    array[index] = source[index];
  }

  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */


function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }

    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }

  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");
/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */


function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }

    object = Object(object);

    while (++index < length) {
      var source = sources[index];

      if (source) {
        assigner(object, source, index, customizer);
      }
    }

    return object;
  });
}

module.exports = createAssigner;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];

      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }

    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/** Built-in value references. */

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);

  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }

  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */

var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");
/** Used to stand-in for `undefined` hash values. */


var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */


function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */

function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */


function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }

  var type = _typeof(index);

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used to match property names within property paths. */


var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");
/** Used to detect methods masquerading as native. */


var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/** Used for built-in method references. */


var arrayProto = Array.prototype;
/** Built-in value references. */

var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");
/** Used as the maximum memoize cache size. */


var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }

    return key;
  });
  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];

  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }

  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */

var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */

var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    } // Legacy `process.binding('util')` for Node.js < 10.


    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");
/* Built-in method references for those with the same name as other `lodash` methods. */


var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */

function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }

    index = -1;
    var otherArgs = Array(start + 1);

    while (++index < start) {
      otherArgs[index] = args[index];
    }

    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */


var setToString = shortOut(baseSetToString);
module.exports = setToString;

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */

function shortOut(func) {
  var count = 0,
      lastCalled = 0;
  return function () {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;

    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }

    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */


function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);
  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Used as the size to enable large array optimizations. */


var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */

function stackSet(key, value) {
  var data = this.__data__;

  if (data instanceof ListCache) {
    var pairs = data.__data__;

    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }

    data = this.__data__ = new MapCache(pairs);
  }

  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");
/** Used to match property names within property paths. */


var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */

var stringToPath = memoizeCapped(function (string) {
  var result = [];

  if (string.charCodeAt(0) === 46
  /* . */
  ) {
      result.push('');
    }

  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

module.exports = constant;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** Used for built-in method references. */


var objectProto = Object.prototype;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */

var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */

var isArguments = baseIsArguments(function () {
  return arguments;
}()) ? baseIsArguments : function (value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;
module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */


function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */


function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */

var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */

var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */

var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");
/** `Object#toString` result references. */


var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  if (!isObject(value)) {
    return false;
  } // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.


  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = _typeof(value);

  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && _typeof(value) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var objectTag = '[object Object]';
/** Used for built-in method references. */

var funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */

var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */

var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }

  var proto = getPrototype(value);

  if (proto === null) {
    return true;
  }

  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");
/** `Object#toString` result references. */


var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */

function isSymbol(value) {
  return _typeof(value) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");
/* Node.js helper references. */


var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */


function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");
/** Error message constants. */


var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Expose `MapCache`.


memoize.Cache = MapCache;
module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");
/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */


var merge = createAssigner(function (object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
module.exports = merge;

/***/ }),

/***/ "./node_modules/lodash/set.js":
/*!************************************!*\
  !*** ./node_modules/lodash/set.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js");
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */


function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

module.exports = set;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");
/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */


function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? undefined : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/_server/inject.js":
/*!*******************************!*\
  !*** ./src/_server/inject.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koot/utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koot/utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/* harmony import */ var koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koot/utils/get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/* harmony import */ var koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_4__);




 // const readFile = require('koot/utils/read-client-file')

var pathDist = koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default()();
var manifestLastModified = new Map();
/* harmony default export */ __webpack_exports__["default"] = ({
  manifest: function manifest(template, state) {
    var localeId = state.localeId;
    var filename = "manifest-".concat(localeId, ".json");

    var _getChunkmap = koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_4___default()(localeId),
        publicPath = _getChunkmap['.public'];

    if (!manifestLastModified.has(localeId)) manifestLastModified.set(localeId, fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(pathDist, publicPath, filename)).mtime.valueOf());
    return "<link rel=\"manifest\" href=\"/".concat(filename, "?").concat(manifestLastModified.get(localeId) || '', "\">");
  },
  svgIcons: "<div class=\"hide\">".concat("<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\r<defs>\r<symbol id=\"icon-image-compare\" viewBox=\"0 0 64 64\">\r\r<path d=\"M52 22c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z\"></path>\r<path d=\"M0 12v40c0 2.2 1.8 4 4 4h24v-4h-23.993c-0.003-0.002-0.005-0.005-0.007-0.007v-39.986c0.002-0.002 0.005-0.005 0.007-0.007h23.993v-4h-24c-2.2 0-4 1.8-4 4z\"></path>\r<path d=\"M60 8h-24v-8h-4v64h4v-8h24c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4zM60 51.993c-0.002 0.002-0.005 0.005-0.007 0.007h-23.993v-4h20v-20l-14 12h-4l-2-2.5v-25.5h23.993c0.003 0.002 0.005 0.005 0.007 0.007v39.986z\"></path>\r<path d=\"M8 44v4h20v-20.5l-6-7.5z\"></path>\r</symbol>\r<symbol id=\"icon-book3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M56 8v52h-42c-3.314 0-6-2.686-6-6s2.686-6 6-6h38v-48h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48v-56h-4z\"></path>\r<path d=\"M14.004 52v0c-0.001 0-0.002 0-0.004 0-1.104 0-2 0.895-2 2s0.896 2 2 2c0.001 0 0.002-0 0.004-0v0h37.993v-4h-37.993z\"></path>\r</symbol>\r<symbol id=\"icon-lifebuoy\" viewBox=\"0 0 64 64\">\r\r<path d=\"M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM20 32c0-6.628 5.372-12 12-12s12 5.372 12 12-5.373 12-12 12-12-5.373-12-12zM57.874 42.717v0l-11.089-4.593c0.782-1.886 1.215-3.955 1.215-6.124s-0.433-4.238-1.215-6.124l11.089-4.593c1.369 3.301 2.126 6.921 2.126 10.717s-0.757 7.416-2.126 10.717v0zM42.717 6.126v0 0l-4.593 11.089c-1.886-0.782-3.955-1.215-6.124-1.215s-4.238 0.433-6.124 1.215l-4.593-11.089c3.301-1.369 6.921-2.126 10.717-2.126s7.416 0.757 10.717 2.126zM6.126 21.283l11.089 4.593c-0.782 1.887-1.215 3.955-1.215 6.124s0.433 4.238 1.215 6.124l-11.089 4.593c-1.369-3.301-2.126-6.921-2.126-10.717s0.757-7.416 2.126-10.717zM21.283 57.874l4.593-11.089c1.887 0.782 3.955 1.215 6.124 1.215s4.238-0.433 6.124-1.215l4.593 11.089c-3.301 1.369-6.921 2.126-10.717 2.126s-7.416-0.757-10.717-2.126z\"></path>\r</symbol>\r<symbol id=\"icon-at-sign\" viewBox=\"0 0 64 64\">\r\r<path d=\"M54.627 9.373c-6.044-6.044-14.080-9.373-22.628-9.373s-16.583 3.329-22.628 9.373c-6.044 6.044-9.373 14.080-9.373 22.627s3.329 16.583 9.373 22.627c6.044 6.044 14.080 9.373 22.628 9.373 4.798 0 9.412-1.037 13.717-3.082 1.995-0.948 2.844-3.334 1.897-5.33s-3.334-2.844-5.33-1.897c-3.223 1.531-6.683 2.308-10.284 2.308-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24v4c0 2.206-1.794 4-4 4s-4-1.794-4-4v-16c0-2.209-1.791-4-4-4-1.624 0-3.021 0.968-3.648 2.358-2.433-1.495-5.294-2.358-8.352-2.358-8.822 0-16 7.178-16 16s7.178 16 16 16c4.182 0 7.993-1.613 10.847-4.249 2.203 2.598 5.489 4.249 9.153 4.249 6.617 0 12-5.383 12-12v-4c0-8.547-3.329-16.583-9.373-22.628zM32 40c-4.411 0-8-3.589-8-8s3.589-8 8-8c4.411 0 8 3.589 8 8s-3.589 8-8 8z\"></path>\r</symbol>\r<symbol id=\"icon-hammer-wrench\" viewBox=\"0 0 80 64\">\r\r<path d=\"M30.785 44.035l9.181 9.181-7.292 9.364c-1.336 1.748-3.703 1.905-5.258 0.349l-6.343-6.343c-1.556-1.556-1.398-3.922 0.349-5.258l9.364-7.292zM79.594 16.406l-9.594 9.594-12-12 9.594-9.594c-1.156-0.265-2.359-0.406-3.594-0.406-8.837 0-16 7.163-16 16 0 3.187 0.932 6.157 2.539 8.651l-8.932 6.956-13.607-13.607 18-18h-20l-8.879 8.879-0.879-0.879h-4.243v4.243l0.879 0.879-12.879 12.879 10 10 12-12 36 36 6-6-15.607-15.607 6.956-8.932c2.494 1.606 5.464 2.539 8.651 2.539 8.837 0 16-7.163 16-16 0-1.236-0.14-2.439-0.406-3.594z\"></path>\r</symbol>\r<symbol id=\"icon-download5\" viewBox=\"0 0 64 64\">\r\r<path d=\"M8 48h48v12h-48v-12z\"></path>\r<path d=\"M40 24v-20h-16v20h-14l22 22 22-22z\"></path>\r</symbol>\r<symbol id=\"icon-anchor\" viewBox=\"0 0 64 64\">\r\r<path d=\"M56 36v8.262c-5.033 5.14-12.065 10.103-20 11.407v-23.669h12v-4l-12-4.684c4.66-1.648 8-6.091 8-11.316 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.225 3.339 9.669 8 11.316v0.001l-12 4.683v4h12v23.669c-7.936-1.304-14.968-6.266-20-11.407v-8.262h-8v4c0 8 16 24 32 24s32-16 32-24v-4h-8zM36 12c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c2.209 0 4 1.791 4 4z\"></path>\r</symbol>\r<symbol id=\"icon-stack-check\" viewBox=\"0 0 64 64\">\r\r<path d=\"M20 4v4.619l-10.476 1.472 0.681 4.842-10.204 2.926 13.231 46.141 40.754-11.686 2.234-0.314h7.781v-48h-44zM15.716 59.516l-11.232-39.171 6.23-1.787 5.49 39.065 11.987-1.685-12.476 3.578zM19.29 53.529l-5.671-40.353 6.382-0.897v39.721h10.172l-10.882 1.529zM24 48v-40h36v10l-2.828-2.828-17.172 15.171-9.172-7.172-3.657 3.657 12.828 14.828 20-21.921v28.264h-36z\"></path>\r</symbol>\r<symbol id=\"icon-plus3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M60 28h-24v-24h-8v24h-24v8h24v24h8v-24h24z\"></path>\r</symbol>\r<symbol id=\"icon-checkmark4\" viewBox=\"0 0 64 64\">\r\r<path d=\"M61.441 4c-20.906 15.823-40.956 36.987-40.956 36.987l-14.449-12.988-6.036 6.149c5.939 5.581 19.698 20.325 24.352 25.851 13.099-21.886 26.717-38.209 39.648-53.135l-2.559-2.865z\"></path>\r</symbol>\r<symbol id=\"icon-loop\" viewBox=\"0 0 64 64\">\r\r<path d=\"M56 32v4c0 2.204-1.796 4-4 4h-28.008l0.008-8-16 12 16 12-0.008-8h28.008c6.618 0 12-5.39 12-12v-4h-8zM8 28c0-2.21 1.796-4 4-4h28v8l15.984-12-15.984-12v8h-28c-6.618 0-12 5.376-12 12v4h8v-4z\"></path>\r</symbol>\r<symbol id=\"icon-hanger\" viewBox=\"0 0 64 64\">\r\r<path d=\"M59.082 54.318l-27.082-17.41v-1.978c2.44-1.41 4-4.042 4-6.93 0-4.411-3.589-8-8-8-3.385 0-6.416 2.143-7.544 5.333-0.368 1.041 0.177 2.184 1.219 2.552s2.184-0.178 2.552-1.219c0.564-1.595 2.080-2.666 3.773-2.666 2.206 0 4 1.794 4 4 0 1.693-1.072 3.209-2.666 3.773-0.799 0.282-1.333 1.038-1.333 1.886l-0 3.249-27.081 17.41c-0.573 0.368-0.918 1.002-0.918 1.682v2c0 3.309 2.692 6 6 6h48c3.309 0 6-2.691 6-6v-2c0-0.681-0.346-1.314-0.918-1.682zM56 58c0 1.103-0.897 2-2 2h-48c-1.103 0-2-0.897-2-2v-0.908l26-16.714 26 16.714v0.908z\"></path>\r</symbol>\r<symbol id=\"icon-search\" viewBox=\"0 0 64 64\">\r\r<path d=\"M62.016 54.462l-15.16-12.893c-1.567-1.41-3.243-2.058-4.597-1.995 3.578-4.192 5.74-9.63 5.74-15.573 0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24c5.944 0 11.382-2.162 15.574-5.74-0.063 1.354 0.585 3.030 1.995 4.597l12.893 15.16c2.208 2.453 5.814 2.66 8.014 0.46s1.993-5.806-0.46-8.014zM24 40c-8.836 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z\"></path>\r</symbol>\r<symbol id=\"icon-cog\" viewBox=\"0 0 64 64\">\r\r<path d=\"M58.362 38.141c-3.358-5.816-1.339-13.269 4.51-16.655l-6.289-10.893c-1.797 1.053-3.886 1.657-6.115 1.657-6.721 0-12.169-5.484-12.169-12.249h-12.579c0.017 2.088-0.505 4.205-1.622 6.141-3.358 5.816-10.822 7.794-16.679 4.422l-6.289 10.893c1.811 1.029 3.378 2.537 4.493 4.467 3.352 5.807 1.345 13.245-4.482 16.639l6.289 10.893c1.791-1.044 3.87-1.641 6.088-1.641 6.7 0 12.134 5.45 12.169 12.185h12.578c-0.005-2.067 0.517-4.161 1.623-6.076 3.352-5.807 10.798-7.787 16.651-4.438l6.289-10.893c-1.799-1.029-3.356-2.531-4.465-4.452zM32 44.958c-7.157 0-12.959-5.801-12.959-12.958s5.802-12.958 12.959-12.958c7.157 0 12.958 5.802 12.958 12.958s-5.801 12.958-12.958 12.958z\"></path>\r</symbol>\r<symbol id=\"icon-menu\" viewBox=\"0 0 64 64\">\r\r<path d=\"M4 12h56v8h-56v-8z\"></path>\r<path d=\"M4 28h56v8h-56v-8z\"></path>\r<path d=\"M4 44h56v8h-56v-8z\"></path>\r</symbol>\r<symbol id=\"icon-warning2\" viewBox=\"0 0 64 64\">\r\r<path d=\"M63.122 57.235v0l-27.317-54.444c-1.046-1.86-2.426-2.791-3.805-2.791s-2.759 0.93-3.805 2.791l-27.317 54.444c-2.093 3.721-0.313 6.765 3.957 6.765h54.332c4.269 0 6.050-3.044 3.956-6.765zM32 56c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zM36 40c0 2.209-1.791 4-4 4s-4-1.791-4-4v-12c0-2.209 1.791-4 4-4s4 1.791 4 4v12z\"></path>\r</symbol>\r<symbol id=\"icon-question6\" viewBox=\"0 0 64 64\">\r\r<path d=\"M32 52c-2.209 0-4-1.791-4-4v-4.11c0-5.639 4.498-9.907 8.847-14.035 3.516-3.337 7.153-6.788 7.153-9.856 0-5.973-4.329-12-14-12-7.148 0-13.13 5.348-13.914 12.44-0.243 2.196-2.218 3.779-4.415 3.536-2.196-0.243-3.779-2.22-3.536-4.415 0.591-5.35 3.128-10.289 7.142-13.907 4.045-3.646 9.274-5.654 14.724-5.654 5.898 0 11.336 1.853 15.312 5.219 4.313 3.651 6.688 8.9 6.688 14.781 0 6.505-5.124 11.368-9.646 15.659-2.978 2.826-6.354 6.030-6.354 8.232l0 4.11c0 2.209-1.791 4-4 4z\"></path>\r<path d=\"M36 60c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z\"></path>\r</symbol>\r<symbol id=\"icon-cross\" viewBox=\"0 0 64 64\">\r\r<path d=\"M55.828 13.828l-5.657-5.657-18.172 18.172-18.172-18.172-5.657 5.657 18.172 18.172-18.172 18.172 5.657 5.657 18.172-18.172 18.172 18.172 5.657-5.657-18.172-18.172z\"></path>\r</symbol>\r<symbol id=\"icon-arrow-up3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M0 42l6 6 26-26 26 26 6-6-32-32-32 32z\"></path>\r</symbol>\r<symbol id=\"icon-arrow-right3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M22 0l-6 6 26 26-26 26 6 6 32-32-32-32z\"></path>\r</symbol>\r<symbol id=\"icon-arrow-down3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M64 22l-6-6-26 26-26-26-6 6 32 32 32-32z\"></path>\r</symbol>\r<symbol id=\"icon-arrow-left3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M42 64l6-6-26-26 26-26-6-6-32 32 32 32z\"></path>\r</symbol>\r<symbol id=\"icon-sort-amount-desc\" viewBox=\"0 0 64 64\">\r\r<path d=\"M20 48v-48h-8v48h-10l14 14 14-14h-10z\"></path>\r<path d=\"M28 0h36v8h-36v-8z\"></path>\r<path d=\"M28 12h28v8h-28v-8z\"></path>\r<path d=\"M28 24h20v8h-20v-8z\"></path>\r<path d=\"M28 36h12v8h-12v-8z\"></path>\r</symbol>\r<symbol id=\"icon-checkbox-checked\" viewBox=\"0 0 64 64\">\r\r<path d=\"M56 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM28 49.657l-14.828-14.828 5.657-5.657 9.171 9.171 19.172-19.172 5.657 5.657-24.828 24.828z\"></path>\r</symbol>\r<symbol id=\"icon-paragraph-left\" viewBox=\"0 0 64 64\">\r\r<path d=\"M0 4h64v8h-64zM0 20h40v8h-40zM0 52h40v8h-40zM0 36h64v8h-64z\"></path>\r</symbol>\r<symbol id=\"icon-share3\" viewBox=\"0 0 64 64\">\r\r<path d=\"M54 44c-2.822 0-5.37 1.171-7.188 3.052l-26.938-13.469c0.082-0.516 0.126-1.044 0.126-1.583s-0.044-1.067-0.126-1.583l26.938-13.469c1.818 1.881 4.366 3.052 7.188 3.052 5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 0.539 0.044 1.067 0.126 1.583l-26.938 13.469c-1.818-1.881-4.366-3.052-7.188-3.052-5.523 0-10 4.477-10 10s4.477 10 10 10c2.822 0 5.37-1.171 7.188-3.052l26.938 13.469c-0.082 0.516-0.126 1.044-0.126 1.583 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z\"></path>\r</symbol>\r</defs>\r</svg>\r", "</div>"),
  definePath: function definePath(template, state) {
    return "<script>" + "window.__CRITICAL_EXTRA_OLD_IE_FILENAME__ = \"".concat(koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3___default()('polyfill.js', state.localeId), "\";") + "window.__SERVICE_WORKER_FILENAME__ = \"".concat(koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3___default()('service-worker.js', state.localeId), "\";") + "</script>";
  }
});

/***/ }),

/***/ "./src/_server/lifecycle/after.js":
/*!****************************************!*\
  !*** ./src/_server/lifecycle/after.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function () {});

/***/ }),

/***/ "./src/_server/lifecycle/before.js":
/*!*****************************************!*\
  !*** ./src/_server/lifecycle/before.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var path = __webpack_require__(/*! path */ "path");

var getDistPath = __webpack_require__(/*! koot/utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

var Koa = __webpack_require__(/*! koa */ "koa");

var mount = __webpack_require__(/*! koa-mount */ "koa-mount");

var koaStatic = __webpack_require__(/*! koa-static */ "koa-static");

/* harmony default export */ __webpack_exports__["default"] = (async function (app) {
  // 静态目录: 图片资源
  {
    var staticPicsServer = new Koa();

    var dirPics = function () {
      if (false) {}
      return path.resolve(getDistPath(), 'pics');
    }();

    staticPicsServer.use(koaStatic(dirPics, {
      maxage: 30 * 24 * 60 * 60 * 1000,
      hidden: false,
      defer: false,
      gzip: true,
      extensions: false
    }));
    app.use(mount("/pics", staticPicsServer));
  } // /.well-known

  {
    var staticWellKnown = new Koa();
    var dir = path.resolve(getDistPath(), 'public/.well-known');
    staticWellKnown.use(koaStatic(dir, {
      hidden: true
    }));
    app.use(mount("/.well-known", staticWellKnown));
  }
});

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./node_modules/koot/ReactApp/server ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\WhoCallsTheFleet\yuubari\node_modules\koot\ReactApp\server */"./node_modules/koot/ReactApp/server/index.js");


/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inquirer");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "is-port-reachable":
/*!************************************!*\
  !*** external "is-port-reachable" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("is-port-reachable");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-convert":
/*!******************************!*\
  !*** external "koa-convert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-convert");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-mount":
/*!****************************!*\
  !*** external "koa-mount" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-mount");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "portfinder":
/*!*****************************!*\
  !*** external "portfinder" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("portfinder");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map