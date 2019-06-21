// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.074db0c46a94720963ff.js",
    "/includes/chunk.09ad52542ea1c0d5fc3d.js",
    "/includes/chunk.0dfdbf6961ed1088f458.js",
    "/includes/chunk.150e08e7d06605d99181.js",
    "/includes/chunk.19ca6fbbaf344986a1cf.js",
    "/includes/chunk.1f8e0a4561bf49e95812.js",
    "/includes/chunk.265bbd14b0d355325e57.js",
    "/includes/chunk.2a24ae4e27c83e17382c.js",
    "/includes/chunk.2e239c9de30fb9b6fc79.js",
    "/includes/chunk.2e8b9020646783941b3b.js",
    "/includes/chunk.334cee3855d22a7f752a.js",
    "/includes/chunk.386f430e32eb8881742d.js",
    "/includes/chunk.38a7ff516ec9a1be7dc5.js",
    "/includes/chunk.4eaf59541281779ec479.js",
    "/includes/chunk.55845b7a8b6718a3b9cd.js",
    "/includes/chunk.562c32dcd483c3d37339.js",
    "/includes/chunk.60b2b4b4549534b3e82e.js",
    "/includes/chunk.625fa4d798684cc5c489.js",
    "/includes/chunk.64a53316d32ff5b5d8be.js",
    "/includes/chunk.67b691c91b59cb5c1954.js",
    "/includes/chunk.6891ecdcbde543fa5535.js",
    "/includes/chunk.7985e4c17c68100949c8.js",
    "/includes/chunk.79fc790f15c20a2b000d.js",
    "/includes/chunk.7c514ecdc8fa4440580d.js",
    "/includes/chunk.7eccf14a303c9278d1c3.js",
    "/includes/chunk.86d7bbead47f751971b7.js",
    "/includes/chunk.88de1acbbdde667e17f3.js",
    "/includes/chunk.894ab489d6811cdf5775.js",
    "/includes/chunk.896b52df4ee607ed46a2.js",
    "/includes/chunk.8e1b6b8d40916a074442.js",
    "/includes/chunk.92e6cbc8fbdc7f4f8741.js",
    "/includes/chunk.97b8c20b2cbac7ca6ce1.js",
    "/includes/chunk.9d5eac05d3285156c7bd.js",
    "/includes/chunk.a47a86c186b084cef5ec.js",
    "/includes/chunk.ab639ad9ff18c85ba76d.js",
    "/includes/chunk.acc8dcd3c42a11fae5bc.js",
    "/includes/chunk.b3e23c0ba390925fd1b4.js",
    "/includes/chunk.b409f8c10faec865307a.js",
    "/includes/chunk.b6fc622ec595825d28d3.js",
    "/includes/chunk.b86aabd14b812237e8e4.js",
    "/includes/chunk.b989c2a498445cb06c7b.js",
    "/includes/chunk.b994a8d964655e44267d.js",
    "/includes/chunk.bf18eae5aa5d7da85895.js",
    "/includes/chunk.c195159064388cbad5fd.js",
    "/includes/chunk.c48ff03e09929ec41746.js",
    "/includes/chunk.cbd8b5b60e89cc0557fd.js",
    "/includes/chunk.ccdde800f151a583e5bf.js",
    "/includes/chunk.d08d3d3c186a19b0fde1.js",
    "/includes/chunk.d5c4b47cb7847b37f80e.js",
    "/includes/chunk.dcf813a55fcbd1c83558.js",
    "/includes/chunk.de12aed49129f8de1f06.js",
    "/includes/chunk.e0b0c36d9ffc6015d0ed.js",
    "/includes/chunk.e56598ff16c8ecf8728c.js",
    "/includes/chunk.e56885a5581c5a30ac25.js",
    "/includes/chunk.e71fbdfcadd3082ad8c7.js",
    "/includes/chunk.ea1060b7119580374cd3.js",
    "/includes/chunk.eaf43a693615f3ba1f87.js",
    "/includes/chunk.eaf5ee0f74d5554b49f1.js",
    "/includes/chunk.eb1c79158ed6aae2800b.js",
    "/includes/chunk.ee89cdec601f968fbe73.js",
    "/includes/chunk.eeae206bdfab9629271e.js",
    "/includes/chunk.f10c5465d72404dc0d1e.js",
    "/includes/chunk.fbdf58363e60a1c7fcc1.js",
    "/includes/chunk.fc4f9404f5916ea80caf.js",
    "/includes/entry.041880ad5524a983a805.js",
    "/includes/entry.50ac784e6bbe2d1ec267.js",
    "/includes/entry.5a9d079001124e4dd6b4.js",
    "/includes/entry.a4b744009cefc77829d6.js",
    "/includes/entry.c3d6d7ab24212b3561a6.js",
    "/includes/entry.fbfc169be7cd36ff67bb.js"
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
