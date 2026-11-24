const MEMBERS = [
    {
        name: "나지성",
        photo: "./images/members/jiseong.png",
        roleShort: "메인 페이지 · 내비게이션 · 배포",
        role: "메인 페이지 제작, 공통 메뉴 및 내비게이션 제작, 웹 접근성 개선, GitHub 저장소 관리, GitHub Pages 배포",
        github: "hellojsna",
        bio: "메인 화면과 공통 메뉴바, 저장소 및 배포 관리를 맡고 있습니다.",
        goal: "웹 접근성과 안정적인 배포 환경 구성"
    },
    {
        name: "양한세",
        photo: "./images/members/hanse.png",
        roleShort: "팀 소개 · 프로필 · FAQ · 검색/필터",
        role: "팀원 프로필 제작, 팀 소개 페이지 제작, FAQ 페이지 제작, 프로젝트 검색·필터 기능",
        github: "didgkstp",
        bio: "팀 소개와 팀원 프로필, FAQ 페이지와 프로젝트 검색·필터 기능을 담당합니다.",
        goal: "페이지 구성과 검색·필터 기능 구현"
    },
    {
        name: "이은서",
        photo: "./images/members/eunseo.png",
        roleShort: "갤러리 · 문의 · 반응형 · JS",
        role: "프로젝트 갤러리 제작, 연락처 및 문의 기능 제작, README 작성, 반응형 웹 디자인, JavaScript 인터랙션 구현",
        github: "helloeunseo",
        bio: "프로젝트 갤러리와 문의 기능, 반응형 웹과 JavaScript 인터랙션을 맡고 있습니다.",
        goal: "반응형 화면과 인터랙션 구현"
    },
    {
        name: "이규원",
        photo: "./images/members/kyuwon.png",
        roleShort: "테스트 · 이미지/아이콘 · 발표자료",
        role: "사용성 및 화면 테스트, 이미지 및 아이콘 관리, 기타 개선 기능, 발표자료 제작",
        github: "leekyu9774",
        bio: "화면 테스트와 이미지·아이콘 정리, 개선 사항 및 발표자료 준비를 담당합니다.",
        goal: "화면 검증과 발표자료 완성"
    }
];

const gridEl = document.getElementById("membersGrid");
const modalEl = document.getElementById("memberModal");
const backdropEl = document.getElementById("modalBackdrop");
const closeBtnEl = document.getElementById("modalClose");

const modalPhotoWrapEl = document.getElementById("modalPhotoWrap");
const modalRoleEl = document.getElementById("modalRole");
const modalNameEl = document.getElementById("modalName");
const modalBioEl = document.getElementById("modalBio");
const modalGoalEl = document.getElementById("modalGoal");
const modalGithubEl = document.getElementById("modalGithub");

function createPhotoMarkup(member, className) {
    return `
        <img
            src="${member.photo}"
            alt="${member.name} 증명사진"
            class="${className}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <span class="member-photo-fallback" style="display:none;">사진 준비중</span>
    `;
}

function openModal(member) {
    modalPhotoWrapEl.innerHTML = createPhotoMarkup(member, "member-modal-photo");
    modalRoleEl.textContent = member.role;
    modalNameEl.textContent = member.name;
    modalBioEl.textContent = member.bio;
    modalGoalEl.textContent = member.goal;
    modalGithubEl.textContent = member.github;

    modalEl.classList.add("is-open");
    modalEl.setAttribute("aria-hidden", "false");
}

function closeModal() {
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
}

function renderMembers() {
    if (!gridEl) return;

    gridEl.innerHTML = "";
    MEMBERS.forEach((member) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "member-card";
        card.innerHTML = `
            <div class="member-photo-wrap">
                ${createPhotoMarkup(member, "member-photo")}
            </div>
            <div class="member-info">
                <strong class="member-name">${member.name}</strong>
                <span class="member-role-short">${member.roleShort}</span>
            </div>
        `;
        card.addEventListener("click", () => openModal(member));
        gridEl.appendChild(card);
    });
}

closeBtnEl?.addEventListener("click", closeModal);
backdropEl?.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

renderMembers();