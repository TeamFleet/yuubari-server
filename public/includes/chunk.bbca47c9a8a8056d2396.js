(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1080:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="b4bc8101",i='.b4bc8101{border-top:3rem solid transparent}.b4bc8101.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem)}@media (max-width:850px){.b4bc8101.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.b4bc8101.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.b4bc8101.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.b4bc8101.is-initializing{border-bottom:1.2rem solid transparent}}.b4bc8101.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.b4bc8101.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.b4bc8101,.b4bc8101-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}';t.default={wrapper:r,css:i}},1204:function(e,t,n){"use strict";n.r(t),function(e){var r,i=n(0),a=n.n(i),c=n(5),o=n.n(c),l=n(9),u=n(26),s=n(1004),f=n(348),b=n(61),m=n(180),p=n(1013),d=n(221),h=n(82),y=n(1016),v=n(1008);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var i=N(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=Object(l.a)({pageinfo:function(e){return Object(f.a)(e,{title:"舰队模拟"})}})((function(){return a.a.createElement(m.a,null,a.a.createElement(z,null))}));t.default=P;var z=Object(l.a)({connect:!0,styles:n(1080)})(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(c,e);var t,n,r,i=j(c);function c(){var e;w(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return _(x(e=i.call.apply(i,[this].concat(n))),"state",{ready:!1}),e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.props.dispatch(Object(s.f)()),new Promise((function(e){return setTimeout((function(){return e()}),window[b.a]?0:2e3)}))]).then((function(){e.setState({ready:!0})}))}},{key:"render",value:function(){if(!this.state.ready)return a.a.createElement(p.a,{className:o()([this.props.className,"is-initializing"])},a.a.createElement(y.a,{className:"loader"}));var e=this.props.className;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,{className:e+"-header"}),a.a.createElement("div",{className:e},a.a.createElement(R,{className:e+"-list"})))}}])&&E(t.prototype,n),r&&E(t,r),c}(a.a.Component))||r,S=Object(l.a)({connect:!0})((function(e){var t=e.className,n=e.dispatch;return a.a.createElement(v.a,{className:t,main:a.a.createElement(a.a.Fragment,null,"建设中",a.a.createElement(d.a,{children:"NEW BUILD",onClick:function(){return n(Object(s.k)(!0))}}))})})),R=Object(l.a)({connect:function(e){return{builds:e.fleets.builds}}})((function(e){var t=e.builds,n=e.dispatch;t=t.filter((function(e){return!!Object(s.g)(e)}));var r=Array.isArray(t)&&t.length>0;return a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{component:"h2",children:"建设中"}),r&&t.map((function(e){return a.a.createElement("div",{key:e._id},a.a.createElement(u.b,{to:Object(s.e)(e)},e._id))})),!r&&a.a.createElement("div",null,a.a.createElement(d.a,{children:"NEW BUILD",onClick:function(){return n(Object(s.k)(!0))}})))}))}.call(this,n(33).default)}}]);