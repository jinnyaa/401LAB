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
