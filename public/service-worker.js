// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0e3d48c16e6eab7c5759.js",
    "/includes/chunk.14a0c248d8519def1c99.js",
    "/includes/chunk.1c6175ff36bf031fbfb5.js",
    "/includes/chunk.1ecb56145804a16d1640.js",
    "/includes/chunk.1f61150dd3a571228401.js",
    "/includes/chunk.44e9aabe2a6b2c38cd88.js",
    "/includes/chunk.4e496c86ae928a24cfd2.js",
    "/includes/chunk.53d99a3347c8cc9482ea.js",
    "/includes/chunk.5769029e80768e898179.js",
    "/includes/chunk.6a123f65985eb45a25be.js",
    "/includes/chunk.7c7ba6a6a0846eb179a2.js",
    "/includes/chunk.7e09ba537bd43fe52bf1.js",
    "/includes/chunk.8bdd09b6a9208cd7a0bd.js",
    "/includes/chunk.8ff3afcf1e1a4e2e093b.js",
    "/includes/chunk.995c00138206eab81495.js",
    "/includes/chunk.a0b36cc692388529f566.js",
    "/includes/chunk.a758cfd9b6935832d90f.js",
    "/includes/chunk.b2f63b47cf7f048f08af.js",
    "/includes/chunk.b4b4fce7c7264639dca6.js",
    "/includes/chunk.b68f28f14882ede8b354.js",
    "/includes/chunk.b7cb2ad2b415c5b48c2e.js",
    "/includes/chunk.bb05a76aba2c54b5be26.js",
    "/includes/chunk.ca1fc822a4c0993a719f.js",
    "/includes/chunk.d17421402a284b8f5d11.js",
    "/includes/chunk.e0b80fbf530366545b7d.js",
    "/includes/entry.2bc4fe2743ecc0c26b6b.js",
    "/includes/entry.3e99800c0572ae07697a.js",
    "/includes/entry.b59ccf2e40c326bce04a.js",
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
