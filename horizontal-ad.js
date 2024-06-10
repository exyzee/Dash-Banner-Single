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
    gsap.from(".cta", { duration: 1, y: 50, opacity: 0, ease: "bounce.out", delay: 2 });
    gsap.from(".phone-mockup", { duration: 1, scale: 0.5, opacity: 0, ease: "back.out", delay: 2.5 });
});
