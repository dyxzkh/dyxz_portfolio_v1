// @ts-nocheck
if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + ".js", i).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (n(...e), c));
  };
}
define(["./workbox-2e6be583"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/YpuXcWjM1BjlqBxOliv6y/_buildManifest.js",
          revision: "7314a459c9994d1b51ec5d9adb41f032",
        },
        {
          url: "/_next/static/YpuXcWjM1BjlqBxOliv6y/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/19123e00.b8a76a3833643dbb.js",
          revision: "b8a76a3833643dbb",
        },
        {
          url: "/_next/static/chunks/31a343ae-66b23442e48fb86e.js",
          revision: "66b23442e48fb86e",
        },
        {
          url: "/_next/static/chunks/337.aa8b94386a1e3e6e.js",
          revision: "aa8b94386a1e3e6e",
        },
        {
          url: "/_next/static/chunks/411.0a4d09f9975afba3.js",
          revision: "0a4d09f9975afba3",
        },
        {
          url: "/_next/static/chunks/448.f668e5144a788dcd.js",
          revision: "f668e5144a788dcd",
        },
        {
          url: "/_next/static/chunks/530.911636e95d4a3e25.js",
          revision: "911636e95d4a3e25",
        },
        {
          url: "/_next/static/chunks/557-294e26109e66efa5.js",
          revision: "294e26109e66efa5",
        },
        {
          url: "/_next/static/chunks/6927e416.808bf6ae04394ff9.js",
          revision: "808bf6ae04394ff9",
        },
        {
          url: "/_next/static/chunks/828.ae8b0f6e9f446e34.js",
          revision: "ae8b0f6e9f446e34",
        },
        {
          url: "/_next/static/chunks/fa467bb9-2fa4412e61565865.js",
          revision: "2fa4412e61565865",
        },
        {
          url: "/_next/static/chunks/framework-fda0a023b274c574.js",
          revision: "fda0a023b274c574",
        },
        {
          url: "/_next/static/chunks/main-d00c9ac02eb07d3d.js",
          revision: "d00c9ac02eb07d3d",
        },
        {
          url: "/_next/static/chunks/pages/_app-b18d319394ba810d.js",
          revision: "b18d319394ba810d",
        },
        {
          url: "/_next/static/chunks/pages/_error-7b3af279a8dc815e.js",
          revision: "7b3af279a8dc815e",
        },
        {
          url: "/_next/static/chunks/pages/index-187cf6e031d65527.js",
          revision: "187cf6e031d65527",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-0dffd3828ace1a21.js",
          revision: "0dffd3828ace1a21",
        },
        {
          url: "/_next/static/css/0049343371fc881e.css",
          revision: "0049343371fc881e",
        },
        {
          url: "/_next/static/css/9021ea1e0784d42f.css",
          revision: "9021ea1e0784d42f",
        },
        {
          url: "/_next/static/media/56d4c7a1c09c3371-s.woff2",
          revision: "43b1d1276722d640d51608db4600bb69",
        },
        {
          url: "/_next/static/media/7e6a2e30184bb114-s.p.woff2",
          revision: "bca21fe1983e7d9137ef6e68e05f3aee",
        },
        {
          url: "/_next/static/media/InterVariable-Italic.ef0ecaff.woff2",
          revision: "ef0ecaff",
        },
        {
          url: "/_next/static/media/InterVariable.ff710c09.woff2",
          revision: "ff710c09",
        },
        {
          url: "/_next/static/media/primeicons.19e14e48.svg",
          revision: "19e14e48",
        },
        {
          url: "/_next/static/media/primeicons.310a7310.ttf",
          revision: "310a7310",
        },
        {
          url: "/_next/static/media/primeicons.7f772274.woff",
          revision: "7f772274",
        },
        {
          url: "/_next/static/media/primeicons.8ca441e1.eot",
          revision: "8ca441e1",
        },
        {
          url: "/_next/static/media/primeicons.e1a53edb.woff2",
          revision: "e1a53edb",
        },
        {
          url: "/assets/infinitevps.webm",
          revision: "f7b371e070057472204ab2ae0b8915d4",
        },
        {
          url: "/assets/logo.webp",
          revision: "65c9a0758232b4ebb67062c77dc51dd4",
        },
        {
          url: "/assets/lui_naspk.png",
          revision: "3420d58f22e329f1df653a0b928ac9b2",
        },
        {
          url: "/assets/mcfa.jpg",
          revision: "200d29f825aa16c8e17eccf1833e830a",
        },
        {
          url: "/assets/naspk.png",
          revision: "273b6d48207ac71191c519b4d8de3daa",
        },
        {
          url: "/assets/portfolio.webm",
          revision: "3c5c99872974c5db962f4aa1d8da08ce",
        },
        {
          url: "/assets/scene.splinecode",
          revision: "a86155ea39bd500447e9c825ef110b58",
        },
        {
          url: "/assets/sdv.png",
          revision: "b6fc228a032b9fef9dc9ffc297ea478e",
        },
        {
          url: "/assets/translate_bot.webm",
          revision: "9fc3ca04ec7b1aa9e328d64f5a0532ca",
        },
        {
          url: "/assets/trc_service.png",
          revision: "045f72764d144be3bee4708e50d0d44b",
        },
        {
          url: "/assets/unqueue.webm",
          revision: "04cd7ece4cb5b88a718605b596046cc9",
        },
        {
          url: "/assets/wrona.jpeg",
          revision: "89872f2806610edde5ea90ee8afbace6",
        },
        { url: "/favicon.ico", revision: "9f394dd2d1f01ab67d08ad0a0d2fc977" },
        {
          url: "/files/Sovandy_Khgney.pdf",
          revision: "bf34d1e4ee2ed9a5d154b3cbd9f3f7f3",
        },
        {
          url: "/fonts/ClashGrotesk-Variable.woff2",
          revision: "218f4f81bdee5932a127929c6d693f0c",
        },
        {
          url: "/icon-192x192.png",
          revision: "3d82a3c3a8f93ada0df0fac471f90a04",
        },
        {
          url: "/icon-256x256.png",
          revision: "163a0793bd04edca75d788db5be7e16f",
        },
        {
          url: "/icon-384x384.png",
          revision: "60d91c093fdce918a995cebcf4cfe957",
        },
        {
          url: "/icon-512x512.png",
          revision: "2d8845afaf9400bfd34c4b160c448e36",
        },
        { url: "/manifest.json", revision: "397c15f89afa2472849bffb802a53190" },
        { url: "/robots.txt", revision: "f77c87f977e0fcce05a6df46c885a129" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
