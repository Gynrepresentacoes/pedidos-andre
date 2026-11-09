// O app mudou para https://gynrepresentacoes.github.io/. Este service worker substitui o antigo
// (do endereço /pedidos-andre/), se desliga e leva quem abrir o app antigo para o endereço novo.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(self.registration.unregister()
    .then(() => self.clients.matchAll({ type: 'window' }))
    .then(cs => cs.forEach(c => c.navigate('https://gynrepresentacoes.github.io/'))));
});
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(Response.redirect('https://gynrepresentacoes.github.io/', 302));
});
