(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[737],{76876:e=>{e.exports=["fire","torpedo","aa","asw","bomb","hit","armor","evasion","los","range"]},28865:e=>{e.exports=e=>"object"==typeof e&&("object"==typeof e.equipments||"object"==typeof e.list)},88021:e=>{e.exports=e=>Array.isArray(e)?e:[e]},8120:(e,t,i)=>{const s=i(4879),a=i(88021);e.exports=e=>void 0===e?[]:a(e).reduce(((e,t)=>{if(isNaN(t)){if(s.includes(t))return[...new Set([...e,...s[t]])]}else e.push(parseInt(t));return e}),[])},17136:e=>{e.exports=e=>t=>{let i=s=>{s!==e&&(t(s),i(s+1))};return i(0)}},91277:(e,t,i)=>{"use strict";i.d(t,{Z:()=>K});var s=i(19494),a=i(240),r=i(88767),n=i.n(r),o=i(10620),d=i(75117);let l;const m={},c=e=>(l||(l=Object.values(o.db.equipments).filter((e=>e&&e.isType("SurfaceRadar")&&e.isType("AARadar")))),e?(e=(0,d.Z)(e),m[e.id]||(m[e.id]=l.filter((t=>e.canEquip(t)))),m[e.id]):l);var p=i(5090),b=i(81485),h=i(53027),u=i(29567),f=i(28865),g=i.n(f),x=i(29381),y=i(17911),v=i(76876),j=i.n(v),w=i(25348),N=i(7091),q=i(97118);const k=(0,s.memo)((({bonus:e,isOneOf:t=!1})=>{if("object"!=typeof e)return null;const i="object"==typeof e.equipments;let a=i?t?"When has one of the equipments above equipped, provide additional bonus...":"Additional bonus...":"",r=null,n=null;return"object"==typeof e.bonusCount?(i||(a="Based on number of this equipment, provide..."),r=Object.keys(e.bonusCount).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-count","data-count":t,children:t}),(0,q.jsx)(A,{stats:e.bonusCount[t]})]},t)))):"object"==typeof e.bonusImprove?(i||(a="Based on star level, each of this equipment provide..."),r=Object.keys(e.bonusImprove).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)(N.Z,{className:"extra extra-type-star",star:t}),(0,q.jsx)(A,{stats:e.bonusImprove[t]})]},t)))):"object"==typeof e.bonusArea?(i||(a="Based on area battle at, each of this equipment provide..."),r=Object.keys(e.bonusArea).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-area","data-area":t,children:(0,y.Z)({north:"North"},t.toLowerCase())}),(0,q.jsx)(A,{stats:e.bonusArea[t]})]},t)))):"object"==typeof e.bonus&&(i||(a="Each of this equipment provide..."),r=(0,q.jsx)(A,{stats:e.bonus})),"object"==typeof e.bonusAccumulate&&(n=(0,q.jsxs)(s.Fragment,{children:[(0,q.jsx)("div",{className:"infos",children:"Accumulated set bonus..."}),(0,q.jsx)(A,{stats:e.bonusAccumulate})]})),(0,q.jsxs)(s.Fragment,{children:[a?(0,q.jsx)("div",{className:"infos",children:a}):null,r,n]})})),A=(0,s.memo)((({stats:e})=>"object"!=typeof e?null:(0,q.jsx)("div",{className:"stats",children:j().filter((t=>!isNaN(e[t])&&e[t])).map(((t,i)=>{const s=e[t];let a="";const r=["stat"];switch(t){case"range":s<=1&&(a="Range increased by 1 (Donot stack)");break;default:"string"==typeof s?a=`+${s} Donot stack`:s<0?(a=s,r.push("negative")):a=`+${s}`}return(0,q.jsx)(w.Z,{className:n()(r),stat:t,children:a,type:"range"!==t?(0,y.Z)({fire:"FP",torpedo:"TPD",night:"Night",aa:"AA",aa_interceptor_sortie:"Sortie",aa_interceptor_defense:"Defense",asw:"ASW",hp:"HP",armor:"Armor",evasion:"Evasion",carry:"Carry",speed:"Speed",range:"Range",los:"LOS",luck:"Luck",bomb:"Bomb",hit:"Hit",distance:"Radius",antibomber:"Anti-B",interception:"Intercpt",consum:{fuel:"Fuel",ammo:"Ammo"},equipment:{craftable:"Craft",improvable:"Improve"}},t):void 0},i)}))})));var Z=i(4879),z=i.n(Z),C=i(88021),I=i.n(C),E=i(8120),S=i.n(E),T=i(68253);const L=(0,s.memo)((({className:e,condition:t={}})=>{const i=[];if(t.isType||t.isNotType){const e=!!t.isType;let s=S()(t.isType||t.isNotType);D(s,"Destroyers")&&(s=[1]),D(s,"Carriers")&&(s=[],o.db.shipCollections.some((e=>"Carriers"===e.names.en_us&&(s.push(e.name),!0)))),i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?_:O,s.map(((e,t)=>(0,q.jsx)(R,{children:o.db.shipTypes[e]?o.db.shipTypes[e]._name:e},t)))]},"conditionType"))}if(t.isClass||t.isNotClass){const e=!!t.isClass,s=I()(t.isClass||t.isNotClass);i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?_:O,s.filter((e=>96!==e||!s.includes(97))).map(((e,t)=>{const i=o.db.shipClasses[e],s=o.db.shipTypes[32===i.ship_type_id?9:i.ship_type_id];return(0,q.jsx)(R,{children:(0,y.Z)("${class} Class ${type}",{class:i._name,type:s._name})},t)}))]},"conditionClass"))}return t.isID&&i.push((0,q.jsx)(T.Z,{className:"at is-ship-list",classNameItem:"item",list:I()(t.isID),size:"mini",grid:!1,children:_},"conditionID")),t.isNotID&&i.push((0,q.jsxs)("div",{className:"exclude mod-need-sep",children:[O,I()(t.isNotID).map(((e,t)=>(0,q.jsx)(R,{children:o.db.ships[e].getName(" ")},t)))]},"conditionNotID")),(0,q.jsx)("div",{className:n()("condition","mod-ship",e),children:i},"conditions")})),R=(0,s.memo)((({children:e})=>(0,q.jsx)("span",{className:"item",children:e}))),_=(0,q.jsx)(h.Z,{className:"symbol is-at",icon:"at-sign"}),O=(0,q.jsx)(h.Z,{className:"symbol is-exclude",icon:"cross"}),D=(e=[],t="")=>z()[t]&&z()[t].length===e.length&&z()[t].every((t=>e.includes(t))),B=(0,s.memo)((({className:e,bonus:t,thisShip:i,thisEquipment:s})=>{if("object"!=typeof t)return null;let a=null;return"object"==typeof i?a=(0,q.jsx)(x.Z,{equipment:t.equipment,iconSize:"large",className:"condition mod-equipment color-alt"}):"object"==typeof s&&(a=(0,q.jsx)(L,{condition:t.ship})),(0,q.jsxs)("div",{className:n()([e,"is-single"]),children:[a,(0,q.jsx)(k,{bonus:t})]})}));var $=i(82362),F=i.n($),H=i(4022),P=i.n(H);const W=({className:e,bonus:t,thisShip:i,thisEquipment:s})=>{var a;if(!g()(t))return null;const{listStar:r=[]}=t;let d=null;const l=(e,t={})=>{const{star:i,isCurrent:a=!1}=t,r=a||s&&e===s.id;return{equipment:e,iconSize:"large",className:n()(["equipment"],{"is-current":r,"color-alt":!r}),star:i}};"object"==typeof i||"object"==typeof s&&(d=(0,q.jsx)(L,{condition:t.ship}));let m=Array.isArray(null===(a=t.equipments)||void 0===a?void 0:a.hasOneOf);return(0,q.jsxs)("div",{className:n()([e,"is-set"]),children:[d,(0,q.jsxs)("div",{className:"condition mod-equipments",children:[t.list.map(((e,t)=>{if(!isNaN(e))return(0,q.jsx)(M,{index:t,...l(e,{star:r[t]})},t);if(Array.isArray(e))return e.map(((e,i)=>(0,q.jsx)(M,{index:t,...l(e,{star:r[t]})},t+"-"+i)));if("object"==typeof e&&e.id)return(0,q.jsx)(M,{index:t,...l(e.id,{star:e.star})},t);if("string"==typeof e){let i,a=e;const r=/([a-zA-Z0-9]+)\[([0-9,]+)\]/.exec(e);switch(Array.isArray(r)&&r.length>2&&(a=r[1],i=r[2].split(","),m=!1),a){case"SurfaceRadar":return(0,q.jsx)(M,{index:t,...l(27,{isCurrent:F()(s,{isSurfaceRadar:!0})}),component:"span",equipmentName:"Surface Radar",ids:i,thisEquipment:s,children:(0,q.jsxs)("span",{className:"equipment-type-explain",children:["LOS"," ≥ 5"]})},t);case"AARadar":return(0,q.jsx)(M,{index:t,...l(27,{isCurrent:F()(s,{isAARadar:!0})}),component:"span",equipmentName:"AA Radar",ids:i,thisEquipment:s,children:(0,q.jsxs)("span",{className:"equipment-type-explain",children:["AA"," ≥ 1"]})},t);default:if(P()[e]){const a=o.get.equipmentType(P()[e]);return(0,q.jsx)(M,{index:t,...l(1,{isCurrent:F()(s,{[`is${e}`]:!0})}),component:"span",equipmentName:a._name,icon:a.icon,ids:i,thisEquipment:s},t)}return null}}return null})),m&&(0,q.jsx)(Y,{list:t.equipments.hasOneOf.map((({isID:e})=>e)),thisEquipment:s})]}),(0,q.jsx)(k,{bonus:t})]})},M=({index:e,children:t,ids:i,thisEquipment:s,...a})=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(x.Z,{...a,children:[(0,q.jsx)(h.Z,{icon:e?"plus3":"hammer-wrench",className:"symbol"}),t]}),(0,q.jsx)(Y,{list:i,thisEquipment:s})]}),Y=(0,s.memo)((({list:e,thisEquipment:t})=>Array.isArray(e)&&e.length>0&&(0,q.jsx)("div",{className:"one-of",children:(0,q.jsxs)("div",{className:"wrapper",children:[(0,q.jsx)("span",{className:"only","data-text":"ONLY"}),(0,q.jsx)(u.Z,{className:"list",list:e,highlight:[null==t?void 0:t.id]})]})}))),G={wrapper:"d397ddf6",css:'.d397ddf6 .note-hybrid-radar{border-bottom:.5rem solid transparent;border-right:.5rem solid transparent;border-top:.5rem solid transparent;display:inline-block;position:relative}.d397ddf6 .note-hybrid-radar .note{color:#efa348;margin:0;padding-left:1.6rem;padding-right:1em;position:relative}.d397ddf6 .note-hybrid-radar .note .icon{height:.8rem;left:.35rem;position:absolute;top:.15rem;width:.8rem}.d397ddf6 .note-hybrid-radar .list{border-bottom:.5rem solid transparent;border-right:.7rem solid transparent;font-size:.7rem;margin-top:0;padding-left:1.6rem}.d397ddf6 .note-hybrid-radar.has-list>.wrapper{border-right:1rem solid transparent;overflow:hidden}.d397ddf6 .note-hybrid-radar.has-list>.wrapper .note{display:inline-block}.d397ddf6 .note-hybrid-radar.has-list .note:before,.d397ddf6 .note-hybrid-radar.has-list:after,.d397ddf6 .note-hybrid-radar.has-list:before{bottom:0;content:"";position:absolute;right:0}.d397ddf6 .note-hybrid-radar.has-list:before{border-bottom:.1rem solid rgba(239,163,72,.25);border-left:.1rem solid rgba(239,163,72,.25);border-radius:0 0 .25rem .25rem;border-right:.1rem solid rgba(239,163,72,.25);left:.7rem;top:1.5rem}.d397ddf6 .note-hybrid-radar.has-list:after{border-radius:0 .25rem 0 0;border-right:.1rem solid rgba(239,163,72,.25);border-top:.1rem solid rgba(239,163,72,.25);bottom:auto;height:1rem;left:100%;margin-left:-1rem;top:.5rem}.d397ddf6 .note-hybrid-radar.has-list .note:before{background:rgba(239,163,72,.25);height:.1rem;left:100%;margin-left:-.25rem;top:.5rem;width:100vw}.d397ddf6-list,.d397ddf6-list .d397ddf6-bonus+.d397ddf6-bonus{margin-top:1rem}@supports (display:grid){.d397ddf6-list.mod-gird{grid-gap:1.5rem 1rem;display:grid}.d397ddf6-list.mod-gird .d397ddf6-bonus+.d397ddf6-bonus{margin-top:0}}.d397ddf6-list.mod-gird.is-ship{grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr))}@media (max-width:374px){.d397ddf6-list.mod-gird.is-ship{grid-template-columns:100%}}.d397ddf6-list.mod-gird.is-equipment,.d397ddf6-list.mod-gird.is-set{grid-template-columns:repeat(auto-fill,minmax(30rem,1fr))}@media (max-width:624px){.d397ddf6-list.mod-gird.is-equipment,.d397ddf6-list.mod-gird.is-set{grid-template-columns:100%}}.d397ddf6-bonus .condition{color:#e6e6e6;font-size:.8rem;line-height:1rem}.d397ddf6-bonus .condition>.is-ship-list{margin-bottom:.1rem}.d397ddf6-bonus .condition>.is-ship-list .item{font-size:inherit}.d397ddf6-bonus .condition>.is-ship-list>.symbol{margin-top:.25rem}.d397ddf6-bonus .condition>.at,.d397ddf6-bonus .condition>.exclude{padding-bottom:.1rem;padding-left:1.6rem;padding-top:.1rem;position:relative}.d397ddf6-bonus .condition>.at>.symbol,.d397ddf6-bonus .condition>.exclude>.symbol{height:.8rem;left:.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.d397ddf6-bonus .condition>.at>.symbol.is-at,.d397ddf6-bonus .condition>.exclude>.symbol.is-at{fill:#69f0ae}.d397ddf6-bonus .condition>.at>.symbol.is-exclude,.d397ddf6-bonus .condition>.exclude>.symbol.is-exclude{fill:rgba(185,205,214,.55)}.d397ddf6-bonus .condition>.exclude{color:rgba(185,205,214,.55);font-size:.7rem;z-index:-1}.d397ddf6-bonus .condition>.exclude.is-ship-list .item{color:inherit}.d397ddf6-bonus .condition>.exclude.is-ship-list .avatar{-webkit-filter:grayscale(100%) brightness(.75);filter:grayscale(100%) brightness(.75);opacity:.75}.d397ddf6-bonus .condition .item{display:inline-block;white-space:nowrap}.d397ddf6-bonus .condition .mod-need-sep .item:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .3rem 0 .4rem;z-index:-1}.d397ddf6-bonus .condition .mod-need-sep .item:last-child:after{content:none}.d397ddf6-bonus .condition.mod-ship+.mod-equipments{margin-top:.2rem}.d397ddf6-bonus .condition.mod-equipment,.d397ddf6-bonus .condition.mod-equipments .equipment{padding-bottom:.1rem;padding-top:.1rem}.d397ddf6-bonus .condition.mod-equipments{margin-bottom:.2rem;overflow:hidden}.d397ddf6-bonus .condition.mod-equipments>.equipment{clear:both;display:block;float:left;margin-left:1.6rem;position:relative}.d397ddf6-bonus .condition.mod-equipments>.equipment .symbol{fill:#ffd740;height:.8rem;left:-1.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.d397ddf6-bonus .condition.mod-equipments>.equipment.is-current{color:#ffd740;font-weight:600;z-index:-1}.d397ddf6-bonus .condition.mod-equipments>.equipment.is-current .equipment-type-explain{font-weight:400}.d397ddf6-bonus .condition.mod-equipments>.equipment+.equipment{margin-top:.2rem}.d397ddf6-bonus .condition.mod-equipments .equipment-type-explain{color:#69f0ae;display:inline-block;font-size:.6rem;margin-left:.25rem;position:relative;top:-.2rem;vertical-align:bottom}.d397ddf6-bonus .condition.mod-equipments .equipment-type-explain:before{content:"[";padding-right:.1rem}.d397ddf6-bonus .condition.mod-equipments .equipment-type-explain:after{content:"]";padding-left:.1rem}.d397ddf6-bonus .condition.mod-equipments>.one-of{clear:both;margin-left:1.6rem}.d397ddf6-bonus .condition.mod-equipments>.one-of>.wrapper{background:hsla(204,15%,94%,.075);border:.1rem solid hsla(204,15%,94%,.15);border-radius:.25rem;display:inline-block;font-size:.7rem;margin-top:.2rem;padding:0 .5rem .3rem 1.6rem;position:relative}.d397ddf6-bonus .condition.mod-equipments>.one-of>.wrapper>.only{background:hsla(204,15%,94%,.15);color:hsla(0,0%,100%,.5);display:block;height:100%;left:0;position:absolute;top:0;width:1.2rem}.d397ddf6-bonus .condition.mod-equipments>.one-of>.wrapper>.only:before{content:attr(data-text);height:0;left:50%;line-height:0;margin-top:50%;position:absolute;text-align:right;top:50%;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:0 50%;transform-origin:0 50%;white-space:nowrap;width:0}.d397ddf6-bonus .condition.mod-equipments>.one-of>.wrapper>.list{line-height:1.2rem;margin-top:0}.d397ddf6-bonus .condition.mod-equipments>.one-of>.wrapper>.list .mod-highlight{color:#ffd740;font-weight:600;pointer-events:none;text-decoration:none}.d397ddf6-bonus .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:.8rem;padding:.15rem 0 .15rem 1.6rem}.d397ddf6-bonus .stats{font-size:.7rem;line-height:1rem;padding-left:.8rem;position:relative}.d397ddf6-bonus .stats .stat{float:left;margin-left:.8rem}.d397ddf6-bonus .stats .stat .type{color:#fff;margin-right:.2rem}.d397ddf6-bonus .stats .stat .type~.value{color:#69f0ae;font-size:.8rem;position:relative}.d397ddf6-bonus .stats .stat.negative .value{color:#ff8a80}.d397ddf6-bonus .stats:after{clear:both;content:"";display:block;height:0;overflow:hidden}.d397ddf6-bonus .stats-line{clear:both}.d397ddf6-bonus .stats-has-extra{position:relative}.d397ddf6-bonus .stats-has-extra .extra{line-height:1.1rem;margin-right:-1.1rem;position:absolute;right:100%;text-align:right;white-space:nowrap}.d397ddf6-bonus .stats-has-extra .extra-type-count{color:#fff}.d397ddf6-bonus .stats-has-extra .extra-type-count:before{content:"×";line-height:0;margin-right:.1rem;position:absolute;right:100%;top:50%}.d397ddf6-bonus .stats-has-extra .extra-type-star{line-height:1.2em;margin-right:-1.2rem;top:.1rem}.d397ddf6-bonus .stats-has-extra .extra-type-area{background:hsla(204,15%,94%,.15);border:.05rem solid rgba(185,205,214,.55);border-radius:.15rem;color:#f2f2f2;font-size:.6rem;margin-right:-1.3rem;padding:0 .15rem}'},{wrapper:J}=G,K=(0,a.Z)({styles:G})((0,s.memo)((({className:e,bonuses:t,ship:i,equipment:s})=>{Array.isArray(t)||!i&&!s||(t=(i||s).getBonuses());const a=[],r=[];let o=!1,d=!1;t.forEach((e=>{g()(e)?(o||(o=Boolean(e.equipments&&e.equipments.hasSurfaceRadar)),d||(d=Boolean(e.equipments&&e.equipments.hasAARadar)),r.push(e)):a.push(e)}));const l=o&&d,m=J+"-list",f=J+"-bonus";return(0,q.jsxs)("div",{className:e,children:[(0,q.jsx)(b.Z,{children:a.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":a.length>1,"is-single":!0,"is-ship":!!i,"is-equipment":!!s}),children:a.map(((e,t)=>(0,q.jsx)(B,{className:f,bonus:e,thisShip:i,thisEquipment:s},t)))}):(0,q.jsx)("span",{className:"disabled",children:"None"})}),(0,q.jsxs)(b.Z,{title:"Additional Bonus",titleType:"line-append",children:[!s&&i&&l?(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"Equipment(s) below treated as both Surface and AA Radar(s)"]})}),(0,q.jsx)(u.Z,{className:"list",list:c(i)})]}):null,s&&!i&&l?(0,p.Z)(s).isType("SurfaceRadar")&&(0,p.Z)(s).isType("AARadar")?(0,q.jsx)("div",{className:"note-hybrid-radar",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"This equipment is treated as both Surface and AA Radar"]})}):(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"Equipment(s) below treated as both Surface and AA Radar(s)"]})}),(0,q.jsx)(u.Z,{className:"list",list:c()})]}):null,r.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":r.length>1,"is-set":!0,"is-ship":!!i,"is-equipment":!!s}),children:r.map(((e,t)=>(0,q.jsx)(W,{className:f,bonus:e,thisShip:i,thisEquipment:s},t)))}):(0,q.jsx)("span",{className:"disabled",children:"None"})]})]})})))},99474:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(19494),a=i(240),r=i(53027),n=i(73896),o=i(97118);const d=(0,a.Z)({styles:i(47985)})((0,s.memo)((e=>(0,o.jsx)("span",{...e})))),l=(0,a.Z)({styles:i(82589)})((0,s.memo)((({level:e,bullet:t,stat:i,className:s,title:a,titleHtml:l,html:m,children:c})=>{let p=e;void 0===p&&(p=t),"unknown"===e&&(p=-1),"always"===e&&(p=!0);let b=a;return(l||m)&&(b=(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:l||m}})),(0,o.jsxs)("div",{className:s,"data-level":"string"==typeof i||p||0,children:["string"==typeof i&&(0,o.jsx)(n.Z,{className:"icon",stat:i}),-1===p&&(0,o.jsx)(r.Z,{className:"icon",icon:"question6"}),(0===p||!1===p)&&(0,o.jsx)(r.Z,{className:"icon",icon:"cross"}),!0===p&&(0,o.jsx)(r.Z,{className:"icon",icon:"checkmark4"}),"indeterminate"===p&&(0,o.jsx)(d,{className:"icon"}),b,c&&(0,o.jsx)("span",{className:"des",children:c})]})})))},54596:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var s,a=i(19494),r=i(88767),n=i.n(r),o=i(240),d=i(97118);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const m=(0,o.Z)({styles:i(96132)})(s=class extends a.Component{constructor(...e){super(...e),l(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),l(this,"onLoad",this.onLoad.bind(this)),l(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:i,tag:s,component:a,src:r,img:o,pic:l,picture:m,styleImg:c,...p}=this.props,b=s||a||"span",h=r||o||l||m||void 0;return(0,d.jsxs)(b,{className:n()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...p,children:[(0,d.jsx)("img",{className:n()(["img",t]),src:h,onLoad:this.onLoad,onError:this.onError,style:c,loading:"lazy",alt:s}),i]})}})||s},29567:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var s=i(19494),a=i(240),r=i(88767),n=i.n(r),o=i(5090),d=i(29381),l=i(97118);const m=(0,a.Z)({styles:i(11210)})((0,s.memo)((({className:e,classNameLink:t,list:i,array:s,children:a,highlight:r=[],...m})=>{const c=i||s||[],p=!!c.length;return delete m.type,(0,l.jsxs)("div",{className:e,children:[p&&c.map((e=>(0,o.Z)(e))).sort(((e,t)=>e.order-t.order)).map((e=>(0,l.jsx)(d.Z,{equipment:e,className:n()(["item","color-alt",t,{"mod-highlight":r.includes(e.id)}]),...m},e.id))),a]})})))},55445:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var s,a=i(19494),r=(i(99245),i(88767)),n=i.n(r),o=i(240),d=i(81648),l=i(56207),m=i(13545),c=i(97118);const p=(0,o.Z)({styles:i(1468)})(s=class extends a.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:i,onTabChange:s,tabLink:a=!0}=this.props;let r,o;Array.isArray(e)?(r=e[0],o=e[1]):"object"==typeof e?(r=e.tabId,o=e.tabName):(r=t,o=e);const l=a?`${i}${t?`/${r}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,i=a?"a":"span";return(0,c.jsx)(i,{href:l,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof s&&(e.preventDefault(),s(r,t)),l&&(0,d.Z)(l)},children:o},t)}}render(){const{className:e,title:t,subtitle:i,tabs:s,children:a,...r}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete r[e])),(0,c.jsxs)(l.Z,{className:n()([e,{"has-subtitle":!!i,"has-tabs":!!s,"has-only-title":!a}]),type:"infos",...r,children:[(0,c.jsxs)("div",{className:"infos",children:[t&&(0,c.jsxs)("div",{className:"title",children:[i&&(0,c.jsx)("span",{className:"subtitle",children:i}),(0,c.jsx)(m.Z,{tag:"h1",className:"title-h1",children:t})]}),a]}),s&&(0,c.jsx)("div",{className:"tabs",children:(0,c.jsx)("div",{className:"wrapper",children:s.map(this.renderTab.bind(this))})}),!s&&(0,c.jsx)("div",{className:"tabs-placeholder"})]})}})||s},81485:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var s=i(240),a=i(13545),r=i(97118);const n=(0,s.Z)({styles:i(51692)})((({title:e,titleType:t,children:i,...s})=>(0,r.jsxs)("div",{...s,children:[null==e?null:"object"!=typeof e&&"function"!=typeof e?(0,r.jsx)(a.Z,{tag:"h2",className:"title",type:t,inherit:!0,children:e}):e,i]})))},52776:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var s=i(88767),a=i.n(s),r=i(240),n=i(26674),o=i(97118);const d=(0,r.Z)({styles:i(32591)})((({className:e,"has-tabs":t=!0,...i})=>(0,o.jsx)(n.Z,{className:a()({[e]:!0,"has-tabs":t}),...i})))},82589:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="a08aab19",a='.a08aab19{display:block;font-size:.8rem;line-height:.8rem;margin:1rem 0;min-height:.8rem;padding:0 0 0 1.3rem;position:relative}.a08aab19:first-child{margin-top:0}.a08aab19:last-child{margin-bottom:0}.a08aab19 .des{display:block;font-size:.7rem;line-height:1rem;margin-top:.25rem}.a08aab19 .des .requirement{margin:.25rem 0 0;padding:0}.a08aab19 .des .requirement li{margin:0 0 0 1.5em}.a08aab19 .des .requirement:first-of-type:last-of-type li{list-style:none;margin-left:0}.a08aab19 .des .no-margin-top .requirement{margin-top:0}.a08aab19 .icon,.a08aab19:before{height:.8rem;left:0;position:absolute;top:0;width:.8rem}.a08aab19:before{background:currentColor;border-radius:50%;content:"";display:block}.a08aab19 .equipment{padding-left:1.1rem}.a08aab19 .equipment:before{float:none;height:1.3rem;left:-.2rem;margin-top:-.65rem;position:absolute;top:50%;width:1.3rem}.a08aab19[data-level="0"]:before,.a08aab19[data-level="-1"]:before,.a08aab19[data-level=indeterminate]:before,.a08aab19[data-level=true]:before{display:none}.a08aab19[data-level="0"],.a08aab19[data-level="-1"]{color:rgba(185,205,214,.55)}.a08aab19[data-level="0"] .icon,.a08aab19[data-level="-1"] .icon{fill:rgba(185,205,214,.55)}.a08aab19[data-level="1"],.a08aab19[data-level="2"],.a08aab19[data-level=indeterminate],.a08aab19[data-level=true]{color:#fff}.a08aab19[data-level=true] .icon{fill:#69f0ae}.a08aab19[data-level=indeterminate] .icon{color:#69f0ae}.a08aab19[data-level="1"]:before{background:#40c4ff}.a08aab19[data-level="2"]:before{background:#69f0ae}',r={wrapper:s,css:a}},96132:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="a144a827",a='.a144a827{position:relative}.a144a827.is-loading>.img{opacity:0;z-index:-1000}.a144a827.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid hsla(204,15%,94%,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',r={wrapper:s,css:a}},47985:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="f08fe9cd",a='.f08fe9cd{display:inline-block;position:relative}.f08fe9cd:after,.f08fe9cd:before{content:"";position:absolute}.f08fe9cd:before{background:currentColor;border-radius:.05rem;bottom:.2rem;left:.2rem;right:.2rem;top:.2rem}.f08fe9cd:after{border:.05rem solid;border-radius:.1rem;bottom:0;box-shadow:inset 0 0 .3rem 0 currentColor;left:0;opacity:.5;right:0;top:0}',r={wrapper:s,css:a}},11210:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="f09fc684",a=".f09fc684{margin-right:-1rem;margin-top:-.25rem;overflow:hidden}.f09fc684 .item{float:left;margin-right:1rem;margin-top:.25rem}",r={wrapper:s,css:a}},1468:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="eecbb634",a='.eecbb634.mod-infos{padding-top:1rem}@media (max-width:850px){.eecbb634.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.eecbb634.mod-infos{padding-top:.75rem}}.eecbb634 .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.eecbb634 .infos{display:none}}@media (min-width:851px) and (max-height:760px){.eecbb634 .infos{margin-bottom:.4rem}}.eecbb634 .title{border-right:.05rem solid hsla(204,15%,94%,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.eecbb634 .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.eecbb634 .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.eecbb634 .subtitle{margin-bottom:.2rem;margin-top:0}}.eecbb634.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.eecbb634.has-only-title .title{border-right:0}.eecbb634 .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.eecbb634 .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.eecbb634 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.eecbb634 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.eecbb634 .tabs{height:2.4rem;line-height:2.4rem}}.eecbb634 .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.eecbb634 .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.eecbb634 .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.eecbb634 .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.eecbb634 .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.eecbb634 .tabs>.wrapper:after{width:.6rem}}.eecbb634 .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .eecbb634 .tab:hover{color:#fff}.eecbb634 .tab:active,html.is-hover .eecbb634 .tab:hover:active{color:hsla(0,0%,100%,.5)}.eecbb634 .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.eecbb634 .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.eecbb634 .tab{height:2.35rem}}.eecbb634 .tabs-placeholder{height:.3rem}@media (max-width:850px){.eecbb634 .tabs-placeholder{display:none}}',r={wrapper:s,css:a}},51692:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="bba9cbde",a=".bba9cbde{border-top:2rem solid transparent}.bba9cbde>.title{display:block;margin-bottom:.5rem;margin-top:0}.bba9cbde>.title[data-title-tag=h2],.bba9cbde>h2.title{font-size:.9rem;line-height:1.1rem}.bba9cbde .title-inline{display:inline-block;font-size:medium;line-height:normal;margin:0}",r={wrapper:s,css:a}},32591:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>s,css:()=>a,default:()=>r});const s="c314482c",a=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",r={wrapper:s,css:a}}}]);