/* eslint no-restricted-globals: 0 */

// https://github.com/14islands/vecka.14islands.com

// Created using this tutorial
// https://developers.google.com/web/fundamentals/primers/service-worker/?hl=en

const CACHE_NAME = 'koot-sw-cache';
const urlsToCache = [
    "/includes/chunk.0b6e509cd67e8fafa267.js",
    "/includes/chunk.0d9aa242aa1087d492b5.js",
    "/includes/chunk.0ff3413182ccba49beff.js",
    "/includes/chunk.13977292364bba0728d2.js",
    "/includes/chunk.1795d7592f99006bb3d5.js",
    "/includes/chunk.19b79d2546a33b7fb4d8.js",
    "/includes/chunk.1ae0901cae1a5367d04c.js",
    "/includes/chunk.1b30ae2381b886dedfad.js",
    "/includes/chunk.2568e961ae22a8ccab69.js",
    "/includes/chunk.2bdff7a7212d1377b002.js",
    "/includes/chunk.30f1477931c5661c9b06.js",
    "/includes/chunk.327fc315b60018d77c36.js",
    "/includes/chunk.32a39e24fe6b06f76b20.js",
    "/includes/chunk.3b0e69e2f01e2ac58d0e.js",
    "/includes/chunk.3c4d07bf434c0dc58dd3.js",
    "/includes/chunk.3cdcb32a562993a25ed6.js",
    "/includes/chunk.41372ad57726a43fad2b.js",
    "/includes/chunk.48ed1363102cc7e480cb.js",
    "/includes/chunk.4949a62ed3165e115a26.js",
    "/includes/chunk.4e3b841ee792f1ac23ff.js",
    "/includes/chunk.500dce9dd78c4e75fbf0.js",
    "/includes/chunk.55f7c691d172043b7c68.js",
    "/includes/chunk.59aeb1d87ef6c4a5db91.js",
    "/includes/chunk.5faebe072fea2b1bde2b.js",
    "/includes/chunk.612aa9e6405b7c7f7780.js",
    "/includes/chunk.6253aa91fe96506d5322.js",
    "/includes/chunk.632db85c9bd10b5be2e8.js",
    "/includes/chunk.688643d4cda050133e9e.js",
    "/includes/chunk.712862a34d824de18201.js",
    "/includes/chunk.743bc2b47fc922a1034e.js",
    "/includes/chunk.75c748b7f4cb18a54fb8.js",
    "/includes/chunk.7af882ac9a353e7438d6.js",
    "/includes/chunk.80a43e0ee1cf67139fe7.js",
    "/includes/chunk.8401cf0494cef0cbe015.js",
    "/includes/chunk.8865ae5213392be27c68.js",
    "/includes/chunk.898798abc8441505d657.js",
    "/includes/chunk.90dff01f04690c47ee0f.js",
    "/includes/chunk.91ef34d1edaec3c9bbff.js",
    "/includes/chunk.92b02e428c037b9958ce.js",
    "/includes/chunk.a09ad6a1b5cd76cb1b75.js",
    "/includes/chunk.9ec53ed15fa8d8339b60.js",
    "/includes/chunk.a0dd1b7b5ab3875d1336.js",
    "/includes/chunk.a178e1558932bd5df342.js",
    "/includes/chunk.a222687b9199f9a7efab.js",
    "/includes/chunk.a30f23a19094249e25fb.js",
    "/includes/chunk.a403753bd8905a7663da.js",
    "/includes/chunk.afc60dc31540f9c16cf5.js",
    "/includes/chunk.ba2cc47ef4c66e2c6be6.js",
    "/includes/chunk.bd2d42e6d7af8f134c8b.js",
    "/includes/chunk.c66493e7b75449fddfbc.js",
    "/includes/chunk.c6e239d56bb2b9c77d78.js",
    "/includes/chunk.c9d248d572f63aa50d10.js",
    "/includes/chunk.c9fd85fd3dca4432ec3d.js",
    "/includes/chunk.da24ca7086fc57603ad5.js",
    "/includes/chunk.da3f0f6f6b46ed043dca.js",
    "/includes/chunk.df41511a312a46b4e536.js",
    "/includes/chunk.e504cfde6785e6add6c3.js",
    "/includes/chunk.e6db41034e6932db364d.js",
    "/includes/chunk.e80c8095b7ac99b767ee.js",
    "/includes/chunk.eb78b1cfb71daaacb0f0.js",
    "/includes/chunk.ec66c522759203239008.js",
    "/includes/chunk.f1361729a976398c9d6d.js",
    "/includes/chunk.f79b2363518181d9552e.js",
    "/includes/chunk.fb942a830921f38a73e0.js",
    "/includes/entry.038cf971e9886bb58d14.js",
    "/includes/entry.06140709dcfcf8ceec02.js",
    "/includes/entry.0cb4aa6d37d61cac4ab3.js",
    "/includes/entry.a1bd7d15120cb92aee40.js",
    "/includes/entry.b018b76c410555ef19ab.js",
    "/includes/entry.be39991fe23460ec4cfd.js"
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
