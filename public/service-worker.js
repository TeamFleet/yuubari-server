// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0d711d119ad9f4bebaa7.js",
    "/includes/chunk.202a21453ddc930eced7.js",
    "/includes/chunk.3c732c96ce2a06c6d7e8.js",
    "/includes/chunk.60904db6f07d32ddc7ea.js",
    "/includes/chunk.6200266a119a5b3fd4fc.js",
    "/includes/chunk.62b19c9fa2a09d691ade.js",
    "/includes/chunk.6de6de7861208a392509.js",
    "/includes/chunk.7989909e486ad55d6966.js",
    "/includes/chunk.8491f3b2b7d07a901bf1.js",
    "/includes/chunk.94fafb2036704d71a107.js",
    "/includes/chunk.9f7513038c4221601557.js",
    "/includes/chunk.a89961f33373a241cfe8.js",
    "/includes/chunk.b110cf630cbae7309003.js",
    "/includes/chunk.b832cfc95c56e53cbd51.js",
    "/includes/chunk.b867d5c955e5a0e10cc2.js",
    "/includes/chunk.cfe615b4d080a654269d.js",
    "/includes/chunk.d8ff56d70b65a9a8b378.js",
    "/includes/chunk.dfb641b1558056eecb5a.js",
    "/includes/chunk.e9d0b95b9635d091fd74.js",
    "/includes/chunk.ea5859d8281e861f7258.js",
    "/includes/chunk.ed43ff12a653d88f88b8.js",
    "/includes/chunk.f222c53aa43609e113d2.js",
    "/includes/chunk.f49e82634bbe2b781802.js",
    "/includes/chunk.fdd1498c9e0cc5e6a8b3.js",
    "/includes/chunk.ffab876f6ca30eeb6e3a.js",
    "/includes/entry.201ef2aa415cf1cf1e1e.js",
    "/includes/entry.c74f21f902f13903af95.js"
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
