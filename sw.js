const CACHE = 'nowoneco-v3';
const STATIC = [
  '/nowoneco/',
  '/nowoneco/index.html',
  '/nowoneco/manifest.json',
  '/nowoneco/img/001.png',
  '/nowoneco/img/002.png',
  '/nowoneco/img/003.png',
  '/nowoneco/img/004.png',
  '/nowoneco/img/005.png',
  '/nowoneco/img/006.png',
  '/nowoneco/img/007.png',
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(c) { return c.addAll(STATIC); })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;

  var url = e.request.url;

  // Supabase API는 캐시 안 함
  if (url.indexOf('supabase.co') !== -1) return;

  // 구글 폰트 — 캐시 우선
  if (url.indexOf('fonts.gstatic.com') !== -1 || url.indexOf('fonts.googleapis.com') !== -1) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        return fetch(e.request).then(function(res) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
          return res;
        });
      })
    );
    return;
  }

  // HTML — 네트워크 우선, 오프라인이면 캐시
  if (e.request.destination === 'document') {
    e.respondWith(
      fetch(e.request).catch(function() {
        return caches.match('/nowoneco/');
      })
    );
    return;
  }

  // 나머지 정적 자산 — 캐시 우선
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request);
    })
  );
});
