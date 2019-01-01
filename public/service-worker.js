// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.06e60cdd0f66b29de663.js",
    "/includes/chunk.09765b42bdabac407ce9.js",
    "/includes/chunk.1c6f391178e184bc6d39.js",
    "/includes/chunk.1d7559a5b6a1565391dc.js",
    "/includes/chunk.24841133d54b9326e2f4.js",
    "/includes/chunk.36dd8853eb24e438463b.js",
    "/includes/chunk.4f1aef371e46f6965a63.js",
    "/includes/chunk.504cc0ae9fd7d91cd65d.js",
    "/includes/chunk.528a72ac80d77bb839f3.js",
    "/includes/chunk.5571242a3a695c501f74.js",
    "/includes/chunk.6e31b1df1772e9a68086.js",
    "/includes/chunk.7b26ab89b21b3e2c3ff8.js",
    "/includes/chunk.7b8288ac32a453e320e7.js",
    "/includes/chunk.7e803ac2ab19646c9cd0.js",
    "/includes/chunk.7efafb8eb8b04dfa4f5a.js",
    "/includes/chunk.8a79fcb78cc7faec3727.js",
    "/includes/chunk.9941bd6ce057d08364cb.js",
    "/includes/chunk.ab65c2d0a92f897e6b8d.js",
    "/includes/chunk.b0f899ae03049850dbd4.js",
    "/includes/chunk.bc21b456170dcae8bfdd.js",
    "/includes/chunk.d6c20ca360a92301898a.js",
    "/includes/chunk.dc2d91cba7c79b4b3187.js",
    "/includes/chunk.ece477d6c801c71db4b1.js",
    "/includes/chunk.f5fe94e89066cf37d6c5.js",
    "/includes/chunk.fb6a23d3410b4c24e5dd.js",
    "/includes/entry.14976e02d9f1e321ee1e.js",
    "/includes/entry.4acb80a12d2be18ebc0f.js"
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
