exports.ids = ["TP Calculator"];
exports.modules = {

/***/ "./node_modules/kckit/src/types/equipments.js":
/*!****************************************************!*\
  !*** ./node_modules/kckit/src/types/equipments.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n * HA       High Angle\r\n * AAFD     Anti-Air Fire Director\r\n */\n\n/**\r\n * @type {Object} 装备类型和类型集合\r\n */\nvar types = {\n  // Type ID\n  SmallCaliber: 1,\n  // 小口径主炮\n  SmallCaliberHigh: 2,\n  // 小口径高角主炮\n  SmallCaliberHA: 2,\n  // 小口径高角主炮\n  SmallCaliberAA: 3,\n  // 小口径高角主炮（强化）\n  SmallCaliberAAFD: 3,\n  // 小口径高角主炮（强化）\n  MediumCaliber: 4,\n  // 中口径主炮\n  LargeCaliber: 5,\n  // 大口径主炮\n  SuperCaliber: 6,\n  // 超大口径主炮\n  SecondaryGun: 7,\n  // 副炮\n  SecondaryGunHigh: 8,\n  // 高角副炮\n  SecondaryGunHA: 8,\n  // 高角副炮\n  SecondaryGunAA: 9,\n  // 高角副炮（强化）\n  SecondaryGunAAFD: 9,\n  // 高角副炮（强化）\n  Type3Shell: 10,\n  // 对空强化弹\n  APShell: 11,\n  // 穿甲弹\n  Torpedo: 12,\n  // 鱼雷\n  SubmarineTorpedo: 13,\n  // 潜艇鱼雷\n  MidgetSubmarine: 14,\n  // 微型潜艇\n  ReconSeaplane: 15,\n  // 水上侦察机\n  ReconSeaplaneNight: 16,\n  // 夜侦\n  SeaplaneBomber: 17,\n  // 水上轰炸机\n  CarrierFighter: 18,\n  // 舰战 / 舰载战斗机\n  TorpedoBomber: 19,\n  // 舰攻 / 舰载鱼雷轰炸机\n  DiveBomber: 20,\n  // 舰爆 / 舰载俯冲轰炸机\n  CarrierRecon: 21,\n  // 舰侦 / 舰载侦察机\n  Autogyro: 22,\n  // 旋翼机\n  AntiSubPatrol: 23,\n  // 对潜哨戒机\n  SmallRadar: 24,\n  // 小型雷达\n  LargeRadar: 25,\n  // 大型雷达\n  DepthCharge: 26,\n  // 爆雷\n  Sonar: 27,\n  // 声纳\n  LargeSonar: 28,\n  // 大型声纳\n  AAGun: 29,\n  // 对空机枪\n  AAGunConcentrated: 30,\n  // 对空机枪（强化）\n  AAGunCD: 30,\n  // 对空机枪（强化）\n  CDMG: 30,\n  // 对空机枪（强化）\n  AAFireDirector: 31,\n  // 高射装置\n  AAFD: 31,\n  // 高射装置\n  AviationPersonnel: 36,\n  // 航空作战整备员\n  SurfaceShipPersonnel: 37,\n  // 水上舰要员\n  LandingCraft: 38,\n  // 登陆艇\n  Searchlight: 39,\n  // 探照灯\n  SupplyContainer: 41,\n  // 簡易輸送部材\n  CommandFacility: 45,\n  // 舰队司令部设施\n  LargeFlyingBoat: 45,\n  // 大型水上飞艇\n  SearchlightLarge: 46,\n  // 大型探照灯\n  SuparRadar: 47,\n  // 超大型雷达\n  CombatRation: 48,\n  // 戦闘糧食\n  CarrierRecon2: 50,\n  // 舰侦II / 舰载侦察机II\n  SeaplaneFighter: 51,\n  // 水战 / 水上战斗机\n  AmphibiousCraft: 52,\n  // 特型内火艇\n  LandBasedAttacker: 53,\n  // 陆攻 / 陆上攻击机\n  Interceptor: 54,\n  // 局战 / 局地战斗机\n  JetBomberFighter: 55,\n  // 喷气式战斗轰炸机\n  JetBomberFighter2: 56,\n  // 喷气式战斗轰炸机\n  TransportMaterial: 57,\n  // 运输设备\n  SubmarineEquipment: 58,\n  // 潜艇装备\n  LandBasedFighter: 59,\n  // 陆战 / 陆上战斗机\n  CarrierFighterNight: 60,\n  // 夜战 / 舰载战斗机（夜间）\n  TorpedoBomberNight: 61,\n  // 夜攻 / 舰载鱼雷机（夜间）\n  LandBasedAntiSubPatrol: 62,\n  // 陆上哨戒机\n  LandBasedRecon: 63 // 陆上侦察机\n  // Groups\n\n};\ntypes.MainGuns = [types.SmallCaliber, types.SmallCaliberHigh, types.SmallCaliberAA, types.MediumCaliber, types.LargeCaliber, types.SuperCaliber];\ntypes.MainCalibers = types.MainGuns;\ntypes.SmallCalibers = [types.SmallCaliber, types.SmallCaliberHigh, types.SmallCaliberAA];\ntypes.MediumCalibers = [types.MediumCaliber];\ntypes.LargeCalibers = [types.LargeCaliber, types.SuperCaliber];\ntypes.SecondaryGuns = [types.SecondaryGun, types.SecondaryGunHigh, types.SecondaryGunAA];\ntypes.HAMounts = [types.SmallCaliberHigh, types.SmallCaliberAA, types.SecondaryGunHigh, types.SecondaryGunAA];\ntypes.HAMountsAAFD = [types.SmallCaliberAA, types.SecondaryGunAA];\ntypes.APShells = [types.APShell];\ntypes.Torpedos = [types.Torpedo, types.SubmarineTorpedo];\ntypes.Seaplanes = [types.ReconSeaplane, types.ReconSeaplaneNight, types.SeaplaneBomber, types.SeaplaneFighter];\ntypes.Fighters = [types.SeaplaneBomber, types.CarrierFighter, types.CarrierFighterNight, types.TorpedoBomber, types.TorpedoBomberNight, types.DiveBomber, types.SeaplaneFighter, types.LandBasedAttacker, types.Interceptor, // types.CarrierRecon\ntypes.JetBomberFighter, types.JetBomberFighter2, types.LandBasedFighter];\ntypes.Interceptors = [types.Interceptor, types.LandBasedFighter];\ntypes.Recons = [types.ReconSeaplane, types.ReconSeaplaneNight, types.CarrierRecon, types.CarrierRecon2, types.LargeFlyingBoat, types.LandBasedRecon];\ntypes.SeaplaneRecons = [types.ReconSeaplane, types.ReconSeaplaneNight];\ntypes.SeaplaneReconsAll = [types.ReconSeaplane, types.ReconSeaplaneNight, types.LargeFlyingBoat];\ntypes.SeaplaneBombers = [types.SeaplaneBomber, types.SeaplaneFighter];\ntypes.SeaplaneFighters = [types.SeaplaneFighter];\ntypes.CarrierFighters = [types.CarrierFighter, types.CarrierFighterNight];\ntypes.CarrierRecons = [types.CarrierRecon, types.CarrierRecon2];\ntypes.CarrierBased = [types.CarrierFighter, types.CarrierFighterNight, types.TorpedoBomber, types.TorpedoBomberNight, types.DiveBomber, types.CarrierRecon, types.CarrierRecon2, types.JetBomberFighter, types.JetBomberFighter2];\ntypes.LandBased = [types.LandBasedAttacker, types.Interceptor, types.JetBomberFighter, types.JetBomberFighter2, types.LandBasedFighter, types.LandBasedAntiSubPatrol, types.LandBasedRecon];\ntypes.TorpedoBombers = [types.TorpedoBomber, types.TorpedoBomberNight];\ntypes.DiveBombers = [types.DiveBomber];\ntypes.JetBomberFighters = [types.JetBomberFighter, types.JetBomberFighter2];\ntypes.Jets = [types.JetBomberFighter, types.JetBomberFighter2];\ntypes.Autogyros = [types.Autogyro];\ntypes.AntiSubPatrols = [types.AntiSubPatrol, types.LandBasedAntiSubPatrol];\ntypes.Aircrafts = [];\n[].concat(types.Seaplanes).concat(types.Recons).concat(types.CarrierBased).concat(types.Autogyros).concat(types.AntiSubPatrols).concat(types.LandBased).forEach(function (v) {\n  if (types.Aircrafts.indexOf(v) < 0) types.Aircrafts.push(v);\n});\ntypes.Radars = [types.SmallRadar, types.LargeRadar, types.SuparRadar];\ntypes.SmallRadars = [types.SmallRadar];\ntypes.LargeRadars = [types.LargeRadar, types.SuparRadar];\ntypes.AntiSubmarines = [types.DepthCharge, types.Sonar, types.LargeSonar];\ntypes.DepthCharges = [types.DepthCharge];\ntypes.Sonars = [types.Sonar, types.LargeSonar];\ntypes.AAGuns = [types.AAGun, types.AAGunConcentrated];\ntypes.AAFireDirectors = [types.AAFireDirector];\ntypes.AAFDs = types.AAFireDirectors;\ntypes.Searchlights = [types.Searchlight, types.SearchlightLarge];\ntypes.AviationPersonnels = [types.AviationPersonnel];\ntypes.SurfaceShipPersonnels = [types.SurfaceShipPersonnel];\ntypes.LandingCrafts = [types.LandingCraft, types.AmphibiousCraft];\ntypes.AmphibiousCrafts = [types.AmphibiousCraft];\ntypes.SupplyContainers = [types.SupplyContainer];\ntypes.CombatRations = [types.CombatRation];\nmodule.exports = types;\n\n//# sourceURL=webpack:///./node_modules/kckit/src/types/equipments.js?");

/***/ }),

