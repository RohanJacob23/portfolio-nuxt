export const useGSAP = () => {
	const { $gsap, $ScrollTrigger, $locomotiveScroll } = useNuxtApp();

	return {
		gsap: $gsap,
		ScrollTrigger: $ScrollTrigger,
		locomotiveScroll: $locomotiveScroll,
	};
};
