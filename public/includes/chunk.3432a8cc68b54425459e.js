(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1005:function(t,e,n){"use strict";(function(t){e.a=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length?"声优":Array.isArray(t.relation.illustrator)&&t.relation.illustrator.length?"画师":""}}).call(this,n(38).default)},1122:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(8),o=n(1005),c=n(943),s=Object(i.a)({connect:function(t){return{localeId:t.localeId}},styles:n(1123)})((function(t){var e=t.className,n=t.entity,r=t.localeId;return n?a.a.createElement(c.a,{className:e,title:n._name,subtitle:Object(o.a)(n)},"ja"!==r&&a.a.createElement("span",{className:"name-ja"},n.getName("ja_jp"))):null}));e.a=s},1123:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",(function(){return r})),n.d(e,"css",(function(){return a}));const r="ff5163e4",a=".ff5163e4 .name-ja{position:absolute;bottom:0}";e.default={wrapper:r,css:a}},1124:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(8),o=n(947),c=n(171),s=n(125),l=Object(i.a)({styles:n(1125)})((function(t){var e=t.className,n=t.entity;return a.a.createElement(c.a,{className:e},a.a.createElement(o.a,{className:"picture",src:Object(s.a)("entity",n.id,"2")}))}));e.a=l},1125:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",(function(){return r})),n.d(e,"css",(function(){return a}));const r="f5f10b99",a=".f5f10b99{position:relative;width:13rem;max-width:13rem}.f5f10b99 .picture{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden;border-radius:.5rem}.f5f10b99 .picture .img{width:100%;display:block;position:relative}";e.default={wrapper:r,css:a}},1126:function(t,e,n){"use strict";n.r(e),n.d(e,"wrapper",(function(){return r})),n.d(e,"css",(function(){return a}));const r="ee529174",a=".ee529174 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ee529174 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ee529174 .entityinfo-pictures{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.ee529174 .entityinfo-list .count{padding-left:.5em}.ee529174 .entityinfo-list .list{clear:none}.ee529174 .entityinfo-links{overflow:hidden;margin-right:-1rem}.ee529174 .entityinfo-links .item{display:block;float:left;margin-right:1rem}";e.default={wrapper:r,css:a}},1151:function(t,e,n){"use strict";n.r(e),function(t){var r,a=n(0),i=n.n(a),o=n(8),c=n(17),s=n(232),l=n(1005),u=n(1122),f=n(1124),p=n(942),m=n(171),y=n(235),d=n(59);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function b(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var N=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length},_=Object(o.a)({connect:!0,pageinfo:function(t,e){var n="object"===k(e.params)?e.params.id:void 0;if(void 0===n)return{};var r=c.a.entities[n],a=r._name;return Object(s.a)(t,{title:a,subtitle:Object(l.a)(r),description:a+", ".concat(N(r)?"声优":"画师")})},styles:n(1126)})(r=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(s,t);var e,n,r,a,o=(e=s,function(){var t,n=j(e);if(O()){var r=j(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return w(this,t)});function s(){return g(this,s),o.apply(this,arguments)}return n=s,(r=[{key:"getList",value:function(t){return Array.isArray(this.data.relation[t])&&this.data.relation[t].length?this.data.relation[t].map((function(t){return t[t.length-1]})):[]}},{key:"render",value:function(){var t=N(this.data);return i.a.createElement(p.a,{className:this.props.className,"has-tabs":!1},i.a.createElement(u.a,{entity:this.data}),t&&i.a.createElement(f.a,{entity:this.data,className:"entityinfo entityinfo-pictures"}),i.a.createElement(x,{type:"casts",list:this.getList("cv")}),i.a.createElement(x,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),i.a.createElement(A,{links:this.data.links}))}},{key:"data",get:function(){return!this._data&&this.props.params.id&&(this._data=c.a.entities[this.props.params.id]),this._data||{}}}])&&v(n.prototype,r),a&&v(n,a),s}(i.a.Component))||r;e.default=_;var x=function(e){var n=e.list,r=e.type,a=b(e,["list","type"]);return n.length?i.a.createElement(m.a,{title:i.a.createElement("div",{className:"title"},i.a.createElement(d.a,{tag:"h2",className:"title-inline",children:t({casts:"配音",illustrates:"绘制",links:"相关链接"},r)}),i.a.createElement("small",{className:"count"},"(",n.length,")")),className:"entityinfo entityinfo-list entityinfo-".concat(r)},i.a.createElement(y.a,h({list:n,type:"names",className:"list",sort:!1},a))):null},A=function(t){var e=t.links;return Array.isArray(e)&&(e=e.filter((function(t){return!!t.name}))).length?i.a.createElement(m.a,{title:"相关链接",className:"entityinfo entityinfo-links"},e.map((function(t,e){return i.a.createElement("a",{className:"item",href:t.url,target:"_blank",key:e},t.name)}))):null}}.call(this,n(38).default)}}]);