/***/ "./src/api/pages/actions.js":
/*!**********************************!*\
  !*** ./src/api/pages/actions.js ***!
  \**********************************/
/*! exports provided: init, reset, update, changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTab\", function() { return changeTab; });\n/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux/action-types */ \"./src/redux/action-types.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/api/pages/reducer.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar init = function init(id, initialState) {\n  return {\n    type: _redux_action_types__WEBPACK_IMPORTED_MODULE_0__[\"PAGE_INIT\"],\n    id: id,\n    initialState: initialState\n  };\n};\nvar reset = function reset(id, initialState) {\n  return {\n    type: _redux_action_types__WEBPACK_IMPORTED_MODULE_0__[\"PAGE_RESET\"],\n    id: id,\n    initialState: initialState\n  };\n};\nvar update = function update(id, state) {\n  return {\n    type: _redux_action_types__WEBPACK_IMPORTED_MODULE_0__[\"PAGE_UPDATE\"],\n    id: id,\n    state: state\n  };\n};\nvar changeTab = function changeTab(id, tabIndex) {\n  return update(id, _defineProperty({}, _reducer__WEBPACK_IMPORTED_MODULE_1__[\"TABINDEX\"], tabIndex));\n};\n\n//# sourceURL=webpack:///./src/api/pages/actions.js?");

