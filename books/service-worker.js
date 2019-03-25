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
    "revision": "047d8a30b33fecd7e4beb2638031d00b"
  },
  {
    "url": "assets/css/0.styles.994016af.css",
    "revision": "04b8e7e63d13777f43a1a8a2a72e6065"
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
    "url": "assets/js/10.b1b60deb.js",
    "revision": "631414803d353c8e7c3b35e480eaf216"
  },
  {
    "url": "assets/js/11.a87c01f6.js",
    "revision": "d483b1a4313cdcca519a1ff80f1b9e78"
  },
  {
    "url": "assets/js/12.39fc6040.js",
    "revision": "ab1b1d470876c460c42b6f3a63dce586"
  },
  {
    "url": "assets/js/13.88211c82.js",
    "revision": "e5d5b698748be448cb7e54c5b12f5d92"
  },
  {
    "url": "assets/js/14.3540f6e7.js",
    "revision": "e2ad060d8914c84d1f615b3875e270b1"
  },
  {
    "url": "assets/js/15.1d1d102b.js",
    "revision": "bb883e54f9c85df7e51a72a5d36d1116"
  },
  {
    "url": "assets/js/16.5a6fee8f.js",
    "revision": "f5abf4073cc85a8b0035a365aaa8ef74"
  },
  {
    "url": "assets/js/2.f5240b3b.js",
    "revision": "fb1231919d2b8a536277d650aec392bf"
  },
  {
    "url": "assets/js/3.d93a36c0.js",
    "revision": "ff705c6aa1fe2554ec043fd2feb1097c"
  },
  {
    "url": "assets/js/4.17c1d6e1.js",
    "revision": "c9156e7c0f0c711278d4f790cbf74b42"
  },
  {
    "url": "assets/js/5.5bc11f35.js",
    "revision": "6be30a853214b63d93a5b2040c1affee"
  },
  {
    "url": "assets/js/6.d705e3a9.js",
    "revision": "fa860cf89df797be51bb0e4020fe0ed6"
  },
  {
    "url": "assets/js/7.6265390f.js",
    "revision": "e46868ee79b9ce5b54e421d159daffd4"
  },
  {
    "url": "assets/js/8.5ad901eb.js",
    "revision": "8466ad2f60333db245a4a4672cd4f81e"
  },
  {
    "url": "assets/js/9.177f54ce.js",
    "revision": "8c5c81ae94aecab35d13c5e83957b5bb"
  },
  {
    "url": "assets/js/app.6059cf3e.js",
    "revision": "52516022f35ea3cb22e6e3c517eeb4c0"
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
    "revision": "51ca9425a599736cd75c122c3a22262d"
  },
  {
    "url": "lin/lin-cms/index.html",
    "revision": "119a441a6773f2affc8db9ed6524537a"
  },
  {
    "url": "lin/lin-cms/start/backend-demo.html",
    "revision": "894c44b37a4c6bfd3ad39cc321b89271"
  },
  {
    "url": "lin/lin-cms/start/frontend-demo.html",
    "revision": "69141394bc7000c14f415caee7868001"
  },
  {
    "url": "lin/lin-cms/start/index.html",
    "revision": "23256fb45d85058d81a7d60db77750fc"
  },
  {
    "url": "lin/lin-cms/start/vue-client.html",
    "revision": "1f628668eb12c1ba2f7f86e9480e5e71"
  },
  {
    "url": "lin/lin-ui/index.html",
    "revision": "e4c379312d3fafee4647bd401b2c2eb5"
  },
  {
    "url": "lin/Other/Linux/index.html",
    "revision": "fcd8f2daa0482fda63f658fac72ddbfb"
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
