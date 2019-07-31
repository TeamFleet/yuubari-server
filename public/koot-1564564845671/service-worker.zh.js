/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0038b09cd0b89756c48e.js",
    "/includes/chunk.0b6e509cd67e8fafa267.js",
    "/includes/chunk.0c9168189dca383ea20b.js",
    "/includes/chunk.29e5df35f9366254dfbb.js",
    "/includes/chunk.2bdff7a7212d1377b002.js",
    "/includes/chunk.3f71f93011ef999b3ce5.js",
    "/includes/chunk.4949a62ed3165e115a26.js",
    "/includes/chunk.4cf218a9c113a5e51001.js",
    "/includes/chunk.50424c041e8567798864.js",
    "/includes/chunk.56d36d2318dd03411475.js",
    "/includes/chunk.6253aa91fe96506d5322.js",
    "/includes/chunk.712862a34d824de18201.js",
    "/includes/chunk.8401cf0494cef0cbe015.js",
    "/includes/chunk.898798abc8441505d657.js",
    "/includes/chunk.92cb85f3c40d449b7e70.js",
    "/includes/chunk.a0dd1b7b5ab3875d1336.js",
    "/includes/chunk.a222687b9199f9a7efab.js",
    "/includes/chunk.a403753bd8905a7663da.js",
    "/includes/chunk.aa05fe5d47caa3d6a69b.js",
    "/includes/chunk.c9fd85fd3dca4432ec3d.js",
    "/includes/chunk.da24ca7086fc57603ad5.js",
    "/includes/chunk.dd2ccc5e6a044af237f1.js",
    "/includes/chunk.ddeba5eac1021652e50f.js",
    "/includes/chunk.df96e9dccbfc05340c3e.js",
    "/includes/chunk.e80c8095b7ac99b767ee.js",
    "/includes/entry.06140709dcfcf8ceec02.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.be39991fe23460ec4cfd.js",
    "/includes/entry.eb3f946d982ced64f60e.js"
];

function addToCache(request, response) {
    if (response.type === 'opaqueredirect') return response;

    if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
        });
    } else {
        console.warn('Request fail', response, request);
        throw response;
    }

    return response;
}

function fetchFromCache(event, networkResponse) {
    return caches.match(event.request).then(response => {
        if (!response) {
            // A synchronous error that will kick off the catch handler
            if (networkResponse) throw networkResponse;
            throw Error(`${event.request.url} not found in cache`);
        }
        if (networkResponse) throw networkResponse;
        return response;
    });
}

function offlineResponse(res) {
    if (res && res instanceof Response) {
        return res;
    }
    return new Response('Sorry, the application is offline.');
}

function respondFromNetworkThenCache(event) {
    // console.log('Network first ', event.request.url)
    // Check network first, then cache
    const request = event.request;
    event.respondWith(
        fetch(request)
            .then(response => addToCache(request, response))
            .catch(networkResponse => fetchFromCache(event, networkResponse))
            .catch(networkResponse => offlineResponse(networkResponse))
    );
}

function respondFromCacheThenNetwork(event) {
    // console.log('Cache first ', event.request.url)
    // Check cache first, then network
    const request = event.request;
    event.respondWith(
        fetchFromCache(event)
            .catch(() => fetch(request))
            .then(response => addToCache(request, response))
            .catch(networkResponse => offlineResponse(networkResponse))
    );
}

//

const shouldHandleFetch = event => {
    if (event.request.method.toLowerCase() !== 'get') return false;
    if (!new RegExp(`^${location.origin}`).test(event.request.url))
        return false;
    if (/google-analytics\.com\//.test(event.request.url)) return false;
    if (new RegExp(`^${location.origin}/api`).test(event.request.url))
        return false;
    if (/\/service-worker(\.[a-z-_]+){0,1}\.js/i.test(event.request.url))
        return false;

    return true;
};

const shouldRespondFromNetworkThenCache = event =>
    event.request.url === location.origin ||
    event.request.url === location.origin + '/' ||
    event.request.headers.get('Accept').includes('text/html');

//

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    if (shouldHandleFetch(event)) {
        if (shouldRespondFromNetworkThenCache(event)) {
            respondFromNetworkThenCache(event);
        } else {
            respondFromCacheThenNetwork(event);
        }
    }
});

self.addEventListener('activate', event => {
    // 删除不属于当前的缓存空间
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.includes(cacheName)) return true;
                    return caches.delete(cacheName);
                })
            )
        )
    );
});
