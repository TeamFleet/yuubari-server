// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.04daca182c2e595a74f1.js",
    "/includes/chunk.104b42b02163e6cf8a99.js",
    "/includes/chunk.1a498ccc9769b0319388.js",
    "/includes/chunk.1e95e92f69bc9a52d572.js",
    "/includes/chunk.1fa111514be46e349cbe.js",
    "/includes/chunk.266d3c3f6af375be4611.js",
    "/includes/chunk.357979941b45909df558.js",
    "/includes/chunk.3871d4d2e3a2c96c5873.js",
    "/includes/chunk.3f4fe46100d4e4cf81bb.js",
    "/includes/chunk.3fca9c3ea3de3bdf94db.js",
    "/includes/chunk.4140b5b60b6d6585003c.js",
    "/includes/chunk.50b09405ca8deb0c71b0.js",
    "/includes/chunk.527b05e90d7d5ebe4c21.js",
    "/includes/chunk.6cb7a6d0e538821613d2.js",
    "/includes/chunk.6d14ad7f29ee970e37cc.js",
    "/includes/chunk.7741f3bf70b20c998d99.js",
    "/includes/chunk.89b9ba7f826f8f0e7983.js",
    "/includes/chunk.8ef0d190277ab89d4789.js",
    "/includes/chunk.8f20c266279476e1b045.js",
    "/includes/chunk.a2f045bccc1e8e02d463.js",
    "/includes/chunk.ab8ff25dee50e8397dea.js",
    "/includes/chunk.bdcdb5f00bafe302d7e3.js",
    "/includes/chunk.dd6850995b22261ce5c5.js",
    "/includes/chunk.de3429c657e2ef2aa4ca.js",
    "/includes/chunk.de6462ae1ee839757136.js",
    "/includes/chunk.f70d98676769cc862753.js",
    "/includes/chunk.fcb08ffd943b0466908f.js",
    "/includes/chunk.ff444ea91e369f64a024.js",
    "/includes/entry.015d01bd2af444d39b45.js"
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
