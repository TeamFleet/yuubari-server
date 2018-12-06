// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.02bd5605e509839ba80f.js",
    "/includes/chunk.226b9c647dc8a7095bf5.js",
    "/includes/chunk.2504313a31ccf0d743a7.js",
    "/includes/chunk.2597f6fd4bb9ca07dcaa.js",
    "/includes/chunk.2a398fae3d9da9ba242d.js",
    "/includes/chunk.2ca0077414c30b84d6f9.js",
    "/includes/chunk.3d6847c45f507cd00bcb.js",
    "/includes/chunk.4069545083b6edab8103.js",
    "/includes/chunk.431120fc865d8de33e63.js",
    "/includes/chunk.51d27ac2ef5038863907.js",
    "/includes/chunk.5f5bafd2cd5f84a616c3.js",
    "/includes/chunk.65f9cbc06e2d377ca13c.js",
    "/includes/chunk.6828a1dfb4cba1aa7ca2.js",
    "/includes/chunk.7443c5d7849b75df372d.js",
    "/includes/chunk.8bd5ea2f89227b6c445d.js",
    "/includes/chunk.8e873aa962f0372b58a3.js",
    "/includes/chunk.9dc21d5739166109dc97.js",
    "/includes/chunk.bbd915fa5941725163ce.js",
    "/includes/chunk.c0dcba398eb9036c6fbd.js",
    "/includes/chunk.c5fd41143a4c9a8e109a.js",
    "/includes/chunk.cb421ab54f34041a3d46.js",
    "/includes/chunk.cc0c125e3d2ec58b5cda.js",
    "/includes/chunk.d5d795d7b716dce676d9.js",
    "/includes/chunk.d80db6e52cda4ffd2e55.js",
    "/includes/chunk.d9f8e7a243080d1dafdf.js",
    "/includes/chunk.e81491af512b920dafe6.js",
    "/includes/chunk.f346bd064e6f8239e78d.js",
    "/includes/chunk.f398f0f5968bd07da0f8.js",
    "/includes/chunk.fcf274ca1b008f73ec62.js",
    "/includes/entry.453bd792d30f0900f6da.js"
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
