/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.01927f56970b42157afd.js",
    "/includes/chunk.111aca26945371fd2c79.js",
    "/includes/chunk.18346dfcf3c72c1d4544.js",
    "/includes/chunk.193f9fca455d4b312e10.js",
    "/includes/chunk.1acdf6a6c8dc5a923924.js",
    "/includes/chunk.2012236ec1d7a41659f3.js",
    "/includes/chunk.2284cf65d2a54734ab19.js",
    "/includes/chunk.23853b020be6d3a2c156.js",
    "/includes/chunk.292589ac43687923d5b6.js",
    "/includes/chunk.2dc28b45e969ac84febe.js",
    "/includes/chunk.3e1ae9577b90d424202f.js",
    "/includes/chunk.4212503dc1db4dcfece4.js",
    "/includes/chunk.4cdbf7c4b576fc2f9306.js",
    "/includes/chunk.4cdc4d1518439e7c8be2.js",
    "/includes/chunk.4d60220a8b7e81ba5c97.js",
    "/includes/chunk.4f32b8ea802aa43da762.js",
    "/includes/chunk.4fe8aacad17fdb924e07.js",
    "/includes/chunk.57a65851e13b6a0a0665.js",
    "/includes/chunk.595fa28104a772d72850.js",
    "/includes/chunk.599077e34aea0b5daa4e.js",
    "/includes/chunk.5a5573db4fb259c66e4f.js",
    "/includes/chunk.658b12e5ab3bb3084c28.js",
    "/includes/chunk.67fb994a20db1d371b78.js",
    "/includes/chunk.69f0265c3d74a4ea6359.js",
    "/includes/chunk.6bc13696469275efdd53.js",
    "/includes/chunk.6c1bdf938b30ea44739f.js",
    "/includes/chunk.6c300035868915d184cd.js",
    "/includes/chunk.750feee25013cf84ae40.js",
    "/includes/chunk.7cfc675d8807e34005bd.js",
    "/includes/chunk.80c492c6f8f4629ea5d3.js",
    "/includes/chunk.818a09f19d18ca3652af.js",
    "/includes/chunk.86a0bd146909679875af.js",
    "/includes/chunk.8882d9fe15e285d5665e.js",
    "/includes/chunk.91dbfbb6e9d3152b6175.js",
    "/includes/chunk.9e48bb99522a1efe7df4.js",
    "/includes/chunk.a146733f907dfad07d5b.js",
    "/includes/chunk.a5f27cb1ba87a0f09c4e.js",
    "/includes/chunk.a7d37ff22ca813590fa9.js",
    "/includes/chunk.ac0499b3a788657f58c7.js",
    "/includes/chunk.afdc2a7aa6bb6ecfd0dc.js",
    "/includes/chunk.b10353453d0c71af3491.js",
    "/includes/chunk.b9000a3358d03693ea7d.js",
    "/includes/chunk.bc3b5a75056af8c57980.js",
    "/includes/chunk.bfa7b013a78f2bfbb1f8.js",
    "/includes/chunk.bfc7c0616475879fe1b4.js",
    "/includes/chunk.c1c812e41ef394fea183.js",
    "/includes/chunk.c20d55117135906be51f.js",
    "/includes/chunk.c2fc02d7e8c61b342e16.js",
    "/includes/chunk.c38a4acfb2a5ae0bd899.js",
    "/includes/chunk.c5d0a274cdad309f115a.js",
    "/includes/chunk.d611a9c14cd49c20ef2e.js",
    "/includes/chunk.dc012f14c46d6a618a36.js",
    "/includes/chunk.df339b2a681c7e90f7fd.js",
    "/includes/chunk.e29c357f29777b14cf5f.js",
    "/includes/chunk.e337b6ee5598da53db22.js",
    "/includes/chunk.eb450b61cf9857124e22.js",
    "/includes/chunk.f1473d4dd33b84a7963c.js",
    "/includes/chunk.f505660756f37491a0d8.js",
    "/includes/chunk.f6f340ea92bece3def6c.js",
    "/includes/chunk.faa332bfcaaef78f19f8.js",
    "/includes/chunk.fdd218c10e92033638aa.js",
    "/includes/chunk.feb9ab3ee7cd490e8e7b.js",
    "/includes/entry.06fbf1f052d1dc23df68.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.1c0658ee955e26c2ce8f.js",
    "/includes/entry.3347136bfeb8ea803b1c.js",
    "/includes/entry.76362f6e68fbb061b7a2.js",
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
