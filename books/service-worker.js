/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3cb082afa42db12863d4c3b1ea1d5831"
  },
  {
    "url": "assets/css/0.styles.13f17951.css",
    "revision": "a98b73b49f6c4a00ea5238ebd27a4b4c"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a1995c33.js",
    "revision": "3be5db0285f4f6f5c544517430811524"
  },
  {
    "url": "assets/js/11.532578e2.js",
    "revision": "74a695300b57971a927c18f0e3c494a2"
  },
  {
    "url": "assets/js/12.c951d7ba.js",
    "revision": "a64c58624055d11ad0ad556c2ad655d2"
  },
  {
    "url": "assets/js/13.4bbd0f98.js",
    "revision": "ec5ffd64c0c1d8656bf1b838cc2d7497"
  },
  {
    "url": "assets/js/14.981dd42a.js",
    "revision": "8e0c085b9d92662bf0b6f8013dbc99f5"
  },
  {
    "url": "assets/js/15.c1067f7c.js",
    "revision": "a6a919959e4280127f17ed6981699628"
  },
  {
    "url": "assets/js/16.5a6fee8f.js",
    "revision": "f5abf4073cc85a8b0035a365aaa8ef74"
  },
  {
    "url": "assets/js/3.859957a3.js",
    "revision": "3d0aa476067fee9cad0382f8ec7ba836"
  },
  {
    "url": "assets/js/4.b3308145.js",
    "revision": "01c9ff7be9ecb7c8e026ac24ec5d0b59"
  },
  {
    "url": "assets/js/5.a0687886.js",
    "revision": "cb5c4f7c69814504d6428aa387d8fb8a"
  },
  {
    "url": "assets/js/6.3ee58764.js",
    "revision": "f5a73feb81e0c590c2959a84f4c60964"
  },
  {
    "url": "assets/js/7.b47ccbfc.js",
    "revision": "385c8746912eacf990e25856ea6497ae"
  },
  {
    "url": "assets/js/8.68f2e7ed.js",
    "revision": "f91e9a9d4619c87ceee964e4f04f581f"
  },
  {
    "url": "assets/js/9.fde5d5a1.js",
    "revision": "31c63bd4eaa6ea2be26a438763d43657"
  },
  {
    "url": "assets/js/app.b64ce061.js",
    "revision": "e15bb050873f3a6dbc467eae60e00660"
  },
  {
    "url": "assets/js/vendors~docsearch.8004a0c5.js",
    "revision": "2fd8902deee67ebceaa184762d557145"
  },
  {
    "url": "hero.png",
    "revision": "f67b895074c171679f8bde40b15f4039"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "79d4437a54e31342c27f5624020c100e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "424874ccb9a69b314f708a6dd6bda9d6"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "5c4507f84ad7374757de84dc3001ad94"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "735b5b2f827729fad403ea62420d19f9"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "20424e2b52094d4a60f4d75b8e354aa2"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "133330b63a0b7f97d425182961dc86bf"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "c65de4db477519a2d481bd2c60443644"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "c52960dabb718d8b136e7dcbe74ff8ec"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "b09660aedf237e7f0db2977723468e81"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
