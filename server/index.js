const path = require("path");
if (typeof global.KOOT_DIST_DIR === "undefined") {
    global.KOOT_DIST_DIR = path.resolve(__dirname, "../");
}

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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack/after.js":
/*!*********************************!*\
  !*** ./config/webpack/after.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ "path"); // const forever = require('forever-monitor');


module.exports = async kootConfig => {
  if (process.env.WEBPACK_BUILD_STAGE === 'client' && "prod" === 'prod' && !kootConfig.analyze) {
    await __webpack_require__(/*! ../../src/scripts/clean-web-sourcemap */ "./src/scripts/clean-web-sourcemap.js")(kootConfig);
  }

  await __webpack_require__(/*! ../../src/build/webapp/after-server */ "./src/build/webapp/after-server.js")();

  if (process.env.WEBPACK_BUILD_STAGE === 'server' && "prod" === 'dev' && !process.env.YUUBARI_LOCAL_AKIGUMO) {
    const file = path.resolve(__dirname, '../../../Akigumo-dev/start.js');

    const child = __webpack_require__(/*! child_process */ "child_process").fork(file, [`--port=${kootConfig.devPortAkigumo}`], {
      stdio: 'inherit',
      shell: true
    });

    child.on('close', () => {
      console.warn(`💬 Akigumo(Local) closed.`);
    });
    child.on('error', (...args) => {// reject(...args);
    }); // let child;
    // const exitHandler = async (...args) => {
    //     child.stop();
    // };
    // process.on('exit', exitHandler);
    // process.on('SIGINT', exitHandler);
    // process.on('SIGUSR1', exitHandler);
    // process.on('SIGUSR2', exitHandler);
    // process.on('uncaughtException', exitHandler);
    // if (child) {
    //     child.stop();
    // } else {
    //     child = new forever.Monitor(file, {
    //         max: 1,
    //         silent: false,
    //         uid: `yuubari-local-akigumo`,
    //         killTree: true,
    //         args: [`--port=${kootConfig.devPortAkigumo}`],
    //     });
    //     child.on('watch:restart', function (info) {
    //         console.warn(`💬 Akigumo(Local) restarting`);
    //     });
    //     child.start();
    //
    // }

    console.warn({
      file,
      port: kootConfig.devPortAkigumo,
      child
    });
    process.env.YUUBARI_LOCAL_AKIGUMO = true;
  }

  return;
};
/* WEBPACK VAR INJECTION */}.call(this, "config\\webpack"))

/***/ }),

/***/ "./config/webpack/before.js":
/*!**********************************!*\
  !*** ./config/webpack/before.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-console */
module.exports = async kootConfig => {
  if (process.env.WEBPACK_BUILD_STAGE === 'client') {
    console.log(' ');

    if (!kootConfig.analyze) {
      await __webpack_require__(/*! ../../scripts/build/prepare-static */ "./scripts/build/prepare-static.js")(kootConfig);
      await __webpack_require__(/*! ../../src/build/webapp/before */ "./src/build/webapp/before.js")(kootConfig).catch(err => console.error(err));
    } // if (process.env.WEBPACK_BUILD_ENV === 'prod') {
    //     await require('../../src/scripts/clean-dist')(kootConfig);
    // }


    await __webpack_require__(/*! ../../src/scripts/validate-database-files */ "./src/scripts/validate-database-files.js")(kootConfig);
    await __webpack_require__(/*! ../../src/scripts/validate-less-variables */ "./src/scripts/validate-less-variables.js")(kootConfig);

    if (!kootConfig.analyze) {
      await __webpack_require__(/*! ../../src/scripts/copyfiles */ "./src/scripts/copyfiles.js")(kootConfig);
    }

    console.log(' ');
  }

  return;
};

/***/ }),

/***/ "./config/webpack/index.js":
/*!*********************************!*\
  !*** ./config/webpack/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ "path");

const webpack = __webpack_require__(/*! webpack */ "webpack");

module.exports = async () => {
  const config = {
    entry: ['critical', 'polyfill'].reduce((result, entry) => {
      result[entry] = path.resolve(__dirname, `../../src/${entry}.js`);
      return result;
    }, {}),
    module: {
      rules: [{
        test: /\.(ico|gif|jpg|jpeg|png|webp)$/,
        loader: 'url-loader',
        options: {
          limit: 1 * 1024
        } // exclude: /node_modules/

      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        exclude: /node_modules/
      }, {
        test: /\.(nedb|json-compressed)$/,
        loader: 'raw-loader'
      }, {
        test: /\.md$/,
        include: [/docs/],
        loader: 'raw-loader'
      }]
    },
    plugins: [new webpack.NormalModuleReplacementPlugin(/^__FLEET_INIT_DATABASE_ONLY_CLIENT__$/, process.env.WEBPACK_BUILD_STAGE === 'client' ? path.resolve(__dirname, '../../src/database/init-db.js') : path.resolve(__dirname, '../../src/database/init-db-fake.js')), new webpack.NormalModuleReplacementPlugin(/^__FLEET_INIT_DATABASE_ONLY_SERVER__$/, process.env.WEBPACK_BUILD_STAGE === 'server' ? path.resolve(__dirname, '../../src/database/init-db.js') : path.resolve(__dirname, '../../src/database/init-db-fake.js')), new webpack.NormalModuleReplacementPlugin(/^__FLEET_GET_NEDB__$/, path.resolve(__dirname, `../../src/database/get-nedb-${process.env.WEBPACK_BUILD_STAGE}.js`))]
  };

  if ( true && process.env.WEBPACK_BUILD_STAGE === 'server') {
    if (typeof config.externals !== 'object') config.externals = {};
    config.externals['any-promise'] = 'commonjs any-promise';
  }

  return config;
};
/* WEBPACK VAR INJECTION */}.call(this, "config\\webpack"))

/***/ }),

/***/ "./koot.config.js":
/*!************************!*\
  !*** ./koot.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** @module kootConfig */

/**
 * 路径名，可为相对路径或绝对路径。由于部分代码使用了 import/export 的写法，node.js 无法直接识别，需要 webpack/babel 进行编译，故在部分环境下使用该写法代替 require()。
 * @typedef {String} Pathname
 */

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
const path = __webpack_require__(/*! path */ "path");

const {
  static: dirStatic
} = __webpack_require__(/*! ./src/directories */ "./src/directories.js");
/** @type {Boolean} 判断当前是否是生产环境 */
// const isEnvProd = Boolean(process.env.WEBPACK_BUILD_ENV === 'prod')

/** @type {Boolean} 判断当前是否是开发环境 */
// const isEnvDev = Boolean(process.env.WEBPACK_BUILD_ENV === 'dev')

/** @type {Boolean} 判断当前是否是客户端 */
// const isStageClient = Boolean(process.env.WEBPACK_BUILD_STAGE === 'client')

/** @type {Boolean} 判断当前是否是服务器端 */
// const isStageServer = Boolean(process.env.WEBPACK_BUILD_STAGE === 'server')


module.exports = {
  /**************************************************************************
   * 项目信息
   *************************************************************************/
  name: 'The Fleet (Yuubari)',
  dist: './dist-webapp/',
  template: './src/template.ejs',
  templateInject: './src/_server/inject.js',
  routes: './src/router',
  store: './src/redux/factory-store',
  sessionStore: {
    equipmentList: true,
    shipList: true
  },
  // i18n: {
  //     // type: ENV === 'dev' ? 'redux' : 'default', // default | redux
  //     type: 'redux',
  //     // expr: '__',
  //     locales: require('./src/locales/index').map(l => [
  //         l,
  //         `./src/locales/${l}.json`
  //     ])
  //     // cookieKey: 'fleetLocaleId',
  //     // domain: '127.0.0.1',
  // },
  i18n: process.env.quickStart && !process.env.quickStartAllLocales ? [['zh', `./src/locales/zh.json`]] : __webpack_require__(/*! ./src/locales */ "./src/locales/index.js").map(l => [l, `./src/locales/${l}.json`]),
  serviceWorker: {
    auto: false,
    exclude: ['/bgimgs/**/*', '/pics/**/*', '/dev-*'],
    cacheFirst: ['/bgimgs/', '/pics/']
  },
  aliases: {
    '@src': path.resolve('./src'),
    '@docs': path.resolve('./docs'),
    '@locales': path.resolve('./src/locales'),
    '@assets': path.resolve('./src/assets'),
    '@app': path.resolve('./src'),
    '@utils': path.resolve('./src/utils'),
    '@ui': path.resolve('./src/ui'),
    '@components': path.resolve('./src/ui/components'),
    '@api': path.resolve('./src/api'),
    '@const': path.resolve('./src/constants'),
    '@redux': path.resolve('./src/redux'),
    '@actions': path.resolve('./src/api/actions'),
    '@db': path.resolve('./src/database'),
    '@database': path.resolve('./src/database'),
    '~base.less': path.resolve('./src/ui/base.less'),
    '~Assets': path.resolve('./src/assets'),
    '~/': path.resolve('./src/ui')
  },
  defines: __webpack_require__(/*! ./src/defines */ "./src/defines.js"),
  staticCopyFrom: [dirStatic],

  /**************************************************************************
   * 客户端生命周期
   *************************************************************************/
  before: './src/_client/before',
  after: './src/_client/after',
  onHistoryUpdate: './src/_client/on-history-update',
  onRouterUpdate: './src/_client/on-router-update',

  /**************************************************************************
   * 服务器端设置 & 生命周期
   *************************************************************************/
  port: 8080,
  // renderCache: {
  //     maxAge: 10 * 1000,
  // },
  renderCache: false,
  proxyRequestOrigin: {
    protocol:  true ? 'https' : undefined
  },
  koaStatic: {
    maxage: 0,
    hidden: true,
    index: 'index.html',
    defer: false,
    gzip: true,
    extensions: false
  },
  serverBefore: './src/_server/lifecycle/before',
  serverAfter: './src/_server/lifecycle/after',
  serverOnRender: {
    beforePreRender: './src/_server/lifecycle/before-pre-render'
  },

  /**************************************************************************
   * Webpack 相关
   *************************************************************************/
  webpackConfig: __webpack_require__(/*! ./config/webpack */ "./config/webpack/index.js"),
  webpackBefore: __webpack_require__(/*! ./config/webpack/before */ "./config/webpack/before.js"),
  webpackAfter: __webpack_require__(/*! ./config/webpack/after */ "./config/webpack/after.js"),
  moduleCssFilenameTest: /^((?!\.g\.).)*/,
  classNameHashLength: 8,

  /**************************************************************************
   * 开发环境
   *************************************************************************/
  devPort: 8703,
  devMemoryAllocation: 2048,

  /**************************************************************************
   * Project Specific
   *************************************************************************/
  portAkigumo: 8081,
  devPortAkigumo: 8702
};

/***/ }),

/***/ "./logs/tmp/config/portion.server.1585470042821.js":
/*!*********************************************************!*\
  !*** ./logs/tmp/config/portion.server.1585470042821.js ***!
  \*********************************************************/
/*! exports provided: template, server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "template", function() { return template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "server", function() { return server; });
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





const configSessionStore = JSON.parse("{\"equipmentList\":true,\"shipList\":true}");
/** @type {Boolean} 当前是否可以/允许使用 sessionStore */

const able = (() => {
  if (true) return false;
  if (!window.sessionStorage) return false;
  if (!configSessionStore) return false;
  if (configSessionStore === true) return true;
  if (configSessionStore === 'all') return true;
  return Boolean(typeof configSessionStore === 'object' && !Array.isArray(configSessionStore));
})();
/**
 * 保存当前 state 到 sessionStorage
 * @void
 */


