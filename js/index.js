/*
    index.js
    team-portfolio

    Created by Js Na on 2026/11/20.

    index.html에 적용되는 스크립트.
*/

// Word Animation
const words = document.querySelectorAll(".changing-word span");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
);

let currentIndex = 0;
let timer = null;
let isPageActive = !document.hidden && document.hasFocus();

function changeWord() {
    words[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % words.length;
    words[currentIndex].classList.add("active");
}

function startAnimation() {
    if (timer !== null || !isPageActive || reducedMotion.matches) {
        return;
    }

    timer = setInterval(changeWord, 1800);
}

function stopAnimation() {
    clearInterval(timer);
    timer = null;
}

function handlePageActivity() {
    isPageActive = !document.hidden && document.hasFocus();

    if (isPageActive) {
        startAnimation();
    } else {
        stopAnimation();
    }
}

window.addEventListener("blur", handlePageActivity);
window.addEventListener("focus", handlePageActivity);
window.addEventListener("pageshow", handlePageActivity);
window.addEventListener("pagehide", handlePageActivity);
document.addEventListener("visibilitychange", handlePageActivity);

reducedMotion.addEventListener("change", () => {
    if (reducedMotion.matches) {
        stopAnimation();
    } else {
        startAnimation();
    }
});

startAnimation();

// Theme Color. COLOR 글자에 nav.js의 navMenus 테마 색을 순서대로 지정(--color).
document.querySelectorAll("[data-color]").forEach((element) => {
    element.style.setProperty("--color", navMenus[element.dataset.color].color);
});

// Pages. 페이지 링크에 그 페이지의 테마 색(--color)을 지정. (같은 href의 navMenus 색)
navMenus.forEach(({ href, color }) => {
    const link = document.querySelector(`.pages a[href="${href}"]`);
    if (link) link.style.setProperty("--color", color);
});

// COLOR Paint. 스크롤하면 사각형이 지나가며 회색 글자에 색칠.
const paint = document.querySelector(".paint");
const paintWord = paint.querySelector(".paint-word");
const paintBar = paint.querySelector(".paint-bar");
const paintLetters = paint.querySelectorAll("[data-color]");

function updatePaint() {
    // 스크롤 진행도 0 ~ 1
    const scrolled = -paint.getBoundingClientRect().top;
    const total = paint.offsetHeight - window.innerHeight;
    const progress = reducedMotion.matches ? 1 : Math.min(Math.max(scrolled / total, 0), 1);

    // 진행도 앞쪽 65%: 사각형이 단어 왼쪽 바깥에서 오른쪽 바깥까지 이동.
    const sweep = Math.min(progress / 0.65, 1);
    const barLeft = sweep * (paintWord.offsetWidth + paintBar.offsetWidth) - paintBar.offsetWidth;
    paintBar.style.transform = `translateX(${barLeft}px)`;

    // 사각형 중심이 글자 중심을 지나면 그 글자에 색칠.
    const barCenter = barLeft + paintBar.offsetWidth / 2;
    paintLetters.forEach((letter) => {
        const letterCenter = letter.offsetLeft + letter.offsetWidth / 2;
        letter.classList.toggle("painted", barCenter >= letterCenter);
    });

    // 다 칠해지고 설명 텍스트 표시.
    paint.classList.toggle("done", progress >= 0.7);
}

window.addEventListener("scroll", updatePaint);
window.addEventListener("resize", updatePaint);
updatePaint();

// Reveal. 스크롤해서 화면에 들어오면 나타난다.
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// 키보드 Ctrl키, S키. 커서가 광원이 되어 가까운 키 표면이 밝아지고, 커서 쪽으로 살짝 기울어짐.
const keys = document.querySelectorAll(".key");
let lastPointer = null;

function updateKeys() {
    if (lastPointer === null) return;

    keys.forEach((key) => {
        const rect = key.getBoundingClientRect();
        const x = lastPointer.x - rect.left;
        const y = lastPointer.y - rect.top;

        // 광원 위치: 키 왼쪽 위 기준 커서 좌표
        key.style.setProperty("--mx", `${x}px`);
        key.style.setProperty("--my", `${y}px`);
        key.style.setProperty("--lit", 1);

        // 기울기: 커서 쪽으로 최대 ±10도. 키 너비의 2배 거리까지 반응하고 멀수록 약해짐.
        if (!reducedMotion.matches) {
            const offsetX = x - rect.width / 2;
            const offsetY = y - rect.height / 2;
            const power = Math.max(1 - Math.hypot(offsetX, offsetY) / (rect.width * 2), 0);
            const tilt = (offset, length) => Math.max(-10, Math.min(10, (offset / length) * 20)) * power;
            key.style.setProperty("--dx", `${tilt(offsetX, rect.width)}deg`);
            key.style.setProperty("--dy", `${-tilt(offsetY, rect.height)}deg`);
        }
    });
}

document.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;

    lastPointer = { x: event.clientX, y: event.clientY };
    updateKeys();
});

// 스크롤로 키가 움직여도 커서 기준으로 다시 계산
window.addEventListener("scroll", updateKeys);

document.addEventListener("pointerleave", () => {
    lastPointer = null;
    keys.forEach((key) => {
        key.style.setProperty("--lit", 0);
        key.style.removeProperty("--dx");
        key.style.removeProperty("--dy");
    });
});
