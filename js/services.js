// 모바일 메뉴 토글
const menuBtn = document.getElementById("menu-btn");
const drawer  = document.getElementById("mobile-drawer");

// 안전 가드
if (menuBtn && drawer) {
  // 버튼 클릭 → 열기/닫기
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    const willOpen = !drawer.classList.contains("active");
    drawer.classList.toggle("active", willOpen);
    menuBtn.classList.toggle("active", willOpen);
    menuBtn.setAttribute("aria-expanded", String(willOpen));
  });

  // 메뉴 내부 클릭 시 버블링 방지 (밖으로 안 나가게)
  drawer.addEventListener("click", (e) => e.stopPropagation());

  // 문서 아무 곳 클릭 → 닫기
  document.addEventListener("click", () => {
    if (drawer.classList.contains("active")) {
      drawer.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // ESC로 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("active")) {
      drawer.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // 화면 크기 커지면(데스크톱 전환) 자동 닫기
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && drawer.classList.contains("active")) {
      drawer.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // 메뉴 항목 클릭 시 자동 닫기
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      drawer.classList.remove("active");
      menuBtn.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}
