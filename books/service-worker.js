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
    "revision": "e4a825ebfb105771808adcf63189f468"
  },
  {
    "url": "assets/css/0.styles.82f44635.css",
    "revision": "0d951047efc192355df23fac755128b3"
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
    "url": "assets/img/WX20190325-015644@2x.0f61747c.png",
    "revision": "0f61747c3e0c3daa9706f75bde27904c"
  },
  {
    "url": "assets/img/WX20190325-050935@2x.fb35489a.png",
    "revision": "fb35489aa503973efa362a1b27b1bf33"
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
    "url": "assets/js/10.f4c95df1.js",
    "revision": "6c024c2d4ec39662aee8ef52bb633314"
  },
  {
    "url": "assets/js/11.199c4470.js",
    "revision": "8bb171d21bcc68760b3dcf7a249d7a77"
  },
  {
    "url": "assets/js/12.daf3e087.js",
    "revision": "78af0d270e13ae4518734d777b189687"
  },
  {
    "url": "assets/js/13.421cb30c.js",
    "revision": "de9a94e6aad58167c291edd6ed94c751"
  },
  {
    "url": "assets/js/14.43160a2b.js",
    "revision": "eaef72ed7b4743302befc25ce9b31502"
  },
  {
    "url": "assets/js/15.459a9e72.js",
    "revision": "85dbbdd3860c71901ee2039d53aa6607"
  },
  {
    "url": "assets/js/3.b7cebe0d.js",
    "revision": "d6f3a7e4a4babe0d0b549ac5e8f085ee"
  },
  {
    "url": "assets/js/4.3c6254cb.js",
    "revision": "f97f6af944f65bb9bb2b599f7d28c407"
  },
  {
    "url": "assets/js/5.3c3fba87.js",
    "revision": "412e415785314b3b784d6e6007309ce5"
  },
  {
    "url": "assets/js/6.0748b768.js",
    "revision": "5383e399f36bf6ebf017a4faa3b94c9c"
  },
  {
    "url": "assets/js/7.be6851f1.js",
    "revision": "a8aec1f1a3bfcf36a76def58345d9086"
  },
  {
    "url": "assets/js/8.5603aed8.js",
    "revision": "703f1a6bad9ba046deac1910c46df7ae"
  },
  {
    "url": "assets/js/9.b111c049.js",
    "revision": "36adb0fd0205c8839ce1fe640795c59d"
  },
  {
    "url": "assets/js/app.85f1e8d1.js",
    "revision": "a60ec258197e4abfebc39c2749e9d5a4"
  },
  {
    "url": "assets/js/vendors~docsearch.7830e583.js",
    "revision": "d1279f79fbf4a2914eb085d0f212d64f"
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
    "revision": "b40bb4c5fad562cf428cbf7a3832e8cc"
  },
  {
    "url": "left-logo.png",
    "revision": "2358790c96ddef2baf035cf186cff071"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "387acabda0f8f8ccd9e6467e1516c4b0"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "f5d95d0ac2a844ea366a13a7060169cc"
  },
  {
    "url": "lin/lin-ui/tutorial/eleven.html",
    "revision": "bbeedc011224e3bf6ef571d51a5e9b03"
  },
  {
    "url": "lin/lin-ui/tutorial/index.html",
    "revision": "d2c291747d36d84fa6c900f846bff359"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  },
  {
    "url": "more.png",
    "revision": "a3c4e1b56468f569202e9d42218aa61f"
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
