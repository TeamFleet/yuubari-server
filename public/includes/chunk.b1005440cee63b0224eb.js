(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[602],{9596:t=>{t.exports=(t={},i=!1)=>{const a=[],o=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===o.title&&document.title&&(o.title=document.title),void 0===o.url&&void 0!==window.location&&"about"!==window.location.href.substr(0,5)&&(o.url=window.location.href)),void 0!==o.charset&&a.push({charset:o.charset}),void 0!==o.title&&(a.push({itemprop:"name",content:o.title}),a.push({name:"twitter:title",content:o.title}),a.push({property:"og:title",content:o.title})),void 0!==o.description&&(a.push({name:"description",content:o.description}),a.push({itemprop:"description",content:o.description}),a.push({name:"twitter:description",content:o.description}),a.push({property:"og:description",content:o.description})),void 0!==o.image&&(a.push({name:"image",content:o.image}),a.push({itemprop:"image",content:o.image}),a.push({name:"twitter:image:src",content:o.image}),a.push({property:"og:image",content:o.image})),void 0!==o.video&&(a.push({name:"twitter:player",content:o.video}),a.push({property:"og:video",content:o.video})),void 0!==o.url&&a.push({property:"og:url",content:o.url}),void 0!==o.siteName&&a.push({property:"og:site_name",content:o.siteName}),void 0!==o.locale&&a.push({property:"og:locale",content:o.locale}),void 0!==o.type&&a.push({property:"og:type",content:o.type}),void 0!==o.twitter.card&&a.push({name:"twitter:card",content:o.twitter.card}),void 0!==o.twitter.siteCreator&&a.push({name:"twitter:site",content:e(o.twitter.siteCreator)}),void 0!==o.twitter.author&&a.push({name:"twitter:creator",content:e(o.twitter.author)}),void 0!==o.facebook.adminsId&&a.push({name:"fb:admins",content:e(o.facebook.adminsId)}),void 0!==o.facebook.appId&&a.push({name:"fb:app_id",content:e(o.facebook.appId)}),void 0!==o.returnArray&&(i=o.returnArray),i?a:a.map((t=>{let e="<meta";for(const i in t)e+=` ${i}="${t[i]}"`;return e+="/>",e})).join("")};const e=t=>("string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t)},9459:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var a=i(9596),o=i.n(a),r=i(76682),n=i(15895);const s=t=>e=>{e(function(t){return{type:n.VK,title:t}}(t))},l={uri:"","twitter:card":"summary_large_image"},p=(t,e)=>{if("object"==typeof t&&void 0===e)return p((0,r.getStore)().getState(),t);if("object"!=typeof t)return{};const i=t.localeId,a="Who Calls the Fleet";let n=t.server.origin,{uri:c=("undefined"!=typeof location?location.pathname:void 0),title:d=a,description:h=""}={...l,...e};const{subtitle:u,image:m}=e;if("object"==typeof c&&(c=c.pathname),"/"===c.substr(0,1)&&(c=c.substr(1)),d){Array.isArray(d)&&(d=d.filter((t=>void 0!==t&&""!==t)));const t=Array.isArray(d)&&d.length?d[0]:d;d=Array.isArray(d)?d.join(" / "):d,void 0!==u?(0,r.getStore)().dispatch(s({main:t,sub:u})):(0,r.getStore)().dispatch(s(t)),d!==a&&(d=d.replace(/\n/g,"")+" - "+a)}return h&&(h=h.replace(/\n/g,"")+" | "),h+="A KanColle Toolkit","/"!==n.substr(n.length-1,1)&&(n+="/"),{title:d,metas:o()({title:d,description:h,image:m||n+"launcher.jpg",url:n+c,type:"website",locale:i,siteName:a,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},c=p},13545:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a=i(19494),o=i(14003),r=i.n(o),n=i(26489),s=i(97118);const l=(0,n.Z)({styles:i(52666)})((0,a.memo)((({className:t,classNameInner:e,component:i,tag:a,tagname:o,element:n,level:l,children:p,title:c,type:d,inherit:h,...u})=>{const m=i||a||o||n||(void 0===l?void 0:`h${l}`)||"div",b=t.split(" ")[0];u.children=p;const g=Array.isArray(p)?p[0]:p;return"string"==typeof c?u["data-text"]=c:"string"==typeof g?u["data-text"]=g:"object"==typeof g&&"object"==typeof g.props&&"string"==typeof g.props.value&&(u["data-text"]=g.props.value),h&&(u["data-title-is-inherit"]=""),"line-append"===d?(0,s.jsx)("div",{className:t,"data-title-type":d,"data-title-tag":m,children:(0,s.jsx)(m,{className:r()([b+"-child",e]),...u})}):(0,s.jsx)(m,{"data-title-type":d,className:t,...u})})))},40383:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var a=i(19494),o=i(26489),r=i(53027),n=i(97118);const s=(0,o.Z)({styles:i(36969)})((0,a.memo)((({className:t,component:e,tag:i,element:a})=>{const o=e||i||a||"span";return(0,n.jsxs)(o,{className:t,children:[(0,n.jsx)(r.Z,{icon:"warning2",className:"icon"}),"工事中"]})})))},26674:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a,o=i(19494),r=i(26489),n=i(97118);const s={},l=(0,r.Z)({connect:t=>({locationBeforeTransitions:t.routing.locationBeforeTransitions})})(a=class extends o.Component{constructor(...t){var e,i,a,o;super(...t),e=this,a=!1,(i="symbol"==typeof(o=function(t,e){if("object"!=typeof t||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,"string");if("object"!=typeof a)return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i="updating"))?o:String(o))in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(t){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof t.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...t}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((e=>delete t[e])),(0,n.jsx)("div",{...t})}})||a},15861:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var a=i(19494),o=i(26489),r=i(9459),n=i(26674),s=i(13545),l=i(40383),p=i(97118);const c=(0,o.Z)({pageinfo:(t,e)=>(0,r.Z)(t,{title:e.title})})((0,a.memo)((({className:t,title:e})=>(0,p.jsxs)(n.Z,{className:t,children:[(0,p.jsx)(s.Z,{component:"h2",children:e}),(0,p.jsx)(l.Z,{})]}))))},24527:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var a=i(15861),o=i(97118);const r=()=>(0,o.jsx)(a.Z,{title:"遠征"})},52666:(t,e,i)=>{"use strict";i.r(e),i.d(e,{css:()=>o,default:()=>r,wrapper:()=>a});const a="a4aa4012",o='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',r={wrapper:a,css:o}},36969:(t,e,i)=>{"use strict";i.r(e),i.d(e,{css:()=>o,default:()=>r,wrapper:()=>a});const a="b069b19b",o=".b069b19b{background:hsla(5,100%,75%,.1);border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;color:#ff8a80;display:block;font-size:1rem;padding:.5rem;text-align:center}.b069b19b .icon{height:1rem;margin-right:.25rem;vertical-align:text-bottom;width:1rem}[lang^=ja] .b069b19b .icon{vertical-align:top}",r={wrapper:a,css:o}}}]);