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
    "revision": "a332f722073e996f53afa70036a8a67f"
  },
  {
    "url": "assets/css/0.styles.57a41889.css",
    "revision": "a8955eb7a1e8ae5a415cac8bfd8559bf"
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
    "url": "assets/js/10.979ef0c5.js",
    "revision": "a9439da72f7109f220223cb75df36c86"
  },
  {
    "url": "assets/js/11.c0a9e827.js",
    "revision": "ff647621fa9d32f83c1659c73f16e29c"
  },
  {
    "url": "assets/js/12.403f2a62.js",
    "revision": "4789370d6f94e2054aa69b2eacf2dee0"
  },
  {
    "url": "assets/js/13.0499355d.js",
    "revision": "c8a118fe5bc36b4f1173d07d8fd49f9e"
  },
  {
    "url": "assets/js/14.03c73378.js",
    "revision": "8c467348cd46e4bdd8a82e429360352b"
  },
  {
    "url": "assets/js/15.966049e2.js",
    "revision": "2f9a06d2b70b9b360ea5e6a6fe641531"
  },
  {
    "url": "assets/js/16.5a6fee8f.js",
    "revision": "f5abf4073cc85a8b0035a365aaa8ef74"
  },
  {
    "url": "assets/js/3.2d04e3d6.js",
    "revision": "3d0aa476067fee9cad0382f8ec7ba836"
  },
  {
    "url": "assets/js/4.b3308145.js",
    "revision": "01c9ff7be9ecb7c8e026ac24ec5d0b59"
  },
  {
    "url": "assets/js/5.a0687886.js",
    "revision": "cb5c4f7c69814504d6428aa387d8fb8a"
  },
  {
    "url": "assets/js/6.3ee58764.js",
    "revision": "f5a73feb81e0c590c2959a84f4c60964"
  },
  {
    "url": "assets/js/7.b47ccbfc.js",
    "revision": "385c8746912eacf990e25856ea6497ae"
  },
  {
    "url": "assets/js/8.d1847a82.js",
    "revision": "56618c0fb8d0bc3d78a3d2fc0d3b23cb"
  },
  {
    "url": "assets/js/9.5d349e15.js",
    "revision": "022c24896965ae9a0bf145953f6fbf00"
  },
  {
    "url": "assets/js/app.def3bffe.js",
    "revision": "3e34c6b151f58e592f3a10b4630b69b2"
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
    "revision": "966be06669cd0bac7d9f828d1ce10da3"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "24be936db6574bf0d30718f129b3e3c4"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "cd5e9f0c4b07ba399c484b51333ca12b"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "99032441903cb0eaa83d06ff4a39210b"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "763742c6b821b9454d70dc3a71aa8eb7"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "86da484586ddecf51a6e1867f4f65ab8"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "5c2bf5f19b3c708b37e4797568e74200"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "9d1cd8015f2fb94358f3c31fdd432337"
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