const save = () => {
  if (!able) return;
  /** @type {Object} 排除掉黑名单内的项目后的 state 对象 */

  const state = _libs_filter_state__WEBPACK_IMPORTED_MODULE_4___default()(___WEBPACK_IMPORTED_MODULE_2__["store"].getState());
  let saveState = {};

  if (configSessionStore === true || configSessionStore === 'all') {
    saveState = state;
  } else if (typeof configSessionStore === 'object' && !Array.isArray(configSessionStore)) {
    // 根据配置对象存储
    const parse = (obj, accumulatedKey = '') => {
      Object.keys(obj).forEach(key => {
        const currentAccumulatedKey = accumulatedKey + `[${JSON.stringify(key)}]`;

        if (typeof obj[key] === 'object') {
          parse(obj[key], currentAccumulatedKey);
        } else if (obj[key] === true) {
          const value = lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(state, currentAccumulatedKey);
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

const addEventHandlerOnPageUnload = () => {
  if (!able) return;
  window.addEventListener('unload', save);
  return;
};
/**
 * 从 sessionStorage 中读取 state
 * @returns {Object} 存储的 state
 */

const load = () => {
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
  title: '',
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

/* harmony default export */ __webpack_exports__["default"] = ((title, metas = []) => {
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
    infoToChange.title = '';
    infoToChange.metas = [];
    changeTimeout = undefined;
  });
}); //

const doUpdate = () => {
  const {
    title,
    metas
  } = infoToChange; // 替换页面标题

  document.title = title; // 替换 metas

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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global __KOOT_SSR__:false */

 // import { hot } from 'react-hot-loader'
// import PropTypes from 'prop-types'



 //





 //
// 是否已挂载了组件

let everMounted = false; // const defaultPageInfo = {
//     title: '',
//     metas: []
// }

const styleMap = {};
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

const doFetchData = (store, renderProps, dataFetch) => {
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return new Promise(resolve => resolve(result));
  const result = dataFetch(store.getState(), renderProps, store.dispatch); // if (result === true) {
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
  if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return {};
  const defaultPageInfo = {
    title: '',
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


const extend = (options = {}) => WrappedComponent => {
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

  class KootReactComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    //
    // static contextType = StyleMapContext
    //
    clientUpdatePageInfo(to) {
      if (true) return;
      if (!hasPageinfo) return;
      const {
        title,
        metas
      } = typeof to === 'function' ? doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), to) : to || doPageinfo(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), pageinfo);
      Object(_client_update_page_info__WEBPACK_IMPORTED_MODULE_7__["default"])(title, metas);
    } //


    //
    constructor(props
    /*, context*/
    ) {
      super(props
      /*, context*/
      );
      /**
       * _服务器端_
       * 将组件注册到同构渲染对象中
       */

      _defineProperty(this, "state", {
        loaded: typeof dataCheck === 'function' ? dataCheck(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])().getState(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props)) : undefined
      });

      _defineProperty(this, "mounted", false);

      _defineProperty(this, "kootClassNames", []);

      if (true) {
        const SSR =  false ? undefined : __KOOT_SSR__;

        if (SSR[_defaults_defines_server__WEBPACK_IMPORTED_MODULE_4__["needConnectComponents"]]) {
          if (false) {}

          const {
            connectedComponents = []
          } = SSR;
          connectedComponents.unshift(KootComponent);
        }
      }

      if (!_is_render_safe__WEBPACK_IMPORTED_MODULE_9___default()()) return;

      if (hasStyles) {
        this.kootClassNames = styles.map(obj => obj.wrapper);
        Object(_styles__WEBPACK_IMPORTED_MODULE_6__["append"])(this.getStyleMap(), styles); // console.log('----------')
        // console.log('styles', styles)
        // console.log('theStyles', theStyles)
        // console.log('this.classNameWrapper', this.classNameWrapper)
        // console.log('----------')
      }
    }
    /**
     * 获取 styleMap
     * - 服务器端: 返回全局常量中的对照表
     * - 客户端: 直接返回本文件内的 styleMap
     */


    getStyleMap()
    /*context*/
    {
      // console.log('extend', { LocaleId })
      if (true) {
        if (false) {}
        if (typeof __KOOT_SSR__ === 'object') return __KOOT_SSR__.styleMap;
      }

      return styleMap; // return context
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
        doFetchData(Object(___WEBPACK_IMPORTED_MODULE_3__["getStore"])(), Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromComponentProps"])(this.props), dataFetch).then(() => {
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
        Object(_styles__WEBPACK_IMPORTED_MODULE_6__["remove"])(this.getStyleMap(), styles);
      }

      if (typeof dataResetWhenUnmount === 'object') {
        setTimeout(() => {
          this.props.dispatch({
            type: _redux__WEBPACK_IMPORTED_MODULE_8__["RESET_CERTAIN_STATE"],
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
    }

  }

  _defineProperty(KootReactComponent, "onServerRenderHtmlExtend", ({
    store,
    renderProps = {}
  }) => {
    const {
      title,
      metas
    } = doPageinfo(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), pageinfo);
    return {
      title,
      metas
    };
  });

  if (typeof dataFetch !== 'undefined') {
    KootReactComponent.onServerRenderStoreExtend = ({
      store,
      renderProps
    }) => {
      if (typeof dataFetch === 'undefined') return new Promise(resolve => resolve()); // console.log('onServerRenderStoreExtend')

      return doFetchData(store, Object(_get_render_props__WEBPACK_IMPORTED_MODULE_5__["fromServerProps"])(renderProps), dataFetch);
    };
  } // if (_hot && __DEV__ && __CLIENT__) {
  //     const { hot, setConfig } = require('react-hot-loader')
  //     setConfig({ logLevel: 'debug' })
  //     KootComponent = hot(module)(KootComponent)
  // }
  // if (typeof styles === 'object' &&
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
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(() => ({}), undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (typeof _connect === 'function') {
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(_connect, undefined, undefined, {
      forwardRef: true
    })(KootComponent);
  } else if (Array.isArray(_connect)) {
    if (typeof _connect[3] !== 'object') _connect[3] = {};
    _connect[3].forwardRef = true;
    KootComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(..._connect)(KootComponent);
  } // return KootComponent;


  return react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
    if (props.forwardedRef) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, _extends({}, props, {
      kootForwardedRef: props.forwardedRef
    }));
    if (ref) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, _extends({}, props, {
      kootForwardedRef: ref
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(KootComponent, props);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (extend);

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
    const object = typeof location === 'string' ? Object(history_lib_PathUtils__WEBPACK_IMPORTED_MODULE_1__["parsePath"])(location) : location;
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
const {
  needConnectComponents
} = __webpack_require__(/*! ../defaults/defines-server */ "./node_modules/koot/defaults/defines-server.js");
/**
 * 当前执行和渲染有关的操作是否安全
 * - 客户端: 永远安全
 * - 服务器端: SSR `dataToStore` 之前不安全，之后安全
 * @returns {boolean}
 */


module.exports = () => {
  if (true) {
    const SSR =  false ? undefined : __KOOT_SSR__;
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
const LOCATION_UPDATE = '@@KOOT@@LOCATION_UPDATE';

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
    location
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

const update = location => dispatch => {
  return dispatch(_actions_js__WEBPACK_IMPORTED_MODULE_0__["update"](location));
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





const REALTIME_LOCATION_REDUCER_NAME = 'realtimeLocation';


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

const initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
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

const RESET_CERTAIN_STATE = '@@KOOT@@RESET_CERTAIN_STATE';
/******************************************************************************
 * ┌─┐┌─┐┌─┐┌─┐┌┐┌┌┬┐┬┌─┐┬  ┌─┐
 * ├┤ └─┐└─┐├┤ │││ │ │├─┤│  └─┐
 * └─┘└─┘└─┘└─┘┘└┘ ┴ ┴┴ ┴┴─┘└─┘
 *****************************************************************************/

/**
 * @type {Array}
 */

const reducers = {
  // 路由状态扩展
  routing: react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerReducer"],
  // 目的：新页面请求处理完成后再改变URL
  [_realtime_location__WEBPACK_IMPORTED_MODULE_4__["REALTIME_LOCATION_REDUCER_NAME"]]: _realtime_location__WEBPACK_IMPORTED_MODULE_4__["reducer"],
  // 对应服务器生成的store
  [_ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["SERVER_REDUCER_NAME"]]: _ReactApp_server_redux__WEBPACK_IMPORTED_MODULE_5__["serverReducer"]
};

if (_i18n_is_enabled__WEBPACK_IMPORTED_MODULE_7___default()()) {
  reducers.localeId = _i18n_redux__WEBPACK_IMPORTED_MODULE_6__["reducerLocaleId"]; // reducers.locales = i18nReducerLocales
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

const middlewares = [redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(react_router_redux__WEBPACK_IMPORTED_MODULE_2__["routerMiddleware"])(_history__WEBPACK_IMPORTED_MODULE_8__["default"])]; // const enhancerClientModifyState = createStore => (
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
      const kootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...reducers
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
      return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...appReducer,
        ...reducers
      });
    }

    return Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({ ...reducers
    });
  })();

  if (!Array.isArray(appEnhancers) && appEnhancers) appEnhancers = [appEnhancers];else if (!appEnhancers) appEnhancers = [];
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(projectReducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares.concat(appMiddlewares)), ...appEnhancers));
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
const CHANGE_LANGUAGE = '@@KOOT@@CHANGE_LANGUAGE';
const GET_ORIGIN_URL = '@@KOOT@@GET_ORIGIN_URL';
const TELL_CLIENT_URL = '@@KOOT@@TELL_CLIENT_URL';
const SYNC_COOKIE = '@@KOOT@@SYNC_COOKIE';
/* harmony default export */ __webpack_exports__["default"] = ({
  CHANGE_LANGUAGE,
  GET_ORIGIN_URL,
  TELL_CLIENT_URL,
  SYNC_COOKIE
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
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./run */ "./node_modules/koot/ReactApp/server/run.js");
// import 'regenerator-runtime/runtime';

/* harmony default export */ __webpack_exports__["default"] = (_run__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

  const chunkmap = _utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_2___default()(true);
  /** @type {Map} webpack 的入口，从 chunkmap 中抽取 */

  const entrypoints = new Map();
  /** @type {Map} 文件名与实际结果的文件名的对应表，从 chunkmap 中抽取 */

  const filemap = new Map();
  /** @type {Map} 样式表 */
  // const styleMap = new Map()

  /** @type {Object} 公用缓存空间 */

  const globalCache = new Map();
  globalCache.set('__', {});
  /** @type {String} i18n 类型 */

  const i18nType = _i18n_get_type__WEBPACK_IMPORTED_MODULE_5___default()(); // 针对 i18n 分包形式的项目，静态注入按语言缓存

  if (i18nType === 'default') {
    for (const l in chunkmap) {
      const thisLocaleId = l.substr(0, 1) === '.' ? l.substr(1) : l;
      entrypoints.set(thisLocaleId, chunkmap[l]['.entrypoints']);
      filemap.set(thisLocaleId, chunkmap[l]['.files']);
      const cache = {};

      if (true) {
        extendCacheObject(cache, chunkmap, l);
      }

      templateInjectCache.set(thisLocaleId, cache); // styleMap.set(thisLocaleId, {})
    }
  } else {
    entrypoints.set('', chunkmap['.entrypoints']);
    filemap.set('', chunkmap['.files']);
    const cache = {};

    if (true) {
      extendCacheObject(cache, chunkmap);
    }

    templateInjectCache.set('', cache); // styleMap.set('', {})
  }

  if (Array.isArray(_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6___default.a)) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_6___default.a.forEach(localeId => {
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
    const url = ctx.path + ctx.search;

    try {
      // console.log('request url', url)
      // console.log('\nSSR middleware start')

      /** @type {String} 本次请求的语种ID */
      const LocaleId = Object(_i18n_server_get_lang_from_ctx__WEBPACK_IMPORTED_MODULE_4__["default"])(ctx) || ''; // setLocaleId(LocaleId)
      // console.log(`LocaleId -> ${LocaleId}`)
      // 如果存在缓存匹配，直接返回缓存结果

      const thisRenderCache = renderCacheMap ? renderCacheMap.get(LocaleId) : undefined;
      const cached = thisRenderCache ? thisRenderCache.get(url) : false;

      if ( true && cached !== false) {
        ctx.body = cached;
        return;
      }
      /** @type {Object} 本次请求的 (当前语言的) 注入内容缓存 */


      const thisTemplateInjectCache = templateInjectCache.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 入口表 */

      const thisEntrypoints = entrypoints.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) 文件名对应表 */

      const thisFilemap = filemap.get(i18nType === 'default' ? LocaleId : '');
      /** @type {Object} 本次请求的 (当前语言的) CSS 对照表 */

      const styleMap = {}; // const thisStyleMap = styleMap.get(i18nType === 'default' ? LocaleId : '')

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


      const SSRoptions = {
        ctx,
        // Store, History,
        // memoryHistory,
        LocaleId,
        locales:  false ? undefined : locales,
        // ssrConfig,
        // syncCookie: reduxConfig.syncCookie,
        proxyRequestOrigin,
        templateInject,
        template,
        thisTemplateInjectCache,
        thisEntrypoints,
        thisFilemap,
        //thisStyleMap,
        styleMap,
        globalCache,
        connectedComponents:  false ? undefined : []
      };

      if (false) {}

      const result = await Object(_ssr__WEBPACK_IMPORTED_MODULE_8__["default"])(SSRoptions); // console.log('eval finished', {
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

const extendCacheObject = (cache, chunkmap, localeId) => {
  const serviceWorker = _utils_get_sw_pathname__WEBPACK_IMPORTED_MODULE_3___default()(localeId ? chunkmap[localeId] : chunkmap);

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


const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path"); // const vm = require('vm')
// const chalk = require('chalk')

/** @type {String} ssr.js 文件内容 */


let __KOOT_SSR_FILE_CONTENT__;
/**
 * 执行服务器端渲染 (Server-Side Rendering)
 */


const ssr = async __KOOT_SSR__ => new Promise(async resolve => {
  __KOOT_SSR__.ssrComplete = result => resolve(result);

  if (false) {}

  if (!__KOOT_SSR_FILE_CONTENT__) {
    const fileSSR = path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_0___default()(), 'server/ssr.js');

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


  let Store, History, __KOOT_STORE__, __KOOT_HISTORY__, __KOOT_CTX__;

  const {
    // Store: __KOOT_STORE__,
    // History: __KOOT_HISTORY__,
    LocaleId: __KOOT_LOCALEID__
  } = __KOOT_SSR__;

  const __KOOT_SSR_SET_STORE__ = value => {
    Store = value;
    __KOOT_STORE__ = value;
  };

  const __KOOT_SSR_SET_HISTORY__ = value => {
    History = value;
    __KOOT_HISTORY__ = value;
  };

  const __KOOT_SSR_SET_CTX__ = value => {
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
const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const router = new __webpack_require__(/*! koa-router */ "koa-router")(); // const { pathnameSockjs } = require('../../../defaults/before-build');

const {
  publicPathPrefix,
  serviceWorkerFilename
} = __webpack_require__(/*! ../../../defaults/webpack-dev-server */ "./node_modules/koot/defaults/webpack-dev-server.js");

const {
  dll,
  serviceWorker
} = __webpack_require__(/*! ../../../defaults/dev-request-uri */ "./node_modules/koot/defaults/dev-request-uri.js"); // const getWDSport = require('../../../utils/get-webpack-dev-server-port');


const getDevRoutes = __webpack_require__(/*! ../../../libs/get-dev-routes */ "./node_modules/koot/libs/get-dev-routes.js");

const {
  KOOT_DEV_DLL_FILE_CLIENT: fileDllClient
} = process.env;
getDevRoutes().forEach(({
  file,
  route
}) => {
  router.get(route, ctx => {
    ctx.type = 'application/javascript';
    ctx.body = fs.readFileSync(file);
  });
});
router.get(dll, ctx => {
  if (fileDllClient && fs.existsSync(fileDllClient)) {
    ctx.type = 'application/javascript';
    ctx.body = fs.readFileSync(fileDllClient);
  } else {
    ctx.body = '';
  }
});
router.get(serviceWorker, async ctx => {
  const uri = `${ctx.origin}/${publicPathPrefix}/dist/${serviceWorkerFilename}`;
  const res = await fetch(new Request(uri));
  ctx.body = await res.text();
  ctx.type = 'application/javascript';
}); // router.get(`/${pathnameSockjs}/*`, async ctx => {
//     const portWebpackDevServer = getWDSport();
//     ctx.redirect(
//         `${ctx.protocol}://${ctx.hostname}:${portWebpackDevServer}${ctx.path}?${ctx.querystring}`
//     );
// });

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

const staticMiddleware = (koaStaticConfig = {}) => {
  const dir = _libs_get_dir_dist_public__WEBPACK_IMPORTED_MODULE_2___default()(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_3___default()());
  const config = Object.assign({}, _defaults_koa_static__WEBPACK_IMPORTED_MODULE_4___default.a, koaStaticConfig); // console.log('koa-statc', {
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


const SERVER_REDUCER_NAME = 'server';
const serverReducer = (state = {
  lang: 'en',
  origin: ''
}, action) => {
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
   * @return {Boolean|String} 对该 URL 不使用缓存时返回 false，使用时返回缓存结果 String
   */


  get(url) {
    if (typeof this.customGet === 'function') return this.customGet(url); // 没有该条结果，直接返回 false

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
   */


  set(url, html) {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME__ */ "./logs/tmp/config/portion.server.1585470042821.js");
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
/* eslint-disable no-console */

/* __KOOT_DEV_SSR__ */
// import koaCompress from 'koa-compress';




 // import getDist from '../../utils/get-dist-path';
// import sleep from '../../utils/sleep';


 // import validateReduxConfig from '../../React/validate/redux-config'





 // require('@babel/register')
// require('@babel/polyfill')

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

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
  } = _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"]; // 决定服务器启动端口
  // 如果端口不可用，取消启动流程

  /** @type {Number} 服务器启动端口 */

  const port = await _libs_validate_port__WEBPACK_IMPORTED_MODULE_5___default()();
  if (!port) throw new Error(_libs_error_msg__WEBPACK_IMPORTED_MODULE_3___default()('VALIDATE_PORT', 'unavailable')); // 确定 Redux 相关配置
  // const reduxConfig = await validateReduxConfig(reduxConfigRaw)
  // 确定模板内容

  const template = await Object(_validate_template__WEBPACK_IMPORTED_MODULE_8__["default"])(_KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["template"]); // 渲染缓存

  const renderCacheMap = await Object(_validate_create_render_cache_map__WEBPACK_IMPORTED_MODULE_6__["default"])(renderCacheConfig); // 语言包写入内存

  const locales =  true ? await Object(_validate_i18n__WEBPACK_IMPORTED_MODULE_7__["default"])() : undefined; // 创建 Koa 实例 (app)

  /** @type {Koa} Koa 服务器实例 */

  const app = _libs_create_koa_app__WEBPACK_IMPORTED_MODULE_2___default()(); // 生命周期: 服务器启动前

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

  app.use(Object(_middlewares_static__WEBPACK_IMPORTED_MODULE_11__["default"])((() => {
    if (typeof _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].koaStatic === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].koaStatic;
    if (typeof _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].static === 'object') return _KOOT_PROJECT_CONFIG_PORTION_SERVER_PATHNAME___WEBPACK_IMPORTED_MODULE_0__["server"].static;
    return {};
  })())); // 挂载中间件: 同构服务器

  app.use(Object(_middlewares_isomorphic__WEBPACK_IMPORTED_MODULE_10__["default"])({
    // reduxConfig,
    renderCacheMap,
    locales,
    proxyRequestOrigin,
    template,
    templateInject
  })); // 生命周期: 服务器即将启动

  if (false) {}
  if (typeof serverAfter === 'function') await serverAfter(app); // [开发环境] 中间件: 请求完成后，触发 server/index.js 保存，让 PM2 重启服务器

  if (false) {} // 初始化完成，准备启动服务器


  _libs_log__WEBPACK_IMPORTED_MODULE_4___default()(' ', 'server', `init \x1b[32m${'OK'}\x1b[0m!`); // 启动服务器

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
    if (err instanceof Error) err.message = _libs_error_msg__WEBPACK_IMPORTED_MODULE_3___default()('KOA_APP_LAUNCH', err.message);
    throw err;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (startKootIsomorphicServer);
startKootIsomorphicServer().catch(err => {
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
 * @param {Object|boolean} renderCacheConfig
 * @returns {Map}
 */

const createRenderCacheMap = (renderCacheConfig = {}) => {
  // console.log({ renderCacheConfig });
  if (renderCacheConfig === false) return false;
  const renderCache = new Map();

  if (_i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.length) {
    _i18n_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.forEach(localeId => {
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
/* harmony import */ var _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../i18n/read-locale-file-sync */ "./node_modules/koot/i18n/read-locale-file-sync.js");
/* harmony import */ var _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_3__);





const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

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

  Object(_i18n_locales__WEBPACK_IMPORTED_MODULE_1__["setLocales"])(locales);
  return locales;
};

/* harmony default export */ __webpack_exports__["default"] = (validateI18n);
/**
 * 获取完整语言包配置
 * @returns {Object}
 */

const getLocalesFull = () => {
  const locales = JSON.parse("[[\"zh\",{},null,\"./locales/zh.json\"],[\"en\",{},null,\"./locales/en.json\"],[\"ja\",{},null,\"./locales/ja.json\"]]");
  return locales.map(l => [l[0], _i18n_read_locale_file_sync__WEBPACK_IMPORTED_MODULE_3___default()( false ? undefined : getLocaleFile(l[3])), l[2], l[3]]); // return JSON.parse(process.env.KOOT_I18N_LOCALES);
};
/** 通过环境变量中记录的相对路径读取语言包内容 */


const getLocaleFile = relativePath => {
  let file = relativePath;
  if (fs.existsSync(file)) return file;
  file = path.resolve(_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default()(), 'server', relativePath);
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
 * @param {String} template Koot 配置项: `template`
 * @returns {String}
 */

const validateTemplate = template => {
  if (false) {}

  if (true) template = "<!DOCTYPE html>\r\n<html <%- inject.htmlLang -%>>\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n\r\n    <title><%= inject.title -%></title>\r\n\r\n    <base target=\"_self\">\r\n\r\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no,email=no,address=no\">\r\n    <meta name=\"format-detection\" content=\"email=no\">\r\n    <meta name=\"format-detection\" content=\"address=no\">\r\n    <meta name=\"format-detection\" content=\"telephone=no\">\r\n    <meta name=\"HandheldFriendly\" content=\"true\">\r\n    <meta name=\"mobile-web-app-capable\" content=\"yes\">\r\n\r\n    <link rel=\"shortcut icon\" href=\"/favicon.ico\" type=\"image/x-icon\">\r\n    <link rel=\"icon\" href=\"/icon-256.png\" type=\"image/png\" sizes=\"256x256\">\r\n    <link rel=\"icon\" href=\"/icon-128.png\" type=\"image/png\" sizes=\"128x128\">\r\n    <%- inject.manifest -%>\r\n\r\n    <meta name=\"theme-color\" content=\"#263238\" />\r\n\r\n    <!-- IE/Edge -->\r\n    <meta name=\"renderer\" content=\"webkit\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\r\n\r\n    <!-- iOS -->\r\n    <meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\r\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black-translucent\">\r\n\r\n    <meta name=\"copyright\" content=\"Copyright (c) 2020 fleet.moe\">\r\n\r\n    <!-- Polyfill for legacy browsers -->\r\n    <script nomodule type=\"text/javascript\" src=\"<%- pathname('polyfill.js') %>\"></script>\r\n\r\n    <%- inject.metas -%>\r\n    <%- inject.styles -%>\r\n    <%- inject.definePath -%>\r\n</head>\r\n<body>\r\n    <div id=\"boat-loader\">LOADING...</div>\r\n    <div id=\"root\"><%- inject.react %></div>\r\n\r\n    <%- inject.svgIcons %>\r\n\r\n    <script type=\"text/javascript\"><%- content('critical.js') %></script>\r\n    <%- inject.scripts %>\r\n\r\n    <script>\r\n        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\r\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\r\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\r\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\r\n\r\n        ga('create', 'UA-63582858-4', 'auto');\r\n        ga('send', 'pageview');\r\n    </script>\r\n</body>\r\n</html>\r\n\n<!-- rendered by using koot.js 0.14.0-alpha.6 -->";
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

/***/ "./node_modules/koot/defaults/before-build.js":
/*!****************************************************!*\
  !*** ./node_modules/koot/defaults/before-build.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  keyConfigWebpackSPATemplateInject: '__SPA_TEMPLATE_INJECT__',
  keyConfigWebpackSPAServer: '__SPA_SERVER__',
  keyConfigClientAssetsPublicPath: '__CLIENT_ASSETS_PUBLIC_PATH__',
  keyConfigClientServiceWorkerPathname: '__CLIENT_SERVICE_WORKER_PATHNAME__',
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
  pathnameSockjs: `sockjs-node`
};

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
  serviceWorker: `/__KOOT_DEV_SERVICE_WORKER.${ true ? encodeURIComponent("The Fleet (Yuubari)") : undefined}.js`
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
const I18N_INIT = '@@KOOT@@I18N_INIT';
const I18N_SET_LOCALES = '@@KOOT@@I18N_SET_LOCALES';

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
const getLanguagelistFromState = ({
  server = {},
  routing
}) => {
  const fb_locale = routing && routing.locationBeforeTransitions && routing.locationBeforeTransitions.query ? routing.locationBeforeTransitions.query.fb_locale : null;
  let lang = server.lang;
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! exports provided: locales, setLocales, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locales", function() { return locales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocales", function() { return setLocales; });
/* global __KOOT_SSR__:false, __KOOT_SSR_STATE__:false */
const __devLocales = {};
/**
 * 根据当前环境，返回语言包对象的引用
 * - 客户端: 当前语种的语言包对象 (仅当多语言类型为 `store` 时)
 * - 服务器端: 所有语种语言包合集对象
 * @returns {Object}
 */

const getLocalesObject = () => {
  if (true) {
    if (false) {} else if (typeof __KOOT_SSR__ === 'object') return __KOOT_SSR__.locales;
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
/* harmony default export */ __webpack_exports__["default"] = (locales);

/***/ }),

/***/ "./node_modules/koot/i18n/parse-language-list.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/i18n/parse-language-list.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-eval */
const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

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

  return path.extname(file) === '.json' ? fs.readJsonSync(file) : eval(`require("${file.replace(/\\/g, '\\\\')}")`);
};

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
/* harmony import */ var _parse_language_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parse_language_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-language-list-from-state */ "./node_modules/koot/i18n/get-language-list-from-state.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse-locale-id */ "./node_modules/koot/i18n/parse-locale-id.js");
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-types */ "./node_modules/koot/i18n/action-types.js");


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

const actionInit = state => {
  // setLocaleId(localeId)
  const localeId =  true ? init(_parse_language_list__WEBPACK_IMPORTED_MODULE_0___default()(typeof state === 'object' ? Object(_get_language_list_from_state__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : state), state.localeId) : undefined; // setLocaleId(localeId)

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

const init = (langList = [], localeId) => {
  if (true) {
    // console.log(locales[localeId])
    if (typeof langList === 'string') if (langList.indexOf(';') > -1) langList = _parse_language_list__WEBPACK_IMPORTED_MODULE_0___default()(langList);else return init([langList], localeId);
    const parsed = _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default()(langList); // if (parsed) setLocaleId(parsed)
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
/* harmony import */ var _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_parse_locale_id__WEBPACK_IMPORTED_MODULE_2__);
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

const getLangFromCtx = ctx => {
  if (!_is_enabled__WEBPACK_IMPORTED_MODULE_4___default()()) return ''; // const localeIds = getLocaleIds()
  // 根据项目设置，从 URL 中抽取语种 ID

  if (false) {} else if (false) {} else {
    if (ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]]) {
      if (_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a.includes(ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]])) return ctx.query[_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]];
      ctx.redirect(ctx.url.replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]}=(.+)$`), '').replace(new RegExp(`(\\?|&)${_defaults_defines__WEBPACK_IMPORTED_MODULE_0__["changeLocaleQueryKey"]}=(.+)&`), ''));
      return _locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0];
    }
  } // 如果上一步没有结果，从 COOKIE 中获取
  // const cookies = cookie.parse(ctx.request.header.cookie || '')
  // if (cookies[process.env.KOOT_I18N_COOKIE_KEY] && cookies[process.env.KOOT_I18N_COOKIE_KEY] !== 'null')
  //     return cookies[process.env.KOOT_I18N_COOKIE_KEY]


  const cookieValue = ctx.cookies.get("spLocaleId");

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
    const localeId = _parse_locale_id__WEBPACK_IMPORTED_MODULE_2___default()(ctx.header['accept-language']);
    if (localeId) return setLocale(localeId, ctx);
  } // 如果上一步没有结果，返回项目默认语种


  return setLocale(_locale_ids__WEBPACK_IMPORTED_MODULE_1___default.a[0], ctx);
};

/* harmony default export */ __webpack_exports__["default"] = (getLangFromCtx);
/**
 * 服务器环境: 设置 cookie
 * @param {*} localeId
 */

const setLocale = (localeId, ctx) => {
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


const {
  createStore,
  ...reduxForCreateStore
} = _React_redux__WEBPACK_IMPORTED_MODULE_1__;

/**
 * 通用的高阶组件/方法的装饰器
 * @type {Function}
 */

 // ============================================================================

const getLocaleId = () => {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_LOCALEID__ === 'undefined') return '';
    return __KOOT_LOCALEID__ || '';
  }
};
const resetLocaleId = () => localeId = getLocaleId();
let localeId = (() => getLocaleId())(); // ============================================================================

const getStore = () => {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_STORE__ === 'undefined') return '';
    return __KOOT_STORE__;
  }
};
const resetStore = () => store = getStore();
let store = (() => getStore())(); // ============================================================================

const getHistory = () => {
  if (false) {}

  if (true) {
    if (false) {}
    if (typeof __KOOT_HISTORY__ === 'undefined') return '';
    return __KOOT_HISTORY__;
  }
};
const resetHistory = () => history = getHistory();
let history = (() => getHistory())(); // ============================================================================

const getCache = localeId => {
  if (!_React_is_render_safe__WEBPACK_IMPORTED_MODULE_0___default()()) return {};

  if (false) {}

  if (true) {
    const SSR =  false ? undefined : __KOOT_SSR__;
    const cache = SSR.globalCache;
    if (!cache) return {};
    if (localeId === true) return cache.get(getLocaleId());
    if (localeId) return cache.get(localeId) || {};
    return cache.get('__');
  }
}; // ============================================================================

const getCtx = () => {
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

const Koa = __webpack_require__(/*! koa */ "koa");

const helmet = __webpack_require__(/*! koa-helmet */ "koa-helmet");

const removeSlashes = __webpack_require__(/*! ./koa-middlewares/remove-slashes */ "./node_modules/koot/libs/koa-middlewares/remove-slashes.js");
/**
 * 创建 Koa App
 * @returns {Object} app
 */


const create = () => {
  const app = new Koa();
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
const errorMsg = (type, msg) => {
  if (typeof type === 'string' && typeof msg === 'string') return `${type}::${msg}`;
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

const itemsBlacklist = ['localeId', 'realtimeLocation', 'routing', 'server'];
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

const filter = oldState => itemsBlacklist.reduce((state, item) => {
  const {
    [item]: _,
    ...rest
  } = state;
  return rest;
}, oldState);

module.exports = filter;

/***/ }),

/***/ "./node_modules/koot/libs/get-dev-routes.js":
/*!**************************************************!*\
  !*** ./node_modules/koot/libs/get-dev-routes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const glob = __webpack_require__(/*! glob */ "glob");

const getDirDevDll = __webpack_require__(/*! ./get-dir-dev-dll */ "./node_modules/koot/libs/get-dir-dev-dll.js");
/**
 * @typedef {Object} RouteMap
 * @property {string} file - 硬盘路径
 * @property {string} route - 访问路由/pathname
 */

/**
 * _仅针对开发环境_ 获取静态文件路由，这些文件通常临时生成并保存在硬盘中
 * @return {RouteMap[]}
 */


module.exports = () => {
  if (true) return [];
  const dirDevDll = getDirDevDll();
  return glob.sync(path.resolve(dirDevDll, '**/*'), {
    dot: true
  }).map(file => {
    let route = path.relative(dirDevDll, file);
    if (route.substr(0, 1) !== '/') route = '/' + route;
    return {
      file,
      route
    };
  });
};

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-dll.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-dll.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getDirDevTmp = __webpack_require__(/*! ./get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");
/**
 * _仅针对开发环境_ 获取 DLL 文件存放路径
 * @param {String} cwd
 * @param {String} [stage]
 * @returns {String}
 */


module.exports = (cwd, stage = process.env.WEBPACK_BUILD_STAGE) => path.resolve(getDirDevTmp(cwd), 'dll', stage);

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dev-tmp.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dev-tmp.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取客户端打包结果 public 目录名
 * @returns {String}
 */
module.exports = () =>  false ? undefined : `public`;

/***/ }),

/***/ "./node_modules/koot/libs/get-dir-dist-public.js":
/*!*******************************************************!*\
  !*** ./node_modules/koot/libs/get-dir-dist-public.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports) {

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
module.exports = (...args) => {
  console.log(__webpack_require__(/*! ./get-log-msg */ "./node_modules/koot/libs/get-log-msg.js")(...args));
};

/***/ }),

/***/ "./node_modules/koot/libs/validate-port.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/libs/validate-port.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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


  if (typeof process.env.SERVER_PORT === 'undefined' && "string" !== 'undefined') process.env.SERVER_PORT = "8080";
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

/***/ "./node_modules/koot/utils/get-chunkmap-path.js":
/*!******************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap-path.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getDistPath = __webpack_require__(/*! ./get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

const {
  buildManifestFilename
} = __webpack_require__(/*! ../defaults/before-build */ "./node_modules/koot/defaults/before-build.js");
/**
 * 获取打包文件对应表 (chunkmap) 的文件路径
 * @param {string} [dist] 打包结果目录，默认为项目指定的路径
 * @returns {string}
 */


module.exports = (dist = getDistPath()) => {
  if (false) {}
  return path.resolve(dist, buildManifestFilename);
};

/***/ }),

/***/ "./node_modules/koot/utils/get-chunkmap.js":
/*!*************************************************!*\
  !*** ./node_modules/koot/utils/get-chunkmap.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

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
  if (localeId === true) return getChunkmap(getFullResult || undefined, true);
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
      chunkmap = JSON.parse("{\".zh\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/chunk.c33a37ea2e72fa4900dc.js\",\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"public/includes/entry.465976e054485d3b6bf1.js\"],\"polyfill\":[\"public/includes/chunk.c33a37ea2e72fa4900dc.js\",\"public/includes/entry.d0d5ffc58845a6742972.js\"],\"client\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.c33a37ea2e72fa4900dc.js\",\"public/includes/entry.67fc0c204539e3f6fe17.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.c33a37ea2e72fa4900dc.js\",\"public/includes/entry.2bf25266b5118f92d4e1.js\"]},\".files\":{\"libs-others.js\":\"public/includes/chunk.c33a37ea2e72fa4900dc.js\",\"libs.js\":\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"About_Page.js\":\"public/includes/chunk.f69ff0b549d2a5040d0b.js\",\"Academy_Entry_Page.js\":\"public/includes/chunk.20192097698009b3c7a0.js\",\"Arsenal_Page.js\":\"public/includes/chunk.3a23c53e4b8ca79caa81.js\",\"Equipment_Details_Page.js\":\"public/includes/chunk.dd68d07828c0b0b906f7.js\",\"Equipment_List_Page.js\":\"public/includes/chunk.a2a9a4958b72d4b6a23f.js\",\"Expeditions_List_Page.js\":\"public/includes/chunk.c9182deef45e7b4e0a07.js\",\"Extra_CGs_Page.js\":\"public/includes/chunk.3c489ac7a791f773664b.js\",\"Fleet_Builder_Entry_Page.js\":\"public/includes/chunk.845c9d60c5b7326a6a6f.js\",\"Fleet_Builder_Fleet_Details_Page.js\":\"public/includes/chunk.7ea1c1f7bc78de26551d.js\",\"Fleet_Builder_WIP_Blank_Page.js\":\"public/includes/chunk.12f7e93f3a07bef9446f.js\",\"Home_Page.js\":\"public/includes/chunk.949ccbc1a59d066ee7f6.js\",\"People_Details_Page.js\":\"public/includes/chunk.64635bc3e21a6a1804e7.js\",\"People_List_Page.js\":\"public/includes/chunk.bd13c2d499e378b3505b.js\",\"Ship_Details_Page.css\":\"public/includes/extract.15.3a32523282a00ed4aea5.css\",\"Ship_Details_Page.js\":\"public/includes/chunk.3a32523282a00ed4aea5.js\",\"Ship_List_Page.js\":\"public/includes/chunk.d9a215ac35e21a5c61e7.js\",\"Sorties_List_Page.js\":\"public/includes/chunk.03620b97bd77b24bbf69.js\",\"TP_Calculator_Single-Page-Tool.js\":\"public/includes/chunk.9cd1ee4cbdde79c38a54.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.2bf25266b5118f92d4e1.js\",\"client.js\":\"public/includes/entry.67fc0c204539e3f6fe17.js\",\"critical.css\":\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"critical.js\":\"public/includes/entry.465976e054485d3b6bf1.js\",\"polyfill.js\":\"public/includes/entry.d0d5ffc58845a6742972.js\",\"vendors~Ship_Details_Page.css\":\"public/includes/extract.23.bb71148b4be9d18229d2.css\",\"vendors~Ship_Details_Page.js\":\"public/includes/chunk.bb71148b4be9d18229d2.js\",\"vendors~nedb.js\":\"public/includes/chunk.5cc5ae8eeebd2d9a28a0.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.086a9c1589efe7a7a1a2b2a8d685aa36.small.css\"},\"service-worker\":[\"public/service-worker.zh.js\"]},\".en\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/chunk.b5839ca00151d42a9ea4.js\",\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"public/includes/entry.465976e054485d3b6bf1.js\"],\"polyfill\":[\"public/includes/chunk.b5839ca00151d42a9ea4.js\",\"public/includes/entry.d0d5ffc58845a6742972.js\"],\"client\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.b5839ca00151d42a9ea4.js\",\"public/includes/entry.73bd3baf4afb87f081b6.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.b5839ca00151d42a9ea4.js\",\"public/includes/entry.063bdf21a3cd5ecd7286.js\"]},\".files\":{\"libs-others.js\":\"public/includes/chunk.b5839ca00151d42a9ea4.js\",\"libs.js\":\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"About_Page.js\":\"public/includes/chunk.45de4465c3aa85db23ce.js\",\"Academy_Entry_Page.js\":\"public/includes/chunk.41e7d29d1b26cd05c54a.js\",\"Arsenal_Page.js\":\"public/includes/chunk.37d6934108e6f9eae695.js\",\"Equipment_Details_Page.js\":\"public/includes/chunk.a8c2305e3e13095167e8.js\",\"Equipment_List_Page.js\":\"public/includes/chunk.e59ef5e5f561eaf4c661.js\",\"Expeditions_List_Page.js\":\"public/includes/chunk.3e1dfd0c11031fbe55cb.js\",\"Extra_CGs_Page.js\":\"public/includes/chunk.f74322d208be71a0147b.js\",\"Fleet_Builder_Entry_Page.js\":\"public/includes/chunk.034ebc65c6605815302b.js\",\"Fleet_Builder_Fleet_Details_Page.js\":\"public/includes/chunk.06bf88ae4eb3eca7073a.js\",\"Fleet_Builder_WIP_Blank_Page.js\":\"public/includes/chunk.7016c8ea57c249001bda.js\",\"Home_Page.js\":\"public/includes/chunk.4c48bab7a8c31133e53b.js\",\"People_Details_Page.js\":\"public/includes/chunk.de2c7f74c3ecb2892039.js\",\"People_List_Page.js\":\"public/includes/chunk.56ee4294dd10c5738543.js\",\"Ship_Details_Page.css\":\"public/includes/extract.15.58a3f9679648617c2f1b.css\",\"Ship_Details_Page.js\":\"public/includes/chunk.58a3f9679648617c2f1b.js\",\"Ship_List_Page.js\":\"public/includes/chunk.ee0b535198f36e25fe2f.js\",\"Sorties_List_Page.js\":\"public/includes/chunk.44bc4a3a3ef3d2464cf4.js\",\"TP_Calculator_Single-Page-Tool.js\":\"public/includes/chunk.96b61dfac146001c29a5.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.063bdf21a3cd5ecd7286.js\",\"client.js\":\"public/includes/entry.73bd3baf4afb87f081b6.js\",\"critical.css\":\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"critical.js\":\"public/includes/entry.465976e054485d3b6bf1.js\",\"polyfill.js\":\"public/includes/entry.d0d5ffc58845a6742972.js\",\"vendors~Ship_Details_Page.css\":\"public/includes/extract.23.bb71148b4be9d18229d2.css\",\"vendors~Ship_Details_Page.js\":\"public/includes/chunk.bb71148b4be9d18229d2.js\",\"vendors~nedb.js\":\"public/includes/chunk.5cc5ae8eeebd2d9a28a0.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.086a9c1589efe7a7a1a2b2a8d685aa36.small.css\"},\"service-worker\":[\"public/service-worker.en.js\"]},\".ja\":{\".public\":\"public/\",\".out\":\"public/\",\".entrypoints\":{\"critical\":[\"public/includes/chunk.da6109e38e436e97ef37.js\",\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"public/includes/entry.465976e054485d3b6bf1.js\"],\"polyfill\":[\"public/includes/chunk.da6109e38e436e97ef37.js\",\"public/includes/entry.d0d5ffc58845a6742972.js\"],\"client\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.da6109e38e436e97ef37.js\",\"public/includes/entry.1b28ccf76781eb32b577.js\"],\"__KOOT__CLIENT__RUN__FIRST__\":[\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"public/includes/chunk.da6109e38e436e97ef37.js\",\"public/includes/entry.063bdf21a3cd5ecd7286.js\"]},\".files\":{\"libs-others.js\":\"public/includes/chunk.da6109e38e436e97ef37.js\",\"libs.js\":\"public/includes/chunk.84a8740c47fc06ca417b.js\",\"About_Page.js\":\"public/includes/chunk.bb56dd0f08fc08d3ff88.js\",\"Academy_Entry_Page.js\":\"public/includes/chunk.e10a3452ddb0a4309c50.js\",\"Arsenal_Page.js\":\"public/includes/chunk.4c12165cc0a0324fe65e.js\",\"Equipment_Details_Page.js\":\"public/includes/chunk.e7bb888ba82537e4b79b.js\",\"Equipment_List_Page.js\":\"public/includes/chunk.e55d622c53d5bd0f168a.js\",\"Expeditions_List_Page.js\":\"public/includes/chunk.dd1de61c29bdd7390166.js\",\"Extra_CGs_Page.js\":\"public/includes/chunk.3235786999d6de80f709.js\",\"Fleet_Builder_Entry_Page.js\":\"public/includes/chunk.d91f7bd2b78f05b1ff8d.js\",\"Fleet_Builder_Fleet_Details_Page.js\":\"public/includes/chunk.9cbacd2d2f12572d8254.js\",\"Fleet_Builder_WIP_Blank_Page.js\":\"public/includes/chunk.db11eff891225845c751.js\",\"Home_Page.js\":\"public/includes/chunk.949ccbc1a59d066ee7f6.js\",\"People_Details_Page.js\":\"public/includes/chunk.0ba4827a86da3c58914c.js\",\"People_List_Page.js\":\"public/includes/chunk.aef03d2f63723f1b3bfc.js\",\"Ship_Details_Page.css\":\"public/includes/extract.15.fef71f090ab6747f2846.css\",\"Ship_Details_Page.js\":\"public/includes/chunk.fef71f090ab6747f2846.js\",\"Ship_List_Page.js\":\"public/includes/chunk.252893f3b7c5455f2ee7.js\",\"Sorties_List_Page.js\":\"public/includes/chunk.ae31c731fb8f421817e3.js\",\"TP_Calculator_Single-Page-Tool.js\":\"public/includes/chunk.a763b8d64d8dba32809d.js\",\"__KOOT__CLIENT__RUN__FIRST__.js\":\"public/includes/entry.063bdf21a3cd5ecd7286.js\",\"client.js\":\"public/includes/entry.1b28ccf76781eb32b577.js\",\"critical.css\":\"public/includes/extract.21.465976e054485d3b6bf1.css\",\"critical.js\":\"public/includes/entry.465976e054485d3b6bf1.js\",\"polyfill.js\":\"public/includes/entry.d0d5ffc58845a6742972.js\",\"vendors~Ship_Details_Page.css\":\"public/includes/extract.23.bb71148b4be9d18229d2.css\",\"vendors~Ship_Details_Page.js\":\"public/includes/chunk.bb71148b4be9d18229d2.js\",\"vendors~nedb.js\":\"public/includes/chunk.5cc5ae8eeebd2d9a28a0.js\",\"__KOOT__EXTRACT__CSS__.css\":\"public/includes/extract.all.086a9c1589efe7a7a1a2b2a8d685aa36.small.css\"},\"service-worker\":[\"public/service-worker.ja.js\"]}}");
    } catch (e) {
      chunkmap = false;
    }

    if (typeof chunkmap !== 'object' && typeof getDistPath() === 'string') {
      chunkmap = fs.readJsonSync(getChunkmapPath());
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* global
    __KOOT_LOCALEID__: false,
*/
const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

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
/*! no static exports found */
/***/ (function(module, exports) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const getDirDevTmp = __webpack_require__(/*! ../libs/get-dir-dev-tmp */ "./node_modules/koot/libs/get-dir-dev-tmp.js");

module.exports = cwd => path.resolve(getDirDevTmp(cwd), '.server-start');

/***/ }),

/***/ "./node_modules/koot/utils/get-public-dir.js":
/*!***************************************************!*\
  !*** ./node_modules/koot/utils/get-public-dir.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 获取 webpack-dev-server 端口号
 * @returns {Number}
 */
module.exports = () => {
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


var Symbol = root.Symbol;
module.exports = Symbol;

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

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");
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

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");
/** Used as references for various `Number` constants. */


var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */

var symbolProto = Symbol ? Symbol.prototype : undefined,
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

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
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

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");
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

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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

  var type = typeof index;

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

  var type = typeof value;

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

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
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

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");
/** Detect free variable `self`. */


var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
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

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");
/** Detect free variable `exports`. */


var freeExports =  true && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */

var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
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

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
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

  var memoized = function () {
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

/***/ "./node_modules/simple-git/promise.js":
/*!********************************************!*\
  !*** ./node_modules/simple-git/promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise === 'undefined') {
  throw new ReferenceError("Promise wrappers must be enabled to use the promise API");
}

function isAsyncCall(fn) {
  return /^[^)]+then\s*\)/.test(fn) || /\._run\(/.test(fn);
}

module.exports = function (baseDir) {
  var Git = __webpack_require__(/*! ./src/git */ "./node_modules/simple-git/src/git.js");

  var gitFactory = __webpack_require__(/*! ./src */ "./node_modules/simple-git/src/index.js");

  var git;
  var chain = Promise.resolve();

  try {
    git = gitFactory(baseDir);
  } catch (e) {
    chain = Promise.reject(e);
  }

  return Object.keys(Git.prototype).reduce(function (promiseApi, fn) {
    if (/^_|then/.test(fn)) {
      return promiseApi;
    }

    if (isAsyncCall(Git.prototype[fn])) {
      promiseApi[fn] = git ? asyncWrapper(fn, git) : function () {
        return chain;
      };
    } else {
      promiseApi[fn] = git ? syncWrapper(fn, git, promiseApi) : function () {
        return promiseApi;
      };
    }

    return promiseApi;
  }, {});

  function asyncWrapper(fn, git) {
    return function () {
      var args = [].slice.call(arguments);

      if (typeof args[args.length] === 'function') {
        throw new TypeError("Promise interface requires that handlers are not supplied inline, " + "trailing function not allowed in call to " + fn);
      }

      return chain.then(function () {
        return new Promise(function (resolve, reject) {
          args.push(function (err, result) {
            if (err) {
              return reject(toError(err));
            }

            resolve(result);
          });
          git[fn].apply(git, args);
        });
      });
    };
  }

  function syncWrapper(fn, git, api) {
    return function () {
      git[fn].apply(git, arguments);
      return api;
    };
  }
};

function toError(error) {
  if (error instanceof Error) {
    return error;
  }

  if (typeof error === 'string') {
    return new Error(error);
  }

  return Object.create(new Error(error), {
    git: {
      value: error
    }
  });
}

/***/ }),

/***/ "./node_modules/simple-git/src/git.js":
/*!********************************************!*\
  !*** ./node_modules/simple-git/src/git.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  'use strict';

  var debug = __webpack_require__(/*! debug */ "debug")('simple-git');

  var deferred = __webpack_require__(/*! ./util/deferred */ "./node_modules/simple-git/src/util/deferred.js");

  var exists = __webpack_require__(/*! ./util/exists */ "./node_modules/simple-git/src/util/exists.js");

  var NOOP = function () {};

  var responses = __webpack_require__(/*! ./responses */ "./node_modules/simple-git/src/responses/index.js");
  /**
   * Git handling for node. All public functions can be chained and all `then` handlers are optional.
   *
   * @param {string} baseDir base directory for all processes to run
   *
   * @param {Object} ChildProcess The ChildProcess module
   * @param {Function} Buffer The Buffer implementation to use
   *
   * @constructor
   */


  function Git(baseDir, ChildProcess, Buffer) {
    this._baseDir = baseDir;
    this._runCache = [];
    this.ChildProcess = ChildProcess;
    this.Buffer = Buffer;
  }
  /**
   * @type {string} The command to use to reference the git binary
   */


  Git.prototype._command = 'git';
  /**
   * @type {[key: string]: string} An object of key=value pairs to be passed as environment variables to the
   *                               spawned child process.
   */

  Git.prototype._env = null;
  /**
   * @type {Function} An optional handler to use when a child process is created
   */

  Git.prototype._outputHandler = null;
  /**
   * @type {boolean} Property showing whether logging will be silenced - defaults to true in a production environment
   */

  Git.prototype._silentLogging = /prod/.test("development");
  /**
   * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
   * the system path, or a fully qualified path to the executable.
   *
   * @param {string} command
   * @returns {Git}
   */

  Git.prototype.customBinary = function (command) {
    this._command = command;
    return this;
  };
  /**
   * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
   * a single object to entirely replace the current environment variables.
   *
   * @param {string|Object} name
   * @param {string} [value]
   * @returns {Git}
   */


  Git.prototype.env = function (name, value) {
    if (arguments.length === 1 && typeof name === 'object') {
      this._env = name;
    } else {
      (this._env = this._env || {})[name] = value;
    }

    return this;
  };
  /**
   * Sets the working directory of the subsequent commands.
   *
   * @param {string} workingDirectory
   * @param {Function} [then]
   * @returns {Git}
   */


  Git.prototype.cwd = function (workingDirectory, then) {
    var git = this;
    var next = Git.trailingFunctionArgument(arguments);
    return this.exec(function () {
      git._baseDir = workingDirectory;

      if (!exists(workingDirectory, exists.FOLDER)) {
        Git.exception(git, 'Git.cwd: cannot change to non-directory "' + workingDirectory + '"', next);
      } else {
        next && next(null, workingDirectory);
      }
    });
  };
  /**
   * Sets a handler function to be called whenever a new child process is created, the handler function will be called
   * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
   *
   * @example
   * require('simple-git')
   *    .outputHandler(function (command, stdout, stderr) {
   *       stdout.pipe(process.stdout);
   *    })
   *    .checkout('https://github.com/user/repo.git');
   *
   * @see https://nodejs.org/api/child_process.html#child_process_class_childprocess
   * @see https://nodejs.org/api/stream.html#stream_class_stream_readable
   * @param {Function} outputHandler
   * @returns {Git}
   */


  Git.prototype.outputHandler = function (outputHandler) {
    this._outputHandler = outputHandler;
    return this;
  };
  /**
   * Initialize a git repo
   *
   * @param {Boolean} [bare=false]
   * @param {Function} [then]
   */


  Git.prototype.init = function (bare, then) {
    var commands = ['init'];
    var next = Git.trailingFunctionArgument(arguments);

    if (bare === true) {
      commands.push('--bare');
    }

    return this._run(commands, function (err) {
      next && next(err);
    });
  };
  /**
   * Check the status of the local repo
   *
   * @param {Function} [then]
   */


  Git.prototype.status = function (then) {
    return this._run(['status', '--porcelain', '-b', '-u'], Git._responseHandler(then, 'StatusSummary'));
  };
  /**
   * List the stash(s) of the local repo
   *
   * @param {Object|Array} [options]
   * @param {Function} [then]
   */


  Git.prototype.stashList = function (options, then) {
    var handler = Git.trailingFunctionArgument(arguments);
    var opt = (handler === then ? options : null) || {};
    var splitter = opt.splitter || requireResponseHandler('ListLogSummary').SPLITTER;
    var command = ["stash", "list", "--pretty=format:" + requireResponseHandler('ListLogSummary').START_BOUNDARY + "%H %ai %s%d %aN %ae".replace(/\s+/g, splitter) + requireResponseHandler('ListLogSummary').COMMIT_BOUNDARY];

    if (Array.isArray(opt)) {
      command = command.concat(opt);
    }

    return this._run(command, Git._responseHandler(handler, 'ListLogSummary', splitter));
  };
  /**
   * Stash the local repo
   *
   * @param {Object|Array} [options]
   * @param {Function} [then]
   */


  Git.prototype.stash = function (options, then) {
    var command = ['stash'];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    command.push.apply(command, Git.trailingArrayArgument(arguments));
    return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
  };
  /**
   * Clone a git repo
   *
   * @param {string} repoPath
   * @param {string} localPath
   * @param {String[]} [options] Optional array of options to pass through to the clone command
   * @param {Function} [then]
   */


  Git.prototype.clone = function (repoPath, localPath, options, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var command = ['clone'].concat(Git.trailingArrayArgument(arguments));

    for (var i = 0, iMax = arguments.length; i < iMax; i++) {
      if (typeof arguments[i] === 'string') {
        command.push(arguments[i]);
      }
    }

    return this._run(command, function (err, data) {
      next && next(err, data);
    });
  };
  /**
   * Mirror a git repo
   *
   * @param {string} repoPath
   * @param {string} localPath
   * @param {Function} [then]
   */


  Git.prototype.mirror = function (repoPath, localPath, then) {
    return this.clone(repoPath, localPath, ['--mirror'], then);
  };
  /**
   * Moves one or more files to a new destination.
   *
   * @see https://git-scm.com/docs/git-mv
   *
   * @param {string|string[]} from
   * @param {string} to
   * @param {Function} [then]
   */


  Git.prototype.mv = function (from, to, then) {
    var handler = Git.trailingFunctionArgument(arguments);
    var command = [].concat(from);
    command.unshift('mv', '-v');
    command.push(to);

    this._run(command, Git._responseHandler(handler, 'MoveSummary'));
  };
  /**
   * Internally uses pull and tags to get the list of tags then checks out the latest tag.
   *
   * @param {Function} [then]
   */


  Git.prototype.checkoutLatestTag = function (then) {
    var git = this;
    return this.pull(function () {
      git.tags(function (err, tags) {
        git.checkout(tags.latest, then);
      });
    });
  };
  /**
   * Adds one or more files to source control
   *
   * @param {string|string[]} files
   * @param {Function} [then]
   */


  Git.prototype.add = function (files, then) {
    return this._run(['add'].concat(files), function (err, data) {
      then && then(err);
    });
  };
  /**
   * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
   * files will be committed.
   *
   * @param {string|string[]} message
   * @param {string|string[]} [files]
   * @param {Object} [options]
   * @param {Function} [then]
   */


  Git.prototype.commit = function (message, files, options, then) {
    var handler = Git.trailingFunctionArgument(arguments);
    var command = ['commit'];
    [].concat(message).forEach(function (message) {
      command.push('-m', message);
    });
    [].push.apply(command, [].concat(typeof files === "string" || Array.isArray(files) ? files : []));

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    return this._run(command, Git._responseHandler(handler, 'CommitSummary'));
  };
  /**
   * Gets a function to be used for logging.
   *
   * @param {string} level
   * @param {string} [message]
   *
   * @returns {Function}
   * @private
   */


  Git.prototype._getLog = function (level, message) {
    var log = this._silentLogging ? NOOP : console[level].bind(console);

    if (arguments.length > 1) {
      log(message);
    }

    return log;
  };
  /**
   * Pull the updated contents of the current repo
   *
   * @param {string} [remote] When supplied must also include the branch
   * @param {string} [branch] When supplied must also include the remote
   * @param {Object} [options] Optionally include set of options to merge into the command
   * @param {Function} [then]
   */


  Git.prototype.pull = function (remote, branch, options, then) {
    var command = ["pull"];
    var handler = Git.trailingFunctionArgument(arguments);

    if (typeof remote === 'string' && typeof branch === 'string') {
      command.push(remote, branch);
    }

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    return this._run(command, Git._responseHandler(handler, 'PullSummary'));
  };
  /**
   * Fetch the updated contents of the current repo.
   *
   * @example
   *   .fetch('upstream', 'master') // fetches from master on remote named upstream
   *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
   *
   * @param {string} [remote]
   * @param {string} [branch]
   * @param {Function} [then]
   */


  Git.prototype.fetch = function (remote, branch, then) {
    var command = ["fetch"];
    var next = Git.trailingFunctionArgument(arguments);

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    if (typeof remote === 'string' && typeof branch === 'string') {
      command.push(remote, branch);
    }

    if (Array.isArray(remote)) {
      command = command.concat(remote);
    }

    return this._run(command, Git._responseHandler(next, 'FetchSummary'), {
      concatStdErr: true
    });
  };
  /**
   * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
   * a production environment.
   *
   * @param {boolean} silence
   * @returns {Git}
   */


  Git.prototype.silent = function (silence) {
    this._silentLogging = !!silence;
    return this;
  };
  /**
   * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
   * sort the tags by that property instead of using the default semantic versioning sort.
   *
   * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
   *
   * @param {Object} [options]
   * @param {Function} [then]
   */


  Git.prototype.tags = function (options, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var command = ['-l'];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    var hasCustomSort = command.some(function (option) {
      return /^--sort=/.test(option);
    });
    return this.tag(command, Git._responseHandler(next, 'TagList', [hasCustomSort]));
  };
  /**
   * Rebases the current working copy. Options can be supplied either as an array of string parameters
   * to be sent to the `git rebase` command, or a standard options object.
   *
   * @param {Object|String[]} [options]
   * @param {Function} [then]
   * @returns {Git}
   */


  Git.prototype.rebase = function (options, then) {
    var command = ['rebase'];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    command.push.apply(command, Git.trailingArrayArgument(arguments));
    return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
  };
  /**
   * Reset a repo
   *
   * @param {string|string[]} [mode=soft] Either an array of arguments supported by the 'git reset' command, or the
   *                                        string value 'soft' or 'hard' to set the reset mode.
   * @param {Function} [then]
   */


  Git.prototype.reset = function (mode, then) {
    var command = ['reset'];
    var next = Git.trailingFunctionArgument(arguments);

    if (next === mode || typeof mode === 'string' || !mode) {
      var modeStr = ['mixed', 'soft', 'hard'].includes(mode) ? mode : 'soft';
      command.push('--' + modeStr);
    } else if (Array.isArray(mode)) {
      command.push.apply(command, mode);
    }

    return this._run(command, function (err) {
      next && next(err || null);
    });
  };
  /**
   * Revert one or more commits in the local working copy
   *
   * @param {string} commit The commit to revert. Can be any hash, offset (eg: `HEAD~2`) or range (eg: `master~5..master~2`)
   * @param {Object} [options] Optional options object
   * @param {Function} [then]
   */


  Git.prototype.revert = function (commit, options, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var command = ['revert'];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    if (typeof commit !== 'string') {
      return this.exec(function () {
        next && next(new TypeError("Commit must be a string"));
      });
    }

    command.push(commit);
    return this._run(command, function (err) {
      next && next(err || null);
    });
  };
  /**
   * Add a lightweight tag to the head of the current branch
   *
   * @param {string} name
   * @param {Function} [then]
   */


  Git.prototype.addTag = function (name, then) {
    if (typeof name !== "string") {
      return this.exec(function () {
        then && then(new TypeError("Git.addTag requires a tag name"));
      });
    }

    var command = [name];
    return then ? this.tag(command, then) : this.tag(command);
  };
  /**
   * Add an annotated tag to the head of the current branch
   *
   * @param {string} tagName
   * @param {string} tagMessage
   * @param {Function} [then]
   */


  Git.prototype.addAnnotatedTag = function (tagName, tagMessage, then) {
    return this.tag(['-a', '-m', tagMessage, tagName], function (err) {
      then && then(err);
    });
  };
  /**
   * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
   * by supplying either a string or array of strings as the `what` parameter.
   *
   * @param {string|string[]} what One or more commands to pass to `git checkout`
   * @param {Function} [then]
   */


  Git.prototype.checkout = function (what, then) {
    var command = ['checkout'];
    command = command.concat(what);
    return this._run(command, function (err, data) {
      then && then(err, !err && this._parseCheckout(data));
    });
  };
  /**
   * Check out a remote branch
   *
   * @param {string} branchName name of branch
   * @param {string} startPoint (e.g origin/development)
   * @param {Function} [then]
   */


  Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
    return this.checkout(['-b', branchName, startPoint], then);
  };
  /**
   * Check out a local branch
   *
   * @param {string} branchName of branch
   * @param {Function} [then]
   */


  Git.prototype.checkoutLocalBranch = function (branchName, then) {
    return this.checkout(['-b', branchName], then);
  };
  /**
   * Delete a local branch
   *
   * @param {string} branchName name of branch
   * @param {Function} [then]
   */


  Git.prototype.deleteLocalBranch = function (branchName, then) {
    return this.branch(['-d', branchName], then);
  };
  /**
   * List all branches
   *
   * @param {Object | string[]} [options]
   * @param {Function} [then]
   */


  Git.prototype.branch = function (options, then) {
    var isDelete, responseHandler;
    var next = Git.trailingFunctionArgument(arguments);
    var command = ['branch'];
    command.push.apply(command, Git.trailingArrayArgument(arguments));

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    if (!arguments.length || next === options) {
      command.push('-a');
    }

    isDelete = ['-d', '-D', '--delete'].reduce(function (isDelete, flag) {
      return isDelete || command.indexOf(flag) > 0;
    }, false);

    if (command.indexOf('-v') < 0) {
      command.splice(1, 0, '-v');
    }

    responseHandler = isDelete ? Git._responseHandler(next, 'BranchDeleteSummary', false) : Git._responseHandler(next, 'BranchSummary');
    return this._run(command, responseHandler);
  };
  /**
   * Return list of local branches
   *
   * @param {Function} [then]
   */


  Git.prototype.branchLocal = function (then) {
    return this.branch(['-v'], then);
  };
  /**
   * Add config to local git instance
   *
   * @param {string} key configuration key (e.g user.name)
   * @param {string} value for the given key (e.g your name)
   * @param {Function} [then]
   */


  Git.prototype.addConfig = function (key, value, then) {
    return this._run(['config', '--local', key, value], function (err, data) {
      then && then(err, !err && data);
    });
  };
  /**
   * Executes any command against the git binary.
   *
   * @param {string[]|Object} commands
   * @param {Function} [then]
   *
   * @returns {Git}
   */


  Git.prototype.raw = function (commands, then) {
    var command = [];

    if (Array.isArray(commands)) {
      command = commands.slice(0);
    } else {
      Git._appendOptions(command, Git.trailingOptionsArgument(arguments));
    }

    var next = Git.trailingFunctionArgument(arguments);

    if (!command.length) {
      return this.exec(function () {
        next && next(new Error('Raw: must supply one or more command to execute'), null);
      });
    }

    return this._run(command, function (err, data) {
      next && next(err, !err && data || null);
    });
  };
  /**
   * Add a submodule
   *
   * @param {string} repo
   * @param {string} path
   * @param {Function} [then]
   */


  Git.prototype.submoduleAdd = function (repo, path, then) {
    return this._run(['submodule', 'add', repo, path], function (err) {
      then && then(err);
    });
  };
  /**
   * Update submodules
   *
   * @param {string[]} [args]
   * @param {Function} [then]
   */


  Git.prototype.submoduleUpdate = function (args, then) {
    if (typeof args === 'string') {
      this._getLog('warn', 'Git#submoduleUpdate: args should be supplied as an array of individual arguments');
    }

    var next = Git.trailingFunctionArgument(arguments);
    var command = args !== next ? args : [];
    return this.subModule(['update'].concat(command), function (err, args) {
      next && next(err, args);
    });
  };
  /**
   * Initialize submodules
   *
   * @param {string[]} [args]
   * @param {Function} [then]
   */


  Git.prototype.submoduleInit = function (args, then) {
    if (typeof args === 'string') {
      this._getLog('warn', 'Git#submoduleInit: args should be supplied as an array of individual arguments');
    }

    var next = Git.trailingFunctionArgument(arguments);
    var command = args !== next ? args : [];
    return this.subModule(['init'].concat(command), function (err, args) {
      next && next(err, args);
    });
  };
  /**
   * Call any `git submodule` function with arguments passed as an array of strings.
   *
   * @param {string[]} options
   * @param {Function} [then]
   */


  Git.prototype.subModule = function (options, then) {
    if (!Array.isArray(options)) {
      return this.exec(function () {
        then && then(new TypeError("Git.subModule requires an array of arguments"));
      });
    }

    if (options[0] !== 'submodule') {
      options.unshift('submodule');
    }

    return this._run(options, function (err, data) {
      then && then(err || null, err ? null : data);
    });
  };
  /**
   * List remote
   *
   * @param {string[]} [args]
   * @param {Function} [then]
   */


  Git.prototype.listRemote = function (args, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var data = next === args || args === undefined ? [] : args;

    if (typeof data === 'string') {
      this._getLog('warn', 'Git#listRemote: args should be supplied as an array of individual arguments');
    }

    return this._run(['ls-remote'].concat(data), function (err, data) {
      next && next(err, data);
    });
  };
  /**
   * Adds a remote to the list of remotes.
   *
   * @param {string} remoteName Name of the repository - eg "upstream"
   * @param {string} remoteRepo Fully qualified SSH or HTTP(S) path to the remote repo
   * @param {Function} [then]
   * @returns {*}
   */


  Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
    return this._run(['remote', 'add', remoteName, remoteRepo], function (err) {
      then && then(err);
    });
  };
  /**
   * Removes an entry from the list of remotes.
   *
   * @param {string} remoteName Name of the repository - eg "upstream"
   * @param {Function} [then]
   * @returns {*}
   */


  Git.prototype.removeRemote = function (remoteName, then) {
    return this._run(['remote', 'remove', remoteName], function (err) {
      then && then(err);
    });
  };
  /**
   * Gets the currently available remotes, setting the optional verbose argument to true includes additional
   * detail on the remotes themselves.
   *
   * @param {boolean} [verbose=false]
   * @param {Function} [then]
   */


  Git.prototype.getRemotes = function (verbose, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var args = verbose === true ? ['-v'] : [];
    return this.remote(args, function (err, data) {
      next && next(err, !err && function () {
        return data.trim().split('\n').filter(Boolean).reduce(function (remotes, remote) {
          var detail = remote.trim().split(/\s+/);
          var name = detail.shift();

          if (!remotes[name]) {
            remotes[name] = remotes[remotes.length] = {
              name: name,
              refs: {}
            };
          }

          if (detail.length) {
            remotes[name].refs[detail.pop().replace(/[^a-z]/g, '')] = detail.pop();
          }

          return remotes;
        }, []).slice(0);
      }());
    });
  };
  /**
   * Call any `git remote` function with arguments passed as an array of strings.
   *
   * @param {string[]} options
   * @param {Function} [then]
   */


  Git.prototype.remote = function (options, then) {
    if (!Array.isArray(options)) {
      return this.exec(function () {
        then && then(new TypeError("Git.remote requires an array of arguments"));
      });
    }

    if (options[0] !== 'remote') {
      options.unshift('remote');
    }

    return this._run(options, function (err, data) {
      then && then(err || null, err ? null : data);
    });
  };
  /**
   * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
   * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
   *
   * @param {string} from
   * @param {string} to
   * @param {string[]} [options]
   * @param {Function} [then]
   */


  Git.prototype.mergeFromTo = function (from, to, options, then) {
    var commands = [from, to];
    var callback = Git.trailingFunctionArgument(arguments);

    if (Array.isArray(options)) {
      commands = commands.concat(options);
    }

    return this.merge(commands, callback);
  };
  /**
   * Runs a merge, `options` can be either an array of arguments
   * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
   * or an options object.
   *
   * Conflicts during the merge result in an error response,
   * the response type whether it was an error or success will be a MergeSummary instance.
   * When successful, the MergeSummary has all detail from a the PullSummary
   *
   * @param {Object | string[]} [options]
   * @param {Function} [then]
   * @returns {*}
   *
   * @see ./responses/MergeSummary.js
   * @see ./responses/PullSummary.js
   */


  Git.prototype.merge = function (options, then) {
    var self = this;
    var userHandler = Git.trailingFunctionArgument(arguments) || NOOP;

    var mergeHandler = function (err, mergeSummary) {
      if (!err && mergeSummary.failed) {
        return Git.fail(self, mergeSummary, userHandler);
      }

      userHandler(err, mergeSummary);
    };

    var command = [];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    command.push.apply(command, Git.trailingArrayArgument(arguments));

    if (command[0] !== 'merge') {
      command.unshift('merge');
    }

    if (command.length === 1) {
      return this.exec(function () {
        then && then(new TypeError("Git.merge requires at least one option"));
      });
    }

    return this._run(command, Git._responseHandler(mergeHandler, 'MergeSummary'), {
      concatStdErr: true
    });
  };
  /**
   * Call any `git tag` function with arguments passed as an array of strings.
   *
   * @param {string[]} options
   * @param {Function} [then]
   */


  Git.prototype.tag = function (options, then) {
    var command = [];

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    command.push.apply(command, Git.trailingArrayArgument(arguments));

    if (command[0] !== 'tag') {
      command.unshift('tag');
    }

    return this._run(command, Git._responseHandler(Git.trailingFunctionArgument(arguments)));
  };
  /**
   * Updates repository server info
   *
   * @param {Function} [then]
   */


  Git.prototype.updateServerInfo = function (then) {
    return this._run(["update-server-info"], function (err, data) {
      then && then(err, !err && data);
    });
  };
  /**
   * Pushes the current committed changes to a remote, optionally specify the names of the remote and branch to use
   * when pushing. Supply multiple options as an array of strings in the first argument - see examples below.
   *
   * @param {string|string[]} [remote]
   * @param {string} [branch]
   * @param {Function} [then]
   */


  Git.prototype.push = function (remote, branch, then) {
    var command = [];
    var handler = Git.trailingFunctionArgument(arguments);

    if (typeof remote === 'string' && typeof branch === 'string') {
      command.push(remote, branch);
    }

    if (Array.isArray(remote)) {
      command = command.concat(remote);
    }

    Git._appendOptions(command, Git.trailingOptionsArgument(arguments));

    if (command[0] !== 'push') {
      command.unshift('push');
    }

    return this._run(command, function (err, data) {
      handler && handler(err, !err && data);
    });
  };
  /**
   * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
   * default configured remote spec.
   *
   * @param {string} [remote]
   * @param {Function} [then]
   */


  Git.prototype.pushTags = function (remote, then) {
    var command = ['push'];

    if (typeof remote === "string") {
      command.push(remote);
    }

    command.push('--tags');
    then = typeof arguments[arguments.length - 1] === "function" ? arguments[arguments.length - 1] : null;
    return this._run(command, function (err, data) {
      then && then(err, !err && data);
    });
  };
  /**
   * Removes the named files from source control.
   *
   * @param {string|string[]} files
   * @param {Function} [then]
   */


  Git.prototype.rm = function (files, then) {
    return this._rm(files, '-f', then);
  };
  /**
   * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
   * completely remove the files, use `rm`.
   *
   * @param {string|string[]} files
   * @param {Function} [then]
   */


  Git.prototype.rmKeepLocal = function (files, then) {
    return this._rm(files, '--cached', then);
  };
  /**
   * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
   * size, and type.
   *
   * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
   *
   * @param {string[]} [options]
   * @param {Function} [then]
   */


  Git.prototype.catFile = function (options, then) {
    return this._catFile('utf-8', arguments);
  };
  /**
   * Equivalent to `catFile` but will return the native `Buffer` of content from the git command's stdout.
   *
   * @param {string[]} options
   * @param then
   */


  Git.prototype.binaryCatFile = function (options, then) {
    return this._catFile('buffer', arguments);
  };

  Git.prototype._catFile = function (format, args) {
    var handler = Git.trailingFunctionArgument(args);
    var command = ['cat-file'];
    var options = args[0];

    if (typeof options === 'string') {
      throw new TypeError('Git#catFile: options must be supplied as an array of strings');
    } else if (Array.isArray(options)) {
      command.push.apply(command, options);
    }

    return this._run(command, function (err, data) {
      handler && handler(err, data);
    }, {
      format: format
    });
  };
  /**
   * Return repository changes.
   *
   * @param {string[]} [options]
   * @param {Function} [then]
   */


  Git.prototype.diff = function (options, then) {
    var command = ['diff'];

    if (typeof options === 'string') {
      command[0] += ' ' + options;

      this._getLog('warn', 'Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
    } else if (Array.isArray(options)) {
      command.push.apply(command, options);
    }

    if (typeof arguments[arguments.length - 1] === 'function') {
      then = arguments[arguments.length - 1];
    }

    return this._run(command, function (err, data) {
      then && then(err, data);
    });
  };

  Git.prototype.diffSummary = function (options, then) {
    var next = Git.trailingFunctionArgument(arguments);
    var command = ['--stat=4096'];

    if (options && options !== next) {
      command.push.apply(command, [].concat(options));
    }

    return this.diff(command, Git._responseHandler(next, 'DiffSummary'));
  };
  /**
   * Wraps `git rev-parse`. Primarily used to convert friendly commit references (ie branch names) to SHA1 hashes.
   *
   * Options should be an array of string options compatible with the `git rev-parse`
   *
   * @param {string|string[]} [options]
   * @param {Function} [then]
   *
   * @see https://git-scm.com/docs/git-rev-parse
   */


  Git.prototype.revparse = function (options, then) {
    var command = ['rev-parse'];

    if (typeof options === 'string') {
      command = command + ' ' + options;

      this._getLog('warn', 'Git#revparse: supplying options as a single string is now deprecated, switch to an array of strings');
    } else if (Array.isArray(options)) {
      command.push.apply(command, options);
    }

    if (typeof arguments[arguments.length - 1] === 'function') {
      then = arguments[arguments.length - 1];
    }

    return this._run(command, function (err, data) {
      then && then(err, err ? null : String(data).trim());
    });
  };
  /**
   * Show various types of objects, for example the file at a certain commit
   *
   * @param {string[]} [options]
   * @param {Function} [then]
   */


  Git.prototype.show = function (options, then) {
    var args = [].slice.call(arguments, 0);
    var handler = typeof args[args.length - 1] === "function" ? args.pop() : null;
    var command = ['show'];

    if (typeof options === 'string') {
      command = command + ' ' + options;

      this._getLog('warn', 'Git#show: supplying options as a single string is now deprecated, switch to an array of strings');
    } else if (Array.isArray(options)) {
      command.push.apply(command, options);
    }

    return this._run(command, function (err, data) {
      handler && handler(err, !err && data);
    });
  };
  /**
   * @param {string} mode Required parameter "n" or "f"
   * @param {string[]} options
   * @param {Function} [then]
   */


  Git.prototype.clean = function (mode, options, then) {
    var handler = Git.trailingFunctionArgument(arguments);

    if (typeof mode !== 'string' || !/[nf]/.test(mode)) {
      return this.exec(function () {
        handler && handler(new TypeError('Git clean mode parameter ("n" or "f") is required'));
      });
    }

    if (/[^dfinqxX]/.test(mode)) {
      return this.exec(function () {
        handler && handler(new TypeError('Git clean unknown option found in ' + JSON.stringify(mode)));
      });
    }

    var command = ['clean', '-' + mode];

    if (Array.isArray(options)) {
      command = command.concat(options);
    }

    if (command.some(interactiveMode)) {
      return this.exec(function () {
        handler && handler(new TypeError('Git clean interactive mode is not supported'));
      });
    }

    return this._run(command, function (err, data) {
      handler && handler(err, !err && data);
    });

    function interactiveMode(option) {
      if (/^-[^\-]/.test(option)) {
        return option.indexOf('i') > 0;
      }

      return option === '--interactive';
    }
  };
  /**
   * Call a simple function at the next step in the chain.
   * @param {Function} [then]
   */


  Git.prototype.exec = function (then) {
    this._run([], function () {
      typeof then === 'function' && then();
    });

    return this;
  };
  /**
   * Deprecated means of adding a regular function call at the next step in the chain. Use the replacement
   * Git#exec, the Git#then method will be removed in version 2.x
   *
   * @see exec
   * @deprecated
   */


  Git.prototype.then = function (then) {
    this._getLog('error', `
Git#then is deprecated after version 1.72 and will be removed in version 2.x
To use promises switch to importing 'simple-git/promise'.`);

    return this.exec(then);
  };
  /**
   * Show commit logs from `HEAD` to the first commit.
   * If provided between `options.from` and `options.to` tags or branch.
   *
   * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
   *
   * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
   *
   * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
   * For any other set of options, supply options as an array of strings to be appended to the git log command.
   *
   * @param {Object|string[]} [options]
   * @param {string} [options.from] The first commit to include
   * @param {string} [options.to] The most recent commit to include
   * @param {string} [options.file] A single file to include in the result
   * @param {boolean} [options.multiLine] Optionally include multi-line commit messages
   *
   * @param {Function} [then]
   */


  Git.prototype.log = function (options, then) {
    var handler = Git.trailingFunctionArgument(arguments);
    var opt = (handler === then ? options : null) || {};
    var splitter = opt.splitter || requireResponseHandler('ListLogSummary').SPLITTER;
    var format = opt.format || {
      hash: '%H',
      date: '%ai',
      message: '%s',
      refs: '%D',
      body: opt.multiLine ? '%B' : '%b',
      author_name: '%aN',
      author_email: '%ae'
    };
    var rangeOperator = opt.symmetric !== false ? '...' : '..';
    var fields = Object.keys(format);
    var formatstr = fields.map(function (k) {
      return format[k];
    }).join(splitter);
    var suffix = [];
    var command = ["log", "--pretty=format:" + requireResponseHandler('ListLogSummary').START_BOUNDARY + formatstr + requireResponseHandler('ListLogSummary').COMMIT_BOUNDARY];

    if (Array.isArray(opt)) {
      command = command.concat(opt);
      opt = {};
    } else if (typeof arguments[0] === "string" || typeof arguments[1] === "string") {
      this._getLog('warn', 'Git#log: supplying to or from as strings is now deprecated, switch to an options configuration object');

      opt = {
        from: arguments[0],
        to: arguments[1]
      };
    }

    if (opt.n || opt['max-count']) {
      command.push("--max-count=" + (opt.n || opt['max-count']));
    }

    if (opt.from && opt.to) {
      command.push(opt.from + rangeOperator + opt.to);
    }

    if (opt.file) {
      suffix.push("--follow", options.file);
    }

    'splitter n max-count file from to --pretty format symmetric multiLine'.split(' ').forEach(function (key) {
      delete opt[key];
    });

    Git._appendOptions(command, opt);

    return this._run(command.concat(suffix), Git._responseHandler(handler, 'ListLogSummary', [splitter, fields]));
  };
  /**
   * Clears the queue of pending commands and returns the wrapper instance for chaining.
   *
   * @returns {Git}
   */


  Git.prototype.clearQueue = function () {
    this._runCache.length = 0;
    return this;
  };
  /**
   * Check if a pathname or pathnames are excluded by .gitignore
   *
   * @param {string|string[]} pathnames
   * @param {Function} [then]
   */


  Git.prototype.checkIgnore = function (pathnames, then) {
    var handler = Git.trailingFunctionArgument(arguments);
    var command = ["check-ignore"];

    if (handler !== pathnames) {
      command = command.concat(pathnames);
    }

    return this._run(command, function (err, data) {
      handler && handler(err, !err && this._parseCheckIgnore(data));
    });
  };
  /**
   * Validates that the current repo is a Git repo.
   *
   * @param {Function} [then]
   */


  Git.prototype.checkIsRepo = function (then) {
    function onError(exitCode, stdErr, done, fail) {
      if (exitCode === 128 && /(Not a git repository|Kein Git-Repository)/i.test(stdErr)) {
        return done(false);
      }

      fail(stdErr);
    }

    function handler(err, isRepo) {
      then && then(err, String(isRepo).trim() === 'true');
    }

    return this._run(['rev-parse', '--is-inside-work-tree'], handler, {
      onError: onError
    });
  };

  Git.prototype._rm = function (_files, options, then) {
    var files = [].concat(_files);
    var args = ['rm', options];
    args.push.apply(args, files);
    return this._run(args, function (err) {
      then && then(err);
    });
  };

  Git.prototype._parseCheckout = function (checkout) {// TODO
  };
  /**
   * Parser for the `check-ignore` command - returns each
   * @param {string} [files]
   * @returns {string[]}
   */


  Git.prototype._parseCheckIgnore = function (files) {
    return files.split(/\n/g).filter(Boolean).map(function (file) {
      return file.trim();
    });
  };
  /**
   * Schedules the supplied command to be run, the command should not include the name of the git binary and should
   * be an array of strings passed as the arguments to the git binary.
   *
   * @param {string[]} command
   * @param {Function} then
   * @param {Object} [opt]
   * @param {boolean} [opt.concatStdErr=false] Optionally concatenate stderr output into the stdout
   * @param {boolean} [opt.format="utf-8"] The format to use when reading the content of stdout
   * @param {Function} [opt.onError] Optional error handler for this command - can be used to allow non-clean exits
   *                                  without killing the remaining stack of commands
   * @param {number} [opt.onError.exitCode]
   * @param {string} [opt.onError.stdErr]
   *
   * @returns {Git}
   */


  Git.prototype._run = function (command, then, opt) {
    if (typeof command === "string") {
      command = command.split(" ");
    }

    this._runCache.push([command, then, opt || {}]);

    this._schedule();

    return this;
  };

  Git.prototype._schedule = function () {
    if (!this._childProcess && this._runCache.length) {
      var git = this;
      var Buffer = git.Buffer;

      var task = git._runCache.shift();

      var command = task[0];
      var then = task[1];
      var options = task[2];
      debug(command);
      var result = deferred();
      var attempted = false;

      var attemptClose = function attemptClose(e) {
        // closing when there is content, terminate immediately
        if (attempted || stdErr.length || stdOut.length) {
          result.resolve(e);
          attempted = true;
        } // first attempt at closing but no content yet, wait briefly for the close/exit that may follow


        if (!attempted) {
          attempted = true;
          setTimeout(attemptClose.bind(this, e), 50);
        }
      };

      var stdOut = [];
      var stdErr = [];
      var spawned = git.ChildProcess.spawn(git._command, command.slice(0), {
        cwd: git._baseDir,
        env: git._env,
        windowsHide: true
      });
      spawned.stdout.on('data', function (buffer) {
        stdOut.push(buffer);
      });
      spawned.stderr.on('data', function (buffer) {
        stdErr.push(buffer);
      });
      spawned.on('error', function (err) {
        stdErr.push(Buffer.from(err.stack, 'ascii'));
      });
      spawned.on('close', attemptClose);
      spawned.on('exit', attemptClose);
      result.promise.then(function (exitCode) {
        function done(output) {
          then.call(git, null, output);
        }

        function fail(error) {
          Git.fail(git, error, then);
        }

        delete git._childProcess;

        if (exitCode && stdErr.length && options.onError) {
          options.onError(exitCode, Buffer.concat(stdErr).toString('utf-8'), done, fail);
        } else if (exitCode && stdErr.length) {
          fail(Buffer.concat(stdErr).toString('utf-8'));
        } else {
          if (options.concatStdErr) {
            [].push.apply(stdOut, stdErr);
          }

          var stdOutput = Buffer.concat(stdOut);

          if (options.format !== 'buffer') {
            stdOutput = stdOutput.toString(options.format || 'utf-8');
          }

          done(stdOutput);
        }

        process.nextTick(git._schedule.bind(git));
      });
      git._childProcess = spawned;

      if (git._outputHandler) {
        git._outputHandler(command[0], git._childProcess.stdout, git._childProcess.stderr);
      }
    }
  };
  /**
   * Handles an exception in the processing of a command.
   */


  Git.fail = function (git, error, handler) {
    git._getLog('error', error);

    git._runCache.length = 0;

    if (typeof handler === 'function') {
      handler.call(git, error, null);
    }
  };
  /**
   * Given any number of arguments, returns the last argument if it is a function, otherwise returns null.
   * @returns {Function|null}
   */


  Git.trailingFunctionArgument = function (args) {
    var trailing = args[args.length - 1];
    return typeof trailing === "function" ? trailing : null;
  };
  /**
   * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
   * if there is one. When not found, the return value is null.
   * @returns {Object|null}
   */


  Git.trailingOptionsArgument = function (args) {
    var options = args[args.length - (Git.trailingFunctionArgument(args) ? 2 : 1)];
    return Object.prototype.toString.call(options) === '[object Object]' ? options : null;
  };
  /**
   * Given any number of arguments, returns the trailing options array argument, ignoring a trailing function argument
   * if there is one. When not found, the return value is an empty array.
   * @returns {Array}
   */


  Git.trailingArrayArgument = function (args) {
    var options = args[args.length - (Git.trailingFunctionArgument(args) ? 2 : 1)];
    return Object.prototype.toString.call(options) === '[object Array]' ? options : [];
  };
  /**
   * Mutates the supplied command array by merging in properties in the options object. When the
   * value of the item in the options object is a string it will be concatenated to the key as
   * a single `name=value` item, otherwise just the name will be used.
   *
   * @param {string[]} command
   * @param {Object} options
   * @private
   */


  Git._appendOptions = function (command, options) {
    if (options === null) {
      return;
    }

    Object.keys(options).forEach(function (key) {
      var value = options[key];

      if (typeof value === 'string') {
        command.push(key + '=' + value);
      } else {
        command.push(key);
      }
    });
  };
  /**
   * Given the type of response and the callback to receive the parsed response,
   * uses the correct parser and calls back the callback.
   *
   * @param {Function} callback
   * @param {string} [type]
   * @param {Object[]} [args]
   *
   * @private
   */


  Git._responseHandler = function (callback, type, args) {
    return function (error, data) {
      if (typeof callback !== 'function') {
        return;
      }

      if (error) {
        return callback(error, null);
      }

      if (!type) {
        return callback(null, data);
      }

      var handler = requireResponseHandler(type);
      var result = handler.parse.apply(handler, [data].concat(args === undefined ? [] : args));
      callback(null, result);
    };
  };
  /**
   * Marks the git instance as having had a fatal exception by clearing the pending queue of tasks and
   * logging to the console.
   *
   * @param git
   * @param error
   * @param callback
   */


  Git.exception = function (git, error, callback) {
    git._runCache.length = 0;

    if (typeof callback === 'function') {
      callback(error instanceof Error ? error : new Error(error));
    }

    git._getLog('error', error);
  };

  module.exports = Git;
  /**
   * Requires and returns a response handler based on its named type
   * @param {string} type
   */

  function requireResponseHandler(type) {
    return responses[type];
  }
})();

/***/ }),

/***/ "./node_modules/simple-git/src/index.js":
/*!**********************************************!*\
  !*** ./node_modules/simple-git/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Git = __webpack_require__(/*! ./git */ "./node_modules/simple-git/src/git.js");

module.exports = function (baseDir) {
  var dependencies = __webpack_require__(/*! ./util/dependencies */ "./node_modules/simple-git/src/util/dependencies.js");

  if (baseDir && !dependencies.exists(baseDir, dependencies.exists.FOLDER)) {
    throw new Error("Cannot use simple-git on a directory that does not exist.");
  }

  return new Git(baseDir || process.cwd(), dependencies.childProcess(), dependencies.buffer());
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/BranchDeleteSummary.js":
/*!**********************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/BranchDeleteSummary.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = BranchDeletion;

function BranchDeletion(branch, hash) {
  this.branch = branch;
  this.hash = hash;
  this.success = hash !== null;
}

BranchDeletion.deleteSuccessRegex = /(\S+)\s+\(\S+\s([^\)]+)\)/;
BranchDeletion.deleteErrorRegex = /^error[^']+'([^']+)'/;

BranchDeletion.parse = function (data, asArray) {
  var result;
  var branchDeletions = data.trim().split('\n').map(function (line) {
    if (result = BranchDeletion.deleteSuccessRegex.exec(line)) {
      return new BranchDeletion(result[1], result[2]);
    } else if (result = BranchDeletion.deleteErrorRegex.exec(line)) {
      return new BranchDeletion(result[1], null);
    }
  }).filter(Boolean);
  return asArray ? branchDeletions : branchDeletions.pop();
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/BranchSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/BranchSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = BranchSummary;

function BranchSummary() {
  this.detached = false;
  this.current = '';
  this.all = [];
  this.branches = {};
}

BranchSummary.prototype.push = function (current, detached, name, commit, label) {
  if (current) {
    this.detached = detached;
    this.current = name;
  }

  this.all.push(name);
  this.branches[name] = {
    current: current,
    name: name,
    commit: commit,
    label: label
  };
};

BranchSummary.detachedRegex = /^(\*?\s+)\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/;
BranchSummary.branchRegex = /^(\*?\s+)(\S+)\s+([a-z0-9]+)\s(.*)$/;

BranchSummary.parse = function (commit) {
  var branchSummary = new BranchSummary();
  commit.split('\n').forEach(function (line) {
    var detached = true;
    var branch = BranchSummary.detachedRegex.exec(line);

    if (!branch) {
      detached = false;
      branch = BranchSummary.branchRegex.exec(line);
    }

    if (branch) {
      branchSummary.push(branch[1].charAt(0) === '*', detached, branch[2], branch[3], branch[4]);
    }
  });
  return branchSummary;
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/CommitSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/CommitSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = CommitSummary;

function CommitSummary() {
  this.branch = '';
  this.commit = '';
  this.summary = {
    changes: 0,
    insertions: 0,
    deletions: 0
  };
  this.author = null;
}

var COMMIT_BRANCH_MESSAGE_REGEX = /\[([^\s]+) ([^\]]+)/;
var COMMIT_AUTHOR_MESSAGE_REGEX = /\s*Author:\s(.+)/i;

function setBranchFromCommit(commitSummary, commitData) {
  if (commitData) {
    commitSummary.branch = commitData[1];
    commitSummary.commit = commitData[2];
  }
}

function setSummaryFromCommit(commitSummary, commitData) {
  if (commitSummary.branch && commitData) {
    commitSummary.summary.changes = commitData[1] || 0;
    commitSummary.summary.insertions = commitData[2] || 0;
    commitSummary.summary.deletions = commitData[3] || 0;
  }
}

function setAuthorFromCommit(commitSummary, commitData) {
  var parts = commitData[1].split('<');
  var email = parts.pop();

  if (email.indexOf('@') <= 0) {
    return;
  }

  commitSummary.author = {
    email: email.substr(0, email.length - 1),
    name: parts.join('<').trim()
  };
}

CommitSummary.parse = function (commit) {
  var lines = commit.trim().split('\n');
  var commitSummary = new CommitSummary();
  setBranchFromCommit(commitSummary, COMMIT_BRANCH_MESSAGE_REGEX.exec(lines.shift()));

  if (COMMIT_AUTHOR_MESSAGE_REGEX.test(lines[0])) {
    setAuthorFromCommit(commitSummary, COMMIT_AUTHOR_MESSAGE_REGEX.exec(lines.shift()));
  }

  setSummaryFromCommit(commitSummary, /(\d+)[^,]*(?:,\s*(\d+)[^,]*)?(?:,\s*(\d+))?/g.exec(lines.shift()));
  return commitSummary;
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/DiffSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/DiffSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = DiffSummary;
/**
 * The DiffSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */

function DiffSummary() {
  this.files = [];
  this.insertions = 0;
  this.deletions = 0;
  this.changed = 0;
}
/**
 * Number of lines added
 * @type {number}
 */


DiffSummary.prototype.insertions = 0;
/**
 * Number of lines deleted
 * @type {number}
 */

DiffSummary.prototype.deletions = 0;
/**
 * Number of files changed
 * @type {number}
 */

DiffSummary.prototype.changed = 0;

DiffSummary.parse = function (text) {
  var line, handler;
  var lines = text.trim().split('\n');
  var status = new DiffSummary();
  var summary = lines.pop();

  if (summary) {
    summary.trim().split(', ').forEach(function (text) {
      var summary = /(\d+)\s([a-z]+)/.exec(text);

      if (!summary) {
        return;
      }

      if (/files?/.test(summary[2])) {
        status.changed = parseInt(summary[1], 10);
      } else {
        status[summary[2].replace(/s$/, '') + 's'] = parseInt(summary[1], 10);
      }
    });
  }

  while (line = lines.shift()) {
    textFileChange(line, status.files) || binaryFileChange(line, status.files);
  }

  return status;
};

function textFileChange(line, files) {
  line = line.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);

  if (line) {
    var alterations = (line[3] || '').trim();
    files.push({
      file: line[1].trim(),
      changes: parseInt(line[2], 10),
      insertions: alterations.replace(/-/g, '').length,
      deletions: alterations.replace(/\+/g, '').length,
      binary: false
    });
    return true;
  }
}

function binaryFileChange(line, files) {
  line = line.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);

  if (line) {
    files.push({
      file: line[1].trim(),
      before: +line[2],
      after: +line[3],
      binary: true
    });
    return true;
  }
}

/***/ }),

/***/ "./node_modules/simple-git/src/responses/FetchSummary.js":
/*!***************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/FetchSummary.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FetchSummary(raw) {
  this.raw = raw;
  this.remote = null;
  this.branches = [];
  this.tags = [];
}

FetchSummary.parsers = [[/From (.+)$/, function (fetchSummary, matches) {
  fetchSummary.remote = matches[0];
}], [/\* \[new branch\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
  fetchSummary.branches.push({
    name: matches[0],
    tracking: matches[1]
  });
}], [/\* \[new tag\]\s+(\S+)\s*\-> (.+)$/, function (fetchSummary, matches) {
  fetchSummary.tags.push({
    name: matches[0],
    tracking: matches[1]
  });
}]];

FetchSummary.parse = function (data) {
  var fetchSummary = new FetchSummary(data);
  String(data).trim().split('\n').forEach(function (line) {
    var original = line.trim();
    FetchSummary.parsers.some(function (parser) {
      var parsed = parser[0].exec(original);

      if (parsed) {
        parser[1](fetchSummary, parsed.slice(1));
        return true;
      }
    });
  });
  return fetchSummary;
};

module.exports = FetchSummary;

/***/ }),

/***/ "./node_modules/simple-git/src/responses/FileStatusSummary.js":
/*!********************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/FileStatusSummary.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function FileStatusSummary(path, index, working_dir) {
  this.path = path;
  this.index = index;
  this.working_dir = working_dir;

  if ('R' === index + working_dir) {
    var detail = FileStatusSummary.fromPathRegex.exec(path) || [null, path, path];
    this.from = detail[1];
    this.path = detail[2];
  }
}

FileStatusSummary.fromPathRegex = /^(.+) -> (.+)$/;
FileStatusSummary.prototype = {
  path: '',
  from: ''
};
module.exports = FileStatusSummary;

/***/ }),

/***/ "./node_modules/simple-git/src/responses/ListLogSummary.js":
/*!*****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/ListLogSummary.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = ListLogSummary;

var DiffSummary = __webpack_require__(/*! ./DiffSummary */ "./node_modules/simple-git/src/responses/DiffSummary.js");
/**
 * The ListLogSummary is returned as a response to getting `git().log()` or `git().stashList()`
 *
 * @constructor
 */


function ListLogSummary(all) {
  this.all = all;
  this.latest = all.length && all[0] || null;
  this.total = all.length;
}
/**
 * Detail for each of the log lines
 * @type {ListLogLine[]}
 */


ListLogSummary.prototype.all = null;
/**
 * Most recent entry in the log
 * @type {ListLogLine}
 */

ListLogSummary.prototype.latest = null;
/**
 * Number of items in the log
 * @type {number}
 */

ListLogSummary.prototype.total = 0;

function ListLogLine(line, fields) {
  for (var k = 0; k < fields.length; k++) {
    this[fields[k]] = line[k] || '';
  }
}
/**
 * When the log was generated with a summary, the `diff` property contains as much detail
 * as was provided in the log (whether generated with `--stat` or `--shortstat`.
 * @type {DiffSummary}
 */


ListLogLine.prototype.diff = null;
ListLogSummary.START_BOUNDARY = 'òòòòòò ';
ListLogSummary.COMMIT_BOUNDARY = ' òò';
ListLogSummary.SPLITTER = ' ò ';

ListLogSummary.parse = function (text, splitter, fields) {
  fields = fields || ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
  return new ListLogSummary(text.trim().split(ListLogSummary.START_BOUNDARY).filter(function (item) {
    return !!item.trim();
  }).map(function (item) {
    var lineDetail = item.trim().split(ListLogSummary.COMMIT_BOUNDARY);
    var listLogLine = new ListLogLine(lineDetail[0].trim().split(splitter), fields);

    if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
      listLogLine.diff = DiffSummary.parse(lineDetail[1]);
    }

    return listLogLine;
  }));
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/MergeSummary.js":
/*!***************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/MergeSummary.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MergeSummary;
module.exports.MergeConflict = MergeConflict;

var PullSummary = __webpack_require__(/*! ./PullSummary */ "./node_modules/simple-git/src/responses/PullSummary.js");

function MergeConflict(reason, file, meta) {
  this.reason = reason;
  this.file = file;

  if (meta) {
    this.meta = meta;
  }
}

MergeConflict.prototype.meta = null;

MergeConflict.prototype.toString = function () {
  return this.file + ':' + this.reason;
};

function MergeSummary() {
  PullSummary.call(this);
  this.conflicts = [];
  this.merges = [];
}

MergeSummary.prototype = Object.create(PullSummary.prototype);
MergeSummary.prototype.result = 'success';

MergeSummary.prototype.toString = function () {
  if (this.conflicts.length) {
    return 'CONFLICTS: ' + this.conflicts.join(', ');
  }

  return 'OK';
};

Object.defineProperty(MergeSummary.prototype, 'failed', {
  get: function () {
    return this.conflicts.length > 0;
  }
});
MergeSummary.parsers = [{
  test: /^Auto-merging\s+(.+)$/,
  handle: function (result, mergeSummary) {
    mergeSummary.merges.push(result[1]);
  }
}, {
  // Parser for standard merge conflicts
  test: /^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/,
  handle: function (result, mergeSummary) {
    mergeSummary.conflicts.push(new MergeConflict(result[1], result[2]));
  }
}, {
  // Parser for modify/delete merge conflicts (modified by us/them, deleted by them/us)
  test: /^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/,
  handle: function (result, mergeSummary) {
    mergeSummary.conflicts.push(new MergeConflict(result[1], result[2], {
      deleteRef: result[3]
    }));
  }
}, {
  // Catch-all parser for unknown/unparsed conflicts
  test: /^CONFLICT\s+\((.+)\):/,
  handle: function (result, mergeSummary) {
    mergeSummary.conflicts.push(new MergeConflict(result[1], null));
  }
}, {
  test: /^Automatic merge failed;\s+(.+)$/,
  handle: function (result, mergeSummary) {
    mergeSummary.reason = mergeSummary.result = result[1];
  }
}];

MergeSummary.parse = function (output) {
  let mergeSummary = new MergeSummary();
  output.trim().split('\n').forEach(function (line) {
    for (var i = 0, iMax = MergeSummary.parsers.length; i < iMax; i++) {
      let parser = MergeSummary.parsers[i];
      var result = parser.test.exec(line);

      if (result) {
        parser.handle(result, mergeSummary);
        break;
      }
    }
  });
  let pullSummary = PullSummary.parse(output);

  if (pullSummary.summary.changes) {
    Object.assign(mergeSummary, pullSummary);
  }

  return mergeSummary;
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/MoveSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/MoveSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = MoveSummary;
/**
 * The MoveSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */

function MoveSummary() {
  this.moves = [];
  this.sources = {};
}

MoveSummary.SUMMARY_REGEX = /^Renaming (.+) to (.+)$/;

MoveSummary.parse = function (text) {
  var lines = text.split('\n');
  var summary = new MoveSummary();

  for (var i = 0, iMax = lines.length, line; i < iMax; i++) {
    line = MoveSummary.SUMMARY_REGEX.exec(lines[i].trim());

    if (line) {
      summary.moves.push({
        from: line[1],
        to: line[2]
      });
    }
  }

  return summary;
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/PullSummary.js":
/*!**************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/PullSummary.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = PullSummary;
/**
 * The PullSummary is returned as a response to getting `git().pull()`
 *
 * @constructor
 */

function PullSummary() {
  this.files = [];
  this.insertions = {};
  this.deletions = {};
  this.summary = {
    changes: 0,
    insertions: 0,
    deletions: 0
  };
  this.created = [];
  this.deleted = [];
}
/**
 * Array of files that were created
 * @type {string[]}
 */


PullSummary.prototype.created = null;
/**
 * Array of files that were deleted
 * @type {string[]}
 */

PullSummary.prototype.deleted = null;
/**
 * The array of file paths/names that have been modified in any part of the pulled content
 * @type {string[]}
 */

PullSummary.prototype.files = null;
/**
 * A map of file path to number to show the number of insertions per file.
 * @type {Object}
 */

PullSummary.prototype.insertions = null;
/**
 * A map of file path to number to show the number of deletions per file.
 * @type {Object}
 */

PullSummary.prototype.deletions = null;
/**
 * Overall summary of changes/insertions/deletions and the number associated with each
 * across all content that was pulled.
 * @type {Object}
 */

PullSummary.prototype.summary = null;
PullSummary.FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
PullSummary.SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
PullSummary.ACTION_REGEX = /(create|delete) mode \d+ (.+)/;

PullSummary.parse = function (text) {
  var pullSummary = new PullSummary();
  var lines = text.split('\n');

  while (lines.length) {
    var line = lines.shift().trim();

    if (!line) {
      continue;
    }

    update(pullSummary, line) || summary(pullSummary, line) || action(pullSummary, line);
  }

  return pullSummary;
};

function update(pullSummary, line) {
  var update = PullSummary.FILE_UPDATE_REGEX.exec(line);

  if (!update) {
    return false;
  }

  pullSummary.files.push(update[1]);
  var insertions = update[2].length;

  if (insertions) {
    pullSummary.insertions[update[1]] = insertions;
  }

  var deletions = update[3].length;

  if (deletions) {
    pullSummary.deletions[update[1]] = deletions;
  }

  return true;
}

function summary(pullSummary, line) {
  if (!pullSummary.files.length) {
    return false;
  }

  var update = PullSummary.SUMMARY_REGEX.exec(line);

  if (!update || update[3] === undefined && update[5] === undefined) {
    return false;
  }

  pullSummary.summary.changes = +update[1] || 0;
  pullSummary.summary.insertions = +update[3] || 0;
  pullSummary.summary.deletions = +update[5] || 0;
  return true;
}

function action(pullSummary, line) {
  var match = PullSummary.ACTION_REGEX.exec(line);

  if (!match) {
    return false;
  }

  var file = match[2];

  if (pullSummary.files.indexOf(file) < 0) {
    pullSummary.files.push(file);
  }

  var container = match[1] === 'create' ? pullSummary.created : pullSummary.deleted;
  container.push(file);
  return true;
}

/***/ }),

/***/ "./node_modules/simple-git/src/responses/StatusSummary.js":
/*!****************************************************************!*\
  !*** ./node_modules/simple-git/src/responses/StatusSummary.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var FileStatusSummary = __webpack_require__(/*! ./FileStatusSummary */ "./node_modules/simple-git/src/responses/FileStatusSummary.js");

module.exports = StatusSummary;
/**
 * The StatusSummary is returned as a response to getting `git().status()`
 *
 * @constructor
 */

function StatusSummary() {
  this.not_added = [];
  this.conflicted = [];
  this.created = [];
  this.deleted = [];
  this.modified = [];
  this.renamed = [];
  this.files = [];
  this.staged = [];
}
/**
 * Number of commits ahead of the tracked branch
 * @type {number}
 */


StatusSummary.prototype.ahead = 0;
/**
 * Number of commits behind the tracked branch
 * @type {number}
 */

StatusSummary.prototype.behind = 0;
/**
 * Name of the current branch
 * @type {null}
 */

StatusSummary.prototype.current = null;
/**
 * Name of the branch being tracked
 * @type {string}
 */

StatusSummary.prototype.tracking = null;
/**
 * All files represented as an array of objects containing the `path` and status in `index` and
 * in the `working_dir`.
 *
 * @type {Array}
 */

StatusSummary.prototype.files = null;
/**
 * Gets whether this StatusSummary represents a clean working branch.
 *
 * @return {boolean}
 */

StatusSummary.prototype.isClean = function () {
  return 0 === Object.keys(this).filter(function (name) {
    return Array.isArray(this[name]) && this[name].length;
  }, this).length;
};

StatusSummary.parsers = {
  '##': function (line, status) {
    var aheadReg = /ahead (\d+)/;
    var behindReg = /behind (\d+)/;
    var currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
    var trackingReg = /\.{3}(\S*)/;
    var regexResult;
    regexResult = aheadReg.exec(line);
    status.ahead = regexResult && +regexResult[1] || 0;
    regexResult = behindReg.exec(line);
    status.behind = regexResult && +regexResult[1] || 0;
    regexResult = currentReg.exec(line);
    status.current = regexResult && regexResult[1];
    regexResult = trackingReg.exec(line);
    status.tracking = regexResult && regexResult[1];
  },
  '??': function (line, status) {
    status.not_added.push(line);
  },
  A: function (line, status) {
    status.created.push(line);
  },
  AM: function (line, status) {
    status.created.push(line);
  },
  D: function (line, status) {
    status.deleted.push(line);
  },
  M: function (line, status, indexState) {
    status.modified.push(line);

    if (indexState === 'M') {
      status.staged.push(line);
    }
  },
  R: function (line, status) {
    var detail = /^(.+) -> (.+)$/.exec(line) || [null, line, line];
    status.renamed.push({
      from: detail[1],
      to: detail[2]
    });
  },
  UU: function (line, status) {
    status.conflicted.push(line);
  }
};
StatusSummary.parsers.MM = StatusSummary.parsers.M;
/* Map all unmerged status code combinations to UU to mark as conflicted */

StatusSummary.parsers.AA = StatusSummary.parsers.UU;
StatusSummary.parsers.UD = StatusSummary.parsers.UU;
StatusSummary.parsers.DU = StatusSummary.parsers.UU;
StatusSummary.parsers.DD = StatusSummary.parsers.UU;
StatusSummary.parsers.AU = StatusSummary.parsers.UU;
StatusSummary.parsers.UA = StatusSummary.parsers.UU;

StatusSummary.parse = function (text) {
  var file;
  var lines = text.trim().split('\n');
  var status = new StatusSummary();

  for (var i = 0, l = lines.length; i < l; i++) {
    file = splitLine(lines[i]);

    if (!file) {
      continue;
    }

    if (file.handler) {
      file.handler(file.path, status, file.index, file.workingDir);
    }

    if (file.code !== '##') {
      status.files.push(new FileStatusSummary(file.path, file.index, file.workingDir));
    }
  }

  return status;
};

function splitLine(lineStr) {
  var line = lineStr.trim().match(/(..?)(\s+)(.*)/);

  if (!line || !line[1].trim()) {
    line = lineStr.trim().match(/(..?)\s+(.*)/);
  }

  if (!line) {
    return;
  }

  var code = line[1];

  if (line[2].length > 1) {
    code += ' ';
  }

  if (code.length === 1 && line[2].length === 1) {
    code = ' ' + code;
  }

  return {
    raw: code,
    code: code.trim(),
    index: code.charAt(0),
    workingDir: code.charAt(1),
    handler: StatusSummary.parsers[code.trim()],
    path: line[3]
  };
}

/***/ }),

/***/ "./node_modules/simple-git/src/responses/TagList.js":
/*!**********************************************************!*\
  !*** ./node_modules/simple-git/src/responses/TagList.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TagList;

function TagList(tagList, latest) {
  this.latest = latest;
  this.all = tagList;
}

TagList.parse = function (data, customSort) {
  var number = function (input) {
    if (typeof input === 'string') {
      return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
    }

    return 0;
  };

  var tags = data.trim().split('\n').map(function (item) {
    return item.trim();
  }).filter(Boolean);

  if (!customSort) {
    tags.sort(function (tagA, tagB) {
      var partsA = tagA.split('.');
      var partsB = tagB.split('.');

      if (partsA.length === 1 || partsB.length === 1) {
        return tagA - tagB > 0 ? 1 : -1;
      }

      for (var i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
        var a = number(partsA[i]);
        var b = number(partsB[i]);
        var diff = a - b;

        if (diff) {
          return diff > 0 ? 1 : -1;
        }
      }

      return 0;
    });
  }

  var latest = customSort ? tags[0] : tags.filter(function (tag) {
    return tag.indexOf('.') >= 0;
  }).pop();
  return new TagList(tags, latest);
};

/***/ }),

/***/ "./node_modules/simple-git/src/responses/index.js":
/*!********************************************************!*\
  !*** ./node_modules/simple-git/src/responses/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  BranchDeleteSummary: __webpack_require__(/*! ./BranchDeleteSummary */ "./node_modules/simple-git/src/responses/BranchDeleteSummary.js"),
  BranchSummary: __webpack_require__(/*! ./BranchSummary */ "./node_modules/simple-git/src/responses/BranchSummary.js"),
  CommitSummary: __webpack_require__(/*! ./CommitSummary */ "./node_modules/simple-git/src/responses/CommitSummary.js"),
  DiffSummary: __webpack_require__(/*! ./DiffSummary */ "./node_modules/simple-git/src/responses/DiffSummary.js"),
  FetchSummary: __webpack_require__(/*! ./FetchSummary */ "./node_modules/simple-git/src/responses/FetchSummary.js"),
  FileStatusSummary: __webpack_require__(/*! ./FileStatusSummary */ "./node_modules/simple-git/src/responses/FileStatusSummary.js"),
  ListLogSummary: __webpack_require__(/*! ./ListLogSummary */ "./node_modules/simple-git/src/responses/ListLogSummary.js"),
  MergeSummary: __webpack_require__(/*! ./MergeSummary */ "./node_modules/simple-git/src/responses/MergeSummary.js"),
  MoveSummary: __webpack_require__(/*! ./MoveSummary */ "./node_modules/simple-git/src/responses/MoveSummary.js"),
  PullSummary: __webpack_require__(/*! ./PullSummary */ "./node_modules/simple-git/src/responses/PullSummary.js"),
  StatusSummary: __webpack_require__(/*! ./StatusSummary */ "./node_modules/simple-git/src/responses/StatusSummary.js"),
  TagList: __webpack_require__(/*! ./TagList */ "./node_modules/simple-git/src/responses/TagList.js")
};

/***/ }),

/***/ "./node_modules/simple-git/src/util/deferred.js":
/*!******************************************************!*\
  !*** ./node_modules/simple-git/src/util/deferred.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function deferred() {
  var d = {};
  d.promise = new Promise(function (resolve, reject) {
    d.resolve = resolve;
    d.reject = reject;
  });
  return d;
};

/***/ }),

/***/ "./node_modules/simple-git/src/util/dependencies.js":
/*!**********************************************************!*\
  !*** ./node_modules/simple-git/src/util/dependencies.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Exports the utilities `simple-git` depends upon to allow for mocking during a test
 */
module.exports = {
  buffer: function () {
    return __webpack_require__(/*! buffer */ "buffer").Buffer;
  },
  childProcess: function () {
    return __webpack_require__(/*! child_process */ "child_process");
  },
  exists: __webpack_require__(/*! ./exists */ "./node_modules/simple-git/src/util/exists.js")
};

/***/ }),

/***/ "./node_modules/simple-git/src/util/exists.js":
/*!****************************************************!*\
  !*** ./node_modules/simple-git/src/util/exists.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(/*! fs */ "fs");

function exists(path, isFile, isDirectory) {
  try {
    var matches = false;
    var stat = fs.statSync(path);
    matches = matches || isFile && stat.isFile();
    matches = matches || isDirectory && stat.isDirectory();
    return matches;
  } catch (e) {
    if (e.code === 'ENOENT') {
      return false;
    }

    throw e;
  }
}

module.exports = function (path, type) {
  if (!type) {
    return exists(path, true, true);
  }

  return exists(path, type & 1, type & 2);
};

module.exports.FILE = 1;
module.exports.FOLDER = 2;

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
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./scripts/build/prepare-static.js":
/*!*****************************************!*\
  !*** ./scripts/build/prepare-static.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path");

const md5File = __webpack_require__(/*! md5-file */ "md5-file");

const {
  assets: dirAssets,
  bgimgs: dirBgimgs,
  static: dirStatic
} = __webpack_require__(/*! ../../src/directories */ "./src/directories.js");

const channel = __webpack_require__(/*! ../../src/channel */ "./src/channel.js");

const spinner = __webpack_require__(/*! ../../src/scripts/commons/spinner */ "./src/scripts/commons/spinner.js");

const Progress = __webpack_require__(/*! ../../src/scripts/commons/progress */ "./src/scripts/commons/progress.js");
/**
 * 准备静态资源目录，用以直接复制到打包目录
 */


module.exports = async (kootConfig = {}) => {
  const title = 'Preparing static files...';
  const waiting = spinner(title);
  await fs.ensureDir(dirStatic);
  const list = [{
    from: dirBgimgs,
    to: 'bgimgs'
  }, {
    from: path.resolve(dirAssets, `logos`, channel, `32.ico`),
    to: 'favicon.ico'
  }, {
    from: path.resolve(__dirname, '../../src/assets/public', channel),
    to: ''
  }];
  list.forEach(o => {
    o.to = path.resolve(dirStatic, o.to);
  });
  waiting.stop();
  const bar = new Progress({
    title,
    total: list.length
  });

  for (const {
    from,
    to
  } of list) {
    if (!fs.existsSync(from)) continue;else if (!fs.existsSync(to)) await fs.copy(from, to);else if (fs.lstatSync(from).isDirectory() || fs.lstatSync(to).isDirectory()) await fs.copy(from, to);else if (md5File.sync(from) !== md5File.sync(to)) await fs.copy(from, to);
    bar.tick();
  }

  bar.complete();
};
/* WEBPACK VAR INJECTION */}.call(this, "scripts\\build"))

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

const pathDist = koot_utils_get_dist_path__WEBPACK_IMPORTED_MODULE_2___default()();
const manifestLastModified = new Map();
/* harmony default export */ __webpack_exports__["default"] = ({
  manifest: (template, state) => {
    const localeId = state.localeId;
    const filename = `manifest-${localeId}.json`;
    const {
      '.public': publicPath
    } = koot_utils_get_chunkmap__WEBPACK_IMPORTED_MODULE_4___default()(localeId);
    if (!manifestLastModified.has(localeId)) manifestLastModified.set(localeId, fs_extra__WEBPACK_IMPORTED_MODULE_0___default.a.statSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(pathDist, publicPath, filename)).mtime.valueOf());
    return `<link rel="manifest" href="/${filename}?${manifestLastModified.get(localeId) || ''}">`;
  },
  svgIcons: `<div class="hide">${"<svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><symbol id=\"icon-image-compare\" viewBox=\"0 0 64 64\"><path d=\"M52 22c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z\"></path><path d=\"M0 12v40c0 2.2 1.8 4 4 4h24v-4h-23.993c-0.003-0.002-0.005-0.005-0.007-0.007v-39.986c0.002-0.002 0.005-0.005 0.007-0.007h23.993v-4h-24c-2.2 0-4 1.8-4 4z\"></path><path d=\"M60 8h-24v-8h-4v64h4v-8h24c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4zM60 51.993c-0.002 0.002-0.005 0.005-0.007 0.007h-23.993v-4h20v-20l-14 12h-4l-2-2.5v-25.5h23.993c0.003 0.002 0.005 0.005 0.007 0.007v39.986z\"></path><path d=\"M8 44v4h20v-20.5l-6-7.5z\"></path></symbol><symbol id=\"icon-book3\" viewBox=\"0 0 64 64\"><path d=\"M56 8v52h-42c-3.314 0-6-2.686-6-6s2.686-6 6-6h38v-48h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48v-56h-4z\"></path><path d=\"M14.004 52v0c-0.001 0-0.002 0-0.004 0-1.104 0-2 0.895-2 2s0.896 2 2 2c0.001 0 0.002-0 0.004-0v0h37.993v-4h-37.993z\"></path></symbol><symbol id=\"icon-lifebuoy\" viewBox=\"0 0 64 64\"><path d=\"M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM20 32c0-6.628 5.372-12 12-12s12 5.372 12 12-5.373 12-12 12-12-5.373-12-12zM57.874 42.717v0l-11.089-4.593c0.782-1.886 1.215-3.955 1.215-6.124s-0.433-4.238-1.215-6.124l11.089-4.593c1.369 3.301 2.126 6.921 2.126 10.717s-0.757 7.416-2.126 10.717v0zM42.717 6.126v0 0l-4.593 11.089c-1.886-0.782-3.955-1.215-6.124-1.215s-4.238 0.433-6.124 1.215l-4.593-11.089c3.301-1.369 6.921-2.126 10.717-2.126s7.416 0.757 10.717 2.126zM6.126 21.283l11.089 4.593c-0.782 1.887-1.215 3.955-1.215 6.124s0.433 4.238 1.215 6.124l-11.089 4.593c-1.369-3.301-2.126-6.921-2.126-10.717s0.757-7.416 2.126-10.717zM21.283 57.874l4.593-11.089c1.887 0.782 3.955 1.215 6.124 1.215s4.238-0.433 6.124-1.215l4.593 11.089c-3.301 1.369-6.921 2.126-10.717 2.126s-7.416-0.757-10.717-2.126z\"></path></symbol><symbol id=\"icon-at-sign\" viewBox=\"0 0 64 64\"><path d=\"M54.627 9.373c-6.044-6.044-14.080-9.373-22.628-9.373s-16.583 3.329-22.628 9.373c-6.044 6.044-9.373 14.080-9.373 22.627s3.329 16.583 9.373 22.627c6.044 6.044 14.080 9.373 22.628 9.373 4.798 0 9.412-1.037 13.717-3.082 1.995-0.948 2.844-3.334 1.897-5.33s-3.334-2.844-5.33-1.897c-3.223 1.531-6.683 2.308-10.284 2.308-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24v4c0 2.206-1.794 4-4 4s-4-1.794-4-4v-16c0-2.209-1.791-4-4-4-1.624 0-3.021 0.968-3.648 2.358-2.433-1.495-5.294-2.358-8.352-2.358-8.822 0-16 7.178-16 16s7.178 16 16 16c4.182 0 7.993-1.613 10.847-4.249 2.203 2.598 5.489 4.249 9.153 4.249 6.617 0 12-5.383 12-12v-4c0-8.547-3.329-16.583-9.373-22.628zM32 40c-4.411 0-8-3.589-8-8s3.589-8 8-8c4.411 0 8 3.589 8 8s-3.589 8-8 8z\"></path></symbol><symbol id=\"icon-hammer-wrench\" viewBox=\"0 0 80 64\"><path d=\"M30.785 44.035l9.181 9.181-7.292 9.364c-1.336 1.748-3.703 1.905-5.258 0.349l-6.343-6.343c-1.556-1.556-1.398-3.922 0.349-5.258l9.364-7.292zM79.594 16.406l-9.594 9.594-12-12 9.594-9.594c-1.156-0.265-2.359-0.406-3.594-0.406-8.837 0-16 7.163-16 16 0 3.187 0.932 6.157 2.539 8.651l-8.932 6.956-13.607-13.607 18-18h-20l-8.879 8.879-0.879-0.879h-4.243v4.243l0.879 0.879-12.879 12.879 10 10 12-12 36 36 6-6-15.607-15.607 6.956-8.932c2.494 1.606 5.464 2.539 8.651 2.539 8.837 0 16-7.163 16-16 0-1.236-0.14-2.439-0.406-3.594z\"></path></symbol><symbol id=\"icon-download5\" viewBox=\"0 0 64 64\"><path d=\"M8 48h48v12h-48v-12z\"></path><path d=\"M40 24v-20h-16v20h-14l22 22 22-22z\"></path></symbol><symbol id=\"icon-anchor\" viewBox=\"0 0 64 64\"><path d=\"M56 36v8.262c-5.033 5.14-12.065 10.103-20 11.407v-23.669h12v-4l-12-4.684c4.66-1.648 8-6.091 8-11.316 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.225 3.339 9.669 8 11.316v0.001l-12 4.683v4h12v23.669c-7.936-1.304-14.968-6.266-20-11.407v-8.262h-8v4c0 8 16 24 32 24s32-16 32-24v-4h-8zM36 12c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c2.209 0 4 1.791 4 4z\"></path></symbol><symbol id=\"icon-stack-check\" viewBox=\"0 0 64 64\"><path d=\"M20 4v4.619l-10.476 1.472 0.681 4.842-10.204 2.926 13.231 46.141 40.754-11.686 2.234-0.314h7.781v-48h-44zM15.716 59.516l-11.232-39.171 6.23-1.787 5.49 39.065 11.987-1.685-12.476 3.578zM19.29 53.529l-5.671-40.353 6.382-0.897v39.721h10.172l-10.882 1.529zM24 48v-40h36v10l-2.828-2.828-17.172 15.171-9.172-7.172-3.657 3.657 12.828 14.828 20-21.921v28.264h-36z\"></path></symbol><symbol id=\"icon-plus3\" viewBox=\"0 0 64 64\"><path d=\"M60 28h-24v-24h-8v24h-24v8h24v24h8v-24h24z\"></path></symbol><symbol id=\"icon-checkmark4\" viewBox=\"0 0 64 64\"><path d=\"M61.441 4c-20.906 15.823-40.956 36.987-40.956 36.987l-14.449-12.988-6.036 6.149c5.939 5.581 19.698 20.325 24.352 25.851 13.099-21.886 26.717-38.209 39.648-53.135l-2.559-2.865z\"></path></symbol><symbol id=\"icon-loop\" viewBox=\"0 0 64 64\"><path d=\"M56 32v4c0 2.204-1.796 4-4 4h-28.008l0.008-8-16 12 16 12-0.008-8h28.008c6.618 0 12-5.39 12-12v-4h-8zM8 28c0-2.21 1.796-4 4-4h28v8l15.984-12-15.984-12v8h-28c-6.618 0-12 5.376-12 12v4h8v-4z\"></path></symbol><symbol id=\"icon-hanger\" viewBox=\"0 0 64 64\"><path d=\"M59.082 54.318l-27.082-17.41v-1.978c2.44-1.41 4-4.042 4-6.93 0-4.411-3.589-8-8-8-3.385 0-6.416 2.143-7.544 5.333-0.368 1.041 0.177 2.184 1.219 2.552s2.184-0.178 2.552-1.219c0.564-1.595 2.080-2.666 3.773-2.666 2.206 0 4 1.794 4 4 0 1.693-1.072 3.209-2.666 3.773-0.799 0.282-1.333 1.038-1.333 1.886l-0 3.249-27.081 17.41c-0.573 0.368-0.918 1.002-0.918 1.682v2c0 3.309 2.692 6 6 6h48c3.309 0 6-2.691 6-6v-2c0-0.681-0.346-1.314-0.918-1.682zM56 58c0 1.103-0.897 2-2 2h-48c-1.103 0-2-0.897-2-2v-0.908l26-16.714 26 16.714v0.908z\"></path></symbol><symbol id=\"icon-search\" viewBox=\"0 0 64 64\"><path d=\"M62.016 54.462l-15.16-12.893c-1.567-1.41-3.243-2.058-4.597-1.995 3.578-4.192 5.74-9.63 5.74-15.573 0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24c5.944 0 11.382-2.162 15.574-5.74-0.063 1.354 0.585 3.030 1.995 4.597l12.893 15.16c2.208 2.453 5.814 2.66 8.014 0.46s1.993-5.806-0.46-8.014zM24 40c-8.836 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z\"></path></symbol><symbol id=\"icon-cog\" viewBox=\"0 0 64 64\"><path d=\"M58.362 38.141c-3.358-5.816-1.339-13.269 4.51-16.655l-6.289-10.893c-1.797 1.053-3.886 1.657-6.115 1.657-6.721 0-12.169-5.484-12.169-12.249h-12.579c0.017 2.088-0.505 4.205-1.622 6.141-3.358 5.816-10.822 7.794-16.679 4.422l-6.289 10.893c1.811 1.029 3.378 2.537 4.493 4.467 3.352 5.807 1.345 13.245-4.482 16.639l6.289 10.893c1.791-1.044 3.87-1.641 6.088-1.641 6.7 0 12.134 5.45 12.169 12.185h12.578c-0.005-2.067 0.517-4.161 1.623-6.076 3.352-5.807 10.798-7.787 16.651-4.438l6.289-10.893c-1.799-1.029-3.356-2.531-4.465-4.452zM32 44.958c-7.157 0-12.959-5.801-12.959-12.958s5.802-12.958 12.959-12.958c7.157 0 12.958 5.802 12.958 12.958s-5.801 12.958-12.958 12.958z\"></path></symbol><symbol id=\"icon-menu\" viewBox=\"0 0 64 64\"><path d=\"M4 12h56v8h-56v-8z\"></path><path d=\"M4 28h56v8h-56v-8z\"></path><path d=\"M4 44h56v8h-56v-8z\"></path></symbol><symbol id=\"icon-warning2\" viewBox=\"0 0 64 64\"><path d=\"M63.122 57.235v0l-27.317-54.444c-1.046-1.86-2.426-2.791-3.805-2.791s-2.759 0.93-3.805 2.791l-27.317 54.444c-2.093 3.721-0.313 6.765 3.957 6.765h54.332c4.269 0 6.050-3.044 3.956-6.765zM32 56c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zM36 40c0 2.209-1.791 4-4 4s-4-1.791-4-4v-12c0-2.209 1.791-4 4-4s4 1.791 4 4v12z\"></path></symbol><symbol id=\"icon-question6\" viewBox=\"0 0 64 64\"><path d=\"M32 52c-2.209 0-4-1.791-4-4v-4.11c0-5.639 4.498-9.907 8.847-14.035 3.516-3.337 7.153-6.788 7.153-9.856 0-5.973-4.329-12-14-12-7.148 0-13.13 5.348-13.914 12.44-0.243 2.196-2.218 3.779-4.415 3.536-2.196-0.243-3.779-2.22-3.536-4.415 0.591-5.35 3.128-10.289 7.142-13.907 4.045-3.646 9.274-5.654 14.724-5.654 5.898 0 11.336 1.853 15.312 5.219 4.313 3.651 6.688 8.9 6.688 14.781 0 6.505-5.124 11.368-9.646 15.659-2.978 2.826-6.354 6.030-6.354 8.232l0 4.11c0 2.209-1.791 4-4 4z\"></path><path d=\"M36 60c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z\"></path></symbol><symbol id=\"icon-cross\" viewBox=\"0 0 64 64\"><path d=\"M55.828 13.828l-5.657-5.657-18.172 18.172-18.172-18.172-5.657 5.657 18.172 18.172-18.172 18.172 5.657 5.657 18.172-18.172 18.172 18.172 5.657-5.657-18.172-18.172z\"></path></symbol><symbol id=\"icon-arrow-up3\" viewBox=\"0 0 64 64\"><path d=\"M0 42l6 6 26-26 26 26 6-6-32-32-32 32z\"></path></symbol><symbol id=\"icon-arrow-right3\" viewBox=\"0 0 64 64\"><path d=\"M22 0l-6 6 26 26-26 26 6 6 32-32-32-32z\"></path></symbol><symbol id=\"icon-arrow-down3\" viewBox=\"0 0 64 64\"><path d=\"M64 22l-6-6-26 26-26-26-6 6 32 32 32-32z\"></path></symbol><symbol id=\"icon-arrow-left3\" viewBox=\"0 0 64 64\"><path d=\"M42 64l6-6-26-26 26-26-6-6-32 32 32 32z\"></path></symbol><symbol id=\"icon-sort-amount-desc\" viewBox=\"0 0 64 64\"><path d=\"M20 48v-48h-8v48h-10l14 14 14-14h-10z\"></path><path d=\"M28 0h36v8h-36v-8z\"></path><path d=\"M28 12h28v8h-28v-8z\"></path><path d=\"M28 24h20v8h-20v-8z\"></path><path d=\"M28 36h12v8h-12v-8z\"></path></symbol><symbol id=\"icon-checkbox-checked\" viewBox=\"0 0 64 64\"><path d=\"M56 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM28 49.657l-14.828-14.828 5.657-5.657 9.171 9.171 19.172-19.172 5.657 5.657-24.828 24.828z\"></path></symbol><symbol id=\"icon-paragraph-left\" viewBox=\"0 0 64 64\"><path d=\"M0 4h64v8h-64zM0 20h40v8h-40zM0 52h40v8h-40zM0 36h64v8h-64z\"></path></symbol><symbol id=\"icon-share3\" viewBox=\"0 0 64 64\"><path d=\"M54 44c-2.822 0-5.37 1.171-7.188 3.052l-26.938-13.469c0.082-0.516 0.126-1.044 0.126-1.583s-0.044-1.067-0.126-1.583l26.938-13.469c1.818 1.881 4.366 3.052 7.188 3.052 5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 0.539 0.044 1.067 0.126 1.583l-26.938 13.469c-1.818-1.881-4.366-3.052-7.188-3.052-5.523 0-10 4.477-10 10s4.477 10 10 10c2.822 0 5.37-1.171 7.188-3.052l26.938 13.469c-0.082 0.516-0.126 1.044-0.126 1.583 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z\"></path></symbol></defs></svg>"}</div>`,
  definePath: (template, state) => `<script>` + // `window.__CRITICAL_EXTRA_OLD_IE_FILENAME__ = "${getClientFilePath(
  //     'polyfill.js',
  //     state.localeId
  // )}";` +
  `window.__SERVICE_WORKER_FILENAME__ = "${koot_utils_get_client_file_path__WEBPACK_IMPORTED_MODULE_3___default()('service-worker.js', state.localeId)}";` + `</script>`
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
/* harmony default export */ __webpack_exports__["default"] = (async () => {});

/***/ }),

/***/ "./src/_server/lifecycle/before.js":
/*!*****************************************!*\
  !*** ./src/_server/lifecycle/before.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const proxy = __webpack_require__(/*! koa-proxies */ "koa-proxies");

const {
  portAkigumo,
  devPortAkigumo
} = __webpack_require__(/*! ../../../koot.config */ "./koot.config.js");

/* harmony default export */ __webpack_exports__["default"] = (async app => {
  app.use(proxy('/pics', {
    target:  false ? undefined : process.env.YUUBARI_LOCAL_RUN ? `https://akigumo.fleet.moe` : `http://localhost:${portAkigumo}`,
    changeOrigin: true,
    rewrite: path => path.replace(/^\/pics\//, '/'),
    logs: false
  }));
});

/***/ }),

/***/ "./src/build/webapp/after-server.js":
/*!******************************************!*\
  !*** ./src/build/webapp/after-server.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path");

const getDistPath = __webpack_require__(/*! koot/utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");
/**
 * 在服务器端打包完成后
 * @async
 */


const buildServerAfter = async () => {
  if (process.env.WEBPACK_BUILD_STAGE !== 'server' || "prod" !== 'prod') return;
  /** @type {String} 打包结果路径 */

  const dist = getDistPath(); // 复制文件

  const from = path.resolve(__dirname, 'files-server-deploy');

  for (const filename of fs.readdirSync(from)) {
    await fs.copyFile(path.resolve(from, filename), path.resolve(dist, filename));
  }
};

module.exports = buildServerAfter;
/* WEBPACK VAR INJECTION */}.call(this, "src\\build\\webapp"))

/***/ }),

/***/ "./src/build/webapp/before.js":
/*!************************************!*\
  !*** ./src/build/webapp/before.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname, module) {const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path");

const spinner = __webpack_require__(/*! ../../scripts/commons/spinner */ "./src/scripts/commons/spinner.js");
/** @type {Boolean} 标记流程是否已运行 */


let complete = false;

const webappBefore = async (data = {}) => {
  let {
    dist
  } = data;

  if (!dist) {
    dist = (() => {
      const {
        dist
      } = __webpack_require__(/*! ../../../koot.config */ "./koot.config.js");

      if (path.isAbsolute(dist)) return dist;
      return path.resolve(__dirname, '../../../', dist);
    })();
  }

  if (complete) return;

  if (false) {}

  const channel = __webpack_require__(/*! ../../channel */ "./src/channel.js");

  const repoPath = (() => {
    if (channel === 'yuubari') return 'git@github.com:TeamFleet/yuubari-server.git';
    return '';
  })();

  const isDistRepo = fs.existsSync(dist) && fs.existsSync(path.resolve(dist, '.git'));
  const step = '准备打包结果目录';
  const waiting = spinner(step + '...'); // 如果目标路径存在但不是 git 项目，删除，git clone

  if (!isDistRepo) {
    await fs.remove(dist);
    await fs.ensureDir(dist);

    const git = __webpack_require__(/*! simple-git/promise */ "./node_modules/simple-git/promise.js")(dist);

    await git.clone(repoPath, dist, ['--depth', '1']).catch(err => {
      waiting.fail(err);
    });
  }

  const git = __webpack_require__(/*! simple-git/promise */ "./node_modules/simple-git/promise.js")(dist);
  /** @type {Boolean} 是否有 git repo 操作权限 */


  const hasGitAccess = await (async () => {
    let err;
    git.silent(true);
    await git.push('origin', 'master').catch(e => {
      err = e;
    });
    git.silent(false);
    if (err instanceof Error) err = err.message;
    if (typeof err === 'string') return !/permission.+denied/i.test(err);
    return true;
  })();

  if (hasGitAccess) {
    // 如果有操作权限，git pull
    await git.reset('hard');
    await git.clean('f');
    await git.pull();
  }

  waiting.stop(); // spinner(step).succeed()

  complete = true;
};

if (!module || !module.parent) webappBefore({
  dist: path.resolve(__dirname, '../../../', 'dist-webapp')
});else module.exports = webappBefore;
/* WEBPACK VAR INJECTION */}.call(this, "src\\build\\webapp", __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/channel.js":
/*!************************!*\
  !*** ./src/channel.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path");

module.exports = /^yuubari/i.test(fs.readJsonSync(path.resolve(__dirname, '../package.json')).description) ? 'yuubari' : 'stable';
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/defines.js":
/*!************************!*\
  !*** ./src/defines.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const {
  bgimgs: pathBgimgs,
  // nodeModules: pathNodeModules,
  assets: pathAssets,
  src: {
    ui: pathUI
  }
} = __webpack_require__(/*! ./directories */ "./src/directories.js");

module.exports = {
  __CHANNEL__: JSON.stringify(__webpack_require__(/*! ./channel */ "./src/channel.js")),
  __BGIMG_LIST__: JSON.stringify(fs.readdirSync(pathBgimgs).filter(file => !fs.lstatSync(path.resolve(pathBgimgs, file)).isDirectory() && path.extname(path.resolve(pathBgimgs, file)) === '.jpg')),
  // __SWIPER_CSS__: JSON.stringify(
  //     fs.readFileSync(
  //         path.resolve(pathNodeModules, 'swiper/dist/css/swiper.min.css'),
  //         'utf-8'
  //     )
  // ),
  __SVG_SYMBOLS__: JSON.stringify(fs.readFileSync(path.resolve(pathAssets, './symbols/symbol-defs.svg'), 'utf8').replace(/<title>(.+?)<\/title>/g, '').replace(/\n/g, '')),
  __DEV_COMPONENTS_ROUTES__: JSON.stringify((() => {
    const dir = path.resolve(pathUI, 'pages/dev/components');
    return fs.readdirSync(dir).filter(filename => fs.lstatSync(path.resolve(dir, filename)).isDirectory()).map(dirname => ({
      name: dirname.replace(/／/g, '/'),
      path: dirname.replace(/／/g, '-'),
      dirname
    }));
  })())
};

/***/ }),

/***/ "./src/directories.js":
/*!****************************!*\
  !*** ./src/directories.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {// const getDistPath = require('koot/utils/get-dist-path');
const path = __webpack_require__(/*! path */ "path");

const pathRoot = path.resolve(__dirname, '../');
const pathSrc = path.resolve(pathRoot, './src');
module.exports = {
  root: pathRoot,
  assets: path.resolve(pathSrc, './assets'),
  pics: path.resolve(pathRoot, './pics'),
  nodeModules: path.resolve(pathRoot, './node_modules'),
  bgimgs: path.resolve(pathRoot, './node_modules/whocallsthefleet-backgrounds/output'),
  static: path.resolve(__dirname, '../.static'),
  src: {
    _: pathSrc,
    ui: path.resolve(pathSrc, './ui')
  } // getDist: () => getDistPath(),
  // getDistPublic: () => path.resolve(getDistPath(), 'public')
  // getDistIncludes: () => path.resolve(getDistPath(), 'public/includes'),
  // dist: {
  //     _: pathDist,
  //     public: path.resolve(pathDist, './public'),
  //     includes: path.resolve(pathDist, './public/includes'),
  // }

};
/* WEBPACK VAR INJECTION */}.call(this, "src"))

/***/ }),

