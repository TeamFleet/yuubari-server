/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.01413fdbb23d669b5054.js",
    "/includes/chunk.0444393a5d841c994714.js",
    "/includes/chunk.056ba9babc4ed97b6f53.js",
    "/includes/chunk.073079549670e4b031cd.js",
    "/includes/chunk.0d8d7ab24b468b9c756d.js",
    "/includes/chunk.0f3830df82267f37a9ec.js",
    "/includes/chunk.15ba6aba66761d287eaa.js",
    "/includes/chunk.162dcfa24fcf0d3ab3c4.js",
    "/includes/chunk.1cdf7cd241591949533e.js",
    "/includes/chunk.1e994c4af598ef44f66d.js",
    "/includes/chunk.203a1c9be21501878394.js",
    "/includes/chunk.234c25e04543b8f902b8.js",
    "/includes/chunk.2bd95072486d1879b98d.js",
    "/includes/chunk.2c378e291eada2ebaf29.js",
    "/includes/chunk.2dade999dfc1a7178fb3.js",
    "/includes/chunk.2dc28b45e969ac84febe.js",
    "/includes/chunk.2e13034c062b187edcf0.js",
    "/includes/chunk.316df2a6c2f6425c3661.js",
    "/includes/chunk.319526894be9c63b4ef2.js",
    "/includes/chunk.3ad1cd8de87fabb4dfa8.js",
    "/includes/chunk.3d0b7c4138a188e8d2d2.js",
    "/includes/chunk.45ace691af3c3828093f.js",
    "/includes/chunk.4b790dcab128790f9fb8.js",
    "/includes/chunk.4c4fa0e12a639915c2d9.js",
    "/includes/chunk.4f8cfad0034dfd82275b.js",
    "/includes/chunk.5169a632e516ec15b8c1.js",
    "/includes/chunk.51cca00ad720d78fc35a.js",
    "/includes/chunk.52e670a8ef07b314c822.js",
    "/includes/chunk.52f545e71adc7e7556f7.js",
    "/includes/chunk.58bb85c732b343ea2293.js",
    "/includes/chunk.5f48a75eb4de340e6144.js",
    "/includes/chunk.614297d4c307f799761b.js",
    "/includes/chunk.64474bcd39779e2a9849.js",
    "/includes/chunk.73e0ee866ed4f8c59220.js",
    "/includes/chunk.75359bc820cbb6e2e00b.js",
    "/includes/chunk.77b84a8bb1d0168a97e2.js",
    "/includes/chunk.7b097effc4c85aca3e5f.js",
    "/includes/chunk.7dd7aaee349c76e15ac8.js",
    "/includes/chunk.7ece5aef186cabdc1f98.js",
    "/includes/chunk.8248fe3b21ff8476f1d7.js",
    "/includes/chunk.8afadfdcaa98bc1c1d90.js",
    "/includes/chunk.8c03d2c12038969cca91.js",
    "/includes/chunk.8c7292ee8d3a4e953035.js",
    "/includes/chunk.90adb857c37b23518399.js",
    "/includes/chunk.942e000dcaecde1154ac.js",
    "/includes/chunk.99425a274b29e0037585.js",
    "/includes/chunk.9f227bea03e02f2d59a1.js",
    "/includes/chunk.aeec16f9f130a3cf37b8.js",
    "/includes/chunk.bacc9809badaa47662d0.js",
    "/includes/chunk.c73a34522ab6c9b0c0ae.js",
    "/includes/chunk.cbe3c189671021df349b.js",
    "/includes/chunk.cc36ef01bff9f760b873.js",
    "/includes/chunk.cd650a8a4e7b6ea544e6.js",
    "/includes/chunk.d1a5c4759de120410781.js",
    "/includes/chunk.d7c6f5730ce8b2903777.js",
    "/includes/chunk.d802412dc581afcd42dd.js",
    "/includes/chunk.d9540ae79470adf97e7c.js",
    "/includes/chunk.dd792dfb1d418d6bf580.js",
    "/includes/chunk.e06e88e35b17fbc25867.js",
    "/includes/chunk.ee53d954f0b463b1c112.js",
    "/includes/chunk.f505660756f37491a0d8.js",
    "/includes/chunk.ff0952848f70e2804800.js",
    "/includes/entry.004660952289f9e2cfb1.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.1c0658ee955e26c2ce8f.js",
    "/includes/entry.277c330dd1a68676b73c.js",
    "/includes/entry.89ec325b7d87f4ed7e18.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js"
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

//

const shouldHandleFetch = event => {
    if (event.request.method.toLowerCase() !== 'get') return false;
    if (!new RegExp(`^${location.origin}`).test(event.request.url))
        return false;
    if (/google-analytics\.com\//.test(event.request.url)) return false;
    if (new RegExp(`^${location.origin}/api`).test(event.request.url))
        return false;
    if (/\/service-worker(\.[a-z-_]+){0,1}\.js/i.test(event.request.url))
        return false;

    return true;
};

const shouldRespondFromNetworkThenCache = event =>
    event.request.url === location.origin ||
    event.request.url === location.origin + '/' ||
    event.request.headers.get('Accept').includes('text/html');

//

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    if (shouldHandleFetch(event)) {
        if (shouldRespondFromNetworkThenCache(event)) {
            respondFromNetworkThenCache(event);
        } else {
            respondFromCacheThenNetwork(event);
        }
    }
});

self.addEventListener('activate', event => {
    // 删除不属于当前的缓存空间
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.includes(cacheName)) return true;
                    return caches.delete(cacheName);
                })
            )
        )
    );
});
