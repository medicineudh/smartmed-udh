// Minimal service worker so phones treat SMART Med UDH as an installable app.
// It does not cache anything: the page always loads fresh from the server.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
