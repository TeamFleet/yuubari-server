"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[76],{37277:(e,t,s)=>{s.d(t,{BT:()=>r,$5:()=>c,S1:()=>o,mc:()=>a,Vx:()=>l});var i=s(15895);const r="__tabIndex",n=(e,t)=>({type:i.fj,id:e,state:t}),o=(e,t)=>s=>s(((e,t)=>({type:i.DQ,id:e,initialState:t}))(e,t)),a=(e,t)=>s=>s(((e,t)=>({type:i.Bw,id:e,initialState:t}))(e,t)),l=(e,t)=>s=>s(n(e,t)),c=(e,t)=>s=>s(((e,t)=>n(e,{[r]:t}))(e,t))},98954:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(10620);const r=(e,t,s)=>{if("object"!=typeof i.db.cgmaps[e][t])return"";const[r,n]=`${s}`.split("-");return"string"!=typeof i.db.cgmaps[e][t][r]?"":`/pics/${i.db.cgmaps[e][t][r]}${n?`/m${n}`:""}`},n=(e,t,s,o)=>{const a=i.db.ships[1],l=i.db.entities[1];if("object"==typeof e){if(e.constructor===a.constructor)return n("ship",e.id,t);if(e.constructor===l.constructor)return n("entity",e.id,t)}if(void 0!==t&&void 0===s){const s=t.split("/");return s.length>1?n(e,s[0],s[1].split(".")[0]):""}switch(o=o?"?"+o:"",e){case"ship":case"ships":return r("ships",t,s);case"ship-extra":case"ships-extra":return r("shipsExtra",t,s);case"equipment":case"equipments":return r("equipments",t,s);case"entity":case"entities":return r("entities",t,s);case"enemy":case"enemies":return`enemies/${t}/${s}.png${o}`}},o=(e,t,s,i)=>n(e,t,s,i)},54596:(e,t,s)=>{s.d(t,{Z:()=>d});var i,r=s(19494),n=s(88767),o=s.n(n),a=s(26489),l=s(97118);function c(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const d=(0,a.Z)({styles:s(97010)})(i=class extends r.Component{constructor(...e){super(...e),c(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),c(this,"onLoad",this.onLoad.bind(this)),c(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:s,tag:i,component:r,src:n,img:a,pic:c,picture:d,styleImg:p,...h}=this.props,m=i||r||"span",b=n||a||c||d||void 0;return(0,l.jsxs)(m,{className:o()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...h,children:[(0,l.jsx)("img",{className:o()(["img",t]),src:b,onLoad:this.onLoad,onError:this.onError,style:p,loading:"lazy",alt:i}),s]})}})||i},94676:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(88767),r=s.n(i),n=s(26489),o=s(56207),a=s(97118);const l=(0,n.Z)({styles:s(45803)})((({className:e,mainClassName:t,optionsClassName:s,main:i,options:n,children:l,...c})=>{const d=void 0!==n;return(0,a.jsxs)(o.Z,{className:r()([e,{"has-options":d}]),...c,children:[(0,a.jsxs)("div",{className:r()(["wrapper",t]),children:[i,l]}),d&&(0,a.jsx)("div",{className:r()(["dimmed",s]),children:n})]})}))},40383:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(19494),r=s(26489),n=s(53027),o=s(97118);const a=(0,r.Z)({styles:s(36969)})((0,i.memo)((({className:e,component:t,tag:s,element:i})=>{const r=t||s||i||"span";return(0,o.jsxs)(r,{className:e,children:[(0,o.jsx)(n.Z,{icon:"warning2",className:"icon"}),"工事中"]})})))},63027:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var i=s(19494),r=s(26489),n=s(88767),o=s.n(n),a=s(9459),l=s(98954),c=s(10620),d=s(37277),p=s(26674),h=s(13545),m=s(54596),b=s(40383),g=s(94676);var u,f=s(97118);const x="PAGE_EXILLUSTS",y=[8,9],v=(0,r.Z)({connect:[e=>e.pages[x]||{},e=>({init:t=>e((0,d.S1)(x,{[d.BT]:t})),changeTab:t=>(window.scrollTo(0,0),e((0,d.$5)(x,t)))})],pageinfo:e=>(0,a.Z)(e,{title:"期間限定図鑑"}),styles:{wrapper:"ee66fb52",css:".ee66fb52 .header{line-height:unset}.ee66fb52 .tabs{margin-left:-1.5rem;margin-right:-1.5rem;top:0}.ee66fb52 .tabs>.wrapper{margin-right:-.5rem;overflow:hidden}.ee66fb52 .tab{display:block;float:left;font-size:smaller;line-height:1.2em;margin-right:.5rem;padding:.2em .5em;text-shadow:.05rem .05rem .15rem rgba(0,0,0,.75)}.ee66fb52 .tab.on{background:hsla(0,0%,100%,.2);color:#fff}"}})(u=class extends i.Component{constructor(){super(),this.types=[];for(const e in c.db.exillustTypes)this.types[e]=Object.assign(c.db.exillustTypes[e],{list:[]});for(const e in c.db.exillusts){const t=c.db.exillusts[e];this.types[t.type]&&this.types[t.type].list.push(t)}this.types=this.types.filter((e=>!!e)).sort(((e,t)=>e.sort-t.sort)),this.state={selected:void 0}}render(){if(void 0===this.props[d.BT])return this.props.init(0),null;const e=this.types[this.props[d.BT]];return e?(0,f.jsxs)(p.Z,{className:this.props.className,children:[(0,f.jsx)(g.Z,{title:"期間限定図鑑",className:"header",main:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.Z,{}),(0,f.jsx)("div",{className:"tabs",children:(0,f.jsx)("div",{className:"wrapper",children:this.types.map(((e,t)=>(0,f.jsx)(w,{index:t,name:e._name,count:e.list.length,isOn:t===this.props[d.BT],cbChangeTab:this.props.changeTab},t)))})})]})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"title",children:[(0,f.jsx)(h.Z,{type:"inline-block",component:"h2",children:e._name}),e._time&&(0,f.jsxs)("small",{children:[" (",e._time,")"]})]}),e.list.reverse().map((e=>(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"300px",position:"relative",marginTop:"1em"},children:y.map((t=>(0,f.jsx)("div",{style:{flex:"1",position:"relative",height:"100%"},children:(e.exclude||[]).includes(t)?(0,f.jsx)("div",{style:{color:"rgba(255,255,255,.15)",fontSize:"3rem",display:"block",position:"absolute",width:"100%",height:"0",textAlign:"center",top:"50%",lineHeight:"0",fontWeight:"100"},children:"无"}):(0,f.jsx)(m.Z,{src:(0,l.Z)("ship-extra",e.id,t),style:{display:"block",position:"absolute",width:"100%",height:"100%"},styleImg:{display:"block",position:"absolute",width:"100%",height:"100%",objectFit:"contain"}})},t)))},e.id)))]})]}):null}})||u,w=(0,i.memo)((({index:e,name:t,count:s,isOn:i,cbChangeTab:r})=>(0,f.jsxs)("span",{className:o()(["tab",{on:i}]),onClick:function(){r(e)},children:[t," (",s,")"]})))},97010:(e,t,s)=>{s.r(t),s.d(t,{css:()=>r,default:()=>n,wrapper:()=>i});const i="b217b232",r='.b217b232{position:relative}.b217b232.is-loading>.img{opacity:0;z-index:-1000}.b217b232.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid rgba(237,240,242,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',n={wrapper:i,css:r}},45803:(e,t,s)=>{s.r(t),s.d(t,{css:()=>r,default:()=>n,wrapper:()=>i});const i="bb3e8dce",r='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',n={wrapper:i,css:r}},36969:(e,t,s)=>{s.r(t),s.d(t,{css:()=>r,default:()=>n,wrapper:()=>i});const i="b069b19b",r=".b069b19b{background:hsla(5,100%,75%,.1);border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;color:#ff8a80;display:block;font-size:1rem;padding:.5rem;text-align:center}.b069b19b .icon{height:1rem;margin-right:.25rem;vertical-align:text-bottom;width:1rem}[lang^=ja] .b069b19b .icon{vertical-align:top}",n={wrapper:i,css:r}}}]);