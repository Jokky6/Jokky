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
    "revision": "23db6ecdce5092ba16ea91707a771f90"
  },
  {
    "url": "assets/css/0.styles.27fc3327.css",
    "revision": "4edd7825038992ec2185b62cb374eb98"
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
    "url": "assets/js/10.5a1f8b0d.js",
    "revision": "a48290f867b5c6c0fd1fca06aa532e2c"
  },
  {
    "url": "assets/js/11.45b4b735.js",
    "revision": "16cac1cf01a2c0da70bb54735cd3d41a"
  },
  {
    "url": "assets/js/2.e5a91bed.js",
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
    "url": "assets/js/8.0262be9a.js",
    "revision": "3936fe0ab5d7c9f7ec463b0446364825"
  },
  {
    "url": "assets/js/9.f2473414.js",
    "revision": "a32d5fd28acd9ee97f05e64e87cf4458"
  },
  {
    "url": "assets/js/app.bc580535.js",
    "revision": "afdb65d9029614ec1a3ec73d421e7f5d"
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
    "revision": "d08cf255d2bbead8b664673aacb34644"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "c7a52559044b1120498963abd445ddfd"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "11156b0f4074105f09c32059378244f1"
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
