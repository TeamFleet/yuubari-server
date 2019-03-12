// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0d70c3c18c73fc1c14af.js",
    "/includes/chunk.1073037c540cd62406ee.js",
    "/includes/chunk.209b89f5f2ca45c1c41e.js",
    "/includes/chunk.2b90d75f15bff7c1e62e.js",
    "/includes/chunk.2385ffd51c3f5ed5486c.js",
    "/includes/chunk.36a9fb7cc87a08556d5b.js",
    "/includes/chunk.38bb1b1fd17c166218b3.js",
    "/includes/chunk.3f39be774c1f29fc94d3.js",
    "/includes/chunk.459c53ad05cf37880bdc.js",
    "/includes/chunk.479a1effce10a0cfec90.js",
    "/includes/chunk.5913c2847c45c97466b4.js",
    "/includes/chunk.5ad15681a7c1c749bade.js",
    "/includes/chunk.671549b97fe299356bf5.js",
    "/includes/chunk.71f03a43a613cec67f41.js",
    "/includes/chunk.80083f4c84451b4d9ea4.js",
    "/includes/chunk.915cb43056d07bdcf275.js",
    "/includes/chunk.973ffa55fedcc19ff46c.js",
    "/includes/chunk.9e89352951ede9e98766.js",
    "/includes/chunk.a3885c7b2b99114605bb.js",
    "/includes/chunk.a411ac5fa57081dc4f8f.js",
    "/includes/chunk.b88d7ba2d2bc652c1527.js",
    "/includes/chunk.bda3891cb191610f9e97.js",
    "/includes/chunk.bebeb5d1e707218a3a36.js",
    "/includes/chunk.e07bb4eb420466b5a8a3.js",
    "/includes/chunk.ef6c19c6d3f2cbdfcca6.js",
    "/includes/entry.9c460a4f0b8ab90161e7.js",
    "/includes/entry.a84199d2523afe1aa6a1.js"
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
