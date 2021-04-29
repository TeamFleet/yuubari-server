if (typeof global.KOOT_DIST_DIR === "undefined") {
    global.KOOT_DIST_DIR = require("path").resolve(__dirname, "../");
}

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/akigumo.js":
/*!***************************!*\
  !*** ./config/akigumo.js ***!
  \***************************/
/***/ ((module) => {

module.exports = {
  portAkigumo: 8081,
  devPortAkigumo: 8702
};

/***/ }),

/***/ "./logs/tmp/config/portion.server.e48877cc0ed7bad33a2cc258391cf71c.js":
/*!****************************************************************************!*\
  !*** ./logs/tmp/config/portion.server.e48877cc0ed7bad33a2cc258391cf71c.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "template": () => (/* binding */ template),
/* harmony export */   "server": () => (/* binding */ server)
/* harmony export */ });
// 核心代码中引用的配置文件 (部分)
const template = "./src/template.ejs";
const server =  true ? {
  "koaStatic": {
    "maxage": 0,
    "hidden": true,
    "index": "index.html",
    "defer": false,
    "gzip": true,
    "extensions": false
  },
  "renderCache": false,
  "proxyRequestOrigin": {
    "protocol": "https"
  },
  "inject": __webpack_require__(/*! ../../../src/template.inject.js */ "./src/template.inject.js").default,
  "before": __webpack_require__(/*! ../../../src/_server/lifecycle/before */ "./src/_server/lifecycle/before.js").default,
  "after": __webpack_require__(/*! ../../../src/_server/lifecycle/after */ "./src/_server/lifecycle/after.js").default
} : 0;

/***/ }),

/***/ "./node_modules/history/lib/Actions.js":
/*!*********************************************!*\
  !*** ./node_modules/history/lib/Actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

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
/***/ ((__unused_webpack_module, exports) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
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
   true ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : 0;
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
  !(typeofA !== 'function') ?  true ? (0, _invariant2.default)(false, 'You must not store functions in location state') : 0 : void 0; // Not the same object, but same type.

  if (typeofA === 'object') {
    !!(isDate(a) && isDate(b)) ?  true ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : 0 : void 0;

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
   true ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : 0;
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
       true ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : 0;
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
    !(current >= 0 && current < entries.length) ?  true ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : 0 : void 0;
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
     true ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : 0;
  }
};

exports.default = runTransitionHook;

/***/ }),

/***/ "./node_modules/koot/ReactApp/action-types.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/action-types.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LANGUAGE": () => (/* binding */ CHANGE_LANGUAGE),
/* harmony export */   "GET_ORIGIN_URL": () => (/* binding */ GET_ORIGIN_URL),
/* harmony export */   "TELL_CLIENT_URL": () => (/* binding */ TELL_CLIENT_URL),
/* harmony export */   "SYNC_COOKIE": () => (/* binding */ SYNC_COOKIE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
const GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
const TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
const SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  CHANGE_LANGUAGE,
  GET_ORIGIN_URL,
  TELL_CLIENT_URL,
  SYNC_COOKIE
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transformError": () => (/* reexport default from dynamic */ _utils_transform_error__WEBPACK_IMPORTED_MODULE_0___default.a),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../React/inject/_cache-keys */ "./node_modules/koot/React/inject/_cache-keys.js");
/* harmony import */ var _React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/* harmony import */ var _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/get-sw-pathname */ "./node_modules/koot/utils/get-sw-pathname.js");
/* harmony import */ var _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_transform_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../utils/transform-error */ "./node_modules/koot/utils/transform-error.js");
/* harmony import */ var _utils_transform_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_transform_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_server_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../i18n/server/get-lang-from-ctx */ "./node_modules/koot/i18n/server/get-lang-from-ctx.js");
/* harmony import */ var _i18n_get_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");
/* harmony import */ var _i18n_get_type__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_get_type__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../i18n/locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ssr */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js");
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

const middlewareIsomorphic = (options = {}) => {
  const {
    // reduxConfig,
    renderCacheMap,
    locales,
    proxyRequestOrigin = {},
    template,
    templateInject = {}
  } = options; // const ssrConfig = {}
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

  const templateInjectCache = new Map();
  /** @type {Object} chunkmap */

  const chunkmap = _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_1___default()(true);
  /** @type {Map} webpack 的入口，从 chunkmap 中抽取 */

  const entrypoints = new Map();
  /** @type {Map} 文件名与实际结果的文件名的对应表，从 chunkmap 中抽取 */

  const filemap = new Map();
  /** @type {Map} 各语种的 manifest */

  const manifest = new Map();
  /** @type {Map} 样式表 */
  // const styleMap = new Map()

  /** @type {Object} 公用缓存空间 */

  const globalCache = new Map();
  globalCache.set('__', {});
  /** @type {String} i18n 类型 */

  const i18nType = _i18n_get_type__WEBPACK_IMPORTED_MODULE_2___default()(); // 针对 i18n 分包形式的项目，静态注入按语言缓存

  if (i18nType === 'default') {
    for (const l in chunkmap) {
      const thisLocaleId = l.substr(0, 1) === '.' ? l.substr(1) : l;
      entrypoints.set(thisLocaleId, chunkmap[l]['.entrypoints']);
      filemap.set(thisLocaleId, chunkmap[l]['.files']);
      manifest.set(thisLocaleId, chunkmap[l]);
      const cache = {};

      if (true) {
        extendCacheObject(cache, chunkmap, l);
      }

      templateInjectCache.set(thisLocaleId, cache); // styleMap.set(thisLocaleId, {})
    }
  } else {
    entrypoints.set('', chunkmap['.entrypoints']);
    filemap.set('', chunkmap['.files']);
    manifest.set('', chunkmap);
    const cache = {};

    if (true) {
      extendCacheObject(cache, chunkmap);
    }

    templateInjectCache.set('', cache); // styleMap.set('', {})
  }

  if (Array.isArray((_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_3___default()))) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_3___default().forEach(localeId => {
      globalCache.set(localeId, {}); // Object.defineProperty(globalCache, localeId, {
      //     value: {},
      //     enumerable: false,
      //     writable: false,
      //     configurable: false
      // });
    });
  }

  return async (ctx, next) => {
    /** @type {String} 本次请求的 URL */
    const url = ctx.path + ctx.search; // console.log(' ');
    // console.log({
    //     href: ctx.href,
    //     [SSRContext]: ctx[SSRContext],
    // });

    function renderComplete() {
      if (false) {} // log('success', 'server', `render success ${ctx.href}\n`);

    }

    try {
      // console.log('request url', url)
      // console.log('\nSSR middleware start')

      /** @type {String} 本次请求的语种ID */
      const LocaleId = (0,_i18n_server_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_4__.default)(ctx) || ''; // setLocaleId(LocaleId)
      // console.log(`LocaleId -> ${LocaleId}`)
      // 如果存在缓存匹配，直接返回缓存结果

      const thisRenderCache = renderCacheMap ? renderCacheMap.get(LocaleId) : undefined;
      const cached = thisRenderCache ? thisRenderCache.get(url, ctx) : false;

      if ( true && cached !== false) {
        ctx.body = cached;
        renderComplete();
        return;
      }
      /** @type {Object} 本次请求的 (当前语言的) 注入内容缓存 */


      const thisTemplateInjectCache = templateInjectCache.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 入口表 */

      const thisEntrypoints = entrypoints.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 文件名对应表 */

      const thisFilemap = filemap.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 客户端文件 manifest */

      const thisManifest = manifest.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) CSS 对照表 */

      const styleMap = {}; // const thisStyleMap = styleMap.get(i18nType === 'default' ? LocaleId : '')

      const thisLocales =  false ? 0 : locales;

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


      Object.defineProperty(ctx, _defaults_defines_server__WEBPACK_IMPORTED_MODULE_5__.ssrContext, {
        configurable: true,
        enumerable: false,
        writable: true,
        value: {
          // ctx,
          // Store, History,
          // memoryHistory,
          LocaleId,
          locales: thisLocales,
          // ssrConfig,
          // syncCookie: reduxConfig.syncCookie,
          proxyRequestOrigin,
          templateInject,
          template,
          thisTemplateInjectCache,
          thisEntrypoints,
          thisFilemap,
          //thisStyleMap,
          thisManifest,
          styleMap,
          globalCache,
          connectedComponents:  false ? 0 : []
        }
      });

      if (false) {}

      const result = await (0,_ssr__WEBPACK_IMPORTED_MODULE_6__.default)(ctx); // console.log('eval finished', {
      //     'localeId in store': Store.getState().localeId
      // })
      // console.log('\n\n\n')

      if (result.body) {
        // HTML 结果暂存入缓存
        if (thisRenderCache) thisRenderCache.set(url, result.body, ctx);
        ctx.body = result.body;
        renderComplete();
        return;
      }

      if (result.error) {
        // renderComplete();
        throw _utils_transform_error__WEBPACK_IMPORTED_MODULE_0___default()(result.error);
      }

      if (result.redirect) {
        // renderComplete();
        return ctx.redirect(result.redirect);
      }

      if (result.next) {
        // renderComplete();
        return await next();
      }
    } catch (err) {
      __webpack_require__(/*! debug */ "debug")('SYSTEM:isomorphic:error')('Server-Render Error Occures: %O', err.stack);

      const thisError = err instanceof Error ? err : new Error(err);
      console.error(thisError);
      ctx.status = 500;
      ctx.body = thisError.message;
      ctx.app.emit('error', thisError, ctx); // renderComplete();

      return;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (middlewareIsomorphic); // ============================================================================

const extendCacheObject = (cache, chunkmap, localeId) => {
  const serviceWorker = _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_7___default()(localeId ? chunkmap[localeId] : chunkmap);

  if (serviceWorker) {
    cache[_React_inject_cache_keys__WEBPACK_IMPORTED_MODULE_8__.uriServiceWorker] =  false ? 0 : serviceWorker;
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js":
/*!*************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/isomorphic/ssr.js ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);



const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const vm = __webpack_require__(/*! vm */ "vm");
/** @type {String} ssr.js 文件内容 */
// let __KOOT_SSR_FILE_CONTENT__;


let __KOOT_SSR_SCRIPT__;

const context = {
  version: parseInt(process.versions.node.split('.')[0]),
  // eslint-disable-next-line no-eval
  require: eval('require'),
  // eslint-disable-next-line no-eval
  // module: eval('module'),
  module,
  process,
  console,
  // global,
  setTimeout,
  setInterval,
  setImmediate,
  clearTimeout,
  clearInterval,
  clearImmediate,
  // String,
  // Number,
  Buffer,
  // Boolean,
  // Array,
  // Date,
  // Error,
  // EvalError,
  // RangeError,
  // ReferenceError,
  // SyntaxError,
  // TypeError,
  // URIError,
  // RegExp,
  // Function,
  // Object,
  // Proxy,
  // Reflect,
  // Map,
  // WeakMap,
  // Set,
  // WeakSet,
  // Promise,
  // Symbol,
  // eslint-disable-next-line no-eval
  __dirname: eval('__dirname')
};
/**
 * 执行服务器端渲染 (Server-Side Rendering)
 */

const ssr =  false ? 0 : ctx => new Promise((resolve, reject) => {
  const ssrComplete = result => {
    // return resolve('hello');
    // setTimeout(function () {
    //     __KOOT_SSR__ = false;
    // });
    // setTimeout(function () {
    // 砍断 thisContext 的引用
    if (thisContext && typeof thisContext === 'object') {
      for (const key of Object.keys(thisContext).filter(key => key !== 'global' && key !== _defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.koaContext)) delete thisContext[key];

      purgeObject(thisContext.global);
      delete thisContext.global; // delete thisContext[KOAContext]
    }

    thisContext = undefined;
    purgeSSRContext(ctx);
    resolve(result); // });
  };

  ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].ssrComplete = ssrComplete; // if (!__KOOT_SSR_FILE_CONTENT__) {
  //     const fileSSR = path.resolve(
  //         __KOOT_GET_DIST_PATH__(),
  //         'server/ssr.js'
  //     );
  //     if (fs.existsSync(fileSSR)) {
  //         __KOOT_SSR_FILE_CONTENT__ = fs.readFileSync(fileSSR, 'utf-8');
  //     } else {
  //         throw new Error(
  //             "No `/server/ssr.js` found. Maybe there's an error while building. Please retry `koot-build`"
  //         );
  //     }
  // }

  if (!__KOOT_SSR_SCRIPT__) {
    const fileSSR = path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_1___default()(), 'server/ssr.js');

    if (fs.existsSync(fileSSR)) {
      __KOOT_SSR_SCRIPT__ = new vm.Script(fs.readFileSync(fileSSR, 'utf-8'), {
        filename: fileSSR
      });
    } else {
      reject(new Error("No `/server/ssr.js` found. Maybe there's an error while building. Please retry `koot-build`"));
    }
  } // let __KOOT_SSR__ = ctx[SSRContext];


  let thisContext = { ...context,
    global: {},
    [_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.koaContext]: ctx
  }; // 针对腾讯云 serverless
  // 目标环境 global 上有一个 gc 对象

  if (typeof global.gc !== 'undefined') thisContext.gc = global.gc; // Object.defineProperties(thisContext, {
  //     [SSRContext]: {
  //         configurable: false,
  //         enumerable: false,
  //         writable: false,
  //         value: ctx[SSRContext],
  //     },
  //     Store: {
  //         configurable: false,
  //         enumerable: false,
  //         get: function () {
  //             return ctx[SSRContext].Store;
  //         },
  //     },
  //     History: {
  //         configurable: false,
  //         enumerable: false,
  //         get: function () {
  //             return ctx[SSRContext].History;
  //         },
  //     },
  // });

  vm.createContext(thisContext);

  try {
    // const __KOOT_CTX__ = ctx;
    // eslint-disable-next-line no-eval
    // eval(__KOOT_SSR_FILE_CONTENT__);
    __KOOT_SSR_SCRIPT__.runInContext(thisContext); // __KOOT_SSR_SCRIPT__.runInThisContext();

  } catch (err) {
    ssrComplete({
      error: err
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ssr); // ============================================================================

/**
 * 清理 SSR Context 对象。清楚内容
 * - 所有第一级的对象
 * - store
 * - ctx 上的 Context 对象
 * @param {*} ctx
 */

const purgeSSRContext = ctx => {
  if (false) {} // console.log('purging...', ctx[SSRContext]);

  if (typeof ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext] === 'object') {
    purgeObject(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].connectedComponents);
    purgeObject(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].History); // purgeObject(ctx[SSRContext].Store);

    purgeObject(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].styleMap);
    purgeObject(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].template); // store

    if (typeof ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].Store === 'object') {
      // delete ctx[SSRContext].Store['Symbol(observable)'];
      let state = ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].Store.getState();
      purgeObject(state);
      state = undefined;

      for (const key of Object.keys(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].Store)) delete ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext].Store[key];
    }

    for (const key of Object.keys(ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext])) delete ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext][key];
  }

  delete ctx[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_0__.ssrContext]; // console.log('purged...', ctx[SSRContext]);
  // console.log(' \n\n\n\n\n ');
};

const purgeObject = obj => {
  if (!obj || typeof obj !== 'object') return;

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === 'object') purgeObject(obj[key]);
    delete obj[key];
  }
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/middlewares/static.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/middlewares/static.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

const staticMiddleware = (koaStaticConfig = {}) => {
  const dir = _libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2___default()(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default()());
  const config = Object.assign({}, (_defaults_koa_static__WEBPACK_IMPORTED_MODULE_4___default()), koaStaticConfig); // console.log('koa-statc', {
  //     dir,
  //     config,
  //     koaStaticDefaults,
  //     koaStaticConfig
  // });

  return koa_convert__WEBPACK_IMPORTED_MODULE_0___default()(koa_static__WEBPACK_IMPORTED_MODULE_1___default()(dir, config));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (staticMiddleware);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/redux.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/redux.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANGE_LANGUAGE": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LANGUAGE),
/* harmony export */   "TELL_CLIENT_URL": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.TELL_CLIENT_URL),
/* harmony export */   "SYNC_COOKIE": () => (/* reexport safe */ _action_types__WEBPACK_IMPORTED_MODULE_0__.SYNC_COOKIE),
/* harmony export */   "SERVER_REDUCER_NAME": () => (/* binding */ SERVER_REDUCER_NAME),
/* harmony export */   "serverReducer": () => (/* binding */ serverReducer)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/ReactApp/action-types.js");
// TODO: change to one action type , like: CHANGE_BASE_INFO


const SERVER_REDUCER_NAME = 'server';
const serverReducer = (state = {
  lang: 'en',
  origin: ''
}, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        lang: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.TELL_CLIENT_URL:
      return Object.assign({}, state, {
        origin: action.data
      });

    case _action_types__WEBPACK_IMPORTED_MODULE_0__.SYNC_COOKIE:
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @callback cacheGet
 * 缓存检查与吐出方法
 * @param {String} url
 * @param {Object} ctx KOA Context
 * @return {Boolean|String} 对该 URL 不使用缓存时返回 false，使用时返回缓存结果 String
 */

/**
 * @callback cacheSet
 * 缓存存储方法
 * @param {String} url
 * @param {String} html SSR 渲染结果 HTML
 * @param {Object} ctx KOA Context
 */
const defaults = __webpack_require__(/*! ../../defaults/render-cache */ "./node_modules/koot/defaults/render-cache.js");
/**
 * @class React 同构渲染缓存，基于 URL (开发环境: 禁用缓存)
 */


class KootReactRenderCache {
  /**
   * @param {Object} [options={}]
   * @param {number} [options.maxAge] 缓存存在时间
   * @param {number} [options.maxCount] 最多缓存的 URL 的数量
   * @param {cacheGet} [options.get] 自定义缓存检查与吐出方法。存在时, maxAge 和 maxCount 设置将被忽略
   * @param {cacheSet} [options.set] 自定义缓存存储方法。存在时, maxAge 和 maxCount 设置将被忽略
   */
  constructor(options = {}) {
    if (options === true) options = {};
    const {
      maxAge = defaults.maxAge,
      maxCount = defaults.maxCount
    } = options;
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
   * @param {Object} ctx KOA Context
   * @return {Boolean|String} 对该 URL 不使用缓存时返回 false，使用时返回缓存结果 String
   */


  get(url, ctx) {
    if (typeof this.customGet === 'function') return this.customGet(url, ctx); // 没有该条结果，直接返回 false

    if (!this.list.has(url)) return false;
    const {
      html,
      time
    } = this.list.get(url); // 缓存时间短于设定的最大时间，返回缓存结果

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
   * @param {Object} ctx KOA Context
   */


  set(url, html, ctx) {
    if (typeof this.customSet === 'function') return this.customSet(url, html, ctx); // 如果当前已缓存的 URL 数量不少于设定的最大数量
    // 移除已缓存列表里的第一条结果

    if (!this.list.has(url) && this.cachedUrls.length >= this.maxCount) {
      // console.log('')
      // console.log(`cached count out: ${url} | ${this.cachedUrls.length}`)
      // console.log('')
      this.remove(this.cachedUrls[0]); // console.log('new list', this.cachedUrls)
    } // 缓存结果


    this.cachedUrls.push(url);
    this.list.set(url, {
      html,
      time: Date.now()
    });
  }
  /**
   * 删除一条已缓存的条目
   * @param {*} url
   */


  remove(url) {
    this.list.delete(url);
    this.cachedUrls.splice(this.cachedUrls.indexOf(url), 1);
  }

}

module.exports = KootReactRenderCache;

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/run.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/run.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME__ */ "./logs/tmp/config/portion.server.e48877cc0ed7bad33a2cc258391cf71c.js");
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/create-koa-app */ "./node_modules/koot/libs/create-koa-app.js");
/* harmony import */ var _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_libs_create_koa_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../libs/log */ "./node_modules/koot/libs/log.js");
/* harmony import */ var _libs_log__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_libs_log__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _libs_validate_port__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/validate-port */ "./node_modules/koot/libs/validate-port.js");
/* harmony import */ var _libs_validate_port__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_validate_port__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validate_create_render_cache_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validate/create-render-cache-map */ "./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js");
/* harmony import */ var _validate_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate/i18n */ "./node_modules/koot/ReactApp/server/validate/i18n.js");
/* harmony import */ var _validate_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate/template */ "./node_modules/koot/ReactApp/server/validate/template.js");
/* harmony import */ var _middlewares_isomorphic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/isomorphic */ "./node_modules/koot/ReactApp/server/middlewares/isomorphic/index.js");
/* harmony import */ var _middlewares_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/static */ "./node_modules/koot/ReactApp/server/middlewares/static.js");
/* eslint-disable no-console */