/***/ "./src/locales/index.js":
/*!******************************!*\
  !*** ./src/locales/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ['zh', 'en', 'ja'];

/***/ }),

/***/ "./src/scripts sync recursive":
/*!**************************!*\
  !*** ./src/scripts sync ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src/scripts sync recursive";

/***/ }),

/***/ "./src/scripts/clean-web-sourcemap.js":
/*!********************************************!*\
  !*** ./src/scripts/clean-web-sourcemap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const glob = __webpack_require__(/*! glob */ "glob");

const spinner = __webpack_require__(/*! ./commons/spinner */ "./src/scripts/commons/spinner.js");

module.exports = async (kootConfig = {}) => {
  // console.log('cleaning source-maps...')
  const waiting = spinner('Cleaning source-maps...');
  const {
    __WEBPACK_OUTPUT_PATH: pathPublic
  } = kootConfig;
  const removed = [];
  const modified = [];
  let files;
  files = await new Promise((resolve, reject) => {
    glob(path.resolve(pathPublic, '**', '*.map'), {}, (err, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });

  for (let file of files) {
    await fs.removeSync(file);
    removed.push(file);
  } // modify js/css files


  files = await new Promise((resolve, reject) => {
    glob(path.resolve(pathPublic, '**', '*.+(js|css)'), {}, (err, files) => {
      if (err) return reject(err);
      resolve(files);
    });
  });

  for (let file of files) {
    const content = await fs.readFile(file, 'utf-8');
    const regex = /\r?\n\/\/# sourceMappingURL=.+$/;

    if (regex.test(content)) {
      await fs.writeFile(file, content.replace(regex, ''), 'utf-8');
      modified.push(file);
    }
  }

  waiting.succeed();

  const logResult = (arr, title) => {
    if (arr.length) {
      console.log(`  > ${title}:`);
      arr.forEach(file => {
        console.log(`    > ${path.relative(pathPublic, file)}`);
      });
    }
  };

  logResult(removed, 'Removed');
  logResult(modified, 'Modified');
};

/***/ }),

