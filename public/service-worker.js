// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.00a5672a4433ec5cbbaf.js",
    "/includes/chunk.10fcca36d3af511f6577.js",
    "/includes/chunk.13a4e5ea4ed54bc16d10.js",
    "/includes/chunk.3f44f25e566233a04565.js",
    "/includes/chunk.44dcadabc2913cfb47e2.js",
    "/includes/chunk.47f750632fb31d158c5d.js",
    "/includes/chunk.49ea0d877c3ef0db89f7.js",
    "/includes/chunk.5849804162f275ccf535.js",
    "/includes/chunk.5c19ee095912893b7a96.js",
    "/includes/chunk.5c74aa247d14f9401bec.js",
    "/includes/chunk.5fcfad8df6208f945bc4.js",
    "/includes/chunk.73a204e214776d58b9b8.js",
    "/includes/chunk.7412f6fcfab18b6db77d.js",
    "/includes/chunk.7a578fd9dc186950b604.js",
    "/includes/chunk.80d28c01657c8353aa14.js",
    "/includes/chunk.8b4461a821248270a35d.js",
    "/includes/chunk.94c589990cf0ff455c2b.js",
    "/includes/chunk.a1221c05351f942c3b41.js",
    "/includes/chunk.abd3e3bacbabfb357d14.js",
    "/includes/chunk.b198d30ebd888ec82b66.js",
    "/includes/chunk.b7f656093e590548b124.js",
    "/includes/chunk.c8f9f6943201e8e4f006.js",
    "/includes/chunk.cb983365157c52ace820.js",
    "/includes/chunk.d7af49663d4a8b97ddea.js",
    "/includes/chunk.da89daefe3ead67f3725.js",
    "/includes/chunk.dd8ed559ae464319b329.js",
    "/includes/chunk.e3b5ede1354c97e69cd9.js",
    "/includes/chunk.e6de42c5ff2232fb1193.js",
    "/includes/entry.eb2cc776af7ff1e8e8f6.js"
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
