<template>
	<section
		class="relative grid content-center min-h-dvh py-16 px-8 overflow-hidden">
		<div
			data-scroll
			data-scroll-enable-touch-speed
			data-scroll-speed="-0.25"
			class="absolute top-1/2 right-4 -translate-y-1/2 text-[75vw] md:text-[45vw] font-bold italic font-title pointer-events-none text-neutral-800/25">
			HI
		</div>
		<div class="relative max-w-360 w-full mx-auto font-mono">
			<h1
				class="text-6xl md:text-[8vw] [&_em]:text-primary font-light font-title leading-[1.1] mb-6">
				Got a project?
				<br />
				Let's <em>build</em> <br />
				something.
			</h1>

			<div class="flex flex-wrap gap-4 font-mono">
				<UButton size="xl">rohankoshyjacob@gmail.com</UButton>
				<UButton size="xl" variant="subtle">Github</UButton>
				<UButton size="xl" variant="subtle">LinkedIn</UButton>
				<UButton size="xl" variant="subtle">Twitter</UButton>
			</div>
		</div>
	</section>
</template>