/***/ "./src/scripts/commons/consts.js":
/*!***************************************!*\
  !*** ./src/scripts/commons/consts.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const spinners = __webpack_require__(/*! cli-spinners */ "cli-spinners");

module.exports = {
  spinner: spinners.dots
};

/***/ }),

/***/ "./src/scripts/commons/progress.js":
/*!*****************************************!*\
  !*** ./src/scripts/commons/progress.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ProgressBar = __webpack_require__(/*! progress */ "progress");

const spinner = __webpack_require__(/*! ./spinner */ "./src/scripts/commons/spinner.js");

const {
  spinner: spinnerObj
} = __webpack_require__(/*! ./consts */ "./src/scripts/commons/consts.js");

class Progress {
  constructor({
    title,
    total
  }) {
    // this.bar
    // this.interval
    this.title = title;
    this.currentFrame = 0;
    this.bar = new ProgressBar(`:symbol ${title} [:bar] :current / :total`, {
      total,
      width: 20,
      complete: '■',
      incomplete: '─',
      clear: true
    });
    this.symbolTicking();
    this.interval = setInterval(() => this.symbolTicking(), spinnerObj.interval);
  }

  symbolTicking() {
    if (!this.bar) return;
    this.bar.tick(0, {
      symbol: '\x1b[36m' + spinnerObj.frames[this.currentFrame] + '\x1b[0m'
    });
    this.currentFrame++;

    if (this.currentFrame > spinnerObj.frames.length - 1) {
      this.currentFrame = 0;
    }
  }

