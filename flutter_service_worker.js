'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "228018ef7e9c8645531381e68232a7dd",
"assets/AssetManifest.bin.json": "2dca4cbf515ba05e03c9bd9fd9ce1114",
"assets/assets/fonts/charter.otf": "7bdebfa92b7db599bb956a4b83ad1b47",
"assets/assets/fonts/roboto.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/ruigslay.otf": "b0bc340223b70f1a2380c1b214cf6e94",
"assets/assets/images/mlogo.png": "4fb2161e36a25cd3891f03e160eba8a6",
"assets/assets/images/portfolio/campusfood.jpg": "8ec1db830a57bac59f97f4185553b4b9",
"assets/assets/images/portfolio/campusfood2.jpg": "c10d750328bbbc0f62ac7d5d9b2f87e0",
"assets/assets/images/portfolio/campusfood3.jpg": "ae07e69829dca24721e31204d2104b80",
"assets/assets/images/portfolio/comfood2.jpg": "7b84f727a56ce2411c2bc0d3b772b3e0",
"assets/assets/images/portfolio/comfood3.jpg": "a2e2fa7419376298fe7f4be80dc34ddf",
"assets/assets/images/portfolio/communityfood.jpg": "399f3c9bddf078bd9a24316054adb2a8",
"assets/assets/images/portfolio/desfordiv.jpg": "e45f1d5193b7c51bb8ca7ca90a99e6f0",
"assets/assets/images/portfolio/e.jpg": "c6972b41181d93bdc993da4be6e0688e",
"assets/assets/images/portfolio/fe2.jpg": "0de31efee44eb8e57a01dcf530068bd6",
"assets/assets/images/portfolio/fe3.jpg": "35919e56ea70df0814ea930d2fdba126",
"assets/assets/images/portfolio/form.jpg": "18a67ae76020b39835f2664e0d5e6519",
"assets/assets/images/portfolio/hand.jpg": "7578ffc169d6633d6c5fcd241008d524",
"assets/assets/images/portfolio/ih2.jpg": "59aab0eca9f7a702e3338217422e7ca4",
"assets/assets/images/portfolio/ih3.jpg": "ee5aaeceeaa8e9d28969c76baad2f231",
"assets/assets/images/portfolio/ih4.jpg": "df84412ab268dab0bfc04c8ce4c7c3bb",
"assets/assets/images/portfolio/joe2.jpg": "8d21c88a1ba6bc5cb73f21a32b0ed517",
"assets/assets/images/portfolio/joe3.jpg": "66bfe5d7de773f9054a8dae25356c2d8",
"assets/assets/images/portfolio/lsr0.jpg": "523497e52c069096b6ebb6a1f49d571b",
"assets/assets/images/portfolio/lsr1.jpg": "e45aef64d2333b75d822e7d353b4ccbf",
"assets/assets/images/portfolio/lsr2.jpg": "4b0d554fab52df855a4d09d500a1795c",
"assets/assets/images/portfolio/mmicon.jpg": "1e759e0d57bb0ae653a821d00b19fe35",
"assets/assets/images/portfolio/nofame.jpg": "c46b8d0cf71ab0a1831cebcc2107d00a",
"assets/assets/images/portfolio/o2.jpg": "79119a2b2e3d0ccede69ea14ed192f9d",
"assets/assets/images/portfolio/o22.jpg": "af491509cf8f267011c1d67c6c3d00f6",
"assets/assets/images/portfolio/o23.jpg": "47b40c1023d1e60861cbe6a3f3bb4a19",
"assets/assets/images/portfolio/paperbread.jpg": "2f251fb5e1bc345391ca1b534288ca16",
"assets/assets/images/portfolio/pb2.jpg": "eaa9a2afa50a9b227ce2526ca9ded776",
"assets/assets/images/portfolio/pb3.jpg": "f8ce07cf181875b91e484aafba223c6a",
"assets/assets/images/portfolio/pt1.jpg": "562ffee13557b99fadf8a116919daf40",
"assets/assets/images/portfolio/pt2.jpg": "d2613fa3a140b50cd2a8ee8ebdd022e5",
"assets/assets/images/portfolio/pt3.jpg": "ca8e4cbad0344433660ed174a79de67a",
"assets/assets/images/portfolio/rack.jpg": "3135966989ec5026108e7e698b3ee6a3",
"assets/assets/images/portfolio/rack2.jpg": "b9db682fa6579842290b6323eebb36ed",
"assets/assets/images/portfolio/rack3.jpg": "3410e399c4d5317b4e1204d045ce7a71",
"assets/assets/images/portfolio/rethinkrecipes.jpg": "f22a698325b0137cf49414e6ed14d1b8",
"assets/assets/images/portfolio/ri0.jpg": "98db6d480e52284293ab68572b5f1fe4",
"assets/assets/images/portfolio/ri1.jpg": "9edf8e64aa16b76134155520877db8ec",
"assets/assets/images/portfolio/ri2.jpg": "1177601db538f3784a1d33a36e6bfcc2",
"assets/assets/images/portfolio/rm.jpg": "d9def1f9d786e7009dcc5541f0d5ef71",
"assets/assets/images/portfolio/rm3.jpg": "a5f654966349c00c42cba1142943440c",
"assets/assets/images/portfolio/rr1.jpg": "565fb466e58bb8b78fb40998dae42f15",
"assets/assets/images/portfolio/rr2.jpg": "d6e29c610b2088b1b4783a67dc5fd312",
"assets/assets/images/portfolio/tri1.jpg": "608555b3784aafe3b65f69befc113fd1",
"assets/assets/images/portfolio/tri2.jpg": "fb0563732dd800fee45b52269ad85e2d",
"assets/assets/images/portfolio/tt0.jpg": "d0514ee2ff500830a2c4d4d113deb949",
"assets/assets/images/portfolio/tt1.jpg": "f99d4c88647e0c739c8407ab560913c0",
"assets/assets/images/portfolio/tt2.jpg": "5109ddc417c68b922497acb488190f51",
"assets/assets/images/portfolio/ua2.jpg": "0d0ae07b96b889fcc80b231461bbf779",
"assets/assets/images/portfolio/ua3.jpg": "96eb5522686bdb06d5456f7c70ae6d1d",
"assets/assets/images/portfolio/upkeepalert.jpg": "efa62926ae8817fb7f28105320f393af",
"assets/assets/images/portfolio/wavio1.jpg": "9bc88639998729ab45ac92dd252beb18",
"assets/assets/images/portfolio/wavio2.jpg": "d3863e4249bd8cabf747915de609e7b4",
"assets/assets/images/portfolio/wavio3.jpg": "edc5f47bb3fd483b49f2cab2f3bbbbe5",
"assets/assets/images/resume/ca.jpg": "7b5b9d64eaedff81e50a25a3123466ec",
"assets/assets/images/resume/chf.jpg": "13c3cb5055ce76d9bc8280da9eff3246",
"assets/assets/images/resume/cpms.png": "aa74bc4d981fc228db93fece1efeec47",
"assets/assets/images/resume/df.jpg": "7967d4471176af985fdbe3976733843f",
"assets/assets/images/resume/hs2.jpg": "b87ff9f1f9e912fcdc0f5d10ad6b4fe9",
"assets/assets/images/resume/indeed.jpg": "f05f11cc78b534cad2edd24282afa6da",
"assets/assets/images/resume/lc.jpg": "ce7494b382ab582ca6e61b1588f5d5f0",
"assets/assets/images/resume/omsi.jpg": "497a62a7b5fd9e8749d40fa195d4f50b",
"assets/assets/images/resume/pdx.png": "6f2ce9251eb6679e08db03a43a368eab",
"assets/assets/images/resume/rit.jpg": "0e2d171d2bfcb16aa93f11cfe9978907",
"assets/assets/images/resume/sr.jpg": "c7560ca55e85c83c8be27e701d219a66",
"assets/assets/images/resume/wavio.jpg": "fbae80282a0d8073122077602b539c66",
"assets/assets/images/resume/wtv.png": "53f7fe73248f9aabd52a85fd0299d07c",
"assets/FontManifest.json": "410d31bc2098d1ba267f5c7f0511fc2f",
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
"flutter_bootstrap.js": "2fd2b1b596465b43dcdbea257ff15bbb",
"icons/icon-192.png": "892f7b7231d42e6892677b03acb51c59",
"icons/icon-512.png": "03b6fb123f26bc62dc596da38092deb4",
"index.html": "bb274e4620215de95a3f1fe9353efd66",
"/": "bb274e4620215de95a3f1fe9353efd66",
"main.dart.js": "69a800714aeab6be244d4531ceb2ad9d",
"manifest.json": "f028aa2cccde2dd670a6fc9550f0f7eb",
"mlogo_sm.png": "133557b9179aa102c94a66039067ba6a",
"robots.txt": "908dd7e55b621e06574323a3f73ebb3e",
"sitemap.xml": "90904da680fb1d466f73532fc4e7b138",
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
