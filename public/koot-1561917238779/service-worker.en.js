// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.018b71b7ca39b0594d1b.js",
    "/includes/chunk.019d6e44f6032160b6e8.js",
    "/includes/chunk.1895f38f4c9f89c860ed.js",
    "/includes/chunk.189feb9fc2e112022281.js",
    "/includes/chunk.1a5fde4bf10da7a0c092.js",
    "/includes/chunk.1b43637bb77deebc2433.js",
    "/includes/chunk.21a118834aba3118f339.js",
    "/includes/chunk.22c03152515b172033a4.js",
    "/includes/chunk.340a43c1e4dd636774c1.js",
    "/includes/chunk.34c9622413786d8d1352.js",
    "/includes/chunk.36fc51a63d5f9dbff1af.js",
    "/includes/chunk.383eec1543705dcf6a3e.js",
    "/includes/chunk.394aad7373454c0bf4fa.js",
    "/includes/chunk.3ad267c8e7b8ea55e48a.js",
    "/includes/chunk.3ef536fe78da8620e017.js",
    "/includes/chunk.4973866f42e4001a178a.js",
    "/includes/chunk.4cf8db4a41ec76056076.js",
    "/includes/chunk.4e2b624c9395fb4f9f1f.js",
    "/includes/chunk.5247a05fa7eba416839f.js",
    "/includes/chunk.53976f11b539a5684a73.js",
    "/includes/chunk.54f4d1edd3261d7937f3.js",
    "/includes/chunk.5c909276924c4b8f6eea.js",
    "/includes/chunk.5e3b57234407b9a222cd.js",
    "/includes/chunk.5e4dba18a71f4849df95.js",
    "/includes/chunk.60ff3bfdc21c5e3cb7c1.js",
    "/includes/chunk.65d642932855a578541f.js",
    "/includes/chunk.6cc782a7bd08bfa77f6a.js",
    "/includes/chunk.6dc2942d54d7052fdc2f.js",
    "/includes/chunk.6eaec02c146cb9ec79fe.js",
    "/includes/chunk.6efe8093494946d578e7.js",
    "/includes/chunk.735827f2cb08fbb2eeaf.js",
    "/includes/chunk.73e358e51d4789cf6fa4.js",
    "/includes/chunk.75265dfc2f0be21b542d.js",
    "/includes/chunk.77c8c3ca4f36d1aa9f71.js",
    "/includes/chunk.7b2adcc3d116741dbf2f.js",
    "/includes/chunk.7d4db4efa261c75ab09a.js",
    "/includes/chunk.8100d68519e2054148ce.js",
    "/includes/chunk.85e87f7918d63c0243d4.js",
    "/includes/chunk.86f667eee2d11314edde.js",
    "/includes/chunk.8d46f78064119263ef04.js",
    "/includes/chunk.988b62550d9469ac5c61.js",
    "/includes/chunk.9a531470421f78d847f7.js",
    "/includes/chunk.9e04ac508c6b348540a7.js",
    "/includes/chunk.9f413ee8d40cccbf6305.js",
    "/includes/chunk.a112846918b33120611a.js",
    "/includes/chunk.a2bd18d5f78db0529af5.js",
    "/includes/chunk.ab67912975d8e8bb5a43.js",
    "/includes/chunk.aba02953d9bfca3a64d0.js",
    "/includes/chunk.ae88e5d92afa74418f3f.js",
    "/includes/chunk.b71d1e31a67f37acce96.js",
    "/includes/chunk.c9d37eed9ac5d8bab535.js",
    "/includes/chunk.cc88c8412151e34051b2.js",
    "/includes/chunk.cd9e186698ede86c6a49.js",
    "/includes/chunk.d143ae47ef165fd96d43.js",
    "/includes/chunk.d94ef5f36f8d03391821.js",
    "/includes/chunk.dd5f8c72197bdaaf13fd.js",
    "/includes/chunk.e3bca8a200e21417a472.js",
    "/includes/chunk.ea52cbc1c5391a5f1754.js",
    "/includes/chunk.ee4ad0fcd69a1e75fc5e.js",
    "/includes/chunk.eff4487ad1dc275c0856.js",
    "/includes/chunk.f236f0392a974fa05ebd.js",
    "/includes/chunk.fb241c3b6a209654730a.js",
    "/includes/chunk.fe6e78b8379ce7a259d2.js",
    "/includes/chunk.fee34fc39aef57ad5e41.js",
    "/includes/entry.099b6bfa1da5bbfab1d9.js",
    "/includes/entry.2109bfcdeff064bbb2a1.js",
    "/includes/entry.bc7cd5b5335c93b3f07f.js",
    "/includes/entry.e407287c5728e08a870f.js",
    "/includes/entry.e9faf2ddbecfefc85b4e.js",
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