  tick() {
    if (!this.bar) return;
    this.bar.tick(); // console.log(' | ', this.bar.curr, this.bar.total)

    if (this.bar.complete) {
      this.complete();
    } // if (this.bar.curr >= this.bar.total) {
    //     this.complete()
    // }

  }

  complete() {
    if (!this.bar) return;

    if (this.bar.complete) {
      clearInterval(this.interval);
      this.bar.terminate();
      spinner(this.title).finish();
      this.bar = undefined;
    }
  }

}

module.exports = Progress;

/***/ }),

/***/ "./src/scripts/commons/spinner.js":
/*!****************************************!*\
  !*** ./src/scripts/commons/spinner.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ora = __webpack_require__(/*! ora */ "ora");

const {
  spinner
} = __webpack_require__(/*! ./consts */ "./src/scripts/commons/consts.js");

module.exports = (options = {}) => {
  const waiting = ora(Object.assign({
    spinner,
    color: 'cyan'
  }, typeof options === 'string' ? {
    text: options
  } : options)).start(); // waiting.finish = (options = {}) => {
  //     waiting.stopAndPersist(Object.assign({
  //         symbol: '\x1b[32m' + '√' + '\x1b[0m'
  //     }, options))
  //     // waiting.color = 'green'
  // }

  waiting.finish = waiting.succeed;
  return waiting;
};

