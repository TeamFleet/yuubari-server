// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.03837938c241fe13e3b4.js",
    "/includes/chunk.19148fa3806cfa60166a.js",
    "/includes/chunk.1c788ddc827a5ce1f2e0.js",
    "/includes/chunk.1cd02d8c9a5eb25b1571.js",
    "/includes/chunk.21f8aeac5a5782456d7a.js",
    "/includes/chunk.2361d731914eef50bf95.js",
    "/includes/chunk.289197fd9f4b4fcf551d.js",
    "/includes/chunk.2f290fbac4b579219449.js",
    "/includes/chunk.3fb77c39a4ee8f20c9bd.js",
    "/includes/chunk.491dbc03c94bcd442d8d.js",
    "/includes/chunk.4cb935faca464713e849.js",
    "/includes/chunk.4de32414ad902980fd54.js",
    "/includes/chunk.58b18a98ec9b3332b763.js",
    "/includes/chunk.610cd3832bef5f12d943.js",
    "/includes/chunk.709eb7b80abb1960a200.js",
    "/includes/chunk.ab93f1cda44769f29860.js",
    "/includes/chunk.ac86004ccda9aadd3f31.js",
    "/includes/chunk.b74feb9cdac0e72b44da.js",
    "/includes/chunk.c1751c43f9ec24862785.js",
    "/includes/chunk.c4799088d14cc8e45819.js",
    "/includes/chunk.d053b313e5b953ea353d.js",
    "/includes/chunk.d6071587ce8d5cd8213e.js",
    "/includes/chunk.e43874a42a9926c50ea5.js",
    "/includes/chunk.e7259e958d043d09fbe6.js",
    "/includes/chunk.e7cb1dfeb11925b06cc1.js",
    "/includes/entry.043523d52c2811a55af7.js",
    "/includes/entry.224c8f19dcf5b03b23ea.js",
    "/includes/entry.62f46c22d830c12cd4a7.js",
    "/includes/entry.7bd9e3875efee24c4244.js"
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
