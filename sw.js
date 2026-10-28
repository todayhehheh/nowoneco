const CACHE = 'nowoneco-v7';
const STATIC = [
  '/nowoneco/',
  '/nowoneco/index.html',
  '/nowoneco/style.css',
  '/nowoneco/app.js',
  '/nowoneco/manifest.json',
  '/nowoneco/img/001.webp',
  '/nowoneco/img/002.webp',
  '/nowoneco/img/003.webp',
  '/nowoneco/img/004.webp',
  '/nowoneco/img/005.webp',
  '/nowoneco/img/006.webp',
  '/nowoneco/img/007.webp',
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

  // Supabase Storage 이미지 — 캐시 우선 (파일명이 매번 새로 생성돼서
  // 한번 올라간 사진은 안 바뀌니까 다시 받아올 필요가 없어요)
  if (url.indexOf('/storage/v1/object/public/') !== -1) {
    e.respondWith(
      caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        return fetch(e.request).then(function(res) {
          if (res && res.ok) {
            var clone = res.clone();
            caches.open(CACHE).then(function(c) { c.put(e.request, clone); });
          }
          return res;
        });
      })
    );
    return;
  }

  // 나머지 Supabase API(REST/Auth)는 캐시 안 함 — 항상 최신 데이터 필요
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

  // 사이트 자체 파일은 네트워크 우선: 새 디자인을 바로 보여주고 오프라인 때만 캐시 사용
  if (new URL(e.request.url).origin === self.location.origin) {
    e.respondWith(
      fetch(e.request).then(function(res) {
        if (res && res.ok) {
          var clone = res.clone();
          caches.open(CACHE).then(function(c) { return c.put(e.request, clone); });
        }
        return res;
      }).catch(function() { return caches.match(e.request); })
    );
    return;
  }

  // 다른 정적 자산 — 캐시 우선
  e.respondWith(caches.match(e.request).then(function(cached) {
    return cached || fetch(e.request);
  }));
});
