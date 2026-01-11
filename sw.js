const CACHE_NAME = 'treinofacil-v5'; // ← MUDA VERSÃO = força update
const ASSETS = [
  './', './index.html', './treino.html', './calculadora.html', './muaythai.html', './chat_ia.html',
  './style.css', './tmb.css', './script.js', './script_tmb.js',
  './img/logo_treinoFacil.png', './manifest.json', './audio/gong-sound2.mp3'
];

// ✅ INSTALAÇÃO: Cache + ativa IMEDIATAMENTE
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => {
      // FORÇA ativa nova versão SEM esperar
      return self.skipWaiting();
    })
  );
});

// ✅ ATIVAÇÃO: Limpa VELHO + assume controle
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key); // Deleta cache antigo
          }
        })
      );
    }).then(() => {
      // Assume controle de TODAS as abas imediatamente
      return self.clients.claim();
    })
  );
});

// ✅ FETCH: SEMPRE versão mais nova
self.addEventListener('fetch', (e) => {
  e.respondWith(
    // Tenta cache primeiro (rápido), se não acha na internet
    caches.match(e.request).then((response) => {
      return response || fetch(e.request).then((netResponse) => {
        // Salva na cache para próxima vez
        const clone = netResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, clone);
        });
        return netResponse;
      });
    }).catch(() => {
      // Offline fallback
      return caches.match('./index.html');
    })
  );
});
