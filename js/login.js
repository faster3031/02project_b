// HTML 문서가 완전히 로드될 때까지 기다립니다.
$(document).ready(function () {
  // 필요한 경우 여기에 코드를 추가합니다.
});

// 멀티미디어 리소스가 완전히 로드될 때까지 기다립니다.
window.addEventListener("load", function () {
  // 로그인 양식에 대한 참조를 가져옵니다.
  const loginForm = document.getElementById("login-form");

  // 로그인 양식에 클릭 이벤트 리스너를 추가합니다.
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 폼 제출을 방지합니다.

    // 사용자 이름과 비밀번호 필드의 값을 가져옵니다.
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 로컬 스토리지에서 사용자 데이터를 검색합니다 (JSON으로 저장된 것으로 가정).
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 사용자 이름과 비밀번호가 일치하는 사용자를 찾습니다.
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    // 인증이 성공했는지 확인합니다.
    if (authenticatedUser) {
      alert("로그인이 성공하였습니다.");

      // 다른 페이지 (예: "index.html")로 리디렉션하며 사용자 이름을 쿼리 매개변수로 전달합니다.
      window.location.href =
        "index.html?username=" + encodeURIComponent(username);
    } else {
      // 인증에 실패하면 오류 메시지를 표시하고 양식을 재설정합니다.
      alert("로그인 정보가 올바르지 않습니다. 다시 시도해주세요.");
      loginForm.reset();
    }
  });
  // 버튼 클릭 이벤트 핸들러를 추가합니다.
  termsButton.addEventListener("click", function (e) {
    e.preventDefault();
    // 클릭 시 checkbox 요소의 required 속성을 제거합니다.
    checkbox.removeAttribute("required");
  });

});
