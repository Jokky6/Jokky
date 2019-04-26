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
    "revision": "edbb1b90269e0500ae00f4c3d2c266a0"
  },
  {
    "url": "assets/css/0.styles.64cbb034.css",
    "revision": "e9279dfaa7cd299e1b173bc59cea269f"
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
    "url": "assets/js/10.f4c95df1.js",
    "revision": "6c024c2d4ec39662aee8ef52bb633314"
  },
  {
    "url": "assets/js/11.cf50da57.js",
    "revision": "c5f89f10a9270a53761afe1b230ca1b2"
  },
  {
    "url": "assets/js/12.aa7662d2.js",
    "revision": "c8334bbe1458739a83f0a270e9c4e4b1"
  },
  {
    "url": "assets/js/13.e767d064.js",
    "revision": "722f621c453e3342369d81f8fa5f4f53"
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
    "url": "assets/js/3.bb5363a1.js",
    "revision": "344762bf8690e146d2f52a365020fe3a"
  },
  {
    "url": "assets/js/4.fb0755ff.js",
    "revision": "c7dc4271fdd34c6ace62528d2e5a5aa2"
  },
  {
    "url": "assets/js/5.3c3fba87.js",
    "revision": "412e415785314b3b784d6e6007309ce5"
  },
  {
    "url": "assets/js/6.0f58ec04.js",
    "revision": "11ecc2681cb17ac0d4522c00c0c15a09"
  },
  {
    "url": "assets/js/7.be6851f1.js",
    "revision": "a8aec1f1a3bfcf36a76def58345d9086"
  },
  {
    "url": "assets/js/8.5603aed8.js",
    "revision": "703f1a6bad9ba046deac1910c46df7ae"
  },
  {
    "url": "assets/js/9.b111c049.js",
    "revision": "36adb0fd0205c8839ce1fe640795c59d"
  },
  {
    "url": "assets/js/app.169f726c.js",
    "revision": "58ebbd4fcc55018e125055d01eadb02b"
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
    "revision": "ee62495ccbf9aae86d824eb3b87af3cb"
  },
  {
    "url": "left-logo.png",
    "revision": "2358790c96ddef2baf035cf186cff071"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "c20cbd887a689d4675f8a11650f9aea5"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "86deeafc7fa2f432258e69ba731f0ae6"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "886244e41f5d3010a8e07275c1be9b9a"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "d48e95a19018fa0e8764c0e7b234069c"
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
