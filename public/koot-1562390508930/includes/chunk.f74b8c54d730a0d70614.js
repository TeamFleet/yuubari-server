(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1126:function(e,t,o){"use strict";o.r(t),function(e){var r=o(0),n=o.n(r),i=o(55),a=o(763),c=o(764),s=o(761),l=o(775),p=Object(i.a)({pageinfo:function(t){return Object(a.a)(t,{title:e("About")})},styles:o(990)})(function(t){var r=t.className;return n.a.createElement(c.a,{className:r},n.a.createElement(s.a,{component:"h2",children:e("About")}),n.a.createElement(l.a,null),n.a.createElement("p",null,"Based on ",n.a.createElement("a",{href:"https://github.com/cmux/koot",target:"_blank"},"Koot.js")," v",o(991).version,n.a.createElement("br",null),"Fork on ",n.a.createElement("a",{href:"https://github.com/TeamFleet/WhoCallsTheFleet-Yuubari",target:"_blank"},"GitHub")))});t.default=p}.call(this,o(106).default)},294:function(e,t){e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[],n=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===n.title&&document.title&&(n.title=document.title),void 0===n.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(n.url=location.href)),void 0!==n.charset&&r.push({charset:n.charset}),void 0!==n.title&&(r.push({itemprop:"name",content:n.title}),r.push({name:"twitter:title",content:n.title}),r.push({name:"og:title",content:n.title})),void 0!==n.description&&(r.push({name:"description",content:n.description}),r.push({itemprop:"description",content:n.description}),r.push({itemprop:"twitter:description",content:n.description}),r.push({itemprop:"og:description",content:n.description})),void 0!==n.image&&(r.push({name:"image",content:n.image}),r.push({itemprop:"image",content:n.image}),r.push({itemprop:"twitter:image:src",content:n.image}),r.push({itemprop:"og:image",content:n.image})),void 0!==n.video&&(r.push({name:"twitter:player",content:n.video}),r.push({itemprop:"og:video",content:n.video})),void 0!==n.url&&r.push({name:"og:url",content:n.url}),void 0!==n.siteName&&r.push({name:"og:site_name",content:n.siteName}),void 0!==n.locale&&r.push({name:"og:locale",content:n.locale}),void 0!==n.type&&r.push({name:"og:type",content:n.type}),void 0!==n.twitter.card&&r.push({name:"twitter:card",content:n.twitter.card}),void 0!==n.twitter.siteCreator&&r.push({name:"twitter:site",content:o(n.twitter.siteCreator)}),void 0!==n.twitter.author&&r.push({name:"twitter:creator",content:o(n.twitter.author)}),void 0!==n.facebook.adminsId&&r.push({name:"fb:admins",content:o(n.facebook.adminsId)}),void 0!==n.facebook.appId&&r.push({name:"fb:app_id",content:o(n.facebook.appId)}),void 0!==n.returnArray&&(t=n.returnArray),t?r:r.map(function(e){var t="<meta";for(var o in e)t+=" ".concat(o,'="').concat(e[o],'"');return t+="/>"}).join("")};var o=function(e){return"string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e}},761:function(e,t,o){"use strict";var r=o(0),n=o.n(r),i=o(21),a=o.n(i),c=o(55);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=Object(c.a)({styles:o(766)})(function(e){var t=e.className,o=e.classNameInner,r=e.component,i=e.tag,c=e.tagname,u=e.element,d=e.level,f=e.children,m=e.title,b=e.type,h=e.inherit,y=p(e,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=r||i||c||u||(void 0===d?void 0:"h".concat(d))||"div",v=t.split(" ")[0];y.children=f;var k=Array.isArray(f)?f[0]:f;switch("string"==typeof m?y["data-text"]=m:"string"==typeof k?y["data-text"]=k:"object"===l(k)&&"object"===l(k.props)&&"string"==typeof k.props.value&&(y["data-text"]=k.props.value),h&&(y["data-title-is-inherit"]=""),b){case"line-append":return n.a.createElement("div",{className:t,"data-title-type":b,"data-title-tag":g},n.a.createElement(g,s({className:a()([v+"-child",o])},y)))}return n.a.createElement(g,s({"data-title-type":b,className:t},y))});t.a=u},763:function(e,t,o){"use strict";(function(e){var r=o(294),n=o.n(r),i=o(5),a=o(768);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function t(o,r){if("object"===c(o)&&void 0===r)return t(i.e.getState(),o);if("object"!==c(o))return{};var s=o.localeId,l=e("Who Calls the Fleet")+"",p=o.server.origin,u=Object.assign({uri:"","twitter:card":"summary_large_image"},r),d=u.uri,f=void 0===d?"undefined"!=typeof location?location.pathname:void 0:d,m=u.title,b=void 0===m?l:m,h=u.subtitle,y=u.description,g=u.image;if("object"===c(f)&&(f=f.pathname),"/"==f.substr(0,1)&&(f=f.substr(1)),b){Array.isArray(b)&&(b=b.filter(function(e){return void 0!==e&&""!==e}));var v=Array.isArray(b)&&b.length?b[0]:b;b=Array.isArray(b)?b.join(" / "):b,void 0!==h?i.e.dispatch(Object(a.a)({main:v,sub:h})):i.e.dispatch(Object(a.a)(v)),b!==l&&(b=b.replace(/\n/g,"")+" - "+l)}return y&&(y=y.replace(/\n/g,"")),"/"!==p.substr(p.length-1,1)&&(p+="/"),{title:b,metas:n()({title:b,description:y,image:g||p+"launcher.jpg",url:p+f,type:"website",locale:s,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,o(106).default)},764:function(e,t,o){"use strict";var r,n=o(0),i=o.n(n),a=o(55);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={},m=Object(a.a)({connect:function(e){return{locationBeforeTransitions:e.routing.locationBeforeTransitions}}})(r=function(e){function t(){var e,o,r,n,i,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,d=new Array(l),f=0;f<l;f++)d[f]=arguments[f];return r=this,o=!(n=(e=p(t)).call.apply(e,[this].concat(d)))||"object"!==s(n)&&"function"!=typeof n?u(r):n,i=u(o),c=!1,(a="updating")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,o}var o,r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,i.a.Component),o=t,(r=[{key:"restoreScrollY",value:function(){void 0!==f[this.props.pathname]&&(window.scrollTo(void 0,f[this.props.pathname]),delete f[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(e){return"object"===s(this.props.locationBeforeTransitions)&&"object"===s(e.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(f[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete f[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var e=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(t){return delete e[t]}),i.a.createElement("div",e)}}])&&l(o.prototype,r),n&&l(o,n),t}())||r;t.a=m},766:function(e,t){e.exports={wrapper:"f9f7c40f",css:'.f9f7c40f{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7c40f[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f:last-child{margin-bottom:0}.f9f7c40f[data-title-is-inherit] .f9f7c40f[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7c40f[data-title-type=inline-block]{display:inline-block}.f9f7c40f[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7c40f[data-title-type=line-append] .f9f7c40f-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7c40f-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},768:function(e,t,o){"use strict";var r=o(3);o.d(t,"a",function(){return n});var n=function(e){return function(t){t(function(e){return{type:r.O,title:e}}(e))}}},775:function(e,t,o){"use strict";(function(e){var r=o(0),n=o.n(r),i=o(55),a=o(48),c=Object(i.a)({styles:o(776)})(function(t){var o=t.className,r=t.component,i=t.tag,c=t.element,s=r||i||c||"span";return n.a.createElement(s,{className:o},n.a.createElement(a.a,{icon:"warning2",className:"icon"}),e("Under Construction"))});t.a=c}).call(this,o(106).default)},776:function(e,t){e.exports={wrapper:"bb1c98e9",css:".bb1c98e9{border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;padding:.5rem;background:hsla(5,100%,75%,.1);text-align:center;color:#ff8a80;font-size:1rem;display:block}.bb1c98e9 .icon{vertical-align:text-bottom;margin-right:.25rem;width:1rem;height:1rem}"}},990:function(e,t){e.exports={wrapper:"dd41d8cd3",css:""}},991:function(e){e.exports={name:"koot",version:"0.10.1",description:"Koot.js - React isomorphic framework created by CMUX",main:"index.js",sideEffects:!1,bin:{"koot-build":"./bin/build.js","koot-start":"./bin/start.js","koot-dev":"./bin/dev.js","koot-analyze":"./bin/analyze.js"},scripts:{"check-updates":"ncu -x react-router,koa-body,koa-compress,koa-json,koa-onerror,koa-static,koa-compose,koa-helmet,koa-mount",test:'echo "Run tests from root" && exit 1'},repository:{type:"git",url:"https://github.com/cmux/koot"},keywords:["react","style","import-style","import-css","isomorphic"],license:"Apache-2.0",author:{name:"dongwenxiao",email:"cs_victor@126.com"},contributors:[{name:"diablohu",email:"diablohudream@gmail.com",url:"http://diablohu.com"}],bugs:{url:"https://github.com/cmux/koot/issues"},homepage:"https://github.com/cmux/koot",engines:{node:">=8.9.0"},dependencies:{"@babel/core":"7.5.0","@babel/plugin-proposal-class-properties":"7.5.0","@babel/plugin-proposal-decorators":"7.4.4","@babel/plugin-proposal-object-rest-spread":"7.5.0","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/plugin-transform-regenerator":"7.4.5","@babel/plugin-transform-runtime":"7.5.0","@babel/polyfill":"7.4.4","@babel/preset-env":"7.5.0","@babel/preset-flow":"7.0.0","@babel/preset-react":"7.0.0","@babel/preset-typescript":"7.3.3","@babel/register":"7.4.4","@hot-loader/react-dom":"16.8.6","@types/node":"12.0.12","@types/react":"16.8.23","@types/react-dom":"16.8.4","@types/react-redux":"7.1.1","@types/react-router":"3.0.8","babel-loader":"8.0.6","cache-loader":"4.0.1",chalk:"2.4.2","classlist-polyfill":"1.2.0","cli-spinners":"2.2.0",commander:"2.20.0",cookie:"0.4.0","copy-webpack-plugin":"5.0.3",copyfiles:"2.1.0","css-loader":"3.0.0",debug:"4.1.1",ejs:"2.6.2","es5-shim":"4.5.13",execa:"2.0.3","extract-hoc":"0.0.5","file-loader":"4.0.0","fs-extra":"8.1.0",glob:"7.1.4","glob-promise":"3.4.0","html-webpack-plugin":"3.2.0",inquirer:"6.4.1","is-port-reachable":"2.0.1","is-url":"1.2.4","isomorphic-fetch":"2.2.1","js-cookie":"2.2.0","json-loader":"0.5.7",koa:"2.7.0","koa-better-http-proxy":"0.2.4","koa-body":"4.1.0","koa-convert":"1.2.0","koa-helmet":"4.2.0","koa-mount":"4.0.0","koa-proxies":"0.8.1","koa-router":"7.4.0","koa-static":"5.0.0","koot-webpack":"^0.10.1",less:"3.9.0","less-loader":"5.0.0",lodash:"4.17.11",md5:"2.2.1","md5-file":"4.0.0","mini-css-extract-plugin":"0.7.0","npm-run-script":"0.0.4",open:"6.4.0",ora:"3.4.0","os-locale":"4.0.0",pm2:"3.5.1",portfinder:"1.0.20",postcss:"7.0.17","postcss-loader":"3.0.0",react:"16.8.6","react-dom":"16.8.6","react-hot-loader":"4.12.3","react-redux":"5.1.1","react-router":"3.2.1","react-router-redux":"4.0.8",redux:"4.0.1","redux-thunk":"2.3.0",rimraf:"2.6.3","sass-loader":"7.1.0","sp-koa-views":"1.0.1","style-loader":"0.23.1","sync-request":"6.1.0",terminate:"2.1.2","thread-loader":"2.1.2",typescript:"3.5.2","universal-alias-loader":"1.2.2","url-loader":"2.0.1",webpack:"4.35.2","webpack-bundle-analyzer":"3.3.2","webpack-config":"7.5.0","webpack-dev-middleware":"3.7.0","webpack-dev-server":"3.7.2","webpack-hot-middleware":"2.25.0",xmlify:"1.1.0",yargs:"13.2.4"},gitHead:"987830e3e8d918c1af9472760e7a51b95957fd4f"}}}]);