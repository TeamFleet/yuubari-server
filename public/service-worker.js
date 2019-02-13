// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.1ade758f306caba2e683.js",
    "/includes/chunk.375542be8f9a3088ffd7.js",
    "/includes/chunk.3ca212de2019dde61634.js",
    "/includes/chunk.584d9ac6e2b0f56bd2ba.js",
    "/includes/chunk.5899565d0d8fef3f1586.js",
    "/includes/chunk.5b647f6a375c01f618d2.js",
    "/includes/chunk.6ca2dd07cecd9770b1ee.js",
    "/includes/chunk.6ca578540ded6162ba89.js",
    "/includes/chunk.6d6d2b0ae72e4f4012a8.js",
    "/includes/chunk.80d200853808ef2d0ee2.js",
    "/includes/chunk.817a3d7d976167117593.js",
    "/includes/chunk.94b794ca1f4acb7f226c.js",
    "/includes/chunk.97118343d743c8db220d.js",
    "/includes/chunk.a06a2b596716f0e6634d.js",
    "/includes/chunk.a11683f0ac42be56787d.js",
    "/includes/chunk.a3c495836f055e30e02e.js",
    "/includes/chunk.ab76db8d1df41369d4aa.js",
    "/includes/chunk.be6514f8f628e86ca5de.js",
    "/includes/chunk.be93c6e83e68929a7f40.js",
    "/includes/chunk.c9623809b444759e5a59.js",
    "/includes/chunk.cb5f8bde122fd67a0674.js",
    "/includes/chunk.cdd5dec1fb2f1532f006.js",
    "/includes/chunk.d2be93f4d3a3084bda3e.js",
    "/includes/chunk.e7229fe9bd42924c85aa.js",
    "/includes/chunk.f02950a4089032487166.js",
    "/includes/entry.4434306d5e3d11d2f46d.js",
    "/includes/entry.75a42a21650af5249c26.js"
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
