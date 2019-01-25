// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.013421c6f8780b1578b2.js",
    "/includes/chunk.0491ab91f1e5db8a4c0b.js",
    "/includes/chunk.1678d923e10df8a99017.js",
    "/includes/chunk.2517e62494692dd13faf.js",
    "/includes/chunk.18b298f90bb11c6899da.js",
    "/includes/chunk.4c664619a4485643b4b7.js",
    "/includes/chunk.5ae1cff2766cb4ed625f.js",
    "/includes/chunk.5bb98da609641c550286.js",
    "/includes/chunk.5e6395730dd92e721354.js",
    "/includes/chunk.638e743d6913f4a6fbea.js",
    "/includes/chunk.65032b71e28ce8f3cdfb.js",
    "/includes/chunk.7ba42d9449d08968a37f.js",
    "/includes/chunk.7bcc3d9dab4201dede26.js",
    "/includes/chunk.8171e8d1e10026ed703b.js",
    "/includes/chunk.a1badc524460fbeab256.js",
    "/includes/chunk.b9e909517104b303d726.js",
    "/includes/chunk.bca98b11cf7787c03184.js",
    "/includes/chunk.cee4480dc6d1593bda3f.js",
    "/includes/chunk.cfd8baa9c94f06796bde.js",
    "/includes/chunk.d0c7c632ad2aff2e0cac.js",
    "/includes/chunk.d1c9ee14d457f4ef5651.js",
    "/includes/chunk.dca6d4eb1161520ea9e7.js",
    "/includes/chunk.e11e5e92bfa270f8bd15.js",
    "/includes/chunk.eb2cb7b1a280c3b824c6.js",
    "/includes/chunk.ec276fd3da0ae62e3569.js",
    "/includes/entry.c74f21f902f13903af95.js",
    "/includes/entry.dced28b9ad41a80eb228.js"
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
