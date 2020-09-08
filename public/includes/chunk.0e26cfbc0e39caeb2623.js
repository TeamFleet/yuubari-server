(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1055:function(e){e.exports=JSON.parse('{"name":"whocallsthefleet-database","version":"20200908.0.0","description":"NeDB database for Who Calls the Fleet (https://fleet.moe)","author":{"name":"Diablohu","email":"diablohudream@gmail.com","url":"http://diablohu.com"},"license":"MIT","repository":{"type":"git","url":"https://github.com/Diablohu/WhoCallsTheFleet-DB"},"scripts":{"get:api:start2":"node ./parser/get_api_start2.js","get:pics:ships":"node ./parser/get_pics_ships.js","get:pics:equipments":"node ./parser/get_pics_equipments.js"},"devDependencies":{"kckit":"^1.2.1","fs-extra":"^3.0.1","nedb-promise":"^2.0.1","request":"^2.81.0","jpexs-flash-decompiler":"^0.0.4","json-pretty":"^0.0.1","yargs":"^8.0.2","eslint":"^4.1.1"}}')},1056:function(e){e.exports=JSON.parse('{"name":"kckit","main":"index.js","version":"1.49.0","description":"Javascript library for KanColle","sideEffects":false,"author":{"name":"Diablohu","email":"diablohudream@gmail.com","url":"http://diablohu.com"},"license":"MIT","repository":{"type":"git","url":"https://github.com/TeamFleet/KCKit"},"scripts":{"eslint":"eslint \\"!(node_modules)/**/*.+(js|jsx)\\"","test":"jest","test:base":"jest ./test/base.test.js","test:check":"jest ./test/check.test.js","test:calculate":"jest ./test/calculate.test.js","up":"yarn upgrade-interactive --latest"},"dependencies":{"camelcase":"6.0.0"},"devDependencies":{"babel-eslint":"10.1.0","eslint":"^7.7.0","eslint-config-koot":"^1.7.1","husky":"^4.2.5","jest":"26.4.2","lint-staged":"^10.2.13","prettier":"^2.1.1","react":"^16.13.1","whocallsthefleet-database":"20200829.0.0"},"jest":{"testEnvironment":"node"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.{js,jsx,ts,tsx,cjs,mjs}":["eslint --fix","prettier --write","git add"],"*.{json,md,css,less,sass,scss}":["prettier --write","git add"]}}')},1178:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var r=a.p+"includes/asset.23694e13efe902e636cb6c303d683ba7.png";const l="aa6d0026",n='.aa6d0026 hr{border:0;height:.1rem;background:rgba(237,240,242,.15);z-index:-2}.aa6d0026-title{padding:1em 0;position:relative}.aa6d0026-title .title{font-size:2.5rem;margin-bottom:0;background:linear-gradient(180deg,#ffcc80 0,#ffd180 14%,#fff 40%,#ffab40 62%,#ffd180 77%,#ffcc80)}.aa6d0026-title .sub-title{margin-top:.5em;background:none;-webkit-background-clip:unset!important;-webkit-text-fill-color:unset;color:#ffe0b2}.aa6d0026-title .sub-title[data-text]:before{content:unset}.aa6d0026-title:after{content:"";position:absolute;top:-2em;bottom:-2em;right:-1em;width:100%;z-index:-1;background:url("'+r+'") no-repeat 100% 0;background-size:contain}.aa6d0026-article,.aa6d0026-footer{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap}@media (max-width:660px){.aa6d0026-article,.aa6d0026-footer{display:block}}.aa6d0026-block{-webkit-flex:1;flex:1}@media (max-width:660px){.aa6d0026-block{margin-bottom:3em;line-height:2em}}.aa6d0026-article>.main{-webkit-flex:2;flex:2}@media (max-width:660px){.aa6d0026-article+hr{display:none}}.aa6d0026-article .list{color:rgba(157,180,191,.9);list-style:none;padding-left:0}.aa6d0026-article .list a{font-style:italic}.aa6d0026-article .list span{display:inline-block;margin-left:.5em}';t.a={wrapper:l,css:n}},1184:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),l=a.n(r),n=a(8),s=a(1055),i=a(1056),o=a(999),c=a(348),m=a(179),d=a(997),u=a(998),p=a(81),f=a(1178);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,l=!1,n=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{r||null==i.return||i.return()}finally{if(l)throw n}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var g=Object(n.a)({pageinfo:function(e){return Object(c.a)(e)},styles:f.a})((function(e){var t=e.className;return l.a.createElement(m.a,{className:t},l.a.createElement(d.a,null,l.a.createElement("div",{className:f.b+"-title"},l.a.createElement(p.a,{level:"1",className:"title"},"Who Calls the Fleet"),l.a.createElement(p.a,{level:"3",className:"sub-title"},"A KanColle Toolkit")),l.a.createElement("hr",null),l.a.createElement("article",{className:f.b+"-article"},l.a.createElement("div",{className:f.b+"-block main"},l.a.createElement(p.a,{level:"2"},"Latest Update"),l.a.createElement(u.a,{className:"content",source:"_".concat("under_construction","_")})),l.a.createElement("div",{className:f.b+"-block"},l.a.createElement(p.a,{level:"3"},"Versions"),l.a.createElement("ul",{className:"list"},[["Database","https://github.com/TeamFleet/WhoCallsTheFleet-DB",s.version],["KCKit","https://github.com/TeamFleet/KCKit",i.version],["Koot.js","https://koot.js.org/",o.version]].map((function(e){var t=b(e,3),a=t[0],r=t[1],n=t[2];return l.a.createElement("li",null,l.a.createElement("a",{className:"color-alt",href:r,target:"_blank",rel:"noopener noreferrer"},a),l.a.createElement("span",null,n))}))))),l.a.createElement("hr",null),l.a.createElement("footer",{className:f.b+"-footer"},l.a.createElement("div",{className:f.b+"-block"},l.a.createElement(p.a,{level:"3"},"Support")),l.a.createElement("div",{className:f.b+"-block"},l.a.createElement(p.a,{level:"3"},"Contact")),l.a.createElement("div",{className:f.b+"-block"},l.a.createElement(p.a,{level:"3"},"Donate")))))}));t.default=g}.call(this,a(33).default)}}]);