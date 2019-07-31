/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0038b09cd0b89756c48e.js",
    "/includes/chunk.0b6e509cd67e8fafa267.js",
    "/includes/chunk.0c9168189dca383ea20b.js",
    "/includes/chunk.0ff3413182ccba49beff.js",
    "/includes/chunk.1ae0901cae1a5367d04c.js",
    "/includes/chunk.21237955904ef158ac3e.js",
    "/includes/chunk.2568e961ae22a8ccab69.js",
    "/includes/chunk.2982c5876c8b52dc0364.js",
    "/includes/chunk.2bdff7a7212d1377b002.js",
    "/includes/chunk.327fc315b60018d77c36.js",
    "/includes/chunk.3beeab17e22e76712303.js",
    "/includes/chunk.48653b8f5796a7e8218b.js",
    "/includes/chunk.4949a62ed3165e115a26.js",
    "/includes/chunk.4cf218a9c113a5e51001.js",
    "/includes/chunk.500dce9dd78c4e75fbf0.js",
    "/includes/chunk.55f7c691d172043b7c68.js",
    "/includes/chunk.56d36d2318dd03411475.js",
    "/includes/chunk.5faebe072fea2b1bde2b.js",
    "/includes/chunk.6253aa91fe96506d5322.js",
    "/includes/chunk.6824c471fa8fc928efa5.js",
    "/includes/chunk.688643d4cda050133e9e.js",
    "/includes/chunk.698c3ce94bc6593a8f7c.js",
    "/includes/chunk.69d4443a13ef11ddbdf1.js",
    "/includes/chunk.6a8ac5cf30ac9c492654.js",
    "/includes/chunk.712862a34d824de18201.js",
    "/includes/chunk.73b6189255269856baa9.js",
    "/includes/chunk.743bc2b47fc922a1034e.js",
    "/includes/chunk.7516d2388445955f5d25.js",
    "/includes/chunk.75c748b7f4cb18a54fb8.js",
    "/includes/chunk.7d4d6ab24c237c3c1f40.js",
    "/includes/chunk.8401cf0494cef0cbe015.js",
    "/includes/chunk.875997dbe3d49cb530ff.js",
    "/includes/chunk.898798abc8441505d657.js",
    "/includes/chunk.8ef8b17e9a2aae69f742.js",
    "/includes/chunk.8ff60a4df0d21e6c0773.js",
    "/includes/chunk.90dff01f04690c47ee0f.js",
    "/includes/chunk.9a30aca5eb66dc2fe9c8.js",
    "/includes/chunk.a0dd1b7b5ab3875d1336.js",
    "/includes/chunk.a178e1558932bd5df342.js",
    "/includes/chunk.a222687b9199f9a7efab.js",
    "/includes/chunk.a403753bd8905a7663da.js",
    "/includes/chunk.a5c6971b61e582a9eaf9.js",
    "/includes/chunk.a7e8d2bb7f790e03fdbc.js",
    "/includes/chunk.a92f33984ed74a64604b.js",
    "/includes/chunk.b4304c7ae457cd4b869b.js",
    "/includes/chunk.ba2cc47ef4c66e2c6be6.js",
    "/includes/chunk.bd2d42e6d7af8f134c8b.js",
    "/includes/chunk.c9fd85fd3dca4432ec3d.js",
    "/includes/chunk.d9d9a3bce5593632dfd0.js",
    "/includes/chunk.da24ca7086fc57603ad5.js",
    "/includes/chunk.da3f0f6f6b46ed043dca.js",
    "/includes/chunk.dc17b6b121fdeb58e213.js",
    "/includes/chunk.dd2ccc5e6a044af237f1.js",
    "/includes/chunk.e091cc5cc05035f4bd72.js",
    "/includes/chunk.e41b4b7c1bb9ab3a309b.js",
    "/includes/chunk.e5baf1bfb152393ca7c1.js",
    "/includes/chunk.e80c8095b7ac99b767ee.js",
    "/includes/chunk.eb78b1cfb71daaacb0f0.js",
    "/includes/chunk.ec66c522759203239008.js",
    "/includes/chunk.eed29405b9a431bab2ef.js",
    "/includes/chunk.f1361729a976398c9d6d.js",
    "/includes/chunk.fe76a02cbeb12a2fac53.js",
    "/includes/chunk.ffd33d1099abe3767d6c.js",
    "/includes/entry.06140709dcfcf8ceec02.js",
    "/includes/entry.6cd26207d16925fdbaf1.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.be39991fe23460ec4cfd.js",
    "/includes/entry.e123a50d787a76225694.js",
    "/includes/entry.e71fa8620001b42586a2.js"
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
