(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{760:function(e,t,n){"use strict";var r=n(107);n.d(t,"b",function(){return r.locale}),n.d(t,"a",function(){return r.db})},761:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(21),i=n.n(o),c=n(55);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(c.a)({styles:n(766)})(function(e){var t=e.className,n=e.classNameInner,r=e.component,o=e.tag,c=e.tagname,u=e.element,b=e.level,p=e.children,m=e.title,d=e.type,h=e.inherit,y=f(e,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),v=r||o||c||u||(void 0===b?void 0:"h".concat(b))||"div",g=t.split(" ")[0];y.children=p;var k=Array.isArray(p)?p[0]:p;switch("string"==typeof m?y["data-text"]=m:"string"==typeof k?y["data-text"]=k:"object"===s(k)&&"object"===s(k.props)&&"string"==typeof k.props.value&&(y["data-text"]=k.props.value),h&&(y["data-title-is-inherit"]=""),d){case"line-append":return a.a.createElement("div",{className:t,"data-title-type":d,"data-title-tag":v},a.a.createElement(v,l({className:i()([g+"-child",n])},y)))}return a.a.createElement(v,l({"data-title-type":d,className:t},y))});t.a=u},763:function(e,t,n){"use strict";(function(e){var r=n(294),a=n.n(r),o=n(5),i=n(768);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function t(n,r){if("object"===c(n)&&void 0===r)return t(o.e.getState(),n);if("object"!==c(n))return{};var l=n.localeId,s=e("Who Calls the Fleet")+"",f=n.server.origin,u=Object.assign({uri:"","twitter:card":"summary_large_image"},r),b=u.uri,p=void 0===b?"undefined"!=typeof location?location.pathname:void 0:b,m=u.title,d=void 0===m?s:m,h=u.subtitle,y=u.description,v=u.image;if("object"===c(p)&&(p=p.pathname),"/"==p.substr(0,1)&&(p=p.substr(1)),d){Array.isArray(d)&&(d=d.filter(function(e){return void 0!==e&&""!==e}));var g=Array.isArray(d)&&d.length?d[0]:d;d=Array.isArray(d)?d.join(" / "):d,void 0!==h?o.e.dispatch(Object(i.a)({main:g,sub:h})):o.e.dispatch(Object(i.a)(g)),d!==s&&(d=d.replace(/\n/g,"")+" - "+s)}return y&&(y=y.replace(/\n/g,"")),"/"!==f.substr(f.length-1,1)&&(f+="/"),{title:d,metas:a()({title:d,description:y,image:v||f+"launcher.jpg",url:f+p,type:"website",locale:l,siteName:s,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,n(106).default)},764:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),i=n(55);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p={},m=Object(i.a)({connect:function(e){return{locationBeforeTransitions:e.routing.locationBeforeTransitions}}})(r=function(e){function t(){var e,n,r,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?u(e):t}(this,(e=f(t)).call.apply(e,[this].concat(c))),r=u(n),o=!1,(a="updating")in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,o.a.Component),n=t,(r=[{key:"restoreScrollY",value:function(){void 0!==p[this.props.pathname]&&(window.scrollTo(void 0,p[this.props.pathname]),delete p[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(e){return"object"===l(this.props.locationBeforeTransitions)&&"object"===l(e.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(p[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete p[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var e=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(t){return delete e[t]}),o.a.createElement("div",e)}}])&&s(n.prototype,r),a&&s(n,a),t}())||r;t.a=m},765:function(e,t,n){"use strict";t.a=function(e,t){switch(e){case"ship":case"ships":return"/ships/".concat(t);case"item":case"items":case"equipment":case"equipments":return"/equipments/".concat(t);case"entity":case"entities":return"/entities/".concat(t)}}},766:function(e,t){e.exports={wrapper:"f9f7c40f",css:'.f9f7c40f{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7c40f[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f:last-child{margin-bottom:0}.f9f7c40f[data-title-is-inherit] .f9f7c40f[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7c40f[data-title-type=inline-block]{display:inline-block}.f9f7c40f[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7c40f-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},767:function(e,t,n){"use strict";var r=n(107);t.a=function(e){return r.get.ship(e)}},768:function(e,t,n){"use strict";var r=n(3);n.d(t,"a",function(){return a});var a=function(e){return function(t){t(function(e){return{type:r.O,title:e}}(e))}}},769:function(e,t,n){"use strict";var r=n(107);t.a=function(e){return r.get.equipment(e)}},773:function(e,t,n){"use strict";var r=n(5);t.a=function(e){r.b.replace(("/"!==e.substr(0,1)?"/":"")+e)}},774:function(e,t,n){"use strict";var r=n(196),a=n.n(r),o=n(760);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=a()(),l=self._html&&self._html.classList.contains("webp")?".webp":".png";t.a=function(e,t,n,r){var a=function e(t,n,r,a){var c=o.a.ships[1],s=o.a.entities[1];if("object"===i(t)){if(t.constructor===c.constructor)return e("ship",t.id,n);if(t.constructor===s.constructor)return e("entity",t.id,n)}if(void 0!==n&&void 0===r){var f=n.split("/");return f.length>1?e(t,f[0],f[1].split(".")[0]):""}switch(a=a?"?"+a:"",t){case"ship":case"ships":var u=o.a.ships[n];return"ships/"+u.getPic(r,l)+(u.illust_version?"?version=".concat(u.illust_version):"");case"ship-extra":case"ships-extra":return"ships-extra/".concat(n,"/").concat(r).concat(l).concat(a);case"equipment":case"equipments":return"equipments/".concat(n,"/").concat(r).concat(l).concat(a);case"entity":case"entities":var b=l;return 2==r&&(b=".jpg"),"entities/".concat(n,"/").concat(r).concat(b).concat(a);case"enemy":case"enemies":return"enemies/".concat(n,"/").concat(r).concat(l).concat(a)}}(e,t,n,r);return c+"pics/"+a}},781:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(69),i=n(773);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.a=function(e){var t=e.to,n=e.href,r=e.className,s=e.replace,f=void 0!==s&&s,u=e.onClick,b=l(e,["to","href","className","replace","onClick"]),p=t||n||"";return p.match(/^(https?:)?\/\//)?p.indexOf("://")<0?a.a.createElement("a",c({className:r,href:p},b)):a.a.createElement("a",c({className:r,href:p,target:"_blank"},b)):a.a.createElement(o.Link,c({className:r,to:p,onClick:f?function(e){if(Object(i.a)(p),e.preventDefault(),"function"==typeof u)return u(e)}:u},b))}},786:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(21),i=n.n(o),c=n(55),l=n(781),s=n(767),f=n(769),u=(n(833),n(774)),b=n(765);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=Object(c.a)({styles:n(994)})(function(e){var t,n=e.ship,r=e.equipment,o=e.entity,c=e.id,d=e.to,h=e.href,y=e.noLink,v=void 0!==y&&y,g=e.className,k=e.badge,O=e.name,w=e.children,j=m(e,["ship","equipment","entity","id","to","href","noLink","className","badge","name","children"]),x=d||h||void 0,S="span";if(j.className=i()((p(t={},g,!0),p(t,"mod-badge",!!k),t)),j.children=w,n||c){var E=Object(s.a)(n||c);j.children=a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{className:"avatar",style:{backgroundImage:"url(".concat(Object(u.a)("ship",E.id,"0-2"),")")}}),O||E._name,w),v||(S=l.a,j.to=x||Object(b.a)("ship",E.id))}else if(r){var N=Object(f.a)(r);j.children=a.a.createElement(a.a.Fragment,null,O||N._name,w),v||(S=l.a,j.to=x||Object(b.a)("equipment",N.id))}else if(o){var P=Object(f.a)(o);j.children=a.a.createElement(a.a.Fragment,null,O||P._name,w),v||(S=l.a,j.to=x||Object(b.a)("entity",P.id))}else x&&(S=l.a,j.to=x);return a.a.createElement(S,j)});t.a=d},833:function(e,t,n){"use strict";var r=n(760);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(e){return"object"===a(e)&&e.id?e:("string"==typeof e&&(e=parseInt(e)),"number"==typeof e?r.a.entities[e]:void 0)}},834:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(69),i=n(55),c=n(773);function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=Object(i.a)({styles:n(995)})(function(e){var t=e.pic,n=e.avatar,r=e.image,i=e.src,s=e.picture,f=e.img,u=e.name,b=e.title,p=e.text,m=e.nameExtra,d=e.to,h=e.href,y=e.link,v=e.replace,g=void 0!==v&&v,k=e.children,O=l(e,["pic","avatar","image","src","picture","img","name","title","text","nameExtra","to","href","link","replace","children"]),w=t||n||r||i||s||f,j=u||b||p||null,x=g?"a":o.Link,S=d||h||y;return"a"===x?(O.href=S,O.onClick=function(e){e.preventDefault(),Object(c.a)(S)}):O.to=S,a.a.createElement(x,O,w&&a.a.createElement("span",{className:"pic",style:{backgroundImage:"url(".concat(w,")")}}),j&&function(e,t){return"string"==typeof e?a.a.createElement("span",{className:"name"},e,void 0!==t&&a.a.createElement("small",{className:"name-extra"},t)):a.a.cloneElement(e,{className:"name"})}(j,m),k)});t.a=s},994:function(e,t){e.exports={wrapper:"bbb334a9",css:".bbb334a9{color:rgba(157,180,191,.9);border:.05rem solid transparent;border-radius:.15rem;display:inline-block;line-height:1rem;font-size:.7rem;border-radius:.55rem;padding:0 .4rem;position:relative;vertical-align:initial}.bbb334a9 .avatar{display:block;float:left;height:1.1rem;overflow:hidden;border-radius:.55rem;background-size:cover;z-index:-1;width:1.6rem;margin:-.05rem .25rem -.05rem -.45rem;background-position:60% 0}.bbb334a9.link,a.bbb334a9{color:#e6e6e6}html.is-hover .bbb334a9.link:hover,html.is-hover a.bbb334a9:hover{color:#40c4ff;background:rgba(0,0,0,.15)}.bbb334a9.link:active,a.bbb334a9:active,html.is-hover .bbb334a9.link:hover:active,html.is-hover a.bbb334a9:hover:active{color:hsla(0,0%,100%,.5);background:rgba(0,0,0,.15)}.bbb334a9.mod-inline{font-size:unset;color:inherit;padding-left:1.7rem;padding-right:0}.bbb334a9.mod-inline:active,html.is-hover .bbb334a9.mod-inline:hover,html.is-hover .bbb334a9.mod-inline:hover:active{border-color:transparent;background-color:initial}.bbb334a9.mod-inline .avatar{position:absolute;top:50%;margin:-.55rem auto 0 0;left:0}a.bbb334a9.mod-inline{color:#40c4ff}html.is-hover a.bbb334a9.mod-inline:hover{color:#fff}a.bbb334a9.mod-inline:active,html.is-hover a.bbb334a9.mod-inline:hover:active{color:hsla(0,0%,100%,.5)}html.is-webapp a.bbb334a9.mod-inline{cursor:pointer}.bbb334a9.mod-badge{color:#cdefff;border-color:#0277bd;background-color:#0277bd}html.is-hover .bbb334a9.mod-badge.link:hover,html.is-hover a.bbb334a9.mod-badge:hover{color:#fff;border-color:#039be5;background-color:#039be5}.bbb334a9.mod-badge.link:active,a.bbb334a9.mod-badge:active,html.is-hover .bbb334a9.mod-badge.link:hover:active,html.is-hover a.bbb334a9.mod-badge:hover:active{color:#cdefff;border-color:#0277bd;background-color:#01579b}"}},995:function(e,t){e.exports={wrapper:"e3efac8a",css:'.e3efac8a{position:relative;color:#fff;min-width:9rem;height:2rem}.e3efac8a,.e3efac8a:before{display:inline-block;vertical-align:middle}.e3efac8a:before{content:"";width:0;height:100%;overflow:hidden}.e3efac8a:after{content:"";position:absolute;z-index:-10;top:0;bottom:0;left:1rem;right:0;border-radius:0 .25rem .25rem 0}.e3efac8a .pic{display:block;position:absolute;z-index:0;top:0;left:-.25rem;right:0;height:100%;background:no-repeat -2.5rem 0/contain;pointer-events:none}.e3efac8a .name{display:inline-block;position:relative;z-index:2;line-height:1.1em;vertical-align:middle}.e3efac8a .name-suffix,.e3efac8a .name-type{display:block;line-height:1.05em;font-weight:400;font-size:.75em;transition:inherit}.e3efac8a .name-type{margin-bottom:.15em}.e3efac8a .name-suffix{margin-top:.15em;margin-left:.2rem;color:rgba(157,180,191,.9)}.e3efac8a .name-extra{display:inline-block;margin-left:.25rem}html.is-hover .e3efac8a:hover{color:#40c4ff}html.is-hover .e3efac8a:hover:after{background:rgba(0,0,0,.15)}html.is-hover .e3efac8a:hover .name-suffix{color:#03a9f4}.e3efac8a:active,html.is-hover .e3efac8a:hover:active{color:hsla(0,0%,100%,.5)}.e3efac8a:active:after,html.is-hover .e3efac8a:hover:active:after{background:rgba(0,0,0,.15)}.e3efac8a:active,.e3efac8a:active .name-suffix,html.is-hover .e3efac8a:hover:active .name-suffix{color:hsla(0,0%,100%,.5)}.e3efac8a:active:after{background:rgba(0,0,0,.15)}.e3efac8a:active .name-suffix{color:hsla(0,0%,100%,.5)}[data-locale=en] .e3efac8a .name{font-size:.7rem}'}}}]);