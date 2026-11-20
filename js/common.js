/*
    common.js
    team-portfolio

    Created by Js Na on 2026/11/20.

    모든 페이지에서 사용하는 공통 스크립트.
*/

// Custom Cursor. 스타일은 css/common.css
document.body.insertAdjacentHTML("beforeend", '<div class="custom-cursor"></div>');
const cursor = document.querySelector(".custom-cursor");

const supportsCustomCursor = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
).matches;

function resetCursor() {
    cursor.classList.remove("visible", "hover", "click");
}

if (supportsCustomCursor) {
    document.addEventListener("pointermove", (event) => {
        if (document.hidden || !document.hasFocus() || event.pointerType !== "mouse") return;

        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add("visible");
    });

    document.addEventListener("pointerover", (event) => {
        if (event.pointerType !== "mouse") return;

        if (event.target.closest("a, button")) {
            cursor.classList.add("hover");
        }
    });

    document.addEventListener("pointerout", (event) => {
        if (event.pointerType !== "mouse") return;

        if (event.target.closest("a, button")) {
            cursor.classList.remove("hover");
        }
    });

    document.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse") {
            cursor.classList.add("click");
        }
    });

    document.addEventListener("pointerup", () => {
        cursor.classList.remove("click");
    });

    document.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse") {
            resetCursor();
        }
    });

    window.addEventListener("blur", resetCursor);
    window.addEventListener("focus", resetCursor);
    window.addEventListener("pageshow", resetCursor);
    window.addEventListener("pagehide", resetCursor);
    document.addEventListener("visibilitychange", resetCursor);
}
