/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.04f7d503f92d0907d88a.js",
    "/includes/chunk.0d0d16d1b0837508927e.js",
    "/includes/chunk.16ad298038d5339f24cd.js",
    "/includes/chunk.19e5749314808d7cb5ab.js",
    "/includes/chunk.1b121ca3864bd5869d1e.js",
    "/includes/chunk.205b7161a565e807e266.js",
    "/includes/chunk.235b616645fb5747e9a2.js",
    "/includes/chunk.3b33faae6a36f94d7a61.js",
    "/includes/chunk.48bc93a267dc0c112e80.js",
    "/includes/chunk.50224c6cee806d6a082c.js",
    "/includes/chunk.59a2fb0438dddd9178f3.js",
    "/includes/chunk.5b4b2de2a8a0e93a1662.js",
    "/includes/chunk.678f8cb81fb11c8a7c80.js",
    "/includes/chunk.6b89c59318b60abe09e1.js",
    "/includes/chunk.70c559cdab72c2e61ed9.js",
    "/includes/chunk.7d7260ec98602a89e2c7.js",
    "/includes/chunk.824202577171da140ac4.js",
    "/includes/chunk.82e17d81a855ce806e2d.js",
    "/includes/chunk.8e56308007c992c0d29f.js",
    "/includes/chunk.b3e0b202dba009b40834.js",
    "/includes/chunk.b9bef89d1a29e32552f5.js",
    "/includes/chunk.bb0f2bdb7fb1d08eb05d.js",
    "/includes/chunk.be7777d1c53596205617.js",
    "/includes/chunk.cd4b18ac6d5592b03afd.js",
    "/includes/chunk.d8ad47d034b3ac9f5d14.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.673cd7f5844dfabd1b9c.js",
    "/includes/entry.7237b6fe28be795b7eb8.js",
    "/includes/entry.a1bd7d15120cb92aee40.js"
];

function addToCache(request, response) {
    if (response.type === 'opaqueredirect') return response;

    if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => {
            cache.put(request, copy);
        });
    } else {
        console.warn('Request fail', response, request);
        throw response;
    }

    return response;
}

function fetchFromCache(event, networkResponse) {
    return caches.match(event.request).then(response => {
        if (!response) {
            // A synchronous error that will kick off the catch handler
            if (networkResponse) throw networkResponse;
            throw Error(`${event.request.url} not found in cache`);
        }
        if (networkResponse) throw networkResponse;
        return response;
    });
}

function offlineResponse(res) {
    if (res && res instanceof Response) {
        return res;
    }
    return new Response('Sorry, the application is offline.');
}

function respondFromNetworkThenCache(event) {
    // console.log('Network first ', event.request.url)
    // Check network first, then cache
    const request = event.request;
    event.respondWith(
        fetch(request)
            .then(response => addToCache(request, response))
            .catch(networkResponse => fetchFromCache(event, networkResponse))
            .catch(networkResponse => offlineResponse(networkResponse))
    );
}

function respondFromCacheThenNetwork(event) {
    // console.log('Cache first ', event.request.url)
    // Check cache first, then network
    const request = event.request;
    event.respondWith(
        fetchFromCache(event)
            .catch(() => fetch(request))
            .then(response => addToCache(request, response))
            .catch(networkResponse => offlineResponse(networkResponse))
    );
}

function shouldHandleFetch(event) {
    if (event.request.method.toLowerCase() !== 'get') return false;
    if (event.request.url.indexOf(location.origin) < 0) return false;
    if (event.request.url.indexOf('google-analytics.com') !== -1) return false;
    if (event.request.url.indexOf(location.origin + '/api') > -1) return false;
    if (/\/service-worker(\.[a-z-_]+){0,1}\.js/i.test(event.request.url))
        return false;

    return true;
}

function shouldRespondFromNetworkThenCache(event) {
    return (
        event.request.url.replace(new RegExp(`^${location.origin}`), '') ===
            '/' || event.request.headers.get('Accept').indexOf('text/html') >= 0
        // || /chunk.+\.js$/.test(event.request.url)
    );
}

// Open cache and store assets
self.addEventListener('install', event => {
    // console.log('Service Worker - INSTALL')
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            // console.log(urlsToCache)
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    if (shouldHandleFetch(event)) {
        // console.log('Service Worker - FETCH', event.request)
        if (shouldRespondFromNetworkThenCache(event)) {
            respondFromNetworkThenCache(event);
        } else {
            respondFromCacheThenNetwork(event);
        }
    }
});

self.addEventListener('activate', event => {
    // console.log('Service Worker - ACTIVATE')
    var cacheWhitelist = [CACHE_NAME];
    // Clean up old cache versions
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
