(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1019:function(t,e,n){"use strict";(function(t){e.a=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length?"声优":Array.isArray(t.relation.illustrator)&&t.relation.illustrator.length?"画师":""}}).call(this,n(36).default)},1143:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(7),o=n(1019),s=n(957),l=Object(i.a)({connect:function(t){return{localeId:t.localeId}},styles:n(1144)})(function(t){var e=t.className,n=t.entity,r=t.localeId;return n?a.a.createElement(s.a,{className:e,title:n._name,subtitle:Object(o.a)(n)},"ja"!==r&&a.a.createElement("span",{className:"name-ja"},n.getName("ja_jp"))):null});e.a=l},1144:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",function(){return r}),n.d(e,"css",function(){return a});const r="ff5163e4",a=".ff5163e4 .name-ja{position:absolute;bottom:0}";e.default={wrapper:r,css:a}},1145:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(7),o=n(961),s=n(175),l=n(124),c=Object(i.a)({styles:n(1146)})(function(t){var e=t.className,n=t.entity;return a.a.createElement(s.a,{className:e},a.a.createElement(o.a,{className:"picture",src:Object(l.a)("entity",n.id,"2")}))});e.a=c},1146:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",function(){return r}),n.d(e,"css",function(){return a});const r="f5f10b99",a=".f5f10b99{position:relative;width:13rem;max-width:13rem}.f5f10b99 .picture{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden;border-radius:.5rem}.f5f10b99 .picture .img{width:100%;display:block;position:relative}";e.default={wrapper:r,css:a}},1147:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",function(){return r}),n.d(e,"css",function(){return a});const r="ee529174",a=".ee529174 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ee529174 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ee529174 .entityinfo-pictures{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.ee529174 .entityinfo-list .count{padding-left:.5em}.ee529174 .entityinfo-list .list{clear:none}.ee529174 .entityinfo-links{overflow:hidden;margin-right:-1rem}.ee529174 .entityinfo-links .item{display:block;float:left;margin-right:1rem}";e.default={wrapper:r,css:a}},1169:function(t,e,n){"use strict";n.r(e),function(t){var r,a=n(0),i=n.n(a),o=n(7),s=n(17),l=n(236),c=n(1019),u=n(1143),f=n(1145),p=n(956),m=n(175),y=n(239),d=n(57);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var E=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length},k=Object(o.a)({connect:!0,pageinfo:function(t,e){var n="object"===j(e.params)?e.params.id:void 0;if(void 0===n)return{};var r=s.a.entities[n],a=r._name;return Object(l.a)(t,{title:a,subtitle:Object(c.a)(r),description:a+", ".concat(E(r)?"声优":"画师")})},styles:n(1147)})(r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,w(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,i.a.Component),n=e,(r=[{key:"getList",value:function(t){return Array.isArray(this.data.relation[t])&&this.data.relation[t].length?this.data.relation[t].map(function(t){return t[t.length-1]}):[]}},{key:"render",value:function(){var t=E(this.data);return i.a.createElement(p.a,{className:this.props.className,"has-tabs":!1},i.a.createElement(u.a,{entity:this.data}),t&&i.a.createElement(f.a,{entity:this.data,className:"entityinfo entityinfo-pictures"}),i.a.createElement(N,{type:"casts",list:this.getList("cv")}),i.a.createElement(N,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),i.a.createElement(_,{links:this.data.links}))}},{key:"data",get:function(){return!this._data&&this.props.params.id&&(this._data=s.a.entities[this.props.params.id]),this._data||{}}}])&&g(n.prototype,r),a&&g(n,a),e}())||r;e.default=k;var N=function(e){var n=e.list,r=e.type,a=b(e,["list","type"]);return n.length?i.a.createElement(m.a,{title:i.a.createElement("div",{className:"title"},i.a.createElement(d.a,{tag:"h2",className:"title-inline",children:t({casts:"配音",illustrates:"绘制",links:"相关链接"},r)}),i.a.createElement("small",{className:"count"},"(",n.length,")")),className:"entityinfo entityinfo-list entityinfo-".concat(r)},i.a.createElement(y.a,h({list:n,type:"names",className:"list",sort:!1},a))):null},_=function(t){var e=t.links;return Array.isArray(e)&&(e=e.filter(function(t){return!!t.name})).length?i.a.createElement(m.a,{title:"相关链接",className:"entityinfo entityinfo-links"},e.map(function(t,e){return i.a.createElement("a",{className:"item",href:t.url,target:"_blank",key:e},t.name)})):null}}.call(this,n(36).default)}}]);