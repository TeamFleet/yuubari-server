// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.04387a56eff6b2e76e14.js",
    "/includes/chunk.0fe726994cfccd2b3de1.js",
    "/includes/chunk.14de8a165070e6bf8319.js",
    "/includes/chunk.16cde4abfc75dcb40102.js",
    "/includes/chunk.2597f6fd4bb9ca07dcaa.js",
    "/includes/chunk.33ff44f86c35ef11408f.js",
    "/includes/chunk.4ad77281c3f87eb0557d.js",
    "/includes/chunk.4b1bc892b5ca914b978c.js",
    "/includes/chunk.52b8cde9cd265efdbb23.js",
    "/includes/chunk.5876a48b8958094e9d48.js",
    "/includes/chunk.5da0745030602b9c3719.js",
    "/includes/chunk.63517a90e594247a2fd6.js",
    "/includes/chunk.6e9760b7bd6bdc6203df.js",
    "/includes/chunk.76162bf7bf762cd51da6.js",
    "/includes/chunk.8347321630222eccb948.js",
    "/includes/chunk.9810ca49195174e3e43e.js",
    "/includes/chunk.9b2d3890be62c9a7c1d2.js",
    "/includes/chunk.a4787e240f6113e2318b.js",
    "/includes/chunk.a9cbe4c0fd84e45c8e07.js",
    "/includes/chunk.aa86da4eb6eeae892e7d.js",
    "/includes/chunk.b08f4ddaa69aa109365c.js",
    "/includes/chunk.c440944afbf1a4d3dfcb.js",
    "/includes/chunk.ccfae0f9283f13f30b52.js",
    "/includes/chunk.d5c5f3530cb192397bcd.js",
    "/includes/chunk.e3b5ede1354c97e69cd9.js",
    "/includes/chunk.f248a477c5c95480edc4.js",
    "/includes/chunk.f58a89d3ff5cef0dfb1d.js",
    "/includes/chunk.fd80543a5f3b61302c7d.js",
    "/includes/entry.28d799c6edee8a175661.js"
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
