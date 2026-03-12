<script setup lang="ts">
const {
	animateOnScroll = false,
	block = false,
	wrapperClass,
	delay = 0,
} = defineProps<{
	animateOnScroll?: boolean;
	wrapperClass?: string;
	block?: boolean;
	delay?: number;
}>();

const containerRef = useTemplateRef("container");

const { gsap, SplitText, GSDevTools } = useGSAP();

let ctx: gsap.Context;
let masterTl: gsap.core.Timeline;

onMounted(() => {
	const container = containerRef.value;

	if (!container) return;

	const createBlock = (ele: Element) => {
		const wrapper = document.createElement(block ? "div" : "span");

		wrapper.classList.add("wrapper");
		if (wrapperClass) wrapper.classList.add(wrapperClass);
		ele.parentElement?.append(wrapper);
		wrapper.append(ele);

		const blockEle = document.createElement(block ? "div" : "span");
		const blockBlackEle = document.createElement(block ? "div" : "span");

		blockEle.classList.add("block");
		blockBlackEle.classList.add("block-black");
		wrapper.append(blockEle, blockBlackEle);
	};

	ctx = gsap.context(() => {
		const children = Array.from(container.children);
		const lines: Element[] = [];

		children.forEach((ele) => {
			ele.classList.add("overflow-hidden");

			if (block) {
				createBlock(ele);
				lines.push(ele);
			} else {
				const split = SplitText.create(ele, {
					type: "lines, words",
					mask: "lines",
				});

				split.lines.forEach((line) => {
					createBlock(line);

					lines.push(line);
					gsap.set(line, { autoAlpha: 0 });
				});
			}
		});

		gsap.set(container, { autoAlpha: 1 });

		if (animateOnScroll) {
			masterTl = gsap.timeline({
				delay,
				scrollTrigger: {
					trigger: container,
					start: "top 90%",
					// markers: true,
					once: true,
				},
			});
		} else masterTl = gsap.timeline();

		lines.forEach((line, index) => {
			const primaryBlock = line.nextSibling;
			const blackBlock = primaryBlock?.nextSibling;

			console.log(blackBlock);

			if (!primaryBlock || !blackBlock) return;

			const tl = gsap.timeline({
				defaults: { duration: 1, ease: "power4.out" },
			});

			tl.to(blackBlock, { x: 0 })
				.to(primaryBlock, { x: 0 }, "<0.15")
				.set(line, { autoAlpha: 1 })
				.from(line, { yPercent: 100 })
				.to(primaryBlock, { xPercent: 101 }, "<0.05")
				.to(blackBlock, { xPercent: 101 }, "<0.15");

			masterTl.add(tl, index === 0 ? 0 : "<0.1");
		});

		// GSDevTools.create({ animation: masterTl });
	});
});

onUnmounted(() => {
	ctx.revert();
	masterTl.revert();
});

defineExpose({
	getTween: () => masterTl,
});
</script>

<template>
	<div ref="container" class="opacity-0 invisible"><slot /></div>
</template>
