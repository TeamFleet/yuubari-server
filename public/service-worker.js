// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.021075485b87cc9ba120.js",
    "/includes/chunk.05cb59898da56d10e277.js",
    "/includes/chunk.252cae23fe43b710ce85.js",
    "/includes/chunk.352ae20984e2a11c44c5.js",
    "/includes/chunk.3a6a0d769c25d46b74c5.js",
    "/includes/chunk.3fd9f05086d637c3b634.js",
    "/includes/chunk.4d6399200da74b02c2ba.js",
    "/includes/chunk.4fb253260854b150d290.js",
    "/includes/chunk.573a6e06ba7b53c09cfb.js",
    "/includes/chunk.5d634ddab77d115fd719.js",
    "/includes/chunk.5f79f9709c4e8d37c204.js",
    "/includes/chunk.633c6b60222930ebde59.js",
    "/includes/chunk.647637593630e3061f85.js",
    "/includes/chunk.709503e6573ffe5f44da.js",
    "/includes/chunk.8cd6f9a3cf498aaabdb2.js",
    "/includes/chunk.9752ff54871e4b887893.js",
    "/includes/chunk.97cd275a6b4fc15f489e.js",
    "/includes/chunk.b01de682d13ae6fbbe2b.js",
    "/includes/chunk.b60de87eb3b0ea3b6d2e.js",
    "/includes/chunk.c4f83bd01a7ef4ac2d05.js",
    "/includes/chunk.d00f35face4a1352793d.js",
    "/includes/chunk.d262357c766c83b83011.js",
    "/includes/chunk.d5fda92a6ac067f39955.js",
    "/includes/chunk.ee95c765c9e81a08e583.js",
    "/includes/chunk.fbb28bc99982da3d4077.js",
    "/includes/entry.1491a27bf663b4575494.js",
    "/includes/entry.26827a4a227e4cb76f27.js",
    "/includes/entry.a805e057a7b0a77fa082.js",
    "/includes/entry.a8a9897e416105765b51.js"
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
