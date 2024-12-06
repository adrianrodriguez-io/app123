const CACHE_NAME = 'fumar-app-cache-v1';
const urlsToCache = ['index.html', 'styles.css', 'app.js', 'manifest.json'];

// Instalar Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Interceptar solicitudes y servir desde el caché
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});