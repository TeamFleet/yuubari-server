!function(e){function t(t){for(var n,c,a=t[0],u=t[1],s=t[2],f=0,p=[];f<a.length;f++)c=a[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(l&&l(t);p.length;)p.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={19:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(){return Promise.resolve()},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;i.push([820,1,0]),r()}({348:function(e,t,r){"use strict";(function(e){var n=r(4);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i={};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.O:return"object"===o(t.title)?t.title:void 0!==o(t.title)?{main:t.title,sub:void 0}:"是谁呼叫舰队"}return e||"是谁呼叫舰队"}}).call(this,r(37).default)},820:function(e,t,r){e.exports=r(931)},927:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(3),i=r(4),c={};function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l={},f={isMainLoaded:!1,list:{default:[],custom:[]}},p=r(348);function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y={},m={collection:0,isModeFilter:!1,filterInput:void 0,isModeCompare:void 0,compareState:"selecting",compareList:[],compareSort:["fire","desc"],compareScrollLeft:0},g=function(e,t,r){return Object.assign({},e,b({},t,Object.assign({},e[t]||m,r)))};function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O={},j={collection:0},h=function(e,t,r){return Object.assign({},e,v({},t,Object.assign({},e[t]||j,r)))},S=r(100);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var P={groupByTheme:!0,order:["theme","asc"]},A={app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.b:return Object.assign({},e,{ready:t.ready});case i.q:return Object.assign({},e,{mainKey:t.key});case i.w:return Object.assign({},e,{eventInstallPWA:t.event})}return e},uiMode:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i.v:return void 0!==t.scrollY&&setTimeout((function(){window.scrollTo(void 0,t.scrollY)}),0),{};case i.d:return t.animation?t:Object.assign(r.state,{animation:!0});case i.o:return t.animation?t:Object.assign({},t,{animation:!0,leaving:!0});case i.N:return t.animation?(delete(e=u({},t)).animation,e):t}return t},bgimg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.n:return Object.assign({},f,t.state);case i.a:return Object.assign({},e,{list:Object.assign({},e.list,{custom:e.list.custom.concat(t.items)})});case i.u:return Object.assign({},e,{});case i.c:return t.changeToObj.active(),Object.assign({},e,{current:t.changeToObj});case i.p:return Object.assign({},e,{isMainLoaded:!0})}return e},pageTitle:p.a,timeSwipedFromLeftEdge:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.M:return t.ts||0}return e},pages:S.b,shipList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.K:return Object.assign({},e,b({},t.id,Object.assign({},m,t.initialState,t.initialState?{initialState:Object.assign({},t.initialState)}:{})));case i.L:return e[t.id]?g(e,t.id,t.initialState||e[t.id].initialState||m):e;case i.x:return g(e,t.id,{collection:t.collection});case i.H:return g(e,t.id,{isModeFilter:!0});case i.J:return g(e,t.id,{isModeFilter:!1,filterInput:void 0});case i.I:return g(e,t.id,{filterInput:t.input});case i.A:return g(e,t.id,{isModeCompare:!0});case i.B:return g(e,t.id,{isModeCompare:!!t.remove&&void 0});case i.D:return g(e,t.id,{isModeCompare:!!t.remove&&void 0,compareState:m.compareState,compareList:[],compareSort:d(m.compareSort)});case i.z:return g(e,t.id,{compareState:t.state});case i.G:return g(e,t.id,{compareList:t.list});case i.y:var r=e[t.id].compareList;if(Array.isArray(t.item)){var n=t.item.filter((function(e){return!r.includes(e.id)})).map((function(e){return e.id}));if(n.length)return g(e,t.id,{compareList:r.concat(n)})}else if(!r.includes(t.item.id))return g(e,t.id,{compareList:r.concat(t.item.id)});break;case i.C:var o=e[t.id].compareList;if(Array.isArray(t.item)){var c=d(o);return t.item.forEach((function(e){c.splice(c.indexOf(e.id),1)})),g(e,t.id,{compareList:c})}var a=o.indexOf(t.item.id);if(a>-1){var u=d(o);return u.splice(a,1),g(e,t.id,{compareList:u})}break;case i.F:return t.sorttype?t.order||e[t.id].compareSort[0]!==t.sorttype?g(e,t.id,{compareSort:[t.sorttype,t.order||m.compareSort[1]]}):g(e,t.id,{compareSort:[t.sorttype,"desc"===e[t.id].compareSort[1]?"asc":"desc"]}):g(e,t.id,{compareSort:d(m.compareSort)});case i.E:return g(e,t.id,{compareScrollLeft:t.scrollLeft})}return e},equipmentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.g:return Object.assign({},e,v({},t.id,Object.assign({},j,t.initialState,t.initialState?{initialState:Object.assign({},t.initialState)}:{})));case i.i:return e[t.id]?h(e,t.id,t.initialState||e[t.id].initialState||j):e;case i.e:return h(e,t.id,{collection:t.collection});case i.f:return h(e,t.id,{highlightingIndex:t.index,highlightingStat:t.stat});case i.j:return h(e,t.id,{compareScrollLeft:t.scrollLeft});case i.h:return h(e,t.id,{observer:t.observer})}return e},fleets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.l:return Object.assign({},P,{builds:t.builds,groupByTheme:e.groupByTheme,order:e.order,current:void 0});case i.m:return Object.assign({},e,{current:t.data});case i.k:return"object"!==w(e.current)?e:Object.assign({},e,{current:Object.assign({},e.current,{currentTab:t.tab})})}return e}},_=function(e){return function(t,r,n){return e(t,r,n)}};function L(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.default=function(){var e=o.d.reducers,t=o.d.initialState,r=o.d.middlewares;return Object(n.e)(Object(n.c)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{},A)),t,Object(n.d)(n.a.apply(void 0,L(r)),_))}},931:function(e,t,r){"use strict";r.r(t);r(271);var n=r(117),o={store:r(927).default,syncCookie:!0},i=r(24),c=r(52);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.syncCookie,r=void 0===t||t,n={syncCookie:r};if(void 0===e.store){var o=e.combineReducers,s=void 0===o?{}:o;Object.keys(c.reducers).forEach((function(e){s[e]=c.reducers[e]})),n.factoryStore=function(){return Object(i.e)(Object(i.c)(s),c.initialState,i.a.apply(void 0,u(c.middlewares)))}}else"function"==typeof e.store?n.factoryStore=e.store:"object"===a(e.store)&&(n.store=e.store);return n},l=r(159);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}window.__KOOT_STORE__=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"function"==typeof e.factoryStore?e.factoryStore():"object"===f(e.store)?e.store:{}}(s(o)),window.__KOOT_HISTORY__=Object(n.syncHistoryWithStore)(l.a,window.__KOOT_STORE__)}});