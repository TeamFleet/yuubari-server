(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1019:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="bb3484d9",n=".bb3484d9+.bb3484d9{margin-top:-.25rem}.bb3484d9 .list{margin-right:-.375rem;margin-top:.25rem;overflow:hidden}.bb3484d9 .list .item{float:left;margin-right:.375rem;margin-bottom:.25rem}.bb3484d9 .types .item{font-size:.8rem;line-height:.9rem;border-radius:.65rem;padding:.15rem .75em}.bb3484d9.legends .list{margin-right:-1.25em;margin-top:0}.bb3484d9.legends .list .item{margin-right:1.25em;margin-bottom:.25rem;font-size:.8rem;line-height:.9rem;border-radius:.9rem;padding:.45rem .75rem}.bb3484d9.legends .list .on{color:#b9f6ca;background-color:#388e3c}.bb3484d9.exslot{border-top-width:3rem}.bb3484d9.exslot>.title[data-title-tag=h2]{font-size:1.1rem;line-height:1.22222222em;margin-bottom:-.25rem}.bb3484d9 .item.on{color:#b9f6ca;background-color:#388e3c;border-color:#388e3c}.bb3484d9 .item.off{color:rgba(185,205,214,.55);border-color:rgba(237,240,242,.15);background-color:rgba(37,49,55,.5)}";t.default={wrapper:r,css:n}},1053:function(e,t,a){"use strict";a.r(t),function(e){var r,n=a(0),i=a.n(n),s=a(9),l=a(52),o=a(999);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=b(e);if(t){var n=b(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return f(this,a)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=Object(s.a)({styles:a(1142)})(r=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,t);var a,r,n,s=d(c);function c(){return u(this,c),s.apply(this,arguments)}return a=c,(r=[{key:"onTabChange",value:function(e,t){"function"==typeof this.props.onTabChange&&this.props.onTabChange(e,t)}},{key:"getTabs",value:function(){return Array.isArray(this.props.tabs)?this.props.tabs.map((function(t){return{tabId:t,tabName:e({infos:"情報",refittable:"装備可能艦...",availability:"入手情報",bonuses:"ボーナス",facts:{craftable:"開発可能",uncraftable:"開発不可",improvable:"改修可能",unimprovable:"改修不可",upgradable:"更新可能",unupgradable:"更新不可",rankupgradable:"熟練度が上が可能",unrankupgradable:"熟練度が上がらない"},bonus_stat:"ボーナス",bonus_note_max_value:"If a ship meets multiple requirements, use the highest value",scrap:"廢棄",improvements:"Improvement Options",required_for_improvements:"Required for other Improvements",upgrade_to:"Upgrade to",upgrade_from:"Can be upgraded from...",stocked:"初期装備の艦娘...",stocked_list_empty:"There's no ship that stock-equip this equipment...",refittable_legend_no:"Not refittable",refittable_legend_yes:"Refittable",can_equip_in_ex_slot:"Can be equipped in ex-slot",cannot_equip_in_ex_slot_but_ex_ships:"Cannot be equipped in ex-slot for most ships but following ships...",cannot_equip_in_ex_slot:"Cannot be equipped in ex-slot"},t)}})):[]}},{key:"render",value:function(){return this.props.equipment?i.a.createElement(o.a,{className:this.props.className,title:this.props.equipment._name,subtitle:this.props.equipment._type,tabs:this.getTabs(),urlBase:Object(l.a)("equipment",this.props.equipment.id),defaultIndex:this.props.defaultTabIndex,onTabChange:this.onTabChange.bind(this)},i.a.createElement("span",{className:this.props.className+"-number"},"No.",this.props.equipment.id)):null}}])&&m(a.prototype,r),n&&m(a,n),c}(i.a.Component))||r;t.default=h}.call(this,a(33).default)},1054:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(9),o=a(218),c=a(995),u=a(181),m=a(117),p=a(355),d=a.n(p),f=a(183),b=a(350),h=a(44);function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var y=Object(l.a)({styles:a(1147)})((function(e){var t=e.className,a=e.equipment;return n.a.createElement(o.a,{className:t},n.a.createElement(E,{equipment:a}),n.a.createElement(x,{equipment:a}))})),w=Object(l.a)({styles:a(1148)})((function(e){var t=e.className,a=e.children;return n.a.createElement("div",{className:t},a)})),E=Object(l.a)({styles:a(1149)})((function(t){var a=t.equipment,r=t.className,i=[["craftable",!!a.craftable],["improvable",!!a.improvable],["upgradable",Array.isArray(a.upgrade_to)&&a.upgrade_to.length]];return a.isType("Aircraft")&&i.push(["rankupgradable",a.rankupgradable]),n.a.createElement(w,{className:r},i.map((function(t){return n.a.createElement(c.a,{className:"item",title:e({craftable:"開発可能",uncraftable:"開発不可",improvable:"改修可能",unimprovable:"改修不可",upgradable:"更新可能",unupgradable:"更新不可",rankupgradable:"熟練度が上が可能",unrankupgradable:"熟練度が上がらない"},"".concat(t[1]?"":"un").concat(t[0])),level:t[1]?2:0,key:t[0]})})))})),x=Object(l.a)({styles:a(1150)})((function(e){var t=e.equipment,a=e.className,r=g(d.a),i=t.isType("Interceptor"),s=t.getTP();return t.isType("Aircraft")&&r.push("distance"),n.a.createElement(w,{className:a},r.map((function(e){var a="range"===e?h.get.range(t.stat[e]):Object(b.a)(t.stat[e]);return i&&("hit"===e?e="antibomber":"evasion"===e&&(e="interception")),n.a.createElement(_,{key:e,className:"item",stat:e,value:a})})),!!s&&n.a.createElement(m.a,{type:"TP",className:"item is-positive",key:"tp"},s),n.a.createElement(k,{bonus:t.stat_bonus}),n.a.createElement(N,{scrap:t.dismantle}))})),_=function(t){var a=t.stat,r=t.value,i=t.className,l=t.hideTitle;return n.a.createElement(m.a,{type:l?void 0:e({fire:"火力",torpedo:"雷装",night:"夜戦",aa:"対空",aa_interceptor_sortie:"出撃",aa_interceptor_defense:"防空",asw:"対潜",hp:"耐久",armor:"装甲",evasion:"回避",carry:"搭載",speed:"速力",range:"射程",los:"索敵",luck:"運",bomb:"爆装",hit:"命中",distance:"半径",antibomber:"対爆",interception:"迎撃",consum:{fuel:"燃費",ammo:"弾費"},equipment:{craftable:"開発",improvable:"改修"}},a),key:a,className:s()([i,{"is-negative":r<0,"is-positive":r>0&&"range"!==a&&"distance"!==a,disabled:!r}]),stat:a},"".concat(r>0&&"range"!==a&&"distance"!==a?"+":"").concat(r||"-"))},N=Object(l.a)({styles:a(1151)})((function(e){var t=e.scrap;return n.a.createElement(m.a,{type:"廢棄",className:"item scrap",key:"scrap"},f.a.map((function(e,a){var r=Object(b.a)(t[a]);return n.a.createElement(m.a,{className:s()(["scrap-resource",{disabled:!r}]),key:a,stat:e},r)})))})),k=Object(l.a)({styles:a(1152)})((function(t){var a=t.bonus,r=t.className;return Array.isArray(a)&&a.length?n.a.createElement("div",{className:r},a.map((function(t,a){var r=[],i=Array.isArray(t.ship_classes)&&t.ship_classes.length,s=Array.isArray(t.ships)&&t.ships.length;for(var l in t.bonus)t.bonus[l]&&r.push({stat:l,value:t.bonus[l]});return n.a.createElement("div",{className:"bonus-item",key:a},i&&n.a.createElement("div",{className:"ship-classes"},t.ship_classes.map((function(t){var a=h.get.shipClass(t),r=a.ship_type_id;return n.a.createElement("span",{className:"ship-class",key:t},function(t,a){return t?e("${class}型${type}",{type:h.get.shipType(t)._name,class:a._name}):e("${class}型",{class:a._name})}(r,a))}))),s&&n.a.createElement("div",{className:"ships"},t.ships.map((function(e){return n.a.createElement(u.a,{className:"ship",ship:e,key:e.id||e})}))),n.a.createElement("div",{className:"bonus"},n.a.createElement("span",{className:"title"},"ボーナス"),r.map((function(e){return n.a.createElement(_,{key:e.stat,className:"stat",stat:e.stat,value:e.value,hideTitle:!0})}))))})),a.length>1&&n.a.createElement("div",{className:"bonus-item bonus-note"},"If a ship meets multiple requirements, use the highest value")):null}));t.default=y}.call(this,a(33).default)},1055:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),s=a(180),l=a(1003),o=a(218),c=Object(i.a)({styles:a(1153)})((function(e){var t=e.className,a=e.equipment;return n.a.createElement(o.a,{className:t},n.a.createElement(l.a,{className:"illust",src:Object(s.a)("equipment",a.id,"card",a.illust_version)}))}));t.default=c},1056:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(9),s=a(218),l=a(1154),o=a(1011),c=a(995),u=a(86),m=Object(i.a)({styles:a(1156)})((function(e){var t=e.className,a=e.equipment,r=a.improvement||[],i=!!r.length,o=Array.isArray(a.upgrade_to)&&a.upgrade_to.length;return n.a.createElement(s.a,{className:t,title:"Improvement Options"},i&&n.a.createElement("div",{className:"list"},r.map((function(e,t){return n.a.createElement(p,{data:e,key:t,upgradable:o,className:"flex-item"})})),r.length>1&&l.a),!i&&n.a.createElement("span",{className:"disabled"},"None"))}));t.default=m;var p=Object(i.a)({styles:a(1157)})((function(e){var t=e.className,a=e.upgradable,r=e.data,i=r.upgrade,s=r.req,l=r.resource;return n.a.createElement("div",{className:t},n.a.createElement(c.a,{className:"upgradability",level:i?2:0},n.a.createElement("span",{className:"subtitle"},i?"Upgrade to":"更新不可"),i&&n.a.createElement(u.a,{equipment:i[0],className:"equipment color-alt"},i&&!!i[1]&&n.a.createElement(o.c,{className:"default-star",star:i[1]}))),n.a.createElement(o.a,{className:"dayships",data:s}),n.a.createElement(o.b,{className:"resources",data:l,upgradable:a}))}))}.call(this,a(33).default)},1057:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(9),o=a(182),c=a(19),u=a(218),m=a(995),p=a(181);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h=Object(l.a)({styles:a(1158)})((function(e){var t=e.className,a=e.equipment,r=c.a.equipmentTypes,i=c.a.shipCollections,s=r[a.type]||{},l=(a.getType(),a.isEquipableExSlot(),s.equipable_on_type),o=void 0===l?[]:l,m=s.equipable_extra_ship,p=void 0===m?[]:m;return Array.isArray(a.equipable_extra_ship)&&a.equipable_extra_ship.forEach((function(e){p.includes(e)||p.push(e)})),n.a.createElement(u.a,{className:t},n.a.createElement(g,null),i.map((function(e,t){return n.a.createElement(v,{data:e,availableShipTypes:o,availableExtraShips:p,key:t})})),n.a.createElement(w,{isEquipableExSlot:a.isEquipableExSlot(),listExSlotShips:a.exslot_on_ship}))}));t.default=h;var g=Object(l.a)({styles:a(1019)})((function(e){var t=e.className;return n.a.createElement("div",{className:t+" legends"},n.a.createElement("div",{className:"list types"},n.a.createElement(p.a,{className:"item off"},"Not refittable"),n.a.createElement(p.a,{className:"item on"},"Refittable")))})),v=Object(l.a)({styles:a(1019)})((function(e){var t=e.className,a=e.data,r=e.availableShipTypes,i=e.availableExtraShips,s=b(e,["className","data","availableShipTypes","availableExtraShips"]),l=c.a.shipTypes,m=[],d=[],h=a.list.map((function(e){var t=e.type;if(t)return e.ships.forEach((function(e){e.forEach((function(e){(e.type_display&&e.type_display!==e.type&&r.includes(e.type)&&!r.includes(e.type_display)||i.includes(e.id)&&!r.includes(e.type)&&!r.includes(e.type_display))&&d.push(e)}))})),{name:l[t]._name,code:l[t].code,on:r.includes(t)}})).filter((function(e){return!!e&&(!m.includes(e.name)&&(m.push(e.name),!0))}));return n.a.createElement(u.a,f({className:t,title:a.name},s),n.a.createElement("div",{className:"list types"},h.map((function(e,t){return n.a.createElement(y,{name:e.name,code:e.code,on:e.on,key:t})}))),!!d.length&&n.a.createElement("div",{className:"list ships"},Object(o.a)(d).map((function(e){return n.a.createElement(p.a,{className:"item",ship:e,key:e.id,badge:!0})}))))})),y=Object(l.a)({styles:a(1159)})((function(e){var t,a=e.className,r=e.on,i=e.name,l=e.code;return n.a.createElement(p.a,{className:s()((t={},d(t,a,!0),d(t,"item",!0),d(t,"on",!!r),d(t,"off",!r),t))},i," ",n.a.createElement("small",{className:"code"},"[",l,"]"))})),w=Object(l.a)({styles:a(1019)})((function(e){var t=e.className,a=e.isEquipableExSlot,r=e.listExSlotShips,i=b(e,["className","isEquipableExSlot","listExSlotShips"]),s=Object(o.a)(r||[]);return n.a.createElement(u.a,f({className:t+" exslot",title:"補強増設スロットへ",titleType:"line-append"},i),!!a&&n.a.createElement(m.a,{className:"bullet",title:"Can be equipped in ex-slot",level:!0}),!a&&!!s.length&&n.a.createElement(m.a,{className:"bullet",title:"Cannot be equipped in ex-slot for most ships but following ships...",level:1}),!a&&!s.length&&n.a.createElement(m.a,{className:"bullet",title:"Cannot be equipped in ex-slot",level:0}),!!s.length&&n.a.createElement("div",{className:"list ships"},s.map((function(e){return n.a.createElement(p.a,{className:"item",ship:e,key:e})}))))}))}.call(this,a(33).default)},1058:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(218),s=a(221);t.default=function(e){var t=e.className,a=e.equipment.upgrade_for||[],r=!!a.length;return n.a.createElement(i.a,{className:t,title:"Required for other Improvements"},r&&n.a.createElement(s.a,{list:a}),!r&&n.a.createElement("span",{className:"disabled"},"None"))}}.call(this,a(33).default)},1059:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(9),s=a(30),l=a(218),o=a(351),c=Object(i.a)({styles:a(1163)})((function(e){var t=e.className,a=e.equipment.default_equipped_on||[];return n.a.createElement(l.a,{className:t,title:"初期装備の艦娘..."},!!a.length&&n.a.createElement(u,{className:t,stockedOn:a}),!a.length&&n.a.createElement("span",{className:"disabled"},"None"))}));t.default=c;var u=function(e){var t=e.className,a=e.stockedOn,r={},i=[],l=t.split([" "])[0];return a.forEach((function(e){var t=Object(s.a)(e);Array.isArray(r[t._minLv])?r[t._minLv]=r[t._minLv].concat(t):(r[t._minLv]=[t],i.push(t._minLv))})),i.sort(),i.map((function(e,t){return n.a.createElement("div",{className:l+"-level"+(t?"":" is-first")+(t>=i.length-1?" is-last":""),key:e},n.a.createElement("span",{className:"level"},e),n.a.createElement(o.a,{className:l+"-list",list:r[e],size:"mini",grid:!1}))}))}}.call(this,a(33).default)},1060:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(218),s=a(221);t.default=function(e){var t=e.className,a=e.equipment.upgrade_from||[],r=!!a.length;return n.a.createElement(i.a,{className:t,title:"Can be upgraded from..."},r&&n.a.createElement(s.a,{list:a}),!r&&n.a.createElement("span",{className:"disabled"},"None"))}}.call(this,a(33).default)},1142:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="a5ad3197",n=".a5ad3197-number{color:rgba(185,205,214,.55);border:.05rem solid rgba(185,205,214,.35);background:rgba(157,180,191,.1);border-radius:.15rem;display:inline-block;margin:0 .4rem .2rem 0;line-height:.8rem;height:.8rem;font-size:.6rem;padding:0 .25rem;vertical-align:text-top}";t.default={wrapper:r,css:n}},1143:function(e,t,a){var r={"./bonuses.jsx":1144,"./commons/header.jsx":1053,"./components/acquisition/index.jsx":1145,"./components/facts/index.jsx":1054,"./components/illust/index.jsx":1055,"./components/improvements/index.jsx":1056,"./components/refittable/index.jsx":1057,"./components/required-for-improvements/index.jsx":1058,"./components/scrap/index.jsx":1160,"./components/stats/index.jsx":1162,"./components/stocked/index.jsx":1059,"./components/upgrade-from/index.jsx":1060,"./infos.jsx":1164,"./refittable.jsx":1166};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=1143},1144:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(1009);t.default=function(e){var t=e.className,a=e.equipment;return n.a.createElement(i.a,{className:t,equipment:a})}},1145:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(9),s=a(30),l=a(218),o=a(221),c=a(351),u=Object(i.a)({styles:a(1146)})((function(e){var t=e.className,a=e.equipment,r=t.split([" "])[0],i=a.upgrade_from,s=void 0===i?[]:i,c=a.default_equipped_on,u=void 0===c?[]:c;return n.a.createElement(l.a,{title:"equipment_details.acquisition"},n.a.createElement("dl",{className:t},n.a.createElement(m,{title:"Can be upgraded from...",list:s.length?n.a.createElement(o.a,{list:s}):void 0}),n.a.createElement(m,{title:"初期装備の艦娘...",list:u.length?n.a.createElement(p,{className:r+"-stocked",list:u}):void 0})))}));t.default=u;var m=function(e){var t=e.title,a=e.list;return n.a.createElement(n.a.Fragment,null,n.a.createElement("dt",null,t),a?n.a.createElement("dd",null,a):n.a.createElement("dd",{className:"empty"},"None"))},p=function(e){var t=e.list,a=e.className,r={},i=[],l=a.split([" "])[0];return t.forEach((function(e){var t=Object(s.a)(e);Array.isArray(r[t._minLv])?r[t._minLv]=r[t._minLv].concat(t):(r[t._minLv]=[t],i.push(t._minLv))})),i.sort(),n.a.createElement("div",{className:a},i.map((function(e){return n.a.createElement("div",{className:l+"-line",key:e},n.a.createElement("span",{className:"badge"},"Lv.",e),n.a.createElement(c.a,{list:r[e],size:"mini",grid:!1}))})))}}.call(this,a(33).default)},1146:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="e7655eae",n=".e7655eae{clear:both;margin:0}";t.default={wrapper:r,css:n}},1147:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="a7881ab4",n=".a7881ab4{padding-top:.25rem}";t.default={wrapper:r,css:n}},1148:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="bb60045b",n=".bb60045b{overflow:hidden;margin-right:-1rem}.bb60045b .item{padding-right:1rem;float:left}.bb60045b .title{font-size:.7rem}.bb60045b+.bb60045b{margin-top:1rem}";t.default={wrapper:r,css:n}},1149:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="d3d44900",n=".d3d44900 .item{margin-top:0}.d3d44900 .item,.d3d44900 .item:last-child{margin-bottom:.75rem}";t.default={wrapper:r,css:n}},1150:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="dd062435",n=".dd062435{max-width:37.5rem}@media (max-width:850px){.dd062435{max-width:none}}.dd062435 .item{padding-right:.5rem;margin-bottom:.25rem;width:20%}.dd062435 .item .type{font-size:.7rem}@media (max-width:1024px){.dd062435 .item{width:25%}}@media (max-width:850px){.dd062435 .item{width:20%}}@media (max-width:660px){.dd062435 .item{width:33.3333%}}@media (max-width:480px){.dd062435 .item{width:50%}}.dd062435 .item:not(.is-negative) .type{color:#f2f2f2}.dd062435 .item.scrap{float:none;width:auto;clear:left;padding-right:0;margin-bottom:0;border-top:.75rem solid transparent}.dd062435 .item.scrap .type{margin-right:1.5em}.dd062435 .scrap-resource{padding:0;float:left;margin-right:.75em}";t.default={wrapper:r,css:n}},1151:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="e95e5d50",n=".e95e5d50{float:none;width:auto;clear:left;padding-right:0;margin-bottom:0;border-top:.75rem solid transparent}.e95e5d50 .type{margin-right:1.5em}.e95e5d50 .scrap-resource{padding:0;float:left;margin-right:.75em}";t.default={wrapper:r,css:n}},1152:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="f8f53d67",n='.f8f53d67{border:.05rem solid rgba(237,240,242,.15);background:rgba(0,0,0,.2);border-radius:.25rem;overflow:hidden;margin-top:.75rem;clear:both;display:inline-block;width:100%;width:calc(100% - 1rem);color:#e6e6e6;font-size:.7rem}.f8f53d67 .bonus-item{display:block;padding:.25rem .5rem}.f8f53d67 .bonus-item+.bonus-item{border-top:.05rem solid rgba(237,240,242,.15)}.f8f53d67 .bonus-item.bonus-note{padding-top:.25rem}.f8f53d67 .ship-class{display:inline-block}.f8f53d67 .ship-class:after{content:"/";padding:0 .25em;display:inline-block}.f8f53d67 .ship-class:last-child:after{content:normal}.f8f53d67 .ships{margin-top:.125rem;margin-right:-.35rem;overflow:hidden}.f8f53d67 .ships .ship{float:left;margin-right:.35rem;margin-bottom:.25rem}.f8f53d67 .bonus{overflow:hidden;margin-right:-.35rem}.f8f53d67 .bonus .stat,.f8f53d67 .bonus .title{float:left;margin-right:.35rem}.f8f53d67 .bonus .stat{margin-top:.05rem}';t.default={wrapper:r,css:n}},1153:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="a53459ab",n=".a53459ab{position:relative;width:13rem;max-width:13rem}.a53459ab .illust{display:block;position:relative;height:0;padding-bottom:100%;overflow:hidden}.a53459ab .illust .img{width:100%;display:block;position:relative}";t.default={wrapper:r,css:n}},1154:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r),i=a(9),s=a(1010);function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o,c=(o=[],a.n(s)()(10)((function(e){return o.push(n.a.createElement("span",{className:"".concat("flex-item"," placeholder"),key:e}))})),o);Object(i.a)({styles:a(1155)})((function(e){var t=e.children,a=e.noPlaceholder,r=l(e,["children","noPlaceholder"]);return n.a.createElement("div",r,t,!a&&c)}))},1155:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="c6cb91c5",n=".c6cb91c5{display:-webkit-flex;display:flex}.c6cb91c5>.placeholder{margin-top:auto;margin-bottom:auto;height:0}";t.default={wrapper:r,css:n}},1156:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="e758e326",n=".e758e326>h2.title{-webkit-flex:none;flex:none;width:100%}.e758e326>.list{display:-webkit-flex;display:flex;-webkit-flex-flow:row wrap;flex-flow:row wrap;margin-top:-1.25rem;margin-right:-1rem}.e758e326>.list>.flex-item{-webkit-flex:1 1 25rem;flex:1 1 25rem}.e758e326>.list>.flex-item.placeholder{margin-top:auto;margin-bottom:auto;height:0}";t.default={wrapper:r,css:n}},1157:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="c880cc5e",n=".c880cc5e{margin-top:1.5rem;margin-right:1rem}.c880cc5e .upgradability{display:-webkit-flex;display:flex}.c880cc5e .upgradability,.c880cc5e .upgradability .des{margin:0;-webkit-flex-flow:row nowrap;flex-flow:row nowrap}.c880cc5e .upgradability .des{display:inline-block;display:-webkit-flex;display:flex;font-size:inherit}.c880cc5e .upgradability .subtitle{-webkit-flex:0;flex:0;white-space:nowrap}.c880cc5e .upgradability .equipment{padding-left:1.1rem;margin-left:.9rem;-webkit-flex:1;flex:1}.c880cc5e .upgradability .equipment .icon:before,.c880cc5e .upgradability .equipment .icon:empty{width:1.7rem;height:1.7rem;top:-.45rem;left:-.45rem}.c880cc5e .dayships,.c880cc5e .resources{border-left:1.25rem solid transparent;border-top:.6rem solid transparent}@media (max-width:660px){.c880cc5e .dayships,.c880cc5e .resources{border-left-width:0}}";t.default={wrapper:r,css:n}},1158:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="a5a905f1",n=".a5a905f1{overflow:hidden}";t.default={wrapper:r,css:n}},1159:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="e3ea399e",n=".e3ea399e small{display:inline-block;vertical-align:middle;line-height:1em;position:relative;top:-.05rem}";t.default={wrapper:r,css:n}},1160:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(4),s=a.n(i),l=a(9),o=a(183),c=a(350),u=a(218),m=a(117),p=Object(l.a)({styles:a(1161)})((function(e){var t=e.className,a=e.equipment;return n.a.createElement(u.a,{className:t,title:"廢棄"},o.a.map((function(e,t){var r=Object(c.a)(a.dismantle[t]);return n.a.createElement(m.a,{className:s()(["item",{disabled:!r}]),key:t,stat:e},r)})))}));t.default=p}.call(this,a(33).default)},1161:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="e98e4184",n=".e98e4184{overflow:hidden;margin-right:-1rem}.e98e4184 .item{padding-right:1rem;float:left}";t.default={wrapper:r,css:n}},1162:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(218);t.default=function(e){var t=e.className;return n.a.createElement(i.a,{className:t},"工事中")}}.call(this,a(33).default)},1163:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="eec5a9a5",n='.eec5a9a5-level{position:relative;margin-top:0;padding-top:.25rem;padding-left:3.55rem}.eec5a9a5-level:before{content:"";position:absolute;top:0;bottom:0;left:2.7rem;width:.1rem;background:rgba(237,240,242,.15)}.eec5a9a5-level:after{content:"";position:absolute;top:.65rem;left:2.6rem;width:.3rem;height:.3rem;background:#40c4ff;border-radius:50%;z-index:2}.eec5a9a5-level .level{display:block;position:absolute;top:0;left:0;color:#fff;line-height:1.7rem;width:2rem;text-align:right}.eec5a9a5-level .level:before{content:"Lv.";color:rgba(157,180,191,.9);font-size:.6rem;padding-right:.25em;transition-property:color}.eec5a9a5-level.is-first{padding-top:0}.eec5a9a5-level.is-first .level,.eec5a9a5-level.is-first:after{margin-top:0}.eec5a9a5-level.is-first:before{background:linear-gradient(180deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem)}.eec5a9a5-level.is-last:before{background:linear-gradient(0deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem)}.eec5a9a5-level.is-first.is-last:before{background:linear-gradient(180deg,rgba(237,240,242,0),rgba(237,240,242,.15) .5rem,rgba(237,240,242,.15) calc(100% - .5rem),rgba(237,240,242,0))}.eec5a9a5-level .eec5a9a5-list{padding-bottom:.25rem}html.is-hover .eec5a9a5-level:hover:after{background:#fff;-webkit-transform:scale(1.25);transform:scale(1.25)}html.is-hover .eec5a9a5-level:hover .level:before{color:#fff}@media (max-width:660px){.eec5a9a5-level{padding-left:3.05rem}.eec5a9a5-level:after,.eec5a9a5-level:before{margin-left:-.25rem}}';t.default={wrapper:r,css:n}},1164:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),s=a(1055),l=a(1054),o=a(1056),c=a(1058),u=a(1060),m=a(1059);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(e){n=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var f=Object(i.a)({styles:a(1165)})((function(e){var t=e.className,a=e.equipment;if(!a)return null;var r=t+"-info";return n.a.createElement("div",{className:t},[[s.default,"illust"],[l.default,"facts"],[o.default,"improvements"],[c.default,"required-for-improvements"],[u.default,"upgrade-from"],[m.default,"stocked"]].map((function(e,t){var i=p(e,2),s=i[0],l=i[1];return n.a.createElement(s,{key:t,equipment:a,className:r+(l?" ".concat(r,"-").concat(l):"")})})))}));t.default=f},1165:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="aa4488fc",n=".aa4488fc-info{overflow:hidden}.aa4488fc .aa4488fc-info-illust{float:right;margin-left:1rem;margin-bottom:-5rem}@media (max-width:1440px){.aa4488fc .aa4488fc-info-illust{width:20vw}}@media (max-width:850px){.aa4488fc .aa4488fc-info-illust{float:none;margin-left:auto;margin-right:auto;width:auto;margin-bottom:auto}}.aa4488fc-info-stocked{overflow:visible}";t.default={wrapper:r,css:n}},1166:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(9),s=a(1057),l=Object(i.a)({styles:a(1167)})((function(e){var t=e.className,a=e.equipment;return n.a.createElement("div",{className:t},n.a.createElement(s.default,{equipment:a}))}));t.default=l},1167:function(e,t,a){"use strict";a.r(t),a.d(t,"wrapper",(function(){return r})),a.d(t,"css",(function(){return n}));const r="dd41d8cd0",n="";t.default={wrapper:r,css:n}},1203:function(e,t,a){"use strict";a.r(t),function(e){var r=a(0),n=a.n(r),i=a(9),s=a(348),l=a(19),o=a(998),c=a(1053);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var m=["infos","bonuses","refittable"],p={};m.forEach((function(e,t){p[t?e:"index"]=a(1143)("./".concat(e,".jsx")).default}));var d=Object(i.a)({pageinfo:function(t,a){var r="object"===u(a.params)?a.params.id:void 0,n="object"===u(a.params)?a.params.tab:void 0;if(void 0===r)return{};var i=l.a.equipments[r];if(!i)return{};var o=i._name;return Object(s.a)(t,{title:[o,void 0===n||n===m[0]?void 0:e({infos:"情報",refittable:"装備可能艦...",availability:"入手情報",bonuses:"ボーナス",facts:{craftable:"開発可能",uncraftable:"開発不可",improvable:"改修可能",unimprovable:"改修不可",upgradable:"更新可能",unupgradable:"更新不可",rankupgradable:"熟練度が上が可能",unrankupgradable:"熟練度が上がらない"},bonus_stat:"ボーナス",bonus_note_max_value:"If a ship meets multiple requirements, use the highest value",scrap:"廢棄",improvements:"Improvement Options",required_for_improvements:"Required for other Improvements",upgrade_to:"Upgrade to",upgrade_from:"Can be upgraded from...",stocked:"初期装備の艦娘...",stocked_list_empty:"There's no ship that stock-equip this equipment...",refittable_legend_no:"Not refittable",refittable_legend_yes:"Refittable",can_equip_in_ex_slot:"Can be equipped in ex-slot",cannot_equip_in_ex_slot_but_ex_ships:"Cannot be equipped in ex-slot for most ships but following ships...",cannot_equip_in_ex_slot:"Cannot be equipped in ex-slot"},n)],subtitle:i.type?i._type:"",description:o+"".concat(i.type?", ".concat(i._type):"")})}})((function(e){var t=e.params,a=void 0===t?{}:t,r=e.className,i=e.children;if(!a||!a.id)return null;var s=l.a.equipments[a.id],u=a.tab||"index";return n.a.createElement(o.a,{className:r},n.a.createElement(c.default,{equipment:s,tabs:m,defaultTabIndex:m.indexOf(a.tab?a.tab:m[0]),onTabChange:function(){return window.scrollTo(void 0,0)}}),n.a.createElement(f,{equipment:s,tab:u},i))})),f=function(e){var t=e.tab,a=e.equipment;return t?n.a.createElement(p[t],{equipment:a}):null};t.default=d}.call(this,a(33).default)}}]);