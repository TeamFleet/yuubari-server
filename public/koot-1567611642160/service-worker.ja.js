/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.02d2401097167d55ff30.js",
    "/includes/chunk.042d0d77670dcff34656.js",
    "/includes/chunk.08df1ee6ee0dfda34012.js",
    "/includes/chunk.0e4b7db23c8d9afec440.js",
    "/includes/chunk.14abd20d995e4bd47b91.js",
    "/includes/chunk.1990abeafdc5212d19e0.js",
    "/includes/chunk.1b79e06b32ccd5e8d956.js",
    "/includes/chunk.20930a3c8e85fc589296.js",
    "/includes/chunk.2110dc8667feb38b7d26.js",
    "/includes/chunk.23cd3914f5b1d915c9f1.js",
    "/includes/chunk.2f65e9d0ea9da42f2944.js",
    "/includes/chunk.34b79fe51a6371c95d1b.js",
    "/includes/chunk.37c2d943277b3a60b653.js",
    "/includes/chunk.411a072fcd590b1c5d99.js",
    "/includes/chunk.40ab1e098efeeee1acf9.js",
    "/includes/chunk.45bfc68b8c92fe959cb5.js",
    "/includes/chunk.46a01fe0036febe31f56.js",
    "/includes/chunk.47a8a0dd2a93e6033996.js",
    "/includes/chunk.4b48c84763f9c6646d6c.js",
    "/includes/chunk.4a4bd7bf70a836166c4a.js",
    "/includes/chunk.4f8e58352120b6c20503.js",
    "/includes/chunk.53bfada450491b46f5e0.js",
    "/includes/chunk.56ca6ae661767a6ddfa0.js",
    "/includes/chunk.581e8bcda5706d5d35de.js",
    "/includes/chunk.59dc108e9b1b1d209c36.js",
    "/includes/chunk.5e7124790a84f3d3322d.js",
    "/includes/chunk.636cc952d7b6e4d44099.js",
    "/includes/chunk.63b968b1bb1ae20842a5.js",
    "/includes/chunk.6ca2c57a52d14f094a4f.js",
    "/includes/chunk.6b54422bf6e0f4105aac.js",
    "/includes/chunk.70b2ddcddc1da9548f2f.js",
    "/includes/chunk.7a77cf338d40874bba39.js",
    "/includes/chunk.71afa386ad1f9e08bd00.js",
    "/includes/chunk.7b3cea250c53c6c41764.js",
    "/includes/chunk.815fd5cfa322592bb10c.js",
    "/includes/chunk.8925ba56b7d47a95b571.js",
    "/includes/chunk.8db57c1061fac0f6db26.js",
    "/includes/chunk.8dc0ede381cbbdc3af5e.js",
    "/includes/chunk.94d43f1c3b2074f9482a.js",
    "/includes/chunk.94c8b2981a36b0240a1b.js",
    "/includes/chunk.9538068319d1a5e65ef8.js",
    "/includes/chunk.97a8b72f275151e21c97.js",
    "/includes/chunk.aae7f406610809600263.js",
    "/includes/chunk.b3fe5c86d8579d4260d4.js",
    "/includes/chunk.bddbc3f06df4d1016848.js",
    "/includes/chunk.ced3fb072be15980970f.js",
    "/includes/chunk.d373c2478c429a6ecd6f.js",
    "/includes/chunk.d5ccecc85789fa809319.js",
    "/includes/chunk.d801a12c7888e4dea920.js",
    "/includes/chunk.d6eded636d06195f7c47.js",
    "/includes/chunk.d9d1a8e26e98350b8052.js",
    "/includes/chunk.e018bf172d7134c96c3c.js",
    "/includes/chunk.e30693614c241d543b55.js",
    "/includes/chunk.e566ae9bc2d243dbb99e.js",
    "/includes/chunk.e7dd07257cb7dcd61f40.js",
    "/includes/chunk.e8fbeadc234afda05d1a.js",
    "/includes/chunk.f4329f484882322c2c36.js",
    "/includes/chunk.f5fe492753991afedd3a.js",
    "/includes/chunk.f60ebf0f0296f7b9d206.js",
    "/includes/chunk.f6ee02058a5a80ddd5fd.js",
    "/includes/chunk.f8c74cfc8e9f64377cb5.js",
    "/includes/chunk.f7a1aa7bb4de498147dd.js",
    "/includes/chunk.fbfac3051ecf45331352.js",
    "/includes/chunk.fde3439c76a2ae2e590c.js",
    "/includes/entry.002b3896904ce45c457c.js",
    "/includes/entry.bc9313e8ae177269e2d7.js",
    "/includes/entry.6f53d180a2729678664e.js",
    "/includes/entry.cb3b4ac7bbe58438d5b6.js",
    "/includes/entry.df7eb4a46cee79e6f594.js",
    "/includes/entry.f25edcd3b511be03bb1e.js"
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
