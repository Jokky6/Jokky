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
    "revision": "1a5f8b4972fe8849a727ef4f168c0925"
  },
  {
    "url": "assets/css/0.styles.edc4c42d.css",
    "revision": "45b464593641653bf06184f43e88892d"
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
    "url": "assets/js/11.418fdddb.js",
    "revision": "8439b3346acdda30c1f0abdb08b537b1"
  },
  {
    "url": "assets/js/12.907319cb.js",
    "revision": "7f67e2d4fdc45a3d21f0000f89b33bb3"
  },
  {
    "url": "assets/js/13.63fd3b19.js",
    "revision": "7528f812de198002d4eba180df4b15de"
  },
  {
    "url": "assets/js/14.245800a0.js",
    "revision": "c88b36f1fc1d151fd2256191e62cf70d"
  },
  {
    "url": "assets/js/15.459a9e72.js",
    "revision": "85dbbdd3860c71901ee2039d53aa6607"
  },
  {
    "url": "assets/js/3.d962469a.js",
    "revision": "e08dd0c44fdfde9febdf920d6f9f938f"
  },
  {
    "url": "assets/js/4.a1ee9ef5.js",
    "revision": "3315fc8b5f84c9314218a9173184cdbf"
  },
  {
    "url": "assets/js/5.01676479.js",
    "revision": "1f66bb70b5a65c09846bcdbd08e23660"
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
    "url": "assets/js/app.f0446cb4.js",
    "revision": "8409ec3df9d1ebd07ddc2071b8a55e17"
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
    "revision": "cb06663879f386d9ba4da9d5c6e71659"
  },
  {
    "url": "left-logo.png",
    "revision": "2358790c96ddef2baf035cf186cff071"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "3dbca9948d1d2e370e3c5bb1083d327b"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "7ddec032f1f09063216498ed0dd43e60"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "06a34244e7c8b7368996c8f8ea7ab431"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "acadf3c01c4f96c4643dd98b9cc336b4"
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
