// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.016be0db451c3f5d46a9.js",
    "/includes/chunk.056518cd564a6405d4c4.js",
    "/includes/chunk.05717b374ba36a8815b7.js",
    "/includes/chunk.0c959d8e977edf2430bc.js",
    "/includes/chunk.1640fe1fde16ac6f951d.js",
    "/includes/chunk.1c7e93635776d7934ecd.js",
    "/includes/chunk.1d53bbcfab12eafbca16.js",
    "/includes/chunk.20a973cb3c07084f9eb3.js",
    "/includes/chunk.2822b1ffb888148f83f9.js",
    "/includes/chunk.2a1e5d658daeca5f092f.js",
    "/includes/chunk.30c7a6a9e3fd25725076.js",
    "/includes/chunk.371c880bf108937cabca.js",
    "/includes/chunk.379a9fb24c5ee17049de.js",
    "/includes/chunk.3a6459d8347660880914.js",
    "/includes/chunk.3ae0764d3dd6c0845b4c.js",
    "/includes/chunk.411e5c15549ee5299815.js",
    "/includes/chunk.448c2c8350472064bd16.js",
    "/includes/chunk.44d366f7747176e43839.js",
    "/includes/chunk.490a3e23101a93715169.js",
    "/includes/chunk.4d54d29b37d59cc93343.js",
    "/includes/chunk.551efe6573d5878e5862.js",
    "/includes/chunk.556aee8ced23fa51bef3.js",
    "/includes/chunk.5ad6264b8e692e3cbff7.js",
    "/includes/chunk.610cd3832bef5f12d943.js",
    "/includes/chunk.62c58f0dce1b122e0254.js",
    "/includes/chunk.68894963b62971f6ed33.js",
    "/includes/chunk.6f80f5c23b3edaa8de6b.js",
    "/includes/chunk.71de62dfa162acb0c570.js",
    "/includes/chunk.72f12da360da177bd988.js",
    "/includes/chunk.75781a9e5430da5ca75d.js",
    "/includes/chunk.76fef442b292c79d0e37.js",
    "/includes/chunk.796e76e9507a25da44be.js",
    "/includes/chunk.7e4c8a63407e0b959005.js",
    "/includes/chunk.8173b8389777e2f68409.js",
    "/includes/chunk.84b9c89b0f554f6d04c4.js",
    "/includes/chunk.85a9b739f0c7a53eed6b.js",
    "/includes/chunk.889658b848f501454a0e.js",
    "/includes/chunk.8a3164ba6e40d07e7326.js",
    "/includes/chunk.8b1e5e7580c2e5e6a834.js",
    "/includes/chunk.8bea6f2978dae6299c17.js",
    "/includes/chunk.8df40062802ec61e2db7.js",
    "/includes/chunk.9f54c0bb15db017fad2a.js",
    "/includes/chunk.a67f3b5308c5d21be9df.js",
    "/includes/chunk.ac0f4a8775d36c44de0c.js",
    "/includes/chunk.ac252c3b4c02a78aba34.js",
    "/includes/chunk.b6412f44d867afe675ec.js",
    "/includes/chunk.c8b6c4a77b37ba11f50c.js",
    "/includes/chunk.cb76e64f3b14dfc069fd.js",
    "/includes/chunk.cde3a1d7ecc1bf730626.js",
    "/includes/chunk.ce3d54b52f6a41dd8361.js",
    "/includes/chunk.cfccdf7d89eedd60b615.js",
    "/includes/chunk.d84c17f56a59c10a57b1.js",
    "/includes/chunk.de445f6fafa27db1cf48.js",
    "/includes/chunk.e00d54b00e5dd276a553.js",
    "/includes/chunk.e11db0375eace905e920.js",
    "/includes/chunk.e4cf80d0f81b5faa64e3.js",
    "/includes/chunk.ee966c3c2539b84d3e97.js",
    "/includes/chunk.f0fc0a6a0549db0cac16.js",
    "/includes/chunk.f670ce0ded18ac0c0eec.js",
    "/includes/chunk.f6ebf7f6ae2536cb031a.js",
    "/includes/chunk.fa6d95e3894e518903e7.js",
    "/includes/chunk.febb1ab5abc2253ddaff.js",
    "/includes/chunk.feedcab0360a225da74c.js",
    "/includes/entry.0c57bd0fdd38efa9874e.js",
    "/includes/entry.6ffbe2f4bfa9585e4762.js",
    "/includes/entry.7020032475a445418bf6.js",
    "/includes/entry.77e21a84a051cf1e4fd4.js",
    "/includes/entry.b2805467021fd6fa73a6.js"
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
