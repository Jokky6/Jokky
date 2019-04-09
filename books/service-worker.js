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
    "revision": "607667e28e97d10d4912a3964a9cb2e7"
  },
  {
    "url": "assets/css/0.styles.998c828d.css",
    "revision": "73e7b85fc63cbe2f1217225375ccfb3a"
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
    "url": "assets/js/11.a71aadaf.js",
    "revision": "d19e9fd2bad562f7454cfd0a128f49a7"
  },
  {
    "url": "assets/js/12.6f591146.js",
    "revision": "7e8ad12109be11220815d070656b1503"
  },
  {
    "url": "assets/js/13.d3a913a5.js",
    "revision": "d7740cc7aef11597346e0bcc9869118c"
  },
  {
    "url": "assets/js/14.d4e56aa0.js",
    "revision": "94f6294e2c4fbe453779c599dff55e3e"
  },
  {
    "url": "assets/js/3.d223d4bc.js",
    "revision": "8f9a12d9335d95c8dd36b572911174dc"
  },
  {
    "url": "assets/js/4.0b9149bb.js",
    "revision": "7b883e0fd913bbda388b5a68ee1fcaca"
  },
  {
    "url": "assets/js/5.f2624721.js",
    "revision": "ebf85972bc2c3890b93c4a3f1a623743"
  },
  {
    "url": "assets/js/6.fba1e825.js",
    "revision": "0ec3223a038165163f3005f00b1d6643"
  },
  {
    "url": "assets/js/7.c1db600b.js",
    "revision": "9bc92a2d251b3c5ee26775d2827cdef6"
  },
  {
    "url": "assets/js/8.8cc261fd.js",
    "revision": "bfcfe6b41b0d9d0b9dc38fad37c92d02"
  },
  {
    "url": "assets/js/9.b6f718d8.js",
    "revision": "bffe5ad3040c9f0d8dbebe09ac5d8b1d"
  },
  {
    "url": "assets/js/app.5a808c7e.js",
    "revision": "ae28863fa5d824b41c19267168b2d69c"
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
    "revision": "f6efa16697c1e57626e1e0f221b1cd50"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "6c030b0571412c5da0f937842f54448a"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "aa293df439aca8dd172447eb099bad53"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "c80f85b286fc1d2890b0963c46770c2e"
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
