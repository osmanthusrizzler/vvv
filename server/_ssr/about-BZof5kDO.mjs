import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as PeacockEye, r as Layout, t as BangleDivider } from "./Layout-KvTqmPj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BZof5kDO.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockEye, { className: "h-9 w-9" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: `mt-4 text-4xl sm:text-5xl ${isHi ? "font-hindi" : "font-display"}`,
				children: t("about.title")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-8 space-y-5 text-lg leading-relaxed text-foreground/90 ${isHi ? "font-hindi" : ""}`,
				children: isHi ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "मेरी राधा एक छोटा-सा, भक्तिप्रधान घर है — श्री राधा रानी एवं श्री कृष्ण के भक्तों के लिए। न विज्ञापन, न ट्रैकिंग, न शोर।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "आरम्भ में तीन सरल वस्तुएँ — एक जप गणक, ब्रज की मार्गदर्शिकाएँ एवं मन्दिरों की सूची। आगे और कुछ धीरे-धीरे जुड़ता रहेगा।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "यह स्थल किसी मन्दिर, सम्प्रदाय या व्यक्ति का आधिकारिक प्रतिनिधि नहीं है। यदि कोई त्रुटि हो तो कृपया सूचित कीजिए — हम आभारी रहेंगे।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "राधे राधे।" })
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Meri Radha is a small, devotion-first home for the bhaktas of Sri Radha Rani and Sri Krishna. No ads. No tracking. No noise." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For now, three simple things — a japa counter, Braj guides and a temple directory. More will follow, slowly and with care." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This site is not the official representative of any temple, sampradaya or person. If you spot a mistake, please tell us — we’ll be grateful." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Radhe Radhe." })
				] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 max-w-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/chant",
						className: "rounded-full border border-border bg-background/60 px-4 py-2 hover:border-accent",
						children: "→ Chant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/vrindavan",
						className: "rounded-full border border-border bg-background/60 px-4 py-2 hover:border-accent",
						children: "→ Vrindavan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/temples",
						className: "rounded-full border border-border bg-background/60 px-4 py-2 hover:border-accent",
						children: "→ Temples"
					})
				]
			})
		]
	}) });
}
//#endregion
export { About as component };
