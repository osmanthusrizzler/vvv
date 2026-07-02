import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SafeImage-FVIsLiXx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var peacock_feather_png_asset_default = {
	version: 1,
	asset_id: "967c708b-7f96-4ed4-8669-c410e620847a",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "https://i.ibb.co/HDbSy3C1/peacock-feather.png",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/967c708b-7f96-4ed4-8669-c410e620847a/peacock-feather.png",
	original_filename: "peacock-feather.png",
	size: 1672097,
	content_type: "image/png",
	created_at: "2026-06-30T16:23:49Z"
};
function SafeImage({ src, alt, className, ...rest }) {
	const [errored, setErrored] = (0, import_react.useState)(false);
	if (errored) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative grid place-items-center bg-gradient-to-br from-[color:var(--krishna)] via-[color:var(--peacock)] to-[color:var(--vrindavan-green)] ${className ?? ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: peacock_feather_png_asset_default.url,
			alt: "",
			"aria-hidden": "true",
			className: "h-3/4 w-3/4 object-contain opacity-80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: alt
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		onError: () => setErrored(true),
		className,
		...rest
	});
}
//#endregion
export { SafeImage as t };
