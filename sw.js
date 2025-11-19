/* esversion: 6 */

const OFFLINE_VERSION = '{{{version}}}'

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open('jauc')

    await cache.addAll([
      '/jauc/',
      '/jauc/impressum.html',
      '/jauc/index.html',
      '/jauc/favicon.ico',
      '/jauc/manifest.json',
      '/jauc/css/jauc.css',
      '/jauc/css/styles.css',
      '/jauc/f7/css/framework7.bundle.min.css',
      '/jauc/f7/js/framework7.bundle.min.js',
      '/jauc/images/jaucicon-128.png',
      '/jauc/images/jaucicon-144.png',
      '/jauc/images/jaucicon-152.png',
      '/jauc/images/jaucicon-192.png',
      '/jauc/images/jaucicon-512.png',
      '/jauc/script/conversions.js',
      '/jauc/script/fomulas.js',
      '/jauc/script/globalization.js',
      '/jauc/script/localization.js',
      '/jauc/script/program.js',
      '/jauc/script/texts.js',
      '/jauc/script/translations.js',
      '/jauc/script/version.js'
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
