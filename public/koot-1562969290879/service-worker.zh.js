/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.019985fa1474af63392b.js",
    "/includes/chunk.046a39940e7ebb31380b.js",
    "/includes/chunk.04a744b323b7016983b6.js",
    "/includes/chunk.120e89a0bc4bbe572a13.js",
    "/includes/chunk.19e3058199c4977d9e7d.js",
    "/includes/chunk.1b44e8f563f4740ed06c.js",
    "/includes/chunk.1bbee640d7fc325a06ac.js",
    "/includes/chunk.1c8d6e586ce3819a9592.js",
    "/includes/chunk.1d180f558a89e0236fae.js",
    "/includes/chunk.1d393f2abe336228f693.js",
    "/includes/chunk.1f07164b6568f60a8217.js",
    "/includes/chunk.29715b8f5291d731e31c.js",
    "/includes/chunk.2dd83448baf5379990ef.js",
    "/includes/chunk.389adfdd07e6c90bde1c.js",
    "/includes/chunk.3b33faae6a36f94d7a61.js",
    "/includes/chunk.3be44dcb40205c462c04.js",
    "/includes/chunk.3d4c4dfd364a4b94ff66.js",
    "/includes/chunk.5f00857bd38155ae36b0.js",
    "/includes/chunk.620f483bb8b893381b01.js",
    "/includes/chunk.646f1fb7958d7907a8c8.js",
    "/includes/chunk.6c799b6e1b9e54dee779.js",
    "/includes/chunk.6eed9c8d58476d0b5384.js",
    "/includes/chunk.6f1f91f19ccaa2250e71.js",
    "/includes/chunk.706a73b528bd4e88d708.js",
    "/includes/chunk.717a075917e4352e011f.js",
    "/includes/chunk.75a34e6e415eacfde882.js",
    "/includes/chunk.867b61ee5905d379871d.js",
    "/includes/chunk.8e317b528069dfb1dceb.js",
    "/includes/chunk.8e62f8113a0c0f2c2f41.js",
    "/includes/chunk.97c977885e11d7859639.js",
    "/includes/chunk.98e372343ad959d73ebb.js",
    "/includes/chunk.9c3ead7f943e4042f288.js",
    "/includes/chunk.a3d291cd2f46807be720.js",
    "/includes/chunk.a4d4b2c3317f43e58f76.js",
    "/includes/chunk.ac17d0c8fd5508017dc5.js",
    "/includes/chunk.b42d60356a554ad76bee.js",
    "/includes/chunk.b9a3d258b7a49d252041.js",
    "/includes/chunk.c4aef0fb2526c80854d3.js",
    "/includes/chunk.c91114d0c55b6ff0d7a4.js",
    "/includes/chunk.c966f7ed8572817d0f6a.js",
    "/includes/chunk.cada5a1e4a32a97edd84.js",
    "/includes/chunk.cede4d040c77e4f16450.js",
    "/includes/chunk.dc21dda02964ad3620be.js",
    "/includes/chunk.e35df81743141610d593.js",
    "/includes/chunk.ed26d942b90739c85ee1.js",
    "/includes/chunk.fea5f83612e41a403737.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.673cd7f5844dfabd1b9c.js",
    "/includes/entry.9d0958d4c7b57a360a89.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.c4f14a9e56088b79217d.js"
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
