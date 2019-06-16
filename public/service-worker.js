// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0f0e660e1c780f2f3f5f.js",
    "/includes/chunk.21ed33ad371e97e548a9.js",
    "/includes/chunk.2459c02a8e9364b5e127.js",
    "/includes/chunk.2bc0b8ba9568e2b192f9.js",
    "/includes/chunk.3897f138963b15d77b11.js",
    "/includes/chunk.4ca1e0cd6fd4d07699a6.js",
    "/includes/chunk.55b9c612b2fe283cfe84.js",
    "/includes/chunk.5d02fd5dc44e3234b6be.js",
    "/includes/chunk.65a639fb78fb561b79ec.js",
    "/includes/chunk.71119c05d9a6c70d1e12.js",
    "/includes/chunk.7854d1cb2865aaf28660.js",
    "/includes/chunk.9b2d2c3b428418a5b42a.js",
    "/includes/chunk.a027e79e8b30b200c3f4.js",
    "/includes/chunk.a94ef967f8ca0e608112.js",
    "/includes/chunk.a9aee043fb2564d5677b.js",
    "/includes/chunk.ab67d9aaa1d1aaeab3d6.js",
    "/includes/chunk.adf80598e39bb480478b.js",
    "/includes/chunk.b9bd2606c6ea9527418a.js",
    "/includes/chunk.c07657e344a2187431f0.js",
    "/includes/chunk.c877352d85b42a79250e.js",
    "/includes/chunk.cb26df79f3fff1a82865.js",
    "/includes/chunk.da864f97276566f036fc.js",
    "/includes/chunk.de6b1a76fe1b094ec48d.js",
    "/includes/chunk.e0e4b11111ad15dbc9a4.js",
    "/includes/chunk.ee16248218ecee37840e.js",
    "/includes/entry.283051bbabbd5d8542ac.js",
    "/includes/entry.a40b8ee6d51d95098891.js",
    "/includes/entry.5d00ba283d55c8be0df3.js",
    "/includes/entry.d0f92d0cbc80c751241a.js"
]

function addToCache(request, response) {
    if (response.type === 'opaqueredirect')
        return response

    if (response.ok) {
        const copy = response.clone()
        caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy)
        })
    } else {
        console.log('Request fail', response, request)
        throw new Error(response)
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
        event.request.url.replace(new RegExp(`^${location.origin}`), '') === '/'
        || event.request.headers.get('Accept').indexOf('text/html') >= 0
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
