// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0c0ccf643e3d0f881500.js",
    "/includes/chunk.0cd82322de0d8e11b04e.js",
    "/includes/chunk.0fa9f5644e7c2636a23f.js",
    "/includes/chunk.10b108279d9d77524bbd.js",
    "/includes/chunk.22537e11b1e7063e763c.js",
    "/includes/chunk.24b23dfd38eef58d0444.js",
    "/includes/chunk.2aea1054113e436a3522.js",
    "/includes/chunk.38a4c2d09ef4fc30953f.js",
    "/includes/chunk.4d6cf1cf746525ef3afa.js",
    "/includes/chunk.501f4d26a922fa6de550.js",
    "/includes/chunk.654ba60e0695aecdabbb.js",
    "/includes/chunk.79003893745050e9b847.js",
    "/includes/chunk.7b72ba8fb747ff897bec.js",
    "/includes/chunk.8abddb54201d89151276.js",
    "/includes/chunk.9a0ca0a59a7597bf3b75.js",
    "/includes/chunk.a0cc9b53f36e2cdca5fc.js",
    "/includes/chunk.a81452ef7a7a3e1ae1fd.js",
    "/includes/chunk.b9a57b48a82fd93ec4ef.js",
    "/includes/chunk.bf8fc657b3fdb82760e0.js",
    "/includes/chunk.c2ca139022bf829b85c5.js",
    "/includes/chunk.ccdd5d5272046708ad55.js",
    "/includes/chunk.ce48ac9ee703fe5d92a2.js",
    "/includes/chunk.d4bf5590995935b913af.js",
    "/includes/chunk.d75e02d9bc7f50d59687.js",
    "/includes/chunk.ee26fb2f7a9211bff787.js",
    "/includes/entry.892bd6ee00b1dafc33c9.js",
    "/includes/entry.e61719574d7aa339dcab.js"
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
