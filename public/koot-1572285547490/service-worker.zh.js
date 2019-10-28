/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0a60c3d643ceced02430.js",
    "/includes/chunk.0ac8d388353d7aecffea.js",
    "/includes/chunk.0e086214db7dd3dc7b6c.js",
    "/includes/chunk.0f3d53ee5dd297bc3959.js",
    "/includes/chunk.163797ea12bcf36d78d7.js",
    "/includes/chunk.17988891068fe8e2b178.js",
    "/includes/chunk.1b41ddfe4d454d4b66b8.js",
    "/includes/chunk.222d9380e85010805b86.js",
    "/includes/chunk.22afd3715882085f73c9.js",
    "/includes/chunk.23f28041e2f9a11b8e54.js",
    "/includes/chunk.2b31e20c7a73878694ca.js",
    "/includes/chunk.2d9ad97e2bdd069c65f9.js",
    "/includes/chunk.30bb3aeca85ed0d07736.js",
    "/includes/chunk.3a55fa4b1d6a1ca669da.js",
    "/includes/chunk.3ec5805dfc9f8ad1c733.js",
    "/includes/chunk.44b991abe718d98532a1.js",
    "/includes/chunk.52a3f39e9486194a1468.js",
    "/includes/chunk.52cfae37f104a59b4c52.js",
    "/includes/chunk.5339be6f078a261395c0.js",
    "/includes/chunk.53c859cf4eda714a7a35.js",
    "/includes/chunk.5561ad75c18221353b36.js",
    "/includes/chunk.56606072b53bea346b3f.js",
    "/includes/chunk.5766e03f8b65dcc68429.js",
    "/includes/chunk.594098103f58f38b21a3.js",
    "/includes/chunk.5e19c4aabcf06b5d062e.js",
    "/includes/chunk.5a6be0cc11d22dee966f.js",
    "/includes/chunk.5ed4e06fc4d568985e11.js",
    "/includes/chunk.69d4dbb3e34e38461555.js",
    "/includes/chunk.6a716557c6eeb40877c1.js",
    "/includes/chunk.728c358de047c29df05d.js",
    "/includes/chunk.7560f638b58673964f46.js",
    "/includes/chunk.75ab46991ff7a9506452.js",
    "/includes/chunk.94e5300e4752a44f542b.js",
    "/includes/chunk.85eb3e939ffd7fabdb2b.js",
    "/includes/chunk.955bed002df1342980dc.js",
    "/includes/chunk.96aa33730d96bb4e9f04.js",
    "/includes/chunk.973a43dc2ef936025228.js",
    "/includes/chunk.9a5f4fb4dd02da38a4ee.js",
    "/includes/chunk.a21f0dc748ca2d8499ce.js",
    "/includes/chunk.a4f44cc95589ea9ac1a5.js",
    "/includes/chunk.b0ebb37425e6efbefcf7.js",
    "/includes/chunk.b28cbdda5c63ae0d1646.js",
    "/includes/chunk.bf09695f9dcb54d32bf6.js",
    "/includes/chunk.bf1ee4acb148f233a89f.js",
    "/includes/chunk.c24b4fbb226f703df869.js",
    "/includes/chunk.c42f46a5c9fe796ff40e.js",
    "/includes/chunk.c6aec2610e66d975bcce.js",
    "/includes/chunk.c8a9c7725ac2a2e32567.js",
    "/includes/chunk.ca038fef72cb60b32fdd.js",
    "/includes/chunk.d0cca22ea26c639460aa.js",
    "/includes/chunk.d1f668853285a0295d8a.js",
    "/includes/chunk.dbaca3d93bee1b668bfb.js",
    "/includes/chunk.e3898865605cd9211c8d.js",
    "/includes/chunk.e74bb078573d21960457.js",
    "/includes/chunk.eabd5fdc1345773fbb8e.js",
    "/includes/chunk.eca0a8955cd553c8a9e8.js",
    "/includes/chunk.ecd7cbadba55f0a41002.js",
    "/includes/chunk.ee3a0a770b1199166010.js",
    "/includes/chunk.ef9bc203898e378ba119.js",
    "/includes/chunk.f149f480c2851baf140e.js",
    "/includes/chunk.fa01e514fd3e743c7540.js",
    "/includes/chunk.fa2aa743626df5f86ae9.js",
    "/includes/chunk.fe788b48d503e9431e72.js",
    "/includes/entry.05a5a1710cfa5798d0dc.js",
    "/includes/entry.11d0309cb57670e06f46.js",
    "/includes/entry.3642084c10b99dceda90.js",
    "/includes/entry.67c92c9a345e5c56b36e.js",
    "/includes/entry.b2617bddaa2f1c1bed55.js",
    "/includes/entry.b9c7696d6b9f76ded3a1.js",
    "/includes/entry.f1c797686ce590ade149.js"
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
