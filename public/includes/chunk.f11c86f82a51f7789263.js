(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[835],{37277:(e,s,t)=>{"use strict";t.d(s,{BT:()=>r,$5:()=>c,S1:()=>a,mc:()=>o,Vx:()=>l});var i=t(15895);const r="__tabIndex",n=(e,s)=>({type:i.fj,id:e,state:s}),a=(e,s)=>t=>t(((e,s)=>({type:i.DQ,id:e,initialState:s}))(e,s)),o=(e,s)=>t=>t(((e,s)=>({type:i.Bw,id:e,initialState:s}))(e,s)),l=(e,s)=>t=>t(n(e,s)),c=(e,s)=>t=>t(((e,s)=>n(e,{[r]:s}))(e,s))},98954:(e,s,t)=>{"use strict";t.d(s,{Z:()=>a});var i=t(10620);const r=(e,s,t)=>{if("object"!=typeof i.db.cgmaps[e][s])return"";const[r,n]=`${t}`.split("-");return"string"!=typeof i.db.cgmaps[e][s][r]?"":`/pics/${i.db.cgmaps[e][s][r]}${n?`/m${n}`:""}`},n=(e,s,t,a)=>{const o=i.db.ships[1],l=i.db.entities[1];if("object"==typeof e){if(e.constructor===o.constructor)return n("ship",e.id,s);if(e.constructor===l.constructor)return n("entity",e.id,s)}if(void 0!==s&&void 0===t){const t=s.split("/");return t.length>1?n(e,t[0],t[1].split(".")[0]):""}switch(a=a?"?"+a:"",e){case"ship":case"ships":return r("ships",s,t);case"ship-extra":case"ships-extra":return r("shipsExtra",s,t);case"equipment":case"equipments":return r("equipments",s,t);case"entity":case"entities":return r("entities",s,t);case"enemy":case"enemies":return`enemies/${s}/${t}.png${a}`}},a=(e,s,t,i)=>n(e,s,t,i)},54596:(e,s,t)=>{"use strict";t.d(s,{Z:()=>d});var i,r=t(19494),n=t(88767),a=t.n(n),o=t(240),l=t(97118);function c(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const d=(0,o.Z)({styles:t(97010)})(i=class extends r.Component{constructor(...e){super(...e),c(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),c(this,"onLoad",this.onLoad.bind(this)),c(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:s,children:t,tag:i,component:r,src:n,img:o,pic:c,picture:d,styleImg:p,...h}=this.props,m=i||r||"span",b=n||o||c||d||void 0;return(0,l.jsxs)(m,{className:a()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...h,children:[(0,l.jsx)("img",{className:a()(["img",s]),src:b,onLoad:this.onLoad,onError:this.onError,style:p,loading:"lazy",alt:i}),t]})}})||i},94676:(e,s,t)=>{"use strict";t.d(s,{Z:()=>l});var i=t(88767),r=t.n(i),n=t(240),a=t(56207),o=t(97118);const l=(0,n.Z)({styles:t(45803)})((({className:e,mainClassName:s,optionsClassName:t,main:i,options:n,children:l,...c})=>{const d=void 0!==n;return(0,o.jsxs)(a.Z,{className:r()([e,{"has-options":d}]),...c,children:[(0,o.jsxs)("div",{className:r()(["wrapper",s]),children:[i,l]}),d&&(0,o.jsx)("div",{className:r()(["dimmed",t]),children:n})]})}))},40383:(e,s,t)=>{"use strict";t.d(s,{Z:()=>o});var i=t(19494),r=t(240),n=t(53027),a=t(97118);const o=(0,r.Z)({styles:t(36969)})((0,i.memo)((({className:e,component:s,tag:t,element:i})=>{const r=s||t||i||"span";return(0,a.jsxs)(r,{className:e,children:[(0,a.jsx)(n.Z,{icon:"warning2",className:"icon"}),"工事中"]})})))},63027:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>w});var i=t(19494),r=t(240),n=t(88767),a=t.n(n),o=t(9459),l=t(98954),c=t(10620),d=t(37277),p=t(26674),h=t(13545),m=t(54596),b=t(40383),g=t(94676);var u,f=t(97118);const x="PAGE_EXILLUSTS",y=[8,9],w=(0,r.Z)({connect:[e=>e.pages[x]||{},e=>({init:s=>e((0,d.S1)(x,{[d.BT]:s})),changeTab:s=>(window.scrollTo(0,0),e((0,d.$5)(x,s)))})],pageinfo:e=>(0,o.Z)(e,{title:"期間限定図鑑"}),styles:{wrapper:"ee66fb52",css:".ee66fb52 .header{line-height:unset}.ee66fb52 .tabs{margin-left:-1.5rem;margin-right:-1.5rem;top:0}.ee66fb52 .tabs>.wrapper{margin-right:-.5rem;overflow:hidden}.ee66fb52 .tab{display:block;float:left;font-size:smaller;line-height:1.2em;margin-right:.5rem;padding:.2em .5em;text-shadow:.05rem .05rem .15rem rgba(0,0,0,.75)}.ee66fb52 .tab.on{background:hsla(0,0%,100%,.2);color:#fff}"}})(u=class extends i.Component{constructor(){super(),this.types=[];for(const e in c.db.exillustTypes)this.types[e]=Object.assign(c.db.exillustTypes[e],{list:[]});for(const e in c.db.exillusts){const s=c.db.exillusts[e];this.types[s.type]&&this.types[s.type].list.push(s)}this.types=this.types.filter((e=>!!e)).sort(((e,s)=>e.sort-s.sort)),this.state={selected:void 0}}render(){if(void 0===this.props[d.BT])return this.props.init(0),null;const e=this.types[this.props[d.BT]];return e?(0,f.jsxs)(p.Z,{className:this.props.className,children:[(0,f.jsx)(g.Z,{title:"期間限定図鑑",className:"header",main:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(b.Z,{}),(0,f.jsx)("div",{className:"tabs",children:(0,f.jsx)("div",{className:"wrapper",children:this.types.map(((e,s)=>(0,f.jsx)(j,{index:s,name:e._name,count:e.list.length,isOn:s===this.props[d.BT],cbChangeTab:this.props.changeTab},s)))})})]})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"title",children:[(0,f.jsx)(h.Z,{type:"inline-block",component:"h2",children:e._name}),e._time&&(0,f.jsxs)("small",{children:[" (",e._time,")"]})]}),e.list.reverse().map((e=>(0,f.jsx)("div",{style:{display:"flex",flexFlow:"row nowrap",height:"300px",position:"relative",marginTop:"1em"},children:y.map((s=>(0,f.jsx)("div",{style:{flex:"1",position:"relative",height:"100%"},children:(e.exclude||[]).includes(s)?(0,f.jsx)("div",{style:{color:"rgba(255,255,255,.15)",fontSize:"3rem",display:"block",position:"absolute",width:"100%",height:"0",textAlign:"center",top:"50%",lineHeight:"0",fontWeight:"100"},children:"无"}):(0,f.jsx)(m.Z,{src:(0,l.Z)("ship-extra",e.id,s),style:{display:"block",position:"absolute",width:"100%",height:"100%"},styleImg:{display:"block",position:"absolute",width:"100%",height:"100%",objectFit:"contain"}})},s)))},e.id)))]})]}):null}})||u,j=(0,i.memo)((({index:e,name:s,count:t,isOn:i,cbChangeTab:r})=>(0,f.jsxs)("span",{className:a()(["tab",{on:i}]),onClick:function(){r(e)},children:[s," (",t,")"]})))},97010:(e,s,t)=>{"use strict";t.r(s),t.d(s,{wrapper:()=>i,css:()=>r,default:()=>n});const i="b217b232",r='.b217b232{position:relative}.b217b232.is-loading>.img{opacity:0;z-index:-1000}.b217b232.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid rgba(237,240,242,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',n={wrapper:i,css:r}},45803:(e,s,t)=>{"use strict";t.r(s),t.d(s,{wrapper:()=>i,css:()=>r,default:()=>n});const i="bb3e8dce",r='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',n={wrapper:i,css:r}},36969:(e,s,t)=>{"use strict";t.r(s),t.d(s,{wrapper:()=>i,css:()=>r,default:()=>n});const i="b73b6627",r=".b73b6627{background:hsla(5,100%,75%,.1);border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;color:#ff8a80;display:block;font-size:1rem;padding:.5rem;text-align:center}.b73b6627 .icon{height:1rem;margin-right:.25rem;vertical-align:text-bottom;width:1rem}",n={wrapper:i,css:r}}}]);