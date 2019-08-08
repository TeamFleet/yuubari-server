/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.00d4b923505b9479fc20.js",
    "/includes/chunk.048907701a35685dd1da.js",
    "/includes/chunk.0558d5ab8d92815bae85.js",
    "/includes/chunk.069cd1617f48cf372832.js",
    "/includes/chunk.132528b872d2c13b71a4.js",
    "/includes/chunk.13eed843a99237b350c0.js",
    "/includes/chunk.14aaafa2ff8854735b3a.js",
    "/includes/chunk.163684080b95a9735c13.js",
    "/includes/chunk.1c35e320a65409c9cd60.js",
    "/includes/chunk.22150b486a3058fc40c7.js",
    "/includes/chunk.22c68e691f5a5d0f91ce.js",
    "/includes/chunk.2374e779b729a271f3b9.js",
    "/includes/chunk.292204cc87044b30d347.js",
    "/includes/chunk.2980283c0d1bcecb98f4.js",
    "/includes/chunk.298e3912ac2387f6d461.js",
    "/includes/chunk.29ed7c53d928877aff40.js",
    "/includes/chunk.37e1dca2817de4ec3f9f.js",
    "/includes/chunk.37f688f4552c57d308e5.js",
    "/includes/chunk.3a7b2f9680351e4c1f71.js",
    "/includes/chunk.408118def18b8052e373.js",
    "/includes/chunk.47e0c4c570da985058ea.js",
    "/includes/chunk.4cb1ebf576d2279afae2.js",
    "/includes/chunk.503657e183d5fcc5a314.js",
    "/includes/chunk.5182257696188d3985eb.js",
    "/includes/chunk.57a50202a70e19192551.js",
    "/includes/chunk.5b1ae5413681decb55b8.js",
    "/includes/chunk.5d0a9a7cad0d1ed13491.js",
    "/includes/chunk.5f31c83679c3c6a24fcd.js",
    "/includes/chunk.6b295dc480139bfc1a94.js",
    "/includes/chunk.7042fe7a15d24de88c59.js",
    "/includes/chunk.706fffdf576ab08e321d.js",
    "/includes/chunk.7157e4b69fb841ca76c3.js",
    "/includes/chunk.739ed02bb43481dad371.js",
    "/includes/chunk.74d836c530699dee9da7.js",
    "/includes/chunk.7976726889de6f8c5a69.js",
    "/includes/chunk.7a0cfd30568b21e80383.js",
    "/includes/chunk.803040d938d0abe0f2e2.js",
    "/includes/chunk.804a98687ac75dd696d3.js",
    "/includes/chunk.8250cadb62436d999a58.js",
    "/includes/chunk.829e2f84d2a8b1efd85a.js",
    "/includes/chunk.8edadd0aec3144f9463e.js",
    "/includes/chunk.916fc350049023d23f2f.js",
    "/includes/chunk.93ef17ffc618f2c83265.js",
    "/includes/chunk.97ecf37188d82a311d27.js",
    "/includes/chunk.99a01cc66e7a08944d47.js",
    "/includes/chunk.a3e03bde5b20b70dc01c.js",
    "/includes/chunk.a596765e56125871c6b6.js",
    "/includes/chunk.a6ff84121620eb024d43.js",
    "/includes/chunk.ad3b55f258c489dc103d.js",
    "/includes/chunk.b4a0bc74d5e232498e1f.js",
    "/includes/chunk.b6ab2ef940a4fc7b1564.js",
    "/includes/chunk.cbf6784bd30a2b3a35cc.js",
    "/includes/chunk.cf4657a5252b384b124a.js",
    "/includes/chunk.d7bf1d71154bf400bd51.js",
    "/includes/chunk.d8a3ae70ec970abb5a71.js",
    "/includes/chunk.e3df456f23073872f46c.js",
    "/includes/chunk.e8f466a80ba23092256f.js",
    "/includes/chunk.e8faab8539bc5358248b.js",
    "/includes/chunk.f30ddbe55c626046d5c3.js",
    "/includes/chunk.f3fe0b035ddb5acfd8c6.js",
    "/includes/chunk.fa57185ee18b73b7e4ed.js",
    "/includes/entry.26a51019b1b43cd10bac.js",
    "/includes/entry.354a6702c3e119a1d5e0.js",
    "/includes/entry.3ad7a168395d5db38f49.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.92fbc8011fa7b146b0b0.js",
    "/includes/entry.f6f3684a335956092ad5.js"
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