/***/ }),

/***/ "./src/api/pages/index.js":
/*!********************************!*\
  !*** ./src/api/pages/index.js ***!
  \********************************/
/*! exports provided: TABINDEX, init, reset, update, changeTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeTab\", function() { return changeTab; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/api/pages/actions.js\");\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ \"./src/api/pages/reducer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TABINDEX\", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__[\"TABINDEX\"]; });\n\n\n\n\nvar init = function init(id, initialState) {\n  return function (dispatch) {\n    return dispatch(_actions__WEBPACK_IMPORTED_MODULE_0__[\"init\"](id, initialState));\n  };\n};\nvar reset = function reset(id, initialState) {\n  return function (dispatch) {\n    return dispatch(_actions__WEBPACK_IMPORTED_MODULE_0__[\"reset\"](id, initialState));\n  };\n};\nvar update = function update(id, state) {\n  return function (dispatch) {\n    return dispatch(_actions__WEBPACK_IMPORTED_MODULE_0__[\"update\"](id, state));\n  };\n};\nvar changeTab = function changeTab(id, tabIndex) {\n  return function (dispatch) {\n    return dispatch(_actions__WEBPACK_IMPORTED_MODULE_0__[\"changeTab\"](id, tabIndex));\n  };\n};\n\n//# sourceURL=webpack:///./src/api/pages/index.js?");

/***/ }),

