/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.008c67be20c9bbc2bd6f.js",
    "/includes/chunk.01cf97c7003acfc4fb67.js",
    "/includes/chunk.08988b0812e502e48fd6.js",
    "/includes/chunk.0a54e929a1f6e71e3b56.js",
    "/includes/chunk.0a81559821dee6363e56.js",
    "/includes/chunk.0e09801876465f5a7fc8.js",
    "/includes/chunk.120e89a0bc4bbe572a13.js",
    "/includes/chunk.167857287d4c10effecd.js",
    "/includes/chunk.19e3058199c4977d9e7d.js",
    "/includes/chunk.1bbee640d7fc325a06ac.js",
    "/includes/chunk.1c8d6e586ce3819a9592.js",
    "/includes/chunk.1d393f2abe336228f693.js",
    "/includes/chunk.1f07164b6568f60a8217.js",
    "/includes/chunk.22fd30c88dd0d30e114f.js",
    "/includes/chunk.287dc84233d1a89e76ae.js",
    "/includes/chunk.29715b8f5291d731e31c.js",
    "/includes/chunk.2dd83448baf5379990ef.js",
    "/includes/chunk.3d4c4dfd364a4b94ff66.js",
    "/includes/chunk.4112c3928b060c069969.js",
    "/includes/chunk.43b6514823ff0dd7960e.js",
    "/includes/chunk.4efc4d2b3b030ca18949.js",
    "/includes/chunk.59a5dd43b5d5b228b305.js",
    "/includes/chunk.5a898cbee82fa0974859.js",
    "/includes/chunk.5f00857bd38155ae36b0.js",
    "/includes/chunk.620f483bb8b893381b01.js",
    "/includes/chunk.646f1fb7958d7907a8c8.js",
    "/includes/chunk.6c799b6e1b9e54dee779.js",
    "/includes/chunk.6eed9c8d58476d0b5384.js",
    "/includes/chunk.717a075917e4352e011f.js",
    "/includes/chunk.7b3adb5bfa343077023a.js",
    "/includes/chunk.7b7f4a468df06069f1d9.js",
    "/includes/chunk.852e0a10c4e6cf2d43c1.js",
    "/includes/chunk.855e6812f9e2dc17d1a9.js",
    "/includes/chunk.867b61ee5905d379871d.js",
    "/includes/chunk.88cefe93027162b0fa09.js",
    "/includes/chunk.891095d3ecabed60b426.js",
    "/includes/chunk.8e317b528069dfb1dceb.js",
    "/includes/chunk.8e62f8113a0c0f2c2f41.js",
    "/includes/chunk.97c977885e11d7859639.js",
    "/includes/chunk.9c3ead7f943e4042f288.js",
    "/includes/chunk.a3d291cd2f46807be720.js",
    "/includes/chunk.a6f2ac787769d5e7fad3.js",
    "/includes/chunk.a80fbba7afc03b16b1a5.js",
    "/includes/chunk.ac17d0c8fd5508017dc5.js",
    "/includes/chunk.ae23a2791910a6c6c8a2.js",
    "/includes/chunk.b05a45c1c63298da4490.js",
    "/includes/chunk.b42d60356a554ad76bee.js",
    "/includes/chunk.b9a3d258b7a49d252041.js",
    "/includes/chunk.bc9a4b7344df205b7427.js",
    "/includes/chunk.bd7eaeef32e5414d856e.js",
    "/includes/chunk.c4aef0fb2526c80854d3.js",
    "/includes/chunk.c91114d0c55b6ff0d7a4.js",
    "/includes/chunk.caa473d3976115496d53.js",
    "/includes/chunk.cada5a1e4a32a97edd84.js",
    "/includes/chunk.cede4d040c77e4f16450.js",
    "/includes/chunk.d137705a7a9a99ab1281.js",
    "/includes/chunk.d7cf7c31a0462ab8bea4.js",
    "/includes/chunk.d917af1ffef037dce035.js",
    "/includes/chunk.e1121069613e80f6b138.js",
    "/includes/chunk.e2dfb1160b0fd6f680b2.js",
    "/includes/chunk.e83bdc1375098cc5a4d9.js",
    "/includes/chunk.e95f0b47b9354efad27d.js",
    "/includes/chunk.ed26d942b90739c85ee1.js",
    "/includes/chunk.ff600997d03eae3897c3.js",
    "/includes/entry.039d726567e729c58439.js",
    "/includes/entry.41f8d55148dcc12a9b64.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.af618eb28a9e4a536b58.js",
    "/includes/entry.be39991fe23460ec4cfd.js",
    "/includes/entry.c7216995a6ddd18790d4.js"
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
