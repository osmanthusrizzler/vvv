import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as BookOpen, O as ArrowRight, y as MapPin } from "../_libs/lucide-react.mjs";
import { r as Layout, t as BangleDivider } from "./Layout-KvTqmPj2.mjs";
import { n as PLACES } from "./vrindavan-data-sJ6PZ2W-.mjs";
import { t as SafeImage } from "./SafeImage-FVIsLiXx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan.index-CAh-5vum.js
var import_jsx_runtime = require_jsx_runtime();
var MAP_QUERIES = {
	vrindavan: "Vrindavan, Uttar Pradesh, India",
	mathura: "Mathura, Uttar Pradesh, India",
	barsana: "Barsana, Uttar Pradesh, India",
	nandgaon: "Nandgaon, Uttar Pradesh, India",
	govardhan: "Govardhan Hill, Uttar Pradesh, India",
	gokul: "Gokul, Uttar Pradesh, India"
};
var mapsUrl = (slug) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERIES[slug] ?? slug)}`;
function VrindavanIndex() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-[0.3em] text-accent",
				children: "Braj · ब्रज"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: `mt-3 text-4xl sm:text-6xl ${isHi ? "font-hindi leading-tight" : "font-display"}`,
				children: t("vrindavan.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 max-w-2xl text-lg text-muted-foreground ${isHi ? "font-hindi" : ""}`,
				children: t("vrindavan.lead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/vrindavan/guide",
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium transition hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }), isHi ? "मन्दिर मार्गदर्शिका" : "Temple Guide"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/vrindavan/itinerary",
					className: "inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium transition hover:border-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), isHi ? "यात्रा क्रम" : "Itineraries"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, {})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pb-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: PLACES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-poppy group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: mapsUrl(p.slug),
					target: "_blank",
					rel: "noreferrer",
					"aria-label": `Open ${p.name.en} on Google Maps`,
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
								src: p.image.url,
								alt: p.image.alt,
								loading: "lazy",
								decoding: "async",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-0 left-0 right-0 p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: `text-2xl font-semibold ${isHi ? "font-hindi" : ""}`,
									children: isHi ? p.name.hi : p.name.en
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-1 text-sm text-muted-foreground ${isHi ? "font-hindi" : ""}`,
									children: isHi ? p.tagline.hi : p.tagline.en
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3 p-5 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mapsUrl(p.slug),
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 font-medium text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), isHi ? "मानचित्र" : "Google Maps"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/vrindavan/$place",
						params: { place: p.slug },
						className: "inline-flex items-center gap-1 text-muted-foreground hover:text-accent",
						children: [isHi ? "मन्दिर विवरण" : "Temple details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
					})]
				})]
			}, p.slug))
		})
	})] });
}
//#endregion
export { VrindavanIndex as component };
