/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.02d2401097167d55ff30.js",
    "/includes/chunk.08df1ee6ee0dfda34012.js",
    "/includes/chunk.0c1e22a6d3cccffceb99.js",
    "/includes/chunk.0e4b7db23c8d9afec440.js",
    "/includes/chunk.1b79e06b32ccd5e8d956.js",
    "/includes/chunk.1feb8970224989dbba25.js",
    "/includes/chunk.20930a3c8e85fc589296.js",
    "/includes/chunk.2f65e9d0ea9da42f2944.js",
    "/includes/chunk.34b79fe51a6371c95d1b.js",
    "/includes/chunk.3c42974f30f777dda17b.js",
    "/includes/chunk.40ab1e098efeeee1acf9.js",
    "/includes/chunk.411a072fcd590b1c5d99.js",
    "/includes/chunk.43fd1832508b525a71eb.js",
    "/includes/chunk.46a01fe0036febe31f56.js",
    "/includes/chunk.45bfc68b8c92fe959cb5.js",
    "/includes/chunk.47a8a0dd2a93e6033996.js",
    "/includes/chunk.4a4bd7bf70a836166c4a.js",
    "/includes/chunk.4b48c84763f9c6646d6c.js",
    "/includes/chunk.4c3d8bcfce7f13e594c8.js",
    "/includes/chunk.4f8e58352120b6c20503.js",
    "/includes/chunk.53bfada450491b46f5e0.js",
    "/includes/chunk.568dd79fff6f92b6aa7d.js",
    "/includes/chunk.56ca6ae661767a6ddfa0.js",
    "/includes/chunk.581e8bcda5706d5d35de.js",
    "/includes/chunk.59dc108e9b1b1d209c36.js",
    "/includes/chunk.5e7124790a84f3d3322d.js",
    "/includes/chunk.6165fa7ff5649255b799.js",
    "/includes/chunk.636cc952d7b6e4d44099.js",
    "/includes/chunk.63b968b1bb1ae20842a5.js",
    "/includes/chunk.64bfd8e4e5d42644e837.js",
    "/includes/chunk.6a46f8e7e05cb1743f12.js",
    "/includes/chunk.6a6669ad0a92a05cfa3b.js",
    "/includes/chunk.6ae59640cb75f0d4381a.js",
    "/includes/chunk.71afa386ad1f9e08bd00.js",
    "/includes/chunk.7a77cf338d40874bba39.js",
    "/includes/chunk.815fd5cfa322592bb10c.js",
    "/includes/chunk.858c4e27140e985d330b.js",
    "/includes/chunk.8db57c1061fac0f6db26.js",
    "/includes/chunk.8dc0ede381cbbdc3af5e.js",
    "/includes/chunk.94c8b2981a36b0240a1b.js",
    "/includes/chunk.94d43f1c3b2074f9482a.js",
    "/includes/chunk.9538068319d1a5e65ef8.js",
    "/includes/chunk.97a8b72f275151e21c97.js",
    "/includes/chunk.a51f651479a05c85afae.js",
    "/includes/chunk.aae7f406610809600263.js",
    "/includes/chunk.b3fe5c86d8579d4260d4.js",
    "/includes/chunk.b64b0608dcd681bbd930.js",
    "/includes/chunk.bcd93be7224d6436bcd4.js",
    "/includes/chunk.bddbc3f06df4d1016848.js",
    "/includes/chunk.c53200520e330326d86c.js",
    "/includes/chunk.ce0ed19f1c01b6c2a234.js",
    "/includes/chunk.ced3fb072be15980970f.js",
    "/includes/chunk.d373c2478c429a6ecd6f.js",
    "/includes/chunk.d5ccecc85789fa809319.js",
    "/includes/chunk.e018bf172d7134c96c3c.js",
    "/includes/chunk.e10310e14f3ef583f8d2.js",
    "/includes/chunk.e30693614c241d543b55.js",
    "/includes/chunk.e3ca443d79020e3db553.js",
    "/includes/chunk.e566ae9bc2d243dbb99e.js",
    "/includes/chunk.e8fbeadc234afda05d1a.js",
    "/includes/chunk.f4329f484882322c2c36.js",
    "/includes/chunk.f6ee02058a5a80ddd5fd.js",
    "/includes/chunk.fbfac3051ecf45331352.js",
    "/includes/chunk.fde3439c76a2ae2e590c.js",
    "/includes/entry.5f97a28394502941fca0.js",
    "/includes/entry.bc9313e8ae177269e2d7.js",
    "/includes/entry.cb3b4ac7bbe58438d5b6.js",
    "/includes/entry.de952eaf8e3f9bd01c0c.js",
    "/includes/entry.df7eb4a46cee79e6f594.js",
    "/includes/entry.fb62988cdd40bb0a1672.js"
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
