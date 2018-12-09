exports.ids = ["Fleet Builder (WIP)~Fleet Builder Fleet Details"];
exports.modules = {

/***/ "./src/api/fleets/index.js":
/*!*********************************!*\
  !*** ./src/api/fleets/index.js ***!
  \*********************************/
/*! exports provided: default, maxSubFleetCount, defaultShipInFleetCount, maxBaseCount, maxSquadronInBaseCount, isBuildValid, getBuildUrl, decompressBuild, init, newBuild, editBuild, currentChangeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxSubFleetCount\", function() { return maxSubFleetCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultShipInFleetCount\", function() { return defaultShipInFleetCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxBaseCount\", function() { return maxBaseCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maxSquadronInBaseCount\", function() { return maxSquadronInBaseCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBuildValid\", function() { return isBuildValid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBuildUrl\", function() { return getBuildUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decompressBuild\", function() { return decompressBuild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newBuild\", function() { return newBuild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editBuild\", function() { return editBuild; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentChangeTab\", function() { return currentChangeTab; });\n/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lz-string */ \"lz-string\");\n/* harmony import */ var lz_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lz_string__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/action-types */ \"./src/redux/action-types.js\");\n/* harmony import */ var _utils_router_push__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/router-push */ \"./src/utils/router-push.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n // import routerReplace from '@utils/router-replace'\n\n/**************************************\r\n * Nedb store for fleets builds\r\n *************************************/\n\nvar db;\n/* harmony default export */ __webpack_exports__[\"default\"] = (db);\n/**************************************\r\n * Defaults\r\n *************************************/\n\nvar defaults = {\n  history: [],\n  fleets: [],\n  bases: [],\n  name: undefined,\n  lv: -1,\n  note: undefined,\n  theme: 0,\n  currentTab: 0\n};\nvar maxSubFleetCount = 4;\nvar defaultShipInFleetCount = 6;\nvar maxBaseCount = 3;\nvar maxSquadronInBaseCount = 4;\n/**************************************\r\n * Common functions\r\n *************************************/\n\nvar initNedb = function initNedb() {\n  return new Promise(function (resolve) {\n    // 载入Nedb\n    if (typeof Nedb === 'undefined') return __webpack_require__.e(/*! import() | nedb */ \"vendors~nedb\").then(__webpack_require__.t.bind(null, /*! nedb/browser-version/out/nedb.min.js */ \"./node_modules/nedb/browser-version/out/nedb.min.js\", 7)).then(function (module) {\n      // console.log('nedb', module)\n      self.Nedb = module.default;\n      resolve();\n    });\n    return resolve();\n  }) // 初始化Nedb\n  .then(function () {\n    return new Promise(function (resolve, reject) {\n      db = new Nedb({\n        filename: 'fleets',\n        timestampData: true\n      });\n      db.loadDatabase(function (err) {\n        if (err) return reject(err);\n        resolve();\n      });\n    });\n  });\n};\n\nvar getAllBuilds = function getAllBuilds() {\n  return initNedb() // 初始化并读取舰队数据\n  .then(function () {\n    return new Promise(function (resolve, reject) {\n      db.find({}, function (err, docs) {\n        if (err) return reject(err); // console.log('getAllBuilds', docs)\n\n        resolve(docs);\n      });\n    });\n  });\n};\n\nvar isBuildValid = function isBuildValid() {\n  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  return typeof obj._id !== 'undefined' && Array.isArray(obj.fleets) && Array.isArray(obj.bases);\n};\nvar getBuildUrl = function getBuildUrl() {\n  var build = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  if (!isBuildValid(build)) return undefined;\n\n  var data = _objectSpread({}, build);\n\n  delete data.history;\n  delete data.currentTab;\n  return \"/fleets/\".concat(build._id, \".\").concat(Object(lz_string__WEBPACK_IMPORTED_MODULE_0__[\"compressToEncodedURIComponent\"])(JSON.stringify(data)));\n};\nvar decompressBuild = function decompressBuild(str) {\n  return JSON.parse(Object(lz_string__WEBPACK_IMPORTED_MODULE_0__[\"decompressFromEncodedURIComponent\"])(str));\n};\n/**************************************\r\n * Redux actions\r\n *************************************/\n// 初始化\n\nvar init = function init() {\n  return function (dispatch) {\n    return getAllBuilds() // \n    .then(function (builds) {\n      return dispatch({\n        type: _redux_action_types__WEBPACK_IMPORTED_MODULE_1__[\"FLEETS_INIT\"],\n        builds: builds\n      });\n    });\n  };\n}; // 创建配置\n\nvar newBuild = function newBuild(isRedirect) {\n  return function (dispatch) {\n    return initNedb() // 新建一条数据\n    .then(function () {\n      return new Promise(function (resolve, reject) {\n        db.insert(defaults, function (err, newDoc) {\n          // Callback is optional\n          if (err) return reject(err);\n          resolve(newDoc);\n        });\n      });\n    }) // \n    .then(function (newDoc) {\n      dispatch({\n        type: _redux_action_types__WEBPACK_IMPORTED_MODULE_1__[\"FLEETS_NEW_BUILD\"],\n        data: newDoc\n      });\n\n      if (isRedirect) {\n        Object(_utils_router_push__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getBuildUrl(newDoc));\n      }\n\n      return newDoc;\n    });\n  };\n}; // 开始编辑配置\n\nvar editBuild = function editBuild(build, isRedirect) {\n  return function (dispatch) {\n    return initNedb().then(function () {\n      build = Object.assign({}, defaults, build);\n      dispatch({\n        type: _redux_action_types__WEBPACK_IMPORTED_MODULE_1__[\"FLEETS_NEW_BUILD\"],\n        data: build\n      });\n\n      if (isRedirect) {\n        Object(_utils_router_push__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(getBuildUrl(build));\n      }\n\n      return build;\n    });\n  };\n}; // export const removeBuild = (id) => dispatch => dispatch(\n//     actions.removeBuild(id)\n// )\n// export const updateBuild = (id, data) => dispatch => dispatch(\n//     actions.updateBuild(id, data)\n// )\n// export const getBuild = (id) => dispatch => dispatch(\n//     actions.updateBuild(id, data)\n// )\n// 更新当前配置\n\nvar currentChangeTab = function currentChangeTab(tab) {\n  return function (dispatch) {\n    return dispatch({\n      type: _redux_action_types__WEBPACK_IMPORTED_MODULE_1__[\"FLEETS_CURRENT_CHANGE_TAB\"],\n      tab: tab\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/api/fleets/index.js?");

