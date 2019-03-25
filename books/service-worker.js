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
    "revision": "56ac1c8819bfe065a63d46ece63684c1"
  },
  {
    "url": "assets/css/0.styles.55e1598e.css",
    "revision": "703d1936394e3a758dec72c6517ee1bb"
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
    "url": "assets/js/10.c64fec72.js",
    "revision": "14c64bf251e6de6c13cd7908e16db345"
  },
  {
    "url": "assets/js/11.05df4057.js",
    "revision": "0f4ac878a016768302f37effaf66be9a"
  },
  {
    "url": "assets/js/12.ec5394af.js",
    "revision": "7688850421e220e34532075fe5f37677"
  },
  {
    "url": "assets/js/13.245bc381.js",
    "revision": "95296b9b9b3cb9381a89f9a2fb0b7ddd"
  },
  {
    "url": "assets/js/14.981dd42a.js",
    "revision": "8e0c085b9d92662bf0b6f8013dbc99f5"
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
    "url": "assets/js/2.f5240b3b.js",
    "revision": "fb1231919d2b8a536277d650aec392bf"
  },
  {
    "url": "assets/js/3.d93a36c0.js",
    "revision": "ff705c6aa1fe2554ec043fd2feb1097c"
  },
  {
    "url": "assets/js/4.4ba2023e.js",
    "revision": "f71cac989f7e491ce4a4e91e7a1c28a1"
  },
  {
    "url": "assets/js/5.af68c644.js",
    "revision": "618d2a06553a369da9991356aec64ae8"
  },
  {
    "url": "assets/js/6.e8900b9f.js",
    "revision": "e16cc72ee284a3df3c346c57b3c700b3"
  },
  {
    "url": "assets/js/7.6265390f.js",
    "revision": "e46868ee79b9ce5b54e421d159daffd4"
  },
  {
    "url": "assets/js/8.312178b5.js",
    "revision": "cd183f0d152b975a4aece45f82125f8e"
  },
  {
    "url": "assets/js/9.5d349e15.js",
    "revision": "022c24896965ae9a0bf145953f6fbf00"
  },
  {
    "url": "assets/js/app.550bc3a5.js",
    "revision": "fa91c4a05c43a7002c265eeca358097c"
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
    "revision": "c6bfe9051b11dbf4fdf4257d56ba0641"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "ca6b3c64eb586e9f04845a02cbd63dab"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "cb65162f25795b212f07b0024b747f05"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "58897dba83362beb0ce0f42e9aa8b9a2"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "69cec3113079c6163edbb5eb1c215ea0"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "5cafb87cbba6426ff5a27bc0bc5fb2fb"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "f57d9707e2666a5b66aaab1750c40861"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "5c8e7a84a4733dfea2ba9c32f5d310f4"
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
