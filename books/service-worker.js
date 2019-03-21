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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "56af89f4425b5b36cff142ea570ead4b"
  },
  {
    "url": "assets/css/0.styles.ce815ecb.css",
    "revision": "4f76694a84472f2dce5c382ea7e0ba35"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/2.8c3cb683.png",
    "revision": "8c3cb6831a80e597428d05cff372c5a4"
  },
  {
    "url": "assets/img/bottom-logo.385a53c5.png",
    "revision": "385a53c555d8bbd74606d693943ff0c8"
  },
  {
    "url": "assets/img/search.9e8df4f9.svg",
    "revision": "9e8df4f9a86c7d1f229aabc6c7f4f34b"
  },
  {
    "url": "assets/img/shijian.705a04f4.png",
    "revision": "705a04f41b43024fede26f69b95a7293"
  },
  {
    "url": "assets/img/yonghu.423e1b86.png",
    "revision": "423e1b860fa0bdf7199afa574e12130b"
  },
  {
    "url": "assets/js/2.e799166c.js",
    "revision": "59c4f5d431e7c64cb91c9a44ffc4c91d"
  },
  {
    "url": "assets/js/3.5cfaa790.js",
    "revision": "13f0f9aa38b7a7a867b70c9b203d7f7d"
  },
  {
    "url": "assets/js/4.dc92711b.js",
    "revision": "af8bfcd04711cb920d6ae3f7704875f3"
  },
  {
    "url": "assets/js/5.8fce0340.js",
    "revision": "b3f8bb90efa07648a1cf5f2443753eab"
  },
  {
    "url": "assets/js/6.a163458d.js",
    "revision": "d25615a38d0ee4d1711f7569431ef33e"
  },
  {
    "url": "assets/js/7.d40718e2.js",
    "revision": "a72efc5694c76596cfeb3d4bf8cb612c"
  },
  {
    "url": "assets/js/8.3089f7cc.js",
    "revision": "f0ff94a1ec29dff8270b76cbe5db5a29"
  },
  {
    "url": "assets/js/app.62fb27e5.js",
    "revision": "7404490f7906066b79101d954f71a492"
  },
  {
    "url": "e-books/index.html",
    "revision": "417b216f9e251d476176d10b78a84268"
  },
  {
    "url": "index.html",
    "revision": "af45e2a7cd39882b5fb058bef4cc2814"
  },
  {
    "url": "left-logo.png",
    "revision": "bbb8db95d83e8472a22907525dc5394e"
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
