// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.00497e6e318901694d42.js",
    "/includes/chunk.0410c1f9eb96ca0a4cfa.js",
    "/includes/chunk.10a2567ab65d764ad4bb.js",
    "/includes/chunk.1a0e7ae1d956eabc46ac.js",
    "/includes/chunk.1b119cda41cdf8d7685f.js",
    "/includes/chunk.1c2b22ca839bf260afc8.js",
    "/includes/chunk.355b5ec2dcae3114b177.js",
    "/includes/chunk.4f9b6b6774042820ab29.js",
    "/includes/chunk.68854bd444daea13a5db.js",
    "/includes/chunk.70d87d9f856b2569ac1d.js",
    "/includes/chunk.725086d36d452e7b6d3e.js",
    "/includes/chunk.7d8938f9edac4112f946.js",
    "/includes/chunk.804bab334ff75fd84bed.js",
    "/includes/chunk.85f085108d986d8695fd.js",
    "/includes/chunk.8f27fe920ce41372d1a2.js",
    "/includes/chunk.a51012e1a7cdcc882375.js",
    "/includes/chunk.a7ac00f45120d1b081a0.js",
    "/includes/chunk.af4caa43cf77b86556bd.js",
    "/includes/chunk.b3decda8aee966a79faf.js",
    "/includes/chunk.c0ad9fe115b2de42dc53.js",
    "/includes/chunk.c487bf01e4bea9428e6f.js",
    "/includes/chunk.dc742addf09b4efff9f4.js",
    "/includes/chunk.ddbd72bbca6926f37990.js",
    "/includes/chunk.e44700052b98319cde39.js",
    "/includes/chunk.f47ec33eb65f1b119c93.js",
    "/includes/entry.6a498bf7ee3caa5e1a40.js",
    "/includes/entry.b379f6aa12371971321f.js"
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
