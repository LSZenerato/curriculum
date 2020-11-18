const CACHE_NAME = "cache_v1";
const urlsToCache = [
  "./",
  "./offline",
  "./index",
  "./onepage",
  "./home",
  "./tecnicas",
  "./contato",
  "./manifest.json",
  "./static/avatar.webp",
  "./static/next_logo.webp",
  "./static/pwa.webp",
  "./static/react_logo.webp",
  "./static/typescript.webp",
];

self.addEventListener("install", function (event) {
  const preLoaded = caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache));
  event.waitUntil(preLoaded);
});

this.addEventListener('fetch', function(event) {
  const response = caches.match(event.request)
    .then(match => match || fetch(event.request));
  event.respondWith(response);
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName.startsWith('pages-cache-') && staticCacheName !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});