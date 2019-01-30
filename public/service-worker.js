// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0202eccd57dde0c0fce7.js",
    "/includes/chunk.0f787b368dc28a8a0e29.js",
    "/includes/chunk.202a21453ddc930eced7.js",
    "/includes/chunk.2516119f913d0ad4f041.js",
    "/includes/chunk.3c732c96ce2a06c6d7e8.js",
    "/includes/chunk.4598cdc810d3b9e4156f.js",
    "/includes/chunk.481acdfc6b7d1c3b57d2.js",
    "/includes/chunk.60904db6f07d32ddc7ea.js",
    "/includes/chunk.62b19c9fa2a09d691ade.js",
    "/includes/chunk.6de6de7861208a392509.js",
    "/includes/chunk.7989909e486ad55d6966.js",
    "/includes/chunk.7f39ec99600a43b47b78.js",
    "/includes/chunk.8491f3b2b7d07a901bf1.js",
    "/includes/chunk.9bf9fb089fa796cb8151.js",
    "/includes/chunk.9f7513038c4221601557.js",
    "/includes/chunk.a89961f33373a241cfe8.js",
    "/includes/chunk.aa70e39d08fbe4c317ee.js",
    "/includes/chunk.b110cf630cbae7309003.js",
    "/includes/chunk.b4229ca20c511790eeaa.js",
    "/includes/chunk.c4ee9fe3af4376be8780.js",
    "/includes/chunk.c5f04c72a71ab8e36365.js",
    "/includes/chunk.d2668ceb8ef87551e227.js",
    "/includes/chunk.d8ff56d70b65a9a8b378.js",
    "/includes/chunk.ef99146f491cb5fa6437.js",
    "/includes/chunk.ffab876f6ca30eeb6e3a.js",
    "/includes/entry.c74f21f902f13903af95.js",
    "/includes/entry.cc226bab7d972e4283d8.js"
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
    if (event.request.method.toLowerCase() !== 'get') return false
    if (event.request.url.indexOf(location.origin) < 0) return false
    if (event.request.url.indexOf('google-analytics.com') !== -1) return false
    if (event.request.url.indexOf(location.origin + '/api') > -1) return false
    if (/\/service-worker(\.[a-z-_]+){0,1}\.js/i.test(event.request.url)) return false

    return true
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
