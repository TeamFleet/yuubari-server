(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1131:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(54),o=n(921),s=n(790),l=Object(i.a)({connect:function(t){return{localeId:t.localeId}},styles:n(1132)})(function(t){var e=t.className,n=t.entity,a=t.localeId;return n?r.a.createElement(s.a,{className:e,title:n._name,subtitle:Object(o.a)(n)},"ja"!==a&&r.a.createElement("span",{className:"name-ja"},n.getName("ja_jp"))):null});e.a=l},1132:function(t,e){t.exports={wrapper:"ff5163e4",css:".ff5163e4 .name-ja{position:absolute;bottom:0}"}},1133:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(54),o=n(796),s=n(760),l=n(773),c=Object(i.a)({styles:n(1134)})(function(t){var e=t.className,n=t.entity;return r.a.createElement(s.a,{className:e},r.a.createElement(o.a,{className:"picture",src:Object(l.a)("entity",n.id,"2")}))});e.a=c},1134:function(t,e){t.exports={wrapper:"f5f10b99",css:".f5f10b99{position:relative;width:13rem;max-width:13rem}.f5f10b99 .picture{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden;border-radius:.5rem}.f5f10b99 .picture .img{width:100%;display:block;position:relative}"}},1135:function(t,e){t.exports={wrapper:"ee529174",css:".ee529174 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ee529174 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ee529174 .entityinfo-pictures{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.ee529174 .entityinfo-list .count{padding-left:.5em}.ee529174 .entityinfo-list .list{clear:none}.ee529174 .entityinfo-links{overflow:hidden;margin-right:-1rem}.ee529174 .entityinfo-links .item{display:block;float:left;margin-right:1rem}"}},1157:function(t,e,n){"use strict";n.r(e),function(t){var a,r=n(0),i=n.n(r),o=n(54),s=n(758),l=n(761),c=n(921),f=n(1131),p=n(1133),u=n(788),m=n(760),d=n(804),h=n(759);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function g(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function v(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length},k=Object(o.a)({connect:!0,pageinfo:function(e,n){var a="object"===x(n.params)?n.params.id:void 0;if(void 0===a)return{};var r=s.a.entities[a],i=r._name;return Object(l.a)(e,{title:i,subtitle:Object(c.a)(r),description:i+", ".concat(j(r)?t("CV"):t("イラストレーター"))})},styles:n(1135)})(a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,w(e).apply(this,arguments))}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,i.a.Component),n=e,(a=[{key:"getList",value:function(t){return Array.isArray(this.data.relation[t])&&this.data.relation[t].length?this.data.relation[t].map(function(t){return t[t.length-1]}):[]}},{key:"render",value:function(){var t=j(this.data);return i.a.createElement(u.a,{className:this.props.className,"has-tabs":!1},i.a.createElement(f.a,{entity:this.data}),t&&i.a.createElement(p.a,{entity:this.data,className:"entityinfo entityinfo-pictures"}),i.a.createElement(E,{type:"casts",list:this.getList("cv")}),i.a.createElement(E,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),i.a.createElement(N,{links:this.data.links}))}},{key:"data",get:function(){return!this._data&&this.props.params.id&&(this._data=s.a.entities[this.props.params.id]),this._data||{}}}])&&g(n.prototype,a),r&&g(n,r),e}())||a;e.default=k;var E=function(e){var n=e.list,a=e.type,r=y(e,["list","type"]);return n.length?i.a.createElement(m.a,{title:i.a.createElement("div",{className:"title"},i.a.createElement(h.a,{tag:"h2",className:"title-inline",children:t({casts:"Casts",illustrates:"Illustrates",links:"Links"},a)}),i.a.createElement("small",{className:"count"},"(",n.length,")")),className:"entityinfo entityinfo-list entityinfo-".concat(a)},i.a.createElement(d.a,b({list:n,type:"names",className:"list",sort:!1},r))):null},N=function(e){var n=e.links;return Array.isArray(n)&&(n=n.filter(function(t){return!!t.name})).length?i.a.createElement(m.a,{title:t("Links"),className:"entityinfo entityinfo-links"},n.map(function(t,e){return i.a.createElement("a",{className:"item",href:t.url,target:"_blank",key:e},t.name)})):null}}.call(this,n(105).default)},292:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&a.push({charset:r.charset}),void 0!==r.title&&(a.push({itemprop:"name",content:r.title}),a.push({name:"twitter:title",content:r.title}),a.push({name:"og:title",content:r.title})),void 0!==r.description&&(a.push({name:"description",content:r.description}),a.push({itemprop:"description",content:r.description}),a.push({itemprop:"twitter:description",content:r.description}),a.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(a.push({name:"image",content:r.image}),a.push({itemprop:"image",content:r.image}),a.push({itemprop:"twitter:image:src",content:r.image}),a.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(a.push({name:"twitter:player",content:r.video}),a.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&a.push({name:"og:url",content:r.url}),void 0!==r.siteName&&a.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&a.push({name:"og:locale",content:r.locale}),void 0!==r.type&&a.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&a.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&a.push({name:"twitter:site",content:n(r.twitter.siteCreator)}),void 0!==r.twitter.author&&a.push({name:"twitter:creator",content:n(r.twitter.author)}),void 0!==r.facebook.adminsId&&a.push({name:"fb:admins",content:n(r.facebook.adminsId)}),void 0!==r.facebook.appId&&a.push({name:"fb:app_id",content:n(r.facebook.appId)}),void 0!==r.returnArray&&(e=r.returnArray),e?a:a.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},760:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(54),o=n(759);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=Object(i.a)({styles:n(814)})(function(t){var e=t.title,n=t.titleType,a=t.children,i=l(t,["title","titleType","children"]);return r.a.createElement("div",i,null==e?null:"object"!==s(e)&&"function"!=typeof e?r.a.createElement(o.a,{tag:"h2",className:"title",type:n,inherit:!0},e):e,a)});e.a=c},788:function(t,e,n){"use strict";var a=n(0),r=n.n(a),i=n(21),o=n.n(i),s=n(54),l=n(762);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=Object(s.a)({styles:n(789)})(function(t){var e,n=t.className,a=t["has-tabs"],i=void 0===a||a,s=p(t,["className","has-tabs"]);return r.a.createElement(l.a,c({className:o()((e={},f(e,n,!0),f(e,"has-tabs",i),e))},s))});e.a=u},789:function(t,e){t.exports={wrapper:"aa729371",css:".aa729371{padding-top:2.5rem}@media (max-width:850px){.aa729371{padding-top:0}.aa729371,.aa729371:first-child{margin-top:-2rem}}@media (min-width:851px) and (max-height:760px){.aa729371{padding-top:2rem}}.aa729371.has-tabs{padding-top:5.5rem}@media (max-width:850px){.aa729371.has-tabs{padding-top:1rem}.aa729371.has-tabs,.aa729371.has-tabs:first-child{margin-top:0}}@media (min-width:851px) and (max-height:760px){.aa729371.has-tabs{padding-top:4.1rem}}"}},790:function(t,e,n){"use strict";var a,r=n(0),i=n.n(r),o=(n(68),n(21)),s=n.n(o),l=n(54),c=n(772),f=n(783),p=n(759);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function b(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=Object(l.a)({styles:n(791)})(a=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,y(e).call(this,t))).state={currentIndex:t.defaultIndex||0},n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,i.a.Component),n=e,(a=[{key:"renderTab",value:function(t,e){var n,a,r=this,o=this.props,l=o.urlBase,f=o.onTabChange,p=o.tabLink,u=void 0===p||p;Array.isArray(t)?(n=t[0],a=t[1]):"object"===d(t)?(n=t.tabId,a=t.tabName):(n=e,a=t);var m=u?"".concat(l).concat(e?"/".concat(n):""):void 0,h=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,b=u?"a":"span";return i.a.createElement(b,{href:m,className:s()(["link","tab",{on:e===h}]),key:e,onClick:function(t){r.setState({currentIndex:e}),"function"==typeof f&&(t.preventDefault(),f(n,e)),m&&Object(c.a)(m)}},a)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.title,a=t.subtitle,r=t.tabs,o=t.children,l=m(t,["className","title","subtitle","tabs","children"]);return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach(function(t){return delete l[t]}),i.a.createElement(f.a,u({className:s()([e,{"is-portal":!0,"has-subtitle":!!a,"has-tabs":!!r,"has-only-title":!o}])},l),i.a.createElement("div",{className:"infos"},n&&i.a.createElement("div",{className:"title"},a&&i.a.createElement("span",{className:"subtitle"},a),i.a.createElement(p.a,{tag:"h1",className:"title-h1",children:n})),o),r&&i.a.createElement("div",{className:"tabs"},i.a.createElement("div",{className:"wrapper"},r.map(this.renderTab.bind(this)))),!r&&i.a.createElement("div",{className:"tabs-placeholder"}))}}])&&h(n.prototype,a),r&&h(n,r),e}())||a;e.a=v},791:function(t,e){t.exports={wrapper:"a9281afa",css:'.a9281afa .infos{margin:0 0 .7rem;color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;min-height:2.3rem;position:relative}@media (max-width:850px){.a9281afa .infos{display:none}}@media (min-width:851px) and (max-height:760px){.a9281afa .infos{margin-bottom:.4rem}}.a9281afa .title{display:block;float:left;color:#fff;font-size:1.3rem;font-weight:400;line-height:2.3rem;height:2.3rem;overflow:hidden;padding:0 1rem 0 0;margin:0 1rem 0 0;border-right:.05rem solid rgba(237,240,242,.15)}.a9281afa .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.a9281afa .subtitle{display:block;margin-top:.1rem;margin-bottom:.2rem;font-size:.6rem;line-height:1em}@media (min-width:851px) and (max-height:760px){.a9281afa .subtitle{margin-top:0;margin-bottom:.2rem}}.a9281afa.has-subtitle .title{line-height:1.4rem;font-size:1.3rem}.a9281afa.has-only-title .title{border-right:0}.a9281afa .tabs{clear:both;line-height:3rem;height:3rem;font-size:.8rem;overflow:hidden;position:relative;z-index:5;margin-left:-1.5rem;margin-right:-1.5rem}@media (max-width:850px){.a9281afa .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.a9281afa .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.a9281afa .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.a9281afa .tabs{line-height:2.4rem;height:2.4rem}}.a9281afa .tabs>.wrapper{height:4rem;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;overflow:hidden;overflow-x:auto;position:relative;padding-left:1.5rem;padding-right:1.5rem}@media (max-width:850px){.a9281afa .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.a9281afa .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.a9281afa .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.a9281afa .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.a9281afa .tabs>.wrapper:after{width:.6rem}}.a9281afa .tab{display:inline-block;color:rgba(185,205,214,.55);position:relative;text-align:center;border-bottom:.1rem solid transparent;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em}html.is-hover .a9281afa .tab:hover{color:#fff}.a9281afa .tab:active,html.is-hover .a9281afa .tab:hover:active{color:hsla(0,0%,100%,.5)}.a9281afa .tab.on{color:#fff;z-index:-1;border-bottom-color:#40c4ff;pointer-events:none}.a9281afa .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.a9281afa .tab{height:2.35rem}}.a9281afa .tabs-placeholder{height:.3rem}@media (max-width:850px){.a9281afa .tabs-placeholder{display:none}}.a9281afa.is-portal{padding-top:1rem}@media (max-width:850px){.a9281afa.is-portal{padding-top:0}}@media (min-width:851px) and (max-height:760px){.a9281afa.is-portal{padding-top:.75rem}}'}},796:function(t,e,n){"use strict";var a,r=n(0),i=n.n(r),o=n(21),s=n.n(o),l=n(54);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function u(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(l.a)({styles:n(797)})(a=function(t){function e(){var t,n,a,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return a=this,n=!(r=(t=m(e)).call.apply(t,[this].concat(o)))||"object"!==c(r)&&"function"!=typeof r?d(a):r,b(d(n),"state",{isLoading:!0,isLoaded:!1,isError:!1}),n}var n,a,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,i.a.Component),n=e,(a=[{key:"onLoad",value:function(){this.setState({isLoading:!1,isLoaded:!0})}},{key:"onError",value:function(){this.setState({isLoading:!1,isError:!0})}},{key:"render",value:function(){var t,e=this.props,n=e.className,a=e.classNameImg,r=e.children,o=e.tag,l=e.component,c=e.src,u=e.img,m=e.pic,d=e.picture,h=e.styleImg,y=p(e,["className","classNameImg","children","tag","component","src","img","pic","picture","styleImg"]),g=o||l||"span",v=c||u||m||d||void 0;return i.a.createElement(g,f({className:s()((t={},b(t,n,!0),b(t,"is-loading",this.state.isLoading),b(t,"is-loaded",this.state.isLoaded),b(t,"is-error",this.state.isError),t))},y),i.a.createElement("img",{className:s()(["img",a]),src:v,onLoad:this.onLoad.bind(this),onError:this.onError.bind(this),style:h}),r)}}])&&u(n.prototype,a),r&&u(n,r),e}())||a;e.a=y},797:function(t,e){t.exports={wrapper:"c71075c8",css:'.c71075c8{position:relative}.c71075c8.is-loading>.img{opacity:0;z-index:-1000}.c71075c8.is-loading:after{content:"";position:absolute;z-index:-1;width:2rem;height:2rem;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;left:50%;top:50%;margin-left:-1rem;margin-top:-1rem;border:.1rem solid rgba(237,240,242,.075);border-top-color:rgba(64,196,255,.75);border-radius:50%}'}},814:function(t,e){t.exports={wrapper:"a69a3dfd",css:".a69a3dfd{border-top:2rem solid transparent}.a69a3dfd>.title{margin-top:0;margin-bottom:.5rem;display:block}.a69a3dfd>.title[data-title-tag=h2],.a69a3dfd>h2.title{font-size:.9rem;line-height:1.1rem}.a69a3dfd .title-inline{font-size:medium;line-height:normal;display:inline-block;margin:0}"}},921:function(t,e,n){"use strict";(function(t){e.a=function(e){return Array.isArray(e.relation.cv)&&e.relation.cv.length?t("CV"):Array.isArray(e.relation.illustrator)&&e.relation.illustrator.length?t("イラストレーター"):""}}).call(this,n(105).default)}}]);