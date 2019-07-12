/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0241193962111f1585d1.js",
    "/includes/chunk.046a39940e7ebb31380b.js",
    "/includes/chunk.04f7d503f92d0907d88a.js",
    "/includes/chunk.071c9085ce0481e87e30.js",
    "/includes/chunk.0d0d16d1b0837508927e.js",
    "/includes/chunk.19479b7f7adb2f14863d.js",
    "/includes/chunk.19e5749314808d7cb5ab.js",
    "/includes/chunk.1b121ca3864bd5869d1e.js",
    "/includes/chunk.1dc852517ac663c6d56a.js",
    "/includes/chunk.235b616645fb5747e9a2.js",
    "/includes/chunk.23e87cb4bf57c2a79651.js",
    "/includes/chunk.2527b13c217dc0ee0236.js",
    "/includes/chunk.27942b3afcea910dea58.js",
    "/includes/chunk.38332663ee5572408921.js",
    "/includes/chunk.38564d3663a9b3aa80ff.js",
    "/includes/chunk.3b33faae6a36f94d7a61.js",
    "/includes/chunk.3c587cb072e0c54a8be7.js",
    "/includes/chunk.4129ca523a724ab10942.js",
    "/includes/chunk.476b7f0d36b4b0a18774.js",
    "/includes/chunk.50224c6cee806d6a082c.js",
    "/includes/chunk.56c0b9d44bc0b18e5967.js",
    "/includes/chunk.57d9bff2fd1dc3cf5c3d.js",
    "/includes/chunk.59a2fb0438dddd9178f3.js",
    "/includes/chunk.5b4b2de2a8a0e93a1662.js",
    "/includes/chunk.5e143704348d5a35422f.js",
    "/includes/chunk.67540d94cbe1216b5107.js",
    "/includes/chunk.6b89c59318b60abe09e1.js",
    "/includes/chunk.6d13e125e1be8df3178e.js",
    "/includes/chunk.700967afcb137fa572bb.js",
    "/includes/chunk.70c559cdab72c2e61ed9.js",
    "/includes/chunk.7523f8b5b3efae5267f5.js",
    "/includes/chunk.7c6ea263d5b52d72c7c3.js",
    "/includes/chunk.7d7077f60e7fbfa264ea.js",
    "/includes/chunk.7d7260ec98602a89e2c7.js",
    "/includes/chunk.824202577171da140ac4.js",
    "/includes/chunk.8412daa71be1f7db8da9.js",
    "/includes/chunk.8d9c6b18c731fc882252.js",
    "/includes/chunk.8ded84fe2225ec6aa0be.js",
    "/includes/chunk.8e56308007c992c0d29f.js",
    "/includes/chunk.9557a233a14dbac2bda5.js",
    "/includes/chunk.95b5d57e613cb01d70dc.js",
    "/includes/chunk.9974a0e9d209d3a64540.js",
    "/includes/chunk.9a0c922011bc831dea89.js",
    "/includes/chunk.9a439b4dd5465d33f111.js",
    "/includes/chunk.9c3f25208a35ccb2313c.js",
    "/includes/chunk.9cb1b95f90771682a17f.js",
    "/includes/chunk.9d9c855f4dd3026e72cf.js",
    "/includes/chunk.a3cf7093c4b9efaad122.js",
    "/includes/chunk.a9d42b67398e88038798.js",
    "/includes/chunk.b5adc662ea45ddc4e933.js",
    "/includes/chunk.b9bef89d1a29e32552f5.js",
    "/includes/chunk.bb0f2bdb7fb1d08eb05d.js",
    "/includes/chunk.be7777d1c53596205617.js",
    "/includes/chunk.cd4b18ac6d5592b03afd.js",
    "/includes/chunk.ceb18e911e600c3c7487.js",
    "/includes/chunk.d8ad47d034b3ac9f5d14.js",
    "/includes/chunk.e0f734d0a7e637fd6cfc.js",
    "/includes/chunk.e9d94ccf9b3103f78f07.js",
    "/includes/chunk.ea9c89ac1e7f7995e1b3.js",
    "/includes/chunk.f0f732cf4e47ab24666f.js",
    "/includes/chunk.f26bb7f605e00e07a420.js",
    "/includes/chunk.f5d542e069baa31d21f9.js",
    "/includes/chunk.fa63d5658bf090cb0dbd.js",
    "/includes/entry.12e82b9c1e911c90745d.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.673cd7f5844dfabd1b9c.js",
    "/includes/entry.8c22f1d3eff6418c4be5.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.f28677aab3ff5bc47c8a.js"
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
