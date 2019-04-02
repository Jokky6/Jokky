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
    "revision": "fb5c72f82dfa7b18155dbe39adea2147"
  },
  {
    "url": "assets/css/0.styles.e68d49c7.css",
    "revision": "77b61b4e8e57c2f0c59b43d08c10144b"
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
    "url": "assets/js/10.211ec74b.js",
    "revision": "11ba39b49d5b25adf1eec81267e321e3"
  },
  {
    "url": "assets/js/11.c0a9e827.js",
    "revision": "ff647621fa9d32f83c1659c73f16e29c"
  },
  {
    "url": "assets/js/12.e5deedbe.js",
    "revision": "1b433e9786c2d7a96fdb4525a1b9d431"
  },
  {
    "url": "assets/js/13.b239fcb9.js",
    "revision": "bebaf3c8d9ecbe080d53515c708e4afc"
  },
  {
    "url": "assets/js/14.03c73378.js",
    "revision": "8c467348cd46e4bdd8a82e429360352b"
  },
  {
    "url": "assets/js/15.3a9ff6a0.js",
    "revision": "f1cbd179353deee7109e200c8a902569"
  },
  {
    "url": "assets/js/16.5a6fee8f.js",
    "revision": "f5abf4073cc85a8b0035a365aaa8ef74"
  },
  {
    "url": "assets/js/3.918291a6.js",
    "revision": "3d0aa476067fee9cad0382f8ec7ba836"
  },
  {
    "url": "assets/js/4.09f38f88.js",
    "revision": "f2dd967c912b40014db90a0a27dc7e26"
  },
  {
    "url": "assets/js/5.9876be25.js",
    "revision": "afd0e5abb7615eebe1347d324602b156"
  },
  {
    "url": "assets/js/6.594a6a1f.js",
    "revision": "22d614a581d279ef25b05f0e93caf58b"
  },
  {
    "url": "assets/js/7.b47ccbfc.js",
    "revision": "385c8746912eacf990e25856ea6497ae"
  },
  {
    "url": "assets/js/8.e6502c92.js",
    "revision": "6a32aa5a66970446d703daac733559b3"
  },
  {
    "url": "assets/js/9.fde5d5a1.js",
    "revision": "31c63bd4eaa6ea2be26a438763d43657"
  },
  {
    "url": "assets/js/app.e3da983c.js",
    "revision": "0dc02d6d977b30fce98ba59ef6a788a0"
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
    "revision": "8a92b6ed78c70f3eabbda196adc80108"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "5da73f470d43cab02f1c37e2430bd3cb"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "4a2fb2d77604b5f354aa37f9e571069d"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "96104276658a3cd78f05f50aaa6ebb34"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "ba10ee912bcf70281d777d9d9d050073"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "1e7884803632094860d09d3bb834e09c"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "60197f0f77c5c46a1e81aa03f2eb7312"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "ec66296f4c50aebf381f943a24d72549"
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
