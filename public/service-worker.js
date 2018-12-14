// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.00a5672a4433ec5cbbaf.js",
    "/includes/chunk.012bb17280c75b5de189.js",
    "/includes/chunk.02ba1311bce00dc3ac74.js",
    "/includes/chunk.02fe33b71cd5de9a9fcc.js",
    "/includes/chunk.0afb7b00f68386b17266.js",
    "/includes/chunk.361baf616bad73009998.js",
    "/includes/chunk.44dcadabc2913cfb47e2.js",
    "/includes/chunk.52954b5b16bbff98ab15.js",
    "/includes/chunk.5e1ed8b8c29d5794fdf9.js",
    "/includes/chunk.5f398a855957fb2f2ddc.js",
    "/includes/chunk.62a465137c4e962a5c13.js",
    "/includes/chunk.70f993f63a998a272da2.js",
    "/includes/chunk.7306ef68bfed3ff15008.js",
    "/includes/chunk.73a204e214776d58b9b8.js",
    "/includes/chunk.7412f6fcfab18b6db77d.js",
    "/includes/chunk.7c218170938a41c63cc3.js",
    "/includes/chunk.7f1c04c33686103296f3.js",
    "/includes/chunk.80d28c01657c8353aa14.js",
    "/includes/chunk.8635ce487838af7190a6.js",
    "/includes/chunk.961573b17e88a2ecc31f.js",
    "/includes/chunk.9a4fb61f1b7effcbcc67.js",
    "/includes/chunk.a72c08a37ce7e2bb7959.js",
    "/includes/chunk.a3680f6e4e74321e9438.js",
    "/includes/chunk.b84e11f42fd937fed562.js",
    "/includes/chunk.e08a5c8213990731afc9.js",
    "/includes/chunk.e6de42c5ff2232fb1193.js",
    "/includes/chunk.f177f30d2d0466cda599.js",
    "/includes/chunk.fd962b4bddfcb0b3277a.js",
    "/includes/entry.2f9c0239b32ee9d7b924.js"
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
