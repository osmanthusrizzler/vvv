import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime, m as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as useI18n, n as PALETTES, o as useTheme } from "./i18n-wPeyeW5G.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Check, b as Languages, c as Sun, g as Moon, h as Palette, t as X, v as Menu, x as Instagram } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Trigger, n as Portal, r as Root2, t as Content2 } from "../_libs/@radix-ui/react-popover+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-KvTqmPj2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_meri_radha_png_asset_default = {
	version: 1,
	asset_id: "077d4f32-6bb6-4ee7-b907-d5a5140e7e96",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "https://i.ibb.co/DgSXyvsG/logo-meri-radha.png",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/077d4f32-6bb6-4ee7-b907-d5a5140e7e96/logo-meri-radha.png",
	original_filename: "logo-meri-radha.png",
	size: 610661,
	content_type: "image/png",
	created_at: "2026-06-30T16:23:31Z"
};
function Logo({ className = "h-10 w-auto" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_meri_radha_png_asset_default.url,
		alt: "Meri Radha · मेरी राधा",
		className,
		width: 1152,
		height: 576
	});
}
function BangleDivider({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `bangle-divider w-full ${className}`,
		"aria-hidden": "true"
	});
}
function PeacockEye({ className = "h-6 w-6" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: "pe",
				cx: "50%",
				cy: "50%",
				r: "50%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "#0B1F4A"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "35%",
						stopColor: "#1F6F8B"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "70%",
						stopColor: "#D4AF37"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "#2E7A4B",
						stopOpacity: "0"
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: "32",
				rx: "22",
				ry: "28",
				fill: "url(#pe)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "32",
				cy: "30",
				rx: "6",
				ry: "9",
				fill: "#0B1F4A"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Popover = Root2;
var PopoverTrigger = Trigger;
var PopoverContent = import_react.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	align,
	sideOffset,
	className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)", className),
	...props
}) }));
PopoverContent.displayName = Content2.displayName;
function ThemePicker() {
	const { palette, setPalette } = useTheme();
	const { lang } = useI18n();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				"aria-label": "Choose theme",
				className: "rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "h-5 w-5" })
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
			align: "end",
			className: "w-72 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground",
				children: lang === "hi" ? "थीम चुनें" : "Choose a theme"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1",
				children: PALETTES.map((p) => {
					const active = palette === p.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setPalette(p.id);
							setOpen(false);
						},
						className: `flex w-full items-center justify-between gap-3 rounded-lg px-2 py-2 text-left text-sm transition ${active ? "bg-muted" : "hover:bg-muted/60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex overflow-hidden rounded-md ring-1 ring-border",
								children: p.swatch.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-6 w-3",
									style: { background: c }
								}, c))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: lang === "hi" ? "font-hindi" : "",
								children: lang === "hi" ? p.hi : p.name
							})]
						}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-accent" })]
					}) }, p.id);
				})
			})]
		})]
	});
}
function NavLinks({ onNavigate }) {
	const { t } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
		{
			to: "/",
			key: "nav.home"
		},
		{
			to: "/chant",
			key: "nav.chant"
		},
		{
			to: "/vrindavan",
			key: "nav.vrindavan"
		},
		{
			to: "/vrindavan/itinerary",
			key: "nav.itinerary"
		},
		{
			to: "/temples",
			key: "nav.temples"
		},
		{
			to: "/faq",
			key: "nav.faq"
		},
		{
			to: "/about",
			key: "nav.about"
		},
		{
			to: "/contact",
			key: "nav.contact"
		}
	].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: i.to,
		onClick: onNavigate,
		activeOptions: { exact: i.to === "/" },
		activeProps: { className: "text-accent" },
		className: "text-sm font-medium text-foreground/80 transition-colors hover:text-accent",
		children: t(i.key)
	}, i.to)) });
}
function ThemeToggle() {
	const { theme, setTheme, resolved } = useTheme();
	const getNext = () => {
		if (theme === "light") return "dark";
		if (theme === "dark") return "system";
		return "light";
	};
	const next = getNext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		"aria-label": `Switch to ${next === "light" ? "light" : next === "dark" ? "dark" : "system"} mode`,
		onClick: () => setTheme(next),
		className: "rounded-full",
		children: resolved === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-5 w-5" })
	});
}
function LangToggle() {
	const { lang, setLang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "sm",
		onClick: () => setLang(lang === "en" ? "hi" : "en"),
		"aria-label": "Toggle language",
		className: "gap-1.5 rounded-full px-2 sm:px-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Languages, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `hidden sm:inline ${lang === "hi" ? "font-hindi" : ""}`,
			children: lang === "en" ? "हिन्दी" : "English"
		})]
	});
}
function Layout({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { lang } = useI18n();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-3 sm:gap-4 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-8 w-auto sm:h-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center justify-center gap-5 lg:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-0.5 sm:gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemePicker, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "lg:hidden",
									onClick: () => setOpen((v) => !v),
									"aria-label": "Open menu",
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							]
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border/60 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 text-base",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, { onNavigate: () => setOpen(false) })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mt-16 border-t border-border/60 bg-background/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, { className: "mb-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 md:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-10 w-auto" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-3 text-sm text-muted-foreground ${lang === "hi" ? "font-hindi" : ""}`,
										children: lang === "hi" ? "श्री राधा के भक्तों का अपना घर।" : "A devotee’s home for Sri Radha Rani."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://instagram.com/meriradha.com_official",
										target: "_blank",
										rel: "noreferrer",
										className: "mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @meriradha.com_official"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-3 font-semibold",
									children: "Devotion"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-1.5 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/chant",
											className: "hover:text-accent",
											children: "Chant & Mala"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/vrindavan",
											className: "hover:text-accent",
											children: "Vrindavan Guide"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/vrindavan/itinerary",
											className: "hover:text-accent",
											children: "Braj Itinerary"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/temples",
											className: "hover:text-accent",
											children: "Temple Directory"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/faq",
											className: "hover:text-accent",
											children: "FAQ"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mb-3 font-semibold",
									children: "Company"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-1.5 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/about",
											className: "hover:text-accent",
											children: "About Us"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "hover:text-accent",
											children: "Contact Us"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/privacy",
											className: "hover:text-accent",
											children: "Privacy Policy"
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/terms",
											className: "hover:text-accent",
											children: "Terms & Conditions"
										}) })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "mb-3 flex items-center gap-2 font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockEye, { className: "h-5 w-5" }), " Radhe Radhe"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground",
										children: "Made with devotion for the bhaktas of Sri Radha Krishna."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-3 text-xs text-muted-foreground",
										children: [
											"© ",
											(/* @__PURE__ */ new Date()).getFullYear(),
											" meriradha.com — All rights reserved."
										]
									})
								]
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { cn as a, PeacockEye as i, Button as n, Layout as r, BangleDivider as t };
