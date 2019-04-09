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
    "revision": "925a9c92f706a5df039edcf9d4c90766"
  },
  {
    "url": "assets/css/0.styles.114a7fc4.css",
    "revision": "21c341f6c51f2641e901286465d745f4"
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
    "url": "assets/js/11.a414be14.js",
    "revision": "20028490c16d8ccaa690ae3f2c31785d"
  },
  {
    "url": "assets/js/12.0600b764.js",
    "revision": "f78e71eb015046be79f353e1d4237fca"
  },
  {
    "url": "assets/js/13.315663cf.js",
    "revision": "93d4f4d8324beca6df8c2234a22e0978"
  },
  {
    "url": "assets/js/14.d4e56aa0.js",
    "revision": "94f6294e2c4fbe453779c599dff55e3e"
  },
  {
    "url": "assets/js/3.ed840197.js",
    "revision": "ff9bb33265d4972393d310e3d1454b8c"
  },
  {
    "url": "assets/js/4.50b186db.js",
    "revision": "ea2eed12008779a4924c51776954e254"
  },
  {
    "url": "assets/js/5.0c5c7f18.js",
    "revision": "0237c5fac6f9b88c779bdc1a7b6bebb2"
  },
  {
    "url": "assets/js/6.a0469b0c.js",
    "revision": "eb0a52511ddc34839c9e21b211ea6b4a"
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
    "url": "assets/js/app.d176ac16.js",
    "revision": "b286a64f04da2a2915710e43d2082b62"
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
    "revision": "4541003213adf3a32b89d13ea6e12494"
  },
  {
    "url": "lin/lin-ui/eleven/eleven.html",
    "revision": "6ca05b044a27fc65a48bd8c88b1215f1"
  },
  {
    "url": "lin/lin-ui/eleven/index.html",
    "revision": "d3dfb09b4b3ea705416736df5b3c18a4"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "46ff191b5fb1ba8e8e10291517ff6863"
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
