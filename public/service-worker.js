// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.1f3e52ce7cf05797346c.js",
    "/includes/chunk.4b96e6ca7d7b152b151e.js",
    "/includes/chunk.4ee52f6afc1125957939.js",
    "/includes/chunk.543b396be9951469290f.js",
    "/includes/chunk.551efe6573d5878e5862.js",
    "/includes/chunk.556aee8ced23fa51bef3.js",
    "/includes/chunk.568e772028a75576a069.js",
    "/includes/chunk.5bf863859aee1830c95f.js",
    "/includes/chunk.5fc6ee3780214a45c58b.js",
    "/includes/chunk.610cd3832bef5f12d943.js",
    "/includes/chunk.760357461d005ae1f774.js",
    "/includes/chunk.7a271fde10b8c13bc2c2.js",
    "/includes/chunk.7e4c8a63407e0b959005.js",
    "/includes/chunk.8df40062802ec61e2db7.js",
    "/includes/chunk.936266a09d51f8ab6b5d.js",
    "/includes/chunk.ad37abe9fa4f09004519.js",
    "/includes/chunk.ae89adf956d5b3ccdcf5.js",
    "/includes/chunk.b6be65818b7ca2a04fa4.js",
    "/includes/chunk.bb1d02a29d4f67e4ddfc.js",
    "/includes/chunk.c7d7e3ce5781badaa002.js",
    "/includes/chunk.c8cc0a446b2d50f4c63b.js",
    "/includes/chunk.e1a9a16462272697d4c1.js",
    "/includes/chunk.e3639082ce3161698723.js",
    "/includes/chunk.eb3dc4b10e0d65bc6f27.js",
    "/includes/chunk.f15a326a1173dcf13019.js",
    "/includes/entry.0c57bd0fdd38efa9874e.js",
    "/includes/entry.77e21a84a051cf1e4fd4.js",
    "/includes/entry.7bd9e3875efee24c4244.js",
    "/includes/entry.b4a8da695b784d06a6fd.js"
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