/***/ }),

/***/ "./src/scripts/copyfiles.js":
/*!**********************************!*\
  !*** ./src/scripts/copyfiles.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const path = __webpack_require__(/*! path */ "path");

const md5File = __webpack_require__(/*! md5-file */ "md5-file"); // const ncp = require('ncp').ncp


const getDistPath = __webpack_require__(/*! koot/utils/get-dist-path */ "./node_modules/koot/utils/get-dist-path.js");

const {
  root: dirRoot,
  pics: dirPics // dist: {
  //     includes: dirIncludes,
  // }

} = __webpack_require__(/*! ../directories */ "./src/directories.js");

const spinner = __webpack_require__(/*! ./commons/spinner */ "./src/scripts/commons/spinner.js");

const Progress = __webpack_require__(/*! ./commons/progress */ "./src/scripts/commons/progress.js");

module.exports = async (kootConfig = {}) => {
  // const dirIncludes = getDistIncludes();
  const title = 'Copying files...';
  const waiting = spinner(title);
  const {
    WEBPACK_BUILD_ENV: ENV // WEBPACK_BUILD_STAGE: STAGE,

  } = process.env; // console.log(dirDist)
  // console.log(dirBgimgs)

  const {
    __CLIENT_ROOT_PATH
  } = kootConfig;
  const list = []; // if (ENV === 'prod' && !process.env.quickStart)
  //     list.push(...(await getPics(kootConfig)));

  list.forEach(o => {
    o.to = path.resolve(__CLIENT_ROOT_PATH, o.to);
  });
  waiting.stop();
  if (!list.length) return;
  const bar = new Progress({
    title,
    total: list.length
  });

  for (const {
    from,
    to
  } of list) {
    if (!fs.existsSync(from)) continue;else if (!fs.existsSync(to)) await fs.copy(from, to);else if (fs.lstatSync(from).isDirectory() || fs.lstatSync(to).isDirectory()) await fs.copy(from, to);else if (md5File.sync(from) !== md5File.sync(to)) await fs.copy(from, to); // await new Promise((resolve, reject) => {
    //     console.log(' ')
    //     console.log(o.from)
    //     console.log(o.to)
    //     ncp(o.from, o.to, function (err) {
    //         if (err) {
    //             console.log(err)
    //             return reject(err);
    //         }
    //         resolve('done!');
    //     });
    // })
    // await new Promise(resolve => {
    //     setTimeout(() => {
    //         resolve()
    //     }, 1000)
    // })

    bar.tick();
  }

  bar.complete();
};

