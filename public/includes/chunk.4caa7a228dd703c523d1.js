"use strict";(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[787],{54596:(e,t,i)=>{i.d(t,{Z:()=>c});var a,r=i(19494),s=i(88767),n=i.n(s),l=i(240),o=i(97118);function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const c=(0,l.Z)({styles:i(97010)})(a=class extends r.Component{constructor(...e){super(...e),d(this,"state",{isLoading:!0,isLoaded:!1,isError:!1}),d(this,"onLoad",this.onLoad.bind(this)),d(this,"onError",this.onError.bind(this))}onLoad(){this.setState({isLoading:!1,isLoaded:!0})}onError(){this.setState({isLoading:!1,isError:!0})}render(){const{className:e,classNameImg:t,children:i,tag:a,component:r,src:s,img:l,pic:d,picture:c,styleImg:m,...h}=this.props,p=a||r||"span",b=s||l||d||c||void 0;return(0,o.jsxs)(p,{className:n()({[e]:!0,"is-loading":this.state.isLoading,"is-loaded":this.state.isLoaded,"is-error":this.state.isError}),...h,children:[(0,o.jsx)("img",{className:n()(["img",t]),src:b,onLoad:this.onLoad,onError:this.onError,style:m,loading:"lazy",alt:a}),i]})}})||a},55445:(e,t,i)=>{i.d(t,{Z:()=>h});var a,r=i(19494),s=(i(99245),i(88767)),n=i.n(s),l=i(240),o=i(81648),d=i(56207),c=i(13545),m=i(97118);const h=(0,l.Z)({styles:i(8436)})(a=class extends r.Component{constructor(e){super(e),this.state={currentIndex:e.defaultIndex||0}}renderTab(e,t){const{urlBase:i,onTabChange:a,tabLink:r=!0}=this.props;let s,l;Array.isArray(e)?(s=e[0],l=e[1]):"object"==typeof e?(s=e.tabId,l=e.tabName):(s=t,l=e);const d=r?`${i}${t?`/${s}`:""}`:void 0;{const e=void 0===this.props.currentIndex?this.state.currentIndex:this.props.currentIndex,i=r?"a":"span";return(0,m.jsx)(i,{href:d,className:n()(["link","tab",{on:t===e}]),onClick:e=>{this.setState({currentIndex:t}),"function"==typeof a&&(e.preventDefault(),a(s,t)),d&&(0,o.Z)(d)},children:l},t)}}render(){const{className:e,title:t,subtitle:i,tabs:a,children:r,...s}=this.props;return["urlBase","currentIndex","defaultIndex","onTabChange","tabLink"].forEach((e=>delete s[e])),(0,m.jsxs)(d.Z,{className:n()([e,{"has-subtitle":!!i,"has-tabs":!!a,"has-only-title":!r}]),type:"infos",...s,children:[(0,m.jsxs)("div",{className:"infos",children:[t&&(0,m.jsxs)("div",{className:"title",children:[i&&(0,m.jsx)("span",{className:"subtitle",children:i}),(0,m.jsx)(c.Z,{tag:"h1",className:"title-h1",children:t})]}),r]}),a&&(0,m.jsx)("div",{className:"tabs",children:(0,m.jsx)("div",{className:"wrapper",children:a.map(this.renderTab.bind(this))})}),!a&&(0,m.jsx)("div",{className:"tabs-placeholder"})]})}})||a},81485:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(240),r=i(13545),s=i(97118);const n=(0,a.Z)({styles:i(15645)})((({title:e,titleType:t,children:i,...a})=>(0,s.jsxs)("div",{...a,children:[null==e?null:"object"!=typeof e&&"function"!=typeof e?(0,s.jsx)(r.Z,{tag:"h2",className:"title",type:t,inherit:!0,children:e}):e,i]})))},52776:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(88767),r=i.n(a),s=i(240),n=i(26674),l=i(97118);const o=(0,s.Z)({styles:i(23508)})((({className:e,"has-tabs":t=!0,...i})=>(0,l.jsx)(n.Z,{className:r()({[e]:!0,"has-tabs":t}),...i})))},95172:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(17911),r=i(19494),s=i(240),n=i(10620),l=i(9459),o=i(52776),d=i(81485),c=i(68253),m=i(13545);const h=e=>Array.isArray(e.relation.cv)&&e.relation.cv.length?"Seiyuu":Array.isArray(e.relation.illustrator)&&e.relation.illustrator.length?"Artist":"";var p=i(55445),b=i(97118);const f=(0,s.Z)({connect:e=>({localeId:e.localeId}),styles:i(28698)})((0,r.memo)((({className:e,entity:t,localeId:i})=>t?(0,b.jsx)(p.Z,{className:e,title:t._name,subtitle:h(t),children:"ja"!==i&&(0,b.jsx)("span",{className:"name-ja",children:t.getName("ja_jp")})}):null)));var g=i(54596),x=i(98954);const u=(0,s.Z)({styles:i(2578)})((0,r.memo)((({className:e,entity:t})=>(0,b.jsx)(d.Z,{className:e,children:(0,b.jsx)(g.Z,{className:"picture",src:(0,x.Z)("entity",t.id,"2")})}))));var w;const y=e=>Array.isArray(e.relation.cv)&&e.relation.cv.length,v=(0,s.Z)({connect:!0,pageinfo:(e,t)=>{const i="object"==typeof t.params?t.params.id:void 0;if(void 0===i)return{};const a=n.db.entities[i],r=a._name;return(0,l.Z)(e,{title:r,subtitle:h(a),description:r+", "+(y(a)?"Seiyuu":"Artist")})},styles:i(40098)})(w=class extends r.Component{get data(){return!this._data&&this.props.params.id&&(this._data=n.db.entities[this.props.params.id]),this._data||{}}getList(e){return Array.isArray(this.data.relation[e])&&this.data.relation[e].length?this.data.relation[e].map((e=>e[e.length-1])):[]}render(){const e=y(this.data);return(0,b.jsxs)(o.Z,{className:this.props.className,"has-tabs":!1,children:[(0,b.jsx)(f,{entity:this.data}),e&&(0,b.jsx)(u,{entity:this.data,className:"entityinfo entityinfo-pictures"}),(0,b.jsx)(j,{type:"casts",list:this.getList("cv")}),(0,b.jsx)(j,{type:"illustrates",list:this.getList("illustrator"),extraIllust:!0}),(0,b.jsx)(N,{links:this.data.links})]})}})||w,j=({list:e,type:t,...i})=>e.length?(0,b.jsx)(d.Z,{title:(0,b.jsxs)("div",{className:"title",children:[(0,b.jsx)(m.Z,{tag:"h2",className:"title-inline",children:(0,a.Z)({casts:"Casts",illustrates:"Illustrates",links:"Links"},t)}),(0,b.jsxs)("small",{className:"count",children:["(",e.length,")"]})]}),className:`entityinfo entityinfo-list entityinfo-${t}`,children:(0,b.jsx)(c.Z,{list:e,type:"names",className:"list",sort:!1,...i})}):null,N=({links:e})=>Array.isArray(e)&&(e=e.filter((e=>!!e.name))).length?(0,b.jsx)(d.Z,{title:"Links",className:"entityinfo entityinfo-links",children:e.map(((e,t)=>(0,b.jsx)("a",{className:"item",href:e.url,target:"_blank",rel:"noreferrer",children:e.name},t)))}):null},97010:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="a144a827",r='.a144a827{position:relative}.a144a827.is-loading>.img{opacity:0;z-index:-1000}.a144a827.is-loading:after{-webkit-animation:spinning 1s linear infinite;animation:spinning 1s linear infinite;border:.1rem solid hsla(204,15%,94%,.075);border-radius:50%;border-top-color:rgba(64,196,255,.75);content:"";height:2rem;left:50%;margin-left:-1rem;margin-top:-1rem;position:absolute;top:50%;-webkit-transform-origin:50%;transform-origin:50%;width:2rem;z-index:-1}',s={wrapper:a,css:r}},8436:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="eecbb634",r='.eecbb634.mod-infos{padding-top:1rem}@media (max-width:850px){.eecbb634.mod-infos{padding-top:0}}@media (min-width:851px) and (max-height:760px){.eecbb634.mod-infos{padding-top:.75rem}}.eecbb634 .infos{color:rgba(185,205,214,.55);font-size:.7rem;line-height:1.15rem;margin:0 0 .7rem;min-height:2.3rem;position:relative}@media (max-width:850px){.eecbb634 .infos{display:none}}@media (min-width:851px) and (max-height:760px){.eecbb634 .infos{margin-bottom:.4rem}}.eecbb634 .title{border-right:.05rem solid hsla(204,15%,94%,.15);color:#fff;display:block;float:left;font-size:1.3rem;font-weight:400;height:2.3rem;line-height:2.3rem;margin:0 1rem 0 0;overflow:hidden;padding:0 1rem 0 0}.eecbb634 .title-h1{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}.eecbb634 .subtitle{display:block;font-size:.6rem;line-height:1em;margin-bottom:.2rem;margin-top:.1rem}@media (min-width:851px) and (max-height:760px){.eecbb634 .subtitle{margin-bottom:.2rem;margin-top:0}}.eecbb634.has-subtitle .title{font-size:1.3rem;line-height:1.4rem}.eecbb634.has-only-title .title{border-right:0}.eecbb634 .tabs{clear:both;font-size:.8rem;height:3rem;line-height:3rem;margin-left:-1.5rem;margin-right:-1.5rem;overflow:hidden;position:relative;z-index:5}@media (max-width:850px){.eecbb634 .tabs{margin-left:-1.2rem;margin-right:-1.2rem}}@media (max-width:850px) and all and (max-width:660px){.eecbb634 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (max-width:660px){.eecbb634 .tabs{margin-left:-.6rem;margin-right:-.6rem}}@media (min-width:851px) and (max-height:760px){.eecbb634 .tabs{height:2.4rem;line-height:2.4rem}}.eecbb634 .tabs>.wrapper{display:-webkit-flex;display:flex;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;height:4rem;overflow:hidden;overflow-x:auto;padding-left:1.5rem;padding-right:1.5rem;position:relative}@media (max-width:850px){.eecbb634 .tabs>.wrapper{padding-left:1.2rem;padding-right:1.2rem}}@media (max-width:660px){.eecbb634 .tabs>.wrapper{padding-left:.6rem;padding-right:.6rem}}.eecbb634 .tabs>.wrapper:after{content:"";-webkit-flex:none;flex:none;width:1.5rem}@media (max-width:850px){.eecbb634 .tabs>.wrapper:after{width:1.2rem}}@media (max-width:660px){.eecbb634 .tabs>.wrapper:after{width:.6rem}}.eecbb634 .tab{border-bottom:.1rem solid transparent;color:rgba(185,205,214,.55);display:inline-block;-webkit-flex:none;flex:none;height:2.95rem;margin-right:2em;position:relative;text-align:center}html.is-hover .eecbb634 .tab:hover{color:#fff}.eecbb634 .tab:active,html.is-hover .eecbb634 .tab:hover:active{color:hsla(0,0%,100%,.5)}.eecbb634 .tab.on{border-bottom-color:#40c4ff;color:#fff;pointer-events:none;z-index:-1}.eecbb634 .tab:last-child{margin-right:0}@media (min-width:851px) and (max-height:760px){.eecbb634 .tab{height:2.35rem}}.eecbb634 .tabs-placeholder{height:.3rem}@media (max-width:850px){.eecbb634 .tabs-placeholder{display:none}}',s={wrapper:a,css:r}},15645:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="bba9cbde",r=".bba9cbde{border-top:2rem solid transparent}.bba9cbde>.title{display:block;margin-bottom:.5rem;margin-top:0}.bba9cbde>.title[data-title-tag=h2],.bba9cbde>h2.title{font-size:.9rem;line-height:1.1rem}.bba9cbde .title-inline{display:inline-block;font-size:medium;line-height:normal;margin:0}",s={wrapper:a,css:r}},23508:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="c314482c",r=".c314482c{margin-top:-2.8rem}@media (max-width:850px){.c314482c,.c314482c:first-child{margin-top:-2rem}}",s={wrapper:a,css:r}},28698:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="f3188f4f",r=".f3188f4f .name-ja{bottom:0;position:absolute}",s={wrapper:a,css:r}},2578:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="f03f9946",r=".f03f9946{max-width:13rem;position:relative;width:13rem}.f03f9946 .picture{border-radius:.5rem;display:block;height:0;overflow:hidden;padding-bottom:100%;position:relative}.f03f9946 .picture .img{display:block;position:relative;width:100%}",s={wrapper:a,css:r}},40098:(e,t,i)=>{i.r(t),i.d(t,{wrapper:()=>a,css:()=>r,default:()=>s});const a="ff37ec57",r=".ff37ec57 .entityinfo-pictures{float:right;margin-left:1rem}@media (max-width:1440px){.ff37ec57 .entityinfo-pictures{width:20vw}}@media (max-width:850px){.ff37ec57 .entityinfo-pictures{float:none;margin-bottom:auto;margin-left:auto;margin-right:auto;width:auto}}.ff37ec57 .entityinfo-list .count{padding-left:.5em}.ff37ec57 .entityinfo-list .list{clear:none}.ff37ec57 .entityinfo-links{margin-right:-1rem;overflow:hidden}.ff37ec57 .entityinfo-links .item{display:block;float:left;margin-right:1rem}",s={wrapper:a,css:r}}}]);