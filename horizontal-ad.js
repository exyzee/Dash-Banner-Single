document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".logo", { duration: 1, x: -50, opacity: 0, ease: "power3.out" });
  gsap.from(".tagline", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 0.5 });
  gsap.from(".description", { duration: 1, x: -50, opacity: 0, ease: "power3.out", delay: 1 });
  gsap.from(".features .feature", {
    duration: 1,
    x: -50,
    opacity: 0,
    ease: "power3.out",
    stagger: 0.2,
    delay: 1.5
  });
  gsap.from(".phone-mockup", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out", delay: 2.5 });

  gsap.to(".cta", {
      scale: 1.1,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
  });
});
