# 🎬 GSAP Interaction

GSAP(GreenSock Animation Platform)의 다양한 기능을 한 페이지에서 체험할 수 있는 인터랙티브 쇼케이스입니다.

🔗 **Live Demo:** [gsap-interaction.vercel.app](https://gsap-interaction.vercel.app)

---

## 📌 소개

스크롤 기반 애니메이션, 패럴랙스, SVG 드로잉, 드래그 인터랙션 등 GSAP의 핵심 기능들을 학습하고 체험하기 위해 제작한 프로젝트입니다.

---

## 🛠 기술 스택

| 기술 | 용도 |
|------|------|
| **HTML5** | 시맨틱 마크업 |
| **Tailwind CSS** (CDN) | 유틸리티 기반 스타일링 |
| **JavaScript** (Vanilla) | 인터랙션 로직 |
| **GSAP 3** | 애니메이션 엔진 |
| **Vercel** | 배포 |

### 사용한 GSAP 플러그인

- `ScrollTrigger` — 스크롤 기반 애니메이션
- `TextPlugin` — 텍스트 타이핑 효과
- `Draggable` — 드래그 인터랙션
- `MotionPathPlugin` — 경로 기반 애니메이션
- `ScrollToPlugin` — 부드러운 스크롤 이동

---

## 🎯 섹션별 기능

### 1. Main
- `TextPlugin`을 활용한 타이핑 애니메이션
- `Timeline`으로 제목 → 부제 → 스크롤 힌트 순차 등장
- 스크롤 힌트 반복 바운스 (`yoyo`, `repeat`)

### 2. ScrollTrigger + Stagger
- `ScrollTrigger`로 스크롤 위치 기반 트리거
- `stagger`로 카드 시간차 등장

### 3. 가로 스크롤 (Horizontal Scroll)
- `pin` — 섹션을 화면에 고정
- `scrub` — 스크롤 양에 따라 애니메이션 동기화
- `xPercent`로 가로 패널 이동

### 4. 텍스트 애니메이션 + 카운트업
- 텍스트 한 줄씩 `stagger` 등장
- `onUpdate` 콜백을 활용한 숫자 카운트업
- `data-*` 속성으로 목표값 관리

### 5. 패럴랙스 (Parallax)
- 이미지와 텍스트의 `yPercent` 속도 차이로 깊이감 표현
- `scrub: true`로 스크롤에 완전 동기화

### 6. SVG 드로잉
- `stroke-dasharray` / `stroke-dashoffset` 활용
- 스크롤에 따라 SVG 선이 그려지는 효과

### 7. Draggable
- `Draggable.create()`로 드래그 가능 요소 생성
- `bounds`로 드래그 영역 제한
- 실시간 좌표 표시 (`onDrag` 콜백)
- 더블클릭 회전 기능

### 8. Footer
- `Timeline`으로 순차 등장 (`"-=0.4"` 겹침 효과)
- 배경 텍스트 스크롤 연동 이동
- `ScrollToPlugin`으로 부드러운 Back to Top

---

## 📂 프로젝트 구조

```
GSAP-Interaction/
├── index.html      # HTML 마크업
├── style.css       # 커스텀 스타일
├── script.js       # GSAP 애니메이션 로직
├── vercel.json     # Vercel 배포 설정
└── .gitignore
```

---

## 🚀 실행 방법

```bash
# 레포지토리 클론
git clone https://github.com/mucheol/GSAP-Interaction.git

# 폴더 이동
cd GSAP-Interaction

# Live Server로 실행 (VS Code 확장 또는 아래 명령어)
npx serve .
```

별도 설치 없이 `index.html`을 브라우저에서 직접 열어도 동작합니다.

---

## 📚 학습 키워드

`gsap.to()` · `gsap.from()` · `gsap.fromTo()` · `Timeline` · `ScrollTrigger` · `pin` · `scrub` · `stagger` · `yoyo` · `Draggable` · `TextPlugin` · `ScrollToPlugin` · `onUpdate` · `Parallax` · `SVG stroke animation`

---

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.  
GSAP 라이선스는 [GreenSock 라이선스 정책](https://gsap.com/licensing/)을 따릅니다.
