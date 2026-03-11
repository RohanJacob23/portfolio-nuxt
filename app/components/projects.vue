<template>
	<section class="grid min-h-dvh py-16 px-8 font-mono">
		<div class="space-y-12 max-w-360 w-full mx-auto">
			<h1 class="text-6xl md:text-8xl font-title">Projects</h1>

			<div class="space-y-6">
				<!-- first section -->
				<h2 class="text-2xl md:text-4xl text-muted">
					Real/Client Projects
				</h2>
				<ProjectList :projects="realProjects" />
			</div>
			<div class="space-y-6">
				<!-- second section -->
				<h2 class="text-2xl md:text-4xl text-muted">
					Personal Projects
				</h2>
				<ProjectList :projects="personalProjects" />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const personalProjects = [
	{
		title: "Kerna",
		description:
			"A Saas website that helps you to master any topic in seconds. Kerna uses AI to turn your PDFs and notes into concise summaries, key terms, and practice quizzes instantly.",
		liveLink: "https://kerna.vercel.app/",
		githubLink: "https://github.com/RohanJacob23/kerna",
		src: "/projects/kerna.png",
	},
	{
		title: "Split Nest",
		description:
			"SplitNest is a modern web application designed to simplify shared expense management for groups such as friends, roommates, or travel companions.",
		liveLink: "https://split-nest-web.vercel.app/",
		githubLink: "https://github.com/RohanJacob23/SplitNest",
		src: "/projects/split.png",
	},
	{
		title: "Clear Count",
		description:
			"A SaaS website empowers users to effortlessly record their transactions and gain insightful analytics through a personalized dashboard.",
		liveLink: "https://clear-count.vercel.app/",
		githubLink: "https://github.com/RohanJacob23/clear-count",
		src: "/projects/clearCount.png",
	},
	{
		title: "Chat Application",
		description:
			"Chat App built with Nextjs 14, pusher, tailwindcss and mantine UI.",
		liveLink: "https://chat-app-mu-nine.vercel.app",
		githubLink: "https://github.com/RohanJacob23/chat-app-2.0",
		src: "/projects/chatApp.png",
	},
	{
		title: "Task Manangement App",
		description:
			"Built using Nextjs 13 with drag and drop feature along with user authentication.",
		liveLink: "https://task-management-board.vercel.app",
		githubLink: "https://github.com/RohanJacob23/Task-Management-Board",
		src: "/projects/taskManagement.png",
	},

	{
		title: "Cat Wiki",
		description:
			"Cat Wiki is built with Nextjs 13. It fetches the data from the api and display the cat characteristics.",
		liveLink: "https://my-cat-wiki.vercel.app",
		githubLink: "https://github.com/RohanJacob23/MyCat-Wiki",
		src: "/projects/catWiki.png",
	},
	{
		title: "Spotify clone",
		description:
			"Spotify clone built with Next.js 13 along with Spotify API integration.",
		liveLink: "https://spotify-clone-git-main-rohanjacob23.vercel.app",
		githubLink: "https://github.com/RohanJacob23/Spotify-Clone",
		src: "/projects/spotifyClone.png",
	},
];

const realProjects = [
	{
		title: "Instant Itinerary",
		description:
			"A smart travel planning web app that generates personalized itineraries instantly, helping users organize trips efficiently with a clean and intuitive interface.",
		liveLink: "https://web-project-blush.vercel.app/",
		src: "/projects/itinerary.png",
		progress: false,
	},
	{
		title: "ZEST - 2025",
		description:
			"A modern event website designed for ZEST 2025, featuring smooth animations, engaging layouts, and an immersive experience for showcasing event details.",
		liveLink: "https://helpful-bublanina-562fa3.netlify.app/",
		src: "/projects/zest-2025.png",
		progress: false,
	},
	{
		title: "Technoid - 2024",
		description:
			"A dynamic website built for Technoid 2024 to highlight technical events, competitions, and schedules through a structured and visually engaging interface.",
		liveLink: "https://inquisitive-sawine-52c019.netlify.app/",
		src: "/projects/technoid-2024.png",
		progress: false,
	},
	{
		title: "ZEST - 2026",
		description:
			"Currently under development — a redesigned and more immersive version of the ZEST event website with enhanced animations and improved user experience.",
		liveLink: "https://helpful-bublanina-562fa3.netlify.app/",
		src: "",
		progress: true,
	},
];
</script>
