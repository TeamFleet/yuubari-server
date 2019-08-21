/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.00825b4ebc93b92231d9.js",
    "/includes/chunk.0224116782816c76dc62.js",
    "/includes/chunk.052085dde7eea5c4732c.js",
    "/includes/chunk.05dc9156c6fac1c40bc1.js",
    "/includes/chunk.0f41b933a0da1cf6bd21.js",
    "/includes/chunk.16722aa74e3d9310dcb3.js",
    "/includes/chunk.203f935651618ea622bb.js",
    "/includes/chunk.20ccac0d667c4a47bbab.js",
    "/includes/chunk.20db1abbbf06febf1ea8.js",
    "/includes/chunk.23664cd84b0669fbf4b4.js",
    "/includes/chunk.26e3ac9f1c1dfbbfc954.js",
    "/includes/chunk.2c62179e74b1225be087.js",
    "/includes/chunk.2dc28b45e969ac84febe.js",
    "/includes/chunk.302e435f5e67f4705289.js",
    "/includes/chunk.48a5d407fbe36333adb8.js",
    "/includes/chunk.57b93906c1acb0d4bfea.js",
    "/includes/chunk.593a496ae80c5bd233d1.js",
    "/includes/chunk.5e73f26b984e747d6c5c.js",
    "/includes/chunk.65553e6d2c663514b9b5.js",
    "/includes/chunk.65be6b3d49480ec7205c.js",
    "/includes/chunk.69e329a07229f5916378.js",
    "/includes/chunk.6e8ef6c129de3813b325.js",
    "/includes/chunk.74b10873c7b22ae632ee.js",
    "/includes/chunk.7aa13be65364692995b4.js",
    "/includes/chunk.837094c2acfe527fec8f.js",
    "/includes/chunk.859ed71a3d15b4f8ff4e.js",
    "/includes/chunk.86cd584dd5fce5bc3eb3.js",
    "/includes/chunk.8ae406fba06785d7fc3c.js",
    "/includes/chunk.8c2feabb41acbfe4cea8.js",
    "/includes/chunk.8c7019a0b2c5daefc3bf.js",
    "/includes/chunk.9174f4e00a37ab3e9c1a.js",
    "/includes/chunk.92b60c237457e3a733d7.js",
    "/includes/chunk.96275166afa94af775e3.js",
    "/includes/chunk.9a074e8d9affefe1c6d6.js",
    "/includes/chunk.9da55a8c2f5ee8b1e7ed.js",
    "/includes/chunk.9ef3a3c320e970541dec.js",
    "/includes/chunk.9f658fc1d5eff2ea3f8d.js",
    "/includes/chunk.a13e4c7c10bfd8e4037d.js",
    "/includes/chunk.a2f5ca48bf2aed23467d.js",
    "/includes/chunk.a43770a5c0efe10e0809.js",
    "/includes/chunk.ab51ac872ab7edab3fab.js",
    "/includes/chunk.ae80c388ccf81ff84403.js",
    "/includes/chunk.b2cb095bd1ee23d0e67d.js",
    "/includes/chunk.b30a02b4ba5ef2a57ceb.js",
    "/includes/chunk.be1d916a6195a3cabce9.js",
    "/includes/chunk.bf5d2cd987e85bcad6d7.js",
    "/includes/chunk.c0883d21cb29bc54b64d.js",
    "/includes/chunk.c0c0b357ac1789ae9c60.js",
    "/includes/chunk.c87b061c380ccba50dd5.js",
    "/includes/chunk.ca9deeb8af5827c61fd1.js",
    "/includes/chunk.d01f2466bcd923afb4de.js",
    "/includes/chunk.d4271bbf66c86e714197.js",
    "/includes/chunk.dd39b48f3cb8f00884ed.js",
    "/includes/chunk.e35181d3798492f60d21.js",
    "/includes/chunk.e3d2899502ae90e017a3.js",
    "/includes/chunk.efa043d972d7b08dbb2a.js",
    "/includes/chunk.f12328459b6c27fe88a4.js",
    "/includes/chunk.f34244554dee69e39314.js",
    "/includes/chunk.f389bf6c8c533f2e6119.js",
    "/includes/chunk.f4832f0c2328ad40d243.js",
    "/includes/chunk.f505660756f37491a0d8.js",
    "/includes/chunk.f5fe55502d882d438ba7.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.1c097dc3af88060a2098.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.550514f596ee4c052904.js",
    "/includes/entry.7387299650c2c1b8e223.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js"
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
