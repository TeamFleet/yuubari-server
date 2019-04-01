// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.017fb46fff40af761ded.js",
    "/includes/chunk.09ccf4c548454cc417a4.js",
    "/includes/chunk.1964702e4efcfb65c197.js",
    "/includes/chunk.1bc4852cf8eef3b32b6a.js",
    "/includes/chunk.332eff9ecbe257ecb2fa.js",
    "/includes/chunk.3919b6001295fd043d99.js",
    "/includes/chunk.3a3e2ef63e84bb0051dc.js",
    "/includes/chunk.58d79a48d0ff3382ca37.js",
    "/includes/chunk.5fcf34b7bb29076050f8.js",
    "/includes/chunk.60c5c5938092b55493cc.js",
    "/includes/chunk.711fbe53972d7c688e9f.js",
    "/includes/chunk.84d9d4e72d838b6cd449.js",
    "/includes/chunk.8554a1d7795ba4effb36.js",
    "/includes/chunk.b6f21963e11cd5b74e62.js",
    "/includes/chunk.bf43215b7d267a775812.js",
    "/includes/chunk.bfaf06e925525ae8c020.js",
    "/includes/chunk.c804a9246cec3d01dc95.js",
    "/includes/chunk.d3ac00ac9eb72d437d8f.js",
    "/includes/chunk.da2de79ad69db147ebce.js",
    "/includes/chunk.dd79e5d357ee466995f0.js",
    "/includes/chunk.e62853f3aaf69032e5eb.js",
    "/includes/chunk.e86771dec82999c64dee.js",
    "/includes/chunk.ed3494e6d2920f8bc0f3.js",
    "/includes/chunk.ff19cd3f3320284ee4be.js",
    "/includes/chunk.ff91423e029597b41f04.js",
    "/includes/entry.0d9877c0736b8aa48871.js",
    "/includes/entry.6edd1c07af452baea68e.js",
    "/includes/entry.9e18972f6506b060b39b.js",
    "/includes/entry.e44cdcf4eaf9229eb1b0.js"
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
