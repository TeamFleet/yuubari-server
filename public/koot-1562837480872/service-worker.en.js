/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0241193962111f1585d1.js",
    "/includes/chunk.02ec3f60374ebc08dbff.js",
    "/includes/chunk.06a0a21f525f68068996.js",
    "/includes/chunk.0d0d16d1b0837508927e.js",
    "/includes/chunk.0dc9d7c8d9dd7a490280.js",
    "/includes/chunk.1017ef3616ccd9462d10.js",
    "/includes/chunk.128d0531800d94e81971.js",
    "/includes/chunk.19f26236ad301953432f.js",
    "/includes/chunk.1af9ab9545c627a2e2d1.js",
    "/includes/chunk.1b121ca3864bd5869d1e.js",
    "/includes/chunk.1dc852517ac663c6d56a.js",
    "/includes/chunk.235b616645fb5747e9a2.js",
    "/includes/chunk.27942b3afcea910dea58.js",
    "/includes/chunk.27ab3a53240493732ccc.js",
    "/includes/chunk.337d477e7dcd2fac4793.js",
    "/includes/chunk.344dd411535367a093b9.js",
    "/includes/chunk.38564d3663a9b3aa80ff.js",
    "/includes/chunk.395768d050a987681cf5.js",
    "/includes/chunk.3c587cb072e0c54a8be7.js",
    "/includes/chunk.4ba5e21ebc8526fb16d7.js",
    "/includes/chunk.50224c6cee806d6a082c.js",
    "/includes/chunk.590c88c9ac8f19b60587.js",
    "/includes/chunk.59a2fb0438dddd9178f3.js",
    "/includes/chunk.6b89c59318b60abe09e1.js",
    "/includes/chunk.6eb1dbbe7966f95d74ca.js",
    "/includes/chunk.7a674651356fb45ba8ef.js",
    "/includes/chunk.7c6ea263d5b52d72c7c3.js",
    "/includes/chunk.7d7077f60e7fbfa264ea.js",
    "/includes/chunk.7e61a0a314d49f833f80.js",
    "/includes/chunk.8241b8f2a2a659d492c5.js",
    "/includes/chunk.824202577171da140ac4.js",
    "/includes/chunk.875478afceaa3a0ca96b.js",
    "/includes/chunk.8ded84fe2225ec6aa0be.js",
    "/includes/chunk.8f5dd15ccdb9b53f1e1f.js",
    "/includes/chunk.8f9e4a9640b7cc7021c6.js",
    "/includes/chunk.947b616fb923bdcb9128.js",
    "/includes/chunk.959b50689b746f7f3e63.js",
    "/includes/chunk.9a439b4dd5465d33f111.js",
    "/includes/chunk.9d49c05005cc23aafb27.js",
    "/includes/chunk.9d9c855f4dd3026e72cf.js",
    "/includes/chunk.9e5dd17b56027e96c533.js",
    "/includes/chunk.a9d42b67398e88038798.js",
    "/includes/chunk.acb65da936adb8ed3bd6.js",
    "/includes/chunk.b5adc662ea45ddc4e933.js",
    "/includes/chunk.ba65710d0bc1b671d377.js",
    "/includes/chunk.bb0f2bdb7fb1d08eb05d.js",
    "/includes/chunk.bc83aba3acc1b8a31704.js",
    "/includes/chunk.be7777d1c53596205617.js",
    "/includes/chunk.beb3a6f4794dcd2fba4d.js",
    "/includes/chunk.cd4b18ac6d5592b03afd.js",
    "/includes/chunk.ceb18e911e600c3c7487.js",
    "/includes/chunk.d1a71ccd9cef9e568403.js",
    "/includes/chunk.d3ecf946ad7067c4ee50.js",
    "/includes/chunk.d8ad47d034b3ac9f5d14.js",
    "/includes/chunk.d967d7788e5249751479.js",
    "/includes/chunk.db02cce97cb61480e40b.js",
    "/includes/chunk.dcd87355f305f6d010af.js",
    "/includes/chunk.dd59d52fc9d2f0593934.js",
    "/includes/chunk.dfdb452e54d76f4a074d.js",
    "/includes/chunk.e9d94ccf9b3103f78f07.js",
    "/includes/chunk.f0163287ae2604c22e9d.js",
    "/includes/chunk.f0f732cf4e47ab24666f.js",
    "/includes/chunk.f5d542e069baa31d21f9.js",
    "/includes/entry.06188ca331dbbefd8131.js",
    "/includes/entry.14f1c52284722882ca22.js",
    "/includes/entry.1e6fe55a89c3a35ec7df.js",
    "/includes/entry.23808d326e5c269622b2.js",
    "/includes/entry.a753e7540942902916e7.js",
    "/includes/entry.d363fd6677530cc4382e.js"
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