/* __KOOT_DEV_SSR__ */
// import koaCompress from 'koa-compress';





 // import getDist from '../../utils/get-dist-path';
// import sleep from '../../utils/sleep';


 // import validateReduxConfig from '../../React/validate/redux-config'





 // require('@babel/register')
// require('@babel/polyfill')
// require('isomorphic-fetch');

const fs = __webpack_require__(/*! fs-extra */ "fs-extra"); // const path = require('path');
// const chalk = require('chalk');
//

/**
 * 启动同构服务器 (KOA)
 * @async
 */


const startKootIsomorphicServer = async () => {
  console.log(`\r\n  \x1b[93m[koot/server]\x1b[0m initializing...`);
  const {
    before: serverBefore,
    after: serverAfter,
    renderCache: renderCacheConfig,
    proxyRequestOrigin,
    inject: templateInject
  } = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.server; // 决定服务器启动端口
  // 如果端口不可用，取消启动流程

  /** @type {Number} 服务器启动端口 */

  const port = await _libs_validate_port__WEBPACK_IMPORTED_MODULE_1___default()();
  if (!port) throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_2___default()('VALIDATE_PORT', 'unavailable')); // 确定 Redux 相关配置
  // const reduxConfig = await validateReduxConfig(reduxConfigRaw)
  // 确定模板内容

  const template = await (0,_validate_template__WEBPACK_IMPORTED_MODULE_3__.default)(_KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.template); // 渲染缓存

  const renderCacheMap = await (0,_validate_create_render_cache_map__WEBPACK_IMPORTED_MODULE_4__.default)(renderCacheConfig); // 语言包写入内存

  const locales =  true ? await (0,_validate_i18n__WEBPACK_IMPORTED_MODULE_5__.default)() : 0; // 创建 Koa 实例 (app)

  /** @type {Koa} Koa 服务器实例 */

  const app = _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_6___default()(); // 生命周期: 服务器启动前

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

  app.use((0,_middlewares_static__WEBPACK_IMPORTED_MODULE_7__.default)((() => {
    if (typeof _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.server.koaStatic === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.server.koaStatic;
    if (typeof _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.server.static === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__.server.static;
    return {};
  })())); // 挂载中间件: 同构服务器

  app.use((0,_middlewares_isomorphic__WEBPACK_IMPORTED_MODULE_8__.default)({
    // reduxConfig,
    renderCacheMap,
    locales,
    proxyRequestOrigin,
    template,
    templateInject
  })); // 生命周期: 服务器即将启动

  if (false) {}
  if (typeof serverAfter === 'function') await serverAfter(app); // 初始化完成，准备启动服务器

  _libs_log__WEBPACK_IMPORTED_MODULE_9___default()(' ', 'server', `init \x1b[32m${'OK'}\x1b[0m!`); // 启动服务器

  await new Promise(resolve => {
    if (false) {} else {
      app.listen(port);
      setTimeout(() => {
        console.log(`\x1b[32m√\x1b[0m ` + `\x1b[93m[koot/server]\x1b[0m listening port \x1b[32m${port}\x1b[0m`);
        console.log(' ');
        return resolve();
      });
    }
  }).catch(err => {
    if (err instanceof Error) err.message = _libs_error_msg__WEBPACK_IMPORTED_MODULE_2___default()('KOA_APP_LAUNCH', err.message);
    throw err;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startKootIsomorphicServer);
startKootIsomorphicServer().catch(err => {
  console.error(err);
});

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/create-render-cache-map.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render-cache */ "./node_modules/koot/ReactApp/server/render-cache.js");
/* harmony import */ var _render_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_render_cache__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../i18n/locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_0__);

 // import isI18nEnabled from '../../../i18n/is-enabled'

/**
 * 创建服务器渲染缓存存储空间
 *
 * Map 的第一级为语种ID，每个语种有独立的空间，非多语言项目为 `` (空String)
 *
 * @param {Object|boolean} renderCacheConfig
 * @returns {Map}
 */

const createRenderCacheMap = (renderCacheConfig = {}) => {
  // console.log({ renderCacheConfig });
  if (renderCacheConfig === false) return false;
  const renderCache = new Map();

  if ((_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_0___default().length)) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_0___default().forEach(localeId => {
      renderCache.set(localeId, new (_render_cache__WEBPACK_IMPORTED_MODULE_1___default())(renderCacheConfig));
    });
  } else {
    renderCache.set('', new (_render_cache__WEBPACK_IMPORTED_MODULE_1___default())(renderCacheConfig));
  }

  return renderCache;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRenderCacheMap);

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/i18n.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/i18n.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _i18n_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../i18n/locales */ "./node_modules/koot/i18n/locales.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var _utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../i18n/read-locale-file-sync */ "./node_modules/koot/i18n/read-locale-file-sync.js");
/* harmony import */ var _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_2__);





const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");
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
 * @returns {void}
 */


const validateI18n = () => {
  if (!_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return;
  /** @type {Object} 完整语言包配置 */

  const localesFull = getLocalesFull(); // /** @type {String} 多语言类型 */
  // const type = JSON.parse(process.env.KOOT_I18N_TYPE) || false
  // const localeIds = []

  const locales = {};
  localesFull.forEach(arr => {
    const [localeId, localeObj] = arr; // localeIds.push(localeId)

    locales[localeId] = localeObj;
  }); // 服务器端注册多语言

  (0,_i18n_locales__WEBPACK_IMPORTED_MODULE_1__.setLocales)(locales);
  return locales;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateI18n);
/**
 * 获取完整语言包配置
 * @returns {Object}
 */

const getLocalesFull = () => {
  const locales = JSON.parse("[[\"zh\",{},null,\"./locales/zh.json\"],[\"en\",{},null,\"./locales/en.json\"],[\"ja\",{},null,\"./locales/ja.json\"]]");
  return locales.map(l => [l[0], _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_2___default()( false ? 0 : getLocaleFile(l[3])), l[2], l[3]]); // return JSON.parse(process.env.KOOT_I18N_LOCALES);
};
/** 通过环境变量中记录的相对路径读取语言包内容 */


const getLocaleFile = relativePath => {
  let file = relativePath;
  if (fs.existsSync(file)) return file;
  file = path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default()(), 'server', relativePath);
  if (fs.existsSync(file)) return file;
  file = path.resolve('server', relativePath);
  if (fs.existsSync(file)) return file;
  file = path.resolve(relativePath);
  if (fs.existsSync(file)) return file;
  return {};
};

/***/ }),

/***/ "./node_modules/koot/ReactApp/server/validate/template.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/validate/template.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../libs/error-msg */ "./node_modules/koot/libs/error-msg.js");
/* harmony import */ var _libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 验证模板内容
 *
 * 获取环境常量 `process.env.KOOT_HTML_TEMPLATE`，并返回合法的值
 *
 * @param {String} template Koot 配置项: `template`
 * @returns {String}
 */

const validateTemplate = template => {
  if (false) {}

  if (true) template = "<!DOCTYPE html>\r\n<html <%- inject.htmlLang -%>>\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n\r\n    <title><%= inject.title -%></title>\r\n\r\n    <base target=\"_self\">\r\n\r\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no,email=no,address=no\">\r\n    <meta name=\"format-detection\" content=\"email=no\">\r\n    <meta name=\"format-detection\" content=\"address=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no\">\r\n    <meta name=\"HandheldFriendly\" content=\"true\">\r\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n\r\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\r\n    <link rel=\"icon\" href=\"/icon-256.png\" type=\"image/png\" sizes=\"256x256\">\r\n    <link rel=\"icon\" href=\"/icon-128.png\" type=\"image/png\" sizes=\"128x128\">\r\n    <%- inject.manifest -%>\r\n\r\n    <meta name=\"theme-color\" content=\"#263238\" />\r\n\r\n    <!-- IE/Edge -->\r\n    <meta name=\"renderer\" content=\"webkit\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\r\n\r\n    <!-- iOS -->\r\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\r\n\r\n    <meta name=\"copyright\" content=\"Copyright (c) 2021 fleet.moe\">\r\n\r\n    <!-- Polyfill for legacy browsers -->\r\n    <script nomodule type=\"text/javascript\" src=\"<%- pathname('polyfill.js') %>\"></script>\r\n\r\n    <%- inject.metas -%>\r\n    <%- inject.styles -%>\r\n    <%- inject.definePath -%>\r\n</head>\r\n\r\n<body>\r\n\r\n    <div id=\"boat-loader\">LOADING...</div>\r\n    <noscript><%- inject.noScriptWarningText %></noscript>\r\n\r\n    <div id=\"root\"><%- inject.react %></div>\r\n\r\n    <%- inject.svgIcons %>\r\n\r\n    <script type=\"text/javascript\"><%- content('critical.js') %></script>\r\n\r\n    <%- inject.scripts %>\r\n\r\n    <script>\r\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n\r\n        ga('create', 'UA-63582858-4', 'auto');\r\n        ga('send', 'pageview');\r\n    </script>\r\n</body>\r\n\r\n</html>\r\n\n<!-- rendered by using koot.js 0.15.0-beta.19 -->";
  if (typeof template !== 'string') throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_0___default()('VALIDATE_TEMPLATE', '`config.template` should be Pathname or EJS String')); // process.env.KOOT_HTML_TEMPLATE = template

  return template;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateTemplate);

/***/ }),

/***/ "./node_modules/koot/React/client-update-page-info.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/client-update-page-info.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getInjectedMetaTags": () => (/* binding */ getInjectedMetaTags),
/* harmony export */   "markInited": () => (/* binding */ markInited)
/* harmony export */ });
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
let injectedMetaTags; // meta 标签区域结尾的 HTML 注释代码

let nodeCommentEnd;
let inited = false;
/** @type {Pageinfo} */

const infoToChange = {
  title: undefined,
  metas: []
};
let changeTimeout = undefined;
/**
 * _仅限客户端_
 *
 * 更新页面信息
 * @module
 * @param {string} title 新的标题
 * @param {Array<Object.<string, string>>} metas meta 标签信息，需要形式为 `{[name]: value}` 对象的数组
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((title, metas = []) => {
  if (true) return;

  if ( true && !inited) {
    setTimeout(() => {
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
  changeTimeout = setTimeout(() => {
    doUpdate();
    infoToChange.title = undefined;
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

const doUpdate = () => {
  const {
    title,
    metas
  } = infoToChange; // 替换页面标题

  if (typeof title !== 'undefined') document.title = title; // 替换 metas

  const head = document.getElementsByTagName('head')[0];
  getInjectedMetaTags().forEach(el => head.removeChild(el));
  injectedMetaTags.forEach(el => {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  });
  injectedMetaTags = metas.filter(meta => typeof meta === 'object').map(meta => {
    const el = document.createElement('meta');

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


const getInjectedMetaTags = () => {
  if (!Array.isArray(injectedMetaTags)) {
    const head = document.getElementsByTagName('head')[0];
    injectedMetaTags = []; // 移除所有在 KOOT_METAS 里的 meta 标签
    // 采用 DOM 操作的初衷：如果使用 innerHTML 的字符串替换方法，浏览器可能会全局重新渲染一次，造成“闪屏”

    const childNodes = head.childNodes;
    let meetStart = false;
    let meetEnd = false;
    let i = 0;

    while (!meetEnd && childNodes[i] instanceof Node) {
      const node = childNodes[i];

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

const markInited = () => {
  inited = true;
};

/***/ }),

/***/ "./node_modules/koot/React/get-render-props.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/React/get-render-props.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromServerProps": () => (/* binding */ fromServerProps),
/* harmony export */   "fromComponentProps": () => (/* binding */ fromComponentProps)
/* harmony export */ });
/**
 * 基于 serverProps 返回同构 props
 * @param {Object} serverProps 
 * @return {Object}
 */
const fromServerProps = (serverProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(serverProps)
  // console.log('----------')
  // console.log(' ')
  return { ...serverProps
  };
};
/**
 * 基于组件 props 返回同构 props
 * @param {Object} componentProps 
 * @return {Object}
 */


const fromComponentProps = (componentProps = {}) => {
  // console.log(' ')
  // console.log('----------')
  // console.log(componentProps)
  // console.log('----------')
  // console.log(' ')
  return { ...componentProps
  };
};



/***/ }),

/***/ "./node_modules/koot/React/history.js":
/*!********************************************!*\
  !*** ./node_modules/koot/React/history.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KOOT_CLIENT_REQUIRE_CREATE_HISTORY___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_CLIENT_REQUIRE_CREATE_HISTORY__ */ "./node_modules/history/lib/createMemoryHistory.js");
/* harmony import */ var history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history/lib/PathUtils */ "./node_modules/history/lib/PathUtils.js");
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

const kootUseBasename = createHistory => (options = {}) => {
  const history = createHistory(options);
  const {
    basename
  } = options;

  const addBasename = location => {
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

  const prependBasename = location => {
    if (!basename) return location;
    const object = typeof location === 'string' ? (0,history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__.parsePath)(location) : location;
    const pname = object.pathname;
    const normalizedBasename = basename.slice(-1) === '/' ? basename : `${basename}/`;
    const normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
    const pathname = normalizedBasename + normalizedPathname;
    return { ...object,
      pathname
    };
  }; // Override all write methods with basename-aware versions.


  const push = location => history.push(prependBasename(location));

  const replace = location => history.replace(prependBasename(location));

  const createPath = location => history.createPath(prependBasename(location));

  const createHref = location => history.createHref(prependBasename(location));

  const createLocation = (location, ...args) => addBasename(history.createLocation(prependBasename(location), ...args));

  return { ...history,
    push,
    replace,
    createPath,
    createHref,
    createLocation
  };
};

let historyClient;

const history = (() => {
  if (false) {}

  if (true) {
    return undefined;
  }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (history);

/***/ }),

/***/ "./node_modules/koot/React/inject/_cache-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/React/inject/_cache-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  get: getSSRContext
} = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");

const {
  needConnectComponents
} = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = () => !Boolean( true && getSSRContext()[needConnectComponents]);

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actionType.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actionType.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_UPDATE": () => (/* binding */ LOCATION_UPDATE)
/* harmony export */ });
const LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/actions.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/actions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");

function update(location) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE,
    location
  };
}

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/api.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/api.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.js */ "./node_modules/koot/React/realtime-location/actions.js");

const update = location => dispatch => {
  return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__.update(location));
};

/***/ }),

/***/ "./node_modules/koot/React/realtime-location/index.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATION_UPDATE": () => (/* reexport safe */ _actionType__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE),
/* harmony export */   "reducer": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "update": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.update),
/* harmony export */   "REALTIME_LOCATION_REDUCER_NAME": () => (/* binding */ REALTIME_LOCATION_REDUCER_NAME),
/* harmony export */   "actionUpdate": () => (/* reexport safe */ _actions__WEBPACK_IMPORTED_MODULE_3__.update)
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./node_modules/koot/React/realtime-location/actionType.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./node_modules/koot/React/realtime-location/api.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/koot/React/realtime-location/actions.js");




const REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


/***/ }),

/***/ "./node_modules/koot/React/realtime-location/reducer.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/React/realtime-location/reducer.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actionType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType.js */ "./node_modules/koot/React/realtime-location/actionType.js");

const initialState = {};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(state = initialState, action) {
  switch (action.type) {
    case _actionType_js__WEBPACK_IMPORTED_MODULE_0__.LOCATION_UPDATE:
      return action.location;
  }

  return state;
}

/***/ }),

/***/ "./node_modules/koot/React/redux.js":
/*!******************************************!*\
  !*** ./node_modules/koot/React/redux.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESET_CERTAIN_STATE": () => (/* binding */ RESET_CERTAIN_STATE),
/* harmony export */   "reducers": () => (/* binding */ reducers),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "middlewares": () => (/* binding */ middlewares),
/* harmony export */   "createStore": () => (/* binding */ createStore)
/* harmony export */ });
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "./node_modules/koot/node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "react-router-redux");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/index.js");
/* harmony import */ var _realtime_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./realtime-location */ "./node_modules/koot/React/realtime-location/reducer.js");
/* harmony import */ var _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ReactApp/server/redux */ "./node_modules/koot/ReactApp/server/redux.js");
/* harmony import */ var _i18n_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n/redux */ "./node_modules/koot/i18n/redux/index.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./history */ "./node_modules/koot/React/history.js");








 // import filterState from '../libs/filter-state';
// import history from "__KOOT_CLIENT_REQUIRE_HISTORY__"


 // const getHistory = () => {
//     if (__SPA__) {
//         return require('react-router/lib/hashHistory')
//     }
//     return require('react-router/lib/browserHistory')
// }

/******************************************************************************
 *   ┌─┐┌─┐┌┐┌┌─┐┌┬┐┌─┐┌┐┌┌┬┐┌─┐
 *  │  │ ││││└─┐ │ ├─┤│││ │ └─┐
 * └─┘└─┘┘└┘└─┘ ┴ ┴ ┴┘└┘ ┴ └─┘
 *****************************************************************************/

const RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 *   ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 *  ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

const reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__.routerReducer,
  // history: __CLIENT__ ? () => history : () => '123',
  // 目的：新页面请求处理完成后再改变URL
  [_realtime_location__WEBPACK_IMPORTED_MODULE_4__.REALTIME_LOCATION_REDUCER_NAME]: _realtime_location__WEBPACK_IMPORTED_MODULE_5__.default,
  // 对应服务器生成的store
  [_ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__.SERVER_REDUCER_NAME]: _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_6__.serverReducer
};

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_8__.reducerLocaleId; // reducers.locales = i18nReducerLocales
}
/**
 * @type {Object}
 */


const initialState = (() => {
  if (false) {}
  if (true) return {};
})();
/**
 * @type {Array}
 */

const middlewares = [(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default()), (0,react_router_redux__WEBPACK_IMPORTED_MODULE_2__.routerMiddleware)(_history__WEBPACK_IMPORTED_MODULE_9__.default)]; // const enhancerClientModifyState = createStore => (
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

const createStore = (appReducer, appMiddlewares = [], appEnhancers = []) => {
  // const toCompose = [
  //     reduxApplyMiddleware(...middlewares.concat(appMiddlewares))
  // ];
  // if (__CLIENT__) toCompose.push(enhancerClientModifyState);
  const projectReducer = (() => {
    if (typeof appReducer === 'function') {
      const kootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...reducers
      });
      return (state, action) => {
        const {
          appState,
          kootState
        } = sliceStateForReducers(state);
        return { ...appReducer(appState, action),
          ...kootReducer(kootState, action)
        };
      };
    } else if (typeof appReducer === 'object' && !Array.isArray(appReducer)) {
      return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...appReducer,
        ...reducers
      });
    }

    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({ ...reducers
    });
  })();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(projectReducer, initialState, (0,redux__WEBPACK_IMPORTED_MODULE_1__.compose)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares.concat(appMiddlewares)), ...appEnhancers));
};
/******************************************************************************
 *   ┬ ┬┌─┐┬  ┌─┐┌─┐┬─┐┌─┐
 *  ├─┤├┤ │  ├─┘├┤ ├┬┘└─┐
 * ┴ ┴└─┘┴─┘┴  └─┘┴└─└─┘
 *****************************************************************************/

/**
 * 将当前 state 拆分为 _appState_ 和 _kootState_
 * @param {Object} state
 * @returns {Object} { appState, kootState }
 */

const sliceStateForReducers = state => {
  const appState = {};
  const kootState = {};
  const keysForKootReducer = Object.keys(reducers);
  Object.keys(state).forEach(key => {
    if (keysForKootReducer.includes(key)) {
      kootState[key] = state[key];
    } else {
      appState[key] = state[key];
    }
  });
  return {
    appState,
    kootState
  };
};

/***/ }),

/***/ "./node_modules/koot/React/root-context.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/React/root-context.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createValue": () => (/* binding */ createValue),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // ============================================================================

const defaultValue = {
  store: undefined,
  history: undefined,
  localeId: undefined,
  locales: {}
};

if (process.env.WEBPACK_BUILD_STAGE === 'server') {
  defaultValue.ctx = undefined;
  defaultValue.styles = {};
}

const createValue = (value = {}) => ({ ...defaultValue,
  ...value
}); // ============================================================================

const RootContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(createValue());
RootContext.displayName = 'KootRootContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RootContext);

