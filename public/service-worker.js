// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.068de2a62f4e964d01db.js",
    "/includes/chunk.08d64498b44fc80a5bbd.js",
    "/includes/chunk.13c218309edb060babe6.js",
    "/includes/chunk.1e4de1afce591e6da58e.js",
    "/includes/chunk.2188bb337d4dfca2f58c.js",
    "/includes/chunk.2c07b7c5dc0143e44f91.js",
    "/includes/chunk.3035ce03e324bd48d902.js",
    "/includes/chunk.37291539a990c32f6601.js",
    "/includes/chunk.39ed8569c0e5792a2e5d.js",
    "/includes/chunk.3a9874d4fc65fda60158.js",
    "/includes/chunk.3b3f7935868a562b352e.js",
    "/includes/chunk.5214b4e6ad1b987b3fa6.js",
    "/includes/chunk.5db41be8ba51d8e8bdde.js",
    "/includes/chunk.6edb7db64ef7c5c5ff2f.js",
    "/includes/chunk.8678496bd971c8cc032d.js",
    "/includes/chunk.8c0a16e727797b5ede6c.js",
    "/includes/chunk.8c89145e6ae280762df8.js",
    "/includes/chunk.8d8534ee82a4bf13657a.js",
    "/includes/chunk.a784b13e1b3dddb0d1b5.js",
    "/includes/chunk.a958c89ec74819d632f5.js",
    "/includes/chunk.c49c0bad6208b14781ee.js",
    "/includes/chunk.c4c05f7f2117556276ab.js",
    "/includes/chunk.c79a1986c43a19c82952.js",
    "/includes/chunk.cdd03fc3b1e595991c6a.js",
    "/includes/chunk.f83958133f77a0882232.js",
    "/includes/entry.264cb06525192e0cb17e.js",
    "/includes/entry.a351095be7d166b8481c.js"
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
