// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.057e0285742f11f53d70.js",
    "/includes/chunk.0a21f4532ca6fdebdc24.js",
    "/includes/chunk.0b2ee4c0d38bbc5fa018.js",
    "/includes/chunk.1714279831b91308f272.js",
    "/includes/chunk.1e2ee4c39f656c7a18c2.js",
    "/includes/chunk.2f4b44952f3792d64f49.js",
    "/includes/chunk.3643557079454beb2c81.js",
    "/includes/chunk.4a130b7e7489936d646e.js",
    "/includes/chunk.4b12ba71bbc6b3713ccf.js",
    "/includes/chunk.4e3270566ded5649a261.js",
    "/includes/chunk.4ffed2d7c93578f2f011.js",
    "/includes/chunk.50ec6f8e88ab67cf146b.js",
    "/includes/chunk.76b371524f1e40ed5124.js",
    "/includes/chunk.6ad159148fc252cd0ed0.js",
    "/includes/chunk.8d60f0110cfa5d3d97cf.js",
    "/includes/chunk.8e6b6ad7b5d21973775a.js",
    "/includes/chunk.94a97a1a572c3f6b5804.js",
    "/includes/chunk.9d5f4599732990dcbd71.js",
    "/includes/chunk.9f0dfc594136f6d2c501.js",
    "/includes/chunk.addcd80b7005936da4a5.js",
    "/includes/chunk.bb5808f1609d79bfabfd.js",
    "/includes/chunk.bcdfc7fe112e37f65e63.js",
    "/includes/chunk.e1139e51348cc59ac9d0.js",
    "/includes/chunk.fe0b7ca78afbc0b7a283.js",
    "/includes/chunk.ff000752232aa478c353.js",
    "/includes/entry.1491a27bf663b4575494.js",
    "/includes/entry.1565097f014d49eca151.js",
    "/includes/entry.1bfa21fd4bb0e7cc1c0c.js",
    "/includes/entry.26827a4a227e4cb76f27.js"
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
