(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1032:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",function(){return r}),n.d(t,"css",function(){return i});const r="b4bc8101",i='.b4bc8101{border-top:3rem solid transparent}.b4bc8101.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem)}@media (max-width:850px){.b4bc8101.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.b4bc8101.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.b4bc8101.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.b4bc8101.is-initializing{border-bottom:1.2rem solid transparent}}.b4bc8101.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.b4bc8101.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.b4bc8101,.b4bc8101-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}';t.default={wrapper:r,css:i}},1158:function(e,t,n){"use strict";n.r(t),function(e){var r,i=n(0),a=n.n(i),o=n(5),c=n.n(o),l=n(7),u=n(953),s=n(236),f=n(123),b=n(962),m=n(23),d=n(177),p=n(57),h=n(964),y=n(957);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=Object(l.a)({pageinfo:function(e){return Object(s.a)(e,{title:"Fleet Builder"})}})(function(){return a.a.createElement(f.a,null,a.a.createElement(k,null))});t.default=j;var k=Object(l.a)({connect:!0,styles:n(1032)})(r=function(e){function t(){var e,n,r,i,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),l=0;l<o;l++)c[l]=arguments[l];return n=function(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?E(e):t}(this,(e=w(t)).call.apply(e,[this].concat(c))),r=E(n),a={ready:!1},(i="state")in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.props.dispatch(Object(u.f)()),new Promise(function(e){return setTimeout(function(){return e()},self.isAppReadyFull?0:2e3)})]).then(function(){e.setState({ready:!0})})}},{key:"render",value:function(){if(!this.state.ready)return a.a.createElement(b.a,{className:c()([this.props.className,"is-initializing"])},a.a.createElement(h.a,{className:"loader"}));var e=this.props.className;return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,{className:e+"-header"}),a.a.createElement("div",{className:e},a.a.createElement(x,{className:e+"-list"})))}}])&&v(n.prototype,r),i&&v(n,i),t}())||r,N=Object(l.a)({connect:!0})(function(e){var t=e.className,n=e.dispatch;return a.a.createElement(y.a,{className:t,main:a.a.createElement(a.a.Fragment,null,"Under Construction",a.a.createElement(d.a,{children:"NEW BUILD",onClick:function(){return n(Object(u.k)(!0))}}))})}),x=Object(l.a)({connect:function(e){return{builds:e.fleets.builds}}})(function(e){var t=e.builds,n=e.dispatch;t=t.filter(function(e){return!!Object(u.g)(e)});var r=Array.isArray(t)&&t.length>0;return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{component:"h2",children:"Under Construction"}),r&&t.map(function(e){return a.a.createElement("div",{key:e._id},a.a.createElement(m.b,{to:Object(u.e)(e)},e._id))}),!r&&a.a.createElement("div",null,a.a.createElement(d.a,{children:"NEW BUILD",onClick:function(){return n(Object(u.k)(!0))}})))})}.call(this,n(36).default)}}]);