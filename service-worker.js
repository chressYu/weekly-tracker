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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "299541b869bdfae29fec88c465ecc6ad"
  },
  {
    "url": "articles-template.html",
    "revision": "48a770d20af9a6a684621b579a3e924d"
  },
  {
    "url": "assets/css/0.styles.75f1e615.css",
    "revision": "5d227091aa4235ee9b88c2e91fa884c0"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/bg.a382c67a.svg",
    "revision": "a382c67ad2cb860076c270502b258bb1"
  },
  {
    "url": "assets/js/1.12f2c4fd.js",
    "revision": "8cb765a59abd183aec0c0a596b08aded"
  },
  {
    "url": "assets/js/10.c1ac867e.js",
    "revision": "3ffe0c37f6d1ef8a5f30d40602bd6acb"
  },
  {
    "url": "assets/js/11.d6542dd9.js",
    "revision": "304274ec199b713e41f4ea208bf27a5d"
  },
  {
    "url": "assets/js/12.788a3c48.js",
    "revision": "2cc450a642eb63a216cbf38c64b2dcc9"
  },
  {
    "url": "assets/js/13.16cac26a.js",
    "revision": "f3cef4266837b6cdac429b2005d03cbd"
  },
  {
    "url": "assets/js/14.87b08f6a.js",
    "revision": "c34476c0d095b4451be373aca8e2b71c"
  },
  {
    "url": "assets/js/15.83233e68.js",
    "revision": "43dc8aa53126cb04c67202a5c24f2c74"
  },
  {
    "url": "assets/js/16.f287cf2d.js",
    "revision": "7b7a1e274eba6436cb84622fb843ce8f"
  },
  {
    "url": "assets/js/17.01d2d2b6.js",
    "revision": "2ceb9acdcc3a75bfabd66614485ef1d9"
  },
  {
    "url": "assets/js/18.53a7d1f1.js",
    "revision": "cbd09298ca2482bc818d5d6ae3533845"
  },
  {
    "url": "assets/js/19.a4eaa72f.js",
    "revision": "0ec8d0ac1280ba9e9719b51e41f06841"
  },
  {
    "url": "assets/js/2.d2beb245.js",
    "revision": "6e3afad2d8e7bed5085e8c089e493f8a"
  },
  {
    "url": "assets/js/20.874f4d74.js",
    "revision": "78da86b9ed2c8a1b0d6070255c17a511"
  },
  {
    "url": "assets/js/21.95143036.js",
    "revision": "f0134ece0b65a1a9e6c9a76190c813f8"
  },
  {
    "url": "assets/js/22.4a9b5b0f.js",
    "revision": "8f7629381d80dfb0c5a60cfa9250ae29"
  },
  {
    "url": "assets/js/23.9e178b69.js",
    "revision": "4e4d13bf754f4cde92a09e3c091b520a"
  },
  {
    "url": "assets/js/24.0eb378ef.js",
    "revision": "4f6c255b33ba07fd86df33edd93b9189"
  },
  {
    "url": "assets/js/25.9bfffe2b.js",
    "revision": "c7bc9ba0f6b8c7abc196ed41758f3730"
  },
  {
    "url": "assets/js/26.ecd0f04d.js",
    "revision": "e8ab0850175f61d9b7e21c62bd36f403"
  },
  {
    "url": "assets/js/27.3ef52370.js",
    "revision": "99b93669ccc5a8f50acdf69a318070c6"
  },
  {
    "url": "assets/js/28.d86d94c9.js",
    "revision": "78e2e3289cdcf7979afb255f8241614c"
  },
  {
    "url": "assets/js/29.969304b2.js",
    "revision": "1dff3660605bc56116304078870b3d2e"
  },
  {
    "url": "assets/js/30.07cc6c2d.js",
    "revision": "93abf373e665a48aeffd61b2311a7080"
  },
  {
    "url": "assets/js/31.da2d70ec.js",
    "revision": "be7c01f24e40bc96f0de7a23bdf95b0f"
  },
  {
    "url": "assets/js/32.01f0ae46.js",
    "revision": "d1f3be18d043bdba335514df70220123"
  },
  {
    "url": "assets/js/33.4aaaef7b.js",
    "revision": "f109ecd9be6c6f2bd4381cb45e0b1547"
  },
  {
    "url": "assets/js/34.010cded7.js",
    "revision": "24b19580787f5334fbaa583308fe8c94"
  },
  {
    "url": "assets/js/35.c73945ec.js",
    "revision": "ebb7e21c2aad01c058039f19176a2e9c"
  },
  {
    "url": "assets/js/36.02077d01.js",
    "revision": "f79b513456ad75fd3a7304893ce3b37a"
  },
  {
    "url": "assets/js/37.e12cbbeb.js",
    "revision": "a4c5797fb7c9f6f24a1f4061e9d60882"
  },
  {
    "url": "assets/js/38.2074ca8f.js",
    "revision": "d7ae79e0b154e02fc00db3043100ae6f"
  },
  {
    "url": "assets/js/39.518f42ba.js",
    "revision": "5fd844ddd70152a27faf43899d72c861"
  },
  {
    "url": "assets/js/4.872a6d2d.js",
    "revision": "d65df399e838270732f9f50353eb03af"
  },
  {
    "url": "assets/js/40.e7af3899.js",
    "revision": "846a8d6bdd5514ef95a29e846bc983c8"
  },
  {
    "url": "assets/js/41.36589256.js",
    "revision": "fc0ddadaa38193b64e8671b213d6f263"
  },
  {
    "url": "assets/js/42.729ae18b.js",
    "revision": "aee9706c3d2c0aecad52ab6e5f715d0d"
  },
  {
    "url": "assets/js/43.172544bd.js",
    "revision": "1e1600d724493e50bd9aaccdc2d6afb7"
  },
  {
    "url": "assets/js/44.0644b407.js",
    "revision": "c1aa1e3ab77d81e52639b35da2ffcc31"
  },
  {
    "url": "assets/js/45.243e5391.js",
    "revision": "9878f6fc7fc29a6597af569aabc54c41"
  },
  {
    "url": "assets/js/46.6fccfeff.js",
    "revision": "5deffbeecd6a197cf961eb5fe9d76970"
  },
  {
    "url": "assets/js/47.649e877e.js",
    "revision": "bbe4608055bb97cdcdc5de97112c1991"
  },
  {
    "url": "assets/js/48.b2fa8633.js",
    "revision": "2f46d09fadfe7e488cb62f6aa13e0978"
  },
  {
    "url": "assets/js/49.10cda153.js",
    "revision": "78e554f24e065f26847b4a4e9eb4fef3"
  },
  {
    "url": "assets/js/5.99fb7b4f.js",
    "revision": "904f414aa9fa8dc4e9692beffd99fa29"
  },
  {
    "url": "assets/js/50.bb37f805.js",
    "revision": "f7002bf3a8ec476deecf608423d52656"
  },
  {
    "url": "assets/js/51.84bc3a75.js",
    "revision": "51e4d134674bd223ba42663159d98745"
  },
  {
    "url": "assets/js/52.449daa00.js",
    "revision": "fb1be9fa0b42f3789a10fe2094b8aa4f"
  },
  {
    "url": "assets/js/53.f8f111f1.js",
    "revision": "e7ec63f6f9c5c57a4632533909d70ca7"
  },
  {
    "url": "assets/js/54.c7013078.js",
    "revision": "b47887eb42df6c8bf4df7966defa07e7"
  },
  {
    "url": "assets/js/55.ec6df2ae.js",
    "revision": "c94ecbf2d13a5baed0b6d0a801635c83"
  },
  {
    "url": "assets/js/6.feb34efe.js",
    "revision": "3bba4e2578565a2ec356cf4d99503299"
  },
  {
    "url": "assets/js/7.3fa19c7b.js",
    "revision": "32dfee1a6fa717d1f362a12c04f7d2f0"
  },
  {
    "url": "assets/js/8.95041957.js",
    "revision": "7aa6c0ac5ff099d5d355aac0cf99b208"
  },
  {
    "url": "assets/js/9.a984a877.js",
    "revision": "999b6e34e274b121adf87854f1c6323c"
  },
  {
    "url": "assets/js/app.897748a4.js",
    "revision": "17b4e14967ac5414f674d4b5111f618e"
  },
  {
    "url": "categories/CSS Weekly/index.html",
    "revision": "e4c2d4633d053c33c7d7866d2ee30488"
  },
  {
    "url": "categories/Frontend Focus/index.html",
    "revision": "1d0befd748afed12827440090ffc5112"
  },
  {
    "url": "categories/index.html",
    "revision": "642d9f5c315958654056dcd52667a4c4"
  },
  {
    "url": "categories/JavaScript Weekly/index.html",
    "revision": "9ef6758cac6c0cb4d506d718f35f5161"
  },
  {
    "url": "categories/Mobile Dev Weekly/index.html",
    "revision": "d44ccb681509e6fea8dbb061e72926a6"
  },
  {
    "url": "categories/Node Weekly/index.html",
    "revision": "95d67e5198ddc8e3c3064a4bcd03e019"
  },
  {
    "url": "categories/React Status/index.html",
    "revision": "2eaed12600c9e7497991e6d2e6a891b0"
  },
  {
    "url": "css_weekly/485/dynamic_color_manipulation_with_css_relative_colors.html",
    "revision": "8a7ef4e5a3f5c45be33e9a6c63cb6cbf"
  },
  {
    "url": "css_weekly/485/index.html",
    "revision": "115a56b1d33877bc06a7d33ed09b268a"
  },
  {
    "url": "css_weekly/486/compat_2021_holiday_update.html",
    "revision": "6e691e5ddcd987b38867e39ab97ea729"
  },
  {
    "url": "css_weekly/486/css_me_not.html",
    "revision": "80b792a65559dedff6f1392b3951e29c"
  },
  {
    "url": "css_weekly/486/cutsom_properties.html",
    "revision": "7a076b828f7c2c949fa34997f191067b"
  },
  {
    "url": "css_weekly/486/has_selector.html",
    "revision": "b0b2bb75e32eca3243ea75737ed028f9"
  },
  {
    "url": "css_weekly/486/index.html",
    "revision": "7cf24f904e4de3713c3c55f3b0141509"
  },
  {
    "url": "css_weekly/486/preference_queries.html",
    "revision": "6920ad208b8ae7df3d5249a7245f8f14"
  },
  {
    "url": "css_weekly/486/smoothly_reverting_css_animations.html",
    "revision": "f7a6b72b58958b39c953abafdf02765b"
  },
  {
    "url": "css_weekly/486/SVGcode.html",
    "revision": "bb3fbf7424751a0a9986cd7629d8a26a"
  },
  {
    "url": "css_weekly/486/tailwind_and_the_femininity_of_CSS.html",
    "revision": "974556afb9fb9512d41128122c88772d"
  },
  {
    "url": "frontend_focus/514/index.html",
    "revision": "9c1a4a94c1d096b9f9f61efe6a1b7140"
  },
  {
    "url": "frontend_focus/514/status_targeted_caching_headers.html",
    "revision": "b167096fd229ae4d7838e070bc20c285"
  },
  {
    "url": "frontend_focus/523/frontend_web_performance.html",
    "revision": "88c1f902a6e57def08b49a5b53213e3a"
  },
  {
    "url": "frontend_focus/523/index.html",
    "revision": "05412828a95ccf58cc1c6b16ecf12779"
  },
  {
    "url": "images/logo.png",
    "revision": "67d6738dce3ba181d73067fe3010039c"
  },
  {
    "url": "images/organization.png",
    "revision": "e54d5badf04c3086a9c398bb7481d7a3"
  },
  {
    "url": "index.html",
    "revision": "c00a2e42fe2455d672059057c9832900"
  },
  {
    "url": "javascript_weekly/399/index.html",
    "revision": "24f7dd328c93fda04506ceae61c7b828"
  },
  {
    "url": "javascript_weekly/399/js_engine_optimizing_prototype.html",
    "revision": "9a11b71f92ab24a8c162afc66820e793"
  },
  {
    "url": "javascript_weekly/399/js_engine_shape_and_inline_caches.html",
    "revision": "839ae0861bc4f1644b3135d5746ec1bc"
  },
  {
    "url": "javascript_weekly/523/index.html",
    "revision": "99178e5ddb97190da0bea4626aa43697"
  },
  {
    "url": "javascript_weekly/523/undefined_VS_null.html",
    "revision": "714cb8bcbdf26896bdbede1a164e43f2"
  },
  {
    "url": "javascript_weekly/554/ES2022_Feature_Class_Static_Initialization_Blocks.html",
    "revision": "f88a32270d7bd5a4a8fff6393b8e4aa2"
  },
  {
    "url": "javascript_weekly/554/index.html",
    "revision": "744b1d4a1fb736e36f6482e87cb355d4"
  },
  {
    "url": "javascript_weekly/570/build_tools_compare.html",
    "revision": "10d7623276db568828aad240c2fbc76e"
  },
  {
    "url": "javascript_weekly/570/ES2021_new_feature.html",
    "revision": "e0a5791d16f910f938d0271a0e2bd10e"
  },
  {
    "url": "javascript_weekly/570/index.html",
    "revision": "af2f3244787d82a1e7581ba6679b4a40"
  },
  {
    "url": "javascript_weekly/570/svelte_vs_react.html",
    "revision": "07651fd2a10afb2962770aff554f7200"
  },
  {
    "url": "javascript_weekly/570/ternary.html",
    "revision": "8676a57c5875e1eb990a852ff62fdf5e"
  },
  {
    "url": "javascript_weekly/571/flatMap.html",
    "revision": "e015efc364b703f0ee9e1031cd67b857"
  },
  {
    "url": "javascript_weekly/571/fuite.html",
    "revision": "cdae9deac6491c73474744f92af30217"
  },
  {
    "url": "javascript_weekly/571/index.html",
    "revision": "f0e12dcd3d460aa8adfc15ec1e827638"
  },
  {
    "url": "mobile_dev_weekly/382/index.html",
    "revision": "86dc52b87ab6858c8a91bb7d72e8f605"
  },
  {
    "url": "mobile_dev_weekly/382/webrtc.html",
    "revision": "f3b12c634de9d35d162ae84723d997e2"
  },
  {
    "url": "mobile_dev_weekly/383/bashful_button.html",
    "revision": "dcf22c4aab63ea424d4e6facb8b990d2"
  },
  {
    "url": "mobile_dev_weekly/383/index.html",
    "revision": "819841cc133207823c324870d9e1b163"
  },
  {
    "url": "mobile_dev_weekly/383/modile_first_or_desktop_first.html",
    "revision": "ba90ffbd0e29cccec9b774b3d445b44f"
  },
  {
    "url": "node_weekly/417/index.html",
    "revision": "af65e741bf2bacb54adaf741ae60e9f1"
  },
  {
    "url": "node_weekly/417/Nodejs_memory_limits_what_you_should_know.html",
    "revision": "b75571726a12a6cb4536d0c075a050ab"
  },
  {
    "url": "node_weekly/419/index.html",
    "revision": "31dd4c2cb8e5fa4abf204359d132badc"
  },
  {
    "url": "node_weekly/419/Nodejs_Framework_Selection_Guide.html",
    "revision": "896c182565dc2409adb6f23f003ec08f"
  },
  {
    "url": "react_status/271/A_Visual_Guide_to_useEffect.html",
    "revision": "6564678f7256b719d324eaba5258f91c"
  },
  {
    "url": "react_status/271/index.html",
    "revision": "fcd7293646d4a009280a7e2bf3b592c8"
  },
  {
    "url": "tag/babel/index.html",
    "revision": "7914ae39c0f84370a2a12dacfad5985d"
  },
  {
    "url": "tag/Babel/index.html",
    "revision": "c298442ae1ddf8a9698af7881b7bc46d"
  },
  {
    "url": "tag/Chrome/index.html",
    "revision": "82a0de6565ed5a004b55c0c7c7298f4a"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "43e8c133c2c2b8374fd6955890d9372c"
  },
  {
    "url": "tag/CSS/page/2/index.html",
    "revision": "6d5d22394972eedb084df2dfb4e441c1"
  },
  {
    "url": "tag/ECMAScript/index.html",
    "revision": "394caa4c402b819baa59631a86c18521"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "07fff7d981c531185f2c331eb4ee7f03"
  },
  {
    "url": "tag/HTTP/index.html",
    "revision": "58ac802ba904a201596acc97f6693433"
  },
  {
    "url": "tag/index.html",
    "revision": "c5531c00304fd730a6bae3e975d47464"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "be772292de50f48a1374771e3df03230"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "c4bdc1195864dbeb14241368883a3df0"
  },
  {
    "url": "tag/node/index.html",
    "revision": "09bcd4d88dbe5f2911c95674c92b5871"
  },
  {
    "url": "tag/Node/index.html",
    "revision": "cc058bc2683b2c784cd6a3cfc86151bd"
  },
  {
    "url": "tag/Parcel/index.html",
    "revision": "96d32b820e669f2a3e215a59409fa5be"
  },
  {
    "url": "tag/React/index.html",
    "revision": "a70026737eb4e25e216ffbec1e6cdbf3"
  },
  {
    "url": "tag/Rollup/index.html",
    "revision": "653b6f1e2cdf1fb655d7ac8a1cac4300"
  },
  {
    "url": "tag/Svelte/index.html",
    "revision": "e94e40658bd69f7a188bb55818917343"
  },
  {
    "url": "tag/Tool/index.html",
    "revision": "897d2789b82b7cbdceaa753c45e97f1f"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "cae17d401446b2c8423b06ff2c1d15e0"
  },
  {
    "url": "tag/vite/index.html",
    "revision": "c936058bffdd0336a58da3e230ed4761"
  },
  {
    "url": "tag/Vite/index.html",
    "revision": "400753d9e779005da8da14fc4f9d4e17"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2df8aa055713ab6c375537bddb3c7a1f"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "a500d603d431d1d6420edf4905664a2c"
  },
  {
    "url": "tag/游览器/index.html",
    "revision": "69dbc09b634a749eec7479cb86c29dd6"
  },
  {
    "url": "tag/网络/index.html",
    "revision": "805aaeb2917e424e55ec0085f7a1488c"
  },
  {
    "url": "timeline/index.html",
    "revision": "51136b9f0f60c7afe04209b3369d8e16"
  }
].concat(self.__precacheManifest || []);
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
