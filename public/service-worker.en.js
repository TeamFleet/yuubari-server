(()=>{var e={317:e=>{e.exports={scopeNeedTransformPathname:"<<CURRENT_PATHNAME>>"}},618:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,s="function"==typeof Symbol?Symbol:{},o=s.iterator||"@@iterator",a=s.asyncIterator||"@@asyncIterator",i=s.toStringTag||"@@toStringTag";function c(e,t,r,n){var s=t&&t.prototype instanceof y?t:y,o=Object.create(s.prototype),a=new T(n||[]);return o._invoke=function(e,t,r){var n=l;return function(s,o){if(n===f)throw new Error("Generator is already running");if(n===d){if("throw"===s)throw o;return U()}for(r.method=s,r.arg=o;;){var a=r.delegate;if(a){var i=R(a,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=h(e,t,r);if("normal"===c.type){if(n=r.done?d:u,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(e,r,a),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l="suspendedStart",u="suspendedYield",f="executing",d="completed",p={};function y(){}function g(){}function w(){}var m={};m[o]=function(){return this};var _=Object.getPrototypeOf,v=_&&_(_(E([])));v&&v!==r&&n.call(v,o)&&(m=v);var b=w.prototype=y.prototype=Object.create(m);function k(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function x(e,t){function r(s,o,a,i){var c=h(e[s],e,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,a,i)}),(function(e){r("throw",e,a,i)})):t.resolve(u).then((function(e){l.value=e,a(l)}),(function(e){return r("throw",e,a,i)}))}i(c.arg)}var s;this._invoke=function(e,n){function o(){return new t((function(t,s){r(e,n,t,s)}))}return s=s?s.then(o,o):o()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var s=h(n,e.iterator,r.arg);if("throw"===s.type)return r.method="throw",r.arg=s.arg,r.delegate=null,p;var o=s.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function C(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function E(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,a=function r(){for(;++s<e.length;)if(n.call(e,s))return r.value=e[s],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:U}}function U(){return{value:t,done:!0}}return g.prototype=b.constructor=w,w.constructor=g,w[i]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},k(x.prototype),x.prototype[a]=function(){return this},e.AsyncIterator=x,e.async=function(t,r,n,s,o){void 0===o&&(o=Promise);var a=new x(c(t,r,n,s),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(b),b[i]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=E,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function s(n,s){return i.type="throw",i.arg=e,r.next=n,s&&(r.method="next",r.arg=t),!!s}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return s("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(c&&h){if(this.prev<a.catchLoc)return s(a.catchLoc,!0);if(this.prev<a.finallyLoc)return s(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return s(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return s(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var o=s;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;L(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:E(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}},726:(e,t,r)=>{"use strict";var n=r(353),s=/[\/\?<>\\:\*\|"]/g,o=/[\x00-\x1f\x80-\x9f]/g,a=/^\.+$/,i=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,c=/[\. ]+$/;function h(e,t){if("string"!=typeof e)throw new Error("Input must be string");var r=e.replace(s,t).replace(o,t).replace(a,t).replace(i,t).replace(c,t);return n(r,255)}e.exports=function(e,t){var r=t&&t.replacement||"",n=h(e,r);return""===r?n:h(n,"")}},353:(e,t,r)=>{"use strict";var n=r(992),s=r(878);e.exports=n.bind(null,s)},992:e=>{"use strict";function t(e){return e>=55296&&e<=56319}function r(e){return e>=56320&&e<=57343}e.exports=function(e,n,s){if("string"!=typeof n)throw new Error("Input must be string");for(var o,a,i=n.length,c=0,h=0;h<i;h+=1){if(o=n.charCodeAt(h),a=n[h],t(o)&&r(n.charCodeAt(h+1))&&(a+=n[h+=1]),(c+=e(a))===s)return n.slice(0,h+1);if(c>s)return n.slice(0,h-a.length+1)}return n}},878:e=>{"use strict";function t(e){return e>=55296&&e<=56319}function r(e){return e>=56320&&e<=57343}e.exports=function(e){if("string"!=typeof e)throw new Error("Input must be string");for(var n=e.length,s=0,o=null,a=null,i=0;i<n;i++)r(o=e.charCodeAt(i))?null!=a&&t(a)?s+=1:s+=3:o<=127?s+=1:o>=128&&o<=2047?s+=2:o>=2048&&o<=65535&&(s+=3),a=o;return s}},250:()=>{"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}},20:()=>{"use strict";try{self["workbox:precaching:6.1.5"]&&_()}catch(e){}},8:()=>{"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}},820:()=>{"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};r.r(e),r.d(e,{CacheFirst:()=>K,CacheOnly:()=>O,NetworkFirst:()=>A,NetworkOnly:()=>M,StaleWhileRevalidate:()=>I,Strategy:()=>b,StrategyHandler:()=>v}),r(618),r(250);class t extends Error{constructor(e,t){super(((e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r})(e,t)),this.name=e,this.details=t}}const n=new Set,s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},o=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||o(s.precache),i=e=>e||o(s.runtime);function c(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}let h;class l{constructor(e,t,{onupgradeneeded:r,onversionchange:n}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=r,this._onversionchange=n||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let r=!1;setTimeout((()=>{r=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const n=indexedDB.open(this._name,this._version);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{r?(n.transaction.abort(),n.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},n.onsuccess=()=>{const t=n.result;r?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,r){return await this.getAllMatching(e,{query:t,count:r})}async getAllKeys(e,t,r){return(await this.getAllMatching(e,{query:t,count:r,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:r=null,direction:n="next",count:s,includeKeys:o=!1}={}){return await this.transaction([e],"readonly",((a,i)=>{const c=a.objectStore(e),h=t?c.index(t):c,l=[],u=h.openCursor(r,n);u.onsuccess=()=>{const e=u.result;e?(l.push(o?e:e.value),s&&l.length>=s?i(l):e.continue()):i(l)}}))}async transaction(e,t,r){return await this.open(),await new Promise(((n,s)=>{const o=this._db.transaction(e,t);o.onabort=()=>s(o.error),o.oncomplete=()=>n(),r(o,(e=>n(e)))}))}async _call(e,t,r,...n){return await this.transaction([t],r,((r,s)=>{const o=r.objectStore(t),a=o[e].apply(o,n);a.onsuccess=()=>s(a.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}l.prototype.OPEN_TIMEOUT=2e3;const u={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(u))for(const r of t)r in IDBObjectStore.prototype&&(l.prototype[r]=async function(t,...n){return await this._call(r,t,e,...n)});class f{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function d(e){return new Promise((t=>setTimeout(t,e)))}function p(e,t){const r=t();return e.waitUntil(r),r}const y={get googleAnalytics(){return e||o(s.googleAnalytics);var e},get precache(){return a()},get prefix(){return s.prefix},get runtime(){return i()},get suffix(){return s.suffix}};function g(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:r,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!r){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),o=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",r),{cacheKey:s.href,url:o.href}}r(20);class w{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class m{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=t&&t.cacheKey||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r):e},this._precacheController=e}}function _(e){return"string"==typeof e?new Request(e):e}r(820);class v{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new f,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:r}=this;let n=_(e);if("navigate"===n.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:r})}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const o=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:r,request:o,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:s.clone(),request:o.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=_(e);let r;const{cacheName:n,matchOptions:s}=this._strategy,o=await this.getCacheKey(t,"read"),a={...s,cacheName:n};r=await caches.match(o,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:n,matchOptions:s,cachedResponse:r,request:o,event:this.event})||void 0;return r}async cachePut(e,r){const s=_(e);await d(0);const o=await this.getCacheKey(s,"write");if(!r)throw new t("cache-put-with-no-response",{url:(a=o.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const i=await this._ensureResponseSafeToCache(r);if(!i)return!1;const{cacheName:h,matchOptions:l}=this._strategy,u=await self.caches.open(h),f=this.hasCallback("cacheDidUpdate"),p=f?await async function(e,t,r,n){const s=c(t.url,r);if(t.url===s)return e.match(t,n);const o={...n,ignoreSearch:!0},a=await e.keys(t,o);for(const t of a)if(s===c(t.url,r))return e.match(t,n)}(u,o.clone(),["__WB_REVISION__"],l):null;try{await u.put(o,f?i.clone():i)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of n)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:h,oldResponse:p,newResponse:i.clone(),request:o,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=_(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[t]=r}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const s={...n,state:r};return t[e](s)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}class b{constructor(e={}){this.cacheName=i(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,s=new v(this,{event:t,request:r,params:n}),o=this._getResponse(s,r,t);return[o,this._awaitComplete(o,s,r,t)]}async _getResponse(e,r,n){let s;await e.runCallbacks("handlerWillStart",{event:n,request:r});try{if(s=await this._handle(r,e),!s||"error"===s.type)throw new t("no-response",{url:r.url})}catch(t){for(const o of e.iterateCallbacks("handlerDidError"))if(s=await o({error:t,event:n,request:r}),s)break;if(!s)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))s=await t({event:n,request:r,response:s});return s}async _awaitComplete(e,t,r,n){let s,o;try{s=await e}catch(o){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:r,response:s}),await t.doneWaiting()}catch(e){o=e}if(await t.runCallbacks("handlerDidComplete",{event:n,request:r,response:s,error:o}),t.destroy(),o)throw o}}class k extends b{constructor(e={}){e.cacheName=a(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(k.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,r){let n;if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return n=await r.fetch(e),n}async _handleInstall(e,r){this._useDefaultCacheabilityPluginIfNeeded();const n=await r.fetch(e);if(!await r.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==k.copyRedirectedCacheableResponsesPlugin&&(n===k.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(k.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}k.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},k.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,r){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const s=e.clone(),o={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},a=r?r(o):o,i=function(){if(void 0===h){const e=new Response("");if("body"in e)try{new Response(e.body),h=!0}catch(e){h=!1}h=!1}return h}()?s.body:await s.blob();return new Response(i,a)}(e):e};class x{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new k({cacheName:a(e),plugins:[...t,new m({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const r=[];for(const n of e){"string"==typeof n?r.push(n):n&&void 0===n.revision&&r.push(n.url);const{cacheKey:e,url:s}=g(n),o="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,o),r.length>0){const e=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return p(e,(async()=>{const t=new w;this.strategy.plugins.push(t);for(const[t,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),o=new Request(t,{integrity:n,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:o,event:e}))}const{updatedURLs:r,notUpdatedURLs:n}=t;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(e){return p(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const s of t)r.has(s.url)||(await e.delete(s),n.push(s.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const r=this.getCacheKeyForURL(e);if(!r)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params={cacheKey:r,...t.params},this.strategy.handle(t))}}let R;const C=()=>(R||(R=new x),R);r(8);const L=e=>e&&"object"==typeof e?e:{handle:e};class T{constructor(e,t,r="GET"){this.handler=L(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=L(e)}}class E extends T{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class U{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const n=r.origin===location.origin,{params:s,route:o}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let a=o&&o.handler;const i=e.method;if(!a&&this._defaultHandlerMap.has(i)&&(a=this._defaultHandlerMap.get(i)),!a)return;let c;try{c=a.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=o&&o.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:r,request:e,event:t,params:s})}catch(e){n=e}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const s=this._routes.get(r.method)||[];for(const o of s){let s;const a=o.match({url:e,sameOrigin:t,request:r,event:n});if(a)return s=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(s=void 0),{route:o,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,L(e))}setCatchHandler(e){this._catchHandler=L(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const r=this._routes.get(e.method).indexOf(e);if(!(r>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(r,1)}}let P;function q(e,r,n){let s;if("string"==typeof e){const t=new URL(e,location.href);s=new T((({url:e})=>e.href===t.href),r,n)}else if(e instanceof RegExp)s=new E(e,r,n);else if("function"==typeof e)s=new T(e,r,n);else{if(!(e instanceof T))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}return(P||(P=new U,P.addFetchListener(),P.addCacheListener()),P).registerRoute(s),s}class N extends T{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const e of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const o=new URL(e,location.href);o.hash="",yield o.href;const a=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(o,t);if(yield a.href,r&&a.pathname.endsWith("/")){const e=new URL(a.href);e.pathname+=r,yield e.href}if(n){const e=new URL(a.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:o});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(e);if(t)return{cacheKey:t}}}),e.strategy)}}class K extends b{async _handle(e,r){let n,s=await r.cacheMatch(e);if(s);else try{s=await r.fetchAndCachePut(e)}catch(e){n=e}if(!s)throw new t("no-response",{url:e.url,error:n});return s}}class O extends b{async _handle(e,r){const n=await r.cacheMatch(e);if(!n)throw new t("no-response",{url:e.url});return n}}const S={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class A extends b{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(S),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,r){const n=[],s=[];let o;if(this._networkTimeoutSeconds){const{id:t,promise:a}=this._getTimeoutPromise({request:e,logs:n,handler:r});o=t,s.push(a)}const a=this._getNetworkPromise({timeoutId:o,request:e,logs:n,handler:r});s.push(a);const i=await r.waitUntil((async()=>await r.waitUntil(Promise.race(s))||await a)());if(!i)throw new t("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:r}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await r.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:n}){let s,o;try{o=await n.fetchAndCachePut(t)}catch(e){s=e}return e&&clearTimeout(e),!s&&o||(o=await n.cacheMatch(t)),o}}class M extends b{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,r){let n,s;try{const t=[r.fetch(e)];if(this._networkTimeoutSeconds){const e=d(1e3*this._networkTimeoutSeconds);t.push(e)}if(s=await Promise.race(t),!s)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){n=e}if(!s)throw new t("no-response",{url:e.url,error:n});return s}}class I extends b{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(S)}async _handle(e,r){const n=r.fetchAndCachePut(e).catch((()=>{}));let s,o=await r.cacheMatch(e);if(o);else try{o=await n}catch(e){s=e}if(!o)throw new t("no-response",{url:e.url,error:s});return o}}var W=r(726),j=r.n(W),F=r(317);self.__koot={distClientAssetsDirName:"includes","__baseVersion_lt_0.12":!1,cacheFirst:["/bgimgs/","/pics/"],networkFirst:[],networkOnly:[],env:{WEBPACK_BUILD_ENV:"prod"},scope:"/",localeId:"en"},self.__WB_DISABLE_DEV_LOGS=!0,"object"!=typeof self.__koot&&(self.__koot={env:{WEBPACK_BUILD_ENV:"prod"}}),self.__koot.scope===F.scopeNeedTransformPathname&&(self.__koot.scope=location.pathname.split("/").slice(0,location.pathname.split("/").length-1).join("/")+"/");const D="dev"===self.__koot.env.WEBPACK_BUILD_ENV,$=(e,t=!1)=>"function"==typeof e?e:({url:r,request:n,event:s})=>{if("GET"!==n.method.toUpperCase())return!1;if(r.origin!==location.origin)return!1;if(e instanceof RegExp)return e.test(r.pathname);let o=e?`${t?self.__koot.scope:"/"}${"/"===e.substr(0,1)?e.substr(1):e}`:`${t?self.__koot.scope:""}`;o=o.replace(/\//g,"\\/");const a=o?/\\\/$/.test(o)?"(\\/|\\?.*|$)":"(\\?.*|$)":"";for(;/\\\/$/.test(o);)o=o.substr(0,o.length-2);return new RegExp(`${o}${a}`).test(r.pathname)};var B;(e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))})({prefix:"koot",suffix:`cache${self.__koot.localeId?`-${self.__koot.localeId}`:""}${self.__koot.scope&&"/"!==self.__koot.scope?`-${j()(self.__koot.scope)}`:""}`,precache:"pre",runtime:"rt"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&(self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())))})),D||(B=[...[{'revision':null,'url':'/includes/chunk.046e6b06fc49e62d2828.js'},{'revision':null,'url':'/includes/chunk.0c91e739c230e334fc45.js'},{'revision':null,'url':'/includes/chunk.0c94629aadc090527fde.js'},{'revision':null,'url':'/includes/chunk.0d68285702378277c19a.js'},{'revision':null,'url':'/includes/chunk.20a2401c5bf163fbd877.js'},{'revision':null,'url':'/includes/chunk.2df4ff8e9f4dd9cf73e9.js'},{'revision':null,'url':'/includes/chunk.30bd7231dcf240ee9feb.js'},{'revision':null,'url':'/includes/chunk.33766bcfd16eabdc15be.js'},{'revision':null,'url':'/includes/chunk.401d69cec8272ca8f7ee.js'},{'revision':null,'url':'/includes/chunk.466524651714daf16492.js'},{'revision':null,'url':'/includes/chunk.4eef215520a2c54c2d26.js'},{'revision':null,'url':'/includes/chunk.73ae8753fe236513a410.js'},{'revision':null,'url':'/includes/chunk.7cd47bf4e161a208f7c0.js'},{'revision':null,'url':'/includes/chunk.8454cb61c9def0fecabd.js'},{'revision':null,'url':'/includes/chunk.8609afcef544beae8b97.js'},{'revision':null,'url':'/includes/chunk.91d7b7032471a5637414.js'},{'revision':null,'url':'/includes/chunk.9d0a2f03d153b4c145cc.js'},{'revision':null,'url':'/includes/chunk.b9255cc511662cf906a0.js'},{'revision':null,'url':'/includes/chunk.c221f29bfa11312fa725.js'},{'revision':null,'url':'/includes/chunk.d3c60550b974e70ce7ed.js'},{'revision':null,'url':'/includes/chunk.d9843bf9c3067f501ac6.js'},{'revision':null,'url':'/includes/chunk.da420f4297719562050c.js'},{'revision':null,'url':'/includes/chunk.e4da90045d1cff9a1cd5.js'},{'revision':null,'url':'/includes/chunk.f5a443be390ab98729ed.js'},{'revision':null,'url':'/includes/entry.115c718ceab77f6950bc.js'},{'revision':null,'url':'/includes/entry.13aa82dfb062d7fa9e19.js'},{'revision':null,'url':'/includes/entry.221036210fb84a108af7.js'},{'revision':null,'url':'/includes/entry.26fa25fb214d13f9f9f7.js'},{'revision':null,'url':'/includes/entry.73a4ec1f9c5c6d4adc54.js'},{'revision':null,'url':'/includes/entry.8adbef7f49be10631869.js'},{'revision':null,'url':'/includes/entry.f61022c22449ba8427a6.js'}]],C().precache(B),function(e){const t=C();q(new N(t,undefined))}(),caches.open(y.runtime).then((e=>e.add(self.__koot.scope||"/"))));const H=[$(self.__koot.distClientAssetsDirName+"/",!0),...(self.__koot.cacheFirst||[]).map((e=>$(e))),$("favicon.ico",!0)],G=D?"NetworkOnly":"CacheFirst";H.forEach((t=>{q(t,new e[G])})),[...(self.__koot.networkOnly||[]).map((e=>$(e))),"api/"].forEach((e=>{q(e,new M)})),[...(self.__koot.networkFirst||[]).map((e=>$(e)))].forEach((e=>{q(e,new A)})),q($(void 0,!0),new A)})()})();