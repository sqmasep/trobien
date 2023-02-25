import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#svg-lights",
  },
});

tl.fromTo(
  "#lamp1",
  {
    rotateZ: 50,
    transformOrigin: "top right",
  },
  {
    rotateZ: -3,
    duration: 2,
    ease: "power4.in",
  }
).to("#lamp2", {
  rotateZ: -20,
  transformOrigin: "top right",
});

gsap.to(".presentation__line", {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  duration: 2,
  scrollTrigger: {
    trigger: ".presentation__line",
    scrub: true,
  },
});

gsap.fromTo(
  ".contact__form .form__section",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    stagger: 0.125,
    duration: 0.25,
    y: 0,
    scrollTrigger: {
      trigger: ".contact__form",
    },
  }
);
