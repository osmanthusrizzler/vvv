import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { o as TriangleAlert, x as Instagram } from "../_libs/lucide-react.mjs";
import { r as Layout } from "./Layout-KvTqmPj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/temples-DnYSWvFO.js
var import_jsx_runtime = require_jsx_runtime();
var TEMPLE_HANDLES = [
	{
		name: "Iskcon Vrindavan (Krishna-Balaram Mandir)",
		handle: "iskconvrindavanofficial",
		place: "Vrindavan",
		note: {
			en: "Daily darshan & arati live.",
			hi: "दैनिक दर्शन एवं आरती लाइव।"
		}
	},
	{
		name: "Iskcon Mathura (Krishna Janmasthan)",
		handle: "iskconmathura",
		place: "Mathura",
		note: {
			en: "Festivals and Janmashtami updates.",
			hi: "उत्सव एवं जन्माष्टमी समाचार।"
		}
	},
	{
		name: "Prem Mandir / Jagadguru Kripalu Parishat",
		handle: "jkpprem.mandir",
		place: "Vrindavan",
		note: {
			en: "Fountain show timings, satsangs.",
			hi: "फव्वारा समय, सत्संग।"
		}
	},
	{
		name: "Banke Bihari Mandir (community page)",
		handle: "shri_banke_bihari_mandir_vrindavan",
		place: "Vrindavan",
		note: {
			en: "Darshan glimpses; verify before donating.",
			hi: "दर्शन झलक; दान से पूर्व सत्यापन करें।"
		}
	},
	{
		name: "Radha Raman Mandir (community page)",
		handle: "radharamanmandir",
		place: "Vrindavan",
		note: {
			en: "Seva and utsav photos.",
			hi: "सेवा एवं उत्सव चित्र।"
		}
	},
	{
		name: "Radha Vallabh Mandir (community page)",
		handle: "shriradhavallabhmandir",
		place: "Vrindavan",
		note: {
			en: "Hit-Chaurasi padas often posted.",
			hi: "हित-चौरासी पद प्रायः साझा।"
		}
	},
	{
		name: "Shriji Mandir Barsana (community page)",
		handle: "shrijiradharanibarsana",
		place: "Barsana",
		note: {
			en: "Lathmar Holi and Radhashtami coverage.",
			hi: "लठमार होली एवं राधाष्टमी।"
		}
	},
	{
		name: "Nand Bhavan, Nandgaon (community page)",
		handle: "nandbhavannandgaon",
		place: "Nandgaon",
		note: {
			en: "Small temple, occasional posts.",
			hi: "छोटा मन्दिर, यदा-कदा पोस्ट।"
		}
	},
	{
		name: "Govardhan / Daanghati (community page)",
		handle: "girirajdaanghati",
		place: "Govardhan",
		note: {
			en: "Parikrama updates and festivals.",
			hi: "परिक्रमा समाचार एवं उत्सव।"
		}
	},
	{
		name: "Dwarkadhish Mandir Mathura (community page)",
		handle: "dwarkadhishmathura",
		place: "Mathura",
		note: {
			en: "Holi here is unforgettable.",
			hi: "यहाँ की होली अविस्मरणीय।"
		}
	}
];
function TemplesPage() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	const grouped = TEMPLE_HANDLES.reduce((acc, h) => {
		(acc[h.place] ||= []).push(h);
		return acc;
	}, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-5xl px-4 py-14 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm uppercase tracking-[0.3em] text-accent",
				children: "Directory · सूची"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: `mt-3 text-4xl sm:text-5xl ${isHi ? "font-hindi" : "font-display"}`,
				children: t("temples.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 max-w-2xl text-muted-foreground ${isHi ? "font-hindi" : ""}`,
				children: t("temples.lead")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-start gap-3 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: isHi ? "font-hindi" : "",
					children: t("common.disclaimer")
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
		children: Object.entries(grouped).map(([place, list]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-2xl font-semibold",
				children: place
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `https://instagram.com/${h.handle}`,
					target: "_blank",
					rel: "noreferrer noopener",
					className: "card-poppy group flex items-start gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#FFC371] via-[#FF5F6D] to-[#833AB4] text-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-6 w-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "truncate font-semibold",
								children: h.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "truncate text-sm text-accent",
								children: ["@", h.handle]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-1 text-xs text-muted-foreground ${isHi ? "font-hindi" : ""}`,
								children: isHi ? h.note.hi : h.note.en
							})
						]
					})]
				}, h.handle))
			})]
		}, place))
	})] });
}
//#endregion
export { TemplesPage as component };
