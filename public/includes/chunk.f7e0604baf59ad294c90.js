"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[376],{4834:(e,t,r)=>{r.d(t,{Eo:()=>b,MZ:()=>g,NM:()=>w,O_:()=>h,S1:()=>u,UT:()=>c,Yr:()=>d,nr:()=>p,p$:()=>m,qE:()=>l,sU:()=>y});var a=r(63343),n=r(15895),i=r(22276);let s;const o={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},d=4,l=6,c=3,m=4,f=()=>new Promise((e=>"undefined"==typeof Nedb?r.e(667).then(r.t.bind(r,77515,23)).then((t=>{self.Nedb=t.default,e()})):e())).then((()=>new Promise(((e,t)=>{s=new Nedb({filename:"fleets",timestampData:!0}),s.loadDatabase((r=>{if(r)return t(r);e()}))})))),h=(e={})=>void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases),b=(e={})=>{if(!h(e))return;const t={...e};return delete t.history,delete t.currentTab,`/fleets/${e._id}.${(0,a.compressToEncodedURIComponent)(JSON.stringify(t))}`},p=e=>JSON.parse((0,a.decompressFromEncodedURIComponent)(e)),u=()=>e=>f().then((()=>new Promise(((e,t)=>{s.find({},((r,a)=>{if(r)return t(r);e(a)}))})))).then((t=>e({type:n.jK,builds:t}))),w=e=>t=>f().then((()=>new Promise(((e,t)=>{s.insert(o,((r,a)=>{if(r)return t(r);e(a)}))})))).then((r=>(t({type:n.tS,data:r}),e&&(0,i.Z)(b(r)),r))),g=(e,t)=>r=>f().then((()=>(e=Object.assign({},o,e),r({type:n.tS,data:e}),t&&(0,i.Z)(b(e)),e))),y=e=>t=>t({type:n.Q6,tab:e})},22276:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(76682);const n=e=>{(0,a.getHistory)().push(("/"!==e.substr(0,1)?"/":"")+e)}},95725:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(19494),n=r(99245),i=r(14003),s=r.n(i),o=r(26489),d=r(97118);const l=(0,o.Z)({styles:r(96677)})((0,a.memo)((({className:e,children:t,tag:r,component:a,href:i,link:o,to:l,type:c,color:m,size:f,state:h,onClick:b,...p})=>{let u;u=r||a||(l?n.rU:i||o?"a":"button");const w="disable"===h||"disabled"===h,g=c||("button"===u?"button":void 0),y=i||o||void 0;return(0,d.jsx)(u,{className:s()(["button",e],{[`mod-color-${m}`]:m,[`mod-size-${f}`]:f,[`is-state-${h}`]:!w&&h}),href:y,to:l,type:g,disabled:w,onClick:function(e){e.target.blur(),"function"==typeof b&&b(e)},...p,children:t})})))},92716:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(19494),n=r(26489),i=r(97118);const s=(0,n.Z)({styles:r(86834)})((0,a.memo)((e=>(0,i.jsx)("span",{...e}))))},94676:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(14003),n=r.n(a),i=r(26489),s=r(56207),o=r(97118);const d=(0,i.Z)({styles:r(86648)})((({className:e,mainClassName:t,optionsClassName:r,main:a,options:i,children:d,...l})=>{const c=void 0!==i;return(0,o.jsxs)(s.Z,{className:n()([e,{"has-options":c}]),...l,children:[(0,o.jsxs)("div",{className:n()(["wrapper",t]),children:[a,d]}),c&&(0,o.jsx)("div",{className:n()(["dimmed",r]),children:i})]})}))},89750:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(26489),n=r(97118);const i=(0,a.Z)({styles:r(98118)})((({className:e,children:t})=>(0,n.jsx)("div",{className:e,children:t})))},31146:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a,n=r(19494),i=r(14003),s=r.n(i),o=r(26489),d=r(99245),l=r(4834),c=r(9459),m=r(39490),f=r(26674),h=r(89750),b=r(95725),p=r(13545),u=r(92716),w=r(94676),g=r(97118);const y=(0,o.Z)({pageinfo:e=>(0,c.Z)(e,{title:"艦隊ビルダー"})})((()=>(0,g.jsx)(f.Z,{children:(0,g.jsx)(v,{})})));let v=(0,o.Z)({connect:!0,styles:r(69072)})(a=class extends n.Component{constructor(...e){var t,r,a,n;super(...e),t=this,a={ready:!1},(r="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r="state"))?n:String(n))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a}componentDidMount(){Promise.all([this.props.dispatch((0,l.S1)()),new Promise((e=>setTimeout((()=>e()),window[m.V1]?0:2e3)))]).then((()=>{this.setState({ready:!0})}))}render(){if(!this.state.ready)return(0,g.jsx)(h.Z,{className:s()([this.props.className,"is-initializing"]),children:(0,g.jsx)(u.Z,{className:"loader"})});const{className:e}=this.props;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(x,{className:e+"-header"}),(0,g.jsx)("div",{className:e,children:(0,g.jsx)(k,{className:e+"-list"})})]})}})||a;const x=(0,o.Z)({connect:!0})((({className:e,dispatch:t})=>(0,g.jsx)(w.Z,{className:e,main:(0,g.jsxs)(n.Fragment,{children:["工事中",(0,g.jsx)(b.Z,{children:"NEW BUILD",onClick:function(){t((0,l.NM)(!0))}})]})}))),k=(0,o.Z)({connect:e=>({builds:e.fleets.builds})})((({builds:e,dispatch:t})=>{e=e.filter((e=>!!(0,l.O_)(e)));const r=Array.isArray(e)&&e.length>0;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(p.Z,{component:"h2",children:"工事中"}),r&&e.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(d.rU,{to:(0,l.Eo)(e),children:e._id})},e._id))),!r&&(0,g.jsx)("div",{children:(0,g.jsx)(b.Z,{children:"NEW BUILD",onClick:function(){t((0,l.NM)(!0))}})})]})}))},96677:(e,t,r)=>{r.r(t),r.d(t,{css:()=>n,default:()=>i,wrapper:()=>a});const a="e8e7d007",n=".e8e7d007{background:rgba(176,190,196,.15);border:.05rem solid rgba(176,190,196,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .e8e7d007{cursor:pointer}html.is-hover .e8e7d007:hover{background:rgba(176,190,196,.4);color:#fff}.e8e7d007.is-state-active,.e8e7d007:active,html.is-hover .e8e7d007:hover.is-state-active,html.is-hover .e8e7d007:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,196,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.e8e7d007:focus{outline:0}.e8e7d007:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.e8e7d007[disabled]{color:rgba(185,205,214,.55);opacity:.6}",i={wrapper:a,css:n}},86834:(e,t,r)=>{r.r(t),r.d(t,{css:()=>i,default:()=>s,wrapper:()=>n});const a=r.p+"includes/asset.6370acf8906567849d16.png",n="aa3638ff",i='.aa3638ff{-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite;background:url("'+a+'") no-repeat 50% 0/contain;display:inline-block;height:6.25rem;position:relative;width:6.65rem}@-webkit-keyframes loader-fairy-ooyodo-2{.aa3638ff 0%{-webkit-transform:none;transform:none}.aa3638ff 10%{-webkit-transform:none;transform:none}.aa3638ff 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 30%{-webkit-transform:none;transform:none}.aa3638ff 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 50%{-webkit-transform:none;transform:none}.aa3638ff to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}',s={wrapper:n,css:i}},86648:(e,t,r)=>{r.r(t),r.d(t,{css:()=>n,default:()=>i,wrapper:()=>a});const a="bb3e8dce",n='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',i={wrapper:a,css:n}},98118:(e,t,r)=>{r.r(t),r.d(t,{css:()=>n,default:()=>i,wrapper:()=>a});const a="f4f0218c",n=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",i={wrapper:a,css:n}},69072:(e,t,r)=>{r.r(t),r.d(t,{css:()=>n,default:()=>i,wrapper:()=>a});const a="a216ac16",n='.a216ac16{border-top:3rem solid transparent}.a216ac16.is-initializing{height:calc(100vh - 2.5rem);text-align:center;vertical-align:middle}@media (max-width:850px){.a216ac16.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.a216ac16.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.a216ac16.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.a216ac16.is-initializing{border-bottom:1.2rem solid transparent}}.a216ac16.is-initializing .loader{display:inline-block;margin:0 auto;vertical-align:middle}.a216ac16.is-initializing:before{content:"";display:inline-block;height:100%;overflow:hidden;vertical-align:middle;width:0}.a216ac16,.a216ac16-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}',i={wrapper:a,css:n}}}]);