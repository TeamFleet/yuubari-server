(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1033:function(e,t,n){"use strict";n.r(t),n.d(t,"wrapper",function(){return r}),n.d(t,"css",function(){return a});const r="e6e25c5e",a=".e6e25c5e{border-top:5rem solid transparent}.e6e25c5e-header-title{line-height:3rem}.e6e25c5e-header-result{line-height:2rem;color:rgba(157,180,191,.9);font-size:1rem}.e6e25c5e-header-result span,.e6e25c5e-header-result strong{display:inline-block}.e6e25c5e-header-result strong{color:#ffe57f}.e6e25c5e-header-result span{color:#ff8a80;margin-left:1em}.e6e25c5e-body-set{overflow:hidden}.e6e25c5e-body-title:first-child{margin-top:0;margin-bottom:.5rem}.e6e25c5e-body-set~.e6e25c5e-body-set .e6e25c5e-body-title{margin-top:1.5rem}.e6e25c5e-body-grid{margin-left:-.25rem;margin-right:-.3rem;display:grid;grid-gap:0;grid-template-columns:repeat(auto-fill,minmax(11rem,1fr));border-top:.05rem solid rgba(237,240,242,.15)}@media (max-width:660px){.e6e25c5e-body-grid{display:block}}.e6e25c5e-body-counter{position:relative;height:2.35rem;padding:.3rem 4.25rem .25rem .25rem;border-right:.05rem solid rgba(237,240,242,.15);border-bottom:.05rem solid rgba(237,240,242,.15);display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;align-items:center}.e6e25c5e-body-counter .e6e25c5e-body-counter-name{color:#e6e6e6;font-size:.7rem;line-height:1.2em;padding-left:.25rem}.e6e25c5e-body-counter .e6e25c5e-body-counter-name small{font-size:.6rem;margin-left:.5rem;font-weight:400;color:rgba(157,180,191,.9);vertical-align:bottom}.e6e25c5e-body-counter .e6e25c5e-body-counter-name[data-icon]{padding-left:1.55rem;position:static}.e6e25c5e-body-counter .e6e25c5e-body-counter-name[data-icon]:before{position:absolute;top:50%;margin-top:-.9rem;left:0}.e6e25c5e-body-counter .e6e25c5e-body-counter-counter{position:absolute;top:.425rem;right:.25rem}";t.default={wrapper:r,css:a}},1159:function(e,t,n){"use strict";n.r(t),function(e){var r,a,o=n(0),c=n.n(o),i=n(7),s=n(37),l=n.n(s),m=n(56),u=n.n(m),p=n(17),d=n(961),f=n(236),b=n(123),y=n(957),h=n(57),g=n(958),N=n(237);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t,n){return t&&E(e.prototype,t),n&&E(e,n),e}function j(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?k(e):t}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P="CALCTP",x=[1,2,21,5,8,12,14,15,29,17],S=[u.a.SupplyContainer,u.a.LandingCraft,u.a.AmphibiousCraft,u.a.CombatRation],U=Object(i.a)({connect:!0,pageinfo:function(e){return Object(f.a)(e,{title:"TP计算"})},styles:n(1033)})(r=function(e){function t(e){var n;return w(this,t),n=j(this,T(t).call(this,e)),e.dispatch(Object(d.c)(P,{result:0})),n}return _(t,c.a.Component),O(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch(Object(d.e)(P,{result:0}))}},{key:"render",value:function(){return c.a.createElement(b.a,{className:this.props.className},c.a.createElement(q,{className:this.props.className+"-header"}),c.a.createElement(A,{className:this.props.className+"-body"}))}}]),t}())||r;t.default=U;var q=function(e){var t=e.className;return c.a.createElement(y.a,{className:t,main:c.a.createElement(h.a,{className:t+"-title",component:"h2",children:"TP计算"}),options:c.a.createElement(z,{className:t+"-result"})})},A=Object(i.a)({connect:function(e){return{result:e.pages[P].result}}})(a=function(e){function t(){var e,n,r,a,o;w(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return n=j(this,(e=T(t)).call.apply(e,[this].concat(i))),r=k(n),o={shipType:{},equipmentType:{}},(a="count")in r?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,n}return _(t,c.a.Component),O(t,[{key:"update",value:function(){this.props.dispatch(Object(d.e)(P,{result:l.a.calculate.tp(this.count)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:this.props.className},c.a.createElement("div",{className:this.props.className+"-set"},c.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"舰种"}),c.a.createElement("div",{className:this.props.className+"-grid"},x.map(function(t,n){return c.a.createElement(J,{className:e.props.className+"-counter",key:n,name:[p.a.shipTypes[t]._name,c.a.createElement("small",{key:"code"},"[",p.a.shipTypes[t].code,"]")],onUpdate:function(n){e.count.shipType[t]=n,e.update()}})}))),c.a.createElement("div",{className:this.props.className+"-set"},c.a.createElement(h.a,{className:this.props.className+"-title",component:"h4",children:"装备类型"}),c.a.createElement("div",{className:this.props.className+"-grid"},S.map(function(t,n){return c.a.createElement(J,{className:e.props.className+"-counter",key:n,name:p.a.equipmentTypes[t]._name,icon:p.a.equipmentTypes[t].icon,onUpdate:function(n){e.count.equipmentType[t]=n,e.update()}})}))))}}]),t}())||a,z=Object(i.a)({connect:function(e){return{result:e.pages[P].result}}})(function(e){var t=e.className,n=e.result;return c.a.createElement("div",{className:t},c.a.createElement("strong",null,"S: ",n),c.a.createElement("span",null,"A: ",Math.floor(.7*n)))}),J=function(e){var t=e.className,n=e.name,r=e.min,a=void 0===r?0:r,o=e.onUpdate,i=e.icon;return c.a.createElement("div",{className:t},void 0===i?c.a.createElement("span",{className:t+"-name"},n):c.a.createElement(N.a,{className:t+"-name",icon:i,children:n}),c.a.createElement(g.a,{min:a,onUpdate:o,className:t+"-counter"}))}}.call(this,n(36).default)}}]);