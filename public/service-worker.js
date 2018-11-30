// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/",
    "/includes/chunk.0bb5c785b751e40ed78d.js",
    "/includes/chunk.0b019575c2fc536edc3d.js",
    "/includes/chunk.233a4694d63dda172abf.js",
    "/includes/chunk.282a5ac000872973d733.js",
    "/includes/chunk.2f712a36d1c233a8cd85.js",
    "/includes/chunk.42327314d21576fcfb13.js",
    "/includes/chunk.49ac1e8e7f9029c1d3fc.js",
    "/includes/chunk.5241cbc2eac0ec88556e.js",
    "/includes/chunk.52bbfa3806e5af4b0cec.js",
    "/includes/chunk.57af360c34db460e33ac.js",
    "/includes/chunk.59e17853905a894ec3ac.js",
    "/includes/chunk.6975387e9dfa308182af.js",
    "/includes/chunk.750389824afd129ff0fc.js",
    "/includes/chunk.7ab91c1a2b9cb07a8dc3.js",
    "/includes/chunk.834032f624a0e19dfa25.js",
    "/includes/chunk.85c6fe350379c531d5cd.js",
    "/includes/chunk.8bc35c20dab287c46cc3.js",
    "/includes/chunk.8fa836b98e30291cb6a7.js",
    "/includes/chunk.a001660fc8292a31b6a7.js",
    "/includes/chunk.ae43f3aa840b0fef753b.js",
    "/includes/chunk.b67955ea14360ff3d279.js",
    "/includes/chunk.bba207cfb2c26b5adb47.js",
    "/includes/chunk.c3f63b546d2af6636f17.js",
    "/includes/chunk.cf8e5997afe6e3c930b0.js",
    "/includes/chunk.cf9f0fd7789a95d2c7c3.js",
    "/includes/chunk.dbc2dfde09499a177c7a.js",
    "/includes/chunk.e141e40667cc718498b9.js",
    "/includes/chunk.e96ff8b790bf03a727df.js",
    "/includes/chunk.ffd9e641a5bad6561830.js",
    "/includes/core.2ffd0ec107f8ec793257.js",
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
