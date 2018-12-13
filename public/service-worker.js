// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.01c8e6bf3aa0b6f7a740.js",
    "/includes/chunk.038a897812cd45cf926c.js",
    "/includes/chunk.057bde6de41717bb96ab.js",
    "/includes/chunk.0a64e5491ad626c90310.js",
    "/includes/chunk.16988324537c8026f672.js",
    "/includes/chunk.1a560272062956fe7ba7.js",
    "/includes/chunk.1b52bd3a771613a9e672.js",
    "/includes/chunk.1e2cc2e9d4b6270c3796.js",
    "/includes/chunk.35d65694c88f9499f934.js",
    "/includes/chunk.3835097486d8d10d837a.js",
    "/includes/chunk.3971c67169223a7a7dcf.js",
    "/includes/chunk.49bd26447ed456e1c31d.js",
    "/includes/chunk.542d01b1c64f4c54caa1.js",
    "/includes/chunk.5f1126d9d54dcb8972be.js",
    "/includes/chunk.5fc3198b76ae8491d58e.js",
    "/includes/chunk.5fdbe783b83a408f3e47.js",
    "/includes/chunk.6160d76ae7cab8ea5ac5.js",
    "/includes/chunk.72ccce1c1f7be8d3e7d8.js",
    "/includes/chunk.769461509e73c47528c0.js",
    "/includes/chunk.79d699df6e2238181618.js",
    "/includes/chunk.be774a4a1889acb79a95.js",
    "/includes/chunk.de1e1e86292c99d24e35.js",
    "/includes/chunk.e5f8e3035a76b416afd2.js",
    "/includes/chunk.ec2bc9bcc71c9c13978a.js",
    "/includes/chunk.ef5257e8173cdddc216a.js",
    "/includes/chunk.f19ae7b30ccdda04ff58.js",
    "/includes/chunk.f26d6a390a5c39c115f2.js",
    "/includes/chunk.f72a893ac3a56f68729c.js",
    "/includes/entry.1bff8aa69786c2a693e7.js"
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
