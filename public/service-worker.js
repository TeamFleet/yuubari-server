// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.064718bdb2c2586fc8eb.js",
    "/includes/chunk.13e93b304ba71869abac.js",
    "/includes/chunk.18b298f90bb11c6899da.js",
    "/includes/chunk.1c8099689bd5d58ce516.js",
    "/includes/chunk.1e2f58e6130534851c31.js",
    "/includes/chunk.54d11529d45f2cdaafd9.js",
    "/includes/chunk.5546c4aea5c25b7d7f02.js",
    "/includes/chunk.571fc2d25d534ffefe25.js",
    "/includes/chunk.5f9430e04ffe19fd6ef0.js",
    "/includes/chunk.717d122c547fa8dbc8cf.js",
    "/includes/chunk.74c53375c864e8dbcc2b.js",
    "/includes/chunk.7989909e486ad55d6966.js",
    "/includes/chunk.79c737889ed30bbf3a73.js",
    "/includes/chunk.a0ff0630d4ada75fb234.js",
    "/includes/chunk.bf8edec083f8d491b952.js",
    "/includes/chunk.bfd22da09a273f820a68.js",
    "/includes/chunk.c0c30bc01da70d09f59f.js",
    "/includes/chunk.c9de6333f6e9bc73602b.js",
    "/includes/chunk.d2c38702aec9e78ab0c5.js",
    "/includes/chunk.df08ff01a93828d7f029.js",
    "/includes/chunk.e72663d60abd3bde70eb.js",
    "/includes/chunk.f168c3abdaac6a259197.js",
    "/includes/chunk.f39068077c898a4a411d.js",
    "/includes/chunk.f49e82634bbe2b781802.js",
    "/includes/chunk.f7d255fbcf5f8c5441d1.js",
    "/includes/entry.1071fb413f9379a865d3.js",
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
