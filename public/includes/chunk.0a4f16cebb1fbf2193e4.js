(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[371],{9596:e=>{e.exports=(e={},i=!1)=>{const r=[],a=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===a.title&&document.title&&(a.title=document.title),void 0===a.url&&void 0!==window.location&&"about"!==window.location.href.substr(0,5)&&(a.url=window.location.href)),void 0!==a.charset&&r.push({charset:a.charset}),void 0!==a.title&&(r.push({itemprop:"name",content:a.title}),r.push({name:"twitter:title",content:a.title}),r.push({property:"og:title",content:a.title})),void 0!==a.description&&(r.push({name:"description",content:a.description}),r.push({itemprop:"description",content:a.description}),r.push({name:"twitter:description",content:a.description}),r.push({property:"og:description",content:a.description})),void 0!==a.image&&(r.push({name:"image",content:a.image}),r.push({itemprop:"image",content:a.image}),r.push({name:"twitter:image:src",content:a.image}),r.push({property:"og:image",content:a.image})),void 0!==a.video&&(r.push({name:"twitter:player",content:a.video}),r.push({property:"og:video",content:a.video})),void 0!==a.url&&r.push({property:"og:url",content:a.url}),void 0!==a.siteName&&r.push({property:"og:site_name",content:a.siteName}),void 0!==a.locale&&r.push({property:"og:locale",content:a.locale}),void 0!==a.type&&r.push({property:"og:type",content:a.type}),void 0!==a.twitter.card&&r.push({name:"twitter:card",content:a.twitter.card}),void 0!==a.twitter.siteCreator&&r.push({name:"twitter:site",content:t(a.twitter.siteCreator)}),void 0!==a.twitter.author&&r.push({name:"twitter:creator",content:t(a.twitter.author)}),void 0!==a.facebook.adminsId&&r.push({name:"fb:admins",content:t(a.facebook.adminsId)}),void 0!==a.facebook.appId&&r.push({name:"fb:app_id",content:t(a.facebook.appId)}),void 0!==a.returnArray&&(i=a.returnArray),i?r:r.map((e=>{let t="<meta";for(const i in e)t+=` ${i}="${e[i]}"`;return t+="/>",t})).join("")};const t=e=>("string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e)},5090:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(10620);const a=e=>r.get.equipment(e)},61329:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});const r=(e,t)=>{switch(e){case"ship":case"ships":return`/ships/${t}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${t}`;case"entity":case"entities":return`/entities/${t}`}}},98954:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var r=i(10620);const a=(e,t,i)=>{if("object"!=typeof r.db.cgmaps[e][t])return"";const[a,o]=`${i}`.split("-");return"string"!=typeof r.db.cgmaps[e][t][a]?"":`/pics/${r.db.cgmaps[e][t][a]}${o?`/m${o}`:""}`},o=(e,t,i,n)=>{const s=r.db.ships[1],l=r.db.entities[1];if("object"==typeof e){if(e.constructor===s.constructor)return o("ship",e.id,t);if(e.constructor===l.constructor)return o("entity",e.id,t)}if(void 0!==t&&void 0===i){const i=t.split("/");return i.length>1?o(e,i[0],i[1].split(".")[0]):""}switch(n=n?"?"+n:"",e){case"ship":case"ships":return a("ships",t,i);case"ship-extra":case"ships-extra":return a("shipsExtra",t,i);case"equipment":case"equipments":return a("equipments",t,i);case"entity":case"entities":return a("entities",t,i);case"enemy":case"enemies":return`enemies/${t}/${i}.png${n}`}},n=(e,t,i,r)=>o(e,t,i,r)},75117:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(10620);const a=e=>r.get.ship(e)},9459:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(9596),a=i.n(r),o=i(76682),n=i(15895);const s=e=>t=>{t(function(e){return{type:n.VK,title:e}}(e))},l={uri:"","twitter:card":"summary_large_image"},c=(e,t)=>{if("object"==typeof e&&void 0===t)return c((0,o.getStore)().getState(),e);if("object"!=typeof e)return{};const i=e.localeId,r="Who Calls the Fleet";let n=e.server.origin,{uri:d=("undefined"!=typeof location?location.pathname:void 0),title:p=r,description:h=""}={...l,...t};const{subtitle:m,image:u}=t;if("object"==typeof d&&(d=d.pathname),"/"===d.substr(0,1)&&(d=d.substr(1)),p){Array.isArray(p)&&(p=p.filter((e=>void 0!==e&&""!==e)));const e=Array.isArray(p)&&p.length?p[0]:p;p=Array.isArray(p)?p.join(" / "):p,void 0!==m?(0,o.getStore)().dispatch(s({main:e,sub:m})):(0,o.getStore)().dispatch(s(e)),p!==r&&(p=p.replace(/\n/g,"")+" - "+r)}return h&&(h=h.replace(/\n/g,"")+" | "),h+="A KanColle Toolkit","/"!==n.substr(n.length-1,1)&&(n+="/"),{title:p,metas:a()({title:p,description:h,image:u||n+"launcher.jpg",url:n+d,type:"website",locale:i,siteName:r,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},d=c},81648:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(76682);const a=e=>{(0,r.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},12091:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var r=i(19494),a=i(14003),o=i.n(a),n=i(26489),s=i(61677),l=i(75117),c=i(5090),d=i(98954),p=i(61329),h=i(97118);const m=(0,n.Z)({styles:i(10993)})((0,r.memo)((({ship:e,equipment:t,entity:i,id:a,to:n,href:m,noLink:u=!1,className:b,badge:f,name:g,children:v,...y})=>{const x=n||m||void 0;let k="span";if(y.className=o()({[b]:!0,"mod-badge":!!f}),y.children=v,e||a){const t=(0,l.Z)(e||a);y.children=(0,h.jsxs)(r.Fragment,{children:[(0,h.jsx)("span",{className:"avatar",style:{backgroundImage:`url(${(0,d.Z)("ship",t.id,"0-2")})`}}),g||t._name,v]}),u||(k=s.Z,y.to=x||(0,p.Z)("ship",t.id))}else if(t){const e=(0,c.Z)(t);y.children=(0,h.jsxs)(r.Fragment,{children:[g||e._name,v]}),u||(k=s.Z,y.to=x||(0,p.Z)("equipment",e.id))}else if(i){const e=(0,c.Z)(i);y.children=(0,h.jsxs)(r.Fragment,{children:[g||e._name,v]}),u||(k=s.Z,y.to=x||(0,p.Z)("entity",e.id))}else x&&(k=s.Z,y.to=x);return(0,h.jsx)(k,{...y})})))},61677:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(19494),a=i(99245),o=i(81648),n=i(97118);const s=(0,r.memo)((({to:e,href:t,className:i,replace:r=!1,onClick:s,...l})=>{const c=e||t||"";return c.match(/^(https?:)?\/\//)?c.indexOf("://")<0?(0,n.jsx)("a",{className:i,href:c,...l}):(0,n.jsx)("a",{className:i,href:c,target:"_blank",rel:"noreferrer",...l}):(0,n.jsx)(a.rU,{className:i,to:c,onClick:r?function(e){if((0,o.Z)(c),e.preventDefault(),"function"==typeof s)return s(e)}:s,...l})}))},13545:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(19494),a=i(14003),o=i.n(a),n=i(26489),s=i(97118);const l=(0,n.Z)({styles:i(52666)})((0,r.memo)((({className:e,classNameInner:t,component:i,tag:r,tagname:a,element:n,level:l,children:c,title:d,type:p,inherit:h,...m})=>{const u=i||r||a||n||(void 0===l?void 0:`h${l}`)||"div",b=e.split(" ")[0];m.children=c;const f=Array.isArray(c)?c[0]:c;return"string"==typeof d?m["data-text"]=d:"string"==typeof f?m["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(m["data-text"]=f.props.value),h&&(m["data-title-is-inherit"]=""),"line-append"===p?(0,s.jsx)("div",{className:e,"data-title-type":p,"data-title-tag":u,children:(0,s.jsx)(u,{className:o()([b+"-child",t]),...m})}):(0,s.jsx)(u,{"data-title-type":p,className:e,...m})})))},89750:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(26489),a=i(97118);const o=(0,r.Z)({styles:i(98118)})((({className:e,children:t})=>(0,a.jsx)("div",{className:e,children:t})))},26674:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r,a=i(19494),o=i(26489),n=i(97118);const s={},l=(0,o.Z)({connect:e=>({locationBeforeTransitions:e.routing.locationBeforeTransitions})})(r=class extends a.Component{constructor(...e){var t,i,r,a;super(...e),t=this,r=!1,(i="symbol"==typeof(a=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i="updating"))?a:String(a))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(e){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof e.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...e}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((t=>delete e[t])),(0,n.jsx)("div",{...e})}})||r},51607:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>f});var r=i(26489);const a=JSON.parse('{"i8":"20240308.0.1"}'),o={i8:"1.87.0"};var n=i(61968),s=i(9459),l=i(26674),c=i(89750),d=i(34146),p=i(13545);const h=i.p+"includes/asset.23694e13efe902e636cb.png",m="e7e72bc1",u={wrapper:m,css:'.e7e72bc1 hr{background:rgba(237,240,242,.15);border:0;height:.1rem;z-index:-2}.e7e72bc1-title{padding:1em 0;position:relative}.e7e72bc1-title .title{background:linear-gradient(180deg,#ffcc80 0,#ffd180 14%,#fff 40%,#ffab40 62%,#ffd180 77%,#ffcc80);font-size:2.5rem;margin-bottom:0}.e7e72bc1-title .sub-title{-webkit-text-fill-color:unset;background:none;-webkit-background-clip:unset!important;color:#ffe0b2;margin-top:.5em}.e7e72bc1-title .sub-title[data-text]:before{content:unset}.e7e72bc1-title:after{background:url("'+h+'") no-repeat 100% 0;background-size:contain;bottom:-2em;content:"";position:absolute;right:-1em;top:-2em;width:100%;z-index:-1}.e7e72bc1-article,.e7e72bc1-footer{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap}@media (max-width:660px){.e7e72bc1-article,.e7e72bc1-footer{display:block}}.e7e72bc1-block{-webkit-flex:1;flex:1}@media (max-width:660px){.e7e72bc1-block{line-height:2em;margin-bottom:3em}}.e7e72bc1-article>.main{-webkit-flex:2;flex:2}@media (max-width:660px){.e7e72bc1-article+hr{display:none}}.e7e72bc1-article .list{color:rgba(157,180,191,.9);list-style:none;padding-left:0}.e7e72bc1-article .list a{font-style:italic}.e7e72bc1-article .list span{display:inline-block;margin-left:.5em}'};var b=i(97118);const f=(0,r.Z)({pageinfo:e=>(0,s.Z)(e),styles:u})((({className:e})=>(0,b.jsx)(l.Z,{className:e,children:(0,b.jsxs)(c.Z,{children:[(0,b.jsxs)("div",{className:m+"-title",children:[(0,b.jsx)(p.Z,{level:"1",className:"title",children:"Who Calls the Fleet"}),(0,b.jsx)(p.Z,{level:"3",className:"sub-title",children:"A KanColle Toolkit"})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("article",{className:m+"-article",children:[(0,b.jsxs)("div",{className:m+"-block main",children:[(0,b.jsx)(p.Z,{level:"2",children:"Latest Update"}),(0,b.jsx)(d.Z,{className:"content",source:"_under_construction_"})]}),(0,b.jsxs)("div",{className:m+"-block",children:[(0,b.jsx)(p.Z,{level:"3",children:"Versions"}),(0,b.jsx)("ul",{className:"list",children:[["Database","https://github.com/TeamFleet/WhoCallsTheFleet-DB",a.i8],["KCKit","https://github.com/TeamFleet/KCKit",o.i8],["Koot.js","https://koot.js.org/",n.i8]].map((([e,t,i])=>(0,b.jsxs)("li",{children:[(0,b.jsx)("a",{className:"color-alt",href:t,target:"_blank",rel:"noopener noreferrer",children:e}),(0,b.jsx)("span",{children:i})]},e)))})]})]}),(0,b.jsx)("hr",{}),(0,b.jsxs)("footer",{className:m+"-footer",children:[(0,b.jsx)("div",{className:m+"-block",children:(0,b.jsx)(p.Z,{level:"3",children:"Support"})}),(0,b.jsx)("div",{className:m+"-block",children:(0,b.jsx)(p.Z,{level:"3",children:"Contact"})}),(0,b.jsx)("div",{className:m+"-block",children:(0,b.jsx)(p.Z,{level:"3",children:"Donate"})})]})]})})))},10993:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>o,wrapper:()=>r});const r="d80d8ae1",a=".d80d8ae1{border:.05rem solid transparent;border-radius:.15rem;border-radius:.55rem;color:rgba(157,180,191,.9);display:inline-block;font-size:.7rem;line-height:1rem;padding:0 .4rem;position:relative;vertical-align:initial}.d80d8ae1 .avatar{background-position:60% 0;background-size:cover;border-radius:.55rem;display:block;float:left;height:1.1rem;margin:-.05rem .25rem -.05rem -.45rem;overflow:hidden;width:1.6rem;z-index:-1}.d80d8ae1.link,a.d80d8ae1{color:#e6e6e6}html.is-hover .d80d8ae1.link:hover,html.is-hover a.d80d8ae1:hover{background:rgba(0,0,0,.15);color:#40c4ff}.d80d8ae1.link:active,a.d80d8ae1:active,html.is-hover .d80d8ae1.link:hover:active,html.is-hover a.d80d8ae1:hover:active{background:rgba(0,0,0,.15);color:hsla(0,0%,100%,.5)}.d80d8ae1.mod-inline{color:inherit;font-size:unset;padding-left:1.7rem;padding-right:0}.d80d8ae1.mod-inline:active,html.is-hover .d80d8ae1.mod-inline:hover,html.is-hover .d80d8ae1.mod-inline:hover:active{background-color:initial;border-color:transparent}.d80d8ae1.mod-inline .avatar{left:0;margin:-.55rem auto 0 0;position:absolute;top:50%}a.d80d8ae1.mod-inline{color:#40c4ff}html.is-hover a.d80d8ae1.mod-inline:hover{color:#fff}a.d80d8ae1.mod-inline:active,html.is-hover a.d80d8ae1.mod-inline:hover:active{color:hsla(0,0%,100%,.5)}html.is-webapp a.d80d8ae1.mod-inline{cursor:pointer}.d80d8ae1.mod-badge{background-color:#0277bd;border-color:#0277bd;color:#cdefff}html.is-hover .d80d8ae1.mod-badge.link:hover,html.is-hover a.d80d8ae1.mod-badge:hover{background-color:#039be5;border-color:#039be5;color:#fff}.d80d8ae1.mod-badge.link:active,a.d80d8ae1.mod-badge:active,html.is-hover .d80d8ae1.mod-badge.link:hover:active,html.is-hover a.d80d8ae1.mod-badge:hover:active{background-color:#01579b;border-color:#0277bd;color:#cdefff}",o={wrapper:r,css:a}},52666:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>o,wrapper:()=>r});const r="a4aa4012",a='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',o={wrapper:r,css:a}},98118:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>o,wrapper:()=>r});const r="f4f0218c",a=".f4f0218c{max-width:60rem}@media screen and (min-width:1600px){.f4f0218c{margin-left:calc(50vw - 37.5rem)}}",o={wrapper:r,css:a}},61968:e=>{"use strict";e.exports={i8:"0.15.15"}}}]);