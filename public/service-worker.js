// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0a18d16ee3f9952c527c.js",
    "/includes/chunk.36c43b9b6d4696f6b880.js",
    "/includes/chunk.3bba9103d35b1171d266.js",
    "/includes/chunk.4c1103f7e1473b271268.js",
    "/includes/chunk.565d2db5985ca9660a47.js",
    "/includes/chunk.5a35adcecd8b0df91449.js",
    "/includes/chunk.5fad6ab12dd4e126920a.js",
    "/includes/chunk.633a7972ecb864c0ce35.js",
    "/includes/chunk.707c5f2b5b5a6de68b66.js",
    "/includes/chunk.7b8fcafd9fa4c916cd52.js",
    "/includes/chunk.7c71a5519cc2c240adab.js",
    "/includes/chunk.8426f89fff9c5d822f55.js",
    "/includes/chunk.8e71dbf5b25f407fa976.js",
    "/includes/chunk.9ed3879dfa23470d5b96.js",
    "/includes/chunk.a0cc9b53f36e2cdca5fc.js",
    "/includes/chunk.b30127848fd211245d24.js",
    "/includes/chunk.c0bb197208cbf3faa2a1.js",
    "/includes/chunk.cc3df3b0b58a4454068d.js",
    "/includes/chunk.cc90b49a9804fa285f48.js",
    "/includes/chunk.d46e034402f879cd6e29.js",
    "/includes/chunk.e381579de46cf94f0696.js",
    "/includes/chunk.e5e0e74cc2786a4ab05e.js",
    "/includes/chunk.e811d008014443202663.js",
    "/includes/chunk.f3ff3a83a4fffcb58443.js",
    "/includes/chunk.f4d31543a614a3f723ec.js",
    "/includes/entry.892bd6ee00b1dafc33c9.js",
    "/includes/entry.f8c6957894eb1286cb27.js"
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
