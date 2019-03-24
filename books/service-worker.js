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
    "revision": "f9afadbeadfc7aacf1fe448d66f0240d"
  },
  {
    "url": "assets/css/0.styles.c5ffdc27.css",
    "revision": "3384522203078ea8508d4adeb27b7519"
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
    "url": "assets/js/10.dc7cf2f5.js",
    "revision": "a839bea9a55c50de654f2df5f8efff76"
  },
  {
    "url": "assets/js/11.45b4b735.js",
    "revision": "16cac1cf01a2c0da70bb54735cd3d41a"
  },
  {
    "url": "assets/js/2.19218c5d.js",
    "revision": "8c65f24e32f4d00b73565a3d8b06f953"
  },
  {
    "url": "assets/js/3.2658f5f4.js",
    "revision": "dee0b7d3204d1393d22b62a35a12e84a"
  },
  {
    "url": "assets/js/4.fb44fc03.js",
    "revision": "4bf4460ed2af4be80011e825d204f76f"
  },
  {
    "url": "assets/js/5.dcbbb8a1.js",
    "revision": "b52193d45426c9a32f75bbd00934c506"
  },
  {
    "url": "assets/js/6.ceae2ed8.js",
    "revision": "c056f32ff8fb5e664b3fd036ab80048b"
  },
  {
    "url": "assets/js/7.c33c2782.js",
    "revision": "66fede8ddb05f1168a1de2da9f853571"
  },
  {
    "url": "assets/js/8.99952e1e.js",
    "revision": "7a1c3f3a4eb23c81f144fc9d94d7210d"
  },
  {
    "url": "assets/js/9.608a87b8.js",
    "revision": "92d65b18fb13902a04aad7312d76da76"
  },
  {
    "url": "assets/js/app.7dcaabe3.js",
    "revision": "e19e196beebbe52a6e8c25e28ab155c7"
  },
  {
    "url": "hero.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
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
    "revision": "37fe056aa6a3f8e849deb9573c58aca5"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "d8dbb1a75ba149e914fd853546485e5f"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "4d039f490b48c3266908e2f923f245ae"
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
