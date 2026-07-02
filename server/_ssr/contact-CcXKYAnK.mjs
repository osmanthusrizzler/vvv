import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { x as Instagram } from "../_libs/lucide-react.mjs";
import { i as PeacockEye, r as Layout, t as BangleDivider } from "./Layout-KvTqmPj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CcXKYAnK.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockEye, { className: "mx-auto h-10 w-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-display sm:text-5xl",
				children: "Contact Us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-4 max-w-xl text-lg text-muted-foreground",
				children: "Radhe Radhe. We would love to hear from fellow devotees — feedback, corrections about temple timings, suggestions for the site, all welcome."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-8 max-w-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-10 grid max-w-xl gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "https://instagram.com/meriradha.com_official",
					target: "_blank",
					rel: "noreferrer",
					className: "card-poppy group flex flex-col items-center gap-2 rounded-2xl p-6 transition-transform hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-8 w-8 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: "Instagram"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-lg font-semibold",
							children: "@meriradha.com_official"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "DMs open for devotees"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-muted-foreground",
				children: "Please note: we are not the official representative of any temple. For temple bookings and official information, contact the temple management directly."
			})
		]
	}) });
}
//#endregion
export { ContactPage as component };
