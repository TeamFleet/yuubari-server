(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[993],{9596:t=>{t.exports=(t={},a=!1)=>{let i=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},t);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&i.push({charset:r.charset}),void 0!==r.title&&(i.push({itemprop:"name",content:r.title}),i.push({name:"twitter:title",content:r.title}),i.push({name:"og:title",content:r.title})),void 0!==r.description&&(i.push({name:"description",content:r.description}),i.push({itemprop:"description",content:r.description}),i.push({itemprop:"twitter:description",content:r.description}),i.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(i.push({name:"image",content:r.image}),i.push({itemprop:"image",content:r.image}),i.push({itemprop:"twitter:image:src",content:r.image}),i.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(i.push({name:"twitter:player",content:r.video}),i.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&i.push({name:"og:url",content:r.url}),void 0!==r.siteName&&i.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&i.push({name:"og:locale",content:r.locale}),void 0!==r.type&&i.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&i.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&i.push({name:"twitter:site",content:e(r.twitter.siteCreator)}),void 0!==r.twitter.author&&i.push({name:"twitter:creator",content:e(r.twitter.author)}),void 0!==r.facebook.adminsId&&i.push({name:"fb:admins",content:e(r.facebook.adminsId)}),void 0!==r.facebook.appId&&i.push({name:"fb:app_id",content:e(r.facebook.appId)}),void 0!==r.returnArray&&(a=r.returnArray),a?i:i.map((t=>{let e="<meta";for(let a in t)e+=` ${a}="${t[a]}"`;return e+="/>",e})).join("")};const e=t=>("string"!=typeof t&&(t+=""),"@"!==t.substr(0,1)&&(t="@"+t),t)},9459:(t,e,a)=>{"use strict";a.d(e,{Z:()=>c});var i=a(9596),r=a.n(i),n=a(76682),o=a(15895);const s=t=>e=>{e(function(t){return{type:o.VK,title:t}}(t))},d={uri:"","twitter:card":"summary_large_image"},p=(t,e)=>{if("object"==typeof t&&void 0===e)return p((0,n.getStore)().getState(),t);if("object"!=typeof t)return{};const a=t.localeId,i="是谁呼叫舰队";let o=t.server.origin,{uri:c=("undefined"!=typeof location?location.pathname:void 0),title:l=i,description:m=""}={...d,...e};const{subtitle:h,image:u}=e;if("object"==typeof c&&(c=c.pathname),"/"===c.substr(0,1)&&(c=c.substr(1)),l){Array.isArray(l)&&(l=l.filter((t=>void 0!==t&&""!==t)));const t=Array.isArray(l)&&l.length?l[0]:l;l=Array.isArray(l)?l.join(" / "):l,void 0!==h?(0,n.getStore)().dispatch(s({main:t,sub:h})):(0,n.getStore)().dispatch(s(t)),l!==i&&(l=l.replace(/\n/g,"")+" - "+i)}return m&&(m=m.replace(/\n/g,"")+" | "),m+="《舰队收藏》工具箱","/"!==o.substr(o.length-1,1)&&(o+="/"),{title:l,metas:r()({title:l,description:m,image:u||o+"launcher.jpg",url:o+c,type:"website",locale:a,siteName:i,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},c=p},56207:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var i,r=a(19494),n=a(26489),o=a(88767),s=a.n(o),d=a(97118);const p=(0,n.Z)({connect:t=>({mainKey:t.app.mainKey}),styles:a(55811)})(i=class extends r.Component{constructor(...t){var e;super(...t),(e="mounted")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}componentDidMount(){this.mounted=!0,setTimeout((()=>{this.mounted}))}componentWillUnmount(){this.mounted=!1}renderContent(t){const{className:e,children:a,mainKey:i,type:r,...n}=this.props;return delete n.dispatch,(0,d.jsx)("div",{className:s()({[e]:!0,"main-header":!0,[`mod-${r}`]:!!r}),...n,children:a})}render(){return this.renderContent(!0)}})||i},13545:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i=a(19494),r=a(88767),n=a.n(r),o=a(26489),s=a(97118);const d=(0,o.Z)({styles:a(79642)})((0,i.memo)((({className:t,classNameInner:e,component:a,tag:i,tagname:r,element:o,level:d,children:p,title:c,type:l,inherit:m,...h})=>{const u=a||i||r||o||(void 0===d?void 0:`h${d}`)||"div",b=t.split(" ")[0];h.children=p;const f=Array.isArray(p)?p[0]:p;switch("string"==typeof c?h["data-text"]=c:"string"==typeof f?h["data-text"]=f:"object"==typeof f&&"object"==typeof f.props&&"string"==typeof f.props.value&&(h["data-text"]=f.props.value),m&&(h["data-title-is-inherit"]=""),l){case"line-append":return(0,s.jsx)("div",{className:t,"data-title-type":l,"data-title-tag":u,children:(0,s.jsx)(u,{className:n()([b+"-child",e]),...h})});default:return(0,s.jsx)(u,{"data-title-type":l,className:t,...h})}})))},26674:(t,e,a)=>{"use strict";a.d(e,{Z:()=>d});var i,r=a(19494),n=a(26489),o=a(97118);const s={},d=(0,n.Z)({connect:t=>({locationBeforeTransitions:t.routing.locationBeforeTransitions})})(i=class extends r.Component{constructor(...t){var e;super(...t),(e="updating")in this?Object.defineProperty(this,e,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[e]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(t){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof t.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==t.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):t.rendering===this.props.rendering||t.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...t}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((e=>delete t[e])),(0,o.jsx)("div",{...t})}})||i},55811:(t,e,a)=>{"use strict";a.r(e),a.d(e,{wrapper:()=>i,css:()=>r,default:()=>n});const i="a42ada6c",r='.a42ada6c{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2);left:0;margin:-1rem -1.5rem .95rem;overflow:hidden;padding:0 1.5rem;position:-webkit-sticky;position:sticky;right:0;top:0;transition:inherit;z-index:1000}@media (max-width:850px){.a42ada6c{margin-left:-1.2rem;margin-right:-1.2rem;top:var(--nav-height)}}@media (max-width:660px){.a42ada6c{margin-left:-.6rem;margin-right:-.6rem;top:var(--nav-height)}}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.a42ada6c{-webkit-backdrop-filter:saturate(180%) blur(1rem);backdrop-filter:saturate(180%) blur(1rem);box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}@media (max-width:850px){.a42ada6c{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.a42ada6c{padding-left:.6rem;padding-right:.6rem}}.a42ada6c:after{background:rgba(237,240,242,.15);bottom:.05rem;height:.05rem}.a42ada6c:after,.a42ada6c:before{content:"";left:0;position:absolute;right:0}.a42ada6c:before{background:rgba(43,47,49,.85);bottom:0;top:0;z-index:-1}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.a42ada6c:before{opacity:.5}}',n={wrapper:i,css:r}},79642:(t,e,a)=>{"use strict";a.r(e),a.d(e,{wrapper:()=>i,css:()=>r,default:()=>n});const i="a4aa4012",r='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',n={wrapper:i,css:r}}}]);