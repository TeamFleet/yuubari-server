(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1094:function(e,t,n){"use strict";(function(e){var r,i=n(0),a=n.n(i),o=n(9),c=n(1024),u=n(349),s=n(1028);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}for(var w=[],g=0;g<c.j;g++)w.push("#".concat(g+1));w.push("基地航空隊");var O=Object(o.a)({connect:function(e){if(!e.fleets.current)return{};var t=e.fleets.current;return{name:t.name,hq_lv:t.hq_lv,id:t._id}},styles:n(1095)})(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,e);var t,n,r,i=m(o);function o(){var e;f(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(b(e=i.call.apply(i,[this].concat(n))),"onTabChange",(function(t){e.props.dispatch(Object(c.a)(t>=c.j?"base":t))})),e}return t=o,(n=[{key:"onNameUpdate",value:function(){this.mounted&&this.lastName!==this.props.name&&(Object(u.a)(void 0,{title:"FLEET: ".concat(this.props.name),dispatch:this.props.dispatch}),this.lastName=this.props.name)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.onNameUpdate()}},{key:"componentDidUpdate",value:function(){this.onNameUpdate()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return a.a.createElement(s.a,{className:this.props.className,title:"".concat(this.props.id," | ").concat(this.props.name),tabs:w,tabLink:!1,defaultIndex:0,onTabChange:this.onTabChange})}}])&&p(t.prototype,n),r&&p(t,r),o}(a.a.Component))||r;t.a=O}).call(this,n(33).default)},1095:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd6",i="";t.default={wrapper:r,css:i}},1096:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd5",i="";t.default={wrapper:r,css:i}},1097:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(9),o=n(1024),c=Object(a.a)({connect:function(e){return e.fleets.current&&"base"===e.fleets.current.currentTab?{id:e.fleets.current._id}:{}},styles:n(1098)})((function(e){var t=e.id,n=e.className;if(void 0===t)return null;for(var r=[],a=0;a<o.h;a++){for(var c=[],u=0;u<o.i;u++)c.push(i.a.createElement("div",{key:u,"data-squadron-index":u},"Squadron #",u+1));r.push(i.a.createElement("div",{key:a,"data-base-index":a},i.a.createElement("strong",null,"Base #",a+1),c))}return i.a.createElement("div",{className:n},r)}));t.a=c},1098:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd4",i="";t.default={wrapper:r,css:i}},1099:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="ee0e09a6",i='.ee0e09a6.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem);position:absolute;top:0;left:0;right:0}@media (max-width:850px){.ee0e09a6.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.ee0e09a6.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.ee0e09a6.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.ee0e09a6.is-initializing{border-bottom:1.2rem solid transparent}}.ee0e09a6.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.ee0e09a6.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.ee0e09a6.is-ready{margin-top:2rem}.ee0e09a6,.ee0e09a6-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}';t.default={wrapper:r,css:i}},1215:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(9),o=n(1024),c=n(11),u=n(220),s=Object(a.a)({connect:function(e){if(!e.fleets.current||"number"!=typeof e.fleets.current.currentTab)return{};var t=e.fleets.current.currentTab;return{id:e.fleets.current._id,index:t,count:Math.max(o.c,(e.fleets.current.fleets[t]||[]).length)}},styles:n(1096)})((function(e){var t=e.index,n=e.count,r=e.className;if("number"!=typeof t)return null;for(var a=[],o=0;o<n;o++)a.push(i.a.createElement("div",{key:o,"data-ship-index":o,"data-fleet-index":t,onClick:function(){console.log(c.history)}},"Fleet #",t+1," | Ship #",o+1));return i.a.createElement("div",{className:r},a,i.a.createElement(u.a,{children:"+ [WIP] ADD"}))}));t.a=s},1223:function(e,t,n){"use strict";n.r(t),function(e){var r,i,a=n(0),o=n.n(a),c=n(5),u=n.n(c),s=n(9),l=n(1024),f=n(62),p=n(349),d=n(1027),m=n(1033),h=n(82),b=n(1036),y=n(1094),v=n(1215),w=n(1097);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var i=T(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=Object(s.a)({pageinfo:function(e){return Object(p.a)(e,{title:"艦隊ビルダー"})}})(r=function(e){_(n,e);var t=N(n);function n(){return j(this,n),t.apply(this,arguments)}return E(n,[{key:"shouldComponentUpdate",value:function(e){return"object"!==O(e.params)||"object"!==O(this.props.params)||e.params.id!==this.props.params.id}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(D,{id:this.props.params.id,initialBuild:Object(l.b)(this.props.params.build)}))}}]),n}(o.a.Component))||r;t.default=R;var D=Object(s.a)({connect:function(e,t){return"object"===O(e.fleets)&&Array.isArray(e.fleets.builds)?"object"===O(e.fleets.current)&&t.id===e.fleets.current._id?{status:"is-current"}:e.fleets.builds.some((function(e){return e._id===t.id}))?{status:"build-stored-not-current"}:{status:"build-not-stored"}:{status:"no-nedb"}},styles:n(1099)})(i=function(e){_(n,e);var t=N(n);function n(){var e;j(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return g(S(e=t.call.apply(t,[this].concat(i))),"state",{ready:!1}),e}return E(n,[{key:"check",value:function(){var e=this;!this.state.ready&&this.mounted&&Promise.all([new Promise((function(t){switch(e.props.status){case"no-nedb":e.props.dispatch(Object(l.f)()).then(t);break;case"is-current":t();break;case"build-stored-not-current":e.props.dispatch(Object(l.d)(e.props.initialBuild)).then(t);break;case"build-not-stored":console.warn("WIP: build-not-stored")}})),new Promise((function(e){return setTimeout((function(){return e()}),window[f.a]?0:2e3)}))]).then((function(){e.setState({ready:!0})}))}},{key:"componentDidMount",value:function(){this.mounted=!0,this.check()}},{key:"componentDidUpdate",value:function(){this.check()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.state.ready?"build-not-stored"===this.props.status?o.a.createElement(m.a,{className:u()([this.props.className,"is-initializing"])},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement(h.a,{component:"h4",style:{margin:"0"},children:"W.I.P."}),o.a.createElement(h.a,{component:"h2",style:{marginTop:"5px"},children:"BUILD NOT STORED"}))):o.a.createElement("div",{className:u()([this.props.className,"is-ready"])},o.a.createElement(y.a,{className:this.props.className+"-header"}),o.a.createElement(v.a,null),o.a.createElement(w.a,null)):o.a.createElement(m.a,{className:u()([this.props.className,"is-initializing"])},o.a.createElement(b.a,{className:"loader"}))}}]),n}(o.a.Component))||i}.call(this,n(33).default)}}]);