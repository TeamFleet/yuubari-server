(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[834],{4834:(e,t,r)=>{"use strict";r.d(t,{Yr:()=>d,qE:()=>c,UT:()=>l,p$:()=>m,O_:()=>b,Eo:()=>h,nr:()=>p,S1:()=>u,NM:()=>w,MZ:()=>g,sU:()=>y});var a=r(63343),s=r(15895),n=r(22276);let i;const o={history:[],fleets:[],bases:[],name:void 0,lv:-1,note:void 0,theme:0,currentTab:0},d=4,c=6,l=3,m=4,f=()=>new Promise((e=>"undefined"==typeof Nedb?r.e(667).then(r.t.bind(r,77515,23)).then((t=>{self.Nedb=t.default,e()})):e())).then((()=>new Promise(((e,t)=>{i=new Nedb({filename:"fleets",timestampData:!0}),i.loadDatabase((r=>{if(r)return t(r);e()}))})))),b=(e={})=>void 0!==e._id&&Array.isArray(e.fleets)&&Array.isArray(e.bases),h=(e={})=>{if(!b(e))return;const t={...e};return delete t.history,delete t.currentTab,`/fleets/${e._id}.${(0,a.compressToEncodedURIComponent)(JSON.stringify(t))}`},p=e=>JSON.parse((0,a.decompressFromEncodedURIComponent)(e)),u=()=>e=>f().then((()=>new Promise(((e,t)=>{i.find({},((r,a)=>{if(r)return t(r);e(a)}))})))).then((t=>e({type:s.jK,builds:t}))),w=e=>t=>f().then((()=>new Promise(((e,t)=>{i.insert(o,((r,a)=>{if(r)return t(r);e(a)}))})))).then((r=>(t({type:s.tS,data:r}),e&&(0,n.Z)(h(r)),r))),g=(e,t)=>r=>f().then((()=>(e=Object.assign({},o,e),r({type:s.tS,data:e}),t&&(0,n.Z)(h(e)),e))),y=e=>t=>t({type:s.Q6,tab:e})},22276:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(76682);const s=e=>{a.history.push(("/"!==e.substr(0,1)?"/":"")+e)}},95725:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(19494),s=r(99245),n=r(88767),i=r.n(n),o=r(240),d=r(97118);const c=(0,o.Z)({styles:r(96677)})((0,a.memo)((({className:e,children:t,tag:r,component:a,href:n,link:o,to:c,type:l,color:m,size:f,state:b,onClick:h,...p})=>{let u;u=r||a||(c?s.rU:n||o?"a":"button");const w="disable"===b||"disabled"===b,g=l||("button"===u?"button":void 0),y=n||o||void 0;return(0,d.jsx)(u,{className:i()(["button",e],{[`mod-color-${m}`]:m,[`mod-size-${f}`]:f,[`is-state-${b}`]:!w&&b}),href:y,to:c,type:g,disabled:w,onClick:function(e){e.target.blur(),"function"==typeof h&&h(e)},...p,children:t})})))},92716:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(19494),s=r(240),n=r(97118);const i=(0,s.Z)({styles:r(6563)})((0,a.memo)((e=>(0,n.jsx)("span",{...e}))))},94676:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(88767),s=r.n(a),n=r(240),i=r(56207),o=r(97118);const d=(0,n.Z)({styles:r(45803)})((({className:e,mainClassName:t,optionsClassName:r,main:a,options:n,children:d,...c})=>{const l=void 0!==n;return(0,o.jsxs)(i.Z,{className:s()([e,{"has-options":l}]),...c,children:[(0,o.jsxs)("div",{className:s()(["wrapper",t]),children:[a,d]}),l&&(0,o.jsx)("div",{className:s()(["dimmed",r]),children:n})]})}))},89750:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(240),s=r(97118);const n=(0,a.Z)({styles:r(98118)})((({className:e,children:t})=>(0,s.jsx)("div",{className:e,children:t})))},31146:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var a,s=r(19494),n=r(88767),i=r.n(n),o=r(240),d=r(99245),c=r(4834),l=r(9459),m=r(39490),f=r(26674),b=r(89750),h=r(95725),p=r(13545),u=r(92716),w=r(94676),g=r(97118);const y=(0,o.Z)({pageinfo:e=>(0,l.Z)(e,{title:"Fleet Builder"})})((()=>(0,g.jsx)(f.Z,{children:(0,g.jsx)(v,{})})));let v=(0,o.Z)({connect:!0,styles:r(69072)})(a=class extends s.Component{constructor(...e){var t,r;super(...e),r={ready:!1},(t="state")in this?Object.defineProperty(this,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[t]=r}componentDidMount(){Promise.all([this.props.dispatch((0,c.S1)()),new Promise((e=>setTimeout((()=>e()),window[m.V1]?0:2e3)))]).then((()=>{this.setState({ready:!0})}))}render(){if(!this.state.ready)return(0,g.jsx)(b.Z,{className:i()([this.props.className,"is-initializing"]),children:(0,g.jsx)(u.Z,{className:"loader"})});const{className:e}=this.props;return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(x,{className:e+"-header"}),(0,g.jsx)("div",{className:e,children:(0,g.jsx)(k,{className:e+"-list"})})]})}})||a;const x=(0,o.Z)({connect:!0})((({className:e,dispatch:t})=>(0,g.jsx)(w.Z,{className:e,main:(0,g.jsxs)(s.Fragment,{children:["Under Construction",(0,g.jsx)(h.Z,{children:"NEW BUILD",onClick:function(){t((0,c.NM)(!0))}})]})}))),k=(0,o.Z)({connect:e=>({builds:e.fleets.builds})})((({builds:e,dispatch:t})=>{e=e.filter((e=>!!(0,c.O_)(e)));const r=Array.isArray(e)&&e.length>0;return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(p.Z,{component:"h2",children:"Under Construction"}),r&&e.map((e=>(0,g.jsx)("div",{children:(0,g.jsx)(d.rU,{to:(0,c.Eo)(e),children:e._id})},e._id))),!r&&(0,g.jsx)("div",{children:(0,g.jsx)(h.Z,{children:"NEW BUILD",onClick:function(){t((0,c.NM)(!0))}})})]})}))},96677:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>s,default:()=>n});const a="ff3008b5",s=".ff3008b5{background:rgba(176,190,197,.15);border:.05rem solid rgba(176,190,197,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .ff3008b5{cursor:pointer}html.is-hover .ff3008b5:hover{background:rgba(176,190,197,.4);color:#fff}.ff3008b5.is-state-active,.ff3008b5:active,html.is-hover .ff3008b5:hover.is-state-active,html.is-hover .ff3008b5:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,197,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.ff3008b5:focus{outline:0}.ff3008b5:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.ff3008b5[disabled]{color:rgba(185,205,214,.55);opacity:.6}",n={wrapper:a,css:s}},6563:(e,t,r)=>{"use strict";r.r(t),r.d(t,{css:()=>n,default:()=>i,wrapper:()=>s});const a=r.p+"includes/asset.6370acf8906567849d1615e4c3ab57da.png",s="aa3638ff",n='.aa3638ff{-webkit-animation:loader-fairy-ooyodo-2 1.5s linear infinite;animation:loader-fairy-ooyodo-2 1.5s linear infinite;background:url("'+a+'") no-repeat 50% 0/contain;display:inline-block;height:6.25rem;position:relative;width:6.65rem}@-webkit-keyframes loader-fairy-ooyodo-2{.aa3638ff 0%{-webkit-transform:none;transform:none}.aa3638ff 10%{-webkit-transform:none;transform:none}.aa3638ff 22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 30%{-webkit-transform:none;transform:none}.aa3638ff 40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}.aa3638ff 50%{-webkit-transform:none;transform:none}.aa3638ff to{-webkit-transform:none;transform:none}}@keyframes loader-fairy-ooyodo-2{0%{-webkit-transform:none;transform:none}10%{-webkit-transform:none;transform:none}22.5%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}30%{-webkit-transform:none;transform:none}40%{-webkit-transform:translateY(-.75rem);transform:translateY(-.75rem)}50%{-webkit-transform:none;transform:none}to{-webkit-transform:none;transform:none}}',i={wrapper:s,css:n}},45803:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>s,default:()=>n});const a="bb3e8dce",s='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',n={wrapper:a,css:s}},98118:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>s,default:()=>n});const a="f4f0218c",s=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",n={wrapper:a,css:s}},69072:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>s,default:()=>n});const a="a216ac16",s='.a216ac16{border-top:3rem solid transparent}.a216ac16.is-initializing{height:calc(100vh - 2.5rem);text-align:center;vertical-align:middle}@media (max-width:850px){.a216ac16.is-initializing{height:calc(100vh - 5.2rem)}}@media (max-width:660px){.a216ac16.is-initializing{height:calc(100vh - 4.9rem)}}@media (max-width:850px){.a216ac16.is-initializing{border-bottom:1.35rem solid transparent}}@media (max-width:660px){.a216ac16.is-initializing{border-bottom:1.2rem solid transparent}}.a216ac16.is-initializing .loader{display:inline-block;margin:0 auto;vertical-align:middle}.a216ac16.is-initializing:before{content:"";display:inline-block;height:100%;overflow:hidden;vertical-align:middle;width:0}.a216ac16,.a216ac16-header{-webkit-animation:fadein .2s ease-out;animation:fadein .2s ease-out}',n={wrapper:a,css:s}}}]);