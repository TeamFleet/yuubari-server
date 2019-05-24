// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.00abfdfeb3d44608dd6b.js",
    "/includes/chunk.01fd67771adf8e57025c.js",
    "/includes/chunk.0811a0b38911a6733c41.js",
    "/includes/chunk.1d638510c6617dd2d4b1.js",
    "/includes/chunk.1e2168dd804a05bad766.js",
    "/includes/chunk.25a4a6c3ec11dd75fb89.js",
    "/includes/chunk.28d0a25644c2f5123769.js",
    "/includes/chunk.2b7e6886b4cdb8020846.js",
    "/includes/chunk.356a0f59215ab341fff1.js",
    "/includes/chunk.3f5e916d5f7dd33940ba.js",
    "/includes/chunk.49376cedf2f1562792c3.js",
    "/includes/chunk.57703ef4ca2ad5f84263.js",
    "/includes/chunk.578c360573032dd25573.js",
    "/includes/chunk.62018a9ae8bd9518a7bf.js",
    "/includes/chunk.66c29e920e20c30eb4c1.js",
    "/includes/chunk.6a5494b9d1c698128355.js",
    "/includes/chunk.7a307d4e5c97f8fbd8fa.js",
    "/includes/chunk.7bfe095890129d06ae67.js",
    "/includes/chunk.813173ab09baf4f94948.js",
    "/includes/chunk.8bec406a98fea2b672f7.js",
    "/includes/chunk.b9b6d108bb0a1ed8c008.js",
    "/includes/chunk.d126753e22f9c27fbb30.js",
    "/includes/chunk.de118537666b833255e8.js",
    "/includes/chunk.df6a7a45ee0c2cc5ea1b.js",
    "/includes/chunk.f13621c7f858c83389b7.js",
    "/includes/entry.1491a27bf663b4575494.js",
    "/includes/entry.1be2af7903b7452189aa.js",
    "/includes/entry.341170948fa469d3ba25.js",
    "/includes/entry.8953a38e5e6403387ecb.js"
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