/***/ "./src/ui/components/main-header/main-options/index.jsx":
/*!**************************************************************!*\
  !*** ./src/ui/components/main-header/main-options/index.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainHeaderMainOptions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var sp_css_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sp-css-import */ \"./node_modules/sp-css-import/ImportStyle.js\");\n/* harmony import */ var _ui_components_main_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ui/components/main-header */ \"./src/ui/components/main-header/index.jsx\");\nvar _dec, _class;\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n // import { connect } from 'react-redux'\n\n\n\n // @connect()\n\nvar MainHeaderMainOptions = (_dec = Object(sp_css_import__WEBPACK_IMPORTED_MODULE_2__[\"ImportStyle\"])(__webpack_require__(/*! ./styles.less */ \"./src/ui/components/main-header/main-options/styles.less\")), _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(MainHeaderMainOptions, _React$Component);\n\n  function MainHeaderMainOptions() {\n    _classCallCheck(this, MainHeaderMainOptions);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MainHeaderMainOptions).apply(this, arguments));\n  }\n\n  _createClass(MainHeaderMainOptions, [{\n    key: \"render\",\n    value: function render() {\n      var isPortal = false; // const Component = isPortal ? MainHeader : 'div'\n\n      var _this$props = this.props,\n          className = _this$props.className,\n          mainClassName = _this$props.mainClassName,\n          optionsClassName = _this$props.optionsClassName,\n          main = _this$props.main,\n          options = _this$props.options,\n          children = _this$props.children,\n          props = _objectWithoutProperties(_this$props, [\"className\", \"mainClassName\", \"optionsClassName\", \"main\", \"options\", \"children\"]);\n\n      var hasOptions = typeof options !== 'undefined';\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_main_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([className, {\n          'is-portal': isPortal,\n          'has-options': hasOptions\n        }])\n      }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['wrapper', mainClassName])\n      }, main, children), hasOptions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(['dimmed', optionsClassName])\n      }, options));\n    }\n  }]);\n\n  return MainHeaderMainOptions;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);\n\n\n//# sourceURL=webpack:///./src/ui/components/main-header/main-options/index.jsx?");

/***/ }),

/***/ "./src/ui/components/main-header/main-options/styles.less":
/*!****************************************************************!*\
  !*** ./src/ui/components/main-header/main-options/styles.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports ={wrapper:'d067',css:'.d067{line-height:3rem}.d067.has-options:before{content:\"\";position:absolute;left:0;width:100%;top:auto;bottom:0;height:2rem;border-top:.05rem solid rgba(237,240,242,.15);border-bottom:.05rem solid rgba(237,240,242,.15);z-index:-1}.d067.has-options:after{top:auto;bottom:.05rem;height:1.9rem;background:rgba(0,0,0,.2);z-index:-2}'}\n\n//# sourceURL=webpack:///./src/ui/components/main-header/main-options/styles.less?");

/***/ }),

