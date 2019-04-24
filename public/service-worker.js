// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0e655401da51fc70167d.js",
    "/includes/chunk.16055b867e4e71f72b89.js",
    "/includes/chunk.266f4698e5e092d0f584.js",
    "/includes/chunk.44df99452548fbb18f34.js",
    "/includes/chunk.45da5f14c95027da0352.js",
    "/includes/chunk.525528e9c340d2511484.js",
    "/includes/chunk.54fd76ef11a38d8b8ff8.js",
    "/includes/chunk.573846ed8e5051013352.js",
    "/includes/chunk.5a126facb7dfdeaac43d.js",
    "/includes/chunk.7b50f8c1d7c149bcca47.js",
    "/includes/chunk.86656125a2f029249b60.js",
    "/includes/chunk.97705b45e2e25a3fe0cd.js",
    "/includes/chunk.a42eab439b9d4307776f.js",
    "/includes/chunk.ae6c2456010e9397ce1b.js",
    "/includes/chunk.b77d008a6ae5ab8dc280.js",
    "/includes/chunk.ba02d6c08bb581faf1da.js",
    "/includes/chunk.bc8462e004e52d767302.js",
    "/includes/chunk.be93568ea8e7f6bc1d8b.js",
    "/includes/chunk.cad21eecfaf7d20c6b37.js",
    "/includes/chunk.ce4dd8959b661a8a5393.js",
    "/includes/chunk.ed5e46e3916343c7935c.js",
    "/includes/chunk.ee936ba90bd16d86ec64.js",
    "/includes/chunk.f5e5001b109aaafdca0d.js",
    "/includes/chunk.ff3cf3a9847d1361a685.js",
    "/includes/chunk.ff90b56046dbd2c13d1a.js",
    "/includes/entry.2796c24499b16074a99c.js",
    "/includes/entry.306b55f0359d8786dd10.js",
    "/includes/entry.8c95edef8ef2ff5bd93f.js",
    "/includes/entry.d605877936f3717b4e22.js"
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
