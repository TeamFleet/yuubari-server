"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[755],{5090:(e,i,a)=>{a.d(i,{Z:()=>r});var t=a(10620);const r=e=>t.get.equipment(e)},61329:(e,i,a)=>{a.d(i,{Z:()=>t});const t=(e,i)=>{switch(e){case"ship":case"ships":return`/ships/${i}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${i}`;case"entity":case"entities":return`/entities/${i}`}}},98954:(e,i,a)=>{a.d(i,{Z:()=>n});var t=a(10620);const r=(e,i,a)=>{if("object"!=typeof t.db.cgmaps[e][i])return"";const[r,s]=`${a}`.split("-");return"string"!=typeof t.db.cgmaps[e][i][r]?"":`/pics/${t.db.cgmaps[e][i][r]}${s?`/m${s}`:""}`},s=(e,i,a,n)=>{const o=t.db.ships[1],d=t.db.entities[1];if("object"==typeof e){if(e.constructor===o.constructor)return s("ship",e.id,i);if(e.constructor===d.constructor)return s("entity",e.id,i)}if(void 0!==i&&void 0===a){const a=i.split("/");return a.length>1?s(e,a[0],a[1].split(".")[0]):""}switch(n=n?"?"+n:"",e){case"ship":case"ships":return r("ships",i,a);case"ship-extra":case"ships-extra":return r("shipsExtra",i,a);case"equipment":case"equipments":return r("equipments",i,a);case"entity":case"entities":return r("entities",i,a);case"enemy":case"enemies":return`enemies/${i}/${a}.png${n}`}},n=(e,i,a,t)=>s(e,i,a,t)},75117:(e,i,a)=>{a.d(i,{Z:()=>r});var t=a(10620);const r=e=>t.get.ship(e)},81648:(e,i,a)=>{a.d(i,{Z:()=>r});var t=a(76682);const r=e=>{(0,t.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},22372:(e,i,a)=>{a.d(i,{Z:()=>r});var t=a(75117);const r=(e=[])=>e.sort(((e,i)=>(0,t.Z)(e).series!==(0,t.Z)(i).series?1:0)).sort(((e,i)=>{if(e=(0,t.Z)(e),i=(0,t.Z)(i),e.remodel&&i.remodel){if(e.remodel.next===i.id)return-1;if(e.remodel.prev===i.id)return 1}return e.series===i.series?e.name.suffix-i.name.suffix:e.order-i.order}))},13619:(e,i,a)=>{a.d(i,{Z:()=>l});var t=a(19494),r=a(88767),s=a.n(r),n=a(26489),o=a(97118);const d=["ijn","km","rm","mn","rn","usn","vmf","sm","ran","rnln","rocn"],c=e=>d.indexOf(e),l=(0,n.Z)({styles:a(76369)})((0,t.memo)((({tag:e,component:i,element:a,className:t,shadow:r,navy:n,...d})=>{const l=e||i||a||"span";return(0,o.jsx)(l,{...d,className:s()({[t]:!0,"has-shadow":!!r}),"data-navy-id":c(n)})})))},12091:(e,i,a)=>{a.d(i,{Z:()=>h});var t=a(19494),r=a(88767),s=a.n(r),n=a(26489),o=a(61677),d=a(75117),c=a(5090),l=a(98954),m=a(61329),p=a(97118);const h=(0,n.Z)({styles:a(17852)})((0,t.memo)((({ship:e,equipment:i,entity:a,id:r,to:n,href:h,noLink:f=!1,className:b,badge:u,name:g,children:v,...k})=>{const y=n||h||void 0;let x="span";if(k.className=s()({[b]:!0,"mod-badge":!!u}),k.children=v,e||r){const i=(0,d.Z)(e||r);k.children=(0,p.jsxs)(t.Fragment,{children:[(0,p.jsx)("span",{className:"avatar",style:{backgroundImage:`url(${(0,l.Z)("ship",i.id,"0-2")})`}}),g||i._name,v]}),f||(x=o.Z,k.to=y||(0,m.Z)("ship",i.id))}else if(i){const e=(0,c.Z)(i);k.children=(0,p.jsxs)(t.Fragment,{children:[g||e._name,v]}),f||(x=o.Z,k.to=y||(0,m.Z)("equipment",e.id))}else if(a){const e=(0,c.Z)(a);k.children=(0,p.jsxs)(t.Fragment,{children:[g||e._name,v]}),f||(x=o.Z,k.to=y||(0,m.Z)("entity",e.id))}else y&&(x=o.Z,k.to=y);return(0,p.jsx)(x,{...k})})))},61677:(e,i,a)=>{a.d(i,{Z:()=>o});var t=a(19494),r=a(99245),s=a(81648),n=a(97118);const o=(0,t.memo)((({to:e,href:i,className:a,replace:t=!1,onClick:o,...d})=>{const c=e||i||"";return c.match(/^(https?:)?\/\//)?c.indexOf("://")<0?(0,n.jsx)("a",{className:a,href:c,...d}):(0,n.jsx)("a",{className:a,href:c,target:"_blank",rel:"noreferrer",...d}):(0,n.jsx)(r.rU,{className:a,to:c,onClick:t?function(e){if((0,s.Z)(c),e.preventDefault(),"function"==typeof o)return o(e)}:o,...d})}))},19640:(e,i,a)=>{a.d(i,{Z:()=>c});var t=a(19494),r=a(99245),s=a(26489),n=a(81648),o=a(97118);const d=(e,i)=>"string"==typeof e?(0,o.jsxs)("span",{className:"name",children:[e,void 0!==i&&(0,o.jsx)("small",{className:"name-extra",children:i})]}):(0,t.cloneElement)(e,{className:"name"}),c=(0,s.Z)({styles:a(16774)})((({pic:e,avatar:i,image:a,src:t,picture:s,img:c,name:l,title:m,text:p,nameExtra:h,alt:f,to:b,href:u,link:g,replace:v=!1,children:k,type:y,...x})=>{const w=e||i||a||t||s||c,Z=l||m||p||null,j=v?"a":r.rU,N=b||u||g;"a"===j?(x.href=N,x.onClick=e=>{e.preventDefault(),(0,n.Z)(N)}):x.to=N;const q={};return"ship"===y?(q.width="240",q.height="60"):"entity"===y&&(q.width="160",q.height="40"),(0,o.jsxs)(j,{...x,children:[w&&(0,o.jsx)("img",{className:"pic","data-src":void 0,src:w,loading:"lazy",alt:f,...q}),Z&&d(Z,h),k]})}))},94465:(e,i,a)=>{a.d(i,{Z:()=>u});var t=a(19494),r=a(26489),s=a(10620),n=a(75117),o=a(98954),d=a(53027),c=a(13619),l=a(19640);const m=a.p+"includes/asset.521b4c35f1e361247b54.png",p="d56d32f0",h={wrapper:p,css:'.d56d32f0{border-radius:.25rem;padding-left:4.35rem}.d56d32f0 .icon-has-extra-illust{fill:#fff;height:1rem;left:3.5rem;margin-top:-.5rem;position:absolute;top:50%;-webkit-transform:rotate(15deg);transform:rotate(15deg);width:1rem;z-index:10}.d56d32f0 .flag-navy{left:3.25rem;margin-top:-1.2rem;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(10deg);transform:rotate(10deg);z-index:1}.d56d32f0:focus:not(:active){box-shadow:inset 0 0 .2rem .05rem rgba(64,196,255,.75);outline:0;transition-duration:50ms}.d56d32f0 .flag-navy~.d56d32f0-icons-special-equip>span+span+span{bottom:0;right:1.8rem}.d56d32f0-min-level{background:rgba(38,48,53,.85);border:.05rem solid #ffe57f;border-radius:.15rem;bottom:.05rem;box-shadow:0 0 .05rem .05rem rgba(0,0,0,.35);color:#ffe57f;font-size:.6rem;height:1.1rem;left:3.2rem;line-height:.6rem;overflow:hidden;padding-top:.4rem;width:1rem;z-index:5}.d56d32f0-min-level,.d56d32f0-min-level:before{display:block;position:absolute;text-align:center}.d56d32f0-min-level:before{color:#000;content:"Lv";font-weight:600;left:-.1rem;line-height:1em;right:-.1rem;top:-.05rem;-webkit-transform:scaleY(.66666667);transform:scaleY(.66666667);-webkit-transform-origin:50% 0;transform-origin:50% 0;z-index:2}.d56d32f0-min-level:after{background:#ffe57f;content:"";display:block;height:.4rem;left:0;position:absolute;right:0;top:-.05rem;z-index:1}.d56d32f0-icons-special-equip{bottom:0;display:block;left:0;position:absolute;width:4.4rem}.d56d32f0-icons-special-equip>span{background:url("'+m+'") no-repeat 50% 0;background-size:100% auto;bottom:0;height:.6rem;position:absolute;right:0;width:1.65rem}.d56d32f0-icons-special-equip>span[data-type=landing-craft]{background-position:50% -1.875rem}.d56d32f0-icons-special-equip>span[data-type=amphibious-craft]{background-position:50% 50%}.d56d32f0-icons-special-equip>span[data-type=seaplane-fighter]{background-position:50% -.15rem;-webkit-transform:translateX(.15rem);transform:translateX(.15rem)}.d56d32f0-icons-special-equip>span[data-type=seaplane-fighter]:first-child{margin-bottom:.1rem}.d56d32f0-icons-special-equip>span+span{bottom:.6rem}.d56d32f0-icons-special-equip>span+span+span{bottom:1.2rem}'};var f,b=a(97118);const u=(0,r.Z)({styles:h})(f=class extends t.Component{constructor(e){super(e),this.onClick=this.onClick.bind(this)}onClick(e){if(e.currentTarget.blur(),"function"==typeof this.props.onClick)return this.props.onClick(e)}checkShow(e){return e||void 0===e}renderName(e=this.props.type){if("names"===e){const e=[];return this.ship._series.forEach((i=>{const a=(0,n.Z)(i.id).getNameNoSuffix();e.includes(a)||e.push(a)})),(0,b.jsx)("span",{children:e.join(" / ")})}if(e){const e=this.ship.type&&this.ship.type_display&&this.ship.type!==this.ship.type_display?this.ship.type_display:this.ship.type;return(0,b.jsxs)("span",{children:[(0,b.jsx)("small",{className:"name-type",children:s.db.shipTypes[e]._name}),this.ship._name]})}return(0,b.jsxs)("span",{children:[this.ship.getNameNoSuffix(),this.ship.name.suffix&&(0,b.jsx)("small",{className:"name-suffix",children:this.ship.getSuffix()})]})}render(){const{className:e,ship:i,type:a,extraIllust:t,pic:r,name:s,navy:m,showSpecialEquip:h=!1,"min-level":f=!1,onClick:u,children:g,...v}=this.props;this.ship=(0,n.Z)(i);const k=e.split(" ")[0];return(0,b.jsxs)(l.Z,{to:"/ships/"+this.ship.id,className:e,pic:this.checkShow(r)?(0,o.Z)(this.ship,"0-2"):null,name:this.checkShow(s)?this.renderName(a):null,onClick:this.onClick,alt:this.ship._name,type:"ship",...v,children:[t&&this.ship.hasExtraIllust()&&(0,b.jsx)(d.Z,{className:"icon-has-extra-illust",icon:"hanger"}),this.checkShow(m)&&"ijn"!==this.ship._navy&&(0,b.jsx)(c.Z,{className:"flag-navy",navy:this.ship._navy,shadow:!0}),f&&i._minLv>1&&(0,b.jsx)("span",{className:k+"-min-level",children:i._minLv}),h&&(0,b.jsxs)("span",{className:`${p}-icons-special-equip`,children:[this.ship.canEquip("LandingCraft")&&(0,b.jsx)("span",{"data-type":"landing-craft"}),this.ship.canEquip("AmphibiousCraft")&&(0,b.jsx)("span",{"data-type":"amphibious-craft"}),this.ship.canEquip("SeaplaneFighter")&&(0,b.jsx)("span",{"data-type":"seaplane-fighter"})]}),g]})}})||f},68253:(e,i,a)=>{a.d(i,{Z:()=>h});var t=a(19494),r=a(88767),s=a.n(r),n=a(26489),o=a(75117),d=a(22372),c=a(15147),l=a(94465),m=a(12091),p=a(97118);const h=(0,n.Z)({styles:a(2872)})((0,t.memo)((({className:e,classNameItem:i,list:a,array:t,ships:r,empty:n,grid:h=!0,size:f,gutter:b,type:u,sort:g=!0,children:v,...k})=>{const y=a||t||r||[],x=!(!Array.isArray(y)||!y.length),w=!!x&&(g?(0,d.Z)(y.map((e=>(0,o.Z)(e)))):y.map((e=>(0,o.Z)(e))));return(0,p.jsxs)(c.Z,{className:s()({[e]:!0,"no-grid":!h}),grid:h,gutter:b,children:[x&&w.map((e=>"mini"===f?(0,p.jsx)(m.Z,{ship:e,className:s()([i,"item"]),...k},e.id):(0,p.jsx)(l.Z,{ship:e,className:s()([i,"item"]),type:void 0===u||u,...k},e.id))),!x&&!!n&&(0,p.jsx)("span",{className:"list-empty",children:n}),v]})})))},15147:(e,i,a)=>{a.d(i,{Z:()=>o});var t=a(88767),r=a.n(t),s=a(26489),n=a(97118);const o=(0,s.Z)({styles:a(27018)})((({className:e,grid:i=!0,children:a,...t})=>(0,n.jsx)("div",{className:r()({[e]:!0,"mod-grid":!!i}),...t,children:a})))},76369:(e,i,a)=>{a.r(i),a.d(i,{css:()=>f,default:()=>b,wrapper:()=>h});const t=a.p+"includes/asset.dfafb5f399d9e3fee34e.png",r=a.p+"includes/asset.da050f237addbe06958b.png",s=a.p+"includes/asset.7ff0176338008e2c787b.png",n=a.p+"includes/asset.aec4f5805660dd90aa3f.png",o=a.p+"includes/asset.ca8f2ad2969ebfbccf4b.png",d=a.p+"includes/asset.500bda2b7fd212af72d1.png",c=a.p+"includes/asset.dcafe7befd41627df6e4.png",l=a.p+"includes/asset.625cf506b8f8bb89f124.png",m=a.p+"includes/asset.f65834a51df5f42dd2e7.png",p=a.p+"includes/asset.4aae2185e30c3435de90.png",h="bba92338",f='.bba92338{background:url("'+t+'") no-repeat 50% 1rem/cover;display:inline-block;height:1rem;transition-property:none;width:1rem}.bba92338[data-navy-id="0"]{background-position:50% 0}.bba92338[data-navy-id="1"]{background-position:50% 10%}.bba92338[data-navy-id="2"]{background-position:50% 20%}.bba92338[data-navy-id="3"]{background-position:50% 30%}.bba92338[data-navy-id="4"]{background-position:50% 40%}.bba92338[data-navy-id="5"]{background-position:50% 50%}.bba92338[data-navy-id="6"]{background-position:50% 60%}.bba92338[data-navy-id="7"]{background-position:50% 70%}.bba92338[data-navy-id="8"]{background-position:50% 80%}.bba92338[data-navy-id="9"]{background-position:50% 90%}.bba92338[data-navy-id="10"]{background-position:50% 100%}.bba92338[data-navy-id="11"]{background-position:50% 110%}@media (-webkit-min-device-pixel-ratio:1.25),(min-resolution:120dpi){.bba92338{background-image:url("'+r+'")}}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:144dpi){.bba92338{background-image:url("'+s+'")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.bba92338{background-image:url("'+n+'")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.bba92338{background-image:url("'+o+'")}}.bba92338.has-shadow{background-image:url("'+d+'");width:1.05rem}@media (-webkit-min-device-pixel-ratio:1.25),(min-resolution:120dpi){.bba92338.has-shadow{background-image:url("'+c+'")}}@media (-webkit-min-device-pixel-ratio:1.5),(min-resolution:144dpi){.bba92338.has-shadow{background-image:url("'+l+'")}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.bba92338.has-shadow{background-image:url("'+m+'")}}@media (-webkit-min-device-pixel-ratio:3),(min-resolution:288dpi){.bba92338.has-shadow{background-image:url("'+p+'")}}',b={wrapper:h,css:f}},17852:(e,i,a)=>{a.r(i),a.d(i,{css:()=>r,default:()=>s,wrapper:()=>t});const t="d80d8ae1",r=".d80d8ae1{border:.05rem solid transparent;border-radius:.15rem;border-radius:.55rem;color:rgba(157,180,191,.9);display:inline-block;font-size:.7rem;line-height:1rem;padding:0 .4rem;position:relative;vertical-align:initial}.d80d8ae1 .avatar{background-position:60% 0;background-size:cover;border-radius:.55rem;display:block;float:left;height:1.1rem;margin:-.05rem .25rem -.05rem -.45rem;overflow:hidden;width:1.6rem;z-index:-1}.d80d8ae1.link,a.d80d8ae1{color:#e6e6e6}html.is-hover .d80d8ae1.link:hover,html.is-hover a.d80d8ae1:hover{background:rgba(0,0,0,.15);color:#40c4ff}.d80d8ae1.link:active,a.d80d8ae1:active,html.is-hover .d80d8ae1.link:hover:active,html.is-hover a.d80d8ae1:hover:active{background:rgba(0,0,0,.15);color:hsla(0,0%,100%,.5)}.d80d8ae1.mod-inline{color:inherit;font-size:unset;padding-left:1.7rem;padding-right:0}.d80d8ae1.mod-inline:active,html.is-hover .d80d8ae1.mod-inline:hover,html.is-hover .d80d8ae1.mod-inline:hover:active{background-color:initial;border-color:transparent}.d80d8ae1.mod-inline .avatar{left:0;margin:-.55rem auto 0 0;position:absolute;top:50%}a.d80d8ae1.mod-inline{color:#40c4ff}html.is-hover a.d80d8ae1.mod-inline:hover{color:#fff}a.d80d8ae1.mod-inline:active,html.is-hover a.d80d8ae1.mod-inline:hover:active{color:hsla(0,0%,100%,.5)}html.is-webapp a.d80d8ae1.mod-inline{cursor:pointer}.d80d8ae1.mod-badge{background-color:#0277bd;border-color:#0277bd;color:#cdefff}html.is-hover .d80d8ae1.mod-badge.link:hover,html.is-hover a.d80d8ae1.mod-badge:hover{background-color:#039be5;border-color:#039be5;color:#fff}.d80d8ae1.mod-badge.link:active,a.d80d8ae1.mod-badge:active,html.is-hover .d80d8ae1.mod-badge.link:hover:active,html.is-hover a.d80d8ae1.mod-badge:hover:active{background-color:#01579b;border-color:#0277bd;color:#cdefff}",s={wrapper:t,css:r}},16774:(e,i,a)=>{a.r(i),a.d(i,{css:()=>r,default:()=>s,wrapper:()=>t});const t="e415e509",r='.e415e509{color:#fff;height:2rem;min-width:9rem;position:relative}.e415e509,.e415e509:before{display:inline-block;vertical-align:middle}.e415e509:before{content:"";height:100%;overflow:hidden;width:0}.e415e509:after{border-radius:0 .25rem .25rem 0;bottom:0;content:"";left:1rem;position:absolute;right:0;top:0;z-index:-10}.e415e509 .pic{background:no-repeat -2.5rem 0/contain;display:block;height:100%;left:-.25rem;pointer-events:none;position:absolute;right:0;top:0;z-index:0}.e415e509 img.pic{background:none;height:2rem;left:-2.75rem;object-fit:contain;right:auto;width:8rem}.e415e509 .name{display:inline-block;line-height:.9em;position:relative;vertical-align:middle;z-index:2}.e415e509 .name-suffix,.e415e509 .name-type{display:block;font-size:.75em;font-weight:400;line-height:1.05em;transition:inherit}.e415e509 .name-type{margin-bottom:.15em}.e415e509 .name-suffix{color:rgba(157,180,191,.9);margin-left:.2rem;margin-top:.15em}.e415e509 .name-extra{display:inline-block;margin-left:.25rem}html.is-hover .e415e509:hover{color:#40c4ff}html.is-hover .e415e509:hover:after{background:rgba(0,0,0,.15)}html.is-hover .e415e509:hover .name-suffix{color:#03a9f4}.e415e509:active,html.is-hover .e415e509:hover:active{color:hsla(0,0%,100%,.5)}.e415e509:active:after,html.is-hover .e415e509:hover:active:after{background:rgba(0,0,0,.15)}.e415e509:active,.e415e509:active .name-suffix,html.is-hover .e415e509:hover:active .name-suffix{color:hsla(0,0%,100%,.5)}.e415e509:active:after{background:rgba(0,0,0,.15)}.e415e509:active .name-suffix{color:hsla(0,0%,100%,.5)}[data-locale=en] .e415e509 .name{font-size:.7rem}',s={wrapper:t,css:r}},2872:(e,i,a)=>{a.r(i),a.d(i,{css:()=>r,default:()=>s,wrapper:()=>t});const t="ccd6d1d7",r=".ccd6d1d7.no-grid{margin-top:-.25rem}.ccd6d1d7.no-grid .item{margin-top:.25rem}",s={wrapper:t,css:r}},27018:(e,i,a)=>{a.r(i),a.d(i,{css:()=>r,default:()=>s,wrapper:()=>t});const t="eec410ce",r=".eec410ce{clear:both;margin-right:-.5rem;margin-top:-.5rem}.eec410ce .item{margin:.5rem .5rem 0 0}.eec410ce .item.placeholder{height:0;margin-top:auto}.eec410ce .list-empty{color:rgba(185,205,214,.55);margin-top:.5rem}.eec410ce.mod-grid{grid-gap:.5rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(9rem,1fr));margin-right:auto;margin-top:.5rem}.eec410ce.mod-grid .item{margin-right:0;margin-top:0}",s={wrapper:t,css:r}}}]);