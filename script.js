window.addEventListener("load", () => {
 gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TextPlugin, ScrollToPlugin);

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

//--- Scroll section ---//
const panels = gsap.utils.toArray(".panel");

gsap.to(panels, {
  // 전체 너비에서 한 화면만큼 빼기
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,           // 섹션을 화면에 고정
    scrub: 1,            // 스크롤에 부드럽게 동기화 (1 = 약간의 관성)
    end: () => "+=" + document.querySelector(".horizontal-wrapper").offsetWidth * 0.5 ,
    invalidateOnRefresh: true,
  }
});

//--- Text Animation ---//
//한줄씩 등장
gsap.utils.toArray(".reveal-line").forEach((line, i) => {
  gsap.to(line, {
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.3,
    delay: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: line,
      start: "top 85%",
    }
  });
});
// 카운트업
gsap.utils.toArray(".counter-number").forEach(counter => {
  const target = parseInt(counter.dataset.target);
  const obj = { value: 0 };

  gsap.to(obj, {
    value: target,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: counter,
      start: "top 80%",
    },
    onUpdate: () => {
      counter.textContent = Math.floor(obj.value);
    }
  });
});

//--- Parallax ---//
gsap.utils.toArray(".parallax-block").forEach(block => {
  const img = block.querySelector(".parallax-img");
  const text = block.querySelector(".parallax-text");

  // 이미지 느리게 살짝 위로
  gsap.to(img, {
    yPercent: -15,
    ease: "none",
    scrollTrigger: {
      trigger: block,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
  // 택스트 빠르게(위로)
  gsap.to(text, {
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: block,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
});

//--- SVG Drawing ---//
gsap.to(".svg-title", {
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#svg-draw",
    start: "top 80%",
  }
});
gsap.to(".svg-subtitle", {
  opacity: 1,
  duration: 0.8,
  delay: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#svg-draw",
    start: "top 80%",
  }
});
// 선 (스크롤 동기화)
gsap.utils.toArray(".draw-line").forEach((line, i) => {
  gsap.to(line, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".svg-wrapper",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 1,
    }
  });
});
// 선 다 그려진 후 텍스트
gsap.to(".svg-text", {
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".svg-wrapper",
    start: "bottom 40%"
  }
})

//--- Draggable ---//
gsap.to(".drag-title", {
  opacity: 1,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#draggable",
    start: "top 80%",
  }
});
gsap.to(".drag-subtitle", {
  opacity: 1,
  duration: 0.8,
  delay: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#draggable",
    start: "top 75%"
  }
});
// 드래그 요소 등장 애니메이션
gsap.from(".drag-item", {
  scale: 0,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".drag-area",
    start: "top 75%",
  }
});

// Draggable 적용
const dragX = document.getElementById("drag-x");
const dragY = document.getElementById("drag-y");
const dragRotation = document.getElementById("drag-rotation");

Draggable.create(".drag-item", {
  bounds: ".drag-area",   // 이 영역 안에서만 드래그 가능하게
  onDrag: function () {
    // 드래그 중 좌표 실시간 표시
    dragX.textContent = Math.round(this.x);
    dragY.textContent = Math.round(this.y);
  },
  onDragEnd: function () {
    // 놓았을때 살짝 튕기게
    gsap.fromTo(this.target,
      { scale: 0.9 },
      { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" }
    );
  }
});
// 회전기능
document.querySelectorAll(".drag-item").forEach(item => {
  item.addEventListener("dblclick", () => {
    gsap.to(item, {
      rotation: "+=45",
      duration: 0.4,
      ease: "back.out(1.7)",
    });
    dragRotation.textContent = Math.round(gsap.getProperty(item, "rotation")) + 90 + "°";
  });
});

//--- Footer ---//
gsap.fromTo(".footer-bg-text", 
  { xPercent: 30},
  {
    xPercent: -80,
    left: "50%",
    ease: "none",
    scrollTrigger: {
      trigger: "#footer",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  }
);
const footerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#footer",
    start: "top 60%",
  }
});

footerTl
  .to(".footer-title", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  })
  .to(".footer-subtitle", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.4")
  .to(".footer-links", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.3")
  .to("#scroll-top", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
  }, "-=0.3");

  // Top버튼
  document.getElementById("scroll-top").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 2,
      ease: "power2.inOut",
    })
  });

ScrollTrigger.refresh();
});