/***/ }),

/***/ "./node_modules/koot/React/styles.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/React/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAndWriteIntoHead": () => (/* binding */ checkAndWriteIntoHead),
/* harmony export */   "append": () => (/* binding */ append),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
// import { Component, createContext } from 'react'

/**
 * 生成 StyleMapContext
 */
// export const createStyleMapContext = () => {
//     return createContext({})
// }
// export let StyleMapContext = createStyleMapContext()

/**
 * 将样式表写入到 head 标签内
 * @param {Object} styleMap
 */
const checkAndWriteIntoHead = (styleMap = {}) => {
  if (typeof styleMap !== 'object') return;
  Object.keys(styleMap).forEach(wrapper => {
    const style = styleMap[wrapper];
    const el = document.querySelector(`style[${"data-koot-module"}=${wrapper}]`);

    if (style.count > 0) {
      // 配置样式
      if (!el && style.css !== '') {
        const styleTag = document.createElement('style');
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

const append = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => append(styleMap, theStyle));
  if (typeof style !== 'object') return;

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

const remove = (styleMap = {}, style) => {
  // const styleMap = getStyleMap(passedMap)
  if (Array.isArray(style)) return style.forEach(theStyle => remove(theStyle));
  if (typeof style !== 'object') return;

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
// export class StylesContainer extends Component {
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

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Webpack 打包相关的常量，包括：
 * - 文件名
 * - 代码中使用的临时常量名
 * - `koot.config.js` 的属性名
 * - 其他代码中用到的常量名
 */
module.exports = {
  // 处理项目配置相关
  keyFileProjectConfigTempFull: '__FILE_PROJECT_CONFIG_TEMP_FULL__',
  keyFileProjectConfigTempPortionServer: '__FILE_PROJECT_CONFIG_TEMP_PORTION_SERVER__',
  keyFileProjectConfigTempPortionClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_CLIENT__',
  keyFileProjectConfigTempPortionOtherClient: '__FILE_PROJECT_CONFIG_TEMP_PORTION_OTHER_CLIENT__',
  keyKootBaseVersion: '__KOOT_BASE_VERSION__',
  dirConfigTemp: 'logs/tmp/config',
  filenameProjectConfigTempFull: 'full.*.js',
  filenameProjectConfigTempPortionServer: 'portion.server.*.js',
  filenameProjectConfigTempPortionClient: 'portion.client.*.js',
  filenameProjectConfigTempPortionOtherClient: 'portion.client-other.*.js',
  propertiesToExtract: [['name', ''], ['type', 'react'], ['template', ''], ['templateInject', ''], ['routes', ''], ['historyType', ''], ['store', ''], ['cookiesToStore', ''], ['client', {}], ['server', {}]],
  typesSPA: ['spa', 'reactspa', 'react-spa'],
  // 打包 DLL 相关
  keyConfigBuildDll: '__BUILD_DLL__',
  filenameDll: '.dll.js',
  filenameDllManifest: '.dll.manifest.json',
  dirDll: 'dev-dll',
  // 其他项目配置项名
  keyConfigQuiet: '__QUIET__',
  keyConfigOutputPathShouldBe: '__OUTPUT_PATH_SHOULD_BE__',
  keyConfigWebpackSPATemplateInject: '__KOOT_WEBPACK_CONFIG_FOR_SPA_TEMPLATE_INJECT__',
  keyConfigWebpackLocaleId: '__KOOT_WEBPACK_CONFIG_LOCALE_ID__',
  keyConfigWebpackSPAServer: '__SPA_SERVER__',
  keyConfigClientAssetsPublicPath: '__CLIENT_ASSETS_PUBLIC_PATH__',
  keyConfigClientServiceWorkerPathname: '__CLIENT_SERVICE_WORKER_PATHNAME__',
  keyConfigIcons: '__APP_ICONS__',
  keyConfigOriginalFull: '__ORIGINAL__',
  WEBPACK_OUTPUT_PATH: '__WEBPACK_OUTPUT_PATH',
  CLIENT_ROOT_PATH: '__CLIENT_ROOT_PATH',
  WEBPACK_MODIFIED_PUBLIC_PATH: '__WEBPACK_MODIFIED_PUBLIC_PATH',
  // CLEANUP_PREVIOUS_BUILDS_IDS: '__CLEANUP_PREVIOUS_BUILDS_IDS',
  // CLEANUP_PREVIOUS_BUILDS_FILES: '__CLEANUP_PREVIOUS_BUILDS_FILES',
  // 自定义 chunk
  chunkNameExtractCss: '__KOOT__EXTRACT__CSS__',
  chunkNameExtractCssForImport: '__KOOT__EXTRACT__CSS__NO__PUBLIC__PATH__',
  chunkNameClientRunFirst: '__KOOT__CLIENT__RUN__FIRST__',
  // [开发环境] 临时文件名
  filenameWebpackDevServerPortTemp: '.dev_webpack-dev-server_port',
  filenameBuilding: '.koot-building',
  filenameBuildFail: '.koot-build-fail',
  filenameSPATemplateInjectJS: '.spa-template-inject.LOCALEID.js',
  // [生产环境] 文件名
  // filenameCurrentBundle: '.koot-current',
  // 标签属性
  styleTagGlobalAttributeName: 'data-koot-global',
  styleTagModuleAttributeName: 'data-koot-module',
  scriptTagEntryAttributeName: 'data-koot-entry',
  // 模板中的一些判断阈值

  /**
   * @type {number} 全局 CSS 抽出总结果文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <link> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdStylesExtracted: 50 * 1024,

  /**
   * @type {number} run-first 入口的文件尺寸阈值 (字节)
   * - 如果超过这个值，会采用 <script> 引用的方式
   * - 如果小于等于这个值，直接将文件内容写入 HTML
   */
  thresholdScriptRunFirst: 15 * 1024,

  /** @type {string} 打包结果目录中的文件对照表文件名 */
  buildManifestFilename: '.koot-public-manifest.json',

  /** @type {string} 打包结果目录中输出文件总集文件名 */
  buildOutputsFilename: '.koot-public-outputs.json',

  /** @type {string} Webpack Dev Server 热更新 Web Socket 地址 */
  pathnameSockjs: `sockjs-node`,

  /** Webpack compilation 对象中的定制属性 - 额外 Meta 标签的 HTML 代码 */
  compilationKeyHtmlMetaTags: '.htmlMetaTags__',

  /** 针对 SPA 打包时模板 injection 操作需要的 Webpack compilation 对象对应的全局变量名 */
  GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION: '__KOOT_GLOBAL_VAR_BUILD_COMPILATION_FOR_SPA_INJECTION__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines-server.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-server.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports =  true ? {
  needConnectComponents: '__NEED_CONNECT_COMPONENTS__',
  ssrContext: '__KOOT_SSR__',
  koaContext: '__KOOT_CTX__'
} : 0;

/***/ }),

/***/ "./node_modules/koot/defaults/defines-window.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/defaults/defines-window.js ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {
  /** [客户端] 语言ID */
  LOCALEID: '__KOOT_LOCALEID__',
  STORE: '__KOOT_STORE__',
  HISTORY: '__KOOT_HISTORY__',
  CACHE: '__KOOT_CACHE__',
  REDUXSTATE: '__REDUX_STATE__',
  SSRSTATE: '__KOOT_SSR_STATE__',
  SPALOCALEFILEMAP: '__KOOT_SPA_LOCALE_FILE_MAP__',
  DEV_NATIVE_CONSOLE: '__KOOT_DEV_NATIVE_CONSOLE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/defines.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/defaults/defines.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = {
  __KOOT_INJECT_ATTRIBUTE_NAME__: 'koot-inject',
  __KOOT_INJECT_METAS_START__: 'koot-inject-metas-start',
  __KOOT_INJECT_METAS_END__: 'koot-inject-metas-end',
  // hl 这个参数名是参考了Instargram
  changeLocaleQueryKey: 'hl',
  sessionStoreKey: '__KOOT_SESSION_STORE__'
};

/***/ }),

/***/ "./node_modules/koot/defaults/envs.js":
/*!********************************************!*\
  !*** ./node_modules/koot/defaults/envs.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  KOOT_BUILD_START_TIME: 'KOOT_BUILD_START_TIME',
  KOOT_DEV_START_TIME: 'KOOT_DEV_START_TIME',
  KOOT_REACT_RUNTIME: 'KOOT_REACT_RUNTIME',
  KOOT_CLIENT_PUBLIC_PATH: 'KOOT_CLIENT_PUBLIC_PATH'
};

/***/ }),

/***/ "./node_modules/koot/defaults/koa-static.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/defaults/koa-static.js ***!
  \**************************************************/
/***/ ((module) => {

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
/***/ ((module) => {

module.exports = {
  maxAge: 5 * 1000,
  maxCount: 50
};

/***/ }),

/***/ "./node_modules/koot/i18n/action-types.js":
/*!************************************************!*\
  !*** ./node_modules/koot/i18n/action-types.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18N_INIT": () => (/* binding */ I18N_INIT),
/* harmony export */   "I18N_SET_LOCALES": () => (/* binding */ I18N_SET_LOCALES)
/* harmony export */ });
const I18N_INIT = '@@KOOT@@I18N_INIT';
const I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

/***/ }),

/***/ "./node_modules/koot/i18n/get-locales-config.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/i18n/get-locales-config.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

let locales;
/**
 * 获取 i18n 配置数组
 * @returns {Array}
 */

module.exports = () => {
  if (!Array.isArray(locales)) {
    if (isI18nEnabled()) {
      locales = JSON.parse("[[\"zh\",{},null,\"./locales/zh.json\"],[\"en\",{},null,\"./locales/en.json\"],[\"ja\",{},null,\"./locales/ja.json\"]]") || [];
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isI18nEnabled = __webpack_require__(/*! ./is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/**
 * 获取当前多语言配置类型
 * @returns {String}
 */


module.exports = () => isI18nEnabled() ? JSON.parse("\"default\"") || 'default' : undefined;

/***/ }),

/***/ "./node_modules/koot/i18n/is-enabled.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/is-enabled.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * 检查当前项目是否开启多语言支持
 * @returns {Boolean}
 */
const isI18nEnabled = () => {
  if ( false || !JSON.parse("true")) return false;
  return true;
};

module.exports = isI18nEnabled;

/***/ }),

/***/ "./node_modules/koot/i18n/locale-ids.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/locale-ids.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getLocalesConfig = __webpack_require__(/*! ./get-locales-config */ "./node_modules/koot/i18n/get-locales-config.js");

let result;
/**
 * 获取 i18n 语种列表
 * @returns {Array}
 */

module.exports = (() => {
  if (!Array.isArray(result)) {
    result = getLocalesConfig();
    result = result.map(l => l[0]);
    if (!result.length) result = [''];
  }

  return result;
})();

/***/ }),

/***/ "./node_modules/koot/i18n/locales.js":
/*!*******************************************!*\
  !*** ./node_modules/koot/i18n/locales.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocalesObject": () => (/* binding */ getLocalesObject),
/* harmony export */   "locales": () => (/* binding */ locales),
/* harmony export */   "setLocales": () => (/* binding */ setLocales),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  SSRSTATE
} = __webpack_require__(/*! ../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");

const {
  get: getSSRContext
} = __webpack_require__(/*! ../libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");

const __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

const getLocalesObject = () => {
  if (true) {
    if (false) {} else return getSSRContext().locales || false;
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

let locales = (() => getLocalesObject() || {})();
const setLocales = (newLocales = {}) => {
  // const obj = getLocalesObject()
  if (locales) Object.assign(locales, newLocales);else locales = newLocales;
  return locales;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/***/ ((module) => {

/**
 * 根据输入的语言列表字符串，返回语言列表array
 *
 * @param {string} langList 语言列表字符串，eg: zh-CN,zh;q=0.8,en;q=0.6
 *
 * @returns {array} 语言列表
 */
module.exports = langList => langList.split(',').map(value => value.split(';')[0]);

/***/ }),

/***/ "./node_modules/koot/i18n/parse-locale-id.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/i18n/parse-locale-id.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const parseLanguageList = __webpack_require__(/*! ./parse-language-list */ "./node_modules/koot/i18n/parse-language-list.js");

const availableLocaleIds = __webpack_require__(/*! ./locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/**
 * 根据输入返回项目匹配的语言包ID (localeId)
 * 如果没有匹配，返回项目语言包ID的第一项
 * 注：仅为返回，没有赋值操作
 *
 * @param {string|string[]} input
 * @param {string[]} [localeIds] 可选语言ID列表
 * @returns 匹配的语言包ID localeId 或 availableLocaleIds[0]
 */


const parseLocaleId = (input, localeIds = availableLocaleIds) => {
  // 检查是否包含分号，如果是，按语言列表处理为array
  // eg: zh-CN,zh;q=0.8,en;q=0.6
  if (typeof input === 'string' && input.indexOf(';') > -1) input = parseLanguageList(input); // 检查是否为array

  if (Array.isArray(input)) {
    let id;
    input.some(thisId => {
      id = checkItem(thisId, localeIds);
      return id;
    });
    return id || localeIds[0];
  } else if (!input && typeof navigator !== 'undefined') return parseLocaleId(navigator.languages || navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || localeIds[0], localeIds);else if (input) return checkItem(input, localeIds) || localeIds[0];

  return localeIds[0];
};

module.exports = parseLocaleId; // ============================================================================

/**
 * 标准化语言包ID，方便匹配
 * - 全部小写
 * - `_` 变为 `-`
 * @param {string} input
 * @returns {string}
 */

const normalize = localeId => localeId.toLowerCase().replace(/_/g, '-');
/**
 * 获取基础语种
 * @param {string} localeId
 * @param {string} [seperator='-'] 连接线，默认为 `-`
 * @returns {string}
 */


const getLocaleBase = (localeId, seperator = '-') => localeId.split(seperator)[0];
/**
 * 检查单项，如果和availableLocales内的项目有匹配，返回匹配，否则返回null
 * @param {string} input 检查项
 * @param {string[]} [localeIds] 可选语言ID列表
 * @returns 匹配的 localeId 或 null
 */


const checkItem = (input, localeIds = availableLocaleIds) => {
  const inputNormalized = normalize(input);
  const localeIdsNormalized = localeIds.map(normalize);
  let result; // 如果有完整匹配的项，直接返回结果

  localeIdsNormalized.some((thisLocaleId, index) => {
    if (thisLocaleId === inputNormalized) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result; // 之后根据基础语种进行检查

  /** 基础语种 (eg: `zh-CN` 基础语种为 `zh`) */

  const baseLocale = getLocaleBase(inputNormalized, '-'); // 如果可选列表中有对应的基础语种，返回该结果

  localeIdsNormalized.some((thisLocaleId, index) => {
    if (thisLocaleId === baseLocale) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result; // 检查可选列表中每一项的基础语种，返回第一个匹配

  localeIdsNormalized.some((thisLocaleId, index) => {
    const thisBaseLocale = getLocaleBase(thisLocaleId, '-');

    if (thisBaseLocale === baseLocale) {
      result = localeIds[index];
      return true;
    }

    return false;
  });
  if (result) return result;
  return null;
};

/***/ }),

/***/ "./node_modules/koot/i18n/read-locale-file-sync.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/i18n/read-locale-file-sync.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-eval */
// const fs = require('fs-extra');
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");

module.exports = pathname => {
  // if (process.env.WEBPACK_BUILD_STAGE === 'client') return {};
  const file = path.isAbsolute(pathname) ? pathname : path.resolve(getCwd(), pathname); // console.log({
  //     pathname,
  //     file,
  //     extname: path.extname(file),
  //     exists: fs.existsSync(file)
  // });

  return path.extname(file) === '.json' ? // ? fs.readJsonSync(file)
  JSON.parse(fs.readFileSync(file, 'utf-8')) : eval(`require("${file.replace(/\\/g, '\\\\')}")`);
};

/***/ }),

/***/ "./node_modules/koot/i18n/redux/index.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/i18n/redux/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducerLocaleId": () => (/* binding */ reducerLocaleId),
/* harmony export */   "actionInit": () => (/* binding */ actionInit)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");
// import parseLanguageList from '../parse-language-list';
// import getLanguagelistFromState from '../get-language-list-from-state';
// import parseLocaleId from '../parse-locale-id';
// import locales from '../locales'

/**
 * Redux reducer: 初始化 localeId
 *
 * @param {*} state
 * @param {*} action
 *
 * @returns {*} state
 */

const reducerLocaleId = (state = null, action) => {
  switch (action.type) {
    case _action_types__WEBPACK_IMPORTED_MODULE_0__.I18N_INIT:
      return action.localeId;

    default:
      return state;
  }
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

const actionInit = localeId => {
  // setLocaleId(localeId)
  // const localeId = __SERVER__
  //     ? init(parseLanguageList(
  //         (typeof state === 'object') ? getLanguagelistFromState(state) : state
  //     ), state.localeId)
  //     : state.localeId
  // setLocaleId(localeId)
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__.I18N_INIT,
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
// const init = (langList = [], localeId) => {
//     if (__SERVER__) {
//         // console.log(locales[localeId])
//         if (typeof langList === 'string')
//             if (langList.indexOf(';') > -1)
//                 langList = parseLanguageList(langList);
//             else return init([langList], localeId);
//         const parsed = parseLocaleId(langList);
//         // if (parsed) setLocaleId(parsed)
//         // else setLocaleId(localeId)
//         if (parsed) return parsed;
//         return localeId;
//         // if (locales[localeId]) return locales[localeId]
//     }
// };

/***/ }),

/***/ "./node_modules/koot/i18n/server/get-lang-from-ctx.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/i18n/server/get-lang-from-ctx.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../defaults/defines */ "./node_modules/koot/defaults/defines.js");
/* harmony import */ var _defaults_defines__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale-ids */ "./node_modules/koot/i18n/locale-ids.js");
/* harmony import */ var _locale_ids__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_locale_ids__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_parse_locale_id__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../set-cookie */ "./node_modules/koot/i18n/set-cookie.js");
/* harmony import */ var _set_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_set_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../is-enabled */ "./node_modules/koot/i18n/is-enabled.js");
/* harmony import */ var _is_enabled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_is_enabled__WEBPACK_IMPORTED_MODULE_0__);
// import cookie from 'cookie'





/**
 * 根据 KOA Context 获取语种ID
 * @param {Object} ctx KOA Context
 * @returns {String} 匹配到的或当前项目默认语种ID
 */

const getLangFromCtx = ctx => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_0___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) {} else if (false) {} else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_1__.changeLocaleQueryKey]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_2___default().includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_1__.changeLocaleQueryKey])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_1__.changeLocaleQueryKey];
      ctx.redirect(ctx.url.replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_1__.changeLocaleQueryKey}=(.+)$`), '').replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_1__.changeLocaleQueryKey}=(.+)&`), ''));
      return (_locale_ids__WEBPACK_IMPORTED_MODULE_2___default()[0]);
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  const cookieValue = ctx.cookies.get("spLocaleId");

  if (cookieValue && _locale_ids__WEBPACK_IMPORTED_MODULE_2___default().includes(cookieValue)) {
    return cookieValue;
  } // console.log('ctx.cookies.get(process.env.KOOT_I18N_COOKIE_KEY)', cookieValue)
  // 如果上一步没有结果，从请求 headers 中获取


  if (ctx.header['accept-language']) {
    // const acceptLanguage = ctx.header['accept-language']
    // const acceptLanguages = acceptLanguage.split(',').map(str => str.split(';')[0])
    // console.log('acceptLanguage', acceptLanguage)
    // console.log('acceptLanguages', acceptLanguages)
    // console.log('parsed locale id', parseLocaleId(acceptLanguage))
    const localeId = _parse_locale_id__WEBPACK_IMPORTED_MODULE_3___default()(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale((_locale_ids__WEBPACK_IMPORTED_MODULE_2___default()[0]), ctx);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId
 */

const setLocale = (localeId, ctx) => {
  _set_cookie__WEBPACK_IMPORTED_MODULE_4___default()(localeId, ctx);
  return localeId;
};

/***/ }),

/***/ "./node_modules/koot/i18n/set-cookie.js":
/*!**********************************************!*\
  !*** ./node_modules/koot/i18n/set-cookie.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * 设置 cookie
 * @param {String} localeId
 * @param {Object} ctx Koa context
 */
