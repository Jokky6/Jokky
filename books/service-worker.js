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
    "revision": "dad223641a2b07e848db669fe9d90708"
  },
  {
    "url": "assets/css/0.styles.8c08041a.css",
    "revision": "b0bc5fe64bba0abf1ad5ecbd5f18a771"
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
    "url": "assets/js/11.05df4057.js",
    "revision": "0f4ac878a016768302f37effaf66be9a"
  },
  {
    "url": "assets/js/12.f5a0cf90.js",
    "revision": "01323b23903fbcc0ddec5321f8352282"
  },
  {
    "url": "assets/js/13.1c57d061.js",
    "revision": "2e8965ed73c2afa4f7fd9971c51020fd"
  },
  {
    "url": "assets/js/14.6bbeb488.js",
    "revision": "4aa5dfd60f6d4131824e3d93076bedf6"
  },
  {
    "url": "assets/js/15.6f68d505.js",
    "revision": "6abb4e6b90b9109c3356061d3b3dfba0"
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
    "url": "assets/js/4.e911a146.js",
    "revision": "22631cf49dfc0a9c8db5066185e7eb08"
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
    "url": "assets/js/8.145ac72c.js",
    "revision": "76e815aca227e4fe3c3c609477a33ee4"
  },
  {
    "url": "assets/js/9.05d2b2d3.js",
    "revision": "f457e02a879a73609f0d3d0fa14289fc"
  },
  {
    "url": "assets/js/app.9e192788.js",
    "revision": "e97e1de486596f01e6a5ab913241a21e"
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
    "revision": "380b23822b5b696d27d3fe9f749b2917"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "678f8158baaa8ed9b40a71d1f37c87a8"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "2afa4211b8ea600b58f3fa59a7b184d8"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "1b7cc35ecc7df3adafd71b6d3ae295a3"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "a4d0febdcc2c4b4f10e18196f0bd1c98"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "1696a0187acfe09f4b827544921cfed1"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "3039bfebc5a50b62116b84e06f2791d0"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "3b792f42ee24f87979657a99dd386c66"
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
