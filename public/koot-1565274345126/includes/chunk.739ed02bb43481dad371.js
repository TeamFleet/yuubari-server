(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1144:function(t,e,n){"use strict";n.r(e),function(t){var r=n(0),i=n.n(r),o=n(794);e.default=function(){return i.a.createElement(o.a,{title:t("Naval Academy")})}}.call(this,n(107).default)},296:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],i=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===i.title&&document.title&&(i.title=document.title),void 0===i.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(i.url=location.href)),void 0!==i.charset&&r.push({charset:i.charset}),void 0!==i.title&&(r.push({itemprop:"name",content:i.title}),r.push({name:"twitter:title",content:i.title}),r.push({name:"og:title",content:i.title})),void 0!==i.description&&(r.push({name:"description",content:i.description}),r.push({itemprop:"description",content:i.description}),r.push({itemprop:"twitter:description",content:i.description}),r.push({itemprop:"og:description",content:i.description})),void 0!==i.image&&(r.push({name:"image",content:i.image}),r.push({itemprop:"image",content:i.image}),r.push({itemprop:"twitter:image:src",content:i.image}),r.push({itemprop:"og:image",content:i.image})),void 0!==i.video&&(r.push({name:"twitter:player",content:i.video}),r.push({itemprop:"og:video",content:i.video})),void 0!==i.url&&r.push({name:"og:url",content:i.url}),void 0!==i.siteName&&r.push({name:"og:site_name",content:i.siteName}),void 0!==i.locale&&r.push({name:"og:locale",content:i.locale}),void 0!==i.type&&r.push({name:"og:type",content:i.type}),void 0!==i.twitter.card&&r.push({name:"twitter:card",content:i.twitter.card}),void 0!==i.twitter.siteCreator&&r.push({name:"twitter:site",content:n(i.twitter.siteCreator)}),void 0!==i.twitter.author&&r.push({name:"twitter:creator",content:n(i.twitter.author)}),void 0!==i.facebook.adminsId&&r.push({name:"fb:admins",content:n(i.facebook.adminsId)}),void 0!==i.facebook.appId&&r.push({name:"fb:app_id",content:n(i.facebook.appId)}),void 0!==i.returnArray&&(e=i.returnArray),e?r:r.map(function(t){var e="<meta";for(var n in t)e+=" ".concat(n,'="').concat(t[n],'"');return e+="/>"}).join("")};var n=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},763:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(21),a=n.n(o),c=n(55);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=Object(c.a)({styles:n(769)})(function(t){var e=t.className,n=t.classNameInner,r=t.component,o=t.tag,c=t.tagname,u=t.element,f=t.level,d=t.children,m=t.title,b=t.type,h=t.inherit,y=p(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=r||o||c||u||(void 0===f?void 0:"h".concat(f))||"div",v=e.split(" ")[0];y.children=d;var w=Array.isArray(d)?d[0]:d;switch("string"==typeof m?y["data-text"]=m:"string"==typeof w?y["data-text"]=w:"object"===s(w)&&"object"===s(w.props)&&"string"==typeof w.props.value&&(y["data-text"]=w.props.value),h&&(y["data-title-is-inherit"]=""),b){case"line-append":return i.a.createElement("div",{className:e,"data-title-type":b,"data-title-tag":g},i.a.createElement(g,l({className:a()([v+"-child",n])},y)))}return i.a.createElement(g,l({"data-title-type":b,className:e},y))});e.a=u},765:function(t,e,n){"use strict";(function(t){var r=n(296),i=n.n(r),o=n(5),a=n(771);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function e(n,r){if("object"===c(n)&&void 0===r)return e(o.e.getState(),n);if("object"!==c(n))return{};var l=n.localeId,s=t("Who Calls the Fleet")+"",p=n.server.origin,u=Object.assign({uri:"","twitter:card":"summary_large_image"},r),f=u.uri,d=void 0===f?"undefined"!=typeof location?location.pathname:void 0:f,m=u.title,b=void 0===m?s:m,h=u.subtitle,y=u.description,g=u.image;if("object"===c(d)&&(d=d.pathname),"/"==d.substr(0,1)&&(d=d.substr(1)),b){Array.isArray(b)&&(b=b.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(b)&&b.length?b[0]:b;b=Array.isArray(b)?b.join(" / "):b,void 0!==h?o.e.dispatch(Object(a.a)({main:v,sub:h})):o.e.dispatch(Object(a.a)(v)),b!==s&&(b=b.replace(/\n/g,"")+" - "+s)}return y&&(y=y.replace(/\n/g,"")),"/"!==p.substr(p.length-1,1)&&(p+="/"),{title:b,metas:i()({title:b,description:y,image:g||p+"launcher.jpg",url:p+d,type:"website",locale:l,siteName:s,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,n(107).default)},766:function(t,e,n){"use strict";var r,i=n(0),o=n.n(i),a=n(55);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d={},m=Object(a.a)({connect:function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}}})(r=function(t){function e(){var t,n,r,i,o,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var s=arguments.length,f=new Array(s),d=0;d<s;d++)f[d]=arguments[d];return r=this,n=!(i=(t=p(e)).call.apply(t,[this].concat(f)))||"object"!==l(i)&&"function"!=typeof i?u(r):i,o=u(n),c=!1,(a="updating")in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,o.a.Component),n=e,(r=[{key:"restoreScrollY",value:function(){void 0!==d[this.props.pathname]&&(window.scrollTo(void 0,d[this.props.pathname]),delete d[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===l(this.props.locationBeforeTransitions)&&"object"===l(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(d[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete d[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),o.a.createElement("div",t)}}])&&s(n.prototype,r),i&&s(n,i),e}())||r;e.a=m},769:function(t,e){t.exports={wrapper:"f9f7c40f",css:'.f9f7c40f{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7c40f[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f:last-child{margin-bottom:0}.f9f7c40f[data-title-is-inherit] .f9f7c40f[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7c40f[data-title-type=inline-block]{display:inline-block}.f9f7c40f[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7c40f-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},771:function(t,e,n){"use strict";var r=n(3);n.d(e,"a",function(){return i});var i=function(t){return function(e){e(function(t){return{type:r.O,title:t}}(t))}}},780:function(t,e,n){"use strict";(function(t){var r=n(0),i=n.n(r),o=n(55),a=n(48),c=Object(o.a)({styles:n(781)})(function(e){var n=e.className,r=e.component,o=e.tag,c=e.element,l=r||o||c||"span";return i.a.createElement(l,{className:n},i.a.createElement(a.a,{icon:"warning2",className:"icon"}),t("Under Construction"))});e.a=c}).call(this,n(107).default)},781:function(t,e){t.exports={wrapper:"bb1c98e9",css:".bb1c98e9{border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;padding:.5rem;background:hsla(5,100%,75%,.1);text-align:center;color:#ff8a80;font-size:1rem;display:block}.bb1c98e9 .icon{vertical-align:text-bottom;margin-right:.25rem;width:1rem;height:1rem}"}},794:function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(55),a=n(765),c=n(766),l=n(763),s=n(780),p=Object(o.a)({pageinfo:function(t,e){return Object(a.a)(t,{title:e.title})}})(function(t){var e=t.className,n=t.title;return i.a.createElement(c.a,{className:e},i.a.createElement(l.a,{component:"h2",children:n}),i.a.createElement(s.a,null))});e.a=p}}]);