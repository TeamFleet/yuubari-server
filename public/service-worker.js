// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.098c8dd599a61785ff95.js",
    "/includes/chunk.0b7ef391fbf72508708c.js",
    "/includes/chunk.31a37a79d08c157e5420.js",
    "/includes/chunk.4689d2eef89589d56217.js",
    "/includes/chunk.54ee43361c1af819e0e4.js",
    "/includes/chunk.64391625cd6c06a480b4.js",
    "/includes/chunk.66b58cd072ec8233ac4f.js",
    "/includes/chunk.6a0df652fa85fc031470.js",
    "/includes/chunk.6bc00d66c5ae819f92cf.js",
    "/includes/chunk.6cc4d26942f7c7027e4b.js",
    "/includes/chunk.7b50f8c1d7c149bcca47.js",
    "/includes/chunk.7d1a50c4f0b7a10ba04b.js",
    "/includes/chunk.86656125a2f029249b60.js",
    "/includes/chunk.86b2e66be7240d0c62bb.js",
    "/includes/chunk.8f0424a0d8f876cf6ef1.js",
    "/includes/chunk.92e277a1410afc2dc852.js",
    "/includes/chunk.9630b03ff029e05c3bad.js",
    "/includes/chunk.a1415f84d4ef48e2f21c.js",
    "/includes/chunk.a7af7d6e48f5fddc6838.js",
    "/includes/chunk.ce4dd8959b661a8a5393.js",
    "/includes/chunk.d0065daea0dd5cf85665.js",
    "/includes/chunk.dc56a632fc7e1ee61930.js",
    "/includes/chunk.ee9669d25c9fa33cd595.js",
    "/includes/chunk.fb6428bb07b00b66cda6.js",
    "/includes/chunk.ff90b56046dbd2c13d1a.js",
    "/includes/entry.2796c24499b16074a99c.js",
    "/includes/entry.8c95edef8ef2ff5bd93f.js",
    "/includes/entry.d277d34904637a8c8d60.js",
    "/includes/entry.d605877936f3717b4e22.js"
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
