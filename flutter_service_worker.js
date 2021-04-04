'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "257134681b3c8108ed46331e720fa23c",
"assets/assets/fonts/gilroylight.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/images/mlogo.png": "94e21865689f2ff6afb67a149c1ac2dd",
"assets/assets/images/mlogoc.png": "99ad6a1d0b1e74ce6868c7b7826d3253",
"assets/assets/images/portfolio/campusfood.png": "6d75e0a86617e2ac9068da045bc217ae",
"assets/assets/images/portfolio/campusfood2.png": "70e60772aef5032edf709cf0ffe13d0b",
"assets/assets/images/portfolio/campusfood3.png": "1bfcb17cdda0ef334f8e9370bbda9220",
"assets/assets/images/portfolio/comfood2.png": "5e0b6cebae174ed18fc0eca3a603b12a",
"assets/assets/images/portfolio/comfood3.png": "3b4550505467b732ad02de62975bb860",
"assets/assets/images/portfolio/communityfood.png": "b048243954ab3763e47d5590f9125e66",
"assets/assets/images/portfolio/dfd.png": "48fb1fc14fecdbe1eaef88c6728a88ea",
"assets/assets/images/portfolio/fe2.png": "d8c98e0e92c19a725fa510da20e62d19",
"assets/assets/images/portfolio/fe3.png": "3fa751829ea864cebd52984653e5bcab",
"assets/assets/images/portfolio/form.png": "1f7280fabeb82f00238abe46326af6be",
"assets/assets/images/portfolio/Grocery1.png": "fdee78381909ccd5871e4144b6255f02",
"assets/assets/images/portfolio/Grocery2.png": "62794eb0268fa8677b05d3a6d84e329b",
"assets/assets/images/portfolio/hand.png": "583686b53cb1e7e70531f133a032ffe0",
"assets/assets/images/portfolio/ih2.png": "d8dc25ae6757532c2c970adba3f3f5d7",
"assets/assets/images/portfolio/ih3.png": "eb9744b4b1f7a8fe94575b82ca463b37",
"assets/assets/images/portfolio/ih4.png": "73a62b6f3839812fb39230d9b780da4b",
"assets/assets/images/portfolio/joe2.png": "dc12b7b5e4d314e0864e34750d7c76e0",
"assets/assets/images/portfolio/joe3.png": "36185ea2fccccce53343d61a5e8e4463",
"assets/assets/images/portfolio/nofame.png": "dd522a8d9204279c26cdbb52d8ea3e50",
"assets/assets/images/portfolio/paperbread.png": "e21bddedce0c0646d383a4714beddc96",
"assets/assets/images/portfolio/pb2.png": "996293f29271705d5838b9b2529fdbd9",
"assets/assets/images/portfolio/pb3.png": "a2ae8d4dbd72633d8966719457af36c7",
"assets/assets/images/portfolio/pt1.png": "69640faa39159855884c0f8f9180908b",
"assets/assets/images/portfolio/pt2.png": "641d42400fe85b059d32cacb3b97101b",
"assets/assets/images/portfolio/pt3.png": "232044a525ceeafe982160d3f077ba4a",
"assets/assets/images/portfolio/rack.png": "e4cbf0e6eeaf74dac4dc636ec1f4bee1",
"assets/assets/images/portfolio/rack2.png": "496918f1187377fcdf5732825d89b371",
"assets/assets/images/portfolio/rack3.png": "e5a89b0a5357b69ed5f1dba49f6eeef8",
"assets/assets/images/portfolio/rise.png": "cc078a02fa4f1279fc1b0f32b5f46edd",
"assets/assets/images/portfolio/rm.png": "bd0de76b7e883da3cbb1494c0c4136ca",
"assets/assets/images/portfolio/rm2.png": "d898003a2fbf3ebd8e68b96fc6928db1",
"assets/assets/images/portfolio/rm3.png": "778347bdc9bfb8ad1640b860ed98ce04",
"assets/assets/images/portfolio/ua2.png": "95d590991c2c9df60c433fb00963c943",
"assets/assets/images/portfolio/ua3.png": "e0aed992c3e50e4cf8bd7b6cbe42d372",
"assets/assets/images/portfolio/upkeepalert.png": "2fb1658caa11802405f4cc1e8ce93751",
"assets/assets/images/portfolio/wavio1.png": "c0e3ff6939c478dab65627ab126d5447",
"assets/assets/images/portfolio/wavio2.png": "13385d59e218f672efc7f7c355a03452",
"assets/assets/images/portfolio/wavio3.png": "96ca4dcd010286d3ca3cdc0899a444b0",
"assets/assets/images/resume/ca.png": "0624dda468f4d80fad962757afde3a8c",
"assets/assets/images/resume/df.png": "091e2e68d10fb315491956bd975ad8d8",
"assets/assets/images/resume/indeed.png": "c0f5d6f95ea14265898014c0e60aea80",
"assets/assets/images/resume/lc.jpg": "aeb9d9b51db02f696e91d154a0e7dd01",
"assets/assets/images/resume/rit.jpg": "eb82136a81bd0fbacda1da2536b481d7",
"assets/assets/images/resume/wavio.png": "a5db47114d728d7671843fdd7c40bc75",
"assets/FontManifest.json": "bc41220f97f2b350ec9580b2b770896f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e069344c4b0610691f786b4c7b9f8727",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "056d53d3c8bef1308fffa206a377ffca",
"firebase-messaging-sw.js": "7f8aceace4c6b442110ee8afbde8b29d",
"icons/icon-192.png": "5e764132c36e726473b73cc2d0252aa2",
"icons/icon-512.png": "1885d08306e1b0a725861f0d29a03753",
"index.html": "479dcff1d599697c076b9e03d54aa317",
"/": "479dcff1d599697c076b9e03d54aa317",
"main.dart.js": "e8b76dff610ae72041c868cd1ad1c8a6",
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
