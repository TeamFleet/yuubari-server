(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1000:function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(0),i=n.n(o),a=n(19),c=n.n(a),s=n(50),u=n(674),l=n(634),f=n(635),d=n(680),b=n(66),m=n(652),p=n(632),h=n(717),y=n(693);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=Object(s.a)({pageinfo:function(t){return Object(l.a)(t,{title:e("nav.fleets")})}})(function(){return i.a.createElement(f.a,null,i.a.createElement(E,null))});t.default=j;var E=Object(s.a)({connect:!0,styles:n(870)})(r=function(e){function t(){var e,n,r,o,i,a,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,u=new Array(s),l=0;l<s;l++)u[l]=arguments[l];return r=this,n=!(o=(e=w(t)).call.apply(e,[this].concat(u)))||"object"!==v(o)&&"function"!=typeof o?O(r):o,i=O(n),c={ready:!1},(a="state")in i?Object.defineProperty(i,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[a]=c,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.props.dispatch(Object(u.f)()),new Promise(function(e){return setTimeout(function(){return e()},self.isAppReadyFull?0:2e3)})]).then(function(){e.setState({ready:!0})})}},{key:"render",value:function(){if(!this.state.ready)return i.a.createElement(d.a,{className:c()([this.props.className,"is-initializing"])},i.a.createElement(h.a,{className:"loader"}));var e=this.props.className;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,{className:e+"-header"}),i.a.createElement("div",{className:e},i.a.createElement(N,{className:e+"-list"})))}}])&&g(n.prototype,r),o&&g(n,o),t}())||r,x=Object(s.a)({connect:!0})(function(t){var n=t.className,r=t.dispatch;return i.a.createElement(y.a,{className:n,main:i.a.createElement(i.a.Fragment,null,e("under_construction"),i.a.createElement(m.a,{children:"NEW BUILD",onClick:function(){return r(Object(u.k)(!0))}}))})}),N=Object(s.a)({connect:function(e){return{builds:e.fleets.builds}}})(function(t){var n=t.builds,r=t.dispatch;n=n.filter(function(e){return!!Object(u.g)(e)});var o=Array.isArray(n)&&n.length>0;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{component:"h2",children:e("under_construction")}),o&&n.map(function(e){return i.a.createElement("div",{key:e._id},i.a.createElement(b.Link,{to:Object(u.e)(e)},e._id))}),!o&&i.a.createElement("div",null,i.a.createElement(m.a,{children:"NEW BUILD",onClick:function(){return r(Object(u.k)(!0))}})))})}.call(this,n(97).default)},652:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(66),a=n(19),c=n.n(a),s=n(50);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=Object(s.a)({styles:n(653)})(function(e){var t,n,r=e.className,a=e.children,s=e.tag,d=e.component,b=e.href,m=e.link,p=e.to,h=e.type,y=e.color,v=e.size,g=e.state,w=e.onClick,O=f(e,["className","children","tag","component","href","link","to","type","color","size","state","onClick"]);n=s||(d||(p?i.Link:b||m?"a":"button"));var k="disable"===g||"disabled"===g,j=h||("button"===n?"button":void 0),E=b||m||void 0;return o.a.createElement(n,u({className:c()(["button",r],(t={},l(t,"mod-color-".concat(y),y),l(t,"mod-size-".concat(v),v),l(t,"is-state-".concat(g),!k&&g),t)),href:E,to:p,type:j,disabled:k,onClick:function(e){e.target.blur(),"function"==typeof w&&w(e)}},O),a)});t.a=d},653:function(e,t){e.exports={wrapper:"d4d69797",css:".d4d69797{display:inline-block;color:#d0d9dd;font:inherit;background:rgba(176,190,197,.15);border:.05rem solid rgba(176,190,197,.3);line-height:1.2em;border-radius:.15rem;padding:calc(.25em - .05rem) .75em}html.is-webapp .d4d69797{cursor:pointer}html.is-hover .d4d69797:hover{color:#fff;background:rgba(176,190,197,.4)}.d4d69797.is-state-active,.d4d69797:active,html.is-hover .d4d69797:hover.is-state-active,html.is-hover .d4d69797:hover:active{color:#d0d9dd;background:rgba(0,0,0,.1);border-color:rgba(176,190,197,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3)}.d4d69797:focus{outline:0}.d4d69797:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.d4d69797[disabled]{color:rgba(185,205,214,.55);opacity:.6}"}},660:function(e,t,n){"use strict";var r=n(4);t.a=function(e){r.b.push(("/"!==e.substr(0,1)?"/":"")+e)}},674:function(e,t,n){"use strict";n.d(t,"j",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"h",function(){return f}),n.d(t,"i",function(){return d}),n.d(t,"g",function(){return m}),n.d(t,"e",function(){return p}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return y}),n.d(t,"k",function(){return v}),n.d(t,"d",function(){return g}),n.d(t,"a",function(){return w});var r,o=n(170),i=n(3),a=n(660);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},u=4,l=6,f=3,d=4,b=function(){return new Promise(function(e){return"undefined"==typeof Nedb?n.e(28).then(n.t.bind(null,774,7)).then(function(t){self.Nedb=t.default,e()}):e()}).then(function(){return new Promise(function(e,t){(r=new Nedb({filename:"fleets",timestampData:!0})).loadDatabase(function(n){if(n)return t(n);e()})})})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(m(e)){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({},e);return delete t.history,delete t.currentTab,"/fleets/".concat(e._id,".").concat(Object(o.compressToEncodedURIComponent)(JSON.stringify(t)))}},h=function(e){return JSON.parse(Object(o.decompressFromEncodedURIComponent)(e))},y=function(){return function(e){return b().then(function(){return new Promise(function(e,t){r.find({},function(n,r){if(n)return t(n);e(r)})})}).then(function(t){return e({type:i.l,builds:t})})}},v=function(e){return function(t){return b().then(function(){return new Promise(function(e,t){r.insert(s,function(n,r){if(n)return t(n);e(r)})})}).then(function(n){return t({type:i.m,data:n}),e&&Object(a.a)(p(n)),n})}},g=function(e,t){return function(n){return b().then(function(){return e=Object.assign({},s,e),n({type:i.m,data:e}),t&&Object(a.a)(p(e)),e})}},w=function(e){return function(t){return t({type:i.k,tab:e})}}},680:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(50),a=Object(i.a)({styles:n(681)})(function(e){var t=e.className,n=e.children;return o.a.createElement("div",{className:t,children:n})});t.a=a},681:function(e,t){e.exports={wrapper:"f4f0218c",css:".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}"}},717:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(50),a=Object(i.a)({styles:n(718)})(function(e){return o.a.createElement("span",e)});t.a=a},718:function(e,t,n){e.exports={wrapper:"e084e2bc",css:".e084e2bc{display:inline-block;position:relative;width:6.65rem;height:6.25rem;background:url("+n(719)+") no-repeat 50% 0/contain;-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite}@-webkit-keyframes loader-fairy-ooyodo-2{.e084e2bc 0%{-webkit-transform:none;transform:none}.e084e2bc 10%{-webkit-transform:none;transform:none}.e084e2bc 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.e084e2bc 30%{-webkit-transform:none;transform:none}.e084e2bc 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.e084e2bc 50%{-webkit-transform:none;transform:none}.e084e2bc to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}"}},719:function(e,t,n){e.exports=n.p+"assets/cd67278ffd53dc3920034ca896292bcb.png"},870:function(e,t){e.exports={wrapper:"b4bc8101",css:'.b4bc8101{border-top:3rem solid transparent}.b4bc8101.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem)}@media (max-width:850px){.b4bc8101.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.b4bc8101.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.b4bc8101.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.b4bc8101.is-initializing{border-bottom:1.2rem solid transparent}}.b4bc8101.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.b4bc8101.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.b4bc8101,.b4bc8101-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}'}}}]);