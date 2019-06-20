// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.049e68e17584859b7169.js",
    "/includes/chunk.070f6abbe3178234a378.js",
    "/includes/chunk.11d930939f05a6b8b375.js",
    "/includes/chunk.13112ff874485c8ab48b.js",
    "/includes/chunk.152580d46e026861440e.js",
    "/includes/chunk.1e03ea850c366c987a14.js",
    "/includes/chunk.2c722c4f2917aa6a693d.js",
    "/includes/chunk.320de966f36795490f2e.js",
    "/includes/chunk.3b2e80fc74b87a546b8f.js",
    "/includes/chunk.3ef692404c12f3272cd7.js",
    "/includes/chunk.47454f832193ec22ef23.js",
    "/includes/chunk.4b39a4e7070181af0c99.js",
    "/includes/chunk.50855ab6df8b3947c09f.js",
    "/includes/chunk.7da0482283548f037e89.js",
    "/includes/chunk.8146de4bd2f6b956796b.js",
    "/includes/chunk.8157aac547b9bedd5099.js",
    "/includes/chunk.847132a045c1d8204ca5.js",
    "/includes/chunk.98bc7205e135a43963df.js",
    "/includes/chunk.acc466090b8a3e39fb5b.js",
    "/includes/chunk.c4f22f32316468e44e9c.js",
    "/includes/chunk.c9fc2b324a827bae4ea4.js",
    "/includes/chunk.caf0a96cce89914c59b6.js",
    "/includes/chunk.d00572f8160fc652ac04.js",
    "/includes/chunk.dde48f5912c0a7aca6a1.js",
    "/includes/chunk.f97732d8de7e1fd35c03.js",
    "/includes/entry.4c651e65c81cd7a8a3f6.js",
    "/includes/entry.7475f4c24506773d0c82.js",
    "/includes/entry.96792a5ce3d2b8331d59.js",
    "/includes/entry.b9a0c9d3122c6293c85f.js"
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
