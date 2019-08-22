/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0629062eb988e99dcfe6.js",
    "/includes/chunk.065766151ad526c6bc5f.js",
    "/includes/chunk.0829ddf561ecfe228d12.js",
    "/includes/chunk.13d0b48d3dd77a0fd985.js",
    "/includes/chunk.18346dfcf3c72c1d4544.js",
    "/includes/chunk.1acdf6a6c8dc5a923924.js",
    "/includes/chunk.1cf227b8a58aac4e25e9.js",
    "/includes/chunk.292589ac43687923d5b6.js",
    "/includes/chunk.2012236ec1d7a41659f3.js",
    "/includes/chunk.2dc28b45e969ac84febe.js",
    "/includes/chunk.3a11966fcf502fc47641.js",
    "/includes/chunk.3b9d684d95781b862ec8.js",
    "/includes/chunk.3f81a9d713fbe17ee284.js",
    "/includes/chunk.4212503dc1db4dcfece4.js",
    "/includes/chunk.4711f9c8013243565d81.js",
    "/includes/chunk.479a51bb60c81d9d9501.js",
    "/includes/chunk.4cdbf7c4b576fc2f9306.js",
    "/includes/chunk.4abcca7857489a2acb7d.js",
    "/includes/chunk.4d60220a8b7e81ba5c97.js",
    "/includes/chunk.4f32b8ea802aa43da762.js",
    "/includes/chunk.50957cc7c5fa010e1edc.js",
    "/includes/chunk.57a65851e13b6a0a0665.js",
    "/includes/chunk.595fa28104a772d72850.js",
    "/includes/chunk.658b12e5ab3bb3084c28.js",
    "/includes/chunk.67fb994a20db1d371b78.js",
    "/includes/chunk.6bc13696469275efdd53.js",
    "/includes/chunk.6c1bdf938b30ea44739f.js",
    "/includes/chunk.6c300035868915d184cd.js",
    "/includes/chunk.6f5c588333572b5c1f8a.js",
    "/includes/chunk.723801820485b89c9d4e.js",
    "/includes/chunk.7dcc228e89fc2cce8ce8.js",
    "/includes/chunk.8882d9fe15e285d5665e.js",
    "/includes/chunk.98ca97d594389076e1ae.js",
    "/includes/chunk.99556db454fef0a778c0.js",
    "/includes/chunk.9eece40da8ab391836c6.js",
    "/includes/chunk.a09484c5d81be04a89f1.js",
    "/includes/chunk.a22fa68d6f39ae4eeee1.js",
    "/includes/chunk.a7c22575a0fd9ac07993.js",
    "/includes/chunk.acff15bb92336d551c27.js",
    "/includes/chunk.af9852eb7811be07d8cc.js",
    "/includes/chunk.b10353453d0c71af3491.js",
    "/includes/chunk.b34be1237344898e31cc.js",
    "/includes/chunk.b3a5052e00d08a054663.js",
    "/includes/chunk.bfa7b013a78f2bfbb1f8.js",
    "/includes/chunk.bfc7c0616475879fe1b4.js",
    "/includes/chunk.c1c812e41ef394fea183.js",
    "/includes/chunk.c1e42d92b6ba027b4597.js",
    "/includes/chunk.c1f5358a0c8ac0732e08.js",
    "/includes/chunk.c20d55117135906be51f.js",
    "/includes/chunk.c38a4acfb2a5ae0bd899.js",
    "/includes/chunk.cb6c77500da7485e334b.js",
    "/includes/chunk.cea277373d7d791b5517.js",
    "/includes/chunk.df7205f5e674855bb6ea.js",
    "/includes/chunk.e29c357f29777b14cf5f.js",
    "/includes/chunk.e32ac84ba0ea2ae7ea71.js",
    "/includes/chunk.e928edbf67bb2bedc26f.js",
    "/includes/chunk.ec94015c41db6c3b9bc6.js",
    "/includes/chunk.ee6a3b583c0d47ba4243.js",
    "/includes/chunk.f505660756f37491a0d8.js",
    "/includes/chunk.feb9ab3ee7cd490e8e7b.js",
    "/includes/chunk.ff86f96768c7d950f076.js",
    "/includes/chunk.ffd363787a684801d0b0.js",
    "/includes/entry.0f477a1a5e9fbfbd0368.js",
    "/includes/entry.422c45b7598f1844d3ea.js",
    "/includes/entry.457cd41cb686e9459686.js",
    "/includes/entry.4eb8fb8caa811f95dc6a.js",
    "/includes/entry.7c7ecb24f1e9c4e12d63.js",
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
