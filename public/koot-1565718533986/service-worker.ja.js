/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.04761f3cd2bd0d2879d7.js",
    "/includes/chunk.06cfd4e76bf42d41599d.js",
    "/includes/chunk.08c161195020958da997.js",
    "/includes/chunk.0944833848caaaacff45.js",
    "/includes/chunk.0b01a8c386015da82b4b.js",
    "/includes/chunk.0df4bde545b668516c96.js",
    "/includes/chunk.13efb613eade73853a64.js",
    "/includes/chunk.14cea5a3a6f94468b830.js",
    "/includes/chunk.16722aa74e3d9310dcb3.js",
    "/includes/chunk.21859b3379c12951bc9a.js",
    "/includes/chunk.2d4c40d23621a995de9e.js",
    "/includes/chunk.2d90fa7da07c30a03f80.js",
    "/includes/chunk.2e6d3abd28a76eba10f1.js",
    "/includes/chunk.349992fe85225570978a.js",
    "/includes/chunk.3629efde5a5cd58e46a1.js",
    "/includes/chunk.36d3292d363f04e56b55.js",
    "/includes/chunk.3e78750ff51f3a042e32.js",
    "/includes/chunk.42bb0ea0c6267341dd89.js",
    "/includes/chunk.46800e15ec4d2e6d8a92.js",
    "/includes/chunk.47574bbdc0ebd7951ac2.js",
    "/includes/chunk.4a33cd2350acebb065f8.js",
    "/includes/chunk.47ae34885de522ef9fbe.js",
    "/includes/chunk.4eb967ef0df03c7fe689.js",
    "/includes/chunk.5588cc2b686480e365c0.js",
    "/includes/chunk.58866c722742c1c96ace.js",
    "/includes/chunk.5f6caba40be8143fc614.js",
    "/includes/chunk.60219da7b50784432ce4.js",
    "/includes/chunk.68856e1e303948d4cc52.js",
    "/includes/chunk.6c1c6047c8b372744425.js",
    "/includes/chunk.713b62169ac14182bb99.js",
    "/includes/chunk.78dbffe460bc363dba25.js",
    "/includes/chunk.7ba1ff874201f6a40ead.js",
    "/includes/chunk.805e705e07cfd527a0f6.js",
    "/includes/chunk.89b9daada7e7aa8fada0.js",
    "/includes/chunk.8a8bef4a28d3d52133aa.js",
    "/includes/chunk.8d04921e0acf08b73fc3.js",
    "/includes/chunk.8da055a9c81a90d6c5f4.js",
    "/includes/chunk.8e948a5b67fc930082f6.js",
    "/includes/chunk.945e585b436fad3c2b46.js",
    "/includes/chunk.9488d4e5096c3da57f19.js",
    "/includes/chunk.9c0b45aa98003bc751cd.js",
    "/includes/chunk.9d0b8b021757b3c4215f.js",
    "/includes/chunk.9ef3a3c320e970541dec.js",
    "/includes/chunk.9f658fc1d5eff2ea3f8d.js",
    "/includes/chunk.a4b82de641ed736b94dc.js",
    "/includes/chunk.b938f3cb1cfd6245cf25.js",
    "/includes/chunk.bcf61efefc7c61dd79b3.js",
    "/includes/chunk.c7de47e372d83da3aea8.js",
    "/includes/chunk.c9cb8b5921caf760652d.js",
    "/includes/chunk.d1da06913832ae76d681.js",
    "/includes/chunk.d1ffa573960e2dbc26a1.js",
    "/includes/chunk.d23c67462a75e25cf5f3.js",
    "/includes/chunk.d55ff0569ba20b5ae15f.js",
    "/includes/chunk.d73673c8e8ebe076a056.js",
    "/includes/chunk.dbb16f282d2e6ecca698.js",
    "/includes/chunk.dfb06393fb993e172339.js",
    "/includes/chunk.e6a35dc93c63137b9094.js",
    "/includes/chunk.e94d22fea28b2f05d22c.js",
    "/includes/chunk.eb2791ae98fc01457f54.js",
    "/includes/chunk.f485ea9e3bfe59c3f09a.js",
    "/includes/chunk.f9147acc348433a4ecf2.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.100cea942055abfc41cf.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js",
    "/includes/entry.e3ee01f69ce565664cff.js",
    "/includes/entry.f8c40197772297c423cb.js"
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
