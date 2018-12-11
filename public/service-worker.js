// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.01cb47721184c97a12a8.js",
    "/includes/chunk.02e4cf235fdca2927ec3.js",
    "/includes/chunk.047634c6cab38665319b.js",
    "/includes/chunk.081ca388318e94493d1a.js",
    "/includes/chunk.099189a594094bdd1ef5.js",
    "/includes/chunk.0f7324d9006e26364ca9.js",
    "/includes/chunk.17012aecbee92070668d.js",
    "/includes/chunk.1a95dd61902ce530de80.js",
    "/includes/chunk.1c1ea0c2058a1b7883d4.js",
    "/includes/chunk.20c5d1441f7f0c3e7a55.js",
    "/includes/chunk.327667c001237fc658ca.js",
    "/includes/chunk.40483edce0d4c88b5f51.js",
    "/includes/chunk.4305ea656dff25f596cc.js",
    "/includes/chunk.67c549bf822ff694d1fb.js",
    "/includes/chunk.7a176bcfb9a77a7a6e59.js",
    "/includes/chunk.80aeb57b791491d5905f.js",
    "/includes/chunk.86c298ff705bd3d923dd.js",
    "/includes/chunk.870819bbfe83eddb7546.js",
    "/includes/chunk.a75a6e1c479034a37631.js",
    "/includes/chunk.ad5869c2d653b2c88d8e.js",
    "/includes/chunk.baac56ae943d135d7f63.js",
    "/includes/chunk.c99a2d43993aeb437a0a.js",
    "/includes/chunk.cd17b80095216d3f25af.js",
    "/includes/chunk.d13c00b17d0181a17861.js",
    "/includes/chunk.db52420b4ff6e1f252bc.js",
    "/includes/chunk.df23a38a587c8e7dc9e8.js",
    "/includes/chunk.e63d97df30f9cd165009.js",
    "/includes/chunk.f1d1ab8ef29f5fb75b51.js",
    "/includes/entry.044a4fe0cdcbe9f4686d.js"
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
