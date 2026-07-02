import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { r as Layout } from "./Layout-KvTqmPj2.mjs";
import { t as ITINERARIES } from "./vrindavan-data-sJ6PZ2W-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan.itinerary-DZuG4AKH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ItineraryPage() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	const [active, setActive] = (0, import_react.useState)(ITINERARIES[0].id);
	const it = ITINERARIES.find((x) => x.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-[0.3em] text-accent",
				children: "Yatra · यात्रा"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: `mt-3 text-4xl sm:text-5xl ${isHi ? "font-hindi" : "font-display"}`,
				children: t("itin.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 max-w-2xl text-muted-foreground ${isHi ? "font-hindi" : ""}`,
				children: t("itin.lead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: ITINERARIES.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setActive(i.id),
					className: `rounded-full border px-4 py-2 text-sm font-medium transition ${active === i.id ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background/60 hover:border-accent/60"}`,
					children: [
						i.days,
						"-",
						isHi ? "दिवस" : "Day"
					]
				}, i.id))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 pb-20 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `text-2xl ${isHi ? "font-hindi" : "font-display"}`,
					children: isHi ? it.title.hi : it.title.en
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-1 text-muted-foreground ${isHi ? "font-hindi" : ""}`,
					children: isHi ? it.lead.hi : it.lead.en
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative space-y-6 border-s border-border ps-6",
				children: it.plan.map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute -left-[33px] top-1 grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground",
						children: i + 1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-poppy rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: `text-lg font-semibold ${isHi ? "font-hindi" : ""}`,
							children: isHi ? day.title.hi : day.title.en
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3",
							children: day.blocks.map((b, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[100px_1fr] items-start gap-3 border-t border-border/60 pt-3 first:border-0 first:pt-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium uppercase tracking-wider text-accent",
									children: b.time
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm text-foreground/90 ${isHi ? "font-hindi" : ""}`,
									children: isHi ? b.hi : b.en
								})]
							}, j))
						})]
					})]
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 rounded-lg border border-dashed border-border/70 p-4 text-sm text-muted-foreground",
				children: t("verify.timings")
			})
		]
	})] });
}
//#endregion
export { ItineraryPage as component };
