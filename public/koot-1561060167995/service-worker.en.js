// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.0022d1ea6eb3a612fc34.js",
    "/includes/chunk.031a0e77132487b64266.js",
    "/includes/chunk.06d5b01ba3d12a57b535.js",
    "/includes/chunk.0a07bca2b430a30fdb9b.js",
    "/includes/chunk.0ef1d97e23eebd61490a.js",
    "/includes/chunk.11038bcc827de5cd963d.js",
    "/includes/chunk.12ad5657722f7b99296d.js",
    "/includes/chunk.134efe3f6985020c20a7.js",
    "/includes/chunk.1773fafaa9fd1fef00e8.js",
    "/includes/chunk.1f5b92d30e431d95233d.js",
    "/includes/chunk.2d8da4893fb902c3e078.js",
    "/includes/chunk.3643ad385616532939a1.js",
    "/includes/chunk.38c30572c4bf895078ce.js",
    "/includes/chunk.392c39c16ebf75a4fb84.js",
    "/includes/chunk.3b2e80fc74b87a546b8f.js",
    "/includes/chunk.3ebf6fac54b285d42c4f.js",
    "/includes/chunk.3f1f339f93a3e4df6136.js",
    "/includes/chunk.4135772a0e308078be95.js",
    "/includes/chunk.473c2c9e324198edef81.js",
    "/includes/chunk.49024b309bc892e088ca.js",
    "/includes/chunk.4de50985d069dd5291d0.js",
    "/includes/chunk.54669e80f20665a2f4f1.js",
    "/includes/chunk.572c5cd3985a9d854128.js",
    "/includes/chunk.611984cf1ed4c7e07e01.js",
    "/includes/chunk.6144f6e319caec22a07b.js",
    "/includes/chunk.62327e302f24c100973d.js",
    "/includes/chunk.6cebd9bae894b40b7f3f.js",
    "/includes/chunk.6dc87eb4ba9507c6b4df.js",
    "/includes/chunk.6fa1da4b364b63c6dae8.js",
    "/includes/chunk.7275237a22e54024b1a4.js",
    "/includes/chunk.7429ee59e8e5654be9ac.js",
    "/includes/chunk.7c4f5285837b895ea992.js",
    "/includes/chunk.8029b647182028b4039e.js",
    "/includes/chunk.8230bb62eef33673ef33.js",
    "/includes/chunk.869eaa53c5142cae142f.js",
    "/includes/chunk.93f7f518e0739fd1d85a.js",
    "/includes/chunk.98bc7205e135a43963df.js",
    "/includes/chunk.98dc1eccb620737fee89.js",
    "/includes/chunk.9ace1100bed674786380.js",
    "/includes/chunk.9af6feccaabe6ae685ce.js",
    "/includes/chunk.aa63193e45eb84af961e.js",
    "/includes/chunk.ab164b27f3b2953e98d0.js",
    "/includes/chunk.b1ada2913545f810087a.js",
    "/includes/chunk.b21c5dc1e3905a36422f.js",
    "/includes/chunk.b39d524c59781bbeb825.js",
    "/includes/chunk.b5a52f1c21ef59a0ba24.js",
    "/includes/chunk.b6dd2ce2c58d7f583910.js",
    "/includes/chunk.ba455f89aada6d54c931.js",
    "/includes/chunk.bc305395b00a2b1e0df7.js",
    "/includes/chunk.c1cbbaebb573f1251647.js",
    "/includes/chunk.c42954da44ad9b74a5c8.js",
    "/includes/chunk.c4f22f32316468e44e9c.js",
    "/includes/chunk.c83791598f9e6998363b.js",
    "/includes/chunk.c9fc2b324a827bae4ea4.js",
    "/includes/chunk.de9044c3c4bceb590f6a.js",
    "/includes/chunk.e1e2bdd7f3d358ebc10d.js",
    "/includes/chunk.e388d74f391e47e2bcf1.js",
    "/includes/chunk.e5bec2eff9028652231b.js",
    "/includes/chunk.e6711bd3c0043f6d70c6.js",
    "/includes/chunk.ebc2568924b7c2ca1962.js",
    "/includes/chunk.fc2fdb135e6df463c29b.js",
    "/includes/chunk.fcb5c3ce821240edeca3.js",
    "/includes/chunk.fce27b97876d71a7dc31.js",
    "/includes/entry.0556ecf1b6dd622e1a81.js",
    "/includes/entry.086c0cd748fed059f9a2.js",
    "/includes/entry.1c1af41155c5d8d097b5.js",
    "/includes/entry.4c651e65c81cd7a8a3f6.js",
    "/includes/entry.7475f4c24506773d0c82.js",
    "/includes/entry.96792a5ce3d2b8331d59.js"
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
