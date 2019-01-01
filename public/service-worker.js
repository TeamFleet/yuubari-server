// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0b2f35698a4579523afe.js",
    "/includes/chunk.17ceac60cfda1696dea2.js",
    "/includes/chunk.1d7ca3ad411761ab69a0.js",
    "/includes/chunk.2385ff8ac69e03111ea9.js",
    "/includes/chunk.25cc972ae2b80099096b.js",
    "/includes/chunk.34c55d08c3f4a19595a9.js",
    "/includes/chunk.3800059ab99490ebb43e.js",
    "/includes/chunk.441ceec592e998198ece.js",
    "/includes/chunk.455af4b06a43de06ec92.js",
    "/includes/chunk.520d9e8866ef90dfa2ef.js",
    "/includes/chunk.6473c8bc1b286520bd83.js",
    "/includes/chunk.6927fe9890d3c0fe5e4c.js",
    "/includes/chunk.6be873e23add2b840ddf.js",
    "/includes/chunk.6dae51810d1e580d3d33.js",
    "/includes/chunk.73e071594b9de4a18373.js",
    "/includes/chunk.7a9976d2efe8db10d131.js",
    "/includes/chunk.7b370442a7b4baec76d6.js",
    "/includes/chunk.93022923dbb29ff1df87.js",
    "/includes/chunk.9808bb7909a18f4d393c.js",
    "/includes/chunk.9d2a5c280dbf6d1da1cb.js",
    "/includes/chunk.ab865ebb621aa91750fb.js",
    "/includes/chunk.aeb07a4e48a4a312d72a.js",
    "/includes/chunk.ba8019f412e19a7fc66e.js",
    "/includes/chunk.c6ffa175d238c19c0fa4.js",
    "/includes/chunk.e74fabc6c391f542cf0a.js",
    "/includes/entry.d2696e08b4f6305ceb74.js",
    "/includes/entry.e6f036197fae4b76e090.js"
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