module.exports = (localeId, ctx) => {
  const maxDate = 365;
  const options = {};

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStore": () => (/* binding */ createStore),
/* harmony export */   "reduxForCreateStore": () => (/* binding */ reduxForCreateStore),
/* harmony export */   "extend": () => (/* reexport safe */ _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "localeId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.localeId),
/* harmony export */   "store": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.store),
/* harmony export */   "getStore": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getStore),
/* harmony export */   "history": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.history),
/* harmony export */   "getHistory": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getHistory),
/* harmony export */   "getLocaleId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getLocaleId),
/* harmony export */   "resetLocaleId": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetLocaleId),
/* harmony export */   "resetStore": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetStore),
/* harmony export */   "resetHistory": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.resetHistory),
/* harmony export */   "getCache": () => (/* binding */ getCache),
/* harmony export */   "getCtx": () => (/* reexport safe */ _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getKoaCtx)
/* harmony export */ });
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./React/is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _React_is_render_safe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_React_is_render_safe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/ssr/context */ "./node_modules/koot/libs/ssr/context.js");
/* harmony import */ var _libs_ssr_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _React_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React/redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _KOOT_HOC_EXTEND___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __KOOT_HOC_EXTEND__ */ "./node_modules/koot/React/component-extender.jsx");



 // ============================================================================

/**
 * 手动创建 Redux Store 时需要的相关对象
 * @type {Object}
 */


const {
  createStore,
  ...reduxForCreateStore
} = _React_redux__WEBPACK_IMPORTED_MODULE_0__;

/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================


 // ============================================================================

const getCache = localeId => {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_3___default()()) return {};

  if (false) {}

  if (true) {
    const cache = (0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.get)().globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get((0,_libs_ssr_context__WEBPACK_IMPORTED_MODULE_2__.getLocaleId)());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

 // ============================================================================

if (false) {}

/***/ }),

/***/ "./node_modules/koot/libs/create-koa-app.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/libs/create-koa-app.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Koa = __webpack_require__(/*! koa */ "koa");

const helmet = __webpack_require__(/*! koa-helmet */ "koa-helmet");

const removeSlashes = __webpack_require__(/*! ./koa-middlewares/remove-slashes */ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js");
/**
 * 创建 Koa App
 * @returns {Object} app
 */


const create = () => {
  const app = new Koa();
  app.use(helmet({
    contentSecurityPolicy: false
  }));
  app.use(removeSlashes);
  return app;
};

module.exports = create;

/***/ }),

/***/ "./node_modules/koot/libs/error-msg.js":
/*!*********************************************!*\
  !*** ./node_modules/koot/libs/error-msg.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * 生成错误信息
 * @param {String} msg
 * @returns {String}
 */
const errorMsg = (type, msg) => {
  if (typeof type === 'string' && typeof msg === 'string') return `${type}::${msg}`;
  return type;
};

module.exports = errorMsg;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ../utils/get-cwd */ "./node_modules/koot/utils/get-cwd.js");
/**
 * _仅针对开发环境_ 获取开发环境临时目录
 * @param {String} [cwd]
 * @param {String} [type]
 * @returns {String} 如果提供 `type`，则返回对应类型的目录
 */


module.exports = (cwd = getCwd(), type = "") => path.resolve(cwd, 'logs/dev', type ? `.${type}` : '');

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public-foldername.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public-foldername.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = () =>  false ? 0 : `public`;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getDirDistPublicFoldername = __webpack_require__(/*! ./get-dir-dist-public-foldername */ "./node_modules/koot/libs/get-dir-dist-public-foldername.js");
/**
 * 获取打包结果基础目录
 * 最终的打包目录是该目录下的 includes (默认情况)
 * @param {String} dist 打包结果目录
 * @returns {String}
 */


module.exports = dist => {
  if (!result) {
    result = path.resolve(dist, getDirDistPublicFoldername());
  }

  return result;
};

let result;

/***/ }),

/***/ "./node_modules/koot/libs/get-free-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/get-free-port.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const portfinder = __webpack_require__(/*! portfinder */ "portfinder");
/**
 * 获取可用端口
 * @async
 * @param {Number|Number[]|Object} 正在使用、被占用或保留的端口
 * @returns {Number}
 */


module.exports = async portUsed => {
  const portStart = 3000;
  const portEnd = 65535;
  /** @type {Array[]} 使用 portfinder 检查的端口号范围组 */

  const ranges = [[portStart, portEnd]]; // console.log('portUsed', portUsed)

  /** @type {Number[]} 忽略的端口号 */

  const portsIgnore = [];

  if (isNumber(portUsed)) {
    portsIgnore.push(parseInt(portUsed));
  } else if (Array.isArray(portUsed)) {
    portUsed.filter(value => isNumber(value)).forEach(port => portsIgnore.push(parseInt(port)));
  } else if (typeof portUsed === 'object') {
    Object.values(portUsed).filter(value => isNumber(value)).forEach(port => portsIgnore.push(parseInt(port)));
  } // console.log('portsIgnore', portsIgnore)
  // 如果存在忽略的端口号，修改 ranges 为多组模式


  if (portsIgnore.length) {
    ranges.shift();
    let lastPort = portStart;
    portsIgnore.forEach(port => {
      ranges.push([lastPort, port - 1]);
      lastPort = port;
    });
  } // console.log('ranges', ranges)


  for (let [start, end] of ranges) {
    const result = await getFreePort(start, end); // console.log(result)

    if (result) return result;
  }
};

const isNumber = value => Boolean(typeof value === 'number' || !isNaN(value));
/**
 * 获取范围内可用的端口
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Number}
 */


const getFreePort = async (start, end) => portfinder.getPortPromise({
  port: start,
  // minimum port
  stopPort: end // maximum port

}).then(port => {
  //
  // `port` is guaranteed to be a free port
  // in this scope.
  //
  return port;
}).catch(() =>
/*err*/
{//
  // Could not get a free port, `err` contains the reason.
  //
});

/***/ }),

/***/ "./node_modules/koot/libs/get-log-msg.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/get-log-msg.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const chalk = __webpack_require__(/*! chalk */ "chalk");
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


const generateLogMsg = (mark, type, content) => {
  if (typeof mark !== 'undefined' && typeof type === 'undefined' && typeof content === 'undefined') return generateLogMsg('', '', mark);
  if (typeof type !== 'undefined' && typeof content === 'undefined') return generateLogMsg(mark, '', type);
  let markColor = 'cyan';
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

  const typeColor = (() => {
    switch (type) {
      default:
        return 'yellowBright';
    }
  })();

  return (mark === '' ? '' : chalk[markColor](mark)) + chalk[typeColor](`[koot${type ? `/${type}` : ''}] `) + content;
};

module.exports = generateLogMsg;

/***/ }),

/***/ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/libs/koa-middlewares/remove-slashes.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * KOA 中间件: 移除 URL 起始部分的多余斜线
 * @param {Object} koaStaticConfig
 * @return {Function}
 */
const removeSlashesMiddleware = async (ctx, next) => {
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
module.exports = (...args) => {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js")(...args));
};

/***/ }),

/***/ "./node_modules/koot/libs/ssr/context.js":
/*!***********************************************!*\
  !*** ./node_modules/koot/libs/ssr/context.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global
    __KOOT_SSR__:false
    __KOOT_CTX__:false
*/

/**
 * 当前 SSR context 对象
 * @typedef {Object} KootSSRContext
 * @property {Object} Store - 数据存储空间
 * @property {History} History - 历史纪录对象
 * @property {string} [LocaleId] - 当前语种ID
 * @property {Object} [locales] - 语言包对象，包含所有语种
 * @property {Map} globalCache - 公共缓存空间
 * @property {Object} [proxyRequestOrigin={}] - 配置项 `proxyRequestOrigin`
 * @property {string} template - EJS 模板
 * @property {Object} [templateInject={}] - EJS 自定义注入对象
 *
                    thisTemplateInjectCache,
                    thisEntrypoints,
                    thisFilemap, //thisStyleMap,
                    thisManifest,
                    styleMap,
                    connectedComponents: __DEV__
                        ? (global[SSRContext]
                              ? global[SSRContext].connectedComponents
                              : []) || []
                        : [],
 */
// ============================================================================
const {
  LOCALEID: ClientLocaleId,
  STORE: ClientStore,
  HISTORY: ClientHistory
} = __webpack_require__(/*! ../../defaults/defines-window */ "./node_modules/koot/defaults/defines-window.js");

const {
  ssrContext: SSRContext,
  koaContext: KOAContext
} = __webpack_require__(/*! ../../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js"); // ============================================================================

/** @type {KootSSRContext} */


let kootSSRContext;
let koaCtx;

if (false) {} // ============================================================================

/**
 * 获取 SSR context 对象
 * @returns {KootSSRContext}
 */


function get() {
  if (false) {}
  if (false) {}
  if (typeof kootSSRContext === 'object') return kootSSRContext;
  if (typeof __KOOT_SSR__ === 'object') return __KOOT_SSR__;
  return {};
}
/**
 * 获取 Koa ctx 对象
 */


function getKoaCtx() {
  if (false) {}
  if (false) {}
  if (typeof koaCtx === 'object') return koaCtx;
  if (typeof __KOOT_CTX__ === 'object') return __KOOT_CTX__;
  return {};
}
/**
 * 设置当前 Koa ctx 和 Koot SSR context 对象
 * @param {*} ctx
 */


function set(ctx) {
  if (false) {} // console.log('set', ctx, 'locales', ctx[SSRContext].locales);

  if (false) {}
  kootSSRContext = ctx[SSRContext];
  koaCtx = ctx;
  resetLocaleId();
  resetStore();
  resetHistory();
} // ============================================================================


const getLocaleId = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().LocaleId;
  }
};

let localeId = (() => getLocaleId())();

const resetLocaleId = newValue => {
  if ( true && newValue === false) {
    localeId = undefined;
    delete get().LocaleId;
    return;
  }

  if (newValue) get().LocaleId = newValue;
  localeId = newValue || getLocaleId();
}; // ============================================================================


const getStore = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().Store;
  }
};

let store = (() => getStore())();

const resetStore = newValue => {
  if (newValue) get().Store = newValue;
  store = newValue || getStore();
}; // ============================================================================


const getHistory = () => {
  if (false) {}

  if (true) {
    if (false) {}
    return get().History;
  }
};

let history = (() => getHistory())();

const resetHistory = newValue => {
  if (newValue) get().History = newValue;
  history = newValue || getHistory();
}; // ============================================================================


function reset() {
  resetLocaleId(false); // purgeObj(kootSSRContext);

  kootSSRContext = undefined;
  koaCtx = undefined;
} // const purgeObj = (obj) => {
//     if (typeof obj === 'object') {
//         for (const [key, value] of Object.entries(obj)) {
//             if (typeof value === 'object') {
//                 purgeObj(value);
//             }
//             // console.log(key);
//             try {
//                 obj[key] = undefined;
//             } catch (e) {}
//             delete obj[key];
//         }
//     }
// };
// ============================================================================


module.exports = {
  set,
  get,
  getKoaCtx,
  localeId,
  getLocaleId,
  resetLocaleId,
  store,
  getStore,
  resetStore,
  history,
  getHistory,
  resetHistory,
  reset
};

/***/ }),

/***/ "./node_modules/koot/libs/validate-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/validate-port.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const isPortReachable = __webpack_require__(/*! is-port-reachable */ "is-port-reachable");

const inquirer = __webpack_require__(/*! inquirer */ "inquirer"); // const osLocale = require('os-locale')


const getPathnameDevServerStart = __webpack_require__(/*! ../utils/get-pathname-dev-server-start */ "./node_modules/koot/utils/get-pathname-dev-server-start.js");

const getFreePort = __webpack_require__(/*! ./get-free-port */ "./node_modules/koot/libs/get-free-port.js");
/**
 * @async
 * @returns {Number|Boolean} 如果最终没有结果，返回 false，否则返回可用的端口数
 */


