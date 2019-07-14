/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.01cf97c7003acfc4fb67.js",
    "/includes/chunk.05b5f70db2843a5ccab9.js",
    "/includes/chunk.0a81559821dee6363e56.js",
    "/includes/chunk.0e09801876465f5a7fc8.js",
    "/includes/chunk.120e89a0bc4bbe572a13.js",
    "/includes/chunk.162e0ce60960248810f9.js",
    "/includes/chunk.188cdd38a80e19e0d90f.js",
    "/includes/chunk.194daf8b4821d7e9ae87.js",
    "/includes/chunk.19e3058199c4977d9e7d.js",
    "/includes/chunk.1bbee640d7fc325a06ac.js",
    "/includes/chunk.1c8d6e586ce3819a9592.js",
    "/includes/chunk.1d393f2abe336228f693.js",
    "/includes/chunk.1f07164b6568f60a8217.js",
    "/includes/chunk.22fd30c88dd0d30e114f.js",
    "/includes/chunk.287dc84233d1a89e76ae.js",
    "/includes/chunk.29715b8f5291d731e31c.js",
    "/includes/chunk.2dd83448baf5379990ef.js",
    "/includes/chunk.30e16b769525a0dfe929.js",
    "/includes/chunk.3d4c4dfd364a4b94ff66.js",
    "/includes/chunk.4c5a86e2beb4f1aca630.js",
    "/includes/chunk.4efc4d2b3b030ca18949.js",
    "/includes/chunk.4f1dfb2ee863470b068f.js",
    "/includes/chunk.55ebf8868930b3baf370.js",
    "/includes/chunk.5dc1257e88c1ccce93f8.js",
    "/includes/chunk.5eacbf1bed9d253322be.js",
    "/includes/chunk.5f00857bd38155ae36b0.js",
    "/includes/chunk.620f483bb8b893381b01.js",
    "/includes/chunk.646f1fb7958d7907a8c8.js",
    "/includes/chunk.6c799b6e1b9e54dee779.js",
    "/includes/chunk.6eed9c8d58476d0b5384.js",
    "/includes/chunk.706a73b528bd4e88d708.js",
    "/includes/chunk.717a075917e4352e011f.js",
    "/includes/chunk.77692267e5419d8b1124.js",
    "/includes/chunk.7854e7a8917ac116fb02.js",
    "/includes/chunk.7b3adb5bfa343077023a.js",
    "/includes/chunk.83f22c70ab67b6a83db1.js",
    "/includes/chunk.852e0a10c4e6cf2d43c1.js",
    "/includes/chunk.867b61ee5905d379871d.js",
    "/includes/chunk.88cefe93027162b0fa09.js",
    "/includes/chunk.891095d3ecabed60b426.js",
    "/includes/chunk.8e317b528069dfb1dceb.js",
    "/includes/chunk.8e62f8113a0c0f2c2f41.js",
    "/includes/chunk.97c977885e11d7859639.js",
    "/includes/chunk.995c60ccfef412af76b6.js",
    "/includes/chunk.9c3ead7f943e4042f288.js",
    "/includes/chunk.a3d291cd2f46807be720.js",
    "/includes/chunk.a826eab7e2d00c05e028.js",
    "/includes/chunk.ac17d0c8fd5508017dc5.js",
    "/includes/chunk.b05a45c1c63298da4490.js",
    "/includes/chunk.b42d60356a554ad76bee.js",
    "/includes/chunk.b9a3d258b7a49d252041.js",
    "/includes/chunk.bd320cef1632330177f2.js",
    "/includes/chunk.c4aef0fb2526c80854d3.js",
    "/includes/chunk.c91114d0c55b6ff0d7a4.js",
    "/includes/chunk.cada5a1e4a32a97edd84.js",
    "/includes/chunk.cb10d97559b0fc5fb5b4.js",
    "/includes/chunk.cd3e4c708be072506bcf.js",
    "/includes/chunk.ce0393663166febf820c.js",
    "/includes/chunk.cede4d040c77e4f16450.js",
    "/includes/chunk.ceec9bdf9af1a948fc5e.js",
    "/includes/chunk.e7854191d6a2ebf1ef7c.js",
    "/includes/chunk.ea4721203201023c3eaf.js",
    "/includes/chunk.ed26d942b90739c85ee1.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.be39991fe23460ec4cfd.js",
    "/includes/entry.bec9289b09679eab4a1d.js",
    "/includes/entry.e3a415500e9789b807f5.js",
    "/includes/entry.f2e965ea9d7a8b8cf5c9.js"
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
