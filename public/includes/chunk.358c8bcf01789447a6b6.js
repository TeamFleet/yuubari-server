(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[767],{37277:(t,e,o)=>{"use strict";o.d(e,{BT:()=>a,$5:()=>f,S1:()=>r,mc:()=>d,Vx:()=>s});var i=o(15895);const a="__tabIndex",n=(t,e)=>({type:i.fj,id:t,state:e}),r=(t,e)=>o=>o(((t,e)=>({type:i.DQ,id:t,initialState:e}))(t,e)),d=(t,e)=>o=>o(((t,e)=>({type:i.Bw,id:t,initialState:e}))(t,e)),s=(t,e)=>o=>o(n(t,e)),f=(t,e)=>o=>o(((t,e)=>n(t,{[a]:e}))(t,e))},5090:(t,e,o)=>{"use strict";o.d(e,{Z:()=>a});var i=o(10620);const a=t=>i.get.equipment(t)},61329:(t,e,o)=>{"use strict";o.d(e,{Z:()=>i});const i=(t,e)=>{switch(t){case"ship":case"ships":return`/ships/${e}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${e}`;case"entity":case"entities":return`/entities/${e}`}}},95725:(t,e,o)=>{"use strict";o.d(e,{Z:()=>f});var i=o(19494),a=o(99245),n=o(88767),r=o.n(n),d=o(26489),s=o(97118);const f=(0,d.Z)({styles:o(77257)})((0,i.memo)((({className:t,children:e,tag:o,component:i,href:n,link:d,to:f,type:c,color:p,size:u,state:b,onClick:l,...m})=>{let h;h=o||i||(f?a.rU:n||d?"a":"button");const g="disable"===b||"disabled"===b,k=c||("button"===h?"button":void 0),y=n||d||void 0;return(0,s.jsx)(h,{className:r()(["button",t],{[`mod-color-${p}`]:p,[`mod-size-${u}`]:u,[`is-state-${b}`]:!g&&b}),href:y,to:f,type:k,disabled:g,onClick:function(t){t.target.blur(),"function"==typeof l&&l(t)},...m,children:e})})))},69224:(t,e,o)=>{"use strict";o.d(e,{Z:()=>c});var i=o(19494),a=o(26489),n=o(10620),r=o(5090),d=o(61329),s=o(99245),f=o(97118);const c=(0,a.Z)({styles:o(43191)})((0,i.memo)((({tag:t,icon:e,type:o,equipment:i,children:a,...c})=>{let p,u,b,l=t||"span";return b=/^([0-9]+)\[([0-9]*),([0-9]*)\]$/.exec(e),Array.isArray(b)&&(p=b[1],b[2]&&b[3]?u=`${b[2]}~${b[3]}`:b[2]?u=`${b[2]}+`:b[3]&&(u=`0~${b[3]}+`),u&&(c["data-suffix-type"]="stat-range")),b=/^([0-9]+):([0-9]+)$/.exec(e),Array.isArray(b)&&(p=b[1],b[2]&&(u=(0,r.Z)(b[2])._name,l=s.rU,c.to=(0,d.Z)("equipment",b[2])),u&&(c["data-suffix-type"]="equipment-name")),void 0===p&&(p=i?(0,r.Z)(i)._icon:o?n.db.equipmentTypes[o].icon:parseInt(e)),isNaN(p)&&(p=void 0),u||(u=(""+e).replace(p,"").toUpperCase()||void 0),(0,f.jsx)(l,{"data-icon":p,"data-suffix":u,...c,children:a})})))},35007:(t,e,o)=>{"use strict";o.d(e,{Z:()=>u});var i,a=o(19494),n=o(88767),r=o.n(n),d=o(26489),s=o(95725),f=o(97118);function c(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const p=t=>void 0===t||isNaN(t)?void 0:parseInt(t),u=(0,d.Z)({styles:o(41514)})(i=class extends a.Component{constructor(t){super(t),c(this,"InputRef",(0,a.createRef)()),c(this,"onChange",this.onChange.bind(this)),c(this,"onFocus",this.onFocus.bind(this)),c(this,"onBlur",this.onBlur.bind(this)),c(this,"onInputKeyDown",this.onInputKeyDown.bind(this)),c(this,"onWheel",this.onWheel.bind(this)),c(this,"onClickMinus",this.onClickMinus.bind(this)),c(this,"onClickPlus",this.onClickPlus.bind(this)),this.min=p(t.min),this.max=p(t.max),this.state={value:t.defaultValue||0,isFocus:!1}}getValue(t){return"number"==typeof this.max&&t>this.max?this.max:"number"==typeof this.min&&t<this.min?this.min:t}update(t=this.input,e){void 0===e&&(e=t.value),isNaN(e)&&(e=Math.max(0,this.min||0)),(e=this.getValue(parseInt(e)))||(e=0),e!==this.state.value&&(t.value=e,this.setState({value:e},(()=>{this.onUpdate(e)})))}onUpdate(t){if(isNaN(t)&&(t=Math.max(0,this.min||0)),"function"==typeof this.props.onUpdate)return this.props.onUpdate(t)}onChange(t){void 0!==this.max&&t.target.value>this.max||void 0!==this.min&&t.target.value<this.min||this.update(t.target)}onFocus(){this.setState({isFocus:!0})}onBlur(t){if(this.update(t.target),this.setState({isFocus:!1}),"function"==typeof this.props.onBlur)return this.props.onBlur(t)}onInputKeyDown(t){13===t.keyCode&&(this.update(t.target),t.target.blur())}onWheel(t){if(this.state.isFocus){const e=t.nativeEvent;"number"==typeof e.wheelDelta&&e.wheelDelta>0||"number"==typeof e.wheelDeltaY&&e.wheelDeltaY>0||"number"==typeof e.deltaY&&e.deltaY<0?this.onBtnClick(void 0,1):("number"==typeof e.wheelDelta&&e.wheelDelta<0||"number"==typeof e.wheelDeltaY&&e.wheelDeltaY<0||"number"==typeof e.deltaY&&e.deltaY>0)&&this.onBtnClick(void 0,-1),t.stopPropagation(),t.preventDefault()}}onBtnClick(t,e){const o=this.getValue(parseInt(this.input.value||0)+e);this.input.value=o,this.update(),t&&t.target.blur()}onClickMinus(t){return this.onBtnClick(t,-1)}onClickPlus(t){return this.onBtnClick(t,1)}componentDidMount(){this.input=this.InputRef.current}shouldComponentUpdate(t){return t.currentValue!==this.props.currentValue?(this.update(void 0,t.currentValue),!1):t.defaultValue===this.props.defaultValue}render(){const t=this.props.className.split(" ")[0],{showButtons:e=!0}=this.props;return(0,f.jsxs)("span",{className:r()({[this.props.className]:!0,"is-focus":this.state.isFocus,"mod-hide-buttons":!e}),children:[(0,f.jsx)("input",{className:t+"-input",type:"number",min:this.min,max:this.max,ref:this.InputRef,defaultValue:this.props.defaultValue,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onInputKeyDown,onWheel:this.onWheel}),e&&(0,f.jsx)(s.Z,{component:"button",type:"button",className:r()([t+"-btn",t+"-btn-minus"]),disabled:void 0!==this.min&&this.state.value<=this.min,onClick:this.onClickMinus,children:"-"}),e&&(0,f.jsx)(s.Z,{component:"button",type:"button",className:r()([t+"-btn",t+"-btn-plus"]),disabled:void 0!==this.max&&this.state.value>=this.max,onClick:this.onClickPlus,children:"+"})]})}})||i},94676:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var i=o(88767),a=o.n(i),n=o(26489),r=o(56207),d=o(97118);const s=(0,n.Z)({styles:o(94005)})((({className:t,mainClassName:e,optionsClassName:o,main:i,options:n,children:s,...f})=>{const c=void 0!==n;return(0,d.jsxs)(r.Z,{className:a()([t,{"has-options":c}]),...f,children:[(0,d.jsxs)("div",{className:a()(["wrapper",e]),children:[i,s]}),c&&(0,d.jsx)("div",{className:a()(["dimmed",o]),children:n})]})}))},46131:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>w});var i,a,n=o(19494),r=o(26489),d=o(10620),s=o.n(d),f=o(4022),c=o.n(f),p=o(37277),u=o(9459),b=o(26674),l=o(94676),m=o(13545),h=o(35007),g=o(69224),k=o(97118);const y="CALCTP",v=[1,2,21,5,8,12,14,15,29,17],x=[c().SupplyContainer,c().LandingCraft,c().AmphibiousCraft,c().CombatRation],w=(0,r.Z)({connect:!0,pageinfo:t=>(0,u.Z)(t,{title:"TP Calculator"}),styles:o(69288)})(i=class extends n.Component{constructor(t){super(t),t.dispatch((0,p.S1)(y,{result:0}))}componentWillUnmount(){this.props.dispatch((0,p.Vx)(y,{result:0}))}render(){return(0,k.jsxs)(b.Z,{className:this.props.className,children:[(0,k.jsx)(N,{className:this.props.className+"-header"}),(0,k.jsx)(j,{className:this.props.className+"-body"})]})}})||i,N=({className:t})=>(0,k.jsx)(l.Z,{className:t,main:(0,k.jsx)(m.Z,{className:t+"-title",component:"h2",children:"TP Calculator"}),options:(0,k.jsx)(C,{className:t+"-result"})});let j=(0,r.Z)({connect:t=>({result:t.pages[y].result})})(a=class extends n.Component{constructor(...t){var e,o,i;super(...t),e=this,i={shipType:{},equipmentType:{}},(o=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var i=o.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(o="count"))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i}update(){this.props.dispatch((0,p.Vx)(y,{result:s().calculate.tp(this.count)}))}render(){return(0,k.jsxs)("div",{className:this.props.className,children:[(0,k.jsxs)("div",{className:this.props.className+"-set",children:[(0,k.jsx)(m.Z,{className:this.props.className+"-title",component:"h4",children:"Ship Type"}),(0,k.jsx)("div",{className:this.props.className+"-grid",children:v.map(((t,e)=>(0,k.jsx)(Z,{className:this.props.className+"-counter",name:[d.db.shipTypes[t]._name,(0,k.jsxs)("small",{children:["[",d.db.shipTypes[t].code,"]"]},"code")],onUpdate:e=>{this.count.shipType[t]=e,this.update()}},e)))})]}),(0,k.jsxs)("div",{className:this.props.className+"-set",children:[(0,k.jsx)(m.Z,{className:this.props.className+"-title",component:"h4",children:"Equipment Type"}),(0,k.jsx)("div",{className:this.props.className+"-grid",children:x.map(((t,e)=>(0,k.jsx)(Z,{className:this.props.className+"-counter",name:d.db.equipmentTypes[t]._name,icon:d.db.equipmentTypes[t].icon,onUpdate:e=>{this.count.equipmentType[t]=e,this.update()}},e)))})]})]})}})||a;const C=(0,r.Z)({connect:t=>({result:t.pages[y].result})})((({className:t,result:e})=>(0,k.jsxs)("div",{className:t,children:[(0,k.jsxs)("strong",{children:["S: ",e]}),(0,k.jsxs)("span",{children:["A: ",Math.floor(.7*e)]})]}))),Z=({className:t,name:e,min:o=0,onUpdate:i,icon:a})=>(0,k.jsxs)("div",{className:t,children:[void 0===a?(0,k.jsx)("span",{className:t+"-name",children:e}):(0,k.jsx)(g.Z,{className:t+"-name",icon:a,children:e}),(0,k.jsx)(h.Z,{min:o,onUpdate:i,className:t+"-counter"})]})},77257:(t,e,o)=>{"use strict";o.r(e),o.d(e,{css:()=>a,default:()=>n,wrapper:()=>i});const i="e8e7d007",a=".e8e7d007{background:rgba(176,190,196,.15);border:.05rem solid rgba(176,190,196,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .e8e7d007{cursor:pointer}html.is-hover .e8e7d007:hover{background:rgba(176,190,196,.4);color:#fff}.e8e7d007.is-state-active,.e8e7d007:active,html.is-hover .e8e7d007:hover.is-state-active,html.is-hover .e8e7d007:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,196,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.e8e7d007:focus{outline:0}.e8e7d007:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.e8e7d007[disabled]{color:rgba(185,205,214,.55);opacity:.6}",n={wrapper:i,css:a}},43191:(t,e,o)=>{"use strict";o.r(e),o.d(e,{css:()=>f,default:()=>c,wrapper:()=>s});const i=o.p+"includes/asset.924316386597c1efc7b8.png";var a=o(5658),n=o.n(a),r=o(24585),d=o.n(r);const s="f5973f0d",f='.f5973f0d{overflow:hidden;position:relative;vertical-align:top}.f5973f0d:before{content:"";float:left;margin:0 .2rem 0 0}.f5973f0d:before,.f5973f0d:empty{background:url("'+i+'") no-repeat 0 1.8rem/cover;display:inline-block;height:1.8rem;width:1.8rem}.f5973f0d[data-icon="0"]:before{background-position:0 -1.81818182%}.f5973f0d[data-icon="1"]:before{background-position:0 0}.f5973f0d[data-icon="2"]:before{background-position:0 1.81818182%}.f5973f0d[data-icon="3"]:before{background-position:0 3.63636364%}.f5973f0d[data-icon="4"]:before{background-position:0 5.45454545%}.f5973f0d[data-icon="5"]:before{background-position:0 7.27272727%}.f5973f0d[data-icon="6"]:before{background-position:0 9.09090909%}.f5973f0d[data-icon="7"]:before{background-position:0 10.90909091%}.f5973f0d[data-icon="8"]:before{background-position:0 12.72727273%}.f5973f0d[data-icon="9"]:before{background-position:0 14.54545455%}.f5973f0d[data-icon="10"]:before{background-position:0 16.36363636%}.f5973f0d[data-icon="11"]:before{background-position:0 18.18181818%}.f5973f0d[data-icon="12"]:before{background-position:0 20%}.f5973f0d[data-icon="13"]:before{background-position:0 21.81818182%}.f5973f0d[data-icon="14"]:before{background-position:0 23.63636364%}.f5973f0d[data-icon="15"]:before{background-position:0 25.45454545%}.f5973f0d[data-icon="16"]:before{background-position:0 27.27272727%}.f5973f0d[data-icon="17"]:before{background-position:0 29.09090909%}.f5973f0d[data-icon="18"]:before{background-position:0 30.90909091%}.f5973f0d[data-icon="19"]:before{background-position:0 32.72727273%}.f5973f0d[data-icon="20"]:before{background-position:0 34.54545455%}.f5973f0d[data-icon="21"]:before{background-position:0 36.36363636%}.f5973f0d[data-icon="22"]:before{background-position:0 38.18181818%}.f5973f0d[data-icon="23"]:before{background-position:0 40%}.f5973f0d[data-icon="24"]:before{background-position:0 41.81818182%}.f5973f0d[data-icon="25"]:before{background-position:0 43.63636364%}.f5973f0d[data-icon="26"]:before{background-position:0 45.45454545%}.f5973f0d[data-icon="27"]:before{background-position:0 47.27272727%}.f5973f0d[data-icon="28"]:before{background-position:0 49.09090909%}.f5973f0d[data-icon="29"]:before{background-position:0 50.90909091%}.f5973f0d[data-icon="30"]:before{background-position:0 52.72727273%}.f5973f0d[data-icon="31"]:before{background-position:0 54.54545455%}.f5973f0d[data-icon="32"]:before{background-position:0 56.36363636%}.f5973f0d[data-icon="33"]:before{background-position:0 58.18181818%}.f5973f0d[data-icon="34"]:before{background-position:0 60%}.f5973f0d[data-icon="35"]:before{background-position:0 61.81818182%}.f5973f0d[data-icon="36"]:before{background-position:0 63.63636364%}.f5973f0d[data-icon="37"]:before{background-position:0 65.45454545%}.f5973f0d[data-icon="38"]:before{background-position:0 67.27272727%}.f5973f0d[data-icon="39"]:before{background-position:0 69.09090909%}.f5973f0d[data-icon="40"]:before{background-position:0 70.90909091%}.f5973f0d[data-icon="41"]:before{background-position:0 72.72727273%}.f5973f0d[data-icon="42"]:before{background-position:0 74.54545455%}.f5973f0d[data-icon="43"]:before{background-position:0 76.36363636%}.f5973f0d[data-icon="44"]:before{background-position:0 78.18181818%}.f5973f0d[data-icon="45"]:before{background-position:0 80%}.f5973f0d[data-icon="46"]:before{background-position:0 81.81818182%}.f5973f0d[data-icon="47"]:before{background-position:0 83.63636364%}.f5973f0d[data-icon="48"]:before{background-position:0 85.45454545%}.f5973f0d[data-icon="49"]:before{background-position:0 87.27272727%}.f5973f0d[data-icon="50"]:before{background-position:0 89.09090909%}.f5973f0d[data-icon="51"]:before{background-position:0 90.90909091%}.f5973f0d[data-icon="52"]:before{background-position:0 92.72727273%}.f5973f0d[data-icon="53"]:before{background-position:0 94.54545455%}.f5973f0d[data-icon="54"]:before{background-position:0 96.36363636%}.f5973f0d[data-icon="55"]:before{background-position:0 98.18181818%}.f5973f0d[data-icon="56"]:before{background-position:0 100%}.f5973f0d:empty:before{display:none}.f5973f0d:empty[data-icon="0"]{background-position:0 -1.81818182%}.f5973f0d:empty[data-icon="1"]{background-position:0 0}.f5973f0d:empty[data-icon="2"]{background-position:0 1.81818182%}.f5973f0d:empty[data-icon="3"]{background-position:0 3.63636364%}.f5973f0d:empty[data-icon="4"]{background-position:0 5.45454545%}.f5973f0d:empty[data-icon="5"]{background-position:0 7.27272727%}.f5973f0d:empty[data-icon="6"]{background-position:0 9.09090909%}.f5973f0d:empty[data-icon="7"]{background-position:0 10.90909091%}.f5973f0d:empty[data-icon="8"]{background-position:0 12.72727273%}.f5973f0d:empty[data-icon="9"]{background-position:0 14.54545455%}.f5973f0d:empty[data-icon="10"]{background-position:0 16.36363636%}.f5973f0d:empty[data-icon="11"]{background-position:0 18.18181818%}.f5973f0d:empty[data-icon="12"]{background-position:0 20%}.f5973f0d:empty[data-icon="13"]{background-position:0 21.81818182%}.f5973f0d:empty[data-icon="14"]{background-position:0 23.63636364%}.f5973f0d:empty[data-icon="15"]{background-position:0 25.45454545%}.f5973f0d:empty[data-icon="16"]{background-position:0 27.27272727%}.f5973f0d:empty[data-icon="17"]{background-position:0 29.09090909%}.f5973f0d:empty[data-icon="18"]{background-position:0 30.90909091%}.f5973f0d:empty[data-icon="19"]{background-position:0 32.72727273%}.f5973f0d:empty[data-icon="20"]{background-position:0 34.54545455%}.f5973f0d:empty[data-icon="21"]{background-position:0 36.36363636%}.f5973f0d:empty[data-icon="22"]{background-position:0 38.18181818%}.f5973f0d:empty[data-icon="23"]{background-position:0 40%}.f5973f0d:empty[data-icon="24"]{background-position:0 41.81818182%}.f5973f0d:empty[data-icon="25"]{background-position:0 43.63636364%}.f5973f0d:empty[data-icon="26"]{background-position:0 45.45454545%}.f5973f0d:empty[data-icon="27"]{background-position:0 47.27272727%}.f5973f0d:empty[data-icon="28"]{background-position:0 49.09090909%}.f5973f0d:empty[data-icon="29"]{background-position:0 50.90909091%}.f5973f0d:empty[data-icon="30"]{background-position:0 52.72727273%}.f5973f0d:empty[data-icon="31"]{background-position:0 54.54545455%}.f5973f0d:empty[data-icon="32"]{background-position:0 56.36363636%}.f5973f0d:empty[data-icon="33"]{background-position:0 58.18181818%}.f5973f0d:empty[data-icon="34"]{background-position:0 60%}.f5973f0d:empty[data-icon="35"]{background-position:0 61.81818182%}.f5973f0d:empty[data-icon="36"]{background-position:0 63.63636364%}.f5973f0d:empty[data-icon="37"]{background-position:0 65.45454545%}.f5973f0d:empty[data-icon="38"]{background-position:0 67.27272727%}.f5973f0d:empty[data-icon="39"]{background-position:0 69.09090909%}.f5973f0d:empty[data-icon="40"]{background-position:0 70.90909091%}.f5973f0d:empty[data-icon="41"]{background-position:0 72.72727273%}.f5973f0d:empty[data-icon="42"]{background-position:0 74.54545455%}.f5973f0d:empty[data-icon="43"]{background-position:0 76.36363636%}.f5973f0d:empty[data-icon="44"]{background-position:0 78.18181818%}.f5973f0d:empty[data-icon="45"]{background-position:0 80%}.f5973f0d:empty[data-icon="46"]{background-position:0 81.81818182%}.f5973f0d:empty[data-icon="47"]{background-position:0 83.63636364%}.f5973f0d:empty[data-icon="48"]{background-position:0 85.45454545%}.f5973f0d:empty[data-icon="49"]{background-position:0 87.27272727%}.f5973f0d:empty[data-icon="50"]{background-position:0 89.09090909%}.f5973f0d:empty[data-icon="51"]{background-position:0 90.90909091%}.f5973f0d:empty[data-icon="52"]{background-position:0 92.72727273%}.f5973f0d:empty[data-icon="53"]{background-position:0 94.54545455%}.f5973f0d:empty[data-icon="54"]{background-position:0 96.36363636%}.f5973f0d:empty[data-icon="55"]{background-position:0 98.18181818%}.f5973f0d:empty[data-icon="56"]{background-position:0 100%}.f5973f0d[data-suffix]:after{bottom:0;content:"";display:block;font-size:.6rem;line-height:1.2em;position:absolute;right:0;text-align:center;z-index:2}.f5973f0d[data-suffix="+"]:after,.f5973f0d[data-suffix="-"]:after{bottom:0;height:.7rem;width:.7rem}.f5973f0d[data-suffix="+"]:after{background:url("'+n()+'") no-repeat 50% 50%/cover}.f5973f0d[data-suffix="-"]:after{background:url("'+d()+'") no-repeat 50% 50%/cover}.f5973f0d[data-icon="16"][data-suffix="+"]:after,.f5973f0d[data-icon="16"][data-suffix="-"]:after{background:url("'+i+'") no-repeat 0 52.72727273%/cover;bottom:-.25rem;height:1.4rem;right:-.25rem;width:1.4rem}.f5973f0d[data-icon="16"][data-suffix="-"]:after{-webkit-filter:hue-rotate(260deg);filter:hue-rotate(260deg)}.f5973f0d[data-suffix-type=stat-range]:after,.f5973f0d[data-suffix=AA]:after{border-radius:.25rem;box-shadow:0 0 .05rem .05rem rgba(0,0,0,.35);content:attr(data-suffix);-webkit-transform:scale(.83333333);transform:scale(.83333333);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.f5973f0d[data-suffix=AA]:after{padding:0 .25em}.f5973f0d[data-suffix-type=stat-range]:after{background:rgba(85,139,47,.65);border:.05rem solid #b2ff59;color:#ccff90;padding:0 .3em}.f5973f0d[data-icon="15"][data-suffix-type=stat-range]:after,.f5973f0d[data-suffix=AA]:after{background:rgba(189,90,15,.65);border:.05rem solid #f29c5a;color:#fbe3d0}.f5973f0d[data-suffix-type=equipment-name]{background-size:1.8rem auto;display:block;width:auto}.f5973f0d[data-suffix-type=equipment-name]:after{-webkit-align-items:center;align-items:center;content:attr(data-suffix);display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;left:auto;min-height:1.8rem;padding-left:1.8rem;position:relative;right:auto;text-align:left}a.f5973f0d[data-suffix-type=equipment-name]:after{transition-property:color}html.is-hover a.f5973f0d[data-suffix-type=equipment-name]:hover:after{color:#fff}a.f5973f0d[data-suffix-type=equipment-name]:active:after,html.is-hover a.f5973f0d[data-suffix-type=equipment-name]:hover:active:after{color:hsla(0,0%,100%,.5)}',c={wrapper:s,css:f}},41514:(t,e,o)=>{"use strict";o.r(e),o.d(e,{css:()=>a,default:()=>n,wrapper:()=>i});const i="f44ff677",a=".f44ff677{box-sizing:border-box;display:inline-block;height:1.5rem;padding:0 1rem;position:relative;width:3.75rem}.f44ff677.mod-hide-buttons{padding-left:0;padding-right:0;width:1.75rem}.f44ff677-btn,.f44ff677-input{box-sizing:border-box;display:block;height:1.5rem;text-align:center}.f44ff677-input[type]{border-radius:0;line-height:1.4rem;position:relative;width:100%;z-index:2}.f44ff677-input[type]::-webkit-inner-spin-button,.f44ff677-input[type]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.f44ff677-input[type]::inner-spin-button,.f44ff677-input[type]::outer-spin-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;margin:0}.f44ff677.mod-hide-buttons .f44ff677-input[type]{border-radius:.15rem}.f44ff677 .f44ff677-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(176,190,196,.1);border:.05rem solid rgba(143,163,174,.25);color:#d0d9dd;font:inherit;height:1.5rem;line-height:1.4rem;margin-top:-.75rem;padding:0;position:absolute;top:50%;width:1.05rem}.f44ff677 .f44ff677-btn:hover{z-index:3}.f44ff677 .f44ff677-btn-minus{border-radius:1.5rem 0 0 1.5rem;border-right-width:0;left:0;padding-left:2.5%;padding-right:.05rem}.f44ff677 .f44ff677-btn-minus:active{border-right-width:.05rem;padding-right:0}.f44ff677 .f44ff677-btn-plus{border-left-width:0;border-radius:0 1.5rem 1.5rem 0;padding-left:.05rem;padding-right:2.5%;right:0}.f44ff677 .f44ff677-btn-plus:active{border-left-width:.05rem;padding-left:0}",n={wrapper:i,css:a}},94005:(t,e,o)=>{"use strict";o.r(e),o.d(e,{css:()=>a,default:()=>n,wrapper:()=>i});const i="bb3e8dce",a='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',n={wrapper:i,css:a}},69288:(t,e,o)=>{"use strict";o.r(e),o.d(e,{css:()=>a,default:()=>n,wrapper:()=>i});const i="f93fcdb6",a=".f93fcdb6-header-title{line-height:3rem}.f93fcdb6-header-result{color:rgba(157,180,191,.9);font-size:1rem;line-height:2rem}.f93fcdb6-header-result span,.f93fcdb6-header-result strong{display:inline-block}.f93fcdb6-header-result strong{color:#ffe57f}.f93fcdb6-header-result span{color:#ff8a80;margin-left:1em}.f93fcdb6-body-set{overflow:hidden}.f93fcdb6-body-title:first-child{margin-bottom:.5rem;margin-top:0}.f93fcdb6-body-set~.f93fcdb6-body-set .f93fcdb6-body-title{margin-top:1.5rem}.f93fcdb6-body-grid{grid-gap:0;border-top:.05rem solid rgba(237,240,242,.15);display:grid;grid-template-columns:repeat(auto-fill,minmax(11rem,1fr));margin-left:-.25rem;margin-right:-.3rem}@media (max-width:660px){.f93fcdb6-body-grid{display:block}}.f93fcdb6-body-counter{-webkit-align-items:center;align-items:center;border-bottom:.05rem solid rgba(237,240,242,.15);border-right:.05rem solid rgba(237,240,242,.15);display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:2.35rem;padding:.3rem 4.25rem .25rem .25rem;position:relative}.f93fcdb6-body-counter .f93fcdb6-body-counter-name{color:#e6e6e6;font-size:.7rem;line-height:1.2em;padding-left:.25rem}.f93fcdb6-body-counter .f93fcdb6-body-counter-name small{color:rgba(157,180,191,.9);font-size:.6rem;font-weight:400;margin-left:.5rem;vertical-align:bottom}.f93fcdb6-body-counter .f93fcdb6-body-counter-name[data-icon]{padding-left:1.55rem;position:static}.f93fcdb6-body-counter .f93fcdb6-body-counter-name[data-icon]:before{left:0;margin-top:-.9rem;position:absolute;top:50%}.f93fcdb6-body-counter .f93fcdb6-body-counter-counter{position:absolute;right:.25rem;top:.425rem}",n={wrapper:i,css:a}},5658:t=>{t.exports="data:image/svg+xml,%3c!-- Generated by IcoMoon.io --%3e %3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 512 512'%3e %3cpath d='M320 512v-256l96 96 96-96-256-256-256 256 96 96 96-96v256z' fill='%238BC34A' stroke='%23000000' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' stroke-opacity='0.75'%3e%3c/path%3e %3c/svg%3e"},24585:t=>{t.exports="data:image/svg+xml,%3c!-- Generated by IcoMoon.io --%3e %3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 512 512'%3e %3cpath d='M320 512v-256l96 96 96-96-256-256-256 256 96 96 96-96v256z' fill='%239E9E9E' stroke='%23000000' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' stroke-opacity='0.75'%3e%3c/path%3e %3c/svg%3e"}}]);