const doValidatePort = async () => {
  // [开发环境] 如果 flag 文件中写有端口，直接使用该端口
  if (false) {} // const locale = osLocale.sync()
  // console.log('locale', locale)
  // 如果环境变量中不存在 SERVER_PORT 同时全局变量 __SERVER_PORT__ 存在可用值，赋值环境变量
  // __SERVER_PORT__ 为 webpack 打包时使用 definePlugin 替换入的全局变量值


  if (typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined') process.env.SERVER_PORT = "8082";
  /** @type {Boolean} 环境变量 SERVER_PORT 的端口号是否可用 */

  const isPortInEnvFree = await isPortFree(process.env.SERVER_PORT); // 如果可用，返回该端口号，结束

  if (isPortInEnvFree) return process.env.SERVER_PORT; // 如果不可用，输出日志

  logPortTaken(process.env.SERVER_PORT); // [开发环境] 修改 flag 文件，标记端口被占用，并结束

  if (false) {}
  /** @type {Boolean} 端口是否被占用 */


  let isPortTaken = true;
  /** @type {Number} 端口结果 */

  let port;

  while (isPortTaken) {
    const askForPort = await inquirer.prompt([{
      type: 'input',
      name: 'port',
      message: 'Please input a new port number (leave empty for cancel)',
      validate: input => {
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


const isPortFree = async port => {
  const isPortOpen = !(await isPortReachable(port));
  if (isPortOpen) return port;
  return false;
};
/**
 * log: 目标端口被占用
 * @param {Number|String} port
 */


const logPortTaken = port => {
  console.log(`\x1b[31m×\x1b[0m ` + `\x1b[93m[koot/server]\x1b[0m port \x1b[32m${port}\x1b[0m has been taken.`);
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


const validatePort = async () => {
  const port = await doValidatePort();
  if (!port) return false;

  if (false) {}

  return port;
}; // export default validatePort;


module.exports = validatePort;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_Hash.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_Hash.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/koot/node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/koot/node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/koot/node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/koot/node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/koot/node_modules/lodash/_hashSet.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_ListCache.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_ListCache.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/koot/node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/koot/node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/koot/node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/koot/node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/koot/node_modules/lodash/_listCacheSet.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_Map.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_Map.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/koot/node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js");
/* Built-in method references that are verified to be native. */


var Map = getNative(root, 'Map');
module.exports = Map;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_MapCache.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_MapCache.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/koot/node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/koot/node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/koot/node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/koot/node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/koot/node_modules/lodash/_mapCacheSet.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_Stack.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_Stack.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/koot/node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/koot/node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/koot/node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/koot/node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/koot/node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/koot/node_modules/lodash/_stackSet.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_Symbol.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_Symbol.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js");
/** Built-in value references. */


var Symbol = root.Symbol;
module.exports = Symbol;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_Uint8Array.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_Uint8Array.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js");
/** Built-in value references. */


var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_apply.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_apply.js ***!
  \*********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_arrayLikeKeys.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_arrayLikeKeys.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/koot/node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/koot/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/koot/node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/koot/node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/koot/node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/koot/node_modules/lodash/isTypedArray.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_assignMergeValue.js":
/*!********************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_assignMergeValue.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/koot/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/koot/node_modules/lodash/eq.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_assignValue.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_assignValue.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/koot/node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/koot/node_modules/lodash/eq.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_assocIndexOf.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_assocIndexOf.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/koot/node_modules/lodash/eq.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseAssignValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseAssignValue.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/koot/node_modules/lodash/_defineProperty.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseCreate.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseCreate.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseFor.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/koot/node_modules/lodash/_createBaseFor.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseGetTag.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseGetTag.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/koot/node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/koot/node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/koot/node_modules/lodash/_objectToString.js");
/** `Object#toString` result references. */


var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';
/** Built-in value references. */

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

/***/ "./node_modules/koot/node_modules/lodash/_baseIsArguments.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseIsArguments.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/koot/node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/koot/node_modules/lodash/isObjectLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseIsNative.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseIsNative.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/koot/node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/koot/node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/koot/node_modules/lodash/_toSource.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseIsTypedArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseIsTypedArray.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/koot/node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/koot/node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/koot/node_modules/lodash/isObjectLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseKeysIn.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseKeysIn.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/koot/node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/koot/node_modules/lodash/_nativeKeysIn.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseMerge.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseMerge.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/koot/node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/koot/node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/koot/node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/koot/node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/koot/node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/koot/node_modules/lodash/_safeGet.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseMergeDeep.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseMergeDeep.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/koot/node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/koot/node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/koot/node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/koot/node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/koot/node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/koot/node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/koot/node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/koot/node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/koot/node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/koot/node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/koot/node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/koot/node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/koot/node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/koot/node_modules/lodash/toPlainObject.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseRest.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseRest.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/koot/node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/koot/node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/koot/node_modules/lodash/_setToString.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseSetToString.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseSetToString.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/koot/node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/koot/node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/koot/node_modules/lodash/identity.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_baseTimes.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseTimes.js ***!
  \*************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_baseUnary.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_baseUnary.js ***!
  \*************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_cloneArrayBuffer.js":
/*!********************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_cloneArrayBuffer.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/koot/node_modules/lodash/_Uint8Array.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_cloneBuffer.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_cloneBuffer.js ***!
  \***************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
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

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_cloneTypedArray.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_cloneTypedArray.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/koot/node_modules/lodash/_cloneArrayBuffer.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_copyArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_copyArray.js ***!
  \*************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_copyObject.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_copyObject.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/koot/node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/koot/node_modules/lodash/_baseAssignValue.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_coreJsData.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_coreJsData.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js");
/** Used to detect overreaching core-js shims. */


var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_createAssigner.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_createAssigner.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/koot/node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/koot/node_modules/lodash/_isIterateeCall.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_createBaseFor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_createBaseFor.js ***!
  \*****************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_defineProperty.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_defineProperty.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/koot/node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_freeGlobal.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_freeGlobal.js ***!
  \**************************************************************/
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_getMapData.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_getMapData.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/koot/node_modules/lodash/_isKeyable.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_getNative.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_getNative.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/koot/node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/koot/node_modules/lodash/_getValue.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_getPrototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_getPrototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/koot/node_modules/lodash/_overArg.js");
/** Built-in value references. */


var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_getRawTag.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_getRawTag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/koot/node_modules/lodash/_Symbol.js");
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

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
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

/***/ "./node_modules/koot/node_modules/lodash/_getValue.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_getValue.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_hashClear.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_hashClear.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/koot/node_modules/lodash/_nativeCreate.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_hashDelete.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_hashDelete.js ***!
  \**************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_hashGet.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_hashGet.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/koot/node_modules/lodash/_nativeCreate.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_hashHas.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_hashHas.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/koot/node_modules/lodash/_nativeCreate.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_hashSet.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_hashSet.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/koot/node_modules/lodash/_nativeCreate.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_initCloneObject.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_initCloneObject.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/koot/node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/koot/node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/koot/node_modules/lodash/_isPrototype.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_isIndex.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_isIndex.js ***!
  \***********************************************************/
/***/ ((module) => {

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
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_isIterateeCall.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_isIterateeCall.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/koot/node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/koot/node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/koot/node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js");
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

  var type = typeof index;

  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }

  return false;
}

module.exports = isIterateeCall;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_isKeyable.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_isKeyable.js ***!
  \*************************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_isMasked.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_isMasked.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/koot/node_modules/lodash/_coreJsData.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_isPrototype.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_isPrototype.js ***!
  \***************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_listCacheClear.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_listCacheClear.js ***!
  \******************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_listCacheDelete.js":
/*!*******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_listCacheDelete.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/koot/node_modules/lodash/_assocIndexOf.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_listCacheGet.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_listCacheGet.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/koot/node_modules/lodash/_assocIndexOf.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_listCacheHas.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_listCacheHas.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/koot/node_modules/lodash/_assocIndexOf.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_listCacheSet.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_listCacheSet.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/koot/node_modules/lodash/_assocIndexOf.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_mapCacheClear.js":
/*!*****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_mapCacheClear.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/koot/node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/koot/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/koot/node_modules/lodash/_Map.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_mapCacheDelete.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_mapCacheDelete.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/koot/node_modules/lodash/_getMapData.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_mapCacheGet.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_mapCacheGet.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/koot/node_modules/lodash/_getMapData.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_mapCacheHas.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_mapCacheHas.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/koot/node_modules/lodash/_getMapData.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_mapCacheSet.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_mapCacheSet.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/koot/node_modules/lodash/_getMapData.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_nativeCreate.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_nativeCreate.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/koot/node_modules/lodash/_getNative.js");
/* Built-in method references that are verified to be native. */


var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_nativeKeysIn.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_nativeKeysIn.js ***!
  \****************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_nodeUtil.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_nodeUtil.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/koot/node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
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

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_objectToString.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_objectToString.js ***!
  \******************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_overArg.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_overArg.js ***!
  \***********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_overRest.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_overRest.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/koot/node_modules/lodash/_apply.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_root.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_root.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/koot/node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/_safeGet.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_safeGet.js ***!
  \***********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_setToString.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_setToString.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/koot/node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/koot/node_modules/lodash/_shortOut.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_shortOut.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_shortOut.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_stackClear.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_stackClear.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/koot/node_modules/lodash/_ListCache.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_stackDelete.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_stackDelete.js ***!
  \***************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_stackGet.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_stackGet.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_stackHas.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_stackHas.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/_stackSet.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_stackSet.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/koot/node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/koot/node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/koot/node_modules/lodash/_MapCache.js");
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

/***/ "./node_modules/koot/node_modules/lodash/_toSource.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/_toSource.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/constant.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/constant.js ***!
  \***********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/eq.js":
/*!*****************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/eq.js ***!
  \*****************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/identity.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/identity.js ***!
  \***********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/isArguments.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isArguments.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/koot/node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/koot/node_modules/lodash/isObjectLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/isArray.js":
/*!**********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isArray.js ***!
  \**********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/isArrayLike.js":
/*!**************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isArrayLike.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/koot/node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/koot/node_modules/lodash/isLength.js");
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

/***/ "./node_modules/koot/node_modules/lodash/isArrayLikeObject.js":
/*!********************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isArrayLikeObject.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/koot/node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/koot/node_modules/lodash/isObjectLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/isBuffer.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isBuffer.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/koot/node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/koot/node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;
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

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/isFunction.js":
/*!*************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isFunction.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/koot/node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/koot/node_modules/lodash/isObject.js");
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

/***/ "./node_modules/koot/node_modules/lodash/isLength.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isLength.js ***!
  \***********************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/isObject.js":
/*!***********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isObject.js ***!
  \***********************************************************/
/***/ ((module) => {

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
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/isObjectLike.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isObjectLike.js ***!
  \***************************************************************/
/***/ ((module) => {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/koot/node_modules/lodash/isPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isPlainObject.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/koot/node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/koot/node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/koot/node_modules/lodash/isObjectLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/isTypedArray.js":
/*!***************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/isTypedArray.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/koot/node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/koot/node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/koot/node_modules/lodash/_nodeUtil.js");
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

/***/ "./node_modules/koot/node_modules/lodash/keysIn.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/keysIn.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/koot/node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/koot/node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/koot/node_modules/lodash/isArrayLike.js");
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

/***/ "./node_modules/koot/node_modules/lodash/merge.js":
/*!********************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/merge.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/koot/node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/koot/node_modules/lodash/_createAssigner.js");
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

/***/ "./node_modules/koot/node_modules/lodash/stubFalse.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/stubFalse.js ***!
  \************************************************************/
/***/ ((module) => {

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

/***/ "./node_modules/koot/node_modules/lodash/toPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/node_modules/lodash/toPlainObject.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/koot/node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/koot/node_modules/lodash/keysIn.js");
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

/***/ "./node_modules/koot/utils/get-build-manifest-path.js":
/*!************************************************************!*\
  !*** ./node_modules/koot/utils/get-build-manifest-path.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

const {
  buildManifestFilename
} = __webpack_require__(/*! ../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 获取打包文件清单文件 (build-manifest) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = (dist = getDistPath()) => {
  if (false) {}
  return path.resolve(dist, buildManifestFilename);
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */
module.exports = __webpack_require__(/*! ./get-build-manifest-path */ "./node_modules/koot/utils/get-build-manifest-path.js");

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const getIsI18nEnabled = __webpack_require__(/*! ../i18n/is-enabled */ "./node_modules/koot/i18n/is-enabled.js");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getChunkmapPath = __webpack_require__(/*! ./get-chunkmap-path */ "./node_modules/koot/utils/get-chunkmap-path.js");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

let cachedChunkmap;
/**
 * 获取打包文件对应表 (chunkmap)
 *
 * @param {String} [localeId] 当前语言，默认为当前语言 (i18n开启时) 或未指定 (i18n未开启时)
 * @param {Boolean} [getFullResult = false] 仅 i18n 开启时：获取 chunkmap 全文，而非当前语言的片段
 * @param {Boolean} [ignoreCache = false] 忽略结果缓存，强制重新获取对照表
 * @returns {Object}
 */

const getChunkmap = (localeId, getFullResult = false, ignoreCache = false) => {
  if (localeId === true) {
    return getChunkmap(getFullResult || undefined, true);
  }

  const isI18nEnabled = getIsI18nEnabled();

  if (isI18nEnabled && typeof localeId === 'undefined') {
    try {
      localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
    } catch (e) {}
  }

  const i18nType = getI18nType();
  const isI18nDefault = isI18nEnabled && i18nType === 'default';

  const chunkmap = (() => {
    if (!ignoreCache && cachedChunkmap) return cachedChunkmap;
    let chunkmap;
    if (typeof global.chunkmap === 'object') chunkmap = global.chunkmap;

    try {
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.122.b423606e4494e68af426.css\",\"public/includes/entry.b423606e4494e68af426.js\"],\"polyfill\":[\"public/includes/entry.8adbef7f49be10631869.js\",\"public/includes/entry.221036210fb84a108af7.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.c4966106abad9ddb8355.js\"],\"client\":[\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"public/includes/entry.9d0d341a2bba9e6f33fa.js\"]},\".files\":{\"critical.css\":\"public/includes/extract.122.b423606e4494e68af426.css\",\"critical.js\":\"public/includes/entry.b423606e4494e68af426.js\",\"polyfill.js\":\"public/includes/entry.221036210fb84a108af7.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.c4966106abad9ddb8355.js\",\"client.js\":\"public/includes/entry.9d0d341a2bba9e6f33fa.js\",\"Home_Page.js\":\"public/includes/chunk.73654f8358e7e996f241.js\",\"About_Page.js\":\"public/includes/chunk.c104bdb11becc2be8e18.js\",\"Fleet_Builder_Entry_Page.js\":\"public/includes/chunk.80eb836febe6e8792da9.js\",\"Fleet_Builder_Fleet_Details_Page.js\":\"public/includes/chunk.06d68bb6939504edb03b.js\",\"Fleet_Builder_WIP_Blank_Page.js\":\"public/includes/chunk.7984b2db1c33a1038544.js\",\"TP_Calculator_Single-Page-Tool.js\":\"public/includes/chunk.015f0a1d71af1a01600d.js\",\"Academy_Entry_Page.js\":\"public/includes/chunk.a866c320053965d63bef.js\",\"Sorties_List_Page.js\":\"public/includes/chunk.53ac6f53cee6187e2ed5.js\",\"Expeditions_List_Page.js\":\"public/includes/chunk.1b8b530d9043625244e6.js\",\"Ship_List_Page.js\":\"public/includes/chunk.fa14bd45a81bca8366e1.js\",\"Ship_Details_Page.css\":\"public/includes/extract.605.9467d9b2841c9bbb1e50.css\",\"Ship_Details_Page.js\":\"public/includes/chunk.9467d9b2841c9bbb1e50.js\",\"Equipment_List_Page.js\":\"public/includes/chunk.185bbefdf6d547dc8372.js\",\"Equipment_Details_Page.js\":\"public/includes/chunk.bf5c25f1a8cf988e6464.js\",\"Arsenal_Page.js\":\"public/includes/chunk.2fd770a05e1b909dbe1b.js\",\"People_List_Page.js\":\"public/includes/chunk.70a0db9e91d08b3b6553.js\",\"People_Details_Page.js\":\"public/includes/chunk.c5625193d25485f9d931.js\",\"Extra_CGs_Page.js\":\"public/includes/chunk.653aac42f36925005906.js\",\"nedb.js\":\"public/includes/chunk.d9843bf9c3067f501ac6.js\",\"libs.js\":\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"libs-others.js\":\"public/includes/chunk.88c903a42ad4082e13f6.js\",\"vendors.js\":\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.e5c5c023641aa2ba5e7de9a049fa58ac.small.css\"},\"service-worker\":[\"public/service-worker.zh.js\"]},\".en\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.122.c80488767704aef45945.css\",\"public/includes/entry.c80488767704aef45945.js\"],\"polyfill\":[\"public/includes/entry.8adbef7f49be10631869.js\",\"public/includes/entry.221036210fb84a108af7.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.1fd51a815ba235e599f3.js\"],\"client\":[\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"public/includes/entry.c1d836c08c09d3a2b480.js\"]},\".files\":{\"critical.css\":\"public/includes/extract.122.c80488767704aef45945.css\",\"critical.js\":\"public/includes/entry.c80488767704aef45945.js\",\"polyfill.js\":\"public/includes/entry.221036210fb84a108af7.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.1fd51a815ba235e599f3.js\",\"client.js\":\"public/includes/entry.c1d836c08c09d3a2b480.js\",\"Home_Page_17.js\":\"public/includes/chunk.1acd106a4a01ec700c8d.js\",\"About_Page_18.js\":\"public/includes/chunk.ab618e3f2b8f5eaf08bf.js\",\"Fleet_Builder_Entry_Page_21.js\":\"public/includes/chunk.71a694e3413e59a73768.js\",\"Fleet_Builder_Fleet_Details_Page_22.js\":\"public/includes/chunk.9d99ad673e3e4c9822a7.js\",\"Fleet_Builder_WIP_Blank_Page_23.js\":\"public/includes/chunk.86e03748df0db62b3050.js\",\"TP_Calculator_Single-Page-Tool_24.js\":\"public/includes/chunk.367216b857cdd220013f.js\",\"Academy_Entry_Page_25.js\":\"public/includes/chunk.dab0908f1df145f276bf.js\",\"Sorties_List_Page_19.js\":\"public/includes/chunk.6aa9451c34cf9edc8c30.js\",\"Expeditions_List_Page_20.js\":\"public/includes/chunk.5d31bad685fbe29722b3.js\",\"Ship_List_Page_26.js\":\"public/includes/chunk.609ba14926c51fdae2ac.js\",\"Ship_Details_Page_27.css\":\"public/includes/extract.688.774381461810dddccd0b.css\",\"Ship_Details_Page_27.js\":\"public/includes/chunk.774381461810dddccd0b.js\",\"Equipment_List_Page_28.js\":\"public/includes/chunk.efab6ec7d8aefb1d3ad1.js\",\"Equipment_Details_Page_29.js\":\"public/includes/chunk.dc21860fba7a60aba531.js\",\"Arsenal_Page_30.js\":\"public/includes/chunk.e1f89a7a2064fa336ede.js\",\"People_List_Page_31.js\":\"public/includes/chunk.27f2a1bf38c0729c972e.js\",\"People_Details_Page_32.js\":\"public/includes/chunk.97eba4d45ce58f9db137.js\",\"Extra_CGs_Page_33.js\":\"public/includes/chunk.a05a9d64cc24701701c4.js\",\"nedb.js\":\"public/includes/chunk.d9843bf9c3067f501ac6.js\",\"libs.js\":\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"libs-others.js\":\"public/includes/chunk.ee902eef2a13fc8d738a.js\",\"vendors.js\":\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.e5c5c023641aa2ba5e7de9a049fa58ac.small.css\"},\"service-worker\":[\"public/service-worker.en.js\"]},\".ja\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/extract.122.c80488767704aef45945.css\",\"public/includes/entry.c80488767704aef45945.js\"],\"polyfill\":[\"public/includes/entry.8adbef7f49be10631869.js\",\"public/includes/entry.221036210fb84a108af7.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/entry.1fd51a815ba235e599f3.js\"],\"client\":[\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"public/includes/entry.1decb5ca5e281acbde91.js\"]},\".files\":{\"critical.css\":\"public/includes/extract.122.c80488767704aef45945.css\",\"critical.js\":\"public/includes/entry.c80488767704aef45945.js\",\"polyfill.js\":\"public/includes/entry.221036210fb84a108af7.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.1fd51a815ba235e599f3.js\",\"client.js\":\"public/includes/entry.1decb5ca5e281acbde91.js\",\"Home_Page_34.js\":\"public/includes/chunk.85fa17b79ab8ad6c73b0.js\",\"About_Page_35.js\":\"public/includes/chunk.9561e5103bf2907d3dff.js\",\"Fleet_Builder_Entry_Page_36.js\":\"public/includes/chunk.1824c347fb334149a6a8.js\",\"Fleet_Builder_Fleet_Details_Page_37.js\":\"public/includes/chunk.9e694746e7188c65e2d7.js\",\"Fleet_Builder_WIP_Blank_Page_38.js\":\"public/includes/chunk.52c1d98250b6de77a55c.js\",\"TP_Calculator_Single-Page-Tool_39.js\":\"public/includes/chunk.d8cb637fd20a8b09276d.js\",\"Academy_Entry_Page_40.js\":\"public/includes/chunk.bc178b4acd58ce02e616.js\",\"Sorties_List_Page_41.js\":\"public/includes/chunk.cd4376eeb10cab8d455c.js\",\"Expeditions_List_Page_42.js\":\"public/includes/chunk.1a516a02ae98ff9fad22.js\",\"Ship_List_Page_43.js\":\"public/includes/chunk.e15b4c2be6477f2b6d3e.js\",\"Ship_Details_Page_44.css\":\"public/includes/extract.717.48b863e973da8ff24ee0.css\",\"Ship_Details_Page_44.js\":\"public/includes/chunk.48b863e973da8ff24ee0.js\",\"Equipment_List_Page_45.js\":\"public/includes/chunk.d8a2ee4922f0ebd2d1e2.js\",\"Equipment_Details_Page_46.js\":\"public/includes/chunk.ba7c908813d7517107a6.js\",\"Arsenal_Page_47.js\":\"public/includes/chunk.d43b3976d95db22a8d98.js\",\"People_List_Page_48.js\":\"public/includes/chunk.86873ac20f19b95ca923.js\",\"People_Details_Page_49.js\":\"public/includes/chunk.15676d99f7b700a7dd3c.js\",\"Extra_CGs_Page_50.js\":\"public/includes/chunk.f5cb7dfc4131682eb807.js\",\"nedb.js\":\"public/includes/chunk.d9843bf9c3067f501ac6.js\",\"libs.js\":\"public/includes/entry.93f263f65d8da85fb8a3.js\",\"libs-others.js\":\"public/includes/chunk.ee902eef2a13fc8d738a.js\",\"vendors.js\":\"public/includes/entry.dd8db2bf1f4e2d4fcd17.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.e5c5c023641aa2ba5e7de9a049fa58ac.small.css\"},\"service-worker\":[\"public/service-worker.ja.js\"]}}");
    } catch (e) {
      chunkmap = false;
    }

    if (typeof chunkmap !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = JSON.parse(fs.readFileSync(getChunkmapPath(), 'utf-8'));
      if (process.env.WEBPACK_BUILD_STAGE === 'server') global.chunkmap = chunkmap;
    }

    if (true) cachedChunkmap = chunkmap;
    return chunkmap;
  })();

  if (typeof chunkmap === 'object') {
    // let chunkmap = fs.readJsonSync(pathChunckmap)
    if (getFullResult) return chunkmap || {};
    if (isI18nEnabled && isI18nDefault) return chunkmap[`.${localeId}`] || {};
  }

  return chunkmap || {};
};

module.exports = getChunkmap;

/***/ }),

/***/ "./node_modules/koot/utils/get-client-file-path.js":
/*!*********************************************************!*\
  !*** ./node_modules/koot/utils/get-client-file-path.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global
    __KOOT_LOCALEID__:false
*/
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getI18nType = __webpack_require__(/*! ../i18n/get-type */ "./node_modules/koot/i18n/get-type.js");

const getPublicPath = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");

const getChunkmap = __webpack_require__(/*! ./get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/**
 * 获指定文件在客户端/取浏览器端中的可访问路径
 * @param {String} filename 要查找的文件的文件名。根据打包文件对应表 (chunkmap) 查询文件名和实际打包结果文件的对应关系
 * @param {String} [localeId] 当前语言
 * @param {Boolean} [isPathname = false] 如果标记为 true，表示提供的 filename 为确切的访问地址，无需查询对照表，直接返回结果
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String|String[]} 浏览器环境中的访问路径、空字符串或包含所有可能结果的 Array
 */


const getFilePath = (filename, localeId, isPathname = false, isSSRReading = false) => {
  // 如果第一个参数为 true，表示完全信任，不进行 chunkmap 对照查询，直接进行处理并返回结果
  if (filename === true) return getFilePath(localeId, isPathname || undefined, true, isSSRReading);

  if (typeof localeId === 'undefined') {
    try {
      if (false) {} else {
        localeId = __webpack_require__(/*! ../index */ "./node_modules/koot/index.js").localeId;
      }
    } catch (e) {// console.error(e);
    }
  }

  const pathPublic = getPublicPath(isSSRReading);
  const i18nType = getI18nType();
  const isI18nDefault = i18nType === 'default';
  const isDev =  false ||  true && false; // const localeId = 'zh'
  // 如果标记为 pathname，直接返回结果

  if (isPathname) return pathPublic + filename.replace(/(^\.\/|^)public\//, '');
  const chunkmap = getChunkmap(localeId);
  const regPublicPath = chunkmap['.public'] ? new RegExp(`(^\\.\\/|^)${chunkmap['.public']}`) : /(^\.\/|^)public\//;
  /**************************************************************************
   *   ┌─┐┌─┐┌┬┐┌┬┐┌─┐┌┐┌  ┌─┐┬ ┬┌┐┌┌─┐┌┬┐┬┌─┐┌┐┌┌─┐
   *  │  │ ││││││││ ││││  ├┤ │ │││││   │ ││ ││││└─┐
   * └─┘└─┘┴ ┴┴ ┴└─┘┘└┘  └  └─┘┘└┘└─┘ ┴ ┴└─┘┘└┘└─┘
   *************************************************************************/

  /**
   * 返回可供客户端/浏览器端使用的访问地址
   * @param {String} pathname
   * @returns {String}
   */

  const getResultPathname = pathname => pathPublic + pathname.replace(regPublicPath, '');
  /**************************************************************************
   *   ┌┬┐┌─┐┌┐ ┬ ┬┌─┐
   *   ││├┤ ├┴┐│ ││ ┬
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
  // })
  // console.log('----------')

  /**************************************************************************
   *   ┌─┐┬ ┬┌─┐┌─┐┬┌─   ┬   ┬─┐┌─┐┌┬┐┬─┐┬ ┬┌┐┌┌─┐
   *  │  ├─┤├┤ │  ├┴┐  ┌┼─  ├┬┘├┤  │ ├┬┘│ ││││└─┐
   * └─┘┴ ┴└─┘└─┘┴ ┴  └┘   ┴└─└─┘ ┴ ┴└─└─┘┘└┘└─┘
   *************************************************************************/
  // 检查 `.files` 下是否有该文件名的直接对应
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object' && typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') {
    return getResultPathname(chunkmap['.files'][filename]);
  }

  if (isDev) {
    const prefix = pathPublic + (isI18nDefault ? localeId : '');
    if (typeof chunkmap['.files'] === 'object' && typeof chunkmap['.files'][filename] === 'string') return prefix + chunkmap['.files'][filename];
    return prefix + `.${filename}`;
  }
  /** @type {String} 目标文件的扩展名 */


  const extname = path.extname(filename);
  /** @type {String} 目标文件的文件名（不包括扩展名） */

  const basename = path.basename(filename, extname); // 检查 `.entrypoints` 下是否有该文件的文件名对应（不包括扩展名）
  // 如果有，同时只有一个结果，返回该结果
  // 如果有，同时有多个结果，返回包含所有结果的 Array

  if (Array.isArray(chunkmap['.entrypoints'][basename])) {
    const files = chunkmap['.entrypoints'][basename].filter(file => path.extname(file) === extname);
    if (files.length === 1) return getResultPathname(files[0]);else if (files.length) return files.map(file => getResultPathname(file));
  } // 检查 chunkmap 第一级是否有包含该文件的文件名的对应（不包括扩展名）
  // 如果有，直接返回该结果


  if (typeof chunkmap === 'object') {
    let result;

    if (Array.isArray(chunkmap[basename])) {
      chunkmap[basename].some(value => {
        if (path.extname(value) === extname) {
          result = value;
          return true;
        }

        return false;
      });
    }

    if (result) return getResultPathname(result);
  } // 如果没有找到 chunkmap 或是 chunkmap 中未找到目标项目，转为过滤文件形式
  // if (fs.existsSync(path.resolve(pathPublic, filename))) {
  //     return '/' + filename;
  // }


  if (fs.existsSync(path.resolve(filename))) {
    return pathPublic + filename;
  }

  console.warn(`File not found:` + (isI18nDefault ? `[${localeId}] ` : '') + ` ${filename}`);
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
/***/ ((module) => {

/**
 * 获取运行目录
 * @returns {String}
 */
module.exports = () => {
  // console.log('process.env.KOOT_CWD', process.env.KOOT_CWD)
  // console.log('process.cwd()', process.cwd())
  return typeof process.env.KOOT_CWD === 'string' ? process.env.KOOT_CWD : process.cwd();
};

/***/ }),

/***/ "./node_modules/koot/utils/get-dist-path.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/utils/get-dist-path.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const getCwd = __webpack_require__(/*! ./get-cwd */ "./node_modules/koot/utils/get-cwd.js");

let p;
/**
 * 获取打包结果路径
 * @returns {String} 打包结果路径 (硬盘绝对路径)
 */

module.exports = () => {
  // console.log('global.KOOT_DIST_DIR', global.KOOT_DIST_DIR)
  if (typeof p !== 'string') {
    p = typeof global.KOOT_DIST_DIR === 'string' ? global.KOOT_DIST_DIR : (() => {
      let cwd = getCwd();
      let parent = path.resolve(cwd, '..');
      let result = path.resolve(cwd, "dist-webapp");

      while (!fs.existsSync(result) && cwd !== parent) {
        cwd = parent;
        parent = path.resolve(cwd, '..');
        result = path.resolve(cwd, "dist-webapp");
      }

      if (fs.existsSync(result)) return result;
      return path.resolve(cwd, "dist-webapp");
    })();
  }

  return p;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-pathname-dev-server-start.js":
/*!******************************************************************!*\
  !*** ./node_modules/koot/utils/get-pathname-dev-server-start.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const path = __webpack_require__(/*! path */ "path");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

module.exports = cwd => path.resolve(getDirDevTmp(cwd), '.server-start');

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {
  KOOT_CLIENT_PUBLIC_PATH
} = __webpack_require__(/*! ../defaults/envs */ "./node_modules/koot/defaults/envs.js");

const getWDSport = __webpack_require__(/*! ./get-webpack-dev-server-port */ "./node_modules/koot/utils/get-webpack-dev-server-port.js");

let publicPath;
let publicPathSSRReading;
/**
 * 获取浏览器环境中的访问根路径
 * @param {Boolean} [isSSRReading = false] 如果标记为 true，表示用于 SSR 时读取文件，会对 publicPath 进行特殊处理
 * @returns {String} 浏览器环境中的访问根路径
 */

module.exports = (isSSRReading = false) => {
  if (isSSRReading && typeof publicPathSSRReading === 'string') return publicPathSSRReading;
  if (typeof publicPath === 'string') return publicPath;
  const isDev =  false ||  true && false;

  if (false) {} else if (isDev) {
    const port = getWDSport();
    const origin = typeof global.koaCtxOrigin === 'string' ? global.koaCtxOrigin.split(':').slice(0, 2).join(':') : 'http://localhost';
    publicPath = `${origin}:${port}/dist/`;
    publicPathSSRReading = publicPath;
  } else if (true) {
    publicPath = JSON.parse("\"/\"");
    publicPathSSRReading = '/';
  } else {}

  if (isSSRReading) return publicPathSSRReading;
  return publicPath;
};

/***/ }),

/***/ "./node_modules/koot/utils/get-sw-pathname.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/utils/get-sw-pathname.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getPublic = __webpack_require__(/*! ./get-public-dir */ "./node_modules/koot/utils/get-public-dir.js");
/**
 * 获取 service-worker 访问 URI
 * @param {String} [localeId] 如果提供，则会返回 [NAME].[localeId].js
 * @returns {String}
 */


module.exports = localeId => {
  if (false) {} // 如果 localeId 是对象，表示 chunkmap

  if (typeof localeId === 'object') {
    const {
      'service-worker': sw = []
    } = localeId;

    if (sw.length) {
      const file = sw[0];
      const {
        '.public': p
      } = localeId;
      const regex = new RegExp(`^${p}`);
      const P = getPublic();
      if (regex.test(file)) return P + file.replace(regex, '');
      return P + file.replace(/^public\//, '');
    }

    return '';
  }

  const i18nType = JSON.parse("true") ? JSON.parse("\"default\"") : undefined;
  const pwaPathname = JSON.parse("\"/service-worker.js\"");
  if (i18nType !== 'default') return pwaPathname;
  if (!localeId) return pwaPathname;
  const chunks = pwaPathname.split('.');
  chunks.splice(chunks.length - 1, 0, localeId);
  return chunks.join('.');
};

/***/ }),

/***/ "./node_modules/koot/utils/get-webpack-dev-server-port.js":
/*!****************************************************************!*\
  !*** ./node_modules/koot/utils/get-webpack-dev-server-port.js ***!
  \****************************************************************/
/***/ ((module) => {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = () => {
  // console.log('process.env.WEBPACK_DEV_SERVER_PORT', process.env.WEBPACK_DEV_SERVER_PORT)
  return "3001" || 0;
};

/***/ }),

/***/ "./node_modules/koot/utils/transform-error.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/utils/transform-error.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * 转换 Error 对象
 * @param {Error|string} error
 * @returns {Error} 确定会有 `message` 和 `msg` 属性的 Error 对象
 */
function transformError(error) {
  const isValid = t => typeof t !== 'boolean' && (t === '' || t === 0 || !!t);

  let msg = typeof error === 'object' && isValid(error.message) ? error.message : typeof error === 'object' && isValid(error.msg) ? error.msg : typeof error === 'string' ? error : '网络异常，请稍后重试'; // let msg =
  //     error?.message ??
  //     error?.msg ??
  //     (typeof error === 'string' ? error : '网络异常，请稍后重试');

  if (msg === 'Network Error') msg = '网络异常，请稍后重试';

  if (error instanceof Error) {// error = err;
  } else if (typeof error === 'object') {
    error = new Error(msg);

    for (const [key, value] of Object.entries(error)) error[key] = value;
  } else {
    error = new Error(error);
  }

  error.message = msg;
  error.msg = msg;
  return error;
}

module.exports = transformError;

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


if (true) {
  (function () {
    'use strict';

    var React = __webpack_require__(/*! react */ "react");

    var _assign = __webpack_require__(/*! object-assign */ "object-assign"); // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.


    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    exports.Fragment = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    if (typeof Symbol === 'function' && Symbol.for) {
      var symbolFor = Symbol.for;
      REACT_ELEMENT_TYPE = symbolFor('react.element');
      REACT_PORTAL_TYPE = symbolFor('react.portal');
      exports.Fragment = symbolFor('react.fragment');
      REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
      REACT_PROFILER_TYPE = symbolFor('react.profiler');
      REACT_PROVIDER_TYPE = symbolFor('react.provider');
      REACT_CONTEXT_TYPE = symbolFor('react.context');
      REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
      REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
      REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
      REACT_MEMO_TYPE = symbolFor('react.memo');
      REACT_LAZY_TYPE = symbolFor('react.lazy');
      REACT_BLOCK_TYPE = symbolFor('react.block');
      REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
      REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
      REACT_SCOPE_TYPE = symbolFor('react.scope');
      REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
      REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
      REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
      REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }

    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';

    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== 'object') {
        return null;
      }

      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

      if (typeof maybeIterator === 'function') {
        return maybeIterator;
      }

      return null;
    }

    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    function error(format) {
      {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        printWarning('error', format, args);
      }
    }

    function printWarning(level, format, args) {
      // When changing this logic, you might want to also
      // update consoleWithStackDev.www.js as well.
      {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();

        if (stack !== '') {
          format += '%s';
          args = args.concat([stack]);
        }

        var argsWithFormat = args.map(function (item) {
          return '' + item;
        }); // Careful: RN currently depends on this prefix

        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging

        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


    var enableScopeAPI = false; // Experimental Create Event Handle API.

    function isValidElementType(type) {
      if (typeof type === 'string' || typeof type === 'function') {
        return true;
      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


      if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
        return true;
      }

      if (typeof type === 'object' && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
          return true;
        }
      }

      return false;
    }

    function getWrappedName(outerType, innerType, wrapperName) {
      var functionName = innerType.displayName || innerType.name || '';
      return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }

    function getContextName(type) {
      return type.displayName || 'Context';
    }

    function getComponentName(type) {
      if (type == null) {
        // Host root, text node or just invalid type.
        return null;
      }

      {
        if (typeof type.tag === 'number') {
          error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
        }
      }

      if (typeof type === 'function') {
        return type.displayName || type.name || null;
      }

      if (typeof type === 'string') {
        return type;
      }

      switch (type) {
        case exports.Fragment:
          return 'Fragment';

        case REACT_PORTAL_TYPE:
          return 'Portal';

        case REACT_PROFILER_TYPE:
          return 'Profiler';

        case REACT_STRICT_MODE_TYPE:
          return 'StrictMode';

        case REACT_SUSPENSE_TYPE:
          return 'Suspense';

        case REACT_SUSPENSE_LIST_TYPE:
          return 'SuspenseList';
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + '.Consumer';

          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + '.Provider';

          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, 'ForwardRef');

          case REACT_MEMO_TYPE:
            return getComponentName(type.type);

          case REACT_BLOCK_TYPE:
            return getComponentName(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                return getComponentName(init(payload));
              } catch (x) {
                return null;
              }
            }
        }
      }

      return null;
    } // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.


    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;

    function disabledLog() {}

    disabledLog.__reactDisabledLog = true;

    function disableLogs() {
      {
        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        disabledDepth++;
      }
    }

    function reenableLogs() {
      {
        disabledDepth--;

        if (disabledDepth === 0) {
          /* eslint-disable react-internal/no-production-logging */
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          }; // $FlowFixMe Flow thinks console is immutable.

          Object.defineProperties(console, {
            log: _assign({}, props, {
              value: prevLog
            }),
            info: _assign({}, props, {
              value: prevInfo
            }),
            warn: _assign({}, props, {
              value: prevWarn
            }),
            error: _assign({}, props, {
              value: prevError
            }),
            group: _assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: _assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: _assign({}, props, {
              value: prevGroupEnd
            })
          });
          /* eslint-enable react-internal/no-production-logging */
        }

        if (disabledDepth < 0) {
          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
        }
      }
    }

    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;

    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === undefined) {
          // Extract the VM specific prefix used by each line.
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
          }
        } // We use the prefix to ensure our stacks line up with native stack frames.


        return '\n' + prefix + name;
      }
    }

    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }

    function describeNativeComponentFrame(fn, construct) {
      // If something asked for a stack inside a fake render, it should get ignored.
      if (!fn || reentry) {
        return '';
      }

      {
        var frame = componentFrameCache.get(fn);

        if (frame !== undefined) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

      Error.prepareStackTrace = undefined;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.

        ReactCurrentDispatcher.current = null;
        disableLogs();
      }

      try {
        // This should throw.
        if (construct) {
          // Something should be setting the props in the constructor.
          var Fake = function () {
            throw Error();
          }; // $FlowFixMe


          Object.defineProperty(Fake.prototype, 'props', {
            set: function () {
              // We use a throwing setter instead of frozen or non-writable props
              // because that won't throw in a non-strict mode function.
              throw Error();
            }
          });

          if (typeof Reflect === 'object' && Reflect.construct) {
            // We construct a different control for this case to include any extra
            // frames added by the construct call.
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }

            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }

            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }

          fn();
        }
      } catch (sample) {
        // This is inlined manually because closure doesn't do it for us.
        if (sample && control && typeof sample.stack === 'string') {
          // This extracts the first frame from the sample that isn't also in the control.
          // Skipping one frame that we assume is the frame that calls the two.
          var sampleLines = sample.stack.split('\n');
          var controlLines = control.stack.split('\n');
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;

          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            // We expect at least one stack frame to be shared.
            // Typically this will be the root most one. However, stack frames may be
            // cut off due to maximum stack limits. In this case, one maybe cut off
            // earlier than the other. We assume that the sample is longer or the same
            // and there for cut off earlier. So we should find the root most frame in
            // the sample somewhere in the control.
            c--;
          }

          for (; s >= 1 && c >= 0; s--, c--) {
            // Next we find the first one that isn't the same which should be the
            // frame that called our sample function and the control.
            if (sampleLines[s] !== controlLines[c]) {
              // In V8, the first line is describing the message but other VMs don't.
              // If we're about to return the first line, and the control is also on the same
              // line, that's a pretty good indicator that our sample threw at same line as
              // the control. I.e. before we entered the sample frame. So we ignore this result.
              // This can happen if you passed a class to function component, or non-function.
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--; // We may still have similar intermediate frames from the construct call.
                  // The next one that isn't the same should be our match though.

                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                    {
                      if (typeof fn === 'function') {
                        componentFrameCache.set(fn, _frame);
                      }
                    } // Return the line we found.

                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }

              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      } // Fallback to just using the name if we couldn't make it throw.


      var name = fn ? fn.displayName || fn.name : '';
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
      {
        if (typeof fn === 'function') {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }

    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }

    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }

    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return '';
      }

      if (typeof type === 'function') {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }

      if (typeof type === 'string') {
        return describeBuiltInComponentFrame(type);
      }

      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame('Suspense');

        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame('SuspenseList');
      }

      if (typeof type === 'object') {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);

          case REACT_MEMO_TYPE:
            // Memo may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

          case REACT_BLOCK_TYPE:
            return describeFunctionComponentFrame(type._render);

          case REACT_LAZY_TYPE:
            {
              var lazyComponent = type;
              var payload = lazyComponent._payload;
              var init = lazyComponent._init;

              try {
                // Lazy may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
              } catch (x) {}
            }
        }
      }

      return '';
    }

    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }

    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);

        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.

            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }

              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
              error$1 = ex;
            }

            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }

            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error('Failed %s type: %s', location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }

    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    {
      didWarnAboutStringRefs = {};
    }

    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== undefined;
    }

    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== undefined;
    }

    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
          var componentName = getComponentName(ReactCurrentOwner.current.type);

          if (!didWarnAboutStringRefs[componentName]) {
            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
            didWarnAboutStringRefs[componentName] = true;
          }
        }
      }
    }

    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function () {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }

    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function () {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    /**
     * Factory method to create a new React element. This no longer adheres to
     * the class pattern, so do not use new to call it. Also, instanceof check
     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
     * if something is a React Element.
     *
     * @param {*} type
     * @param {*} props
     * @param {*} key
     * @param {string|object} ref
     * @param {*} owner
     * @param {*} self A *temporary* helper to detect places where `this` is
     * different from the `owner` when React.createElement is called, so that we
     * can warn. We want to get rid of owner and replace string `ref`s with arrow
     * functions, and as long as `this` and owner are the same, there will be no
     * change in behavior.
     * @param {*} source An annotation object (added by a transpiler or otherwise)
     * indicating filename, line number, and/or other information.
     * @internal
     */


    var ReactElement = function (type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type: type,
        key: key,
        ref: ref,
        props: props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.

        Object.defineProperty(element._store, 'validated', {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        }); // self and source are DEV only properties.

        Object.defineProperty(element, '_self', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.

        Object.defineProperty(element, '_source', {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });

        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    /**
     * https://github.com/reactjs/rfcs/pull/107
     * @param {*} type
     * @param {object} props
     * @param {string} key
     */


    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.

        if (maybeKey !== undefined) {
          key = '' + maybeKey;
        }

        if (hasValidKey(config)) {
          key = '' + config.key;
        }

        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object


        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        } // Resolve default props


        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        if (key || ref) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }

          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }

        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }

    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }

    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }
    /**
     * Verifies the object is a ReactElement.
     * See https://reactjs.org/docs/react-api.html#isvalidelement
     * @param {?object} object
     * @return {boolean} True if `object` is a ReactElement.
     * @final
     */

    function isValidElement(object) {
      {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }

    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentName(ReactCurrentOwner$1.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }
    }

    function getSourceInfoErrorAddendum(source) {
      {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }
    }
    /**
     * Warn if there's no key explicitly set on dynamic arrays of children or
     * object keys are not valid. This allows us to keep track of children between
     * updates.
     */


    var ownerHasKeyUseWarning = {};

    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }

        return info;
      }
    }
    /**
     * Warn if the element doesn't have an explicit key assigned to it.
     * This element is in an array. The array could grow and shrink or be
     * reordered. All children that haven't already been validated are required to
     * have a "key" property assigned to it. Error statuses are cached so a warning
     * will only be shown once.
     *
     * @internal
     * @param {ReactElement} element Element that requires a key.
     * @param {*} parentType element's parent's type.
     */


    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }

        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }

        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.

        var childOwner = '';

        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }

        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    /**
     * Ensure that every element either is passed in a static location, in an
     * array with an explicit keys property defined, or in an object literal
     * with valid key property.
     *
     * @internal
     * @param {ReactNode} node Statically passed child of any type.
     * @param {*} parentType node's parent's type.
     */


    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== 'object') {
          return;
        }

        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];

            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);

          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;

              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    /**
     * Given an element, validate that its props follow the propTypes definition,
     * provided by the type.
     *
     * @param {ReactElement} element
     */


    function validatePropTypes(element) {
      {
        var type = element.type;

        if (type === null || type === undefined || typeof type === 'string') {
          return;
        }

        var propTypes;

        if (typeof type === 'function') {
          propTypes = type.propTypes;
        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }

        if (propTypes) {
          // Intentionally inside to avoid triggering lazy initializers:
          var name = getComponentName(type);
          checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

          var _name = getComponentName(type);

          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }

        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }
    }
    /**
     * Given a fragment, validate that it can only be provided with fragment props
     * @param {ReactElement} fragment
     */


    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];

          if (key !== 'children' && key !== 'key') {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }

        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error('Invalid attribute `ref` supplied to `React.Fragment`.');
          setCurrentlyValidatingElement$1(null);
        }
      }
    }

    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(source);

          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          var typeString;

          if (type === null) {
            typeString = 'null';
          } else if (Array.isArray(type)) {
            typeString = 'array';
          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
            info = ' Did you accidentally export a JSX literal instead of a component?';
          } else {
            typeString = typeof type;
          }

          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
        }

        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)


        if (validType) {
          var children = props.children;

          if (children !== undefined) {
            if (isStaticChildren) {
              if (Array.isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }

                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }

        if (type === exports.Fragment) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }
    } // These two functions exist to still get child warnings in dev
    // even with the prod transform. This means that jsxDEV is purely
    // opt-in behavior for better messages but that we won't stop
    // giving you warnings if you use production apis.


    function jsxWithValidationStatic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, true);
      }
    }

    function jsxWithValidationDynamic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, false);
      }
    }

    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
    // for now we can ship identical prod functions

    var jsxs = jsxWithValidationStatic;
    exports.jsx = jsx;
    exports.jsxs = jsxs;
  })();
}

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}

