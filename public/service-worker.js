// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.072c1d9535b7fb2886ce.js",
    "/includes/chunk.0a21f4532ca6fdebdc24.js",
    "/includes/chunk.0b2ee4c0d38bbc5fa018.js",
    "/includes/chunk.1714279831b91308f272.js",
    "/includes/chunk.2249f45943a88dcc73cf.js",
    "/includes/chunk.2f4b44952f3792d64f49.js",
    "/includes/chunk.324ec6196adfdc8d2343.js",
    "/includes/chunk.37cd36d7f6aa84c87234.js",
    "/includes/chunk.4a130b7e7489936d646e.js",
    "/includes/chunk.4ffed2d7c93578f2f011.js",
    "/includes/chunk.521ed3372ab9ef3a96b1.js",
    "/includes/chunk.57f477d21d869cf36834.js",
    "/includes/chunk.6ad159148fc252cd0ed0.js",
    "/includes/chunk.1e2ee4c39f656c7a18c2.js",
    "/includes/chunk.76b371524f1e40ed5124.js",
    "/includes/chunk.7e99ea42b60dec69dc06.js",
    "/includes/chunk.9642ed2e6811abe07836.js",
    "/includes/chunk.970de30cf1c54aeef8c3.js",
    "/includes/chunk.ac6308b7c74e074c23a5.js",
    "/includes/chunk.bcdfc7fe112e37f65e63.js",
    "/includes/chunk.c856181585f670756fd1.js",
    "/includes/chunk.f09c2e106c782f009835.js",
    "/includes/chunk.fe0b7ca78afbc0b7a283.js",
    "/includes/chunk.d9a3526bd1f6ea2c5e00.js",
    "/includes/chunk.ff000752232aa478c353.js",
    "/includes/entry.26827a4a227e4cb76f27.js",
    "/includes/entry.8cd55034406b010e0b2a.js",
    "/includes/entry.a4396a3f8ba5046db35b.js",
    "/includes/entry.e594ac8d88d16d816589.js"
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
