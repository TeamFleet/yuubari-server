(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{228:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],o=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===o.title&&document.title&&(o.title=document.title),void 0===o.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(o.url=location.href)),void 0!==o.charset&&n.push({charset:o.charset}),void 0!==o.title&&(n.push({itemprop:"name",content:o.title}),n.push({name:"twitter:title",content:o.title}),n.push({name:"og:title",content:o.title})),void 0!==o.description&&(n.push({name:"description",content:o.description}),n.push({itemprop:"description",content:o.description}),n.push({itemprop:"twitter:description",content:o.description}),n.push({itemprop:"og:description",content:o.description})),void 0!==o.image&&(n.push({name:"image",content:o.image}),n.push({itemprop:"image",content:o.image}),n.push({itemprop:"twitter:image:src",content:o.image}),n.push({itemprop:"og:image",content:o.image})),void 0!==o.video&&(n.push({name:"twitter:player",content:o.video}),n.push({itemprop:"og:video",content:o.video})),void 0!==o.url&&n.push({name:"og:url",content:o.url}),void 0!==o.siteName&&n.push({name:"og:site_name",content:o.siteName}),void 0!==o.locale&&n.push({name:"og:locale",content:o.locale}),void 0!==o.type&&n.push({name:"og:type",content:o.type}),void 0!==o.twitter.card&&n.push({name:"twitter:card",content:o.twitter.card}),void 0!==o.twitter.siteCreator&&n.push({name:"twitter:site",content:r(o.twitter.siteCreator)}),void 0!==o.twitter.author&&n.push({name:"twitter:creator",content:r(o.twitter.author)}),void 0!==o.facebook.adminsId&&n.push({name:"fb:admins",content:r(o.facebook.adminsId)}),void 0!==o.facebook.appId&&n.push({name:"fb:app_id",content:r(o.facebook.appId)}),void 0!==o.returnArray&&(e=o.returnArray),e?n:n.map(function(t){var e="<meta";for(var r in t)e+=" ".concat(r,'="').concat(t[r],'"');return e+="/>"}).join("")};var r=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},559:function(t,e,r){"use strict";var n=r(0),o=r.n(n),i=r(19),a=r.n(i),c=r(5);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=Object(c.a)({styles:r(563)})(function(t){var e=t.className,r=t.classNameInner,n=t.component,i=t.tag,c=t.tagname,u=t.element,h=t.level,f=t.children,d=t.title,m=t.type,y=t.inherit,b=p(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),v=n||i||c||u||(void 0===h?void 0:"h".concat(h))||"div",g=e.split(" ")[0];b.children=f;var w=Array.isArray(f)?f[0]:f;switch("string"==typeof d?b["data-text"]=d:"string"==typeof w?b["data-text"]=w:"object"===s(w)&&"object"===s(w.props)&&"string"==typeof w.props.value&&(b["data-text"]=w.props.value),y&&(b["data-title-is-inherit"]=""),m){case"line-append":return o.a.createElement("div",{className:e,"data-title-type":m,"data-title-tag":v},o.a.createElement(v,l({className:a()([g+"-child",r])},b)))}return o.a.createElement(v,l({"data-title-type":m,className:e},b))});e.a=u},560:function(t,e,r){"use strict";(function(t){var n=r(228),o=r.n(n),i=r(5),a=r(564);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.i.getState(),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==c(e))return{};var n=e.localeId,l=t("title")+"",s=e.server.origin,p=Object.assign({uri:"","twitter:card":"summary_large_image"},r),u=p.uri,h=void 0===u?"undefined"!=typeof location?location.pathname:void 0:u,f=p.title,d=void 0===f?l:f,m=p.subtitle,y=p.description,b=p.image;if("object"===c(h)&&(h=h.pathname),"/"==h.substr(0,1)&&(h=h.substr(1)),d){Array.isArray(d)&&(d=d.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(d)&&d.length?d[0]:d;d=Array.isArray(d)?d.join(" / "):d,void 0!==m?i.i.dispatch(Object(a.a)({main:v,sub:m})):i.i.dispatch(Object(a.a)(v)),d!==l&&(d=d.replace(/\n/g,"")+" - "+l)}return y&&(y=y.replace(/\n/g,"")),"/"!==s.substr(s.length-1,1)&&(s+="/"),{title:d,metas:o()({title:d,description:y,image:b||s+"launcher.jpg",url:s+h,type:"website",locale:n,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,r(21).default)},561:function(t,e,r){"use strict";r.d(e,"a",function(){return d});var n,o=r(0),i=r.n(o),a=r(15);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f={},d=Object(a.connect)(function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}})(n=function(t){function e(){var t,r,n,o,i,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return n=this,r=!(o=(t=p(e)).call.apply(t,[this].concat(u)))||"object"!==l(o)&&"function"!=typeof o?h(n):o,i=h(h(r)),c=!1,(a="updating")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,r}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,i.a.Component),r=e,(n=[{key:"restoreScrollY",value:function(){void 0!==f[this.props.pathname]&&(window.scrollTo(void 0,f[this.props.pathname]),delete f[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===l(this.props.locationBeforeTransitions)&&"object"===l(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(f[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete f[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),i.a.createElement("div",t)}}])&&s(r.prototype,n),o&&s(r,o),e}())||n},563:function(t,e){t.exports={wrapper:"f9f7",css:'.f9f7{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7:last-child{margin-bottom:0}.f9f7[data-title-is-inherit] .f9f7[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7[data-title-type=inline-block]{display:inline-block}.f9f7[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7[data-title-type=line-append] .f9f7-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7[data-title-type=line-append] .f9f7-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7[data-title-type=line-append] .f9f7-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},564:function(t,e,r){"use strict";var n=r(3);r.d(e,"a",function(){return o});var o=function(t){return function(e){e(function(t){return{type:n.O,title:t}}(t))}}},571:function(t,e,r){"use strict";r.d(e,"a",function(){return E});var n,o=r(0),i=r.n(o),a=r(81),c=r.n(a),l=r(15),s=r(60),p=r.n(s),u=r(80),h=r.n(u),f=r(19),d=r.n(f),m=r(29),y=r(156);function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function v(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t,e,r){return e&&k(t.prototype,e),r&&k(t,r),t}function z(t,e){return!e||"object"!==w(e)&&"function"!=typeof e?M(t):e}function M(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var E=Object(l.connect)(function(t){return{mainKey:t.app.mainKey}})(n=Object(m.a)(r(587))(n=function(t){function e(){var t,r;x(this,e);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return g(M(M(r=z(this,(t=j(e)).call.apply(t,[this].concat(o))))),"state",{waiting:!0}),r}return S(e,i.a.Component),O(e,[{key:"componentDidMount",value:function(){this.setState({waiting:!1})}},{key:"renderContent",value:function(t){var e,r=this.props,n=r.className,o=r.children,a=v(r,["className","children"]);return delete a.mainKey,delete a.dispatch,i.a.createElement("div",b({className:d()((e={},g(e,n,!0),g(e,"main-header",!0),g(e,"wrapper",t),e))},a),o,i.a.createElement(y.a,{className:"bg-container",type:"blured"}))}},{key:"render",value:function(){return this.key||(this.key=this.props.mainKey),this.state.waiting?null:i.a.createElement(p.a,{"data-role":"transition-group",appear:!0,enter:!1},this.props.mainKey&&this.key===this.props.mainKey&&i.a.createElement(h.a,{key:this.props.key,classNames:"transition",timeout:250},i.a.createElement(P,{key:this.key},this.renderContent(!0))))}}]),e}())||n)||n,P=function(t){function e(){return x(this,e),z(this,j(e).apply(this,arguments))}return S(e,i.a.Component),O(e,[{key:"render",value:function(){return c.a.createPortal(this.props.children,document.getElementById("main-mask"))}}]),e}()},587:function(t,e){t.exports={wrapper:"ee10",css:'.ee10{position:absolute;overflow:hidden;left:0;right:0;padding:0 1.5rem;z-index:1;transition:inherit;box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2)}@supports ((-webkit-backdrop-filter:blur(20px)) or (backdrop-filter:blur(20px))){.ee10{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}@media (max-width:850px){.ee10{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.ee10{padding-left:.6rem;padding-right:.6rem}}.ee10 .bg-container{z-index:-2}.ee10:after{content:"";position:absolute;bottom:.05rem;height:.05rem;background:rgba(237,240,242,.15);left:0;right:0}.ee10.transition-appear{opacity:.01}.ee10.transition-appear-active{-webkit-animation:fadein .2s ease-out both;animation:fadein .2s ease-out both;opacity:1}.ee10 .transition-exit{opacity:1}.ee10.transition-exit-active{-webkit-animation:fadeout .2s ease-out;animation:fadeout .2s ease-out;opacity:.01}'}},906:function(t,e){t.exports={wrapper:"a93a",css:".a93a{padding-top:5rem}.a93a .icon-sample-group{display:grid;grid-template-columns:repeat(auto-fit,minmax(6.6rem,1fr));grid-column-gap:1rem;grid-row-gap:.5rem}.a93a .icon-sample{height:2.1rem;display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.a93a .icon-sample .icon{-webkit-order:1;order:1;-webkit-flex:0 0 1.6rem;flex:0 0 1.6rem;width:1.6rem;height:1.6rem}.a93a .icon-sample input{-webkit-order:2;order:2;-webkit-flex:1 0 auto;flex:1 0 auto;font-size:.6rem;width:0;margin:0 0 0 .4rem;padding:.2em .35em}.a93a .icon-sample input:focus~.icon{fill:#40c4ff;-webkit-filter:drop-shadow(0 0 .25rem #000);filter:drop-shadow(0 0 .25rem #000)}"}},931:function(t,e,r){"use strict";r.r(e),r.d(e,"default",function(){return k});var n,o=r(0),i=r.n(o),a=r(15),c=r(29),l=r(5),s=r(560),p=r(561),u=r(571),h=r(44),f=r(559);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e&&y(t.prototype,e),r&&y(t,r),t}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var k=Object(a.connect)()(n=Object(l.c)(function(t){return Object(s.a)(t,{title:"Dev (Icons)"})})(n=Object(c.a)(r(906))(n=function(t){function e(){return m(this,e),v(this,g(e).apply(this,arguments))}return w(e,i.a.Component),b(e,[{key:"getIcons",value:function(){var t=(new DOMParser).parseFromString('<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r<defs>\r<symbol id="icon-image-compare" viewBox="0 0 64 64">\r\r<path d="M52 22c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z"></path>\r<path d="M0 12v40c0 2.2 1.8 4 4 4h24v-4h-23.993c-0.003-0.002-0.005-0.005-0.007-0.007v-39.986c0.002-0.002 0.005-0.005 0.007-0.007h23.993v-4h-24c-2.2 0-4 1.8-4 4z"></path>\r<path d="M60 8h-24v-8h-4v64h4v-8h24c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4zM60 51.993c-0.002 0.002-0.005 0.005-0.007 0.007h-23.993v-4h20v-20l-14 12h-4l-2-2.5v-25.5h23.993c0.003 0.002 0.005 0.005 0.007 0.007v39.986z"></path>\r<path d="M8 44v4h20v-20.5l-6-7.5z"></path>\r</symbol>\r<symbol id="icon-book3" viewBox="0 0 64 64">\r\r<path d="M56 8v52h-42c-3.314 0-6-2.686-6-6s2.686-6 6-6h38v-48h-40c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48v-56h-4z"></path>\r<path d="M14.004 52v0c-0.001 0-0.002 0-0.004 0-1.104 0-2 0.895-2 2s0.896 2 2 2c0.001 0 0.002-0 0.004-0v0h37.993v-4h-37.993z"></path>\r</symbol>\r<symbol id="icon-lifebuoy" viewBox="0 0 64 64">\r\r<path d="M32 0c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zM20 32c0-6.628 5.372-12 12-12s12 5.372 12 12-5.373 12-12 12-12-5.373-12-12zM57.874 42.717v0l-11.089-4.593c0.782-1.886 1.215-3.955 1.215-6.124s-0.433-4.238-1.215-6.124l11.089-4.593c1.369 3.301 2.126 6.921 2.126 10.717s-0.757 7.416-2.126 10.717v0zM42.717 6.126v0 0l-4.593 11.089c-1.886-0.782-3.955-1.215-6.124-1.215s-4.238 0.433-6.124 1.215l-4.593-11.089c3.301-1.369 6.921-2.126 10.717-2.126s7.416 0.757 10.717 2.126zM6.126 21.283l11.089 4.593c-0.782 1.887-1.215 3.955-1.215 6.124s0.433 4.238 1.215 6.124l-11.089 4.593c-1.369-3.301-2.126-6.921-2.126-10.717s0.757-7.416 2.126-10.717zM21.283 57.874l4.593-11.089c1.887 0.782 3.955 1.215 6.124 1.215s4.238-0.433 6.124-1.215l4.593 11.089c-3.301 1.369-6.921 2.126-10.717 2.126s-7.416-0.757-10.717-2.126z"></path>\r</symbol>\r<symbol id="icon-at-sign" viewBox="0 0 64 64">\r\r<path d="M54.627 9.373c-6.044-6.044-14.080-9.373-22.628-9.373s-16.583 3.329-22.628 9.373c-6.044 6.044-9.373 14.080-9.373 22.627s3.329 16.583 9.373 22.627c6.044 6.044 14.080 9.373 22.628 9.373 4.798 0 9.412-1.037 13.717-3.082 1.995-0.948 2.844-3.334 1.897-5.33s-3.334-2.844-5.33-1.897c-3.223 1.531-6.683 2.308-10.284 2.308-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24v4c0 2.206-1.794 4-4 4s-4-1.794-4-4v-16c0-2.209-1.791-4-4-4-1.624 0-3.021 0.968-3.648 2.358-2.433-1.495-5.294-2.358-8.352-2.358-8.822 0-16 7.178-16 16s7.178 16 16 16c4.182 0 7.993-1.613 10.847-4.249 2.203 2.598 5.489 4.249 9.153 4.249 6.617 0 12-5.383 12-12v-4c0-8.547-3.329-16.583-9.373-22.628zM32 40c-4.411 0-8-3.589-8-8s3.589-8 8-8c4.411 0 8 3.589 8 8s-3.589 8-8 8z"></path>\r</symbol>\r<symbol id="icon-download5" viewBox="0 0 64 64">\r\r<path d="M8 48h48v12h-48v-12z"></path>\r<path d="M40 24v-20h-16v20h-14l22 22 22-22z"></path>\r</symbol>\r<symbol id="icon-anchor" viewBox="0 0 64 64">\r\r<path d="M56 36v8.262c-5.033 5.14-12.065 10.103-20 11.407v-23.669h12v-4l-12-4.684c4.66-1.648 8-6.091 8-11.316 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 5.225 3.339 9.669 8 11.316v0.001l-12 4.683v4h12v23.669c-7.936-1.304-14.968-6.266-20-11.407v-8.262h-8v4c0 8 16 24 32 24s32-16 32-24v-4h-8zM36 12c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c2.209 0 4 1.791 4 4z"></path>\r</symbol>\r<symbol id="icon-stack-check" viewBox="0 0 64 64">\r\r<path d="M20 4v4.619l-10.476 1.472 0.681 4.842-10.204 2.926 13.231 46.141 40.754-11.686 2.234-0.314h7.781v-48h-44zM15.716 59.516l-11.232-39.171 6.23-1.787 5.49 39.065 11.987-1.685-12.476 3.578zM19.29 53.529l-5.671-40.353 6.382-0.897v39.721h10.172l-10.882 1.529zM24 48v-40h36v10l-2.828-2.828-17.172 15.171-9.172-7.172-3.657 3.657 12.828 14.828 20-21.921v28.264h-36z"></path>\r</symbol>\r<symbol id="icon-loop" viewBox="0 0 64 64">\r\r<path d="M56 32v4c0 2.204-1.796 4-4 4h-28.008l0.008-8-16 12 16 12-0.008-8h28.008c6.618 0 12-5.39 12-12v-4h-8zM8 28c0-2.21 1.796-4 4-4h28v8l15.984-12-15.984-12v8h-28c-6.618 0-12 5.376-12 12v4h8v-4z"></path>\r</symbol>\r<symbol id="icon-hanger" viewBox="0 0 64 64">\r\r<path d="M59.082 54.318l-27.082-17.41v-1.978c2.44-1.41 4-4.042 4-6.93 0-4.411-3.589-8-8-8-3.385 0-6.416 2.143-7.544 5.333-0.368 1.041 0.177 2.184 1.219 2.552s2.184-0.178 2.552-1.219c0.564-1.595 2.080-2.666 3.773-2.666 2.206 0 4 1.794 4 4 0 1.693-1.072 3.209-2.666 3.773-0.799 0.282-1.333 1.038-1.333 1.886l-0 3.249-27.081 17.41c-0.573 0.368-0.918 1.002-0.918 1.682v2c0 3.309 2.692 6 6 6h48c3.309 0 6-2.691 6-6v-2c0-0.681-0.346-1.314-0.918-1.682zM56 58c0 1.103-0.897 2-2 2h-48c-1.103 0-2-0.897-2-2v-0.908l26-16.714 26 16.714v0.908z"></path>\r</symbol>\r<symbol id="icon-search" viewBox="0 0 64 64">\r\r<path d="M62.016 54.462l-15.16-12.893c-1.567-1.41-3.243-2.058-4.597-1.995 3.578-4.192 5.74-9.63 5.74-15.573 0-13.255-10.745-24-24-24s-24 10.745-24 24 10.745 24 24 24c5.944 0 11.382-2.162 15.574-5.74-0.063 1.354 0.585 3.030 1.995 4.597l12.893 15.16c2.208 2.453 5.814 2.66 8.014 0.46s1.993-5.806-0.46-8.014zM24 40c-8.836 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"></path>\r</symbol>\r<symbol id="icon-cog" viewBox="0 0 64 64">\r\r<path d="M58.362 38.141c-3.358-5.816-1.339-13.269 4.51-16.655l-6.289-10.893c-1.797 1.053-3.886 1.657-6.115 1.657-6.721 0-12.169-5.484-12.169-12.249h-12.579c0.017 2.088-0.505 4.205-1.622 6.141-3.358 5.816-10.822 7.794-16.679 4.422l-6.289 10.893c1.811 1.029 3.378 2.537 4.493 4.467 3.352 5.807 1.345 13.245-4.482 16.639l6.289 10.893c1.791-1.044 3.87-1.641 6.088-1.641 6.7 0 12.134 5.45 12.169 12.185h12.578c-0.005-2.067 0.517-4.161 1.623-6.076 3.352-5.807 10.798-7.787 16.651-4.438l6.289-10.893c-1.799-1.029-3.356-2.531-4.465-4.452zM32 44.958c-7.157 0-12.959-5.801-12.959-12.958s5.802-12.958 12.959-12.958c7.157 0 12.958 5.802 12.958 12.958s-5.801 12.958-12.958 12.958z"></path>\r</symbol>\r<symbol id="icon-puzzle" viewBox="0 0 64 64">\r\r<path d="M59.896 16.016h-10.528c-2.714-0.004-5.419-0.188-2.782-4.841 2.642-4.662 4.507-11.19-6.1-11.19s-8.742 6.528-6.1 11.19c2.637 4.653-0.067 4.837-2.782 4.841h-11.492c-2.258 0-4.104 1.847-4.104 4.104v12.774c0 2.719 0.738 5.439-3.924 2.797s-12.084-4.507-12.084 6.1c0 10.607 7.421 8.742 12.084 6.1s3.924 0.078 3.924 2.797v9.223c0 2.258 1.847 4.104 4.104 4.104h11.476c2.72 0 5.44-1.088 2.798-5.751s-4.508-11.19 6.1-11.19 8.742 6.528 6.1 11.19c-2.642 4.662 0.078 5.751 2.798 5.751h10.512c2.258 0 4.105-1.847 4.105-4.104v-39.791c0-2.257-1.847-4.104-4.105-4.104z"></path>\r</symbol>\r<symbol id="icon-puzzle2" viewBox="0 0 64 64">\r\r<path d="M58.17 64h-9.809c-3.088 0-4.46-1.238-5.066-2.276-0.92-1.575-0.68-3.626 0.714-6.095 1.517-2.687 2.024-4.849 1.392-5.931-0.592-1.013-2.489-1.571-5.342-1.571s-4.75 0.558-5.342 1.571c-0.632 1.082-0.124 3.244 1.392 5.931 1.393 2.469 1.634 4.52 0.714 6.095-0.606 1.038-1.977 2.276-5.066 2.276h-9.909c-3.215 0-5.83-2.622-5.83-5.846v-8.642c0-0.349 0.011-0.682 0.022-1.005 0.003-0.079 0.006-0.164 0.008-0.254-0.198 0.097-0.43 0.22-0.703 0.375-1.751 0.997-5.474 2.185-8.116 2.185-2.175 0-3.986-0.822-5.24-2.379-1.339-1.662-1.99-4.037-1.99-7.26s0.651-5.599 1.99-7.261c1.254-1.556 3.066-2.378 5.24-2.378 2.641 0 6.364 1.188 8.115 2.185 0.272 0.155 0.505 0.278 0.702 0.375-0.003-0.089-0.006-0.175-0.008-0.254-0.011-0.322-0.022-0.655-0.022-1.004l-0.050-10.96c0-3.233 2.615-5.855 5.83-5.855h9.924c0.293-0 1.043-0.002 1.531-0.073-0.084-0.286-0.27-0.758-0.677-1.48-2.332-4.133-2.791-8.468-1.363-10.914 1.377-2.358 4.337-3.554 8.796-3.554s7.419 1.196 8.797 3.554c1.428 2.446 0.97 6.781-1.363 10.914-0.407 0.722-0.593 1.194-0.677 1.48 0.488 0.072 1.239 0.073 1.534 0.073h9.821c3.215 0 5.83 2.622 5.83 5.846l0.050 36.283c0 3.226-2.615 5.849-5.83 5.849zM46.753 59.703c0.117 0.091 0.589 0.297 1.608 0.297h9.809c1.009 0 1.83-0.828 1.83-1.846l-0.050-36.284c0-1.020-0.821-1.849-1.83-1.849h-9.824c-1.603-0.003-4.020-0.006-5.138-1.924-1.073-1.841-0.057-4.075 0.801-5.595 1.517-2.687 2.024-5.849 1.392-6.931-0.592-1.013-2.489-1.571-5.342-1.571s-4.75 0.558-5.342 1.571c-0.632 1.082-0.124 4.244 1.392 6.932 0.858 1.52 1.874 3.754 0.801 5.595-1.118 1.918-3.535 1.922-5.135 1.924h-9.927c-1.009 0-1.83 0.828-1.83 1.846l0.050 10.96c0 0.291 0.010 0.59 0.020 0.879 0.047 1.401 0.095 2.849-0.916 3.895-0.381 0.394-1.060 0.865-2.125 0.865-0 0-0 0-0.001 0-0.966 0-2.085-0.392-3.629-1.27-1.855-1.056-4.779-1.661-6.137-1.661-0.883 0-3.23 0-3.23 5.639s2.346 5.639 3.23 5.639c1.358 0 4.282-0.605 6.137-1.661 1.544-0.879 2.663-1.271 3.63-1.271 1.065 0 1.744 0.47 2.125 0.865 1.011 1.045 0.962 2.494 0.916 3.895-0.010 0.289-0.020 0.589-0.020 0.871v8.642c0 1.018 0.821 1.846 1.83 1.846h9.909c1.019 0 1.492-0.205 1.608-0.297 0.017-0.111 0.054-0.703-0.739-2.109-2.332-4.133-2.791-7.468-1.363-9.914 1.377-2.358 4.337-3.554 8.796-3.554s7.419 1.196 8.796 3.554c1.428 2.446 0.97 5.781-1.363 9.914-0.793 1.406-0.756 1.998-0.739 2.109z"></path>\r</symbol>\r<symbol id="icon-menu" viewBox="0 0 64 64">\r\r<path d="M4 12h56v8h-56v-8z"></path>\r<path d="M4 28h56v8h-56v-8z"></path>\r<path d="M4 44h56v8h-56v-8z"></path>\r</symbol>\r<symbol id="icon-warning2" viewBox="0 0 64 64">\r\r<path d="M63.122 57.235v0l-27.317-54.444c-1.046-1.86-2.426-2.791-3.805-2.791s-2.759 0.93-3.805 2.791l-27.317 54.444c-2.093 3.721-0.313 6.765 3.957 6.765h54.332c4.269 0 6.050-3.044 3.956-6.765zM32 56c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4s-1.791 4-4 4zM36 40c0 2.209-1.791 4-4 4s-4-1.791-4-4v-12c0-2.209 1.791-4 4-4s4 1.791 4 4v12z"></path>\r</symbol>\r<symbol id="icon-question6" viewBox="0 0 64 64">\r\r<path d="M32 52c-2.209 0-4-1.791-4-4v-4.11c0-5.639 4.498-9.907 8.847-14.035 3.516-3.337 7.153-6.788 7.153-9.856 0-5.973-4.329-12-14-12-7.148 0-13.13 5.348-13.914 12.44-0.243 2.196-2.218 3.779-4.415 3.536-2.196-0.243-3.779-2.22-3.536-4.415 0.591-5.35 3.128-10.289 7.142-13.907 4.045-3.646 9.274-5.654 14.724-5.654 5.898 0 11.336 1.853 15.312 5.219 4.313 3.651 6.688 8.9 6.688 14.781 0 6.505-5.124 11.368-9.646 15.659-2.978 2.826-6.354 6.030-6.354 8.232l0 4.11c0 2.209-1.791 4-4 4z"></path>\r<path d="M36 60c0 2.209-1.791 4-4 4s-4-1.791-4-4c0-2.209 1.791-4 4-4s4 1.791 4 4z"></path>\r</symbol>\r<symbol id="icon-cross" viewBox="0 0 64 64">\r\r<path d="M55.828 13.828l-5.657-5.657-18.172 18.172-18.172-18.172-5.657 5.657 18.172 18.172-18.172 18.172 5.657 5.657 18.172-18.172 18.172 18.172 5.657-5.657-18.172-18.172z"></path>\r</symbol>\r<symbol id="icon-arrow-up3" viewBox="0 0 64 64">\r\r<path d="M0 42l6 6 26-26 26 26 6-6-32-32-32 32z"></path>\r</symbol>\r<symbol id="icon-arrow-right3" viewBox="0 0 64 64">\r\r<path d="M22 0l-6 6 26 26-26 26 6 6 32-32-32-32z"></path>\r</symbol>\r<symbol id="icon-arrow-down3" viewBox="0 0 64 64">\r\r<path d="M64 22l-6-6-26 26-26-26-6 6 32 32 32-32z"></path>\r</symbol>\r<symbol id="icon-arrow-left3" viewBox="0 0 64 64">\r\r<path d="M42 64l6-6-26-26 26-26-6-6-32 32 32 32z"></path>\r</symbol>\r<symbol id="icon-sort-amount-desc" viewBox="0 0 64 64">\r\r<path d="M20 48v-48h-8v48h-10l14 14 14-14h-10z"></path>\r<path d="M28 0h36v8h-36v-8z"></path>\r<path d="M28 12h28v8h-28v-8z"></path>\r<path d="M28 24h20v8h-20v-8z"></path>\r<path d="M28 36h12v8h-12v-8z"></path>\r</symbol>\r<symbol id="icon-checkbox-checked" viewBox="0 0 64 64">\r\r<path d="M56 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM28 49.657l-14.828-14.828 5.657-5.657 9.171 9.171 19.172-19.172 5.657 5.657-24.828 24.828z"></path>\r</symbol>\r<symbol id="icon-paragraph-left" viewBox="0 0 64 64">\r\r<path d="M0 4h64v8h-64zM0 20h40v8h-40zM0 52h40v8h-40zM0 36h64v8h-64z"></path>\r</symbol>\r<symbol id="icon-share3" viewBox="0 0 64 64">\r\r<path d="M54 44c-2.822 0-5.37 1.171-7.188 3.052l-26.938-13.469c0.082-0.516 0.126-1.044 0.126-1.583s-0.044-1.067-0.126-1.583l26.938-13.469c1.818 1.881 4.366 3.052 7.188 3.052 5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10c0 0.539 0.044 1.067 0.126 1.583l-26.938 13.469c-1.818-1.881-4.366-3.052-7.188-3.052-5.523 0-10 4.477-10 10s4.477 10 10 10c2.822 0 5.37-1.171 7.188-3.052l26.938 13.469c-0.082 0.516-0.126 1.044-0.126 1.583 0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z"></path>\r</symbol>\r</defs>\r</svg>\r',"image/svg+xml"),e=[],r=!0,n=!1,o=void 0;try{for(var i,a=t.querySelectorAll("symbol[id]")[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){var c=i.value;e.push(c.getAttribute("id").replace(/^icon-/,""))}}catch(t){n=!0,o=t}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}return e}},{key:"render",value:function(){return this.getIcons(),i.a.createElement(p.a,{className:this.props.className},i.a.createElement(u.a,null,i.a.createElement("div",{className:"header",style:{height:"100px",paddingTop:"20px"}},i.a.createElement(f.a,{component:"h1"},"Icons"))),i.a.createElement("div",{className:"icon-sample-group"},this.getIcons().map(function(t,e){return i.a.createElement(O,{icon:t,key:e})})))}}]),e}())||n)||n)||n,O=function(t){function e(){return m(this,e),v(this,g(e).apply(this,arguments))}return w(e,i.a.Component),b(e,[{key:"render",value:function(){return i.a.createElement("label",{className:"icon-sample"},i.a.createElement("input",{type:"text",value:this.props.icon,readOnly:!0,onFocus:function(t){t.target.select()}}),i.a.createElement(h.a,{icon:this.props.icon,className:"icon"}))}}]),e}()}}]);