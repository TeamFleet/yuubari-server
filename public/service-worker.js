// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/",
    "/includes/chunk.0b868aed694467fe5fa9.js",
    "/includes/chunk.0e1bac8c4e60b9d35078.js",
    "/includes/chunk.19a7a445078c1c6bb708.js",
    "/includes/chunk.2c9ba000c9db24ac5eaf.js",
    "/includes/chunk.371e1ff00c31b2382dee.js",
    "/includes/chunk.3bb0198a95164c8a3422.js",
    "/includes/chunk.42fa18f23456f8a8589c.js",
    "/includes/chunk.54129cafa1460360e795.js",
    "/includes/chunk.54c46ab99cbd568e68a9.js",
    "/includes/chunk.61475fd80628abefc2d4.js",
    "/includes/chunk.6379f7159a9dbf5ecb62.js",
    "/includes/chunk.67e5466eebf2f100db3d.js",
    "/includes/chunk.701e7b29260e750c162b.js",
    "/includes/chunk.73c3554382d48ad05c1d.js",
    "/includes/chunk.75f56104015071f1188f.js",
    "/includes/chunk.777c9a733411596a5493.js",
    "/includes/chunk.779a52e47bbe7e74dba6.js",
    "/includes/chunk.8714eefeef9a9141b2d2.js",
    "/includes/chunk.8d7a1e839f0a4247cc1e.js",
    "/includes/chunk.a201442c06b908751a17.js",
    "/includes/chunk.a577eaad24bfbe85c971.js",
    "/includes/chunk.a8b433a7ff19f3c1add6.js",
    "/includes/chunk.b5d1b907db62350530dd.js",
    "/includes/chunk.b67883c1f8a2658a75dd.js",
    "/includes/chunk.b9206e0658c212b84a98.js",
    "/includes/chunk.d043965e05f5d71e5f0d.js",
    "/includes/chunk.dfb2d66a6ae8402ef86b.js",
    "/includes/chunk.ee2009bb2a34571c373d.js",
    "/includes/chunk.fa7784cf35092e62a88d.js",
    "/includes/entry.40e336c71abd7d0308a8.js",
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
