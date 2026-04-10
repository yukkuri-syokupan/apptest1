const CACHE_NAME = 'pwa-cache-v1';

// インストール時にキャッシュを作成（今回は最小限）
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./index.html']);
    })
  );
});

// ネットワーク要求があった時にキャッシュをチェック
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
