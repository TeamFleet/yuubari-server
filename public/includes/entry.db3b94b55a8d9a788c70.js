!function(t){function e(e){for(var n,c,a=e[0],u=e[1],s=e[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(l&&l(e);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={19:0},i=[];function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(){return Promise.resolve()},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var l=u;i.push([828,1,0]),r()}({348:function(t,e,r){"use strict";(function(t){var n=r(3);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i={};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.O:return"object"===o(e.title)?e.title:void 0!==o(e.title)?{main:e.title,sub:void 0}:"是谁呼叫舰队"}return t||"是谁呼叫舰队"}}).call(this,r(39).default)},5:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(107);var n=r(52);n.createStore;var o=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(n,["createStore"])},828:function(t,e,r){t.exports=r(939)},935:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(5),i=r(3),c={};function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={},f={isMainLoaded:!1,list:{default:[],custom:[]}},p=r(348);function y(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var m={},v={collection:0,isModeFilter:!1,filterInput:void 0,isModeCompare:void 0,compareState:"selecting",compareList:[],compareSort:["fire","desc"],compareScrollLeft:0},O=function(t,e,r){return Object.assign({},t,d({},e,Object.assign({},t[e]||v,r)))};function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j={},S={collection:0},h=function(t,e,r){return Object.assign({},t,g({},e,Object.assign({},t[e]||S,r)))},w=r(102);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var A={groupByTheme:!0,order:["theme","asc"]},L={app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.b:return Object.assign({},t,{ready:e.ready});case i.q:return Object.assign({},t,{mainKey:e.key});case i.w:return Object.assign({},t,{eventInstallPWA:e.event})}return t},uiMode:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i.v:return void 0!==e.scrollY&&setTimeout((function(){window.scrollTo(void 0,e.scrollY)}),0),{};case i.d:return e.animation?e:Object.assign(r.state,{animation:!0});case i.o:return e.animation?e:Object.assign({},e,{animation:!0,leaving:!0});case i.N:return e.animation?(delete(t=u({},e)).animation,t):e}return e},bgimg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.n:return Object.assign({},t,e.state);case i.a:return Object.assign({},t,{list:Object.assign({},t.list,{custom:t.list.custom.concat(e.items)})});case i.u:return Object.assign({},t,{});case i.c:return e.changeToObj.active(),Object.assign({},t,{current:e.changeToObj});case i.p:return t.isMainLoaded?t:Object.assign({},t,{isMainLoaded:!0})}return t},pageTitle:p.a,timeSwipedFromLeftEdge:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.M:return e.ts||0}return t},pages:w.b,shipList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.K:return Object.assign({},t,d({},e.id,Object.assign({},v,e.initialState,e.initialState?{initialState:Object.assign({},e.initialState)}:{})));case i.L:return t[e.id]?O(t,e.id,e.initialState||t[e.id].initialState||v):t;case i.x:return O(t,e.id,{collection:e.collection});case i.H:return O(t,e.id,{isModeFilter:!0});case i.J:return O(t,e.id,{isModeFilter:!1,filterInput:void 0});case i.I:return O(t,e.id,{filterInput:e.input});case i.A:return O(t,e.id,{isModeCompare:!0});case i.B:return O(t,e.id,{isModeCompare:!!e.remove&&void 0});case i.D:return O(t,e.id,{isModeCompare:!!e.remove&&void 0,compareState:v.compareState,compareList:[],compareSort:y(v.compareSort)});case i.z:return O(t,e.id,{compareState:e.state});case i.G:return O(t,e.id,{compareList:e.list});case i.y:var r=t[e.id].compareList;if(Array.isArray(e.item)){var n=e.item.filter((function(t){return!r.includes(t.id)})).map((function(t){return t.id}));if(n.length)return O(t,e.id,{compareList:r.concat(n)})}else if(!r.includes(e.item.id))return O(t,e.id,{compareList:r.concat(e.item.id)});break;case i.C:var o=t[e.id].compareList;if(Array.isArray(e.item)){var c=y(o);return e.item.forEach((function(t){c.splice(c.indexOf(t.id),1)})),O(t,e.id,{compareList:c})}var a=o.indexOf(e.item.id);if(a>-1){var u=y(o);return u.splice(a,1),O(t,e.id,{compareList:u})}break;case i.F:return e.sorttype?e.order||t[e.id].compareSort[0]!==e.sorttype?O(t,e.id,{compareSort:[e.sorttype,e.order||v.compareSort[1]]}):O(t,e.id,{compareSort:[e.sorttype,"desc"===t[e.id].compareSort[1]?"asc":"desc"]}):O(t,e.id,{compareSort:y(v.compareSort)});case i.E:return O(t,e.id,{compareScrollLeft:e.scrollLeft})}return t},equipmentList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.g:return Object.assign({},t,g({},e.id,Object.assign({},S,e.initialState,e.initialState?{initialState:Object.assign({},e.initialState)}:{})));case i.i:return t[e.id]?h(t,e.id,e.initialState||t[e.id].initialState||S):t;case i.e:return h(t,e.id,{collection:e.collection});case i.f:return h(t,e.id,{highlightingIndex:e.index,highlightingStat:e.stat});case i.j:return h(t,e.id,{compareScrollLeft:e.scrollLeft});case i.h:return h(t,e.id,{observer:e.observer})}return t},fleets:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i.l:return Object.assign({},A,{builds:e.builds,groupByTheme:t.groupByTheme,order:t.order,current:void 0});case i.m:return Object.assign({},t,{current:e.data});case i.k:return"object"!==P(t.current)?t:Object.assign({},t,{current:Object.assign({},t.current,{currentTab:e.tab})})}return t}},_=function(t){return function(e,r,n){return t(e,r,n)}};function T(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.default=function(){var t=o.a.reducers,e=o.a.initialState,r=o.a.middlewares;return Object(n.e)(Object(n.c)(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{},L)),e,Object(n.d)(n.a.apply(void 0,T(r)),_))}},939:function(t,e,r){"use strict";r.r(e);r(272);var n=r(118),o={store:r(935).default,syncCookie:!0},i=r(25),c=r(52);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.syncCookie,r=void 0===e||e,n={syncCookie:r};if(void 0===t.store){var o=t.combineReducers,s=void 0===o?{}:o;Object.keys(c.reducers).forEach((function(t){s[t]=c.reducers[t]})),n.factoryStore=function(){return Object(i.e)(Object(i.c)(s),c.initialState,i.a.apply(void 0,u(c.middlewares)))}}else"function"==typeof t.store?n.factoryStore=t.store:"object"===a(t.store)&&(n.store=t.store);return n},f=r(163);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}window.__KOOT_STORE__=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"==typeof t.factoryStore?t.factoryStore():"object"===p(t.store)?t.store:{}}(l(o)),window.__KOOT_HISTORY__=Object(n.syncHistoryWithStore)(f.a,window.__KOOT_STORE__)}});