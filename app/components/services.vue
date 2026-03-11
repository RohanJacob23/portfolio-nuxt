<script setup lang="ts">
const data = {
	frontend: [
		"Next.js",
		"Nuxt",
		"React",
		"Vue",
		"Typescript",
		"Tailwindcss",
		"Vite",
	],
	backend: ["node.js", "hono", "postgresql"],
	creative: ["GSAP", "Motion", "Three.js (learning)", "Blender (learning)"],
};
</script>

<template>
	<section class="relative grid content-center min-h-[80dvh] py-16 px-8">
		<!-- <div
			class="absolute text-primary top-12 left-8 font-mono text-sm uppercase">
			<span class="text-muted/50">02</span>
			About
		</div> -->

		<div
			class="max-w-360 mx-auto grid md:grid-cols-[2fr_1fr] gap-12 md:gap-8 font-mono">
			<!-- first column -->

			<div class="max-w-3xl space-y-6">
				<div class="space-y-6">
					<h1 class="text-6xl md:text-8xl font-title">
						What I <br />
						<span class="text-primary italic">build for you.</span>
					</h1>
					<p class="text-muted/70">
						Startups, small businesses, freelancers — anyone who
						needs a website built properly. Honest scopes, clean
						code, no surprises.
					</p>
				</div>

				<div>
					<div class="text-muted mb-4">How it works</div>
					<div class="flex items-center gap-4 text-sm text-muted/70">
						<div>1</div>
						<div class="[&_span]:text-default [&_span]:uppercase">
							<span>Brief</span> — you describe what you need. I
							ask the right questions.
						</div>
					</div>
					<div class="flex items-center gap-4 text-sm text-muted/70">
						<div>2</div>
						<div class="[&_span]:text-default [&_span]:uppercase">
							<span>Proposal</span> — scope, timeline, price. No
							surprises.
						</div>
					</div>
					<div class="flex items-center gap-4 text-sm text-muted/70">
						<div>3</div>
						<div class="[&_span]:text-default [&_span]:uppercase">
							<span>Build</span> — I code, you get updates along
							the way.
						</div>
					</div>
					<div class="flex items-center gap-4 text-sm text-muted/70">
						<div>4</div>
						<div class="[&_span]:text-default [&_span]:uppercase">
							<span>Ship</span> — we launch. I hand over
							everything cleanly.
						</div>
					</div>
				</div>
			</div>

			<!-- second column -->
			<div class="grid content-center">
				<ul
					class="divide-y divide-default *:first:border-t *:py-4 h-fit">
					<li
						class="group inline-flex justify-between w-full hover:pl-4 transition-[padding] ease-in-out duration-200">
						<span
							class="group-hover:text-primary transition-colors ease-in-out duration-200"
							>Landing Page</span
						><span class="text-sm text-muted/70">₹8k - ₹15k</span>
					</li>
					<li
						class="group inline-flex justify-between w-full hover:pl-4 transition-[padding] ease-in-out duration-200">
						<span
							class="group-hover:text-primary transition-colors ease-in-out duration-200"
							>Multi-page Website</span
						><span class="text-sm text-muted/70">₹18k - ₹35k</span>
					</li>
					<li
						class="group inline-flex justify-between w-full hover:pl-4 transition-[padding] ease-in-out duration-200">
						<span
							class="group-hover:text-primary transition-colors ease-in-out duration-200"
							>Fullstack Web App</span
						><span class="text-sm text-muted/70">₹35k - ₹80k</span>
					</li>
					<li
						class="group inline-flex justify-between w-full hover:pl-4 transition-[padding] ease-in-out duration-200">
						<span
							class="group-hover:text-primary transition-colors ease-in-out duration-200"
							>Animation / Creative Dev</span
						><span class="text-sm text-muted/70">₹10k - ₹25k</span>
					</li>
					<li
						class="group inline-flex justify-between w-full hover:pl-4 transition-[padding] ease-in-out duration-200">
						<span
							class="group-hover:text-primary transition-colors ease-in-out duration-200"
							>Fixes &amp; Improvements</span
						><span class="text-sm text-muted/70">₹3k - ₹10k</span>
					</li>
					<p class="text-muted text-sm">
						Need something custom? Describe it — I'll give you an
						honest quote.
					</p>
				</ul>
			</div>
		</div>
	</section>
</template>
