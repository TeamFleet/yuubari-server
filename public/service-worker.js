// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.08e01578f759ea1b5d56.js",
    "/includes/chunk.15244476b6496e650132.js",
    "/includes/chunk.1bc45ff7a632eddfb69f.js",
    "/includes/chunk.1ea8e5195617ab3e5ed1.js",
    "/includes/chunk.1f68f3a3dbe7838ea96f.js",
    "/includes/chunk.2261c959eb9a77a5724a.js",
    "/includes/chunk.29550e9c5c9620319926.js",
    "/includes/chunk.2a69084bd25a60e341d2.js",
    "/includes/chunk.41f69e9eb1fcfe9df841.js",
    "/includes/chunk.4b419d76a1e4140140cb.js",
    "/includes/chunk.4f796827f5c0f19e54cf.js",
    "/includes/chunk.5bf863859aee1830c95f.js",
    "/includes/chunk.5ee51fc70761d0950f0f.js",
    "/includes/chunk.8967c73e4e10e575a44a.js",
    "/includes/chunk.aeacb73695813855ef9e.js",
    "/includes/chunk.aeae404f6dc6e385b064.js",
    "/includes/chunk.b44b942954789142424a.js",
    "/includes/chunk.c05282ac7f3b3a1f8aa7.js",
    "/includes/chunk.c80f8f22cd560b26e12c.js",
    "/includes/chunk.ce0faae6cd833b16158e.js",
    "/includes/chunk.d79674c1acb122474e76.js",
    "/includes/chunk.dfbde25d20dd1cb332c5.js",
    "/includes/chunk.e5c9232e1ba0544d77fe.js",
    "/includes/chunk.e79f4baf70fda4858244.js",
    "/includes/chunk.ee7c69cdc375c1d9589b.js",
    "/includes/entry.1d21102ac6c0dbcef7af.js",
    "/includes/entry.51bad5189400efb3c3eb.js",
    "/includes/entry.96ff780cd6b890980877.js",
    "/includes/entry.b2eef52b5c7b8d80f2da.js"
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
