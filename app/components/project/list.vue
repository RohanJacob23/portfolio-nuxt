<script setup lang="ts">
interface Project {
	title: string;
	description: string;
	liveLink: string;
	githubLink?: string;
	src: string;
	progress?: boolean;
}

defineProps<{ projects: Project[] }>();
</script>

<template>
	<ul class="divide-y divide-default">
		<li
			v-for="(project, index) in projects"
			:key="index"
			class="first:border-t last:border-b border-default">
			<NuxtLink
				:to="project.liveLink"
				target="_blank"
				external
				class="group grid grid-cols-[1fr_auto] items-center gap-8 py-8 hover:bg-muted/30 hover:px-4 transition-all ease-in-out duration-200 cursor-pointer">
				<AnimeBlockReveal
					animate-on-scroll
					class="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
					<div
						class="text-muted/50 text-4xl font-title group-hover:text-primary transition-colors ease-in-out duration-200">
						0{{ index + 1 }}
					</div>
					<div class="space-y-2">
						<h2
							class="inline-flex items-center gap-4 text-xl md:text-3xl group-hover:text-primary transition-colors ease-in-out duration-200">
							{{ project.title }}
							<UBadge
								v-if="project.progress"
								size="sm"
								variant="subtle"
								>In Progress</UBadge
							>
						</h2>
						<p class="text-sm max-w-3xl text-muted/70">
							{{ project.description }}
						</p>
					</div>
				</AnimeBlockReveal>
				<div>
					<UButton
						icon="lucide:arrow-up-right"
						color="neutral"
						variant="link"
						size="xl"
						aria-label="hover-link"
						class="group-hover:text-primary transition-colors ease-in-out duration-200" />
				</div>
			</NuxtLink>
		</li>
	</ul>
</template>
