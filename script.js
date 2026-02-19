gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin)

//--- Main Section ---//
// 타이핑
gsap.to(".main-title", {
  duration: 2,
  text: "KMC GSAP INTERACTION",
  ease: "none",
  delay: 0.5
});

// 타임라인순차등장
const mainTL = gsap.timeline({ delay: 2.5 });

mainTL
.to(".main-subtitle", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out"
})
.to(".main-scroll-hint", {
  opacity: 1,
  duration: 0.6,
  ease: "power2.out"
})
// 스크롤 안내 바운스
.to(".main-scroll-hint div", {
  y: 10,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
})

//--- Card Section ---//
gsap.to(".cards-title", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
  ScrollTrigger: {
    trigger: ".cards-title",
    start: "top 80%",
  }
});
// card 시간차 등장 (stagger)
gsap.to(".card", {
  opacity: 1,
  y: 0,
  duration: 0.6,
  stagger: 0.15,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cards-wrapper",
    start: "top 75%",
  }
});