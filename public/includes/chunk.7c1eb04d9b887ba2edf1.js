(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[502],{4834:(e,t,a)=>{"use strict";a.d(t,{Yr:()=>d,qE:()=>l,UT:()=>c,p$:()=>m,O_:()=>h,Eo:()=>p,nr:()=>b,S1:()=>u,NM:()=>w,MZ:()=>g,sU:()=>y});var r=a(63343),s=a(15895),n=a(22276);let i;const o={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},d=4,l=6,c=3,m=4,f=()=>new Promise((e=>"undefined"==typeof Nedb?a.e(667).then(a.t.bind(a,77515,23)).then((t=>{self.Nedb=t.default,e()})):e())).then((()=>new Promise(((e,t)=>{i=new Nedb({filename:"fleets",timestampData:!0}),i.loadDatabase((a=>{if(a)return t(a);e()}))})))),h=(e={})=>void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases),p=(e={})=>{if(!h(e))return;const t={...e};return delete t.history,delete t.currentTab,`/fleets/${e._id}.${(0,r.compressToEncodedURIComponent)(JSON.stringify(t))}`},b=e=>JSON.parse((0,r.decompressFromEncodedURIComponent)(e)),u=()=>e=>f().then((()=>new Promise(((e,t)=>{i.find({},((a,r)=>{if(a)return t(a);e(r)}))})))).then((t=>e({type:s.jK,builds:t}))),w=e=>t=>f().then((()=>new Promise(((e,t)=>{i.insert(o,((a,r)=>{if(a)return t(a);e(r)}))})))).then((a=>(t({type:s.tS,data:a}),e&&(0,n.Z)(p(a)),a))),g=(e,t)=>a=>f().then((()=>(e=Object.assign({},o,e),a({type:s.tS,data:e}),t&&(0,n.Z)(p(e)),e))),y=e=>t=>t({type:s.Q6,tab:e})},22276:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(76682);const s=e=>{(0,r.getHistory)().push(("/"!==e.substr(0,1)?"/":"")+e)}},95725:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(19494),s=a(99245),n=a(88767),i=a.n(n),o=a(240),d=a(97118);const l=(0,o.Z)({styles:a(96677)})((0,r.memo)((({className:e,children:t,tag:a,component:r,href:n,link:o,to:l,type:c,color:m,size:f,state:h,onClick:p,...b})=>{let u;u=a||r||(l?s.rU:n||o?"a":"button");const w="disable"===h||"disabled"===h,g=c||("button"===u?"button":void 0),y=n||o||void 0;return(0,d.jsx)(u,{className:i()(["button",e],{[`mod-color-${m}`]:m,[`mod-size-${f}`]:f,[`is-state-${h}`]:!w&&h}),href:y,to:l,type:g,disabled:w,onClick:function(e){e.target.blur(),"function"==typeof p&&p(e)},...b,children:t})})))},92716:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(19494),s=a(240),n=a(97118);const i=(0,s.Z)({styles:a(6563)})((0,r.memo)((e=>(0,n.jsx)("span",{...e}))))},94676:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(88767),s=a.n(r),n=a(240),i=a(56207),o=a(97118);const d=(0,n.Z)({styles:a(45803)})((({className:e,mainClassName:t,optionsClassName:a,main:r,options:n,children:d,...l})=>{const c=void 0!==n;return(0,o.jsxs)(i.Z,{className:s()([e,{"has-options":c}]),...l,children:[(0,o.jsxs)("div",{className:s()(["wrapper",t]),children:[r,d]}),c&&(0,o.jsx)("div",{className:s()(["dimmed",a]),children:n})]})}))},89750:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(240),s=a(97118);const n=(0,r.Z)({styles:a(98118)})((({className:e,children:t})=>(0,s.jsx)("div",{className:e,children:t})))},31146:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var r,s=a(19494),n=a(88767),i=a.n(n),o=a(240),d=a(99245),l=a(4834),c=a(9459),m=a(39490),f=a(26674),h=a(89750),p=a(95725),b=a(13545),u=a(92716),w=a(94676),g=a(97118);const y=(0,o.Z)({pageinfo:e=>(0,c.Z)(e,{title:"舰队模拟"})})((()=>(0,g.jsx)(f.Z,{children:(0,g.jsx)(v,{})})));let v=(0,o.Z)({connect:!0,styles:a(69072)})(r=class extends s.Component{constructor(...e){var t,a;super(...e),a={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):this[t]=a}componentDidMount(){Promise.all([this.props.dispatch((0,l.S1)()),new Promise((e=>setTimeout((()=>e()),window[m.V1]?0:2e3)))]).then((()=>{this.setState({ready:!0})}))}render(){if(!this.state.ready)return(0,g.jsx)(h.Z,{className:i()([this.props.className,"is-initializing"]),children:(0,g.jsx)(u.Z,{className:"loader"})});const{className:e}=this.props;return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(x,{className:e+"-header"}),(0,g.jsx)("div",{className:e,children:(0,g.jsx)(k,{className:e+"-list"})})]})}})||r;const x=(0,o.Z)({connect:!0})((({className:e,dispatch:t})=>(0,g.jsx)(w.Z,{className:e,main:(0,g.jsxs)(s.Fragment,{children:["建设中",(0,g.jsx)(p.Z,{children:"NEW BUILD",onClick:function(){t((0,l.NM)(!0))}})]})}))),k=(0,o.Z)({connect:e=>({builds:e.fleets.builds})})((({builds:e,dispatch:t})=>{e=e.filter((e=>!!(0,l.O_)(e)));const a=Array.isArray(e)&&e.length>0;return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(b.Z,{component:"h2",children:"建设中"}),a&&e.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(d.rU,{to:(0,l.Eo)(e),children:e._id})},e._id))),!a&&(0,g.jsx)("div",{children:(0,g.jsx)(p.Z,{children:"NEW BUILD",onClick:function(){t((0,l.NM)(!0))}})})]})}))},96677:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>s,default:()=>n});const r="d35d1e7a",s=".d35d1e7a{background:hsla(200,15%,73%,.15);border:.05rem solid hsla(200,15%,73%,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .d35d1e7a{cursor:pointer}html.is-hover .d35d1e7a:hover{background:hsla(200,15%,73%,.4);color:#fff}.d35d1e7a.is-state-active,.d35d1e7a:active,html.is-hover .d35d1e7a:hover.is-state-active,html.is-hover .d35d1e7a:hover:active{background:rgba(0,0,0,.1);border-color:hsla(200,15%,73%,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.d35d1e7a:focus{outline:0}.d35d1e7a:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.d35d1e7a[disabled]{color:rgba(185,205,214,.55);opacity:.6}",n={wrapper:r,css:s}},6563:(e,t,a)=>{"use strict";a.r(t),a.d(t,{css:()=>n,default:()=>i,wrapper:()=>s});const r=a.p+"includes/asset.6370acf8906567849d1615e4c3ab57da.png",s="aa3638ff",n='.aa3638ff{-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite;background:url("'+r+'") no-repeat 50% 0/contain;display:inline-block;height:6.25rem;position:relative;width:6.65rem}@-webkit-keyframes loader-fairy-ooyodo-2{.aa3638ff 0%{-webkit-transform:none;transform:none}.aa3638ff 10%{-webkit-transform:none;transform:none}.aa3638ff 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 30%{-webkit-transform:none;transform:none}.aa3638ff 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 50%{-webkit-transform:none;transform:none}.aa3638ff to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}',i={wrapper:s,css:n}},45803:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>s,default:()=>n});const r="ff0d050b",s='.ff0d050b{line-height:3rem}.ff0d050b.has-options:before{border-bottom:.05rem solid hsla(204,15%,94%,.15);border-top:.05rem solid hsla(204,15%,94%,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.ff0d050b.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',n={wrapper:r,css:s}},98118:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>s,default:()=>n});const r="f4f0218c",s=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",n={wrapper:r,css:s}},69072:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>s,default:()=>n});const r="a216ac16",s='.a216ac16{border-top:3rem solid transparent}.a216ac16.is-initializing{height:calc(100vh - 2.5rem);text-align:center;vertical-align:middle}@media (max-width:850px){.a216ac16.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.a216ac16.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.a216ac16.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.a216ac16.is-initializing{border-bottom:1.2rem solid transparent}}.a216ac16.is-initializing .loader{display:inline-block;margin:0 auto;vertical-align:middle}.a216ac16.is-initializing:before{content:"";display:inline-block;height:100%;overflow:hidden;vertical-align:middle;width:0}.a216ac16,.a216ac16-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}',n={wrapper:r,css:s}}}]);