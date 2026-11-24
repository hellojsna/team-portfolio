/*
    nav.js
    team-portfolio

    Created by Js Na on 2026/11/20.

    하단 메뉴바와 공통 푸터 스크립트.
    페이지 body 하단에 <nav class="navigation"></nav> 요소를 추가하고 이 스크립트를 import.
    푸터는 body 끝에 자동으로 삽입됨. (스타일은 css/common.css)
*/

const navMenus = [
    { name: "메인", href: "index.html", color: "#5278E8" },
    { name: "팀 소개", href: "team.html", color: "#48B99B" },
    { name: "프로필", href: "profile.html", color: "#A18AE8" },
    { name: "갤러리", href: "gallery.html", color: "#F08B86" },
    { name: "활동", href: "activity.html", color: "#E5B64F" },
];

// 현재 페이지 파일명 (주소가 / 로 끝나면 index.html)
const navPage = location.pathname.split("/").pop() || "index.html";

const navItems = navMenus.map(({ name, href, color }) => {
    const active = href === navPage ? ` class="active" style="background-color: ${color}"` : "";
    return `<li><a href="${href}"${active}>${name}</a></li>`;
});

const navElement = document.querySelector(".navigation");
if (document.querySelector(".navigation") === null) {
    console.warn(".navigation 요소가 존재하지 않습니다. nav.js를 import하기 전에 <nav class=\"navigation\"></nav> 요소를 body 하단에 추가하세요.");
} else {
    navElement.innerHTML = `<ul>${navItems.join("")}</ul>`;
}

// Footer. 스타일은 css/common.css
const footerContact = {
    email: "colorcolor20261124@example.com",
    instagram: "@colorcolor20261124",
    github: "https://github.com/hellojsna/team-portfolio",
};

document.body.insertAdjacentHTML("beforeend", `
    <footer class="common-footer">
        <div class="common-footer-inner">
            <div>
                <h2 class="common-footer-title">Ctrl + S</h2>
                <p class="common-footer-copy">© 2026 Ctrl + S. All rights reserved.</p>
            </div>
            <ul class="common-footer-links">
                <li>
                    <a class="common-footer-row common-footer-action" href="mailto:${footerContact.email}">
                        <span class="common-footer-label">EMAIL</span>
                        <span class="common-footer-value">${footerContact.email}</span>
                    </a>
                </li>
                <li>
                    <div class="common-footer-row">
                        <span class="common-footer-label">INSTAGRAM</span>
                        <span class="common-footer-value">${footerContact.instagram}</span>
                    </div>
                </li>
                <li>
                    <a class="common-footer-row common-footer-action" href="${footerContact.github}" target="_blank" rel="noopener noreferrer">
                        <span class="common-footer-label">GITHUB</span>
                        <span class="common-footer-value">GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
`);
