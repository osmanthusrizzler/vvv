import { M as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as place_govardhan_jpg_asset_default, c as temple_barsana_jpg_asset_default, i as place_gokul_jpg_asset_default, l as temple_prem_mandir_jpg_asset_default, o as place_mathura_jpg_asset_default, r as getPlace, s as place_nandgaon_jpg_asset_default } from "./vrindavan-data-sJ6PZ2W-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vrindavan._place-B3CUMIbe.js
var temple_banke_bihari_jpg_asset_default = {
	version: 1,
	asset_id: "96462ec2-1572-4acc-afc4-6362824fa58a",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "/__l5e/assets-v1/96462ec2-1572-4acc-afc4-6362824fa58a/temple-banke-bihari.jpg",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/96462ec2-1572-4acc-afc4-6362824fa58a/temple-banke-bihari.jpg",
	original_filename: "temple-banke-bihari.jpg",
	size: 110590,
	content_type: "image/jpeg",
	created_at: "2026-07-01T06:33:45Z"
};
var idol_radha_rani_jpg_asset_default = {
	version: 1,
	asset_id: "da9bd208-4d15-4794-a20d-432ee55d5476",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "/__l5e/assets-v1/da9bd208-4d15-4794-a20d-432ee55d5476/idol-radha-rani.jpg",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/da9bd208-4d15-4794-a20d-432ee55d5476/idol-radha-rani.jpg",
	original_filename: "idol-radha-rani.jpg",
	size: 222848,
	content_type: "image/jpeg",
	created_at: "2026-07-01T06:33:45Z"
};
var idol_krishna_jpg_asset_default = {
	version: 1,
	asset_id: "b4c16473-9626-4162-ba5a-5ad5758e696a",
	project_id: "186c9076-bf36-46ed-9921-bea17ea2de82",
	url: "/__l5e/assets-v1/b4c16473-9626-4162-ba5a-5ad5758e696a/idol-krishna.jpg",
	r2_key: "a/v1/186c9076-bf36-46ed-9921-bea17ea2de82/b4c16473-9626-4162-ba5a-5ad5758e696a/idol-krishna.jpg",
	original_filename: "idol-krishna.jpg",
	size: 223017,
	content_type: "image/jpeg",
	created_at: "2026-07-01T06:33:45Z"
};
var PLACE_META = {
	vrindavan: {
		hero: temple_prem_mandir_jpg_asset_default.url,
		gallery: [
			{
				url: temple_banke_bihari_jpg_asset_default.url,
				alt: "Banke Bihari temple facade in Vrindavan"
			},
			{
				url: idol_radha_rani_jpg_asset_default.url,
				alt: "Sri Radha Rani deity darshan"
			},
			{
				url: idol_krishna_jpg_asset_default.url,
				alt: "Sri Krishna deity playing the flute"
			}
		],
		mapQuery: "Vrindavan, Uttar Pradesh, India",
		coords: {
			lat: 27.5806,
			lng: 77.7006
		}
	},
	mathura: {
		hero: place_mathura_jpg_asset_default.url,
		gallery: [{
			url: idol_krishna_jpg_asset_default.url,
			alt: "Sri Krishna deity — Mathura Janmabhoomi"
		}],
		mapQuery: "Sri Krishna Janmabhoomi, Mathura, Uttar Pradesh, India",
		coords: {
			lat: 27.4924,
			lng: 77.6737
		}
	},
	barsana: {
		hero: temple_barsana_jpg_asset_default.url,
		gallery: [{
			url: idol_radha_rani_jpg_asset_default.url,
			alt: "Sri Radha Rani — Shriji temple Barsana"
		}],
		mapQuery: "Shriji Radha Rani Temple, Barsana, Uttar Pradesh, India",
		coords: {
			lat: 27.6428,
			lng: 77.3792
		}
	},
	nandgaon: {
		hero: place_nandgaon_jpg_asset_default.url,
		gallery: [{
			url: idol_krishna_jpg_asset_default.url,
			alt: "Bal Krishna at Nand Bhavan Nandgaon"
		}],
		mapQuery: "Nand Bhavan Temple, Nandgaon, Uttar Pradesh, India",
		coords: {
			lat: 27.7167,
			lng: 77.3833
		}
	},
	govardhan: {
		hero: place_govardhan_jpg_asset_default.url,
		gallery: [],
		mapQuery: "Govardhan Hill, Uttar Pradesh, India",
		coords: {
			lat: 27.4959,
			lng: 77.4667
		}
	},
	gokul: {
		hero: place_gokul_jpg_asset_default.url,
		gallery: [{
			url: idol_krishna_jpg_asset_default.url,
			alt: "Bal Gopal at Gokul"
		}],
		mapQuery: "Nand Bhavan, Mahavan, Gokul, Uttar Pradesh, India",
		coords: {
			lat: 27.4477,
			lng: 77.7202
		}
	}
};
var $$splitComponentImporter = () => import("./vrindavan._place-43pVlcUu.mjs");
var $$splitErrorComponentImporter = () => import("./vrindavan._place-C_evlbqV.mjs");
var $$splitNotFoundComponentImporter = () => import("./vrindavan._place-C9iN0qh4.mjs");
var Route = createFileRoute("/vrindavan/$place")({
	loader: ({ params }) => {
		const p = getPlace(params.place);
		if (!p) throw notFound();
		return p;
	},
	head: ({ params, loaderData }) => {
		const p = loaderData ?? getPlace(params.place);
		const meta = p ? PLACE_META[p.slug] : void 0;
		const title = p ? `${p.name.en} — Temples, Map & Devotee Guide · Meri Radha` : "Vrindavan · Meri Radha";
		const desc = p ? `${p.name.en} devotee guide — temples, timings, Google Maps location, darshan etiquette and travel tips. ${p.tagline.en}` : "A devotee’s guide to Braj.";
		const url = `/vrindavan/${params.place}`;
		const img = meta?.hero ?? (p ? p.image.url : "");
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: url
				},
				{
					property: "og:type",
					content: "article"
				},
				...img ? [{
					property: "og:image",
					content: img
				}, {
					name: "twitter:image",
					content: img
				}] : []
			],
			links: [{
				rel: "canonical",
				href: url
			}],
			scripts: p && meta ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "TouristAttraction",
					name: p.name.en,
					description: p.about.en,
					image: meta.hero,
					url,
					geo: {
						"@type": "GeoCoordinates",
						latitude: meta.coords.lat,
						longitude: meta.coords.lng
					},
					address: {
						"@type": "PostalAddress",
						addressRegion: "Uttar Pradesh",
						addressCountry: "IN"
					}
				})
			}] : void 0
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as n, PLACE_META as t };
