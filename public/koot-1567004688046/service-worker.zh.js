/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.051ed6235ecd6a75a9c2.js",
    "/includes/chunk.06f6f4bbc30e53a5d718.js",
    "/includes/chunk.0a2ab5fe8f5b87c7b712.js",
    "/includes/chunk.0c1e22a6d3cccffceb99.js",
    "/includes/chunk.0c602d27ec2dbb002d8c.js",
    "/includes/chunk.0dd91e5e8c95b5b5cd80.js",
    "/includes/chunk.136453cc196a3aa802f5.js",
    "/includes/chunk.1a6c43b14287f4a4d183.js",
    "/includes/chunk.1f0d6e4b56f1f55fbce7.js",
    "/includes/chunk.239ca349021ce0bd0136.js",
    "/includes/chunk.2695c985a363a826c44f.js",
    "/includes/chunk.2f578d2e09a3551f0774.js",
    "/includes/chunk.302b15ee598a34e5eee6.js",
    "/includes/chunk.316ff6a4e25a5da5b144.js",
    "/includes/chunk.31b3ded208e634ecf61e.js",
    "/includes/chunk.343694427fa4ce3b6b91.js",
    "/includes/chunk.36ed20926d5eb51ffbf6.js",
    "/includes/chunk.37ee899e4363359f1763.js",
    "/includes/chunk.45bfc68b8c92fe959cb5.js",
    "/includes/chunk.4a9d5d27166ad9ffd5c1.js",
    "/includes/chunk.4d5e88bffb3481d839cf.js",
    "/includes/chunk.4d65df026af32e3858ad.js",
    "/includes/chunk.4f826947a129b901ccd1.js",
    "/includes/chunk.4f967f35ebbcb0af2dfe.js",
    "/includes/chunk.5080247a5947a7a9cf38.js",
    "/includes/chunk.50e0ef04c10c598ca148.js",
    "/includes/chunk.5b0636a4412f5622d120.js",
    "/includes/chunk.621eb0bc4a56d2d8a911.js",
    "/includes/chunk.6308e2dd402705671e44.js",
    "/includes/chunk.6d5b21add6db29130f0e.js",
    "/includes/chunk.739e61e6c38c0dbab241.js",
    "/includes/chunk.74649c722ec249a80e16.js",
    "/includes/chunk.784a0e1f1c09091c2b0d.js",
    "/includes/chunk.7f01e968be5083cf1d9c.js",
    "/includes/chunk.8677aa183cc6ae09b996.js",
    "/includes/chunk.870cadfab3d38928577b.js",
    "/includes/chunk.8bf561e241cea32f0bf1.js",
    "/includes/chunk.96c944cb072690749626.js",
    "/includes/chunk.97628576269c39e4e8d7.js",
    "/includes/chunk.9d6949d3aeb1b0c683e9.js",
    "/includes/chunk.a6c34a51812e56fe8c2d.js",
    "/includes/chunk.a7bd0778d59b7a907131.js",
    "/includes/chunk.a9de3a21116896d0afa2.js",
    "/includes/chunk.aae0e80ac84b80b864a8.js",
    "/includes/chunk.b8496809d24b4c9f000a.js",
    "/includes/chunk.b8e8dfe6d2e4454f2e3d.js",
    "/includes/chunk.bcd93be7224d6436bcd4.js",
    "/includes/chunk.bd423f90f1f9b5e8803a.js",
    "/includes/chunk.c212cc6d0482f52574f5.js",
    "/includes/chunk.c36144a6cfbf82247d9c.js",
    "/includes/chunk.c3748c7c8cf94d05cafd.js",
    "/includes/chunk.c733a69b45655d78f510.js",
    "/includes/chunk.cb8c50fb967e266299f7.js",
    "/includes/chunk.d1a8342b45d56b9c6423.js",
    "/includes/chunk.d524cf24cd8aef270f6a.js",
    "/includes/chunk.d757595503aa5a3375d5.js",
    "/includes/chunk.df71341e0e7dd0a2a3ba.js",
    "/includes/chunk.e018bf172d7134c96c3c.js",
    "/includes/chunk.e0cb0dbd0c1b28db052e.js",
    "/includes/chunk.e5befac5e9ad26cda64e.js",
    "/includes/chunk.ec886a16dde8e8ff6ffa.js",
    "/includes/chunk.f049222c7a5ff069ff4f.js",
    "/includes/chunk.f2f78470ba27570bdf87.js",
    "/includes/chunk.f520a3e16a1a18880e19.js",
    "/includes/entry.09fc3420e48fc866b749.js",
    "/includes/entry.2139accf7a664c5aa5df.js",
    "/includes/entry.273a533c15c1a534d528.js",
    "/includes/entry.82f4ab672b73eeaf88dc.js",
    "/includes/entry.8fe89de4e82ee3662942.js",
    "/includes/entry.9e4f6438ec0d8476dded.js"
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