const getPics = async (kootConfig = {}) => {
  // TODO: check version to overwrite
  // const dirTo = '../../pics';
  const dirTo = path.resolve(getDistPath(), 'pics');
  const results = [];
  let ships;
  const filelist = {
    ships: ['0', '0-1', '0-2'],
    shipsExtra: ['8', '9'],
    equipments: ['card']
  };

  const getDb = async dbname => {
    const arr = [];
    await new Promise((resolve, reject) => {
      fs.readFile(path.resolve(dirRoot, `./node_modules/whocallsthefleet-database/db/${dbname}.nedb`), 'utf-8', (err, data) => {
        if (err) reject(err);
        data.split(/\r?\n/).forEach(item => {
          if (!item) return;
          arr.push(JSON.parse(item));
        });
        resolve();
      });
    });
    return arr;
  };

  const readdir = async dir => {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if (err) reject(err);
        resolve(files);
      });
    });
  };

  const checkAndCopy = async (type, id, listBasename) => {
    const dir = path.join(dirPics, type, id);
    const files = await readdir(dir);
    files.forEach(filename => {
      const extname = path.extname(filename);
      const basename = path.basename(filename, extname);
      if (Array.isArray(listBasename) && !listBasename.includes(basename)) return; // const target = path.join(dirTarget, type, id, filename)
      // if (!fs.existsSync(target))

      resultAdd(type, id, filename);
    });
  };

  const resultAdd = (type, id, file) => {
    // console.log(type, id, file)
    results.push({
      // context: path.resolve(dirPics),
      // from: `${type}/${id}/${file}`,
      from: path.resolve(dirPics, type, id, file),
      to: `${dirTo}/${type}/${id}/${file}`
    });
  };

  for (const type of await readdir(dirPics)) {
    const dirType = path.join(dirPics, type);

    for (const id of await readdir(dirType)) {
      switch (type) {
        case 'ships':
          {
            if (!ships) {
              ships = {};

              for (const ship of await getDb('ships')) {
                ships[ship.id] = ship;
              }
            }

            if (ships[id] && ships[id].illust_same_as_prev) {
              // console.log(id, ships[id].name.ja_jp)
              await checkAndCopy(type, id, filelist.ships);
            } else await checkAndCopy(type, id, [...filelist.ships, '8', '9', '10', 'special']);

            break;
          }

        case 'ships-extra':
          await checkAndCopy(type, id, filelist.shipsExtra);
          break;

        case 'equipments':
          await checkAndCopy(type, id, filelist.equipments);
          break;

        default:
          await checkAndCopy(type, id);
          break;
      }
    }
  } // enemies
  // console.log(results)


  return results;
};

