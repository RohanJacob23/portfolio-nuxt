<script lang="ts" setup>
const footerRef = useTemplateRef("footer");

const { gsap, SplitText } = useGSAP();

let ctx: gsap.Context;
let scaleTo: gsap.QuickToFunc;

onMounted(() => {
	const footer = footerRef.value;

	if (!footer) return;

	ctx = gsap.context(() => {
		const svgSplit = SplitText.create("#footer-text", {
			type: "words, chars",
		});

		const textWrapperRect = footer
			.querySelector(".text-wrapper")
			?.getBoundingClientRect();

		if (!textWrapperRect) return;

		// scaleTo = gsap.quickTo("#footer-text", "--scale", {
		// 	duration: 0.5,
		// 	ease: "back.out",
		// });
		// const xTo = gsap.quickTo("#footer-text", "--x", {
		// 	duration: 0.5,
		// 	ease: "back.out",
		// });
		// const yTo = gsap.quickTo("#footer-text", "--y", {
		// 	duration: 0.5,
		// 	ease: "back.out",
		// });

		// window.addEventListener("mousemove", (e) => {
		// 	xTo(e.clientX - textWrapperRect.left);
		// 	yTo(e.clientY - textWrapperRect.top);
		// });
	}, footer);
});

onUnmounted(() => {
	ctx.revert();
	// scaleTo.tween.revert();
});
</script>

<template>
	<footer
		ref="footer"
		class="sticky bottom-0 bg-default py-12 px-8 font-mono bg-linear-to-t from-primary-700 to-50% to-transparent">
		<div class="flex flex-col mx-auto max-w-360">
			<div class="flex-1 md:flex md:items-center md:justify-between">
				<div class="text-sm">© 2026 All Rights Reserved.</div>
				<ul class="flex gap-4 flex-wrap items-center text-sm">
					<li>
						<NuxtLink
							to="#home"
							class="text-muted hover:text-primary transition-colors ease-in-out duration-200"
							>Home</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="#home"
							class="text-muted hover:text-primary transition-colors ease-in-out duration-200"
							>About</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="#home"
							class="text-muted hover:text-primary transition-colors ease-in-out duration-200"
							>Service</NuxtLink
						>
					</li>
					<li>
						<NuxtLink
							to="#home"
							class="text-muted hover:text-primary transition-colors ease-in-out duration-200"
							>Contact</NuxtLink
						>
					</li>
				</ul>
			</div>

			<USeparator class="my-8" />

			<div class="@container flex-2 grid content-center min-h-[50dvh]">
				<div
					@mouseenter="() => scaleTo(15)"
					@mouseleave="() => scaleTo(0)"
					class="text-wrapper relative">
					<!-- style="
							clip-path: circle(
								calc(var(--scale, 0) * 1%) at
									calc(var(--x) * 1px) calc(var(--y) * 1px)
							);
						" -->
					<div
						id="footer-text"
						style="
							-webkit-text-stroke: 1px
								color-mix(
									in oklab,
									var(--ui-color-primary-100) 50%,
									transparent
								);
						"
						class="relative z-10 text-[10cqw] uppercase leading-none tracking-tighter text-center text-transparent">
						Creative Developer
					</div>
					<!-- style="
							-webkit-text-stroke: 0.1px
								color-mix(
									in oklab,
									var(--ui-primary) 30%,
									transparent
								);
						" -->
					<!-- <div
						class="text-[10cqw] uppercase font-bold leading-none tracking-tighter text-center text-transparent size-full absolute inset-0 pointer-events-none">
						Creative Developer
					</div> -->
				</div>
			</div>
		</div>
	</footer>
</template>
