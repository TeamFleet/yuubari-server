(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[552],{76876:e=>{e.exports=["fire","torpedo","aa","asw","bomb","hit","armor","evasion","los","range"]},28865:e=>{e.exports=e=>"object"==typeof e&&("object"==typeof e.equipments||"object"==typeof e.list)},88021:e=>{e.exports=e=>Array.isArray(e)?e:[e]},8120:(e,t,i)=>{const s=i(4879),r=i(88021);e.exports=e=>void 0===e?[]:r(e).reduce(((e,t)=>{if(isNaN(t)){if(s.includes(t))return[...new Set([...e,...s[t]])]}else e.push(parseInt(t));return e}),[])},17136:e=>{e.exports=e=>t=>{let i=s=>{s!==e&&(t(s),i(s+1))};return i(0)}},1395:(e,t,i)=>{"use strict";i.d(t,{Z:()=>U});var s=i(19494),r=i(26489),a=i(88767),n=i.n(a),o=i(10620),l=i(75117);let d;const m={},c=e=>(d||(d=Object.values(o.db.equipments).filter((e=>e&&e.isType("SurfaceRadar")&&e.isType("AARadar")))),e?(e=(0,l.Z)(e),m[e.id]||(m[e.id]=d.filter((t=>e.canEquip(t)))),m[e.id]):d);var p=i(5090),b=i(81485),h=i(53027),u=i(29567),g=i(28865),f=i.n(g),x=i(29381),y=i(17911),j=i(76876),v=i.n(j),w=i(25348),N=i(7091),q=i(97118);const k=(0,s.memo)((({bonus:e,isOneOf:t=!1})=>{if("object"!=typeof e)return null;const i="object"==typeof e.equipments;let r=i?t?"当拥有以上任意装备时，提供额外加成...":"额外加成...":"",a=null,n=null;return"object"==typeof e.bonusCount?(i||(r="根据该装备的装备数量提供... (超额部分不提供加成)"),a=Object.keys(e.bonusCount).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-count","data-count":t,children:t}),(0,q.jsx)(Z,{stats:e.bonusCount[t]})]},t)))):"object"==typeof e.bonusImprove?(i||(r="每个该装备根据改修星级提供..."),a=Object.keys(e.bonusImprove).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)(N.Z,{className:"extra extra-type-star",star:t}),(0,q.jsx)(Z,{stats:e.bonusImprove[t]})]},t)))):"object"==typeof e.bonusArea?(i||(r="根据所处作战海域，每个该装备提供..."),a=Object.keys(e.bonusArea).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-area","data-area":t,children:(0,y.Z)({north:"北方"},t.toLowerCase())}),(0,q.jsx)(Z,{stats:e.bonusArea[t]})]},t)))):"object"==typeof e.bonus&&(i||(r="每个该装备提供..."),a=(0,q.jsx)(Z,{stats:e.bonus})),"object"==typeof e.bonusAccumulate&&(n=(0,q.jsxs)(s.Fragment,{children:[(0,q.jsx)("div",{className:"infos",children:"累计套装加成..."}),(0,q.jsx)(Z,{stats:e.bonusAccumulate})]})),(0,q.jsxs)(s.Fragment,{children:[r?(0,q.jsx)("div",{className:"infos",children:r}):null,a,n]})})),Z=(0,s.memo)((({stats:e})=>"object"!=typeof e?null:(0,q.jsx)("div",{className:"stats",children:v().filter((t=>!isNaN(e[t])&&e[t])).map(((t,i)=>{const s=e[t];let r="";const a=["stat"];switch(t){case"range":s<=1&&(r="射程提高一档 (该属性不叠加)");break;default:"string"==typeof s?r=`+${s} 该属性不叠加`:s<0?(r=s,a.push("negative")):r=`+${s}`}return(0,q.jsx)(w.Z,{className:n()(a),stat:t,children:r,type:"range"!==t?(0,y.Z)({fire:"火力",torpedo:"雷装",night:"夜战",aa:"对空",aa_interceptor_sortie:"出击",aa_interceptor_defense:"防空",asw:"对潜",hp:"耐久",armor:"装甲",evasion:"回避",carry:"搭载",speed:"航速",range:"射程",los:"索敌",luck:"运",bomb:"爆装",hit:"命中",distance:"航程",antibomber:"对爆",interception:"迎击",consum:{fuel:"燃耗",ammo:"弹耗"},equipment:{craftable:"开发",improvable:"改修"}},t):void 0},i)}))})));var A=i(4879),z=i.n(A),I=i(88021),C=i.n(I),E=i(8120),T=i.n(E),L=i(68253);const O=(0,s.memo)((({className:e,condition:t={}})=>{const i=[];if(t.isType||t.isNotType){const e=!!t.isType;let s=T()(t.isType||t.isNotType);R(s,"Destroyers")&&(s=[1]),R(s,"Carriers")&&(s=[],o.db.shipCollections.some((e=>"Carriers"===e.names.en_us&&(s.push(e.name),!0)))),i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?_:D,s.map(((e,t)=>(0,q.jsx)(S,{children:o.db.shipTypes[e]?o.db.shipTypes[e]._name:e},t)))]},"conditionType"))}if(t.isClass||t.isNotClass){const e=!!t.isClass,s=C()(t.isClass||t.isNotClass);i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?_:D,s.filter((e=>96!==e||!s.includes(97))).map(((e,t)=>{const i=o.db.shipClasses[e],s=o.db.shipTypes[32===i.ship_type_id?9:i.ship_type_id];return(0,q.jsx)(S,{children:(0,y.Z)("${class}级${type}",{class:i._name,type:s._name})},t)}))]},"conditionClass"))}return t.isID&&i.push((0,q.jsx)(L.Z,{className:"at is-ship-list",classNameItem:"item",list:C()(t.isID),size:"mini",grid:!1,children:_},"conditionID")),t.isNotID&&i.push((0,q.jsxs)("div",{className:"exclude mod-need-sep",children:[D,C()(t.isNotID).map(((e,t)=>(0,q.jsx)(S,{children:o.db.ships[e].getName("")},t)))]},"conditionNotID")),(0,q.jsx)("div",{className:n()("condition","mod-ship",e),children:i},"conditions")})),S=(0,s.memo)((({children:e})=>(0,q.jsx)("span",{className:"item",children:e}))),_=(0,q.jsx)(h.Z,{className:"symbol is-at",icon:"at-sign"}),D=(0,q.jsx)(h.Z,{className:"symbol is-exclude",icon:"cross"}),R=(e=[],t="")=>z()[t]&&z()[t].length===e.length&&z()[t].every((t=>e.includes(t))),$=(0,s.memo)((({className:e,bonus:t,thisShip:i,thisEquipment:s})=>{if("object"!=typeof t)return null;let r=null;return"object"==typeof i?r=(0,q.jsx)(x.Z,{equipment:t.equipment,iconSize:"large",className:"condition mod-equipment color-alt"}):"object"==typeof s&&(r=(0,q.jsx)(O,{condition:t.ship})),(0,q.jsxs)("div",{className:n()([e,"is-single"]),children:[r,(0,q.jsx)(k,{bonus:t})]})}));var B=i(82362),F=i.n(B),H=i(4022),M=i.n(H);const P=({className:e,bonus:t,thisShip:i,thisEquipment:s})=>{var r;if(!f()(t))return null;const{listStar:a=[]}=t;let l=null;const d=(e,t={})=>{const{star:i,isCurrent:r=!1}=t,a=r||s&&e===s.id;return{equipment:e,iconSize:"large",className:n()(["equipment"],{"is-current":a,"color-alt":!a}),star:i}};"object"==typeof i||"object"==typeof s&&(l=(0,q.jsx)(O,{condition:t.ship}));let m=Array.isArray(null===(r=t.equipments)||void 0===r?void 0:r.hasOneOf)||Array.isArray(t.equipments)&&t.equipments.some((({isOneOf:e})=>Array.isArray(e)));return(0,q.jsxs)("div",{className:n()([e,"is-set"]),children:[l,(0,q.jsxs)("div",{className:"condition mod-equipments",children:[t.list.map(((e,t)=>{if(!isNaN(e))return(0,q.jsx)(G,{index:t,...d(e,{star:a[t]})},t);if(Array.isArray(e))return e.map(((e,i)=>(0,q.jsx)(G,{index:t,...d(e,{star:a[t]})},t+"-"+i)));if("object"==typeof e&&e.id)return(0,q.jsx)(G,{index:t,...d(e.id,{star:e.star})},t);if("string"==typeof e){let i,r=e;const a=/([a-zA-Z0-9]+)\[([0-9,]+)\]/.exec(e);switch(Array.isArray(a)&&a.length>2&&(r=a[1],i=a[2].split(","),m=!1),r){case"SurfaceRadar":return(0,q.jsx)(G,{index:t,...d(27,{isCurrent:F()(s,{isSurfaceRadar:!0})}),component:"span",equipmentName:"对水面电探/雷达",ids:i,thisEquipment:s,children:(0,q.jsxs)("span",{className:"equipment-type-explain",children:["索敌"," ≥ 5"]})},t);case"AARadar":return(0,q.jsx)(G,{index:t,...d(27,{isCurrent:F()(s,{isAARadar:!0})}),component:"span",equipmentName:"对空电探/雷达",ids:i,thisEquipment:s,children:(0,q.jsxs)("span",{className:"equipment-type-explain",children:["对空"," ≥ 1"]})},t);default:if(M()[e]){const r=o.get.equipmentType(M()[e]);return(0,q.jsx)(G,{index:t,...d(1,{isCurrent:F()(s,{[`is${e}`]:!0})}),component:"span",equipmentName:r._name,icon:r.icon,ids:i,thisEquipment:s},t)}return null}}return null})),m&&(Array.isArray(t.equipments)?t.equipments.filter((({isOneOf:e})=>Array.isArray(e))).map((({isOneOf:e},t)=>(0,q.jsx)(J,{list:e.map((({isID:e})=>e)),thisEquipment:s},t))):(0,q.jsx)(J,{list:t.equipments.hasOneOf.map((({isID:e})=>e)),thisEquipment:s}))]}),(0,q.jsx)(k,{bonus:t})]})},G=({index:e,children:t,ids:i,thisEquipment:s,...r})=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(x.Z,{...r,children:[(0,q.jsx)(h.Z,{icon:e?"plus3":"hammer-wrench",className:"symbol"}),t]}),(0,q.jsx)(J,{list:i,thisEquipment:s})]}),J=(0,s.memo)((({list:e,thisEquipment:t})=>Array.isArray(e)&&e.length>0&&(0,q.jsx)("div",{className:"one-of",children:(0,q.jsxs)("div",{className:"wrapper",children:[(0,q.jsx)("span",{className:"only","data-text":"仅限"}),(0,q.jsx)(u.Z,{className:"list",list:e,highlight:[null==t?void 0:t.id]})]})}))),K={wrapper:"e322787e",css:'.e322787e .note-hybrid-radar{border-bottom:.5rem solid transparent;border-right:.5rem solid transparent;border-top:.5rem solid transparent;display:inline-block;position:relative}.e322787e .note-hybrid-radar .note{color:#efa348;margin:0;padding-left:1.6rem;padding-right:1em;position:relative}.e322787e .note-hybrid-radar .note .icon{height:.8rem;left:.35rem;position:absolute;top:.15rem;width:.8rem}.e322787e .note-hybrid-radar .list{border-bottom:.5rem solid transparent;border-right:.7rem solid transparent;font-size:.7rem;margin-top:0;padding-left:1.6rem}.e322787e .note-hybrid-radar.has-list>.wrapper{border-right:1rem solid transparent;overflow:hidden}.e322787e .note-hybrid-radar.has-list>.wrapper .note{display:inline-block}.e322787e .note-hybrid-radar.has-list .note:before,.e322787e .note-hybrid-radar.has-list:after,.e322787e .note-hybrid-radar.has-list:before{bottom:0;content:"";position:absolute;right:0}.e322787e .note-hybrid-radar.has-list:before{border-bottom:.1rem solid rgba(239,163,72,.25);border-left:.1rem solid rgba(239,163,72,.25);border-radius:0 0 .25rem .25rem;border-right:.1rem solid rgba(239,163,72,.25);left:.7rem;top:1.5rem}.e322787e .note-hybrid-radar.has-list:after{border-radius:0 .25rem 0 0;border-right:.1rem solid rgba(239,163,72,.25);border-top:.1rem solid rgba(239,163,72,.25);bottom:auto;height:1rem;left:100%;margin-left:-1rem;top:.5rem}.e322787e .note-hybrid-radar.has-list .note:before{background:rgba(239,163,72,.25);height:.1rem;left:100%;margin-left:-.25rem;top:.5rem;width:100vw}.e322787e-list,.e322787e-list .e322787e-bonus+.e322787e-bonus{margin-top:1rem}@supports (display:grid){.e322787e-list.mod-gird{grid-gap:1.5rem 1rem;display:grid}.e322787e-list.mod-gird .e322787e-bonus+.e322787e-bonus{margin-top:0}}.e322787e-list.mod-gird.is-ship{grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr))}@media (max-width:374px){.e322787e-list.mod-gird.is-ship{grid-template-columns:100%}}.e322787e-list.mod-gird.is-equipment,.e322787e-list.mod-gird.is-set{grid-template-columns:repeat(auto-fill,minmax(30rem,1fr))}@media (max-width:624px){.e322787e-list.mod-gird.is-equipment,.e322787e-list.mod-gird.is-set{grid-template-columns:100%}}.e322787e-bonus .condition{color:#e6e6e6;font-size:.8rem;line-height:1rem}.e322787e-bonus .condition>.is-ship-list{margin-bottom:.1rem}.e322787e-bonus .condition>.is-ship-list .item{font-size:inherit}.e322787e-bonus .condition>.is-ship-list>.symbol{margin-top:.25rem}.e322787e-bonus .condition>.at,.e322787e-bonus .condition>.exclude{padding-bottom:.1rem;padding-left:1.6rem;padding-top:.1rem;position:relative}.e322787e-bonus .condition>.at>.symbol,.e322787e-bonus .condition>.exclude>.symbol{height:.8rem;left:.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.e322787e-bonus .condition>.at>.symbol.is-at,.e322787e-bonus .condition>.exclude>.symbol.is-at{fill:#69f0ae}.e322787e-bonus .condition>.at>.symbol.is-exclude,.e322787e-bonus .condition>.exclude>.symbol.is-exclude{fill:rgba(185,205,214,.55)}.e322787e-bonus .condition>.exclude{color:rgba(185,205,214,.55);font-size:.7rem;z-index:-1}.e322787e-bonus .condition>.exclude.is-ship-list .item{color:inherit}.e322787e-bonus .condition>.exclude.is-ship-list .avatar{-webkit-filter:grayscale(100%) brightness(.75);filter:grayscale(100%) brightness(.75);opacity:.75}.e322787e-bonus .condition .item{display:inline-block;white-space:nowrap}.e322787e-bonus .condition .mod-need-sep .item:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .3rem 0 .4rem;z-index:-1}.e322787e-bonus .condition .mod-need-sep .item:last-child:after{content:none}.e322787e-bonus .condition.mod-ship+.mod-equipments{margin-top:.2rem}.e322787e-bonus .condition.mod-equipment,.e322787e-bonus .condition.mod-equipments .equipment{padding-bottom:.1rem;padding-top:.1rem}.e322787e-bonus .condition.mod-equipments{margin-bottom:.2rem;overflow:hidden}.e322787e-bonus .condition.mod-equipments>.equipment{clear:both;display:block;float:left;margin-left:1.6rem;position:relative}.e322787e-bonus .condition.mod-equipments>.equipment .symbol{fill:#ffd740;height:.8rem;left:-1.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.e322787e-bonus .condition.mod-equipments>.equipment.is-current{color:#ffd740;font-weight:600;z-index:-1}.e322787e-bonus .condition.mod-equipments>.equipment.is-current .equipment-type-explain{font-weight:400}.e322787e-bonus .condition.mod-equipments>.equipment+.equipment{margin-top:.2rem}.e322787e-bonus .condition.mod-equipments .equipment-type-explain{color:#69f0ae;display:inline-block;font-size:.6rem;margin-left:.25rem;position:relative;top:-.2rem;vertical-align:bottom}.e322787e-bonus .condition.mod-equipments .equipment-type-explain:before{content:"[";padding-right:.1rem}.e322787e-bonus .condition.mod-equipments .equipment-type-explain:after{content:"]";padding-left:.1rem}.e322787e-bonus .condition.mod-equipments>.one-of{clear:both;margin-left:1.6rem}.e322787e-bonus .condition.mod-equipments>.one-of>.wrapper{background:rgba(237,240,242,.075);border:.1rem solid rgba(237,240,242,.15);border-radius:.25rem;display:inline-block;font-size:.7rem;margin-top:.2rem;padding:0 .5rem .3rem 1.6rem;position:relative}.e322787e-bonus .condition.mod-equipments>.one-of>.wrapper>.only{background:rgba(237,240,242,.15);color:hsla(0,0%,100%,.5);display:block;height:100%;left:0;position:absolute;top:0;width:1.2rem}.e322787e-bonus .condition.mod-equipments>.one-of>.wrapper>.only:before{content:attr(data-text);height:0;left:50%;line-height:0;margin-top:50%;position:absolute;text-align:right;top:50%;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:0 50%;transform-origin:0 50%;white-space:nowrap;width:0}.e322787e-bonus .condition.mod-equipments>.one-of>.wrapper>.list{line-height:1.2rem;margin-top:0}.e322787e-bonus .condition.mod-equipments>.one-of>.wrapper>.list .mod-highlight{color:#ffd740;font-weight:600;pointer-events:none;text-decoration:none}.e322787e-bonus .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:.8rem;padding:.15rem 0 .15rem 1.6rem}.e322787e-bonus .stats{font-size:.7rem;line-height:1rem;padding-left:.8rem;position:relative}.e322787e-bonus .stats .stat{float:left;margin-left:.8rem}.e322787e-bonus .stats .stat .type{color:#fff;margin-right:.2rem}.e322787e-bonus .stats .stat .type~.value{color:#69f0ae;font-size:.8rem;position:relative}.e322787e-bonus .stats .stat.negative .value{color:#ff8a80}.e322787e-bonus .stats:after{clear:both;content:"";display:block;height:0;overflow:hidden}.e322787e-bonus .stats-line{clear:both}.e322787e-bonus .stats-has-extra{position:relative}.e322787e-bonus .stats-has-extra .extra{line-height:1.1rem;margin-right:-1.1rem;position:absolute;right:100%;text-align:right;white-space:nowrap}.e322787e-bonus .stats-has-extra .extra-type-count{color:#fff}.e322787e-bonus .stats-has-extra .extra-type-count:before{content:"×";line-height:0;margin-right:.1rem;position:absolute;right:100%;top:50%}.e322787e-bonus .stats-has-extra .extra-type-star{line-height:1.2em;margin-right:-1.2rem;top:.1rem}.e322787e-bonus .stats-has-extra .extra-type-area{background:rgba(237,240,242,.15);border:.05rem solid rgba(185,205,214,.55);border-radius:.15rem;color:#f2f2f2;font-size:.6rem;margin-right:-1.3rem;padding:0 .15rem}'},{wrapper:Q}=K,U=(0,r.Z)({styles:K})((0,s.memo)((({className:e,bonuses:t,ship:i,equipment:s})=>{Array.isArray(t)||!i&&!s||(t=(i||s).getBonuses());const r=[],a=[];let o=!1,l=!1;t.forEach((e=>{f()(e)?(o||(o=Boolean(e.equipments&&e.equipments.hasSurfaceRadar)),l||(l=Boolean(e.equipments&&e.equipments.hasAARadar)),a.push(e)):r.push(e)}));const d=o&&l,m=Q+"-list",g=Q+"-bonus";return(0,q.jsxs)("div",{className:e,children:[(0,q.jsx)(b.Z,{children:r.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":r.length>1,"is-single":!0,"is-ship":!!i,"is-equipment":!!s}),children:r.map(((e,t)=>(0,q.jsx)($,{className:g,bonus:e,thisShip:i,thisEquipment:s},t)))}):(0,q.jsx)("span",{className:"disabled",children:"无"})}),(0,q.jsxs)(b.Z,{title:"单次加成",titleType:"line-append",children:[!s&&i&&d?(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"以下装备同时算作对水面和对空电探/雷达"]})}),(0,q.jsx)(u.Z,{className:"list",list:c(i)})]}):null,s&&!i&&d?(0,p.Z)(s).isType("SurfaceRadar")&&(0,p.Z)(s).isType("AARadar")?(0,q.jsx)("div",{className:"note-hybrid-radar",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"本装备同时算作对水面和对空电探/雷达"]})}):(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"以下装备同时算作对水面和对空电探/雷达"]})}),(0,q.jsx)(u.Z,{className:"list",list:c()})]}):null,a.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":a.length>1,"is-set":!0,"is-ship":!!i,"is-equipment":!!s}),children:a.map(((e,t)=>(0,q.jsx)(P,{className:g,bonus:e,thisShip:i,thisEquipment:s},t)))}):(0,q.jsx)("span",{className:"disabled",children:"无"})]})]})})))},99474:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var s=i(19494),r=i(26489),a=i(53027),n=i(73896),o=i(97118);const l=(0,r.Z)({styles:i(65847)})((0,s.memo)((e=>(0,o.jsx)("span",{...e})))),d=(0,r.Z)({styles:i(33704)})((0,s.memo)((({level:e,bullet:t,stat:i,className:s,title:r,titleHtml:d,html:m,children:c})=>{let p=e;void 0===p&&(p=t),"unknown"===e&&(p=-1),"always"===e&&(p=!0);let b=r;return(d||m)&&(b=(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:d||m}})),(0,o.jsxs)("div",{className:s,"data-level":"string"==typeof i||p||0,children:["string"==typeof i&&(0,o.jsx)(n.Z,{className:"icon",stat:i}),-1===p&&(0,o.jsx)(a.Z,{className:"icon",icon:"question6"}),(0===p||!1===p)&&(0,o.jsx)(a.Z,{className:"icon",icon:"cross"}),!0===p&&(0,o.jsx)(a.Z,{className:"icon",icon:"checkmark4"}),"indeterminate"===p&&(0,o.jsx)(l,{className:"icon"}),b,c&&(0,o.jsx)("span",{className:"des",children:c})]})})))},54596:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var s,r=i(19494),a=i(88767),n=i.n(a),o=i(26489),l=i(97118);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const m=(0,o.Z)({styles:i(97010)})(s=class extends r.Component{constructor(...e){super(...e),d(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),d(this,"onLoad",this.onLoad.bind(this)),d(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:i,tag:s,component:r,src:a,img:o,pic:d,picture:m,styleImg:c,...p}=this.props,b=s||r||"span",h=a||o||d||m||void 0;return(0,l.jsxs)(b,{className:n()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...p,children:[(0,l.jsx)("img",{className:n()(["img",t]),src:h,onLoad:this.onLoad,onError:this.onError,style:c,loading:"lazy",alt:s}),i]})}})||s},29567:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var s=i(19494),r=i(26489),a=i(88767),n=i.n(a),o=i(5090),l=i(29381),d=i(97118);const m=(0,r.Z)({styles:i(42005)})((0,s.memo)((({className:e,classNameLink:t,list:i,array:s,children:r,highlight:a=[],...m})=>{const c=i||s||[],p=!!c.length;return delete m.type,(0,d.jsxs)("div",{className:e,children:[p&&c.map((e=>(0,o.Z)(e))).sort(((e,t)=>e.order-t.order)).map((e=>(0,d.jsx)(l.Z,{equipment:e,className:n()(["item","color-alt",t,{"mod-highlight":a.includes(e.id)}]),...m},e.id))),r]})})))},55445:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var s,r=i(19494),a=(i(99245),i(88767)),n=i.n(a),o=i(26489),l=i(81648),d=i(56207),m=i(13545),c=i(97118);const p=(0,o.Z)({styles:i(8436)})(s=class extends r.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:i,onTabChange:s,tabLink:r=!0}=this.props;let a,o;Array.isArray(e)?(a=e[0],o=e[1]):"object"==typeof e?(a=e.tabId,o=e.tabName):(a=t,o=e);const d=r?`${i}${t?`/${a}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,i=r?"a":"span";return(0,c.jsx)(i,{href:d,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof s&&(e.preventDefault(),s(a,t)),d&&(0,l.Z)(d)},children:o},t)}}render(){const{className:e,title:t,subtitle:i,tabs:s,children:r,...a}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete a[e])),(0,c.jsxs)(d.Z,{className:n()([e,{"has-subtitle":!!i,"has-tabs":!!s,"has-only-title":!r}]),type:"infos",...a,children:[(0,c.jsxs)("div",{className:"infos",children:[t&&(0,c.jsxs)("div",{className:"title",children:[i&&(0,c.jsx)("span",{className:"subtitle",children:i}),(0,c.jsx)(m.Z,{tag:"h1",className:"title-h1",children:t})]}),r]}),s&&(0,c.jsx)("div",{className:"tabs",children:(0,c.jsx)("div",{className:"wrapper",children:s.map(this.renderTab.bind(this))})}),!s&&(0,c.jsx)("div",{className:"tabs-placeholder"})]})}})||s},81485:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(26489),r=i(13545),a=i(97118);const n=(0,s.Z)({styles:i(15645)})((({title:e,titleType:t,children:i,...s})=>(0,a.jsxs)("div",{...s,children:[null==e?null:"object"!=typeof e&&"function"!=typeof e?(0,a.jsx)(r.Z,{tag:"h2",className:"title",type:t,inherit:!0,children:e}):e,i]})))},52776:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(88767),r=i.n(s),a=i(26489),n=i(26674),o=i(97118);const l=(0,a.Z)({styles:i(23508)})((({className:e,"has-tabs":t=!0,...i})=>(0,o.jsx)(n.Z,{className:r()({[e]:!0,"has-tabs":t}),...i})))},33704:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="e68e996b",r='.e68e996b{display:block;font-size:.8rem;line-height:.8rem;margin:1rem 0;min-height:.8rem;padding:0 0 0 1.3rem;position:relative}.e68e996b:first-child{margin-top:0}.e68e996b:last-child{margin-bottom:0}.e68e996b .des{display:block;font-size:.7rem;line-height:1rem;margin-top:.25rem}.e68e996b .des .requirement{margin:.25rem 0 0;padding:0}.e68e996b .des .requirement li{margin:0 0 0 1.5em}.e68e996b .des .requirement:first-of-type:last-of-type li{list-style:none;margin-left:0}.e68e996b .des .no-margin-top .requirement{margin-top:0}.e68e996b .icon,.e68e996b:before{height:.8rem;left:0;position:absolute;top:0;width:.8rem}.e68e996b:before{background:currentColor;border-radius:50%;content:"";display:block}.e68e996b .equipment{padding-left:1.1rem}.e68e996b .equipment:before{float:none;height:1.3rem;left:-.2rem;margin-top:-.65rem;position:absolute;top:50%;width:1.3rem}.e68e996b[data-level="-1"]:before,.e68e996b[data-level="0"]:before,.e68e996b[data-level=indeterminate]:before,.e68e996b[data-level=true]:before{display:none}.e68e996b[data-level="-1"],.e68e996b[data-level="0"]{color:rgba(185,205,214,.55)}.e68e996b[data-level="-1"] .icon,.e68e996b[data-level="0"] .icon{fill:rgba(185,205,214,.55)}.e68e996b[data-level="1"],.e68e996b[data-level="2"],.e68e996b[data-level=indeterminate],.e68e996b[data-level=true]{color:#fff}.e68e996b[data-level=true] .icon{fill:#69f0ae}.e68e996b[data-level=indeterminate] .icon{color:#69f0ae}.e68e996b[data-level="1"]:before{background:#40c4ff}.e68e996b[data-level="2"]:before{background:#69f0ae}',a={wrapper:s,css:r}},97010:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="b217b232",r='.b217b232{position:relative}.b217b232.is-loading>.img{opacity:0;z-index:-1000}.b217b232.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid rgba(237,240,242,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',a={wrapper:s,css:r}},65847:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="f08fe9cd",r='.f08fe9cd{display:inline-block;position:relative}.f08fe9cd:after,.f08fe9cd:before{content:"";position:absolute}.f08fe9cd:before{background:currentColor;border-radius:.05rem;bottom:.2rem;left:.2rem;right:.2rem;top:.2rem}.f08fe9cd:after{border:.05rem solid;border-radius:.1rem;bottom:0;box-shadow:inset 0 0 .3rem 0 currentColor;left:0;opacity:.5;right:0;top:0}',a={wrapper:s,css:r}},42005:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="f09fc684",r=".f09fc684{margin-right:-1rem;margin-top:-.25rem;overflow:hidden}.f09fc684 .item{float:left;margin-right:1rem;margin-top:.25rem}",a={wrapper:s,css:r}},8436:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="bb5a848e",r='.bb5a848e.mod-infos{padding-top:1rem}@media (max-width:850px){.bb5a848e.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.bb5a848e.mod-infos{padding-top:.75rem}}.bb5a848e .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.bb5a848e .infos{display:none}}@media (min-width:851px) and (max-height:760px){.bb5a848e .infos{margin-bottom:.4rem}}.bb5a848e .title{border-right:.05rem solid rgba(237,240,242,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.bb5a848e .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.bb5a848e .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.bb5a848e .subtitle{margin-bottom:.2rem;margin-top:0}}.bb5a848e.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.bb5a848e.has-only-title .title{border-right:0}.bb5a848e .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.bb5a848e .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.bb5a848e .tabs{height:2.4rem;line-height:2.4rem}}.bb5a848e .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.bb5a848e .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.bb5a848e .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.bb5a848e .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper:after{width:.6rem}}.bb5a848e .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .bb5a848e .tab:hover{color:#fff}.bb5a848e .tab:active,html.is-hover .bb5a848e .tab:hover:active{color:hsla(0,0%,100%,.5)}.bb5a848e .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.bb5a848e .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.bb5a848e .tab{height:2.35rem}}.bb5a848e .tabs-placeholder{height:.3rem}@media (max-width:850px){.bb5a848e .tabs-placeholder{display:none}}',a={wrapper:s,css:r}},15645:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="bba9cbde",r=".bba9cbde{border-top:2rem solid transparent}.bba9cbde>.title{display:block;margin-bottom:.5rem;margin-top:0}.bba9cbde>.title[data-title-tag=h2],.bba9cbde>h2.title{font-size:.9rem;line-height:1.1rem}.bba9cbde .title-inline{display:inline-block;font-size:medium;line-height:normal;margin:0}",a={wrapper:s,css:r}},23508:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>a,wrapper:()=>s});const s="c314482c",r=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",a={wrapper:s,css:r}}}]);