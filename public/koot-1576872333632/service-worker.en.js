/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.00f5de89e3d6c37c4ed0.js",
    "/includes/chunk.03e91dda1725cfae5c21.js",
    "/includes/chunk.0438750eea4d56b9266e.js",
    "/includes/chunk.094d03f2758f75768981.js",
    "/includes/chunk.09533114181bb3781dc0.js",
    "/includes/chunk.0a3a93b1ae7f57335d81.js",
    "/includes/chunk.11dbe0b0cff632cfa49b.js",
    "/includes/chunk.1293b4678c44cdf9a615.js",
    "/includes/chunk.1a5bf6d51c2cd7f62188.js",
    "/includes/chunk.20fa5188c13b8b56546a.js",
    "/includes/chunk.2c336ef4a4141e348158.js",
    "/includes/chunk.2f70e8d39f19dd252def.js",
    "/includes/chunk.3142bba59e1572ed44b5.js",
    "/includes/chunk.32ffef1093f9ea4cb553.js",
    "/includes/chunk.408bd31567c5491e87e0.js",
    "/includes/chunk.43793a6dd35198e90c3f.js",
    "/includes/chunk.43fa5cb4483a309ce44a.js",
    "/includes/chunk.45c00415d737f0b86f72.js",
    "/includes/chunk.45d7fad5cd883ad82f2f.js",
    "/includes/chunk.47a30f966920da4a3e67.js",
    "/includes/chunk.48f6610b557f034f2f05.js",
    "/includes/chunk.4c3a2e141bc822a9d502.js",
    "/includes/chunk.503c495e8313d4d77316.js",
    "/includes/chunk.59525bf2f79aaaad341e.js",
    "/includes/chunk.5c34c90967ae6dd48052.js",
    "/includes/chunk.6090e6ae581920193b49.js",
    "/includes/chunk.674420f93cf7b5a123a6.js",
    "/includes/chunk.6b78ef90312f6d602702.js",
    "/includes/chunk.6d656c007dcc8327f737.js",
    "/includes/chunk.6dd34b2cbed6a613e5e1.js",
    "/includes/chunk.6eed37c6be28d151e418.js",
    "/includes/chunk.72585b38b209c5975f7a.js",
    "/includes/chunk.72f82942464e06352d3b.js",
    "/includes/chunk.764ef6ec0b71361a4f2d.js",
    "/includes/chunk.7beb81f6b1a5422e168c.js",
    "/includes/chunk.7ddd9e44aa6fc88faaa7.js",
    "/includes/chunk.7fc90e7bf224ea449727.js",
    "/includes/chunk.885119b0af5ffa524cc8.js",
    "/includes/chunk.90dda3d47050132f448b.js",
    "/includes/chunk.94f40112f5352b5a3e37.js",
    "/includes/chunk.a4e038c01fc8826f0a11.js",
    "/includes/chunk.b72758a3647304344eda.js",
    "/includes/chunk.b82d8c07bd825b5060c1.js",
    "/includes/chunk.b990e3bb10d4f9004c5b.js",
    "/includes/chunk.c1a0c91deb8670dc5936.js",
    "/includes/chunk.c71045dd5f6810e48239.js",
    "/includes/chunk.c91e4b4fbe31785d6a17.js",
    "/includes/chunk.d4678dd5cb0086947168.js",
    "/includes/chunk.d46dd7fe10fe133928b0.js",
    "/includes/chunk.d8b6b3d6fa744ae0d294.js",
    "/includes/chunk.d96ff30e1d0e7570434b.js",
    "/includes/chunk.db27ed1f694dc821a670.js",
    "/includes/chunk.db61b77f967a39deeaac.js",
    "/includes/chunk.dc48851044967a8a4dc7.js",
    "/includes/chunk.dfb9bf8ef6543eaf4029.js",
    "/includes/chunk.e28b198fd88af0995030.js",
    "/includes/chunk.ebe0b43c17e21d8ad699.js",
    "/includes/chunk.ecf5854bbb0a4b743692.js",
    "/includes/chunk.ee92c716eafbb4b21929.js",
    "/includes/chunk.f7b226dcf83d5d867403.js",
    "/includes/chunk.fa5738bd115e629c5669.js",
    "/includes/chunk.fabbd106e623e49cdab5.js",
    "/includes/chunk.ff89f4c7431445ec11be.js",
    "/includes/entry.37815f7bd88f96da4d2e.js",
    "/includes/entry.760dbd00f2f81953e9c7.js",
    "/includes/entry.96afa3c7d8ee0989b56c.js",
    "/includes/entry.a28dfc07b24507722238.js",
    "/includes/entry.a9c5c4ac1bb5a384dc59.js",
    "/includes/entry.c8628d63a63749dd980b.js",
    "/includes/entry.cb736e8af5f272e5a3d1.js"
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
