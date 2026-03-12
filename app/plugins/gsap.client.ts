import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger, SplitText, GSDevTools);

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

	return {
		provide: {
			gsap,
			ScrollTrigger,
			SplitText,
			GSDevTools,
			locomotiveScroll,
		},
	};
});
