<script setup lang="ts">
const separatorRef = useTemplateRef("separator");

const { gsap } = useGSAP();

let ctx: gsap.Context;

onMounted(() => {
	const separator = separatorRef.value;

	if (!separator) return;

	ctx = gsap.context(() => {
		const tween = gsap.to(separator, {
			scaleX: 1,
			duration: 1,
			ease: "sine.inOut",
			scrollTrigger: {
				trigger: separator,
				start: "top 95%",
				once: true,
			},
		});
	});
});
</script>

<template>
	<div
		ref="separator"
		class="w-full h-0.5 rounded-full bg-linear-to-r from-transparent via-primary to-transparent scale-x-0 origin-center" />
</template>
