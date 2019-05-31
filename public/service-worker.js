// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.1a9e275ef67f8ae29d54.js",
    "/includes/chunk.27556d4e501dfafd94e3.js",
    "/includes/chunk.2c6dbe8238d4264d00e6.js",
    "/includes/chunk.3897f138963b15d77b11.js",
    "/includes/chunk.5b094abafd1f5752e33a.js",
    "/includes/chunk.5e33e21bd4fd04ad09d6.js",
    "/includes/chunk.60d4b383486534c3ca68.js",
    "/includes/chunk.7cf1695dd5dd4822b60e.js",
    "/includes/chunk.7d276e3684be1029f9b0.js",
    "/includes/chunk.7e53c04cb9dbc254febd.js",
    "/includes/chunk.8ae2bfb91dc00f7e6835.js",
    "/includes/chunk.8ee6347a7942c6297d75.js",
    "/includes/chunk.9f58f26579ee2f991a25.js",
    "/includes/chunk.a070b504d252e7fe739b.js",
    "/includes/chunk.a97db8b4fa42b4298ae7.js",
    "/includes/chunk.adf80598e39bb480478b.js",
    "/includes/chunk.c7a5753a79a6bfd2fe9c.js",
    "/includes/chunk.cfbc75c7ba61da6eac27.js",
    "/includes/chunk.d91cb28e258fdcdf0217.js",
    "/includes/chunk.eaa883d34ddf1c4b5044.js",
    "/includes/chunk.ee16248218ecee37840e.js",
    "/includes/chunk.f3de9062680fcc8a27f0.js",
    "/includes/chunk.f770af3fe8dcd62a38a0.js",
    "/includes/chunk.fa983ec3b6960638448b.js",
    "/includes/chunk.ff776be5908a84bf7efa.js",
    "/includes/entry.75974866df9d43db8630.js",
    "/includes/entry.a40b8ee6d51d95098891.js",
    "/includes/entry.d0f92d0cbc80c751241a.js",
    "/includes/entry.d568c5973f5dc3df23db.js"
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
