!function(t){function e(e){for(var n,c,a=e[0],u=e[1],s=e[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&p.push(i[c][0]),i[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(l&&l(e);p.length;)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==i[u]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},i={23:0},o=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/includes/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;o.push([748,3]),r()}({193:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(3);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o="__tabIndex",c={},a=i({},o,0);e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0,r=function(e,r){return Object.assign({},t,i({},e,Object.assign({},t[e]||a,r)))};switch(e.type){case n.r:return t[e.id]?t:Object.assign({},t,i({},e.id,Object.assign(e.initialState?{__initialState:Object.assign({},e.initialState)}:{},a,e.initialState)));case n.s:return t[e.id]?Object.assign({},t,i({},e.id,e.initialState||t[e.id].__initialState||a)):t;case n.t:return r(e.id,e.state)}return t}},291:function(t,e,r){"use strict";(function(t){var n=r(3);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o={};e.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.O:return"object"===i(r.title)?r.title:void 0!==i(r.title)?{main:r.title,sub:void 0}:t("是谁呼叫舰队")}return e||t("是谁呼叫舰队")}}).call(this,r(105).default)},748:function(t,e,r){t.exports=r(753)},750:function(t,e,r){"use strict";r.r(e);var n=r(19),i=r(4),o=r(3),c={};function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(r,!0).forEach(function(e){s(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={},f={isMainLoaded:!1,list:{default:[],custom:[]}},p=r(291);function d(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y={},m={collection:0,isModeFilter:!1,filterInput:void 0,isModeCompare:void 0,compareState:"selecting",compareList:[],compareSort:["fire","desc"],compareScrollLeft:0},g=function(t,e,r){return Object.assign({},t,b({},e,Object.assign({},t[e]||m,r)))};function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O={},j={collection:0},S=function(t,e,r){return Object.assign({},t,v({},e,Object.assign({},t[e]||j,r)))},h=r(193);function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var P={groupByTheme:!0,order:["theme","asc"]},_={app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.b:return Object.assign({},t,{ready:e.ready});case o.q:return Object.assign({},t,{mainKey:e.key});case o.w:return Object.assign({},t,{eventInstallPWA:e.event})}return t},uiMode:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case o.v:return void 0!==e.scrollY&&setTimeout(function(){window.scrollTo(void 0,e.scrollY)},0),{};case o.d:return e.animation?e:Object.assign(r.state,{animation:!0});case o.o:return e.animation?e:Object.assign({},e,{animation:!0,leaving:!0});case o.N:return e.animation?(delete(t=u({},e)).animation,t):e}return e},bgimg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.n:return Object.assign({},f,e.state);case o.a:return Object.assign({},t,{list:Object.assign({},t.list,{custom:t.list.custom.concat(e.items)})});case o.u:return Object.assign({},t,{});case o.c:return e.changeToObj.active(),Object.assign({},t,{current:e.changeToObj});case o.p:return Object.assign({},t,{isMainLoaded:!0})}return t},pageTitle:p.a,timeSwipedFromLeftEdge:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.M:return e.ts||0}return t},pages:h.b,shipList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.K:return Object.assign({},t,b({},e.id,Object.assign({},m,e.initialState,e.initialState?{initialState:Object.assign({},e.initialState)}:{})));case o.L:return t[e.id]?g(t,e.id,e.initialState||t[e.id].initialState||m):t;case o.x:return g(t,e.id,{collection:e.collection});case o.H:return g(t,e.id,{isModeFilter:!0});case o.J:return g(t,e.id,{isModeFilter:!1,filterInput:void 0});case o.I:return g(t,e.id,{filterInput:e.input});case o.A:return g(t,e.id,{isModeCompare:!0});case o.B:return g(t,e.id,{isModeCompare:!!e.remove&&void 0});case o.D:return g(t,e.id,{isModeCompare:!!e.remove&&void 0,compareState:m.compareState,compareList:[],compareSort:d(m.compareSort)});case o.z:return g(t,e.id,{compareState:e.state});case o.G:return g(t,e.id,{compareList:e.list});case o.y:var r=t[e.id].compareList;if(Array.isArray(e.item)){var n=e.item.filter(function(t){return!r.includes(t.id)}).map(function(t){return t.id});if(n.length)return g(t,e.id,{compareList:r.concat(n)})}else if(!r.includes(e.item.id))return g(t,e.id,{compareList:r.concat(e.item.id)});break;case o.C:var i=t[e.id].compareList;if(Array.isArray(e.item)){var c=d(i);return e.item.forEach(function(t){c.splice(c.indexOf(t.id),1)}),g(t,e.id,{compareList:c})}var a=i.indexOf(e.item.id);if(a>-1){var u=d(i);return u.splice(a,1),g(t,e.id,{compareList:u})}break;case o.F:return e.sorttype?e.order||t[e.id].compareSort[0]!==e.sorttype?g(t,e.id,{compareSort:[e.sorttype,e.order||m.compareSort[1]]}):g(t,e.id,{compareSort:[e.sorttype,"desc"===t[e.id].compareSort[1]?"asc":"desc"]}):g(t,e.id,{compareSort:d(m.compareSort)});case o.E:return g(t,e.id,{compareScrollLeft:e.scrollLeft})}return t},equipmentList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.g:return Object.assign({},t,v({},e.id,Object.assign({},j,e.initialState,e.initialState?{initialState:Object.assign({},e.initialState)}:{})));case o.i:return t[e.id]?S(t,e.id,e.initialState||t[e.id].initialState||j):t;case o.e:return S(t,e.id,{collection:e.collection});case o.f:return S(t,e.id,{highlightingIndex:e.index,highlightingStat:e.stat});case o.j:return S(t,e.id,{compareScrollLeft:e.scrollLeft});case o.h:return S(t,e.id,{observer:e.observer})}return t},fleets:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o.l:return Object.assign({},P,{builds:e.builds,groupByTheme:t.groupByTheme,order:t.order,current:void 0});case o.m:return Object.assign({},t,{current:e.data});case o.k:return"object"!==w(t.current)?t:Object.assign({},t,{current:Object.assign({},t.current,{currentTab:e.tab})})}return t}},A=function(t){return function(e,r,n){return t(e,r,n)}};function L(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function M(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.default=function(){var t=i.d.reducers,e=i.d.initialState,r=i.d.middlewares;return Object(n.createStore)(Object(n.combineReducers)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach(function(e){M(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({},t,{},_)),e,Object(n.compose)(n.applyMiddleware.apply(void 0,L(r)),A))}},753:function(t,e,r){"use strict";r.r(e);var n=r(86),i={store:r(750).default,syncCookie:!0},o=r(19),c=r(40);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.syncCookie,r=void 0===e||e,n={syncCookie:r};if(void 0===t.store){var i=t.combineReducers,s=void 0===i?{}:i;Object.keys(c.reducers).forEach(function(t){s[t]=c.reducers[t]}),n.factoryStore=function(){return Object(o.createStore)(Object(o.combineReducers)(s),c.initialState,o.applyMiddleware.apply(void 0,u(c.middlewares)))}}else"function"==typeof t.store?n.factoryStore=t.store:"object"===a(t.store)&&(n.store=t.store);return n},l=r(136);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.__KOOT_STORE__=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"==typeof t.factoryStore?t.factoryStore():"object"===f(t.store)?t.store:{}}(s(i)),window.__KOOT_HISTORY__=Object(n.syncHistoryWithStore)(l.a,window.__KOOT_STORE__)}});