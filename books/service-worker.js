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
    "revision": "935ff734aa7f3100889c0d69e0e26e03"
  },
  {
    "url": "assets/css/0.styles.060a01c6.css",
    "revision": "d18f85e2fcbcb9b8719f2e26d25a776a"
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
    "url": "assets/js/11.b343409b.js",
    "revision": "034d22f3c81d6ca48dd807eb51a339b1"
  },
  {
    "url": "assets/js/12.aa7662d2.js",
    "revision": "c8334bbe1458739a83f0a270e9c4e4b1"
  },
  {
    "url": "assets/js/13.63fd3b19.js",
    "revision": "7528f812de198002d4eba180df4b15de"
  },
  {
    "url": "assets/js/14.d7d59f28.js",
    "revision": "c180f155f9a17b5926508fffa695e812"
  },
  {
    "url": "assets/js/15.459a9e72.js",
    "revision": "85dbbdd3860c71901ee2039d53aa6607"
  },
  {
    "url": "assets/js/3.241e1b3f.js",
    "revision": "8f9a12d9335d95c8dd36b572911174dc"
  },
  {
    "url": "assets/js/4.7efd4af8.js",
    "revision": "41ce691da274798032a09f5e61362e80"
  },
  {
    "url": "assets/js/5.5906ef27.js",
    "revision": "2a394c7002d0da59484fc96d56ba2dcd"
  },
  {
    "url": "assets/js/6.80416797.js",
    "revision": "1a87344e0ca18f40d9e5427bf9d04bd5"
  },
  {
    "url": "assets/js/7.265cbb2b.js",
    "revision": "f15d678ae30cb82552d9eac191796889"
  },
  {
    "url": "assets/js/8.acaad64f.js",
    "revision": "1fd6d0d5c1122b1e755f7915f5c61579"
  },
  {
    "url": "assets/js/9.019446b2.js",
    "revision": "fd75cd99517cd5639236cfd2bee6dcb7"
  },
  {
    "url": "assets/js/app.d6092815.js",
    "revision": "1daa62de62a02cbe2ab8352ddfa0b97c"
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
    "revision": "849562c1f6aa488856349f479907ab17"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "8418a4016a29bd945b32d24c7ee9b7a0"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "6c9fc727603c83f243c01cd397b780ba"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "e26fc3bd8b02ebbfe0488316e1bbb47e"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "19811f5aece27dc890cd35b6020299fd"
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
