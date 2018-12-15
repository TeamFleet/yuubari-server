// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0e4797e4f3df7ed185f8.js",
    "/includes/chunk.0ee18f91a1aee296b1a3.js",
    "/includes/chunk.1e7c46088dadf847f730.js",
    "/includes/chunk.35d5d6ce2e59d5a9642a.js",
    "/includes/chunk.3c439c7848a78c4db55f.js",
    "/includes/chunk.3f7ac83b43b9a030e86f.js",
    "/includes/chunk.43850b7a928e20590ab4.js",
    "/includes/chunk.477d48bfc2f90651b22e.js",
    "/includes/chunk.4d5ad149e5b9883160cf.js",
    "/includes/chunk.547781e39fc20dd40286.js",
    "/includes/chunk.5c5ea818cad11c846985.js",
    "/includes/chunk.627e90fd8fd09fcd6fca.js",
    "/includes/chunk.76e4da1032efda683a58.js",
    "/includes/chunk.a9643d1458aff0a71eee.js",
    "/includes/chunk.b6130558231fc57d7e25.js",
    "/includes/chunk.b7b2c626b6c82c4e29f7.js",
    "/includes/chunk.b7e7868eb8975ad6f1e5.js",
    "/includes/chunk.bb40e071c865d6e2c430.js",
    "/includes/chunk.c4cfe51d3da1701711e6.js",
    "/includes/chunk.cfa8e2090e8afa0995af.js",
    "/includes/chunk.d13b63e148a7a8d94a2a.js",
    "/includes/chunk.d95401e75340c11adbc5.js",
    "/includes/chunk.e0bb703cbbedcdc48940.js",
    "/includes/chunk.e894c13e945a6f5dad95.js",
    "/includes/chunk.ede7804c49ced5288e6f.js",
    "/includes/chunk.f1c2ca9278f872b43523.js",
    "/includes/chunk.fbadd97fe2eacfdcfd0e.js",
    "/includes/chunk.ff936d3b3dfe5b904ae4.js",
    "/includes/entry.7e706362e42d930e7c8c.js"
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
