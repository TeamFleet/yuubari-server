// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.03b4e86c3cec47ff6fbd.js",
    "/includes/chunk.04daca182c2e595a74f1.js",
    "/includes/chunk.127504833b3f1d2d1b33.js",
    "/includes/chunk.3555532050fec2c9268b.js",
    "/includes/chunk.3fca9c3ea3de3bdf94db.js",
    "/includes/chunk.40aa01c1442d5182273d.js",
    "/includes/chunk.4140b5b60b6d6585003c.js",
    "/includes/chunk.4356b854100fe3fb1db8.js",
    "/includes/chunk.527b05e90d7d5ebe4c21.js",
    "/includes/chunk.66aababc55efa0867a71.js",
    "/includes/chunk.6d14ad7f29ee970e37cc.js",
    "/includes/chunk.6d35a810d70ee22c52af.js",
    "/includes/chunk.6e6aa31b81aedb45e8db.js",
    "/includes/chunk.7924742f23578659bf93.js",
    "/includes/chunk.7cad5642a39311de4aa9.js",
    "/includes/chunk.838add9f559f088a1558.js",
    "/includes/chunk.a7eb0aa59bdc217f35f5.js",
    "/includes/chunk.a9a8e0b5b288ae32a39d.js",
    "/includes/chunk.c03c3620f7244d8c0a87.js",
    "/includes/chunk.d0b5f90782207c2b602c.js",
    "/includes/chunk.d24b3da35ff56344d45e.js",
    "/includes/chunk.de3429c657e2ef2aa4ca.js",
    "/includes/chunk.e28be10aeccc8a9db97e.js",
    "/includes/chunk.e7f65f0227875b827897.js",
    "/includes/chunk.e848eb760543386447df.js",
    "/includes/chunk.eabfbce3cbf86c5a6d50.js",
    "/includes/chunk.eb74056e4f790234bd48.js",
    "/includes/chunk.ff444ea91e369f64a024.js",
    "/includes/entry.cb77d21290f784c8bb64.js"
]

function addToCache(request, response) {
    if (response.ok) {
        const copy = response.clone()
        caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy)
        })
    } else {
        console.log('Request fail', response, request)
    }
    return response
}

function fetchFromCache(event) {
    return caches.match(event.request).then(response => {
        if (!response) {
            // A synchronous error that will kick off the catch handler
            throw Error(`${event.request.url} not found in cache`)
        }
        return response
    })
}

function offlineResponse() {
    return new Response('Sorry, the application is offline.')
}

function respondFromNetworkThenCache(event) {
    // console.log('Network first ', event.request.url)
    // Check network first, then cache
    const request = event.request
    event.respondWith(
        fetch(request)
            .then(response => addToCache(request, response))
            .catch(() => fetchFromCache(event))
            .catch(() => offlineResponse())
    )
}

function respondFromCacheThenNetwork(event) {
    // console.log('Cache first ', event.request.url)
    // Check cache first, then network
    const request = event.request
    event.respondWith(
        fetchFromCache(event)
            .catch(() => fetch(request))
            .then(response => addToCache(request, response))
            .catch(() => offlineResponse())
    )
}

function shouldHandleFetch(event) {
    return (
        event.request.method.toLowerCase() === 'get'
        && (event.request.url.indexOf(location.origin) > -1)
        && (event.request.url.indexOf('google-analytics.com') === -1)
        && (event.request.url.indexOf(location.origin + '/api') < 0)
    )
}

function shouldRespondFromNetworkThenCache(event) {
    return (
        event.request.headers.get('Accept').indexOf('text/html') >= 0
        // || /chunk.+\.js$/.test(event.request.url)
    )
}

// Open cache and store assets
self.addEventListener('install', (event) => {
    // console.log('Service Worker - INSTALL')
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // console.log(urlsToCache)
                return cache.addAll(urlsToCache);
            })
    )
})

self.addEventListener('fetch', (event) => {
    if (shouldHandleFetch(event)) {
        // console.log('Service Worker - FETCH', event.request)
        if (shouldRespondFromNetworkThenCache(event)) {
            respondFromNetworkThenCache(event)
        } else {
            respondFromCacheThenNetwork(event)
        }
    }
})

self.addEventListener('activate', (event) => {
    // console.log('Service Worker - ACTIVATE')
    var cacheWhitelist = [CACHE_NAME]
    // Clean up old cache versions
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            )
        })
    )
})
