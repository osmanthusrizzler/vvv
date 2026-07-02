import { n as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useLocalStorage, i as useI18n } from "./i18n-wPeyeW5G.mjs";
import { C as Download, _ as Mic, a as Upload, d as RotateCcw, f as Plus, i as Vibrate, l as Square, m as Pause, n as VolumeX, p as Play, r as Volume2, s as Trash2 } from "../_libs/lucide-react.mjs";
import { a as cn, i as PeacockEye, n as Button, r as Layout, t as BangleDivider } from "./Layout-KvTqmPj2.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chant-Q-G7DiNK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var CHANT_PRESETS = [
	{
		id: "radha",
		en: "Radha",
		hi: "राधा"
	},
	{
		id: "radhe-radhe",
		en: "Radhe Radhe",
		hi: "राधे राधे"
	},
	{
		id: "jai-shri-radhe",
		en: "Jai Shri Radhe",
		hi: "जय श्री राधे"
	},
	{
		id: "mahamantra",
		en: "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare",
		hi: "हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम हरे राम, राम राम हरे हरे"
	},
	{
		id: "radha-krishna",
		en: "Radha Krishna",
		hi: "राधा कृष्ण"
	},
	{
		id: "shri-radha",
		en: "Shri Radha",
		hi: "श्री राधा"
	},
	{
		id: "radhe-shyam",
		en: "Radhe Shyam",
		hi: "राधे श्याम"
	},
	{
		id: "kirti-suta",
		en: "Kirti-suta Radhike",
		hi: "कीर्ति-सुता राधिके"
	},
	{
		id: "vrindavaneshwari",
		en: "Vrindavaneshwari Radhe",
		hi: "वृन्दावनेश्वरी राधे"
	}
];
var MILESTONE_COUNTS = (() => {
	const base = [27, 54];
	const malaMultiples = Array.from({ length: 100 }, (_, i) => (i + 1) * 108);
	const big = [
		11664,
		5e4,
		1e5,
		1e6
	];
	return Array.from(/* @__PURE__ */ new Set([
		...base,
		...malaMultiples,
		...big
	])).sort((a, b) => a - b);
})();
var MILESTONE_LINES = [
	{
		en: "A single name has begun to soften the world.",
		hi: "एक नाम ने संसार को कोमल करना आरम्भ कर दिया।"
	},
	{
		en: "Radha smiles upon your steady heart.",
		hi: "श्री राधा आपके स्थिर मन पर मुस्कुरा रही हैं।"
	},
	{
		en: "One mala done — let the breath stay quiet.",
		hi: "एक माला पूर्ण — श्वास को शान्त रहने दीजिए।"
	},
	{
		en: "Her name is becoming your breath.",
		hi: "उनका नाम आपकी श्वास बनता जा रहा है।"
	},
	{
		en: "Vrindavan is no longer a place; it is your mind.",
		hi: "वृन्दावन अब स्थान नहीं, आपका मन है।"
	},
	{
		en: "The flute is closer than you think.",
		hi: "वंशी जितना सोचते हैं उससे अधिक समीप है।"
	},
	{
		en: "Every bead is a footstep toward Her courtyard.",
		hi: "हर मनका उनके आँगन की ओर एक पग है।"
	},
	{
		en: "Stay. Just one more round.",
		hi: "रुकिए। केवल एक और परिक्रमा।"
	},
	{
		en: "What you build here, no one can take away.",
		hi: "जो आप यहाँ बना रहे हैं, उसे कोई नहीं छीन सकता।"
	},
	{
		en: "She remembers you — that is enough.",
		hi: "वे आपको स्मरण करती हैं — यही पर्याप्त है।"
	}
];
function pickMilestoneLine(count) {
	return MILESTONE_LINES[Math.abs(Math.floor(count / 108)) % MILESTONE_LINES.length];
}
var DEFAULT_STATE = {
	v: 2,
	total: 0,
	selectedId: "radhe-radhe",
	customName: "",
	sound: false,
	vibration: true,
	malaSound: true,
	lastDate: "",
	streak: 0,
	highest: 0
};
function today() {
	const d = /* @__PURE__ */ new Date();
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function ChantPage() {
	const { t, lang } = useI18n();
	const isHi = lang === "hi";
	const [state, setState] = useLocalStorage("meriradha:chant", DEFAULT_STATE);
	const [customLib, setCustomLib] = useLocalStorage("meriradha:chant:custom", []);
	const [voiceAudio, setVoiceAudio] = useLocalStorage("meriradha:chant:voice", "");
	const [voicePlaying, setVoicePlaying] = (0, import_react.useState)(false);
	const [recording, setRecording] = (0, import_react.useState)(false);
	const fileRef = (0, import_react.useRef)(null);
	const audioFileRef = (0, import_react.useRef)(null);
	const importRef = (0, import_react.useRef)(null);
	const [pressed, setPressed] = (0, import_react.useState)(false);
	const voiceAudioRef = (0, import_react.useRef)(null);
	const recorderRef = (0, import_react.useRef)(null);
	const recordedChunks = (0, import_react.useRef)([]);
	const bead = state.total % 108;
	const mala = Math.floor(state.total / 108);
	const allOptions = (0, import_react.useMemo)(() => [...CHANT_PRESETS, ...customLib.map((c) => ({
		id: c.id,
		en: c.en,
		hi: c.en
	}))], [customLib]);
	const currentName = (0, import_react.useMemo)(() => {
		const opt = allOptions.find((o) => o.id === state.selectedId);
		if (!opt) return CHANT_PRESETS[0];
		return opt;
	}, [allOptions, state.selectedId]);
	const audioCtxRef = (0, import_react.useRef)({ ctx: null });
	function getCtx() {
		try {
			if (!audioCtxRef.current.ctx) audioCtxRef.current.ctx = new (window.AudioContext || window.webkitAudioContext)();
			return audioCtxRef.current.ctx;
		} catch {
			return null;
		}
	}
	function ting() {
		if (!state.sound) return;
		const ctx = getCtx();
		if (!ctx) return;
		const o = ctx.createOscillator();
		const g = ctx.createGain();
		o.type = "sine";
		o.frequency.value = 880;
		g.gain.setValueAtTime(1e-4, ctx.currentTime);
		g.gain.exponentialRampToValueAtTime(.15, ctx.currentTime + .01);
		g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + .25);
		o.connect(g).connect(ctx.destination);
		o.start();
		o.stop(ctx.currentTime + .3);
	}
	function malaClick() {
		if (!state.malaSound) return;
		const ctx = getCtx();
		if (!ctx) return;
		const buffer = ctx.createBuffer(1, ctx.sampleRate * .08, ctx.sampleRate);
		const data = buffer.getChannelData(0);
		for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 3);
		const src = ctx.createBufferSource();
		src.buffer = buffer;
		const filter = ctx.createBiquadFilter();
		filter.type = "bandpass";
		filter.frequency.value = 380;
		filter.Q.value = 4;
		const g = ctx.createGain();
		g.gain.value = .5;
		src.connect(filter).connect(g).connect(ctx.destination);
		src.start();
	}
	function vibrate() {
		if (!state.vibration) return;
		try {
			if ("vibrate" in navigator) navigator.vibrate(15);
		} catch {}
	}
	function increment() {
		setState((prev) => {
			const next = prev.total + 1;
			const td = today();
			let streak = prev.streak;
			if (prev.lastDate !== td) {
				const y = /* @__PURE__ */ new Date();
				y.setDate(y.getDate() - 1);
				const ystr = `${y.getFullYear()}-${String(y.getMonth() + 1).padStart(2, "0")}-${String(y.getDate()).padStart(2, "0")}`;
				streak = prev.lastDate === ystr ? prev.streak + 1 : 1;
			}
			const highest = Math.max(prev.highest, next);
			if (MILESTONE_COUNTS.includes(next)) {
				const line = pickMilestoneLine(next);
				toast.success(isHi ? `${next.toLocaleString("hi-IN")} नाम पूर्ण` : `${next.toLocaleString("en-IN")} names complete`, {
					description: isHi ? line.hi : line.en,
					duration: 6e3
				});
				if (prev.vibration) try {
					navigator.vibrate?.([
						80,
						40,
						80,
						40,
						120
					]);
				} catch {}
			} else if (next % 108 === 0) {
				toast(isHi ? "एक माला पूर्ण" : "One mala complete", { description: isHi ? "जय श्री राधे" : "Jai Shri Radhe" });
				if (prev.vibration) try {
					navigator.vibrate?.([
						50,
						30,
						50
					]);
				} catch {}
			}
			setPressed(true);
			setTimeout(() => setPressed(false), 120);
			return {
				...prev,
				total: next,
				lastDate: td,
				streak,
				highest
			};
		});
		ting();
		malaClick();
		vibrate();
	}
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.code === "Space" && !["INPUT", "TEXTAREA"].includes(e.target?.tagName ?? "")) {
				e.preventDefault();
				increment();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		state.sound,
		state.vibration,
		state.malaSound,
		isHi
	]);
	(0, import_react.useEffect)(() => {
		if (!voiceAudio) {
			voiceAudioRef.current?.pause();
			voiceAudioRef.current = null;
			setVoicePlaying(false);
			return;
		}
		const a = new Audio(voiceAudio);
		a.loop = true;
		voiceAudioRef.current = a;
		return () => {
			a.pause();
		};
	}, [voiceAudio]);
	function toggleVoice() {
		const a = voiceAudioRef.current;
		if (!a) return;
		if (voicePlaying) {
			a.pause();
			setVoicePlaying(false);
		} else a.play().then(() => setVoicePlaying(true)).catch(() => toast.error("Autoplay blocked — tap again"));
	}
	async function startRecording() {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const rec = new MediaRecorder(stream);
			recordedChunks.current = [];
			rec.ondataavailable = (e) => {
				if (e.data.size) recordedChunks.current.push(e.data);
			};
			rec.onstop = () => {
				stream.getTracks().forEach((t) => t.stop());
				const blob = new Blob(recordedChunks.current, { type: rec.mimeType || "audio/webm" });
				const reader = new FileReader();
				reader.onload = () => setVoiceAudio(reader.result);
				reader.readAsDataURL(blob);
				setRecording(false);
				toast.success(isHi ? "रिकॉर्डिंग सुरक्षित" : "Recording saved");
			};
			recorderRef.current = rec;
			rec.start();
			setRecording(true);
		} catch {
			toast.error(isHi ? "माइक अनुमति चाहिए" : "Microphone permission required");
		}
	}
	function stopRecording() {
		recorderRef.current?.stop();
	}
	function onUploadAudio(e) {
		const f = e.target.files?.[0];
		if (!f) return;
		if (f.size > 4 * 1024 * 1024) {
			toast.error(isHi ? "फ़ाइल बहुत बड़ी है (4MB तक)" : "File too large (max 4MB for local save)");
			e.target.value = "";
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			setVoiceAudio(reader.result);
			toast.success(isHi ? "ऑडियो जोड़ा" : "Audio loaded");
		};
		reader.readAsDataURL(f);
		e.target.value = "";
	}
	function resetAll() {
		if (typeof window === "undefined") return;
		if (window.confirm(t("chant.confirmReset"))) {
			setState({
				...DEFAULT_STATE,
				sound: state.sound,
				vibration: state.vibration,
				malaSound: state.malaSound
			});
			toast(isHi ? "रीसेट हो गया" : "Reset done");
		}
	}
	function exportJson() {
		const data = JSON.stringify({
			state,
			customLib
		}, null, 2);
		const blob = new Blob([data], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `meriradha-chant-${today()}.json`;
		a.click();
		URL.revokeObjectURL(url);
	}
	function onImport(e) {
		const f = e.target.files?.[0];
		if (!f) return;
		f.text().then((txt) => {
			try {
				const parsed = JSON.parse(txt);
				if (parsed.state) setState(parsed.state);
				if (Array.isArray(parsed.customLib)) setCustomLib(parsed.customLib);
				toast.success(isHi ? "आयात पूर्ण" : "Imported");
			} catch {
				toast.error(isHi ? "अमान्य फ़ाइल" : "Invalid file");
			}
		});
		e.target.value = "";
	}
	function onUploadTxt(e) {
		const f = e.target.files?.[0];
		if (!f) return;
		f.text().then((txt) => {
			const name = txt.trim().slice(0, 200);
			if (!name) return;
			const id = `c-${Date.now()}`;
			setCustomLib((p) => [...p, {
				id,
				en: name
			}]);
			setState((p) => ({
				...p,
				selectedId: id
			}));
			toast.success(isHi ? "अपना नाम जोड़ा" : "Custom name added");
		});
		e.target.value = "";
	}
	function addCustomQuick() {
		const v = state.customName.trim();
		if (!v) return;
		const id = `c-${Date.now()}`;
		setCustomLib((p) => [...p, {
			id,
			en: v
		}]);
		setState((p) => ({
			...p,
			selectedId: id,
			customName: ""
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 pt-8 pb-4 sm:px-6 sm:pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PeacockEye, { className: "mx-auto h-9 w-9" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `mt-4 text-3xl sm:text-5xl ${isHi ? "font-hindi" : "font-display"}`,
					children: t("chant.title")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base ${isHi ? "font-hindi" : ""}`,
					children: t("chant.subtitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-6 max-w-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BangleDivider, {})
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-[1.2fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "card-poppy flex flex-col items-center rounded-3xl p-6 text-center sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `min-h-[3rem] text-xl font-semibold sm:text-3xl ${isHi ? "font-hindi" : ""}`,
						children: isHi ? currentName.hi : currentName.en
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: increment,
						"aria-label": t("chant.tap"),
						className: `mt-6 grid h-48 w-48 select-none place-items-center rounded-full bg-gradient-to-br from-[color:var(--krishna)] to-[color:var(--peacock)] text-primary-foreground shadow-[0_25px_60px_-15px_color-mix(in_oklab,var(--krishna)_70%,transparent)] transition-transform active:scale-95 sm:mt-8 sm:h-72 sm:w-72 ${pressed ? "scale-95" : ""}`,
						style: {
							touchAction: "manipulation",
							WebkitTapHighlightColor: "transparent"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-5xl font-bold tabular-nums sm:text-7xl",
								children: bead
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-1 text-[10px] uppercase tracking-widest opacity-80 sm:text-xs",
								children: [t("chant.bead"), " / 108"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-muted-foreground sm:text-sm",
						children: t("chant.tap")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid w-full grid-cols-3 gap-2 text-center sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("chant.totalNames"),
								value: state.total.toLocaleString(isHi ? "hi-IN" : "en-IN")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("chant.malas"),
								value: mala.toLocaleString(isHi ? "hi-IN" : "en-IN")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: t("chant.streak"),
								value: `${state.streak}${isHi ? " दिन" : "d"}`
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => setState((p) => ({
									...p,
									sound: !p.sound
								})),
								children: [state.sound ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "mr-1.5 h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "mr-1.5 h-4 w-4" }), t("chant.sound")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: state.malaSound ? "default" : "outline",
								size: "sm",
								onClick: () => setState((p) => ({
									...p,
									malaSound: !p.malaSound
								})),
								children: ["🪷 ", t("chant.mala.sound")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: state.vibration ? "default" : "outline",
								size: "sm",
								onClick: () => setState((p) => ({
									...p,
									vibration: !p.vibration
								})),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Vibrate, { className: "mr-1.5 h-4 w-4" }),
									" ",
									t("chant.vibration")
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap justify-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: exportJson,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), t("chant.export")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => importRef.current?.click(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1.5 h-4 w-4" }), t("chant.import")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: importRef,
								type: "file",
								accept: "application/json",
								className: "hidden",
								onChange: onImport
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "destructive",
								size: "sm",
								onClick: resetAll,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "mr-1.5 h-4 w-4" }), t("chant.reset")]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-poppy rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: `mb-4 text-xl font-semibold ${isHi ? "font-hindi" : ""}`,
							children: t("chant.chooseName")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: allOptions.map((o) => {
								const active = state.selectedId === o.id;
								const label = isHi ? o.hi : o.en;
								const short = label.length > 40 ? label.slice(0, 38) + "…" : label;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setState((p) => ({
										...p,
										selectedId: o.id
									})),
									className: `rounded-full border px-3 py-1.5 text-sm transition ${active ? "border-accent bg-accent text-accent-foreground" : "border-border bg-background/60 hover:border-accent/60"} ${isHi ? "font-hindi" : ""}`,
									children: short
								}, o.id);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-poppy rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: `mb-4 text-xl font-semibold ${isHi ? "font-hindi" : ""}`,
								children: ["🎙️ ", t("chant.voice")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mb-3 text-sm text-muted-foreground ${isHi ? "font-hindi" : ""}`,
								children: isHi ? "अपनी आवाज़ में नाम रिकॉर्ड करें या ऑडियो अपलोड करें — जप के समय लूप में बजेगा।" : "Record your own voice or upload audio. It will loop while you chant."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									!recording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: startRecording,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "mr-1.5 h-4 w-4" }),
											" ",
											t("chant.voice.record")
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "destructive",
										onClick: stopRecording,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "mr-1.5 h-4 w-4" }), " Stop"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => audioFileRef.current?.click(),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1.5 h-4 w-4" }),
											" ",
											t("chant.voice.upload")
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: audioFileRef,
										type: "file",
										accept: "audio/*",
										className: "hidden",
										onChange: onUploadAudio
									}),
									voiceAudio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: voicePlaying ? "default" : "outline",
										onClick: toggleVoice,
										children: voicePlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "mr-1.5 h-4 w-4" }), t("chant.voice.stop")] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "mr-1.5 h-4 w-4" }), t("chant.voice.play")] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "ghost",
										onClick: () => {
											voiceAudioRef.current?.pause();
											setVoicePlaying(false);
											setVoiceAudio("");
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-1.5 h-4 w-4" }),
											" ",
											t("chant.voice.clear")
										]
									})] })
								]
							}),
							recording && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 animate-pulse text-sm text-destructive",
								children: "● Recording…"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-poppy rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: `mb-4 text-xl font-semibold ${isHi ? "font-hindi" : ""}`,
								children: t("chant.custom")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: state.customName,
								onChange: (e) => setState((p) => ({
									...p,
									customName: e.target.value
								})),
								placeholder: t("chant.customPlaceholder"),
								className: "min-h-[80px] flex-1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										onClick: addCustomQuick,
										disabled: !state.customName.trim(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), " Add"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => fileRef.current?.click(),
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1.5 h-4 w-4" }), t("chant.upload")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileRef,
										type: "file",
										accept: ".txt,text/plain",
										className: "hidden",
										onChange: onUploadTxt
									})
								]
							}),
							customLib.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-wider text-muted-foreground",
									children: "Your library"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "text-sm",
									children: customLib.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center justify-between gap-2 rounded-md px-2 py-1 hover:bg-muted",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: c.en
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => {
												setCustomLib((p) => p.filter((x) => x.id !== c.id));
												if (state.selectedId === c.id) setState((p) => ({
													...p,
													selectedId: "radhe-radhe"
												}));
											},
											className: "text-xs text-muted-foreground hover:text-destructive",
											children: "remove"
										})]
									}, c.id))
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-dashed border-border/70 p-5 text-sm text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
							className: "text-foreground",
							children: [t("common.note"), ": "]
						}), isHi ? "सब कुछ आपके यन्त्र में सुरक्षित है — कहीं भेजा नहीं जाता।" : "Everything (including your voice recording) is stored locally on your device — nothing leaves it."]
					})
				]
			})]
		})
	})] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-muted/60 px-2 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xl font-semibold tabular-nums",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]",
			children: label
		})]
	});
}
//#endregion
export { ChantPage as component };
