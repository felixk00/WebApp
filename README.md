This is a web application developed using Next.js + Django and Postgresql

```
WebApp
├─ .DS_Store
├─ LICENSE.md
├─ README.md
├─ backend
│  └─ mafilms
│     ├─ mafilms
│     │  ├─ __init__.py
│     │  ├─ __pycache__
│     │  │  ├─ __init__.cpython-311.pyc
│     │  │  └─ settings.cpython-311.pyc
│     │  ├─ asgi.py
│     │  ├─ settings.py
│     │  ├─ urls.py
│     │  └─ wsgi.py
│     ├─ manage.py
│     └─ requirements.txt
└─ frontend
   ├─ .DS_Store
   └─ mafilms
      ├─ .DS_Store
      ├─ .eslintrc.json
      ├─ .next
      │  ├─ app-build-manifest.json
      │  ├─ build-manifest.json
      │  ├─ cache
      │  │  ├─ swc
      │  │  │  └─ plugins
      │  │  │     └─ v7_macos_aarch64_0.98.5
      │  │  └─ webpack
      │  │     ├─ client-development
      │  │     │  ├─ 0.pack.gz
      │  │     │  ├─ 1.pack.gz
      │  │     │  ├─ 10.pack.gz
      │  │     │  ├─ 11.pack.gz
      │  │     │  ├─ 12.pack.gz
      │  │     │  ├─ 2.pack.gz
      │  │     │  ├─ 3.pack.gz
      │  │     │  ├─ 4.pack.gz
      │  │     │  ├─ 5.pack.gz
      │  │     │  ├─ 6.pack.gz
      │  │     │  ├─ 7.pack.gz
      │  │     │  ├─ 8.pack.gz
      │  │     │  ├─ 9.pack.gz
      │  │     │  ├─ index.pack.gz
      │  │     │  └─ index.pack.gz.old
      │  │     ├─ client-development-fallback
      │  │     │  ├─ 0.pack.gz
      │  │     │  └─ index.pack.gz
      │  │     └─ server-development
      │  │        ├─ 0.pack.gz
      │  │        ├─ 1.pack.gz
      │  │        ├─ 10.pack.gz
      │  │        ├─ 11.pack.gz
      │  │        ├─ 12.pack.gz
      │  │        ├─ 13.pack.gz
      │  │        ├─ 14.pack.gz
      │  │        ├─ 15.pack.gz
      │  │        ├─ 16.pack.gz
      │  │        ├─ 17.pack.gz
      │  │        ├─ 18.pack.gz
      │  │        ├─ 2.pack.gz
      │  │        ├─ 3.pack.gz
      │  │        ├─ 4.pack.gz
      │  │        ├─ 5.pack.gz
      │  │        ├─ 6.pack.gz
      │  │        ├─ 7.pack.gz
      │  │        ├─ 8.pack.gz
      │  │        ├─ 9.pack.gz
      │  │        ├─ index.pack.gz
      │  │        └─ index.pack.gz.old
      │  ├─ package.json
      │  ├─ react-loadable-manifest.json
      │  ├─ server
      │  │  ├─ app
      │  │  │  ├─ favicon.ico
      │  │  │  │  └─ route.js
      │  │  │  ├─ page.js
      │  │  │  └─ page_client-reference-manifest.js
      │  │  ├─ app-paths-manifest.json
      │  │  ├─ middleware-build-manifest.js
      │  │  ├─ middleware-manifest.json
      │  │  ├─ middleware-react-loadable-manifest.js
      │  │  ├─ next-font-manifest.js
      │  │  ├─ next-font-manifest.json
      │  │  ├─ pages-manifest.json
      │  │  ├─ server-reference-manifest.js
      │  │  ├─ server-reference-manifest.json
      │  │  └─ webpack-runtime.js
      │  ├─ static
      │  │  ├─ chunks
      │  │  │  ├─ app
      │  │  │  │  ├─ layout.js
      │  │  │  │  └─ page.js
      │  │  │  ├─ app-pages-internals.js
      │  │  │  ├─ main-app.js
      │  │  │  ├─ polyfills.js
      │  │  │  ├─ react-refresh.js
      │  │  │  └─ webpack.js
      │  │  ├─ css
      │  │  │  └─ app
      │  │  │     └─ layout.css
      │  │  ├─ development
      │  │  │  ├─ _buildManifest.js
      │  │  │  └─ _ssgManifest.js
      │  │  ├─ media
      │  │  │  ├─ 2aaf0723e720e8b9-s.p.woff2
      │  │  │  ├─ 46e04a862eb8f1d8-s.woff2
      │  │  │  ├─ 851122162ab0f2e6-s.woff2
      │  │  │  ├─ 9c4f34569c9b36ca-s.woff2
      │  │  │  ├─ ae9ae6716d4f8bf8-s.woff2
      │  │  │  ├─ b1db3e28af9ef94a-s.woff2
      │  │  │  ├─ b967158bc7d7a9fb-s.woff2
      │  │  │  ├─ c0f5ec5bbf5913b7-s.woff2
      │  │  │  ├─ d1d9458b69004127-s.woff2
      │  │  │  └─ f92459f3943868eb-s.p.woff2
      │  │  └─ webpack
      │  │     ├─ 06fa233c87cb84e0.webpack.hot-update.json
      │  │     ├─ 08bbe3671c2a994f.webpack.hot-update.json
      │  │     ├─ 17b864d17b36da3d.webpack.hot-update.json
      │  │     ├─ 1b7362902ecb71b9.webpack.hot-update.json
      │  │     ├─ 21a313388989fbc4.webpack.hot-update.json
      │  │     ├─ 2766a4204d54abf5.webpack.hot-update.json
      │  │     ├─ 2798065e59842a38.webpack.hot-update.json
      │  │     ├─ 2d949d50902873a6.webpack.hot-update.json
      │  │     ├─ 2de69ec178146a6b.webpack.hot-update.json
      │  │     ├─ 33ef5aa72d8865af.webpack.hot-update.json
      │  │     ├─ 38b06ba52f2ebfd8.webpack.hot-update.json
      │  │     ├─ 59f692e07b0da21b.webpack.hot-update.json
      │  │     ├─ 62991648f3fe53ef.webpack.hot-update.json
      │  │     ├─ 62aafac8b9919fc2.webpack.hot-update.json
      │  │     ├─ 643bb61e9a41463f.webpack.hot-update.json
      │  │     ├─ 6c22e6e82ca4596b.webpack.hot-update.json
      │  │     ├─ 6e282458ef8904c4.webpack.hot-update.json
      │  │     ├─ 703937bef7f69cc4.webpack.hot-update.json
      │  │     ├─ 73f455dd8e6d5233.webpack.hot-update.json
      │  │     ├─ 74c664e2e787b755.webpack.hot-update.json
      │  │     ├─ 760f16ae9cf10967.webpack.hot-update.json
      │  │     ├─ 76adf58a9ade6ee1.webpack.hot-update.json
      │  │     ├─ 8e78b8ae3e8beb64.webpack.hot-update.json
      │  │     ├─ 901f6b57e498d7f4.webpack.hot-update.json
      │  │     ├─ 9e1faaa476a1162e.webpack.hot-update.json
      │  │     ├─ a6ee32423e6544a7.webpack.hot-update.json
      │  │     ├─ a934d3b3fdd5a911.webpack.hot-update.json
      │  │     ├─ app
      │  │     │  ├─ layout.06fa233c87cb84e0.hot-update.js
      │  │     │  ├─ layout.1b7362902ecb71b9.hot-update.js
      │  │     │  ├─ layout.21a313388989fbc4.hot-update.js
      │  │     │  ├─ layout.2766a4204d54abf5.hot-update.js
      │  │     │  ├─ layout.2798065e59842a38.hot-update.js
      │  │     │  ├─ layout.2d949d50902873a6.hot-update.js
      │  │     │  ├─ layout.2de69ec178146a6b.hot-update.js
      │  │     │  ├─ layout.33ef5aa72d8865af.hot-update.js
      │  │     │  ├─ layout.38b06ba52f2ebfd8.hot-update.js
      │  │     │  ├─ layout.59f692e07b0da21b.hot-update.js
      │  │     │  ├─ layout.62991648f3fe53ef.hot-update.js
      │  │     │  ├─ layout.62aafac8b9919fc2.hot-update.js
      │  │     │  ├─ layout.643bb61e9a41463f.hot-update.js
      │  │     │  ├─ layout.6c22e6e82ca4596b.hot-update.js
      │  │     │  ├─ layout.6e282458ef8904c4.hot-update.js
      │  │     │  ├─ layout.703937bef7f69cc4.hot-update.js
      │  │     │  ├─ layout.73f455dd8e6d5233.hot-update.js
      │  │     │  ├─ layout.74c664e2e787b755.hot-update.js
      │  │     │  ├─ layout.760f16ae9cf10967.hot-update.js
      │  │     │  ├─ layout.76adf58a9ade6ee1.hot-update.js
      │  │     │  ├─ layout.8e78b8ae3e8beb64.hot-update.js
      │  │     │  ├─ layout.901f6b57e498d7f4.hot-update.js
      │  │     │  ├─ layout.9e1faaa476a1162e.hot-update.js
      │  │     │  ├─ layout.a6ee32423e6544a7.hot-update.js
      │  │     │  ├─ layout.a934d3b3fdd5a911.hot-update.js
      │  │     │  ├─ layout.b0703e6a76215000.hot-update.js
      │  │     │  ├─ layout.c1f4d079d4699d0b.hot-update.js
      │  │     │  ├─ layout.c46b3cdd7dabe5ed.hot-update.js
      │  │     │  ├─ layout.ce69b48563a37233.hot-update.js
      │  │     │  ├─ layout.d00a1ae759821d1a.hot-update.js
      │  │     │  ├─ layout.d36dc6043dc29caa.hot-update.js
      │  │     │  ├─ layout.d689c0c178021e3a.hot-update.js
      │  │     │  ├─ layout.d6e6838779429b53.hot-update.js
      │  │     │  ├─ layout.d7e63c028938def3.hot-update.js
      │  │     │  ├─ layout.d9b4d9112c9f0831.hot-update.js
      │  │     │  ├─ layout.e3e16775a65f4c50.hot-update.js
      │  │     │  ├─ layout.e9e48bbb4d6282e2.hot-update.js
      │  │     │  ├─ layout.ed238075a34d90d8.hot-update.js
      │  │     │  ├─ layout.f127c6d0f638ee34.hot-update.js
      │  │     │  ├─ layout.f8d3c1f2c4e95713.hot-update.js
      │  │     │  ├─ page.17b864d17b36da3d.hot-update.js
      │  │     │  ├─ page.2766a4204d54abf5.hot-update.js
      │  │     │  ├─ page.62aafac8b9919fc2.hot-update.js
      │  │     │  └─ page.d00a1ae759821d1a.hot-update.js
      │  │     ├─ b0703e6a76215000.webpack.hot-update.json
      │  │     ├─ c1f4d079d4699d0b.webpack.hot-update.json
      │  │     ├─ c46b3cdd7dabe5ed.webpack.hot-update.json
      │  │     ├─ ce69b48563a37233.webpack.hot-update.json
      │  │     ├─ d00a1ae759821d1a.webpack.hot-update.json
      │  │     ├─ d36dc6043dc29caa.webpack.hot-update.json
      │  │     ├─ d689c0c178021e3a.webpack.hot-update.json
      │  │     ├─ d6e6838779429b53.webpack.hot-update.json
      │  │     ├─ d7e63c028938def3.webpack.hot-update.json
      │  │     ├─ d9b4d9112c9f0831.webpack.hot-update.json
      │  │     ├─ e3e16775a65f4c50.webpack.hot-update.json
      │  │     ├─ e9e48bbb4d6282e2.webpack.hot-update.json
      │  │     ├─ ed238075a34d90d8.webpack.hot-update.json
      │  │     ├─ f127c6d0f638ee34.webpack.hot-update.json
      │  │     ├─ f8d3c1f2c4e95713.webpack.hot-update.json
      │  │     ├─ webpack.06fa233c87cb84e0.hot-update.js
      │  │     ├─ webpack.08bbe3671c2a994f.hot-update.js
      │  │     ├─ webpack.17b864d17b36da3d.hot-update.js
      │  │     ├─ webpack.1b7362902ecb71b9.hot-update.js
      │  │     ├─ webpack.21a313388989fbc4.hot-update.js
      │  │     ├─ webpack.2766a4204d54abf5.hot-update.js
      │  │     ├─ webpack.2798065e59842a38.hot-update.js
      │  │     ├─ webpack.2d949d50902873a6.hot-update.js
      │  │     ├─ webpack.2de69ec178146a6b.hot-update.js
      │  │     ├─ webpack.33ef5aa72d8865af.hot-update.js
      │  │     ├─ webpack.38b06ba52f2ebfd8.hot-update.js
      │  │     ├─ webpack.59f692e07b0da21b.hot-update.js
      │  │     ├─ webpack.62991648f3fe53ef.hot-update.js
      │  │     ├─ webpack.62aafac8b9919fc2.hot-update.js
      │  │     ├─ webpack.643bb61e9a41463f.hot-update.js
      │  │     ├─ webpack.6c22e6e82ca4596b.hot-update.js
      │  │     ├─ webpack.6e282458ef8904c4.hot-update.js
      │  │     ├─ webpack.703937bef7f69cc4.hot-update.js
      │  │     ├─ webpack.73f455dd8e6d5233.hot-update.js
      │  │     ├─ webpack.74c664e2e787b755.hot-update.js
      │  │     ├─ webpack.760f16ae9cf10967.hot-update.js
      │  │     ├─ webpack.76adf58a9ade6ee1.hot-update.js
      │  │     ├─ webpack.8e78b8ae3e8beb64.hot-update.js
      │  │     ├─ webpack.901f6b57e498d7f4.hot-update.js
      │  │     ├─ webpack.9e1faaa476a1162e.hot-update.js
      │  │     ├─ webpack.a6ee32423e6544a7.hot-update.js
      │  │     ├─ webpack.a934d3b3fdd5a911.hot-update.js
      │  │     ├─ webpack.b0703e6a76215000.hot-update.js
      │  │     ├─ webpack.c1f4d079d4699d0b.hot-update.js
      │  │     ├─ webpack.c46b3cdd7dabe5ed.hot-update.js
      │  │     ├─ webpack.ce69b48563a37233.hot-update.js
      │  │     ├─ webpack.d00a1ae759821d1a.hot-update.js
      │  │     ├─ webpack.d36dc6043dc29caa.hot-update.js
      │  │     ├─ webpack.d689c0c178021e3a.hot-update.js
      │  │     ├─ webpack.d6e6838779429b53.hot-update.js
      │  │     ├─ webpack.d7e63c028938def3.hot-update.js
      │  │     ├─ webpack.d9b4d9112c9f0831.hot-update.js
      │  │     ├─ webpack.e3e16775a65f4c50.hot-update.js
      │  │     ├─ webpack.e9e48bbb4d6282e2.hot-update.js
      │  │     ├─ webpack.ed238075a34d90d8.hot-update.js
      │  │     ├─ webpack.f127c6d0f638ee34.hot-update.js
      │  │     └─ webpack.f8d3c1f2c4e95713.hot-update.js
      │  ├─ trace
      │  └─ types
      │     ├─ app
      │     │  ├─ layout.ts
      │     │  └─ page.ts
      │     └─ package.json
      ├─ README.md
      ├─ jsconfig.json
      ├─ next.config.js
      ├─ package-lock.json
      ├─ package.json
      ├─ postcss.config.js
      ├─ public
      │  ├─ .DS_Store
      │  ├─ assets
      │  │  ├─ .DS_Store
      │  │  ├─ logos
      │  │  │  ├─ MA_FILMS_Logo_1.1.svg
      │  │  │  ├─ MA_FILMS_Logo_1.2.svg
      │  │  │  ├─ MA_FILMS_Logo_2.1.svg
      │  │  │  ├─ MA_FILMS_Logo_2.2.svg
      │  │  │  ├─ MA_FILMS_Logo_3.1.svg
      │  │  │  └─ MA_FILMS_Logo_3.2.svg
      │  │  └─ pictures
      │  │     └─ DSC_0305.jpg
      │  ├─ robots.txt
      │  └─ sitemap.xml
      ├─ src
      │  ├─ .DS_Store
      │  ├─ app
      │  │  ├─ .DS_Store
      │  │  ├─ favicon.ico
      │  │  ├─ globals.css
      │  │  ├─ layout.js
      │  │  ├─ page.js
      │  │  └─ portfolio
      │  │     └─ overview.js
      │  ├─ components
      │  │  ├─ header.js
      │  │  ├─ logo.js
      │  │  └─ picture.js
      │  └─ styles
      │     ├─ .DS_Store
      │     ├─ logos.module.css
      │     ├─ pictures.module.css
      │     └─ utils.module.css
      └─ tailwind.config.js

```