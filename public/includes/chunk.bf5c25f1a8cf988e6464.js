(self.webpackChunkwhocallsthefleet_yuubari=self.webpackChunkwhocallsthefleet_yuubari||[]).push([[591],{66624:(e,a,s)=>{"use strict";s.d(a,{xN:()=>w,_B:()=>Z,Ux:()=>v.Z});var t,r,i=s(17911),l=s(19494),d=s(240),n=s(61677),o=s(25348),c=s(29381),m=s(71007),p=s(79310),u=s.n(p),h=s(61329),b=s(75117),f=s(22372),g=s(43173),x=s(10620),y=s(97118),v=s(7091);const j=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];let w=(0,d.Z)({styles:s(43397)})(t=class extends l.Component{renderItem(e,a){let[s,t]=e;return t&&(t=(0,f.Z)(t.map((e=>(0,b.Z)(e))))),(0,y.jsxs)("div",{className:"item",children:[(0,y.jsx)("div",{className:"days",children:j.map(((e,a)=>(0,y.jsx)("span",{className:"day"+(s[a]?" on":""),children:(0,i.Z)({Sunday:"日",Monday:"一",Tuesday:"二",Wednesday:"三",Thurday:"四",Friday:"五",Saturday:"六"},e)},a)))}),(0,y.jsxs)("div",{className:"ships"+(t?"":" is-any"),children:[t&&t.map(((e,a)=>(0,y.jsx)(n.Z,{className:"ship color-alt",to:(0,h.Z)("ship",e.id),children:e.getName("")},a))),!t&&"任意秘书舰"]})]},a)}render(){var e;let a=this.props.data||this.props.req||this.props.require;return"object"==typeof a&&a.req&&(a=a.req),Array.isArray(a)&&a.length||(a=[[[],!1]]),(0,y.jsx)("div",{className:this.props.className,"data-day":null!==(e=this.props.day)&&void 0!==e?e:u()().getDay(),children:a.map(this.renderItem.bind(this))})}})||t;const N=e=>((e=>void 0===e||-1===e)(e)&&(e=void 0),(0,m.Z)(e));class _ extends l.Component{constructor(e){super(e),this.data=e.data||e.resource||e.resources,this.upgradable=e.upgradable,"object"==typeof this.data&&this.data.resource&&(void 0===this.upgradable&&Array.isArray(this.data.upgrade)&&this.data.upgrade.length&&(this.upgradable=!0),this.data=this.data.resource),Array.isArray(this.data)||(this.data=[]),this.data.length<3&&(this.upgradable=!1)}}let Z=(0,d.Z)({styles:s(79274)})(r=class extends _{renderCategory(e,a){const s="string"==typeof e?(0,i.Z)({any_2nd_ship:"任意秘书舰",resources:"资材消耗",upgrading:"升级"},e):`★+${e} ~ `+(0===e?"+6":"MAX");let t=null,r=null;if(a){switch(e){case"resources":t=g.Z.map(((e,s)=>{const t=N(a[s]);return(0,y.jsx)(o.Z,{className:"item item-resource",stat:e,children:t},e)}));break;default:t=[(0,y.jsxs)(o.Z,{className:"item item-resource",stat:"dev",children:[N(a[0]),(0,y.jsxs)("span",{className:"guaranteed",children:["(",N(a[1]),")"]})]},"dev"),(0,y.jsxs)(o.Z,{className:"item item-resource",stat:"screw",children:[N(a[2]),(0,y.jsxs)("span",{className:"guaranteed",children:["(",N(a[3]),")"]})]},"screw")]}const s=Array.isArray(a[4])?a[4].filter((e=>0!==e[1])):a[4]?[[a[4],a[5]]]:[];s.length&&(r=(0,y.jsx)("span",{className:"equipments",children:s.map((e=>{if(isNaN(e[0])){const a=parseInt(e[0].substr(e[0].indexOf("_")+1));return(0,y.jsxs)("span",{className:"equipment equipment-other color-alt",children:[x.db.consumables[a]._name,(0,y.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})]},e[0])}return(0,y.jsx)(c.Z,{equipment:e[0],className:"equipment color-alt",children:(0,y.jsxs)("span",{className:"guaranteed",children:["x",N(e[1])]})},e[0])}))}))}else t=(0,y.jsx)("span",{className:"item disabled",children:"-"});return(0,y.jsxs)("div",{className:"category",children:[(0,y.jsx)("span",{className:"category-title",children:s}),t,r]})}render(){return(0,y.jsxs)("div",{className:this.props.className,children:[this.renderCategory("resources",this.data[0]||[void 0,void 0,void 0,void 0]),this.renderCategory(0,this.data[1]||[void 0,void 0,void 0,void 0,void 0]),this.renderCategory(6,this.data[2]||[void 0,void 0,void 0,void 0,void 0]),this.upgradable&&this.renderCategory("upgrading",this.data[3]),!this.upgradable&&this.renderCategory("upgrading",!1)]})}})||r},95980:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var t=s(17911),r=s(19494),i=s(240),l=s(9459),d=s(10620),n=s(52776),o=s(80936),c=s(97118);const m=["infos","bonuses","refittable"],p={};m.forEach(((e,a)=>{p[a?e:"index"]=s(74496)(`./${e}.jsx`).default}));const u=(0,i.Z)({pageinfo:(e,a)=>{const s="object"==typeof a.params?a.params.id:void 0,r="object"==typeof a.params?a.params.tab:void 0;if(void 0===s)return{};const i=d.db.equipments[s];if(!i)return{};const n=i._name;return(0,l.Z)(e,{title:[n,void 0===r||r===m[0]?void 0:(0,t.Z)({infos:"信息",refittable:"可装备于...",availability:"获取方式",bonuses:"属性加成",facts:{craftable:"可开发",uncraftable:"不可开发",improvable:"可改修",unimprovable:"不可改修",upgradable:"可升级",unupgradable:"不可升级",rankupgradable:"可提升熟练度",unrankupgradable:"不可提升熟练度"},bonus_stat:"额外收益",bonus_note_max_value:"如果舰娘满足了多个需求，额外收益取最大值",scrap:"废弃获得资源",improvements:"改修选项",required_for_improvements:"可用于改修其他装备",upgrade_to:"可升级为",upgrade_from:"可由以下装备升级获得",stocked:"初始装备于以下舰娘",stocked_list_empty:"暂无初始配置该装备的舰娘...",refittable_legend_no:"不可装备",refittable_legend_yes:"可装备",can_equip_in_ex_slot:"可装备于补强增设栏位",cannot_equip_in_ex_slot_but_ex_ships:"不可装备于大多数舰娘的补强增设栏位，但以下舰娘例外……",cannot_equip_in_ex_slot:"不可装备于补强增设栏位"},r)],subtitle:i.type?i._type:"",description:n+""+(i.type?`, ${i._type}`:"")})}})((({params:e={},className:a,children:s})=>{if(!e||!e.id)return null;const t=d.db.equipments[e.id],r=e.tab||"index";return(0,c.jsxs)(n.Z,{className:a,children:[(0,c.jsx)(o.default,{equipment:t,tabs:m,defaultTabIndex:m.indexOf(e.tab?e.tab:m[0]),onTabChange:function(){window.scrollTo(void 0,0)}}),(0,c.jsx)(h,{equipment:t,tab:r,children:s})]})})),h=({tab:e,equipment:a})=>e?(0,r.createElement)(p[e],{equipment:a}):null,b=u},39731:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(91277),r=s(97118);const i=({className:e,equipment:a})=>(0,r.jsx)(t.Z,{className:e,equipment:a})},80936:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>c});var t,r=s(17911),i=s(19494),l=s(240),d=s(61329),n=s(55445),o=s(97118);const c=(0,l.Z)({styles:s(73423)})(t=class extends i.Component{constructor(...e){var a,s,t;super(...e),a=this,s="onTabChange",t=this.onTabChange.bind(this),s in a?Object.defineProperty(a,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[s]=t}onTabChange(e,a){"function"==typeof this.props.onTabChange&&this.props.onTabChange(e,a)}getTabs(){return Array.isArray(this.props.tabs)?this.props.tabs.map((e=>({tabId:e,tabName:(0,r.Z)({infos:"信息",refittable:"可装备于...",availability:"获取方式",bonuses:"属性加成",facts:{craftable:"可开发",uncraftable:"不可开发",improvable:"可改修",unimprovable:"不可改修",upgradable:"可升级",unupgradable:"不可升级",rankupgradable:"可提升熟练度",unrankupgradable:"不可提升熟练度"},bonus_stat:"额外收益",bonus_note_max_value:"如果舰娘满足了多个需求，额外收益取最大值",scrap:"废弃获得资源",improvements:"改修选项",required_for_improvements:"可用于改修其他装备",upgrade_to:"可升级为",upgrade_from:"可由以下装备升级获得",stocked:"初始装备于以下舰娘",stocked_list_empty:"暂无初始配置该装备的舰娘...",refittable_legend_no:"不可装备",refittable_legend_yes:"可装备",can_equip_in_ex_slot:"可装备于补强增设栏位",cannot_equip_in_ex_slot_but_ex_ships:"不可装备于大多数舰娘的补强增设栏位，但以下舰娘例外……",cannot_equip_in_ex_slot:"不可装备于补强增设栏位"},e)}))):[]}render(){return this.props.equipment?(0,o.jsx)(n.Z,{className:this.props.className,title:this.props.equipment._name,subtitle:this.props.equipment._type,tabs:this.getTabs(),urlBase:(0,d.Z)("equipment",this.props.equipment.id),defaultIndex:this.props.defaultTabIndex,onTabChange:this.onTabChange,children:(0,o.jsxs)("span",{className:this.props.className+"-number",children:["No.",this.props.equipment.id]})}):null}})||t},65822:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>c});var t=s(19494),r=s(240),i=s(75117),l=s(81485),d=s(29567),n=s(68253),o=s(97118);const c=(0,r.Z)({styles:s(10780)})((({className:e,equipment:a})=>{const s=e.split([" "])[0],{upgrade_from:t=[],default_equipped_on:r=[]}=a;return(0,o.jsx)(l.Z,{title:"equipment_details.acquisition",children:(0,o.jsxs)("dl",{className:e,children:[(0,o.jsx)(m,{title:"可由以下装备升级获得",list:t.length?(0,o.jsx)(d.Z,{list:t}):void 0}),(0,o.jsx)(m,{title:"初始装备于以下舰娘",list:r.length?(0,o.jsx)(p,{className:s+"-stocked",list:r}):void 0})]})})})),m=({title:e,list:a})=>(0,o.jsxs)(t.Fragment,{children:[(0,o.jsx)("dt",{children:e}),a?(0,o.jsx)("dd",{children:a}):(0,o.jsx)("dd",{className:"empty",children:"无"})]}),p=({list:e,className:a})=>{const s={},t=[],r=a.split([" "])[0];return e.forEach((e=>{const a=(0,i.Z)(e);Array.isArray(s[a._minLv])?s[a._minLv]=s[a._minLv].concat(a):(s[a._minLv]=[a],t.push(a._minLv))})),t.sort(),(0,o.jsx)("div",{className:a,children:t.map((e=>(0,o.jsxs)("div",{className:r+"-line",children:[(0,o.jsxs)("span",{className:"badge",children:["Lv.",e]}),(0,o.jsx)(n.Z,{list:s[e],size:"mini",grid:!1})]},e)))})}},54561:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>Z});var t=s(17911),r=s(88767),i=s.n(r),l=s(240),d=s(81485),n=s(99474),o=s(12091),c=s(25348),m=s(76876),p=s.n(m),u=s(43173),h=s(71007),b=s(10620),f=s(97118);const g=(0,l.Z)({styles:s(23559)})((({className:e,equipment:a})=>(0,f.jsxs)(d.Z,{className:e,children:[(0,f.jsx)(y,{equipment:a}),(0,f.jsx)(v,{equipment:a})]}))),x=(0,l.Z)({styles:s(87145)})((({className:e,children:a})=>(0,f.jsx)("div",{className:e,children:a}))),y=(0,l.Z)({styles:s(39157)})((({equipment:e,className:a})=>{const s=[["craftable",!!e.craftable],["improvable",!!e.improvable],["upgradable",Array.isArray(e.upgrade_to)&&e.upgrade_to.length]];return e.isType("Aircraft")&&s.push(["rankupgradable",e.rankupgradable]),(0,f.jsx)(x,{className:a,children:s.map((e=>(0,f.jsx)(n.Z,{className:"item",title:(0,t.Z)({craftable:"可开发",uncraftable:"不可开发",improvable:"可改修",unimprovable:"不可改修",upgradable:"可升级",unupgradable:"不可升级",rankupgradable:"可提升熟练度",unrankupgradable:"不可提升熟练度"},`${e[1]?"":"un"}${e[0]}`),level:e[1]?2:0},e[0])))})})),v=(0,l.Z)({styles:s(55518)})((({equipment:e,className:a})=>{const s=[...p()],t=e.isType("Interceptor"),r=e.getTP();return e.isType("Aircraft")&&s.push("distance"),(0,f.jsxs)(x,{className:a,children:[s.map((a=>{const s="range"===a?b.get.range(e.stat[a]):(0,h.Z)(e.stat[a]);return t&&("hit"===a?a="antibomber":"evasion"===a&&(a="interception")),(0,f.jsx)(j,{className:"item",stat:a,value:s},a)})),!!r&&(0,f.jsx)(c.Z,{type:"TP",className:"item is-positive",children:r},"tp"),(0,f.jsx)(_,{bonus:e.stat_bonus}),(0,f.jsx)(w,{scrap:e.dismantle})]})})),j=({stat:e,value:a,className:s,hideTitle:r})=>(0,f.jsx)(c.Z,{type:r?void 0:(0,t.Z)({fire:"火力",torpedo:"雷装",night:"夜战",aa:"对空",aa_interceptor_sortie:"出击",aa_interceptor_defense:"防空",asw:"对潜",hp:"耐久",armor:"装甲",evasion:"回避",carry:"搭载",speed:"航速",range:"射程",los:"索敌",luck:"运",bomb:"爆装",hit:"命中",distance:"航程",antibomber:"对爆",interception:"迎击",consum:{fuel:"燃耗",ammo:"弹耗"},equipment:{craftable:"开发",improvable:"改修"}},e),className:i()([s,{"is-negative":a<0,"is-positive":a>0&&"range"!==e&&"distance"!==e,disabled:!a}]),stat:e,children:`${a>0&&"range"!==e&&"distance"!==e?"+":""}${a||"-"}`},e),w=(0,l.Z)({styles:s(39813)})((({scrap:e})=>(0,f.jsx)(c.Z,{type:"废弃获得资源",className:"item scrap",children:u.Z.map(((a,s)=>{const t=(0,h.Z)(e[s]);return(0,f.jsx)(c.Z,{className:i()(["scrap-resource",{disabled:!t}]),stat:a,children:t},s)}))},"scrap"))),N=(e,a)=>e?(0,t.Z)("${class}级${type}",{type:b.get.shipType(e)._name,class:a._name}):(0,t.Z)("${class}级",{class:a._name}),_=(0,l.Z)({styles:s(88198)})((({bonus:e,className:a})=>Array.isArray(e)&&e.length?(0,f.jsxs)("div",{className:a,children:[e.map(((e,a)=>{const s=[],t=Array.isArray(e.ship_classes)&&e.ship_classes.length,r=Array.isArray(e.ships)&&e.ships.length;for(const a in e.bonus)e.bonus[a]&&s.push({stat:a,value:e.bonus[a]});return(0,f.jsxs)("div",{className:"bonus-item",children:[t&&(0,f.jsx)("div",{className:"ship-classes",children:e.ship_classes.map((e=>{const a=b.get.shipClass(e),s=a.ship_type_id;return(0,f.jsx)("span",{className:"ship-class",children:N(s,a)},e)}))}),r&&(0,f.jsx)("div",{className:"ships",children:e.ships.map((e=>(0,f.jsx)(o.Z,{className:"ship",ship:e},e.id||e)))}),(0,f.jsxs)("div",{className:"bonus",children:[(0,f.jsx)("span",{className:"title",children:"额外收益"}),s.map((e=>(0,f.jsx)(j,{className:"stat",stat:e.stat,value:e.value,hideTitle:!0},e.stat)))]})]},a)})),e.length>1&&(0,f.jsx)("div",{className:"bonus-item bonus-note",children:"如果舰娘满足了多个需求，额外收益取最大值"})]}):null)),Z=g},33941:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n});var t=s(240),r=s(98954),i=s(54596),l=s(81485),d=s(97118);const n=(0,t.Z)({styles:s(93178)})((({className:e,equipment:a})=>(0,d.jsx)(l.Z,{className:e,children:(0,d.jsx)(i.Z,{className:"illust",src:(0,r.Z)("equipment",a.id,"card",a.illust_version)})})))},44109:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>p});var t=s(240),r=s(81485),i=s(17136),l=s.n(i),d=s(97118);const n=(()=>{const e=[];return l()(10)((a=>e.push((0,d.jsx)("span",{className:"flex-item placeholder"},a)))),e})();(0,t.Z)({styles:s(76196)})((({children:e,noPlaceholder:a,...s})=>(0,d.jsxs)("div",{...s,children:[e,!a&&n]})));var o=s(66624),c=s(99474),m=s(29381);const p=(0,t.Z)({styles:s(85370)})((({className:e,equipment:a})=>{const s=a.improvement||[],t=!!s.length,i=Array.isArray(a.upgrade_to)&&a.upgrade_to.length;return(0,d.jsxs)(r.Z,{className:e,title:"改修选项",children:[t&&(0,d.jsxs)("div",{className:"list",children:[s.map(((e,a)=>(0,d.jsx)(u,{data:e,upgradable:i,className:"flex-item"},a))),s.length>1&&n]}),!t&&(0,d.jsx)("span",{className:"disabled",children:"无"})]})})),u=(0,t.Z)({styles:s(46273)})((({className:e,upgradable:a,data:{upgrade:s,req:t,resource:r}})=>(0,d.jsxs)("div",{className:e,children:[(0,d.jsxs)(c.Z,{className:"upgradability",level:s?2:0,children:[(0,d.jsx)("span",{className:"subtitle",children:s?"可升级为":"不可升级"}),s&&(0,d.jsx)(m.Z,{equipment:s[0],className:"equipment color-alt",children:s&&!!s[1]&&(0,d.jsx)(o.Ux,{className:"default-star",star:s[1]})})]}),(0,d.jsx)(o.xN,{className:"dayships",data:t}),(0,d.jsx)(o._B,{className:"resources",data:r,upgradable:a})]})))},87253:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>p});var t=s(88767),r=s.n(t),i=s(240),l=s(22372),d=s(10620),n=s(81485),o=s(99474),c=s(12091),m=s(97118);const p=(0,i.Z)({styles:s(75897)})((({className:e,equipment:a})=>{const{equipmentTypes:s,shipCollections:t}=d.db,r=s[a.type]||{},{equipable_on_type:i=[],equipable_extra_ship:l=[]}=(a.getType(),a.isEquipableExSlot(),r);return Array.isArray(a.equipable_extra_ship)&&a.equipable_extra_ship.forEach((e=>{l.includes(e)||l.push(e)})),(0,m.jsxs)(n.Z,{className:e,children:[(0,m.jsx)(u,{}),t.map(((e,a)=>(0,m.jsx)(h,{data:e,availableShipTypes:i,availableExtraShips:l},a))),(0,m.jsx)(f,{isEquipableExSlot:a.isEquipableExSlot(),listExSlotShips:a.exslot_on_ship})]})})),u=(0,i.Z)({styles:s(91229)})((({className:e})=>(0,m.jsx)("div",{className:e+" legends",children:(0,m.jsxs)("div",{className:"list types",children:[(0,m.jsx)(c.Z,{className:"item off",children:"不可装备"}),(0,m.jsx)(c.Z,{className:"item on",children:"可装备"})]})}))),h=(0,i.Z)({styles:s(91229)})((({className:e,data:a,availableShipTypes:s,availableExtraShips:t,...r})=>{const{shipTypes:i}=d.db,o=[],p=[],u=a.list.map((e=>{const a=e.type;if(a)return e.ships.forEach((e=>{e.forEach((e=>{(e.type_display&&e.type_display!==e.type&&s.includes(e.type)&&!s.includes(e.type_display)||t.includes(e.id)&&!s.includes(e.type)&&!s.includes(e.type_display))&&p.push(e)}))})),{name:i[a]._name,code:i[a].code,on:s.includes(a)}})).filter((e=>!!e&&!o.includes(e.name)&&(o.push(e.name),!0)));return(0,m.jsxs)(n.Z,{className:e,title:a.name,...r,children:[(0,m.jsx)("div",{className:"list types",children:u.map(((e,a)=>(0,m.jsx)(b,{name:e.name,code:e.code,on:e.on},a)))}),!!p.length&&(0,m.jsx)("div",{className:"list ships",children:(0,l.Z)(p).map((e=>(0,m.jsx)(c.Z,{className:"item",ship:e,badge:!0},e.id)))})]})})),b=(0,i.Z)({styles:s(53535)})((({className:e,on:a,name:s,code:t})=>(0,m.jsxs)(c.Z,{className:r()({[e]:!0,item:!0,on:!!a,off:!a}),children:[s," ",(0,m.jsxs)("small",{className:"code",children:["[",t,"]"]})]}))),f=(0,i.Z)({styles:s(91229)})((({className:e,isEquipableExSlot:a,listExSlotShips:s,...t})=>{const r=(0,l.Z)(s||[]);return(0,m.jsxs)(n.Z,{className:e+" exslot",title:"补强增设栏位",titleType:"line-append",...t,children:[!!a&&(0,m.jsx)(o.Z,{className:"bullet",title:"可装备于补强增设栏位",level:!0}),!a&&!!r.length&&(0,m.jsx)(o.Z,{className:"bullet",title:"不可装备于大多数舰娘的补强增设栏位，但以下舰娘例外……",level:1}),!a&&!r.length&&(0,m.jsx)(o.Z,{className:"bullet",title:"不可装备于补强增设栏位",level:0}),!!r.length&&(0,m.jsx)("div",{className:"list ships",children:r.map((e=>(0,m.jsx)(c.Z,{className:"item",ship:e},e)))})]})}))},56941:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(81485),r=s(29567),i=s(97118);const l=({className:e,equipment:a})=>{const s=a.upgrade_for||[],l=!!s.length;return(0,i.jsxs)(t.Z,{className:e,title:"可用于改修其他装备",children:[l&&(0,i.jsx)(r.Z,{list:s}),!l&&(0,i.jsx)("span",{className:"disabled",children:"无"})]})}},57188:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var t=s(88767),r=s.n(t),i=s(240),l=s(43173),d=s(71007),n=s(81485),o=s(25348),c=s(97118);const m=(0,i.Z)({styles:s(1700)})((({className:e,equipment:a})=>(0,c.jsx)(n.Z,{className:e,title:"废弃获得资源",children:l.Z.map(((e,s)=>{const t=(0,d.Z)(a.dismantle[s]);return(0,c.jsx)(o.Z,{className:r()(["item",{disabled:!t}]),stat:e,children:t},s)}))})))},75575:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(81485),r=s(97118);const i=({className:e})=>(0,r.jsx)(t.Z,{className:e,children:"建设中"})},64937:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>n});var t=s(240),r=s(75117),i=s(81485),l=s(68253),d=s(97118);const n=(0,t.Z)({styles:s(52016)})((({className:e,equipment:a})=>{const s=a.default_equipped_on||[];return(0,d.jsxs)(i.Z,{className:e,title:"初始装备于以下舰娘",children:[!!s.length&&(0,d.jsx)(o,{className:e,stockedOn:s}),!s.length&&(0,d.jsx)("span",{className:"disabled",children:"无"})]})})),o=({className:e,stockedOn:a})=>{const s={},t=[],i=e.split([" "])[0];return a.forEach((e=>{const a=(0,r.Z)(e);Array.isArray(s[a._minLv])?s[a._minLv]=s[a._minLv].concat(a):(s[a._minLv]=[a],t.push(a._minLv))})),t.sort(),t.map(((e,a)=>(0,d.jsxs)("div",{className:i+"-level"+(a?"":" is-first")+(a>=t.length-1?" is-last":""),children:[(0,d.jsx)("span",{className:"level",children:e}),(0,d.jsx)(l.Z,{className:i+"-list",list:s[e],size:"mini",grid:!1})]},e)))}},86214:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(81485),r=s(29567),i=s(97118);const l=({className:e,equipment:a})=>{const s=a.upgrade_from||[],l=!!s.length;return(0,i.jsxs)(t.Z,{className:e,title:"可由以下装备升级获得",children:[l&&(0,i.jsx)(r.Z,{list:s}),!l&&(0,i.jsx)("span",{className:"disabled",children:"无"})]})}},84413:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>m});var t=s(240),r=s(33941),i=s(54561),l=s(44109),d=s(56941),n=s(86214),o=s(64937),c=s(97118);const m=(0,t.Z)({styles:s(10818)})((({className:e,equipment:a})=>{if(!a)return null;const s=e+"-info";return(0,c.jsx)("div",{className:e,children:[[r.default,"illust"],[i.default,"facts"],[l.default,"improvements"],[d.default,"required-for-improvements"],[n.default,"upgrade-from"],[o.default,"stocked"]].map(((e,t)=>{const[r,i]=e;return(0,c.jsx)(r,{equipment:a,className:s+(i?` ${s}-${i}`:"")},t)}))})}))},32422:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>l});var t=s(240),r=s(87253),i=s(97118);const l=(0,t.Z)({styles:s(86401)})((({className:e,equipment:a})=>(0,i.jsx)("div",{className:e,children:(0,i.jsx)(r.default,{equipment:a})})))},43397:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="d0d8315b",r='.d0d8315b{font-size:.7rem;line-height:.8rem;position:relative}.d0d8315b .item{margin-bottom:.05rem;padding-bottom:.1rem;padding-left:7.65rem;padding-top:.1rem;position:relative}.d0d8315b .item:last-child{margin-bottom:0}.d0d8315b .days{left:0;overflow:visible;position:absolute;top:0}.d0d8315b .day{background:rgba(237,240,242,.15);color:rgba(185,205,214,.55);display:block;float:left;font-size:.6rem;height:1rem;line-height:1rem;margin-right:.05rem;text-align:center;width:1rem}.d0d8315b .day.on{background:#388e3c;color:#b9f6ca}.d0d8315b .day:first-child{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.d0d8315b .day:last-child{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.d0d8315b .ships{color:rgba(185,205,214,.55);margin-right:-.6rem}.d0d8315b .ship{display:inline-block;margin-right:.6rem}.d0d8315b .ship:after{color:rgba(157,180,191,.9);content:"/";display:inline-block;margin:0 .2rem;position:absolute;z-index:-1}.d0d8315b .ship:last-child:after{content:normal}.d0d8315b[data-day] .item:first-child .days:before,.d0d8315b[data-day] .item:last-child .days:after{border-color:transparent;border-style:solid;border-width:.15rem .2rem;content:"";height:0;left:.075rem;margin-left:-.2rem;overflow:hidden;position:absolute;width:0;z-index:5}.d0d8315b[data-day] .item:first-child .days:before{border-top-color:#40c4ff;top:-.25rem}.d0d8315b[data-day] .item:last-child .days:after{border-bottom-color:#40c4ff;bottom:-.25rem}.d0d8315b[data-day] .item:not(:last-child):after{background:rgba(64,196,255,.5);bottom:.05rem;content:"";left:.075rem;margin-left:-.05rem;overflow:hidden;position:absolute;top:1.1rem;width:.1rem}.d0d8315b[data-day="0"] .item:first-child .days:before,.d0d8315b[data-day="0"] .item:last-child .days:after,.d0d8315b[data-day="0"] .item:not(:last-child):after{left:.5rem}.d0d8315b[data-day="1"] .item:first-child .days:before,.d0d8315b[data-day="1"] .item:last-child .days:after,.d0d8315b[data-day="1"] .item:not(:last-child):after{left:1.55rem}.d0d8315b[data-day="2"] .item:first-child .days:before,.d0d8315b[data-day="2"] .item:last-child .days:after,.d0d8315b[data-day="2"] .item:not(:last-child):after{left:2.6rem}.d0d8315b[data-day="3"] .item:first-child .days:before,.d0d8315b[data-day="3"] .item:last-child .days:after,.d0d8315b[data-day="3"] .item:not(:last-child):after{left:3.65rem}.d0d8315b[data-day="4"] .item:first-child .days:before,.d0d8315b[data-day="4"] .item:last-child .days:after,.d0d8315b[data-day="4"] .item:not(:last-child):after{left:4.7rem}.d0d8315b[data-day="5"] .item:first-child .days:before,.d0d8315b[data-day="5"] .item:last-child .days:after,.d0d8315b[data-day="5"] .item:not(:last-child):after{left:5.75rem}.d0d8315b[data-day="6"] .item:first-child .days:before,.d0d8315b[data-day="6"] .item:last-child .days:after,.d0d8315b[data-day="6"] .item:not(:last-child):after{left:6.8rem}',i={wrapper:t,css:r}},79274:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="e99782ee",r=".e99782ee{font-size:.7rem;line-height:.9rem}.e99782ee .category{margin:0 0 .2rem;overflow:hidden;padding-left:4.25rem}@media (max-width:660px){.e99782ee .category{margin-bottom:.3rem}}.e99782ee .category:last-child{margin-bottom:0}.e99782ee .category-title{color:rgba(185,205,214,.55);display:block;margin-left:-4.25rem;position:absolute;white-space:nowrap;width:4.25rem}.e99782ee .item{float:left;padding:0}.e99782ee .item.disabled{color:rgba(185,205,214,.55);opacity:1}.e99782ee .item-resource{width:3.75rem}@media (max-width:480px){.e99782ee .item-resource:nth-child(2n+2){clear:left}}.e99782ee .guaranteed{color:#69f0ae;padding-left:.35em}.e99782ee .equipments{display:block;float:left}@media (max-width:660px){.e99782ee .equipments{clear:left;float:none}}.e99782ee .equipment{display:block;padding-left:1rem}.e99782ee .equipment .icon:before,.e99782ee .equipment .icon:empty{height:1.3rem;left:-.2rem;top:-.2rem;width:1.3rem}.e99782ee .equipment-other{color:#e6e6e6}",i={wrapper:t,css:r}},76196:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="aa2beadf",r=".aa2beadf{display:-webkit-flex;display:flex}.aa2beadf>.placeholder{height:0;margin-bottom:auto;margin-top:auto}",i={wrapper:t,css:r}},73423:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="e21e9c19",r=".e21e9c19-number{background:rgba(157,180,191,.1);border:.05rem solid rgba(185,205,214,.35);border-radius:.15rem;color:rgba(185,205,214,.55);display:inline-block;font-size:.6rem;height:.8rem;line-height:.8rem;margin:0 .4rem .2rem 0;padding:0 .25rem;vertical-align:text-top}",i={wrapper:t,css:r}},10780:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="e7655eae",r=".e7655eae{clear:both;margin:0}",i={wrapper:t,css:r}},87145:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="b632b416",r=".b632b416{margin-right:-1rem;overflow:hidden}.b632b416 .item{float:left;padding-right:1rem}.b632b416 .title{font-size:.7rem}.b632b416+.b632b416{margin-top:1rem}",i={wrapper:t,css:r}},39157:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="d3d44900",r=".d3d44900 .item{margin-top:0}.d3d44900 .item,.d3d44900 .item:last-child{margin-bottom:.75rem}",i={wrapper:t,css:r}},88198:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="aa2682ca",r='.aa2682ca{background:rgba(0,0,0,.2);border:.05rem solid rgba(237,240,242,.15);border-radius:.25rem;clear:both;color:#e6e6e6;display:inline-block;font-size:.7rem;margin-top:.75rem;overflow:hidden;width:100%;width:calc(100% - 1rem)}.aa2682ca .bonus-item{display:block;padding:.25rem .5rem}.aa2682ca .bonus-item+.bonus-item{border-top:.05rem solid rgba(237,240,242,.15)}.aa2682ca .bonus-item.bonus-note{padding-top:.25rem}.aa2682ca .ship-class{display:inline-block}.aa2682ca .ship-class:after{content:"/";display:inline-block;padding:0 .25em}.aa2682ca .ship-class:last-child:after{content:normal}.aa2682ca .ships{margin-right:-.35rem;margin-top:.125rem;overflow:hidden}.aa2682ca .ships .ship{float:left;margin-bottom:.25rem;margin-right:.35rem}.aa2682ca .bonus{margin-right:-.35rem;overflow:hidden}.aa2682ca .bonus .stat,.aa2682ca .bonus .title{float:left;margin-right:.35rem}.aa2682ca .bonus .stat{margin-top:.05rem}',i={wrapper:t,css:r}},39813:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="bba7cc20",r=".bba7cc20{border-top:.75rem solid transparent;clear:left;float:none;margin-bottom:0;padding-right:0;width:auto}.bba7cc20 .type{margin-right:1.5em}.bba7cc20 .scrap-resource{float:left;margin-right:.75em;padding:0}",i={wrapper:t,css:r}},55518:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="c5c28c66",r=".c5c28c66{max-width:37.5rem}@media (max-width:850px){.c5c28c66{max-width:none}}.c5c28c66 .item{margin-bottom:.25rem;padding-right:.5rem;width:20%}.c5c28c66 .item .type{font-size:.7rem}@media (max-width:1024px){.c5c28c66 .item{width:25%}}@media (max-width:850px){.c5c28c66 .item{width:20%}}@media (max-width:660px){.c5c28c66 .item{width:33.3333%}}@media (max-width:480px){.c5c28c66 .item{width:50%}}.c5c28c66 .item:not(.is-negative) .type{color:#f2f2f2}.c5c28c66 .item.scrap{border-top:.75rem solid transparent;clear:left;float:none;margin-bottom:0;padding-right:0;width:auto}.c5c28c66 .item.scrap .type{margin-right:1.5em}.c5c28c66 .scrap-resource{float:left;margin-right:.75em;padding:0}",i={wrapper:t,css:r}},23559:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="a7881ab4",r=".a7881ab4{padding-top:.25rem}",i={wrapper:t,css:r}},93178:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="b42350b4",r=".b42350b4{max-width:13rem;position:relative;width:13rem}.b42350b4 .illust{display:block;height:0;overflow:hidden;padding-bottom:100%;position:relative}.b42350b4 .illust .img{display:block;position:relative;width:100%}",i={wrapper:t,css:r}},46273:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="aa632484",r=".aa632484{margin-right:1rem;margin-top:1.5rem}.aa632484 .upgradability{display:-webkit-flex;display:flex}.aa632484 .upgradability,.aa632484 .upgradability .des{-webkit-flex-flow:row nowrap;flex-flow:row nowrap;margin:0}.aa632484 .upgradability .des{display:inline-block;display:-webkit-flex;display:flex;font-size:inherit}.aa632484 .upgradability .subtitle{-webkit-flex:0;flex:0;white-space:nowrap}.aa632484 .upgradability .equipment{-webkit-flex:1;flex:1;margin-left:.9rem;padding-left:1.1rem}.aa632484 .upgradability .equipment .icon:before,.aa632484 .upgradability .equipment .icon:empty{height:1.7rem;left:-.45rem;top:-.45rem;width:1.7rem}.aa632484 .dayships,.aa632484 .resources{border-left:1.25rem solid transparent;border-top:.6rem solid transparent}@media (max-width:660px){.aa632484 .dayships,.aa632484 .resources{border-left-width:0}}",i={wrapper:t,css:r}},85370:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="aae5d923",r=".aae5d923>h2.title{-webkit-flex:none;flex:none;width:100%}.aae5d923>.list{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;margin-right:-1rem;margin-top:-1.25rem}.aae5d923>.list>.flex-item{-webkit-flex:1 1 25rem;flex:1 1 25rem}.aae5d923>.list>.flex-item.placeholder{height:0;margin-bottom:auto;margin-top:auto}",i={wrapper:t,css:r}},91229:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="c55875cb",r=".c55875cb+.c55875cb{margin-top:-.25rem}.c55875cb .list{margin-right:-.375rem;margin-top:.25rem;overflow:hidden}.c55875cb .list .item{float:left;margin-bottom:.25rem;margin-right:.375rem}.c55875cb .types .item{border-radius:.65rem;font-size:.8rem;line-height:.9rem;padding:.15rem .75em}.c55875cb.legends .list{margin-right:-1.25em;margin-top:0}.c55875cb.legends .list .item{border-radius:.9rem;font-size:.8rem;line-height:.9rem;margin-bottom:.25rem;margin-right:1.25em;padding:.45rem .75rem}.c55875cb.legends .list .on{background-color:#388e3c;color:#b9f6ca}.c55875cb.exslot{border-top-width:3rem}.c55875cb.exslot>.title[data-title-tag=h2]{font-size:1.1rem;line-height:1.22222222em;margin-bottom:-.25rem}.c55875cb .item.on{background-color:#388e3c;border-color:#388e3c;color:#b9f6ca}.c55875cb .item.off{background-color:rgba(37,49,55,.5);border-color:rgba(237,240,242,.15);color:rgba(185,205,214,.55)}",i={wrapper:t,css:r}},53535:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="e60e3631",r=".e60e3631 small{display:inline-block;line-height:1em;position:relative;top:-.05rem;vertical-align:middle}",i={wrapper:t,css:r}},75897:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="a5a905f1",r=".a5a905f1{overflow:hidden}",i={wrapper:t,css:r}},1700:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="dd6e70bc",r=".dd6e70bc{margin-right:-1rem;overflow:hidden}.dd6e70bc .item{float:left;padding-right:1rem}",i={wrapper:t,css:r}},52016:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="a5843827",r='.a5843827-level{margin-top:0;padding-left:3.55rem;padding-top:.25rem;position:relative}.a5843827-level:before{background:rgba(237,240,242,.15);bottom:0;content:"";left:2.7rem;position:absolute;top:0;width:.1rem}.a5843827-level:after{background:#40c4ff;border-radius:50%;content:"";height:.3rem;left:2.6rem;position:absolute;top:.65rem;width:.3rem;z-index:2}.a5843827-level .level{color:#fff;display:block;left:0;line-height:1.7rem;position:absolute;text-align:right;top:0;width:2rem}.a5843827-level .level:before{color:rgba(157,180,191,.9);content:"Lv.";font-size:.6rem;padding-right:.25em;transition-property:color}.a5843827-level.is-first{padding-top:0}.a5843827-level.is-first .level,.a5843827-level.is-first:after{margin-top:0}.a5843827-level.is-first:before{background:linear-gradient(180deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem)}.a5843827-level.is-last:before{background:linear-gradient(0deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem)}.a5843827-level.is-first.is-last:before{background:linear-gradient(180deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem,rgba(237,240,242,.15) calc(100% - .5rem),rgba(237,240,242,0))}.a5843827-level .a5843827-list{padding-bottom:.25rem}html.is-hover .a5843827-level:hover:after{background:#fff;-webkit-transform:scale(1.25);transform:scale(1.25)}html.is-hover .a5843827-level:hover .level:before{color:#fff}@media (max-width:660px){.a5843827-level{padding-left:3.05rem}.a5843827-level:after,.a5843827-level:before{margin-left:-.25rem}}',i={wrapper:t,css:r}},10818:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="f5f68da6",r=".f5f68da6-info{overflow:hidden}.f5f68da6 .f5f68da6-info-illust{float:right;margin-bottom:-5rem;margin-left:1rem}@media (max-width:1440px){.f5f68da6 .f5f68da6-info-illust{width:20vw}}@media (max-width:850px){.f5f68da6 .f5f68da6-info-illust{float:none;margin-bottom:auto;margin-left:auto;margin-right:auto;width:auto}}.f5f68da6-info-stocked{overflow:visible}",i={wrapper:t,css:r}},86401:(e,a,s)=>{"use strict";s.r(a),s.d(a,{wrapper:()=>t,css:()=>r,default:()=>i});const t="dd41d8cd7",r="",i={wrapper:t,css:r}},74496:(e,a,s)=>{var t={"./bonuses.jsx":39731,"./commons/header.jsx":80936,"./components/acquisition/index.jsx":65822,"./components/facts/index.jsx":54561,"./components/illust/index.jsx":33941,"./components/improvements/index.jsx":44109,"./components/refittable/index.jsx":87253,"./components/required-for-improvements/index.jsx":56941,"./components/scrap/index.jsx":57188,"./components/stats/index.jsx":75575,"./components/stocked/index.jsx":64937,"./components/upgrade-from/index.jsx":86214,"./infos.jsx":84413,"./refittable.jsx":32422};function r(e){var a=i(e);return s(a)}function i(e){if(!s.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=i,e.exports=r,r.id=74496}}]);