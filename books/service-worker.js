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
    "revision": "74b863e850e930328768bdbb0dc7145b"
  },
  {
    "url": "assets/css/0.styles.2cf48a88.css",
    "revision": "962d9ce5ab5adc6ffdff44116cb55af1"
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
    "url": "assets/img/WX20190325-013137@2x.b20a4247.png",
    "revision": "b20a4247e7ca21b26de838b8f213f47e"
  },
  {
    "url": "assets/img/WX20190325-013154@2x.68d247ea.png",
    "revision": "68d247eaa5a60bec4a1567966b4ca824"
  },
  {
    "url": "assets/img/WX20190325-015644@2x.0f61747c.png",
    "revision": "0f61747c3e0c3daa9706f75bde27904c"
  },
  {
    "url": "assets/img/WX20190325-050935@2x.fb35489a.png",
    "revision": "fb35489aa503973efa362a1b27b1bf33"
  },
  {
    "url": "assets/img/WX20190326-001811@2x.fe3eb9f2.png",
    "revision": "fe3eb9f2c8b4310e42b74097e63da3a1"
  },
  {
    "url": "assets/img/WX20190326-053055@2x.bdf17616.png",
    "revision": "bdf17616cda0290297f924d8717157ac"
  },
  {
    "url": "assets/js/10.4534c697.js",
    "revision": "40c18b456feadd49681f84ad0359bb38"
  },
  {
    "url": "assets/js/11.07c13162.js",
    "revision": "59c7a0cd9b5f3c22d869e685ed39d431"
  },
  {
    "url": "assets/js/12.ca112674.js",
    "revision": "c319548a9aa074e1556e6f9a1af2bfaf"
  },
  {
    "url": "assets/js/13.75aaf4b4.js",
    "revision": "40800a07430727fd2c24b8cbc99312ce"
  },
  {
    "url": "assets/js/14.5e21be32.js",
    "revision": "05d5ae9fa1ec5f24b7569dfae3d1667c"
  },
  {
    "url": "assets/js/15.459a9e72.js",
    "revision": "85dbbdd3860c71901ee2039d53aa6607"
  },
  {
    "url": "assets/js/3.a9684c8e.js",
    "revision": "e08dd0c44fdfde9febdf920d6f9f938f"
  },
  {
    "url": "assets/js/4.a1ee9ef5.js",
    "revision": "3315fc8b5f84c9314218a9173184cdbf"
  },
  {
    "url": "assets/js/5.c5d197ff.js",
    "revision": "b16173f5c63352a1860f48004ad83f24"
  },
  {
    "url": "assets/js/6.80416797.js",
    "revision": "1a87344e0ca18f40d9e5427bf9d04bd5"
  },
  {
    "url": "assets/js/7.c1db600b.js",
    "revision": "9bc92a2d251b3c5ee26775d2827cdef6"
  },
  {
    "url": "assets/js/8.6181b919.js",
    "revision": "c579f5ffe47987bdec6da3d74ae921e2"
  },
  {
    "url": "assets/js/9.019446b2.js",
    "revision": "fd75cd99517cd5639236cfd2bee6dcb7"
  },
  {
    "url": "assets/js/app.9033df0c.js",
    "revision": "a4d9e90ddd0e02d887a57987f67e5858"
  },
  {
    "url": "assets/js/vendors~docsearch.7830e583.js",
    "revision": "d1279f79fbf4a2914eb085d0f212d64f"
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
    "revision": "02299b04288e2ab075dc7c86f1706ff6"
  },
  {
    "url": "left-logo.png",
    "revision": "2358790c96ddef2baf035cf186cff071"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "851d27039b232184f995fb42cb0970cb"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "17f7be40f10a6d1cfbeef8e46ea1f0ee"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "2aeefcb95acf9d1332ebddd7e5594364"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "9528e6882b11f1deb21d5e979028883e"
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
