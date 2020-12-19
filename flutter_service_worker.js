'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "257134681b3c8108ed46331e720fa23c",
"assets/assets/fonts/gilroylight.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/images/mlogo.png": "94e21865689f2ff6afb67a149c1ac2dd",
"assets/assets/images/mlogoc.png": "99ad6a1d0b1e74ce6868c7b7826d3253",
"assets/assets/images/portfolio/campusfood.png": "1ec295c88088129ac833026578dbc7ff",
"assets/assets/images/portfolio/campusfood2.png": "fa592fa7330c62f7de73b38e3de7c5b4",
"assets/assets/images/portfolio/campusfood3.png": "12766b21920c5ab59937d8246a72cfe5",
"assets/assets/images/portfolio/comfood2.png": "96eb91789e8c5b39574c3a3bb2ab62c6",
"assets/assets/images/portfolio/comfood3.png": "df9c4c2f73d57ffad453adb3d26c9b6f",
"assets/assets/images/portfolio/communityfood.png": "3b604d36ef43bb46165e88e47b7fd725",
"assets/assets/images/portfolio/dfd.png": "94ebe705884912819acebb20c22e0f04",
"assets/assets/images/portfolio/fe2.png": "28ba45187ad862570896d4dd3b466d9b",
"assets/assets/images/portfolio/fe3.png": "574c791bfff5822aaf9290101d423696",
"assets/assets/images/portfolio/form.png": "84f1e0672fb1fdaf99057cafa3edbaf7",
"assets/assets/images/portfolio/Grocery1.png": "685bb188eadbb2c450fa36c4dc313623",
"assets/assets/images/portfolio/Grocery2.png": "c75368ef1ec724dbf9dc4b27416dcc85",
"assets/assets/images/portfolio/hand.png": "841fd08ab809447ca91cc0ba1be117b0",
"assets/assets/images/portfolio/ih2.png": "b22e88dcd3935520dcc6c1cec7602eef",
"assets/assets/images/portfolio/ih3.png": "df5ae7317abceda173e43a627b455c2b",
"assets/assets/images/portfolio/ih4.png": "434d0796e894ddbe439175af1aada7f6",
"assets/assets/images/portfolio/joe2.png": "921a3163ec9d0c42f602829c84dcada5",
"assets/assets/images/portfolio/joe3.png": "3fc1367af6c8e3e8417880a86799f09d",
"assets/assets/images/portfolio/nofame.png": "e11e5302bbb6b3e9e620f3b7eaa3993a",
"assets/assets/images/portfolio/paperbread.png": "9d9f73de2271d86fedc2f1de32f1b2bb",
"assets/assets/images/portfolio/pb2.png": "667bcee4d5dd274a627eb4f347c7bd4c",
"assets/assets/images/portfolio/pb3.png": "d10b45461c9be07d335e79e79d6ad1d7",
"assets/assets/images/portfolio/pt1.png": "a569863ab5afc8638acb665e974509d8",
"assets/assets/images/portfolio/pt2.png": "76e571527b519ce6226357e3230c9483",
"assets/assets/images/portfolio/pt3.png": "6c8ae580a3accff30b78503e7bb7f2c0",
"assets/assets/images/portfolio/rack.png": "3d25dda5d6c93aa89db7d7269fdbdb38",
"assets/assets/images/portfolio/rack2.png": "4660ee133ebb0def91c044684d481ba7",
"assets/assets/images/portfolio/rack3.png": "dbb7bce319da3d62722a07f0010dcb38",
"assets/assets/images/portfolio/rise.png": "fea14ca0fcfe727336ea0295268e32f7",
"assets/assets/images/portfolio/rm.png": "cb41cd668be2d62e0f5e29b855e7cf5a",
"assets/assets/images/portfolio/rm2.png": "13009dee4ecc267cc3d3e8460faa3ea3",
"assets/assets/images/portfolio/rm3.png": "782fc5b48d052dde36315f70e46f9843",
"assets/assets/images/portfolio/ua2.png": "173f6edb2323427e8a95378999e860a6",
"assets/assets/images/portfolio/ua3.png": "fa8cd5e42f60aeaa2debaf0e91220daf",
"assets/assets/images/portfolio/upkeepalert.png": "88d26336eef3965108e87b706415defc",
"assets/assets/images/portfolio/wavio1.png": "edbe18cd2963e2ee551f49d29b43a4cd",
"assets/assets/images/portfolio/wavio2.png": "3576d932f9a4a95305b7e682ca3142c4",
"assets/assets/images/portfolio/wavio3.png": "d96e6bced623e8b04e2ede9ac4ad9644",
"assets/assets/images/resume/ca.png": "0624dda468f4d80fad962757afde3a8c",
"assets/assets/images/resume/df.png": "091e2e68d10fb315491956bd975ad8d8",
"assets/assets/images/resume/indeed.png": "c0f5d6f95ea14265898014c0e60aea80",
"assets/assets/images/resume/lc.jpg": "aeb9d9b51db02f696e91d154a0e7dd01",
"assets/assets/images/resume/rit.jpg": "eb82136a81bd0fbacda1da2536b481d7",
"assets/assets/images/resume/wavio.png": "a5db47114d728d7671843fdd7c40bc75",
"assets/FontManifest.json": "bc41220f97f2b350ec9580b2b770896f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "2b26ebafa20a1d64b71ae39f8dce0ff0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "831eb40a2d76095849ba4aecd4340f19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a126c025bab9a1b4d8ac5534af76a208",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d80ca32233940ebadc5ae5372ccd67f9",
"favicon.png": "056d53d3c8bef1308fffa206a377ffca",
"firebase-messaging-sw.js": "7f8aceace4c6b442110ee8afbde8b29d",
"icons/icon-192.png": "5e764132c36e726473b73cc2d0252aa2",
"icons/icon-512.png": "1885d08306e1b0a725861f0d29a03753",
"index.html": "adc931477c94c26dc284ae056502c0c7",
"/": "adc931477c94c26dc284ae056502c0c7",
"main.dart.js": "872db06395fb5606c38cfcabcb2cba23",
"manifest.json": "762226e3634c7a39b4cc48e27587d314",
"mlogo_sm.png": "c30f62a6ce397f6c1926397d94b66d89",
"myjs.js": "c86b001d433121c1d98350e7399f9c4b",
"OneSignalSDKUpdaterWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"version.json": "b0e160cd8126a9cd0cc0c22010ab2166"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
