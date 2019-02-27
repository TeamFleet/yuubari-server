// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0a9424dcc9a386b44ac4.js",
    "/includes/chunk.0d3cf206f6f807ba66ce.js",
    "/includes/chunk.12c9028dcf9c60ce4408.js",
    "/includes/chunk.1cda892e12e2b443c73d.js",
    "/includes/chunk.277170fc8d54784f0917.js",
    "/includes/chunk.2cdc0c1da1d750037e99.js",
    "/includes/chunk.3d43efb2e73243281024.js",
    "/includes/chunk.4e5c66a6255c8adea181.js",
    "/includes/chunk.5485b00a581364e13712.js",
    "/includes/chunk.626cb51cdaf40d8d9d5a.js",
    "/includes/chunk.81d8d407497a83c2ec02.js",
    "/includes/chunk.96b49ae4af65310edaaa.js",
    "/includes/chunk.99623643142933f81c89.js",
    "/includes/chunk.a29ee1b5b2cdd9bda436.js",
    "/includes/chunk.b53ce4fb48001a4546b0.js",
    "/includes/chunk.b8f283867fe6f0b86f9b.js",
    "/includes/chunk.bc33a53a196e4a1dec7e.js",
    "/includes/chunk.bf9c6b9085d0500cc895.js",
    "/includes/chunk.d12f27d1ced1f0cc0375.js",
    "/includes/chunk.d22f088eb1ce1d0d4dad.js",
    "/includes/chunk.d9af38286117d9d68c39.js",
    "/includes/chunk.dcf725a35f6eb8327446.js",
    "/includes/chunk.f761cfa7dfd7a18f9ae4.js",
    "/includes/chunk.f8e49971d8a6e7d73f87.js",
    "/includes/chunk.fb42e8a3dd75fe4e88b9.js",
    "/includes/entry.32afded64e83b0c4bd4a.js",
    "/includes/entry.ef01d9ceef3b40c48d87.js"
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
