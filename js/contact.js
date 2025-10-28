  // 폼 제출 시 메일 앱 열기 (백엔드 없는 경우용)
//   document.getElementById('contactForm')?.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const name = encodeURIComponent(document.getElementById('name').value.trim());
//     const email = encodeURIComponent(document.getElementById('email').value.trim());
//     const company = encodeURIComponent(document.getElementById('company').value.trim());
//     const project = encodeURIComponent(document.getElementById('projectType').value.trim());
//     const message = encodeURIComponent(document.getElementById('message').value.trim());

//     const subject = `[Contact] ${decodeURIComponent(name) || 'No name'} / ${decodeURIComponent(company) || 'No company'}`;
//     const body =
// `Name: ${decodeURIComponent(name)}
// Email: ${decodeURIComponent(email)}
// Company/Brand: ${decodeURIComponent(company)}
// Project Type: ${decodeURIComponent(project)}

// Message:
// ${decodeURIComponent(message)}`;

//     const mailto = `mailto:401lab.ai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     window.location.href = mailto;

//     const hint = document.getElementById('formHint');
//     if (hint) hint.textContent = '메일 앱이 열리지 않는다면 위 주소로 직접 메일을 보내주세요: 401lab.ai@gmail.com';
//   });


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
