(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{247:function(e,t){e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&n.push({charset:r.charset}),void 0!==r.title&&(n.push({itemprop:"name",content:r.title}),n.push({name:"twitter:title",content:r.title}),n.push({name:"og:title",content:r.title})),void 0!==r.description&&(n.push({name:"description",content:r.description}),n.push({itemprop:"description",content:r.description}),n.push({itemprop:"twitter:description",content:r.description}),n.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(n.push({name:"image",content:r.image}),n.push({itemprop:"image",content:r.image}),n.push({itemprop:"twitter:image:src",content:r.image}),n.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(n.push({name:"twitter:player",content:r.video}),n.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&n.push({name:"og:url",content:r.url}),void 0!==r.siteName&&n.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&n.push({name:"og:locale",content:r.locale}),void 0!==r.type&&n.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&n.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&n.push({name:"twitter:site",content:o(r.twitter.siteCreator)}),void 0!==r.twitter.author&&n.push({name:"twitter:creator",content:o(r.twitter.author)}),void 0!==r.facebook.adminsId&&n.push({name:"fb:admins",content:o(r.facebook.adminsId)}),void 0!==r.facebook.appId&&n.push({name:"fb:app_id",content:o(r.facebook.appId)}),void 0!==r.returnArray&&(t=r.returnArray),t?n:n.map(function(e){var t="<meta";for(var o in e)t+=" ".concat(o,'="').concat(e[o],'"');return t+="/>"}).join("")};var o=function(e){return"string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e}},630:function(e,t,o){"use strict";var n=o(0),r=o.n(n),i=o(19),a=o.n(i),c=o(47);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=Object(c.a)({styles:o(634)})(function(e){var t=e.className,o=e.classNameInner,n=e.component,i=e.tag,c=e.tagname,u=e.element,d=e.level,f=e.children,m=e.title,b=e.type,h=e.inherit,y=p(e,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=n||i||c||u||(void 0===d?void 0:"h".concat(d))||"div",v=t.split(" ")[0];y.children=f;var k=Array.isArray(f)?f[0]:f;switch("string"==typeof m?y["data-text"]=m:"string"==typeof k?y["data-text"]=k:"object"===l(k)&&"object"===l(k.props)&&"string"==typeof k.props.value&&(y["data-text"]=k.props.value),h&&(y["data-title-is-inherit"]=""),b){case"line-append":return r.a.createElement("div",{className:t,"data-title-type":b,"data-title-tag":g},r.a.createElement(g,s({className:a()([v+"-child",o])},y)))}return r.a.createElement(g,s({"data-title-type":b,className:t},y))});t.a=u},631:function(e,t,o){"use strict";(function(e){var n=o(247),r=o.n(n),i=o(4),a=o(636);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function t(o,n){if("object"===c(o)&&void 0===n)return t(i.e.getState(),o);if("object"!==c(o))return{};var s=o.localeId,l=e("Who Calls the Fleet")+"",p=o.server.origin,u=Object.assign({uri:"","twitter:card":"summary_large_image"},n),d=u.uri,f=void 0===d?"undefined"!=typeof location?location.pathname:void 0:d,m=u.title,b=void 0===m?l:m,h=u.subtitle,y=u.description,g=u.image;if("object"===c(f)&&(f=f.pathname),"/"==f.substr(0,1)&&(f=f.substr(1)),b){Array.isArray(b)&&(b=b.filter(function(e){return void 0!==e&&""!==e}));var v=Array.isArray(b)&&b.length?b[0]:b;b=Array.isArray(b)?b.join(" / "):b,void 0!==h?i.e.dispatch(Object(a.a)({main:v,sub:h})):i.e.dispatch(Object(a.a)(v)),b!==l&&(b=b.replace(/\n/g,"")+" - "+l)}return y&&(y=y.replace(/\n/g,"")),"/"!==p.substr(p.length-1,1)&&(p+="/"),{title:b,metas:r()({title:b,description:y,image:g||p+"launcher.jpg",url:p+f,type:"website",locale:s,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,o(93).default)},632:function(e,t,o){"use strict";var n,r=o(0),i=o.n(r),a=o(47);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={},m=Object(a.a)({connect:function(e){return{locationBeforeTransitions:e.routing.locationBeforeTransitions}}})(n=function(e){function t(){var e,o,n,r,i,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,d=new Array(l),f=0;f<l;f++)d[f]=arguments[f];return n=this,o=!(r=(e=p(t)).call.apply(e,[this].concat(d)))||"object"!==s(r)&&"function"!=typeof r?u(n):r,i=u(o),c=!1,(a="updating")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,o}var o,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.a.Component),o=t,(n=[{key:"restoreScrollY",value:function(){void 0!==f[this.props.pathname]&&(window.scrollTo(void 0,f[this.props.pathname]),delete f[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(e){return"object"===s(this.props.locationBeforeTransitions)&&"object"===s(e.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(f[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete f[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var e=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(t){return delete e[t]}),i.a.createElement("div",e)}}])&&l(o.prototype,n),r&&l(o,r),t}())||n;t.a=m},634:function(e,t){e.exports={wrapper:"f9f7",css:'.f9f7{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7:last-child{margin-bottom:0}.f9f7[data-title-is-inherit] .f9f7[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7[data-title-type=inline-block]{display:inline-block}.f9f7[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7[data-title-type=line-append] .f9f7-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7[data-title-type=line-append] .f9f7-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7[data-title-type=line-append] .f9f7-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},636:function(e,t,o){"use strict";var n=o(3);o.d(t,"a",function(){return r});var r=function(e){return function(t){t(function(e){return{type:n.O,title:e}}(e))}}},643:function(e,t,o){"use strict";(function(e){var n=o(0),r=o.n(n),i=o(47),a=o(42),c=Object(i.a)({styles:o(644)})(function(t){var o=t.className,n=t.component,i=t.tag,c=t.element,s=n||i||c||"span";return r.a.createElement(s,{className:o},r.a.createElement(a.a,{icon:"warning2",className:"icon"}),e("Under Construction"))});t.a=c}).call(this,o(93).default)},644:function(e,t){e.exports={wrapper:"bb1c",css:".bb1c{border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;padding:.5rem;background:hsla(5,100%,75%,.1);text-align:center;color:#ff8a80;font-size:1rem;display:block}.bb1c .icon{vertical-align:text-bottom;margin-right:.25rem;width:1rem;height:1rem}"}},859:function(e,t){e.exports={wrapper:"dd41",css:""}},860:function(e){e.exports={_from:"koot@0.8.8",_id:"koot@0.8.8",_inBundle:!1,_integrity:"sha512-42ZxDm19GNQpMx8c/lH49C66+zXBw6/BRsCrXHn7bwwoILdG6w3cwsGKkB7NClGfjLGYwnTjSQ5KN2mNw0cJYg==",_location:"/koot",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"koot@0.8.8",name:"koot",escapedName:"koot",rawSpec:"0.8.8",saveSpec:null,fetchSpec:"0.8.8"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/koot/-/koot-0.8.8.tgz",_shasum:"4170ed10aee4061964788eea6db8da201a86db4f",_spec:"koot@0.8.8",_where:"L:\\Projects\\WhoCallsTheFleet\\yuubari",author:{name:"dongwenxiao",email:"cs_victor@126.com"},bin:{"koot-build":"./bin/build.js","koot-start":"./bin/start.js","koot-dev":"./bin/dev.js","koot-analyze":"./bin/analyze.js"},bugs:{url:"https://github.com/cmux/koot/issues"},bundleDependencies:!1,contributors:[{name:"diablohu",email:"diablohudream@gmail.com",url:"http://diablohu.com"}],dependencies:{"@babel/core":"7.4.3","@babel/plugin-proposal-class-properties":"7.4.0","@babel/plugin-proposal-decorators":"7.4.0","@babel/plugin-proposal-object-rest-spread":"7.4.3","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/plugin-transform-regenerator":"7.4.3","@babel/plugin-transform-runtime":"7.4.3","@babel/polyfill":"7.4.3","@babel/preset-env":"7.4.3","@babel/preset-flow":"7.0.0","@babel/preset-react":"7.0.0","@babel/register":"7.4.0",acorn:"6.1.1","babel-loader":"8.0.5","cache-loader":"2.0.1",chalk:"2.4.2","classlist-polyfill":"1.2.0","cli-spinners":"2.0.0",commander:"2.20.0",cookie:"0.3.1","copy-webpack-plugin":"5.0.2",copyfiles:"2.1.0","css-loader":"2.1.1",debug:"4.1.1",ejs:"2.6.1","es5-shim":"4.5.12","extract-hoc":"0.0.5","file-loader":"3.0.1","fs-extra":"7.0.1","glob-promise":"3.4.0","html-webpack-plugin":"3.2.0",inquirer:"6.2.2","is-port-reachable":"2.0.0","is-url":"1.2.4","isomorphic-fetch":"2.2.1","js-cookie":"2.2.0","json-loader":"0.5.7",koa:"2.7.0","koa-better-http-proxy":"0.2.4","koa-body":"4.1.0","koa-convert":"1.2.0","koa-mount":"4.0.0","koa-proxies":"0.8.1","koa-router":"7.4.0","koa-static":"5.0.0","koot-webpack":"^0.8.8",less:"3.9.0","less-loader":"4.1.0",md5:"2.2.1","md5-file":"4.0.0","mini-css-extract-plugin":"0.5.0","npm-run-script":"0.0.4",opn:"5.5.0",ora:"3.4.0","os-locale":"3.1.0",pm2:"3.3.1",portfinder:"1.0.20",postcss:"7.0.14","postcss-loader":"3.0.0",react:"16.8.6","react-dom":"16.8.6","react-hot-loader":"4.8.2","react-redux":"5.1.1","react-router":"3.2.1","react-router-redux":"4.0.8",redux:"4.0.1","redux-thunk":"2.3.0",rimraf:"2.6.3","sass-loader":"7.1.0","sp-koa-views":"1.0.1","style-loader":"0.23.1","sync-request":"6.1.0",terminate:"2.1.2","thread-loader":"2.1.2","universal-alias-loader":"1.2.2","url-loader":"1.1.2",webpack:"4.29.6","webpack-bundle-analyzer":"3.1.0","webpack-config":"7.5.0","webpack-dev-middleware":"3.6.2","webpack-dev-server":"3.2.1","webpack-hot-middleware":"2.24.3",xmlify:"1.1.0",yargs:"13.2.2"},deprecated:!1,description:"Koot.js - React isomorphic framework created by CMUX",engines:{node:">=8.0.0"},gitHead:"56d52c9a8b424244b68ecd8bea1030b34b43febc",homepage:"https://github.com/cmux/koot",keywords:["react","style","import-style","import-css","isomorphic"],license:"Apache-2.0",main:"index.js",name:"koot",repository:{type:"git",url:"git+https://github.com/cmux/koot.git"},scripts:{"check-updates":"ncu -x react-router,koa-body,koa-compress,koa-json,koa-onerror,koa-static,koa-compose,koa-helmet,koa-mount",test:'echo "Run tests from root" && exit 1'},sideEffects:!1,version:"0.8.8"}},995:function(e,t,o){"use strict";o.r(t),function(e){var n=o(0),r=o.n(n),i=o(47),a=o(631),c=o(632),s=o(630),l=o(643),p=Object(i.a)({pageinfo:function(t){return Object(a.a)(t,{title:e("About")})},styles:o(859)})(function(t){var n=t.className;return r.a.createElement(c.a,{className:n},r.a.createElement(s.a,{component:"h2",children:e("About")}),r.a.createElement(l.a,null),r.a.createElement("p",null,"Based on ",r.a.createElement("a",{href:"https://github.com/cmux/koot",target:"_blank"},"Koot.js")," v",o(860).version,r.a.createElement("br",null),"Fork on ",r.a.createElement("a",{href:"https://github.com/TeamFleet/WhoCallsTheFleet-Yuubari",target:"_blank"},"GitHub")))});t.default=p}.call(this,o(93).default)}}]);