import tailwindcss, { type PluginOptions } from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: [
		"@nuxt/eslint",
		"@nuxt/fonts",
		"@nuxt/hints",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"@nuxt/ui",
	],
	colorMode: {
		preference: "dark", // default value of $colorMode.preference
		fallback: "light",
	},

	vite: {
		plugins: [tailwindcss() as any],
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						gsap: ["gsap"],
						locomotiveScroll: ["locomotive-scroll"],
					},
				},
			},
		},
	},
});