/***/ }),

/***/ "./src/_server/lifecycle/after.js":
/*!****************************************!*\
  !*** ./src/_server/lifecycle/after.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {});

/***/ }),

/***/ "./src/_server/lifecycle/before.js":
/*!*****************************************!*\
  !*** ./src/_server/lifecycle/before.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const proxy = __webpack_require__(/*! koa-proxies */ "koa-proxies");

const {
  portAkigumo,
  devPortAkigumo
} = __webpack_require__(/*! ../../../config/akigumo */ "./config/akigumo.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async app => {
  app.use(proxy('/pics', {
    target:  false ? 0 : process.env.YUUBARI_LOCAL_RUN ? `https://akigumo.fleet.moe` : `http://localhost:${portAkigumo}`,
    changeOrigin: true,
    rewrite: path => path.replace(/^\/pics\//, '/'),
    logs: false
  }));
});

/***/ }),

/***/ "./src/template.inject.js":
/*!********************************!*\
  !*** ./src/template.inject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koot/utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/* harmony import */ var koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! koot/utils/get-client-file-path */ "./node_modules/koot/utils/get-client-file-path.js");
/* harmony import */ var koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koot/utils/get-chunkmap */ "./node_modules/koot/utils/get-chunkmap.js");
/* harmony import */ var koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locales_base_en_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locales/base/en.json */ "./src/locales/base/en.json");
/* harmony import */ var _locales_base_ja_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locales/base/ja.json */ "./src/locales/base/ja.json");
/* harmony import */ var _locales_base_zh_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./locales/base/zh.json */ "./src/locales/base/zh.json");




 // const readFile = require('koot/utils/read-client-file')




