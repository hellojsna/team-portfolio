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
