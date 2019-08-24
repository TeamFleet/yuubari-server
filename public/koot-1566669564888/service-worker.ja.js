/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.048c4f61b668bff09e56.js",
    "/includes/chunk.05503a051157b4816eac.js",
    "/includes/chunk.0c90b23ad26f2eb02795.js",
    "/includes/chunk.0dd37e57d3b5e17f6688.js",
    "/includes/chunk.13201a83da4f2e8fa80d.js",
    "/includes/chunk.14afe526e0b558ba790c.js",
    "/includes/chunk.1e994c4af598ef44f66d.js",
    "/includes/chunk.25343207d85ad98c0663.js",
    "/includes/chunk.2ad9b99d0aa0779fc3ac.js",
    "/includes/chunk.2d6f513fe2315c57797c.js",
    "/includes/chunk.2dc28b45e969ac84febe.js",
    "/includes/chunk.3503a9b70ba2c7c7e514.js",
    "/includes/chunk.35c1500c10bb0b87d385.js",
    "/includes/chunk.3a12d6a85cc99101826a.js",
    "/includes/chunk.3ee0bbf456c71d636e7d.js",
    "/includes/chunk.46c5fa17b878b1ce44e5.js",
    "/includes/chunk.4957c17dd970a6376bd6.js",
    "/includes/chunk.4b790dcab128790f9fb8.js",
    "/includes/chunk.5169a632e516ec15b8c1.js",
    "/includes/chunk.58376a901244838e5cca.js",
    "/includes/chunk.6465740eb5686d37bbf8.js",
    "/includes/chunk.6662b0b8e8eba77f3f37.js",
    "/includes/chunk.6bc537290ae39aa17e47.js",
    "/includes/chunk.6f5f7d863f4ab17e46e0.js",
    "/includes/chunk.722a2263b707aa6da1d6.js",
    "/includes/chunk.7446a627347ab3d1d87a.js",
    "/includes/chunk.764674271202685d2ed8.js",
    "/includes/chunk.7dd7aaee349c76e15ac8.js",
    "/includes/chunk.7e7976be01332b22e645.js",
    "/includes/chunk.7ece5aef186cabdc1f98.js",
    "/includes/chunk.80bce17e26c9e7b3d4bf.js",
    "/includes/chunk.8248fe3b21ff8476f1d7.js",
    "/includes/chunk.877f43ac3cea1347a922.js",
    "/includes/chunk.8954825d2b8cff21a2f0.js",
    "/includes/chunk.8afadfdcaa98bc1c1d90.js",
    "/includes/chunk.8c03d2c12038969cca91.js",
    "/includes/chunk.8fccb3681ef79da7d395.js",
    "/includes/chunk.99ca24c4da095bc6437f.js",
    "/includes/chunk.9a7c4a932eee3175b8df.js",
    "/includes/chunk.9efbecdde93c6348ec58.js",
    "/includes/chunk.a358c01f0ff580522fed.js",
    "/includes/chunk.a54063686be822f1ab31.js",
    "/includes/chunk.a7abe85a5eaed8b1ea08.js",
    "/includes/chunk.a9867a3ffe49c9e56630.js",
    "/includes/chunk.abce9b4b567f217deeb1.js",
    "/includes/chunk.b37640169ee8345d0c4f.js",
    "/includes/chunk.bcc325e6d472a62507b7.js",
    "/includes/chunk.caca08c385a8ba8c76cb.js",
    "/includes/chunk.cc9b2d027728470bf7b5.js",
    "/includes/chunk.d1624ad06b1ff9b6c8dc.js",
    "/includes/chunk.d7c6f5730ce8b2903777.js",
    "/includes/chunk.d896bd0afcd315a7229e.js",
    "/includes/chunk.d9f94ae6eb72066fe925.js",
    "/includes/chunk.db58baee160aba344538.js",
    "/includes/chunk.db5db10a8a1fe375041d.js",
    "/includes/chunk.dd147f892ae9a0086490.js",
    "/includes/chunk.dd792dfb1d418d6bf580.js",
    "/includes/chunk.ded0c6188bcca44bfae2.js",
    "/includes/chunk.df001c3f6cc19331b5dc.js",
    "/includes/chunk.e1ff15b99f16d636c911.js",
    "/includes/chunk.f12408a7e9c13392a3f6.js",
    "/includes/chunk.f505660756f37491a0d8.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.1c0658ee955e26c2ce8f.js",
    "/includes/entry.5f8251340bcb57798485.js",
    "/includes/entry.8eec9d0907e617a541bb.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js",
    "/includes/entry.ffefc90811de560873b4.js"
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
