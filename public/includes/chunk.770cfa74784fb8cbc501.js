(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[993],{9596:t=>{t.exports=(t={},i=!1)=>{let r=[],n=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===n.title&&document.title&&(n.title=document.title),void 0===n.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(n.url=location.href)),void 0!==n.charset&&r.push({charset:n.charset}),void 0!==n.title&&(r.push({itemprop:"name",content:n.title}),r.push({name:"twitter:title",content:n.title}),r.push({name:"og:title",content:n.title})),void 0!==n.description&&(r.push({name:"description",content:n.description}),r.push({itemprop:"description",content:n.description}),r.push({itemprop:"twitter:description",content:n.description}),r.push({itemprop:"og:description",content:n.description})),void 0!==n.image&&(r.push({name:"image",content:n.image}),r.push({itemprop:"image",content:n.image}),r.push({itemprop:"twitter:image:src",content:n.image}),r.push({itemprop:"og:image",content:n.image})),void 0!==n.video&&(r.push({name:"twitter:player",content:n.video}),r.push({itemprop:"og:video",content:n.video})),void 0!==n.url&&r.push({name:"og:url",content:n.url}),void 0!==n.siteName&&r.push({name:"og:site_name",content:n.siteName}),void 0!==n.locale&&r.push({name:"og:locale",content:n.locale}),void 0!==n.type&&r.push({name:"og:type",content:n.type}),void 0!==n.twitter.card&&r.push({name:"twitter:card",content:n.twitter.card}),void 0!==n.twitter.siteCreator&&r.push({name:"twitter:site",content:e(n.twitter.siteCreator)}),void 0!==n.twitter.author&&r.push({name:"twitter:creator",content:e(n.twitter.author)}),void 0!==n.facebook.adminsId&&r.push({name:"fb:admins",content:e(n.facebook.adminsId)}),void 0!==n.facebook.appId&&r.push({name:"fb:app_id",content:e(n.facebook.appId)}),void 0!==n.returnArray&&(i=n.returnArray),i?r:r.map((t=>{let e="<meta";for(let i in t)e+=` ${i}="${t[i]}"`;return e+="/>",e})).join("")};const e=t=>("string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t)},9459:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var r=i(9596),n=i.n(r),o=i(76682),a=i(15895);const s=t=>e=>{e(function(t){return{type:a.VK,title:t}}(t))},d={uri:"","twitter:card":"summary_large_image"},p=(t,e)=>{if("object"==typeof t&&void 0===e)return p((0,o.getStore)().getState(),t);if("object"!=typeof t)return{};const i=t.localeId,r="是谁呼叫舰队";let a=t.server.origin,{uri:l=("undefined"!=typeof location?location.pathname:void 0),title:c=r,description:m=""}={...d,...e};const{subtitle:h,image:b}=e;if("object"==typeof l&&(l=l.pathname),"/"===l.substr(0,1)&&(l=l.substr(1)),c){Array.isArray(c)&&(c=c.filter((t=>void 0!==t&&""!==t)));const t=Array.isArray(c)&&c.length?c[0]:c;c=Array.isArray(c)?c.join(" / "):c,void 0!==h?(0,o.getStore)().dispatch(s({main:t,sub:h})):(0,o.getStore)().dispatch(s(t)),c!==r&&(c=c.replace(/\n/g,"")+" - "+r)}return m&&(m=m.replace(/\n/g,"")+" | "),m+="《舰队收藏》工具箱","/"!==a.substr(a.length-1,1)&&(a+="/"),{title:c,metas:n()({title:c,description:m,image:b||a+"launcher.jpg",url:a+l,type:"website",locale:i,siteName:r,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},l=p},56207:(t,e,i)=>{"use strict";i.d(e,{Z:()=>p});var r,n=i(19494),o=i(240),a=i(88767),s=i.n(a),d=i(97118);const p=(0,o.Z)({connect:t=>({mainKey:t.app.mainKey}),styles:i(54599)})(r=class extends n.Component{constructor(...t){var e;super(...t),(e="mounted")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}componentDidMount(){this.mounted=!0,setTimeout((()=>{this.mounted}))}componentWillUnmount(){this.mounted=!1}renderContent(t){const{className:e,children:i,mainKey:r,type:n,...o}=this.props;return delete o.dispatch,(0,d.jsx)("div",{className:s()({[e]:!0,"main-header":!0,[`mod-${n}`]:!!n}),...o,children:i})}render(){return this.renderContent(!0)}})||r},13545:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var r=i(19494),n=i(88767),o=i.n(n),a=i(240),s=i(97118);const d=(0,a.Z)({styles:i(52666)})((0,r.memo)((({className:t,classNameInner:e,component:i,tag:r,tagname:n,element:a,level:d,children:p,title:l,type:c,inherit:m,...h})=>{const b=i||r||n||a||(void 0===d?void 0:`h${d}`)||"div",u=t.split(" ")[0];h.children=p;const f=Array.isArray(p)?p[0]:p;switch("string"==typeof l?h["data-text"]=l:"string"==typeof f?h["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(h["data-text"]=f.props.value),m&&(h["data-title-is-inherit"]=""),c){case"line-append":return(0,s.jsx)("div",{className:t,"data-title-type":c,"data-title-tag":b,children:(0,s.jsx)(b,{className:o()([u+"-child",e]),...h})});default:return(0,s.jsx)(b,{"data-title-type":c,className:t,...h})}})))},26674:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var r,n=i(19494),o=i(240),a=i(97118);const s={},d=(0,o.Z)({connect:t=>({locationBeforeTransitions:t.routing.locationBeforeTransitions})})(r=class extends n.Component{constructor(...t){var e;super(...t),(e="updating")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(t){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof t.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...t}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((e=>delete t[e])),(0,a.jsx)("div",{...t})}})||r},54599:(t,e,i)=>{"use strict";i.r(e),i.d(e,{wrapper:()=>r,css:()=>n,default:()=>o});const r="b7b36a96",n='.b7b36a96{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2);left:0;margin:-1rem -1.5rem .95rem;overflow:hidden;padding:0 1.5rem;position:-webkit-sticky;position:sticky;right:0;top:0;transition:inherit;z-index:1000}@media (max-width:850px){.b7b36a96{margin-left:-1.2rem;margin-right:-1.2rem;top:var(--nav-height)}}@media (max-width:660px){.b7b36a96{margin-left:-.6rem;margin-right:-.6rem;top:var(--nav-height)}}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.b7b36a96{-webkit-backdrop-filter:saturate(180%) blur(1rem);backdrop-filter:saturate(180%) blur(1rem);box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}@media (max-width:850px){.b7b36a96{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.b7b36a96{padding-left:.6rem;padding-right:.6rem}}.b7b36a96:after{background:hsla(204,15%,94%,.15);bottom:.05rem;height:.05rem}.b7b36a96:after,.b7b36a96:before{content:"";left:0;position:absolute;right:0}.b7b36a96:before{background:rgba(43,47,49,.85);bottom:0;top:0;z-index:-1}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.b7b36a96:before{opacity:.5}}',o={wrapper:r,css:n}},52666:(t,e,i)=>{"use strict";i.r(e),i.d(e,{wrapper:()=>r,css:()=>n,default:()=>o});const r="ee8fb700",n='.ee8fb700{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.ee8fb700[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.ee8fb700:last-child{margin-bottom:0}.ee8fb700[data-title-is-inherit] .ee8fb700[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.ee8fb700[data-title-type=inline-block]{display:inline-block}.ee8fb700[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.ee8fb700[data-title-type=line-append] .ee8fb700-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.ee8fb700[data-title-type=line-append] .ee8fb700-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.ee8fb700[data-title-type=line-append] .ee8fb700-child:after{background:hsla(204,15%,94%,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.ee8fb700-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',o={wrapper:r,css:n}}}]);