/***/ "./src/ui/pages/calctp/index.jsx":
/*!***************************************!*\
  !*** ./src/ui/pages/calctp/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koot */ \"./node_modules/koot/index.js\");\n/* harmony import */ var kckit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kckit */ \"kckit\");\n/* harmony import */ var kckit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kckit__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kckit/src/types/equipments */ \"./node_modules/kckit/src/types/equipments.js\");\n/* harmony import */ var kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @database */ \"./src/database/index.js\");\n/* harmony import */ var _api_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @api/pages */ \"./src/api/pages/index.js\");\n/* harmony import */ var _utils_html_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @utils/html-head */ \"./src/utils/html-head.js\");\n/* harmony import */ var _ui_containers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ui/containers/page */ \"./src/ui/containers/page/index.jsx\");\n/* harmony import */ var _ui_components_main_header_main_options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ui/components/main-header/main-options */ \"./src/ui/components/main-header/main-options/index.jsx\");\n/* harmony import */ var _ui_components_title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ui/components/title */ \"./src/ui/components/title/index.jsx\");\n/* harmony import */ var _ui_components_input_counter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ui/components/input/counter */ \"./src/ui/components/input/counter/index.jsx\");\n/* harmony import */ var _ui_components_icon_equipment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ui/components/icon-equipment */ \"./src/ui/components/icon-equipment/index.jsx\");\nvar _dec, _class, _dec2, _class2;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar pageId = 'CALCTP';\nvar shipTypes = [1, // DD\n2, // CL\n21, // CT\n5, // CAV\n8, // BBV\n12, // AV\n14, // SSV\n15, // LHA\n29, // AO\n17];\nvar equipmentTypes = [kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3___default.a.SupplyContainer, kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3___default.a.LandingCraft, kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3___default.a.AmphibiousCraft, kckit_src_types_equipments__WEBPACK_IMPORTED_MODULE_3___default.a.CombatRation]; //\n\nvar PageCalcTP = (_dec = Object(koot__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({\n  connect: true,\n  pageinfo: function pageinfo(state) {\n    return Object(_utils_html_head__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(state, {\n      title: __(\"nav.calctp\")\n    });\n  },\n  styles: __webpack_require__(/*! ./styles.less */ \"./src/ui/pages/calctp/styles.less\")\n}), _dec(_class =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(PageCalcTP, _React$Component);\n\n  function PageCalcTP(props) {\n    var _this;\n\n    _classCallCheck(this, PageCalcTP);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(PageCalcTP).call(this, props));\n    props.dispatch(Object(_api_pages__WEBPACK_IMPORTED_MODULE_5__[\"init\"])(pageId, {\n      result: 0\n    }));\n    return _this;\n  }\n\n  _createClass(PageCalcTP, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.props.dispatch(Object(_api_pages__WEBPACK_IMPORTED_MODULE_5__[\"update\"])(pageId, {\n        result: 0\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_containers_page__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: this.props.className\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCalcTPHeader, {\n        className: this.props.className + '-header'\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCalcTPBody, {\n        className: this.props.className + '-body'\n      }));\n    }\n  }]);\n\n  return PageCalcTP;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageCalcTP); //\n\nvar PageCalcTPHeader = function PageCalcTPHeader(_ref) {\n  var className = _ref.className;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_main_header_main_options__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    className: className,\n    main: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      className: className + '-title',\n      component: \"h2\",\n      children: __(\"nav.calctp\")\n    }),\n    options: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCalcTPResult, {\n      className: className + '-result'\n    })\n  });\n}; //\n\n\nvar PageCalcTPBody = (_dec2 = Object(koot__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({\n  connect: function connect(state) {\n    return {\n      result: state.pages[pageId].result\n    };\n  }\n}), _dec2(_class2 =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(PageCalcTPBody, _React$Component2);\n\n  function PageCalcTPBody() {\n    var _getPrototypeOf2;\n\n    var _this2;\n\n    _classCallCheck(this, PageCalcTPBody);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PageCalcTPBody)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), \"count\", {\n      shipType: {},\n      equipmentType: {}\n    });\n\n    return _this2;\n  }\n\n  _createClass(PageCalcTPBody, [{\n    key: \"update\",\n    value: function update() {\n      this.props.dispatch(Object(_api_pages__WEBPACK_IMPORTED_MODULE_5__[\"update\"])(pageId, {\n        result: kckit__WEBPACK_IMPORTED_MODULE_2___default.a.calculate.tp(this.count)\n      }));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className + \"-set\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        className: this.props.className + \"-title\",\n        component: \"h4\" // type=\"line-append\"\n        ,\n        children: __(\"ship_type\")\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className + \"-grid\"\n      }, shipTypes.map(function (typeId, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCalcTPCounter, {\n          className: _this3.props.className + \"-counter\",\n          key: index,\n          name: [_database__WEBPACK_IMPORTED_MODULE_4__[\"default\"].shipTypes[typeId]._name, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"small\", {\n            key: \"code\"\n          }, \"[\", _database__WEBPACK_IMPORTED_MODULE_4__[\"default\"].shipTypes[typeId].code, \"]\")],\n          onUpdate: function onUpdate(newValue) {\n            _this3.count.shipType[typeId] = newValue;\n\n            _this3.update();\n          }\n        });\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className + \"-set\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_title__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        className: this.props.className + \"-title\",\n        component: \"h4\" // type=\"line-append\"\n        ,\n        children: __(\"equipment_type\")\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: this.props.className + \"-grid\"\n      }, equipmentTypes.map(function (typeId, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageCalcTPCounter, {\n          className: _this3.props.className + \"-counter\",\n          key: index,\n          name: _database__WEBPACK_IMPORTED_MODULE_4__[\"default\"].equipmentTypes[typeId]._name,\n          icon: _database__WEBPACK_IMPORTED_MODULE_4__[\"default\"].equipmentTypes[typeId].icon,\n          onUpdate: function onUpdate(newValue) {\n            _this3.count.equipmentType[typeId] = newValue;\n\n            _this3.update();\n          }\n        });\n      }))));\n    }\n  }]);\n\n  return PageCalcTPBody;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)) || _class2); //\n\nvar PageCalcTPResult = Object(koot__WEBPACK_IMPORTED_MODULE_1__[\"extend\"])({\n  connect: function connect(state) {\n    return {\n      result: state.pages[pageId].result\n    };\n  }\n})(function (_ref2) {\n  var className = _ref2.className,\n      result = _ref2.result;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", null, \"S: \", result), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"A: \", Math.floor(result * 0.7)));\n}); //\n\nvar PageCalcTPCounter = function PageCalcTPCounter(_ref3) {\n  var className = _ref3.className,\n      name = _ref3.name,\n      _ref3$min = _ref3.min,\n      min = _ref3$min === void 0 ? 0 : _ref3$min,\n      onUpdate = _ref3.onUpdate,\n      icon = _ref3.icon;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: className\n  }, typeof icon === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: className + '-name'\n  }, name) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_icon_equipment__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    className: className + '-name',\n    icon: icon,\n    children: name\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_input_counter__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n    min: min,\n    onUpdate: onUpdate,\n    className: className + '-counter'\n  }));\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! koot/i18n */ \"./node_modules/koot/i18n/index.js\")[\"default\"]))\n\n//# sourceURL=webpack:///./src/ui/pages/calctp/index.jsx?");

