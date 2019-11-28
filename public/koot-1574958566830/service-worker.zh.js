/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0a60c3d643ceced02430.js",
    "/includes/chunk.0a85df7cfe67101b9294.js",
    "/includes/chunk.0d067e97d6b5153da417.js",
    "/includes/chunk.0f3d53ee5dd297bc3959.js",
    "/includes/chunk.159d9ab13571d919be1d.js",
    "/includes/chunk.17988891068fe8e2b178.js",
    "/includes/chunk.1b41ddfe4d454d4b66b8.js",
    "/includes/chunk.1c18aea447ef5176a1ff.js",
    "/includes/chunk.22afd3715882085f73c9.js",
    "/includes/chunk.23f28041e2f9a11b8e54.js",
    "/includes/chunk.2b31e20c7a73878694ca.js",
    "/includes/chunk.2caf85cbf9a0e215be7d.js",
    "/includes/chunk.30bb3aeca85ed0d07736.js",
    "/includes/chunk.33f29dcefc9aec6aa8a4.js",
    "/includes/chunk.3a55fa4b1d6a1ca669da.js",
    "/includes/chunk.3ec5805dfc9f8ad1c733.js",
    "/includes/chunk.49cbc34b89b0c40254dc.js",
    "/includes/chunk.52a3f39e9486194a1468.js",
    "/includes/chunk.52cfae37f104a59b4c52.js",
    "/includes/chunk.52e3c49aed2f5f8213f6.js",
    "/includes/chunk.5561ad75c18221353b36.js",
    "/includes/chunk.56606072b53bea346b3f.js",
    "/includes/chunk.5766e03f8b65dcc68429.js",
    "/includes/chunk.594098103f58f38b21a3.js",
    "/includes/chunk.5ed4e06fc4d568985e11.js",
    "/includes/chunk.6926c1f73e47eacd0fdf.js",
    "/includes/chunk.69d4dbb3e34e38461555.js",
    "/includes/chunk.6a716557c6eeb40877c1.js",
    "/includes/chunk.73d23539af496fa9c762.js",
    "/includes/chunk.75262aede90e6d9d81a0.js",
    "/includes/chunk.7560f638b58673964f46.js",
    "/includes/chunk.75ab46991ff7a9506452.js",
    "/includes/chunk.85eb3e939ffd7fabdb2b.js",
    "/includes/chunk.94e5300e4752a44f542b.js",
    "/includes/chunk.973a43dc2ef936025228.js",
    "/includes/chunk.a0f3fb5d1ad331ee3e2e.js",
    "/includes/chunk.a1ac956be1784924c570.js",
    "/includes/chunk.a3ed80ffff281d0200a7.js",
    "/includes/chunk.a4f44cc95589ea9ac1a5.js",
    "/includes/chunk.a727671e07520b63605e.js",
    "/includes/chunk.aa13fb7d51c25cb9b214.js",
    "/includes/chunk.bf1ee4acb148f233a89f.js",
    "/includes/chunk.c24b4fbb226f703df869.js",
    "/includes/chunk.c42f46a5c9fe796ff40e.js",
    "/includes/chunk.c6aec2610e66d975bcce.js",
    "/includes/chunk.c8a9c7725ac2a2e32567.js",
    "/includes/chunk.c921ad87968e2349119b.js",
    "/includes/chunk.cc8945e04ee77d9c5eab.js",
    "/includes/chunk.d0cca22ea26c639460aa.js",
    "/includes/chunk.d1f668853285a0295d8a.js",
    "/includes/chunk.d3ad0e7cd8cb027a8eb0.js",
    "/includes/chunk.dbaca3d93bee1b668bfb.js",
    "/includes/chunk.e3898865605cd9211c8d.js",
    "/includes/chunk.e74bb078573d21960457.js",
    "/includes/chunk.eabd5fdc1345773fbb8e.js",
    "/includes/chunk.eca0a8955cd553c8a9e8.js",
    "/includes/chunk.ecd7cbadba55f0a41002.js",
    "/includes/chunk.ed8da66dceb7cc590bc6.js",
    "/includes/chunk.ee3a0a770b1199166010.js",
    "/includes/chunk.ef9bc203898e378ba119.js",
    "/includes/chunk.fa01e514fd3e743c7540.js",
    "/includes/chunk.fa2aa743626df5f86ae9.js",
    "/includes/chunk.fe788b48d503e9431e72.js",
    "/includes/entry.05a5a1710cfa5798d0dc.js",
    "/includes/entry.11d0309cb57670e06f46.js",
    "/includes/entry.8db5a96d0ecea5fcf1e7.js",
    "/includes/entry.b9c7696d6b9f76ded3a1.js",
    "/includes/entry.f1c797686ce590ade149.js",
    "/includes/entry.f8cdcefe0be37fdf2a7b.js",
    "/includes/entry.ff96e60207a737fb19c3.js"
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
