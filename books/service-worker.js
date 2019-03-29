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
    "revision": "3dfa1d34affe1016a940a1050eec55ec"
  },
  {
    "url": "assets/css/0.styles.40d95276.css",
    "revision": "109d0173623b563ca1300523279adbee"
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
    "url": "assets/js/10.b2e77ff2.js",
    "revision": "a0f9a727d470a363445eaae395fa7a10"
  },
  {
    "url": "assets/js/11.0e88b01a.js",
    "revision": "dbd7ba7a39c9116faf7769e0a8b44b32"
  },
  {
    "url": "assets/js/12.beb7ac72.js",
    "revision": "e4cecf4a8dc2ca74315de238fddde2f6"
  },
  {
    "url": "assets/js/13.ab958693.js",
    "revision": "3c123fd1261e5d14d1e505e90149b3ff"
  },
  {
    "url": "assets/js/14.a0a199fa.js",
    "revision": "ebbe4ae7f532af11290ac15720f55fa9"
  },
  {
    "url": "assets/js/15.20044dbd.js",
    "revision": "05dc6b8368fbb093dd6ca433fc839b1a"
  },
  {
    "url": "assets/js/16.8ce7a4e5.js",
    "revision": "fb78880241bf3a1f0d2302516840f9da"
  },
  {
    "url": "assets/js/17.bcc9ab28.js",
    "revision": "50a0b401aec166a7624e615d14bd5ceb"
  },
  {
    "url": "assets/js/3.6bb817a2.js",
    "revision": "1c38badd64fc7433070e1302862c387b"
  },
  {
    "url": "assets/js/4.4071865e.js",
    "revision": "02dc15a15a9f4933dd0f33a4e01ddf64"
  },
  {
    "url": "assets/js/5.0f54e4c7.js",
    "revision": "b6add6578755389649d70b503a04fb12"
  },
  {
    "url": "assets/js/6.585bffa5.js",
    "revision": "4b6eed3c69fa18c76e70cce1ee1ccbc3"
  },
  {
    "url": "assets/js/7.e91aa0fd.js",
    "revision": "9574b951062b54f8da0d18ddd8356a2c"
  },
  {
    "url": "assets/js/8.2f16e389.js",
    "revision": "a375fc65cd5543132fc1a2e57004fa9b"
  },
  {
    "url": "assets/js/9.c9f07dce.js",
    "revision": "f8d97180939ab137773845135d671ace"
  },
  {
    "url": "assets/js/app.8ec5f424.js",
    "revision": "b7846c8d9756978bb97e710244743f00"
  },
  {
    "url": "assets/js/vendors~docsearch.2556685e.js",
    "revision": "ffbf9b041d3bb09d4139bee7d049b695"
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
    "revision": "5054c4e28a32f887f092599c957b4797"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "ebd02370f409a358abe1e843e1eacd19"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "3f3b2d20592b32cf53144cbf3daf4637"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "1bff3454e29c327f3879a60521fbb3e9"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "d0551d90b329be4c14baa523e4d3922b"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "deab45e6a68590e06e05e3251eab116f"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "68373d1af7137101b9a845f023d19744"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "011fa8cfff186b21fd7567d60d901368"
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
