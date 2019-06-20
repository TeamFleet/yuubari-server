// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.052548e8b3fdec526944.js",
    "/includes/chunk.08f538d9ae72d2ff7926.js",
    "/includes/chunk.0b9ce29ea7bc6e97a7a8.js",
    "/includes/chunk.0bde5fd4e06ec8c8604e.js",
    "/includes/chunk.0fbfe719c6a0a7e5d0aa.js",
    "/includes/chunk.108a2bbd9fd3307a8722.js",
    "/includes/chunk.13dc1f46086b63ca0fb8.js",
    "/includes/chunk.16073363a11f062719c3.js",
    "/includes/chunk.1c1e4c1960bdb2635af5.js",
    "/includes/chunk.219d52fd328785c1d770.js",
    "/includes/chunk.21a3d8b6ac9de5f24e61.js",
    "/includes/chunk.24e16cb3594bd23c040d.js",
    "/includes/chunk.2c338f29127191cef3f0.js",
    "/includes/chunk.2e7a9c8ec9301b8be22b.js",
    "/includes/chunk.30cc8bb9378930897ac5.js",
    "/includes/chunk.34a4dc22a82b252e0871.js",
    "/includes/chunk.34cc4a12cfe500fbc232.js",
    "/includes/chunk.37a0fa5441acd6a2a2d4.js",
    "/includes/chunk.3fdfaae0c9e7a75d7f01.js",
    "/includes/chunk.4094ff9537ec3faf68e4.js",
    "/includes/chunk.4b6678063218551c8048.js",
    "/includes/chunk.4ef155c45499ad368e4a.js",
    "/includes/chunk.588c8c79c5ff51d32427.js",
    "/includes/chunk.5e5d275184d55c2d858e.js",
    "/includes/chunk.5fb4f52107ca22ac1cd8.js",
    "/includes/chunk.6011b9c5a718facf419e.js",
    "/includes/chunk.64052c2a3adbe37e1b28.js",
    "/includes/chunk.647dbdbe8fa04162b38b.js",
    "/includes/chunk.6b17320872454e206919.js",
    "/includes/chunk.701df12cfec1802af728.js",
    "/includes/chunk.7123acf90477d12864fa.js",
    "/includes/chunk.73db749509c8e096330e.js",
    "/includes/chunk.7520b90eb21159fb1415.js",
    "/includes/chunk.7640e507322df11bfc58.js",
    "/includes/chunk.7bc07f3e65e679a32963.js",
    "/includes/chunk.867218617d55a663672b.js",
    "/includes/chunk.89f4a9187dbc9cd17eb5.js",
    "/includes/chunk.95f79563b319344ecdd3.js",
    "/includes/chunk.9609d2477b4a3031904f.js",
    "/includes/chunk.98b1cc1ca562f87962e1.js",
    "/includes/chunk.a07582dcbeadaca49781.js",
    "/includes/chunk.a660bd3ebcd3ef59670d.js",
    "/includes/chunk.a8e23005629735aec5a8.js",
    "/includes/chunk.aa5127f8efd655d8d751.js",
    "/includes/chunk.b05ce4475eeccba514b7.js",
    "/includes/chunk.b1c7c83f86aa0384e5ba.js",
    "/includes/chunk.b2ad39ff5853654eed77.js",
    "/includes/chunk.c00895279097aa072657.js",
    "/includes/chunk.c2d42a5e3533aba7b8e1.js",
    "/includes/chunk.c5c12bc0752594982aaf.js",
    "/includes/chunk.cb8f084b1473aa7e152e.js",
    "/includes/chunk.cba3137a21c4f2a34e3c.js",
    "/includes/chunk.d13ee7687980bdaf2c63.js",
    "/includes/chunk.d58f49fd6764dd00cd47.js",
    "/includes/chunk.d8a6a7a150bd63a7a757.js",
    "/includes/chunk.d9592c03f09f748d36ec.js",
    "/includes/chunk.d9b9f248fda08cb32272.js",
    "/includes/chunk.e424b16573143b9b452b.js",
    "/includes/chunk.f0e9ebb63435ee71f443.js",
    "/includes/chunk.f5f18d59cb31ba940148.js",
    "/includes/chunk.f605a982f57b7e4b82af.js",
    "/includes/chunk.f77016bc89fe1c0abaac.js",
    "/includes/chunk.f9d12227574e049a49d7.js",
    "/includes/chunk.fcfe2435ad902c699fd5.js",
    "/includes/entry.234da04fc0c49e2427b7.js",
    "/includes/entry.3409dc7bb19461f44f4c.js",
    "/includes/entry.3a438392d9944fa884e6.js",
    "/includes/entry.acff3f0382103c6922d0.js",
    "/includes/entry.c7a2c0154167489fb21f.js",
    "/includes/entry.f7b403dd5b4824c6c19b.js"
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
