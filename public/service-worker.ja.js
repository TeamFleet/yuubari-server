(()=>{var e={317:e=>{e.exports={scopeNeedTransformPathname:"<<CURRENT_PATHNAME>>"}},618:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,s=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof w?t:w,o=Object.create(a.prototype),i=new P(n||[]);return s(o,"_invoke",{value:x(e,r,i)}),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="suspendedYield",p="executing",y="completed",g={};function w(){}function m(){}function _(){}var v={};h(v,o,(function(){return this}));var b=Object.getPrototypeOf,R=b&&b(b(q([])));R&&R!==r&&n.call(R,o)&&(v=R);var k=_.prototype=w.prototype=Object.create(v);function C(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(s,a,o,i){var c=u(e[s],e,a);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(l).then((function(e){h.value=e,o(h)}),(function(e){return r("throw",e,o,i)}))}i(c.arg)}var a;s(this,"_invoke",{value:function(e,n){function s(){return new t((function(t,s){r(e,n,t,s)}))}return a=a?a.then(s,s):s()}})}function x(e,t,r){var n=f;return function(s,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===s)throw a;return N()}for(r.method=s,r.arg=a;;){var o=r.delegate;if(o){var i=E(o,r);if(i){if(i===g)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=u(e,t,r);if("normal"===c.type){if(n=r.done?y:d,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=y,r.method="throw",r.arg=c.arg)}}}function E(e,r){var n=r.method,s=e.iterator[n];if(s===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=u(s,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function U(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function q(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var s=-1,a=function r(){for(;++s<e.length;)if(n.call(e,s))return r.value=e[s],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return m.prototype=_,s(k,"constructor",{value:_,configurable:!0}),s(_,"constructor",{value:m,configurable:!0}),m.displayName=h(_,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,h(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},C(L.prototype),h(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,s,a){void 0===a&&(a=Promise);var o=new L(l(t,r,n,s),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(k),h(k,c,"Generator"),h(k,o,(function(){return this})),h(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=q,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(U),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function s(n,s){return i.type="throw",i.arg=e,r.next=n,s&&(r.method="next",r.arg=t),!!s}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return s("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),h=n.call(o,"finallyLoc");if(c&&h){if(this.prev<o.catchLoc)return s(o.catchLoc,!0);if(this.prev<o.finallyLoc)return s(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return s(o.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return s(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var s=this.tryEntries[r];if(s.tryLoc<=this.prev&&n.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var a=s;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),U(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var s=n.arg;U(r)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:q(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},726:(e,t,r)=>{"use strict";var n=r(353),s=/[\/\?<>\\:\*\|"]/g,a=/[\x00-\x1f\x80-\x9f]/g,o=/^\.+$/,i=/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i,c=/[\. ]+$/;function h(e,t){if("string"!=typeof e)throw new Error("Input must be string");var r=e.replace(s,t).replace(a,t).replace(o,t).replace(i,t).replace(c,t);return n(r,255)}e.exports=function(e,t){var r=t&&t.replacement||"",n=h(e,r);return""===r?n:h(n,"")}},353:(e,t,r)=>{"use strict";var n=r(992),s=r(878);e.exports=n.bind(null,s)},992:e=>{"use strict";function t(e){return e>=55296&&e<=56319}function r(e){return e>=56320&&e<=57343}e.exports=function(e,n,s){if("string"!=typeof n)throw new Error("Input must be string");for(var a,o,i=n.length,c=0,h=0;h<i;h+=1){if(a=n.charCodeAt(h),o=n[h],t(a)&&r(n.charCodeAt(h+1))&&(o+=n[h+=1]),(c+=e(o))===s)return n.slice(0,h+1);if(c>s)return n.slice(0,h-o.length+1)}return n}},878:e=>{"use strict";function t(e){return e>=55296&&e<=56319}function r(e){return e>=56320&&e<=57343}e.exports=function(e){if("string"!=typeof e)throw new Error("Input must be string");for(var n=e.length,s=0,a=null,o=null,i=0;i<n;i++)r(a=e.charCodeAt(i))?null!=o&&t(o)?s+=1:s+=3:a<=127?s+=1:a>=128&&a<=2047?s+=2:a>=2048&&a<=65535&&(s+=3),o=a;return s}},250:()=>{"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(e){}},20:()=>{"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},8:()=>{"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},820:()=>{"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e={};r.r(e),r.d(e,{CacheFirst:()=>I,CacheOnly:()=>A,NetworkFirst:()=>W,NetworkOnly:()=>F,StaleWhileRevalidate:()=>$,Strategy:()=>C,StrategyHandler:()=>k}),r(618),r(250);class t extends Error{constructor(e,t){super(((e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r})(e,t)),this.name=e,this.details=t}}const n=new Set,s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},a=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),o=e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))},i=e=>e||a(s.googleAnalytics),c=e=>e||a(s.precache),h=()=>s.prefix,l=e=>e||a(s.runtime),u=()=>s.suffix;function f(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}let d;class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}function y(e){return new Promise((t=>setTimeout(t,e)))}function g(e,t){const r=t();return e.waitUntil(r),r}const w={get googleAnalytics(){return i()},get precache(){return c()},get prefix(){return h()},get runtime(){return l()},get suffix(){return u()}};r(20);const m="__WB_REVISION__";function _(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:r,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!r){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),a=new URL(n,location.href);return s.searchParams.set(m,r),{cacheKey:s.href,url:a.href}}class v{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:r})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class b{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const r=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this._precacheController=e}}function R(e){return"string"==typeof e?new Request(e):e}r(820);class k{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:r}=this;let n=R(e);if("navigate"===n.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:r})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:r,request:a,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=R(e);let r;const{cacheName:n,matchOptions:s}=this._strategy,a=await this.getCacheKey(t,"read"),o=Object.assign(Object.assign({},s),{cacheName:n});r=await caches.match(a,o);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:n,matchOptions:s,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,r){const s=R(e);await y(0);const a=await this.getCacheKey(s,"write");if(!r)throw new t("cache-put-with-no-response",{url:(o=a.url,new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var o;const i=await this._ensureResponseSafeToCache(r);if(!i)return!1;const{cacheName:c,matchOptions:h}=this._strategy,l=await self.caches.open(c),u=this.hasCallback("cacheDidUpdate"),d=u?await async function(e,t,r,n){const s=f(t.url,r);if(t.url===s)return e.match(t,n);const a=Object.assign(Object.assign({},n),{ignoreSearch:!0}),o=await e.keys(t,a);for(const t of o)if(s===f(t.url,r))return e.match(t,n)}(l,a.clone(),["__WB_REVISION__"],h):null;try{await l.put(a,u?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of n)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:c,oldResponse:d,newResponse:i.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const r=`${e.url} | ${t}`;if(!this._cacheKeys[r]){let n=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))n=R(await e({mode:t,request:n,event:this.event,params:this.params}));this._cacheKeys[r]=n}return this._cacheKeys[r]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),n=n=>{const s=Object.assign(Object.assign({},n),{state:r});return t[e](s)};yield n}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}class C{constructor(e={}){this.cacheName=l(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,n="params"in e?e.params:void 0,s=new k(this,{event:t,request:r,params:n}),a=this._getResponse(s,r,t);return[a,this._awaitComplete(a,s,r,t)]}async _getResponse(e,r,n){let s;await e.runCallbacks("handlerWillStart",{event:n,request:r});try{if(s=await this._handle(r,e),!s||"error"===s.type)throw new t("no-response",{url:r.url})}catch(t){if(t instanceof Error)for(const a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:t,event:n,request:r}),s)break;if(!s)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))s=await t({event:n,request:r,response:s});return s}async _awaitComplete(e,t,r,n){let s,a;try{s=await e}catch(a){}try{await t.runCallbacks("handlerDidRespond",{event:n,request:r,response:s}),await t.doneWaiting()}catch(e){e instanceof Error&&(a=e)}if(await t.runCallbacks("handlerDidComplete",{event:n,request:r,response:s,error:a}),t.destroy(),a)throw a}}class L extends C{constructor(e={}){e.cacheName=c(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(L.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,r){let n;const s=r.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const t=s.integrity,a=e.integrity,o=!a||a===t;n=await r.fetch(new Request(e,{integrity:"no-cors"!==e.mode?a||t:void 0})),t&&o&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await r.cachePut(e,n.clone()))}return n}async _handleInstall(e,r){this._useDefaultCacheabilityPluginIfNeeded();const n=await r.fetch(e);if(!await r.cachePut(e,n.clone()))throw new t("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[r,n]of this.plugins.entries())n!==L.copyRedirectedCacheableResponsesPlugin&&(n===L.defaultPrecacheCacheabilityPlugin&&(e=r),n.cacheWillUpdate&&t++);0===t?this.plugins.push(L.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}L.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},L.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,r){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new t("cross-origin-copy-response",{origin:n});const s=e.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},o=r?r(a):a,i=function(){if(void 0===d){const e=new Response("");if("body"in e)try{new Response(e.body),d=!0}catch(e){d=!1}d=!1}return d}()?s.body:await s.blob();return new Response(i,o)}(e):e};class x{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new L({cacheName:c(e),plugins:[...t,new b({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const r=[];for(const n of e){"string"==typeof n?r.push(n):n&&void 0===n.revision&&r.push(n.url);const{cacheKey:e,url:s}=_(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,a),r.length>0){const e=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return g(e,(async()=>{const t=new v;this.strategy.plugins.push(t);for(const[t,r]of this._urlsToCacheKeys){const n=this._cacheKeysToIntegrities.get(r),s=this._urlsToCacheModes.get(t),a=new Request(t,{integrity:n,cache:s,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:a,event:e}))}const{updatedURLs:r,notUpdatedURLs:n}=t;return{updatedURLs:r,notUpdatedURLs:n}}))}activate(e){return g(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),r=new Set(this._urlsToCacheKeys.values()),n=[];for(const s of t)r.has(s.url)||(await e.delete(s),n.push(s.url));return{deletedURLs:n}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(t);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const r=this.getCacheKeyForURL(e);if(!r)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:r},t.params),this.strategy.handle(t))}}let E;const T=()=>(E||(E=new x),E);r(8);const U=e=>e&&"object"==typeof e?e:{handle:e};class P{constructor(e,t,r="GET"){this.handler=U(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=U(e)}}class q extends P{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}class N{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const n=r.origin===location.origin,{params:s,route:a}=this.findMatchingRoute({event:t,request:e,sameOrigin:n,url:r});let o=a&&a.handler;const i=e.method;if(!o&&this._defaultHandlerMap.has(i)&&(o=this._defaultHandlerMap.get(i)),!o)return;let c;try{c=o.handle({url:r,request:e,event:t,params:s})}catch(e){c=Promise.reject(e)}const h=a&&a.catchHandler;return c instanceof Promise&&(this._catchHandler||h)&&(c=c.catch((async n=>{if(h)try{return await h.handle({url:r,request:e,event:t,params:s})}catch(e){e instanceof Error&&(n=e)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw n}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:n}){const s=this._routes.get(r.method)||[];for(const a of s){let s;const o=a.match({url:e,sameOrigin:t,request:r,event:n});if(o)return s=o,(Array.isArray(s)&&0===s.length||o.constructor===Object&&0===Object.keys(o).length||"boolean"==typeof o)&&(s=void 0),{route:a,params:s}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,U(e))}setCatchHandler(e){this._catchHandler=U(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const r=this._routes.get(e.method).indexOf(e);if(!(r>-1))throw new t("unregister-route-route-not-registered");this._routes.get(e.method).splice(r,1)}}let O;const K=()=>(O||(O=new N,O.addFetchListener(),O.addCacheListener()),O);function S(e,r,n){let s;if("string"==typeof e){const t=new URL(e,location.href);s=new P((({url:e})=>e.href===t.href),r,n)}else if(e instanceof RegExp)s=new q(e,r,n);else if("function"==typeof e)s=new P(e,r,n);else{if(!(e instanceof P))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});s=e}return K().registerRoute(s),s}class j extends P{constructor(e,t){super((({request:r})=>{const n=e.getURLsToCacheKeys();for(const s of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:n=!0,urlManipulation:s}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const o=function(e,t=[]){for(const r of[...e.searchParams.keys()])t.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(a,t);if(yield o.href,r&&o.pathname.endsWith("/")){const e=new URL(o.href);e.pathname+=r,yield e.href}if(n){const e=new URL(o.href);e.pathname+=".html",yield e.href}if(s){const e=s({url:a});for(const t of e)yield t.href}}(r.url,t)){const t=n.get(s);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}class I extends C{async _handle(e,r){let n,s=await r.cacheMatch(e);if(s);else try{s=await r.fetchAndCachePut(e)}catch(e){e instanceof Error&&(n=e)}if(!s)throw new t("no-response",{url:e.url,error:n});return s}}class A extends C{async _handle(e,r){const n=await r.cacheMatch(e);if(!n)throw new t("no-response",{url:e.url});return n}}const M={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};class W extends C{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(M),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,r){const n=[],s=[];let a;if(this._networkTimeoutSeconds){const{id:t,promise:o}=this._getTimeoutPromise({request:e,logs:n,handler:r});a=t,s.push(o)}const o=this._getNetworkPromise({timeoutId:a,request:e,logs:n,handler:r});s.push(o);const i=await r.waitUntil((async()=>await r.waitUntil(Promise.race(s))||await o)());if(!i)throw new t("no-response",{url:e.url});return i}_getTimeoutPromise({request:e,logs:t,handler:r}){let n;return{promise:new Promise((t=>{n=setTimeout((async()=>{t(await r.cacheMatch(e))}),1e3*this._networkTimeoutSeconds)})),id:n}}async _getNetworkPromise({timeoutId:e,request:t,logs:r,handler:n}){let s,a;try{a=await n.fetchAndCachePut(t)}catch(e){e instanceof Error&&(s=e)}return e&&clearTimeout(e),!s&&a||(a=await n.cacheMatch(t)),a}}class F extends C{constructor(e={}){super(e),this._networkTimeoutSeconds=e.networkTimeoutSeconds||0}async _handle(e,r){let n,s;try{const t=[r.fetch(e)];if(this._networkTimeoutSeconds){const e=y(1e3*this._networkTimeoutSeconds);t.push(e)}if(s=await Promise.race(t),!s)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(e){e instanceof Error&&(n=e)}if(!s)throw new t("no-response",{url:e.url,error:n});return s}}class $ extends C{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(M)}async _handle(e,r){const n=r.fetchAndCachePut(e).catch((()=>{}));r.waitUntil(n);let s,a=await r.cacheMatch(e);if(a);else try{a=await n}catch(e){e instanceof Error&&(s=e)}if(!a)throw new t("no-response",{url:e.url,error:s});return a}}var D=r(726),H=r.n(D),B=r(317);self.__koot={distClientAssetsDirName:"includes","__baseVersion_lt_0.12":!1,cacheFirst:["/bgimgs/","/pics/"],networkFirst:[],networkOnly:[],env:{WEBPACK_BUILD_ENV:"prod"},scope:"/",localeId:"ja"},self.__WB_DISABLE_DEV_LOGS=!0,"object"!=typeof self.__koot&&(self.__koot={env:{WEBPACK_BUILD_ENV:"prod"}}),self.__koot.scope===B.scopeNeedTransformPathname&&(self.__koot.scope=location.pathname.split("/").slice(0,location.pathname.split("/").length-1).join("/")+"/");const G="dev"===self.__koot.env.WEBPACK_BUILD_ENV,V=(e,t=!1)=>"function"==typeof e?e:({url:r,request:n,event:s})=>{if("GET"!==n.method.toUpperCase())return!1;if(r.origin!==location.origin)return!1;if(e instanceof RegExp)return e.test(r.pathname);let a=e?`${t?self.__koot.scope:"/"}${"/"===e.substr(0,1)?e.substr(1):e}`:`${t?self.__koot.scope:""}`;a=a.replace(/\//g,"\\/");const o=a?/\\\/$/.test(a)?"(\\/|\\?.*|$)":"(\\?.*|$)":"";for(;/\\\/$/.test(a);)a=a.substr(0,a.length-2);return new RegExp(`${a}${o}`).test(r.pathname)};var Y;o({prefix:"koot",suffix:`cache${self.__koot.localeId?`-${self.__koot.localeId}`:""}${self.__koot.scope&&"/"!==self.__koot.scope?`-${H()(self.__koot.scope)}`:""}`,precache:"pre",runtime:"rt"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&(self.skipWaiting(),self.addEventListener("activate",(()=>self.clients.claim())))})),G||(Y=[...[{'revision':null,'url':'/includes/chunk.0cc163adb9ae6fba2178.js'},{'revision':null,'url':'/includes/chunk.15edcf1f398349d34eb3.js'},{'revision':null,'url':'/includes/chunk.21ab24bf04cad0150f20.js'},{'revision':null,'url':'/includes/chunk.286b717834bf2e407b4d.js'},{'revision':null,'url':'/includes/chunk.31838cbab36ec4dc7218.js'},{'revision':null,'url':'/includes/chunk.3fb51c9744a2a488c274.js'},{'revision':null,'url':'/includes/chunk.437acc163a955d42bfe4.js'},{'revision':null,'url':'/includes/chunk.4e51310aec2a9cec99a5.js'},{'revision':null,'url':'/includes/chunk.4ee86a3fed0245689978.js'},{'revision':null,'url':'/includes/chunk.54cd177c7557e416c124.js'},{'revision':null,'url':'/includes/chunk.569a4ba0f734f99142a4.js'},{'revision':null,'url':'/includes/chunk.6609606a3c0c879bfb95.js'},{'revision':null,'url':'/includes/chunk.726431bbfa50cace1a0e.js'},{'revision':null,'url':'/includes/chunk.77677c334f99d23a8f08.js'},{'revision':null,'url':'/includes/chunk.7d8e56ec315e5b342608.js'},{'revision':null,'url':'/includes/chunk.94793db077bf80038aec.js'},{'revision':null,'url':'/includes/chunk.a57b790d615d7cd93bff.js'},{'revision':null,'url':'/includes/chunk.ba3971157dc3b25958be.js'},{'revision':null,'url':'/includes/chunk.bea844c8b3b5e31bc512.js'},{'revision':null,'url':'/includes/chunk.c679f42b36e36783c787.js'},{'revision':null,'url':'/includes/chunk.c7957b1b0fa103c77556.js'},{'revision':null,'url':'/includes/chunk.d955cc494adb481a7dfc.js'},{'revision':null,'url':'/includes/chunk.e31859d99c24c192ad58.js'},{'revision':null,'url':'/includes/chunk.f5b90fdec42e3be3c13d.js'},{'revision':null,'url':'/includes/entry.351700236df40442f263.js'},{'revision':null,'url':'/includes/entry.3a41f050d6df5cc05b68.js'},{'revision':null,'url':'/includes/entry.976a5e68c23a1267588b.js'},{'revision':null,'url':'/includes/entry.995000b76b39b003e2e9.js'},{'revision':null,'url':'/includes/entry.aa54401b2d6e46db3c8e.js'},{'revision':null,'url':'/includes/entry.da94b2e1fb99da781cfa.js'},{'revision':null,'url':'/includes/entry.e7e44a12b3ceed798b73.js'}]],T().precache(Y),function(e){const t=T();S(new j(t,undefined))}(),caches.open(w.runtime).then((e=>e.add(self.__koot.scope||"/"))));const J=[V(self.__koot.distClientAssetsDirName+"/",!0),...(self.__koot.cacheFirst||[]).map((e=>V(e))),V("favicon.ico",!0)],Q=G?"NetworkOnly":"CacheFirst";J.forEach((t=>{S(t,new e[Q])})),[...(self.__koot.networkOnly||[]).map((e=>V(e))),"api/"].forEach((e=>{S(e,new F)})),[...(self.__koot.networkFirst||[]).map((e=>V(e)))].forEach((e=>{S(e,new W)})),S(V(void 0,!0),new W)})()})();