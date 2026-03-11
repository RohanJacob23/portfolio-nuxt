<template>
	<header
		class="hidden md:block fixed z-10 top-0 left-0 w-full h-16 bg-default">
		<nav class="flex gap-4 items-center h-full px-8 py-2 text-lg">
			<div class="font-title italic font-bold [&_span]:text-primary">
				<span class="mr-2">✦</span> Rohan K<span>.</span> Jacob
			</div>

			<ul class="flex flex-1 justify-center gap-4 uppercase">
				<li><NuxtLink to="#home">Home</NuxtLink></li>
				<li><NuxtLink to="#home">About</NuxtLink></li>
				<li><NuxtLink to="#home">Service</NuxtLink></li>
				<li><NuxtLink to="#home">Contact</NuxtLink></li>
			</ul>

			<div class="flex items-center gap-2 text-sm">
				<span class="relative flex size-2">
					<span
						class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
					<span
						class="relative inline-flex size-2 rounded-full bg-success" />
				</span>
				Available for work
			</div>
		</nav>
	</header>
</template>
