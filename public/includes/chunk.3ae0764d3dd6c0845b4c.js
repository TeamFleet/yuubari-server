(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1006:function(e,t,r){"use strict";r.r(t),function(e){var n,a,o,i=r(0),s=r.n(i),c=r(19),l=r.n(c),m=r(47),d=r(628),p=r(631),u=r(165),f=r.n(u),b=r(633),h=r(635),g=r(637),y=r(672),k=r(632),v=r(648),w=r(640),x=r(630),O=r(649),j=r(690),E=r(766),N=r(651);function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function A(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t,r){return t&&C(e.prototype,t),r&&C(e,r),e}function P(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?T(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var W=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"],F=Object(m.a)({connect:!0,pageinfo:function(t,r){var n="object"===I(r.params)?r.params.day:void 0;return Object(p.a)(t,{title:[e("改修工厂"),void 0!==n?e({Sunday:"星期日",Monday:"星期一",Tuesday:"星期二",Wednesday:"星期三",Thurday:"星期四",Friday:"星期五",Saturday:"星期六"},W[n]):void 0]})},styles:r(973)})(n=function(e){function t(){var e,r;S(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return D(T(r=P(this,(e=R(t)).call.apply(e,[this].concat(a)))),"state",{rendering:!0}),r}return _(t,s.a.Component),z(t,[{key:"componentDidUpdate",value:function(e){e.params.day!==this.props.params.day&&window.scrollTo(void 0,0)}},{key:"onRender",value:function(){this.setState({rendering:!1})}},{key:"render",value:function(){var e="object"===I(this.props.params)&&void 0!==this.props.params.day?this.props.params.day:-1;return s.a.createElement(k.a,{className:this.props.className,pathname:this.props.location.pathname,rendering:this.state.rendering},s.a.createElement(J,{isDay:"object"===I(this.props.params)&&void 0!==this.props.params.day}),e>-1&&s.a.createElement(X,{day:e,onRender:this.onRender.bind(this)}),-1===e&&s.a.createElement(B,{onRender:this.onRender.bind(this)}))}}]),t}())||n;t.default=F;var J=Object(m.a)({styles:r(974)})(function(t){var r=f()().getDay();return s.a.createElement(j.a,{className:l()(D({},t.className,!0)),mainClassName:t.className+"-tabs",main:[s.a.createElement(L,{className:t.className+"-akashi",key:"akashi"}),s.a.createElement(v.a,{key:"today",href:"/arsenal/".concat(r),replace:!0,className:l()(["tab","link-today"]),children:e("每日改修")})].concat(A(W.map(function(t,n){return s.a.createElement(v.a,{key:t,href:"/arsenal/".concat(n),replace:!0,className:l()({tab:!0,"link-day":!0,"is-today":r===n}),activeClassName:"on",children:e({Sunday:"日",Monday:"一",Tuesday:"二",Wednesday:"三",Thurday:"四",Friday:"五",Saturday:"六"},t)})})),[s.a.createElement(v.a,{key:"all",href:"/arsenal",replace:!0,className:l()({tab:!0,"link-all":!0,on:!t.isDay}),children:e("全部改修")})])})}),L=function(e){function t(){var e,r;S(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return D(T(r=P(this,(e=R(t)).call.apply(e,[this].concat(a)))),"state",{animation:Math.floor(3*Math.random()+1)}),r}return _(t,s.a.Component),z(t,[{key:"changeAnimation",value:function(){this.setState({animation:Math.floor(3*Math.random()+1)})}},{key:"render",value:function(){return s.a.createElement("span",{className:this.props.className,"data-blink-animation":this.state.animation,onAnimationIteration:this.changeAnimation.bind(this)})}}]),t}(),U=function(e){return e.collections.map(function(t,r){return s.a.createElement(G,{key:"collection-".concat(t.title),title:t.title,index:r,onRender:function(){"function"==typeof e.onRender&&r>=e.collections.length-1&&e.onRender(void 0)}},t.list)})},X=function(e){var t=-1,r={},n=[];return d.a.arsenalDays[e.day].forEach(function(e,a){var o,i=Object(g.a)(e[0]),c=e[1];if(!Array.isArray(i.improvement)||!i.improvement[c])return null;d.a.equipmentCollections.some(function(e){return e.list.some(function(t){return i.type===t.type&&(o=e.name),void 0!==o}),void 0!==o});var l=r[o];t!==o&&void 0!==o&&(t=o,void 0===r[o]&&(l=n.length,r[o]=n.length,n.push({title:o,list:[]}))),n[l].list.push(s.a.createElement(H,{key:JSON.stringify(e),equipment:i,improvementIndex:c,requirements:e[2],index:a}))}),s.a.createElement(U,q({collections:n},e))},B=function(e){var t=-1,r={},n=[];return d.a.arsenalAll.forEach(function(e){var a,o=Object(g.a)(e);if(!Array.isArray(o.improvement)||!o.improvement.length)return null;d.a.equipmentCollections.some(function(e){return e.list.some(function(t){return o.type===t.type&&(a=e.name),void 0!==a}),void 0!==a});var i=r[a];t!==a&&void 0!==a&&(t=a,void 0===r[a]&&(i=n.length,r[a]=n.length,n.push({title:a,list:[]}))),o.improvement.forEach(function(t,r){n[i].list.push(s.a.createElement(H,{key:e+"-"+r,equipment:o,improvementIndex:r,index:r}))})}),s.a.createElement(U,q({collections:n},e))},G=Object(m.a)({styles:r(976)})(a=function(e){function t(e){var r;S(this,t),r=P(this,R(t).call(this,e));var n=0===e.index||!self.isAppReady;return r.state={render:n},n?"function"==typeof e.onRender&&e.onRender(T(r)):setTimeout(function(){r.mounted&&(r.setState({render:!0}),"function"==typeof e.onRender&&e.onRender(T(r)))},20*(e.index||0)),r}return _(t,s.a.Component),z(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return this.state.render?s.a.createElement("div",{className:this.props.className},s.a.createElement(x.a,{component:"h2",type:"line-append",className:"".concat(this.props.className,"-title"),inherit:!0,key:"".concat(this.props.title,"-title"),children:this.props.title.split("&").join(" & ")}),s.a.createElement("div",{className:"".concat(this.props.className,"-list"),children:this.state.render?this.props.children:void 0,key:"".concat(this.props.title,"-list")})):null}}]),t}())||a,H=Object(m.a)({styles:r(977)})(o=function(t){function r(){var e,t;S(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return D(T(t=P(this,(e=R(r)).call.apply(e,[this].concat(a)))),"state",{expand:!1}),t}return _(r,s.a.Component),z(r,[{key:"render",value:function(){var t,r,n=this,a=this.props,o=a.className,i=a.equipment,c=a.improvementIndex,m=a.requirements,d=[],p=i.improvement[c],u=Array.isArray(p.upgrade)&&p.upgrade.length,f=Array.isArray(m);f&&m.forEach(function(e){Array.isArray(p.req)&&p.req[e]&&Array.isArray(p.req[e][1])&&p.req[e][1].forEach(function(e){return d.push(e)})});var g=!!d.length,k=!(!u||!p.upgrade[1]);return s.a.createElement("div",{className:o},s.a.createElement("span",{className:l()((t={},D(t,o+"-equipment",!0),D(t,"has-upgrade",u),t))},s.a.createElement(w.a,{className:"".concat(o,"-name color-alt-lighter"),equipment:i})),u&&s.a.createElement("span",{className:o+"-equipment"},s.a.createElement(w.a,{className:"".concat(o,"-name color-alt-lighter"),equipment:p.upgrade[0],children:k?s.a.createElement(N.a,{className:o+"-equipment-star",star:p.upgrade[1]}):void 0})),f&&s.a.createElement("div",{className:o+"-ships"},g&&Object(y.a)(d).map(function(t){return t=Object(h.a)(t),s.a.createElement(v.a,{className:"".concat(o,"-ships-ship color-alt"),key:t.id,to:Object(b.a)("ship",t.id),children:t.getName(e(""))})}),!g&&e("任意秘书舰")),!f&&s.a.createElement(E.a,{className:o+"-day-and-ships",data:p}),s.a.createElement("div",{className:o+"-resources"},s.a.createElement(O.a,{className:l()((r={},D(r,o+"-resources-toggle",!0),D(r,"is-expand",this.state.expand),r)),onClick:function(){n.setState({expand:!n.state.expand})},children:this.state.expand?void 0:"...","data-role":"toggle"}),this.state.expand&&s.a.createElement(E.b,{data:p})))}}]),r}())||o}.call(this,r(93).default)},628:function(e,t,r){"use strict";var n=r(118);r.d(t,"b",function(){return n.locale}),r.d(t,"a",function(){return n.db})},633:function(e,t,r){"use strict";t.a=function(e,t){switch(e){case"ship":case"ships":return"/ships/".concat(t);case"item":case"items":case"equipment":case"equipments":return"/equipments/".concat(t);case"entity":case"entities":return"/entities/".concat(t)}}},635:function(e,t,r){"use strict";var n=r(118);t.a=function(e){return n.get.ship(e)}},637:function(e,t,r){"use strict";var n=r(118);t.a=function(e){return n.get.equipment(e)}},641:function(e,t,r){"use strict";var n=r(4);t.a=function(e){n.b.replace(("/"!==e.substr(0,1)?"/":"")+e)}},648:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(61),i=r(641);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.a=function(e){var t=e.to,r=e.href,n=e.className,l=e.replace,m=void 0!==l&&l,d=e.onClick,p=c(e,["to","href","className","replace","onClick"]),u=t||r||"";return u.match(/^(https?:)?\/\//)?u.indexOf("://")<0?a.a.createElement("a",s({className:n,href:u},p)):a.a.createElement("a",s({className:n,href:u,target:"_blank"},p)):a.a.createElement(o.Link,s({className:n,to:u,onClick:m?function(e){if(Object(i.a)(u),e.preventDefault(),"function"==typeof d)return d(e)}:d},p))}},649:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(61),i=r(19),s=r.n(i),c=r(47);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=Object(c.a)({styles:r(650)})(function(e){var t,r,n=e.className,i=e.children,c=e.tag,p=e.component,u=e.href,f=e.link,b=e.to,h=e.type,g=e.color,y=e.size,k=e.state,v=e.onClick,w=d(e,["className","children","tag","component","href","link","to","type","color","size","state","onClick"]);r=c||(p||(b?o.Link:u||f?"a":"button"));var x="disable"===k||"disabled"===k,O=h||("button"===r?"button":void 0),j=u||f||void 0;return a.a.createElement(r,l({className:s()(["button",n],(t={},m(t,"mod-color-".concat(g),g),m(t,"mod-size-".concat(y),y),m(t,"is-state-".concat(k),!x&&k),t)),href:j,to:b,type:O,disabled:x,onClick:function(e){e.target.blur(),"function"==typeof v&&v(e)}},w),i)});t.a=p},650:function(e,t){e.exports={wrapper:"d4d6",css:".d4d6{display:inline-block;color:#d0d9dd;font:inherit;background:rgba(176,190,197,.15);border:.05rem solid rgba(176,190,197,.3);line-height:1.2em;border-radius:.15rem;padding:calc(.25em - .05rem) .75em}html.is-webapp .d4d6{cursor:pointer}html.is-hover .d4d6:hover{color:#fff;background:rgba(176,190,197,.4)}.d4d6.is-state-active,.d4d6:active,html.is-hover .d4d6:hover.is-state-active,html.is-hover .d4d6:hover:active{color:#d0d9dd;background:rgba(0,0,0,.1);border-color:rgba(176,190,197,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3)}.d4d6:focus{outline:0}.d4d6:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.d4d6[disabled]{color:rgba(185,205,214,.55);opacity:.6}"}},672:function(e,t,r){"use strict";var n=r(635);t.a=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).sort(function(e,t){return Object(n.a)(e).series!==Object(n.a)(t).series?1:0}).sort(function(e,t){if(e=Object(n.a)(e),t=Object(n.a)(t),e.remodel&&t.remodel){if(e.remodel.next===t.id)return-1;if(e.remodel.prev===t.id)return 1}return e.series===t.series?e.name.suffix-t.name.suffix:e.order-t.order})}},973:function(e,t){e.exports={wrapper:"dd0f",css:".dd0f{border-top:3rem solid transparent}"}},974:function(e,t,r){e.exports={wrapper:"c82c",css:'.c82c .tab{display:inline-block;color:rgba(185,205,214,.55);position:relative;text-align:center;border-bottom:.1rem solid transparent;height:2.95rem;float:left}html.is-hover .c82c .tab:hover{color:#fff}.c82c .tab:active,html.is-hover .c82c .tab:hover:active{color:hsla(0,0%,100%,.5)}.c82c .tab.on{color:#fff;z-index:-1;border-bottom-color:#40c4ff;pointer-events:none}.c82c .link-today{margin-right:1.5rem}.c82c .link-today:after{content:"";position:absolute;top:50%;right:-.75rem;width:.05rem;height:1.5rem;margin-top:-.75rem;-webkit-transform:skew(-20deg) scaleX(2);transform:skew(-20deg) scaleX(2);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;background:rgba(237,240,242,.075)}.c82c .link-day{min-width:1.25rem;margin-right:.25rem}.c82c .link-day.is-today:not(.on){border-bottom-color:rgba(185,205,214,.55)}.c82c .link-all{margin-left:1.25rem}@media (max-width:480px){.c82c .link-today{display:none}.c82c .tabs{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.c82c .link-all,.c82c .link-day{-webkit-flex:none;flex:none}.c82c .link-all{margin-left:.75rem}}.c82c-tabs{overflow:hidden;height:3rem}.c82c-akashi{display:block;float:left;position:relative;margin-right:1.5rem;width:8.05974rem;height:2.9rem;transition:none}.c82c-akashi:after,.c82c-akashi:before{content:"";position:absolute;-webkit-transform:scale(.75324675);transform:scale(.75324675);transition:inherit;display:block;background-image:url('+r(975)+');background-repeat:no-repeat;background-size:13.25rem auto}.c82c-akashi:before{z-index:2;width:2.55rem;height:1.7rem;top:.95rem;left:1.1rem;background-position:-10.7rem 0;-webkit-transform-origin:-1.1rem -.95rem;transform-origin:-1.1rem -.95rem;-webkit-animation:3s steps(1) 3s infinite none;animation:3s steps(1) 3s infinite none}.c82c-akashi:after{z-index:1;top:0;left:0;width:10.7rem;height:3.85rem;background-position:0 0;-webkit-transform-origin:0 0;transform-origin:0 0}@media (max-width:660px){.c82c-akashi{display:none}}.c82c-akashi[data-blink-animation="1"]:before{-webkit-animation-name:akashi-blink-1;animation-name:akashi-blink-1}.c82c-akashi[data-blink-animation="2"]:before{-webkit-animation-name:akashi-blink-2;animation-name:akashi-blink-2}.c82c-akashi[data-blink-animation="3"]:before{-webkit-animation-name:akashi-blink-3;animation-name:akashi-blink-3}@-webkit-keyframes akashi-blink-1{.c82c 0%{background-position:-10.7rem 0}.c82c 3%{background-position:-10.7rem -1.7rem}.c82c 6%{background-position:-10.7rem -3.4rem}.c82c 9%{background-position:-10.7rem -1.7rem}.c82c 12%{background-position:-10.7rem 0}}@keyframes akashi-blink-1{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-2{.c82c 0%{background-position:-10.7rem 0}.c82c 3%{background-position:-10.7rem -1.7rem}.c82c 6%{background-position:-10.7rem -3.4rem}.c82c 9%{background-position:-10.7rem -1.7rem}.c82c 12%{background-position:-10.7rem -3.4rem}.c82c 15%{background-position:-10.7rem -1.7rem}.c82c 18%{background-position:-10.7rem 0}}@keyframes akashi-blink-2{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem -3.4rem}15%{background-position:-10.7rem -1.7rem}18%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-3{.c82c 0%{background-position:-10.7rem 0}.c82c 2%{background-position:-10.7rem -1.7rem}.c82c 4%{background-position:-10.7rem -3.4rem}.c82c 6%{background-position:-10.7rem -5.1rem}.c82c 8%{background-position:-10.7rem -6.8rem}.c82c 40%{background-position:-10.7rem -5.1rem}.c82c 42%{background-position:-10.7rem -3.4rem}.c82c 44%{background-position:-10.7rem -1.7rem}.c82c 46%{background-position:-10.7rem 0}}@keyframes akashi-blink-3{0%{background-position:-10.7rem 0}2%{background-position:-10.7rem -1.7rem}4%{background-position:-10.7rem -3.4rem}6%{background-position:-10.7rem -5.1rem}8%{background-position:-10.7rem -6.8rem}40%{background-position:-10.7rem -5.1rem}42%{background-position:-10.7rem -3.4rem}44%{background-position:-10.7rem -1.7rem}46%{background-position:-10.7rem 0}}'}},975:function(e,t,r){e.exports=r.p+"assets/cad51bb225d8047157db75043cd91331.png"},976:function(e,t){e.exports={wrapper:"aa2b",css:".aa2b{margin-bottom:2.2rem;overflow:hidden}.aa2b:last-child{margin-bottom:0}.aa2b-title{font-size:.9rem;line-height:1.2rem;height:1.2rem;margin:0 auto 1rem 0}.aa2b-list{display:grid;grid-gap:1rem;grid-template-columns:repeat(auto-fill,minmax(25rem,1fr))}@media (max-width:524px){.aa2b-list{grid-template-columns:100%}}.aa2b-list.on{margin-top:1rem;margin-bottom:2rem}"}},977:function(e,t){e.exports={wrapper:"e52e",css:'.e52e-equipment{display:inline-block}.e52e-equipment.has-upgrade{padding-right:1.75rem;position:relative}.e52e-equipment.has-upgrade:after,.e52e-equipment.has-upgrade:before{content:"";position:absolute;top:50%;z-index:-1}.e52e-equipment.has-upgrade:before{width:.5rem;height:.2rem;margin-top:-.15rem;right:.75rem;background:#74c674}.e52e-equipment.has-upgrade:after{width:0;height:0;border-left:.5rem solid #74c674;border-right:0;border-top:.3rem solid transparent;border-bottom:.3rem solid transparent;margin-top:-.35rem;right:.25rem}.e52e-ships{padding:.1rem 0 .1rem 1.3rem;line-height:.8rem;font-size:.7rem;color:rgba(185,205,214,.55)}@media (max-width:850px){.e52e-ships{position:relative;z-index:-1}}.e52e-ships-ship{display:inline-block}.e52e-ships-ship:after{content:"/";display:inline-block;margin:0 .2rem;z-index:-1;color:rgba(157,180,191,.9)}.e52e-ships-ship:last-child:after{content:normal}.e52e-day-and-ships{margin-top:.4rem;margin-left:1.3rem;margin-bottom:.4rem}@media (max-width:850px){.e52e-day-and-ships{position:relative;z-index:-1}}.e52e-resources{padding-top:.2rem;padding-left:1.3rem;position:relative}.e52e-resources-toggle[data-role=toggle]{display:block;border-radius:1em;font-size:.7rem;line-height:0;padding:.2rem .4rem .6rem;font-weight:600;letter-spacing:.1em;border-color:rgba(237,240,242,.15)}@media (max-width:850px){.e52e-resources-toggle[data-role=toggle]{padding:.45rem .5rem .75rem}}.e52e-resources-toggle[data-role=toggle].is-expand{position:absolute;padding:0;width:1.1rem;height:1.1rem;top:.1rem;left:0}.e52e-resources-toggle[data-role=toggle].is-expand:after,.e52e-resources-toggle[data-role=toggle].is-expand:before{content:"";position:absolute;left:50%;top:50%;margin-left:-.2rem;width:.4rem;height:.4rem;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:.05rem solid;border-left:.05rem solid}.e52e-resources-toggle[data-role=toggle].is-expand:before{margin-top:-.25rem}.e52e-resources-toggle[data-role=toggle].is-expand:after{margin-top:0}'}}}]);