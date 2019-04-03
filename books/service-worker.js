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
    "revision": "cc7c8404319a328be8ae8ae3b9ef5b3a"
  },
  {
    "url": "assets/css/0.styles.4f6dbaa2.css",
    "revision": "11f430e96837b3cae16cc249391810e1"
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
    "url": "assets/js/12.b9bd204f.js",
    "revision": "a77a2542bfbddabb387eb2143a6f8b6d"
  },
  {
    "url": "assets/js/13.d814bbeb.js",
    "revision": "76c666e3351b46644643d3537b145ff4"
  },
  {
    "url": "assets/js/14.e7bd46b2.js",
    "revision": "5d60b1bc326d86135f2b961251356470"
  },
  {
    "url": "assets/js/15.d878afa4.js",
    "revision": "3d227e993d2f47b348e6da126c470896"
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
    "url": "assets/js/3.7d34d0f1.js",
    "revision": "45606e5448d3fcae1064690cee79f8cf"
  },
  {
    "url": "assets/js/4.240ca3fd.js",
    "revision": "207ce5d9a6e20d16f704e07ec417c3c9"
  },
  {
    "url": "assets/js/5.32a75027.js",
    "revision": "39bdec1fde5ab9b0b6e7cc59feeb2deb"
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
    "url": "assets/js/app.9e038d0d.js",
    "revision": "d60d4b9b7373641506fa492db98c034d"
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
    "revision": "954b3c310e1422a190bbf2c863a301b0"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "8321b0d5eb8d3acec07f85ac5f98319f"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "ffe1ea443b9714e681917167c9b6aac5"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "5b7998d77ec2bd7fb8c0d7856ec2d857"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "e4830bce3dc299f4cdc5b41a4747f41c"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "ba825c00627e907be539f62a176a1258"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "45b089eba7eace4def9baaf70789666e"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "37ce994320a514f506f287acf2c68e57"
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
