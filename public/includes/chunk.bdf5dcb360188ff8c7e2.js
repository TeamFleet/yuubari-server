(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[737],{76876:e=>{e.exports=["fire","torpedo","aa","asw","bomb","hit","armor","evasion","los","range"]},28865:e=>{e.exports=e=>"object"==typeof e&&("object"==typeof e.equipments||"object"==typeof e.list)},88021:e=>{e.exports=e=>Array.isArray(e)?e:[e]},8120:(e,t,i)=>{const a=i(4879),s=i(88021);e.exports=e=>void 0===e?[]:s(e).reduce(((e,t)=>{if(isNaN(t)){if(a.includes(t))return[...new Set([...e,...a[t]])]}else e.push(parseInt(t));return e}),[])},17136:e=>{e.exports=e=>t=>{let i=a=>{a!==e&&(t(a),i(a+1))};return i(0)}},91277:(e,t,i)=>{"use strict";i.d(t,{Z:()=>K});var a=i(19494),s=i(26489),r=i(88767),n=i.n(r),o=i(10620),l=i(75117);let d;const m={},c=e=>(d||(d=Object.values(o.db.equipments).filter((e=>e&&e.isType("SurfaceRadar")&&e.isType("AARadar")))),e?(e=(0,l.Z)(e),m[e.id]||(m[e.id]=d.filter((t=>e.canEquip(t)))),m[e.id]):d);var b=i(5090),p=i(81485),h=i(53027),u=i(29567),f=i(28865),g=i.n(f),x=i(29381),y=i(17911),v=i(76876),j=i.n(v),w=i(25348),N=i(7091),q=i(97118);const A=(0,a.memo)((({bonus:e,isOneOf:t=!1})=>{if("object"!=typeof e)return null;const i="object"==typeof e.equipments;let s=i?t?"When has one of the equipments above equipped, provide additional bonus...":"Additional bonus...":"",r=null,n=null;return"object"==typeof e.bonusCount?(i||(s="Based on number of this equipment, provide..."),r=Object.keys(e.bonusCount).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-count","data-count":t,children:t}),(0,q.jsx)(k,{stats:e.bonusCount[t]})]},t)))):"object"==typeof e.bonusImprove?(i||(s=e.bonusImprove.maxCount?(0,q.jsxs)(q.Fragment,{children:["Based on star level, each of this equipment provide... (up to ",(0,q.jsx)("strong",{children:e.bonusImprove.maxCount})," times)"]}):"Based on star level, each of this equipment provide..."),r=Object.keys(e.bonusImprove).filter((e=>!isNaN(e))).sort(((e,t)=>parseInt(e)-parseInt(t))).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)(N.Z,{className:"extra extra-type-star",star:t}),(0,q.jsx)(k,{stats:e.bonusImprove[t]})]},t)))):"object"==typeof e.bonusArea?(i||(s="Based on area battle at, each of this equipment provide..."),r=Object.keys(e.bonusArea).map((t=>(0,q.jsxs)("div",{className:"stats-line stats-has-extra",children:[(0,q.jsx)("div",{className:"extra extra-type-area","data-area":t,children:(0,y.Z)({north:"North"},t.toLowerCase())}),(0,q.jsx)(k,{stats:e.bonusArea[t]})]},t)))):"object"==typeof e.bonus&&(i||(s="Each of this equipment provide..."),r=(0,q.jsx)(k,{stats:e.bonus})),"object"==typeof e.bonusAccumulate&&(n=(0,q.jsxs)(a.Fragment,{children:[(0,q.jsx)("div",{className:"infos",children:"Accumulated set bonus..."}),(0,q.jsx)(k,{stats:e.bonusAccumulate})]})),(0,q.jsxs)(a.Fragment,{children:[s?(0,q.jsx)("div",{className:"infos",children:s}):null,r,n]})})),k=(0,a.memo)((({stats:e})=>"object"!=typeof e?null:(0,q.jsx)("div",{className:"stats",children:j().filter((t=>!isNaN(e[t])&&e[t])).map(((t,i)=>{const a=e[t];let s="";const r=["stat"];return"range"===t?a<=1&&(s="Range increased by 1 (Donot stack)"):"string"==typeof a?s=`+${a} Donot stack`:a<0?(s=a,r.push("negative")):s=`+${a}`,(0,q.jsx)(w.Z,{className:n()(r),stat:t,children:s,type:"range"!==t?(0,y.Z)({fire:"FP",torpedo:"TPD",night:"Night",aa:"AA",aa_interceptor_sortie:"Sortie",aa_interceptor_defense:"Defense",asw:"ASW",hp:"HP",armor:"Armor",evasion:"Evasion",carry:"Carry",speed:"Speed",range:"Range",los:"LOS",luck:"Luck",bomb:"Bomb",hit:"Hit",distance:"Radius",antibomber:"Anti-B",interception:"Intercpt",consum:{fuel:"Fuel",ammo:"Ammo"},equipment:{craftable:"Craft",improvable:"Improve"}},t):void 0},i)}))})));var Z=i(4879),S=i.n(Z),z=i(88021),C=i.n(z),I=i(8120),E=i.n(I),T=i(68253);const R=(0,a.memo)((({className:e,condition:t={}})=>{const i=[];if(t.isType||t.isNotType){const e=!!t.isType;let a=E()(t.isType||t.isNotType);D(a,"Destroyers")&&(a=[1]),D(a,"Carriers")&&(a=[],o.db.shipCollections.some((e=>"Carriers"===e.names.en_us&&(a.push(e.name),!0)))),i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?O:_,a.map(((e,t)=>(0,q.jsx)(L,{children:o.db.shipTypes[e]?o.db.shipTypes[e]._name:e},t)))]},"conditionType"))}if(t.isClass||t.isNotClass){const e=!!t.isClass,a=C()(t.isClass||t.isNotClass);i.push((0,q.jsxs)("div",{className:n()([e?"at":"exclude","mod-need-sep"]),children:[e?O:_,a.filter((e=>96!==e||!a.includes(97))).map(((e,t)=>{const i=o.db.shipClasses[e],a=o.db.shipTypes[32===i.ship_type_id?9:i.ship_type_id];return(0,q.jsx)(L,{children:(0,y.Z)("${class} Class ${type}",{class:i._name,type:a._name})},t)}))]},"conditionClass"))}return t.isID&&i.push((0,q.jsx)(T.Z,{className:"at is-ship-list",classNameItem:"item",list:C()(t.isID),size:"mini",grid:!1,children:O},"conditionID")),t.isNotID&&i.push((0,q.jsxs)("div",{className:"exclude mod-need-sep",children:[_,C()(t.isNotID).map(((e,t)=>(0,q.jsx)(L,{children:o.db.ships[e].getName(" ")},t)))]},"conditionNotID")),(0,q.jsx)("div",{className:n()("condition","mod-ship",e),children:i},"conditions")})),L=(0,a.memo)((({children:e})=>(0,q.jsx)("span",{className:"item",children:e}))),O=(0,q.jsx)(h.Z,{className:"symbol is-at",icon:"at-sign"}),_=(0,q.jsx)(h.Z,{className:"symbol is-exclude",icon:"cross"}),D=(e=[],t="")=>S()[t]&&S()[t].length===e.length&&S()[t].every((t=>e.includes(t))),B=(0,a.memo)((({className:e,bonus:t,thisShip:i,thisEquipment:a})=>{if("object"!=typeof t)return null;let s=null;return"object"==typeof i?s=(0,q.jsx)(x.Z,{equipment:t.equipment,iconSize:"large",className:"condition mod-equipment color-alt"}):"object"==typeof a&&(s=(0,q.jsx)(R,{condition:t.ship})),(0,q.jsxs)("div",{className:n()([e,"is-single"]),children:[s,(0,q.jsx)(A,{bonus:t})]})}));var F=i(82362),$=i.n(F),P=i(4022),H=i.n(P);const W=({className:e,bonus:t,thisShip:i,thisEquipment:a})=>{var s;if(!g()(t))return null;const{listStar:r=[]}=t;let l=null;const d=(e,t={})=>{const{star:i,isCurrent:s=!1}=t,r=s||a&&e===a.id;return{equipment:e,iconSize:"large",className:n()(["equipment"],{"is-current":r,"color-alt":!r}),star:i}};"object"==typeof i||"object"==typeof a&&(l=(0,q.jsx)(R,{condition:t.ship}));let m=Array.isArray(null===(s=t.equipments)||void 0===s?void 0:s.hasOneOf)||Array.isArray(t.equipments)&&t.equipments.some((({isOneOf:e})=>Array.isArray(e)));return(0,q.jsxs)("div",{className:n()([e,"is-set"]),children:[l,(0,q.jsxs)("div",{className:"condition mod-equipments",children:[t.list.map(((e,t)=>{if(!isNaN(e))return(0,q.jsx)(M,{index:t,...d(e,{star:r[t]})},t);if(Array.isArray(e))return e.map(((e,i)=>(0,q.jsx)(M,{index:t,...d(e,{star:r[t]})},t+"-"+i)));if("object"==typeof e&&e.id)return(0,q.jsx)(M,{index:t,...d(e.id,{star:e.star})},t);if("string"==typeof e){let i,s=e;const r=/([a-zA-Z0-9]+)\[([0-9,]+)\]/.exec(e);switch(Array.isArray(r)&&r.length>2&&(s=r[1],i=r[2].split(","),m=!1),s){case"SuperSurfaceRadar":case"SurfaceRadar":return(0,q.jsx)(M,{index:t,...d(27,{isCurrent:$()(a,{["SuperSurfaceRadar"===s?"isSuperSurfaceRadar":"isSurfaceRadar"]:!0})}),component:"span",equipmentName:"Surface Radar",ids:i,thisEquipment:a,children:(0,q.jsx)("span",{className:"equipment-type-explain",children:"SuperSurfaceRadar"===s?(0,q.jsxs)(q.Fragment,{children:["Hit"," ≥ 8"]}):(0,q.jsxs)(q.Fragment,{children:["LOS"," ≥ 5"]})})},t);case"AARadar":return(0,q.jsx)(M,{index:t,...d(27,{isCurrent:$()(a,{isAARadar:!0})}),component:"span",equipmentName:"AA Radar",ids:i,thisEquipment:a,children:(0,q.jsxs)("span",{className:"equipment-type-explain",children:["AA"," ≥ 1"]})},t);default:if(H()[e]){const s=o.get.equipmentType(H()[e]);return(0,q.jsx)(M,{index:t,...d(1,{isCurrent:$()(a,{[`is${e}`]:!0})}),component:"span",equipmentName:s._name,icon:s.icon,ids:i,thisEquipment:a},t)}return null}}return null})),m&&(Array.isArray(t.equipments)?t.equipments.filter((({isOneOf:e})=>Array.isArray(e))).map((({isOneOf:e},t)=>(0,q.jsx)(Y,{list:e.map((({isID:e})=>e)),thisEquipment:a},t))):(0,q.jsx)(Y,{list:t.equipments.hasOneOf.map((({isID:e})=>e)),thisEquipment:a}))]}),(0,q.jsx)(A,{bonus:t})]})},M=({index:e,children:t,ids:i,thisEquipment:a,...s})=>(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(x.Z,{...s,children:[(0,q.jsx)(h.Z,{icon:e?"plus3":"hammer-wrench",className:"symbol"}),t]}),(0,q.jsx)(Y,{list:i,thisEquipment:a})]}),Y=(0,a.memo)((({list:e,thisEquipment:t})=>Array.isArray(e)&&e.length>0&&(0,q.jsx)("div",{className:"one-of",children:(0,q.jsxs)("div",{className:"wrapper",children:[(0,q.jsx)("span",{className:"only","data-text":"ONLY"}),(0,q.jsx)(u.Z,{className:"list",list:e,highlight:[null==t?void 0:t.id]})]})}))),G={wrapper:"a0a4cb40",css:'.a0a4cb40 .note-hybrid-radar{border-bottom:.5rem solid transparent;border-right:.5rem solid transparent;border-top:.5rem solid transparent;display:inline-block;position:relative}.a0a4cb40 .note-hybrid-radar .note{color:#efa348;margin:0;padding-left:1.6rem;padding-right:1em;position:relative}.a0a4cb40 .note-hybrid-radar .note .icon{height:.8rem;left:.35rem;position:absolute;top:.15rem;width:.8rem}.a0a4cb40 .note-hybrid-radar .list{border-bottom:.5rem solid transparent;border-right:.7rem solid transparent;font-size:.7rem;margin-top:0;padding-left:1.6rem}.a0a4cb40 .note-hybrid-radar.has-list>.wrapper{border-right:1rem solid transparent;overflow:hidden}.a0a4cb40 .note-hybrid-radar.has-list>.wrapper .note{display:inline-block}.a0a4cb40 .note-hybrid-radar.has-list .note:before,.a0a4cb40 .note-hybrid-radar.has-list:after,.a0a4cb40 .note-hybrid-radar.has-list:before{bottom:0;content:"";position:absolute;right:0}.a0a4cb40 .note-hybrid-radar.has-list:before{border-bottom:.1rem solid rgba(239,163,72,.25);border-left:.1rem solid rgba(239,163,72,.25);border-radius:0 0 .25rem .25rem;border-right:.1rem solid rgba(239,163,72,.25);left:.7rem;top:1.5rem}.a0a4cb40 .note-hybrid-radar.has-list:after{border-radius:0 .25rem 0 0;border-right:.1rem solid rgba(239,163,72,.25);border-top:.1rem solid rgba(239,163,72,.25);bottom:auto;height:1rem;left:100%;margin-left:-1rem;top:.5rem}.a0a4cb40 .note-hybrid-radar.has-list .note:before{background:rgba(239,163,72,.25);height:.1rem;left:100%;margin-left:-.25rem;top:.5rem;width:100vw}.a0a4cb40-list,.a0a4cb40-list .a0a4cb40-bonus+.a0a4cb40-bonus{margin-top:1rem}@supports (display:grid){.a0a4cb40-list.mod-gird{grid-gap:1.5rem 1rem;display:grid}.a0a4cb40-list.mod-gird .a0a4cb40-bonus+.a0a4cb40-bonus{margin-top:0}}.a0a4cb40-list.mod-gird.is-ship{grid-template-columns:repeat(auto-fill,minmax(17.5rem,1fr))}@media (max-width:374px){.a0a4cb40-list.mod-gird.is-ship{grid-template-columns:100%}}.a0a4cb40-list.mod-gird.is-equipment,.a0a4cb40-list.mod-gird.is-set{grid-template-columns:repeat(auto-fill,minmax(30rem,1fr))}@media (max-width:624px){.a0a4cb40-list.mod-gird.is-equipment,.a0a4cb40-list.mod-gird.is-set{grid-template-columns:100%}}.a0a4cb40-bonus .condition{color:#e6e6e6;font-size:.8rem;line-height:1rem}.a0a4cb40-bonus .condition>.is-ship-list{margin-bottom:.1rem}.a0a4cb40-bonus .condition>.is-ship-list .item{font-size:inherit}.a0a4cb40-bonus .condition>.is-ship-list>.symbol{margin-top:.25rem}.a0a4cb40-bonus .condition>.at,.a0a4cb40-bonus .condition>.exclude{padding-bottom:.1rem;padding-left:1.6rem;padding-top:.1rem;position:relative}.a0a4cb40-bonus .condition>.at>.symbol,.a0a4cb40-bonus .condition>.exclude>.symbol{height:.8rem;left:.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.a0a4cb40-bonus .condition>.at>.symbol.is-at,.a0a4cb40-bonus .condition>.exclude>.symbol.is-at{fill:#69f0ae}.a0a4cb40-bonus .condition>.at>.symbol.is-exclude,.a0a4cb40-bonus .condition>.exclude>.symbol.is-exclude{fill:rgba(185,205,214,.55)}.a0a4cb40-bonus .condition>.exclude{color:rgba(185,205,214,.55);font-size:.7rem;z-index:-1}.a0a4cb40-bonus .condition>.exclude.is-ship-list .item{color:inherit}.a0a4cb40-bonus .condition>.exclude.is-ship-list .avatar{-webkit-filter:grayscale(100%) brightness(.75);filter:grayscale(100%) brightness(.75);opacity:.75}.a0a4cb40-bonus .condition .item{display:inline-block;white-space:nowrap}.a0a4cb40-bonus .condition .mod-need-sep .item:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .3rem 0 .4rem;z-index:-1}.a0a4cb40-bonus .condition .mod-need-sep .item:last-child:after{content:none}.a0a4cb40-bonus .condition.mod-ship+.mod-equipments{margin-top:.2rem}.a0a4cb40-bonus .condition.mod-equipment,.a0a4cb40-bonus .condition.mod-equipments .equipment{padding-bottom:.1rem;padding-top:.1rem}.a0a4cb40-bonus .condition.mod-equipments{margin-bottom:.2rem;overflow:hidden}.a0a4cb40-bonus .condition.mod-equipments>.equipment{clear:both;display:block;float:left;margin-left:1.6rem;position:relative}.a0a4cb40-bonus .condition.mod-equipments>.equipment .symbol{fill:#ffd740;height:.8rem;left:-1.3rem;position:absolute;top:.2rem;width:.8rem;z-index:-1}.a0a4cb40-bonus .condition.mod-equipments>.equipment.is-current{color:#ffd740;font-weight:600;z-index:-1}.a0a4cb40-bonus .condition.mod-equipments>.equipment.is-current .equipment-type-explain{font-weight:400}.a0a4cb40-bonus .condition.mod-equipments>.equipment+.equipment{margin-top:.2rem}.a0a4cb40-bonus .condition.mod-equipments .equipment-type-explain{color:#69f0ae;display:inline-block;margin-left:.25rem;position:relative;vertical-align:bottom}.a0a4cb40-bonus .condition.mod-equipments .equipment-type-explain:before{content:"[";padding-right:.1rem}.a0a4cb40-bonus .condition.mod-equipments .equipment-type-explain:after{content:"]";padding-left:.1rem}.a0a4cb40-bonus .condition.mod-equipments>.one-of{clear:both;margin-left:1.6rem}.a0a4cb40-bonus .condition.mod-equipments>.one-of>.wrapper{background:rgba(237,240,242,.075);border:.1rem solid rgba(237,240,242,.15);border-radius:.25rem;display:inline-block;font-size:.7rem;margin-top:.2rem;padding:0 .5rem .3rem 1.6rem;position:relative}.a0a4cb40-bonus .condition.mod-equipments>.one-of>.wrapper>.only{background:rgba(237,240,242,.15);color:hsla(0,0%,100%,.5);display:block;height:100%;left:0;position:absolute;top:0;width:1.2rem}.a0a4cb40-bonus .condition.mod-equipments>.one-of>.wrapper>.only:before{content:attr(data-text);height:0;left:50%;line-height:0;margin-top:50%;position:absolute;text-align:right;top:50%;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:0 50%;transform-origin:0 50%;white-space:nowrap;width:0}.a0a4cb40-bonus .condition.mod-equipments>.one-of>.wrapper>.list{line-height:1.2rem;margin-top:0}.a0a4cb40-bonus .condition.mod-equipments>.one-of>.wrapper>.list .mod-highlight{color:#ffd740;font-weight:600;pointer-events:none;text-decoration:none}.a0a4cb40-bonus .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:.8rem;padding:.15rem 0 .15rem 1.6rem}.a0a4cb40-bonus .infos strong{color:#b9cdd6;padding:0 .25em;text-decoration:underline}.a0a4cb40-bonus .stats{font-size:.7rem;line-height:1rem;padding-left:.8rem;position:relative}.a0a4cb40-bonus .stats .stat{float:left;margin-left:.8rem}.a0a4cb40-bonus .stats .stat .type{color:#fff;margin-right:.2rem}.a0a4cb40-bonus .stats .stat .type~.value{color:#69f0ae;font-size:.8rem;position:relative}.a0a4cb40-bonus .stats .stat.negative .value{color:#ff8a80}.a0a4cb40-bonus .stats:after{clear:both;content:"";display:block;height:0;overflow:hidden}.a0a4cb40-bonus .stats-line{clear:both}.a0a4cb40-bonus .stats-has-extra{position:relative}.a0a4cb40-bonus .stats-has-extra .extra{line-height:1.1rem;margin-right:-1.1rem;position:absolute;right:100%;text-align:right;white-space:nowrap}.a0a4cb40-bonus .stats-has-extra .extra-type-count{color:#fff}.a0a4cb40-bonus .stats-has-extra .extra-type-count:before{content:"×";line-height:0;margin-right:.1rem;position:absolute;right:100%;top:50%}.a0a4cb40-bonus .stats-has-extra .extra-type-star{line-height:1.2em;margin-right:-1.2rem;top:.1rem}.a0a4cb40-bonus .stats-has-extra .extra-type-area{background:rgba(237,240,242,.15);border:.05rem solid rgba(185,205,214,.55);border-radius:.15rem;color:#f2f2f2;font-size:.6rem;margin-right:-1.3rem;padding:0 .15rem}'},{wrapper:J}=G,K=(0,s.Z)({styles:G})((0,a.memo)((({className:e,bonuses:t,ship:i,equipment:a})=>{Array.isArray(t)||!i&&!a||(t=(i||a).getBonuses());const s=[],r=[];let o=!1,l=!1;t.forEach((e=>{g()(e)?(o||(o=Boolean(e.equipments&&e.equipments.hasSurfaceRadar)),l||(l=Boolean(e.equipments&&e.equipments.hasAARadar)),r.push(e)):s.push(e)}));const d=o&&l,m=J+"-list",f=J+"-bonus";return(0,q.jsxs)("div",{className:e,children:[(0,q.jsx)(p.Z,{children:s.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":s.length>1,"is-single":!0,"is-ship":!!i,"is-equipment":!!a}),children:s.map(((e,t)=>(0,q.jsx)(B,{className:f,bonus:e,thisShip:i,thisEquipment:a},t)))}):(0,q.jsx)("span",{className:"disabled",children:"None"})}),(0,q.jsxs)(p.Z,{title:"Additional Bonus",titleType:"line-append",children:[!a&&i&&d?(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"Equipment(s) below treated as both Surface and AA Radar(s)"]})}),(0,q.jsx)(u.Z,{className:"list",list:c(i)})]}):null,a&&!i&&d?(0,b.Z)(a).isType("SurfaceRadar")&&(0,b.Z)(a).isType("AARadar")?(0,q.jsx)("div",{className:"note-hybrid-radar",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"This equipment is treated as both Surface and AA Radar"]})}):(0,q.jsxs)("div",{className:"note-hybrid-radar has-list",children:[(0,q.jsx)("div",{className:"wrapper",children:(0,q.jsxs)("p",{className:"note",children:[(0,q.jsx)(h.Z,{icon:"warning2",className:"icon"}),"Equipment(s) below treated as both Surface and AA Radar(s)"]})}),(0,q.jsx)(u.Z,{className:"list",list:c()})]}):null,r.length?(0,q.jsx)("div",{className:n()({[m]:!0,"mod-gird":r.length>1,"is-set":!0,"is-ship":!!i,"is-equipment":!!a}),children:r.map(((e,t)=>(0,q.jsx)(W,{className:f,bonus:e,thisShip:i,thisEquipment:a},t)))}):(0,q.jsx)("span",{className:"disabled",children:"None"})]})]})})))},99474:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var a=i(19494),s=i(26489),r=i(53027),n=i(73896),o=i(97118);const l=(0,s.Z)({styles:i(47985)})((0,a.memo)((e=>(0,o.jsx)("span",{...e})))),d=(0,s.Z)({styles:i(82589)})((0,a.memo)((({level:e,bullet:t,stat:i,className:a,title:s,titleHtml:d,html:m,children:c})=>{let b=e;void 0===b&&(b=t),"unknown"===e&&(b=-1),"always"===e&&(b=!0);let p=s;return(d||m)&&(p=(0,o.jsx)("span",{dangerouslySetInnerHTML:{__html:d||m}})),(0,o.jsxs)("div",{className:a,"data-level":"string"==typeof i||b||0,children:["string"==typeof i&&(0,o.jsx)(n.Z,{className:"icon",stat:i}),-1===b&&(0,o.jsx)(r.Z,{className:"icon",icon:"question6"}),(0===b||!1===b)&&(0,o.jsx)(r.Z,{className:"icon",icon:"cross"}),!0===b&&(0,o.jsx)(r.Z,{className:"icon",icon:"checkmark4"}),"indeterminate"===b&&(0,o.jsx)(l,{className:"icon"}),p,c&&(0,o.jsx)("span",{className:"des",children:c})]})}))),m=d},54596:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var a,s=i(19494),r=i(88767),n=i.n(r),o=i(26489),l=i(97118);function d(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const m=(0,o.Z)({styles:i(96132)})(a=class extends s.Component{constructor(...e){super(...e),d(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),d(this,"onLoad",this.onLoad.bind(this)),d(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:i,tag:a,component:s,src:r,img:o,pic:d,picture:m,styleImg:c,...b}=this.props,p=a||s||"span",h=r||o||d||m||void 0;return(0,l.jsxs)(p,{className:n()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...b,children:[(0,l.jsx)("img",{className:n()(["img",t]),src:h,onLoad:this.onLoad,onError:this.onError,style:c,loading:"lazy",alt:a}),i]})}})||a},29567:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var a=i(19494),s=i(26489),r=i(88767),n=i.n(r),o=i(5090),l=i(29381),d=i(97118);const m=(0,s.Z)({styles:i(11210)})((0,a.memo)((({className:e,classNameLink:t,list:i,array:a,children:s,highlight:r=[],...m})=>{const c=i||a||[],b=!!c.length;return delete m.type,(0,d.jsxs)("div",{className:e,children:[b&&c.map((e=>(0,o.Z)(e))).sort(((e,t)=>e.order-t.order)).map((e=>(0,d.jsx)(l.Z,{equipment:e,className:n()(["item","color-alt",t,{"mod-highlight":r.includes(e.id)}]),...m},e.id))),s]})})))},55445:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var a,s=i(19494),r=(i(99245),i(88767)),n=i.n(r),o=i(26489),l=i(81648),d=i(56207),m=i(13545),c=i(97118);const b=(0,o.Z)({styles:i(1468)})(a=class extends s.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:i,onTabChange:a,tabLink:s=!0}=this.props;let r,o;Array.isArray(e)?(r=e[0],o=e[1]):"object"==typeof e?(r=e.tabId,o=e.tabName):(r=t,o=e);const d=s?`${i}${t?`/${r}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,i=s?"a":"span";return(0,c.jsx)(i,{href:d,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof a&&(e.preventDefault(),a(r,t)),d&&(0,l.Z)(d)},children:o},t)}}render(){const{className:e,title:t,subtitle:i,tabs:a,children:s,...r}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete r[e])),(0,c.jsxs)(d.Z,{className:n()([e,{"has-subtitle":!!i,"has-tabs":!!a,"has-only-title":!s}]),type:"infos",...r,children:[(0,c.jsxs)("div",{className:"infos",children:[t&&(0,c.jsxs)("div",{className:"title",children:[i&&(0,c.jsx)("span",{className:"subtitle",children:i}),(0,c.jsx)(m.Z,{tag:"h1",className:"title-h1",children:t})]}),s]}),a&&(0,c.jsx)("div",{className:"tabs",children:(0,c.jsx)("div",{className:"wrapper",children:a.map(this.renderTab.bind(this))})}),!a&&(0,c.jsx)("div",{className:"tabs-placeholder"})]})}})||a},81485:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(26489),s=i(13545),r=i(97118);const n=(0,a.Z)({styles:i(51692)})((({title:e,titleType:t,children:i,...a})=>(0,r.jsxs)("div",{...a,children:[null==e?null:"object"!=typeof e&&"function"!=typeof e?(0,r.jsx)(s.Z,{tag:"h2",className:"title",type:t,inherit:!0,children:e}):e,i]})))},52776:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var a=i(88767),s=i.n(a),r=i(26489),n=i(26674),o=i(97118);const l=(0,r.Z)({styles:i(32591)})((({className:e,"has-tabs":t=!0,...i})=>(0,o.jsx)(n.Z,{className:s()({[e]:!0,"has-tabs":t}),...i})))},82589:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="e68e996b",s='.e68e996b{display:block;font-size:.8rem;line-height:.8rem;margin:1rem 0;min-height:.8rem;padding:0 0 0 1.3rem;position:relative}.e68e996b:first-child{margin-top:0}.e68e996b:last-child{margin-bottom:0}.e68e996b .des{display:block;font-size:.7rem;line-height:1rem;margin-top:.25rem}.e68e996b .des .requirement{margin:.25rem 0 0;padding:0}.e68e996b .des .requirement li{margin:0 0 0 1.5em}.e68e996b .des .requirement:first-of-type:last-of-type li{list-style:none;margin-left:0}.e68e996b .des .no-margin-top .requirement{margin-top:0}.e68e996b .icon,.e68e996b:before{height:.8rem;left:0;position:absolute;top:0;width:.8rem}.e68e996b:before{background:currentColor;border-radius:50%;content:"";display:block}.e68e996b .equipment{padding-left:1.1rem}.e68e996b .equipment:before{float:none;height:1.3rem;left:-.2rem;margin-top:-.65rem;position:absolute;top:50%;width:1.3rem}.e68e996b[data-level="-1"]:before,.e68e996b[data-level="0"]:before,.e68e996b[data-level=indeterminate]:before,.e68e996b[data-level=true]:before{display:none}.e68e996b[data-level="-1"],.e68e996b[data-level="0"]{color:rgba(185,205,214,.55)}.e68e996b[data-level="-1"] .icon,.e68e996b[data-level="0"] .icon{fill:rgba(185,205,214,.55)}.e68e996b[data-level="1"],.e68e996b[data-level="2"],.e68e996b[data-level=indeterminate],.e68e996b[data-level=true]{color:#fff}.e68e996b[data-level=true] .icon{fill:#69f0ae}.e68e996b[data-level=indeterminate] .icon{color:#69f0ae}.e68e996b[data-level="1"]:before{background:#40c4ff}.e68e996b[data-level="2"]:before{background:#69f0ae}',r={wrapper:a,css:s}},96132:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="b217b232",s='.b217b232{position:relative}.b217b232.is-loading>.img{opacity:0;z-index:-1000}.b217b232.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid rgba(237,240,242,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',r={wrapper:a,css:s}},47985:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="f08fe9cd",s='.f08fe9cd{display:inline-block;position:relative}.f08fe9cd:after,.f08fe9cd:before{content:"";position:absolute}.f08fe9cd:before{background:currentColor;border-radius:.05rem;bottom:.2rem;left:.2rem;right:.2rem;top:.2rem}.f08fe9cd:after{border:.05rem solid;border-radius:.1rem;bottom:0;box-shadow:inset 0 0 .3rem 0 currentColor;left:0;opacity:.5;right:0;top:0}',r={wrapper:a,css:s}},11210:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="f09fc684",s=".f09fc684{margin-right:-1rem;margin-top:-.25rem;overflow:hidden}.f09fc684 .item{float:left;margin-right:1rem;margin-top:.25rem}",r={wrapper:a,css:s}},1468:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="bb5a848e",s='.bb5a848e.mod-infos{padding-top:1rem}@media (max-width:850px){.bb5a848e.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.bb5a848e.mod-infos{padding-top:.75rem}}.bb5a848e .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.bb5a848e .infos{display:none}}@media (min-width:851px) and (max-height:760px){.bb5a848e .infos{margin-bottom:.4rem}}.bb5a848e .title{border-right:.05rem solid rgba(237,240,242,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.bb5a848e .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.bb5a848e .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.bb5a848e .subtitle{margin-bottom:.2rem;margin-top:0}}.bb5a848e.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.bb5a848e.has-only-title .title{border-right:0}.bb5a848e .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.bb5a848e .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.bb5a848e .tabs{height:2.4rem;line-height:2.4rem}}.bb5a848e .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.bb5a848e .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.bb5a848e .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.bb5a848e .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper:after{width:.6rem}}.bb5a848e .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .bb5a848e .tab:hover{color:#fff}.bb5a848e .tab:active,html.is-hover .bb5a848e .tab:hover:active{color:hsla(0,0%,100%,.5)}.bb5a848e .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.bb5a848e .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.bb5a848e .tab{height:2.35rem}}.bb5a848e .tabs-placeholder{height:.3rem}@media (max-width:850px){.bb5a848e .tabs-placeholder{display:none}}',r={wrapper:a,css:s}},51692:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="bba9cbde",s=".bba9cbde{border-top:2rem solid transparent}.bba9cbde>.title{display:block;margin-bottom:.5rem;margin-top:0}.bba9cbde>.title[data-title-tag=h2],.bba9cbde>h2.title{font-size:.9rem;line-height:1.1rem}.bba9cbde .title-inline{display:inline-block;font-size:medium;line-height:normal;margin:0}",r={wrapper:a,css:s}},32591:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>s,default:()=>r,wrapper:()=>a});const a="c314482c",s=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",r={wrapper:a,css:s}}}]);