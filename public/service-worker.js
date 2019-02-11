// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0382d6bf38ed6eccb2ab.js",
    "/includes/chunk.068de2a62f4e964d01db.js",
    "/includes/chunk.06a6fb782bccd1761e5c.js",
    "/includes/chunk.13c218309edb060babe6.js",
    "/includes/chunk.1e4de1afce591e6da58e.js",
    "/includes/chunk.2370e57c08d45bab6810.js",
    "/includes/chunk.3035ce03e324bd48d902.js",
    "/includes/chunk.37a91f71753577c14641.js",
    "/includes/chunk.3a9874d4fc65fda60158.js",
    "/includes/chunk.44a3491174918a77c6d3.js",
    "/includes/chunk.5214b4e6ad1b987b3fa6.js",
    "/includes/chunk.5fc434920f8111387115.js",
    "/includes/chunk.6081992b30a732055cfc.js",
    "/includes/chunk.6810f6c3a499bf0a97e7.js",
    "/includes/chunk.6cf0cfeffeba547a396d.js",
    "/includes/chunk.86a15d02f07289dcc7f5.js",
    "/includes/chunk.884c3e96be8d378da509.js",
    "/includes/chunk.8c89145e6ae280762df8.js",
    "/includes/chunk.a0bde924defe1d99cbbc.js",
    "/includes/chunk.bfcda9cf61505087e523.js",
    "/includes/chunk.c49c0bad6208b14781ee.js",
    "/includes/chunk.c4c05f7f2117556276ab.js",
    "/includes/chunk.c693a1dbc05164d517d1.js",
    "/includes/chunk.f1f6300aaeb6657d77a5.js",
    "/includes/chunk.f83958133f77a0882232.js",
    "/includes/entry.264cb06525192e0cb17e.js",
    "/includes/entry.b68187b0974040d3badb.js"
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
