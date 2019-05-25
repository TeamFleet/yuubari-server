// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0d63fb6bfdf11914dbc6.js",
    "/includes/chunk.12f631f84eec34f104c8.js",
    "/includes/chunk.3d678fb6d47006758bba.js",
    "/includes/chunk.5d3c6910a1125cdc0365.js",
    "/includes/chunk.5f40b242542a9d492299.js",
    "/includes/chunk.78f2a3b04666abfc0b58.js",
    "/includes/chunk.7da329736dbdcf72ac1c.js",
    "/includes/chunk.866a578c178b1e93d0e0.js",
    "/includes/chunk.984af8cdaf9ed5bf40d2.js",
    "/includes/chunk.9f22c139a1cecb001f0c.js",
    "/includes/chunk.a19b67f499c7445b9d29.js",
    "/includes/chunk.a26e2c05c8e140e84b0c.js",
    "/includes/chunk.a2916168e4fac40be9de.js",
    "/includes/chunk.a55d27420d7b66d8206e.js",
    "/includes/chunk.a92268c7f77e898c81d5.js",
    "/includes/chunk.a92988cc94c397696766.js",
    "/includes/chunk.b146c8912b6a1e9546fa.js",
    "/includes/chunk.d02590e4fa2e3d936219.js",
    "/includes/chunk.d39ac9a537ab6f5301f4.js",
    "/includes/chunk.d66ac0edfa30acaf5f11.js",
    "/includes/chunk.dc31e44dea54ae08d706.js",
    "/includes/chunk.e71d1112a38f489f3bea.js",
    "/includes/chunk.eff54759d6e8c07542e9.js",
    "/includes/chunk.f93fa5ed726d1f504a05.js",
    "/includes/chunk.faccde1dfa64fa72236a.js",
    "/includes/entry.043f52dd5a43a584abb2.js",
    "/includes/entry.3623590fb277c361f94d.js",
    "/includes/entry.6563fb12781a45df7353.js",
    "/includes/entry.d44e4a237387cc6848a1.js"
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
