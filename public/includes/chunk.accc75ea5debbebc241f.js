"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[502],{4834:(e,a,t)=>{t.d(a,{Yr:()=>d,qE:()=>l,UT:()=>c,p$:()=>m,O_:()=>h,Eo:()=>b,nr:()=>p,S1:()=>u,NM:()=>w,MZ:()=>g,sU:()=>y});var r=t(63343),n=t(15895),s=t(22276);let i;const o={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},d=4,l=6,c=3,m=4,f=()=>new Promise((e=>"undefined"==typeof Nedb?t.e(667).then(t.t.bind(t,77515,23)).then((a=>{self.Nedb=a.default,e()})):e())).then((()=>new Promise(((e,a)=>{i=new Nedb({filename:"fleets",timestampData:!0}),i.loadDatabase((t=>{if(t)return a(t);e()}))})))),h=(e={})=>void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases),b=(e={})=>{if(!h(e))return;const a={...e};return delete a.history,delete a.currentTab,`/fleets/${e._id}.${(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}`},p=e=>JSON.parse((0,r.decompressFromEncodedURIComponent)(e)),u=()=>e=>f().then((()=>new Promise(((e,a)=>{i.find({},((t,r)=>{if(t)return a(t);e(r)}))})))).then((a=>e({type:n.jK,builds:a}))),w=e=>a=>f().then((()=>new Promise(((e,a)=>{i.insert(o,((t,r)=>{if(t)return a(t);e(r)}))})))).then((t=>(a({type:n.tS,data:t}),e&&(0,s.Z)(b(t)),t))),g=(e,a)=>t=>f().then((()=>(e=Object.assign({},o,e),t({type:n.tS,data:e}),a&&(0,s.Z)(b(e)),e))),y=e=>a=>a({type:n.Q6,tab:e})},22276:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(76682);const n=e=>{(0,r.getHistory)().push(("/"!==e.substr(0,1)?"/":"")+e)}},95725:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(19494),n=t(99245),s=t(88767),i=t.n(s),o=t(26489),d=t(97118);const l=(0,o.Z)({styles:t(77257)})((0,r.memo)((({className:e,children:a,tag:t,component:r,href:s,link:o,to:l,type:c,color:m,size:f,state:h,onClick:b,...p})=>{let u;u=t||r||(l?n.rU:s||o?"a":"button");const w="disable"===h||"disabled"===h,g=c||("button"===u?"button":void 0),y=s||o||void 0;return(0,d.jsx)(u,{className:i()(["button",e],{[`mod-color-${m}`]:m,[`mod-size-${f}`]:f,[`is-state-${h}`]:!w&&h}),href:y,to:l,type:g,disabled:w,onClick:function(e){e.target.blur(),"function"==typeof b&&b(e)},...p,children:a})})))},92716:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(19494),n=t(26489),s=t(97118);const i=(0,n.Z)({styles:t(94510)})((0,r.memo)((e=>(0,s.jsx)("span",{...e}))))},94676:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(88767),n=t.n(r),s=t(26489),i=t(56207),o=t(97118);const d=(0,s.Z)({styles:t(94005)})((({className:e,mainClassName:a,optionsClassName:t,main:r,options:s,children:d,...l})=>{const c=void 0!==s;return(0,o.jsxs)(i.Z,{className:n()([e,{"has-options":c}]),...l,children:[(0,o.jsxs)("div",{className:n()(["wrapper",a]),children:[r,d]}),c&&(0,o.jsx)("div",{className:n()(["dimmed",t]),children:s})]})}))},89750:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(26489),n=t(97118);const s=(0,r.Z)({styles:t(12017)})((({className:e,children:a})=>(0,n.jsx)("div",{className:e,children:a})))},31146:(e,a,t)=>{t.r(a),t.d(a,{default:()=>y});var r,n=t(19494),s=t(88767),i=t.n(s),o=t(26489),d=t(99245),l=t(4834),c=t(9459),m=t(39490),f=t(26674),h=t(89750),b=t(95725),p=t(13545),u=t(92716),w=t(94676),g=t(97118);const y=(0,o.Z)({pageinfo:e=>(0,c.Z)(e,{title:"舰队模拟"})})((()=>(0,g.jsx)(f.Z,{children:(0,g.jsx)(v,{})})));let v=(0,o.Z)({connect:!0,styles:t(52080)})(r=class extends n.Component{constructor(...e){var a,t;super(...e),t={ready:!1},(a="state")in this?Object.defineProperty(this,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[a]=t}componentDidMount(){Promise.all([this.props.dispatch((0,l.S1)()),new Promise((e=>setTimeout((()=>e()),window[m.V1]?0:2e3)))]).then((()=>{this.setState({ready:!0})}))}render(){if(!this.state.ready)return(0,g.jsx)(h.Z,{className:i()([this.props.className,"is-initializing"]),children:(0,g.jsx)(u.Z,{className:"loader"})});const{className:e}=this.props;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(x,{className:e+"-header"}),(0,g.jsx)("div",{className:e,children:(0,g.jsx)(k,{className:e+"-list"})})]})}})||r;const x=(0,o.Z)({connect:!0})((({className:e,dispatch:a})=>(0,g.jsx)(w.Z,{className:e,main:(0,g.jsxs)(n.Fragment,{children:["建设中",(0,g.jsx)(b.Z,{children:"NEW BUILD",onClick:function(){a((0,l.NM)(!0))}})]})}))),k=(0,o.Z)({connect:e=>({builds:e.fleets.builds})})((({builds:e,dispatch:a})=>{e=e.filter((e=>!!(0,l.O_)(e)));const t=Array.isArray(e)&&e.length>0;return(0,g.jsxs)(n.Fragment,{children:[(0,g.jsx)(p.Z,{component:"h2",children:"建设中"}),t&&e.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(d.rU,{to:(0,l.Eo)(e),children:e._id})},e._id))),!t&&(0,g.jsx)("div",{children:(0,g.jsx)(b.Z,{children:"NEW BUILD",onClick:function(){a((0,l.NM)(!0))}})})]})}))},77257:(e,a,t)=>{t.r(a),t.d(a,{wrapper:()=>r,css:()=>n,default:()=>s});const r="e8e7d007",n=".e8e7d007{background:rgba(176,190,196,.15);border:.05rem solid rgba(176,190,196,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .e8e7d007{cursor:pointer}html.is-hover .e8e7d007:hover{background:rgba(176,190,196,.4);color:#fff}.e8e7d007.is-state-active,.e8e7d007:active,html.is-hover .e8e7d007:hover.is-state-active,html.is-hover .e8e7d007:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,196,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.e8e7d007:focus{outline:0}.e8e7d007:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.e8e7d007[disabled]{color:rgba(185,205,214,.55);opacity:.6}",s={wrapper:r,css:n}},94510:(e,a,t)=>{t.r(a),t.d(a,{wrapper:()=>n,css:()=>s,default:()=>i});var r=t(11471);const n="aa3638ff",s='.aa3638ff{-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite;background:url("'+r+'") no-repeat 50% 0/contain;display:inline-block;height:6.25rem;position:relative;width:6.65rem}@-webkit-keyframes loader-fairy-ooyodo-2{.aa3638ff 0%{-webkit-transform:none;transform:none}.aa3638ff 10%{-webkit-transform:none;transform:none}.aa3638ff 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 30%{-webkit-transform:none;transform:none}.aa3638ff 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 50%{-webkit-transform:none;transform:none}.aa3638ff to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}',i={wrapper:n,css:s}},94005:(e,a,t)=>{t.r(a),t.d(a,{wrapper:()=>r,css:()=>n,default:()=>s});const r="bb3e8dce",n='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',s={wrapper:r,css:n}},12017:(e,a,t)=>{t.r(a),t.d(a,{wrapper:()=>r,css:()=>n,default:()=>s});const r="f4f0218c",n=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",s={wrapper:r,css:n}},52080:(e,a,t)=>{t.r(a),t.d(a,{wrapper:()=>r,css:()=>n,default:()=>s});const r="a216ac16",n='.a216ac16{border-top:3rem solid transparent}.a216ac16.is-initializing{height:calc(100vh - 2.5rem);text-align:center;vertical-align:middle}@media (max-width:850px){.a216ac16.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.a216ac16.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.a216ac16.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.a216ac16.is-initializing{border-bottom:1.2rem solid transparent}}.a216ac16.is-initializing .loader{display:inline-block;margin:0 auto;vertical-align:middle}.a216ac16.is-initializing:before{content:"";display:inline-block;height:100%;overflow:hidden;vertical-align:middle;width:0}.a216ac16,.a216ac16-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}',s={wrapper:r,css:n}},11471:(e,a,t)=>{e.exports=t.p+"includes/asset.6370acf8906567849d16.png"}}]);