(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(t,e){t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&n.push({charset:r.charset}),void 0!==r.title&&(n.push({itemprop:"name",content:r.title}),n.push({name:"twitter:title",content:r.title}),n.push({name:"og:title",content:r.title})),void 0!==r.description&&(n.push({name:"description",content:r.description}),n.push({itemprop:"description",content:r.description}),n.push({itemprop:"twitter:description",content:r.description}),n.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(n.push({name:"image",content:r.image}),n.push({itemprop:"image",content:r.image}),n.push({itemprop:"twitter:image:src",content:r.image}),n.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(n.push({name:"twitter:player",content:r.video}),n.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&n.push({name:"og:url",content:r.url}),void 0!==r.siteName&&n.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&n.push({name:"og:locale",content:r.locale}),void 0!==r.type&&n.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&n.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&n.push({name:"twitter:site",content:o(r.twitter.siteCreator)}),void 0!==r.twitter.author&&n.push({name:"twitter:creator",content:o(r.twitter.author)}),void 0!==r.facebook.adminsId&&n.push({name:"fb:admins",content:o(r.facebook.adminsId)}),void 0!==r.facebook.appId&&n.push({name:"fb:app_id",content:o(r.facebook.appId)}),void 0!==r.returnArray&&(e=r.returnArray),e?n:n.map(function(t){var e="<meta";for(var o in t)e+=" ".concat(o,'="').concat(t[o],'"');return e+="/>"}).join("")};var o=function(t){return"string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t}},569:function(t,e,o){"use strict";var n=o(0),r=o.n(n),i=o(19),a=o.n(i),c=o(46);function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)o=i[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var u=Object(c.a)({styles:o(573)})(function(t){var e=t.className,o=t.classNameInner,n=t.component,i=t.tag,c=t.tagname,u=t.element,d=t.level,f=t.children,m=t.title,b=t.type,h=t.inherit,y=p(t,["className","classNameInner","component","tag","tagname","element","level","children","title","type","inherit"]),g=n||i||c||u||(void 0===d?void 0:"h".concat(d))||"div",v=e.split(" ")[0];y.children=f;var k=Array.isArray(f)?f[0]:f;switch("string"==typeof m?y["data-text"]=m:"string"==typeof k?y["data-text"]=k:"object"===l(k)&&"object"===l(k.props)&&"string"==typeof k.props.value&&(y["data-text"]=k.props.value),h&&(y["data-title-is-inherit"]=""),b){case"line-append":return r.a.createElement("div",{className:e,"data-title-type":b,"data-title-tag":g},r.a.createElement(g,s({className:a()([v+"-child",o])},y)))}return r.a.createElement(g,s({"data-title-type":b,className:e},y))});e.a=u},570:function(t,e,o){"use strict";(function(t){var n=o(234),r=o.n(n),i=o(4),a=o(574);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=function e(o,n){if("object"===c(o)&&void 0===n)return e(i.d.getState(),o);if("object"!==c(o))return{};var s=o.localeId,l=t("title")+"",p=o.server.origin,u=Object.assign({uri:"","twitter:card":"summary_large_image"},n),d=u.uri,f=void 0===d?"undefined"!=typeof location?location.pathname:void 0:d,m=u.title,b=void 0===m?l:m,h=u.subtitle,y=u.description,g=u.image;if("object"===c(f)&&(f=f.pathname),"/"==f.substr(0,1)&&(f=f.substr(1)),b){Array.isArray(b)&&(b=b.filter(function(t){return void 0!==t&&""!==t}));var v=Array.isArray(b)&&b.length?b[0]:b;b=Array.isArray(b)?b.join(" / "):b,void 0!==h?i.d.dispatch(Object(a.a)({main:v,sub:h})):i.d.dispatch(Object(a.a)(v)),b!==l&&(b=b.replace(/\n/g,"")+" - "+l)}return y&&(y=y.replace(/\n/g,"")),"/"!==p.substr(p.length-1,1)&&(p+="/"),{title:b,metas:r()({title:b,description:y,image:g||p+"launcher.jpg",url:p+f,type:"website",locale:s,siteName:l,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}}}).call(this,o(90).default)},572:function(t,e,o){"use strict";var n,r=o(0),i=o.n(r),a=o(46);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var f={},m=Object(a.a)({connect:function(t){return{locationBeforeTransitions:t.routing.locationBeforeTransitions}}})(n=function(t){function e(){var t,o,n,r,i,a,c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var l=arguments.length,u=new Array(l),f=0;f<l;f++)u[f]=arguments[f];return n=this,o=!(r=(t=p(e)).call.apply(t,[this].concat(u)))||"object"!==s(r)&&"function"!=typeof r?d(n):r,i=d(d(o)),c=!1,(a="updating")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,o}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,i.a.Component),o=e,(n=[{key:"restoreScrollY",value:function(){void 0!==f[this.props.pathname]&&(window.scrollTo(void 0,f[this.props.pathname]),delete f[this.props.pathname])}},{key:"shouldComponentUpdate",value:function(t){return"object"===s(this.props.locationBeforeTransitions)&&"object"===s(t.locationBeforeTransitions)&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(f[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}},{key:"componentDidMount",value:function(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete f[this.props.pathname]}},{key:"componentDidUpdate",value:function(){this.updating=!1}},{key:"render",value:function(){var t=c({},this.props);return["locationBeforeTransitions","rendering","dispatch"].forEach(function(e){return delete t[e]}),i.a.createElement("div",t)}}])&&l(o.prototype,n),r&&l(o,r),e}())||n;e.a=m},573:function(t,e){t.exports={wrapper:"f9f7",css:'.f9f7{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;margin-bottom:1rem}.f9f7[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7:last-child{margin-bottom:0}.f9f7[data-title-is-inherit] .f9f7[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.f9f7[data-title-type=inline-block]{display:inline-block}.f9f7[data-title-type=line-append]{overflow:hidden;background:none transparent;-webkit-background-clip:initial;-webkit-text-fill-color:initial}.f9f7[data-title-type=line-append] .f9f7-child{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;-webkit-text-fill-color:transparent;position:relative;padding-right:1em;display:inline-block}.f9f7[data-title-type=line-append] .f9f7-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.f9f7[data-title-type=line-append] .f9f7-child:after{content:"";position:absolute;top:50%;left:100%;width:100vw;height:.05rem;background:rgba(237,240,242,.15)}.f9f7-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}'}},574:function(t,e,o){"use strict";var n=o(3);o.d(e,"a",function(){return r});var r=function(t){return function(e){e(function(t){return{type:n.O,title:t}}(t))}}},772:function(t,e){t.exports={wrapper:"dd410",css:""}},773:function(t){t.exports={_from:"koot@0.8.0-alpha.12",_id:"koot@0.8.0-alpha.12",_inBundle:!1,_integrity:"sha512-N5vWOatrqXa7AKp8noPqdVOtBpu2QsfNTjrCNEcgS0H2W9OIXvxUNCOY+EFMhKo0B5o2K7WyOtgEHjrsu/Rvnw==",_location:"/koot",_phantomChildren:{ms:"2.1.1"},_requested:{type:"version",registry:!0,raw:"koot@0.8.0-alpha.12",name:"koot",escapedName:"koot",rawSpec:"0.8.0-alpha.12",saveSpec:null,fetchSpec:"0.8.0-alpha.12"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/koot/-/koot-0.8.0-alpha.12.tgz",_shasum:"07499a86360d3bb072b5007712b8a0259662d877",_spec:"koot@0.8.0-alpha.12",_where:"L:\\Projects\\WhoCallsTheFleet\\yuubari",author:{name:"dongwenxiao",email:"cs_victor@126.com"},bin:{"koot-build":"./bin/build.js","koot-start":"./bin/start.js","koot-dev":"./bin/dev.js","koot-analyze":"./bin/analyze.js"},bugs:{url:"https://github.com/cmux/koot/issues"},bundleDependencies:!1,contributors:[{name:"diablohu",email:"diablohudream@gmail.com",url:"http://diablohu.com"}],dependencies:{"@babel/core":"7.2.2","@babel/plugin-proposal-class-properties":"7.2.3","@babel/plugin-proposal-decorators":"7.2.3","@babel/plugin-proposal-object-rest-spread":"7.2.0","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/plugin-transform-regenerator":"7.0.0","@babel/plugin-transform-runtime":"7.2.0","@babel/polyfill":"7.2.5","@babel/preset-env":"7.2.3","@babel/preset-flow":"7.0.0","@babel/preset-react":"7.0.0","@babel/register":"7.0.0",acorn:"6.0.4",autoprefixer:"9.4.3","babel-loader":"8.0.4",chalk:"2.4.1","classlist-polyfill":"1.2.0","cli-spinners":"1.3.1",commander:"2.19.0",cookie:"0.3.1","copy-webpack-plugin":"4.6.0",copyfiles:"2.1.0","css-loader":"2.0.2",debug:"4.1.1",ejs:"2.6.1","es5-shim":"4.5.12","file-loader":"3.0.1","fs-extra":"7.0.1","glob-promise":"3.4.0","html-webpack-plugin":"3.2.0",inquirer:"6.2.1","is-port-reachable":"2.0.0","is-url":"1.2.4","isomorphic-fetch":"2.2.1","js-cookie":"2.2.0","json-loader":"0.5.7",koa:"2.6.2","koa-better-http-proxy":"0.2.4","koa-body":"4.0.6","koa-convert":"1.2.0","koa-mount":"4.0.0","koa-proxies":"0.8.1","koa-router":"7.4.0","koa-static":"5.0.0","koot-webpack":"^0.8.0-alpha.12",less:"3.9.0","less-loader":"4.1.0",md5:"2.2.1","md5-file":"4.0.0","mini-css-extract-plugin":"0.5.0","npm-run-script":"0.0.4",opn:"5.4.0",ora:"3.0.0","os-locale":"3.0.1",pm2:"3.2.4",portfinder:"1.0.20",postcss:"7.0.7","postcss-loader":"3.0.0",react:"16.7.0","react-dom":"16.7.0","react-hot-loader":"4.6.3","react-redux":"5.1.1","react-router":"3.2.1","react-router-redux":"4.0.8",redux:"4.0.1","redux-thunk":"2.3.0",rimraf:"2.6.2","sass-loader":"7.1.0","sp-koa-views":"1.0.1","style-loader":"0.23.1","sync-request":"6.0.0",terminate:"2.1.2","universal-alias-loader":"1.2.2","url-loader":"1.1.2",webpack:"4.28.2","webpack-bundle-analyzer":"3.0.3","webpack-config":"7.5.0","webpack-dev-middleware":"3.4.0","webpack-dev-server":"3.1.14","webpack-hot-middleware":"2.24.3",xmlify:"1.1.0",yargs:"12.0.5"},deprecated:!1,description:"Koot.js - React isomorphic framework created by CMUX",engines:{node:">=8.0.0"},gitHead:"a34705b6c1e98b2fc12986124d7409eb5e04462c",homepage:"https://github.com/cmux/koot",keywords:["react","style","import-style","import-css","isomorphic"],license:"Apache-2.0",main:"index.js",name:"koot",repository:{type:"git",url:"git+https://github.com/cmux/koot.git"},scripts:{"check-updates":"ncu -x react-router,koa-body,koa-compress,koa-json,koa-onerror,koa-static,koa-compose,koa-helmet,koa-mount"},sideEffects:!1,version:"0.8.0-alpha.12"}},924:function(t,e,o){"use strict";o.r(e),function(t){var n=o(0),r=o.n(n),i=o(46),a=o(570),c=o(572),s=o(569),l=Object(i.a)({pageinfo:function(e){return Object(a.a)(e,{title:t("nav.about")})},styles:o(772)})(function(e){var n=e.className;return r.a.createElement(c.a,{className:n},r.a.createElement(s.a,{component:"h2",children:t("nav.about")}),r.a.createElement("p",null,r.a.createElement("i",null,t("under_construction"),"...")),r.a.createElement("p",null,"Based on ",r.a.createElement("a",{href:"https://github.com/cmux/koot",target:"_blank"},"Koot.js")," v",o(773).version,r.a.createElement("br",null),"Fork on ",r.a.createElement("a",{href:"https://github.com/TeamFleet/WhoCallsTheFleet-Yuubari",target:"_blank"},"GitHub")))});e.default=l}.call(this,o(90).default)}}]);