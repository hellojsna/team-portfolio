// 작품 데이터 6개
const projects = [

    {
        number: "team project",
        title: "oo프로젝트",
        subtitle: "지금우리가하고있는프로젝트한줄소개",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
        description: "~~~~~~~~~~~~~~~ 웹 프로젝트입니다.",
        intro: "사용자가 도서명이나 저자명을 입력하면 관련 도서 정보를 확인할 수 있는 서비스입니다. 직관적인 화면 구성으로 누구나 쉽게 이용할 수 있도록 기획했습니다.",
        features: "• 도서명 및 저자 검색\n• 도서 정보 표시\n• 검색 결과 목록 제공\n• 사용자 친화적인 인터페이스",
        tech: ["HTML", "CSS", "JavaScript"],
        url: ""
    },

    {
        number: "20263547 이규원 PROJECT",
        title: "재고 관리 시스템",
        subtitle: "제품의 재고 현황을 관리하는 프로그램",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000",
        description: "제품의 입출고와 재고 현황을 효율적으로 관리하기 위한 프로젝트입니다.",
        intro: "제품의 수량과 정보를 관리하고 재고 현황을 쉽게 파악할 수 있도록 제작했습니다.",
        features: "• 제품 정보 등록 및 조회\n• 재고 수량 관리\n• 입출고 내역 확인\n• 재고 현황 관리",
        tech: ["Python", "CSV", "Streamlit"],
        url: ""
    },

    {
        number: "20263548 이은서 PROJECT",
        title: "행복 도서관 웹 사이트",
        subtitle: "도서 검색과 신간·인기 도서 정보를 제공하는<br>도서관 웹 서비스",
        image: "20263548.png",
        description: "원하는 도서를 빠르게 검색하고 신간 및 인기 도서 정보를 한눈에 확인할 수 있도록 만든 도서관 웹 프로젝트입니다.",
        intro: "사용자가 도서명·저자·출판사로 자료를 검색하고, 이달의 신간 도서와 국내·해외 도서 순위를 편리하게 탐색할 수 있도록 구성한 웹 서비스입니다.",
        features: "• 도서명·저자·출판사 기반 자료 검색\n• 이달의 신간 및 추천 도서 소개\n• 국내·해외 도서 인기 순위(1~5위) 제공\n• 다크모드 전환 및 로그인·회원가입 기능",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "" // 연결할 주소 입력 (예: "./book.html" 또는 "https://...")
    },

    {
        number: "20263550 이준모 PROJECT",
        title: "AI 이미지 분석",
        subtitle: "인공지능을 활용한 이미지 분석 프로젝트",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000",
        description: "인공지능 기술을 활용하여 이미지 데이터를 분석하는 프로젝트입니다.",
        intro: "이미지 데이터를 입력받아 인공지능을 통해 특징을 분석하고 결과를 제공하는 것을 목표로 합니다.",
        features: "• 이미지 데이터 입력\n• 이미지 분석 처리\n• 분석 결과 출력\n• AI 기술 활용",
        tech: ["Python", "AI", "Machine Learning"],
        url: ""
    },

    {
        number: "20263551 나지성 PROJECT",
        title: "Clean House",
        subtitle: "청소 서비스 정보 및 예약 플랫폼",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1000",
        description: "청소 서비스를 편리하게 이용할 수 있도록 기획한 플랫폼입니다.",
        intro: "청소가 필요한 사용자와 청소 서비스를 연결하는 것을 목적으로 제작한 프로젝트입니다.",
        features: "• 청소 서비스 종류 안내\n• 서비스 정보 확인\n• 예약 신청 기능\n• 사용자 중심의 화면 구성",
        tech: ["HTML", "CSS", "JavaScript"],
        url: ""
    },

    {
        number: "20263553 양한세 PROJECT",
        title: "포트폴리오 웹사이트",
        subtitle: "개인 및 팀 프로젝트를 소개하는 웹사이트",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000",
        description: "다양한 프로젝트와 개발 활동을 소개하기 위해 제작한 웹사이트입니다.",
        intro: "팀과 개인의 프로젝트 결과물을 한곳에서 확인할 수 있도록 구성한 포트폴리오 웹사이트입니다.",
        features: "• 프로젝트 갤러리 구성\n• 작품별 상세 정보 제공\n• 반응형 웹 디자인\n• 페이지 간 이동 기능",
        tech: ["HTML", "CSS", "JavaScript"],
        url: ""
    }

];


// 작품 카드 화면에 생성하기
const galleryGrid = document.getElementById("galleryGrid");

projects.forEach((project, index) => {

    const card = document.createElement("div");

    card.className = "gallery-card";

    card.innerHTML = `
        <div class="image-wrapper">
            <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="card-info">
            <div class="card-number">${project.number}</div>
            <h2>${project.title}</h2>
            <p>${project.subtitle}</p>
            <span class="view-more">VIEW PROJECT →</span>
        </div>
    `;

    // 카드 클릭 시 상세 정보 표시
    card.addEventListener("click", () => {
        openModal(index);
    });

    galleryGrid.appendChild(card);

});


// 상세 모달 열기
const modal = document.getElementById("projectModal");

function openModal(index) {

    const project = projects[index];

    document.getElementById("modalNumber").textContent = project.number;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalImage").src = project.image;
    document.getElementById("modalDescription").textContent = project.description;
    document.getElementById("modalIntro").textContent = project.intro;
    document.getElementById("modalFeatures").textContent = project.features;

    // 기술 스택 표시
    const techArea = document.getElementById("modalTech");
    techArea.innerHTML = "";

    project.tech.forEach(tech => {
        const tag = document.createElement("span");
        tag.className = "tech-tag";
        tag.textContent = tech;
        techArea.appendChild(tag);
    });

    // 사이트 방문 버튼 표시/숨김
    const modalLink = document.getElementById("modalLink");
    if (project.url) {
        modalLink.href = project.url;
        modalLink.style.display = "inline-block";
    } else {
        modalLink.style.display = "none";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


// 모달 닫기
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}


// X 버튼 클릭
document.getElementById("closeBtn").addEventListener("click", closeModal);


// 모달 바깥 영역 클릭
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


// ESC 키로 닫기
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});