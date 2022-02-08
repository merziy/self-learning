let cacheName = "hello-pwa";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js"];

/* Starts service worker then caches app content */
self.addEventListener("install", function (e) {
  e.waitUntul(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