/***/ }),

/***/ "./src/scripts/database/equipment-collections.js":
/*!*******************************************************!*\
  !*** ./src/scripts/database/equipment-collections.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jsonPretty = __webpack_require__(/*! json-pretty */ "json-pretty");

const Datastore = __webpack_require__(/*! nedb-promise */ "nedb-promise");

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

let db = {};
let equipmentCollections = [];
let equipmentCollectionsPretty = [];
let equipmentTypesAppended = [];

const appendCollection = async (index, name, types) => {
  if (!name.ja_jp) name.ja_jp = name.zh_cn;
  if (!name.en_us) name.en_us = name.ja_jp;

  const initSublist = (type, index, subIndex) => {
    equipmentCollections[index].list[subIndex] = {
      type: type,
      equipments: []
    };
  };

  let subIndex = undefined;

  if (Array.isArray(index)) {
    subIndex = index[1];
    index = index[0];
  }

  if (typeof equipmentCollections[index] === 'undefined') {
    equipmentCollections[index] = {
      name,
      list: []
    };
  }

  let promises = types.map(async type => new Promise(async function (resolve
  /*, reject*/
  ) {
    let thisSubIndex; // console.log(subIndex)

    if (typeof subIndex === 'undefined') {
      thisSubIndex = equipmentCollections[index].list.length;
      initSublist(type, index, thisSubIndex);
    } else {
      thisSubIndex = subIndex;
    } // console.log(name.zh_cn, type, expandClass, index, thisSubIndex)


    let equipmentType = (await db.equipmentTypes.cfind({
      id: type
    }).exec())[0]; // equipmentType = equipmentType[0]

    let equipments = await db.equipments.cfind({
      type: type
    }).sort({
      [`stat.${equipmentType.main_attribute || 'fire'}`]: 1,
      'rarity': 1,
      id: 1
    }).exec(); // console.log(ships.map(ship => ship.id))

    equipments.forEach(equipment => {
      const l = equipmentCollections[index].list[thisSubIndex].equipments; // console.log(l.length)
      // console.log(name.zh_cn, equipmentType.name.zh_cn, index, thisSubIndex, l.length, equipment.name.zh_cn)

      l.push(equipment);
    });
    equipmentTypesAppended.push(type);
    resolve();
  }));
  await Promise.all(promises);
};

module.exports = async (dbpath, topath) => {
  // console.log('  > Creating equipment collections...')
  // 初始化db
  db.equipments = new Datastore({
    filename: path.resolve(dbpath, 'items.nedb'),
    autoload: true
  });
  db.equipmentTypes = new Datastore({
    filename: path.resolve(dbpath, 'item_types.nedb'),
    autoload: true
  });
  db.equipmentTypeCollections = new Datastore({
    filename: path.resolve(dbpath, 'item_type_collections.nedb'),
    autoload: true
  }); // 载入所有 equipmentTypeCollections 数据，生成简易表

  let equipmentTypeCollections = await db.equipmentTypeCollections.cfind({}).sort({
    id: 1
  }).projection({
    name: 1,
    types: 1,
    _id: 0
  }).exec(); // 根据已载入数据生成 collection

  await Promise.all(equipmentTypeCollections.map(async (collection, index) => new Promise(async function (resolve
  /*, reject*/
  ) {
    await appendCollection(index, collection.name, collection.types);
    resolve();
  }))); // 从db载入未处理过的装备，加入到collection中

  let equipmentsRemains = await db.equipments.cfind({
    type: {
      $nin: equipmentTypesAppended
    }
  }).exec();

  if (Array.isArray(equipmentsRemains) && equipmentsRemains.length) {
    // console.log(equipmentsRemains, equipmentsRemains.map(ship => [ship]))
    equipmentCollections[equipmentCollections.length - 1].list.push({
      type: null,
      equipments: equipmentsRemains.map(equipment => [equipment])
    });
  } // 将空数据过滤删除


  equipmentCollections = equipmentCollections.filter(collection => {
    collection.list = collection.list.filter(types => types.equipments.length > 0);
    return collection.list.length > 0;
  }); // 遍历全部collection，将ship object替换为shipId，并生成可读版

  equipmentCollections.forEach((collection, indexCollection) => {
    equipmentCollectionsPretty[indexCollection] = {
      name: collection.name.ja_jp,
      list: []
    };
    collection.list.forEach((equipmentType, indexEquipmentType) => {
      equipmentCollectionsPretty[indexCollection].list[indexEquipmentType] = {
        type: `[${equipmentType.type}]`,
        equipments: equipmentType.equipments.map(equipment => `[${equipment.id}] ${equipment.name.ja_jp}`)
      };
      equipmentCollections[indexCollection].list[indexEquipmentType] = {
        type: equipmentType.type,
        equipments: equipmentType.equipments.map(equipment => equipment.id)
      };
    });
  }); // 写入文件

  fs.writeFileSync(path.resolve(topath, 'equipment_collections.json'), JSON.stringify(equipmentCollections), 'utf-8');
  fs.writeFileSync(path.resolve(topath, 'equipment_collections_pretty.json'), jsonPretty(equipmentCollectionsPretty), 'utf-8'); // console.log('    > COMPLETE')
};

/***/ }),

/***/ "./src/scripts/database/ship-collections.js":
/*!**************************************************!*\
  !*** ./src/scripts/database/ship-collections.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jsonPretty = __webpack_require__(/*! json-pretty */ "json-pretty");

const Datastore = __webpack_require__(/*! nedb-promise */ "nedb-promise");

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const kckit = __webpack_require__(/*! kckit */ "kckit");

const camelCase = __webpack_require__(/*! camelcase */ "camelcase");

let db = {};
let shipCollections = [];
let shipCollectionsPretty = [];
let shipSeriesInCollection = [];
let shipTypesAppended = [];
let shipSeries = {};
let shipClassInited = {};
let data = {};

const appendCollection = async (index, name, types, expandClass) => {
  const initSublist = (type, index, subIndex) => {
    shipCollections[index].list[subIndex] = {
      type: type,
      ships: []
    };
    shipSeriesInCollection[index][subIndex] = {};
  };

  let subIndex = undefined;

  if (Array.isArray(index)) {
    subIndex = index[1];
    index = index[0];
  }

  if (typeof expandClass === 'undefined') expandClass = types.length < 2;

  if (typeof shipCollections[index] === 'undefined') {
    shipCollections[index] = {
      name,
      list: []
    };
    shipSeriesInCollection[index] = [];
  }

  let promises = types.map(async type => new Promise(async function (resolve
  /*, reject*/
  ) {
    let thisSubIndex;

    if (Array.isArray(type)) {
      let subIndex = shipCollections[index].list.length;
      initSublist(type[0], index, subIndex);
      await appendCollection([index, subIndex], name, type, expandClass);
      resolve();
      return;
    } else {
      // console.log(subIndex)
      if (typeof subIndex === 'undefined') {
        thisSubIndex = shipCollections[index].list.length;
        initSublist(type, index, thisSubIndex);
      } else {
        thisSubIndex = subIndex;
      }
    } // console.log(name.zh_cn, type, expandClass, index, thisSubIndex)


    let ships = await db.ships.cfind({
      type: type
    }).sort({
      'class': 1,
      'class_no': 1,
      'name.ja_jp': 1,
      'name.suffix': 1,
      series: 1,
      suffix: 1,
      id: 1,
      'time_created': 1
    }).exec();
    if (!shipClassInited[index]) shipClassInited[index] = []; // if (expandClass) thisSubIndex = -1
    // console.log(ships.map(ship => ship._navy))

    try {
      ships // .sort((a, b) => (
      //     data.ships[a.id].series !== data.ships[b.id].series
      //         ? 1
      //         : 0
      //     // getShip(a).series - getShip(b).series
      // ))
      // .sort((a, b) => {
      //     const navyA = data.ships[a.id]._navy || 'ijn'
      //     const navyB = data.ships[b.id]._navy || 'ijn'
      //     if (navyA === 'ijn') return -1
      //     if (navyB === 'ijn') return 1
      //     if (navyA < navyB) return -1
      //     if (navyA > navyB) return 1
      //     return 0;
      // })
      .forEach(ship => {
        const series = ship.series;
        let listSeries;

        if (expandClass && shipClassInited[index].indexOf(ship.class) < 0) {
          // console.log(ship.class)
          thisSubIndex = shipClassInited[index].length; // thisSubIndex++
          // classIndex[ship.class_no] = thisSubIndex

          shipCollections[index].list[thisSubIndex] = {
            type: type,
            class: ship.class,
            ships: []
          };
          shipSeriesInCollection[index][thisSubIndex] = {};
          shipClassInited[index].push(ship.class);
        }

        if (typeof shipSeriesInCollection[index][thisSubIndex][series] === 'undefined') {
          const i = shipCollections[index].list[thisSubIndex].ships.length;
          shipSeriesInCollection[index][thisSubIndex][series] = i;
          shipCollections[index].list[thisSubIndex].ships[i] = [];
          listSeries = shipCollections[index].list[thisSubIndex].ships[i];
        } else {
          listSeries = shipCollections[index].list[thisSubIndex].ships[shipSeriesInCollection[index][thisSubIndex][series]];
        }

        listSeries[shipSeries[series].indexOf(ship.id)] = ship; // console.log(listSeries)
      });
    } catch (e) {
      console.log(e);
    }

    shipTypesAppended.push(type);
    resolve();
  }));
  await Promise.all(promises);
};

const initDatabase = async dbpath => {
  const raw = {};
  const dbnames = ['ships', 'ship_types', 'ship_classes', 'ship_namesuffix', 'ship_series', 'items', 'item_types', 'entities', 'consumables', 'exillusts', 'exillust_types'];

  for (let dbname of dbnames) {
    const type = camelCase(dbname);
    raw[type] = await new Promise((resolve, reject) => {
      fs.readFile(path.resolve(dbpath, `./${dbname}.nedb`), 'utf-8', (err, data) => {
        if (err) reject(err);else resolve(data);
      });
    });
  }

  return kckit.parseRaw(raw);
};

module.exports = async (dbpath, topath) => {
  // console.log('  > Creating ship collections...')
  data = await initDatabase(dbpath);
  kckit.register({
    db: data
  }); // console.log(data.ships)
  // 初始化db

  db.ships = new Datastore({
    filename: path.resolve(dbpath, 'ships.nedb'),
    autoload: true
  });
  db.shipTypeCollections = new Datastore({
    filename: path.resolve(dbpath, 'ship_type_collections.nedb'),
    autoload: true
  });
  db.shipSeries = new Datastore({
    filename: path.resolve(dbpath, 'ship_series.nedb'),
    autoload: true
  }); // 载入所有shipTypeCollections数据，生成简易表

  let shipTypeCollections = await db.shipTypeCollections.cfind({}).sort({
    id: 1
  }).projection({
    name: 1,
    types: 1,
    _id: 0
  }).exec(); // 载入所有shipSeries数据，生成简易表

  let series = await db.shipSeries.cfind({}).exec();
  series.forEach(doc => {
    shipSeries[parseInt(doc.id)] = doc.ships.map(ship => ship.id);
  }); // 根据已载入数据生成collection

  await Promise.all(shipTypeCollections.map(async (collection, index) => new Promise(async function (resolve
  /*, reject*/
  ) {
    await appendCollection(index, collection.name, collection.types);
    resolve();
  }))); // 从db载入未处理过的舰娘，加入到collection中

  let shipsRemains = await db.ships.cfind({
    type: {
      $nin: shipTypesAppended
    }
  }).exec();

  if (Array.isArray(shipsRemains) && shipsRemains.length) {
    // console.log(shipsRemains, shipsRemains.map(ship => [ship]))
    shipCollections[shipCollections.length - 1].list.push({
      type: null,
      ships: shipsRemains.map(ship => [ship])
    });
  } // 将空数据过滤删除


  shipCollections = shipCollections.filter(collection => {
    collection.list = collection.list.filter(types => {
      types.ships = types.ships.filter(series => series.length > 0);
      return types.ships.length > 0;
    });
    return collection.list.length > 0;
  }); // 遍历全部collection，根据海军排序

  shipCollections.forEach((collection, indexCollection) => {
    collection.list.forEach((shipType, indexShipType) => {
      shipType.ships.filter(arr => Array.isArray(arr) && arr.length);
      shipType.ships.forEach((series, indexSeries) => {
        shipCollections[indexCollection].list[indexShipType].ships[indexSeries] = series.filter(ship => ship ? true : false);
      });
    });

    if (collection.list[0].class) {
      collection.list.sort((a, b) => {
        const shipA = a.ships[0][0];
        const shipB = b.ships[0][0];
        const navyA = data.ships[shipA.id]._navy || 'ijn';
        const navyB = data.ships[shipB.id]._navy || 'ijn';
        if (navyA === 'ijn' && navyB === 'ijn') return a.class - b.class;
        if (navyA < navyB) return -1;
        if (navyA > navyB) return 1;
        return 0;
      });
    } else {
      collection.list.forEach(shipType => {
        shipType.ships.sort((a, b) => {
          // console.log(a)
          const navyA = data.ships[a[0].id]._navy || 'ijn';
          const navyB = data.ships[b[0].id]._navy || 'ijn';
          if (navyA === 'ijn' && navyB === 'ijn') return data.ships[a[0].id].class - data.ships[b[0].id].class; // if (navyA === 'ijn') return 0
          // if (navyB === 'ijn') return 0

          if (navyA < navyB) return -1;
          if (navyA > navyB) return 1;
          return 0;
        });
      });
    }
  }); // 遍历全部collection，将ship object替换为shipId，并生成可读版

  shipCollections.forEach((collection, indexCollection) => {
    shipCollectionsPretty[indexCollection] = {
      name: collection.name.ja_jp,
      list: []
    };
    collection.list.forEach((shipType, indexShipType) => {
      shipCollectionsPretty[indexCollection].list[indexShipType] = {
        type: shipType.type,
        ships: []
      };
      if (shipType.class) shipCollectionsPretty[indexCollection].list[indexShipType].class = shipType.class;
      shipType.ships.forEach((series, indexSeries) => {
        shipCollectionsPretty[indexCollection].list[indexShipType].ships[indexSeries] = series.filter(ship => ship ? true : false).map(ship => `${ship.name.ja_jp} (ID: ${ship.id}, Suffix: ${ship.name.suffix}, Series: ${ship.series})`);
        shipCollections[indexCollection].list[indexShipType].ships[indexSeries] = series.filter(ship => ship ? true : false).map(ship => ship.id);
      });
    });
  }); // 写入文件

  fs.writeFileSync(path.resolve(topath, 'ship_collections.json'), // LZString.compressToEncodedURIComponent(shipCollections),
  JSON.stringify(shipCollections), 'utf-8');
  fs.writeFileSync(path.resolve(topath, 'ship_collections_pretty.json'), // LZString.compressToEncodedURIComponent(shipCollections),
  jsonPretty(shipCollectionsPretty), 'utf-8'); // console.log('    > COMPLETE')
};

/***/ }),

/***/ "./src/scripts/validate-database-files.js":
/*!************************************************!*\
  !*** ./src/scripts/validate-database-files.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const LZString = __webpack_require__(/*! lz-string */ "lz-string");

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const spinner = __webpack_require__(/*! ./commons/spinner */ "./src/scripts/commons/spinner.js");

const {
  src: {
    _: pathApp
  }
} = __webpack_require__(/*! ../directories */ "./src/directories.js");

const dbpath = path.resolve(process.cwd(), 'node_modules', 'whocallsthefleet-database', 'db');
const topath = path.resolve(pathApp, 'database', 'db');
const topathJson = path.resolve(pathApp, 'database', 'json');
/**
 * 预处理所有 .nedb database 文件
 * @async
 */

module.exports = async () => {
  const stepCompressing = spinner('Compressing database...');
  const succeed = []; // ensure and empty target dir

  fs.ensureDirSync(topath);
  fs.emptyDirSync(topath);
  fs.ensureDirSync(topathJson);
  fs.emptyDirSync(topathJson);
  fs.readdirSync(dbpath).forEach(file => {
    let content = fs.readFileSync(path.resolve(dbpath, file), 'utf8');

    switch (file) {
      case 'entities.nedb':
        content = content.split(/\r?\n/).filter(line => typeof line !== 'undefined' && line).map(line => {
          const json = JSON.parse(line);
          delete json.picture;
          return JSON.stringify(json);
        }).join('\n') + '\r'; // fs.writeFile(
        //     path.resolve(topath, file + '.test'),
        //     content,
        //     'utf-8'
        // )

        break;

      default:
        {}
    }

    const {
      name,
      ext
    } = path.parse(file);
    fs.writeFile(path.resolve(topath, ext === '.json' ? `${name}.json-compressed` : file), LZString.compressToEncodedURIComponent(content), 'utf-8');
    succeed.push(file);
  });
  stepCompressing.succeed();
  succeed.forEach(file => {
    console.log('  > ' + file);
  });
  const stepCollections = spinner('Creating collections...');
  await __webpack_require__(/*! ./database/ship-collections.js */ "./src/scripts/database/ship-collections.js")(dbpath, topathJson);
  await __webpack_require__(/*! ./database/equipment-collections.js */ "./src/scripts/database/equipment-collections.js")(dbpath, topathJson);
  stepCollections.succeed();
}; // run()

/***/ }),

/***/ "./src/scripts/validate-less-variables.js":
/*!************************************************!*\
  !*** ./src/scripts/validate-less-variables.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs-extra */ "fs-extra");

const kckit = __webpack_require__(/*! kckit */ "kckit");

const sizeOf = __webpack_require__(/*! image-size */ "image-size");

const spinner = __webpack_require__(/*! ./commons/spinner */ "./src/scripts/commons/spinner.js");

const {
  assets: pathAssets,
  src: {
    _: pathApp,
    ui: pathAppUI
  }
} = __webpack_require__(/*! ../directories */ "./src/directories.js"); // const pathAssets = path.resolve(process.cwd(), 'src/app/client/assets/')


const pathfile = path.resolve(pathAppUI, './base/less/variables.less');

module.exports = async () => {
  const waiting = spinner('Validating less variables...');
  const results = [];
  let content = await new Promise((resolve, reject) => {
    fs.readFile(pathfile, 'utf-8', (err, data) => {
      if (err) reject(err);else resolve(data);
    });
  }); // max ship level

  content = content.replace(/@maxlv:([ \t]*)([0-9]+);/g, `@maxlv:$1${parseInt(kckit.maxShipLv)};`); // equipment icons count

  {
    const dimensions = sizeOf(path.resolve(pathAssets, 'equiptypeicon.png'));
    const count = Math.ceil(dimensions.height / dimensions.width);
    content = content.replace(/@equipment-icons-count:([ \t]*)([0-9]+);/g, `@equipment-icons-count:$1${parseInt(count)};`);
    results.push([`equipment-icons-count`, parseInt(count)]);
  } // equipment list stat columns count

  {
    const stats = __webpack_require__("./src/scripts sync recursive")(path.resolve(__dirname, '../constants/equipment-stats.js')); // path.resolve(pathApp, 'constants/', 'equipment-stats')


    content = content.replace(/@equipment-list-stat-count:([ \t]*)([0-9]+);/g, `@equipment-list-stat-count:$1${parseInt(stats.length + 2)};`);
    results.push([`equipment-list-stat-count`, parseInt(stats.length + 2)]);
  } // navy flags count

  {
    const dimensions = sizeOf(path.resolve(pathAssets, 'navy-flags/normal.png'));
    const count = Math.floor(dimensions.height / (dimensions.width - 1));
    content = content.replace(/@navy-flags-count:([ \t]*)([0-9]+);/g, `@navy-flags-count:$1${parseInt(count)};`);
    results.push([`navy-flags-count`, parseInt(count)]);
  }
  await new Promise((resolve, reject) => {
    fs.writeFile(pathfile, content, 'utf-8', err => {
      if (err) reject(err);else resolve();
    });
  });
  waiting.succeed();
  results.forEach(arr => {
    console.log(`  > @${arr[0]}: ${arr[1]}`);
  });
}; // run()
/* WEBPACK VAR INJECTION */}.call(this, "src\\scripts"))

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./node_modules/koot/ReactApp/server ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! L:\Projects\WhoCallsTheFleet\yuubari\node_modules\koot\ReactApp\server */"./node_modules/koot/ReactApp/server/index.js");


/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "camelcase":
/*!****************************!*\
  !*** external "camelcase" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("camelcase");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "cli-spinners":
/*!*******************************!*\
  !*** external "cli-spinners" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cli-spinners");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "glob":
/*!***********************!*\
  !*** external "glob" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("glob");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "image-size":
/*!*****************************!*\
  !*** external "image-size" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("image-size");

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

/***/ "json-pretty":
/*!******************************!*\
  !*** external "json-pretty" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("json-pretty");

/***/ }),

/***/ "kckit":
/*!************************!*\
  !*** external "kckit" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("kckit");

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

/***/ "koa-proxies":
/*!******************************!*\
  !*** external "koa-proxies" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-proxies");

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

/***/ "lz-string":
/*!****************************!*\
  !*** external "lz-string" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lz-string");

/***/ }),

/***/ "md5-file":
/*!***************************!*\
  !*** external "md5-file" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("md5-file");

/***/ }),

/***/ "nedb-promise":
/*!*******************************!*\
  !*** external "nedb-promise" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nedb-promise");

/***/ }),

/***/ "ora":
/*!**********************!*\
  !*** external "ora" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ora");

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

/***/ "progress":
/*!***************************!*\
  !*** external "progress" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("progress");

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

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map