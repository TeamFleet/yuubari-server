(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{230:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&o.push({charset:r.charset}),void 0!==r.title&&(o.push({itemprop:"name",content:r.title}),o.push({name:"twitter:title",content:r.title}),o.push({name:"og:title",content:r.title})),void 0!==r.description&&(o.push({name:"description",content:r.description}),o.push({itemprop:"description",content:r.description}),o.push({itemprop:"twitter:description",content:r.description}),o.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(o.push({name:"image",content:r.image}),o.push({itemprop:"image",content:r.image}),o.push({itemprop:"twitter:image:src",content:r.image}),o.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(o.push({name:"twitter:player",content:r.video}),o.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&o.push({name:"og:url",content:r.url}),void 0!==r.siteName&&o.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&o.push({name:"og:locale",content:r.locale}),void 0!==r.type&&o.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&o.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&o.push({name:"twitter:site",content:n(r.twitter.siteCreator)}),void 0!==r.twitter.author&&o.push({name:"twitter:creator",content:n(r.twitter.author)}),void 0!==r.facebook.adminsId&&o.push({name:"fb:admins",content:n(r.facebook.adminsId)}),void 0!==r.facebook.appId&&o.push({name:"fb:app_id",content:n(r.facebook.appId)}),void 0!==r.returnArray&&(e=r.returnArray),e?o:o.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},562:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(29),a=n.n(i),c=n(8);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=Object(c.a)({styles:n(566)})(function(t){var e=t.className,n=t.classNameInner,o=t.component,i=t.tag,c=t.tagname,u=t.element,h=t.level,f=t.children,d=t.title,m=t.type,y=t.inherit,b=p(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),v=o||i||c||u||(void 0===h?void 0:"h".concat(h))||"div",g=e.split(" ")[0];b.children=f;var w=Array.isArray(f)?f[0]:f;switch("string"==typeof d?b["data-text"]=d:"string"==typeof w?b["data-text"]=w:"object"===s(w)&&"object"===s(w.props)&&"string"==typeof w.props.value&&(b["data-text"]=w.props.value),y&&(b["data-title-is-inherit"]=""),m){case"line-append":return r.a.createElement("div",{className:e,"data-title-type":m,"data-title-tag":v},r.a.createElement(v,l({className:a()([g+"-child",n])},b)))}return r.a.createElement(v,l({"data-title-type":m,className:e},b))});e.a=u},563:function(t,e,n){"use strict";(function(t){var o=n(230),r=n.n(o),i=n(8),a=n(567);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.i.getState(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==c(e))return{};var o=e.localeId,l=t("title")+"",s=e.server.origin,p=Object.assign({uri:"","twitter:card":"summary_large_image"},n),u=p.uri,h=void 0===u?"undefined"!=typeof location?location.pathname:void 0:u,f=p.title,d=void 0===f?l:f,m=p.subtitle,y=p.description,b=p.image;if("object"===c(h)&&(h=h.pathname),"/"==h.substr(0,1)&&(h=h.substr(1)),d){Array.isArray(d)&&(d=d.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(d)&&d.length?d[0]:d;d=Array.isArray(d)?d.join(" / "):d,void 0!==m?i.i.dispatch(Object(a.a)({main:v,sub:m})):i.i.dispatch(Object(a.a)(v)),d!==l&&(d=d.replace(/\n/g,"")+" - "+l)}return y&&(y=y.replace(/\n/g,"")),"/"!==s.substr(s.length-1,1)&&(s+="/"),{title:d,metas:r()({title:d,description:y,image:b||s+"launcher.jpg",url:s+h,type:"website",locale:o,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,n(20).default)},564:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var o,r=n(0),i=n.n(r),a=n(14);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f={},d=Object(a.connect)(function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}})(o=function(t){function e(){var t,n,o,r,i,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return o=this,n=!(r=(t=p(e)).call.apply(t,[this].concat(u)))||"object"!==l(r)&&"function"!=typeof r?h(o):r,i=h(h(n)),c=!1,(a="updating")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,i.a.Component),n=e,(o=[{key:"restoreScrollY",value:function(){void 0!==f[this.props.pathname]&&(window.scrollTo(void 0,f[this.props.pathname]),delete f[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===l(this.props.locationBeforeTransitions)&&"object"===l(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(f[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete f[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),i.a.createElement("div",t)}}])&&s(n.prototype,o),r&&s(n,r),e}())||o},566:function(t,e){t.exports={wrapper:"f9f7",css:'.f9f7{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7:last-child{margin-bottom:0}.f9f7[data-title-is-inherit] .f9f7[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7[data-title-type=inline-block]{display:inline-block}.f9f7[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7[data-title-type=line-append] .f9f7-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7[data-title-type=line-append] .f9f7-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7[data-title-type=line-append] .f9f7-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},567:function(t,e,n){"use strict";var o=n(3);n.d(e,"a",function(){return r});var r=function(t){return function(e){e(function(t){return{type:o.O,title:t}}(t))}}},574:function(t,e,n){"use strict";n.d(e,"a",function(){return E});var o,r=n(0),i=n.n(r),a=n(82),c=n.n(a),l=n(14),s=n(60),p=n.n(s),u=n(81),h=n.n(u),f=n(29),d=n.n(f),m=n(21),y=n(157);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function O(t,e,n){return e&&k(t.prototype,e),n&&k(t,n),t}function z(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?j(t):e}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var E=Object(l.connect)(function(t){return{mainKey:t.app.mainKey}})(o=Object(m.a)(n(590))(o=function(t){function e(){var t,n;x(this,e);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return g(j(j(n=z(this,(t=M(e)).call.apply(t,[this].concat(r))))),"state",{waiting:!0}),n}return S(e,i.a.Component),O(e,[{key:"componentDidMount",value:function(){this.setState({waiting:!1})}},{key:"renderContent",value:function(t){var e,n=this.props,o=n.className,r=n.children,a=v(n,["className","children"]);return delete a.mainKey,delete a.dispatch,i.a.createElement("div",b({className:d()((e={},g(e,o,!0),g(e,"main-header",!0),g(e,"wrapper",t),e))},a),r,i.a.createElement(y.a,{className:"bg-container",type:"blured"}))}},{key:"render",value:function(){return this.key||(this.key=this.props.mainKey),this.state.waiting?null:i.a.createElement(p.a,{"data-role":"transition-group",appear:!0,enter:!1},this.props.mainKey&&this.key===this.props.mainKey&&i.a.createElement(h.a,{key:this.props.key,classNames:"transition",timeout:250},i.a.createElement(P,{key:this.key},this.renderContent(!0))))}}]),e}())||o)||o,P=function(t){function e(){return x(this,e),z(this,M(e).apply(this,arguments))}return S(e,i.a.Component),O(e,[{key:"render",value:function(){return c.a.createPortal(this.props.children,document.getElementById("main-mask"))}}]),e}()},590:function(t,e){t.exports={wrapper:"ee10",css:'.ee10{position:absolute;overflow:hidden;left:0;right:0;padding:0 1.5rem;z-index:1;transition:inherit;box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2)}@supports ((-webkit-backdrop-filter:blur(20px)) or (backdrop-filter:blur(20px))){.ee10{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}@media (max-width:850px){.ee10{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.ee10{padding-left:.6rem;padding-right:.6rem}}.ee10 .bg-container{z-index:-2}.ee10:after{content:"";position:absolute;bottom:.05rem;height:.05rem;background:rgba(237,240,242,.15);left:0;right:0}.ee10.transition-appear{opacity:.01}.ee10.transition-appear-active{-webkit-animation:fadein .2s ease-out both;animation:fadein .2s ease-out both;opacity:1}.ee10 .transition-exit{opacity:1}.ee10.transition-exit-active{-webkit-animation:fadeout .2s ease-out;animation:fadeout .2s ease-out;opacity:.01}'}},910:function(t,e){t.exports={wrapper:"a93a",css:".a93a{padding-top:5rem}.a93a .icon-sample-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(6.6rem,1fr));grid-column-gap:1rem;grid-row-gap:.5rem}.a93a .icon-sample{height:2.1rem;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.a93a .icon-sample .icon{-webkit-order:1;order:1;-webkit-flex:0 0 1.6rem;flex:0 0 1.6rem;width:1.6rem;height:1.6rem}.a93a .icon-sample input{-webkit-order:2;order:2;-webkit-flex:1 0 auto;flex:1 0 auto;font-size:.6rem;width:0;margin:0 0 0 .4rem;padding:.2em .35em}.a93a .icon-sample input:focus~.icon{fill:#40c4ff;-webkit-filter:drop-shadow(0 0 .25rem #000);filter:drop-shadow(0 0 .25rem #000)}"}},935:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return k});var o,r=n(0),i=n.n(r),a=n(14),c=n(21),l=n(8),s=n(563),p=n(564),u=n(574),h=n(59),f=n(562);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=Object(a.connect)()(o=Object(l.c)(function(t){return Object(s.a)(t,{title:"Dev (Icons)"})})(o=Object(c.a)(n(910))(o=function(t){function e(){return m(this,e),v(this,g(e).apply(this,arguments))}return w(e,i.a.Component),b(e,[{key:"getIcons",value:function(){var t=(new DOMParser).parseFromString('<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-image-compare" viewBox="0 0 16 16"><path d="M13 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path><path d="M0 3v10c0 0.55 0.45 1 1 1h6v-1h-5.998c-0.001-0.001-0.001-0.001-0.002-0.002v-9.996c0.001-0.001 0.001-0.001 0.002-0.002h5.998v-1h-6c-0.55 0-1 0.45-1 1z"></path><path d="M15 2h-6v-2h-1v16h1v-2h6c0.55 0 1-0.45 1-1v-10c0-0.55-0.45-1-1-1zM15 12.998c-0.001 0.001-0.001 0.001-0.002 0.002h-5.998v-1h5v-5l-3.5 3h-1l-0.5-0.625v-6.375h5.998c0.001 0.001 0.001 0.001 0.002 0.002v9.996z"></path><path d="M2 11v1h5v-5.125l-1.5-1.875z"></path></symbol><symbol id="icon-download5" viewBox="0 0 16 16"><path d="M2 12h12v3h-12v-3z"></path><path d="M10 6v-5h-4v5h-3.5l5.5 5.5 5.5-5.5z"></path></symbol><symbol id="icon-stack-picture" viewBox="0 0 16 16"><path d="M5 1v1.155l-2.619 0.368 0.17 1.211-2.551 0.732 3.308 11.535 10.189-2.921 0.558-0.079h1.945v-12h-11zM3.929 14.879l-2.808-9.793 1.558-0.447 1.373 9.766 2.997-0.421-3.119 0.894zM4.822 13.382l-1.418-10.088 1.595-0.224v9.93h2.543l-2.721 0.382zM15 12h-9v-10h9v10zM10 11h-3l1-4h1l2.333 2.333 0.667-1.333h1l1 3zM11 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1z"></path></symbol><symbol id="icon-loop" viewBox="0 0 16 16"><path d="M14 8v1c0 0.551-0.449 1-1 1h-7.002l0.002-2-4 3 4 3-0.002-2h7.002c1.655 0 3-1.348 3-3v-1h-2zM2 7c0-0.553 0.449-1 1-1h7v2l3.996-3-3.996-3v2h-7c-1.655 0-3 1.344-3 3v1h2v-1z"></path></symbol><symbol id="icon-hanger" viewBox="0 0 16 16"><path d="M14.77 13.579l-6.77-4.352v-0.495c0.61-0.353 1-1.010 1-1.732 0-1.103-0.897-2-2-2-0.846 0-1.604 0.536-1.886 1.333-0.092 0.26 0.044 0.546 0.305 0.638s0.546-0.044 0.638-0.305c0.141-0.399 0.52-0.667 0.943-0.667 0.551 0 1 0.449 1 1 0 0.423-0.268 0.802-0.667 0.943-0.2 0.071-0.333 0.259-0.333 0.471l-0 0.812-6.77 4.352c-0.143 0.092-0.23 0.25-0.23 0.421v0.5c0 0.827 0.673 1.5 1.5 1.5h12c0.827 0 1.5-0.673 1.5-1.5v-0.5c0-0.17-0.086-0.329-0.23-0.421zM14 14.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-0.227l6.5-4.179 6.5 4.179v0.227z"></path></symbol><symbol id="icon-search" viewBox="0 0 16 16"><path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path></symbol><symbol id="icon-cog" viewBox="0 0 16 16"><path d="M14.59 9.535c-0.839-1.454-0.335-3.317 1.127-4.164l-1.572-2.723c-0.449 0.263-0.972 0.414-1.529 0.414-1.68 0-3.042-1.371-3.042-3.062h-3.145c0.004 0.522-0.126 1.051-0.406 1.535-0.839 1.454-2.706 1.948-4.17 1.106l-1.572 2.723c0.453 0.257 0.845 0.634 1.123 1.117 0.838 1.452 0.336 3.311-1.12 4.16l1.572 2.723c0.448-0.261 0.967-0.41 1.522-0.41 1.675 0 3.033 1.362 3.042 3.046h3.145c-0.001-0.517 0.129-1.040 0.406-1.519 0.838-1.452 2.7-1.947 4.163-1.11l1.572-2.723c-0.45-0.257-0.839-0.633-1.116-1.113zM8 11.24c-1.789 0-3.24-1.45-3.24-3.24s1.45-3.24 3.24-3.24c1.789 0 3.24 1.45 3.24 3.24s-1.45 3.24-3.24 3.24z"></path></symbol><symbol id="icon-puzzle" viewBox="0 0 16 16"><path d="M14.974 4.004h-2.632c-0.679-0.001-1.355-0.047-0.695-1.21 0.661-1.166 1.127-2.798-1.525-2.798s-2.185 1.632-1.525 2.798c0.659 1.163-0.017 1.209-0.695 1.21h-2.873c-0.564 0-1.026 0.462-1.026 1.026v3.193c0 0.68 0.184 1.36-0.981 0.699s-3.021-1.127-3.021 1.525c0 2.652 1.855 2.185 3.021 1.525s0.981 0.019 0.981 0.699v2.306c0 0.564 0.462 1.026 1.026 1.026h2.869c0.68 0 1.36-0.272 0.699-1.438s-1.127-2.797 1.525-2.797 2.186 1.632 1.525 2.797c-0.66 1.166 0.019 1.438 0.699 1.438h2.628c0.564 0 1.026-0.462 1.026-1.026v-9.948c0-0.564-0.462-1.026-1.026-1.026z"></path></symbol><symbol id="icon-puzzle2" viewBox="0 0 16 16"><path d="M14.543 16h-2.452c-0.772 0-1.115-0.309-1.267-0.569-0.23-0.394-0.17-0.906 0.178-1.524 0.379-0.672 0.506-1.212 0.348-1.483-0.148-0.253-0.622-0.393-1.335-0.393s-1.188 0.139-1.335 0.393c-0.158 0.271-0.031 0.811 0.348 1.483 0.348 0.617 0.408 1.13 0.178 1.524-0.152 0.26-0.494 0.569-1.267 0.569h-2.477c-0.804 0-1.457-0.656-1.457-1.462v-2.161c0-0.087 0.003-0.171 0.005-0.251 0.001-0.020 0.001-0.041 0.002-0.063-0.049 0.024-0.108 0.055-0.176 0.094-0.438 0.249-1.369 0.546-2.029 0.546-0.544 0-0.997-0.206-1.31-0.595-0.335-0.415-0.497-1.009-0.497-1.815s0.163-1.4 0.497-1.815c0.313-0.389 0.766-0.595 1.31-0.595 0.66 0 1.591 0.297 2.029 0.546 0.068 0.039 0.126 0.069 0.176 0.094-0.001-0.022-0.001-0.044-0.002-0.064-0.003-0.080-0.005-0.164-0.005-0.251l-0.013-2.74c0-0.808 0.654-1.464 1.457-1.464h2.481c0.073-0 0.261-0 0.383-0.018-0.021-0.071-0.067-0.19-0.169-0.37-0.583-1.033-0.698-2.117-0.341-2.729 0.344-0.59 1.084-0.889 2.199-0.889s1.855 0.299 2.199 0.889c0.357 0.611 0.242 1.695-0.341 2.729-0.102 0.18-0.148 0.299-0.169 0.37 0.122 0.018 0.31 0.018 0.383 0.018h2.455c0.804 0 1.457 0.656 1.457 1.461l0.012 9.071c0 0.807-0.654 1.462-1.457 1.462zM11.688 14.926c0.029 0.023 0.147 0.074 0.402 0.074h2.452c0.252 0 0.457-0.207 0.457-0.462l-0.012-9.071c0-0.255-0.205-0.462-0.457-0.462h-2.456c-0.401-0.001-1.005-0.002-1.284-0.481-0.268-0.46-0.014-1.019 0.2-1.399 0.379-0.672 0.506-1.462 0.348-1.733-0.148-0.253-0.622-0.393-1.336-0.393s-1.188 0.139-1.335 0.393c-0.158 0.271-0.031 1.061 0.348 1.733 0.214 0.38 0.468 0.938 0.2 1.399-0.279 0.479-0.884 0.48-1.284 0.481h-2.482c-0.252 0-0.457 0.207-0.457 0.461l0.013 2.74c0 0.073 0.003 0.148 0.005 0.22 0.012 0.35 0.024 0.712-0.229 0.974-0.095 0.099-0.265 0.216-0.531 0.216-0 0-0 0-0 0-0.241 0-0.521-0.098-0.907-0.318-0.464-0.264-1.195-0.415-1.534-0.415-0.221 0-0.807 0-0.807 1.41s0.587 1.41 0.807 1.41c0.34 0 1.071-0.151 1.534-0.415 0.386-0.22 0.666-0.318 0.907-0.318 0.266 0 0.436 0.118 0.531 0.216 0.253 0.261 0.241 0.623 0.229 0.974-0.002 0.072-0.005 0.147-0.005 0.218v2.161c0 0.254 0.205 0.462 0.457 0.462h2.477c0.255 0 0.373-0.051 0.402-0.074 0.004-0.028 0.014-0.176-0.185-0.527-0.583-1.033-0.698-1.867-0.341-2.479 0.344-0.59 1.084-0.889 2.199-0.889s1.855 0.299 2.199 0.889c0.357 0.611 0.242 1.445-0.341 2.479-0.198 0.351-0.189 0.499-0.185 0.527z"></path></symbol><symbol id="icon-menu" viewBox="0 0 16 16"><path d="M1 3h14v2h-14v-2z"></path><path d="M1 7h14v2h-14v-2z"></path><path d="M1 11h14v2h-14v-2z"></path></symbol><symbol id="icon-warning2" viewBox="0 0 16 16"><path d="M15.781 14.309v0l-6.829-13.611c-0.262-0.465-0.606-0.698-0.951-0.698s-0.69 0.233-0.951 0.698l-6.829 13.611c-0.523 0.93-0.078 1.691 0.989 1.691h13.583c1.067 0 1.512-0.761 0.989-1.691zM8 14c-0.552 0-1-0.448-1-1s0.448-1 1-1c0.552 0 1 0.448 1 1s-0.448 1-1 1zM9 10c0 0.552-0.448 1-1 1s-1-0.448-1-1v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v3z"></path></symbol><symbol id="icon-question6" viewBox="0 0 16 16"><path d="M8 13c-0.552 0-1-0.448-1-1v-1.027c0-1.41 1.124-2.477 2.212-3.509 0.879-0.834 1.788-1.697 1.788-2.464 0-1.493-1.082-3-3.5-3-1.787 0-3.283 1.337-3.479 3.11-0.061 0.549-0.555 0.945-1.104 0.884s-0.945-0.555-0.884-1.104c0.148-1.338 0.782-2.572 1.785-3.477 1.011-0.911 2.319-1.413 3.681-1.413 1.475 0 2.834 0.463 3.828 1.305 1.078 0.913 1.672 2.225 1.672 3.695 0 1.626-1.281 2.842-2.411 3.915-0.745 0.707-1.589 1.508-1.589 2.058l0 1.027c0 0.552-0.448 1-1 1z"></path><path d="M9 15c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path></symbol><symbol id="icon-cross" viewBox="0 0 16 16"><path d="M13.957 3.457l-1.414-1.414-4.543 4.543-4.543-4.543-1.414 1.414 4.543 4.543-4.543 4.543 1.414 1.414 4.543-4.543 4.543 4.543 1.414-1.414-4.543-4.543z"></path></symbol><symbol id="icon-arrow-up3" viewBox="0 0 16 16"><path d="M0 10.5l1.5 1.5 6.5-6.5 6.5 6.5 1.5-1.5-8-8-8 8z"></path></symbol><symbol id="icon-arrow-right3" viewBox="0 0 16 16"><path d="M5.5 0l-1.5 1.5 6.5 6.5-6.5 6.5 1.5 1.5 8-8-8-8z"></path></symbol><symbol id="icon-arrow-down3" viewBox="0 0 16 16"><path d="M16 5.5l-1.5-1.5-6.5 6.5-6.5-6.5-1.5 1.5 8 8 8-8z"></path></symbol><symbol id="icon-arrow-left3" viewBox="0 0 16 16"><path d="M10.5 16l1.5-1.5-6.5-6.5 6.5-6.5-1.5-1.5-8 8 8 8z"></path></symbol><symbol id="icon-sort-amount-desc" viewBox="0 0 16 16"><path d="M5 12v-12h-2v12h-2.5l3.5 3.5 3.5-3.5h-2.5z"></path><path d="M7 0h9v2h-9v-2z"></path><path d="M7 3h7v2h-7v-2z"></path><path d="M7 6h5v2h-5v-2z"></path><path d="M7 9h3v2h-3v-2z"></path></symbol><symbol id="icon-checkbox-checked" viewBox="0 0 16 16"><path d="M14 0h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM7 12.414l-3.707-3.707 1.414-1.414 2.293 2.293 4.793-4.793 1.414 1.414-6.207 6.207z"></path></symbol><symbol id="icon-paragraph-left" viewBox="0 0 16 16"><path d="M0 1h16v2h-16zM0 5h10v2h-10zM0 13h10v2h-10zM0 9h16v2h-16z"></path></symbol><symbol id="icon-share3" viewBox="0 0 16 16"><path d="M13.5 11c-0.706 0-1.342 0.293-1.797 0.763l-6.734-3.367c0.021-0.129 0.032-0.261 0.032-0.396s-0.011-0.267-0.032-0.396l6.734-3.367c0.455 0.47 1.091 0.763 1.797 0.763 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5c0 0.135 0.011 0.267 0.031 0.396l-6.734 3.367c-0.455-0.47-1.091-0.763-1.797-0.763-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c0.706 0 1.343-0.293 1.797-0.763l6.734 3.367c-0.021 0.129-0.031 0.261-0.031 0.396 0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path></symbol></defs></svg>',"image/svg+xml"),e=[],n=!0,o=!1,r=void 0;try{for(var i,a=t.querySelectorAll("symbol[id]")[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;e.push(c.getAttribute("id").replace(/^icon-/,""))}}catch(t){o=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(o)throw r}}return e}},{key:"render",value:function(){return this.getIcons(),i.a.createElement(p.a,{className:this.props.className},i.a.createElement(u.a,null,i.a.createElement("div",{className:"header",style:{height:"100px",paddingTop:"20px"}},i.a.createElement(f.a,{component:"h1"},"Icons"))),i.a.createElement("div",{className:"icon-sample-group"},this.getIcons().map(function(t,e){return i.a.createElement(O,{icon:t,key:e})})))}}]),e}())||o)||o)||o,O=function(t){function e(){return m(this,e),v(this,g(e).apply(this,arguments))}return w(e,i.a.Component),b(e,[{key:"render",value:function(){return i.a.createElement("label",{className:"icon-sample"},i.a.createElement("input",{type:"text",value:this.props.icon,readOnly:!0,onFocus:function(t){t.target.select()}}),i.a.createElement(h.a,{icon:this.props.icon,className:"icon"}))}}]),e}()}}]);