'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7210d64c22941f70fa90c784ddbfea88",
"assets/assets/files/Mark%2520Brown%2520-%2520Resume.pdf": "b19216add5aabb00f4cc3500685f8fad",
"assets/assets/fonts/anurati_regular.ttf": "4dfaf70b140d41c9d21c2a4c46c276f5",
"assets/assets/fonts/bebasneue.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"assets/assets/fonts/gilroylight.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/fonts/nunito_bold.ttf": "6f47bcfc065790f02ed3cb8b51bef56f",
"assets/assets/fonts/nunito_regular.ttf": "65bb0a158ee1967292ee4d11079d45ae",
"assets/assets/images/ca.png": "0624dda468f4d80fad962757afde3a8c",
"assets/assets/images/communityfood.png": "3b604d36ef43bb46165e88e47b7fd725",
"assets/assets/images/df.png": "091e2e68d10fb315491956bd975ad8d8",
"assets/assets/images/form.png": "84f1e0672fb1fdaf99057cafa3edbaf7",
"assets/assets/images/Grocery1.png": "685bb188eadbb2c450fa36c4dc313623",
"assets/assets/images/Grocery2.png": "c75368ef1ec724dbf9dc4b27416dcc85",
"assets/assets/images/hand.png": "841fd08ab809447ca91cc0ba1be117b0",
"assets/assets/images/indeed.png": "c0f5d6f95ea14265898014c0e60aea80",
"assets/assets/images/lc.jpg": "aeb9d9b51db02f696e91d154a0e7dd01",
"assets/assets/images/mlogo.png": "2de4f7fc4c7a591bec577f325f1ff866",
"assets/assets/images/nofame.png": "e11e5302bbb6b3e9e620f3b7eaa3993a",
"assets/assets/images/notfound.jpg": "defc129761cd0670ef2a278ffa1c5305",
"assets/assets/images/paperbread.png": "9d9f73de2271d86fedc2f1de32f1b2bb",
"assets/assets/images/rack.png": "3d25dda5d6c93aa89db7d7269fdbdb38",
"assets/assets/images/rise.png": "fea14ca0fcfe727336ea0295268e32f7",
"assets/assets/images/rit.jpg": "eb82136a81bd0fbacda1da2536b481d7",
"assets/assets/images/upkeepalert.png": "88d26336eef3965108e87b706415defc",
"assets/assets/images/wavio.png": "a5db47114d728d7671843fdd7c40bc75",
"assets/FontManifest.json": "ef24fcd875fc96f6d05e51d301d7ec32",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "342fd779c6a5b2711be3dc7a28890b6e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "5e764132c36e726473b73cc2d0252aa2",
"icons/icon-512.png": "1885d08306e1b0a725861f0d29a03753",
"index.html": "d3431f840e8fece4db6d1fb6e74cfeb0",
"/": "d3431f840e8fece4db6d1fb6e74cfeb0",
"main.dart.js": "bdfd484c0ec90ae972502f9ad6a2f034",
"manifest.json": "f5149d86789d964780b3fda9b62f1994"
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
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
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
