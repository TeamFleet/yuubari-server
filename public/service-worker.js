// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0db86b09c91c62b17209.js",
    "/includes/chunk.0e11687c9eda195f087a.js",
    "/includes/chunk.311a517ba866db2cedf6.js",
    "/includes/chunk.5231c43781b43b6c5709.js",
    "/includes/chunk.700faab365c7ec5d83b0.js",
    "/includes/chunk.70f1b181b7c927005da0.js",
    "/includes/chunk.727d8f5f075686a2e299.js",
    "/includes/chunk.765093f4ccf254bdb667.js",
    "/includes/chunk.79244fdf0f5df9fe88d0.js",
    "/includes/chunk.7f9fb438d8df0b8f464d.js",
    "/includes/chunk.85437e0a89a62fedac55.js",
    "/includes/chunk.8a8e45689cf56417f72e.js",
    "/includes/chunk.8cc2fac0b52a72bf2f62.js",
    "/includes/chunk.ad07830200785cbc2b61.js",
    "/includes/chunk.a3c889eb5532ce41637b.js",
    "/includes/chunk.b2c7f5fffe4a6681f26f.js",
    "/includes/chunk.b3cdb2e246dbe950d1cf.js",
    "/includes/chunk.c997af0aec23f587d70b.js",
    "/includes/chunk.cd3cb6106fb56312c586.js",
    "/includes/chunk.ce6ae75057cd48de3134.js",
    "/includes/chunk.d01706fbfea23b58776b.js",
    "/includes/chunk.deb8132c0c706872c742.js",
    "/includes/chunk.df84c2b173803a2f53c5.js",
    "/includes/chunk.e77af253c0839777fa1b.js",
    "/includes/chunk.e792270f184165334d67.js",
    "/includes/entry.25cc14ed8c802ed95393.js",
    "/includes/entry.2bc4fe2743ecc0c26b6b.js",
    "/includes/entry.3e99800c0572ae07697a.js",
    "/includes/entry.ba1c8db9c2236851b9a7.js"
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
