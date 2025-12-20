'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94564adf056b2f5fa759cce9c42b3725",
"assets/AssetManifest.bin.json": "3ca2371fddc0900e30b14d445a590a14",
"assets/assets/fonts/ruigslay.otf": "b0bc340223b70f1a2380c1b214cf6e94",
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
"assets/assets/images/resume/chf.jpg": "9368b3ac7679d7abcb7963788f82c429",
"assets/assets/images/resume/cpms.png": "c2d985404355854fa05fa51e2c39253b",
"assets/assets/images/resume/df.png": "7462e89661561c1c0bdaaefb5ec46ca0",
"assets/assets/images/resume/hs2.jpg": "b87ff9f1f9e912fcdc0f5d10ad6b4fe9",
"assets/assets/images/resume/indeed.png": "1a295dee8830451559b33a8a2fa2cfd9",
"assets/assets/images/resume/lc.jpg": "ce7494b382ab582ca6e61b1588f5d5f0",
"assets/assets/images/resume/omsi.jpeg": "2fed7100f5d5cccec5dffa44453209a3",
"assets/assets/images/resume/pdx.png": "6f2ce9251eb6679e08db03a43a368eab",
"assets/assets/images/resume/rit.jpg": "0e2d171d2bfcb16aa93f11cfe9978907",
"assets/assets/images/resume/sr.jpg": "c518951ac3be530c66d6eaba8f91e10f",
"assets/assets/images/resume/wavio.png": "dc4e344d59841c448a8e96d25e70fd1d",
"assets/assets/images/resume/wtv.png": "53f7fe73248f9aabd52a85fd0299d07c",
"assets/FontManifest.json": "15c10a06be872136d01a582036a8fd02",
"assets/fonts/MaterialIcons-Regular.otf": "39d0ade3852dd409419ac44d08dc494b",
"assets/NOTICES": "73889f05a04b859d2f4086d3bfa207fc",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "a4ea1b8d4bfeceaa6d86cfdd156a1551",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "bf357842aa22828c804613651cc120c7",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "3a1133f90d0db6ad1e71d26d0a2847f5",
"icons/icon-192.png": "892f7b7231d42e6892677b03acb51c59",
"icons/icon-512.png": "03b6fb123f26bc62dc596da38092deb4",
"index.html": "67fb34dcc68953633bc5e543b58a6596",
"/": "67fb34dcc68953633bc5e543b58a6596",
"main.dart.js": "aed32ac741827ab529a02fcfa6868dd5",
"manifest.json": "f028aa2cccde2dd670a6fc9550f0f7eb",
"mlogo_sm.png": "133557b9179aa102c94a66039067ba6a",
"robots.txt": "908dd7e55b621e06574323a3f73ebb3e",
"sitemap.xml": "d8947da96af852e64428041d664ee3c6",
"version.json": "21fc3c289b35f3f84fdec003bb753771"};
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
