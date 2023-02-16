import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#lamp1",
  {
    rotateZ: 0,
    transformOrigin: "top right",
  },
  {
    rotateZ: 50,
    duration: 5,
  }
);

gsap.to(".presentation__line", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 2,
  scrollTrigger: {
    trigger: ".presentation__line",
    scrub: true,
  },
});

console.log("jar");
