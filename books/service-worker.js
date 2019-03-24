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
    "revision": "85cf3a0af4fde601126d611acdacd891"
  },
  {
    "url": "about/index.html",
    "revision": "949a70476790a8e44af61a82482996f6"
  },
  {
    "url": "assets/css/0.styles.d1bbd58c.css",
    "revision": "f867f6468c7a6e397ceb12aaee94ba08"
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
    "url": "assets/js/10.b1ab9e4c.js",
    "revision": "b444cb342285f7b5902fc4632ad3188a"
  },
  {
    "url": "assets/js/11.ecf731ec.js",
    "revision": "8d35bff1a110cf1034c23cf5d62c71e6"
  },
  {
    "url": "assets/js/12.ae192297.js",
    "revision": "1874f3adc740bdf118ef7faa97ce5295"
  },
  {
    "url": "assets/js/13.e9dde9be.js",
    "revision": "c687e817c2033efe33f7d7ea93d94b12"
  },
  {
    "url": "assets/js/14.733d9b26.js",
    "revision": "23a4d3c5a0f2615cab40be0a26b3d2dc"
  },
  {
    "url": "assets/js/15.b4139ab3.js",
    "revision": "5ff409f289125ea119c5c3791891e2ec"
  },
  {
    "url": "assets/js/16.88ac9dd7.js",
    "revision": "b8d1297c1140340be58b4abf4e0e60fa"
  },
  {
    "url": "assets/js/17.bcc9ab28.js",
    "revision": "50a0b401aec166a7624e615d14bd5ceb"
  },
  {
    "url": "assets/js/2.c87e7357.js",
    "revision": "da66a8f1ee68a0a57d033d8748f57300"
  },
  {
    "url": "assets/js/3.2658f5f4.js",
    "revision": "dee0b7d3204d1393d22b62a35a12e84a"
  },
  {
    "url": "assets/js/4.3c8c1467.js",
    "revision": "ba0235af9c9b7f5f335c1c064b6c5b81"
  },
  {
    "url": "assets/js/5.a22a1b4c.js",
    "revision": "2f530caefae1d45dcb0d6648b547a3a9"
  },
  {
    "url": "assets/js/6.ceae2ed8.js",
    "revision": "c056f32ff8fb5e664b3fd036ab80048b"
  },
  {
    "url": "assets/js/7.c33c2782.js",
    "revision": "66fede8ddb05f1168a1de2da9f853571"
  },
  {
    "url": "assets/js/8.99952e1e.js",
    "revision": "7a1c3f3a4eb23c81f144fc9d94d7210d"
  },
  {
    "url": "assets/js/9.dc96bc84.js",
    "revision": "3c7491478f39a7dacbc2852dd50f2720"
  },
  {
    "url": "assets/js/app.cfc40420.js",
    "revision": "4fe93d4d9bfab87abe8f1a91d60356b2"
  },
  {
    "url": "blog/Java/index.html",
    "revision": "851fee9b65bfd1319652b34acec2eaa3"
  },
  {
    "url": "friends/index.html",
    "revision": "323bb63e9b5cd79fbfb790349cb40585"
  },
  {
    "url": "hero.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
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
    "revision": "a6d7d92be9bf89ab39097b822fa709fd"
  },
  {
    "url": "logo.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "project/index.html",
    "revision": "e06c6f06646c2954dad0bbd43c9a6636"
  },
  {
    "url": "project/qduoj-add-problem.html",
    "revision": "b2487026a9f9dbc0d83fdba540bbf541"
  },
  {
    "url": "share/book/index.html",
    "revision": "8aad5848840c16ad375d0d56e6613e75"
  },
  {
    "url": "share/software/index.html",
    "revision": "0831c4d12eed24891ab2424399821419"
  },
  {
    "url": "share/software/index2.html",
    "revision": "4d069cd7e3a467c591afa00382df3e0d"
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
