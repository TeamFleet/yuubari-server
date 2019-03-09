// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.06be930d5dbcd382cfbd.js",
    "/includes/chunk.0e4a889d878da33ab286.js",
    "/includes/chunk.292b3c1a476d0e2a34a4.js",
    "/includes/chunk.2c2c7812cbe9b5e1e2ea.js",
    "/includes/chunk.30d022c13741502b73c5.js",
    "/includes/chunk.3330d0ed5f9554a0dceb.js",
    "/includes/chunk.37b745ed40feb10bd7d2.js",
    "/includes/chunk.38946a5868a785794d2b.js",
    "/includes/chunk.3f591491dbeeb619b155.js",
    "/includes/chunk.409495799268dd454ae6.js",
    "/includes/chunk.4706abdddf4a3f839989.js",
    "/includes/chunk.6d6c84ebc24797afd35c.js",
    "/includes/chunk.780d744e934ac4025042.js",
    "/includes/chunk.8269a79d470ad64600b3.js",
    "/includes/chunk.95863eaadaed70b04bae.js",
    "/includes/chunk.9f0187b262d384f07fcb.js",
    "/includes/chunk.a8e3b0b62899d579fd4d.js",
    "/includes/chunk.ab4f1de9d06e3d622fd0.js",
    "/includes/chunk.b48a95498884447a2961.js",
    "/includes/chunk.b5c20ad52ccb2ece312b.js",
    "/includes/chunk.b9dd20ca784469b3fc45.js",
    "/includes/chunk.cb2ccb16fc3008da4076.js",
    "/includes/chunk.f56b4550c419b0076b05.js",
    "/includes/chunk.fcd64be844ec27db4a97.js",
    "/includes/chunk.ff20bbbe4489a7e697b6.js",
    "/includes/entry.07ef0d2dd6b4d795c513.js",
    "/includes/entry.32bf2f98f65abae95f14.js"
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
