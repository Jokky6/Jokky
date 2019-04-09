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
    "revision": "19ab501a770a033abb5716d05fbc6158"
  },
  {
    "url": "assets/css/0.styles.91170e99.css",
    "revision": "c5c3f8c9eba4d08ddb2d19bda3e5baf5"
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
    "url": "assets/js/10.4f3339ba.js",
    "revision": "3b2d45f9c5ed9b628f83623968c62d47"
  },
  {
    "url": "assets/js/11.840e3805.js",
    "revision": "934d3720687d4950ce08dc2a56641b6b"
  },
  {
    "url": "assets/js/12.8a13b8d1.js",
    "revision": "a094c4e9873d7fe848cab641d57344c0"
  },
  {
    "url": "assets/js/13.c7f8beef.js",
    "revision": "a68e251cee9eeb0e0b092c3e1cc4e339"
  },
  {
    "url": "assets/js/14.d4e56aa0.js",
    "revision": "94f6294e2c4fbe453779c599dff55e3e"
  },
  {
    "url": "assets/js/3.3d54ed85.js",
    "revision": "9bcd097e3fbc7c8ba4bf0b4ab750e0be"
  },
  {
    "url": "assets/js/4.50b186db.js",
    "revision": "ea2eed12008779a4924c51776954e254"
  },
  {
    "url": "assets/js/5.3705dfa8.js",
    "revision": "1e52549e645cdc7d5e9bb4e9730e633f"
  },
  {
    "url": "assets/js/6.06957dcb.js",
    "revision": "52de37deeeb637114c0bdbc010191507"
  },
  {
    "url": "assets/js/7.b5143820.js",
    "revision": "746a15f0c84cf2762707436eb1b94515"
  },
  {
    "url": "assets/js/8.2f884280.js",
    "revision": "9aad4f7ef31ff3f73c1c34cb0ffedd13"
  },
  {
    "url": "assets/js/9.1b4b44f0.js",
    "revision": "34c4c898ac8dd97536dc8b2ea3796883"
  },
  {
    "url": "assets/js/app.ffdc2bb4.js",
    "revision": "cc6095edc11868d0ce537e04590a2c52"
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
    "revision": "fc217fa024fe1fef3179ec8c25bebfba"
  },
  {
    "url": "lin/lin-ui/eleven/eleven.html",
    "revision": "5403865db4c5018767a977ac654fb18f"
  },
  {
    "url": "lin/lin-ui/eleven/index.html",
    "revision": "202a0162e53658dc5f3d29fed430673d"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "ceaefc8abb6f78c4c65a01ba3213ca74"
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
