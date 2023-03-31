var CACHE_NAME = 'portfolio-pwa-cache';
var cachelist = [
  '/',
  'images/about-header.jpg',
  'images/contact-image.jpg',
  'images/example-blog01.jpg',
  'images/example-blog02.jpg',
  'images/example-blog03.jpg',
  'images/example-blog04.jpg',
  'images/example-blog05.jpg',
  'images/example-blog06.jpg',
  'images/example-blog07.jpg',
  'images/example-work01.jpg',
  'images/example-work02.jpg',
  'images/example-work03.jpg',
  'images/example-work04.jpg',
  'images/example-work05.jpg',
  'images/example-work06.jpg',
  'images/example-work07.jpg',
  'images/example-work08.jpg',
  'images/example-work09.jpg',
  'images/footer-background.png',
  'images/header-bg.jpg',
  'images/logo.png',
  'images/photo-wide.jpg',
  'images/photo.jpg',
  'images/portfolio-example-01.jpg',
  'images/portfolio-example-02.jpg',
  'images/portfolio-example-03.jpg',
  'images/portfolio-example-04.jpg',
  'images/portfolio-example-05.jpg',
  'images/portfolio-example-06.jpg',
  'about.html',
  'blog.html',
  'contact.html',
  'index.html',
  'LICENSE',
  'manifest.json',
  'portfolio-example01.html',
  'styles.css',
  'Tutorial/step05-individual-pages/about.html',
  'Tutorial/step05-individual-pages/blog.html',
  'Tutorial/step05-individual-pages/contact.html',
  'Tutorial/step05-individual-pages/index.html',
  'Tutorial/step05-individual-pages/portfolio-example01.html',
  'Tutorial/step01-initial-HTML-setup.html',
  'Tutorial/step02-MDL-layout-component.html',
  'Tutorial/step03-the-grid-component.html',
  'Tutorial/step04-customising-the-layout.html',
  'Tutorial/styles.css',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(cachelist);
      })
  );
});

self.addEventListener