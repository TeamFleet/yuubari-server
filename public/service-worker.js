// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.04daca182c2e595a74f1.js",
    "/includes/chunk.0cc99e9dae4c00a250d5.js",
    "/includes/chunk.103a7cb5df80b63f9a13.js",
    "/includes/chunk.127504833b3f1d2d1b33.js",
    "/includes/chunk.221fb2b6f61d7c483365.js",
    "/includes/chunk.30d767073a594f941209.js",
    "/includes/chunk.36ad02af22d939233b1d.js",
    "/includes/chunk.3fca9c3ea3de3bdf94db.js",
    "/includes/chunk.4140b5b60b6d6585003c.js",
    "/includes/chunk.4463681331a630d5531d.js",
    "/includes/chunk.503449b7ad5bbccd96ff.js",
    "/includes/chunk.527b05e90d7d5ebe4c21.js",
    "/includes/chunk.5d1e7d2e44483f14cc0a.js",
    "/includes/chunk.665177b65c588b732566.js",
    "/includes/chunk.6e6aa31b81aedb45e8db.js",
    "/includes/chunk.718834b4a76c00e2e214.js",
    "/includes/chunk.97f48d71e18821c560cb.js",
    "/includes/chunk.a0468e35b85859b2dc7c.js",
    "/includes/chunk.a43e24efc79891d0a3ed.js",
    "/includes/chunk.ab6bde117a24e608cd1a.js",
    "/includes/chunk.abe899ce662ef07898b9.js",
    "/includes/chunk.bcd6988b3a6482413dc8.js",
    "/includes/chunk.ca52f7de944233b3dbcf.js",
    "/includes/chunk.cbb82d03b365327da028.js",
    "/includes/chunk.d9ddcaed335b0e5f988d.js",
    "/includes/chunk.e1f25853b9137109c292.js",
    "/includes/chunk.ee0e422c99fe64f2e5dc.js",
    "/includes/chunk.ff444ea91e369f64a024.js",
    "/includes/entry.644a913cff21328c8948.js"
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
