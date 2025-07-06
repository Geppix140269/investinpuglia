self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
});

self.addEventListener('fetch', (event) => {
  // For now, just pass through requests
  event.respondWith(fetch(event.request));
});
