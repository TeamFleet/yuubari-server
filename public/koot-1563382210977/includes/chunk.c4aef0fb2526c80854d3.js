(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1122:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(55),o=n(912),s=n(792),l=Object(i.a)({connect:function(t){return{localeId:t.localeId}},styles:n(1123)})(function(t){var e=t.className,n=t.entity,r=t.localeId;return n?a.a.createElement(s.a,{className:e,title:n._name,subtitle:Object(o.a)(n)},"ja"!==r&&a.a.createElement("span",{className:"name-ja"},n.getName("ja_jp"))):null});e.a=l},1123:function(t,e){t.exports={wrapper:"ff5163e4",css:".ff5163e4 .name-ja{position:absolute;bottom:0}"}},1124:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(55),o=n(798),s=n(762),l=n(774),c=Object(i.a)({styles:n(1125)})(function(t){var e=t.className,n=t.entity;return a.a.createElement(s.a,{className:e},a.a.createElement(o.a,{className:"picture",src:Object(l.a)("entity",n.id,"2")}))});e.a=c},1125:function(t,e){t.exports={wrapper:"f5f10b99",css:".f5f10b99{position:relative;width:13rem;max-width:13rem}.f5f10b99 .picture{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden;border-radius:.5rem}.f5f10b99 .picture .img{width:100%;display:block;position:relative}"}},1126:function(t,e){t.exports={wrapper:"ee529174",css:".ee529174 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ee529174 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ee529174 .entityinfo-pictures{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.ee529174 .entityinfo-list .count{padding-left:.5em}.ee529174 .entityinfo-list .list{clear:none}.ee529174 .entityinfo-links{overflow:hidden;margin-right:-1rem}.ee529174 .entityinfo-links .item{display:block;float:left;margin-right:1rem}"}},1148:function(t,e,n){"use strict";n.r(e),function(t){var r,a=n(0),i=n.n(a),o=n(55),s=n(760),l=n(763),c=n(912),f=n(1122),p=n(1124),u=n(790),m=n(762),d=n(805),h=n(761);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length},k=Object(o.a)({connect:!0,pageinfo:function(e,n){var r="object"===x(n.params)?n.params.id:void 0;if(void 0===r)return{};var a=s.a.entities[r],i=a._name;return Object(l.a)(e,{title:i,subtitle:Object(c.a)(a),description:i+", ".concat(j(a)?t("Seiyuu"):t("Artist"))})},styles:n(1126)})(r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,w(e).apply(this,arguments))}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,i.a.Component),n=e,(r=[{key:"getList",value:function(t){return Array.isArray(this.data.relation[t])&&this.data.relation[t].length?this.data.relation[t].map(function(t){return t[t.length-1]}):[]}},{key:"render",value:function(){var t=j(this.data);return i.a.createElement(u.a,{className:this.props.className,"has-tabs":!1},i.a.createElement(f.a,{entity:this.data}),t&&i.a.createElement(p.a,{entity:this.data,className:"entityinfo entityinfo-pictures"}),i.a.createElement(E,{type:"casts",list:this.getList("cv")}),i.a.createElement(E,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),i.a.createElement(N,{links:this.data.links}))}},{key:"data",get:function(){return!this._data&&this.props.params.id&&(this._data=s.a.entities[this.props.params.id]),this._data||{}}}])&&g(n.prototype,r),a&&g(n,a),e}())||r;e.default=k;var E=function(e){var n=e.list,r=e.type,a=y(e,["list","type"]);return n.length?i.a.createElement(m.a,{title:i.a.createElement("div",{className:"title"},i.a.createElement(h.a,{tag:"h2",className:"title-inline",children:t({casts:"Casts",illustrates:"Illustrates",links:"Links"},r)}),i.a.createElement("small",{className:"count"},"(",n.length,")")),className:"entityinfo entityinfo-list entityinfo-".concat(r)},i.a.createElement(d.a,b({list:n,type:"names",className:"list",sort:!1},a))):null},N=function(e){var n=e.links;return Array.isArray(n)&&(n=n.filter(function(t){return!!t.name})).length?i.a.createElement(m.a,{title:t("Links"),className:"entityinfo entityinfo-links"},n.map(function(t,e){return i.a.createElement("a",{className:"item",href:t.url,target:"_blank",key:e},t.name)})):null}}.call(this,n(106).default)},294:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],a=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===a.title&&document.title&&(a.title=document.title),void 0===a.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(a.url=location.href)),void 0!==a.charset&&r.push({charset:a.charset}),void 0!==a.title&&(r.push({itemprop:"name",content:a.title}),r.push({name:"twitter:title",content:a.title}),r.push({name:"og:title",content:a.title})),void 0!==a.description&&(r.push({name:"description",content:a.description}),r.push({itemprop:"description",content:a.description}),r.push({itemprop:"twitter:description",content:a.description}),r.push({itemprop:"og:description",content:a.description})),void 0!==a.image&&(r.push({name:"image",content:a.image}),r.push({itemprop:"image",content:a.image}),r.push({itemprop:"twitter:image:src",content:a.image}),r.push({itemprop:"og:image",content:a.image})),void 0!==a.video&&(r.push({name:"twitter:player",content:a.video}),r.push({itemprop:"og:video",content:a.video})),void 0!==a.url&&r.push({name:"og:url",content:a.url}),void 0!==a.siteName&&r.push({name:"og:site_name",content:a.siteName}),void 0!==a.locale&&r.push({name:"og:locale",content:a.locale}),void 0!==a.type&&r.push({name:"og:type",content:a.type}),void 0!==a.twitter.card&&r.push({name:"twitter:card",content:a.twitter.card}),void 0!==a.twitter.siteCreator&&r.push({name:"twitter:site",content:n(a.twitter.siteCreator)}),void 0!==a.twitter.author&&r.push({name:"twitter:creator",content:n(a.twitter.author)}),void 0!==a.facebook.adminsId&&r.push({name:"fb:admins",content:n(a.facebook.adminsId)}),void 0!==a.facebook.appId&&r.push({name:"fb:app_id",content:n(a.facebook.appId)}),void 0!==a.returnArray&&(e=a.returnArray),e?r:r.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},762:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(55),o=n(761);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=Object(i.a)({styles:n(814)})(function(t){var e=t.title,n=t.titleType,r=t.children,i=l(t,["title","titleType","children"]);return a.a.createElement("div",i,null==e?null:"object"!==s(e)&&"function"!=typeof e?a.a.createElement(o.a,{tag:"h2",className:"title",type:n,inherit:!0},e):e,r)});e.a=c},790:function(t,e,n){"use strict";var r=n(0),a=n.n(r),i=n(21),o=n.n(i),s=n(55),l=n(764);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=Object(s.a)({styles:n(791)})(function(t){var e,n=t.className,r=t["has-tabs"],i=void 0===r||r,s=p(t,["className","has-tabs"]);return a.a.createElement(l.a,c({className:o()((e={},f(e,n,!0),f(e,"has-tabs",i),e))},s))});e.a=u},791:function(t,e){t.exports={wrapper:"aa729371",css:".aa729371{padding-top:2.5rem}@media (max-width:850px){.aa729371{padding-top:0}.aa729371,.aa729371:first-child{margin-top:-2rem}}@media (min-width:851px) and (max-height:760px){.aa729371{padding-top:2rem}}.aa729371.has-tabs{padding-top:5.5rem}@media (max-width:850px){.aa729371.has-tabs{padding-top:1rem}.aa729371.has-tabs,.aa729371.has-tabs:first-child{margin-top:0}}@media (min-width:851px) and (max-height:760px){.aa729371.has-tabs{padding-top:4.1rem}}"}},792:function(t,e,n){"use strict";var r,a=n(0),i=n.n(a),o=(n(69),n(21)),s=n.n(o),l=n(55),c=n(773),f=n(785),p=n(761);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=Object(l.a)({styles:n(793)})(r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,y(e).call(this,t))).state={currentIndex:t.defaultIndex||0},n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,i.a.Component),n=e,(r=[{key:"renderTab",value:function(t,e){var n,r,a=this,o=this.props,l=o.urlBase,f=o.onTabChange,p=o.tabLink,u=void 0===p||p;Array.isArray(t)?(n=t[0],r=t[1]):"object"===d(t)?(n=t.tabId,r=t.tabName):(n=e,r=t);var m=u?"".concat(l).concat(e?"/".concat(n):""):void 0,h=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,b=u?"a":"span";return i.a.createElement(b,{href:m,className:s()(["link","tab",{on:e===h}]),key:e,onClick:function(t){a.setState({currentIndex:e}),"function"==typeof f&&(t.preventDefault(),f(n,e)),m&&Object(c.a)(m)}},r)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.title,r=t.subtitle,a=t.tabs,o=t.children,l=m(t,["className","title","subtitle","tabs","children"]);return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach(function(t){return delete l[t]}),i.a.createElement(f.a,u({className:s()([e,{"is-portal":!0,"has-subtitle":!!r,"has-tabs":!!a,"has-only-title":!o}])},l),i.a.createElement("div",{className:"infos"},n&&i.a.createElement("div",{className:"title"},r&&i.a.createElement("span",{className:"subtitle"},r),i.a.createElement(p.a,{tag:"h1",className:"title-h1",children:n})),o),a&&i.a.createElement("div",{className:"tabs"},i.a.createElement("div",{className:"wrapper"},a.map(this.renderTab.bind(this)))),!a&&i.a.createElement("div",{className:"tabs-placeholder"}))}}])&&h(n.prototype,r),a&&h(n,a),e}())||r;e.a=v},793:function(t,e){t.exports={wrapper:"a9281afa",css:'.a9281afa .infos{margin:0 0 .7rem;color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;min-height:2.3rem;position:relative}@media (max-width:850px){.a9281afa .infos{display:none}}@media (min-width:851px) and (max-height:760px){.a9281afa .infos{margin-bottom:.4rem}}.a9281afa .title{display:block;float:left;color:#fff;font-size:1.3rem;font-weight:400;line-height:2.3rem;height:2.3rem;overflow:hidden;padding:0 1rem 0 0;margin:0 1rem 0 0;border-right:.05rem solid rgba(237,240,242,.15)}.a9281afa .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.a9281afa .subtitle{display:block;margin-top:.1rem;margin-bottom:.2rem;font-size:.6rem;line-height:1em}@media (min-width:851px) and (max-height:760px){.a9281afa .subtitle{margin-top:0;margin-bottom:.2rem}}.a9281afa.has-subtitle .title{line-height:1.4rem;font-size:1.3rem}.a9281afa.has-only-title .title{border-right:0}.a9281afa .tabs{clear:both;line-height:3rem;height:3rem;font-size:.8rem;overflow:hidden;position:relative;z-index:5;margin-left:-1.5rem;margin-right:-1.5rem}@media (max-width:850px){.a9281afa .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.a9281afa .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.a9281afa .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.a9281afa .tabs{line-height:2.4rem;height:2.4rem}}.a9281afa .tabs>.wrapper{height:4rem;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;overflow:hidden;overflow-x:auto;position:relative;padding-left:1.5rem;padding-right:1.5rem}@media (max-width:850px){.a9281afa .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.a9281afa .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.a9281afa .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.a9281afa .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.a9281afa .tabs>.wrapper:after{width:.6rem}}.a9281afa .tab{display:inline-block;color:rgba(185,205,214,.55);position:relative;text-align:center;border-bottom:.1rem solid transparent;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em}html.is-hover .a9281afa .tab:hover{color:#fff}.a9281afa .tab:active,html.is-hover .a9281afa .tab:hover:active{color:hsla(0,0%,100%,.5)}.a9281afa .tab.on{color:#fff;z-index:-1;border-bottom-color:#40c4ff;pointer-events:none}.a9281afa .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.a9281afa .tab{height:2.35rem}}.a9281afa .tabs-placeholder{height:.3rem}@media (max-width:850px){.a9281afa .tabs-placeholder{display:none}}.a9281afa.is-portal{padding-top:1rem}@media (max-width:850px){.a9281afa.is-portal{padding-top:0}}@media (min-width:851px) and (max-height:760px){.a9281afa.is-portal{padding-top:.75rem}}'}},798:function(t,e,n){"use strict";var r,a=n(0),i=n.n(a),o=n(21),s=n.n(o),l=n(55);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(l.a)({styles:n(799)})(r=function(t){function e(){var t,n,r,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=this,n=!(a=(t=m(e)).call.apply(t,[this].concat(o)))||"object"!==c(a)&&"function"!=typeof a?d(r):a,b(d(n),"state",{isLoading:!0,isLoaded:!1,isError:!1}),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,i.a.Component),n=e,(r=[{key:"onLoad",value:function(){this.setState({isLoading:!1,isLoaded:!0})}},{key:"onError",value:function(){this.setState({isLoading:!1,isError:!0})}},{key:"render",value:function(){var t,e=this.props,n=e.className,r=e.classNameImg,a=e.children,o=e.tag,l=e.component,c=e.src,u=e.img,m=e.pic,d=e.picture,h=e.styleImg,y=p(e,["className","classNameImg","children","tag","component","src","img","pic","picture","styleImg"]),g=o||l||"span",v=c||u||m||d||void 0;return i.a.createElement(g,f({className:s()((t={},b(t,n,!0),b(t,"is-loading",this.state.isLoading),b(t,"is-loaded",this.state.isLoaded),b(t,"is-error",this.state.isError),t))},y),i.a.createElement("img",{className:s()(["img",r]),src:v,onLoad:this.onLoad.bind(this),onError:this.onError.bind(this),style:h}),a)}}])&&u(n.prototype,r),a&&u(n,a),e}())||r;e.a=y},799:function(t,e){t.exports={wrapper:"c71075c8",css:'.c71075c8{position:relative}.c71075c8.is-loading>.img{opacity:0;z-index:-1000}.c71075c8.is-loading:after{content:"";position:absolute;z-index:-1;width:2rem;height:2rem;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;left:50%;top:50%;margin-left:-1rem;margin-top:-1rem;border:.1rem solid rgba(237,240,242,.075);border-top-color:rgba(64,196,255,.75);border-radius:50%}'}},814:function(t,e){t.exports={wrapper:"a69a3dfd",css:".a69a3dfd{border-top:2rem solid transparent}.a69a3dfd>.title{margin-top:0;margin-bottom:.5rem;display:block}.a69a3dfd>.title[data-title-tag=h2],.a69a3dfd>h2.title{font-size:.9rem;line-height:1.1rem}.a69a3dfd .title-inline{font-size:medium;line-height:normal;display:inline-block;margin:0}"}},912:function(t,e,n){"use strict";(function(t){e.a=function(e){return Array.isArray(e.relation.cv)&&e.relation.cv.length?t("Seiyuu"):Array.isArray(e.relation.illustrator)&&e.relation.illustrator.length?t("Artist"):""}}).call(this,n(106).default)}}]);