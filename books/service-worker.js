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
    "revision": "bf5d5d0c3a7b4a0d9ffc4ca7f4add530"
  },
  {
    "url": "assets/css/0.styles.70944199.css",
    "revision": "087c7c66a65fd43a0bf2ae9cb0c33c50"
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
    "url": "assets/js/10.9bd69c38.js",
    "revision": "4e992f728097fc8cfc729b8b910e5b73"
  },
  {
    "url": "assets/js/11.10320616.js",
    "revision": "748b5bca0028fa05e9e6f31caa8904a6"
  },
  {
    "url": "assets/js/12.466dafdb.js",
    "revision": "55a7618077ff9a17b22bc18b60cf4cd7"
  },
  {
    "url": "assets/js/13.bf64ae10.js",
    "revision": "66710b150d2b3ea0dd2eadeb0051ab72"
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
    "url": "assets/js/16.89984da9.js",
    "revision": "5a4adb9cc161ec0eaaa8f3f7c004d3bb"
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
    "url": "assets/js/9.208a2488.js",
    "revision": "b91b569da4487823fbd8728e611f023a"
  },
  {
    "url": "assets/js/app.4220344d.js",
    "revision": "70a9a5177995c3d078a890d075a20e9f"
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
    "revision": "4e1fa46986fa5217ba32fb067e567575"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "1b9b969db6e23e79b2ff74dad28ad82c"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "4157a55493a6dacce4b882a22d68b947"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "ff213bd0bdc585bc832418e7dcff3c89"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "1f6d982c88987db74856cce3c0f351d3"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "aef21df9fd46a1c6fa6680e2eff2de2c"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "b868c2db42745248a89c1916846f2b80"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "874b373ac634360302c0e8d0e299269e"
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
