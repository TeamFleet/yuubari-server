/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.01cf97c7003acfc4fb67.js",
    "/includes/chunk.05b5f70db2843a5ccab9.js",
    "/includes/chunk.08988b0812e502e48fd6.js",
    "/includes/chunk.0a81559821dee6363e56.js",
    "/includes/chunk.120e89a0bc4bbe572a13.js",
    "/includes/chunk.138e26a681285910bcfd.js",
    "/includes/chunk.188cdd38a80e19e0d90f.js",
    "/includes/chunk.19e3058199c4977d9e7d.js",
    "/includes/chunk.1bbee640d7fc325a06ac.js",
    "/includes/chunk.1c8d6e586ce3819a9592.js",
    "/includes/chunk.1d393f2abe336228f693.js",
    "/includes/chunk.1f07164b6568f60a8217.js",
    "/includes/chunk.22fd30c88dd0d30e114f.js",
    "/includes/chunk.287dc84233d1a89e76ae.js",
    "/includes/chunk.29715b8f5291d731e31c.js",
    "/includes/chunk.2dd83448baf5379990ef.js",
    "/includes/chunk.31eff49a0a77c5589c5e.js",
    "/includes/chunk.381899c33fc041892346.js",
    "/includes/chunk.3d4c4dfd364a4b94ff66.js",
    "/includes/chunk.43ef266808217327c9b0.js",
    "/includes/chunk.482e518023e17b147369.js",
    "/includes/chunk.49f529b1e8a302fdc214.js",
    "/includes/chunk.4efc4d2b3b030ca18949.js",
    "/includes/chunk.4f1dfb2ee863470b068f.js",
    "/includes/chunk.56ccb18b87edbad0c8bd.js",
    "/includes/chunk.5e2296eb4bab6fff832e.js",
    "/includes/chunk.5eacbf1bed9d253322be.js",
    "/includes/chunk.5f00857bd38155ae36b0.js",
    "/includes/chunk.620f483bb8b893381b01.js",
    "/includes/chunk.646f1fb7958d7907a8c8.js",
    "/includes/chunk.6c799b6e1b9e54dee779.js",
    "/includes/chunk.6eed9c8d58476d0b5384.js",
    "/includes/chunk.717a075917e4352e011f.js",
    "/includes/chunk.77692267e5419d8b1124.js",
    "/includes/chunk.7b3adb5bfa343077023a.js",
    "/includes/chunk.7f1aaf7a1666a598bc2e.js",
    "/includes/chunk.852e0a10c4e6cf2d43c1.js",
    "/includes/chunk.867b61ee5905d379871d.js",
    "/includes/chunk.88cefe93027162b0fa09.js",
    "/includes/chunk.891095d3ecabed60b426.js",
    "/includes/chunk.8e317b528069dfb1dceb.js",
    "/includes/chunk.8e62f8113a0c0f2c2f41.js",
    "/includes/chunk.8ea00cd6882b3cd5d288.js",
    "/includes/chunk.97c977885e11d7859639.js",
    "/includes/chunk.9c3ead7f943e4042f288.js",
    "/includes/chunk.a3d291cd2f46807be720.js",
    "/includes/chunk.a826eab7e2d00c05e028.js",
    "/includes/chunk.ac17d0c8fd5508017dc5.js",
    "/includes/chunk.b05a45c1c63298da4490.js",
    "/includes/chunk.b42d60356a554ad76bee.js",
    "/includes/chunk.b7eabcffd715614b1d03.js",
    "/includes/chunk.b9a3d258b7a49d252041.js",
    "/includes/chunk.c4aef0fb2526c80854d3.js",
    "/includes/chunk.c91114d0c55b6ff0d7a4.js",
    "/includes/chunk.cada5a1e4a32a97edd84.js",
    "/includes/chunk.cd3e4c708be072506bcf.js",
    "/includes/chunk.cede4d040c77e4f16450.js",
    "/includes/chunk.d86fef2a19026e545b33.js",
    "/includes/chunk.e1dc44a5cea3d08c8898.js",
    "/includes/chunk.eb6307a1d5a7e1376a00.js",
    "/includes/chunk.ed26d942b90739c85ee1.js",
    "/includes/chunk.f6b73dd6be5b518eb9d1.js",
    "/includes/chunk.f8a54b482c0ab2c1197a.js",
    "/includes/entry.293f43fd71e5f8b433cf.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.78a51367c54f3d3bce0d.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.b472f38d9580c18552de.js",
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
