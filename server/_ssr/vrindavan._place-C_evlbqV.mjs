import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as Layout } from "./Layout-KvTqmPj2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan._place-C_evlbqV.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-24 text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-semibold",
			children: "Couldn’t load this place"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: error.message
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: reset,
			className: "mt-4 text-accent",
			children: "Try again"
		})
	]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
