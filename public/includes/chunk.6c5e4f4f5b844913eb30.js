(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[92],{9596:t=>{t.exports=(t={},i=!1)=>{let a=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&a.push({charset:r.charset}),void 0!==r.title&&(a.push({itemprop:"name",content:r.title}),a.push({name:"twitter:title",content:r.title}),a.push({name:"og:title",content:r.title})),void 0!==r.description&&(a.push({name:"description",content:r.description}),a.push({itemprop:"description",content:r.description}),a.push({itemprop:"twitter:description",content:r.description}),a.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(a.push({name:"image",content:r.image}),a.push({itemprop:"image",content:r.image}),a.push({itemprop:"twitter:image:src",content:r.image}),a.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(a.push({name:"twitter:player",content:r.video}),a.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&a.push({name:"og:url",content:r.url}),void 0!==r.siteName&&a.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&a.push({name:"og:locale",content:r.locale}),void 0!==r.type&&a.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&a.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&a.push({name:"twitter:site",content:e(r.twitter.siteCreator)}),void 0!==r.twitter.author&&a.push({name:"twitter:creator",content:e(r.twitter.author)}),void 0!==r.facebook.adminsId&&a.push({name:"fb:admins",content:e(r.facebook.adminsId)}),void 0!==r.facebook.appId&&a.push({name:"fb:app_id",content:e(r.facebook.appId)}),void 0!==r.returnArray&&(i=r.returnArray),i?a:a.map((t=>{let e="<meta";for(let i in t)e+=` ${i}="${t[i]}"`;return e+="/>",e})).join("")};const e=t=>("string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t)},9459:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var a=i(9596),r=i.n(a),n=i(76682),o=i(15895);const s=t=>e=>{e(function(t){return{type:o.VK,title:t}}(t))},l={uri:"","twitter:card":"summary_large_image"},c=(t,e)=>{if("object"==typeof t&&void 0===e)return c((0,n.getStore)().getState(),t);if("object"!=typeof t)return{};const i=t.localeId,a="是谁呼叫舰队";let o=t.server.origin,{uri:d=("undefined"!=typeof location?location.pathname:void 0),title:p=a,description:h=""}={...l,...e};const{subtitle:u,image:m}=e;if("object"==typeof d&&(d=d.pathname),"/"===d.substr(0,1)&&(d=d.substr(1)),p){Array.isArray(p)&&(p=p.filter((t=>void 0!==t&&""!==t)));const t=Array.isArray(p)&&p.length?p[0]:p;p=Array.isArray(p)?p.join(" / "):p,void 0!==u?(0,n.getStore)().dispatch(s({main:t,sub:u})):(0,n.getStore)().dispatch(s(t)),p!==a&&(p=p.replace(/\n/g,"")+" - "+a)}return h&&(h=h.replace(/\n/g,"")+" | "),h+="《舰队收藏》工具箱","/"!==o.substr(o.length-1,1)&&(o+="/"),{title:p,metas:r()({title:p,description:h,image:m||o+"launcher.jpg",url:o+d,type:"website",locale:i,siteName:a,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},d=c},13545:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a=i(19494),r=i(88767),n=i.n(r),o=i(26489),s=i(97118);const l=(0,o.Z)({styles:i(52666)})((0,a.memo)((({className:t,classNameInner:e,component:i,tag:a,tagname:r,element:o,level:l,children:c,title:d,type:p,inherit:h,...u})=>{const m=i||a||r||o||(void 0===l?void 0:`h${l}`)||"div",b=t.split(" ")[0];u.children=c;const f=Array.isArray(c)?c[0]:c;switch("string"==typeof d?u["data-text"]=d:"string"==typeof f?u["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(u["data-text"]=f.props.value),h&&(u["data-title-is-inherit"]=""),p){case"line-append":return(0,s.jsx)("div",{className:t,"data-title-type":p,"data-title-tag":m,children:(0,s.jsx)(m,{className:n()([b+"-child",e]),...u})});default:return(0,s.jsx)(m,{"data-title-type":p,className:t,...u})}})))},40383:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var a=i(19494),r=i(26489),n=i(53027),o=i(97118);const s=(0,r.Z)({styles:i(36969)})((0,a.memo)((({className:t,component:e,tag:i,element:a})=>{const r=e||i||a||"span";return(0,o.jsxs)(r,{className:t,children:[(0,o.jsx)(n.Z,{icon:"warning2",className:"icon"}),"建设中"]})})))},26674:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a,r=i(19494),n=i(26489),o=i(97118);const s={},l=(0,n.Z)({connect:t=>({locationBeforeTransitions:t.routing.locationBeforeTransitions})})(a=class extends r.Component{constructor(...t){var e;super(...t),(e="updating")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(t){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof t.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...t}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((e=>delete t[e])),(0,o.jsx)("div",{...t})}})||a},24273:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>d});var a=i(19494),r=i(26489),n=i(9459),o=i(26674),s=i(13545),l=i(40383),c=i(97118);const d=(0,r.Z)({pageinfo:t=>(0,n.Z)(t,{title:"关于"}),styles:i(96784)})((0,a.memo)((({className:t})=>(0,c.jsxs)(o.Z,{className:t,children:[(0,c.jsx)(s.Z,{component:"h2",children:"关于"}),(0,c.jsx)(l.Z,{}),(0,c.jsxs)("p",{children:["Based on"," ",(0,c.jsx)("a",{href:"https://github.com/cmux/koot",target:"_blank",rel:"noreferrer",children:"Koot.js"})," ","v",i(61968).i8,(0,c.jsx)("br",{}),"Fork on"," ",(0,c.jsx)("a",{href:"https://github.com/TeamFleet/WhoCallsTheFleet-Yuubari",target:"_blank",rel:"noreferrer",children:"GitHub"})]})]}))))},52666:(t,e,i)=>{"use strict";i.r(e),i.d(e,{css:()=>r,default:()=>n,wrapper:()=>a});const a="a4aa4012",r='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',n={wrapper:a,css:r}},36969:(t,e,i)=>{"use strict";i.r(e),i.d(e,{css:()=>r,default:()=>n,wrapper:()=>a});const a="b069b19b",r=".b069b19b{background:hsla(5,100%,75%,.1);border:.1rem solid hsla(5,100%,75%,.5);border-radius:5rem;color:#ff8a80;display:block;font-size:1rem;padding:.5rem;text-align:center}.b069b19b .icon{height:1rem;margin-right:.25rem;vertical-align:text-bottom;width:1rem}[lang^=ja] .b069b19b .icon{vertical-align:top}",n={wrapper:a,css:r}},96784:(t,e,i)=>{"use strict";i.r(e),i.d(e,{css:()=>r,default:()=>n,wrapper:()=>a});const a="dd41d8cd",r="",n={wrapper:a,css:r}},61968:t=>{"use strict";t.exports={i8:"0.15.12"}}}]);