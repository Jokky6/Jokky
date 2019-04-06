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
    "revision": "7045932c458a596eb48a918839a597f3"
  },
  {
    "url": "assets/css/0.styles.d69413b7.css",
    "revision": "3b1b52cb71d218be7c02f0621cf860e0"
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
    "url": "assets/js/10.662fef85.js",
    "revision": "86acdda13d8a7802d696db0bc5d79a46"
  },
  {
    "url": "assets/js/11.dbc852b6.js",
    "revision": "23a16883d4eb61de9699b012d7e92b46"
  },
  {
    "url": "assets/js/12.7f0acf40.js",
    "revision": "206f90bd98219c2a7f8046444bb73c27"
  },
  {
    "url": "assets/js/13.95d88238.js",
    "revision": "cf573632630809bf047bb59931f547dd"
  },
  {
    "url": "assets/js/14.bdb8228e.js",
    "revision": "863675cf1e77b13a9abccb2b736b7bd9"
  },
  {
    "url": "assets/js/15.5f3ca849.js",
    "revision": "2be9c879bed8aedf1c778c5217e51b99"
  },
  {
    "url": "assets/js/16.0d5ff6de.js",
    "revision": "41e6a72d2354350a3ae2111bc1e37c43"
  },
  {
    "url": "assets/js/17.1876289f.js",
    "revision": "e93f808955ea1e2ee8f53901e22a42ae"
  },
  {
    "url": "assets/js/18.ca92e332.js",
    "revision": "0e1057b2f2eb341a6810aff9ba4e42f2"
  },
  {
    "url": "assets/js/3.565e84e2.js",
    "revision": "df9f80c71ec0bbf3705ebeca06c173bb"
  },
  {
    "url": "assets/js/4.775817f3.js",
    "revision": "abec093979f647c71dc5245621877d11"
  },
  {
    "url": "assets/js/5.69aef89c.js",
    "revision": "309743c11dde3d9f4f11c351c0b1514f"
  },
  {
    "url": "assets/js/6.a83a88bb.js",
    "revision": "e82fd44de35c6479230bd8a07f263e66"
  },
  {
    "url": "assets/js/7.8b3546c4.js",
    "revision": "6f0abad078f73a05d446454c7d89e60b"
  },
  {
    "url": "assets/js/8.ee389b59.js",
    "revision": "ee389e1942fe4bc1f6acdb0a53c3da7d"
  },
  {
    "url": "assets/js/9.17a5486e.js",
    "revision": "2a8d49697432b95ec6046498931cf654"
  },
  {
    "url": "assets/js/app.0dfb8267.js",
    "revision": "7fd408bc06428c441674bd6c4146b764"
  },
  {
    "url": "assets/js/vendors~docsearch.ab216e72.js",
    "revision": "8770d39e22338553dd791893cdb083e7"
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
    "revision": "95278cc3fb0511c0d313fc7aa118f505"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "a72d611b50225589e0eadd856ec0dbd6"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "98b5d20ce057055fab775654c7903c26"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "77b395c9ccab3eb6c4f4707c7541d7f3"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "f2f447be0672a44c5198c38fa487e65f"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "9abd2ab49700e50734724f624699de6b"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "495b12e95668ef9f66b04d541d74e5aa"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "7621265e87d7cb4cc8441e9907e0ed07"
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
