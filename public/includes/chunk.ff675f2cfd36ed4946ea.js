(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1017:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return r})),n.d(t,"css",(function(){return a}));const r="e6e25c5e",a=".e6e25c5e{border-top:5rem solid transparent}.e6e25c5e-header-title{line-height:3rem}.e6e25c5e-header-result{line-height:2rem;color:rgba(157,180,191,.9);font-size:1rem}.e6e25c5e-header-result span,.e6e25c5e-header-result strong{display:inline-block}.e6e25c5e-header-result strong{color:#ffe57f}.e6e25c5e-header-result span{color:#ff8a80;margin-left:1em}.e6e25c5e-body-set{overflow:hidden}.e6e25c5e-body-title:first-child{margin-top:0;margin-bottom:.5rem}.e6e25c5e-body-set~.e6e25c5e-body-set .e6e25c5e-body-title{margin-top:1.5rem}.e6e25c5e-body-grid{margin-left:-.25rem;margin-right:-.3rem;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fill,minmax(11rem,1fr));border-top:.05rem solid rgba(237,240,242,.15)}@media (max-width:660px){.e6e25c5e-body-grid{display:block}}.e6e25c5e-body-counter{position:relative;height:2.35rem;padding:.3rem 4.25rem .25rem .25rem;border-right:.05rem solid rgba(237,240,242,.15);border-bottom:.05rem solid rgba(237,240,242,.15);display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.e6e25c5e-body-counter .e6e25c5e-body-counter-name{color:#e6e6e6;font-size:.7rem;line-height:1.2em;padding-left:.25rem}.e6e25c5e-body-counter .e6e25c5e-body-counter-name small{font-size:.6rem;margin-left:.5rem;font-weight:400;color:rgba(157,180,191,.9);vertical-align:bottom}.e6e25c5e-body-counter .e6e25c5e-body-counter-name[data-icon]{padding-left:1.55rem;position:static}.e6e25c5e-body-counter .e6e25c5e-body-counter-name[data-icon]:before{position:absolute;top:50%;margin-top:-.9rem;left:0}.e6e25c5e-body-counter .e6e25c5e-body-counter-counter{position:absolute;top:.425rem;right:.25rem}";t.default={wrapper:r,css:a}},1139:function(e,t,n){"use strict";n.r(t),function(e){var r,a,o=n(0),c=n.n(o),i=n(7),s=n(39),l=n.n(s),u=n(58),p=n.n(u),m=n(17),f=n(945),d=n(232),y=n(124),b=n(941),h=n(59),g=n(942),v=n(233);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&T(e.prototype,t),n&&T(e,n),e}function C(e){return function(){var t,n=S(e);if(P()){var r=S(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return j(this,t)}}function j(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=[1,2,21,5,8,12,14,15,29,17],R=[p.a.SupplyContainer,p.a.LandingCraft,p.a.AmphibiousCraft,p.a.CombatRation],L=Object(i.a)({connect:!0,pageinfo:function(e){return Object(d.a)(e,{title:"TPカルキュレーター"})},styles:n(1017)})(r=function(e){_(n,e);var t=C(n);function n(e){var r;return E(this,n),r=t.call(this,e),e.dispatch(Object(f.c)("CALCTP",{result:0})),r}return O(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(f.e)("CALCTP",{result:0}))}},{key:"render",value:function(){return c.a.createElement(y.a,{className:this.props.className},c.a.createElement(q,{className:this.props.className+"-header"}),c.a.createElement(U,{className:this.props.className+"-body"}))}}]),n}(c.a.Component))||r;t.default=L;var q=function(e){var t=e.className;return c.a.createElement(b.a,{className:t,main:c.a.createElement(h.a,{className:t+"-title",component:"h2",children:"TPカルキュレーター"}),options:c.a.createElement(z,{className:t+"-result"})})},U=Object(i.a)({connect:function(e){return{result:e.pages.CALCTP.result}}})(a=function(e){_(n,e);var t=C(n);function n(){var e;E(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return N(k(e=t.call.apply(t,[this].concat(a))),"count",{shipType:{},equipmentType:{}}),e}return O(n,[{key:"update",value:function(){this.props.dispatch(Object(f.e)("CALCTP",{result:l.a.calculate.tp(this.count)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:this.props.className},c.a.createElement("div",{className:this.props.className+"-set"},c.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"Ship Type"}),c.a.createElement("div",{className:this.props.className+"-grid"},A.map((function(t,n){return c.a.createElement(D,{className:e.props.className+"-counter",key:n,name:[m.a.shipTypes[t]._name,c.a.createElement("small",{key:"code"},"[",m.a.shipTypes[t].code,"]")],onUpdate:function(n){e.count.shipType[t]=n,e.update()}})})))),c.a.createElement("div",{className:this.props.className+"-set"},c.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"Equipment Type"}),c.a.createElement("div",{className:this.props.className+"-grid"},R.map((function(t,n){return c.a.createElement(D,{className:e.props.className+"-counter",key:n,name:m.a.equipmentTypes[t]._name,icon:m.a.equipmentTypes[t].icon,onUpdate:function(n){e.count.equipmentType[t]=n,e.update()}})})))))}}]),n}(c.a.Component))||a,z=Object(i.a)({connect:function(e){return{result:e.pages.CALCTP.result}}})((function(e){var t=e.className,n=e.result;return c.a.createElement("div",{className:t},c.a.createElement("strong",null,"S: ",n),c.a.createElement("span",null,"A: ",Math.floor(.7*n)))})),D=function(e){var t=e.className,n=e.name,r=e.min,a=void 0===r?0:r,o=e.onUpdate,i=e.icon;return c.a.createElement("div",{className:t},void 0===i?c.a.createElement("span",{className:t+"-name"},n):c.a.createElement(v.a,{className:t+"-name",icon:i,children:n}),c.a.createElement(g.a,{min:a,onUpdate:o,className:t+"-counter"}))}}.call(this,n(38).default)}}]);