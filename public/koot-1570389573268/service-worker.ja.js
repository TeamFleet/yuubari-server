/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0039497f8b4d4975576b.js",
    "/includes/chunk.057c86760dcd0c765161.js",
    "/includes/chunk.109bb35e8ed98342b6c7.js",
    "/includes/chunk.184d72b30ffd20992599.js",
    "/includes/chunk.18d77f63af3cd7c2bc24.js",
    "/includes/chunk.1a1958f1c0b8e82f759c.js",
    "/includes/chunk.2002f951d4af5eb7119b.js",
    "/includes/chunk.258103a6035e6cba6923.js",
    "/includes/chunk.2693436ba8769334b83b.js",
    "/includes/chunk.26b108ca2d6941155532.js",
    "/includes/chunk.2fd0295094e82149356b.js",
    "/includes/chunk.302d4f830cd9db67be08.js",
    "/includes/chunk.33c57558e5e7a234ffa4.js",
    "/includes/chunk.34514914bce8507f1157.js",
    "/includes/chunk.390450dd8e4cb363a1b7.js",
    "/includes/chunk.3c8368c88bcfd7f78d1a.js",
    "/includes/chunk.3e75b1b31a9949012efb.js",
    "/includes/chunk.41846a4022d2c6291749.js",
    "/includes/chunk.439b8f28b0928168c25b.js",
    "/includes/chunk.5372d5d211815611cfd4.js",
    "/includes/chunk.570d8944439b70c9ab14.js",
    "/includes/chunk.57c6be7d7c46cb54d09e.js",
    "/includes/chunk.5f42e4c3dd9ef305ea8f.js",
    "/includes/chunk.60bded80938d58d2cfc5.js",
    "/includes/chunk.623fec86874dfbc1f34f.js",
    "/includes/chunk.65ef2bf27fcf5afebe79.js",
    "/includes/chunk.66781c80e60267e2ef18.js",
    "/includes/chunk.66cee573dd1a5c88a342.js",
    "/includes/chunk.6b48914c68b42c285588.js",
    "/includes/chunk.705817e6df6dcbb16916.js",
    "/includes/chunk.71c00e4f36d9864edf7d.js",
    "/includes/chunk.72742685aaf95eaae4cc.js",
    "/includes/chunk.7bab2f046e1c0fa4ef9e.js",
    "/includes/chunk.7d2a91403778ea8b8078.js",
    "/includes/chunk.83bce57768e37772963a.js",
    "/includes/chunk.8e9518f9eec781d5b6eb.js",
    "/includes/chunk.8ebe999a5a15cdca415e.js",
    "/includes/chunk.8f522ee2b8a9304c81c0.js",
    "/includes/chunk.90e1070ade4b704b73b4.js",
    "/includes/chunk.97a03ea8f99677565ac5.js",
    "/includes/chunk.9827b4418d56a1d96faa.js",
    "/includes/chunk.9acb58140e4ecd020ee3.js",
    "/includes/chunk.9c3fb42f35881d75a8c8.js",
    "/includes/chunk.a4314c3acefce34771ca.js",
    "/includes/chunk.ad25aec77ba32a54e176.js",
    "/includes/chunk.b1542723a5ede46bf2fc.js",
    "/includes/chunk.b2faf50784a2687860b4.js",
    "/includes/chunk.b59c975397f57a12b80b.js",
    "/includes/chunk.bfef0cd26a82bf2c8a9f.js",
    "/includes/chunk.c2b6aea675e34170b71d.js",
    "/includes/chunk.c9d842617390928ea24b.js",
    "/includes/chunk.d453c7d949f62ce779f2.js",
    "/includes/chunk.d520b1470b6f52fe1e7f.js",
    "/includes/chunk.e07c5744be5d6f8f05c4.js",
    "/includes/chunk.e7a09f4be825d3e60b1f.js",
    "/includes/chunk.e9242adc3e45915a80c8.js",
    "/includes/chunk.e9a87b0f8664dc25726c.js",
    "/includes/chunk.f0d506ee13cc4ebbcb92.js",
    "/includes/chunk.f13cf5cdc9915327e3fb.js",
    "/includes/chunk.f847cd9bf25ac1a94ce5.js",
    "/includes/chunk.fa39e6685221b016ba21.js",
    "/includes/chunk.fac61390aa4fc7bb2778.js",
    "/includes/chunk.ff41f4bc16bbd6fe38bb.js",
    "/includes/entry.1a1653db7899bc860b15.js",
    "/includes/entry.5d7fcd99ed43a50594a9.js",
    "/includes/entry.650cc13640061998dd6a.js",
    "/includes/entry.839291e41b72c3257f96.js",
    "/includes/entry.9f71103e4a5f63e73930.js",
    "/includes/entry.b5f1d2b609c28420a26e.js",
    "/includes/entry.ca8ad97563d85889ce21.js"
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
