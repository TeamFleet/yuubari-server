(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[324],{9596:e=>{e.exports=(e={},i=!1)=>{const r=[],a=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===a.title&&document.title&&(a.title=document.title),void 0===a.url&&void 0!==window.location&&"about"!==window.location.href.substr(0,5)&&(a.url=window.location.href)),void 0!==a.charset&&r.push({charset:a.charset}),void 0!==a.title&&(r.push({itemprop:"name",content:a.title}),r.push({name:"twitter:title",content:a.title}),r.push({property:"og:title",content:a.title})),void 0!==a.description&&(r.push({name:"description",content:a.description}),r.push({itemprop:"description",content:a.description}),r.push({name:"twitter:description",content:a.description}),r.push({property:"og:description",content:a.description})),void 0!==a.image&&(r.push({name:"image",content:a.image}),r.push({itemprop:"image",content:a.image}),r.push({name:"twitter:image:src",content:a.image}),r.push({property:"og:image",content:a.image})),void 0!==a.video&&(r.push({name:"twitter:player",content:a.video}),r.push({property:"og:video",content:a.video})),void 0!==a.url&&r.push({property:"og:url",content:a.url}),void 0!==a.siteName&&r.push({property:"og:site_name",content:a.siteName}),void 0!==a.locale&&r.push({property:"og:locale",content:a.locale}),void 0!==a.type&&r.push({property:"og:type",content:a.type}),void 0!==a.twitter.card&&r.push({name:"twitter:card",content:a.twitter.card}),void 0!==a.twitter.siteCreator&&r.push({name:"twitter:site",content:t(a.twitter.siteCreator)}),void 0!==a.twitter.author&&r.push({name:"twitter:creator",content:t(a.twitter.author)}),void 0!==a.facebook.adminsId&&r.push({name:"fb:admins",content:t(a.facebook.adminsId)}),void 0!==a.facebook.appId&&r.push({name:"fb:app_id",content:t(a.facebook.appId)}),void 0!==a.returnArray&&(i=a.returnArray),i?r:r.map((e=>{let t="<meta";for(const i in e)t+=` ${i}="${e[i]}"`;return t+="/>",t})).join("")};const t=e=>("string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e)},5090:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(10620);const a=e=>r.get.equipment(e)},61329:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});const r=(e,t)=>{switch(e){case"ship":case"ships":return`/ships/${t}`;case"item":case"items":case"equipment":case"equipments":return`/equipments/${t}`;case"entity":case"entities":return`/entities/${t}`}}},98954:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(10620);const a=(e,t,i)=>{if("object"!=typeof r.db.cgmaps[e][t])return"";const[a,n]=`${i}`.split("-");return"string"!=typeof r.db.cgmaps[e][t][a]?"":`/pics/${r.db.cgmaps[e][t][a]}${n?`/m${n}`:""}`},n=(e,t,i,o)=>{const s=r.db.ships[1],c=r.db.entities[1];if("object"==typeof e){if(e.constructor===s.constructor)return n("ship",e.id,t);if(e.constructor===c.constructor)return n("entity",e.id,t)}if(void 0!==t&&void 0===i){const i=t.split("/");return i.length>1?n(e,i[0],i[1].split(".")[0]):""}switch(o=o?"?"+o:"",e){case"ship":case"ships":return a("ships",t,i);case"ship-extra":case"ships-extra":return a("shipsExtra",t,i);case"equipment":case"equipments":return a("equipments",t,i);case"entity":case"entities":return a("entities",t,i);case"enemy":case"enemies":return`enemies/${t}/${i}.png${o}`}},o=(e,t,i,r)=>n(e,t,i,r)},75117:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(10620);const a=e=>r.get.ship(e)},9459:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(9596),a=i.n(r),n=i(76682),o=i(15895);const s=e=>t=>{t(function(e){return{type:o.VK,title:e}}(e))},c={uri:"","twitter:card":"summary_large_image"},l=(e,t)=>{if("object"==typeof e&&void 0===t)return l((0,n.getStore)().getState(),e);if("object"!=typeof e)return{};const i=e.localeId,r="是谁呼叫舰队";let o=e.server.origin,{uri:d=("undefined"!=typeof location?location.pathname:void 0),title:p=r,description:m=""}={...c,...t};const{subtitle:h,image:u}=t;if("object"==typeof d&&(d=d.pathname),"/"===d.substr(0,1)&&(d=d.substr(1)),p){Array.isArray(p)&&(p=p.filter((e=>void 0!==e&&""!==e)));const e=Array.isArray(p)&&p.length?p[0]:p;p=Array.isArray(p)?p.join(" / "):p,void 0!==h?(0,n.getStore)().dispatch(s({main:e,sub:h})):(0,n.getStore)().dispatch(s(e)),p!==r&&(p=p.replace(/\n/g,"")+" - "+r)}return m&&(m=m.replace(/\n/g,"")+" | "),m+="《舰队收藏》工具箱","/"!==o.substr(o.length-1,1)&&(o+="/"),{title:p,metas:a()({title:p,description:m,image:u||o+"launcher.jpg",url:o+d,type:"website",locale:i,siteName:r,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},d=l},81648:(e,t,i)=>{"use strict";i.d(t,{Z:()=>a});var r=i(76682);const a=e=>{(0,r.getHistory)().replace(("/"!==e.substr(0,1)?"/":"")+e)}},12091:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var r=i(19494),a=i(88767),n=i.n(a),o=i(26489),s=i(61677),c=i(75117),l=i(5090),d=i(98954),p=i(61329),m=i(97118);const h=(0,o.Z)({styles:i(17852)})((0,r.memo)((({ship:e,equipment:t,entity:i,id:a,to:o,href:h,noLink:u=!1,className:g,badge:f,name:b,children:v,...y})=>{const w=o||h||void 0;let x="span";if(y.className=n()({[g]:!0,"mod-badge":!!f}),y.children=v,e||a){const t=(0,c.Z)(e||a);y.children=(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)("span",{className:"avatar",style:{backgroundImage:`url(${(0,d.Z)("ship",t.id,"0-2")})`}}),b||t._name,v]}),u||(x=s.Z,y.to=w||(0,p.Z)("ship",t.id))}else if(t){const e=(0,l.Z)(t);y.children=(0,m.jsxs)(r.Fragment,{children:[b||e._name,v]}),u||(x=s.Z,y.to=w||(0,p.Z)("equipment",e.id))}else if(i){const e=(0,l.Z)(i);y.children=(0,m.jsxs)(r.Fragment,{children:[b||e._name,v]}),u||(x=s.Z,y.to=w||(0,p.Z)("entity",e.id))}else w&&(x=s.Z,y.to=w);return(0,m.jsx)(x,{...y})})))},61677:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(19494),a=i(99245),n=i(81648),o=i(97118);const s=(0,r.memo)((({to:e,href:t,className:i,replace:r=!1,onClick:s,...c})=>{const l=e||t||"";return l.match(/^(https?:)?\/\//)?l.indexOf("://")<0?(0,o.jsx)("a",{className:i,href:l,...c}):(0,o.jsx)("a",{className:i,href:l,target:"_blank",rel:"noreferrer",...c}):(0,o.jsx)(a.rU,{className:i,to:l,onClick:r?function(e){if((0,n.Z)(l),e.preventDefault(),"function"==typeof s)return s(e)}:s,...c})}))},19640:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(19494),a=i(99245),n=i(26489),o=i(81648),s=i(97118);const c=(e,t)=>"string"==typeof e?(0,s.jsxs)("span",{className:"name",children:[e,void 0!==t&&(0,s.jsx)("small",{className:"name-extra",children:t})]}):(0,r.cloneElement)(e,{className:"name"}),l=(0,n.Z)({styles:i(16774)})((({pic:e,avatar:t,image:i,src:r,picture:n,img:l,name:d,title:p,text:m,nameExtra:h,alt:u,to:g,href:f,link:b,replace:v=!1,children:y,type:w,...x})=>{const k=e||t||i||r||n||l,j=d||p||m||null,Z=v?"a":a.rU,N=g||f||b;"a"===Z?(x.href=N,x.onClick=e=>{e.preventDefault(),(0,o.Z)(N)}):x.to=N;const z={};return"ship"===w?(z.width="240",z.height="60"):"entity"===w&&(z.width="160",z.height="40"),(0,s.jsxs)(Z,{...x,children:[k&&(0,s.jsx)("img",{className:"pic","data-src":void 0,src:k,loading:"lazy",alt:u,...z}),j&&c(j,h),y]})}))},13545:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var r=i(19494),a=i(88767),n=i.n(a),o=i(26489),s=i(97118);const c=(0,o.Z)({styles:i(79642)})((0,r.memo)((({className:e,classNameInner:t,component:i,tag:r,tagname:a,element:o,level:c,children:l,title:d,type:p,inherit:m,...h})=>{const u=i||r||a||o||(void 0===c?void 0:`h${c}`)||"div",g=e.split(" ")[0];h.children=l;const f=Array.isArray(l)?l[0]:l;return"string"==typeof d?h["data-text"]=d:"string"==typeof f?h["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(h["data-text"]=f.props.value),m&&(h["data-title-is-inherit"]=""),"line-append"===p?(0,s.jsx)("div",{className:e,"data-title-type":p,"data-title-tag":u,children:(0,s.jsx)(u,{className:n()([g+"-child",t]),...h})}):(0,s.jsx)(u,{"data-title-type":p,className:e,...h})})))},15147:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(88767),a=i.n(r),n=i(26489),o=i(97118);const s=(0,n.Z)({styles:i(27018)})((({className:e,grid:t=!0,children:i,...r})=>(0,o.jsx)("div",{className:a()({[e]:!0,"mod-grid":!!t}),...r,children:i})))},26674:(e,t,i)=>{"use strict";i.d(t,{Z:()=>c});var r,a=i(19494),n=i(26489),o=i(97118);const s={},c=(0,n.Z)({connect:e=>({locationBeforeTransitions:e.routing.locationBeforeTransitions})})(r=class extends a.Component{constructor(...e){var t,i,r;super(...e),t=this,r=!1,(i=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(i="updating"))in t?Object.defineProperty(t,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[i]=r}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(e){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof e.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...e}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((t=>delete e[t])),(0,o.jsx)("div",{...e})}})||r},46743:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>k});var r=i(26489),a=i(9459),n=i(10620),o=i(26674),s=i(19494),c=i(15147);const l=e=>"object"==typeof e&&e.id?e:("string"==typeof e&&(e=parseInt(e)),"number"==typeof e?n.db.entities[e]:void 0);var d=i(98954),p=i(61329),m=i(19640),h=i(97118);const u=e=>e||void 0===e,g=(0,r.Z)({styles:i(91398)})((0,s.memo)((({entity:e,id:t,pic:i,name:r,children:a,count:n,...o})=>{const s=l(e||t);return(0,h.jsx)(m.Z,{to:(0,p.Z)("entity",s.id),pic:u(i)?(0,d.Z)(s,"0-2"):null,name:u(r)?s._name:null,nameExtra:n?`(${s.relation[n].length})`:void 0,type:"entity",...o,children:a})}))),f=(0,s.memo)((({className:e,list:t,array:i,empty:r,children:a,count:n,...o})=>{const s=t||i||[],l=!!s.length;return(0,h.jsxs)(c.Z,{className:e,children:[l&&s.map((e=>(0,h.jsx)(g,{entity:e,className:"item",count:!!n&&"cv",...o},e.id))),!l&&!!r&&(0,h.jsx)("span",{className:"list-empty",children:r}),a]})})),b=f;var v=i(12091);const y=(0,r.Z)({styles:i(53585)})((0,s.memo)((({className:e,list:t,array:i,empty:r,children:a,count:n,...o})=>{const s=t||i||[],d=!!s.length;return(0,h.jsxs)(c.Z,{className:e,children:[d&&s.map((e=>(0,h.jsx)(v.Z,{entity:e,className:"item",...o,children:n&&(0,h.jsxs)("small",{className:"count",children:["(",l(e).relation.illustrator.length,")"]})},e.id))),!d&&!!r&&(0,h.jsx)("span",{className:"list-empty",children:r}),a]})}))),w=y;var x=i(13545);const k=(0,r.Z)({connect:!0,pageinfo:e=>(0,a.Z)(e,{title:"声优 & 画师"})})((e=>{const t=[],i=[];for(const e in n.db.entities){const r=n.db.entities[e];r.relation&&(Array.isArray(r.relation.cv)&&r.relation.cv.length&&t.push(r),Array.isArray(r.relation.illustrator)&&r.relation.illustrator.length&&i.push(r))}return(0,h.jsxs)(o.Z,{className:e.className,children:[(0,h.jsx)(j,{children:"声优"}),(0,h.jsx)(b,{list:t.sort(((e,t)=>t.relation.cv.length-e.relation.cv.length)),count:!0}),(0,h.jsx)(j,{children:"画师"}),(0,h.jsx)(w,{list:i.sort(((e,t)=>t.relation.illustrator.length-e.relation.illustrator.length)),count:!0})]})})),j=(0,r.Z)({styles:i(19491)})((e=>(0,h.jsx)(x.Z,{component:"h2",type:"line-append",inherit:!0,...e})))},17852:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="d80d8ae1",a=".d80d8ae1{border:.05rem solid transparent;border-radius:.15rem;border-radius:.55rem;color:rgba(157,180,191,.9);display:inline-block;font-size:.7rem;line-height:1rem;padding:0 .4rem;position:relative;vertical-align:initial}.d80d8ae1 .avatar{background-position:60% 0;background-size:cover;border-radius:.55rem;display:block;float:left;height:1.1rem;margin:-.05rem .25rem -.05rem -.45rem;overflow:hidden;width:1.6rem;z-index:-1}.d80d8ae1.link,a.d80d8ae1{color:#e6e6e6}html.is-hover .d80d8ae1.link:hover,html.is-hover a.d80d8ae1:hover{background:rgba(0,0,0,.15);color:#40c4ff}.d80d8ae1.link:active,a.d80d8ae1:active,html.is-hover .d80d8ae1.link:hover:active,html.is-hover a.d80d8ae1:hover:active{background:rgba(0,0,0,.15);color:hsla(0,0%,100%,.5)}.d80d8ae1.mod-inline{color:inherit;font-size:unset;padding-left:1.7rem;padding-right:0}.d80d8ae1.mod-inline:active,html.is-hover .d80d8ae1.mod-inline:hover,html.is-hover .d80d8ae1.mod-inline:hover:active{background-color:initial;border-color:transparent}.d80d8ae1.mod-inline .avatar{left:0;margin:-.55rem auto 0 0;position:absolute;top:50%}a.d80d8ae1.mod-inline{color:#40c4ff}html.is-hover a.d80d8ae1.mod-inline:hover{color:#fff}a.d80d8ae1.mod-inline:active,html.is-hover a.d80d8ae1.mod-inline:hover:active{color:hsla(0,0%,100%,.5)}html.is-webapp a.d80d8ae1.mod-inline{cursor:pointer}.d80d8ae1.mod-badge{background-color:#0277bd;border-color:#0277bd;color:#cdefff}html.is-hover .d80d8ae1.mod-badge.link:hover,html.is-hover a.d80d8ae1.mod-badge:hover{background-color:#039be5;border-color:#039be5;color:#fff}.d80d8ae1.mod-badge.link:active,a.d80d8ae1.mod-badge:active,html.is-hover .d80d8ae1.mod-badge.link:hover:active,html.is-hover a.d80d8ae1.mod-badge:hover:active{background-color:#01579b;border-color:#0277bd;color:#cdefff}",n={wrapper:r,css:a}},16774:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="e415e509",a='.e415e509{color:#fff;height:2rem;min-width:9rem;position:relative}.e415e509,.e415e509:before{display:inline-block;vertical-align:middle}.e415e509:before{content:"";height:100%;overflow:hidden;width:0}.e415e509:after{border-radius:0 .25rem .25rem 0;bottom:0;content:"";left:1rem;position:absolute;right:0;top:0;z-index:-10}.e415e509 .pic{background:no-repeat -2.5rem 0/contain;display:block;height:100%;left:-.25rem;pointer-events:none;position:absolute;right:0;top:0;z-index:0}.e415e509 img.pic{background:none;height:2rem;left:-2.75rem;object-fit:contain;right:auto;width:8rem}.e415e509 .name{display:inline-block;line-height:.9em;position:relative;vertical-align:middle;z-index:2}.e415e509 .name-suffix,.e415e509 .name-type{display:block;font-size:.75em;font-weight:400;line-height:1.05em;transition:inherit}.e415e509 .name-type{margin-bottom:.15em}.e415e509 .name-suffix{color:rgba(157,180,191,.9);margin-left:.2rem;margin-top:.15em}.e415e509 .name-extra{display:inline-block;margin-left:.25rem}html.is-hover .e415e509:hover{color:#40c4ff}html.is-hover .e415e509:hover:after{background:rgba(0,0,0,.15)}html.is-hover .e415e509:hover .name-suffix{color:#03a9f4}.e415e509:active,html.is-hover .e415e509:hover:active{color:hsla(0,0%,100%,.5)}.e415e509:active:after,html.is-hover .e415e509:hover:active:after{background:rgba(0,0,0,.15)}.e415e509:active,.e415e509:active .name-suffix,html.is-hover .e415e509:hover:active .name-suffix{color:hsla(0,0%,100%,.5)}.e415e509:active:after{background:rgba(0,0,0,.15)}.e415e509:active .name-suffix{color:hsla(0,0%,100%,.5)}[data-locale=en] .e415e509 .name{font-size:.7rem}',n={wrapper:r,css:a}},91398:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="a988a335",a=".a988a335{padding-left:2.85rem}",n={wrapper:r,css:a}},53585:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="f382fa6f",a=".f382fa6f{margin-left:-.4rem}.f382fa6f .count{display:inline-block;margin-left:.25rem}",n={wrapper:r,css:a}},79642:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="a4aa4012",a='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',n={wrapper:r,css:a}},27018:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="eec410ce",a=".eec410ce{clear:both;margin-right:-.5rem;margin-top:-.5rem}.eec410ce .item{margin:.5rem .5rem 0 0}.eec410ce .item.placeholder{height:0;margin-top:auto}.eec410ce .list-empty{color:rgba(185,205,214,.55);margin-top:.5rem}.eec410ce.mod-grid{grid-gap:.5rem;display:grid;grid-template-columns:repeat(auto-fill,minmax(9rem,1fr));margin-right:auto;margin-top:.5rem}.eec410ce.mod-grid .item{margin-right:0;margin-top:0}",n={wrapper:r,css:a}},19491:(e,t,i)=>{"use strict";i.r(t),i.d(t,{css:()=>a,default:()=>n,wrapper:()=>r});const r="b25bd2e8",a=".b25bd2e8{font-size:.9rem;height:1rem;line-height:1rem}.b25bd2e8~.b25bd2e8{margin-top:1.5rem}",n={wrapper:r,css:a}}}]);