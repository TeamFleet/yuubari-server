(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1008:function(t,e,n){"use strict";n.r(e),function(t){var r,i=n(0),a=n.n(i),o=n(47),l=n(628),s=n(631),c=n(757),u=n(981),p=n(983),f=n(653),m=n(630),d=n(668),h=n(629);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var j=function(t){return Array.isArray(t.relation.cv)&&t.relation.cv.length},k=Object(o.a)({connect:!0,pageinfo:function(e,n){var r="object"===x(n.params)?n.params.id:void 0;if(void 0===r)return{};var i=l.a.entities[r],a=i._name;return Object(s.a)(e,{title:a,subtitle:Object(c.a)(i),description:a+", ".concat(j(i)?t("seiyuu"):t("artist"))})},styles:n(985)})(r=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,w(e).apply(this,arguments))}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,a.a.Component),n=e,(r=[{key:"getList",value:function(t){return Array.isArray(this.data.relation[t])&&this.data.relation[t].length?this.data.relation[t].map(function(t){return t[t.length-1]}):[]}},{key:"render",value:function(){var t=j(this.data);return a.a.createElement(f.a,{className:this.props.className,"has-tabs":!1},a.a.createElement(u.a,{entity:this.data}),t&&a.a.createElement(p.a,{entity:this.data,className:"entityinfo entityinfo-pictures"}),a.a.createElement(E,{type:"casts",list:this.getList("cv")}),a.a.createElement(E,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),a.a.createElement(S,{links:this.data.links}))}},{key:"data",get:function(){return!this._data&&this.props.params.id&&(this._data=l.a.entities[this.props.params.id]),this._data||{}}}])&&g(n.prototype,r),i&&g(n,i),e}())||r;e.default=k;var E=function(e){var n=e.list,r=e.type,i=y(e,["list","type"]);return n.length?a.a.createElement(m.a,{title:a.a.createElement("div",{className:"title"},a.a.createElement(h.a,{tag:"h2",className:"title-inline",children:t("entity_details",r)}),a.a.createElement("small",{className:"count"},"(",n.length,")")),className:"entityinfo entityinfo-list entityinfo-".concat(r)},a.a.createElement(d.a,b({list:n,type:"names",className:"list",sort:!1},i))):null},S=function(e){var n=e.links;return Array.isArray(n)&&(n=n.filter(function(t){return!!t.name})).length?a.a.createElement(m.a,{title:t("entity_details.links"),className:"entityinfo entityinfo-links"},n.map(function(t,e){return a.a.createElement("a",{className:"item",href:t.url,target:"_blank",key:e},t.name)})):null}}.call(this,n(93).default)},247:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],i=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===i.title&&document.title&&(i.title=document.title),void 0===i.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(i.url=location.href)),void 0!==i.charset&&r.push({charset:i.charset}),void 0!==i.title&&(r.push({itemprop:"name",content:i.title}),r.push({name:"twitter:title",content:i.title}),r.push({name:"og:title",content:i.title})),void 0!==i.description&&(r.push({name:"description",content:i.description}),r.push({itemprop:"description",content:i.description}),r.push({itemprop:"twitter:description",content:i.description}),r.push({itemprop:"og:description",content:i.description})),void 0!==i.image&&(r.push({name:"image",content:i.image}),r.push({itemprop:"image",content:i.image}),r.push({itemprop:"twitter:image:src",content:i.image}),r.push({itemprop:"og:image",content:i.image})),void 0!==i.video&&(r.push({name:"twitter:player",content:i.video}),r.push({itemprop:"og:video",content:i.video})),void 0!==i.url&&r.push({name:"og:url",content:i.url}),void 0!==i.siteName&&r.push({name:"og:site_name",content:i.siteName}),void 0!==i.locale&&r.push({name:"og:locale",content:i.locale}),void 0!==i.type&&r.push({name:"og:type",content:i.type}),void 0!==i.twitter.card&&r.push({name:"twitter:card",content:i.twitter.card}),void 0!==i.twitter.siteCreator&&r.push({name:"twitter:site",content:n(i.twitter.siteCreator)}),void 0!==i.twitter.author&&r.push({name:"twitter:creator",content:n(i.twitter.author)}),void 0!==i.facebook.adminsId&&r.push({name:"fb:admins",content:n(i.facebook.adminsId)}),void 0!==i.facebook.appId&&r.push({name:"fb:app_id",content:n(i.facebook.appId)}),void 0!==i.returnArray&&(e=i.returnArray),e?r:r.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},628:function(t,e,n){"use strict";var r=n(118);n.d(e,"b",function(){return r.locale}),n.d(e,"a",function(){return r.db})},629:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(19),o=n.n(a),l=n(47);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=Object(l.a)({styles:n(633)})(function(t){var e=t.className,n=t.classNameInner,r=t.component,a=t.tag,l=t.tagname,p=t.element,f=t.level,m=t.children,d=t.title,h=t.type,b=t.inherit,y=u(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=r||a||l||p||(void 0===f?void 0:"h".concat(f))||"div",v=e.split(" ")[0];y.children=m;var w=Array.isArray(m)?m[0]:m;switch("string"==typeof d?y["data-text"]=d:"string"==typeof w?y["data-text"]=w:"object"===c(w)&&"object"===c(w.props)&&"string"==typeof w.props.value&&(y["data-text"]=w.props.value),b&&(y["data-title-is-inherit"]=""),h){case"line-append":return i.a.createElement("div",{className:e,"data-title-type":h,"data-title-tag":g},i.a.createElement(g,s({className:o()([v+"-child",n])},y)))}return i.a.createElement(g,s({"data-title-type":h,className:e},y))});e.a=p},630:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(47),o=n(629);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=Object(a.a)({styles:n(678)})(function(t){var e=t.title,n=t.titleType,r=t.children,a=s(t,["title","titleType","children"]);return i.a.createElement("div",a,null==e?null:"object"!==l(e)&&"function"!=typeof e?i.a.createElement(o.a,{tag:"h2",className:"title",type:n,inherit:!0},e):e,r)});e.a=c},631:function(t,e,n){"use strict";(function(t){var r=n(247),i=n.n(r),a=n(4),o=n(634);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function e(n,r){if("object"===l(n)&&void 0===r)return e(a.e.getState(),n);if("object"!==l(n))return{};var s=n.localeId,c=t("title")+"",u=n.server.origin,p=Object.assign({uri:"","twitter:card":"summary_large_image"},r),f=p.uri,m=void 0===f?"undefined"!=typeof location?location.pathname:void 0:f,d=p.title,h=void 0===d?c:d,b=p.subtitle,y=p.description,g=p.image;if("object"===l(m)&&(m=m.pathname),"/"==m.substr(0,1)&&(m=m.substr(1)),h){Array.isArray(h)&&(h=h.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(h)&&h.length?h[0]:h;h=Array.isArray(h)?h.join(" / "):h,void 0!==b?a.e.dispatch(Object(o.a)({main:v,sub:b})):a.e.dispatch(Object(o.a)(v)),h!==c&&(h=h.replace(/\n/g,"")+" - "+c)}return y&&(y=y.replace(/\n/g,"")),"/"!==u.substr(u.length-1,1)&&(u+="/"),{title:h,metas:i()({title:h,description:y,image:g||u+"launcher.jpg",url:u+m,type:"website",locale:s,siteName:c,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,n(93).default)},632:function(t,e,n){"use strict";var r,i=n(0),a=n.n(i),o=n(47);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var m={},d=Object(o.a)({connect:function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}}})(r=function(t){function e(){var t,n,r,i,a,o,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var c=arguments.length,f=new Array(c),m=0;m<c;m++)f[m]=arguments[m];return r=this,n=!(i=(t=u(e)).call.apply(t,[this].concat(f)))||"object"!==s(i)&&"function"!=typeof i?p(r):i,a=p(n),l=!1,(o="updating")in a?Object.defineProperty(a,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[o]=l,n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,a.a.Component),n=e,(r=[{key:"restoreScrollY",value:function(){void 0!==m[this.props.pathname]&&(window.scrollTo(void 0,m[this.props.pathname]),delete m[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===s(this.props.locationBeforeTransitions)&&"object"===s(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(m[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete m[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=l({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),a.a.createElement("div",t)}}])&&c(n.prototype,r),i&&c(n,i),e}())||r;e.a=d},633:function(t,e){t.exports={wrapper:"f9f7",css:'.f9f7{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7:last-child{margin-bottom:0}.f9f7[data-title-is-inherit] .f9f7[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7[data-title-type=inline-block]{display:inline-block}.f9f7[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7[data-title-type=line-append] .f9f7-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7[data-title-type=line-append] .f9f7-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7[data-title-type=line-append] .f9f7-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},634:function(t,e,n){"use strict";var r=n(3);n.d(e,"a",function(){return i});var i=function(t){return function(e){e(function(t){return{type:r.O,title:t}}(t))}}},636:function(t,e,n){"use strict";e.a=function(t,e){switch(t){case"ship":case"ships":return"/ships/".concat(e);case"item":case"items":case"equipment":case"equipments":return"/equipments/".concat(e);case"entity":case"entities":return"/entities/".concat(e)}}},638:function(t,e,n){"use strict";var r=n(118);e.a=function(t){return r.get.equipment(t)}},640:function(t,e,n){"use strict";var r,i=n(0),a=n.n(i),o=n(79),l=n.n(o),s=n(47),c=n(19),u=n.n(c),p=n(163);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function d(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=Object(s.a)({connect:function(t){return{mainKey:t.app.mainKey}},styles:n(656)})(r=function(t){function e(){var t,n,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=this,n=!(i=(t=b(e)).call.apply(t,[this].concat(o)))||"object"!==f(i)&&"function"!=typeof i?y(r):i,v(y(n),"state",{enter:!0,enterActive:!1}),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,a.a.Component),n=e,(r=[{key:"componentDidMount",value:function(){var t=this;setTimeout(function(){t.setState({enterActive:!0})})}},{key:"renderContent",value:function(t){var e,n=this,r=this.props,i=r.className,o=r.children,l=r.mainKey,s=r.onAnimationEnd,c=d(r,["className","children","mainKey","onAnimationEnd"]);return delete c.dispatch,a.a.createElement("div",m({className:u()((e={},v(e,i,!0),v(e,"main-header",!0),v(e,"wrapper",t),v(e,"mod-transition-enter",this.state.enter),v(e,"mod-transition-enter-active",this.state.enterActive),v(e,"mod-transition-exit",this.keyCurrent!==l),e)),onAnimationEnd:function(t){if(t.target===t.currentTarget&&"fadein"===t.nativeEvent.animationName&&n.setState({enter:!1,enterActive:!1}),"function"==typeof s)return s(t)}},c),o,a.a.createElement(p.a,{className:"bg-container",type:"blured"}))}},{key:"render",value:function(){return this.props.mainKey?(this.keyCurrent||(this.keyCurrent=this.props.mainKey),a.a.createElement(O,{key:this.keyCurrent},this.renderContent(!0))):null}}])&&h(n.prototype,r),i&&h(n,i),e}())||r;e.a=w;var O=function(t){var e=t.children;return l.a.createPortal(e,document.getElementById("main-mask"))}},653:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(19),o=n.n(a),l=n(47),s=n(632);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var f=Object(l.a)({styles:n(654)})(function(t){var e,n=t.className,r=t["has-tabs"],a=void 0===r||r,l=p(t,["className","has-tabs"]);return i.a.createElement(s.a,c({className:o()((e={},u(e,n,!0),u(e,"has-tabs",a),e))},l))});e.a=f},654:function(t,e){t.exports={wrapper:"aa72",css:".aa72{padding-top:2.5rem}@media (max-width:850px){.aa72{padding-top:0}.aa72,.aa72:first-child{margin-top:-2rem}}@media (min-width:851px) and (max-height:760px){.aa72{padding-top:2rem}}.aa72.has-tabs{padding-top:5.5rem}@media (max-width:850px){.aa72.has-tabs{padding-top:1rem}.aa72.has-tabs,.aa72.has-tabs:first-child{margin-top:0}}@media (min-width:851px) and (max-height:760px){.aa72.has-tabs{padding-top:4.1rem}}"}},655:function(t,e,n){"use strict";var r,i=n(0),a=n.n(i),o=(n(61),n(19)),l=n.n(o),s=n(47),c=n(637),u=n(640),p=n(629);function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=Object(s.a)({styles:n(657)})(r=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=b(this,y(e).call(this,t))).state={currentIndex:t.defaultIndex||0},n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,a.a.Component),n=e,(r=[{key:"renderTab",value:function(t,e){var n,r,i=this,o=this.props,s=o.urlBase,u=o.onTabChange,p=o.tabLink,f=void 0===p||p;Array.isArray(t)?(n=t[0],r=t[1]):"object"===d(t)?(n=t.tabId,r=t.tabName):(n=e,r=t);var m=f?"".concat(s).concat(e?"/".concat(n):""):void 0,h=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,b=f?"a":"span";return a.a.createElement(b,{href:m,className:l()(["link","tab",{on:e===h}]),key:e,onClick:function(t){i.setState({currentIndex:e}),"function"==typeof u&&(t.preventDefault(),u(n,e)),m&&Object(c.a)(m)}},r)}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.title,r=t.subtitle,i=t.tabs,o=t.children,s=m(t,["className","title","subtitle","tabs","children"]);return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach(function(t){return delete s[t]}),a.a.createElement(u.a,f({className:l()([e,{"is-portal":!0,"has-subtitle":!!r,"has-tabs":!!i,"has-only-title":!o}])},s),a.a.createElement("div",{className:"infos"},n&&a.a.createElement("div",{className:"title"},r&&a.a.createElement("span",{className:"subtitle"},r),a.a.createElement(p.a,{tag:"h1",className:"title-h1",children:n})),o),i&&a.a.createElement("div",{className:"tabs"},a.a.createElement("div",{className:"wrapper"},i.map(this.renderTab.bind(this)))),!i&&a.a.createElement("div",{className:"tabs-placeholder"}))}}])&&h(n.prototype,r),i&&h(n,i),e}())||r;e.a=v},656:function(t,e){t.exports={wrapper:"b606",css:'.b606{position:absolute;overflow:hidden;left:0;right:0;padding:0 1.5rem;z-index:1;box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2);transition:inherit}@supports ((-webkit-backdrop-filter:blur(20px)) or (backdrop-filter:blur(20px))){.b606{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}.b606.mod-transition-enter{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.b606.mod-transition-exit{transition-duration:.2s;transition-delay:0s;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform;opacity:0}@media (max-width:850px){.b606{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.b606{padding-left:.6rem;padding-right:.6rem}}.b606 .bg-container{z-index:-2}.b606:after{content:"";position:absolute;bottom:.05rem;height:.05rem;background:rgba(237,240,242,.15);left:0;right:0}'}},657:function(t,e){t.exports={wrapper:"a928",css:'.a928 .infos{margin:0 0 .7rem;color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;min-height:2.3rem;position:relative}@media (max-width:850px){.a928 .infos{display:none}}@media (min-width:851px) and (max-height:760px){.a928 .infos{margin-bottom:.4rem}}.a928 .title{display:block;float:left;color:#fff;font-size:1.3rem;font-weight:400;line-height:2.3rem;height:2.3rem;overflow:hidden;padding:0 1rem 0 0;margin:0 1rem 0 0;border-right:.05rem solid rgba(237,240,242,.15)}.a928 .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.a928 .subtitle{display:block;margin-top:.1rem;margin-bottom:.2rem;font-size:.6rem;line-height:1em}@media (min-width:851px) and (max-height:760px){.a928 .subtitle{margin-top:0;margin-bottom:.2rem}}.a928.has-subtitle .title{line-height:1.4rem;font-size:1.3rem}.a928.has-only-title .title{border-right:0}.a928 .tabs{clear:both;line-height:3rem;height:3rem;font-size:.8rem;overflow:hidden;position:relative;z-index:5;margin-left:-1.5rem;margin-right:-1.5rem}@media (max-width:850px){.a928 .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.a928 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.a928 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.a928 .tabs{line-height:2.4rem;height:2.4rem}}.a928 .tabs>.wrapper{height:4rem;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;overflow:hidden;overflow-x:auto;position:relative;padding-left:1.5rem;padding-right:1.5rem}@media (max-width:850px){.a928 .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.a928 .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.a928 .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.a928 .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.a928 .tabs>.wrapper:after{width:.6rem}}.a928 .tab{display:inline-block;color:rgba(185,205,214,.55);position:relative;text-align:center;border-bottom:.1rem solid transparent;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em}html.is-hover .a928 .tab:hover{color:#fff}.a928 .tab:active,html.is-hover .a928 .tab:hover:active{color:hsla(0,0%,100%,.5)}.a928 .tab.on{color:#fff;z-index:-1;border-bottom-color:#40c4ff;pointer-events:none}.a928 .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.a928 .tab{height:2.35rem}}.a928 .tabs-placeholder{height:.3rem}@media (max-width:850px){.a928 .tabs-placeholder{display:none}}.a928.is-portal{padding-top:1rem}@media (max-width:850px){.a928.is-portal{padding-top:0}}@media (min-width:851px) and (max-height:760px){.a928.is-portal{padding-top:.75rem}}'}},662:function(t,e,n){"use strict";var r,i=n(0),a=n.n(i),o=n(19),l=n.n(o),s=n(47);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(s.a)({styles:n(663)})(r=function(t){function e(){var t,n,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return r=this,n=!(i=(t=m(e)).call.apply(t,[this].concat(o)))||"object"!==c(i)&&"function"!=typeof i?d(r):i,b(d(n),"state",{isLoading:!0,isLoaded:!1,isError:!1}),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,a.a.Component),n=e,(r=[{key:"onLoad",value:function(){this.setState({isLoading:!1,isLoaded:!0})}},{key:"onError",value:function(){this.setState({isLoading:!1,isError:!0})}},{key:"render",value:function(){var t,e=this.props,n=e.className,r=e.classNameImg,i=e.children,o=e.tag,s=e.component,c=e.src,f=e.img,m=e.pic,d=e.picture,h=e.styleImg,y=p(e,["className","classNameImg","children","tag","component","src","img","pic","picture","styleImg"]),g=o||s||"span",v=c||f||m||d||void 0;return a.a.createElement(g,u({className:l()((t={},b(t,n,!0),b(t,"is-loading",this.state.isLoading),b(t,"is-loaded",this.state.isLoaded),b(t,"is-error",this.state.isError),t))},y),a.a.createElement("img",{className:l()(["img",r]),src:v,onLoad:this.onLoad.bind(this),onError:this.onError.bind(this),style:h}),i)}}])&&f(n.prototype,r),i&&f(n,i),e}())||r;e.a=y},663:function(t,e){t.exports={wrapper:"c710",css:'.c710{position:relative}.c710.is-loading>.img{opacity:0;z-index:-1000}.c710.is-loading:after{content:"";position:absolute;z-index:-1;width:2rem;height:2rem;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;left:50%;top:50%;margin-left:-1rem;margin-top:-1rem;border:.1rem solid rgba(237,240,242,.075);border-top-color:rgba(64,196,255,.75);border-radius:50%}'}},678:function(t,e){t.exports={wrapper:"a69a",css:".a69a{border-top:2rem solid transparent}.a69a>.title{margin-top:0;margin-bottom:.5rem;display:block}.a69a>.title[data-title-tag=h2],.a69a>h2.title{font-size:.9rem;line-height:1.1rem}.a69a .title-inline{font-size:medium;line-height:normal;display:inline-block;margin:0}"}},757:function(t,e,n){"use strict";(function(t){e.a=function(e){return Array.isArray(e.relation.cv)&&e.relation.cv.length?t("seiyuu"):Array.isArray(e.relation.illustrator)&&e.relation.illustrator.length?t("artist"):""}}).call(this,n(93).default)},981:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(47),o=n(757),l=n(655),s=Object(a.a)({connect:function(t){return{localeId:t.localeId}},styles:n(982)})(function(t){var e=t.className,n=t.entity,r=t.localeId;return n?i.a.createElement(l.a,{className:e,title:n._name,subtitle:Object(o.a)(n)},"ja"!==r&&i.a.createElement("span",{className:"name-ja"},n.getName("ja_jp"))):null});e.a=s},982:function(t,e){t.exports={wrapper:"ff51",css:".ff51 .name-ja{position:absolute;bottom:0}"}},983:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(47),o=n(662),l=n(630),s=n(641),c=Object(a.a)({styles:n(984)})(function(t){var e=t.className,n=t.entity;return i.a.createElement(l.a,{className:e},i.a.createElement(o.a,{className:"picture",src:Object(s.a)("entity",n.id,"2")}))});e.a=c},984:function(t,e){t.exports={wrapper:"f5f1",css:".f5f1{position:relative;width:13rem;max-width:13rem}.f5f1 .picture{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden;border-radius:.5rem}.f5f1 .picture .img{width:100%;display:block;position:relative}"}},985:function(t,e){t.exports={wrapper:"ee52",css:".ee52 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ee52 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ee52 .entityinfo-pictures{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.ee52 .entityinfo-list .count{padding-left:.5em}.ee52 .entityinfo-list .list{clear:none}.ee52 .entityinfo-links{overflow:hidden;margin-right:-1rem}.ee52 .entityinfo-links .item{display:block;float:left;margin-right:1rem}"}}}]);