(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[993],{9596:e=>{e.exports=(e={},i=!1)=>{let a=[],r=Object.assign({charset:"utf-8",twitter:{},facebook:{}},e);return"undefined"!=typeof window&&(void 0===r.title&&document.title&&(r.title=document.title),void 0===r.url&&"undefined"!=typeof location&&"about"!==location.href.substr(0,5)&&(r.url=location.href)),void 0!==r.charset&&a.push({charset:r.charset}),void 0!==r.title&&(a.push({itemprop:"name",content:r.title}),a.push({name:"twitter:title",content:r.title}),a.push({name:"og:title",content:r.title})),void 0!==r.description&&(a.push({name:"description",content:r.description}),a.push({itemprop:"description",content:r.description}),a.push({itemprop:"twitter:description",content:r.description}),a.push({itemprop:"og:description",content:r.description})),void 0!==r.image&&(a.push({name:"image",content:r.image}),a.push({itemprop:"image",content:r.image}),a.push({itemprop:"twitter:image:src",content:r.image}),a.push({itemprop:"og:image",content:r.image})),void 0!==r.video&&(a.push({name:"twitter:player",content:r.video}),a.push({itemprop:"og:video",content:r.video})),void 0!==r.url&&a.push({name:"og:url",content:r.url}),void 0!==r.siteName&&a.push({name:"og:site_name",content:r.siteName}),void 0!==r.locale&&a.push({name:"og:locale",content:r.locale}),void 0!==r.type&&a.push({name:"og:type",content:r.type}),void 0!==r.twitter.card&&a.push({name:"twitter:card",content:r.twitter.card}),void 0!==r.twitter.siteCreator&&a.push({name:"twitter:site",content:t(r.twitter.siteCreator)}),void 0!==r.twitter.author&&a.push({name:"twitter:creator",content:t(r.twitter.author)}),void 0!==r.facebook.adminsId&&a.push({name:"fb:admins",content:t(r.facebook.adminsId)}),void 0!==r.facebook.appId&&a.push({name:"fb:app_id",content:t(r.facebook.appId)}),void 0!==r.returnArray&&(i=r.returnArray),i?a:a.map((e=>{let t="<meta";for(let i in e)t+=` ${i}="${e[i]}"`;return t+="/>",t})).join("")};const t=e=>("string"!=typeof e&&(e+=""),"@"!==e.substr(0,1)&&(e="@"+e),e)},9459:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var a=i(9596),r=i.n(a),n=i(76682),o=i(15895);const s=e=>t=>{t(function(e){return{type:o.VK,title:e}}(e))},d={uri:"","twitter:card":"summary_large_image"},p=(e,t)=>{if("object"==typeof e&&void 0===t)return p((0,n.getStore)().getState(),e);if("object"!=typeof e)return{};const i=e.localeId,a="是谁呼叫舰队";let o=e.server.origin,{uri:l=("undefined"!=typeof location?location.pathname:void 0),title:c=a,description:m=""}={...d,...t};const{subtitle:u,image:h}=t;if("object"==typeof l&&(l=l.pathname),"/"===l.substr(0,1)&&(l=l.substr(1)),c){Array.isArray(c)&&(c=c.filter((e=>void 0!==e&&""!==e)));const e=Array.isArray(c)&&c.length?c[0]:c;c=Array.isArray(c)?c.join(" / "):c,void 0!==u?(0,n.getStore)().dispatch(s({main:e,sub:u})):(0,n.getStore)().dispatch(s(e)),c!==a&&(c=c.replace(/\n/g,"")+" - "+a)}return m&&(m=m.replace(/\n/g,"")+" | "),m+="《舰队收藏》工具箱","/"!==o.substr(o.length-1,1)&&(o+="/"),{title:c,metas:r()({title:c,description:m,image:h||o+"launcher.jpg",url:o+l,type:"website",locale:i,siteName:a,twitter:{card:"summary",siteCreator:"Diablohu"}},!0)}},l=p},56207:(e,t,i)=>{"use strict";i.d(t,{Z:()=>p});var a,r=i(19494),n=i(240),o=i(88767),s=i.n(o),d=i(97118);const p=(0,n.Z)({connect:e=>({mainKey:e.app.mainKey}),styles:i(54599)})(a=class extends r.Component{constructor(...e){var t;super(...e),(t="mounted")in this?Object.defineProperty(this,t,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[t]=false}componentDidMount(){this.mounted=!0,setTimeout((()=>{this.mounted}))}componentWillUnmount(){this.mounted=!1}renderContent(e){const{className:t,children:i,mainKey:a,type:r,...n}=this.props;return delete n.dispatch,(0,d.jsx)("div",{className:s()({[t]:!0,"main-header":!0,[`mod-${r}`]:!!r}),...n,children:i})}render(){return this.renderContent(!0)}})||a},13545:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var a=i(19494),r=i(88767),n=i.n(r),o=i(240),s=i(97118);const d=(0,o.Z)({styles:i(52666)})((0,a.memo)((({className:e,classNameInner:t,component:i,tag:a,tagname:r,element:o,level:d,children:p,title:l,type:c,inherit:m,...u})=>{const h=i||a||r||o||(void 0===d?void 0:`h${d}`)||"div",f=e.split(" ")[0];u.children=p;const b=Array.isArray(p)?p[0]:p;switch("string"==typeof l?u["data-text"]=l:"string"==typeof b?u["data-text"]=b:"object"==typeof b&&"object"==typeof b.props&&"string"==typeof b.props.value&&(u["data-text"]=b.props.value),m&&(u["data-title-is-inherit"]=""),c){case"line-append":return(0,s.jsx)("div",{className:e,"data-title-type":c,"data-title-tag":h,children:(0,s.jsx)(h,{className:n()([f+"-child",t]),...u})});default:return(0,s.jsx)(h,{"data-title-type":c,className:e,...u})}})))},26674:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var a,r=i(19494),n=i(240),o=i(97118);const s={},d=(0,n.Z)({connect:e=>({locationBeforeTransitions:e.routing.locationBeforeTransitions})})(a=class extends r.Component{constructor(...e){var t;super(...e),(t="updating")in this?Object.defineProperty(this,t,{value:false,enumerable:!0,configurable:!0,writable:!0}):this[t]=false}restoreScrollY(){void 0!==s[this.props.pathname]&&(window.scrollTo(void 0,s[this.props.pathname]),delete s[this.props.pathname])}shouldComponentUpdate(e){return"object"==typeof this.props.locationBeforeTransitions&&"object"==typeof e.locationBeforeTransitions&&this.props.locationBeforeTransitions.pathname!==e.locationBeforeTransitions.pathname?(s[this.props.locationBeforeTransitions.pathname]=window.scrollY,!1):e.rendering===this.props.rendering||e.rendering?(this.updating=!0,!0):(this.restoreScrollY(),!1)}componentDidMount(){"POP"===this.props.locationBeforeTransitions.action?this.props.rendering||this.restoreScrollY():delete s[this.props.pathname]}componentDidUpdate(){this.updating=!1}render(){const{...e}=this.props;return["locationBeforeTransitions","rendering","dispatch"].forEach((t=>delete e[t])),(0,o.jsx)("div",{...e})}})||a},54599:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>n});const a="eeeef807",r='.eeeef807{box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.2);left:0;margin:-1rem -1.5rem .95rem;overflow:hidden;padding:0 1.5rem;position:-webkit-sticky;position:sticky;right:0;top:0;transition:inherit;z-index:1000}@media (max-width:850px){.eeeef807{margin-left:-1.2rem;margin-right:-1.2rem;top:2.7rem}}@media (max-width:660px){.eeeef807{margin-left:-.6rem;margin-right:-.6rem;top:2.4rem}}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.eeeef807{-webkit-backdrop-filter:saturate(180%) blur(1rem);backdrop-filter:saturate(180%) blur(1rem);box-shadow:0 .5rem 1rem -.5rem rgba(0,0,0,.3)}}@media (max-width:850px){.eeeef807{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.eeeef807{padding-left:.6rem;padding-right:.6rem}}.eeeef807:after{background:rgba(237,240,242,.15);bottom:.05rem;height:.05rem}.eeeef807:after,.eeeef807:before{content:"";left:0;position:absolute;right:0}.eeeef807:before{background:rgba(43,47,49,.85);bottom:0;top:0;z-index:-1}@supports ((-webkit-backdrop-filter:saturate(180%) blur(20px)) or (backdrop-filter:saturate(180%) blur(20px))){.eeeef807:before{opacity:.5}}',n={wrapper:a,css:r}},52666:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>n});const a="a4aa4012",r='.a4aa4012{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;margin-bottom:1rem}.a4aa4012[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012:last-child{margin-bottom:0}.a4aa4012[data-title-is-inherit] .a4aa4012[data-title-type=inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}.a4aa4012[data-title-type=inline-block]{display:inline-block}.a4aa4012[data-title-type=line-append]{-webkit-text-fill-color:initial;background:none transparent;-webkit-background-clip:initial;overflow:hidden}.a4aa4012[data-title-type=line-append] .a4aa4012-child{-webkit-text-fill-color:transparent;background:linear-gradient(180deg,#d0d9dd 0,#edf0f2 14%,#fff 40%,#b0bec4 62%,#edf0f2 77%,#d0d9dd);-webkit-background-clip:text!important;display:inline-block;padding-right:1em;position:relative}.a4aa4012[data-title-type=line-append] .a4aa4012-child[data-text]:before{background:0 0;content:attr(data-text);display:inline-block;position:absolute;text-shadow:0 0 .05rem transparent,0 .05rem .25rem #253137;z-index:-1}.a4aa4012[data-title-type=line-append] .a4aa4012-child:after{background:rgba(237,240,242,.15);content:"";height:.05rem;left:100%;pointer-events:none;position:absolute;top:50%;width:100vw}.a4aa4012-child[data-title-is-inherit]{display:inline-block;font-size:inherit;line-height:inherit;margin:0}',n={wrapper:a,css:r}}}]);