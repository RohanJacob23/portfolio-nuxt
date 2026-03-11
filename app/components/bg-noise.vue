<template>
	<svg id="noice">
		<filter id="noise-filter">
			<feTurbulence
				type="fractalNoise"
				baseFrequency="1.5"
				numOctaves="4"
				stitchTiles="stitch"></feTurbulence>
			<feColorMatrix type="saturate" values="0"></feColorMatrix>
			<feComponentTransfer>
				<feFuncR type="linear" slope="1"></feFuncR>
				<feFuncG type="linear" slope="1"></feFuncG>
				<feFuncB type="linear" slope="1"></feFuncB>
				<feFuncA type="linear" slope="0.5"></feFuncA>
			</feComponentTransfer>
			<feComponentTransfer>
				<feFuncR type="linear" slope="1" intercept="0.00" />
				<feFuncG type="linear" slope="1" intercept="0.00" />
				<feFuncB type="linear" slope="1" intercept="0.00" />
			</feComponentTransfer>
		</filter>
		<rect width="100%" height="100%" filter="url(#noise-filter)"></rect>
	</svg>
</template>
