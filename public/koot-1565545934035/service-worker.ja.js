/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.022ce20731bcde6ef059.js",
    "/includes/chunk.0558d5ab8d92815bae85.js",
    "/includes/chunk.09b1829ec0c3d8cf3ddf.js",
    "/includes/chunk.0dad3fc2223284c7d3e1.js",
    "/includes/chunk.0df90c530afd9fd69ebe.js",
    "/includes/chunk.124e1b630940298bdf18.js",
    "/includes/chunk.13c9d6ed36abf57092f2.js",
    "/includes/chunk.175a5011b1dc405ba85b.js",
    "/includes/chunk.1980f11dac216f37d198.js",
    "/includes/chunk.1a23cfec4a069289da53.js",
    "/includes/chunk.1a2484a23fa3e06a9280.js",
    "/includes/chunk.216a3239e0b7b51e4a93.js",
    "/includes/chunk.268da833342056c3baa7.js",
    "/includes/chunk.292204cc87044b30d347.js",
    "/includes/chunk.2d90fa7da07c30a03f80.js",
    "/includes/chunk.2dc2a8f7c6999aa7654a.js",
    "/includes/chunk.2e0034d2ea1928cc8895.js",
    "/includes/chunk.2f324bb65849fd60d5da.js",
    "/includes/chunk.3027b0b429c162f8d3d0.js",
    "/includes/chunk.3546ca0803889432a448.js",
    "/includes/chunk.3a12d8ca7d3f368c259f.js",
    "/includes/chunk.3b9109bb0103332723db.js",
    "/includes/chunk.45acffc1eb81ceed0a7d.js",
    "/includes/chunk.4a33cd2350acebb065f8.js",
    "/includes/chunk.4badfa4b57e4cf3b0952.js",
    "/includes/chunk.4de59b121a484a8a055e.js",
    "/includes/chunk.518abdb155b33e05af9b.js",
    "/includes/chunk.51ddd19d2b600d9fee2c.js",
    "/includes/chunk.528e5a1ab6d501a22f62.js",
    "/includes/chunk.5fd2851867db7b462619.js",
    "/includes/chunk.6b1f299a163e8bb772db.js",
    "/includes/chunk.6ce83425eb27f8831257.js",
    "/includes/chunk.76c7d2f7720845b04304.js",
    "/includes/chunk.803d5ff37225fd456eaf.js",
    "/includes/chunk.81e38c2bfb8498464edd.js",
    "/includes/chunk.8749128cff4e19d1097d.js",
    "/includes/chunk.884a462a68d50dd90306.js",
    "/includes/chunk.8f2a827817d6bb463eae.js",
    "/includes/chunk.972bfc82ab1d133e92df.js",
    "/includes/chunk.9c417744cfea2406b47b.js",
    "/includes/chunk.9ef6602fdb3f244feea9.js",
    "/includes/chunk.a56c4c0aabfb370bbaba.js",
    "/includes/chunk.a872fd5eba112d094aaa.js",
    "/includes/chunk.aae9b329edcd9a111d7c.js",
    "/includes/chunk.adcbfd937e1a7a3d887b.js",
    "/includes/chunk.b20ea7c97ff0ccdccf8a.js",
    "/includes/chunk.bd9a10dccf5ae5d219ff.js",
    "/includes/chunk.bf76b5410e6fe027f12d.js",
    "/includes/chunk.c03cfc80df1c94ece478.js",
    "/includes/chunk.c614fc9cb8d3875a3f27.js",
    "/includes/chunk.cc2f00a8abbe7b5991ef.js",
    "/includes/chunk.cc6728e27f4cdab13786.js",
    "/includes/chunk.ccf01d357a0adbb7acf9.js",
    "/includes/chunk.d89984fa27828a749e2f.js",
    "/includes/chunk.d9ac191707df08bce693.js",
    "/includes/chunk.dc424a7fcc4ba88164c0.js",
    "/includes/chunk.e97df7a227a0dd5a3c85.js",
    "/includes/chunk.dcb8870f340aeacc3194.js",
    "/includes/chunk.eea87b63a754f71505a7.js",
    "/includes/chunk.f93e4503f50f4cb351da.js",
    "/includes/chunk.fa5743d7193a1c157215.js",
    "/includes/chunk.fce9168d394250be4795.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.29307b14f7b43b3bc3e3.js",
    "/includes/entry.338d97e737f489dd1e7d.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js",
    "/includes/entry.bceaf0900df3a95f1ed5.js"
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
