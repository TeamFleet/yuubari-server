(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1139:function(t,e,n){"use strict";n.r(e),function(t){var r,o=n(0),i=n.n(o),a=n(53),c=n(762),s=n(773),l=n(759),u=n(807),p=n(763),f=n(760),d=n(797);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v="PAGE_EXILLUSTS",w=[8,9],O=Object(a.a)({connect:[function(t){return t.pages[v]||{}},function(t){return{init:function(e){return t(Object(u.c)(v,(n={},r=u.a,o=e,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n)));var n,r,o},changeTab:function(e){return t(Object(u.b)(v,e))}}}],pageinfo:function(e){return Object(c.a)(e,{title:t("Limited CGs")})}})(r=function(e){function n(){var t;for(var e in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=b(this,h(n).call(this))).types=[],l.a.exillustTypes)t.types[e]=Object.assign(l.a.exillustTypes[e],{list:[]});for(var r in l.a.exillusts){var o=l.a.exillusts[r];t.types[o.type]&&t.types[o.type].list.push(o)}return t.types=t.types.filter(function(t){return!!t}).sort(function(t,e){return t.sort-e.sort}),t.state={selected:void 0},t}var r,o,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(n,i.a.Component),r=n,(o=[{key:"render",value:function(){var e=this;if(void 0===this.props[u.a])return this.props.init(0),null;var n=this.types[this.props[u.a]];return n?i.a.createElement(p.a,{className:this.props.className},i.a.createElement("p",null,i.a.createElement("i",null,t("Under Construction"),"...")),i.a.createElement("div",{style:{marginRight:"-10px",overflow:"hidden"}},this.types.map(function(t,n){return i.a.createElement("span",{key:n,style:{display:"block",float:"left",marginRight:"10px",padding:".2em .5em",fontSize:"smaller",lineHeight:"1.2em",background:n===e.props[u.a]?"rgba(255,255,255,.2)":void 0,color:n===e.props[u.a]?"#fff":void 0},onClick:function(){e.props.changeTab(n)}},t._name," (",t.list.length,")")})),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("div",{className:"title"},i.a.createElement(f.a,{type:"inline-block",component:"h2"},n._name),n._time&&i.a.createElement("small",null,"  (",n._time,")")),n.list.map(function(t){return i.a.createElement("div",{key:t.id,style:{display:"flex",flexFlow:"row nowrap",height:"300px",position:"relative",marginTop:"1em"}},w.map(function(e){return i.a.createElement("div",{key:e,style:{flex:"1",position:"relative",height:"100%"}},(t.exclude||[]).includes(e)?i.a.createElement("div",{style:{color:"rgba(255,255,255,.15)",fontSize:"3rem",display:"block",position:"absolute",width:"100%",height:"0",textAlign:"center",top:"50%",lineHeight:"0",fontWeight:"100"}},"无"):i.a.createElement(d.a,{src:Object(s.a)("ship-extra",t.id,e),style:{display:"block",position:"absolute",width:"100%",height:"100%"},styleImg:{display:"block",position:"absolute",width:"100%",height:"100%",objectFit:"contain"}}))}))}))):null}}])&&m(r.prototype,o),a&&m(r,a),n}())||r;e.default=O}.call(this,n(105).default)},294:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],o=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===o.title&&document.title&&(o.title=document.title),void 0===o.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(o.url=location.href)),void 0!==o.charset&&r.push({charset:o.charset}),void 0!==o.title&&(r.push({itemprop:"name",content:o.title}),r.push({name:"twitter:title",content:o.title}),r.push({name:"og:title",content:o.title})),void 0!==o.description&&(r.push({name:"description",content:o.description}),r.push({itemprop:"description",content:o.description}),r.push({itemprop:"twitter:description",content:o.description}),r.push({itemprop:"og:description",content:o.description})),void 0!==o.image&&(r.push({name:"image",content:o.image}),r.push({itemprop:"image",content:o.image}),r.push({itemprop:"twitter:image:src",content:o.image}),r.push({itemprop:"og:image",content:o.image})),void 0!==o.video&&(r.push({name:"twitter:player",content:o.video}),r.push({itemprop:"og:video",content:o.video})),void 0!==o.url&&r.push({name:"og:url",content:o.url}),void 0!==o.siteName&&r.push({name:"og:site_name",content:o.siteName}),void 0!==o.locale&&r.push({name:"og:locale",content:o.locale}),void 0!==o.type&&r.push({name:"og:type",content:o.type}),void 0!==o.twitter.card&&r.push({name:"twitter:card",content:o.twitter.card}),void 0!==o.twitter.siteCreator&&r.push({name:"twitter:site",content:n(o.twitter.siteCreator)}),void 0!==o.twitter.author&&r.push({name:"twitter:creator",content:n(o.twitter.author)}),void 0!==o.facebook.adminsId&&r.push({name:"fb:admins",content:n(o.facebook.adminsId)}),void 0!==o.facebook.appId&&r.push({name:"fb:app_id",content:n(o.facebook.appId)}),void 0!==o.returnArray&&(e=o.returnArray),e?r:r.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},759:function(t,e,n){"use strict";var r=n(138);n.d(e,"b",function(){return r.locale}),n.d(e,"a",function(){return r.db})},760:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(20),a=n.n(i),c=n(53);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=Object(c.a)({styles:n(765)})(function(t){var e=t.className,n=t.classNameInner,r=t.component,i=t.tag,c=t.tagname,p=t.element,f=t.level,d=t.children,y=t.title,m=t.type,b=t.inherit,h=u(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=r||i||c||p||(void 0===f?void 0:"h".concat(f))||"div",v=e.split(" ")[0];h.children=d;var w=Array.isArray(d)?d[0]:d;switch("string"==typeof y?h["data-text"]=y:"string"==typeof w?h["data-text"]=w:"object"===l(w)&&"object"===l(w.props)&&"string"==typeof w.props.value&&(h["data-text"]=w.props.value),b&&(h["data-title-is-inherit"]=""),m){case"line-append":return o.a.createElement("div",{className:e,"data-title-type":m,"data-title-tag":g},o.a.createElement(g,s({className:a()([v+"-child",n])},h)))}return o.a.createElement(g,s({"data-title-type":m,className:e},h))});e.a=p},762:function(t,e,n){"use strict";(function(t){var r=n(294),o=n.n(r),i=n(5),a=n(767);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function e(n,r){if("object"===c(n)&&void 0===r)return e(i.e.getState(),n);if("object"!==c(n))return{};var s=n.localeId,l=t("Who Calls the Fleet")+"",u=n.server.origin,p=Object.assign({uri:"","twitter:card":"summary_large_image"},r),f=p.uri,d=void 0===f?"undefined"!=typeof location?location.pathname:void 0:f,y=p.title,m=void 0===y?l:y,b=p.subtitle,h=p.description,g=p.image;if("object"===c(d)&&(d=d.pathname),"/"==d.substr(0,1)&&(d=d.substr(1)),m){Array.isArray(m)&&(m=m.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(m)&&m.length?m[0]:m;m=Array.isArray(m)?m.join(" / "):m,void 0!==b?i.e.dispatch(Object(a.a)({main:v,sub:b})):i.e.dispatch(Object(a.a)(v)),m!==l&&(m=m.replace(/\n/g,"")+" - "+l)}return h&&(h=h.replace(/\n/g,"")),"/"!==u.substr(u.length-1,1)&&(u+="/"),{title:m,metas:o()({title:m,description:h,image:g||u+"launcher.jpg",url:u+d,type:"website",locale:s,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,n(105).default)},763:function(t,e,n){"use strict";var r,o=n(0),i=n.n(o),a=n(53);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d={},y=Object(a.a)({connect:function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}}})(r=function(t){function e(){var t,n,r,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=function(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?p(t):e}(this,(t=u(e)).call.apply(t,[this].concat(c))),r=p(n),i=!1,(o="updating")in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,i.a.Component),n=e,(r=[{key:"restoreScrollY",value:function(){void 0!==d[this.props.pathname]&&(window.scrollTo(void 0,d[this.props.pathname]),delete d[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===s(this.props.locationBeforeTransitions)&&"object"===s(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(d[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete d[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),i.a.createElement("div",t)}}])&&l(n.prototype,r),o&&l(n,o),e}())||r;e.a=y},765:function(t,e){t.exports={wrapper:"f9f7c40f",css:'.f9f7c40f{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7c40f[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f:last-child{margin-bottom:0}.f9f7c40f[data-title-is-inherit] .f9f7c40f[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7c40f[data-title-type=inline-block]{display:inline-block}.f9f7c40f[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7c40f-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},767:function(t,e,n){"use strict";var r=n(3);n.d(e,"a",function(){return o});var o=function(t){return function(e){e(function(t){return{type:r.O,title:t}}(t))}}},773:function(t,e,n){"use strict";var r=n(196),o=n.n(r),i=n(759);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var c=o()(),s=self._html&&self._html.classList.contains("webp")?".webp":".png";e.a=function(t,e,n,r){var o=function t(e,n,r,o){var c=i.a.ships[1],l=i.a.entities[1];if("object"===a(e)){if(e.constructor===c.constructor)return t("ship",e.id,n);if(e.constructor===l.constructor)return t("entity",e.id,n)}if(void 0!==n&&void 0===r){var u=n.split("/");return u.length>1?t(e,u[0],u[1].split(".")[0]):""}switch(o=o?"?"+o:"",e){case"ship":case"ships":var p=i.a.ships[n];return"ships/"+p.getPic(r,s)+(p.illust_version?"?version=".concat(p.illust_version):"");case"ship-extra":case"ships-extra":return"ships-extra/".concat(n,"/").concat(r).concat(s).concat(o);case"equipment":case"equipments":return"equipments/".concat(n,"/").concat(r).concat(s).concat(o);case"entity":case"entities":var f=s;return 2==r&&(f=".jpg"),"entities/".concat(n,"/").concat(r).concat(f).concat(o);case"enemy":case"enemies":return"enemies/".concat(n,"/").concat(r).concat(s).concat(o)}}(t,e,n,r);return c+"pics/"+o}},797:function(t,e,n){"use strict";var r,o=n(0),i=n.n(o),a=n(20),c=n.n(a),s=n(53);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=Object(s.a)({styles:n(798)})(r=function(t){function e(){var t,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return n=function(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?y(t):e}(this,(t=d(e)).call.apply(t,[this].concat(o))),b(y(n),"state",{isLoading:!0,isLoaded:!1,isError:!1}),n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,i.a.Component),n=e,(r=[{key:"onLoad",value:function(){this.setState({isLoading:!1,isLoaded:!0})}},{key:"onError",value:function(){this.setState({isLoading:!1,isError:!0})}},{key:"render",value:function(){var t,e=this.props,n=e.className,r=e.classNameImg,o=e.children,a=e.tag,s=e.component,l=e.src,f=e.img,d=e.pic,y=e.picture,m=e.styleImg,h=p(e,["className","classNameImg","children","tag","component","src","img","pic","picture","styleImg"]),g=a||s||"span",v=l||f||d||y||void 0;return i.a.createElement(g,u({className:c()((t={},b(t,n,!0),b(t,"is-loading",this.state.isLoading),b(t,"is-loaded",this.state.isLoaded),b(t,"is-error",this.state.isError),t))},h),i.a.createElement("img",{className:c()(["img",r]),src:v,onLoad:this.onLoad.bind(this),onError:this.onError.bind(this),style:m}),o)}}])&&f(n.prototype,r),o&&f(n,o),e}())||r;e.a=h},798:function(t,e){t.exports={wrapper:"c71075c8",css:'.c71075c8{position:relative}.c71075c8.is-loading>.img{opacity:0;z-index:-1000}.c71075c8.is-loading:after{content:"";position:absolute;z-index:-1;width:2rem;height:2rem;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;left:50%;top:50%;margin-left:-1rem;margin-top:-1rem;border:.1rem solid rgba(237,240,242,.075);border-top-color:rgba(64,196,255,.75);border-radius:50%}'}},807:function(t,e,n){"use strict";var r=n(3),o=n(192);var i=function(t,e){return{type:r.t,id:t,state:e}},a=function(t,e){return i(t,(n={},r=o.a,a=e,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));var n,r,a};n.d(e,"c",function(){return c}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return o.a});var c=function(t,e){return function(n){return n(function(t,e){return{type:r.r,id:t,initialState:e}}(t,e))}},s=function(t,e){return function(n){return n(function(t,e){return{type:r.s,id:t,initialState:e}}(t,e))}},l=function(t,e){return function(n){return n(i(t,e))}},u=function(t,e){return function(n){return n(a(t,e))}}}}]);