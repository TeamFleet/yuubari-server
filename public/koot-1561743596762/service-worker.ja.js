// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.018b71b7ca39b0594d1b.js",
    "/includes/chunk.06108873eed8b846ad23.js",
    "/includes/chunk.08296ccb456c32456ca3.js",
    "/includes/chunk.1a5fde4bf10da7a0c092.js",
    "/includes/chunk.1b43637bb77deebc2433.js",
    "/includes/chunk.21a118834aba3118f339.js",
    "/includes/chunk.22c03152515b172033a4.js",
    "/includes/chunk.2355f5139ed9448d370d.js",
    "/includes/chunk.282a7b9adb7049d99ed5.js",
    "/includes/chunk.2c16273d3a292d7c3254.js",
    "/includes/chunk.33217936c4368ebcbfbf.js",
    "/includes/chunk.34c9622413786d8d1352.js",
    "/includes/chunk.36fc51a63d5f9dbff1af.js",
    "/includes/chunk.383eec1543705dcf6a3e.js",
    "/includes/chunk.3ad267c8e7b8ea55e48a.js",
    "/includes/chunk.3d5a95220647cd3da905.js",
    "/includes/chunk.3ef536fe78da8620e017.js",
    "/includes/chunk.4973866f42e4001a178a.js",
    "/includes/chunk.4b55056042c5a12707e0.js",
    "/includes/chunk.4ca8ce955dfd5b794498.js",
    "/includes/chunk.4cf8db4a41ec76056076.js",
    "/includes/chunk.4e2b624c9395fb4f9f1f.js",
    "/includes/chunk.5247a05fa7eba416839f.js",
    "/includes/chunk.54f4d1edd3261d7937f3.js",
    "/includes/chunk.5a2c4af6e6ca3c754654.js",
    "/includes/chunk.5df67787b6cebf884bb1.js",
    "/includes/chunk.5e3b57234407b9a222cd.js",
    "/includes/chunk.282f03c386f63778f4a1.js",
    "/includes/chunk.60ff3bfdc21c5e3cb7c1.js",
    "/includes/chunk.6cc782a7bd08bfa77f6a.js",
    "/includes/chunk.6dc2942d54d7052fdc2f.js",
    "/includes/chunk.6eaec02c146cb9ec79fe.js",
    "/includes/chunk.735827f2cb08fbb2eeaf.js",
    "/includes/chunk.7421f9ddc2e91e5dbe85.js",
    "/includes/chunk.77c8c3ca4f36d1aa9f71.js",
    "/includes/chunk.7ab92b4bda6c8fb5d453.js",
    "/includes/chunk.7d4db4efa261c75ab09a.js",
    "/includes/chunk.8100d68519e2054148ce.js",
    "/includes/chunk.8d46f78064119263ef04.js",
    "/includes/chunk.945547a52d3cab4471b6.js",
    "/includes/chunk.988b62550d9469ac5c61.js",
    "/includes/chunk.9a531470421f78d847f7.js",
    "/includes/chunk.9e04ac508c6b348540a7.js",
    "/includes/chunk.9ee390118d3d422d9714.js",
    "/includes/chunk.ab67912975d8e8bb5a43.js",
    "/includes/chunk.9f413ee8d40cccbf6305.js",
    "/includes/chunk.aba02953d9bfca3a64d0.js",
    "/includes/chunk.ae88e5d92afa74418f3f.js",
    "/includes/chunk.b3e0ed02c672c877a19b.js",
    "/includes/chunk.bf4fc2422932cca1f112.js",
    "/includes/chunk.c17231ee584cb4a1b0d7.js",
    "/includes/chunk.c3bf5cee3a85b0c06228.js",
    "/includes/chunk.c6f1b6e0c0747df17e00.js",
    "/includes/chunk.cbd90ce846dfbc0616ff.js",
    "/includes/chunk.cd9e186698ede86c6a49.js",
    "/includes/chunk.cda659ea026af8e7f370.js",
    "/includes/chunk.e3bca8a200e21417a472.js",
    "/includes/chunk.ebfaee1e4d75977c36ff.js",
    "/includes/chunk.ee1eecbdb0cba2e85dba.js",
    "/includes/chunk.ee4ad0fcd69a1e75fc5e.js",
    "/includes/chunk.ef106b723254944715da.js",
    "/includes/chunk.f72e361e027438cdc857.js",
    "/includes/chunk.fabdcee06ea53c14302f.js",
    "/includes/chunk.fe6e78b8379ce7a259d2.js",
    "/includes/entry.0359ef70f0010616c44b.js",
    "/includes/entry.1960dbaa8df8b4c00eda.js",
    "/includes/entry.5a9d079001124e4dd6b4.js",
    "/includes/entry.740c7d12f2bd883696af.js",
    "/includes/entry.76a35b528bb75374f327.js",
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
