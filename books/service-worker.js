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
    "revision": "cad5e2871f635b3d831b1edab7e56304"
  },
  {
    "url": "assets/css/0.styles.58206f7d.css",
    "revision": "8de491e844c6a8ba41639bc88326fa04"
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
    "url": "assets/js/10.41feade1.js",
    "revision": "3c824449d091d24bcf40674e2d1108e1"
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
    "url": "assets/js/13.0499355d.js",
    "revision": "c8a118fe5bc36b4f1173d07d8fd49f9e"
  },
  {
    "url": "assets/js/14.574c2935.js",
    "revision": "fe70c5234233e401e83d3cb498f8501f"
  },
  {
    "url": "assets/js/15.cb2682d5.js",
    "revision": "bd19915fafc8b559a10ddb8a13e37f36"
  },
  {
    "url": "assets/js/16.5a6fee8f.js",
    "revision": "f5abf4073cc85a8b0035a365aaa8ef74"
  },
  {
    "url": "assets/js/2.93b1b02b.js",
    "revision": "71fc61a12ac92da2b7e4b3b6fd7fa26f"
  },
  {
    "url": "assets/js/3.59d83098.js",
    "revision": "fd04363954961f41fbeda7637420afc8"
  },
  {
    "url": "assets/js/4.043c4833.js",
    "revision": "06caac1d5c41bf15ec93d534e9f6c3f3"
  },
  {
    "url": "assets/js/5.b3f3a4d7.js",
    "revision": "15357cbe6fb8c8f94f4fa2d36e7b4b0f"
  },
  {
    "url": "assets/js/6.3ee58764.js",
    "revision": "f5a73feb81e0c590c2959a84f4c60964"
  },
  {
    "url": "assets/js/7.d1be467d.js",
    "revision": "ca82c3eb40b87e5de0a74c7c6e4568e4"
  },
  {
    "url": "assets/js/8.df49fae9.js",
    "revision": "70a77554db967a1608ac52fb0662c666"
  },
  {
    "url": "assets/js/9.c0b6b338.js",
    "revision": "b676e9a79cdfafa4c8edc31ba8ab0c91"
  },
  {
    "url": "assets/js/app.8436792d.js",
    "revision": "3c907e629fecb2f1c23489e08f1cd3b8"
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
    "revision": "7b78df679904a440469fd049729e2a71"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "802667d2ba834318d51840278ad2f617"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "e683a9f36fdd4c1bdcd26f818b811e70"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "46f0245e08640d78f6a13f06f0b575b3"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "fe5a15107fb570a0a09834851f4a5cd0"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "da86da2af08f2108a5a2681654be040f"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "f8464ac53c09bcb57c3be65e28992fc2"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "690d91b7b15790be0c3fe0fb08693faa"
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
