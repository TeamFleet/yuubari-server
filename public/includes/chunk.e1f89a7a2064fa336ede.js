(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[251],{5090:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(10620);const i=e=>a.get.equipment(e)},61329:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const a=(e,t)=>{switch(e){case"ship":case"ships":return`/ships/${t}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${t}`;case"entity":case"entities":return`/entities/${t}`}}},75117:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(10620);const i=e=>a.get.ship(e)},81648:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(76682);const i=e=>{(0,a.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},22372:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(75117);const i=(e=[])=>e.sort(((e,t)=>(0,a.Z)(e).series!==(0,a.Z)(t).series?1:0)).sort(((e,t)=>{if(e=(0,a.Z)(e),t=(0,a.Z)(t),e.remodel&&t.remodel){if(e.remodel.next===t.id)return-1;if(e.remodel.prev===t.id)return 1}return e.series===t.series?e.name.suffix-t.name.suffix:e.order-t.order}))},95725:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(19494),i=r(99245),s=r(88767),o=r.n(s),n=r(240),d=r(97118);const l=(0,n.Z)({styles:r(77257)})((0,a.memo)((({className:e,children:t,tag:r,component:a,href:s,link:n,to:l,type:m,color:c,size:h,state:p,onClick:b,...f})=>{let g;g=r||a||(l?i.rU:s||n?"a":"button");const u="disable"===p||"disabled"===p,y=m||("button"===g?"button":void 0),k=s||n||void 0;return(0,d.jsx)(g,{className:o()(["button",e],{[`mod-color-${c}`]:c,[`mod-size-${h}`]:h,[`is-state-${p}`]:!u&&p}),href:k,to:l,type:y,disabled:u,onClick:function(e){e.target.blur(),"function"==typeof b&&b(e)},...f,children:t})})))},66624:(e,t,r)=>{"use strict";r.d(t,{xN:()=>v,_B:()=>Z,Ux:()=>x.Z});var a,i,s=r(17911),o=r(19494),n=r(240),d=r(61677),l=r(25348),m=r(29381),c=r(71007),h=r(79310),p=r.n(h),b=r(61329),f=r(75117),g=r(22372),u=r(43173),y=r(10620),k=r(97118),x=r(7091);const w=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];let v=(0,n.Z)({styles:r(43397)})(a=class extends o.Component{renderItem(e,t){let[r,a]=e;return a&&(a=(0,g.Z)(a.map((e=>(0,f.Z)(e))))),(0,k.jsxs)("div",{className:"item",children:[(0,k.jsx)("div",{className:"days",children:w.map(((e,t)=>(0,k.jsx)("span",{className:"day"+(r[t]?" on":""),children:(0,s.Z)({Sunday:"S",Monday:"M",Tuesday:"Tu",Wednesday:"W",Thurday:"Th",Friday:"F",Saturday:"S"},e)},t)))}),(0,k.jsxs)("div",{className:"ships"+(a?"":" is-any"),children:[a&&a.map(((e,t)=>(0,k.jsx)(d.Z,{className:"ship color-alt",to:(0,b.Z)("ship",e.id),children:e.getName(" ")},t))),!a&&"Any 2nd Ship"]})]},t)}render(){var e;let t=this.props.data||this.props.req||this.props.require;return"object"==typeof t&&t.req&&(t=t.req),Array.isArray(t)&&t.length||(t=[[[],!1]]),(0,k.jsx)("div",{className:this.props.className,"data-day":null!==(e=this.props.day)&&void 0!==e?e:p()().getDay(),children:t.map(this.renderItem.bind(this))})}})||a;const N=e=>((e=>void 0===e||-1===e)(e)&&(e=void 0),(0,c.Z)(e));class j extends o.Component{constructor(e){super(e),this.data=e.data||e.resource||e.resources,this.upgradable=e.upgradable,"object"==typeof this.data&&this.data.resource&&(void 0===this.upgradable&&Array.isArray(this.data.upgrade)&&this.data.upgrade.length&&(this.upgradable=!0),this.data=this.data.resource),Array.isArray(this.data)||(this.data=[]),this.data.length<3&&(this.upgradable=!1)}}let Z=(0,n.Z)({styles:r(79274)})(i=class extends j{renderCategory(e,t){const r="string"==typeof e?(0,s.Z)({any_2nd_ship:"Any 2nd Ship",resources:"Resources",upgrading:"Upgrading"},e):`★+${e} ~ `+(0===e?"+6":"MAX");let a=null,i=null;if(t){switch(e){case"resources":a=u.Z.map(((e,r)=>{const a=N(t[r]);return(0,k.jsx)(l.Z,{className:"item item-resource",stat:e,children:a},e)}));break;default:a=[(0,k.jsxs)(l.Z,{className:"item item-resource",stat:"dev",children:[N(t[0]),(0,k.jsxs)("span",{className:"guaranteed",children:["(",N(t[1]),")"]})]},"dev"),(0,k.jsxs)(l.Z,{className:"item item-resource",stat:"screw",children:[N(t[2]),(0,k.jsxs)("span",{className:"guaranteed",children:["(",N(t[3]),")"]})]},"screw")]}const r=Array.isArray(t[4])?t[4].filter((e=>0!==e[1])):t[4]?[[t[4],t[5]]]:[];r.length&&(i=(0,k.jsx)("span",{className:"equipments",children:r.map((e=>{if(isNaN(e[0])){const t=parseInt(e[0].substr(e[0].indexOf("_")+1));return(0,k.jsxs)("span",{className:"equipment equipment-other color-alt",children:[y.db.consumables[t]._name,(0,k.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})]},e[0])}return(0,k.jsx)(m.Z,{equipment:e[0],className:"equipment color-alt",children:(0,k.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})},e[0])}))}))}else a=(0,k.jsx)("span",{className:"item disabled",children:"-"});return(0,k.jsxs)("div",{className:"category",children:[(0,k.jsx)("span",{className:"category-title",children:r}),a,i]})}render(){return(0,k.jsxs)("div",{className:this.props.className,children:[this.renderCategory("resources",this.data[0]||[void 0,void 0,void 0,void 0]),this.renderCategory(0,this.data[1]||[void 0,void 0,void 0,void 0,void 0]),this.renderCategory(6,this.data[2]||[void 0,void 0,void 0,void 0,void 0]),this.upgradable&&this.renderCategory("upgrading",this.data[3]),!this.upgradable&&this.renderCategory("upgrading",!1)]})}})||i},61677:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(19494),i=r(99245),s=r(81648),o=r(97118);const n=(0,a.memo)((({to:e,href:t,className:r,replace:a=!1,onClick:n,...d})=>{const l=e||t||"";return l.match(/^(https?:)?\/\//)?l.indexOf("://")<0?(0,o.jsx)("a",{className:r,href:l,...d}):(0,o.jsx)("a",{className:r,href:l,target:"_blank",rel:"noreferrer",...d}):(0,o.jsx)(i.rU,{className:r,to:l,onClick:a?function(e){if((0,s.Z)(l),e.preventDefault(),"function"==typeof n)return n(e)}:n,...d})}))},94676:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var a=r(88767),i=r.n(a),s=r(240),o=r(56207),n=r(97118);const d=(0,s.Z)({styles:r(94005)})((({className:e,mainClassName:t,optionsClassName:r,main:a,options:s,children:d,...l})=>{const m=void 0!==s;return(0,n.jsxs)(o.Z,{className:i()([e,{"has-options":m}]),...l,children:[(0,n.jsxs)("div",{className:i()(["wrapper",t]),children:[a,d]}),m&&(0,n.jsx)("div",{className:i()(["dimmed",r]),children:s})]})}))},47251:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>R});var a,i,s,o,n,d=r(17911),l=r(19494),m=r(88767),c=r.n(m),h=r(240),p=r(10620),b=r(75062),f=r(9459),g=r(79310),u=r.n(g),y=r(61329),k=r(75117),x=r(5090),w=r(22372),v=r(26674),N=r(61677),j=r(29381),Z=r(13545),A=r(95725),q=r(94676),S=r(66624),C=r(7091),L=r(53027),$=r(97118);function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const T=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"],W=(0,l.createContext)(),R=(0,h.Z)({connect:!0,pageinfo:(e,t)=>{const r="object"==typeof t.params?t.params.day:void 0;return(0,f.Z)(e,{title:["Akashi's Arsenal",void 0!==r?(0,d.Z)({Sunday:"Sunday",Monday:"Monday",Tuesday:"Tuesday",Wednesday:"Wednesday",Thurday:"Thurday",Friday:"Friday",Saturday:"Saturday"},T[r]):void 0]})},styles:r(60794)})(a=class extends l.Component{constructor(...e){super(...e),z(this,"state",{rendering:!0,watchList:b.Z.arsenalWatchList,collectionShow:p.db.equipmentCollections.map((e=>e.name)).reduce(((e,t)=>(e[t]=!Array.isArray(b.Z.arsenalWatchList)||!b.Z.arsenalWatchList.length,e)),{})}),z(this,"onRender",this.onRender.bind(this)),z(this,"watchAdd",this.watchAdd.bind(this)),z(this,"watchRemove",this.watchRemove.bind(this))}componentDidMount(){}componentDidUpdate(e,t){e.params.day!==this.props.params.day&&window.scrollTo(void 0,0),t.watchList!==this.state.watchList&&(b.Z.arsenalWatchList=this.state.watchList)}onRender(){this.setState({rendering:!1})}watchAdd(e,t){const r=`${e}-${t}`;this.setState((e=>({watchList:Array.isArray(e.watchList)?[...e.watchList,r]:[r]})))}watchRemove(e,t){if(!Array.isArray(this.state.watchList))return;const r=`${e}-${t}`;this.setState((e=>{const t=e.watchList.indexOf(r);return t<0?{}:1===e.watchList.length?{watchList:!1}:(e.watchList.splice(t,1),{watchList:[...e.watchList]})}))}render(){const e="object"==typeof this.props.params&&void 0!==this.props.params.day?this.props.params.day:-1;return(0,$.jsx)(W.Provider,{value:{watchList:this.state.watchList,watchAdd:this.watchAdd,watchRemove:this.watchRemove,collectionShow:this.state.collectionShow},children:(0,$.jsxs)(v.Z,{className:this.props.className,pathname:this.props.location.pathname,rendering:this.state.rendering,children:[(0,$.jsx)(I,{isDay:"object"==typeof this.props.params&&void 0!==this.props.params.day}),e>-1&&(0,$.jsx)(F,{day:e,onRender:this.onRender}),-1===e&&(0,$.jsx)(E,{onRender:this.onRender})]})})}})||a,I=(0,h.Z)({styles:r(51840)})((e=>{const t=u()().getDay();return(0,$.jsx)(q.Z,{className:c()({[e.className]:!0}),mainClassName:e.className+"-tabs",main:[(0,$.jsx)(M,{className:e.className+"-akashi"},"akashi"),(0,$.jsx)(N.Z,{href:`/arsenal/${t}`,replace:!0,className:c()(["tab","link-today"]),children:"Filter by day"},"today"),...T.map(((e,r)=>(0,$.jsx)(N.Z,{href:`/arsenal/${r}`,replace:!0,className:c()({tab:!0,"link-day":!0,"is-today":t===r}),activeClassName:"on",children:(0,d.Z)({Sunday:"S",Monday:"M",Tuesday:"Tu",Wednesday:"W",Thurday:"Th",Friday:"F",Saturday:"S"},e)},e))),(0,$.jsx)(N.Z,{href:"/arsenal",replace:!0,className:c()({tab:!0,"link-all":!0,on:!e.isDay}),children:"All"},"all")]})})),M=(0,l.memo)((({className:e})=>{const[t,r]=(0,l.useState)(M.getAnimation());return(0,$.jsx)("span",{className:e,"data-blink-animation":t,onAnimationIteration:function(){r(M.getAnimation())}})}));M.getAnimation=()=>Math.floor(3*Math.random()+1);const D=(0,l.memo)((({onRender:e,collections:t,day:r})=>{const{collectionShow:a}=(0,l.useContext)(W);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(_,{day:r,index:-1},"collection-WATCH"),t.map(((r,i)=>(0,$.jsx)(U,{title:r.title,index:i,onRender:function(){"function"==typeof e&&i>=t.length-1&&e(this)},defaultShow:a[r.title],children:r.list},`collection-${r.title}`)))]})})),F=(0,l.memo)((e=>{let t=-1;const r={},a=[];return p.db.arsenalDays[e.day].forEach(((e,i)=>{const s=(0,x.Z)(e[0]),o=e[1];if(!Array.isArray(s.improvement)||!s.improvement[o])return null;let n;p.db.equipmentCollections.some((e=>(e.list.some((t=>(s.type===t.type&&(n=e.name),void 0!==n))),void 0!==n)));let d=r[n];t!==n&&void 0!==n&&(t=n,void 0===r[n]&&(d=a.length,r[n]=a.length,a.push({title:n,list:[]}))),a[d].list.push((0,$.jsx)(O,{equipment:s,improvementIndex:o,requirements:e[2],rawData:e,index:i},JSON.stringify(e)))})),(0,$.jsx)(D,{collections:a,...e})})),E=(0,l.memo)((e=>{let t=-1;const r={},a=[];return p.db.arsenalAll.forEach((e=>{const i=(0,x.Z)(e);if(!Array.isArray(i.improvement)||!i.improvement.length)return null;let s;p.db.equipmentCollections.some((e=>(e.list.some((t=>(i.type===t.type&&(s=e.name),void 0!==s))),void 0!==s)));let o=r[s];t!==s&&void 0!==s&&(t=s,void 0===r[s]&&(o=a.length,r[s]=a.length,a.push({title:s,list:[]}))),i.improvement.forEach(((t,r)=>{a[o].list.push((0,$.jsx)(O,{equipment:i,improvementIndex:r,rawData:e,index:r},e+"-"+r))}))})),(0,$.jsx)(D,{collections:a,...e})})),_=(0,l.memo)((({index:e,day:t})=>{const{watchList:r}=(0,l.useContext)(W),a=!(Array.isArray(r)&&r.length>0);return(0,$.jsx)(U,{title:"Watch List",index:e,defaultShow:!0,isEmpty:a,children:a?(0,$.jsxs)("div",{className:"empty",children:[(0,$.jsx)(L.Z,{icon:"heart4",className:"heart"}),(0,$.jsx)("span",{children:"Add to Watch List by Clicking/Tapping Heart Icon"})]}):r.map((e=>{const[r,a]=e.split("-"),i=(0,x.Z)(r),s=void 0===t?void 0:[];if(Array.isArray(s)){const{req:e}=i.improvement[a];e.forEach((([e],r)=>{!0===e[t]&&s.push(r)}))}return{equipment:(0,x.Z)(r),improvementIndex:a,requirements:s,value:e}})).filter((({requirements:e})=>!Array.isArray(e)||e.length>0)).map((({equipment:e,improvementIndex:r,requirements:a,value:i})=>(0,$.jsx)(O,{equipment:e,improvementIndex:r,requirements:a,day:t},i)))},"collection-WATCH")}));let U=(0,h.Z)({connect:e=>{var t;return{ready:null===(t=e.app)||void 0===t?void 0:t.ready}},styles:r(62297)})(i=class extends l.Component{constructor(e){super(e),z(this,"toggle",this.toggle.bind(this));const t=0===e.index||!e.ready;this.state={render:t,show:this.props.defaultShow},t?"function"==typeof e.onRender&&e.onRender(this):setTimeout((()=>{this.mounted&&(this.setState({render:!0}),"function"==typeof e.onRender&&e.onRender(this))}),20*(e.index||0))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}toggle(){this.setState((e=>({show:!e.show})))}render(){return this.state.render?(0,$.jsxs)("div",{className:c()([this.props.className,{on:this.state.show,"mod-empty":this.props.isEmpty}]),children:[(0,$.jsx)(Z.Z,{component:"h2",type:"line-append",className:c()([`${this.props.className}-title`,{on:this.state.show}]),classNameInner:`${this.props.className}-title-inner`,inherit:!0,onClick:this.toggle,children:this.props.title.split("&").join(" & ")},`${this.props.title}-title`),this.state.show&&(0,$.jsx)("div",{className:`${this.props.className}-list`,children:this.state.render?this.props.children:void 0},`${this.props.title}-list`)]}):null}})||i,O=(0,h.Z)({styles:r(49109)})((n=o=class extends l.PureComponent{constructor(...e){super(...e),z(this,"state",{expand:this.props.defaultExpand||!1}),z(this,"toggle",this.toggle.bind(this)),z(this,"watch",this.watch.bind(this))}toggle(){this.setState((e=>({expand:!e.expand})))}watch(){const e=this.isWatching?"watchRemove":"watchAdd";this.context[e](this.props.equipment.id,this.props.improvementIndex)}get isWatching(){return Array.isArray(this.context.watchList)&&this.context.watchList.includes(`${this.props.equipment.id}-${this.props.improvementIndex}`)}render(){const{className:e,equipment:t,improvementIndex:r,requirements:a}=this.props,i=[],s=t.improvement[r],o=Array.isArray(s.upgrade)&&s.upgrade.length,n=Array.isArray(a);n&&a.forEach((e=>{Array.isArray(s.req)&&s.req[e]&&Array.isArray(s.req[e][1])&&s.req[e][1].forEach((e=>i.push(e)))}));const d=!!i.length,l=!(!o||!s.upgrade[1]);return(0,$.jsxs)("div",{className:e,children:[(0,$.jsx)("span",{className:c()({[e+"-equipment"]:!0,"has-upgrade":o}),children:(0,$.jsx)(j.Z,{className:`${e}-name color-alt-lighter`,equipment:t})}),o&&(0,$.jsx)("span",{className:e+"-equipment",children:(0,$.jsx)(j.Z,{className:`${e}-name color-alt-lighter`,equipment:s.upgrade[0],children:l?(0,$.jsx)(C.Z,{className:e+"-equipment-star",star:s.upgrade[1]}):void 0})}),n&&(0,$.jsxs)("div",{className:e+"-ships",children:[d&&(0,w.Z)(i).map((t=>(t=(0,k.Z)(t),(0,$.jsx)(N.Z,{className:`${e}-ships-ship color-alt`,to:(0,y.Z)("ship",t.id),children:t.getName(" ")},t.id)))),!d&&"Any 2nd Ship"]}),!n&&(0,$.jsx)(S.xN,{className:e+"-day-and-ships",data:s,day:this.props.day}),(0,$.jsxs)("div",{className:e+"-resources",children:[(0,$.jsx)(A.Z,{className:c()({[e+"-resources-toggle"]:!0,"is-expand":this.state.expand}),onClick:this.toggle,children:this.state.expand?void 0:"...","data-role":"toggle"}),this.state.expand&&(0,$.jsx)(S._B,{data:s})]}),(0,$.jsx)("button",{type:"button",className:c()([`${e}-btn-watch`,{"is-watching":this.isWatching}]),onClick:this.watch,children:(0,$.jsx)(L.Z,{icon:this.isWatching?"heart3":"heart4",className:"heart"})})]})}},z(o,"contextType",W),s=n))||s},77257:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="ff3008b5",i=".ff3008b5{background:rgba(176,190,197,.15);border:.05rem solid rgba(176,190,197,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .ff3008b5{cursor:pointer}html.is-hover .ff3008b5:hover{background:rgba(176,190,197,.4);color:#fff}.ff3008b5.is-state-active,.ff3008b5:active,html.is-hover .ff3008b5:hover.is-state-active,html.is-hover .ff3008b5:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,197,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.ff3008b5:focus{outline:0}.ff3008b5:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.ff3008b5[disabled]{color:rgba(185,205,214,.55);opacity:.6}",s={wrapper:a,css:i}},43397:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="d0d8315b",i='.d0d8315b{font-size:.7rem;line-height:.8rem;position:relative}.d0d8315b .item{margin-bottom:.05rem;padding-bottom:.1rem;padding-left:7.65rem;padding-top:.1rem;position:relative}.d0d8315b .item:last-child{margin-bottom:0}.d0d8315b .days{left:0;overflow:visible;position:absolute;top:0}.d0d8315b .day{background:rgba(237,240,242,.15);color:rgba(185,205,214,.55);display:block;float:left;font-size:.6rem;height:1rem;line-height:1rem;margin-right:.05rem;text-align:center;width:1rem}.d0d8315b .day.on{background:#388e3c;color:#b9f6ca}.d0d8315b .day:first-child{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.d0d8315b .day:last-child{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.d0d8315b .ships{color:rgba(185,205,214,.55);margin-right:-.6rem}.d0d8315b .ship{display:inline-block;margin-right:.6rem}.d0d8315b .ship:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .2rem;position:absolute;z-index:-1}.d0d8315b .ship:last-child:after{content:normal}.d0d8315b[data-day] .item:first-child .days:before,.d0d8315b[data-day] .item:last-child .days:after{border-color:transparent;border-style:solid;border-width:.15rem .2rem;content:"";height:0;left:.075rem;margin-left:-.2rem;overflow:hidden;position:absolute;width:0;z-index:5}.d0d8315b[data-day] .item:first-child .days:before{border-top-color:#40c4ff;top:-.25rem}.d0d8315b[data-day] .item:last-child .days:after{border-bottom-color:#40c4ff;bottom:-.25rem}.d0d8315b[data-day] .item:not(:last-child):after{background:rgba(64,196,255,.5);bottom:.05rem;content:"";left:.075rem;margin-left:-.05rem;overflow:hidden;position:absolute;top:1.1rem;width:.1rem}.d0d8315b[data-day="0"] .item:first-child .days:before,.d0d8315b[data-day="0"] .item:last-child .days:after,.d0d8315b[data-day="0"] .item:not(:last-child):after{left:.5rem}.d0d8315b[data-day="1"] .item:first-child .days:before,.d0d8315b[data-day="1"] .item:last-child .days:after,.d0d8315b[data-day="1"] .item:not(:last-child):after{left:1.55rem}.d0d8315b[data-day="2"] .item:first-child .days:before,.d0d8315b[data-day="2"] .item:last-child .days:after,.d0d8315b[data-day="2"] .item:not(:last-child):after{left:2.6rem}.d0d8315b[data-day="3"] .item:first-child .days:before,.d0d8315b[data-day="3"] .item:last-child .days:after,.d0d8315b[data-day="3"] .item:not(:last-child):after{left:3.65rem}.d0d8315b[data-day="4"] .item:first-child .days:before,.d0d8315b[data-day="4"] .item:last-child .days:after,.d0d8315b[data-day="4"] .item:not(:last-child):after{left:4.7rem}.d0d8315b[data-day="5"] .item:first-child .days:before,.d0d8315b[data-day="5"] .item:last-child .days:after,.d0d8315b[data-day="5"] .item:not(:last-child):after{left:5.75rem}.d0d8315b[data-day="6"] .item:first-child .days:before,.d0d8315b[data-day="6"] .item:last-child .days:after,.d0d8315b[data-day="6"] .item:not(:last-child):after{left:6.8rem}',s={wrapper:a,css:i}},79274:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="e99782ee",i=".e99782ee{font-size:.7rem;line-height:.9rem}.e99782ee .category{margin:0 0 .2rem;overflow:hidden;padding-left:4.25rem}@media (max-width:660px){.e99782ee .category{margin-bottom:.3rem}}.e99782ee .category:last-child{margin-bottom:0}.e99782ee .category-title{color:rgba(185,205,214,.55);display:block;margin-left:-4.25rem;position:absolute;white-space:nowrap;width:4.25rem}.e99782ee .item{float:left;padding:0}.e99782ee .item.disabled{color:rgba(185,205,214,.55);opacity:1}.e99782ee .item-resource{width:3.75rem}@media (max-width:480px){.e99782ee .item-resource:nth-child(2n+2){clear:left}}.e99782ee .guaranteed{color:#69f0ae;padding-left:.35em}.e99782ee .equipments{display:block;float:left}@media (max-width:660px){.e99782ee .equipments{clear:left;float:none}}.e99782ee .equipment{display:block;padding-left:1rem}.e99782ee .equipment .icon:before,.e99782ee .equipment .icon:empty{height:1.3rem;left:-.2rem;top:-.2rem;width:1.3rem}.e99782ee .equipment-other{color:#e6e6e6}",s={wrapper:a,css:i}},94005:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="bb3e8dce",i='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',s={wrapper:a,css:i}},62297:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="f615567f",i='.f615567f{margin-bottom:1.5rem;overflow:hidden}.f615567f:last-child{margin-bottom:0}.f615567f.on{margin-bottom:2.2rem}.f615567f.on:last-child{margin-bottom:0}.f615567f .empty{color:rgba(237,240,242,.15);text-align:center}.f615567f .empty .heart{display:block;height:3.75rem;margin:.5em auto;width:3.75rem}.f615567f .empty span{font-size:1rem;letter-spacing:.2em}.f615567f-title{font-size:.9rem;font-weight:400;height:1.2rem;line-height:1.2rem;margin:0 auto 1rem 0;padding:0 .75rem 0 1.3rem;position:relative;transition-property:color;z-index:2}.f615567f-title .f615567f-title-inner:active{color:hsla(0,0%,100%,.5)}.f615567f-title .f615567f-title-inner:before{border:.3rem solid transparent;border-left-color:initial;content:"";height:0;left:-.88rem;margin-top:-.3rem;opacity:.5;overflow:hidden;position:absolute;top:50%;-webkit-transform-origin:25% 50%;transform-origin:25% 50%;width:0}html.is-webapp .f615567f-title .f615567f-title-inner{cursor:pointer}html.is-hover .f615567f-title .f615567f-title-inner:hover{background:linear-gradient(180deg,#81d4fa 0,#b3e5fc 14%,#e1f5fe 40%,#4fc3f7 62%,#b3e5fc 77%,#81d4fa);color:#40c4ff}.f615567f-title .f615567f-title-inner:active,html.is-hover .f615567f-title .f615567f-title-inner:hover:active{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);color:hsla(0,0%,100%,.5)}.f615567f-title.on .f615567f-title-inner{font-weight:bolder}.f615567f-title.on .f615567f-title-inner:before{opacity:1;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.f615567f-list{grid-gap:1rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(25rem,1fr))}@media (max-width:524px){.f615567f-list{grid-template-columns:100%}}.f615567f-list.on{margin-bottom:2rem;margin-top:1rem}.f615567f.mod-empty .f615567f-list{display:block}',s={wrapper:a,css:i}},51840:(e,t,r)=>{"use strict";r.r(t),r.d(t,{css:()=>s,default:()=>o,wrapper:()=>i});const a=r.p+"includes/asset.852ae5e2e9e392bd40f2c4a4d7f684fc.png",i="eef14671",s='.eef14671 .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;float:left;height:2.95rem;position:relative;text-align:center}html.is-hover .eef14671 .tab:hover{color:#fff}.eef14671 .tab:active,html.is-hover .eef14671 .tab:hover:active{color:hsla(0,0%,100%,.5)}.eef14671 .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.eef14671 .link-today{margin-right:1.5rem}.eef14671 .link-today:after{background:rgba(237,240,242,.075);content:"";height:1.5rem;margin-top:-.75rem;position:absolute;right:-.75rem;top:50%;-webkit-transform:skew(-20deg) scaleX(2);transform:skew(-20deg) scaleX(2);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:.05rem}.eef14671 .link-day{margin-right:.25rem;min-width:1.25rem}.eef14671 .link-day.is-today:not(.on){border-bottom-color:rgba(185,205,214,.55)}.eef14671 .link-all{margin-left:1.25rem}@media (max-width:480px){.eef14671 .link-today{display:none}.eef14671 .tabs{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.eef14671 .link-all,.eef14671 .link-day{-webkit-flex:none;flex:none}.eef14671 .link-all{margin-left:.75rem}}.eef14671-tabs{height:3rem;overflow:hidden}.eef14671-akashi{display:block;float:left;height:2.9rem;margin-right:1.5rem;position:relative;transition:none;width:8.05974rem}.eef14671-akashi:after,.eef14671-akashi:before{background-image:url("'+a+'");background-repeat:no-repeat;background-size:13.25rem auto;content:"";display:block;position:absolute;-webkit-transform:scale(.75324675);transform:scale(.75324675);transition:inherit}.eef14671-akashi:before{-webkit-animation:3s steps(1) 3s infinite none;animation:3s steps(1) 3s infinite none;background-position:-10.7rem 0;height:1.7rem;left:1.1rem;top:.95rem;-webkit-transform-origin:-1.1rem -.95rem;transform-origin:-1.1rem -.95rem;width:2.55rem;z-index:2}.eef14671-akashi:after{background-position:0 0;height:3.85rem;left:0;top:0;-webkit-transform-origin:0 0;transform-origin:0 0;width:10.7rem;z-index:1}@media (max-width:660px){.eef14671-akashi{display:none}}.eef14671-akashi[data-blink-animation="1"]:before{-webkit-animation-name:akashi-blink-1;animation-name:akashi-blink-1}.eef14671-akashi[data-blink-animation="2"]:before{-webkit-animation-name:akashi-blink-2;animation-name:akashi-blink-2}.eef14671-akashi[data-blink-animation="3"]:before{-webkit-animation-name:akashi-blink-3;animation-name:akashi-blink-3}@-webkit-keyframes akashi-blink-1{.eef14671 0%{background-position:-10.7rem 0}.eef14671 3%{background-position:-10.7rem -1.7rem}.eef14671 6%{background-position:-10.7rem -3.4rem}.eef14671 9%{background-position:-10.7rem -1.7rem}.eef14671 12%{background-position:-10.7rem 0}}@keyframes akashi-blink-1{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-2{.eef14671 0%{background-position:-10.7rem 0}.eef14671 3%{background-position:-10.7rem -1.7rem}.eef14671 6%{background-position:-10.7rem -3.4rem}.eef14671 9%{background-position:-10.7rem -1.7rem}.eef14671 12%{background-position:-10.7rem -3.4rem}.eef14671 15%{background-position:-10.7rem -1.7rem}.eef14671 18%{background-position:-10.7rem 0}}@keyframes akashi-blink-2{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem -3.4rem}15%{background-position:-10.7rem -1.7rem}18%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-3{.eef14671 0%{background-position:-10.7rem 0}.eef14671 2%{background-position:-10.7rem -1.7rem}.eef14671 4%{background-position:-10.7rem -3.4rem}.eef14671 6%{background-position:-10.7rem -5.1rem}.eef14671 8%{background-position:-10.7rem -6.8rem}.eef14671 40%{background-position:-10.7rem -5.1rem}.eef14671 42%{background-position:-10.7rem -3.4rem}.eef14671 44%{background-position:-10.7rem -1.7rem}.eef14671 46%{background-position:-10.7rem 0}}@keyframes akashi-blink-3{0%{background-position:-10.7rem 0}2%{background-position:-10.7rem -1.7rem}4%{background-position:-10.7rem -3.4rem}6%{background-position:-10.7rem -5.1rem}8%{background-position:-10.7rem -6.8rem}40%{background-position:-10.7rem -5.1rem}42%{background-position:-10.7rem -3.4rem}44%{background-position:-10.7rem -1.7rem}46%{background-position:-10.7rem 0}}',o={wrapper:i,css:s}},49109:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="b69b7e12",i='.b69b7e12{padding-left:1.2rem;position:relative}.b69b7e12-equipment{display:inline-block}.b69b7e12-equipment.has-upgrade{padding-right:1.75rem;position:relative}.b69b7e12-equipment.has-upgrade:after,.b69b7e12-equipment.has-upgrade:before{content:"";position:absolute;top:50%;z-index:-1}.b69b7e12-equipment.has-upgrade:before{background:#74c674;height:.2rem;margin-top:-.15rem;right:.75rem;width:.5rem}.b69b7e12-equipment.has-upgrade:after{border-bottom:.3rem solid transparent;border-left:.5rem solid #74c674;border-right:0;border-top:.3rem solid transparent;height:0;margin-top:-.35rem;right:.25rem;width:0}.b69b7e12-ships{color:rgba(185,205,214,.55);font-size:.7rem;line-height:.8rem;padding:.1rem 0 .1rem 1.3rem}@media (max-width:850px){.b69b7e12-ships{position:relative;z-index:-1}}.b69b7e12-ships-ship{display:inline-block}.b69b7e12-ships-ship:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .2rem;z-index:-1}.b69b7e12-ships-ship:last-child:after{content:normal}.b69b7e12-day-and-ships{margin-bottom:.4rem;margin-left:1.3rem;margin-top:.4rem}@media (max-width:850px){.b69b7e12-day-and-ships{position:relative;z-index:-1}}.b69b7e12-resources{padding-left:1.3rem;padding-top:.2rem;position:relative}.b69b7e12-resources-toggle[data-role=toggle]{border-color:rgba(237,240,242,.15);border-radius:1em;display:block;font-size:.7rem;font-weight:600;letter-spacing:.1em;line-height:0;padding:.2rem .4rem .6rem}@media (max-width:850px){.b69b7e12-resources-toggle[data-role=toggle]{padding:.45rem .5rem .75rem}}.b69b7e12-resources-toggle[data-role=toggle].is-expand{height:1.1rem;left:0;padding:0;position:absolute;top:.1rem;width:1.1rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:after,.b69b7e12-resources-toggle[data-role=toggle].is-expand:before{border-left:.05rem solid;border-top:.05rem solid;content:"";height:.4rem;left:50%;margin-left:-.2rem;position:absolute;top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:.4rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:before{margin-top:-.25rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:after{margin-top:0}.b69b7e12-btn-watch{background:none;border:0;color:rgba(185,205,214,.55);height:1.8rem;left:-.3rem;outline:0;position:absolute;top:-.15rem;transition:color .2s ease-out;width:1.8rem;z-index:10}html.is-webapp .b69b7e12-btn-watch{cursor:pointer}html.is-hover .b69b7e12-btn-watch:hover{color:hsla(0,0%,100%,.5)}.b69b7e12-btn-watch:active,html.is-hover .b69b7e12-btn-watch:hover:active{color:rgba(185,205,214,.55)}.b69b7e12-btn-watch.is-watching{color:#ffbe3d}',s={wrapper:a,css:i}},60794:(e,t,r)=>{"use strict";r.r(t),r.d(t,{wrapper:()=>a,css:()=>i,default:()=>s});const a="dd41d8cd1",i="",s={wrapper:a,css:i}}}]);