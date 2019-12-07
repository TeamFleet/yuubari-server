/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.065ce5ac9cd8f8d5cb7e.js",
    "/includes/chunk.0fc06e2ec30eb7e62c1d.js",
    "/includes/chunk.121c0ba8d27d3b55aefd.js",
    "/includes/chunk.1355d450f469d09e820b.js",
    "/includes/chunk.164ba08f43c9f3226ac3.js",
    "/includes/chunk.1ccb2f93278b603ff661.js",
    "/includes/chunk.21e5dbb3335b22eacf3b.js",
    "/includes/chunk.274724e1401107d08779.js",
    "/includes/chunk.2b0ea6f506c653ef33c3.js",
    "/includes/chunk.2d77dcca4de1f7dbbcb9.js",
    "/includes/chunk.2e5b0e893adba6fc56a4.js",
    "/includes/chunk.2e5c8c333e44c2af487a.js",
    "/includes/chunk.3a6cfec60f1b6a258627.js",
    "/includes/chunk.3ca040c783d078d0bb97.js",
    "/includes/chunk.46b3dec89ec1765fecf3.js",
    "/includes/chunk.484349b4b511b59369ba.js",
    "/includes/chunk.4e5432bc4adf61d55523.js",
    "/includes/chunk.57dfa8453155723074eb.js",
    "/includes/chunk.5a3fc0c48de325357cf0.js",
    "/includes/chunk.6005d1db92c8fdae3983.js",
    "/includes/chunk.66f51c33bc7c36223b23.js",
    "/includes/chunk.6a851791773ba4c71896.js",
    "/includes/chunk.6abac461cecc883eebd4.js",
    "/includes/chunk.6ef4a5fcbc0da470222b.js",
    "/includes/chunk.71074bc36e6595bea16e.js",
    "/includes/chunk.71b6603329f82a86549c.js",
    "/includes/chunk.74e5894dbb0ea25dff3c.js",
    "/includes/chunk.74f71b47aaec27aa70a5.js",
    "/includes/chunk.76af8e64f856d9ab5d80.js",
    "/includes/chunk.79330e276268e79cc246.js",
    "/includes/chunk.816ebcec1d7be9293521.js",
    "/includes/chunk.825aed0343157d476bbc.js",
    "/includes/chunk.850ec6c4d46794bc9187.js",
    "/includes/chunk.8558679ecee2440c2a2c.js",
    "/includes/chunk.883ecd0d97a66cde13fb.js",
    "/includes/chunk.8d6a7c6fe3f6fcc3f7b6.js",
    "/includes/chunk.8fad3bacc1e8030d7862.js",
    "/includes/chunk.97d3b4f07895db87200b.js",
    "/includes/chunk.98fe83c9802d568e47ef.js",
    "/includes/chunk.9a745f5909746ddb3bac.js",
    "/includes/chunk.a1824e5db71c4f20b9ef.js",
    "/includes/chunk.bbcbe2840ff7fc50b690.js",
    "/includes/chunk.c063f06af8336339511e.js",
    "/includes/chunk.c2b6ad812cec6a63ba9c.js",
    "/includes/chunk.c4c914e10150a0f3e040.js",
    "/includes/chunk.c65a24d2865fddb82607.js",
    "/includes/chunk.c71132185c4d7231eab3.js",
    "/includes/chunk.ce18baedaf81ac815e8c.js",
    "/includes/chunk.d179d50a060fb095f157.js",
    "/includes/chunk.d238f4df4f0721ee555c.js",
    "/includes/chunk.d4b77b95438587869442.js",
    "/includes/chunk.d9df274ff9e5fbf6d64f.js",
    "/includes/chunk.da5b0df650d0c86083cb.js",
    "/includes/chunk.ddc47e66d271587733e5.js",
    "/includes/chunk.e46d21a3e8d4be55f895.js",
    "/includes/chunk.e98f74b9983b25e73213.js",
    "/includes/chunk.ebad4c021506523f3e83.js",
    "/includes/chunk.edd7804b8237bdb44ed9.js",
    "/includes/chunk.ef90a46642f7e058aafb.js",
    "/includes/chunk.f08797566d6085408237.js",
    "/includes/chunk.f37f660ee1bbb81e5ebc.js",
    "/includes/chunk.f80c919ebaf50989d557.js",
    "/includes/chunk.f8c9a044899114937877.js",
    "/includes/entry.37815f7bd88f96da4d2e.js",
    "/includes/entry.406ebae238e9f4831492.js",
    "/includes/entry.5ba099a66410dd4af09d.js",
    "/includes/entry.760dbd00f2f81953e9c7.js",
    "/includes/entry.8e1533cbf65bd621a22b.js",
    "/includes/entry.c1d32fe89878aec562d0.js",
    "/includes/entry.e3e4c7fe2a6a7c93ae56.js"
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
