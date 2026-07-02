import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as ShieldCheck, w as Clock } from "../_libs/lucide-react.mjs";
import { r as Layout } from "./Layout-KvTqmPj2.mjs";
import { n as PLACES } from "./vrindavan-data-sJ6PZ2W-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan.guide-BEARvf2D.js
var import_jsx_runtime = require_jsx_runtime();
function GuidePage() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-4 py-14 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm uppercase tracking-[0.3em] text-accent",
					children: "Braj · ब्रज"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `mt-3 text-4xl sm:text-5xl ${isHi ? "font-hindi" : "font-display"}`,
					children: t("guide.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-4 max-w-2xl text-muted-foreground ${isHi ? "font-hindi" : ""}`,
					children: isHi ? "ब्रज के प्रत्येक स्थान के प्रमुख मन्दिर, उनकी कथा एवं दर्शन-व्यवस्था।" : "Principal temples of each Braj town — history, deities, timings and etiquette."
				})
			]
		}),
		PLACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-5xl px-4 pb-14 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `text-3xl ${isHi ? "font-hindi" : "font-display"}`,
					children: isHi ? p.name.hi : p.name.en
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/vrindavan/$place",
					params: { place: p.slug },
					className: "text-sm text-accent hover:underline",
					children: [isHi ? "विस्तार" : "Open page", " →"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: p.temples.map((te) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "card-poppy rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-semibold",
							children: te.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-xs text-accent",
							children: te.deity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-sm text-foreground/85 ${isHi ? "font-hindi" : ""}`,
							children: isHi ? te.about.hi : te.about.en
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" }), te.timings]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" }), te.etiquette]
							})]
						})
					]
				}, te.name))
			})]
		}, p.slug)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-5xl px-4 pb-16 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg border border-dashed border-border/70 p-4 text-sm text-muted-foreground",
				children: t("verify.timings")
			})
		})
	] });
}
//#endregion
export { GuidePage as component };
