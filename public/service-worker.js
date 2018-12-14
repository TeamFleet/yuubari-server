// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.012bb17280c75b5de189.js",
    "/includes/chunk.02ba1311bce00dc3ac74.js",
    "/includes/chunk.071653a254e51b404970.js",
    "/includes/chunk.20d2ca8abeb8a7eb4e41.js",
    "/includes/chunk.29a252108bd555c1fc60.js",
    "/includes/chunk.2db5c87e363221c7d50e.js",
    "/includes/chunk.361baf616bad73009998.js",
    "/includes/chunk.3a908ff9448c73ff57db.js",
    "/includes/chunk.3c1bdb891833d4117bf4.js",
    "/includes/chunk.3dcad58bcbefa75c549c.js",
    "/includes/chunk.493b6555d42c38eb489a.js",
    "/includes/chunk.52954b5b16bbff98ab15.js",
    "/includes/chunk.5ba8fe9611e51101eb17.js",
    "/includes/chunk.5fece90c7da0cb5393e5.js",
    "/includes/chunk.714baa7bf821f3a0b4c3.js",
    "/includes/chunk.7306ef68bfed3ff15008.js",
    "/includes/chunk.73de0d7054a2c74ddcf0.js",
    "/includes/chunk.7c218170938a41c63cc3.js",
    "/includes/chunk.7f1c04c33686103296f3.js",
    "/includes/chunk.8635ce487838af7190a6.js",
    "/includes/chunk.9a4fb61f1b7effcbcc67.js",
    "/includes/chunk.9bb1b3687ff0d744d5e1.js",
    "/includes/chunk.a3680f6e4e74321e9438.js",
    "/includes/chunk.acdd3799c251c72de4f9.js",
    "/includes/chunk.b14d3e3dc77cbbe8f3dd.js",
    "/includes/chunk.e08a5c8213990731afc9.js",
    "/includes/chunk.e6de42c5ff2232fb1193.js",
    "/includes/chunk.f177f30d2d0466cda599.js",
    "/includes/entry.cfb105a7011cbf42d6e7.js"
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
