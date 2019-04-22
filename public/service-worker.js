// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.158d09c52845dd6a88a1.js",
    "/includes/chunk.266fe9c045b260b5786f.js",
    "/includes/chunk.31afeb6d9bf2942a60dd.js",
    "/includes/chunk.459025c590c32f62e4da.js",
    "/includes/chunk.46c29d37e02df753d74d.js",
    "/includes/chunk.4953500ce4ce8cfffbbd.js",
    "/includes/chunk.53f1f3df992dd73c9094.js",
    "/includes/chunk.60c7662b5a597df50366.js",
    "/includes/chunk.6997b3f206618b9474cd.js",
    "/includes/chunk.6dcf68009ea33990928d.js",
    "/includes/chunk.8589b756cb188dfcb626.js",
    "/includes/chunk.858e96742327f3accc7e.js",
    "/includes/chunk.8c445759b73faeac4843.js",
    "/includes/chunk.99eba6ae3a05d02ce1c6.js",
    "/includes/chunk.aae339c3186e2921e048.js",
    "/includes/chunk.caa8dfefdb3a230f0274.js",
    "/includes/chunk.cf46402193b6aaa642b5.js",
    "/includes/chunk.d456c291307109f396b8.js",
    "/includes/chunk.d972c77135bdefd0adcc.js",
    "/includes/chunk.de9f79d2149a0309b06a.js",
    "/includes/chunk.e1852d685fc25b4913b9.js",
    "/includes/chunk.ead476111af3c4d50985.js",
    "/includes/chunk.f01abea9f471db6c6ff4.js",
    "/includes/chunk.f63d22886e73f55a20ba.js",
    "/includes/chunk.fdb5695eb0c5503000b1.js",
    "/includes/entry.18f789c3b52d722fbda3.js",
    "/includes/entry.2796c24499b16074a99c.js",
    "/includes/entry.8c95edef8ef2ff5bd93f.js",
    "/includes/entry.a3311e6d4888a7901d13.js"
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
