(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[199],{5090:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(10620);const i=e=>r.get.equipment(e)},61329:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=(e,t)=>{switch(e){case"ship":case"ships":return`/ships/${t}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${t}`;case"entity":case"entities":return`/entities/${t}`}}},75117:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(10620);const i=e=>r.get.ship(e)},81648:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(76682);const i=e=>{(0,r.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},22372:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(75117);const i=(e=[])=>e.sort(((e,t)=>(0,r.Z)(e).series!==(0,r.Z)(t).series?1:0)).sort(((e,t)=>{if(e=(0,r.Z)(e),t=(0,r.Z)(t),e.remodel&&t.remodel){if(e.remodel.next===t.id)return-1;if(e.remodel.prev===t.id)return 1}return e.series===t.series?e.name.suffix-t.name.suffix:e.order-t.order}))},95725:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(19494),i=a(99245),s=a(88767),o=a.n(s),n=a(240),d=a(97118);const l=(0,n.Z)({styles:a(77257)})((0,r.memo)((({className:e,children:t,tag:a,component:r,href:s,link:n,to:l,type:m,color:c,size:h,state:p,onClick:b,...g})=>{let u;u=a||r||(l?i.rU:s||n?"a":"button");const f="disable"===p||"disabled"===p,y=m||("button"===u?"button":void 0),k=s||n||void 0;return(0,d.jsx)(u,{className:o()(["button",e],{[`mod-color-${c}`]:c,[`mod-size-${h}`]:h,[`is-state-${p}`]:!f&&p}),href:k,to:l,type:y,disabled:f,onClick:function(e){e.target.blur(),"function"==typeof b&&b(e)},...g,children:t})})))},66624:(e,t,a)=>{"use strict";a.d(t,{xN:()=>v,_B:()=>Z,Ux:()=>x.Z});var r,i,s=a(17911),o=a(19494),n=a(240),d=a(61677),l=a(25348),m=a(29381),c=a(71007),h=a(79310),p=a.n(h),b=a(61329),g=a(75117),u=a(22372),f=a(43173),y=a(10620),k=a(97118),x=a(7091);const w=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];let v=(0,n.Z)({styles:a(43397)})(r=class extends o.Component{renderItem(e,t){let[a,r]=e;return r&&(r=(0,u.Z)(r.map((e=>(0,g.Z)(e))))),(0,k.jsxs)("div",{className:"item",children:[(0,k.jsx)("div",{className:"days",children:w.map(((e,t)=>(0,k.jsx)("span",{className:"day"+(a[t]?" on":""),children:(0,s.Z)({Sunday:"日",Monday:"一",Tuesday:"二",Wednesday:"三",Thurday:"四",Friday:"五",Saturday:"六"},e)},t)))}),(0,k.jsxs)("div",{className:"ships"+(r?"":" is-any"),children:[r&&r.map(((e,t)=>(0,k.jsx)(d.Z,{className:"ship color-alt",to:(0,b.Z)("ship",e.id),children:e.getName("")},t))),!r&&"任意秘书舰"]})]},t)}render(){var e;let t=this.props.data||this.props.req||this.props.require;return"object"==typeof t&&t.req&&(t=t.req),Array.isArray(t)&&t.length||(t=[[[],!1]]),(0,k.jsx)("div",{className:this.props.className,"data-day":null!==(e=this.props.day)&&void 0!==e?e:p()().getDay(),children:t.map(this.renderItem.bind(this))})}})||r;const N=e=>((e=>void 0===e||-1===e)(e)&&(e=void 0),(0,c.Z)(e));class j extends o.Component{constructor(e){super(e),this.data=e.data||e.resource||e.resources,this.upgradable=e.upgradable,"object"==typeof this.data&&this.data.resource&&(void 0===this.upgradable&&Array.isArray(this.data.upgrade)&&this.data.upgrade.length&&(this.upgradable=!0),this.data=this.data.resource),Array.isArray(this.data)||(this.data=[]),this.data.length<3&&(this.upgradable=!1)}}let Z=(0,n.Z)({styles:a(79274)})(i=class extends j{renderCategory(e,t){const a="string"==typeof e?(0,s.Z)({any_2nd_ship:"任意秘书舰",resources:"资材消耗",upgrading:"升级"},e):`★+${e} ~ `+(0===e?"+6":"MAX");let r=null,i=null;if(t){switch(e){case"resources":r=f.Z.map(((e,a)=>{const r=N(t[a]);return(0,k.jsx)(l.Z,{className:"item item-resource",stat:e,children:r},e)}));break;default:r=[(0,k.jsxs)(l.Z,{className:"item item-resource",stat:"dev",children:[N(t[0]),(0,k.jsxs)("span",{className:"guaranteed",children:["(",N(t[1]),")"]})]},"dev"),(0,k.jsxs)(l.Z,{className:"item item-resource",stat:"screw",children:[N(t[2]),(0,k.jsxs)("span",{className:"guaranteed",children:["(",N(t[3]),")"]})]},"screw")]}const a=Array.isArray(t[4])?t[4].filter((e=>0!==e[1])):t[4]?[[t[4],t[5]]]:[];a.length&&(i=(0,k.jsx)("span",{className:"equipments",children:a.map((e=>{if(isNaN(e[0])){const t=parseInt(e[0].substr(e[0].indexOf("_")+1));return(0,k.jsxs)("span",{className:"equipment equipment-other color-alt",children:[y.db.consumables[t]._name,(0,k.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})]},e[0])}return(0,k.jsx)(m.Z,{equipment:e[0],className:"equipment color-alt",children:(0,k.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})},e[0])}))}))}else r=(0,k.jsx)("span",{className:"item disabled",children:"-"});return(0,k.jsxs)("div",{className:"category",children:[(0,k.jsx)("span",{className:"category-title",children:a}),r,i]})}render(){return(0,k.jsxs)("div",{className:this.props.className,children:[this.renderCategory("resources",this.data[0]||[void 0,void 0,void 0,void 0]),this.renderCategory(0,this.data[1]||[void 0,void 0,void 0,void 0,void 0]),this.renderCategory(6,this.data[2]||[void 0,void 0,void 0,void 0,void 0]),this.upgradable&&this.renderCategory("upgrading",this.data[3]),!this.upgradable&&this.renderCategory("upgrading",!1)]})}})||i},61677:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(19494),i=a(99245),s=a(81648),o=a(97118);const n=(0,r.memo)((({to:e,href:t,className:a,replace:r=!1,onClick:n,...d})=>{const l=e||t||"";return l.match(/^(https?:)?\/\//)?l.indexOf("://")<0?(0,o.jsx)("a",{className:a,href:l,...d}):(0,o.jsx)("a",{className:a,href:l,target:"_blank",rel:"noreferrer",...d}):(0,o.jsx)(i.rU,{className:a,to:l,onClick:r?function(e){if((0,s.Z)(l),e.preventDefault(),"function"==typeof n)return n(e)}:n,...d})}))},94676:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(88767),i=a.n(r),s=a(240),o=a(56207),n=a(97118);const d=(0,s.Z)({styles:a(94005)})((({className:e,mainClassName:t,optionsClassName:a,main:r,options:s,children:d,...l})=>{const m=void 0!==s;return(0,n.jsxs)(o.Z,{className:i()([e,{"has-options":m}]),...l,children:[(0,n.jsxs)("div",{className:i()(["wrapper",t]),children:[r,d]}),m&&(0,n.jsx)("div",{className:i()(["dimmed",a]),children:s})]})}))},47251:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var r,i,s,o,n,d=a(17911),l=a(19494),m=a(88767),c=a.n(m),h=a(240),p=a(10620),b=a(75062),g=a(9459),u=a(79310),f=a.n(u),y=a(61329),k=a(75117),x=a(5090),w=a(22372),v=a(26674),N=a(61677),j=a(29381),Z=a(13545),q=a(95725),A=a(94676),C=a(66624),S=a(7091),$=a(53027),z=a(97118);function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const R=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"],W=(0,l.createContext)(),T=(0,h.Z)({connect:!0,pageinfo:(e,t)=>{const a="object"==typeof t.params?t.params.day:void 0;return(0,g.Z)(e,{title:["改修工厂",void 0!==a?(0,d.Z)({Sunday:"星期日",Monday:"星期一",Tuesday:"星期二",Wednesday:"星期三",Thurday:"星期四",Friday:"星期五",Saturday:"星期六"},R[a]):void 0]})},styles:a(60794)})(r=class extends l.Component{constructor(...e){super(...e),L(this,"state",{rendering:!0,watchList:b.Z.arsenalWatchList,collectionShow:p.db.equipmentCollections.map((e=>e.name)).reduce(((e,t)=>(e[t]=!Array.isArray(b.Z.arsenalWatchList)||!b.Z.arsenalWatchList.length,e)),{})}),L(this,"onRender",this.onRender.bind(this)),L(this,"watchAdd",this.watchAdd.bind(this)),L(this,"watchRemove",this.watchRemove.bind(this))}componentDidMount(){}componentDidUpdate(e,t){e.params.day!==this.props.params.day&&window.scrollTo(void 0,0),t.watchList!==this.state.watchList&&(b.Z.arsenalWatchList=this.state.watchList)}onRender(){this.setState({rendering:!1})}watchAdd(e,t){const a=`${e}-${t}`;this.setState((e=>({watchList:Array.isArray(e.watchList)?[...e.watchList,a]:[a]})))}watchRemove(e,t){if(!Array.isArray(this.state.watchList))return;const a=`${e}-${t}`;this.setState((e=>{const t=e.watchList.indexOf(a);return t<0?{}:1===e.watchList.length?{watchList:!1}:(e.watchList.splice(t,1),{watchList:[...e.watchList]})}))}render(){const e="object"==typeof this.props.params&&void 0!==this.props.params.day?this.props.params.day:-1;return(0,z.jsx)(W.Provider,{value:{watchList:this.state.watchList,watchAdd:this.watchAdd,watchRemove:this.watchRemove,collectionShow:this.state.collectionShow},children:(0,z.jsxs)(v.Z,{className:this.props.className,pathname:this.props.location.pathname,rendering:this.state.rendering,children:[(0,z.jsx)(I,{isDay:"object"==typeof this.props.params&&void 0!==this.props.params.day}),e>-1&&(0,z.jsx)(E,{day:e,onRender:this.onRender}),-1===e&&(0,z.jsx)(_,{onRender:this.onRender})]})})}})||r,I=(0,h.Z)({styles:a(51840)})((e=>{const t=f()().getDay();return(0,z.jsx)(A.Z,{className:c()({[e.className]:!0}),mainClassName:e.className+"-tabs",main:[(0,z.jsx)(D,{className:e.className+"-akashi"},"akashi"),(0,z.jsx)(N.Z,{href:`/arsenal/${t}`,replace:!0,className:c()(["tab","link-today"]),children:"每日改修"},"today"),...R.map(((e,a)=>(0,z.jsx)(N.Z,{href:`/arsenal/${a}`,replace:!0,className:c()({tab:!0,"link-day":!0,"is-today":t===a}),activeClassName:"on",children:(0,d.Z)({Sunday:"日",Monday:"一",Tuesday:"二",Wednesday:"三",Thurday:"四",Friday:"五",Saturday:"六"},e)},e))),(0,z.jsx)(N.Z,{href:"/arsenal",replace:!0,className:c()({tab:!0,"link-all":!0,on:!e.isDay}),children:"全部改修"},"all")]})})),D=(0,l.memo)((({className:e})=>{const[t,a]=(0,l.useState)(D.getAnimation());return(0,z.jsx)("span",{className:e,"data-blink-animation":t,onAnimationIteration:function(){a(D.getAnimation())}})}));D.getAnimation=()=>Math.floor(3*Math.random()+1);const M=(0,l.memo)((({onRender:e,collections:t,day:a})=>{const{collectionShow:r}=(0,l.useContext)(W);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(F,{day:a,index:-1},"collection-WATCH"),t.map(((a,i)=>(0,z.jsx)(O,{title:a.title,index:i,onRender:function(){"function"==typeof e&&i>=t.length-1&&e(this)},defaultShow:r[a.title],children:a.list},`collection-${a.title}`)))]})})),E=(0,l.memo)((e=>{let t=-1;const a={},r=[];return p.db.arsenalDays[e.day].forEach(((e,i)=>{const s=(0,x.Z)(e[0]),o=e[1];if(!Array.isArray(s.improvement)||!s.improvement[o])return null;let n;p.db.equipmentCollections.some((e=>(e.list.some((t=>(s.type===t.type&&(n=e.name),void 0!==n))),void 0!==n)));let d=a[n];t!==n&&void 0!==n&&(t=n,void 0===a[n]&&(d=r.length,a[n]=r.length,r.push({title:n,list:[]}))),r[d].list.push((0,z.jsx)(U,{equipment:s,improvementIndex:o,requirements:e[2],rawData:e,index:i},JSON.stringify(e)))})),(0,z.jsx)(M,{collections:r,...e})})),_=(0,l.memo)((e=>{let t=-1;const a={},r=[];return p.db.arsenalAll.forEach((e=>{const i=(0,x.Z)(e);if(!Array.isArray(i.improvement)||!i.improvement.length)return null;let s;p.db.equipmentCollections.some((e=>(e.list.some((t=>(i.type===t.type&&(s=e.name),void 0!==s))),void 0!==s)));let o=a[s];t!==s&&void 0!==s&&(t=s,void 0===a[s]&&(o=r.length,a[s]=r.length,r.push({title:s,list:[]}))),i.improvement.forEach(((t,a)=>{r[o].list.push((0,z.jsx)(U,{equipment:i,improvementIndex:a,rawData:e,index:a},e+"-"+a))}))})),(0,z.jsx)(M,{collections:r,...e})})),F=(0,l.memo)((({index:e,day:t})=>{const{watchList:a}=(0,l.useContext)(W),r=!(Array.isArray(a)&&a.length>0);return(0,z.jsx)(O,{title:"关注列表",index:e,defaultShow:!0,isEmpty:r,children:r?(0,z.jsxs)("div",{className:"empty",children:[(0,z.jsx)($.Z,{icon:"heart4",className:"heart"}),(0,z.jsx)("span",{children:"点按心型图标可添加到关注列表"})]}):a.map((e=>{const[a,r]=e.split("-"),i=(0,x.Z)(a),s=void 0===t?void 0:[];if(Array.isArray(s)){const{req:e}=i.improvement[r];e.forEach((([e],a)=>{!0===e[t]&&s.push(a)}))}return{equipment:(0,x.Z)(a),improvementIndex:r,requirements:s,value:e}})).filter((({requirements:e})=>!Array.isArray(e)||e.length>0)).map((({equipment:e,improvementIndex:a,requirements:r,value:i})=>(0,z.jsx)(U,{equipment:e,improvementIndex:a,requirements:r,day:t},i)))},"collection-WATCH")}));let O=(0,h.Z)({connect:e=>{var t;return{ready:null===(t=e.app)||void 0===t?void 0:t.ready}},styles:a(62297)})(i=class extends l.Component{constructor(e){super(e),L(this,"toggle",this.toggle.bind(this));const t=0===e.index||!e.ready;this.state={render:t,show:this.props.defaultShow},t?"function"==typeof e.onRender&&e.onRender(this):setTimeout((()=>{this.mounted&&(this.setState({render:!0}),"function"==typeof e.onRender&&e.onRender(this))}),20*(e.index||0))}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}toggle(){this.setState((e=>({show:!e.show})))}render(){return this.state.render?(0,z.jsxs)("div",{className:c()([this.props.className,{on:this.state.show,"mod-empty":this.props.isEmpty}]),children:[(0,z.jsx)(Z.Z,{component:"h2",type:"line-append",className:c()([`${this.props.className}-title`,{on:this.state.show}]),classNameInner:`${this.props.className}-title-inner`,inherit:!0,onClick:this.toggle,children:this.props.title.split("&").join(" & ")},`${this.props.title}-title`),this.state.show&&(0,z.jsx)("div",{className:`${this.props.className}-list`,children:this.state.render?this.props.children:void 0},`${this.props.title}-list`)]}):null}})||i,U=(0,h.Z)({styles:a(49109)})((n=o=class extends l.PureComponent{constructor(...e){super(...e),L(this,"state",{expand:this.props.defaultExpand||!1}),L(this,"toggle",this.toggle.bind(this)),L(this,"watch",this.watch.bind(this))}toggle(){this.setState((e=>({expand:!e.expand})))}watch(){const e=this.isWatching?"watchRemove":"watchAdd";this.context[e](this.props.equipment.id,this.props.improvementIndex)}get isWatching(){return Array.isArray(this.context.watchList)&&this.context.watchList.includes(`${this.props.equipment.id}-${this.props.improvementIndex}`)}render(){const{className:e,equipment:t,improvementIndex:a,requirements:r}=this.props,i=[],s=t.improvement[a],o=Array.isArray(s.upgrade)&&s.upgrade.length,n=Array.isArray(r);n&&r.forEach((e=>{Array.isArray(s.req)&&s.req[e]&&Array.isArray(s.req[e][1])&&s.req[e][1].forEach((e=>i.push(e)))}));const d=!!i.length,l=!(!o||!s.upgrade[1]);return(0,z.jsxs)("div",{className:e,children:[(0,z.jsx)("span",{className:c()({[e+"-equipment"]:!0,"has-upgrade":o}),children:(0,z.jsx)(j.Z,{className:`${e}-name color-alt-lighter`,equipment:t})}),o&&(0,z.jsx)("span",{className:e+"-equipment",children:(0,z.jsx)(j.Z,{className:`${e}-name color-alt-lighter`,equipment:s.upgrade[0],children:l?(0,z.jsx)(S.Z,{className:e+"-equipment-star",star:s.upgrade[1]}):void 0})}),n&&(0,z.jsxs)("div",{className:e+"-ships",children:[d&&(0,w.Z)(i).map((t=>(t=(0,k.Z)(t),(0,z.jsx)(N.Z,{className:`${e}-ships-ship color-alt`,to:(0,y.Z)("ship",t.id),children:t.getName("")},t.id)))),!d&&"任意秘书舰"]}),!n&&(0,z.jsx)(C.xN,{className:e+"-day-and-ships",data:s,day:this.props.day}),(0,z.jsxs)("div",{className:e+"-resources",children:[(0,z.jsx)(q.Z,{className:c()({[e+"-resources-toggle"]:!0,"is-expand":this.state.expand}),onClick:this.toggle,children:this.state.expand?void 0:"...","data-role":"toggle"}),this.state.expand&&(0,z.jsx)(C._B,{data:s})]}),(0,z.jsx)("button",{type:"button",className:c()([`${e}-btn-watch`,{"is-watching":this.isWatching}]),onClick:this.watch,children:(0,z.jsx)($.Z,{icon:this.isWatching?"heart3":"heart4",className:"heart"})})]})}},L(o,"contextType",W),s=n))||s},77257:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="e8e7d007",i=".e8e7d007{background:rgba(176,190,196,.15);border:.05rem solid rgba(176,190,196,.3);border-radius:.15rem;color:#d0d9dd;display:inline-block;font:inherit;line-height:1.2em;padding:calc(.25em - .05rem) .75em}html.is-webapp .e8e7d007{cursor:pointer}html.is-hover .e8e7d007:hover{background:rgba(176,190,196,.4);color:#fff}.e8e7d007.is-state-active,.e8e7d007:active,html.is-hover .e8e7d007:hover.is-state-active,html.is-hover .e8e7d007:hover:active{background:rgba(0,0,0,.1);border-color:rgba(176,190,196,.4);box-shadow:inset 0 .15rem .25rem .05rem rgba(0,0,0,.3);color:#d0d9dd}.e8e7d007:focus{outline:0}.e8e7d007:focus:not(:active){border-color:#40c4ff;box-shadow:0 0 .25rem rgba(64,196,255,.5)}.e8e7d007[disabled]{color:rgba(185,205,214,.55);opacity:.6}",s={wrapper:r,css:i}},43397:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="d0d8315b",i='.d0d8315b{font-size:.7rem;line-height:.8rem;position:relative}.d0d8315b .item{margin-bottom:.05rem;padding-bottom:.1rem;padding-left:7.65rem;padding-top:.1rem;position:relative}.d0d8315b .item:last-child{margin-bottom:0}.d0d8315b .days{left:0;overflow:visible;position:absolute;top:0}.d0d8315b .day{background:rgba(237,240,242,.15);color:rgba(185,205,214,.55);display:block;float:left;font-size:.6rem;height:1rem;line-height:1rem;margin-right:.05rem;text-align:center;width:1rem}.d0d8315b .day.on{background:#388e3c;color:#b9f6ca}.d0d8315b .day:first-child{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.d0d8315b .day:last-child{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.d0d8315b .ships{color:rgba(185,205,214,.55);margin-right:-.6rem}.d0d8315b .ship{display:inline-block;margin-right:.6rem}.d0d8315b .ship:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .2rem;position:absolute;z-index:-1}.d0d8315b .ship:last-child:after{content:normal}.d0d8315b[data-day] .item:first-child .days:before,.d0d8315b[data-day] .item:last-child .days:after{border-color:transparent;border-style:solid;border-width:.15rem .2rem;content:"";height:0;left:.075rem;margin-left:-.2rem;overflow:hidden;position:absolute;width:0;z-index:5}.d0d8315b[data-day] .item:first-child .days:before{border-top-color:#40c4ff;top:-.25rem}.d0d8315b[data-day] .item:last-child .days:after{border-bottom-color:#40c4ff;bottom:-.25rem}.d0d8315b[data-day] .item:not(:last-child):after{background:rgba(64,196,255,.5);bottom:.05rem;content:"";left:.075rem;margin-left:-.05rem;overflow:hidden;position:absolute;top:1.1rem;width:.1rem}.d0d8315b[data-day="0"] .item:first-child .days:before,.d0d8315b[data-day="0"] .item:last-child .days:after,.d0d8315b[data-day="0"] .item:not(:last-child):after{left:.5rem}.d0d8315b[data-day="1"] .item:first-child .days:before,.d0d8315b[data-day="1"] .item:last-child .days:after,.d0d8315b[data-day="1"] .item:not(:last-child):after{left:1.55rem}.d0d8315b[data-day="2"] .item:first-child .days:before,.d0d8315b[data-day="2"] .item:last-child .days:after,.d0d8315b[data-day="2"] .item:not(:last-child):after{left:2.6rem}.d0d8315b[data-day="3"] .item:first-child .days:before,.d0d8315b[data-day="3"] .item:last-child .days:after,.d0d8315b[data-day="3"] .item:not(:last-child):after{left:3.65rem}.d0d8315b[data-day="4"] .item:first-child .days:before,.d0d8315b[data-day="4"] .item:last-child .days:after,.d0d8315b[data-day="4"] .item:not(:last-child):after{left:4.7rem}.d0d8315b[data-day="5"] .item:first-child .days:before,.d0d8315b[data-day="5"] .item:last-child .days:after,.d0d8315b[data-day="5"] .item:not(:last-child):after{left:5.75rem}.d0d8315b[data-day="6"] .item:first-child .days:before,.d0d8315b[data-day="6"] .item:last-child .days:after,.d0d8315b[data-day="6"] .item:not(:last-child):after{left:6.8rem}',s={wrapper:r,css:i}},79274:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="e99782ee",i=".e99782ee{font-size:.7rem;line-height:.9rem}.e99782ee .category{margin:0 0 .2rem;overflow:hidden;padding-left:4.25rem}@media (max-width:660px){.e99782ee .category{margin-bottom:.3rem}}.e99782ee .category:last-child{margin-bottom:0}.e99782ee .category-title{color:rgba(185,205,214,.55);display:block;margin-left:-4.25rem;position:absolute;white-space:nowrap;width:4.25rem}.e99782ee .item{float:left;padding:0}.e99782ee .item.disabled{color:rgba(185,205,214,.55);opacity:1}.e99782ee .item-resource{width:3.75rem}@media (max-width:480px){.e99782ee .item-resource:nth-child(2n+2){clear:left}}.e99782ee .guaranteed{color:#69f0ae;padding-left:.35em}.e99782ee .equipments{display:block;float:left}@media (max-width:660px){.e99782ee .equipments{clear:left;float:none}}.e99782ee .equipment{display:block;padding-left:1rem}.e99782ee .equipment .icon:before,.e99782ee .equipment .icon:empty{height:1.3rem;left:-.2rem;top:-.2rem;width:1.3rem}.e99782ee .equipment-other{color:#e6e6e6}",s={wrapper:r,css:i}},94005:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="bb3e8dce",i='.bb3e8dce{line-height:3rem}.bb3e8dce.has-options:before{border-bottom:.05rem solid rgba(237,240,242,.15);border-top:.05rem solid rgba(237,240,242,.15);bottom:0;content:"";height:2rem;left:0;position:absolute;top:auto;width:100%;z-index:-1}.bb3e8dce.has-options:after{background:rgba(0,0,0,.2);bottom:.05rem;height:1.9rem;top:auto;z-index:-2}',s={wrapper:r,css:i}},62297:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="f615567f",i='.f615567f{margin-bottom:1.5rem;overflow:hidden}.f615567f:last-child{margin-bottom:0}.f615567f.on{margin-bottom:2.2rem}.f615567f.on:last-child{margin-bottom:0}.f615567f .empty{color:rgba(237,240,242,.15);text-align:center}.f615567f .empty .heart{display:block;height:3.75rem;margin:.5em auto;width:3.75rem}.f615567f .empty span{font-size:1rem;letter-spacing:.2em}.f615567f-title{font-size:.9rem;font-weight:400;height:1.2rem;line-height:1.2rem;margin:0 auto 1rem 0;padding:0 .75rem 0 1.3rem;position:relative;transition-property:color;z-index:2}.f615567f-title .f615567f-title-inner:active{color:hsla(0,0%,100%,.5)}.f615567f-title .f615567f-title-inner:before{border:.3rem solid transparent;border-left-color:initial;content:"";height:0;left:-.88rem;margin-top:-.3rem;opacity:.5;overflow:hidden;position:absolute;top:50%;-webkit-transform-origin:25% 50%;transform-origin:25% 50%;width:0}html.is-webapp .f615567f-title .f615567f-title-inner{cursor:pointer}html.is-hover .f615567f-title .f615567f-title-inner:hover{background:linear-gradient(180deg,#81d4fa 0,#b3e5fc 14%,#e1f5fe 40%,#4fc3f7 62%,#b3e5fc 77%,#81d4fa);color:#40c4ff}.f615567f-title .f615567f-title-inner:active,html.is-hover .f615567f-title .f615567f-title-inner:hover:active{background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);color:hsla(0,0%,100%,.5)}.f615567f-title.on .f615567f-title-inner{font-weight:bolder}.f615567f-title.on .f615567f-title-inner:before{opacity:1;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.f615567f-list{grid-gap:1rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(25rem,1fr))}@media (max-width:524px){.f615567f-list{grid-template-columns:100%}}.f615567f-list.on{margin-bottom:2rem;margin-top:1rem}.f615567f.mod-empty .f615567f-list{display:block}',s={wrapper:r,css:i}},51840:(e,t,a)=>{"use strict";a.r(t),a.d(t,{css:()=>s,default:()=>o,wrapper:()=>i});const r=a.p+"includes/asset.852ae5e2e9e392bd40f2c4a4d7f684fc.png",i="e3ea7287",s='.e3ea7287 .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;float:left;height:2.95rem;position:relative;text-align:center}html.is-hover .e3ea7287 .tab:hover{color:#fff}.e3ea7287 .tab:active,html.is-hover .e3ea7287 .tab:hover:active{color:hsla(0,0%,100%,.5)}.e3ea7287 .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.e3ea7287 .link-today{margin-right:1.5rem}.e3ea7287 .link-today:after{background:rgba(237,240,242,.08);content:"";height:1.5rem;margin-top:-.75rem;position:absolute;right:-.75rem;top:50%;-webkit-transform:skew(-20deg) scaleX(2);transform:skew(-20deg) scaleX(2);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;width:.05rem}.e3ea7287 .link-day{margin-right:.25rem;min-width:1.25rem}.e3ea7287 .link-day.is-today:not(.on){border-bottom-color:rgba(185,205,214,.55)}.e3ea7287 .link-all{margin-left:1.25rem}@media (max-width:480px){.e3ea7287 .link-today{display:none}.e3ea7287 .tabs{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.e3ea7287 .link-all,.e3ea7287 .link-day{-webkit-flex:none;flex:none}.e3ea7287 .link-all{margin-left:.75rem}}.e3ea7287-tabs{height:3rem;overflow:hidden}.e3ea7287-akashi{display:block;float:left;height:2.9rem;margin-right:1.5rem;position:relative;transition:none;width:8.05974rem}.e3ea7287-akashi:after,.e3ea7287-akashi:before{background-image:url("'+r+'");background-repeat:no-repeat;background-size:13.25rem auto;content:"";display:block;position:absolute;-webkit-transform:scale(.75324675);transform:scale(.75324675);transition:inherit}.e3ea7287-akashi:before{-webkit-animation:3s steps(1) 3s infinite none;animation:3s steps(1) 3s infinite none;background-position:-10.7rem 0;height:1.7rem;left:1.1rem;top:.95rem;-webkit-transform-origin:-1.1rem -.95rem;transform-origin:-1.1rem -.95rem;width:2.55rem;z-index:2}.e3ea7287-akashi:after{background-position:0 0;height:3.85rem;left:0;top:0;-webkit-transform-origin:0 0;transform-origin:0 0;width:10.7rem;z-index:1}@media (max-width:660px){.e3ea7287-akashi{display:none}}.e3ea7287-akashi[data-blink-animation="1"]:before{-webkit-animation-name:akashi-blink-1;animation-name:akashi-blink-1}.e3ea7287-akashi[data-blink-animation="2"]:before{-webkit-animation-name:akashi-blink-2;animation-name:akashi-blink-2}.e3ea7287-akashi[data-blink-animation="3"]:before{-webkit-animation-name:akashi-blink-3;animation-name:akashi-blink-3}@-webkit-keyframes akashi-blink-1{.e3ea7287 0%{background-position:-10.7rem 0}.e3ea7287 3%{background-position:-10.7rem -1.7rem}.e3ea7287 6%{background-position:-10.7rem -3.4rem}.e3ea7287 9%{background-position:-10.7rem -1.7rem}.e3ea7287 12%{background-position:-10.7rem 0}}@keyframes akashi-blink-1{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-2{.e3ea7287 0%{background-position:-10.7rem 0}.e3ea7287 3%{background-position:-10.7rem -1.7rem}.e3ea7287 6%{background-position:-10.7rem -3.4rem}.e3ea7287 9%{background-position:-10.7rem -1.7rem}.e3ea7287 12%{background-position:-10.7rem -3.4rem}.e3ea7287 15%{background-position:-10.7rem -1.7rem}.e3ea7287 18%{background-position:-10.7rem 0}}@keyframes akashi-blink-2{0%{background-position:-10.7rem 0}3%{background-position:-10.7rem -1.7rem}6%{background-position:-10.7rem -3.4rem}9%{background-position:-10.7rem -1.7rem}12%{background-position:-10.7rem -3.4rem}15%{background-position:-10.7rem -1.7rem}18%{background-position:-10.7rem 0}}@-webkit-keyframes akashi-blink-3{.e3ea7287 0%{background-position:-10.7rem 0}.e3ea7287 2%{background-position:-10.7rem -1.7rem}.e3ea7287 4%{background-position:-10.7rem -3.4rem}.e3ea7287 6%{background-position:-10.7rem -5.1rem}.e3ea7287 8%{background-position:-10.7rem -6.8rem}.e3ea7287 40%{background-position:-10.7rem -5.1rem}.e3ea7287 42%{background-position:-10.7rem -3.4rem}.e3ea7287 44%{background-position:-10.7rem -1.7rem}.e3ea7287 46%{background-position:-10.7rem 0}}@keyframes akashi-blink-3{0%{background-position:-10.7rem 0}2%{background-position:-10.7rem -1.7rem}4%{background-position:-10.7rem -3.4rem}6%{background-position:-10.7rem -5.1rem}8%{background-position:-10.7rem -6.8rem}40%{background-position:-10.7rem -5.1rem}42%{background-position:-10.7rem -3.4rem}44%{background-position:-10.7rem -1.7rem}46%{background-position:-10.7rem 0}}',o={wrapper:i,css:s}},49109:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="b69b7e12",i='.b69b7e12{padding-left:1.2rem;position:relative}.b69b7e12-equipment{display:inline-block}.b69b7e12-equipment.has-upgrade{padding-right:1.75rem;position:relative}.b69b7e12-equipment.has-upgrade:after,.b69b7e12-equipment.has-upgrade:before{content:"";position:absolute;top:50%;z-index:-1}.b69b7e12-equipment.has-upgrade:before{background:#74c674;height:.2rem;margin-top:-.15rem;right:.75rem;width:.5rem}.b69b7e12-equipment.has-upgrade:after{border-bottom:.3rem solid transparent;border-left:.5rem solid #74c674;border-right:0;border-top:.3rem solid transparent;height:0;margin-top:-.35rem;right:.25rem;width:0}.b69b7e12-ships{color:rgba(185,205,214,.55);font-size:.7rem;line-height:.8rem;padding:.1rem 0 .1rem 1.3rem}@media (max-width:850px){.b69b7e12-ships{position:relative;z-index:-1}}.b69b7e12-ships-ship{display:inline-block}.b69b7e12-ships-ship:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .2rem;z-index:-1}.b69b7e12-ships-ship:last-child:after{content:normal}.b69b7e12-day-and-ships{margin-bottom:.4rem;margin-left:1.3rem;margin-top:.4rem}@media (max-width:850px){.b69b7e12-day-and-ships{position:relative;z-index:-1}}.b69b7e12-resources{padding-left:1.3rem;padding-top:.2rem;position:relative}.b69b7e12-resources-toggle[data-role=toggle]{border-color:rgba(237,240,242,.15);border-radius:1em;display:block;font-size:.7rem;font-weight:600;letter-spacing:.1em;line-height:0;padding:.2rem .4rem .6rem}@media (max-width:850px){.b69b7e12-resources-toggle[data-role=toggle]{padding:.45rem .5rem .75rem}}.b69b7e12-resources-toggle[data-role=toggle].is-expand{height:1.1rem;left:0;padding:0;position:absolute;top:.1rem;width:1.1rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:after,.b69b7e12-resources-toggle[data-role=toggle].is-expand:before{border-left:.05rem solid;border-top:.05rem solid;content:"";height:.4rem;left:50%;margin-left:-.2rem;position:absolute;top:50%;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:.4rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:before{margin-top:-.25rem}.b69b7e12-resources-toggle[data-role=toggle].is-expand:after{margin-top:0}.b69b7e12-btn-watch{background:none;border:0;color:rgba(185,205,214,.55);height:1.8rem;left:-.3rem;outline:0;position:absolute;top:-.15rem;transition:color .2s ease-out;width:1.8rem;z-index:10}html.is-webapp .b69b7e12-btn-watch{cursor:pointer}html.is-hover .b69b7e12-btn-watch:hover{color:hsla(0,0%,100%,.5)}.b69b7e12-btn-watch:active,html.is-hover .b69b7e12-btn-watch:hover:active{color:rgba(185,205,214,.55)}.b69b7e12-btn-watch.is-watching{color:#ffbe3d}',s={wrapper:r,css:i}},60794:(e,t,a)=>{"use strict";a.r(t),a.d(t,{wrapper:()=>r,css:()=>i,default:()=>s});const r="dd41d8cd",i="",s={wrapper:r,css:i}}}]);