/* 4000 Essential English Word II — Service Worker */
const CACHE_NAME = 'word-ii-v7';
const CORE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './firebase-config.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Network-only: Firebase, Google APIs, dictionary audio
  if (
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('firebaseio.com') ||
    url.hostname.includes('cloudflare.com') ||
    url.hostname.includes('dictionaryapi.dev') ||
    /\.mp3($|\?)/i.test(url.pathname + url.search)
  ) {
    e.respondWith(fetch(req).catch(() => new Response('', { status: 503 })));
    return;
  }
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith(fetch(req).then(res => { const c = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, c)); return res; }).catch(() => caches.match(req)));
    return;
  }
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const c = res.clone(); caches.open(CACHE_NAME).then(cache => cache.put(req, c));
        }
        return res;
      }).catch(() => req.mode === 'navigate' ? caches.match('./index.html') : new Response('Offline', { status: 503 }));
    }));
  }
});
