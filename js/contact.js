
/* =================================
   CONTACT FOOTER
================================= */

// 실제 팀 연락처로 변경해 주세요.
const TEAM_EMAIL = "colorcolor20261124@gmail.com";
const TEAM_INSTAGRAM = "@colorcolor20261124";
const TEAM_GITHUB = "https://github.com/";

// Footer 생성
const footerHTML = `
    <footer class="contact-footer">
        <div class="contact-inner">

            <div class="contact-heading">
                <span class="contact-subtitle">COLOR/span>
                <h2 class="contact-title">CONTACT</h2>
                <p class="contact-description">
                    궁금한 점이 있다면 언제든 문의해 주세요.
                </p>
            </div>

            <div class="contact-links">

                <a class="contact-item" href="mailto:${TEAM_EMAIL}">
                    <span class="contact-label">EMAIL</span>
                    <span>${TEAM_EMAIL}</span>
                </a>

            <div class="contact-item">
                <span class="contact-label">INSTAGRAM</span>
                <span>${TEAM_INSTAGRAM}</span>
            </div>

                <a class="contact-item"
                   href="${TEAM_GITHUB}"
                   target="_blank"
                   rel="noopener noreferrer">
                    <span class="contact-label">GITHUB</span>
                    <span>GitHub 바로가기 </span>
                </a>

                <button type="button"
                        class="contact-item contact-inquiry-button"
                        id="openInquiry">
                    <span class="contact-label">INQUIRY</span>
                    <span>문의하기 </span>
                </button>

            </div>
        </div>

        <div class="contact-bottom">
            <p>© 2026 TEAM PORTFOLIO. All rights reserved.</p>
        </div>
    </footer>
`;

// 문의 모달 생성
const modalHTML = `
    <div class="inquiry-modal" id="inquiryModal">
        <div class="inquiry-box"
             role="dialog"
             aria-modal="true"
             aria-labelledby="inquiryTitle">

            <div class="inquiry-header">
                <h2 id="inquiryTitle">문의하기</h2>
                <button type="button"
                        class="inquiry-close"
                        id="closeInquiry"
                        aria-label="문의 창 닫기">
                    &times;
                </button>
            </div>

            <p class="inquiry-description">
                문의 내용을 작성해 주시면 확인 후 답변드리겠습니다.
            </p>

            <form class="inquiry-form" id="inquiryForm">

                <div class="inquiry-field">
                    <label for="inquiryName">이름</label>
                    <input
                        type="text"
                        id="inquiryName"
                        name="name"
                        placeholder="이름을 입력해 주세요."
                        required>
                </div>

                <div class="inquiry-field">
                    <label for="inquiryEmail">이메일</label>
                    <input
                        type="email"
                        id="inquiryEmail"
                        name="email"
                        placeholder="답변받을 이메일을 입력해 주세요."
                        required>
                </div>

                <div class="inquiry-field">
                    <label for="inquiryMessage">문의 내용</label>
                    <textarea
                        id="inquiryMessage"
                        name="message"
                        placeholder="문의 내용을 입력해 주세요."
                        required></textarea>
                </div>

                <button type="submit" class="inquiry-submit">
                    문의 보내기
                </button>

            </form>
        </div>
    </div>
`;

// Footer와 모달을 페이지에 추가
document.body.insertAdjacentHTML("beforeend", footerHTML);
document.body.insertAdjacentHTML("beforeend", modalHTML);

// 요소 가져오기
const inquiryModal = document.getElementById("inquiryModal");
const openInquiry = document.getElementById("openInquiry");
const closeInquiry = document.getElementById("closeInquiry");
const inquiryForm = document.getElementById("inquiryForm");

// 문의 창 열기
openInquiry.addEventListener("click", () => {
    inquiryModal.classList.add("active");
    document.getElementById("inquiryName").focus();
});

// 문의 창 닫기
function closeInquiryModal() {
    inquiryModal.classList.remove("active");
}

closeInquiry.addEventListener("click", closeInquiryModal);

// 모달 바깥쪽 클릭 시 닫기
inquiryModal.addEventListener("click", (event) => {
    if (event.target === inquiryModal) {
        closeInquiryModal();
    }
});

// ESC 키를 누르면 닫기
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeInquiryModal();
    }
});

// 문의 보내기
inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("inquiryName").value.trim();
    const email = document.getElementById("inquiryEmail").value.trim();
    const message = document.getElementById("inquiryMessage").value.trim();

    if (!name || !email || !message) {
        alert("모든 항목을 입력해 주세요.");
        return;
    }

    const subject = encodeURIComponent(`[팀 포트폴리오 문의] ${name}`);
    const body = encodeURIComponent(
        `이름: ${name}\n이메일: ${email}\n\n문의 내용:\n${message}`
    );

    // 기본 메일 앱을 열어 문의 내용 전달
    window.location.href =
        `mailto:${TEAM_EMAIL}?subject=${subject}&body=${body}`;
});
