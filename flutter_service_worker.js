'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "18c0e5fa7800b22d5f800f8df10509c1",
"favicon.ico": "90d720c1a7d012b0f3c06ac5eb861fa3",
"index.html": "49ec277c1b3f222c4d82b468b970af08",
"/": "49ec277c1b3f222c4d82b468b970af08",
"main.dart.js": "f22015225ab1966522122fa7f914ed13",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/icon-192.png": "666fe17d4535277714aa32c5bca6ce56",
"icons/Icon-maskable-192.png": "a724d08d492f94711c89a458d583e93b",
"icons/Icon-maskable-512.png": "f832c1ad7e220e6e6ce7944120eb9688",
"icons/icon-512.png": "140073da52c16a9c1e0a2dfdcb8c0eec",
"manifest.json": "f7b594522de21a83d043396614b790a3",
"assets/AssetManifest.json": "f5d5c044f80be54cf3f63a299df078ec",
"assets/NOTICES": "42c630af8c08de96c28f979887c1e7ea",
"assets/FontManifest.json": "9d150a2319139ed8ec549f7b3eb0adf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "465938884f70d83dff22eed9efc3c65d",
"assets/assets/images/main.jpeg": "3b1a425e7d89880537c41b747e71bdf2",
"assets/assets/images/reason2/1.jpeg": "cd486df5b13c1dcd302fa12ff9491382",
"assets/assets/images/reason2/6.jpeg": "a1b82275413bae1d60229039d2f56211",
"assets/assets/images/reason2/4.jpeg": "e4088e4dad22eec8b72cce592a14c6a0",
"assets/assets/images/reason2/5.jpeg": "5230106015ad6ac63b0f1bfb73e3daee",
"assets/assets/images/reason2/2.jpeg": "6b2cf1e62ef2b15c9b89540503ca8a3e",
"assets/assets/images/reason2/3.jpeg": "6c779cb3957ebe9f561cf40b328057aa",
"assets/assets/images/reason3/10.jpeg": "9ba41641dc3473fdb09936a8e3932fad",
"assets/assets/images/reason3/1.jpeg": "729aa8ff0f9095de536bf04476e3c61e",
"assets/assets/images/reason3/11.jpeg": "3a05c22e7394915a33e5d2f6acdf82fa",
"assets/assets/images/reason3/6.jpeg": "449c7969d2f6a4a22cd5df734957d6ce",
"assets/assets/images/reason3/7.jpeg": "fe2f87bd5983ffbe12faddf00d2645b9",
"assets/assets/images/reason3/8.jpeg": "9410ca45417c091bcf9e96ed98b21403",
"assets/assets/images/reason3/4.jpeg": "16ab21de3f6297b065c4777808500692",
"assets/assets/images/reason3/14.jpeg": "348c4098a7833f51841d7ad00522f022",
"assets/assets/images/reason3/5.jpeg": "4630954d8d03a913e1f26d26cc548a35",
"assets/assets/images/reason3/9.jpeg": "c03b3ca2ecd96f124c599b4810a045d1",
"assets/assets/images/reason3/2.jpeg": "de1db2602168d7b23e033c6fe96ef002",
"assets/assets/images/reason3/12.jpeg": "5ab217e04f9c230f083092a1dc22457b",
"assets/assets/images/reason3/13.jpeg": "82f23c330e340012cf6887dcff2342e1",
"assets/assets/images/reason3/3.jpeg": "36e6a43821030c9738b1c2ac600c1b1b",
"assets/assets/images/reason1/10.jpeg": "edf62d9b2189314813c3c56b1e2f4d1c",
"assets/assets/images/reason1/0.jpeg": "bd9719a428f392f71043bbb7f335d358",
"assets/assets/images/reason1/1.jpeg": "d3c9db133b2310ce8a2c1c57eac70326",
"assets/assets/images/reason1/11.jpeg": "14ce938db82f6f3351cad6a0e8fc083e",
"assets/assets/images/reason1/20.jpeg": "7756e2f048151d1a657730310cdc2581",
"assets/assets/images/reason1/16.jpeg": "f07c8c178459f23bef17c917027329e7",
"assets/assets/images/reason1/6.jpeg": "8568961764747075651d024b3b28ae1f",
"assets/assets/images/reason1/7.jpeg": "9160089efcb56a1426d5e57ea0aaf6b8",
"assets/assets/images/reason1/17.jpeg": "c4f8c50460ef95b9780b85ccb23f02c1",
"assets/assets/images/reason1/21.jpeg": "fea16fca476b8aecac8b10c3230e733e",
"assets/assets/images/reason1/8.jpeg": "38a779d5e51f2b680416da88b5d38a41",
"assets/assets/images/reason1/18.jpeg": "adda410e379821ab0b8fa1168b64b069",
"assets/assets/images/reason1/4.jpeg": "32cef3b8390af312c44cd354321bc744",
"assets/assets/images/reason1/14.jpeg": "6cf0ae201fc1e760b28120a82fd756ed",
"assets/assets/images/reason1/15.jpeg": "4adc85e6874b06ca80a5f957b842ff06",
"assets/assets/images/reason1/5.jpeg": "17cf2bce63f471734191c26dc4e40cfa",
"assets/assets/images/reason1/19.jpeg": "53b9ca1868a8f4516b7f9293e1d926d5",
"assets/assets/images/reason1/9.jpeg": "342e6966ffe1fd1a75d3155ccd003fc8",
"assets/assets/images/reason1/2.jpeg": "17e962d314b789fc140b910ccb38adf7",
"assets/assets/images/reason1/12.jpeg": "3c7cc6c51aaca6d8182196e2b5474eac",
"assets/assets/images/reason1/13.jpeg": "b91a434a5c83f6bdee3df17c2a0a9d3d",
"assets/assets/images/reason1/3.jpeg": "ee6f0961aa79098c4250cd2b36fa6d56",
"assets/assets/fonts/CookieRun%2520Black.ttf": "e34b3a3a57b661882166c48ca294f2c3",
"assets/assets/fonts/CookieRun%2520Bold.ttf": "b01731e0798bd4242f0b2a058601b173",
"assets/assets/fonts/CookieRun%2520Regular.ttf": "b6c8137dd2e215ed1aba2ebfc45c93c4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
