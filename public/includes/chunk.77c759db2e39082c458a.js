(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1158:function(e,t,n){"use strict";n.r(t),function(e){var r,o=n(0),i=n.n(o),a=n(8),l=n(231),c=n(125),s=n(16),u=n(954),p=n(124),f=n(59),y=n(953);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w="PAGE_EXILLUSTS",E=[8,9],O=Object(a.a)({connect:[function(e){return e.pages[w]||{}},function(e){return{init:function(t){return e(Object(u.c)(w,(n={},r=u.a,o=t,r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n)));var n,r,o},changeTab:function(t){return e(Object(u.b)(w,t))}}}],pageinfo:function(e){return Object(l.a)(e,{title:"Limited CGs"})}})(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,n,r,o,a=(t=l,function(){var e,n=g(t);if(d()){var r=g(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return m(this,e)});function l(){var e;for(var t in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this)).types=[],s.a.exillustTypes)e.types[t]=Object.assign(s.a.exillustTypes[t],{list:[]});for(var n in s.a.exillusts){var r=s.a.exillusts[n];e.types[r.type]&&e.types[r.type].list.push(r)}return e.types=e.types.filter((function(e){return!!e})).sort((function(e,t){return e.sort-t.sort})),e.state={selected:void 0},e}return n=l,(r=[{key:"render",value:function(){var e=this;if(void 0===this.props[u.a])return this.props.init(0),null;var t=this.types[this.props[u.a]];return t?i.a.createElement(p.a,{className:this.props.className},i.a.createElement("p",null,i.a.createElement("i",null,"Under Construction","...")),i.a.createElement("div",{style:{marginRight:"-10px",overflow:"hidden"}},this.types.map((function(t,n){return i.a.createElement("span",{key:n,style:{display:"block",float:"left",marginRight:"10px",padding:".2em .5em",fontSize:"smaller",lineHeight:"1.2em",background:n===e.props[u.a]?"rgba(255,255,255,.2)":void 0,color:n===e.props[u.a]?"#fff":void 0},onClick:function(){e.props.changeTab(n)}},t._name," (",t.list.length,")")}))),i.a.createElement("hr",null),i.a.createElement("div",null,i.a.createElement("div",{className:"title"},i.a.createElement(f.a,{type:"inline-block",component:"h2"},t._name),t._time&&i.a.createElement("small",null,"  (",t._time,")")),t.list.map((function(e){return i.a.createElement("div",{key:e.id,style:{display:"flex",flexFlow:"row nowrap",height:"300px",position:"relative",marginTop:"1em"}},E.map((function(t){return i.a.createElement("div",{key:t,style:{flex:"1",position:"relative",height:"100%"}},(e.exclude||[]).includes(t)?i.a.createElement("div",{style:{color:"rgba(255,255,255,.15)",fontSize:"3rem",display:"block",position:"absolute",width:"100%",height:"0",textAlign:"center",top:"50%",lineHeight:"0",fontWeight:"100"}},"无"):i.a.createElement(y.a,{src:Object(c.a)("ship-extra",e.id,t),style:{display:"block",position:"absolute",width:"100%",height:"100%"},styleImg:{display:"block",position:"absolute",width:"100%",height:"100%",objectFit:"contain"}}))})))})))):null}}])&&h(n.prototype,r),o&&h(n,o),l}(i.a.Component))||r;t.default=O}.call(this,n(38).default)}}]);