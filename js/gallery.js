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
        title: "oo프로젝트",
        subtitle: "프로젝트에 대한 한줄소개",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000",
        description: "~~~~~~~~~~~~~~~~~~~~~~~~ 프로젝트입니다.",
        intro: "~~~~~~~~~~~~~~~~~~~~ 목표로 합니다.",
        features: "• 이미지 데이터 입력\n• 이미지 분석 처리\n• 분석 결과 출력\n• AI 기술 활용",
        tech: ["Python", "AI", "Machine Learning"],
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


// 작품 검색 및 기술 스택 카테고리 필터
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const techFilterBar = document.getElementById("techFilterBar");
const resultCount = document.getElementById("resultCount");
const searchEmpty = document.getElementById("searchEmpty");
const galleryCards = Array.from(galleryGrid.querySelectorAll(".gallery-card"));

if (document.querySelector(".gallery-search") && searchInput && resultCount && searchEmpty) {
    let selectedTech = "전체";
    const techSet = new Set(["전체"]);

    projects.forEach((project) => {
        (project.tech || []).forEach((item) => {
            String(item)
                .split(",")
                .forEach((tech) => {
                    const cleanTech = tech.trim();
                    if (cleanTech) techSet.add(cleanTech);
                });
        });
    });

    if (techFilterBar) {
        techSet.forEach((tech) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "tech-filter-btn" + (tech === "전체" ? " is-active" : "");
            button.textContent = tech;
            button.addEventListener("click", () => {
                selectedTech = tech;
                techFilterBar.querySelectorAll(".tech-filter-btn").forEach((filterButton) => {
                    filterButton.classList.toggle("is-active", filterButton === button);
                });
                filterProjects();
            });
            techFilterBar.appendChild(button);
        });
    }

    function filterProjects() {
        const rawQuery = searchInput.value.trim();
        const query = rawQuery.toLowerCase();
        let visibleCount = 0;

        if (clearBtn) {
            clearBtn.classList.toggle("is-visible", rawQuery.length > 0);
        }

        projects.forEach((project, index) => {
            const card = galleryCards[index];
            const normalizedTechs = (project.tech || []).flatMap((tech) =>
                String(tech)
                    .split(",")
                    .map((item) => item.trim().toLowerCase())
            );
            const matchesTech =
                selectedTech === "전체" ||
                normalizedTechs.includes(selectedTech.toLowerCase());
            const searchableText = [
                project.number,
                project.title,
                project.subtitle,
                project.description,
                project.intro,
                project.features,
                normalizedTechs.join(" ")
            ]
                .join(" ")
                .toLowerCase();
            const isVisible = matchesTech && (!query || searchableText.includes(query));

            card.style.display = isVisible ? "" : "none";
            if (isVisible) visibleCount++;
        });

        resultCount.textContent =
            rawQuery || selectedTech !== "전체"
                ? `검색 결과: ${visibleCount}건`
                : `전체 작품: ${visibleCount}건`;
        searchEmpty.hidden = visibleCount > 0;
    }

    searchInput.addEventListener("input", filterProjects);
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        filterProjects();
    });
    clearBtn?.addEventListener("click", () => {
        searchInput.value = "";
        filterProjects();
        searchInput.focus();
    });

    filterProjects();
}