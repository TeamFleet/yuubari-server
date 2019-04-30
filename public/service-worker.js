// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.057e0285742f11f53d70.js",
    "/includes/chunk.0a21f4532ca6fdebdc24.js",
    "/includes/chunk.1714279831b91308f272.js",
    "/includes/chunk.1e2ee4c39f656c7a18c2.js",
    "/includes/chunk.2f2e4612a8480b9a8d6c.js",
    "/includes/chunk.2f4b44952f3792d64f49.js",
    "/includes/chunk.389dfd8547a21447a603.js",
    "/includes/chunk.399ada464231a0ddc220.js",
    "/includes/chunk.3b1c5ac2e6a98df4f857.js",
    "/includes/chunk.3ea1e34bc1e8281126eb.js",
    "/includes/chunk.4b12ba71bbc6b3713ccf.js",
    "/includes/chunk.4f051bd161b8d3c92263.js",
    "/includes/chunk.4fbcc4bfdbb0095c7d05.js",
    "/includes/chunk.53df49a8cb47c0507b33.js",
    "/includes/chunk.6ad159148fc252cd0ed0.js",
    "/includes/chunk.72161ece2e13c207cf27.js",
    "/includes/chunk.743445d4f3959ab249fd.js",
    "/includes/chunk.7d5f220ea983c5521275.js",
    "/includes/chunk.8e24c8fd11ca0d655954.js",
    "/includes/chunk.94a97a1a572c3f6b5804.js",
    "/includes/chunk.9f0dfc594136f6d2c501.js",
    "/includes/chunk.addcd80b7005936da4a5.js",
    "/includes/chunk.cb8ac63e02cc3232c5b0.js",
    "/includes/chunk.f4952c68c5b4e51e31d8.js",
    "/includes/chunk.ff000752232aa478c353.js",
    "/includes/entry.26827a4a227e4cb76f27.js",
    "/includes/entry.4863b9ee7323ee835b31.js",
    "/includes/entry.8cd55034406b010e0b2a.js",
    "/includes/entry.e594ac8d88d16d816589.js"
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
