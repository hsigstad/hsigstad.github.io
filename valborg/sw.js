/* Valborg PWA service worker — offline shell cache (stale-while-revalidate).
   Assets are served unencrypted; the encrypted pages decrypt client-side (staticrypt),
   so with "husk meg" the key sits in localStorage and pages open offline too. */
const CACHE = 'valborg-v2';
const PRECACHE = [
  'index.html', 'manifest.webmanifest',
  'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(PRECACHE.map((u) => new Request(u, { cache: 'reload' }))).catch(() => {})
    )
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(r).then((cached) => {
      const net = fetch(r)
        .then((resp) => {
          if (resp && resp.status === 200) {
            const cp = resp.clone();
            caches.open(CACHE).then((c) => c.put(r, cp));
          }
          return resp;
        })
        .catch(() => cached);
      return cached || net;
    })
  );
});
