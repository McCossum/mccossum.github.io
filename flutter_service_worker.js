'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b1bf419dd17170650f089b13ccb2c457",
"assets/AssetManifest.bin.json": "6e9c9449b741281f0854b86267e213a4",
"assets/AssetManifest.json": "8523fd707e410d3a90e5900701a68697",
"assets/assets/fonts/gilroylight.otf": "c62aded729bf7146d491275e5019d7fc",
"assets/assets/images/mlogo.png": "4fb2161e36a25cd3891f03e160eba8a6",
"assets/assets/images/portfolio/campusfood.png": "6d75e0a86617e2ac9068da045bc217ae",
"assets/assets/images/portfolio/campusfood2.png": "70e60772aef5032edf709cf0ffe13d0b",
"assets/assets/images/portfolio/campusfood3.png": "1bfcb17cdda0ef334f8e9370bbda9220",
"assets/assets/images/portfolio/comfood2.png": "5e0b6cebae174ed18fc0eca3a603b12a",
"assets/assets/images/portfolio/comfood3.png": "3b4550505467b732ad02de62975bb860",
"assets/assets/images/portfolio/communityfood.png": "b048243954ab3763e47d5590f9125e66",
"assets/assets/images/portfolio/desfordiv.png": "48fb1fc14fecdbe1eaef88c6728a88ea",
"assets/assets/images/portfolio/e.png": "4e593fe2b1b6d34efde51d16a65f066d",
"assets/assets/images/portfolio/fe2.png": "d8c98e0e92c19a725fa510da20e62d19",
"assets/assets/images/portfolio/fe3.png": "3fa751829ea864cebd52984653e5bcab",
"assets/assets/images/portfolio/form.png": "1f7280fabeb82f00238abe46326af6be",
"assets/assets/images/portfolio/hand.png": "583686b53cb1e7e70531f133a032ffe0",
"assets/assets/images/portfolio/ih2.png": "d8dc25ae6757532c2c970adba3f3f5d7",
"assets/assets/images/portfolio/ih3.png": "eb9744b4b1f7a8fe94575b82ca463b37",
"assets/assets/images/portfolio/ih4.png": "73a62b6f3839812fb39230d9b780da4b",
"assets/assets/images/portfolio/joe2.png": "dc12b7b5e4d314e0864e34750d7c76e0",
"assets/assets/images/portfolio/joe3.png": "36185ea2fccccce53343d61a5e8e4463",
"assets/assets/images/portfolio/mmicon.png": "2da0fc87886f63fafbaab0dc34166ab5",
"assets/assets/images/portfolio/nofame.png": "dd522a8d9204279c26cdbb52d8ea3e50",
"assets/assets/images/portfolio/o2.png": "73daa2d9f4e0a03516ce68acf72b93dd",
"assets/assets/images/portfolio/o22.png": "2def45a4b7d86bf58cbf8375d6ca9633",
"assets/assets/images/portfolio/o23.png": "e00a27c5efa4e0c6b7c268edd893333e",
"assets/assets/images/portfolio/paperbread.png": "e21bddedce0c0646d383a4714beddc96",
"assets/assets/images/portfolio/pb2.png": "996293f29271705d5838b9b2529fdbd9",
"assets/assets/images/portfolio/pb3.png": "a2ae8d4dbd72633d8966719457af36c7",
"assets/assets/images/portfolio/pt1.png": "69640faa39159855884c0f8f9180908b",
"assets/assets/images/portfolio/pt2.png": "641d42400fe85b059d32cacb3b97101b",
"assets/assets/images/portfolio/pt3.png": "232044a525ceeafe982160d3f077ba4a",
"assets/assets/images/portfolio/rack.png": "e4cbf0e6eeaf74dac4dc636ec1f4bee1",
"assets/assets/images/portfolio/rack2.png": "496918f1187377fcdf5732825d89b371",
"assets/assets/images/portfolio/rack3.png": "e5a89b0a5357b69ed5f1dba49f6eeef8",
"assets/assets/images/portfolio/rethinkrecipes.png": "4a76d08eb972eda72efbb937841f9e11",
"assets/assets/images/portfolio/rm.png": "c0e944638777138cad17fd7ccf643fa9",
"assets/assets/images/portfolio/rm3.png": "778347bdc9bfb8ad1640b860ed98ce04",
"assets/assets/images/portfolio/rr1.png": "5eb2d1b5b83d61eb445c72d817c44095",
"assets/assets/images/portfolio/rr2.png": "32f6812e79a221e239e614ba88484da7",
"assets/assets/images/portfolio/tri1.png": "b4478630a144eadc09aecfc63823e795",
"assets/assets/images/portfolio/tri2.png": "d28507cd8fcd5aa15bdb0f8f8e620cc5",
"assets/assets/images/portfolio/ua2.png": "95d590991c2c9df60c433fb00963c943",
"assets/assets/images/portfolio/ua3.png": "e0aed992c3e50e4cf8bd7b6cbe42d372",
"assets/assets/images/portfolio/upkeepalert.png": "2fb1658caa11802405f4cc1e8ce93751",
"assets/assets/images/portfolio/wavio1.png": "c0e3ff6939c478dab65627ab126d5447",
"assets/assets/images/portfolio/wavio2.png": "13385d59e218f672efc7f7c355a03452",
"assets/assets/images/portfolio/wavio3.png": "96ca4dcd010286d3ca3cdc0899a444b0",
"assets/assets/images/resume/ca.png": "eb1dc1ebef5de1ca7a5bfc4bf0d9a7f8",
"assets/assets/images/resume/df.png": "7462e89661561c1c0bdaaefb5ec46ca0",
"assets/assets/images/resume/indeed.png": "1a295dee8830451559b33a8a2fa2cfd9",
"assets/assets/images/resume/lc.jpg": "ce7494b382ab582ca6e61b1588f5d5f0",
"assets/assets/images/resume/rit.jpg": "0e2d171d2bfcb16aa93f11cfe9978907",
"assets/assets/images/resume/wavio.png": "dc4e344d59841c448a8e96d25e70fd1d",
"assets/FontManifest.json": "bc41220f97f2b350ec9580b2b770896f",
"assets/fonts/MaterialIcons-Regular.otf": "71cac7e61b4b0299da985ea47a3d6e22",
"assets/NOTICES": "9661b88bbf0aaac8bf71f23d5d3abd59",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "6963f82c2db9e9700ebdecd036beecc2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7f79bdd4c43695395d529d01f752a37d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "bf357842aa22828c804613651cc120c7",
"firebase-messaging-sw.js": "7f8aceace4c6b442110ee8afbde8b29d",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6020472ea9401af3d2e4c3bceac55416",
"icons/icon-192.png": "892f7b7231d42e6892677b03acb51c59",
"icons/icon-512.png": "03b6fb123f26bc62dc596da38092deb4",
"index.html": "08bfa591392d44f19fd539045ce8d8e7",
"/": "08bfa591392d44f19fd539045ce8d8e7",
"main.dart.js": "1e3c8370c2aca2af0a5b37136a915884",
"manifest.json": "1ae70a021848533143fba5854b6df458",
"mlogo_sm.png": "133557b9179aa102c94a66039067ba6a",
"myjs.js": "c86b001d433121c1d98350e7399f9c4b",
"OneSignalSDKWorker.js": "7ff0485cee1f7099162a18fe12b8b8a3",
"robots.txt": "908dd7e55b621e06574323a3f73ebb3e",
"sitemap.xml": "5238bc7f9276dc910718091ccf385d07",
"version.json": "39821daa8219097ebda0efce0c1a6d58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