const pathDist = koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_5___default()();
const manifestLastModified = new Map();
const serviceWorkerPath = new Map();

const noScriptWarningText = (template, {
  localeId
}) => {
  if (!noScriptWarningText._) noScriptWarningText._ = {
    en: _locales_base_en_json__WEBPACK_IMPORTED_MODULE_2__,
    ja: _locales_base_ja_json__WEBPACK_IMPORTED_MODULE_3__,
    zh: _locales_base_zh_json__WEBPACK_IMPORTED_MODULE_4__
  };
  return noScriptWarningText._[localeId].no_javascript_warning;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  manifest: (template, state) => {
    const localeId = state.localeId;
    const filename = `manifest-${localeId}.json`;
    const {
      '.public': publicPath
    } = koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_6___default()(localeId);
    if (!manifestLastModified.has(localeId)) manifestLastModified.set(localeId, fs_extra__WEBPACK_IMPORTED_MODULE_0___default().statSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(pathDist, publicPath, filename)).mtime.valueOf());
    return `<link rel="manifest" href="/${filename}?${manifestLastModified.get(localeId) || ''}">`;
  },
  svgIcons: `<div class="hide">${"<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><symbol id=\"icon-heart3\" viewBox=\"0 0 16 16\"><path d=\"M16 5.596c0 1.349-0.582 2.563-1.508 3.404h0.008l-5 5c-0.5 0.5-1 1-1.5 1s-1-0.5-1.5-1l-4.992-5c-0.926-0.841-1.508-2.054-1.508-3.404 0-2.538 2.058-4.596 4.596-4.596 1.349 0 2.563 0.582 3.404 1.508 0.841-0.926 2.054-1.508 3.404-1.508 2.538 0 4.596 2.058 4.596 4.596z\"></path></symbol><symbol id=\"icon-heart4\" viewBox=\"0 0 16 16\"><path d=\"M16 5.596c0-2.538-2.058-4.596-4.596-4.596-1.349 0-2.563 0.582-3.404 1.508-0.841-0.926-2.054-1.508-3.404-1.508-2.538 0-4.596 2.058-4.596 4.596 0 1.349 0.582 2.563 1.508 3.404h-0.008l5 5c0.5 0.5 1 1 1.5 1s1-0.5 1.5-1l4.992-5c0.926-0.841 1.508-2.054 1.508-3.404zM13.148 7.519l-5.062 5.067c-0.026 0.026-0.055 0.055-0.086 0.086-0.031-0.030-0.060-0.059-0.086-0.086l-5.062-5.066c-0.549-0.499-0.852-1.182-0.852-1.923 0-1.432 1.165-2.596 2.596-2.596 0.741 0 1.424 0.303 1.923 0.852l1.481 1.631 1.481-1.631c0.499-0.55 1.182-0.852 1.923-0.852 1.432 0 2.596 1.165 2.596 2.596 0 0.741-0.303 1.424-0.852 1.923z\"></path></symbol><symbol id=\"icon-image-compare\" viewBox=\"0 0 16 16\"><path d=\"M13 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z\"></path><path d=\"M0 3v10c0 0.55 0.45 1 1 1h6v-1h-5.998c-0.001-0.001-0.001-0.001-0.002-0.002v-9.996c0.001-0.001 0.001-0.001 0.002-0.002h5.998v-1h-6c-0.55 0-1 0.45-1 1z\"></path><path d=\"M15 2h-6v-2h-1v16h1v-2h6c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1zM15 12.998c-0.001 0.001-0.001 0.001-0.002 0.002h-5.998v-1h5v-5l-3.5 3h-1l-0.5-0.625v-6.375h5.998c0.001 0.001 0.001 0.001 0.002 0.002v9.996z\"></path><path d=\"M2 11v1h5v-5.125l-1.5-1.875z\"></path></symbol><symbol id=\"icon-book3\" viewBox=\"0 0 16 16\"><path d=\"M14 2v13h-10.5c-0.829 0-1.5-0.672-1.5-1.5s0.671-1.5 1.5-1.5h9.5v-12h-10c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12v-14h-1z\"></path><path d=\"M3.501 13v0c-0 0-0.001 0-0.001 0-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5c0 0 0.001-0 0.001-0v0h9.498v-1h-9.498z\"></path></symbol><symbol id=\"icon-lifebuoy\" viewBox=\"0 0 16 16\"><path d=\"M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM5 8c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zM14.468 10.679v0l-2.772-1.148c0.196-0.472 0.304-0.989 0.304-1.531s-0.108-1.059-0.304-1.531l2.772-1.148c0.342 0.825 0.532 1.73 0.532 2.679s-0.189 1.854-0.532 2.679v0zM10.679 1.532v0 0l-1.148 2.772c-0.472-0.196-0.989-0.304-1.531-0.304s-1.059 0.108-1.531 0.304l-1.148-2.772c0.825-0.342 1.73-0.532 2.679-0.532s1.854 0.189 2.679 0.532zM1.532 5.321l2.772 1.148c-0.196 0.472-0.304 0.989-0.304 1.531s0.108 1.059 0.304 1.531l-2.772 1.148c-0.342-0.825-0.532-1.73-0.532-2.679s0.189-1.854 0.532-2.679zM5.321 14.468l1.148-2.772c0.472 0.196 0.989 0.304 1.531 0.304s1.059-0.108 1.531-0.304l1.148 2.772c-0.825 0.342-1.73 0.532-2.679 0.532s-1.854-0.189-2.679-0.532z\"></path></symbol><symbol id=\"icon-at-sign\" viewBox=\"0 0 16 16\"><path d=\"M13.657 2.343c-1.511-1.511-3.52-2.343-5.657-2.343s-4.146 0.832-5.657 2.343c-1.511 1.511-2.343 3.52-2.343 5.657s0.832 4.146 2.343 5.657c1.511 1.511 3.52 2.343 5.657 2.343 1.199 0 2.353-0.259 3.429-0.77 0.499-0.237 0.711-0.834 0.474-1.332s-0.834-0.711-1.332-0.474c-0.806 0.383-1.671 0.577-2.571 0.577-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6v1c0 0.551-0.449 1-1 1s-1-0.449-1-1v-4c0-0.552-0.448-1-1-1-0.406 0-0.755 0.242-0.912 0.59-0.608-0.374-1.323-0.59-2.088-0.59-2.206 0-4 1.794-4 4s1.794 4 4 4c1.045 0 1.998-0.403 2.712-1.062 0.551 0.649 1.372 1.062 2.288 1.062 1.654 0 3-1.346 3-3v-1c0-2.137-0.832-4.146-2.343-5.657zM8 10c-1.103 0-2-0.897-2-2s0.897-2 2-2c1.103 0 2 0.897 2 2s-0.897 2-2 2z\"></path></symbol><symbol id=\"icon-hammer-wrench\" viewBox=\"0 0 20 16\"><path d=\"M7.696 11.009l2.295 2.295-1.823 2.341c-0.334 0.437-0.926 0.476-1.315 0.087l-1.586-1.586c-0.389-0.389-0.35-0.98 0.087-1.315l2.341-1.823zM19.899 4.101l-2.399 2.399-3-3 2.399-2.399c-0.289-0.066-0.59-0.101-0.899-0.101-2.209 0-4 1.791-4 4 0 0.797 0.233 1.539 0.635 2.163l-2.233 1.739-3.402-3.402 4.5-4.5h-5l-2.22 2.22-0.22-0.22h-1.061v1.061l0.22 0.22-3.22 3.22 2.5 2.5 3-3 9 9 1.5-1.5-3.902-3.902 1.739-2.233c0.624 0.402 1.366 0.635 2.163 0.635 2.209 0 4-1.791 4-4 0-0.309-0.035-0.61-0.101-0.899z\"></path></symbol><symbol id=\"icon-download5\" viewBox=\"0 0 16 16\"><path d=\"M2 12h12v3h-12v-3z\"></path><path d=\"M10 6v-5h-4v5h-3.5l5.5 5.5 5.5-5.5z\"></path></symbol><symbol id=\"icon-anchor\" viewBox=\"0 0 16 16\"><path d=\"M14 9v2.066c-1.258 1.285-3.016 2.526-5 2.852v-5.917h3v-1l-3-1.171c1.165-0.412 2-1.523 2-2.829 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.306 0.835 2.417 2 2.829v0l-3 1.171v1h3v5.917c-1.984-0.326-3.742-1.567-5-2.852v-2.066h-2v1c0 2 4 6 8 6s8-4 8-6v-1h-2zM9 3c0 0.552-0.448 1-1 1s-1-0.448-1-1 0.448-1 1-1c0.552 0 1 0.448 1 1z\"></path></symbol><symbol id=\"icon-stack-check\" viewBox=\"0 0 16 16\"><path d=\"M5 1v1.155l-2.619 0.368 0.17 1.211-2.551 0.732 3.308 11.535 10.189-2.921 0.558-0.079h1.945v-12h-11zM3.929 14.879l-2.808-9.793 1.558-0.447 1.373 9.766 2.997-0.421-3.119 0.894zM4.822 13.382l-1.418-10.088 1.595-0.224v9.93h2.543l-2.721 0.382zM6 12v-10h9v2.5l-0.707-0.707-4.293 3.793-2.293-1.793-0.914 0.914 3.207 3.707 5-5.48v7.066h-9z\"></path></symbol><symbol id=\"icon-plus3\" viewBox=\"0 0 16 16\"><path d=\"M15 7h-6v-6h-2v6h-6v2h6v6h2v-6h6z\"></path></symbol><symbol id=\"icon-checkmark4\" viewBox=\"0 0 16 16\"><path d=\"M15.36 1c-5.227 3.956-10.239 9.247-10.239 9.247l-3.612-3.247-1.509 1.537c1.485 1.395 4.924 5.081 6.088 6.463 3.275-5.472 6.679-9.552 9.912-13.284l-0.64-0.716z\"></path></symbol><symbol id=\"icon-loop\" viewBox=\"0 0 16 16\"><path d=\"M14 8v1c0 0.551-0.449 1-1 1h-7.002l0.002-2-4 3 4 3-0.002-2h7.002c1.655 0 3-1.348 3-3v-1h-2zM2 7c0-0.553 0.449-1 1-1h7v2l3.996-3-3.996-3v2h-7c-1.655 0-3 1.344-3 3v1h2v-1z\"></path></symbol><symbol id=\"icon-hanger\" viewBox=\"0 0 16 16\"><path d=\"M14.77 13.579l-6.77-4.352v-0.495c0.61-0.353 1-1.010 1-1.732 0-1.103-0.897-2-2-2-0.846 0-1.604 0.536-1.886 1.333-0.092 0.26 0.044 0.546 0.305 0.638s0.546-0.044 0.638-0.305c0.141-0.399 0.52-0.667 0.943-0.667 0.551 0 1 0.449 1 1 0 0.423-0.268 0.802-0.667 0.943-0.2 0.071-0.333 0.259-0.333 0.471l-0 0.812-6.77 4.352c-0.143 0.092-0.23 0.25-0.23 0.421v0.5c0 0.827 0.673 1.5 1.5 1.5h12c0.827 0 1.5-0.673 1.5-1.5v-0.5c0-0.17-0.086-0.329-0.23-0.421zM14 14.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-0.227l6.5-4.179 6.5 4.179v0.227z\"></path></symbol><symbol id=\"icon-search\" viewBox=\"0 0 16 16\"><path d=\"M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z\"></path></symbol><symbol id=\"icon-cog\" viewBox=\"0 0 16 16\"><path d=\"M14.59 9.535c-0.839-1.454-0.335-3.317 1.127-4.164l-1.572-2.723c-0.449 0.263-0.972 0.414-1.529 0.414-1.68 0-3.042-1.371-3.042-3.062h-3.145c0.004 0.522-0.126 1.051-0.406 1.535-0.839 1.454-2.706 1.948-4.17 1.106l-1.572 2.723c0.453 0.257 0.845 0.634 1.123 1.117 0.838 1.452 0.336 3.311-1.12 4.16l1.572 2.723c0.448-0.261 0.967-0.41 1.522-0.41 1.675 0 3.033 1.362 3.042 3.046h3.145c-0.001-0.517 0.129-1.040 0.406-1.519 0.838-1.452 2.7-1.947 4.163-1.11l1.572-2.723c-0.45-0.257-0.839-0.633-1.116-1.113zM8 11.24c-1.789 0-3.24-1.45-3.24-3.24s1.45-3.24 3.24-3.24c1.789 0 3.24 1.45 3.24 3.24s-1.45 3.24-3.24 3.24z\"></path></symbol><symbol id=\"icon-menu\" viewBox=\"0 0 16 16\"><path d=\"M1 3h14v2h-14v-2z\"></path><path d=\"M1 7h14v2h-14v-2z\"></path><path d=\"M1 11h14v2h-14v-2z\"></path></symbol><symbol id=\"icon-warning2\" viewBox=\"0 0 16 16\"><path d=\"M15.781 14.309v0l-6.829-13.611c-0.262-0.465-0.606-0.698-0.951-0.698s-0.69 0.233-0.951 0.698l-6.829 13.611c-0.523 0.93-0.078 1.691 0.989 1.691h13.583c1.067 0 1.512-0.761 0.989-1.691zM8 14c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM9 10c0 0.552-0.448 1-1 1s-1-0.448-1-1v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v3z\"></path></symbol><symbol id=\"icon-question6\" viewBox=\"0 0 16 16\"><path d=\"M8 13c-0.552 0-1-0.448-1-1v-1.027c0-1.41 1.124-2.477 2.212-3.509 0.879-0.834 1.788-1.697 1.788-2.464 0-1.493-1.082-3-3.5-3-1.787 0-3.283 1.337-3.479 3.11-0.061 0.549-0.555 0.945-1.104 0.884s-0.945-0.555-0.884-1.104c0.148-1.338 0.782-2.572 1.785-3.477 1.011-0.911 2.319-1.413 3.681-1.413 1.475 0 2.834 0.463 3.828 1.305 1.078 0.913 1.672 2.225 1.672 3.695 0 1.626-1.281 2.842-2.411 3.915-0.745 0.707-1.589 1.508-1.589 2.058l0 1.027c0 0.552-0.448 1-1 1z\"></path><path d=\"M9 15c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z\"></path></symbol><symbol id=\"icon-cross\" viewBox=\"0 0 16 16\"><path d=\"M13.957 3.457l-1.414-1.414-4.543 4.543-4.543-4.543-1.414 1.414 4.543 4.543-4.543 4.543 1.414 1.414 4.543-4.543 4.543 4.543 1.414-1.414-4.543-4.543z\"></path></symbol><symbol id=\"icon-arrow-up3\" viewBox=\"0 0 16 16\"><path d=\"M0 10.5l1.5 1.5 6.5-6.5 6.5 6.5 1.5-1.5-8-8-8 8z\"></path></symbol><symbol id=\"icon-arrow-right3\" viewBox=\"0 0 16 16\"><path d=\"M5.5 0l-1.5 1.5 6.5 6.5-6.5 6.5 1.5 1.5 8-8-8-8z\"></path></symbol><symbol id=\"icon-arrow-down3\" viewBox=\"0 0 16 16\"><path d=\"M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z\"></path></symbol><symbol id=\"icon-arrow-left3\" viewBox=\"0 0 16 16\"><path d=\"M10.5 16l1.5-1.5-6.5-6.5 6.5-6.5-1.5-1.5-8 8 8 8z\"></path></symbol><symbol id=\"icon-sort-amount-desc\" viewBox=\"0 0 16 16\"><path d=\"M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z\"></path><path d=\"M7 0h9v2h-9v-2z\"></path><path d=\"M7 3h7v2h-7v-2z\"></path><path d=\"M7 6h5v2h-5v-2z\"></path><path d=\"M7 9h3v2h-3v-2z\"></path></symbol><symbol id=\"icon-checkbox-checked\" viewBox=\"0 0 16 16\"><path d=\"M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z\"></path></symbol><symbol id=\"icon-paragraph-left\" viewBox=\"0 0 16 16\"><path d=\"M0 1h16v2h-16zM0 5h10v2h-10zM0 13h10v2h-10zM0 9h16v2h-16z\"></path></symbol><symbol id=\"icon-share3\" viewBox=\"0 0 16 16\"><path d=\"M13.5 11c-0.706 0-1.342 0.293-1.797 0.763l-6.734-3.367c0.021-0.129 0.032-0.261 0.032-0.396s-0.011-0.267-0.032-0.396l6.734-3.367c0.455 0.47 1.091 0.763 1.797 0.763 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5c0 0.135 0.011 0.267 0.031 0.396l-6.734 3.367c-0.455-0.47-1.091-0.763-1.797-0.763-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c0.706 0 1.343-0.293 1.797-0.763l6.734 3.367c-0.021 0.129-0.031 0.261-0.031 0.396 0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z\"></path></symbol></defs></svg>"}</div>`,
  definePath: (template, {
    localeId
  }) => {
    if (!serviceWorkerPath.has(localeId)) serviceWorkerPath.set(localeId, koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_7___default()('service-worker.js', localeId));
    return `<script>` + // `window.__CRITICAL_EXTRA_OLD_IE_FILENAME__ = "${getClientFilePath(
    //     'polyfill.js',
    //     state.localeId
    // )}";` +
    `window.__SERVICE_WORKER_FILENAME__ = "${serviceWorkerPath.get(localeId)}";` + `</script>`;
  },
  noScriptWarningText
});

/***/ }),

/***/ "./node_modules/koot/React/component-extender.jsx":
/*!********************************************************!*\
  !*** ./node_modules/koot/React/component-extender.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/* harmony import */ var _defaults_defines_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _get_render_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-render-props */ "./node_modules/koot/React/get-render-props.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./node_modules/koot/React/styles.js");
/* harmony import */ var _client_update_page_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-update-page-info */ "./node_modules/koot/React/client-update-page-info.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux */ "./node_modules/koot/React/redux.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-render-safe */ "./node_modules/koot/React/is-render-safe.js");
/* harmony import */ var _is_render_safe__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_is_render_safe__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _root_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root-context */ "./node_modules/koot/React/root-context.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* __KOOT_DEV_NO_REACT_HOT_INJECT__ */

 // import PropTypes from 'prop-types'


 //






 //
// 是否已挂载了组件


let everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

/**
 * @type {Number}
 * _开发环境_
 * _服务器_
 * 使用该高阶组件的次数
 */

let devSSRConnectIndex = 0;
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

const doFetchData = (store, renderProps, funcFetch) => {
  // return new Promise((resolve) => resolve());
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return  false ? 0 : undefined;
  const result = funcFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
  //     isDataPreloaded = true
  //     return new Promise(resolve => resolve())
  // }

  if (Array.isArray(result)) return Promise.all(result);
  if (result instanceof Promise) return result;
  return new Promise(resolve => resolve(result));
};
/**
 * 更新页面信息
 * @param {Object} store
 * @param {Object} props renderProps
 * @returns {Object} infos
 * @returns {String} infos.title
 * @returns {Array} infos.metas
 */


