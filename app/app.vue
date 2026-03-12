<script setup lang="ts">
useHead({ htmlAttrs: { lang: "en" } });
useSeoMeta({
	title: "Rohan - Creative Web Developer Portfolio",
	description:
		"Portfolio of Rohan, a creative web developer specializing in immersive websites, GSAP animations, and modern web experiences built with Next.js and cutting-edge web technologies.",

	ogTitle: "Rohan - Creative Web Developer Portfolio",
	ogDescription:
		"Explore immersive web experiences, high-performance animations, and modern websites crafted by Rohan using GSAP, Next.js, and advanced front-end development techniques.",
	ogImage: "https://yourdomain.com/og-image.png",
	ogUrl: "https://yourdomain.com",

	twitterTitle: "Rohan - Creative Web Developer Portfolio",
	twitterDescription:
		"Creative developer building immersive and highly animated web experiences with GSAP and modern web technologies.",
	twitterImage: "https://yourdomain.com/og-image.png",
	twitterCard: "summary_large_image",
});
</script>

<template>
	<UApp>
		<Header />
		<NuxtPage />
		<BgNoise
			class="fixed z-50 inset-0 size-full opacity-25 pointer-events-none" />
		<Footer />
		<Cursor />
	</UApp>
</template>
