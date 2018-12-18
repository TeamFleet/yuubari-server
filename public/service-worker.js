// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.05015a8145919259717e.js",
    "/includes/chunk.0d3ad840225089ad37fb.js",
    "/includes/chunk.1a87086c72ec9f05d301.js",
    "/includes/chunk.286216f39d41b30b504b.js",
    "/includes/chunk.2e922b3ac6bfa982be7d.js",
    "/includes/chunk.348b8de723cca6946158.js",
    "/includes/chunk.34b83120b2538dd22f28.js",
    "/includes/chunk.4851f43bacf3b81f6d3a.js",
    "/includes/chunk.4e6735bfa84415977e6a.js",
    "/includes/chunk.6713b629930d6f904124.js",
    "/includes/chunk.6bbe95dc28cab8417202.js",
    "/includes/chunk.7118d04172d7c3e1f4a9.js",
    "/includes/chunk.7aaecd774bec7253fa20.js",
    "/includes/chunk.81c839b74e1608ecf4ed.js",
    "/includes/chunk.96414c067a61f65d22e2.js",
    "/includes/chunk.aea9a6b2decef9c95946.js",
    "/includes/chunk.b3bd0aa315596e9ce8b4.js",
    "/includes/chunk.d3d2f48774b5a01253cf.js",
    "/includes/chunk.dc14e6bf923f0663aabe.js",
    "/includes/chunk.dd644a394552560aa08a.js",
    "/includes/chunk.de971dfc1b91b719f434.js",
    "/includes/chunk.e3c78373d9a69620b8ef.js",
    "/includes/chunk.e85d3ca8974e3fe6e5ad.js",
    "/includes/chunk.f6d9db523311ad8a96ab.js",
    "/includes/chunk.fc8bb71ff5ee1f847b56.js",
    "/includes/entry.2a31e8e509f230819431.js"
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
