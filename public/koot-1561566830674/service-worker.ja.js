// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.074db0c46a94720963ff.js",
    "/includes/chunk.0992896f75bb3c4f60b2.js",
    "/includes/chunk.09ad52542ea1c0d5fc3d.js",
    "/includes/chunk.1476630faf70eec0491e.js",
    "/includes/chunk.150e08e7d06605d99181.js",
    "/includes/chunk.173febd99fd2525e4db9.js",
    "/includes/chunk.19ca6fbbaf344986a1cf.js",
    "/includes/chunk.1f1ed88b7a712bdac08a.js",
    "/includes/chunk.1f8e0a4561bf49e95812.js",
    "/includes/chunk.2e239c9de30fb9b6fc79.js",
    "/includes/chunk.2e8b9020646783941b3b.js",
    "/includes/chunk.32bf6210064f15083a53.js",
    "/includes/chunk.334cee3855d22a7f752a.js",
    "/includes/chunk.37cf16821681307406e3.js",
    "/includes/chunk.386f430e32eb8881742d.js",
    "/includes/chunk.3d2d5600897bceaab45b.js",
    "/includes/chunk.3dc8a73f7c16e93f9106.js",
    "/includes/chunk.447bdff3bd8c52f0a454.js",
    "/includes/chunk.55845b7a8b6718a3b9cd.js",
    "/includes/chunk.562c32dcd483c3d37339.js",
    "/includes/chunk.5d54074307fa45dfdcf6.js",
    "/includes/chunk.60b2b4b4549534b3e82e.js",
    "/includes/chunk.625fa4d798684cc5c489.js",
    "/includes/chunk.62ca7dcd3025e9b944b3.js",
    "/includes/chunk.64a53316d32ff5b5d8be.js",
    "/includes/chunk.67b691c91b59cb5c1954.js",
    "/includes/chunk.6891ecdcbde543fa5535.js",
    "/includes/chunk.7204f6cb72eddb29f01c.js",
    "/includes/chunk.72c710930f4fb069aad7.js",
    "/includes/chunk.7985e4c17c68100949c8.js",
    "/includes/chunk.79fc790f15c20a2b000d.js",
    "/includes/chunk.7c514ecdc8fa4440580d.js",
    "/includes/chunk.88de1acbbdde667e17f3.js",
    "/includes/chunk.894ab489d6811cdf5775.js",
    "/includes/chunk.896b52df4ee607ed46a2.js",
    "/includes/chunk.8c2aea9cd75033186cea.js",
    "/includes/chunk.8c4455d85d2adf597326.js",
    "/includes/chunk.907868be5d04fdbcf20e.js",
    "/includes/chunk.92e6cbc8fbdc7f4f8741.js",
    "/includes/chunk.9a56b242c72e0645936d.js",
    "/includes/chunk.a47a86c186b084cef5ec.js",
    "/includes/chunk.ab639ad9ff18c85ba76d.js",
    "/includes/chunk.b061a6355bfe666363bf.js",
    "/includes/chunk.b3e23c0ba390925fd1b4.js",
    "/includes/chunk.b409f8c10faec865307a.js",
    "/includes/chunk.b86aabd14b812237e8e4.js",
    "/includes/chunk.bf18eae5aa5d7da85895.js",
    "/includes/chunk.c48ff03e09929ec41746.js",
    "/includes/chunk.d08d3d3c186a19b0fde1.js",
    "/includes/chunk.d65ecb1401d526c6f6d2.js",
    "/includes/chunk.dcf813a55fcbd1c83558.js",
    "/includes/chunk.de12aed49129f8de1f06.js",
    "/includes/chunk.e0b0c36d9ffc6015d0ed.js",
    "/includes/chunk.e56598ff16c8ecf8728c.js",
    "/includes/chunk.e71fbdfcadd3082ad8c7.js",
    "/includes/chunk.e8c4027e63ed93084144.js",
    "/includes/chunk.ea1060b7119580374cd3.js",
    "/includes/chunk.eb1c79158ed6aae2800b.js",
    "/includes/chunk.ee89cdec601f968fbe73.js",
    "/includes/chunk.f10c5465d72404dc0d1e.js",
    "/includes/chunk.f2f8ddd9589963e01a59.js",
    "/includes/chunk.fbdf58363e60a1c7fcc1.js",
    "/includes/chunk.fc4f9404f5916ea80caf.js",
    "/includes/entry.2f7f7e9d265c9f170e74.js",
    "/includes/entry.50ac784e6bbe2d1ec267.js",
    "/includes/entry.5a9d079001124e4dd6b4.js",
    "/includes/entry.78ed4f07f152e646a5cb.js",
    "/includes/entry.aea95342db2f830d0eaf.js",
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
