// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/",
    "/includes/chunk.2149477cbe6e3e42c1f4.js",
    "/includes/chunk.37a2642fc1607784a865.js",
    "/includes/chunk.2d1a0c972d699785fd67.js",
    "/includes/chunk.4741c0680befd1d2c81f.js",
    "/includes/chunk.50e80d3c2b9b5cb9d012.js",
    "/includes/chunk.514f2b29fb6488a3dc3b.js",
    "/includes/chunk.5595a7a9b97786a171bf.js",
    "/includes/chunk.592665a908282aa08142.js",
    "/includes/chunk.5c89879c6ab5ec7fc044.js",
    "/includes/chunk.6e6a3c3deab371c09976.js",
    "/includes/chunk.7d2f1854c2dbcb2751fe.js",
    "/includes/chunk.860541669d1e54eea488.js",
    "/includes/chunk.8c7caec954df7f4f4f04.js",
    "/includes/chunk.9b7d55f87a05fae69c51.js",
    "/includes/chunk.9ddbeee57c8935b172fb.js",
    "/includes/chunk.a26f875fd8f1e8d80f1e.js",
    "/includes/chunk.be7d3c1315c5d1320042.js",
    "/includes/chunk.ca5643b0428041d8f3ea.js",
    "/includes/chunk.d19a1d4a4b816e13308b.js",
    "/includes/chunk.e26d7987f932db4efe09.js",
    "/includes/chunk.e44d93c691ab15168583.js",
    "/includes/chunk.eaaae4af182a65b5d86c.js",
    "/includes/chunk.ead973c3f994ce83cb63.js",
    "/includes/chunk.eae15c94ebb3591e2dd4.js",
    "/includes/chunk.efbdeb8b8d15babd227b.js",
    "/includes/chunk.f54e01ce755c68cdb9a0.js",
    "/includes/chunk.f912a1c30dcbd7afb327.js",
    "/includes/chunk.f9dc059be972aa58a2a7.js",
    "/includes/chunk.facba0fc1a99764d7a77.js",
    "/includes/entry.d823354b31f70f6469a6.js",
    "/includes/extract.all.045c6281457680f8bad8bdf65fd72047.css",
    "/includes/assets/017317e08bf0dcc88363eeb52e679184.png",
    "/includes/assets/356a495a162a59b56522fe48e7eba6c2.png",
    "/includes/assets/452c5fc8c2d7a18b5a09f74f4e1d11fc.png",
    "/includes/assets/485bca593bc4752ed4c054766cd8b73d.png",
    "/includes/assets/503a64aeb5a2457a437b9303e904f658.png",
    "/includes/assets/62857c029aaeca82035ac299ad0e6ec4.png",
    "/includes/assets/667ad37a783147836ebf1adf74799186.png",
    "/includes/assets/696aa31a479410913849eaab4c115f63.png",
    "/includes/assets/90f0cc544c5fa8c57910266117dde923.png",
    "/includes/assets/a84d12073dfdba160d20d628bffb6298.png",
    "/includes/assets/ad2350613366053be62f6ec6b2aaf383.png",
    "/includes/assets/cad51bb225d8047157db75043cd91331.png",
    "/includes/assets/cd67278ffd53dc3920034ca896292bcb.png",
    "/includes/assets/d331950788b4353a087edaee4c8507b8.png",
    "/includes/assets/d3eddc5f88f2a9c2618d068668ab4d6c.png",
    "/includes/assets/d6a3465fd467cfb17988178f1563b63b.png",
    "/includes/assets/d9279fb16f42ac4c0774ece1a75bf10c.png",
    "/includes/assets/db36beb696ed6dc278d852b13ebbc9d4.png",
    "/includes/assets/ea83ab127cecd6be05116b4555875fd8.png"
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
