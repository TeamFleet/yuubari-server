// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.02571da1a84dadd175ce.js",
    "/includes/chunk.0d9b526cd1d9967da4bd.js",
    "/includes/chunk.0e17067112b09b6c3389.js",
    "/includes/chunk.19614e806272ab532bd1.js",
    "/includes/chunk.294730aa46590e7023b1.js",
    "/includes/chunk.2e5f47821edbd72a96c8.js",
    "/includes/chunk.3972beb434706ce227db.js",
    "/includes/chunk.43a9829179ce0939d902.js",
    "/includes/chunk.4a419bf91ebada765ae0.js",
    "/includes/chunk.56749e86d1f5d95320bc.js",
    "/includes/chunk.5bbd44e77ab53de0211a.js",
    "/includes/chunk.6d664d782893d273e301.js",
    "/includes/chunk.6e74e259a0916a919b41.js",
    "/includes/chunk.6f8e0c49298fc7b25794.js",
    "/includes/chunk.7d3530dc2cc0af972abd.js",
    "/includes/chunk.7cdeb2838c7678202d33.js",
    "/includes/chunk.7e5be950cd5cc13dd5d7.js",
    "/includes/chunk.89c3be810fff798a3480.js",
    "/includes/chunk.87f5a7fec4f427572c9d.js",
    "/includes/chunk.8b69fc369d2b7bf7e379.js",
    "/includes/chunk.b299c68693440be9d09f.js",
    "/includes/chunk.b2e7349ba3959ce11788.js",
    "/includes/chunk.b4e6a04e10680374fa80.js",
    "/includes/chunk.b87ce0929ddbfd8106b3.js",
    "/includes/chunk.b98d112d9d19c87c58c3.js",
    "/includes/chunk.cda67550f3fa315a3cf8.js",
    "/includes/chunk.cec9b43f29f565f96fb9.js",
    "/includes/chunk.f762d0fe74d31a4c19ea.js",
    "/includes/entry.c74bf6e7d96bd81370ba.js"
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
