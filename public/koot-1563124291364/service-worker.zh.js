/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.120e89a0bc4bbe572a13.js",
    "/includes/chunk.162e0ce60960248810f9.js",
    "/includes/chunk.188cdd38a80e19e0d90f.js",
    "/includes/chunk.19e3058199c4977d9e7d.js",
    "/includes/chunk.1c8d6e586ce3819a9592.js",
    "/includes/chunk.1d393f2abe336228f693.js",
    "/includes/chunk.1f07164b6568f60a8217.js",
    "/includes/chunk.22b2ddf3ed0b3ac36f0f.js",
    "/includes/chunk.29715b8f5291d731e31c.js",
    "/includes/chunk.2a2736851ce30ab5b42f.js",
    "/includes/chunk.2dd83448baf5379990ef.js",
    "/includes/chunk.31f3bcb8c8aa3041a141.js",
    "/includes/chunk.3d4c4dfd364a4b94ff66.js",
    "/includes/chunk.5f00857bd38155ae36b0.js",
    "/includes/chunk.649bf0988f484b411382.js",
    "/includes/chunk.6eed9c8d58476d0b5384.js",
    "/includes/chunk.867b61ee5905d379871d.js",
    "/includes/chunk.8e317b528069dfb1dceb.js",
    "/includes/chunk.995c60ccfef412af76b6.js",
    "/includes/chunk.a3d291cd2f46807be720.js",
    "/includes/chunk.a5cd65954d2a7e23781e.js",
    "/includes/chunk.ac17d0c8fd5508017dc5.js",
    "/includes/chunk.b9a3d258b7a49d252041.js",
    "/includes/chunk.cada5a1e4a32a97edd84.js",
    "/includes/chunk.e1ec5acdb74ac2357246.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.543c63c787ac39466a16.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.be39991fe23460ec4cfd.js"
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