/***/ }),

/***/ "./src/ui/pages/calctp/styles.less":
/*!*****************************************!*\
  !*** ./src/ui/pages/calctp/styles.less ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports ={wrapper:'e6e2',css:'.e6e2{border-top:5rem solid transparent}.e6e2-header-title{line-height:3rem}.e6e2-header-result{line-height:2rem;color:rgba(157,180,191,.9);font-size:1rem}.e6e2-header-result span,.e6e2-header-result strong{display:inline-block}.e6e2-header-result strong{color:#ffe57f}.e6e2-header-result span{color:#ff8a80;margin-left:1em}.e6e2-body-set{overflow:hidden}.e6e2-body-title:first-child{margin-top:0;margin-bottom:.5rem}.e6e2-body-set~.e6e2-body-set .e6e2-body-title{margin-top:1.5rem}.e6e2-body-grid{margin-left:-.25rem;margin-right:-.3rem;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fill,minmax(11rem,1fr));border-top:.05rem solid rgba(237,240,242,.15)}@media (max-width:660px){.e6e2-body-grid{display:block}}.e6e2-body-counter{position:relative;height:2.35rem;padding:.3rem 4.25rem .25rem .25rem;border-right:.05rem solid rgba(237,240,242,.15);border-bottom:.05rem solid rgba(237,240,242,.15);display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.e6e2-body-counter .e6e2-body-counter-name{color:#e6e6e6;font-size:.7rem;line-height:1.2em;padding-left:.25rem}.e6e2-body-counter .e6e2-body-counter-name small{font-size:.6rem;margin-left:.5rem;font-weight:400;color:rgba(157,180,191,.9);vertical-align:bottom}.e6e2-body-counter .e6e2-body-counter-name[data-icon]{padding-left:1.55rem;position:static}.e6e2-body-counter .e6e2-body-counter-name[data-icon]:before{position:absolute;top:50%;margin-top:-.9rem;left:0}.e6e2-body-counter .e6e2-body-counter-counter{position:absolute;top:.425rem;right:.25rem}'}\n\n//# sourceURL=webpack:///./src/ui/pages/calctp/styles.less?");

/***/ }),

/***/ "./src/utils/get-equipment.js":
/*!************************************!*\
  !*** ./src/utils/get-equipment.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var kckit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kckit */ \"kckit\");\n/* harmony import */ var kckit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kckit__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (item) {\n  return kckit__WEBPACK_IMPORTED_MODULE_0__[\"get\"].equipment(item);\n});\n\n//# sourceURL=webpack:///./src/utils/get-equipment.js?");

/***/ }),

/***/ "./src/utils/get-link.js":
/*!*******************************!*\
  !*** ./src/utils/get-link.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (type, id) {\n  switch (type) {\n    case 'ship':\n    case 'ships':\n      return \"/ships/\".concat(id);\n\n    case 'item':\n    case 'items':\n    case 'equipment':\n    case 'equipments':\n      return \"/equipments/\".concat(id);\n\n    case 'entity':\n    case 'entities':\n      return \"/entities/\".concat(id);\n  }\n});\n\n//# sourceURL=webpack:///./src/utils/get-link.js?");

/***/ })

};;