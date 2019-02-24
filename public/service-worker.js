// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0190f4e77b21a72dd862.js",
    "/includes/chunk.0bfa7d9ce62d6eb64cdc.js",
    "/includes/chunk.13f3fc1538046c4e741c.js",
    "/includes/chunk.19fb5c49fbfe84c88ec3.js",
    "/includes/chunk.26042168bf06360c56af.js",
    "/includes/chunk.2c9f9c004da5b151d0a6.js",
    "/includes/chunk.31543558093a03f54ce9.js",
    "/includes/chunk.3501010ab9d8a06c4c23.js",
    "/includes/chunk.4a3dcd09d802809d385e.js",
    "/includes/chunk.5272a8a3001d3135b7fe.js",
    "/includes/chunk.59e1f652c9aa4ac3f681.js",
    "/includes/chunk.5d5c88aa8609441f134d.js",
    "/includes/chunk.5daf353a96a4def7c71b.js",
    "/includes/chunk.72679de3307faafe627d.js",
    "/includes/chunk.7c09005aa0bb0c162dfa.js",
    "/includes/chunk.9fc4f4cded7c361e818b.js",
    "/includes/chunk.aff7f33b9111b20f8872.js",
    "/includes/chunk.b843ff2a5aba4cfc22a9.js",
    "/includes/chunk.c1f6da76c7a007493b20.js",
    "/includes/chunk.c34b9bfd9a1636df4ecb.js",
    "/includes/chunk.d0a4854c21b69b4660e8.js",
    "/includes/chunk.d93f50df5022215cafee.js",
    "/includes/chunk.dffaad5ccb38ed12c31d.js",
    "/includes/chunk.e12ecd5328f9ee689dd7.js",
    "/includes/chunk.fc855143fa8bd5d05b78.js",
    "/includes/entry.96a6dfecbfed12a100f6.js",
    "/includes/entry.a0c9f182ce63ecbb044d.js"
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
