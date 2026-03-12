export const useGSAP = () => {
	const {
		$gsap,
		$ScrollTrigger,
		$SplitText,
		$GSDevTools,
		$locomotiveScroll,
	} = useNuxtApp();

	return {
		gsap: $gsap,
		ScrollTrigger: $ScrollTrigger,
		SplitText: $SplitText,
		GSDevTools: $GSDevTools,
		locomotiveScroll: $locomotiveScroll,
	};
};
