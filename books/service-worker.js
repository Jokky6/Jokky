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
    "revision": "cd0e16610ff82d0c38f3a3b00b6cf851"
  },
  {
    "url": "assets/css/0.styles.725cd855.css",
    "revision": "33c70a91c3d431fce1ec05e9a8ebd064"
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
    "url": "assets/js/10.8b386354.js",
    "revision": "7cadb5a450f2ec3d6ae3a1b4e5b781d7"
  },
  {
    "url": "assets/js/11.ff721602.js",
    "revision": "5d174a2d5efe8156f8ab570f2b8972ad"
  },
  {
    "url": "assets/js/12.b9bd204f.js",
    "revision": "a77a2542bfbddabb387eb2143a6f8b6d"
  },
  {
    "url": "assets/js/13.e4b8d67d.js",
    "revision": "797a20ff6270cd6e66e0a0c8466eb482"
  },
  {
    "url": "assets/js/14.0083ffa0.js",
    "revision": "e0093e160593e670d54c60f165088585"
  },
  {
    "url": "assets/js/15.9d6ec5ab.js",
    "revision": "ac37e2b9af861719dca6539d6f767cdf"
  },
  {
    "url": "assets/js/16.3cbd6649.js",
    "revision": "2cc9ce79da2c9d6b9ad0e11f0c632f8f"
  },
  {
    "url": "assets/js/17.bcc9ab28.js",
    "revision": "50a0b401aec166a7624e615d14bd5ceb"
  },
  {
    "url": "assets/js/3.f18e9e73.js",
    "revision": "a563de0f030202f41f56a50a117a40f6"
  },
  {
    "url": "assets/js/4.240ca3fd.js",
    "revision": "207ce5d9a6e20d16f704e07ec417c3c9"
  },
  {
    "url": "assets/js/5.158da4b0.js",
    "revision": "62ca605253297096720ded7bdd51ebba"
  },
  {
    "url": "assets/js/6.6aeab054.js",
    "revision": "567a2802c6ebde08c4a42a120f8ddcca"
  },
  {
    "url": "assets/js/7.c6f008a3.js",
    "revision": "f464171febcca7f9f22d2d5b2d49e6a3"
  },
  {
    "url": "assets/js/8.a9fa3695.js",
    "revision": "e91fcc8528750689672247da8f69b6a7"
  },
  {
    "url": "assets/js/9.ad29f79c.js",
    "revision": "a57ffc6d62d27f7ec7fb862c614b30ec"
  },
  {
    "url": "assets/js/app.2cec18c3.js",
    "revision": "b8c1ce15c4a98f086182773c7f43e413"
  },
  {
    "url": "assets/js/vendors~docsearch.408a77b9.js",
    "revision": "34f1624e3011cc83ac493de78cb1c453"
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
    "revision": "c3201b065a839b4a6178e298667b8288"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "eba1d911224e42274cf98da4829885d7"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "38ecc1677b82164b11039fa20789664e"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "3d2759844139e7bcfabc2b779758ea0e"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "6dbae9d77db56865062aad6d93bfa8f1"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "b39ae68ec346f93be16f40181f8d0329"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "ec58e8e3be683b3a8324591d292faa2e"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "220426191795d8580cb712724dbf6e78"
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
