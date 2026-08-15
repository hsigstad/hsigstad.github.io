/* Valborg PWA service worker.
   - HTML pages (navigations): NETWORK-FIRST → always fresh when online, cache as offline fallback.
     So the daily dashboard is current on every open without a hard refresh.
   - Static assets (icons, manifest): stale-while-revalidate → instant, refreshed in the background.
   Pages are staticrypt-encrypted; with "husk meg" the key sits in localStorage, so the cached copy
   still decrypts offline. */
const CACHE = 'valborg-v3';
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

function putInCache(req, resp) {
  if (resp && resp.status === 200) {
    const copy = resp.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return resp;
}

self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;

  const isHTML =
    r.mode === 'navigate' || (r.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // network-first: fresh page when online, cached copy (or the dashboard) when offline
    e.respondWith(
      fetch(r)
        .then((resp) => putInCache(r, resp))
        .catch(() => caches.match(r).then((c) => c || caches.match('index.html')))
    );
    return;
  }

  // static assets: stale-while-revalidate
  e.respondWith(
    caches.match(r).then((cached) => {
      const net = fetch(r).then((resp) => putInCache(r, resp)).catch(() => cached);
      return cached || net;
    })
  );
});
