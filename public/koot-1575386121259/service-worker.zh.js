/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.10c893cab824f122ff34.js",
    "/includes/chunk.128a4f5020b44f74b84a.js",
    "/includes/chunk.148f3f6883bc793ab818.js",
    "/includes/chunk.15bf14ee1a79abd927be.js",
    "/includes/chunk.164cff913cc4b7db87df.js",
    "/includes/chunk.24bf9a659583e8727684.js",
    "/includes/chunk.2820469703c0c0e6b91b.js",
    "/includes/chunk.296a55ece756f5218c78.js",
    "/includes/chunk.2b0bf798429c8c8e2758.js",
    "/includes/chunk.2cc9fb36c735c8ca3f37.js",
    "/includes/chunk.338151212308da36dfad.js",
    "/includes/chunk.346c68b49e66e61462b5.js",
    "/includes/chunk.38006800bd82c700aabb.js",
    "/includes/chunk.3b521c8cf0447635742d.js",
    "/includes/chunk.3ba5ec22505859ceb097.js",
    "/includes/chunk.3d4e4c9dcd9bcc0cd461.js",
    "/includes/chunk.3f6d2ff78d50558b0a4c.js",
    "/includes/chunk.4214efbc79d65885ccb4.js",
    "/includes/chunk.4fea93dae9d9995265e8.js",
    "/includes/chunk.51d1110c590cbf7fce2b.js",
    "/includes/chunk.55251c604ccd393667e9.js",
    "/includes/chunk.62125622ac785efa54d6.js",
    "/includes/chunk.63ed98741f1cd03b1d09.js",
    "/includes/chunk.716aadea68981005d104.js",
    "/includes/chunk.72a3a1fc39f7fa980159.js",
    "/includes/chunk.7fcfe47926ccb0d4693d.js",
    "/includes/chunk.828d302e5a27f03d17ad.js",
    "/includes/chunk.82d6c8d337cbeb301f01.js",
    "/includes/chunk.8a80ab87b7eb53d05668.js",
    "/includes/chunk.8c067629f0737ffa74e5.js",
    "/includes/chunk.90b35911d6c7930d81d9.js",
    "/includes/chunk.9deec092be803b20a112.js",
    "/includes/chunk.95296fe9897c4c858f5e.js",
    "/includes/chunk.9eb2a07947dc08ea3ddc.js",
    "/includes/chunk.a24a0421aef059d8e5a7.js",
    "/includes/chunk.aaf86f1876a81e7b6ef5.js",
    "/includes/chunk.b0d4a62dbe2b48c2f727.js",
    "/includes/chunk.b296dbd6f735fb596ae9.js",
    "/includes/chunk.b35717d3cd1e3f27c16d.js",
    "/includes/chunk.b441c2abea934a0f648f.js",
    "/includes/chunk.b4bd283b86c8ca93fb18.js",
    "/includes/chunk.b8fb26d3492e6d712980.js",
    "/includes/chunk.b92c33a24d338897d67d.js",
    "/includes/chunk.be98a79014ba9932472e.js",
    "/includes/chunk.c152c23a0a512b005f1a.js",
    "/includes/chunk.c1f07a9ab9ba21af761d.js",
    "/includes/chunk.c3e2b1b6814234b1b597.js",
    "/includes/chunk.c3ee2beaf9c4adba0b76.js",
    "/includes/chunk.c7e46e9737431b1a6df4.js",
    "/includes/chunk.cbaf68cd2c8f5775542d.js",
    "/includes/chunk.ce4c2f999b3614018c7f.js",
    "/includes/chunk.d1103d249334cb3cb900.js",
    "/includes/chunk.d49d34a7418125d4712a.js",
    "/includes/chunk.e0e65310486c5a5e8262.js",
    "/includes/chunk.e1aa0c86f8d1eee0885e.js",
    "/includes/chunk.e2f491d09fc7aa27a1bc.js",
    "/includes/chunk.e8f2e168a82875ac3e46.js",
    "/includes/chunk.ea7b107b02a1a080ece7.js",
    "/includes/chunk.ec07ad238aecfd19e76d.js",
    "/includes/chunk.f6ba1c2178363a9f7c7c.js",
    "/includes/chunk.f7b23283ff4936f9dbdd.js",
    "/includes/chunk.fb1480b2c7aa1a9199bc.js",
    "/includes/chunk.ff00f71d4b646418769a.js",
    "/includes/entry.0343b228f988c3cb0ae9.js",
    "/includes/entry.0c625c3f6aacafacc9a1.js",
    "/includes/entry.37815f7bd88f96da4d2e.js",
    "/includes/entry.4f57410008742129c5f7.js",
    "/includes/entry.760dbd00f2f81953e9c7.js",
    "/includes/entry.93f6dd54a91dee6f7abb.js",
    "/includes/entry.c216a8a5ba04018d7129.js"
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
