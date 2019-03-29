// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.03f4755541ebd5454f4d.js",
    "/includes/chunk.04bfab840f2be4ba4fb7.js",
    "/includes/chunk.0b7c234313928bb82ad9.js",
    "/includes/chunk.0bd1e13c17503cd56f78.js",
    "/includes/chunk.21f5dbac59f480e8b136.js",
    "/includes/chunk.29990fb9f820fba0207c.js",
    "/includes/chunk.33e9298a59392d307d44.js",
    "/includes/chunk.35d33ecd25b831f19425.js",
    "/includes/chunk.36eef5c7a60e7f380c02.js",
    "/includes/chunk.43d481cb0740ae604227.js",
    "/includes/chunk.597b0574f419248905ba.js",
    "/includes/chunk.6290fa747444e40a3650.js",
    "/includes/chunk.75f6d0d9b6b972d423ef.js",
    "/includes/chunk.7fbc0d2b155a5dc13fd0.js",
    "/includes/chunk.83034c9557becc755a8a.js",
    "/includes/chunk.9168d473c7fec1a7aada.js",
    "/includes/chunk.9291bbc32db3f07feeee.js",
    "/includes/chunk.9928616082f6674aa7d4.js",
    "/includes/chunk.b0e8a675e0642dcc2e98.js",
    "/includes/chunk.bd016e696dc35c130bb9.js",
    "/includes/chunk.c1c4c6a178a057d47b67.js",
    "/includes/chunk.cd7e6d319fe30e01c853.js",
    "/includes/chunk.d18118dca1d4f4d25ff6.js",
    "/includes/chunk.f2588401572f445ab418.js",
    "/includes/chunk.f6e41b2be68bd4b1461e.js",
    "/includes/entry.06991ba1da1398e7a7a0.js",
    "/includes/entry.0d9877c0736b8aa48871.js",
    "/includes/entry.75f1ce2844ebc4fdc3f1.js",
    "/includes/entry.80c50029ba1e14d310e4.js"
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
