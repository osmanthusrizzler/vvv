import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { S as ExternalLink, k as ArrowLeft, u as ShieldCheck, w as Clock, y as MapPin } from "../_libs/lucide-react.mjs";
import { r as Layout, t as BangleDivider } from "./Layout-KvTqmPj2.mjs";
import { n as PLACES } from "./vrindavan-data-sJ6PZ2W-.mjs";
import { n as Route, t as PLACE_META } from "./vrindavan._place-B3CUMIbe.mjs";
import { t as SafeImage } from "./SafeImage-FVIsLiXx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan._place-43pVlcUu.js
var import_jsx_runtime = require_jsx_runtime();
function PlacePage() {
	const p = Route.useLoaderData();
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	const meta = PLACE_META[p.slug];
	const heroUrl = meta?.hero ?? p.image.url;
	const mapEmbed = meta ? `https://www.google.com/maps?q=${encodeURIComponent(meta.mapQuery)}&output=embed` : "";
	const mapLink = meta ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(meta.mapQuery)}` : "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: heroUrl,
					alt: `${p.name.en} — devotional photograph`,
					className: "h-full w-full object-cover opacity-60",
					loading: "eager"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 pt-14 pb-10 sm:px-6 sm:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/vrindavan",
						className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }),
							" ",
							isHi ? "वृन्दावन" : "Vrindavan"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs uppercase tracking-[0.3em] text-accent sm:text-sm",
						children: "Braj · भारत"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: `mt-2 text-4xl sm:text-6xl ${isHi ? "font-hindi" : "font-display"}`,
						children: isHi ? p.name.hi : p.name.en
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-3 max-w-2xl text-base text-foreground/85 sm:text-lg ${isHi ? "font-hindi" : ""}`,
						children: isHi ? p.tagline.hi : p.tagline.en
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-base leading-relaxed text-foreground/90 ${isHi ? "font-hindi text-lg" : ""}`,
				children: isHi ? p.about.hi : p.about.en
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, {})
			})]
		}),
		meta && meta.gallery.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 pb-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
				children: meta.gallery.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "card-poppy overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
						src: g.url,
						alt: g.alt,
						loading: "lazy",
						className: "aspect-square h-full w-full object-cover"
					})
				}, i))
			})
		}),
		meta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-poppy overflow-hidden rounded-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-between gap-2 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-xl font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-accent" }), isHi ? "मानचित्र पर देखें" : "Location on Google Maps"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mapLink,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1 text-sm text-accent hover:underline",
						children: [
							isHi ? "मानचित्र खोलें" : "Open in Maps",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] w-full sm:aspect-[16/8]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: `Map of ${p.name.en}`,
						src: mapEmbed,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade",
						className: "h-full w-full border-0",
						allowFullScreen: true
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: `mb-6 text-3xl ${isHi ? "font-hindi" : "font-display"}`,
					children: isHi ? "मन्दिर एवं स्थल" : "Temples & Places"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-5 md:grid-cols-2",
					children: p.temples.map((te) => {
						const mLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${te.name}, ${p.name.en}, India`)}`;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-poppy rounded-2xl p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold",
									children: te.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-accent",
									children: te.deity
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-3 text-sm leading-relaxed text-foreground/85 ${isHi ? "font-hindi" : ""}`,
									children: isHi ? te.about.hi : te.about.en
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [isHi ? "समय" : "Timings", ":"] }),
												" ",
												te.timings
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [isHi ? "मर्यादा" : "Etiquette", ":"] }),
												" ",
												te.etiquette
											] })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: mLink,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-1 text-accent hover:underline",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5" }),
												" ",
												isHi ? "मानचित्र" : "Open in Google Maps"
											]
										})
									]
								})
							]
						}, te.name);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 rounded-lg border border-dashed border-border/70 p-4 text-sm text-muted-foreground",
					children: t("verify.timings")
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 text-xl font-semibold",
				children: isHi ? "अन्य स्थल" : "Other places of Braj"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: PLACES.filter((x) => x.slug !== p.slug).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/vrindavan/$place",
					params: { place: x.slug },
					className: "rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm hover:border-accent",
					children: isHi ? x.name.hi : x.name.en
				}, x.slug))
			})]
		})
	] });
}
//#endregion
export { PlacePage as component };
