"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[703],{4834:(e,t,a)=>{a.d(t,{Eo:()=>b,MZ:()=>x,NM:()=>g,O_:()=>p,S1:()=>u,UT:()=>m,Yr:()=>d,nr:()=>f,p$:()=>c,qE:()=>l,sU:()=>w});var r=a(63343),i=a(15895),s=a(22276);let n;const o={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},d=4,l=6,m=3,c=4,h=()=>new Promise((e=>"undefined"==typeof Nedb?a.e(667).then(a.t.bind(a,77515,23)).then((t=>{self.Nedb=t.default,e()})):e())).then((()=>new Promise(((e,t)=>{n=new Nedb({filename:"fleets",timestampData:!0}),n.loadDatabase((a=>{if(a)return t(a);e()}))})))),p=(e={})=>void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases),b=(e={})=>{if(!p(e))return;const t={...e};return delete t.history,delete t.currentTab,`/fleets/${e._id}.${(0,r.compressToEncodedURIComponent)(JSON.stringify(t))}`},f=e=>JSON.parse((0,r.decompressFromEncodedURIComponent)(e)),u=()=>e=>h().then((()=>new Promise(((e,t)=>{n.find({},((a,r)=>{if(a)return t(a);e(r)}))})))).then((t=>e({type:i.jK,builds:t}))),g=e=>t=>h().then((()=>new Promise(((e,t)=>{n.insert(o,((a,r)=>{if(a)return t(a);e(r)}))})))).then((a=>(t({type:i.tS,data:a}),e&&(0,s.Z)(b(a)),a))),x=(e,t)=>a=>h().then((()=>(e=Object.assign({},o,e),a({type:i.tS,data:e}),t&&(0,s.Z)(b(e)),e))),w=e=>t=>t({type:i.Q6,tab:e})},22276:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(76682);const i=e=>{(0,r.getHistory)().push(("/"!==e.substr(0,1)?"/":"")+e)}},81648:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(76682);const i=e=>{(0,r.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},95725:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(19494),i=a(99245),s=a(88767),n=a.n(s),o=a(26489),d=a(97118);const l=(0,o.Z)({styles:a(96677)})((0,r.memo)((({className:e,children:t,tag:a,component:r,href:s,link:o,to:l,type:m,color:c,size:h,state:p,onClick:b,...f})=>{let u;u=a||r||(l?i.rU:s||o?"a":"button");const g="disable"===p||"disabled"===p,x=m||("button"===u?"button":void 0),w=s||o||void 0;return(0,d.jsx)(u,{className:n()(["button",e],{[`mod-color-${c}`]:c,[`mod-size-${h}`]:h,[`is-state-${p}`]:!g&&p}),href:w,to:l,type:x,disabled:g,onClick:function(e){e.target.blur(),"function"==typeof b&&b(e)},...f,children:t})})))},92716:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(19494),i=a(26489),s=a(97118);const n=(0,i.Z)({styles:a(86834)})((0,r.memo)((e=>(0,s.jsx)("span",{...e}))))},55445:(e,t,a)=>{a.d(t,{Z:()=>h});var r,i=a(19494),s=(a(99245),a(88767)),n=a.n(s),o=a(26489),d=a(81648),l=a(56207),m=a(13545),c=a(97118);const h=(0,o.Z)({styles:a(8436)})(r=class extends i.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:a,onTabChange:r,tabLink:i=!0}=this.props;let s,o;Array.isArray(e)?(s=e[0],o=e[1]):"object"==typeof e?(s=e.tabId,o=e.tabName):(s=t,o=e);const l=i?`${a}${t?`/${s}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,a=i?"a":"span";return(0,c.jsx)(a,{href:l,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof r&&(e.preventDefault(),r(s,t)),l&&(0,d.Z)(l)},children:o},t)}}render(){const{className:e,title:t,subtitle:a,tabs:r,children:i,...s}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete s[e])),(0,c.jsxs)(l.Z,{className:n()([e,{"has-subtitle":!!a,"has-tabs":!!r,"has-only-title":!i}]),type:"infos",...s,children:[(0,c.jsxs)("div",{className:"infos",children:[t&&(0,c.jsxs)("div",{className:"title",children:[a&&(0,c.jsx)("span",{className:"subtitle",children:a}),(0,c.jsx)(m.Z,{tag:"h1",className:"title-h1",children:t})]}),i]}),r&&(0,c.jsx)("div",{className:"tabs",children:(0,c.jsx)("div",{className:"wrapper",children:r.map(this.renderTab.bind(this))})}),!r&&(0,c.jsx)("div",{className:"tabs-placeholder"})]})}})||r},89750:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(26489),i=a(97118);const s=(0,r.Z)({styles:a(98118)})((({className:e,children:t})=>(0,i.jsx)("div",{className:e,children:t})))},52776:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(88767),i=a.n(r),s=a(26489),n=a(26674),o=a(97118);const d=(0,s.Z)({styles:a(23508)})((({className:e,"has-tabs":t=!0,...a})=>(0,o.jsx)(n.Z,{className:i()({[e]:!0,"has-tabs":t}),...a})))},75383:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var r,i=a(19494),s=a(88767),n=a.n(s),o=a(26489),d=a(4834),l=a(39490),m=a(9459),c=a(52776),h=a(89750),p=a(13545),b=a(92716),f=a(55445),u=a(97118);const g=[];for(let e=0;e<d.Yr;e++)g.push(`#${e+1}`);g.push("基地航空隊");const x=(0,o.Z)({connect:e=>{if(!e.fleets.current)return{};const{name:t,hq_lv:a,_id:r}=e.fleets.current;return{name:t,hq_lv:a,id:r}},styles:a(43584)})(r=class extends i.Component{constructor(...e){var t,a;super(...e),a=e=>{this.props.dispatch((0,d.sU)(e>=d.Yr?"base":e))},(t="onTabChange")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a}onNameUpdate(){this.mounted&&this.lastName!==this.props.name&&((0,m.Z)(void 0,{title:`FLEET: ${this.props.name}`,dispatch:this.props.dispatch}),this.lastName=this.props.name)}componentDidMount(){this.mounted=!0,this.onNameUpdate()}componentDidUpdate(){this.onNameUpdate()}componentWillUnmount(){this.mounted=!1}render(){return(0,u.jsx)(f.Z,{className:this.props.className,title:`${this.props.id} | ${this.props.name}`,tabs:g,tabLink:!1,defaultIndex:0,onTabChange:this.onTabChange})}})||r;var w=a(76682),y=a(95725);const v=(0,o.Z)({connect:e=>{if(!e.fleets.current||"number"!=typeof e.fleets.current.currentTab)return{};const t=e.fleets.current.currentTab;return{id:e.fleets.current._id,index:t,count:Math.max(d.qE,(e.fleets.current.fleets[t]||[]).length)}},styles:a(68549)})((({index:e,count:t,className:a})=>{if("number"!=typeof e)return null;const r=[];function i(){console.log((0,w.getHistory)())}for(let a=0;a<t;a++)r.push((0,u.jsxs)("div",{"data-ship-index":a,"data-fleet-index":e,onClick:i,children:["Fleet #",e+1," | Ship #",a+1]},a));return(0,u.jsxs)("div",{className:a,children:[r,(0,u.jsx)(y.Z,{children:"+ [WIP] ADD"})]})})),k=(0,o.Z)({connect:e=>e.fleets.current&&"base"===e.fleets.current.currentTab?{id:e.fleets.current._id}:{},styles:a(28536)})((({id:e,className:t})=>{if(void 0===e)return null;const a=[];for(let e=0;e<d.UT;e++){const t=[];for(let e=0;e<d.p$;e++)t.push((0,u.jsxs)("div",{"data-squadron-index":e,children:["Squadron #",e+1]},e));a.push((0,u.jsxs)("div",{"data-base-index":e,children:[(0,u.jsxs)("strong",{children:["Base #",e+1]}),t]},e))}return(0,u.jsx)("div",{className:t,children:a})}));var N,j;const Z=(0,o.Z)({pageinfo:e=>(0,m.Z)(e,{title:"艦隊ビルダー"})})(N=class extends i.Component{shouldComponentUpdate(e){return"object"!=typeof e.params||"object"!=typeof this.props.params||e.params.id!==this.props.params.id}render(){return(0,u.jsx)(c.Z,{children:(0,u.jsx)(T,{id:this.props.params.id,initialBuild:(0,d.nr)(this.props.params.build)})})}})||N;let T=(0,o.Z)({connect:(e,t)=>"object"==typeof e.fleets&&Array.isArray(e.fleets.builds)?"object"==typeof e.fleets.current&&t.id===e.fleets.current._id?{status:"is-current"}:e.fleets.builds.some((e=>e._id===t.id))?{status:"build-stored-not-current"}:{status:"build-not-stored"}:{status:"no-nedb"},styles:a(19824)})(j=class extends i.Component{constructor(...e){var t,a;super(...e),a={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a}check(){!this.state.ready&&this.mounted&&Promise.all([new Promise((e=>{switch(this.props.status){case"no-nedb":this.props.dispatch((0,d.S1)()).then(e);break;case"is-current":e();break;case"build-stored-not-current":this.props.dispatch((0,d.MZ)(this.props.initialBuild)).then(e);break;case"build-not-stored":console.warn("WIP: build-not-stored")}})),new Promise((e=>setTimeout((()=>e()),window[l.V1]?0:2e3)))]).then((()=>{this.setState({ready:!0})}))}componentDidMount(){this.mounted=!0,this.check()}componentDidUpdate(){this.check()}componentWillUnmount(){this.mounted=!1}render(){return this.state.ready?"build-not-stored"===this.props.status?(0,u.jsx)(h.Z,{className:n()([this.props.className,"is-initializing"]),children:(0,u.jsxs)("div",{style:{display:"inline-block"},children:[(0,u.jsx)(p.Z,{component:"h4",style:{margin:"0"},children:"W.I.P."}),(0,u.jsx)(p.Z,{component:"h2",style:{marginTop:"5px"},children:"BUILD NOT STORED"})]})}):(0,u.jsxs)("div",{className:n()([this.props.className,"is-ready"]),children:[(0,u.jsx)(x,{className:this.props.className+"-header"}),(0,u.jsx)(v,{}),(0,u.jsx)(k,{})]}):(0,u.jsx)(h.Z,{className:n()([this.props.className,"is-initializing"]),children:(0,u.jsx)(b.Z,{className:"loader"})})}})||j},96677:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="e8e7d007",i=".e8e7d007{background:rgba(176,190,196,.15);border:.05rem solid rgba(176,190,196,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .e8e7d007{cursor:pointer}html.is-hover .e8e7d007:hover{background:rgba(176,190,196,.4);color:#fff}.e8e7d007.is-state-active,.e8e7d007:active,html.is-hover .e8e7d007:hover.is-state-active,html.is-hover .e8e7d007:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,196,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.e8e7d007:focus{outline:0}.e8e7d007:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.e8e7d007[disabled]{color:rgba(185,205,214,.55);opacity:.6}",s={wrapper:r,css:i}},86834:(e,t,a)=>{a.r(t),a.d(t,{css:()=>s,default:()=>n,wrapper:()=>i});const r=a.p+"includes/asset.6370acf8906567849d16.png",i="aa3638ff",s='.aa3638ff{-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite;background:url("'+r+'") no-repeat 50% 0/contain;display:inline-block;height:6.25rem;position:relative;width:6.65rem}@-webkit-keyframes loader-fairy-ooyodo-2{.aa3638ff 0%{-webkit-transform:none;transform:none}.aa3638ff 10%{-webkit-transform:none;transform:none}.aa3638ff 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 30%{-webkit-transform:none;transform:none}.aa3638ff 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 50%{-webkit-transform:none;transform:none}.aa3638ff to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}',n={wrapper:i,css:s}},8436:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="bb5a848e",i='.bb5a848e.mod-infos{padding-top:1rem}@media (max-width:850px){.bb5a848e.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.bb5a848e.mod-infos{padding-top:.75rem}}.bb5a848e .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.bb5a848e .infos{display:none}}@media (min-width:851px) and (max-height:760px){.bb5a848e .infos{margin-bottom:.4rem}}.bb5a848e .title{border-right:.05rem solid rgba(237,240,242,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.bb5a848e .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.bb5a848e .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.bb5a848e .subtitle{margin-bottom:.2rem;margin-top:0}}.bb5a848e.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.bb5a848e.has-only-title .title{border-right:0}.bb5a848e .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.bb5a848e .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.bb5a848e .tabs{height:2.4rem;line-height:2.4rem}}.bb5a848e .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.bb5a848e .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.bb5a848e .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.bb5a848e .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper:after{width:.6rem}}.bb5a848e .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .bb5a848e .tab:hover{color:#fff}.bb5a848e .tab:active,html.is-hover .bb5a848e .tab:hover:active{color:hsla(0,0%,100%,.5)}.bb5a848e .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.bb5a848e .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.bb5a848e .tab{height:2.35rem}}.bb5a848e .tabs-placeholder{height:.3rem}@media (max-width:850px){.bb5a848e .tabs-placeholder{display:none}}',s={wrapper:r,css:i}},98118:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="f4f0218c",i=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",s={wrapper:r,css:i}},23508:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="c314482c",i=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",s={wrapper:r,css:i}},28536:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="dd41d8cd5",i="",s={wrapper:r,css:i}},68549:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="dd41d8cd7",i="",s={wrapper:r,css:i}},43584:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="dd41d8cd6",i="",s={wrapper:r,css:i}},19824:(e,t,a)=>{a.r(t),a.d(t,{css:()=>i,default:()=>s,wrapper:()=>r});const r="aa456c67",i='.aa456c67.is-initializing{height:calc(100vh - 2.5rem);left:0;position:absolute;right:0;text-align:center;top:0;vertical-align:middle}@media (max-width:850px){.aa456c67.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.aa456c67.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.aa456c67.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.aa456c67.is-initializing{border-bottom:1.2rem solid transparent}}.aa456c67.is-initializing .loader{display:inline-block;margin:0 auto;vertical-align:middle}.aa456c67.is-initializing:before{content:"";display:inline-block;height:100%;overflow:hidden;vertical-align:middle;width:0}.aa456c67.is-ready{margin-top:2rem}.aa456c67,.aa456c67-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}',s={wrapper:r,css:i}}}]);