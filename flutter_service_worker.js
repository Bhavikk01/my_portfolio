'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4d8f3a98e3a795316dfc1ffceb495313",
"assets/assets/images/education-experience.svg": "30e4ff8b15f572c0b85d64e6ed065afe",
"assets/assets/images/email-98.svg": "a8610c7acf24821119dd4e45aa6a0a2b",
"assets/assets/images/experienceImage/flames.jpg": "349b4ac24b80c1f91ef10c43a05bde6f",
"assets/assets/images/experienceImage/pickit.jpg": "3464b1e158786bb59878559de0040c15",
"assets/assets/images/headphone-23.svg": "e3cff2d8ac48ca2911ed0091f1ef09c1",
"assets/assets/images/instagram-54.svg": "96d59cecee08f8110080521c4a3eeda6",
"assets/assets/images/linked-in-7.svg": "0eb38788dab37f9a0bdf8d5212a86a78",
"assets/assets/images/my_profile.jpg": "125850ac9983f5d034564a7ef02829ab",
"assets/assets/images/projectImage/color_picker.jpg": "0628f3ce7af7d1d869cc0d4c53b06f66",
"assets/assets/images/projectImage/food_delivery.jpg": "933f87eddcc4068a76c9a7d298b2b4c9",
"assets/assets/images/projectImage/music_learning.jpg": "cad213d1667eb2a81139dfd493e19596",
"assets/assets/images/projectImage/radio.jpg": "d5c8440de96c33afb3bbdb641b5c73b4",
"assets/assets/images/projectImage/shopping_management.jpg": "dde5d4be9d76f6ecdba9e6da654bad3f",
"assets/assets/images/projectImage/video_downloader.jpg": "cc3823d3194a26e335246d9eb0a27d7e",
"assets/assets/images/skillsImage/clanguage.png": "91e59f095020562388f47169223b2a9c",
"assets/assets/images/skillsImage/cplus.png": "75e6447caf30d8f899bca271bf802472",
"assets/assets/images/skillsImage/dart.png": "73e7b5fa99d4364c0d7e75f7e4271cb7",
"assets/assets/images/skillsImage/express.png": "60abb331d5f6dd73fda2e1fd98446714",
"assets/assets/images/skillsImage/firebase.png": "d97e2a1451bd7c8412885b105d634f38",
"assets/assets/images/skillsImage/flutter.png": "6956a4a68696cf94d8db16530bc39686",
"assets/assets/images/skillsImage/github.png": "87b6661eb98c7a2071c56b75ef9a78f7",
"assets/assets/images/skillsImage/java.png": "3eb9466f203c6ace52615616e09fa415",
"assets/assets/images/skillsImage/javascript.png": "57cbd232ac707d34acb645b70b019aff",
"assets/assets/images/skillsImage/mongodb.png": "04b586c35dd76fbe54236400465980f0",
"assets/assets/images/skillsImage/node.png": "ff2415e856865dface0340518a548f1a",
"assets/assets/images/skillsImage/problem_solving.png": "072539319bc606f6538d74c645987512",
"assets/assets/images/skillsImage/sql.png": "e06a0e09dbbc329fe28bbd825c219da4",
"assets/assets/images/skillsImage/xml.png": "30b4a6f9624443bca986b46615f15351",
"assets/assets/images/whatsapp-14.svg": "87cc01df675a2028751888bf9efee8e6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "eb01148d341bd50bcc1b7b10f9dfc0b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c698a053c1b3fc4c50df3532330bd28",
"/": "9c698a053c1b3fc4c50df3532330bd28",
"main.dart.js": "32ec7603877288892963b91a0f38efe6",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
