/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.048907701a35685dd1da.js",
    "/includes/chunk.0558d5ab8d92815bae85.js",
    "/includes/chunk.069cd1617f48cf372832.js",
    "/includes/chunk.132528b872d2c13b71a4.js",
    "/includes/chunk.292204cc87044b30d347.js",
    "/includes/chunk.298e3912ac2387f6d461.js",
    "/includes/chunk.37f688f4552c57d308e5.js",
    "/includes/chunk.3a7b2f9680351e4c1f71.js",
    "/includes/chunk.5182257696188d3985eb.js",
    "/includes/chunk.51f2d32eb7e38d2f4a24.js",
    "/includes/chunk.57a50202a70e19192551.js",
    "/includes/chunk.5d0a9a7cad0d1ed13491.js",
    "/includes/chunk.7157e4b69fb841ca76c3.js",
    "/includes/chunk.8488c269d45842267d24.js",
    "/includes/chunk.8edadd0aec3144f9463e.js",
    "/includes/chunk.967bb68729c6e09b23ca.js",
    "/includes/chunk.97ecf37188d82a311d27.js",
    "/includes/chunk.a3e03bde5b20b70dc01c.js",
    "/includes/chunk.a55e48880aa17ec26ade.js",
    "/includes/chunk.ad3b55f258c489dc103d.js",
    "/includes/chunk.bb65f1dbc5e8d4c33bbf.js",
    "/includes/chunk.db2ef2b45542c4778b46.js",
    "/includes/chunk.ee9d25d60e312005704d.js",
    "/includes/chunk.f3fe0b035ddb5acfd8c6.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js",
    "/includes/entry.f1c1c1e187fafcd1e725.js",
    "/includes/entry.f6f3684a335956092ad5.js"
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
