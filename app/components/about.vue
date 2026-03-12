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
	<section class="relative min-h-dvh py-16 px-8">
		<!-- <div
			class="absolute text-primary top-12 left-8 font-mono text-sm uppercase">
			<span class="text-muted/50">02</span>
			About
		</div> -->

		<div
			class="max-w-360 w-full mx-auto grid md:grid-cols-[300px_1fr] content-center gap-8">
			<AnimeBlockReveal
				animate-on-scroll
				class="md:sticky md:top-16 font-mono divide-y divide-default *:py-4 h-[calc(100%-192px)]">
				<div class="text-sm text-muted space-y-1">
					<p class="text-muted/50 text-xs uppercase">Location</p>
					<p>
						<span class="text-default">India</span> · Remote
						friendly
					</p>
				</div>
				<div class="text-sm text-muted space-y-1">
					<p class="text-muted/50 text-xs uppercase">Education</p>
					<p>
						<span class="text-default">MCA</span> — Xavier's
						Institute of Management and Informatics, Jaipur
					</p>
					<p>
						<span class="text-default">BCA</span> — St. Xavier's
						College, Jaipur
					</p>
				</div>
				<div class="text-sm text-muted space-y-1">
					<p class="text-muted/50 text-xs uppercase">Speciality</p>
					<p>Fullstack · Creative Dev</p>
				</div>
				<div class="text-sm text-muted space-y-1">
					<p class="text-muted/50 text-xs uppercase">
						Currently into
					</p>
					<p>GSAP · Three.js</p>
				</div>
			</AnimeBlockReveal>

			<div class="space-y-12">
				<div class="max-w-3xl space-y-12">
					<AnimeBlockReveal animate-on-scroll>
						<h1
							class="text-6xl md:text-8xl font-title leading-[1.2]">
							Code that <br />
							<span class="text-primary italic">feels</span>
							right.
						</h1>
					</AnimeBlockReveal>

					<AnimeBlockReveal animate-on-scroll class="space-y-6">
						<p
							class="[&_strong]:text-default text-muted/70 [&_strong]:font-medium font-mono">
							I'm <strong>Rohan Koshy Jacob</strong> — a fullstack
							developer who builds things properly from database
							to deploy. My stack is Next.js, Nuxt, TypeScript,
							Hono, and MongoDB. I write clean maintainable code
							and I genuinely enjoy reading docs.
						</p>
						<p
							class="[&_strong]:text-default text-muted/70 [&_strong]:font-medium [&_em]:text-primary font-mono">
							The part I'm most excited about right now is
							creative development —
							<strong>GSAP and Three.js</strong> — learning what
							happens when engineering meets expression.
							Interfaces that don't just function, but
							<em>feel alive.</em>
						</p>
						<p class="text-muted/70 font-mono">
							I'm not a designer. But I know what good feels like
							— and I care enough to get it right.
						</p>
					</AnimeBlockReveal>
				</div>

				<AnimeBlockReveal animate-on-scroll block
					><div
						class="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-default border border-default bg-muted/50 w-full max-w-7xl rounded-xl">
						<div class="flex-1 space-y-4 p-4">
							<p
								class="font-mono text-sm text-muted/70 uppercase">
								frontend
							</p>
							<div class="flex flex-wrap gap-1 items-center">
								<UBadge
									v-for="(skill, index) in data.frontend"
									:key="index"
									color="neutral"
									variant="subtle"
									class="rounded-full">
									{{ skill }}
								</UBadge>
							</div>
						</div>
						<div class="flex-1 space-y-4 p-4">
							<p
								class="font-mono text-sm text-muted/70 uppercase">
								backend
							</p>
							<div class="flex flex-wrap gap-1 items-center">
								<UBadge
									v-for="(skill, index) in data.backend"
									:key="index"
									color="neutral"
									variant="subtle"
									class="rounded-full">
									{{ skill }}
								</UBadge>
							</div>
						</div>
						<div class="flex-1 space-y-4 p-4">
							<p
								class="font-mono text-sm text-muted/70 uppercase">
								creative (learning)
							</p>
							<div class="flex flex-wrap gap-1 items-center">
								<UBadge
									v-for="(skill, index) in data.creative"
									:key="index"
									:color="
										skill === 'GSAP' || skill === 'Motion'
											? 'primary'
											: 'neutral'
									"
									variant="subtle"
									class="rounded-full">
									{{ skill }}
								</UBadge>
							</div>
						</div>
					</div>
				</AnimeBlockReveal>
			</div>
		</div>
	</section>
</template>
