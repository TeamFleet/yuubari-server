(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{776:function(e,t){e.exports={wrapper:"dd411",css:""}},777:function(e){e.exports={_from:"koot@0.8.0-alpha.10",_id:"koot@0.8.0-alpha.10",_inBundle:!1,_integrity:"sha512-RzrnrDaHvXj26t3Tn5jLxVASP1Mn8zpZBEWNjJ5X1wE1mwC0enRXtzyuEvUsHlRQ7SAiy5MFDdGsT9HrpdldHg==",_location:"/koot",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"koot@0.8.0-alpha.10",name:"koot",escapedName:"koot",rawSpec:"0.8.0-alpha.10",saveSpec:null,fetchSpec:"0.8.0-alpha.10"},_requiredBy:["/"],_resolved:"https://registry.npmjs.org/koot/-/koot-0.8.0-alpha.10.tgz",_shasum:"f77a6b0a4601b12e34ec862646b7b3b85ce1c5f8",_spec:"koot@0.8.0-alpha.10",_where:"L:\\Projects\\WhoCallsTheFleet\\yuubari",author:{name:"dongwenxiao",email:"cs_victor@126.com"},bin:{"koot-build":"./bin/build.js","koot-start":"./bin/start.js","koot-dev":"./bin/dev.js","koot-analyze":"./bin/analyze.js"},bugs:{url:"https://github.com/cmux/koot/issues"},bundleDependencies:!1,contributors:[{name:"diablohu",email:"diablohudream@gmail.com",url:"http://diablohu.com"}],dependencies:{"@babel/core":"7.2.2","@babel/plugin-proposal-class-properties":"7.2.3","@babel/plugin-proposal-decorators":"7.2.3","@babel/plugin-proposal-object-rest-spread":"7.2.0","@babel/plugin-syntax-dynamic-import":"7.2.0","@babel/plugin-transform-regenerator":"7.0.0","@babel/plugin-transform-runtime":"7.2.0","@babel/polyfill":"7.2.3","@babel/preset-env":"7.2.3","@babel/preset-flow":"7.0.0","@babel/preset-react":"7.0.0","@babel/register":"7.0.0",acorn:"6.0.4",autoprefixer:"9.4.3","babel-loader":"8.0.4",chalk:"2.4.1","classlist-polyfill":"1.2.0","cli-spinners":"1.3.1",commander:"2.19.0",cookie:"0.3.1","copy-webpack-plugin":"4.6.0",copyfiles:"2.1.0","css-loader":"2.0.1",debug:"4.1.0",ejs:"2.6.1","es5-shim":"4.5.12","file-loader":"3.0.1","fs-extra":"7.0.1","glob-promise":"3.4.0","html-webpack-plugin":"3.2.0",inquirer:"6.2.1","is-port-reachable":"2.0.0","is-url":"1.2.4","isomorphic-fetch":"2.2.1","js-cookie":"2.2.0","json-loader":"0.5.7",koa:"2.6.2","koa-better-http-proxy":"0.2.4","koa-body":"4.0.4","koa-convert":"1.2.0","koa-mount":"4.0.0","koa-proxies":"0.8.1","koa-router":"7.4.0","koa-static":"5.0.0","koot-webpack":"^0.8.0-alpha.10",less:"3.9.0","less-loader":"4.1.0",md5:"2.2.1","md5-file":"4.0.0","mini-css-extract-plugin":"0.5.0","npm-run-script":"0.0.4",opn:"5.4.0",ora:"3.0.0","os-locale":"3.0.1",pm2:"3.2.4",portfinder:"1.0.20",postcss:"7.0.7","postcss-loader":"3.0.0",react:"16.7.0","react-dom":"16.7.0","react-hot-loader":"4.6.3","react-redux":"5.1.1","react-router":"3.2.1","react-router-redux":"4.0.8",redux:"4.0.1","redux-thunk":"2.3.0",rimraf:"2.6.2","sass-loader":"7.1.0","sp-css-import":"4.0.0","sp-koa-views":"1.0.1","style-loader":"0.23.1","sync-request":"6.0.0",terminate:"2.1.2","universal-alias-loader":"1.2.2","url-loader":"1.1.2",webpack:"4.28.1","webpack-bundle-analyzer":"3.0.3","webpack-config":"7.5.0","webpack-dev-middleware":"3.4.0","webpack-dev-server":"3.1.10","webpack-hot-middleware":"2.24.3",xmlify:"1.1.0",yargs:"12.0.5"},deprecated:!1,description:"Koot.js - React isomorphic framework created by CMUX",engines:{node:">=8.0.0"},gitHead:"1eb89226f094386fbefc31fdddcf67f30a069d17",homepage:"https://github.com/cmux/koot",keywords:["react","style","import-style","import-css","isomorphic"],license:"Apache-2.0",main:"index.js",name:"koot",repository:{type:"git",url:"git+https://github.com/cmux/koot.git"},scripts:{"check-updates":"ncu -x react-router,koa-body,koa-compress,koa-json,koa-onerror,koa-static,koa-compose,koa-helmet,koa-mount"},sideEffects:!1,version:"0.8.0-alpha.10"}},925:function(e,t,o){"use strict";o.r(t),function(e){o.d(t,"default",function(){return k});var r,a=o(0),n=o.n(a),i=o(38),s=o(160),c=o(239),l=o(573),p=o(574),u=o(572);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=Object(i.connect)()(r=Object(c.a)(function(t){return Object(l.a)(t,{title:e("nav.about")})})(r=Object(s.a)(o(776))(r=function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,f(r).apply(this,arguments))}var a,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,n.a.Component),a=r,(i=[{key:"render",value:function(){return n.a.createElement(p.a,{className:this.props.className},n.a.createElement(u.a,{component:"h2",children:e("nav.about")}),n.a.createElement("p",null,n.a.createElement("i",null,e("under_construction"),"...")),n.a.createElement("p",null,"Based on ",n.a.createElement("a",{href:"https://github.com/cmux/koot",target:"_blank"},"Koot.js")," v",o(777).version,n.a.createElement("br",null),"Fork on ",n.a.createElement("a",{href:"https://github.com/TeamFleet/WhoCallsTheFleet-Yuubari",target:"_blank"},"GitHub")))}}])&&d(a.prototype,i),s&&d(a,s),r}())||r)||r)||r}.call(this,o(91).default)}}]);