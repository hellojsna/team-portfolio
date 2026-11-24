// 작품 데이터 6개
const projects = [

    {
        number: "team project",
        title: "COLOR",
        subtitle: "각 페이지의 고유한 색상으로 완성하는 <P> 팀 포트폴리오",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000",
        description: "COLOR는 페이지마다 서로 다른 테마 색상을 적용하여 팀원들의 개성과 활동을 직관적으로 보여주는 포트폴리오 웹사이트입니다. 심플한 디자인과 통일감 있는 화면 구성을 바탕으로 다양한 콘텐츠를 소개합니다.",
        intro: "각 페이지의 테마 색상을 중심으로 디자인하여 시각적인 통일감과 페이지별 개성을 함께 담았습니다. 복잡한 요소를 최소화하고 깔끔한 화면 구성을 통해 콘텐츠에 집중할 수 있도록 구성했습니다.",
        features: "• 메인 페이지\n• 프로필\n• 팀원 소개\n• 갤러리\n• 활동 페이지",
        tech: ["HTML", "CSS", "JavaScript"],
        url: ""
    },

    {
        number: "20263547 이규원 PROJECT",
        title: "포커스 투두",
        subtitle: "할 일을 고르고 포모도로 타이머로 한 판씩 끝내는 집중 관리 프로그램",
        image: "images/20263547.png",
        description: "할 일을 선택하고 포모도로 타이머로 한 판씩 끝내며 집중 횟수를 기록할 수 있도록 만든 집중 관리 웹 프로젝트입니다.",
        intro: "할 일 목록과 25분 집중, 5분 휴식 타이머를 한 화면에 합친 웹 서비스입니다. 집중할 작업을 지정하면 타이머가 끝날 때마다 그 작업에 집중 횟수가 쌓이도록 기획했습니다.",
        features: "• 할 일 추가·완료·삭제 및 상태별 필터(전체/진행중/완료)\n• 포모도로 타이머(집중 25분·짧은 휴식 5분·긴 휴식 15분) 및 종료 알림음\n• 작업별·오늘 집중 횟수 자동 기록 및 브라우저 저장(localStorage)\n• 라이트·다크 모드 자동 대응 및 모바일 반응형 지원",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://tubular-sfogliatella-a7c8d8.netlify.app/"
    },

    {
        number: "20263548 이은서 PROJECT",
        title: "행복 도서관 웹 사이트",
        subtitle: "도서 검색과 신간·인기 도서 정보를 제공하는<br>도서관 웹 서비스",
        image: "images/20263548.png",
        description: "원하는 도서를 빠르게 검색하고 신간 및 인기 도서 정보를 한눈에 확인할 수 있도록 만든 도서관 웹 프로젝트입니다.",
        intro: "사용자가 도서명·저자·출판사로 자료를 검색하고, 이달의 신간 도서와 국내·해외 도서 순위를 편리하게 탐색할 수 있도록 구성한 웹 서비스입니다.",
        features: "• 도서명·저자·출판사 기반 자료 검색\n• 이달의 신간 및 추천 도서 소개\n• 국내·해외 도서 인기 순위(1~5위) 제공\n• 다크모드 전환 및 로그인·회원가입 기능",
        tech: ["HTML", "CSS", "JavaScript"],
        url: "https://dldmstj206-ai.github.io/book/book.html"
    },

    {
        number: "20263550 이준모 PROJECT",
        title: "MOOD",
        subtitle: "기분과 취향에 따라 나에게 어울리는 음악을 추천하는 음악 큐레이션 웹사이트",
        image: "images/20263550.png",
        description: "사용자의 현재 기분과 음악 취향을 바탕으로 어울리는 음악을 추천하고 다양한 장르의 음악을 탐색할 수 있도록 제작한 음악 추천 웹사이트입니다.",
        intro: "사용자가 원하는 분위기와 장르를 선택하면 그에 어울리는 음악을 확인할 수 있도록 구성했습니다. 개인의 취향에 맞는 음악을 쉽게 발견하고 새로운 음악을 탐색하는 것을 목표로 합니다.",
        features: "• 기분별 음악 추천\n• 장르별 음악 탐색\n• 인기 및 최신 음악 소개\n• 나만의 플레이리스트 생성\n• 좋아하는 음악 즐겨찾기",
        tech: ["HTML", "CSS", "JavaScript"],
        url: ""
    },

    {
        number: "20263551 나지성 PROJECT",
        title: "TodayLunch",
        subtitle: "손목에서 보는 오늘 급식 메뉴",
        image: "images/20263552.png",
        description: "Apple Watch 지원 급식 식단 정보 앱",
        intro: "사용자가 앱을 직접 열지 않고도 Apple Watch나 홈 화면 위젯에서 오늘의 급식 메뉴를 빠르게 조회하고, 이미지·링크로 손쉽게 공유할 수 있도록 구성한 식단 정보 앱 서비스입니다.",
        features: "•  전국 초등학교, 중학교, 고등학교 및 일본 일부 지역 학교의 급식 메뉴 확인\n•  Apple Watch에서 급식 메뉴 확인\n• 이미지 및 링크로 간편하게 공유\n• 위젯을 통해 앱 실행 없이 간편 조회",
        tech: ["Swift, PHP, HTML, CSS, JavaScript"],
        url: "https://apps.apple.com/kr/app/todaylunch/id6443977069"
    },

    {
        number: "20263553 양한세 PROJECT",
        title: "토스트 메이커",
        subtitle: "핸드폰으로 즐길수있는 간단한 게임",
        image: "images/20263553.jpg",
        description: "들어오는 주문에 맞춰 재료를 굽고 조합해 토스트를 만들어 수익을 얻는 모바일 게임입니다.",
        intro: "유니티를 사용하여 개발한 게임입니다. 들어오는 주문 내용에 맞게 재료를 굽고 조합하여 돈을 버는 것이 목표입니다.",
        features: "• JSON을 활용한 게임 진행 상황 저장 및 이어하기\n• 클릭 앤 드래그(Click & Drag) 방식의 단순하고 직관적인 조작",
        tech: ["Unity", "C#"],
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