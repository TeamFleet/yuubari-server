// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache'
const urlsToCache = [
    "/includes/chunk.018b71b7ca39b0594d1b.js",
    "/includes/chunk.044b33aee15c13ffd9d1.js",
    "/includes/chunk.07f6da4365dc4981cecc.js",
    "/includes/chunk.17360daa20194dacf291.js",
    "/includes/chunk.1978f19f632d61c0f67e.js",
    "/includes/chunk.1a5fde4bf10da7a0c092.js",
    "/includes/chunk.1aff27e11ea1ee4364b9.js",
    "/includes/chunk.1b40d848c7a8c13d53c0.js",
    "/includes/chunk.1b43637bb77deebc2433.js",
    "/includes/chunk.21a118834aba3118f339.js",
    "/includes/chunk.22c03152515b172033a4.js",
    "/includes/chunk.236225d2a5567e85bb48.js",
    "/includes/chunk.340a43c1e4dd636774c1.js",
    "/includes/chunk.34c9622413786d8d1352.js",
    "/includes/chunk.36fc51a63d5f9dbff1af.js",
    "/includes/chunk.383eec1543705dcf6a3e.js",
    "/includes/chunk.39d04842c44cce206226.js",
    "/includes/chunk.3ad267c8e7b8ea55e48a.js",
    "/includes/chunk.3c63b7cf2c3db79717d1.js",
    "/includes/chunk.3ef536fe78da8620e017.js",
    "/includes/chunk.467d164d6e41b8105d18.js",
    "/includes/chunk.4973866f42e4001a178a.js",
    "/includes/chunk.4cf8db4a41ec76056076.js",
    "/includes/chunk.4e2b624c9395fb4f9f1f.js",
    "/includes/chunk.5247a05fa7eba416839f.js",
    "/includes/chunk.53976f11b539a5684a73.js",
    "/includes/chunk.54f4d1edd3261d7937f3.js",
    "/includes/chunk.5a6d779fd6c5c477a2ff.js",
    "/includes/chunk.5e3b57234407b9a222cd.js",
    "/includes/chunk.5e4dba18a71f4849df95.js",
    "/includes/chunk.60ff3bfdc21c5e3cb7c1.js",
    "/includes/chunk.62b437380bbb7109c058.js",
    "/includes/chunk.6b1ded9f5c38f9fefb70.js",
    "/includes/chunk.6cc782a7bd08bfa77f6a.js",
    "/includes/chunk.6dc2942d54d7052fdc2f.js",
    "/includes/chunk.6eaec02c146cb9ec79fe.js",
    "/includes/chunk.735827f2cb08fbb2eeaf.js",
    "/includes/chunk.7527b32a79c6d7f19973.js",
    "/includes/chunk.77c8c3ca4f36d1aa9f71.js",
    "/includes/chunk.7b2adcc3d116741dbf2f.js",
    "/includes/chunk.7d4db4efa261c75ab09a.js",
    "/includes/chunk.8100d68519e2054148ce.js",
    "/includes/chunk.8d46f78064119263ef04.js",
    "/includes/chunk.945547a52d3cab4471b6.js",
    "/includes/chunk.988b62550d9469ac5c61.js",
    "/includes/chunk.9a531470421f78d847f7.js",
    "/includes/chunk.9cb0c5ce42c0a3e1948b.js",
    "/includes/chunk.9e04ac508c6b348540a7.js",
    "/includes/chunk.9f413ee8d40cccbf6305.js",
    "/includes/chunk.aa6a5df691f95359debb.js",
    "/includes/chunk.ab67912975d8e8bb5a43.js",
    "/includes/chunk.aba02953d9bfca3a64d0.js",
    "/includes/chunk.b71d1e31a67f37acce96.js",
    "/includes/chunk.bb3ef957c9a18acd7c2a.js",
    "/includes/chunk.c942dfc07d55be160a6e.js",
    "/includes/chunk.c9d37eed9ac5d8bab535.js",
    "/includes/chunk.cd9e186698ede86c6a49.js",
    "/includes/chunk.d1a4f84764a996ec6bc1.js",
    "/includes/chunk.dd5f8c72197bdaaf13fd.js",
    "/includes/chunk.e02ba91d34f7011dd2a0.js",
    "/includes/chunk.e3bca8a200e21417a472.js",
    "/includes/chunk.ee4ad0fcd69a1e75fc5e.js",
    "/includes/chunk.f435ddfbcbb19c9be339.js",
    "/includes/chunk.fe6e78b8379ce7a259d2.js",
    "/includes/entry.099b6bfa1da5bbfab1d9.js",
    "/includes/entry.0a263e3eb3c662f3dc3e.js",
    "/includes/entry.1339fc56ff4ef8ace422.js",
    "/includes/entry.e9faf2ddbecfefc85b4e.js",
    "/includes/entry.f90e1961ccab34a544d7.js",
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
