if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const o=e=>a(e,c),d={module:{uri:c},exports:r,require:o};s[c]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-hFDROtHT69uSiDCXznJ0V.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/203.a92547a29ded5f08.js",revision:"a92547a29ded5f08"},{url:"/_next/static/chunks/639-6d10b1b2d243ad58.js",revision:"6d10b1b2d243ad58"},{url:"/_next/static/chunks/894.8b3e79a97f1244f1.js",revision:"8b3e79a97f1244f1"},{url:"/_next/static/chunks/993-ce2ca0ce4304906b.js",revision:"ce2ca0ce4304906b"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-bb4bcb7663fd29e5.js",revision:"bb4bcb7663fd29e5"},{url:"/_next/static/chunks/pages/_app-2495f8005849077e.js",revision:"2495f8005849077e"},{url:"/_next/static/chunks/pages/_error-4b61be14865575c5.js",revision:"4b61be14865575c5"},{url:"/_next/static/chunks/pages/_offline-f87efa9f53cd5c7b.js",revision:"f87efa9f53cd5c7b"},{url:"/_next/static/chunks/pages/index-b346831f361351c5.js",revision:"b346831f361351c5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-4a62675035e9c2ed.js",revision:"4a62675035e9c2ed"},{url:"/_next/static/css/6afb9bc5734e0f63.css",revision:"6afb9bc5734e0f63"},{url:"/_next/static/css/77a9b13db2c54504.css",revision:"77a9b13db2c54504"},{url:"/_next/static/hFDROtHT69uSiDCXznJ0V/_buildManifest.js",revision:"9fc192ca2c847949adf2f39799396b01"},{url:"/_next/static/hFDROtHT69uSiDCXznJ0V/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"hFDROtHT69uSiDCXznJ0V"},{url:"/favicon.ico",revision:"b7428cdf59c56ce2754b66a72358fb42"},{url:"/icons/android-icon-144x144.png",revision:"4cbf4814be2113fa262996088fc4fbef"},{url:"/icons/android-icon-192x192.png",revision:"1fd6999a572882f9ff93fd8d692a4b73"},{url:"/icons/android-icon-36x36.png",revision:"42234526467431bff1b16be2973d16e3"},{url:"/icons/android-icon-48x48.png",revision:"c94629534192409324ff55f979ea264c"},{url:"/icons/android-icon-72x72.png",revision:"1eb935cce802aacce1e1db29c815e717"},{url:"/icons/android-icon-96x96.png",revision:"8d8e6f9a7786afd97bdcc692b8576c59"},{url:"/icons/apple-icon-114x114.png",revision:"c34ddacef17d18da006ee6048315e8fb"},{url:"/icons/apple-icon-120x120.png",revision:"945bf5b6ab87d8d3a74590fffb92e1d5"},{url:"/icons/apple-icon-144x144.png",revision:"4cbf4814be2113fa262996088fc4fbef"},{url:"/icons/apple-icon-152x152.png",revision:"e15e2d7d8c3f24c5d2c0a7ceed8cb9ca"},{url:"/icons/apple-icon-180x180.png",revision:"02ce6d9d439f456ae80dbe71d0ec306d"},{url:"/icons/apple-icon-57x57.png",revision:"ce57415f59f71abc1e5c6360cb7e65d8"},{url:"/icons/apple-icon-60x60.png",revision:"3581e313fb6e3f3693a51cd5944a70a9"},{url:"/icons/apple-icon-72x72.png",revision:"1eb935cce802aacce1e1db29c815e717"},{url:"/icons/apple-icon-76x76.png",revision:"58842da9d8bbc7a5c64d1923190abd0e"},{url:"/icons/apple-icon-precomposed.png",revision:"867c5153ceedf204ad88cf7e8a45fa65"},{url:"/icons/apple-icon.png",revision:"867c5153ceedf204ad88cf7e8a45fa65"},{url:"/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/icons/favicon-16x16.png",revision:"fabb8eabc543c3d0718475e58583aecd"},{url:"/icons/favicon-32x32.png",revision:"b1a097ce742e22adf7010bcb08cac3f0"},{url:"/icons/favicon-96x96.png",revision:"0b450f7759c649b123adf1da1352628c"},{url:"/icons/favicon.ico",revision:"b7428cdf59c56ce2754b66a72358fb42"},{url:"/icons/manifest.json",revision:"b58fcfa7628c9205cb11a1b2c3e8f99a"},{url:"/icons/ms-icon-144x144.png",revision:"18dfcb79ac409112862d3efa1c2a81d7"},{url:"/icons/ms-icon-150x150.png",revision:"dea668a5842227e694efa75047c3104d"},{url:"/icons/ms-icon-310x310.png",revision:"8fb78ad5ae71af3117f80db922ecd11d"},{url:"/icons/ms-icon-70x70.png",revision:"346e7852f6bf542023b61467dffc6ecf"},{url:"/images/4aa7b5ec0ebe749d179506cf057c2ca2.ico.zip",revision:"29fb782156551be0025a79bf10fea330"},{url:"/images/6a9c4f45adce4a274dbd49ea5d1a242c.ico.zip",revision:"907c5d28c55bb33b4af2f4cac172687a"},{url:"/images/a3834b4d5a13b422006cc692c69f1c9a.ico.zip",revision:"79f06e93d4199f435f3f0e168fbc1466"},{url:"/images/auth0.html",revision:"f9141977a84cb0ab126f8cb105c4111f"},{url:"/images/auth0_files/0c701ff7d190.js.download",revision:"cfbf77a09118e795280ea4cdc7ca56df"},{url:"/images/auth0_files/9122722",revision:"2088d719459d31098b4191e36c765a22"},{url:"/images/auth0_files/a0-hooks.css",revision:"6750c305fe346fd4ead6ae03a3e66973"},{url:"/images/auth0_files/a0-hooks.js.download",revision:"9436162918fe6931328430364f99dfa5"},{url:"/images/auth0_files/a0-hooks.vendors.js.download",revision:"17ff3b4a5c55e177830495eb79050630"},{url:"/images/auth0_files/all(1).css",revision:"116622ab57db7b4e12fa1213186e0c7c"},{url:"/images/auth0_files/all.css",revision:"3b9684a16ef99a568e9ffbd492be4c4d"},{url:"/images/auth0_files/auth0-metrics.min.js.download",revision:"1d4e969c9fd63cd2486df2bd876fd0e4"},{url:"/images/auth0_files/bundle.min.js.download",revision:"e40f166b5224c3d350f793ac67454650"},{url:"/images/auth0_files/extend-editor.js.download",revision:"a7845499bb0d8d87603d36270d5e3d37"},{url:"/images/auth0_files/extension-gallery.standalone-3.3.min.js.download",revision:"d5b042bbde374c0180d4a689e714c7b9"},{url:"/images/auth0_files/gtm.js.download",revision:"0bc82185f03f4eefc1ce4c996f4c7d38"},{url:"/images/auth0_files/heap-1279799279.js.download",revision:"75157a81ba03ae0e5162683d28512eab"},{url:"/images/auth0_files/inner.html",revision:"ca58dd3151a17da0ff8827b8378372a9"},{url:"/images/auth0_files/logo-icon.png",revision:"d0ea329b81d76e0b1adb0fefd726e485"},{url:"/images/auth0_files/m-outer-8cb24ab2d649fd36a488d04d8c457933.js.download",revision:"f8f6a4584135f737b26927596ce6e0a7"},{url:"/images/auth0_files/m-outer-93afeeb17bc37e711759584dbfc50d47.html",revision:"34fae4fe29779cbf908cbc94b51033d3"},{url:"/images/auth0_files/main.js.download",revision:"80a540c2d2abb0078440a1a7480fa680"},{url:"/images/auth0_files/out-4.5.42.js.download",revision:"21df7244385e5c0bdf32da01d0dad6c0"},{url:"/images/auth0_files/pendo.js.download",revision:"cc96b4a180ebed6e96a226076a3095b2"},{url:"/images/auth0_files/saved_resource",revision:"e090991c8b07bf67e4048813006543e9"},{url:"/images/auth0_files/saved_resource(1).html",revision:"f03445f270d6a7df86f90f5ee6eda8ce"},{url:"/images/auth0_files/saved_resource.html",revision:"753899556190a6e413e42c1de67dbed5"},{url:"/images/auth0_files/tag.js.download",revision:"d22357820d7d5a694a7efe10569951a5"},{url:"/images/auth0_files/vendor.js.download",revision:"449960afa34b89f3204528c08ad763f1"},{url:"/images/auth0_files/visual-cues-widget-0.12.2.min.js.download",revision:"9402ef40ae5a9672d08d5da64d3d23e1"},{url:"/images/blackhole.png",revision:"9b6ab0ff8088ece999e19da56e1c76c1"},{url:"/images/low-light-viz.png",revision:"659dbb2fbe144e6898b387462d9d97c3"},{url:"/images/profile.png",revision:"277386946fc8a67da3d988816a26defe"},{url:"/images/solar-manifestation.png",revision:"f9616c4f820164fe62d619d58b75b896"},{url:"/images/solarian-modes.png",revision:"1e6cfdaa0f047ce63b1560f0b57f672a"},{url:"/images/supernova.png",revision:"e4cd299db77504a2fc6bbb143a47b07f"},{url:"/manifest.json",revision:"0cf01b1c2c7d8d380074da55a4e5ffa4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
