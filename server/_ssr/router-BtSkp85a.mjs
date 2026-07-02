import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as ThemeProvider, t as I18nProvider } from "./i18n-wPeyeW5G.mjs";
import { _ as useRouter, c as HeadContent, d as Outlet, f as ScriptOnce, g as Link, h as createRootRouteWithContext, k as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as FAQS } from "./faq-BcljCtbq.mjs";
import { n as PLACES, t as ITINERARIES } from "./vrindavan-data-sJ6PZ2W-.mjs";
import { n as Route$14 } from "./vrindavan._place-B3CUMIbe.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BtSkp85a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-7qBi4Q5A.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var favicon_source_png_asset_default = {
	version: 1,
	asset_id: "6cd4c958-f9cc-4672-8486-2371d3b95690",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "/__l5e/assets-v1/6cd4c958-f9cc-4672-8486-2371d3b95690/favicon-source.png",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/6cd4c958-f9cc-4672-8486-2371d3b95690/favicon-source.png",
	original_filename: "favicon-source.png",
	size: 933113,
	content_type: "image/png",
	created_at: "2026-06-30T16:23:38Z"
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold gold-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you’re looking for isn’t in this grove. Try the home page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn’t load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#0B1F4A"
			},
			{
				name: "google-adsense-account",
				content: "ca-pub-7588749394930957"
			},
			{ title: "Meri Radha — Radha Rani devotee’s home · Chant, Vrindavan, Braj · मेरी राधा" },
			{
				name: "description",
				content: "Meri Radha — the devotee's home for Sri Radha Rani. Free japa & mala counter for Radhe Radhe and Hare Krishna mahamantra, voice-loop chanting, complete guide to Vrindavan, Mathura, Barsana, Nandgaon, Govardhan and Gokul with temple maps, timings and itineraries. Hindi & English."
			},
			{
				name: "author",
				content: "Meri Radha"
			},
			{
				name: "keywords",
				content: "Radha, Radha Rani, Radhe Radhe, Meri Radha, meriradha, Radha Krishna, Krishna, Vrindavan, Vrindavan temples, Mathura, Barsana, Nandgaon, Govardhan, Gokul, Braj, Braj parikrama, japa mala counter, Hare Krishna mahamantra, Hindu devotional, Hinduism, Banke Bihari, Prem Mandir, Radha Raman, Radha Vallabh, Iskcon Vrindavan, Krishna Janmabhoomi, Shriji temple Barsana, Radha Kund, Radhashtami, Janmashtami, Lathmar Holi, bhakti, kirtan, chanting, devotional Hindi"
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large, max-snippet:-1"
			},
			{
				name: "language",
				content: "English, Hindi"
			},
			{
				name: "geo.region",
				content: "IN-UP"
			},
			{
				name: "geo.placename",
				content: "Vrindavan"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Meri Radha"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				property: "og:locale:alternate",
				content: "hi_IN"
			},
			{
				property: "og:title",
				content: "Meri Radha — Radha Rani devotee’s home · Chant, Vrindavan, Braj · मेरी राधा"
			},
			{
				property: "og:description",
				content: "MeriRadha.com – Connect with Shri Radha Through the Power of Naam Jaap. Meri Radha | Radhe Radhe Name Chanting, Vrindavan Dham & Radha Rani Bhakti |"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@meriradha"
			},
			{
				name: "twitter:title",
				content: "Meri Radha — Radha Rani devotee’s home · Chant, Vrindavan, Braj · मेरी राधा"
			},
			{
				name: "description",
				content: "MeriRadha.com – Connect with Shri Radha Through the Power of Naam Jaap. Meri Radha | Radhe Radhe Name Chanting, Vrindavan Dham & Radha Rani Bhakti |"
			},
			{
				name: "twitter:description",
				content: "MeriRadha.com – Connect with Shri Radha Through the Power of Naam Jaap. Meri Radha | Radhe Radhe Name Chanting, Vrindavan Dham & Radha Rani Bhakti |"
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/U4NFZbrypbV9ThJyOPzJSfDrebp2/social-images/social-1782889127662-logo-meri-radha_(1).webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/U4NFZbrypbV9ThJyOPzJSfDrebp2/social-images/social-1782889127662-logo-meri-radha_(1).webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: favicon_source_png_asset_default.url
			},
			{
				rel: "apple-touch-icon",
				href: favicon_source_png_asset_default.url
			},
			{
				rel: "preconnect",
				href: "https://pagead2.googlesyndication.com"
			},
			{
				rel: "preconnect",
				href: "https://www.google.com"
			}
		],
		scripts: [
			{
				src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7588749394930957",
				async: true,
				crossOrigin: "anonymous"
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					name: "Meri Radha",
					alternateName: "मेरी राधा",
					url: "/",
					inLanguage: ["en", "hi"],
					potentialAction: {
						"@type": "SearchAction",
						target: "/?q={search_term_string}",
						"query-input": "required name=search_term_string"
					}
				})
			},
			{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Organization",
					name: "Meri Radha",
					alternateName: "meriradha.com",
					url: "/",
					logo: favicon_source_png_asset_default.url,
					sameAs: ["https://instagram.com/meriradha.com_official"]
				})
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScriptOnce, { children: `(function(){try{var t=localStorage.getItem('meriradha:theme');t=t?JSON.parse(t):'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('meriradha:lang');if(l){document.documentElement.lang=JSON.parse(l);}var p=localStorage.getItem('meriradha:palette');if(p){document.documentElement.setAttribute('data-palette',JSON.parse(p));}}catch(e){}})();` }),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(I18nProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true,
			closeButton: true
		})] }) })
	});
}
var $$splitComponentImporter$10 = () => import("./vrindavan-CBNw3bZK.mjs");
var Route$12 = createFileRoute("/vrindavan")({
	head: () => ({
		meta: [
			{ title: "Vrindavan Guide — Temples, Itineraries & Devotee Tips · Meri Radha" },
			{
				name: "description",
				content: "A devotee’s guide to Vrindavan, Mathura, Barsana, Nandgaon, Govardhan and Gokul — temple histories, darshan timings, etiquette and ready-made Braj itineraries."
			},
			{
				property: "og:title",
				content: "Vrindavan Guide · Meri Radha"
			},
			{
				property: "og:description",
				content: "The land of Radha — for devotees, not tourists."
			},
			{
				property: "og:url",
				content: "/vrindavan"
			},
			{
				property: "og:image",
				content: PLACES[0].image.url
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Sacred places of Braj",
				itemListElement: PLACES.map((p, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: p.name.en,
					url: `/vrindavan/${p.slug}`
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./terms-k6a-58gk.mjs");
var Route$11 = createFileRoute("/terms")({
	head: () => ({
		meta: [
			{ title: "Terms & Conditions · Meri Radha" },
			{
				name: "description",
				content: "Terms and conditions for using meriradha.com — a free devotional site for the bhaktas of Sri Radha Rani."
			},
			{
				property: "og:title",
				content: "Terms & Conditions · Meri Radha"
			},
			{
				property: "og:url",
				content: "/terms"
			}
		],
		links: [{
			rel: "canonical",
			href: "/terms"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./temples-DnYSWvFO.mjs");
var Route$10 = createFileRoute("/temples")({
	head: () => ({
		meta: [
			{ title: "Vrindavan Temple Instagram Directory · Meri Radha" },
			{
				name: "description",
				content: "Community-listed Instagram handles of well-known temples in Vrindavan, Mathura, Barsana, Nandgaon and Govardhan. Stay connected to darshan and updates — and verify before donating."
			},
			{
				property: "og:title",
				content: "Temple Directory · Meri Radha"
			},
			{
				property: "og:description",
				content: "Community-listed temple handles of Braj."
			},
			{
				property: "og:url",
				content: "/temples"
			}
		],
		links: [{
			rel: "canonical",
			href: "/temples"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var BASE_URL = "";
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/chant",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/vrindavan",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/vrindavan/guide",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/vrindavan/itinerary",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/temples",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/about",
				changefreq: "yearly",
				priority: "0.5"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.5"
			},
			{
				path: "/privacy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/terms",
				changefreq: "yearly",
				priority: "0.3"
			},
			...PLACES.map((p) => ({
				path: `/vrindavan/${p.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$7 = () => import("./privacy-BkzLHnpV.mjs");
var Route$8 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: "Privacy Policy · Meri Radha" },
			{
				name: "description",
				content: "How Meri Radha handles data — everything you save (chants, malas, custom names, uploaded audio) stays on your device. We show ads via Google AdSense."
			},
			{
				property: "og:title",
				content: "Privacy Policy · Meri Radha"
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./faq-Dmqv6ZJA.mjs");
var Route$7 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Radha Rani, Vrindavan, Chanting & Braj Yatra · Meri Radha" },
			{
				name: "description",
				content: "Answers to common questions about Sri Radha Rani, chanting Radhe Radhe, Hare Krishna mahamantra, Vrindavan darshan, Braj yatra, temple timings and japa mala counting."
			},
			{
				property: "og:title",
				content: "FAQ · Meri Radha"
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: FAQS.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-CcXKYAnK.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us · Meri Radha — Reach the meriradha.com team" },
			{
				name: "description",
				content: "Contact the Meri Radha team on Instagram @meriradha.com_official. Share feedback, corrections or requests for the Radha Rani devotee community."
			},
			{
				property: "og:title",
				content: "Contact · Meri Radha"
			},
			{
				property: "og:description",
				content: "Instagram: @meriradha.com_official"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact Meri Radha",
				url: "/contact",
				mainEntity: {
					"@type": "Organization",
					name: "Meri Radha",
					sameAs: ["https://instagram.com/meriradha.com_official"]
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./chant-Q-G7DiNK.mjs");
var Route$5 = createFileRoute("/chant")({
	head: () => ({
		meta: [
			{ title: "Free Japa Mala Counter — Chant Radhe Radhe, Hare Krishna Online · Meri Radha" },
			{
				name: "description",
				content: "Free online japa mala counter with voice loop, vibration and mala bead sound. Chant Radhe Radhe, Hare Krishna mahamantra, or record your own name. Track beads, malas and daily streak — all saved on your device."
			},
			{
				name: "keywords",
				content: "japa counter, mala counter, Radhe Radhe, Hare Krishna, mahamantra, online chanting, voice loop chanting, jaap tracker, Radha Rani chant, Hindu mantra counter"
			},
			{
				property: "og:title",
				content: "Free Japa & Mala Counter · Meri Radha"
			},
			{
				property: "og:description",
				content: "Voice loop, vibration and mala sound. A simple, beautiful counter for Sri Radha’s name."
			},
			{
				property: "og:url",
				content: "/chant"
			}
		],
		links: [{
			rel: "canonical",
			href: "/chant"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-BZof5kDO.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Meri Radha · A devotee’s home for Sri Radha Rani" },
			{
				name: "description",
				content: "Meri Radha is a free, devotion-first home for the bhaktas of Sri Radha Rani — japa tools, Vrindavan guides and a temple directory. Built with care, no ads, no tracking beyond what your device keeps."
			},
			{
				property: "og:title",
				content: "About · Meri Radha"
			},
			{
				property: "og:description",
				content: "Why Meri Radha exists, and what it is not."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var Route$3 = createFileRoute("/")({ beforeLoad: async () => {
	throw redirect({ to: "/chant" });
} });
var $$splitComponentImporter$2 = () => import("./vrindavan.index-CAh-5vum.mjs");
var Route$2 = createFileRoute("/vrindavan/")({
	head: () => ({ links: [{
		rel: "canonical",
		href: "/vrindavan"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./vrindavan.itinerary-DZuG4AKH.mjs");
var Route$1 = createFileRoute("/vrindavan/itinerary")({
	head: () => ({
		meta: [
			{ title: "Vrindavan Itinerary — 1, 3, 5 & 7 Day Braj Yatra Plans · Meri Radha" },
			{
				name: "description",
				content: "Ready-made devotee itineraries for Vrindavan, Mathura, Barsana, Nandgaon and Govardhan — from a 1-day essence to a 7-day slow bhakti retreat including Govardhan parikrama and Radha Kund."
			},
			{
				property: "og:title",
				content: "Braj Itineraries · Meri Radha"
			},
			{
				property: "og:description",
				content: "1-day, 3-day, 5-day and 7-day Braj yatra plans."
			},
			{
				property: "og:url",
				content: "/vrindavan/itinerary"
			}
		],
		links: [{
			rel: "canonical",
			href: "/vrindavan/itinerary"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ItemList",
				name: "Vrindavan Itineraries",
				itemListElement: ITINERARIES.map((it, i) => ({
					"@type": "ListItem",
					position: i + 1,
					name: it.title.en
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./vrindavan.guide-BEARvf2D.mjs");
var Route = createFileRoute("/vrindavan/guide")({
	head: () => ({
		meta: [
			{ title: "Braj Temple Guide — Banke Bihari, Radha Raman, Shriji · Meri Radha" },
			{
				name: "description",
				content: "A complete devotee’s guide to the temples of Vrindavan, Mathura, Barsana, Nandgaon, Govardhan and Gokul — history, darshan timings, deities and etiquette."
			},
			{
				property: "og:title",
				content: "Braj Temple Guide · Meri Radha"
			},
			{
				property: "og:description",
				content: "Every important temple of Braj, gathered with care."
			},
			{
				property: "og:url",
				content: "/vrindavan/guide"
			}
		],
		links: [{
			rel: "canonical",
			href: "/vrindavan/guide"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VrindavanRoute = Route$12.update({
	id: "/vrindavan",
	path: "/vrindavan",
	getParentRoute: () => Route$13
});
var TermsRoute = Route$11.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$13
});
var TemplesRoute = Route$10.update({
	id: "/temples",
	path: "/temples",
	getParentRoute: () => Route$13
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$13
});
var PrivacyRoute = Route$8.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$13
});
var FaqRoute = Route$7.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var ChantRoute = Route$5.update({
	id: "/chant",
	path: "/chant",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$4.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var VrindavanIndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => VrindavanRoute
});
var VrindavanItineraryRoute = Route$1.update({
	id: "/itinerary",
	path: "/itinerary",
	getParentRoute: () => VrindavanRoute
});
var VrindavanGuideRoute = Route.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => VrindavanRoute
});
var VrindavanRouteChildren = {
	VrindavanPlaceRoute: Route$14.update({
		id: "/$place",
		path: "/$place",
		getParentRoute: () => VrindavanRoute
	}),
	VrindavanGuideRoute,
	VrindavanItineraryRoute,
	VrindavanIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ChantRoute,
	ContactRoute,
	FaqRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	TemplesRoute,
	TermsRoute,
	VrindavanRoute: VrindavanRoute._addFileChildren(VrindavanRouteChildren)
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
