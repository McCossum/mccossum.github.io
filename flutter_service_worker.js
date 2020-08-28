'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ec882fb5692345c692c81795d8be6ecb",
"assets/assets/fonts/anurati_regular.ttf": "4dfaf70b140d41c9d21c2a4c46c276f5",
"assets/assets/fonts/bebasneue.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"assets/assets/fonts/gilroylight.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/fonts/nunito_bold.ttf": "6f47bcfc065790f02ed3cb8b51bef56f",
"assets/assets/fonts/nunito_regular.ttf": "65bb0a158ee1967292ee4d11079d45ae",
"assets/assets/images/ca.png": "0624dda468f4d80fad962757afde3a8c",
"assets/assets/images/campusfood.png": "1ec295c88088129ac833026578dbc7ff",
"assets/assets/images/campusfood2.png": "fa592fa7330c62f7de73b38e3de7c5b4",
"assets/assets/images/campusfood3.png": "12766b21920c5ab59937d8246a72cfe5",
"assets/assets/images/comfood2.png": "96eb91789e8c5b39574c3a3bb2ab62c6",
"assets/assets/images/comfood3.png": "df9c4c2f73d57ffad453adb3d26c9b6f",
"assets/assets/images/communityfood.png": "3b604d36ef43bb46165e88e47b7fd725",
"assets/assets/images/df.png": "091e2e68d10fb315491956bd975ad8d8",
"assets/assets/images/dfd.png": "94ebe705884912819acebb20c22e0f04",
"assets/assets/images/fe2.png": "28ba45187ad862570896d4dd3b466d9b",
"assets/assets/images/fe3.png": "b3888267595613bcfb36b2024bd2b25c",
"assets/assets/images/form.png": "84f1e0672fb1fdaf99057cafa3edbaf7",
"assets/assets/images/Grocery1.png": "685bb188eadbb2c450fa36c4dc313623",
"assets/assets/images/Grocery2.png": "c75368ef1ec724dbf9dc4b27416dcc85",
"assets/assets/images/hand.png": "841fd08ab809447ca91cc0ba1be117b0",
"assets/assets/images/ih2.png": "b22e88dcd3935520dcc6c1cec7602eef",
"assets/assets/images/ih3.png": "df5ae7317abceda173e43a627b455c2b",
"assets/assets/images/indeed.png": "c0f5d6f95ea14265898014c0e60aea80",
"assets/assets/images/lc.jpg": "aeb9d9b51db02f696e91d154a0e7dd01",
"assets/assets/images/mlogo.png": "2de4f7fc4c7a591bec577f325f1ff866",
"assets/assets/images/nofame.png": "e11e5302bbb6b3e9e620f3b7eaa3993a",
"assets/assets/images/notfound.jpg": "defc129761cd0670ef2a278ffa1c5305",
"assets/assets/images/paperbread.png": "9d9f73de2271d86fedc2f1de32f1b2bb",
"assets/assets/images/pb2.png": "667bcee4d5dd274a627eb4f347c7bd4c",
"assets/assets/images/pb3.png": "d10b45461c9be07d335e79e79d6ad1d7",
"assets/assets/images/rack.png": "3d25dda5d6c93aa89db7d7269fdbdb38",
"assets/assets/images/rack2.png": "4660ee133ebb0def91c044684d481ba7",
"assets/assets/images/rise.png": "fea14ca0fcfe727336ea0295268e32f7",
"assets/assets/images/rit.jpg": "eb82136a81bd0fbacda1da2536b481d7",
"assets/assets/images/rm.png": "cb41cd668be2d62e0f5e29b855e7cf5a",
"assets/assets/images/ua2.png": "173f6edb2323427e8a95378999e860a6",
"assets/assets/images/ua3.png": "fa8cd5e42f60aeaa2debaf0e91220daf",
"assets/assets/images/upkeepalert.png": "88d26336eef3965108e87b706415defc",
"assets/assets/images/wavio.png": "a5db47114d728d7671843fdd7c40bc75",
"assets/assets/images/wavio1.png": "edbe18cd2963e2ee551f49d29b43a4cd",
"assets/assets/images/wavio2.png": "3576d932f9a4a95305b7e682ca3142c4",
"assets/assets/images/wavio3.png": "d96e6bced623e8b04e2ede9ac4ad9644",
"assets/FontManifest.json": "6d0118ac2d6336283bd0b5e6584765aa",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "f277ccffdf0c2e85ca67d803f0f7479c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "056d53d3c8bef1308fffa206a377ffca",
"icons/icon-192.png": "5e764132c36e726473b73cc2d0252aa2",
"icons/icon-512.png": "1885d08306e1b0a725861f0d29a03753",
"index.html": "716c7af9d4414c8a9ce3bf17c77b8ba4",
"/": "716c7af9d4414c8a9ce3bf17c77b8ba4",
"main.dart.js": "a36bbc51475105380b2fe7b96401499a",
"manifest.json": "762226e3634c7a39b4cc48e27587d314",
"OneSignalSDKUpdaterWorker.js": "ebb63ca15bba16b550232b0b0f66c726",
"OneSignalSDKWorker.js": "ebb63ca15bba16b550232b0b0f66c726"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
