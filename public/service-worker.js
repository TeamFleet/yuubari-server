// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.05456b0cf1b5a3702bcd.js",
    "/includes/chunk.06e75bf8c4600c67d589.js",
    "/includes/chunk.15c60b81e931f234a8f6.js",
    "/includes/chunk.3971c67169223a7a7dcf.js",
    "/includes/chunk.3a57a864bc13cc3103e5.js",
    "/includes/chunk.41e67639bf8cc639a34b.js",
    "/includes/chunk.45d4d16a65f7de1250b1.js",
    "/includes/chunk.49bd26447ed456e1c31d.js",
    "/includes/chunk.4ca9c076780f8f31a786.js",
    "/includes/chunk.5fdbe783b83a408f3e47.js",
    "/includes/chunk.6c94fc970cd3315045eb.js",
    "/includes/chunk.6cb5549aac0d095accd7.js",
    "/includes/chunk.8a9a19402441ca7aa84e.js",
    "/includes/chunk.9d4bd016d82538fff5af.js",
    "/includes/chunk.adebbe2b08ad13135a14.js",
    "/includes/chunk.b0ee33f4e1bfec542202.js",
    "/includes/chunk.bcd08079c29dc130e8e6.js",
    "/includes/chunk.bd8766d986d071b5172d.js",
    "/includes/chunk.c1018d28bb4ff50de1a1.js",
    "/includes/chunk.c8c687c998f772cb2945.js",
    "/includes/chunk.cef95b1af56b010e007e.js",
    "/includes/chunk.cfe0e96ffe1a937c3890.js",
    "/includes/chunk.e0ba0467f0696f79837f.js",
    "/includes/chunk.e876a7aad60c044154d6.js",
    "/includes/chunk.ed152c477d1f74e64ded.js",
    "/includes/chunk.ef8ab6e0ffe41ef97761.js",
    "/includes/chunk.f09ec8a103df6d7d00e1.js",
    "/includes/chunk.ff9c9180776d9987d68e.js",
    "/includes/entry.b43bd7643fd6d59a1814.js"
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
