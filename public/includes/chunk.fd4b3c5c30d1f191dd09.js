(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1101:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",(function(){return a})),n.d(t,"css",(function(){return r}));const a="ccda93db",r=".ccda93db-header-title{line-height:3rem}.ccda93db-header-result{line-height:2rem;color:rgba(157,180,191,.9);font-size:1rem}.ccda93db-header-result span,.ccda93db-header-result strong{display:inline-block}.ccda93db-header-result strong{color:#ffe57f}.ccda93db-header-result span{color:#ff8a80;margin-left:1em}.ccda93db-body-set{overflow:hidden}.ccda93db-body-title:first-child{margin-top:0;margin-bottom:.5rem}.ccda93db-body-set~.ccda93db-body-set .ccda93db-body-title{margin-top:1.5rem}.ccda93db-body-grid{margin-left:-.25rem;margin-right:-.3rem;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fill,minmax(11rem,1fr));border-top:.05rem solid rgba(237,240,242,.15)}@media (max-width:660px){.ccda93db-body-grid{display:block}}.ccda93db-body-counter{position:relative;height:2.35rem;padding:.3rem 4.25rem .25rem .25rem;border-right:.05rem solid rgba(237,240,242,.15);border-bottom:.05rem solid rgba(237,240,242,.15);display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.ccda93db-body-counter .ccda93db-body-counter-name{color:#e6e6e6;font-size:.7rem;line-height:1.2em;padding-left:.25rem}.ccda93db-body-counter .ccda93db-body-counter-name small{font-size:.6rem;margin-left:.5rem;font-weight:400;color:rgba(157,180,191,.9);vertical-align:bottom}.ccda93db-body-counter .ccda93db-body-counter-name[data-icon]{padding-left:1.55rem;position:static}.ccda93db-body-counter .ccda93db-body-counter-name[data-icon]:before{position:absolute;top:50%;margin-top:-.9rem;left:0}.ccda93db-body-counter .ccda93db-body-counter-counter{position:absolute;top:.425rem;right:.25rem}";t.default={wrapper:a,css:r}},1225:function(e,t,n){"use strict";n.r(t),function(e){var a,r,c=n(0),o=n.n(c),i=n(9),s=n(34),l=n.n(s),u=n(45),d=n.n(u),m=n(19),p=n(1032),f=n(349),b=n(180),y=n(1025),h=n(82),g=n(1029),v=n(350);function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function C(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var S=[1,2,21,5,8,12,14,15,29,17],A=[d.a.SupplyContainer,d.a.LandingCraft,d.a.AmphibiousCraft,d.a.CombatRation],R=Object(i.a)({connect:!0,pageinfo:function(e){return Object(f.a)(e,{title:"TP计算"})},styles:n(1101)})(a=function(e){T(n,e);var t=k(n);function n(e){var a;return E(this,n),a=t.call(this,e),e.dispatch(Object(p.c)("CALCTP",{result:0})),a}return C(n,[{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(p.e)("CALCTP",{result:0}))}},{key:"render",value:function(){return o.a.createElement(b.a,{className:this.props.className},o.a.createElement(L,{className:this.props.className+"-header"}),o.a.createElement(U,{className:this.props.className+"-body"}))}}]),n}(o.a.Component))||a;t.default=R;var L=function(e){var t=e.className;return o.a.createElement(y.a,{className:t,main:o.a.createElement(h.a,{className:t+"-title",component:"h2",children:"TP计算"}),options:o.a.createElement(q,{className:t+"-result"})})},U=Object(i.a)({connect:function(e){return{result:e.pages.CALCTP.result}}})(r=function(e){T(n,e);var t=k(n);function n(){var e;E(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return N(_(e=t.call.apply(t,[this].concat(r))),"count",{shipType:{},equipmentType:{}}),e}return C(n,[{key:"update",value:function(){this.props.dispatch(Object(p.e)("CALCTP",{result:l.a.calculate.tp(this.count)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:this.props.className},o.a.createElement("div",{className:this.props.className+"-set"},o.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"舰种"}),o.a.createElement("div",{className:this.props.className+"-grid"},S.map((function(t,n){return o.a.createElement(z,{className:e.props.className+"-counter",key:n,name:[m.a.shipTypes[t]._name,o.a.createElement("small",{key:"code"},"[",m.a.shipTypes[t].code,"]")],onUpdate:function(n){e.count.shipType[t]=n,e.update()}})})))),o.a.createElement("div",{className:this.props.className+"-set"},o.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"装备类型"}),o.a.createElement("div",{className:this.props.className+"-grid"},A.map((function(t,n){return o.a.createElement(z,{className:e.props.className+"-counter",key:n,name:m.a.equipmentTypes[t]._name,icon:m.a.equipmentTypes[t].icon,onUpdate:function(n){e.count.equipmentType[t]=n,e.update()}})})))))}}]),n}(o.a.Component))||r,q=Object(i.a)({connect:function(e){return{result:e.pages.CALCTP.result}}})((function(e){var t=e.className,n=e.result;return o.a.createElement("div",{className:t},o.a.createElement("strong",null,"S: ",n),o.a.createElement("span",null,"A: ",Math.floor(.7*n)))})),z=function(e){var t=e.className,n=e.name,a=e.min,r=void 0===a?0:a,c=e.onUpdate,i=e.icon;return o.a.createElement("div",{className:t},void 0===i?o.a.createElement("span",{className:t+"-name"},n):o.a.createElement(v.a,{className:t+"-name",icon:i,children:n}),o.a.createElement(g.a,{min:r,onUpdate:c,className:t+"-counter"}))}}.call(this,n(33).default)}}]);