const doPageinfo = (store, props, pageinfo) => {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return {};
  const defaultPageInfo = {
    title: undefined,
    metas: []
  };
  if (typeof pageinfo !== 'function' && typeof pageinfo !== 'object') return defaultPageInfo;
  const state = store.getState();

  const infos = (() => {
    if (typeof pageinfo === 'object') return pageinfo;
    const infos = pageinfo(state, props);
    if (typeof infos !== 'object') return defaultPageInfo;
    return infos;
  })();

  const {
    title = defaultPageInfo.title,
    metas = defaultPageInfo.metas
  } = infos;

  if (state.localeId) {
    if (!metas.some(meta => {
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
    title,
    metas
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((options = {}) => WrappedComponent => {
  // console.log((typeof store === 'undefined' ? `\x1b[31m×\x1b[0m` : `\x1b[32m√\x1b[0m`) + ' store in [HOC] extend run')
  const {
    connect: _connect = false,
    pageinfo,
    data: {
      fetch: _dataFetch,
      check: dataCheck,
      resetWhenUnmount: dataResetWhenUnmount
    } = {},
    styles: _styles,
    ssr = true // ttt
    // hot: _hot = true,
    // name

  } = options; // console.log('extend hoc run', { name, LocaleId })
  // 样式相关

  /** @type {Object} 经过 koot-css-loader 处理后的 css 文件的结果对象 */

  const styles = (!Array.isArray(_styles) ? [_styles] : _styles).filter(obj => typeof obj === 'object' && typeof obj.wrapper === 'string');
  /** @type {boolean} 是否有上述结果对象 */

  const hasStyles = Array.isArray(styles) && styles.length > 0; // console.log({ ttt, hasStyles, styles })

  /** @type {boolean} 是否有 pageinfo 对象 */

  const hasPageinfo = typeof pageinfo === 'function' || typeof pageinfo === 'object'; // 同构数据相关

  /** @type {boolean} 同构数据是否已经获取成功 */
  // let isDataPreloaded = false

  /** @type {Function} 获取同构数据 */

  const dataFetch = typeof options.data === 'function' || Array.isArray(options.data) ? options.data : typeof _dataFetch === 'function' || Array.isArray(_dataFetch) ? _dataFetch : undefined; // 装饰组件

  class KootReactComponent extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    //
    clientUpdatePageInfo(to) {
      if (true) return;
      if (!hasPageinfo) return;
      const {
        title,
        metas
      } = typeof to === 'function' ? doPageinfo(this.context.store, this.getRenderProps(), to) : to || doPageinfo(this.context.store, this.getRenderProps(), pageinfo);
      (0,_client_update_page_info__WEBPACK_IMPORTED_MODULE_5__.default)(title || "The Fleet (Yuubari)", metas);
    }

    getRenderProps() {
      return (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromComponentProps)(this.props);
    } //


    //
    constructor(props, context) {
      super(props, context);
      /**
       * _服务器端_
       * 将组件注册到同构渲染对象中
       */

      _defineProperty(this, "state", {
        loaded: typeof dataCheck === 'function' ? dataCheck(this.context.store.getState(), this.getRenderProps()) : undefined
      });

      _defineProperty(this, "mounted", false);

      _defineProperty(this, "kootClassNames", []);

      if (true) {
        const {
          [_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__.ssrContext]: SSR
        } = context.ctx;

        if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_7__.needConnectComponents]) {
          if (false) {}

          if (Array.isArray(SSR.connectedComponents)) SSR.connectedComponents.unshift(KootComponent);
        }
      }

      if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_4___default()()) return;

      if (hasStyles) {
        this.kootClassNames = styles.map(obj => obj.wrapper);
        (0,_styles__WEBPACK_IMPORTED_MODULE_8__.append)(this.getStyleMap(), styles); // console.log('----------')
        // console.log('styles', styles)
        // console.log('theStyles', theStyles)
        // console.log('this.classNameWrapper', this.classNameWrapper)
        // console.log('----------')
      }
    }
    /**
     * 获取 styleMap
     * - 服务器端: 全局常量中的对照表
     * - 客户端: 静态对象 styles
     */


    getStyleMap()
    /*context*/
    {
      if (true) return this.context.styles;
      return KootReactComponent.styles;
    } //


    componentDidUpdate(prevProps) {
      // if (
      //     typeof prevProps.location === 'object' &&
      //     typeof this.props.location === 'object' &&
      //     prevProps.location.pathname !== this.props.location.pathname
      // )
      this.clientUpdatePageInfo();
    }

    componentDidMount() {
      this.mounted = true;

      if (!this.state.loaded && typeof dataFetch !== 'undefined') {
        doFetchData(this.context.store, this.getRenderProps(), dataFetch).then(() => {
          if (!this.mounted) return;
          this.setState({
            loaded: true
          });
        });
      }

      this.clientUpdatePageInfo();

      if (hasPageinfo && this.mounted) {
        setTimeout(() => {
          if (this && this.mounted) {
            this.clientUpdatePageInfo();
          }
        }, 500);
      }

      if (everMounted) {} else {
        everMounted = true;
      }
    }

    componentWillUnmount() {
      this.mounted = false;

      if (hasStyles) {
        (0,_styles__WEBPACK_IMPORTED_MODULE_8__.remove)(this.getStyleMap(), styles);
      }

      if (typeof dataResetWhenUnmount === 'object') {
        setTimeout(() => {
          this.props.dispatch({
            type: _redux__WEBPACK_IMPORTED_MODULE_9__.RESET_CERTAIN_STATE,
            data: dataResetWhenUnmount
          });
        });
      }
    } //


    render() {
      // console.log('styles', styles)
      // console.log('this', this)
      // console.log('this.kootClassNames', this.kootClassNames)
      // console.log('this.props.className', this.props.className)
      if (true) {
        if (ssr === false) return null;
        if (ssr !== true) return ssr;
      }

      if (false) {}

      const props = Object.assign({}, this.props, {
        className: this.kootClassNames.concat(this.props.className).join(' ').trim(),
        'data-class-name': this.kootClassNames.join(' ').trim()
      });
      if (hasPageinfo) props.updatePageinfo = this.clientUpdatePageInfo.bind(this); // if (__SERVER__) console.log('extender this.state.loaded', this.state.loaded)

      if (typeof dataFetch !== 'undefined' && typeof dataCheck === 'function') props.loaded = this.state.loaded; // if (typeof props.forwardedRef !== 'undefined') {
      //     console.log(props.forwardedRef);
      // }

      if (typeof props.kootForwardedRef !== 'undefined') {
        props.forwardedRef = props.kootForwardedRef;
        delete props.kootForwardedRef;
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(WrappedComponent, { ...props
      });
    }

  }

  _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", ({
    store,
    renderProps = {}
  }) => {
    const {
      title,
      metas
    } = doPageinfo(store, (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromServerProps)(renderProps), pageinfo);
    return {
      title,
      metas
    };
  });

  KootReactComponent.contextType = _root_context__WEBPACK_IMPORTED_MODULE_10__.default;
  KootReactComponent.styles = {};

  if (typeof dataFetch !== 'undefined') {
    KootReactComponent.onServerRenderStoreExtend = ({
      store,
      renderProps
    }) => doFetchData(store, (0,_get_render_props__WEBPACK_IMPORTED_MODULE_6__.fromServerProps)(renderProps), dataFetch);
  } // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }


  let KootComponent = hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(KootReactComponent, WrappedComponent); // if (typeof styles === 'object' &&
  //     typeof styles.wrapper === 'string'
  // ) {
  //     KootComponent = ImportStyle(styles)(KootComponent)
  // }

  if (_connect === true) {
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(() => ({}), undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (typeof _connect === 'function') {
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(_connect, undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (Array.isArray(_connect)) {
    if (typeof _connect[3] !== 'object') _connect[3] = {};
    _connect[3].forwardRef = true;
    KootComponent = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(..._connect)(KootComponent);
  } // return KootComponent;


  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
    if (props.forwardedRef) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props,
      kootForwardedRef: props.forwardedRef
    });
    if (ref) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props,
      kootForwardedRef: ref
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(KootComponent, { ...props
    });
  });
});

/***/ }),

/***/ "./src/locales/base/en.json":
/*!**********************************!*\
  !*** ./src/locales/base/en.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":{"short":"EN","full":"English"},"title":"Who Calls the Fleet","description":"A KanColle Toolkit","translators":["Diablohu"],"under_construction":"Under Construction","no_javascript_warning":"This app requires JavaScript enabled.","not_compatible":["Your browser is out-of-date.","We do not support your browser.","For a better experience and your own online-safety, please update your browser or install a modern web browser.","Recommended: "],"cancel":"Cancel","ok":"OK","none":"None","browsers":{"chrome":"Google Chrome","firefox":"Firefox","edge":"Microsoft Edge"},"ship_type":"Ship Type","equipment_type":"Equipment Type","shiptypeclass":"${class} Class ${type}","shipclass":"${class} Class","shipclass_number":"${class} Class (#${number})","other_ships_of_type":"Other ${type}s","shipname_dash_none":" ","exslot":"Expansion Slot","equipment_series":"${equipment}-series","tp":"TP","land_bases":"Land Bases","seiyuu":"Seiyuu","seiyuus":"Seiyuus","artist":"Artist","artists":"Artists","activation_chance_tobe":"Activation chance: ${chance}","chance":{"normal":"Normal","high":"High"},"day_full":{"Sunday":"Sunday","Monday":"Monday","Tuesday":"Tuesday","Wednesday":"Wednesday","Thurday":"Thurday","Friday":"Friday","Saturday":"Saturday"},"day_abbr":{"Sunday":"S","Monday":"M","Tuesday":"Tu","Wednesday":"W","Thurday":"Th","Friday":"F","Saturday":"S"},"require":{"level":"Require level: ${level}","min_possible_level":"Minimum possible level: ${level}","equipment":"Require equipment: ${type}","equipment_all":"Require equipment (all): ${type}","equipment_at_least_one":"Require equipment (at least one): ${type}","equipment_no_need":"No need for equipment: ${type}","equipment_type":"Require equipment type: ${type}","equipment_type_no_need":"No need for equipment type: ${type}","equipment_has_stat":"Require equipment: ${type} (${stat} at least ${value})","ship_stat_with_equipments":"Require stat ${stat}: ${value} (w/ equip.)","has_stat":"${stat} at least ${value}"},"stat":{"fire":"FP","torpedo":"TPD","night":"Night","aa":"AA","aa_interceptor_sortie":"Sortie","aa_interceptor_defense":"Defense","asw":"ASW","hp":"HP","armor":"Armor","evasion":"Evasion","carry":"Carry","speed":"Speed","range":"Range","los":"LOS","luck":"Luck","bomb":"Bomb","hit":"Hit","distance":"Radius","antibomber":"Anti-B","interception":"Intercpt","consum":{"fuel":"Fuel","ammo":"Ammo"},"equipment":{"craftable":"Craft","improvable":"Improve"}},"nav":{"sub":{"base":"Naval Base","archive":"Archive","dev":"Dev. Center"},"home":"Home","tools":"Tools","fleets":"Fleet Builder","academy":"Naval Academy","calctp":"TP Calculator","ships":"Ships","equipments":"Equipments","arsenal":"Akashi\'s Arsenal","entities":"CV & Illustrators","excgs":"Limited CGs","sorties":"Sories","expeditions":"Expeditions","about":"About","languageSwitch":"Change Language","backgroundSwitch":"Change Background","install":"Install App"},"bonuses":{"single":"Equipment Stat Bonus","sets":"Set Bonus","info_prefix_when_equipped":"When equipped, ","range_increase":"Range increased by 1","stat_donot_stack":"Donot stack","based_on_number":"Based on number of this equipment, provide...","based_on_star":"Based on star level, each of this equipment provide...","based_on_area":"Based on area battle at, each of this equipment provide...","based_on_nothing":"Each of this equipment provide...","based_set":"Additional bonus...","based_set_one_of":"When has one of the equipments above equipped, provide additional bonus...","based_set_one_of_only":"ONLY","based_set_accumulate":"Accumulated set bonus...","note_hybrid_radar":"Equipment(s) below treated as both Surface and AA Radar(s)","note_hybrid_radar_this_equipment":"This equipment is treated as both Surface and AA Radar"},"area":{"north":"North"}}');

/***/ }),

/***/ "./src/locales/base/ja.json":
/*!**********************************!*\
  !*** ./src/locales/base/ja.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":{"short":"日","full":"日本語"},"title":"Who Calls the Fleet","description":"A KanColle Toolkit","translators":["taurus911","Diablohu"],"under_construction":"工事中","no_javascript_warning":"This app requires JavaScript enabled.","not_compatible":["Your browser is out-of-date.","We do not support your browser.","For a better experience and your own online-safety, please update your browser or install a modern web browser.","Recommended: "],"cancel":"キャンセル","ok":"OK","none":"None","browsers":{"chrome":"Google Chrome","firefox":"Firefox","edge":"Microsoft Edge"},"ship_type":"Ship Type","equipment_type":"Equipment Type","shiptypeclass":"${class}型${type}","shipclass":"${class}型","shipclass_number":"${class}型 ${number} 番艦","other_ships_of_type":"Other ${type}s","shipname_dash_none":"","exslot":"補強増設スロットへ","equipment_series":"${equipment}-series","tp":"TP","land_bases":"基地航空隊","seiyuu":"CV","seiyuus":"CV","artist":"イラストレーター","artists":"イラストレーター","activation_chance_tobe":"発動成功率：${chance}","chance":{"normal":"Normal","high":"高い"},"day_full":{"Sunday":"日曜日","Monday":"月曜日","Tuesday":"火曜日","Wednesday":"水曜日","Thurday":"木曜日","Friday":"金曜日","Saturday":"土曜日"},"day_abbr":{"Sunday":"日","Monday":"月","Tuesday":"火","Wednesday":"水","Thurday":"木","Friday":"金","Saturday":"土"},"require":{"level":"Require level: ${level}","min_possible_level":"Minimum possible level: ${level}","equipment":"Require equipment: ${type}","equipment_all":"Require equipment (all): ${type}","equipment_at_least_one":"Require equipment (at least one): ${type}","equipment_no_need":"No need for equipment: ${type}","equipment_type":"Require equipment type: ${type}","equipment_type_no_need":"No need for equipment type: ${type}","equipment_has_stat":"Require equipment: ${type} (${stat} at least ${value})","ship_stat_with_equipments":"Require stat ${stat}: ${value} (w/ equip.)","has_stat":"${stat} at least ${value}"},"stat":{"fire":"火力","torpedo":"雷装","night":"夜戦","aa":"対空","aa_interceptor_sortie":"出撃","aa_interceptor_defense":"防空","asw":"対潜","hp":"耐久","armor":"装甲","evasion":"回避","carry":"搭載","speed":"速力","range":"射程","los":"索敵","luck":"運","bomb":"爆装","hit":"命中","distance":"半径","antibomber":"対爆","interception":"迎撃","consum":{"fuel":"燃費","ammo":"弾費"},"equipment":{"craftable":"開発","improvable":"改修"}},"nav":{"sub":{"base":"海軍基地","archive":"アーカイブ","dev":"開発センター"},"home":"ホーム","fleets":"艦隊ビルダー","academy":"海軍兵学校","calctp":"TPカルキュレーター","ships":"艦娘","equipments":"装備","arsenal":"明石の改修工廠","entities":"CV・イラストレーター","excgs":"期間限定図鑑","sorties":"出击","expeditions":"遠征","about":"アバウト","languageSwitch":"Change Language","backgroundSwitch":"Change Background","install":"インストール"},"bonuses":{"single":"単体ボーナス","sets":"相互シナジーボーナス","info_prefix_when_equipped":"When equipped, ","range_increase":"Range increased by 1","stat_donot_stack":"Donot stack","based_on_number":"Based on number of this equipment, provide...","based_on_star":"Based on star level, Each of this equipment provide...","based_on_area":"Based on area battle at, each of this equipment provide...","based_on_nothing":"Each of this equipment provide...","based_set":"加算ボーナス...","based_set_one_of":"When has one of the equipments above equipped, provide additional bonus...","based_set_one_of_only":"ONLY","based_set_accumulate":"Accumulated set bonus...","note_hybrid_radar":"Equipment(s) below treated as both Surface and AA Radar(s)","note_hybrid_radar_this_equipment":"This equipment is treated as both Surface and AA Radar"},"area":{"north":"北方"}}');

/***/ }),

/***/ "./src/locales/base/zh.json":
/*!**********************************!*\
  !*** ./src/locales/base/zh.json ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":{"short":"简","full":"简体中文"},"title":"是谁呼叫舰队","description":"《舰队收藏》工具箱","translators":["Diablohu"],"under_construction":"建设中","no_javascript_warning":"本应用需要开启 JavaScript 功能。","not_compatible":["您的浏览器过于陈旧","我们已不再支持您的浏览器环境。","为了更优的浏览体验和线上安全，请更新您的浏览器，或者安装一款全新的现代浏览器。","推荐："],"cancel":"取消","ok":"确认","none":"无","browsers":{"chrome":"谷歌 Chrome","firefox":"火狐","edge":"微软 Edge"},"ship_type":"舰种","equipment_type":"装备类型","shiptypeclass":"${class}级${type}","shipclass":"${class}级","shipclass_number":"${class}级 ${number} 号舰","other_ships_of_type":"其他${type}","shipname_dash_none":"","exslot":"补强增设栏位","equipment_series":"${equipment}系列","tp":"TP","land_bases":"基地航空队","seiyuu":"声优","seiyuus":"声优","artist":"画师","artists":"画师","activation_chance_tobe":"触发几率：${chance}","chance":{"normal":"标准","high":"高"},"day_full":{"Sunday":"星期日","Monday":"星期一","Tuesday":"星期二","Wednesday":"星期三","Thurday":"星期四","Friday":"星期五","Saturday":"星期六"},"day_abbr":{"Sunday":"日","Monday":"一","Tuesday":"二","Wednesday":"三","Thurday":"四","Friday":"五","Saturday":"六"},"require":{"level":"需要等级：${level}","min_possible_level":"可能的最低等级：${level}","equipment":"需要装备：${type}","equipment_all":"需要装备（全部）：${type}","equipment_at_least_one":"需要装备（至少一个）：${type}","equipment_no_need":"无需装备：${type}","equipment_type":"需要装备类型：${type}","equipment_type_no_need":"无需装备类型：${type}","equipment_has_stat":"需要装备：${type} (${stat}至少为${value})","ship_stat_with_equipments":"需要${stat}属性：${value} (计算装备)","has_stat":"${stat}至少为${value}"},"stat":{"fire":"火力","torpedo":"雷装","night":"夜战","aa":"对空","aa_interceptor_sortie":"出击","aa_interceptor_defense":"防空","asw":"对潜","hp":"耐久","armor":"装甲","evasion":"回避","carry":"搭载","speed":"航速","range":"射程","los":"索敌","luck":"运","bomb":"爆装","hit":"命中","distance":"航程","antibomber":"对爆","interception":"迎击","consum":{"fuel":"燃耗","ammo":"弹耗"},"equipment":{"craftable":"开发","improvable":"改修"}},"nav":{"sub":{"base":"海军基地","archive":"档案馆","dev":"研发中心"},"home":"首页","fleets":"舰队模拟","academy":"海军兵学校","calctp":"TP计算","sorties":"出击海域","expeditions":"远征","ships":"舰娘","equipments":"装备","arsenal":"改修工厂","entities":"声优 & 画师","excgs":"限定图鉴","about":"关于","languageSwitch":"切换语言","backgroundSwitch":"切换背景图","install":"安装 App"},"bonuses":{"single":"装备属性加成","sets":"套装加成","info_prefix_when_equipped":"装备于以上舰娘时，","range_increase":"射程提高一档","stat_donot_stack":"该属性不叠加","based_on_number":"根据该装备的装备数量提供... (超额部分不提供加成)","based_on_star":"每个该装备根据改修星级提供...","based_on_area":"根据所处作战海域，每个该装备提供...","based_on_nothing":"每个该装备提供...","based_set":"额外加成...","based_set_one_of":"当拥有以上任意装备时，提供额外加成...","based_set_one_of_only":"仅限","based_set_accumulate":"累计套装加成...","note_hybrid_radar":"以下装备同时算作对水面和对空电探/雷达","note_hybrid_radar_this_equipment":"本装备同时算作对水面和对空电探/雷达"},"area":{"north":"北方"}}');

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("chalk");;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("debug");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs-extra");;

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("hoist-non-react-statics");;

/***/ }),

/***/ "inquirer":
/*!***************************!*\
  !*** external "inquirer" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("inquirer");;

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");;

/***/ }),

/***/ "is-port-reachable":
/*!************************************!*\
  !*** external "is-port-reachable" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("is-port-reachable");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");;

/***/ }),

/***/ "koa-convert":
/*!******************************!*\
  !*** external "koa-convert" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-convert");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-proxies":
/*!******************************!*\
  !*** external "koa-proxies" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-proxies");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");;

/***/ }),

/***/ "object-assign":
/*!********************************!*\
  !*** external "object-assign" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("object-assign");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "portfinder":
/*!*****************************!*\
  !*** external "portfinder" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("portfinder");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-redux");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");;

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("vm");;

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************************************!*\
  !*** ./node_modules/koot/ReactApp/server/index.js ***!
  \****************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run */ "./node_modules/koot/ReactApp/server/run.js");
// import 'regenerator-runtime/runtime';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_run__WEBPACK_IMPORTED_MODULE_0__.default);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map