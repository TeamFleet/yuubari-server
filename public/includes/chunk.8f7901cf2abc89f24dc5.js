(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[586],{54596:(e,t,i)=>{"use strict";i.d(t,{Z:()=>m});var a,r=i(19494),s=i(88767),n=i.n(s),l=i(240),o=i(97118);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const m=(0,l.Z)({styles:i(96132)})(a=class extends r.Component{constructor(...e){super(...e),d(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),d(this,"onLoad",this.onLoad.bind(this)),d(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:i,tag:a,component:r,src:s,img:l,pic:d,picture:m,styleImg:c,...h}=this.props,b=a||r||"span",p=s||l||d||m||void 0;return(0,o.jsxs)(b,{className:n()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...h,children:[(0,o.jsx)("img",{className:n()(["img",t]),src:p,onLoad:this.onLoad,onError:this.onError,style:c,loading:"lazy",alt:a}),i]})}})||a},55445:(e,t,i)=>{"use strict";i.d(t,{Z:()=>h});var a,r=i(19494),s=(i(99245),i(88767)),n=i.n(s),l=i(240),o=i(81648),d=i(56207),m=i(13545),c=i(97118);const h=(0,l.Z)({styles:i(1468)})(a=class extends r.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:i,onTabChange:a,tabLink:r=!0}=this.props;let s,l;Array.isArray(e)?(s=e[0],l=e[1]):"object"==typeof e?(s=e.tabId,l=e.tabName):(s=t,l=e);const d=r?`${i}${t?`/${s}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,i=r?"a":"span";return(0,c.jsx)(i,{href:d,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof a&&(e.preventDefault(),a(s,t)),d&&(0,o.Z)(d)},children:l},t)}}render(){const{className:e,title:t,subtitle:i,tabs:a,children:r,...s}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete s[e])),(0,c.jsxs)(d.Z,{className:n()([e,{"has-subtitle":!!i,"has-tabs":!!a,"has-only-title":!r}]),type:"infos",...s,children:[(0,c.jsxs)("div",{className:"infos",children:[t&&(0,c.jsxs)("div",{className:"title",children:[i&&(0,c.jsx)("span",{className:"subtitle",children:i}),(0,c.jsx)(m.Z,{tag:"h1",className:"title-h1",children:t})]}),r]}),a&&(0,c.jsx)("div",{className:"tabs",children:(0,c.jsx)("div",{className:"wrapper",children:a.map(this.renderTab.bind(this))})}),!a&&(0,c.jsx)("div",{className:"tabs-placeholder"})]})}})||a},81485:(e,t,i)=>{"use strict";i.d(t,{Z:()=>n});var a=i(240),r=i(13545),s=i(97118);const n=(0,a.Z)({styles:i(51692)})((({title:e,titleType:t,children:i,...a})=>(0,s.jsxs)("div",{...a,children:[null==e?null:"object"!=typeof e&&"function"!=typeof e?(0,s.jsx)(r.Z,{tag:"h2",className:"title",type:t,inherit:!0,children:e}):e,i]})))},52776:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var a=i(88767),r=i.n(a),s=i(240),n=i(26674),l=i(97118);const o=(0,s.Z)({styles:i(32591)})((({className:e,"has-tabs":t=!0,...i})=>(0,l.jsx)(n.Z,{className:r()({[e]:!0,"has-tabs":t}),...i})))},95172:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>v});var a=i(17911),r=i(19494),s=i(240),n=i(10620),l=i(9459),o=i(52776),d=i(81485),m=i(68253),c=i(13545);const h=e=>Array.isArray(e.relation.cv)&&e.relation.cv.length?"CV":Array.isArray(e.relation.illustrator)&&e.relation.illustrator.length?"イラストレーター":"";var b=i(55445),p=i(97118);const f=(0,s.Z)({connect:e=>({localeId:e.localeId}),styles:i(17336)})((0,r.memo)((({className:e,entity:t,localeId:i})=>t?(0,p.jsx)(b.Z,{className:e,title:t._name,subtitle:h(t),children:"ja"!==i&&(0,p.jsx)("span",{className:"name-ja",children:t.getName("ja_jp")})}):null)));var g=i(54596),x=i(98954);const u=(0,s.Z)({styles:i(38496)})((0,r.memo)((({className:e,entity:t})=>(0,p.jsx)(d.Z,{className:e,children:(0,p.jsx)(g.Z,{className:"picture",src:(0,x.Z)("entity",t.id,"2")})}))));var w;const y=e=>Array.isArray(e.relation.cv)&&e.relation.cv.length,v=(0,s.Z)({connect:!0,pageinfo:(e,t)=>{const i="object"==typeof t.params?t.params.id:void 0;if(void 0===i)return{};const a=n.db.entities[i],r=a._name;return(0,l.Z)(e,{title:r,subtitle:h(a),description:r+", "+(y(a)?"CV":"イラストレーター")})},styles:i(89875)})(w=class extends r.Component{get data(){return!this._data&&this.props.params.id&&(this._data=n.db.entities[this.props.params.id]),this._data||{}}getList(e){return Array.isArray(this.data.relation[e])&&this.data.relation[e].length?this.data.relation[e].map((e=>e[e.length-1])):[]}render(){const e=y(this.data);return(0,p.jsxs)(o.Z,{className:this.props.className,"has-tabs":!1,children:[(0,p.jsx)(f,{entity:this.data}),e&&(0,p.jsx)(u,{entity:this.data,className:"entityinfo entityinfo-pictures"}),(0,p.jsx)(j,{type:"casts",list:this.getList("cv")}),(0,p.jsx)(j,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),(0,p.jsx)(N,{links:this.data.links})]})}})||w,j=({list:e,type:t,...i})=>e.length?(0,p.jsx)(d.Z,{title:(0,p.jsxs)("div",{className:"title",children:[(0,p.jsx)(c.Z,{tag:"h2",className:"title-inline",children:(0,a.Z)({casts:"Casts",illustrates:"Illustrates",links:"Links"},t)}),(0,p.jsxs)("small",{className:"count",children:["(",e.length,")"]})]}),className:`entityinfo entityinfo-list entityinfo-${t}`,children:(0,p.jsx)(m.Z,{list:e,type:"names",className:"list",sort:!1,...i})}):null,N=({links:e})=>Array.isArray(e)&&(e=e.filter((e=>!!e.name))).length?(0,p.jsx)(d.Z,{title:"Links",className:"entityinfo entityinfo-links",children:e.map(((e,t)=>(0,p.jsx)("a",{className:"item",href:e.url,target:"_blank",rel:"noreferrer",children:e.name},t)))}):null},96132:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="b217b232",r='.b217b232{position:relative}.b217b232.is-loading>.img{opacity:0;z-index:-1000}.b217b232.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid rgba(237,240,242,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',s={wrapper:a,css:r}},1468:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="bb5a848e",r='.bb5a848e.mod-infos{padding-top:1rem}@media (max-width:850px){.bb5a848e.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.bb5a848e.mod-infos{padding-top:.75rem}}.bb5a848e .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.bb5a848e .infos{display:none}}@media (min-width:851px) and (max-height:760px){.bb5a848e .infos{margin-bottom:.4rem}}.bb5a848e .title{border-right:.05rem solid rgba(237,240,242,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.bb5a848e .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.bb5a848e .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.bb5a848e .subtitle{margin-bottom:.2rem;margin-top:0}}.bb5a848e.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.bb5a848e.has-only-title .title{border-right:0}.bb5a848e .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.bb5a848e .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.bb5a848e .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.bb5a848e .tabs{height:2.4rem;line-height:2.4rem}}.bb5a848e .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.bb5a848e .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.bb5a848e .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.bb5a848e .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.bb5a848e .tabs>.wrapper:after{width:.6rem}}.bb5a848e .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .bb5a848e .tab:hover{color:#fff}.bb5a848e .tab:active,html.is-hover .bb5a848e .tab:hover:active{color:hsla(0,0%,100%,.5)}.bb5a848e .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.bb5a848e .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.bb5a848e .tab{height:2.35rem}}.bb5a848e .tabs-placeholder{height:.3rem}@media (max-width:850px){.bb5a848e .tabs-placeholder{display:none}}',s={wrapper:a,css:r}},51692:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="bba9cbde",r=".bba9cbde{border-top:2rem solid transparent}.bba9cbde>.title{display:block;margin-bottom:.5rem;margin-top:0}.bba9cbde>.title[data-title-tag=h2],.bba9cbde>h2.title{font-size:.9rem;line-height:1.1rem}.bba9cbde .title-inline{display:inline-block;font-size:medium;line-height:normal;margin:0}",s={wrapper:a,css:r}},32591:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="c314482c",r=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",s={wrapper:a,css:r}},17336:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="f3188f4f",r=".f3188f4f .name-ja{bottom:0;position:absolute}",s={wrapper:a,css:r}},38496:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="f03f9946",r=".f03f9946{max-width:13rem;position:relative;width:13rem}.f03f9946 .picture{border-radius:.5rem;display:block;height:0;overflow:hidden;padding-bottom:100%;position:relative}.f03f9946 .picture .img{display:block;position:relative;width:100%}",s={wrapper:a,css:r}},89875:(e,t,i)=>{"use strict";i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="ff37ec57",r=".ff37ec57 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ff37ec57 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ff37ec57 .entityinfo-pictures{float:none;margin-bottom:auto;margin-left:auto;margin-right:auto;width:auto}}.ff37ec57 .entityinfo-list .count{padding-left:.5em}.ff37ec57 .entityinfo-list .list{clear:none}.ff37ec57 .entityinfo-links{margin-right:-1rem;overflow:hidden}.ff37ec57 .entityinfo-links .item{display:block;float:left;margin-right:1rem}",s={wrapper:a,css:r}}}]);