import {
	AUTO_MODE,
	DARK_MODE,
	DEFAULT_THEME,
	LIGHT_MODE,
} from "@constants/constants.ts";
import { expressiveCodeConfig } from "@/config";
import type { LIGHT_DARK_MODE } from "@/types/config";

export const themeColorOptions = [
	{ name: "淡粉色", hue: 350 },
	{ name: "粉白色", hue: 12 },
	{ name: "超浅紫色", hue: 285 },
	{ name: "奶蓝色", hue: 220 },
] as const;

export function isThemeHue(hue: number): boolean {
	return themeColorOptions.some((option) => option.hue === hue);
}

export function getDefaultHue(): number {
	const fallback = "350";
	const configCarrier = document.getElementById("config-carrier");
	const hue = Number.parseInt(configCarrier?.dataset.hue || fallback, 10);
	return isThemeHue(hue) ? hue : Number.parseInt(fallback, 10);
}

export function getHue(): number {
	const stored = localStorage.getItem("hue");
	const hue = stored ? Number.parseInt(stored, 10) : getDefaultHue();
	return isThemeHue(hue) ? hue : getDefaultHue();
}

export function setHue(hue: number): void {
	const themeHue = isThemeHue(hue) ? hue : getDefaultHue();
	localStorage.setItem("hue", String(themeHue));
	const r = document.querySelector(":root") as HTMLElement;
	if (!r) {
		return;
	}
	r.style.setProperty("--hue", String(themeHue));
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
	switch (theme) {
		case LIGHT_MODE:
			document.documentElement.classList.remove("dark");
			break;
		case DARK_MODE:
			document.documentElement.classList.add("dark");
			break;
		case AUTO_MODE:
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
			break;
	}

	// Set the theme for Expressive Code
	document.documentElement.setAttribute(
		"data-theme",
		expressiveCodeConfig.theme,
	);
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
	localStorage.setItem("theme", theme);
	applyThemeToDocument(theme);
}

export function getStoredTheme(): LIGHT_DARK_MODE {
	return (localStorage.getItem("theme") as LIGHT_DARK_MODE) || DEFAULT_THEME;
}
