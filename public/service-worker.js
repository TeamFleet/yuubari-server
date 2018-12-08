// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0d73d12462f3c160c6ed.js",
    "/includes/chunk.2597f6fd4bb9ca07dcaa.js",
    "/includes/chunk.3186005f151ddf6cbcdc.js",
    "/includes/chunk.393d9331c0e8985db4c9.js",
    "/includes/chunk.413a866687982a3a7f27.js",
    "/includes/chunk.511b0946f84afe13e2d7.js",
    "/includes/chunk.5689a92320686f9b05df.js",
    "/includes/chunk.5f0d3e4eed24a1bb42cf.js",
    "/includes/chunk.682d814a6ba268f01e54.js",
    "/includes/chunk.77d2f666b2dc9d5a3661.js",
    "/includes/chunk.7c9cb30c0e67c2695250.js",
    "/includes/chunk.7cc7c52f0a3e686518a6.js",
    "/includes/chunk.7f657b916e424ab87c37.js",
    "/includes/chunk.8fb21dfdb27c7ac72cb0.js",
    "/includes/chunk.9126c009c6a175fb107f.js",
    "/includes/chunk.921cc7f1472fb3264116.js",
    "/includes/chunk.9bb5e864d0a53562e8c0.js",
    "/includes/chunk.a4787e240f6113e2318b.js",
    "/includes/chunk.ab68c2735deb1bd15674.js",
    "/includes/chunk.ac7b1f6b887df50f0929.js",
    "/includes/chunk.bb5c5817b54c9a4c4867.js",
    "/includes/chunk.cf0489f65fa7413cd48e.js",
    "/includes/chunk.da8a9c4d2387f714de3f.js",
    "/includes/chunk.e3b5ede1354c97e69cd9.js",
    "/includes/chunk.eae9a60754ed93293a58.js",
    "/includes/chunk.ef4650c680e1dccb6b8f.js",
    "/includes/chunk.f5493756947dac4e6813.js",
    "/includes/chunk.f58a89d3ff5cef0dfb1d.js",
    "/includes/entry.14678615764258f55122.js"
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
