/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.06f9be27c47e63b3252f.js",
    "/includes/chunk.0bdd4c75addb77dd89ca.js",
    "/includes/chunk.157fb40a6c0ab50ba254.js",
    "/includes/chunk.15c5dbaee0689e935445.js",
    "/includes/chunk.1734475f30bdba0925c7.js",
    "/includes/chunk.29584c91e4320d2b1f73.js",
    "/includes/chunk.2d90fa7da07c30a03f80.js",
    "/includes/chunk.306221ce21a25a4cb576.js",
    "/includes/chunk.333ffaddadffed9edb5b.js",
    "/includes/chunk.362aeddd3dbf62645fee.js",
    "/includes/chunk.3ef5617f627551782588.js",
    "/includes/chunk.3f21208d98ea02ed1901.js",
    "/includes/chunk.40d6ffa75d3ea133243e.js",
    "/includes/chunk.488fa38a909486910654.js",
    "/includes/chunk.4a33cd2350acebb065f8.js",
    "/includes/chunk.4ae3770bbe725b321394.js",
    "/includes/chunk.4c150c9a4d6cc36a6e68.js",
    "/includes/chunk.52207918ec593aa8b4f6.js",
    "/includes/chunk.523ff7f3e6861e3c4d48.js",
    "/includes/chunk.5279d4500a3f4537fb2e.js",
    "/includes/chunk.52b24b284e09dc68877e.js",
    "/includes/chunk.52d4c82c33ddb7e76f41.js",
    "/includes/chunk.55a80a7b4545dacc28c4.js",
    "/includes/chunk.59eab148d569efa8d32e.js",
    "/includes/chunk.5af0bb40c74c34bcb518.js",
    "/includes/chunk.5b6c58fe8caa02f5f09f.js",
    "/includes/chunk.5e775ef8236daf157aba.js",
    "/includes/chunk.5f67569b6e379682e66e.js",
    "/includes/chunk.611d1837664667374f7d.js",
    "/includes/chunk.690def09c7caab0e7b54.js",
    "/includes/chunk.6ef8aeb2aa616d37847c.js",
    "/includes/chunk.768e781cb4bd7f24a008.js",
    "/includes/chunk.784709231937ec78bd8a.js",
    "/includes/chunk.7c0121d594cd3ad03eea.js",
    "/includes/chunk.7e29624775e4f8450eb4.js",
    "/includes/chunk.8761967c5adfb5a13f1b.js",
    "/includes/chunk.8bf5f18cd512f097086b.js",
    "/includes/chunk.8cdbc86950087cf96165.js",
    "/includes/chunk.92a2a8c6785ae7b4b02c.js",
    "/includes/chunk.958d4ffe92baa317d230.js",
    "/includes/chunk.96c085c425a92911d71a.js",
    "/includes/chunk.9aaeab7afdd1230c36dd.js",
    "/includes/chunk.9ac43a427b60a2b4f804.js",
    "/includes/chunk.9d49cee0275ed6b193eb.js",
    "/includes/chunk.9fa3f8cc008451e70e93.js",
    "/includes/chunk.a121028cfd141fbdec40.js",
    "/includes/chunk.a4e8803c2f197a21f5c4.js",
    "/includes/chunk.a592a4fdec0ca4a89de7.js",
    "/includes/chunk.a6a1c1b51f7de0c63870.js",
    "/includes/chunk.b3061b35e33ebaf39669.js",
    "/includes/chunk.b65a3e9cd22754c31d18.js",
    "/includes/chunk.c2c9ff148460f3c9f42f.js",
    "/includes/chunk.c4d5a314ae0830d7efb7.js",
    "/includes/chunk.cc710dd957ef5616758e.js",
    "/includes/chunk.d5e538a9fa95fbbc729b.js",
    "/includes/chunk.db1c38b8de71f8b22009.js",
    "/includes/chunk.dbcbe1e676f09e5411ac.js",
    "/includes/chunk.e2adc074f242c340778f.js",
    "/includes/chunk.eacfbd4f23d2a8f60e93.js",
    "/includes/chunk.ed88b13c8d6a64ca94e5.js",
    "/includes/chunk.fa89f5c8f0071014136f.js",
    "/includes/entry.0d8b05cc732e68416e9a.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.2a9fae15c718fab3f811.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.7042604833e4cdd911ac.js",
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
