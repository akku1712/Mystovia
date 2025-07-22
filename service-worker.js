const CACHE_NAME = "mystovia-v1";
const assets = [
  "index.html","creature.html","world.html","ai-portal.html","about.html",
  "gallery.html","contact.html",
  "style.css","main.js","manifest.json",
  "abyssal-wyrm.jpg","fire-phoenix.jpg","moon-dragon.jpg",
  "landscape-1.jpg","landscape-2.jpg","magical-map.jpg","mystovia-logo.png"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
