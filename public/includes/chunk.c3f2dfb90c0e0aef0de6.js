(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[104],{43173:(o,a,t)=>{"use strict";t.d(a,{Z:()=>e});const e=["fuel","ammo","steel","bauxite"]},71007:(o,a,t)=>{"use strict";t.d(a,{Z:()=>e});const e=o=>!1===o?"-":void 0===o?"?":o},69224:(o,a,t)=>{"use strict";t.d(a,{Z:()=>s});var e=t(19494),i=t(26489),n=t(10620),d=t(5090),c=t(61329),r=t(99245),f=t(97118);const s=(0,i.Z)({styles:t(69692)})((0,e.memo)((({tag:o,icon:a,type:t,equipment:e,children:i,...s})=>{let p,b,u,g=o||"span";return u=/^([0-9]+)\[([0-9]*),([0-9]*)\]$/.exec(a),Array.isArray(u)&&(p=u[1],u[2]&&u[3]?b=`${u[2]}~${u[3]}`:u[2]?b=`${u[2]}+`:u[3]&&(b=`0~${u[3]}+`),b&&(s["data-suffix-type"]="stat-range")),u=/^([0-9]+):([0-9]+)$/.exec(a),Array.isArray(u)&&(p=u[1],u[2]&&(b=(0,d.Z)(u[2])._name,g=r.rU,s.to=(0,c.Z)("equipment",u[2])),b&&(s["data-suffix-type"]="equipment-name")),void 0===p&&(p=e?(0,d.Z)(e)._icon:t?n.db.equipmentTypes[t].icon:parseInt(a)),isNaN(p)&&(p=void 0),b||(b=(""+a).replace(p,"").toUpperCase()||void 0),(0,f.jsx)(g,{"data-icon":p,"data-suffix":b,...s,children:i})})))},73896:(o,a,t)=>{"use strict";t.d(a,{Z:()=>r});var e=t(19494),i=t(26489),n=t(43173),d=t(97118);const c=["hp","armor","evasion","carry","fire","torpedo","aa","asw","speed","range","los","luck","fuel","ammo","bomb","hit","steel","bauxite","dev","screw"],r=(0,i.Z)({styles:t(17607)})((0,e.memo)((({className:o,component:a,tag:t,disableResourceColor:e,stat:i,children:r})=>{const f=a||t||"span",s=!e&&n.Z.includes(i);let p=i;switch(i){case"distance":p="range";break;case"antibomber":p="hit";break;case"interception":p="evasion"}return(0,d.jsx)(f,{className:o,"data-stat":c.indexOf(p),"data-resource":s?i:void 0,children:r})})))},7091:(o,a,t)=>{"use strict";t.d(a,{Z:()=>d});var e=t(19494),i=t(26489),n=t(97118);const d=(0,i.Z)({styles:t(48262)})((0,e.memo)((({star:o,level:a,lvl:t,children:e,...i})=>(0,n.jsx)("span",{...i,"data-star":o||a||t,children:"★+"+(o||a||t||e)}))))},29381:(o,a,t)=>{"use strict";t.d(a,{Z:()=>p});var e=t(19494),i=t(99245),n=t(26489),d=t(69224),c=t(7091),r=t(5090),f=t(61329),s=t(97118);const p=(0,n.Z)({styles:t(53031)})((0,e.memo)((({className:o,tag:a,component:t,equipment:e,equipmentName:n,children:p,icon:b,iconSize:u,star:g,...l})=>{const m=a||t,k=m||i.rU,y=(0,r.Z)(e)||{};return(0,s.jsxs)(k,{className:o+(u?` mod-icon-${u}`:""),to:m&&"a"===m?void 0:(0,f.Z)("equipment",y.id),...l,children:[(0,s.jsx)(d.Z,{className:"icon",icon:b||y._icon}),n||y._name,g?(0,s.jsx)(c.Z,{star:g,className:"star"}):null,p]})})))},25348:(o,a,t)=>{"use strict";t.d(a,{Z:()=>c});var e=t(19494),i=t(26489),n=t(73896),d=t(97118);const c=(0,i.Z)({styles:t(83699)})((0,e.memo)((({className:o,type:a,title:t,stat:e,value:i,max:c,disableResourceColor:r,children:f})=>{const s=a||t,p=e?n.Z:"dl",b={className:o};return e&&(b.tag="dl",b.stat=e,b.disableResourceColor=r),void 0!==i&&i<0&&(b.className+=" is-negative"),(0,d.jsxs)(p,{...b,children:[s&&(0,d.jsx)("dt",{className:"type",children:s}),(0,d.jsxs)("dd",{className:"value",children:[i,f,c&&(0,d.jsx)("sup",{className:"value-max",children:c})]})]})})))},69692:(o,a,t)=>{"use strict";t.r(a),t.d(a,{css:()=>f,default:()=>s,wrapper:()=>r});const e=t.p+"includes/asset.924316386597c1efc7b8.png";var i=t(5658),n=t.n(i),d=t(24585),c=t.n(d);const r="f5973f0d",f='.f5973f0d{overflow:hidden;position:relative;vertical-align:top}.f5973f0d:before{content:"";float:left;margin:0 .2rem 0 0}.f5973f0d:before,.f5973f0d:empty{background:url("'+e+'") no-repeat 0 1.8rem/cover;display:inline-block;height:1.8rem;width:1.8rem}.f5973f0d[data-icon="0"]:before{background-position:0 -1.81818182%}.f5973f0d[data-icon="1"]:before{background-position:0 0}.f5973f0d[data-icon="2"]:before{background-position:0 1.81818182%}.f5973f0d[data-icon="3"]:before{background-position:0 3.63636364%}.f5973f0d[data-icon="4"]:before{background-position:0 5.45454545%}.f5973f0d[data-icon="5"]:before{background-position:0 7.27272727%}.f5973f0d[data-icon="6"]:before{background-position:0 9.09090909%}.f5973f0d[data-icon="7"]:before{background-position:0 10.90909091%}.f5973f0d[data-icon="8"]:before{background-position:0 12.72727273%}.f5973f0d[data-icon="9"]:before{background-position:0 14.54545455%}.f5973f0d[data-icon="10"]:before{background-position:0 16.36363636%}.f5973f0d[data-icon="11"]:before{background-position:0 18.18181818%}.f5973f0d[data-icon="12"]:before{background-position:0 20%}.f5973f0d[data-icon="13"]:before{background-position:0 21.81818182%}.f5973f0d[data-icon="14"]:before{background-position:0 23.63636364%}.f5973f0d[data-icon="15"]:before{background-position:0 25.45454545%}.f5973f0d[data-icon="16"]:before{background-position:0 27.27272727%}.f5973f0d[data-icon="17"]:before{background-position:0 29.09090909%}.f5973f0d[data-icon="18"]:before{background-position:0 30.90909091%}.f5973f0d[data-icon="19"]:before{background-position:0 32.72727273%}.f5973f0d[data-icon="20"]:before{background-position:0 34.54545455%}.f5973f0d[data-icon="21"]:before{background-position:0 36.36363636%}.f5973f0d[data-icon="22"]:before{background-position:0 38.18181818%}.f5973f0d[data-icon="23"]:before{background-position:0 40%}.f5973f0d[data-icon="24"]:before{background-position:0 41.81818182%}.f5973f0d[data-icon="25"]:before{background-position:0 43.63636364%}.f5973f0d[data-icon="26"]:before{background-position:0 45.45454545%}.f5973f0d[data-icon="27"]:before{background-position:0 47.27272727%}.f5973f0d[data-icon="28"]:before{background-position:0 49.09090909%}.f5973f0d[data-icon="29"]:before{background-position:0 50.90909091%}.f5973f0d[data-icon="30"]:before{background-position:0 52.72727273%}.f5973f0d[data-icon="31"]:before{background-position:0 54.54545455%}.f5973f0d[data-icon="32"]:before{background-position:0 56.36363636%}.f5973f0d[data-icon="33"]:before{background-position:0 58.18181818%}.f5973f0d[data-icon="34"]:before{background-position:0 60%}.f5973f0d[data-icon="35"]:before{background-position:0 61.81818182%}.f5973f0d[data-icon="36"]:before{background-position:0 63.63636364%}.f5973f0d[data-icon="37"]:before{background-position:0 65.45454545%}.f5973f0d[data-icon="38"]:before{background-position:0 67.27272727%}.f5973f0d[data-icon="39"]:before{background-position:0 69.09090909%}.f5973f0d[data-icon="40"]:before{background-position:0 70.90909091%}.f5973f0d[data-icon="41"]:before{background-position:0 72.72727273%}.f5973f0d[data-icon="42"]:before{background-position:0 74.54545455%}.f5973f0d[data-icon="43"]:before{background-position:0 76.36363636%}.f5973f0d[data-icon="44"]:before{background-position:0 78.18181818%}.f5973f0d[data-icon="45"]:before{background-position:0 80%}.f5973f0d[data-icon="46"]:before{background-position:0 81.81818182%}.f5973f0d[data-icon="47"]:before{background-position:0 83.63636364%}.f5973f0d[data-icon="48"]:before{background-position:0 85.45454545%}.f5973f0d[data-icon="49"]:before{background-position:0 87.27272727%}.f5973f0d[data-icon="50"]:before{background-position:0 89.09090909%}.f5973f0d[data-icon="51"]:before{background-position:0 90.90909091%}.f5973f0d[data-icon="52"]:before{background-position:0 92.72727273%}.f5973f0d[data-icon="53"]:before{background-position:0 94.54545455%}.f5973f0d[data-icon="54"]:before{background-position:0 96.36363636%}.f5973f0d[data-icon="55"]:before{background-position:0 98.18181818%}.f5973f0d[data-icon="56"]:before{background-position:0 100%}.f5973f0d:empty:before{display:none}.f5973f0d:empty[data-icon="0"]{background-position:0 -1.81818182%}.f5973f0d:empty[data-icon="1"]{background-position:0 0}.f5973f0d:empty[data-icon="2"]{background-position:0 1.81818182%}.f5973f0d:empty[data-icon="3"]{background-position:0 3.63636364%}.f5973f0d:empty[data-icon="4"]{background-position:0 5.45454545%}.f5973f0d:empty[data-icon="5"]{background-position:0 7.27272727%}.f5973f0d:empty[data-icon="6"]{background-position:0 9.09090909%}.f5973f0d:empty[data-icon="7"]{background-position:0 10.90909091%}.f5973f0d:empty[data-icon="8"]{background-position:0 12.72727273%}.f5973f0d:empty[data-icon="9"]{background-position:0 14.54545455%}.f5973f0d:empty[data-icon="10"]{background-position:0 16.36363636%}.f5973f0d:empty[data-icon="11"]{background-position:0 18.18181818%}.f5973f0d:empty[data-icon="12"]{background-position:0 20%}.f5973f0d:empty[data-icon="13"]{background-position:0 21.81818182%}.f5973f0d:empty[data-icon="14"]{background-position:0 23.63636364%}.f5973f0d:empty[data-icon="15"]{background-position:0 25.45454545%}.f5973f0d:empty[data-icon="16"]{background-position:0 27.27272727%}.f5973f0d:empty[data-icon="17"]{background-position:0 29.09090909%}.f5973f0d:empty[data-icon="18"]{background-position:0 30.90909091%}.f5973f0d:empty[data-icon="19"]{background-position:0 32.72727273%}.f5973f0d:empty[data-icon="20"]{background-position:0 34.54545455%}.f5973f0d:empty[data-icon="21"]{background-position:0 36.36363636%}.f5973f0d:empty[data-icon="22"]{background-position:0 38.18181818%}.f5973f0d:empty[data-icon="23"]{background-position:0 40%}.f5973f0d:empty[data-icon="24"]{background-position:0 41.81818182%}.f5973f0d:empty[data-icon="25"]{background-position:0 43.63636364%}.f5973f0d:empty[data-icon="26"]{background-position:0 45.45454545%}.f5973f0d:empty[data-icon="27"]{background-position:0 47.27272727%}.f5973f0d:empty[data-icon="28"]{background-position:0 49.09090909%}.f5973f0d:empty[data-icon="29"]{background-position:0 50.90909091%}.f5973f0d:empty[data-icon="30"]{background-position:0 52.72727273%}.f5973f0d:empty[data-icon="31"]{background-position:0 54.54545455%}.f5973f0d:empty[data-icon="32"]{background-position:0 56.36363636%}.f5973f0d:empty[data-icon="33"]{background-position:0 58.18181818%}.f5973f0d:empty[data-icon="34"]{background-position:0 60%}.f5973f0d:empty[data-icon="35"]{background-position:0 61.81818182%}.f5973f0d:empty[data-icon="36"]{background-position:0 63.63636364%}.f5973f0d:empty[data-icon="37"]{background-position:0 65.45454545%}.f5973f0d:empty[data-icon="38"]{background-position:0 67.27272727%}.f5973f0d:empty[data-icon="39"]{background-position:0 69.09090909%}.f5973f0d:empty[data-icon="40"]{background-position:0 70.90909091%}.f5973f0d:empty[data-icon="41"]{background-position:0 72.72727273%}.f5973f0d:empty[data-icon="42"]{background-position:0 74.54545455%}.f5973f0d:empty[data-icon="43"]{background-position:0 76.36363636%}.f5973f0d:empty[data-icon="44"]{background-position:0 78.18181818%}.f5973f0d:empty[data-icon="45"]{background-position:0 80%}.f5973f0d:empty[data-icon="46"]{background-position:0 81.81818182%}.f5973f0d:empty[data-icon="47"]{background-position:0 83.63636364%}.f5973f0d:empty[data-icon="48"]{background-position:0 85.45454545%}.f5973f0d:empty[data-icon="49"]{background-position:0 87.27272727%}.f5973f0d:empty[data-icon="50"]{background-position:0 89.09090909%}.f5973f0d:empty[data-icon="51"]{background-position:0 90.90909091%}.f5973f0d:empty[data-icon="52"]{background-position:0 92.72727273%}.f5973f0d:empty[data-icon="53"]{background-position:0 94.54545455%}.f5973f0d:empty[data-icon="54"]{background-position:0 96.36363636%}.f5973f0d:empty[data-icon="55"]{background-position:0 98.18181818%}.f5973f0d:empty[data-icon="56"]{background-position:0 100%}.f5973f0d[data-suffix]:after{bottom:0;content:"";display:block;font-size:.6rem;line-height:1.2em;position:absolute;right:0;text-align:center;z-index:2}.f5973f0d[data-suffix="+"]:after,.f5973f0d[data-suffix="-"]:after{bottom:0;height:.7rem;width:.7rem}.f5973f0d[data-suffix="+"]:after{background:url("'+n()+'") no-repeat 50% 50%/cover}.f5973f0d[data-suffix="-"]:after{background:url("'+c()+'") no-repeat 50% 50%/cover}.f5973f0d[data-icon="16"][data-suffix="+"]:after,.f5973f0d[data-icon="16"][data-suffix="-"]:after{background:url("'+e+'") no-repeat 0 52.72727273%/cover;bottom:-.25rem;height:1.4rem;right:-.25rem;width:1.4rem}.f5973f0d[data-icon="16"][data-suffix="-"]:after{-webkit-filter:hue-rotate(260deg);filter:hue-rotate(260deg)}.f5973f0d[data-suffix-type=stat-range]:after,.f5973f0d[data-suffix=AA]:after{border-radius:.25rem;box-shadow:0 0 .05rem .05rem rgba(0,0,0,.35);content:attr(data-suffix);-webkit-transform:scale(.83333333);transform:scale(.83333333);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.f5973f0d[data-suffix=AA]:after{padding:0 .25em}.f5973f0d[data-suffix-type=stat-range]:after{background:rgba(85,139,47,.65);border:.05rem solid #b2ff59;color:#ccff90;padding:0 .3em}.f5973f0d[data-icon="15"][data-suffix-type=stat-range]:after,.f5973f0d[data-suffix=AA]:after{background:rgba(189,90,15,.65);border:.05rem solid #f29c5a;color:#fbe3d0}.f5973f0d[data-suffix-type=equipment-name]{background-size:1.8rem auto;display:block;width:auto}.f5973f0d[data-suffix-type=equipment-name]:after{-webkit-align-items:center;align-items:center;content:attr(data-suffix);display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;left:auto;min-height:1.8rem;padding-left:1.8rem;position:relative;right:auto;text-align:left}a.f5973f0d[data-suffix-type=equipment-name]:after{transition-property:color}html.is-hover a.f5973f0d[data-suffix-type=equipment-name]:hover:after{color:#fff}a.f5973f0d[data-suffix-type=equipment-name]:active:after,html.is-hover a.f5973f0d[data-suffix-type=equipment-name]:hover:active:after{color:hsla(0,0%,100%,.5)}',s={wrapper:r,css:f}},17607:(o,a,t)=>{"use strict";t.r(a),t.d(a,{css:()=>n,default:()=>d,wrapper:()=>i});const e=t.p+"includes/asset.465f8ca2f10efb49d75b.png",i="cc97e349",n='.cc97e349:before{content:"";float:left;margin:0 .2rem 0 0}.cc97e349:before,.cc97e349:empty{background:url("'+e+'") no-repeat 0 .9rem/cover;display:inline-block;height:.9rem;width:.9rem}.cc97e349[data-stat="0"]:before{background-position:0 0}.cc97e349[data-stat="1"]:before{background-position:0 5.26315789%}.cc97e349[data-stat="2"]:before{background-position:0 10.52631579%}.cc97e349[data-stat="3"]:before{background-position:0 15.78947368%}.cc97e349[data-stat="4"]:before{background-position:0 21.05263158%}.cc97e349[data-stat="5"]:before{background-position:0 26.31578947%}.cc97e349[data-stat="6"]:before{background-position:0 31.57894737%}.cc97e349[data-stat="7"]:before{background-position:0 36.84210526%}.cc97e349[data-stat="8"]:before{background-position:0 42.10526316%}.cc97e349[data-stat="9"]:before{background-position:0 47.36842105%}.cc97e349[data-stat="10"]:before{background-position:0 52.63157895%}.cc97e349[data-stat="11"]:before{background-position:0 57.89473684%}.cc97e349[data-stat="12"]:before{background-position:0 63.15789474%}.cc97e349[data-stat="13"]:before{background-position:0 68.42105263%}.cc97e349[data-stat="14"]:before{background-position:0 73.68421053%}.cc97e349[data-stat="15"]:before{background-position:0 78.94736842%}.cc97e349[data-stat="16"]:before{background-position:0 84.21052632%}.cc97e349[data-stat="17"]:before{background-position:0 89.47368421%}.cc97e349[data-stat="18"]:before{background-position:0 94.73684211%}.cc97e349[data-stat="19"]:before{background-position:0 100%}.cc97e349[data-stat="20"]:before{background-position:0 105.26315789%}.cc97e349[data-resource=fuel]{color:#7fbd75}.cc97e349[data-resource=ammo]{color:#ccbf8e}.cc97e349[data-resource=steel]{color:#e3e3e3}.cc97e349[data-resource=bauxite]{color:#f2bb91}.cc97e349:empty:before{display:none}.cc97e349:empty[data-stat="0"]{background-position:0 0}.cc97e349:empty[data-stat="1"]{background-position:0 5.26315789%}.cc97e349:empty[data-stat="2"]{background-position:0 10.52631579%}.cc97e349:empty[data-stat="3"]{background-position:0 15.78947368%}.cc97e349:empty[data-stat="4"]{background-position:0 21.05263158%}.cc97e349:empty[data-stat="5"]{background-position:0 26.31578947%}.cc97e349:empty[data-stat="6"]{background-position:0 31.57894737%}.cc97e349:empty[data-stat="7"]{background-position:0 36.84210526%}.cc97e349:empty[data-stat="8"]{background-position:0 42.10526316%}.cc97e349:empty[data-stat="9"]{background-position:0 47.36842105%}.cc97e349:empty[data-stat="10"]{background-position:0 52.63157895%}.cc97e349:empty[data-stat="11"]{background-position:0 57.89473684%}.cc97e349:empty[data-stat="12"]{background-position:0 63.15789474%}.cc97e349:empty[data-stat="13"]{background-position:0 68.42105263%}.cc97e349:empty[data-stat="14"]{background-position:0 73.68421053%}.cc97e349:empty[data-stat="15"]{background-position:0 78.94736842%}.cc97e349:empty[data-stat="16"]{background-position:0 84.21052632%}.cc97e349:empty[data-stat="17"]{background-position:0 89.47368421%}.cc97e349:empty[data-stat="18"]{background-position:0 94.73684211%}.cc97e349:empty[data-stat="19"]{background-position:0 100%}.cc97e349:empty[data-stat="20"]{background-position:0 105.26315789%}',d={wrapper:i,css:n}},48262:(o,a,t)=>{"use strict";t.r(a),t.d(a,{css:()=>n,default:()=>d,wrapper:()=>i});var e=t(54186);const i="f79f4a24",n='.f79f4a24{background:rgba(54,133,54,.25);border:.05rem solid;border-radius:1em;color:#74c674;display:inline-block;font-size:.6rem;font-weight:400;line-height:1.2em;margin-left:.5em;padding:.1em .35em .025em .25em;position:relative;top:-.05rem;vertical-align:text-bottom}.f79f4a24[data-star="0"]{background:rgba(104,147,167,.15);color:rgba(185,205,214,.55)}.f79f4a24[data-star="10"]{background:none transparent;border-color:transparent;color:transparent;position:relative;width:1.6335rem}.f79f4a24[data-star="10"]:before{background:url("'+t.n(e)()+'") no-repeat 50% 50%;background-size:contain;bottom:-.05rem;content:"";left:0;position:absolute;top:-.05rem;width:100%}',d={wrapper:i,css:n}},53031:(o,a,t)=>{"use strict";t.r(a),t.d(a,{css:()=>i,default:()=>n,wrapper:()=>e});const e="e9718678",i=".e9718678{display:inline-block;padding-bottom:0;padding-left:1.3rem;padding-top:0;position:relative}.e9718678 .icon:before,.e9718678 .icon:empty{height:1.5rem;left:-.15rem;position:absolute;top:-.15rem;width:1.5rem}.e9718678.mod-icon-large{padding-left:1.6rem}.e9718678.mod-icon-large .icon:before,.e9718678.mod-icon-large .icon:empty{height:1.8rem;left:-.3rem;top:-.3rem;width:1.8rem}",n={wrapper:e,css:i}},83699:(o,a,t)=>{"use strict";t.r(a),t.d(a,{css:()=>i,default:()=>n,wrapper:()=>e});const e="c34c5abd",i=".c34c5abd{color:#fff;display:block;line-height:.9rem;margin:0;overflow:hidden;padding:.1rem 0}.c34c5abd .type,.c34c5abd .value{display:block;float:left;margin:0;padding:0}.c34c5abd .type{color:#b9cdd6;margin-right:.3rem}.c34c5abd .value-max{margin-left:.25em}.c34c5abd.is-positive{color:#69f0ae}.c34c5abd.is-negative{color:#ff8a80}.c34c5abd.is-negative .type{color:rgba(255,204,209,.75)}.c34c5abd.disabled{opacity:.4}",n={wrapper:e,css:i}},54186:o=>{o.exports="data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 24 15' enable-background='new 0 0 24 15' xml:space='preserve'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' fill='%23579861' d='M14.5,4.7l5,1L16,9.7l0.6,5.3L12,12.7L7.4,15L8,9.7L4.5,5.7l5-1 L12,0'/%3e %3cg%3e %3cpolygon fill='%23FFFFFF' points='21,11 20.5,10.5 20.5,10 18.5,10 18.5,10.5 18,11 16,11 15.5,10.5 15.5,9.5 16,9 16.5,9 16.5,8.5 17,8 16.5,7.5 16.5,7 16,7 15.5,6.5 15.5,5.5 16,5 18,5 18.5,5.5 18.5,6 20.5,6 20.5,5.5 21,5 23,5 23.5,5.5 23.5,6.5 23,7 22.5,7 22.5,7.5 22,8 22.5,8.5 22.5,9 23,9 23.5,9.5 23.5,10.5 23,11 '/%3e %3cpath fill='%23579861' d='M23,5.5v1h-1v1h-1v1h1v1h1v1h-2v-1h-3v1h-2v-1h1v-1h1v-1h-1v-1h-1v-1h2v1h3v-1H23 M23,4.5h-2l-1,1h-1l-1-1 h-2l-1,1v1l1,1h0L16.5,8L16,8.5h0l-1,1v1l1,1h2l1-1h1l1,1h2l1-1v-1l-1-1h0L22.5,8L23,7.5h0l1-1v-1L23,4.5L23,4.5z'/%3e %3c/g%3e %3cg%3e %3cpolygon fill='%23FFFFFF' points='5.5,11 5.5,10 3.5,10 3.5,11 0.5,11 0.5,5 3.5,5 3.5,6 4.5,6 4.5,7 4.5,6 5.5,6 5.5,5 8.5,5 8.5,11 '/%3e %3cpath fill='%23579861' d='M8,5.5v5H6v-2H5v1H4v-1H3v2H1v-5h2v1h1v1h1v-1h1v-1H8 M9,4.5H8H6H5v1H4h0v-1H3H1H0v1v5v1h1h2h1v-1h0h1v1h1 h2h1v-1v-5V4.5L9,4.5z'/%3e %3c/g%3e %3cg%3e %3cpolygon fill='%23FFFFFF' points='13,11 12.5,10.5 12.5,9 11.5,9 11.5,10.5 11,11 9,11 8.5,10.5 8.5,6.5 9,6 9.5,6 9.5,5.5 10,5 14,5 14.5,5.5 14.5,6 15,6 15.5,6.5 15.5,10.5 15,11 '/%3e %3cpath fill='%23579861' d='M14,5.5v1h1v4h-2v-2h-2v2H9v-4h1v-1H14 M11,7.5h2v-1h-2V7.5 M14,4.5h-4l-1,1l-1,1v4l1,1h2l1-1v-1h0v1l1,1h2 l1-1v-4l-1-1L14,4.5L14,4.5z'/%3e %3c/g%3e %3c/svg%3e"},5658:o=>{o.exports="data:image/svg+xml,%3c!-- Generated by IcoMoon.io --%3e %3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 512 512'%3e %3cpath d='M320 512v-256l96 96 96-96-256-256-256 256 96 96 96-96v256z' fill='%238BC34A' stroke='%23000000' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' stroke-opacity='0.75'%3e%3c/path%3e %3c/svg%3e"},24585:o=>{o.exports="data:image/svg+xml,%3c!-- Generated by IcoMoon.io --%3e %3csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 512 512'%3e %3cpath d='M320 512v-256l96 96 96-96-256-256-256 256 96 96 96-96v256z' fill='%239E9E9E' stroke='%23000000' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' stroke-opacity='0.75'%3e%3c/path%3e %3c/svg%3e"}}]);