(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[50],{9596:t=>{t.exports=(t={},i=!1)=>{let n=[],o=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===o.title&&document.title&&(o.title=document.title),void 0===o.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(o.url=location.href)),void 0!==o.charset&&n.push({charset:o.charset}),void 0!==o.title&&(n.push({itemprop:"name",content:o.title}),n.push({name:"twitter:title",content:o.title}),n.push({name:"og:title",content:o.title})),void 0!==o.description&&(n.push({name:"description",content:o.description}),n.push({itemprop:"description",content:o.description}),n.push({itemprop:"twitter:description",content:o.description}),n.push({itemprop:"og:description",content:o.description})),void 0!==o.image&&(n.push({name:"image",content:o.image}),n.push({itemprop:"image",content:o.image}),n.push({itemprop:"twitter:image:src",content:o.image}),n.push({itemprop:"og:image",content:o.image})),void 0!==o.video&&(n.push({name:"twitter:player",content:o.video}),n.push({itemprop:"og:video",content:o.video})),void 0!==o.url&&n.push({name:"og:url",content:o.url}),void 0!==o.siteName&&n.push({name:"og:site_name",content:o.siteName}),void 0!==o.locale&&n.push({name:"og:locale",content:o.locale}),void 0!==o.type&&n.push({name:"og:type",content:o.type}),void 0!==o.twitter.card&&n.push({name:"twitter:card",content:o.twitter.card}),void 0!==o.twitter.siteCreator&&n.push({name:"twitter:site",content:e(o.twitter.siteCreator)}),void 0!==o.twitter.author&&n.push({name:"twitter:creator",content:e(o.twitter.author)}),void 0!==o.facebook.adminsId&&n.push({name:"fb:admins",content:e(o.facebook.adminsId)}),void 0!==o.facebook.appId&&n.push({name:"fb:app_id",content:e(o.facebook.appId)}),void 0!==o.returnArray&&(i=o.returnArray),i?n:n.map((t=>{let e="<meta";for(let i in t)e+=` ${i}="${t[i]}"`;return e+="/>",e})).join("")};const e=t=>("string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t)},9459:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var n=i(9596),o=i.n(n),r=i(76682),a=i(15895);const s=t=>e=>{e(function(t){return{type:a.VK,title:t}}(t))},l={uri:"","twitter:card":"summary_large_image"},c=(t,e)=>{if("object"==typeof t&&void 0===e)return c((0,r.getStore)().getState(),t);if("object"!=typeof t)return{};const i=t.localeId,n="是谁呼叫舰队";let a=t.server.origin,{uri:d=("undefined"!=typeof location?location.pathname:void 0),title:p=n,description:h=""}={...l,...e};const{subtitle:m,image:u}=e;if("object"==typeof d&&(d=d.pathname),"/"===d.substr(0,1)&&(d=d.substr(1)),p){Array.isArray(p)&&(p=p.filter((t=>void 0!==t&&""!==t)));const t=Array.isArray(p)&&p.length?p[0]:p;p=Array.isArray(p)?p.join(" / "):p,void 0!==m?(0,r.getStore)().dispatch(s({main:t,sub:m})):(0,r.getStore)().dispatch(s(t)),p!==n&&(p=p.replace(/\n/g,"")+" - "+n)}return h&&(h=h.replace(/\n/g,"")+" | "),h+="《舰队收藏》工具箱","/"!==a.substr(a.length-1,1)&&(a+="/"),{title:p,metas:o()({title:p,description:h,image:u||a+"launcher.jpg",url:a+d,type:"website",locale:i,siteName:n,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},d=c},13545:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var n=i(19494),o=i(88767),r=i.n(o),a=i(240),s=i(97118);const l=(0,a.Z)({styles:i(52666)})((0,n.memo)((({className:t,classNameInner:e,component:i,tag:n,tagname:o,element:a,level:l,children:c,title:d,type:p,inherit:h,...m})=>{const u=i||n||o||a||(void 0===l?void 0:`h${l}`)||"div",b=t.split(" ")[0];m.children=c;const f=Array.isArray(c)?c[0]:c;switch("string"==typeof d?m["data-text"]=d:"string"==typeof f?m["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(m["data-text"]=f.props.value),h&&(m["data-title-is-inherit"]=""),p){case"line-append":return(0,s.jsx)("div",{className:t,"data-title-type":p,"data-title-tag":u,children:(0,s.jsx)(u,{className:r()([b+"-child",e]),...m})});default:return(0,s.jsx)(u,{"data-title-type":p,className:t,...m})}})))},40383:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var n=i(19494),o=i(240),r=i(53027),a=i(97118);const s=(0,o.Z)({styles:i(36969)})((0,n.memo)((({className:t,component:e,tag:i,element:n})=>{const o=e||i||n||"span";return(0,a.jsxs)(o,{className:t,children:[(0,a.jsx)(r.Z,{icon:"warning2",className:"icon"}),"建设中"]})})))},26674:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var n,o=i(19494),r=i(240),a=i(97118);const s={},l=(0,r.Z)({connect:t=>({locationBeforeTransitions:t.routing.locationBeforeTransitions})})(n=class extends o.Component{constructor(...t){var e;super(...t),(e="updating")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(t){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof t.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...t}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((e=>delete t[e])),(0,a.jsx)("div",{...t})}})||n},15861:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var n=i(19494),o=i(240),r=i(9459),a=i(26674),s=i(13545),l=i(40383),c=i(97118);const d=(0,o.Z)({pageinfo:(t,e)=>(0,r.Z)(t,{title:e.title})})((0,n.memo)((({className:t,title:e})=>(0,c.jsxs)(a.Z,{className:t,children:[(0,c.jsx)(s.Z,{component:"h2",children:e}),(0,c.jsx)(l.Z,{})]}))))},45135:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var n=i(15861),o=i(97118);const r=()=>(0,o.jsx)(n.Z,{title:"海军兵学校"})},52666:(t,e,i)=>{"use strict";i.r(e),i.d(e,{wrapper:()=>n,css:()=>o,default:()=>r});const n="ee8fb700",o='.ee8fb700{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.ee8fb700[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.ee8fb700:last-child{margin-bottom:0}.ee8fb700[data-title-is-inherit] .ee8fb700[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.ee8fb700[data-title-type=inline-block]{display:inline-block}.ee8fb700[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.ee8fb700[data-title-type=line-append] .ee8fb700-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.ee8fb700[data-title-type=line-append] .ee8fb700-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.ee8fb700[data-title-type=line-append] .ee8fb700-child:after{background:hsla(204,15%,94%,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.ee8fb700-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',r={wrapper:n,css:o}},36969:(t,e,i)=>{"use strict";i.r(e),i.d(e,{wrapper:()=>n,css:()=>o,default:()=>r});const n="b069b19b",o=".b069b19b{background:hsla(5,100%,75%,.1);border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;color:#ff8a80;display:block;font-size:1rem;padding:.5rem;text-align:center}.b069b19b .icon{height:1rem;margin-right:.25rem;vertical-align:text-bottom;width:1rem}[lang^=ja] .b069b19b .icon{vertical-align:top}",r={wrapper:n,css:o}}}]);