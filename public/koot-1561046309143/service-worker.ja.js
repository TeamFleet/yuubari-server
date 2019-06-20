// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.000a90667400b4b111dc.js",
    "/includes/chunk.01b9538f6c5c5a47dac3.js",
    "/includes/chunk.05115c25e3faf7ddc7e1.js",
    "/includes/chunk.0511ac22edec07a55104.js",
    "/includes/chunk.0b331dd1b516dc4ff096.js",
    "/includes/chunk.11639872e8aeb37af488.js",
    "/includes/chunk.15dbcff7a10162b903e9.js",
    "/includes/chunk.2007648c745a26180805.js",
    "/includes/chunk.20174779f6971ec5606e.js",
    "/includes/chunk.21aeb847eba84e9915b5.js",
    "/includes/chunk.24c0942213571a4a9465.js",
    "/includes/chunk.2927e3e86925a393129c.js",
    "/includes/chunk.33cf6a5e590cbaf3692d.js",
    "/includes/chunk.36da40cac4b0b76a195e.js",
    "/includes/chunk.3897f138963b15d77b11.js",
    "/includes/chunk.3b5801eeb21edc545244.js",
    "/includes/chunk.52a16d7b854d5f84e6b6.js",
    "/includes/chunk.5c40db91b81d53fad6a7.js",
    "/includes/chunk.66deb37508dc887d49e2.js",
    "/includes/chunk.6824ca61ddd51d1ad1f3.js",
    "/includes/chunk.6940956d8d6496f16458.js",
    "/includes/chunk.6f1361514cdc58e1a56c.js",
    "/includes/chunk.70c8db45fdf8682b34a4.js",
    "/includes/chunk.7336d7430fa2773e3ab9.js",
    "/includes/chunk.76c7652e649596a415d1.js",
    "/includes/chunk.7854d1cb2865aaf28660.js",
    "/includes/chunk.7c6f5307fcbca5efb7e0.js",
    "/includes/chunk.87c73ba3b597ea1c561a.js",
    "/includes/chunk.8cd14f5149692f44bdcc.js",
    "/includes/chunk.910d1bcd02e053750827.js",
    "/includes/chunk.92168cebf587d12b2069.js",
    "/includes/chunk.95c6af2d523b83957322.js",
    "/includes/chunk.96fd626d516566819be3.js",
    "/includes/chunk.a2a8b6e114e05f40e3b5.js",
    "/includes/chunk.a486aa38ea0eff1187dc.js",
    "/includes/chunk.a67398385805bc343db9.js",
    "/includes/chunk.adf80598e39bb480478b.js",
    "/includes/chunk.b4e64abfeefae76c6892.js",
    "/includes/chunk.b7177b5644db15c08c9d.js",
    "/includes/chunk.bbc23ca749197b1b4f15.js",
    "/includes/chunk.c188d7403a38fb86fa43.js",
    "/includes/chunk.c21c5ad5747be2356a97.js",
    "/includes/chunk.c502aeffab1399d245cf.js",
    "/includes/chunk.c523bad10d79139d0449.js",
    "/includes/chunk.c584c3b0185aca1ae416.js",
    "/includes/chunk.c983bca2e54db697834c.js",
    "/includes/chunk.cb097a25399ddda16459.js",
    "/includes/chunk.cc364f1c9320ba4c5fbc.js",
    "/includes/chunk.d524e76d7fecf73c361a.js",
    "/includes/chunk.d619528a7d4f42e01309.js",
    "/includes/chunk.d6e7682e8f4d6aaebd3b.js",
    "/includes/chunk.d9531eca09536f3785e0.js",
    "/includes/chunk.dadbf27434120dc80ca4.js",
    "/includes/chunk.ddc76495d17135150236.js",
    "/includes/chunk.de587e49251cdcadc4a3.js",
    "/includes/chunk.e495978bb76726106e91.js",
    "/includes/chunk.ee16248218ecee37840e.js",
    "/includes/chunk.f0e61b059ca33532d2e0.js",
    "/includes/chunk.f44e20004fef57bf7bd2.js",
    "/includes/chunk.f67838743b639c5bd388.js",
    "/includes/chunk.f8993b562fce7bafa9a0.js",
    "/includes/chunk.fbe5dab7f5479d19ffb4.js",
    "/includes/chunk.fdfcf93c364cdeb884bc.js",
    "/includes/chunk.feb472dc117d066a5845.js",
    "/includes/entry.72a39db8bafc96867118.js",
    "/includes/entry.d0ab9b72b8ac63806036.js",
    "/includes/entry.eb51fb328721b5a759ae.js"
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
