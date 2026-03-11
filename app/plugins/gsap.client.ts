import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default defineNuxtPlugin((nuxtApp) => {
	const locomotiveScroll = new LocomotiveScroll({
		initCustomTicker: (render) => {
			gsap.ticker.add(render);
		},
		destroyCustomTicker: (render) => {
			gsap.ticker.remove(render);
		},
	});

	locomotiveScroll.lenisInstance?.on("scroll", ScrollTrigger.update);

	/* Disable lag smoothing in GSAP to prevent any delay in scroll animations */
	gsap.ticker.lagSmoothing(0);

	nuxtApp.hook("page:transition:finish", () => {
		ScrollTrigger.refresh();
	});

	return { provide: { gsap, ScrollTrigger, locomotiveScroll } };
});