/***/ }),

/***/ "./src/assets/fairies/ooyodo/2.png":
/*!*****************************************!*\
  !*** ./src/assets/fairies/ooyodo/2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/cd67278ffd53dc3920034ca896292bcb.png\";\n\n//# sourceURL=webpack:///./src/assets/fairies/ooyodo/2.png?");

/***/ }),

/***/ "./src/ui/components/loader/fairy-ooyodo-2/index.jsx":
/*!***********************************************************!*\
  !*** ./src/ui/components/loader/fairy-ooyodo-2/index.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sp_css_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sp-css-import */ \"./node_modules/sp-css-import/ImportStyle.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(sp_css_import__WEBPACK_IMPORTED_MODULE_1__[\"ImportStyle\"])(__webpack_require__(/*! ./styles.less */ \"./src/ui/components/loader/fairy-ooyodo-2/styles.less\"))(function (props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", props);\n}));\n\n//# sourceURL=webpack:///./src/ui/components/loader/fairy-ooyodo-2/index.jsx?");

/***/ }),

/***/ "./src/ui/components/loader/fairy-ooyodo-2/styles.less":
/*!*************************************************************!*\
  !*** ./src/ui/components/loader/fairy-ooyodo-2/styles.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports ={wrapper:'e084',css:'.e084{display:inline-block;position:relative;width:6.65rem;height:6.25rem;background:url(' + __webpack_require__(/*! ./src/assets/fairies/ooyodo/2.png */ \"./src/assets/fairies/ooyodo/2.png\") + ') no-repeat 50% 0/contain;-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite}@-webkit-keyframes loader-fairy-ooyodo-2{.e084 0%{-webkit-transform:none;transform:none}.e084 10%{-webkit-transform:none;transform:none}.e084 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.e084 30%{-webkit-transform:none;transform:none}.e084 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.e084 50%{-webkit-transform:none;transform:none}.e084 to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}'}\n\n//# sourceURL=webpack:///./src/ui/components/loader/fairy-ooyodo-2/styles.less?");

/***/ }),

/***/ "./src/ui/containers/center/index.jsx":
/*!********************************************!*\
  !*** ./src/ui/containers/center/index.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CenterContainer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var sp_css_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sp-css-import */ \"./node_modules/sp-css-import/ImportStyle.js\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.less */ \"./src/ui/containers/center/styles.less\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_2__);\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar CenterContainer = (_dec = Object(sp_css_import__WEBPACK_IMPORTED_MODULE_1__[\"ImportStyle\"])(_styles_less__WEBPACK_IMPORTED_MODULE_2___default.a), _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(CenterContainer, _React$Component);\n\n  function CenterContainer() {\n    _classCallCheck(this, CenterContainer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CenterContainer).apply(this, arguments));\n  }\n\n  _createClass(CenterContainer, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className\n      }, this.props.children);\n    }\n  }]);\n\n  return CenterContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);\n\n\n//# sourceURL=webpack:///./src/ui/containers/center/index.jsx?");

/***/ }),

/***/ "./src/ui/containers/center/styles.less":
/*!**********************************************!*\
  !*** ./src/ui/containers/center/styles.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports ={wrapper:'f4f0',css:'.f4f0{max-width:60rem}@media screen and (min-width:1600px){.f4f0{margin-left:calc(50vw - 37.5rem)}}'}\n\n//# sourceURL=webpack:///./src/ui/containers/center/styles.less?");

/***/ }),

/***/ "./src/utils/router-push.js":
/*!**********************************!*\
  !*** ./src/utils/router-push.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koot */ \"./node_modules/koot/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (uri) {\n  if (true) return; // console.log(\n  //     (__SPA__ ? '' : location.pathname)\n  //     + (uri.substr(0, 1) !== '/' ? '/' : '')\n  //     + uri\n  // )\n\n  koot__WEBPACK_IMPORTED_MODULE_0__[\"history\"].push((uri.substr(0, 1) !== '/' ? '/' : '') + uri);\n});\n\n//# sourceURL=webpack:///./src/utils/router-push.js?");

/***/ })

};;