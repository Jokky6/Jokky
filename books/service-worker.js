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
    "revision": "b6822a12cdea3c546b468e4220a4bc1e"
  },
  {
    "url": "assets/css/0.styles.2a8782c7.css",
    "revision": "502669d7282da55963173c4c198bbb68"
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
    "url": "assets/img/WX20190325-013137@2x.b20a4247.png",
    "revision": "b20a4247e7ca21b26de838b8f213f47e"
  },
  {
    "url": "assets/img/WX20190325-013154@2x.68d247ea.png",
    "revision": "68d247eaa5a60bec4a1567966b4ca824"
  },
  {
    "url": "assets/img/WX20190325-014406@2x.3064c0bf.png",
    "revision": "3064c0bf59a9b6bdaa1c6c690b423dc3"
  },
  {
    "url": "assets/img/WX20190325-015644@2x.0f61747c.png",
    "revision": "0f61747c3e0c3daa9706f75bde27904c"
  },
  {
    "url": "assets/img/WX20190325-050935@2x.fb35489a.png",
    "revision": "fb35489aa503973efa362a1b27b1bf33"
  },
  {
    "url": "assets/img/WX20190325-054609@2x.d63e4123.png",
    "revision": "d63e412305b066501e7c64f10f318e81"
  },
  {
    "url": "assets/img/WX20190326-001811@2x.fe3eb9f2.png",
    "revision": "fe3eb9f2c8b4310e42b74097e63da3a1"
  },
  {
    "url": "assets/img/WX20190326-053055@2x.bdf17616.png",
    "revision": "bdf17616cda0290297f924d8717157ac"
  },
  {
    "url": "assets/js/10.11423f22.js",
    "revision": "3c5dcd5d7316858ebc2afba03a79c2df"
  },
  {
    "url": "assets/js/11.b39427f7.js",
    "revision": "a20b662459a30ce0234eb9dc51ffab45"
  },
  {
    "url": "assets/js/12.b05aa42c.js",
    "revision": "80649e79b110c348b51dbdcd2a2cb726"
  },
  {
    "url": "assets/js/13.d3a913a5.js",
    "revision": "d7740cc7aef11597346e0bcc9869118c"
  },
  {
    "url": "assets/js/14.d4e56aa0.js",
    "revision": "94f6294e2c4fbe453779c599dff55e3e"
  },
  {
    "url": "assets/js/3.d43a0c3c.js",
    "revision": "1e8af8b3702f1441ea11e22974fadeca"
  },
  {
    "url": "assets/js/4.38d3f626.js",
    "revision": "e23f6a4c13af1e10660938706d518281"
  },
  {
    "url": "assets/js/5.2465af4c.js",
    "revision": "c444a67770c1f261e54ac1f4993ec507"
  },
  {
    "url": "assets/js/6.1c8bbaa2.js",
    "revision": "41b00369e467511ea3b5a596512a5a6f"
  },
  {
    "url": "assets/js/7.709575de.js",
    "revision": "dbcff8ff60269ad8bd1e5abfe6542928"
  },
  {
    "url": "assets/js/8.7213d32b.js",
    "revision": "ed931c043796960998c6cb15fbc2b453"
  },
  {
    "url": "assets/js/9.5c7e3274.js",
    "revision": "5465918f3dec2476571534832f572668"
  },
  {
    "url": "assets/js/app.ca0a6894.js",
    "revision": "fd3ae0fd476cf8dc7854b14c858ccc9b"
  },
  {
    "url": "assets/js/vendors~docsearch.160d4e43.js",
    "revision": "b0f3c2d2a0c580d57c8f33a91be3debb"
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
    "revision": "de92fb1cc5d4f635d93ff7b88ad6595d"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "6ad30a78d1223d800050bf4a8fa3ff2e"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "401b52d51e65b4912732c2aed734a2cd"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "9df2653bf7668f167bdad6ecc20c44bd"
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
