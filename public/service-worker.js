// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0033d588696a2cec0397.js",
    "/includes/chunk.158d09c52845dd6a88a1.js",
    "/includes/chunk.459025c590c32f62e4da.js",
    "/includes/chunk.46c29d37e02df753d74d.js",
    "/includes/chunk.4953500ce4ce8cfffbbd.js",
    "/includes/chunk.4f72ecb3f6e6eed885f7.js",
    "/includes/chunk.53f1f3df992dd73c9094.js",
    "/includes/chunk.60c7662b5a597df50366.js",
    "/includes/chunk.62c3c573cc1a1b770621.js",
    "/includes/chunk.6997b3f206618b9474cd.js",
    "/includes/chunk.6dcf68009ea33990928d.js",
    "/includes/chunk.72428d1b21d3e47881d6.js",
    "/includes/chunk.72a8820527fd2a31d92a.js",
    "/includes/chunk.7d48154fe827754ae8a9.js",
    "/includes/chunk.858e96742327f3accc7e.js",
    "/includes/chunk.92228d9850c451e77e17.js",
    "/includes/chunk.9274d16945ce45155f62.js",
    "/includes/chunk.a8d00cd81528d0dda9bb.js",
    "/includes/chunk.9bd209a4c508bee37ed3.js",
    "/includes/chunk.ae95bf9e93fd3aa24cc2.js",
    "/includes/chunk.de012fe980c77144f74a.js",
    "/includes/chunk.de9f79d2149a0309b06a.js",
    "/includes/chunk.f01abea9f471db6c6ff4.js",
    "/includes/chunk.f63d22886e73f55a20ba.js",
    "/includes/chunk.fdb5695eb0c5503000b1.js",
    "/includes/entry.18f789c3b52d722fbda3.js",
    "/includes/entry.2880638bf8403166e9e2.js",
    "/includes/entry.8c95edef8ef2ff5bd93f.js",
    "/includes/entry.a85c31fbdf5265a2609c.js"
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
