/* esversion: 6 */

const OFFLINE_VERSION = '{{{version}}}'

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open('jauc')

    await cache.addAll([
      '/',
      '/impressum.html',
      '/index.html',
      '/favicon.ico',
      '/manifest.json',
      '/css/jauc.css',
      '/css/styles.css',
      '/f7/css/framework7.bundle.min.css',
      '/f7/js/framework7.bundle.min.js',
      '/images/jaucicon-128.png',
      '/images/jaucicon-144.png',
      '/images/jaucicon-152.png',
      '/images/jaucicon-192.png',
      '/images/jaucicon-512.png',
      '/script/conversions.js',
      '/script/fomulas.js',
      '/script/globalization.js',
      '/script/localization.js',
      '/script/program.js',
      '/script/texts.js',
      '/script/translations.js',
      '/script/version.js'
    ])

    console.log('install version: ' + OFFLINE_VERSION)
  })())
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
