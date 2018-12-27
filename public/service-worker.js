// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0098cd93dc68231d7316.js",
    "/includes/chunk.03a72b7052ce7e64ed4d.js",
    "/includes/chunk.2e2b03c2d455ab22ebbf.js",
    "/includes/chunk.36dd8853eb24e438463b.js",
    "/includes/chunk.401983fdedc9af316fb9.js",
    "/includes/chunk.49d2afbea4699406ab9b.js",
    "/includes/chunk.4d86c53554a20ce0e934.js",
    "/includes/chunk.4f1aef371e46f6965a63.js",
    "/includes/chunk.4f4e5781b3e18d2ba549.js",
    "/includes/chunk.504cc0ae9fd7d91cd65d.js",
    "/includes/chunk.52604efde905fdf8c361.js",
    "/includes/chunk.530c4165bd44965bb945.js",
    "/includes/chunk.5ca1aba8d1cc79fe333d.js",
    "/includes/chunk.705248d34508556d2f77.js",
    "/includes/chunk.71c28ba3e92c01704071.js",
    "/includes/chunk.7636f62d35818b4cc059.js",
    "/includes/chunk.7efafb8eb8b04dfa4f5a.js",
    "/includes/chunk.8a79fcb78cc7faec3727.js",
    "/includes/chunk.8ecab26f8f12a4585a1c.js",
    "/includes/chunk.8f748454907619f647bb.js",
    "/includes/chunk.b0f899ae03049850dbd4.js",
    "/includes/chunk.bc21b456170dcae8bfdd.js",
    "/includes/chunk.c9c9f7b0d2dfb036c4b5.js",
    "/includes/chunk.cd8d1c6046414a325585.js",
    "/includes/chunk.d65ca973ed6216a3ef9b.js",
    "/includes/entry.536642407ab52c7c51b3.js",
    "/includes/entry.5eba2f181b766673c4ef.js"
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
