(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1022:function(e,t,n){"use strict";(function(e){var r,i=n(0),a=n.n(i),o=n(7),c=n(949),s=n(233),u=n(952);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?h(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}for(var v=[],w=0;w<c.j;w++)v.push("#".concat(w+1));v.push("Land Bases");var g=Object(o.a)({connect:function(e){if(!e.fleets.current)return{};var t=e.fleets.current;return{name:t.name,hq_lv:t.hq_lv,id:t._id}},styles:n(1023)})(r=function(e){function t(){var e,n;p(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return y(h(n=d(this,(e=m(t)).call.apply(e,[this].concat(i)))),"onTabChange",(function(e){n.props.dispatch(Object(c.a)(e>=c.j?"base":e))})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"onNameUpdate",value:function(){this.mounted&&this.lastName!==this.props.name&&(Object(s.a)(void 0,{title:"FLEET: ".concat(this.props.name),dispatch:this.props.dispatch}),this.lastName=this.props.name)}},{key:"componentDidMount",value:function(){this.mounted=!0,this.onNameUpdate()}},{key:"componentDidUpdate",value:function(){this.onNameUpdate()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return a.a.createElement(u.a,{className:this.props.className,title:"".concat(this.props.id," | ").concat(this.props.name),tabs:v,tabLink:!1,defaultIndex:0,onTabChange:this.onTabChange})}}])&&f(n.prototype,r),i&&f(n,i),t}(a.a.Component))||r;t.a=g}).call(this,n(37).default)},1023:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd",i="";t.default={wrapper:r,css:i}},1024:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd0",i="";t.default={wrapper:r,css:i}},1025:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(7),o=n(949),c=Object(a.a)({connect:function(e){return e.fleets.current&&"base"===e.fleets.current.currentTab?{id:e.fleets.current._id}:{}},styles:n(1026)})((function(e){var t=e.id,n=e.className;if(void 0===t)return null;for(var r=[],a=0;a<o.h;a++){for(var c=[],s=0;s<o.i;s++)c.push(i.a.createElement("div",{key:s,"data-squadron-index":s},"Squadron #",s+1));r.push(i.a.createElement("div",{key:a,"data-base-index":a},i.a.createElement("strong",null,"Base #",a+1),c))}return i.a.createElement("div",{className:n},r)}));t.a=c},1026:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="dd41d8cd1",i="";t.default={wrapper:r,css:i}},1027:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return i}));const r="ee0e09a6",i='.ee0e09a6.is-initializing{text-align:center;vertical-align:middle;height:calc(100vh - 2.5rem);position:absolute;top:0;left:0;right:0}@media (max-width:850px){.ee0e09a6.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.ee0e09a6.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.ee0e09a6.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.ee0e09a6.is-initializing{border-bottom:1.2rem solid transparent}}.ee0e09a6.is-initializing .loader{display:inline-block;vertical-align:middle;margin:0 auto}.ee0e09a6.is-initializing:before{content:"";display:inline-block;vertical-align:middle;width:0;height:100%;overflow:hidden}.ee0e09a6.is-ready{margin-top:2rem}.ee0e09a6,.ee0e09a6-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}';t.default={wrapper:r,css:i}},1149:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(7),o=n(949),c=n(3),s=n(175),u=Object(a.a)({connect:function(e){if(!e.fleets.current||"number"!=typeof e.fleets.current.currentTab)return{};var t=e.fleets.current.currentTab;return{id:e.fleets.current._id,index:t,count:Math.max(o.c,(e.fleets.current.fleets[t]||[]).length)}},styles:n(1024)})((function(e){var t=e.index,n=e.count,r=e.className;if("number"!=typeof t)return null;for(var a=[],o=0;o<n;o++)a.push(i.a.createElement("div",{key:o,"data-ship-index":o,"data-fleet-index":t,onClick:function(){console.log(c.b)}},"Fleet #",t+1," | Ship #",o+1));return i.a.createElement("div",{className:r},a,i.a.createElement(s.a,{children:"+ [WIP] ADD"}))}));t.a=u},1153:function(e,t,n){"use strict";n.r(t),function(e){var r,i,a=n(0),o=n.n(a),c=(n(104),n(5)),s=n.n(c),u=n(7),l=n(949),p=n(233),f=n(951),d=n(958),m=n(60),h=n(960),b=n(1022),y=n(1149),v=n(1025);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t&&j(e.prototype,t),n&&j(e,n),e}function E(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=Object(u.a)({pageinfo:function(e){return Object(p.a)(e,{title:"Fleet Builder"})}})(r=function(e){function t(){return O(this,t),E(this,N(t).apply(this,arguments))}return x(t,e),k(t,[{key:"shouldComponentUpdate",value:function(e){return"object"!==g(e.params)||"object"!==g(this.props.params)||e.params.id!==this.props.params.id}},{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(T,{id:this.props.params.id,initialBuild:Object(l.b)(this.props.params.build)}))}}]),t}(o.a.Component))||r;t.default=S;var T=Object(u.a)({connect:function(e,t){return"object"===g(e.fleets)&&Array.isArray(e.fleets.builds)?"object"===g(e.fleets.current)&&t.id===e.fleets.current._id?{status:"is-current"}:e.fleets.builds.some((function(e){return e._id===t.id}))?{status:"build-stored-not-current"}:{status:"build-not-stored"}:{status:"no-nedb"}},styles:n(1027)})(i=function(e){function t(){var e,n;O(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return w(_(n=E(this,(e=N(t)).call.apply(e,[this].concat(i)))),"state",{ready:!1}),n}return x(t,e),k(t,[{key:"check",value:function(){var e=this;!this.state.ready&&this.mounted&&Promise.all([new Promise((function(t){switch(e.props.status){case"no-nedb":e.props.dispatch(Object(l.f)()).then(t);break;case"is-current":t();break;case"build-stored-not-current":e.props.dispatch(Object(l.d)(e.props.initialBuild)).then(t);break;case"build-not-stored":console.warn("WIP: build-not-stored")}})),new Promise((function(e){return setTimeout((function(){return e()}),self.isAppReadyFull?0:2e3)}))]).then((function(){e.setState({ready:!0})}))}},{key:"componentDidMount",value:function(){this.mounted=!0,this.check()}},{key:"componentDidUpdate",value:function(){this.check()}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.state.ready?"build-not-stored"===this.props.status?o.a.createElement(d.a,{className:s()([this.props.className,"is-initializing"])},o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement(m.a,{component:"h4",style:{margin:"0"},children:"W.I.P."}),o.a.createElement(m.a,{component:"h2",style:{marginTop:"5px"},children:"BUILD NOT STORED"}))):o.a.createElement("div",{className:s()([this.props.className,"is-ready"])},o.a.createElement(b.a,{className:this.props.className+"-header"}),o.a.createElement(y.a,null),o.a.createElement(v.a,null)):o.a.createElement(d.a,{className:s()([this.props.className,"is-initializing"])},o.a.createElement(h.a,{className:"loader"}))}}]),t}(o.a.Component))||i}.call(this,n(37).default)}}]);