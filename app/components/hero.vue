<script lang="ts" setup>
const { gsap, ScrollTrigger, GSDevTools } = useGSAP();

const blockRevealRef = useTemplateRef("block-reveal");
const containerRef = useTemplateRef("containerRef");

let ctx: gsap.Context;

onMounted(() => {
	const container = containerRef.value;

	if (!container) return;

	ctx = gsap.context(() => {
		const blockTween = blockRevealRef.value?.getTween();

		if (!blockTween) return;

		const tl = gsap.timeline();

		tl.to("#hero-bar", { "--scale": 1, duration: 1 })
			.add(blockTween, "<0.5")
			.to("#name", { x: 0, duration: 1 }, "<0.5");

		ScrollTrigger.create({
			trigger: container,
			start: "top top",
			end: "bottom top",
			scrub: 1,
			animation: gsap.to("#name", { yPercent: -25, ease: "none" }),
		});
	}, container);
});

onBeforeUnmount(() => {
	ctx.revert();
});
</script>

<template>
	<section
		ref="containerRef"
		class="relative grid gap-6 content-center min-h-dvh py-16 px-8 md:px-12 font-mono overflow-clip">
		<!-- <div
			class="absolute top-0 left-0 text-[10vw] italic font-title font-bold text-primary opacity-15">
			01
		</div> -->
		<div class="max-w-360 w-full mx-auto space-y-6">
			<div
				id="name"
				style="
					transform: translateX(calc(100% + 1rem)) translateY(-50%);
				"
				class="absolute top-1/2 right-4 text-[75vw] md:text-[45vw] font-bold italic font-title pointer-events-none text-neutral-800/25">
				RJ
			</div>
			<AnimeBlockReveal
				data-scroll
				data-scroll-speed="0.1"
				ref="block-reveal"
				class="w-fit space-y-6">
				<div
					id="hero-bar"
					class="relative text-xs md:text-sm text-muted uppercase flex gap-4 items-center">
					Fullstack · Creative Developer · India
				</div>
				<div class="relative">
					<h1 class="text-6xl md:text-[8vw] font-title leading-none">
						I build websites that
						<br class="hidden md:inline" />work
						<span class="hidden md:inline">— </span>
						<br class="md:hidden" />
						<span class="text-primary font-title italic"
							>and move.</span
						>
					</h1>

					<p class="text-muted text-base md:text-lg mt-6 mb-2">
						Code-first dev learning to make the web feel
						<span class="text-primary italic">alive</span>
					</p>
					<p class="text-muted text-base md:text-lg">
						Next.js · Nuxt · Hono · GSAP · Three.js
					</p>
				</div>
			</AnimeBlockReveal>
		</div>
	</section>
</template>
