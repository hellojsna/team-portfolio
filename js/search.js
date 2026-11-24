(() => {
    function initSearch() {
        if (typeof projects === "undefined" || !Array.isArray(projects)) return;

        const searchForm = document.getElementById("searchForm");
        const searchInput = document.getElementById("searchInput");
        const clearBtn = document.getElementById("clearBtn");
        const techFilterBar = document.getElementById("techFilterBar");
        const resultCount = document.getElementById("resultCount");
        const searchEmpty = document.getElementById("searchEmpty");
        const cards = Array.from(document.querySelectorAll("#galleryGrid .gallery-card"));

        if (!searchInput || !resultCount || !searchEmpty || cards.length === 0) return;

        let selectedTech = "전체";

        // 기술 스택 필터 목록 생성 (쉼표로 묶인 문자열도 개별 태그로 분리)
        const techSet = new Set(["전체"]);
        projects.forEach((project) => {
            (project.tech || []).forEach((item) => {
                String(item)
                    .split(",")
                    .forEach((t) => {
                        const clean = t.trim();
                        if (clean) techSet.add(clean);
                    });
            });
        });

        if (techFilterBar) {
            techFilterBar.innerHTML = "";
            techSet.forEach((tech) => {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "tech-filter-btn" + (tech === "전체" ? " is-active" : "");
                btn.textContent = tech;
                btn.addEventListener("click", () => {
                    selectedTech = tech;
                    techFilterBar.querySelectorAll(".tech-filter-btn").forEach((b) => {
                        b.classList.toggle("is-active", b.textContent === tech);
                    });
                    filterProjects();
                });
                techFilterBar.appendChild(btn);
            });
        }

        function filterProjects() {
            const rawQuery = searchInput.value.trim();
            const query = rawQuery.toLowerCase();

            if (clearBtn) {
                clearBtn.classList.toggle("is-visible", rawQuery.length > 0);
            }

            let visibleCount = 0;

            projects.forEach((project, index) => {
                const card = cards[index];
                if (!card) return;

                const normalizedTechs = (project.tech || []).flatMap((t) =>
                    String(t)
                        .split(",")
                        .map((s) => s.trim().toLowerCase())
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

                const matchesQuery = !query || searchableText.includes(query);
                const isVisible = matchesTech && matchesQuery;

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

        searchForm?.addEventListener("submit", (e) => {
            e.preventDefault();
            filterProjects();
        });

        clearBtn?.addEventListener("click", () => {
            searchInput.value = "";
            filterProjects();
            searchInput.focus();
        });

        filterProjects();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initSearch);
    } else {
        initSearch();
    }
})();