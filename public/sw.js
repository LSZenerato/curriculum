
const CACHE_NAME = "cache_v1";
const urlsToCache = ["/", "/index.html", "/offline.html", "/static"];

self.addEventListener("install", function (event) {
  const preLoaded = caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
  console.log('preLoaded', preLoaded);
});

this.addEventListener('fetch', function(event) {
  const response = caches.match(event.request)
    .then(match => match || fetch(event.request));
  event.respondWith(response);
  console.log('response', response);
});

this.addEventListener('activate', function(event) {
  var cacheWhitelist = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});