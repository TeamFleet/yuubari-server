(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[66],{9596:e=>{e.exports=(e={},i=!1)=>{let a=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&a.push({charset:r.charset}),void 0!==r.title&&(a.push({itemprop:"name",content:r.title}),a.push({name:"twitter:title",content:r.title}),a.push({name:"og:title",content:r.title})),void 0!==r.description&&(a.push({name:"description",content:r.description}),a.push({itemprop:"description",content:r.description}),a.push({itemprop:"twitter:description",content:r.description}),a.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(a.push({name:"image",content:r.image}),a.push({itemprop:"image",content:r.image}),a.push({itemprop:"twitter:image:src",content:r.image}),a.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(a.push({name:"twitter:player",content:r.video}),a.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&a.push({name:"og:url",content:r.url}),void 0!==r.siteName&&a.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&a.push({name:"og:locale",content:r.locale}),void 0!==r.type&&a.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&a.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&a.push({name:"twitter:site",content:t(r.twitter.siteCreator)}),void 0!==r.twitter.author&&a.push({name:"twitter:creator",content:t(r.twitter.author)}),void 0!==r.facebook.adminsId&&a.push({name:"fb:admins",content:t(r.facebook.adminsId)}),void 0!==r.facebook.appId&&a.push({name:"fb:app_id",content:t(r.facebook.appId)}),void 0!==r.returnArray&&(i=r.returnArray),i?a:a.map((e=>{let t="<meta";for(let i in e)t+=` ${i}="${e[i]}"`;return t+="/>",t})).join("")};const t=e=>("string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e)},5090:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(10620);const r=e=>a.get.equipment(e)},61329:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});const a=(e,t)=>{switch(e){case"ship":case"ships":return`/ships/${t}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${t}`;case"entity":case"entities":return`/entities/${t}`}}},98954:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(10620);const r=(e,t,i)=>{if("object"!=typeof a.db.cgmaps[e][t])return"";const[r,o]=`${i}`.split("-");return"string"!=typeof a.db.cgmaps[e][t][r]?"":`/pics/${a.db.cgmaps[e][t][r]}${o?`/m${o}`:""}`},o=(e,t,i,n)=>{const s=a.db.ships[1],c=a.db.entities[1];if("object"==typeof e){if(e.constructor===s.constructor)return o("ship",e.id,t);if(e.constructor===c.constructor)return o("entity",e.id,t)}if(void 0!==t&&void 0===i){const i=t.split("/");return i.length>1?o(e,i[0],i[1].split(".")[0]):""}switch(n=n?"?"+n:"",e){case"ship":case"ships":return r("ships",t,i);case"ship-extra":case"ships-extra":return r("shipsExtra",t,i);case"equipment":case"equipments":return r("equipments",t,i);case"entity":case"entities":return r("entities",t,i);case"enemy":case"enemies":return`enemies/${t}/${i}.png${n}`}},n=(e,t,i,a)=>o(e,t,i,a)},75117:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(10620);const r=e=>a.get.ship(e)},9459:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var a=i(9596),r=i.n(a),o=i(76682),n=i(15895);const s=e=>t=>{t(function(e){return{type:n.VK,title:e}}(e))},c={uri:"","twitter:card":"summary_large_image"},l=(e,t)=>{if("object"==typeof e&&void 0===t)return l((0,o.getStore)().getState(),e);if("object"!=typeof e)return{};const i=e.localeId,a="Who Calls the Fleet";let n=e.server.origin,{uri:d=("undefined"!=typeof location?location.pathname:void 0),title:p=a,description:h=""}={...c,...t};const{subtitle:m,image:u}=t;if("object"==typeof d&&(d=d.pathname),"/"===d.substr(0,1)&&(d=d.substr(1)),p){Array.isArray(p)&&(p=p.filter((e=>void 0!==e&&""!==e)));const e=Array.isArray(p)&&p.length?p[0]:p;p=Array.isArray(p)?p.join(" / "):p,void 0!==m?(0,o.getStore)().dispatch(s({main:e,sub:m})):(0,o.getStore)().dispatch(s(e)),p!==a&&(p=p.replace(/\n/g,"")+" - "+a)}return h&&(h=h.replace(/\n/g,"")+" | "),h+="A KanColle Toolkit","/"!==n.substr(n.length-1,1)&&(n+="/"),{title:p,metas:r()({title:p,description:h,image:u||n+"launcher.jpg",url:n+d,type:"website",locale:i,siteName:a,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},d=l},81648:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var a=i(76682);const r=e=>{(0,a.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},12091:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var a=i(19494),r=i(88767),o=i.n(r),n=i(26489),s=i(61677),c=i(75117),l=i(5090),d=i(98954),p=i(61329),h=i(97118);const m=(0,n.Z)({styles:i(10993)})((0,a.memo)((({ship:e,equipment:t,entity:i,id:r,to:n,href:m,noLink:u=!1,className:b,badge:f,name:g,children:v,...x})=>{const k=n||m||void 0;let y="span";if(x.className=o()({[b]:!0,"mod-badge":!!f}),x.children=v,e||r){const t=(0,c.Z)(e||r);x.children=(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("span",{className:"avatar",style:{backgroundImage:`url(${(0,d.Z)("ship",t.id,"0-2")})`}}),g||t._name,v]}),u||(y=s.Z,x.to=k||(0,p.Z)("ship",t.id))}else if(t){const e=(0,l.Z)(t);x.children=(0,h.jsxs)(a.Fragment,{children:[g||e._name,v]}),u||(y=s.Z,x.to=k||(0,p.Z)("equipment",e.id))}else if(i){const e=(0,l.Z)(i);x.children=(0,h.jsxs)(a.Fragment,{children:[g||e._name,v]}),u||(y=s.Z,x.to=k||(0,p.Z)("entity",e.id))}else k&&(y=s.Z,x.to=k);return(0,h.jsx)(y,{...x})})))},61677:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var a=i(19494),r=i(99245),o=i(81648),n=i(97118);const s=(0,a.memo)((({to:e,href:t,className:i,replace:a=!1,onClick:s,...c})=>{const l=e||t||"";return l.match(/^(https?:)?\/\//)?l.indexOf("://")<0?(0,n.jsx)("a",{className:i,href:l,...c}):(0,n.jsx)("a",{className:i,href:l,target:"_blank",rel:"noreferrer",...c}):(0,n.jsx)(r.rU,{className:i,to:l,onClick:a?function(e){if((0,o.Z)(l),e.preventDefault(),"function"==typeof s)return s(e)}:s,...c})}))},13545:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var a=i(19494),r=i(88767),o=i.n(r),n=i(26489),s=i(97118);const c=(0,n.Z)({styles:i(52666)})((0,a.memo)((({className:e,classNameInner:t,component:i,tag:a,tagname:r,element:n,level:c,children:l,title:d,type:p,inherit:h,...m})=>{const u=i||a||r||n||(void 0===c?void 0:`h${c}`)||"div",b=e.split(" ")[0];m.children=l;const f=Array.isArray(l)?l[0]:l;switch("string"==typeof d?m["data-text"]=d:"string"==typeof f?m["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(m["data-text"]=f.props.value),h&&(m["data-title-is-inherit"]=""),p){case"line-append":return(0,s.jsx)("div",{className:e,"data-title-type":p,"data-title-tag":u,children:(0,s.jsx)(u,{className:o()([b+"-child",t]),...m})});default:return(0,s.jsx)(u,{"data-title-type":p,className:e,...m})}})))},89750:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var a=i(26489),r=i(97118);const o=(0,a.Z)({styles:i(98118)})((({className:e,children:t})=>(0,r.jsx)("div",{className:e,children:t})))},26674:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var a,r=i(19494),o=i(26489),n=i(97118);const s={},c=(0,o.Z)({connect:e=>({locationBeforeTransitions:e.routing.locationBeforeTransitions})})(a=class extends r.Component{constructor(...e){var t;super(...e),(t="updating")in this?Object.defineProperty(this,t,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[t]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(e){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof e.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...e}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((t=>delete e[t])),(0,n.jsx)("div",{...e})}})||a},51607:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});var a=i(26489);const r=JSON.parse('{"i8":"20221208.2.0"}'),o={i8:"1.82.2"};var n=i(61968),s=i(9459),c=i(26674),l=i(89750),d=i(47678),p=i(13545);const h={wrapper:"e7e72bc1",css:'.e7e72bc1 hr{background:rgba(237,240,242,.15);border:0;height:.1rem;z-index:-2}.e7e72bc1-title{padding:1em 0;position:relative}.e7e72bc1-title .title{background:linear-gradient(180deg,#ffcc80 0,#ffd180 14%,#fff 40%,#ffab40 62%,#ffd180 77%,#ffcc80);font-size:2.5rem;margin-bottom:0}.e7e72bc1-title .sub-title{-webkit-text-fill-color:unset;background:none;-webkit-background-clip:unset!important;color:#ffe0b2;margin-top:.5em}.e7e72bc1-title .sub-title[data-text]:before{content:unset}.e7e72bc1-title:after{background:url("'+(i.p+"includes/asset.23694e13efe902e636cb.png")+'") no-repeat 100% 0;background-size:contain;bottom:-2em;content:"";position:absolute;right:-1em;top:-2em;width:100%;z-index:-1}.e7e72bc1-article,.e7e72bc1-footer{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap}@media (max-width:660px){.e7e72bc1-article,.e7e72bc1-footer{display:block}}.e7e72bc1-block{-webkit-flex:1;flex:1}@media (max-width:660px){.e7e72bc1-block{line-height:2em;margin-bottom:3em}}.e7e72bc1-article>.main{-webkit-flex:2;flex:2}@media (max-width:660px){.e7e72bc1-article+hr{display:none}}.e7e72bc1-article .list{color:rgba(157,180,191,.9);list-style:none;padding-left:0}.e7e72bc1-article .list a{font-style:italic}.e7e72bc1-article .list span{display:inline-block;margin-left:.5em}'};var m=i(97118);const u=(0,a.Z)({pageinfo:e=>(0,s.Z)(e),styles:h})((({className:e})=>(0,m.jsx)(c.Z,{className:e,children:(0,m.jsxs)(l.Z,{children:[(0,m.jsxs)("div",{className:"e7e72bc1-title",children:[(0,m.jsx)(p.Z,{level:"1",className:"title",children:"Who Calls the Fleet"}),(0,m.jsx)(p.Z,{level:"3",className:"sub-title",children:"A KanColle Toolkit"})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("article",{className:"e7e72bc1-article",children:[(0,m.jsxs)("div",{className:"e7e72bc1-block main",children:[(0,m.jsx)(p.Z,{level:"2",children:"Latest Update"}),(0,m.jsx)(d.Z,{className:"content",source:"_under_construction_"})]}),(0,m.jsxs)("div",{className:"e7e72bc1-block",children:[(0,m.jsx)(p.Z,{level:"3",children:"Versions"}),(0,m.jsx)("ul",{className:"list",children:[["Database","https://github.com/TeamFleet/WhoCallsTheFleet-DB",r.i8],["KCKit","https://github.com/TeamFleet/KCKit",o.i8],["Koot.js","https://koot.js.org/",n.i8]].map((([e,t,i])=>(0,m.jsxs)("li",{children:[(0,m.jsx)("a",{className:"color-alt",href:t,target:"_blank",rel:"noopener noreferrer",children:e}),(0,m.jsx)("span",{children:i})]},e)))})]})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("footer",{className:"e7e72bc1-footer",children:[(0,m.jsx)("div",{className:"e7e72bc1-block",children:(0,m.jsx)(p.Z,{level:"3",children:"Support"})}),(0,m.jsx)("div",{className:"e7e72bc1-block",children:(0,m.jsx)(p.Z,{level:"3",children:"Contact"})}),(0,m.jsx)("div",{className:"e7e72bc1-block",children:(0,m.jsx)(p.Z,{level:"3",children:"Donate"})})]})]})})))},10993:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>o,wrapper:()=>a});const a="d80d8ae1",r=".d80d8ae1{border:.05rem solid transparent;border-radius:.15rem;border-radius:.55rem;color:rgba(157,180,191,.9);display:inline-block;font-size:.7rem;line-height:1rem;padding:0 .4rem;position:relative;vertical-align:initial}.d80d8ae1 .avatar{background-position:60% 0;background-size:cover;border-radius:.55rem;display:block;float:left;height:1.1rem;margin:-.05rem .25rem -.05rem -.45rem;overflow:hidden;width:1.6rem;z-index:-1}.d80d8ae1.link,a.d80d8ae1{color:#e6e6e6}html.is-hover .d80d8ae1.link:hover,html.is-hover a.d80d8ae1:hover{background:rgba(0,0,0,.15);color:#40c4ff}.d80d8ae1.link:active,a.d80d8ae1:active,html.is-hover .d80d8ae1.link:hover:active,html.is-hover a.d80d8ae1:hover:active{background:rgba(0,0,0,.15);color:hsla(0,0%,100%,.5)}.d80d8ae1.mod-inline{color:inherit;font-size:unset;padding-left:1.7rem;padding-right:0}.d80d8ae1.mod-inline:active,html.is-hover .d80d8ae1.mod-inline:hover,html.is-hover .d80d8ae1.mod-inline:hover:active{background-color:initial;border-color:transparent}.d80d8ae1.mod-inline .avatar{left:0;margin:-.55rem auto 0 0;position:absolute;top:50%}a.d80d8ae1.mod-inline{color:#40c4ff}html.is-hover a.d80d8ae1.mod-inline:hover{color:#fff}a.d80d8ae1.mod-inline:active,html.is-hover a.d80d8ae1.mod-inline:hover:active{color:hsla(0,0%,100%,.5)}html.is-webapp a.d80d8ae1.mod-inline{cursor:pointer}.d80d8ae1.mod-badge{background-color:#0277bd;border-color:#0277bd;color:#cdefff}html.is-hover .d80d8ae1.mod-badge.link:hover,html.is-hover a.d80d8ae1.mod-badge:hover{background-color:#039be5;border-color:#039be5;color:#fff}.d80d8ae1.mod-badge.link:active,a.d80d8ae1.mod-badge:active,html.is-hover .d80d8ae1.mod-badge.link:hover:active,html.is-hover a.d80d8ae1.mod-badge:hover:active{background-color:#01579b;border-color:#0277bd;color:#cdefff}",o={wrapper:a,css:r}},52666:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>o,wrapper:()=>a});const a="a4aa4012",r='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',o={wrapper:a,css:r}},98118:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>r,default:()=>o,wrapper:()=>a});const a="f4f0218c",r=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",o={wrapper:a,css:r}},61968:e=>{"use strict";e.exports={i8:"0.15.13"}}}]);