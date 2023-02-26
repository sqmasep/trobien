import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const savingTl = gsap.timeline();
savingTl
  .fromTo(
    "#arm1",
    {
      rotateZ: -5,
      transformOrigin: "top left",
    },
    {
      rotateZ: 5,
      repeat: Infinity,
      yoyo: true,
      ease: "power1.inOut",
      transformOrigin: "top left",
      scrollTrigger: {
        trigger: "saving-svg",
        start: "+=20% 80%",
        toggleActions: "play pause resume pause",
      },
    }
  )
  .fromTo(
    "#arm2",
    {
      transformOrigin: "bottom center",
      rotateZ: -5,
    },
    {
      ease: "power1.inOut",
      duration: 1.2,
      transformOrigin: "bottom center",
      rotateZ: 5,
      repeat: Infinity,
      yoyo: true,
    }
  );

const ideaTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#svg-lights",
  },
});

ideaTl
  .fromTo(
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
  )
  .to("#lamp2", {
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
      start: "50% bottom",
      toggleActions: "play reverse pause reset",
    },
  }
);
