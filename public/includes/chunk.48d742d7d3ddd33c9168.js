(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1052:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="b4bc8101",i='.b4bc8101{border-top:3rem solid transparent}.b4bc8101.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem)}@media (max-width:850px){.b4bc8101.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.b4bc8101.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.b4bc8101.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.b4bc8101.is-initializing{border-bottom:1.2rem solid transparent}}.b4bc8101.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.b4bc8101.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.b4bc8101,.b4bc8101-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}';t.default={wrapper:r,css:i}},1176:function(e,t,n){"use strict";n.r(t),function(e){var r,i=n(0),a=n.n(i),c=n(4),o=n.n(c),l=n(8),u=n(977),s=n(346),f=n(179),b=n(986),m=n(26),p=n(220),d=n(81),h=n(988),y=n(981);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var i=x(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(l.a)({pageinfo:function(e){return Object(s.a)(e,{title:"艦隊ビルダー"})}})((function(){return a.a.createElement(f.a,null,a.a.createElement(P,null))}));t.default=_;var P=Object(l.a)({connect:!0,styles:n(1052)})(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(c,e);var t,n,r,i=O(c);function c(){var e;g(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(k(e=i.call.apply(i,[this].concat(n))),"state",{ready:!1}),e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.props.dispatch(Object(u.f)()),new Promise((function(e){return setTimeout((function(){return e()}),window.isAppReadyFull?0:2e3)}))]).then((function(){e.setState({ready:!0})}))}},{key:"render",value:function(){if(!this.state.ready)return a.a.createElement(b.a,{className:o()([this.props.className,"is-initializing"])},a.a.createElement(h.a,{className:"loader"}));var e=this.props.className;return a.a.createElement(a.a.Fragment,null,a.a.createElement(z,{className:e+"-header"}),a.a.createElement("div",{className:e},a.a.createElement(S,{className:e+"-list"})))}}])&&w(t.prototype,n),r&&w(t,r),c}(a.a.Component))||r,z=Object(l.a)({connect:!0})((function(e){var t=e.className,n=e.dispatch;return a.a.createElement(y.a,{className:t,main:a.a.createElement(a.a.Fragment,null,"工事中",a.a.createElement(p.a,{children:"NEW BUILD",onClick:function(){return n(Object(u.k)(!0))}}))})})),S=Object(l.a)({connect:function(e){return{builds:e.fleets.builds}}})((function(e){var t=e.builds,n=e.dispatch;t=t.filter((function(e){return!!Object(u.g)(e)}));var r=Array.isArray(t)&&t.length>0;return a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{component:"h2",children:"工事中"}),r&&t.map((function(e){return a.a.createElement("div",{key:e._id},a.a.createElement(m.b,{to:Object(u.e)(e)},e._id))})),!r&&a.a.createElement("div",null,a.a.createElement(p.a,{children:"NEW BUILD",onClick:function(){return n(Object(u.k)(!0))}})))}))}.call(this,n(38).default)}}]);