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
    "revision": "9ba13a4c6690501536f57bb126f7929e"
  },
  {
    "url": "assets/css/0.styles.6722f0ae.css",
    "revision": "c55fb7aa8282d9deb83b5a7d5063011b"
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
    "url": "assets/js/11.2906b8b0.js",
    "revision": "bf1728f925b13ae7300eddaf9af550a9"
  },
  {
    "url": "assets/js/12.fe4ed381.js",
    "revision": "065a59c60085f6a4d870475721898aac"
  },
  {
    "url": "assets/js/13.75aaf4b4.js",
    "revision": "40800a07430727fd2c24b8cbc99312ce"
  },
  {
    "url": "assets/js/14.98c0e27a.js",
    "revision": "cbb65e2d216aba29223eb1826905f126"
  },
  {
    "url": "assets/js/15.459a9e72.js",
    "revision": "85dbbdd3860c71901ee2039d53aa6607"
  },
  {
    "url": "assets/js/3.7a976473.js",
    "revision": "8946f9e18e0bd45de36dd7bd09c0b215"
  },
  {
    "url": "assets/js/4.97e178a2.js",
    "revision": "4d3a1d97db32d704d947a3249d1de07b"
  },
  {
    "url": "assets/js/5.3c3fba87.js",
    "revision": "412e415785314b3b784d6e6007309ce5"
  },
  {
    "url": "assets/js/6.d35dd0c8.js",
    "revision": "96865572b5f6d5c01d1b07c0fdf1a613"
  },
  {
    "url": "assets/js/7.513fd046.js",
    "revision": "e203095497d1c6690f71aba278f3d778"
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
    "url": "assets/js/app.c615c576.js",
    "revision": "ce192555a1d48a6166c0c4e522ca0969"
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
    "revision": "506d07a4a36cf90019f4f98cba4777e1"
  },
  {
    "url": "left-logo.png",
    "revision": "2358790c96ddef2baf035cf186cff071"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "193e37d278d9f32a923c49773860302b"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "dac585e00cc742ab30dbfb90fabf7821"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "f4d2aecb46d2822c473cba0b737475be"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "3a5ac3fdacb16103d478600eccd40339"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  },
  {
    "url": "more.png",
    "revision": "a3c4e1b56468f569202e9d42218aa61f"
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
