import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/i18n-wPeyeW5G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useLocalStorage(key, initial) {
	const [value, setValue] = (0, import_react.useState)(initial);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = window.localStorage.getItem(key);
			if (raw !== null) setValue(JSON.parse(raw));
		} catch {}
		setHydrated(true);
	}, [key]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		try {
			window.localStorage.setItem(key, JSON.stringify(value));
		} catch {}
	}, [
		key,
		value,
		hydrated
	]);
	return [value, (0, import_react.useCallback)((v) => {
		setValue((prev) => typeof v === "function" ? v(prev) : v);
	}, [])];
}
var PALETTES = [
	{
		id: "krishna-classic",
		name: "Krishna Classic",
		hi: "कृष्ण क्लासिक",
		swatch: [
			"#0B1F4A",
			"#D4AF37",
			"#F4B6C2",
			"#7EC8E3"
		]
	},
	{
		id: "saffron-sunrise",
		name: "Saffron Sunrise",
		hi: "केसरिया प्रभात",
		swatch: [
			"#FF6B00",
			"#FFC857",
			"#8B1A1A",
			"#FFF3E0"
		]
	},
	{
		id: "peacock-noir",
		name: "Peacock Noir",
		hi: "मयूर श्याम",
		swatch: [
			"#0E1B24",
			"#1F6F8B",
			"#2E7A4B",
			"#D4AF37"
		]
	},
	{
		id: "tulsi-forest",
		name: "Tulsi Forest",
		hi: "तुलसी वन",
		swatch: [
			"#1B3A2A",
			"#2E7A4B",
			"#C7B370",
			"#F1EEDD"
		]
	},
	{
		id: "marble-minimal",
		name: "Marble Minimal",
		hi: "श्वेत मार्बल",
		swatch: [
			"#FFFFFF",
			"#111827",
			"#B45309",
			"#DDD6C7"
		]
	},
	{
		id: "gulaal-holi",
		name: "Gulaal Holi",
		hi: "गुलाल होली",
		swatch: [
			"#E11D48",
			"#F59E0B",
			"#7C3AED",
			"#22C55E"
		]
	}
];
var ThemeContext = (0, import_react.createContext)(null);
function applyTheme(theme) {
	if (typeof document === "undefined") return "light";
	const mql = window.matchMedia("(prefers-color-scheme: dark)");
	const resolved = theme === "system" ? mql.matches ? "dark" : "light" : theme;
	document.documentElement.classList.toggle("dark", resolved === "dark");
	return resolved;
}
function applyPalette(p) {
	if (typeof document === "undefined") return;
	document.documentElement.setAttribute("data-palette", p);
}
function ThemeProvider({ children }) {
	const [theme, setTheme] = useLocalStorage("meriradha:theme", "system");
	const [palette, setPalette] = useLocalStorage("meriradha:palette", "krishna-classic");
	(0, import_react.useEffect)(() => {
		applyTheme(theme);
		if (theme === "system") {
			const mql = window.matchMedia("(prefers-color-scheme: dark)");
			const handler = () => applyTheme("system");
			mql.addEventListener("change", handler);
			return () => mql.removeEventListener("change", handler);
		}
	}, [theme]);
	(0, import_react.useEffect)(() => {
		applyPalette(palette);
	}, [palette]);
	const resolved = typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			setTheme,
			resolved,
			palette,
			setPalette
		},
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var dict = {
	en: {
		"nav.home": "Home",
		"nav.chant": "Chant",
		"nav.vrindavan": "Vrindavan",
		"nav.itinerary": "Itinerary",
		"nav.temples": "Temples",
		"nav.about": "About",
		"nav.faq": "FAQ",
		"nav.contact": "Contact",
		"cta.startChanting": "Start Chanting",
		"cta.exploreVrindavan": "Explore Vrindavan",
		"home.tagline": "A devotee’s home for Radha Rani — chant Her name, walk Her land, hold Her close.",
		"home.heroKicker": "मेरी राधा · Meri Radha",
		"home.section.chant": "Chant Her Name",
		"home.section.chant.body": "A simple, beautiful japa counter with mala tracking, voice-loop, vibration, milestones, and your own chosen names — all saved on your device.",
		"home.section.vrindavan": "Walk in Vrindavan",
		"home.section.vrindavan.body": "Curated guides to Vrindavan, Mathura, Barsana, Nandgaon — temples, timings, maps, etiquette and ready-made itineraries.",
		"home.section.temples": "Temple Directory",
		"home.section.temples.body": "Community-listed Instagram handles of well-known temples in Braj. Verify before you donate or share details.",
		"chant.title": "Japa & Mala Counter",
		"chant.subtitle": "Every name softens the heart. Begin where you are.",
		"chant.tap": "Tap or press Space",
		"chant.bead": "Bead",
		"chant.mala": "Mala",
		"chant.totalNames": "Total names",
		"chant.malas": "Malas completed",
		"chant.streak": "Daily streak",
		"chant.chooseName": "Choose what to chant",
		"chant.custom": "Custom name / mantra",
		"chant.customPlaceholder": "Type your chosen name or mantra…",
		"chant.upload": "Upload .txt",
		"chant.sound": "Bead sound",
		"chant.reset": "Reset",
		"chant.export": "Export",
		"chant.import": "Import",
		"chant.confirmReset": "Reset all chanting progress? This cannot be undone.",
		"chant.voice": "Voice loop",
		"chant.voice.record": "Record my voice",
		"chant.voice.upload": "Upload audio",
		"chant.voice.play": "Play loop",
		"chant.voice.stop": "Stop loop",
		"chant.voice.clear": "Clear audio",
		"chant.vibration": "Vibration",
		"chant.mala.sound": "Mala bead sound",
		"common.note": "Note",
		"common.disclaimer": "Community-listed handles — not officially verified by us. Please confirm authenticity before donating or sharing personal details.",
		"common.attribution": "Image",
		"vrindavan.title": "Vrindavan — the land of Radha",
		"vrindavan.lead": "Where every breeze remembers the flute, every grain of dust is holy. A guide for devotees, not tourists.",
		"itin.title": "Braj Itineraries",
		"itin.lead": "Practical, devotional day-plans for Vrindavan, Mathura, Barsana, Nandgaon, Gokul and Govardhan.",
		"guide.title": "Temples & Places of Braj",
		"temples.title": "Temple Instagram Directory",
		"temples.lead": "Stay connected to live darshan and updates. Handles are community-listed — please verify.",
		"about.title": "About Meri Radha",
		"verify.timings": "Timings change — please verify locally before visiting."
	},
	hi: {
		"nav.home": "मुख्य",
		"nav.chant": "जप",
		"nav.vrindavan": "वृन्दावन",
		"nav.itinerary": "यात्रा क्रम",
		"nav.temples": "मन्दिर",
		"nav.about": "परिचय",
		"nav.faq": "प्रश्नोत्तर",
		"nav.contact": "सम्पर्क",
		"cta.startChanting": "जप आरम्भ करें",
		"cta.exploreVrindavan": "वृन्दावन देखें",
		"home.tagline": "श्री राधा रानी के भक्तों का अपना घर — उनका नाम लें, उनकी भूमि पर चलें, उन्हें हृदय में रखें।",
		"home.heroKicker": "मेरी राधा",
		"home.section.chant": "उनका नाम लीजिए",
		"home.section.chant.body": "सरल, सुन्दर जप गणक — माला, स्व-स्वर लूप, कम्पन, मील-पत्थर एवं अपने चुने हुए नाम — सब आपके यन्त्र में सुरक्षित।",
		"home.section.vrindavan": "वृन्दावन में चलिए",
		"home.section.vrindavan.body": "वृन्दावन, मथुरा, बरसाना, नन्दगाँव — मन्दिर, समय, मानचित्र, मर्यादा एवं तैयार यात्रा-क्रम।",
		"home.section.temples": "मन्दिर सूची",
		"home.section.temples.body": "ब्रज के प्रसिद्ध मन्दिरों के सामुदायिक रूप से सूचीबद्ध इंस्टाग्राम हैंडल। दान या जानकारी देने से पूर्व सत्यापन अवश्य करें।",
		"chant.title": "जप एवं माला गणक",
		"chant.subtitle": "हर नाम हृदय को कोमल करता है। जहाँ हैं, वहीं से आरम्भ कीजिए।",
		"chant.tap": "स्पर्श करें अथवा Space दबाएँ",
		"chant.bead": "मनका",
		"chant.mala": "माला",
		"chant.totalNames": "कुल नाम",
		"chant.malas": "पूर्ण मालाएँ",
		"chant.streak": "दैनिक क्रम",
		"chant.chooseName": "क्या जपना है, चुनिए",
		"chant.custom": "अपना नाम / मन्त्र",
		"chant.customPlaceholder": "अपना चुना हुआ नाम या मन्त्र लिखिए…",
		"chant.upload": ".txt अपलोड करें",
		"chant.sound": "मनका ध्वनि",
		"chant.reset": "रीसेट",
		"chant.export": "निर्यात",
		"chant.import": "आयात",
		"chant.confirmReset": "क्या समस्त जप-प्रगति रीसेट करें? यह पूर्ववत् नहीं होगी।",
		"chant.voice": "स्वर लूप",
		"chant.voice.record": "अपना स्वर रिकॉर्ड करें",
		"chant.voice.upload": "ऑडियो अपलोड करें",
		"chant.voice.play": "लूप बजाएँ",
		"chant.voice.stop": "रोकें",
		"chant.voice.clear": "ऑडियो हटाएँ",
		"chant.vibration": "कम्पन",
		"chant.mala.sound": "माला मनका ध्वनि",
		"common.note": "सूचना",
		"common.disclaimer": "सामुदायिक रूप से सूचीबद्ध हैंडल — हमारे द्वारा आधिकारिक रूप से सत्यापित नहीं। दान या जानकारी देने से पूर्व सत्यापन करें।",
		"common.attribution": "चित्र",
		"vrindavan.title": "वृन्दावन — श्री राधा की भूमि",
		"vrindavan.lead": "जहाँ हर पवन वंशी का स्मरण करती है, हर रज पवित्र है। भक्तों के लिए, पर्यटकों के लिए नहीं।",
		"itin.title": "ब्रज यात्रा क्रम",
		"itin.lead": "वृन्दावन, मथुरा, बरसाना, नन्दगाँव, गोकुल एवं गोवर्धन के लिए सरल, भक्ति-पूर्ण दिनचर्या।",
		"guide.title": "ब्रज के मन्दिर एवं स्थल",
		"temples.title": "मन्दिर इंस्टाग्राम सूची",
		"temples.lead": "जीवित दर्शन एवं समाचार से जुड़े रहिए। हैंडल सामुदायिक रूप से सूचीबद्ध हैं — कृपया सत्यापन कीजिए।",
		"about.title": "मेरी राधा के बारे में",
		"verify.timings": "समय परिवर्तनशील है — दर्शन से पूर्व स्थानीय रूप से सत्यापन कीजिए।"
	}
};
var I18nContext = (0, import_react.createContext)(null);
function I18nProvider({ children }) {
	const [lang, setLang] = useLocalStorage("meriradha:lang", "en");
	(0, import_react.useEffect)(() => {
		if (typeof document !== "undefined") document.documentElement.lang = lang;
	}, [lang]);
	const t = (k) => dict[lang][k] ?? dict.en[k] ?? k;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I18nContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
function useI18n() {
	const ctx = (0, import_react.useContext)(I18nContext);
	if (!ctx) throw new Error("useI18n must be used within I18nProvider");
	return ctx;
}
//#endregion
export { useLocalStorage as a, useI18n as i, PALETTES as n, useTheme as o, ThemeProvider as r, I18nProvider as t };
