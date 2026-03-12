<script lang="ts" setup>
const cursorRef = useTemplateRef("cursor");
const outerCursorRef = useTemplateRef("outerCursor");

const { gsap } = useGSAP();

let ctx: gsap.Context;

onMounted(() => {
	const cursor = cursorRef.value;
	const outerCursor = outerCursorRef.value;

	if (!cursor || !outerCursor) return;

	ctx = gsap.context(() => {
		const innerCursorRect = cursor.getBoundingClientRect();
		const outerCursorRect = outerCursor.getBoundingClientRect();

		const innerCursorCenterX = innerCursorRect.width / 2;
		const innerCursorCenterY = innerCursorRect.height / 2;

		const outerCursorCenterX = outerCursorRect.width / 2;
		const outerCursorCenterY = outerCursorRect.height / 2;

		const innerOptions: gsap.TweenVars = { duration: 0.25, ease: "power4" };
		const outerOptions: gsap.TweenVars = {
			duration: 0.4,
			ease: "back.out(1.5)",
		};

		const xInnerTo = gsap.quickTo(cursor, "x", innerOptions);
		const yInnerTo = gsap.quickTo(cursor, "y", innerOptions);

		const xOuterTo = gsap.quickTo(outerCursor, "x", outerOptions);
		const yOuterTo = gsap.quickTo(outerCursor, "y", outerOptions);

		let hasMoved = false;

		const handleMouseMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;

			xInnerTo(clientX - innerCursorCenterX);
			yInnerTo(clientY - innerCursorCenterY);

			xOuterTo(clientX - outerCursorCenterX);
			yOuterTo(clientY - outerCursorCenterY);

			if (!hasMoved) {
				gsap.to(cursor, { autoAlpha: 1, duration: 0.3 });
				gsap.to(outerCursor, { autoAlpha: 1, duration: 0.3 });
				hasMoved = true;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});
});

onUnmounted(() => {
	ctx.revert();
});
</script>

<template>
	<div
		ref="outerCursor"
		class="hidden md:block size-10 border border-primary fixed top-0 left-0 z-40 rounded-full pointer-events-none invisible opacity-0" />
	<div
		ref="cursor"
		class="hidden md:block size-4 bg-primary fixed top-0 left-0 z-40 rounded-full pointer-events-none invisible opacity-0" />
</template>
