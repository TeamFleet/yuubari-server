/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.041ea94cceb1ef7077e1.js",
    "/includes/chunk.069162a4fc7904440fba.js",
    "/includes/chunk.078c76cc1f1b976b2d8e.js",
    "/includes/chunk.0d7455e1c8edcaf9ef9d.js",
    "/includes/chunk.128384a516c73403ffa8.js",
    "/includes/chunk.1a6e7b9c8fc8afdbca1d.js",
    "/includes/chunk.1fbb79555504ee783d76.js",
    "/includes/chunk.23214e62dc4250be5ba4.js",
    "/includes/chunk.233e670fb7a72a1ffd3a.js",
    "/includes/chunk.2a3c91a273c6b913d43f.js",
    "/includes/chunk.3063a5f437de29b3e71d.js",
    "/includes/chunk.34fba17e3e0be2b25c70.js",
    "/includes/chunk.35884dd24d24178c779e.js",
    "/includes/chunk.36d344a4f0e74b4de32b.js",
    "/includes/chunk.4113569e8fb80b703a2e.js",
    "/includes/chunk.39a647f4b0628381fd03.js",
    "/includes/chunk.4642712cfd67d128ef79.js",
    "/includes/chunk.47d4f15a82cc150fd354.js",
    "/includes/chunk.48b7acc6013e025f9423.js",
    "/includes/chunk.4c01df2cd0bbad518ff5.js",
    "/includes/chunk.515807cdf79e4057ecbb.js",
    "/includes/chunk.60ff3bfdc21c5e3cb7c1.js",
    "/includes/chunk.686ebd4d0200cbdcb835.js",
    "/includes/chunk.6818901ae0835c2b02e7.js",
    "/includes/chunk.72bf17a013c3cc2c3afe.js",
    "/includes/chunk.72fddd9c1b17967d3f7c.js",
    "/includes/chunk.747f032fe4f4ab9f5189.js",
    "/includes/chunk.7615b8df1a93eefcdfa1.js",
    "/includes/chunk.7c8914a0fec0dd7f2a24.js",
    "/includes/chunk.7fc5cef99326cb5d812e.js",
    "/includes/chunk.82c5e42bea89c0f5e677.js",
    "/includes/chunk.858a873648decb987f62.js",
    "/includes/chunk.869fdc9b87f7cac20f46.js",
    "/includes/chunk.8b932d1a4532951b1ef5.js",
    "/includes/chunk.8c81e6144eae3f48f2ec.js",
    "/includes/chunk.8d1eed464fe7f418b11d.js",
    "/includes/chunk.8d2552b0360ad76dcdaf.js",
    "/includes/chunk.97b18b698222bcae2e04.js",
    "/includes/chunk.9a6cef29808be7f0bb30.js",
    "/includes/chunk.9b4a6a667025070bb9ef.js",
    "/includes/chunk.9b59d1f0d80bad7baa85.js",
    "/includes/chunk.9ebecde5c7dc32c67cc6.js",
    "/includes/chunk.9f243af7f82a6c3e971d.js",
    "/includes/chunk.a84db3a46ad8f3f3c87c.js",
    "/includes/chunk.ab67912975d8e8bb5a43.js",
    "/includes/chunk.bb42be62e0d400e0fb51.js",
    "/includes/chunk.c07bb598b77e9ffdb3b2.js",
    "/includes/chunk.c1c48f1528dda568a623.js",
    "/includes/chunk.c8404afd5ac6c5c4249f.js",
    "/includes/chunk.caa03744f769e0acd0e0.js",
    "/includes/chunk.d492183cc1aa8339fe3a.js",
    "/includes/chunk.d8d8416cb452e12428d9.js",
    "/includes/chunk.ddafcbe3be335439f956.js",
    "/includes/chunk.e3e814b2e5e1b27228f7.js",
    "/includes/chunk.e6e9bc5ad7a12502f432.js",
    "/includes/chunk.e93419481fb6f9e22eb6.js",
    "/includes/chunk.efcce927fad978e02ab0.js",
    "/includes/chunk.f026baa907e700a9f748.js",
    "/includes/chunk.f32e4c8aa413b4ab4695.js",
    "/includes/chunk.f74b8c54d730a0d70614.js",
    "/includes/chunk.f7bf2ff54601aa1410fb.js",
    "/includes/chunk.f8f6890e87dc2d564a1b.js",
    "/includes/chunk.f9863054d0f95ab10956.js",
    "/includes/chunk.fd38578a52ff0562961d.js",
    "/includes/entry.0eeb9fcbe8ed4a5f60e2.js",
    "/includes/entry.14f1c52284722882ca22.js",
    "/includes/entry.233d40f19018dcc14e9a.js",
    "/includes/entry.23808d326e5c269622b2.js",
    "/includes/entry.a753e7540942902916e7.js",
    "/includes/entry.ac33233aa688628f5599.js"
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
