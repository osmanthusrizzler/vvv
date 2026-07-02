globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/ads.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"3b-qBl7cWdxw1+ivJi/Keisn+IqlK4\"",
		"mtime": "2026-07-02T13:47:35.086Z",
		"size": 59,
		"path": "../public/ads.txt"
	},
	"/hero-vrindavan.jpg.asset.json": {
		"type": "application/json",
		"etag": "\"1b1-45O2mg7nNXTPiGRxPcLfbIHqkD0\"",
		"mtime": "2026-07-02T13:47:35.115Z",
		"size": 433,
		"path": "../public/hero-vrindavan.jpg.asset.json"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"c68a-nWPlbS9IvE2ThM6NjlmWEKE+GGY\"",
		"mtime": "2026-07-02T13:47:35.094Z",
		"size": 50826,
		"path": "../public/favicon.ico"
	},
	"/logo-meri-radha.png.asset.json": {
		"type": "application/json",
		"etag": "\"1b4-+CeWICxH4ZbiBKlPkeQOH49HfE8\"",
		"mtime": "2026-07-02T13:47:35.124Z",
		"size": 436,
		"path": "../public/logo-meri-radha.png.asset.json"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2e-SXXA+7h0qrNifPZZqSI2l1B/r4k\"",
		"mtime": "2026-07-02T13:47:35.130Z",
		"size": 46,
		"path": "../public/robots.txt"
	},
	"/assets/about-BAtozeAq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b4c-AQFWtZCnHSM7HS7r0DZiJq+FgWc\"",
		"mtime": "2026-07-02T14:40:21.739Z",
		"size": 2892,
		"path": "../public/assets/about-BAtozeAq.js"
	},
	"/assets/chant-BCo2fAXj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"493b-5/nDvQ4bKUmZjFihA9JRwlIupVo\"",
		"mtime": "2026-07-02T14:40:21.739Z",
		"size": 18747,
		"path": "../public/assets/chant-BCo2fAXj.js"
	},
	"/assets/contact-Bi8WzRrv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"649-hsWvgDGhfv7U44RFZCy+lcCfBnw\"",
		"mtime": "2026-07-02T14:40:21.746Z",
		"size": 1609,
		"path": "../public/assets/contact-Bi8WzRrv.js"
	},
	"/assets/cormorant-garamond-cyrillic-400-normal-CVFrM67f.woff": {
		"type": "font/woff",
		"etag": "\"3d50-XCV+tzKH13DKsRqSfSlBVs9ZqH4\"",
		"mtime": "2026-07-02T14:40:21.755Z",
		"size": 15696,
		"path": "../public/assets/cormorant-garamond-cyrillic-400-normal-CVFrM67f.woff"
	},
	"/assets/cormorant-garamond-cyrillic-400-normal-DD2KOZkl.woff2": {
		"type": "font/woff2",
		"etag": "\"31e8-vwlRkfqNiOhu8jAtpp4hMZwAx8I\"",
		"mtime": "2026-07-02T14:40:21.756Z",
		"size": 12776,
		"path": "../public/assets/cormorant-garamond-cyrillic-400-normal-DD2KOZkl.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2": {
		"type": "font/woff2",
		"etag": "\"32d8-8d3rWjcyv9fSPPU/MPW9gnHwPJI\"",
		"mtime": "2026-07-02T14:40:21.757Z",
		"size": 13016,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-C2atO-64.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff": {
		"type": "font/woff",
		"etag": "\"3dd0-Oqsh7LStfdS7mPECA6cvJuAjAfk\"",
		"mtime": "2026-07-02T14:40:21.758Z",
		"size": 15824,
		"path": "../public/assets/cormorant-garamond-cyrillic-600-normal-FNmA3REe.woff"
	},
	"/assets/cormorant-garamond-cyrillic-700-normal-SLG_-a_c.woff2": {
		"type": "font/woff2",
		"etag": "\"30f8-4lYl2XJFGnNMKqofkh/2+y7Wbws\"",
		"mtime": "2026-07-02T14:40:21.759Z",
		"size": 12536,
		"path": "../public/assets/cormorant-garamond-cyrillic-700-normal-SLG_-a_c.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-700-normal-D3uyJ5DH.woff": {
		"type": "font/woff",
		"etag": "\"3bb8-i8TdbJdddJfd3xK5/HiFTJ0y37k\"",
		"mtime": "2026-07-02T14:40:21.759Z",
		"size": 15288,
		"path": "../public/assets/cormorant-garamond-cyrillic-700-normal-D3uyJ5DH.woff"
	},
	"/assets/cormorant-garamond-cyrillic-ext-400-normal-W3Dto7M0.woff2": {
		"type": "font/woff2",
		"etag": "\"3660-4ffgpEH9mWDcu2do7M9ndzNYKA0\"",
		"mtime": "2026-07-02T14:40:21.760Z",
		"size": 13920,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-400-normal-W3Dto7M0.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-600-normal-BMhMHfrj.woff2": {
		"type": "font/woff2",
		"etag": "\"3768-HjaT9aUeWet5hT1tO1bngG2GXgc\"",
		"mtime": "2026-07-02T14:40:21.761Z",
		"size": 14184,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-600-normal-BMhMHfrj.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-400-normal-DLdKLAvx.woff": {
		"type": "font/woff",
		"etag": "\"4414-nZ05aqplOpNbo+Cb0cI2Xh249d8\"",
		"mtime": "2026-07-02T14:40:21.760Z",
		"size": 17428,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-400-normal-DLdKLAvx.woff"
	},
	"/assets/cormorant-garamond-cyrillic-ext-600-normal-CsIYWmWK.woff": {
		"type": "font/woff",
		"etag": "\"44d4-L2Opq/Q5RXIiOxipfHZK04A9S6U\"",
		"mtime": "2026-07-02T14:40:21.761Z",
		"size": 17620,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-600-normal-CsIYWmWK.woff"
	},
	"/assets/cormorant-garamond-cyrillic-ext-700-normal-Do0rx6yy.woff2": {
		"type": "font/woff2",
		"etag": "\"3608-HKtBx6Iq8QD93U0V0xDbnifllBk\"",
		"mtime": "2026-07-02T14:40:21.762Z",
		"size": 13832,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-700-normal-Do0rx6yy.woff2"
	},
	"/assets/cormorant-garamond-cyrillic-ext-700-normal-BaW-xaxb.woff": {
		"type": "font/woff",
		"etag": "\"42bc-O4p9sdDrYWhcXk3UWWmfAK6fvyo\"",
		"mtime": "2026-07-02T14:40:21.762Z",
		"size": 17084,
		"path": "../public/assets/cormorant-garamond-cyrillic-ext-700-normal-BaW-xaxb.woff"
	},
	"/assets/cormorant-garamond-latin-400-normal-B-1hWBU7.woff2": {
		"type": "font/woff2",
		"etag": "\"595c-plElvBMbfA4vsaFAqui//GFeZ5o\"",
		"mtime": "2026-07-02T14:40:21.762Z",
		"size": 22876,
		"path": "../public/assets/cormorant-garamond-latin-400-normal-B-1hWBU7.woff2"
	},
	"/assets/cormorant-garamond-latin-400-normal-B7YtguxJ.woff": {
		"type": "font/woff",
		"etag": "\"7904-9V90i7R9qGBbagyxxIPch9DOJgo\"",
		"mtime": "2026-07-02T14:40:21.762Z",
		"size": 30980,
		"path": "../public/assets/cormorant-garamond-latin-400-normal-B7YtguxJ.woff"
	},
	"/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2": {
		"type": "font/woff2",
		"etag": "\"5b64-DiRTjnmBF4QEF99jcstrz5kUhWM\"",
		"mtime": "2026-07-02T14:40:21.764Z",
		"size": 23396,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-Co1r35X9.woff2"
	},
	"/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff": {
		"type": "font/woff",
		"etag": "\"7a48-hEZL0FtkpIi9bUu0Z020uBfp4v8\"",
		"mtime": "2026-07-02T14:40:21.764Z",
		"size": 31304,
		"path": "../public/assets/cormorant-garamond-latin-600-normal-2CBVLo0M.woff"
	},
	"/hero-vrindavan.jpg": {
		"type": "image/jpeg",
		"etag": "\"49038-FIuEK74U68TWWXKNZKbEbmRdOpw\"",
		"mtime": "2026-07-02T13:47:35.106Z",
		"size": 299064,
		"path": "../public/hero-vrindavan.jpg"
	},
	"/assets/cormorant-garamond-latin-700-normal-DajfzrDU.woff2": {
		"type": "font/woff2",
		"etag": "\"5744-IuDo7IfBJROI1WHu6T0+82onkoY\"",
		"mtime": "2026-07-02T14:40:21.765Z",
		"size": 22340,
		"path": "../public/assets/cormorant-garamond-latin-700-normal-DajfzrDU.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-400-normal-Drx2k2n9.woff2": {
		"type": "font/woff2",
		"etag": "\"4db0-nad/GoSq2cQK8+zE21r7i24bdjY\"",
		"mtime": "2026-07-02T14:40:21.766Z",
		"size": 19888,
		"path": "../public/assets/cormorant-garamond-latin-ext-400-normal-Drx2k2n9.woff2"
	},
	"/assets/cormorant-garamond-latin-700-normal-O25Qpphb.woff": {
		"type": "font/woff",
		"etag": "\"7628-hCrgfrp8Up73YXhB5zHECq1siv0\"",
		"mtime": "2026-07-02T14:40:21.765Z",
		"size": 30248,
		"path": "../public/assets/cormorant-garamond-latin-700-normal-O25Qpphb.woff"
	},
	"/assets/cormorant-garamond-latin-ext-400-normal-uvC0WHQr.woff": {
		"type": "font/woff",
		"etag": "\"6d18-McfiZ8PaVOWL5YgYKU94JxQwMFU\"",
		"mtime": "2026-07-02T14:40:21.766Z",
		"size": 27928,
		"path": "../public/assets/cormorant-garamond-latin-ext-400-normal-uvC0WHQr.woff"
	},
	"/assets/cormorant-garamond-latin-ext-600-normal-DaBc-lu7.woff2": {
		"type": "font/woff2",
		"etag": "\"4f50-grOJp0+bsniVs5QLyigBa2D/pts\"",
		"mtime": "2026-07-02T14:40:21.767Z",
		"size": 20304,
		"path": "../public/assets/cormorant-garamond-latin-ext-600-normal-DaBc-lu7.woff2"
	},
	"/assets/cormorant-garamond-latin-ext-600-normal-Dk3-quAP.woff": {
		"type": "font/woff",
		"etag": "\"6e64-wTi1k91lSogr+3bHM8+TLMTHCjk\"",
		"mtime": "2026-07-02T14:40:21.767Z",
		"size": 28260,
		"path": "../public/assets/cormorant-garamond-latin-ext-600-normal-Dk3-quAP.woff"
	},
	"/assets/cormorant-garamond-latin-ext-700-normal-CNjt5vTB.woff2": {
		"type": "font/woff2",
		"etag": "\"4b80-sJVP+nv0oCdyMv30NCqwmMyLQwA\"",
		"mtime": "2026-07-02T14:40:21.767Z",
		"size": 19328,
		"path": "../public/assets/cormorant-garamond-latin-ext-700-normal-CNjt5vTB.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-400-normal-4uxlocMh.woff": {
		"type": "font/woff",
		"etag": "\"2464-sNlDqyrGwuOXb49cv43hafatBpY\"",
		"mtime": "2026-07-02T14:40:21.769Z",
		"size": 9316,
		"path": "../public/assets/cormorant-garamond-vietnamese-400-normal-4uxlocMh.woff"
	},
	"/assets/cormorant-garamond-latin-ext-700-normal-qRbaVVD7.woff": {
		"type": "font/woff",
		"etag": "\"69a0-tcwkE+rmOvTx55lvnv9CtHLnFqs\"",
		"mtime": "2026-07-02T14:40:21.769Z",
		"size": 27040,
		"path": "../public/assets/cormorant-garamond-latin-ext-700-normal-qRbaVVD7.woff"
	},
	"/assets/cormorant-garamond-vietnamese-400-normal-6K-YXo6g.woff2": {
		"type": "font/woff2",
		"etag": "\"1a58-7J/nLaYlJJIBHtYRfJHATtWdRMA\"",
		"mtime": "2026-07-02T14:40:21.770Z",
		"size": 6744,
		"path": "../public/assets/cormorant-garamond-vietnamese-400-normal-6K-YXo6g.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-600-normal-BoXdMtcr.woff2": {
		"type": "font/woff2",
		"etag": "\"1a8c-tnk9eY2+LIaNtEt7mUlaeRXn61M\"",
		"mtime": "2026-07-02T14:40:21.770Z",
		"size": 6796,
		"path": "../public/assets/cormorant-garamond-vietnamese-600-normal-BoXdMtcr.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-600-normal-C4HEjEaf.woff": {
		"type": "font/woff",
		"etag": "\"24cc-uT5hXTTJVeYO1TyOwsqxWCgD3pY\"",
		"mtime": "2026-07-02T14:40:21.771Z",
		"size": 9420,
		"path": "../public/assets/cormorant-garamond-vietnamese-600-normal-C4HEjEaf.woff"
	},
	"/assets/cormorant-garamond-vietnamese-700-normal--OtHbi1I.woff2": {
		"type": "font/woff2",
		"etag": "\"1854-wwNs8IYcXQS+vseF0QHsFQQVBuc\"",
		"mtime": "2026-07-02T14:40:21.771Z",
		"size": 6228,
		"path": "../public/assets/cormorant-garamond-vietnamese-700-normal--OtHbi1I.woff2"
	},
	"/assets/cormorant-garamond-vietnamese-700-normal-GOTdnRS1.woff": {
		"type": "font/woff",
		"etag": "\"22a8-blwA0+2QPG9z4o2oLUoaEQ4rf18\"",
		"mtime": "2026-07-02T14:40:21.772Z",
		"size": 8872,
		"path": "../public/assets/cormorant-garamond-vietnamese-700-normal-GOTdnRS1.woff"
	},
	"/assets/faq-BzkqYMBp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216d-wkBe8D49r+gcl/juf1LIE/BI8ZY\"",
		"mtime": "2026-07-02T14:40:21.747Z",
		"size": 8557,
		"path": "../public/assets/faq-BzkqYMBp.js"
	},
	"/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2": {
		"type": "font/woff2",
		"etag": "\"6568-cF1iUGbboMFZ8TfnP5HiMgl9II0\"",
		"mtime": "2026-07-02T14:40:21.772Z",
		"size": 25960,
		"path": "../public/assets/inter-cyrillic-ext-wght-normal-BOeWTOD4.woff2"
	},
	"/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2": {
		"type": "font/woff2",
		"etag": "\"493c-n3Oy9D6jvzfMjpClqox+Zo7ERQQ\"",
		"mtime": "2026-07-02T14:40:21.773Z",
		"size": 18748,
		"path": "../public/assets/inter-cyrillic-wght-normal-DqGufNeO.woff2"
	},
	"/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2": {
		"type": "font/woff2",
		"etag": "\"2be0-BP5iTzJeB8nLqYAgKpWNi5o1Zm8\"",
		"mtime": "2026-07-02T14:40:21.774Z",
		"size": 11232,
		"path": "../public/assets/inter-greek-ext-wght-normal-DlzME5K_.woff2"
	},
	"/assets/inter-greek-wght-normal-CkhJZR-_.woff2": {
		"type": "font/woff2",
		"etag": "\"4a34-xor/hj4YNqI52zFecXnUbzQ4Xs4\"",
		"mtime": "2026-07-02T14:40:21.774Z",
		"size": 18996,
		"path": "../public/assets/inter-greek-wght-normal-CkhJZR-_.woff2"
	},
	"/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2": {
		"type": "font/woff2",
		"etag": "\"280c-nBythjoDQ0+5wVAendJ6wU7Xz2M\"",
		"mtime": "2026-07-02T14:40:21.775Z",
		"size": 10252,
		"path": "../public/assets/inter-vietnamese-wght-normal-CBcvBZtf.woff2"
	},
	"/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2": {
		"type": "font/woff2",
		"etag": "\"14c4c-zz61D7IQFMB9QxHvTAOk/Vh4ibQ\"",
		"mtime": "2026-07-02T14:40:21.774Z",
		"size": 85068,
		"path": "../public/assets/inter-latin-ext-wght-normal-DO1Apj_S.woff2"
	},
	"/assets/privacy-JL8etme4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d22-2GyfXoPg+8XiJtIh/7fQi71E6XM\"",
		"mtime": "2026-07-02T14:40:21.748Z",
		"size": 3362,
		"path": "../public/assets/privacy-JL8etme4.js"
	},
	"/assets/Layout-Be8hu0Bm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18913-4ZwXeafpmUCaobEfDHn0IWVZgN4\"",
		"mtime": "2026-07-02T14:40:21.737Z",
		"size": 100627,
		"path": "../public/assets/Layout-Be8hu0Bm.js"
	},
	"/assets/index-DbRWakCV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"643b3-JQ/Db4LB3R+SGOgNgqmcgDwyyEw\"",
		"mtime": "2026-07-02T14:40:21.736Z",
		"size": 410547,
		"path": "../public/assets/index-DbRWakCV.js"
	},
	"/assets/inter-latin-wght-normal-Dx4kXJAl.woff2": {
		"type": "font/woff2",
		"etag": "\"bc80-8R1ym7Ck2DUNLqPQ/AYs9u8tUpg\"",
		"mtime": "2026-07-02T14:40:21.775Z",
		"size": 48256,
		"path": "../public/assets/inter-latin-wght-normal-Dx4kXJAl.woff2"
	},
	"/assets/SafeImage-DAG6zH69.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bf-LPZ49w+sIABfXnOC4pNw0MT0O1w\"",
		"mtime": "2026-07-02T14:40:21.738Z",
		"size": 1215,
		"path": "../public/assets/SafeImage-DAG6zH69.js"
	},
	"/assets/shield-check-BS7urG_E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1aa-sIPoQs1YhSfqBP6UYv00A6cWx4o\"",
		"mtime": "2026-07-02T14:40:21.748Z",
		"size": 426,
		"path": "../public/assets/shield-check-BS7urG_E.js"
	},
	"/assets/styles-7qBi4Q5A.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19410-HMGSFWlkyXfIPkvh3fpteMdkPbE\"",
		"mtime": "2026-07-02T14:40:21.776Z",
		"size": 103440,
		"path": "../public/assets/styles-7qBi4Q5A.css"
	},
	"/assets/temples-Bj6uAphy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"115f-h1jZ2cyj6/aNwOqk7IDuiamY9vA\"",
		"mtime": "2026-07-02T14:40:21.749Z",
		"size": 4447,
		"path": "../public/assets/temples-Bj6uAphy.js"
	},
	"/assets/terms-Cp6NMCQm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf2-Eqi1DEQX6X4HUEvGh2/ndSpNci8\"",
		"mtime": "2026-07-02T14:40:21.749Z",
		"size": 3314,
		"path": "../public/assets/terms-Cp6NMCQm.js"
	},
	"/assets/tiro-devanagari-hindi-latin-400-normal-BrPQYisN.woff2": {
		"type": "font/woff2",
		"etag": "\"6014-RwQe8ImM06aKRCvCVYZAF81kidg\"",
		"mtime": "2026-07-02T14:40:21.779Z",
		"size": 24596,
		"path": "../public/assets/tiro-devanagari-hindi-latin-400-normal-BrPQYisN.woff2"
	},
	"/assets/tiro-devanagari-hindi-devanagari-400-normal-0whtTZiM.woff": {
		"type": "font/woff",
		"etag": "\"140ac-LlsiqqqsggCz03bSaDM3h9JNxz4\"",
		"mtime": "2026-07-02T14:40:21.777Z",
		"size": 82092,
		"path": "../public/assets/tiro-devanagari-hindi-devanagari-400-normal-0whtTZiM.woff"
	},
	"/assets/tiro-devanagari-hindi-devanagari-400-normal-DL6NPGem.woff2": {
		"type": "font/woff2",
		"etag": "\"180d0-o7Ca5lNiLbwHW8EiXv/21i8i6PM\"",
		"mtime": "2026-07-02T14:40:21.777Z",
		"size": 98512,
		"path": "../public/assets/tiro-devanagari-hindi-devanagari-400-normal-DL6NPGem.woff2"
	},
	"/assets/tiro-devanagari-hindi-latin-400-normal-Da_-1e8h.woff": {
		"type": "font/woff",
		"etag": "\"52ac-QhFJhU4aLb60LuEn4t2+JiOr7hc\"",
		"mtime": "2026-07-02T14:40:21.779Z",
		"size": 21164,
		"path": "../public/assets/tiro-devanagari-hindi-latin-400-normal-Da_-1e8h.woff"
	},
	"/assets/tiro-devanagari-hindi-latin-ext-400-normal-BnG3gmM1.woff2": {
		"type": "font/woff2",
		"etag": "\"2f74-J8ocUWFlqXMxSQO060ClOMPnvNI\"",
		"mtime": "2026-07-02T14:40:21.780Z",
		"size": 12148,
		"path": "../public/assets/tiro-devanagari-hindi-latin-ext-400-normal-BnG3gmM1.woff2"
	},
	"/assets/vrindavan-BHHkRRi7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a-Nq8p8bXUwCx0rn911XQHfBNCCfE\"",
		"mtime": "2026-07-02T14:40:21.751Z",
		"size": 138,
		"path": "../public/assets/vrindavan-BHHkRRi7.js"
	},
	"/assets/tiro-devanagari-hindi-latin-ext-400-normal-JAvBDRXm.woff": {
		"type": "font/woff",
		"etag": "\"26c4-fxxflB4KpcYwBpZ6Xv4fvTojUd4\"",
		"mtime": "2026-07-02T14:40:21.781Z",
		"size": 9924,
		"path": "../public/assets/tiro-devanagari-hindi-latin-ext-400-normal-JAvBDRXm.woff"
	},
	"/assets/useStore-O6Bb7kxg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b95-GrRXjZzKV7bw8NxpT58SXUjvlVY\"",
		"mtime": "2026-07-02T14:40:21.750Z",
		"size": 27541,
		"path": "../public/assets/useStore-O6Bb7kxg.js"
	},
	"/assets/vrindavan.index-CC2guSqH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4a-76yvOd72iN1d4cacjHO3Uz8fBl4\"",
		"mtime": "2026-07-02T14:40:21.753Z",
		"size": 3914,
		"path": "../public/assets/vrindavan.index-CC2guSqH.js"
	},
	"/assets/vrindavan.guide-CVmd-qPN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"97b-2xmvI/ZueWc1haqlm+m+lpXAvpQ\"",
		"mtime": "2026-07-02T14:40:21.753Z",
		"size": 2427,
		"path": "../public/assets/vrindavan.guide-CVmd-qPN.js"
	},
	"/assets/vrindavan.itinerary-r-CpIBPi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9db-/pHXoJkMEvkNjNupw0XBcp+XiYw\"",
		"mtime": "2026-07-02T14:40:21.755Z",
		"size": 2523,
		"path": "../public/assets/vrindavan.itinerary-r-CpIBPi.js"
	},
	"/assets/vrindavan._place-CpFEUnXa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1f8-1e4qp3CKpI4qNOYiO31SXSrYm2s\"",
		"mtime": "2026-07-02T14:40:21.751Z",
		"size": 504,
		"path": "../public/assets/vrindavan._place-CpFEUnXa.js"
	},
	"/assets/vrindavan._place-cVmxzPew.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16dc-WzsWaJgGajvwqjcRpvmgy2Ujz94\"",
		"mtime": "2026-07-02T14:40:21.752Z",
		"size": 5852,
		"path": "../public/assets/vrindavan._place-cVmxzPew.js"
	},
	"/assets/vrindavan._place-oU5CTAcn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-UP0ckG2379gNaSJBc9ngrI+Klx0\"",
		"mtime": "2026-07-02T14:40:21.752Z",
		"size": 461,
		"path": "../public/assets/vrindavan._place-oU5CTAcn.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_zT0k8q = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_zT0k8q
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
