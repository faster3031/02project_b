//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  $("#qna-btn").click(function () {
    $(".qna").show();
  });
  $("#qnaClose").click(function () {
    $(".qna").hide();
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  //헤더 스크롤 기능
  //스크롤바의 상단위치
  let scy = 0;
  let scActive = 50;
  scy = window.document.documentElement.scrollTop;
  let header = document.querySelector(".header");
  header.addEventListener("mouseenter", function () {
    header.classList.add("header-active");
  });
  header.addEventListener("mouseleave", function () {
    if (scy < scActive) {
      header.classList.remove("header-active");
    }
  });
  //새로고침 시 적용
  if (scy > scActive) {
    header.classList.add("header-active");
  }
  window.addEventListener("scroll", function () {
    scy = window.document.documentElement.scrollTop;
    // console.log(scy);
    if (scy > scActive) {
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });

  // 각 섹션의 위치값(세로스크롤 위치)
  const sectionYpos = [0, 2700, 3500, 0];
  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const navLis = $(".nav ul li");
  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const navLisA = $(".nav ul li a");
  // 클릭 기능 구현
  $.each(navLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // li 의 모든 클래스 제거
      navLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      navLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate({ scrollTop: sectionYpos[index] }, "slow");
    });
  });

  //  반응형
  // 각 섹션의 위치값(세로스크롤 위치)
  const mbsectionYpos = [0, 2700, 3500, 0];
  // 클래스 nav 의 li 를 찾아라
  // 저장한다. 재활용하기 위해서
  const mbnavLis = $(".nav-mb ul li");
  // li 에 a 태그를 클릭을 해서 스크롤을 이동
  const mbnavLisA = $(".nav-mb ul li a");
  // 클릭 기능 구현
  $.each(mbnavLisA, function (index, item) {
    // item 은 a 태그를 말합니다.
    // item 을 클릭을 할 겁니다.
    // item 은 html 태그 (jQuery 용도)
    $(this).click(function (event) {
      // li 의 모든 클래스 제거
      mbnavLis.removeClass("focus-active");
      // 클릭된 li 에 focus-active 추가하기
      mbnavLis.eq(index).addClass("focus-active");
      // 2. 클릭하면 스크롤바가 움직인다.
      $("html, body").animate({ scrollTop: mbsectionYpos[index] }, "slow");
    });
  });
  // -------------------------------------------------------로그인
  // 페이지가 로드될 때 초기 대시보드 화면을 표시

  // 로그인 버튼 클릭시 호출되는 함수
  document
    .getElementById("login-button")
    .addEventListener("click", function () {
      // 로그인 페이지로 이동
      window.location.href = "login.html";
    });
  // document
  //   .getElementById("singup-botton")
  //   .addEventListener("click", function () {
  //     // 회원가입 페이지로 이동
  //     window.location.href = "signup.html";
  //   });
  document
    .getElementById("logout-button")
    .addEventListener("click", function () {
      // 로그아웃 로직을 처리하고 다시 초기 화면을 표시합니다
      document.getElementById("login-section").style.display = "flex";
      document.getElementById("dashboard-section").style.display = "none";
      document.getElementById("login_li").style.display = "none";
      document.getElementById("my_li").style.display = "none";
      document.getElementById("icon_my").style.display = "none";
    });
  showInitialDashboard();
  // 대시보드 화면 표시 함수
  function showInitialDashboard() {
    //현재페이지의 URL에서 쿼리 문자열을 가져와 URLSearchParams()객체를 생성합니다.
    var params = new URLSearchParams(window.location.search);
    var username = params.get("username");
    if (username) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("login_li").style.display = "none";
      document.getElementById("dashboard-section").style.display = "flex";
      document.getElementById("icon_my").style.display = "flex";

      if (window.innerWidth <= 760) {
        document.getElementById("my_li").style.display = "flex";
        document.getElementById("logout_li").style.display = "flex";
      } else {
        document.getElementById("my_li").style.display = "none";
        document.getElementById("logout_li").style.display = "none";
      }
      document.getElementById("username-display").textContent = `${username}님`;
      // 로그아웃 버튼
      document.getElementById("logout-button").style.display = "flex";
    } else {
      document.getElementById("logout_li").style.display = "none";
      document.getElementById("my_li").style.display = "none";
      document.getElementById("login-section").style.display = "flex";
      document.getElementById("dashboard-section").style.display = "none";
      document.getElementById("icon_my").style.display = "none";
      document.getElementById("logout-button").style.display = "none";
    }
  }
  window.addEventListener("resize", showInitialDashboard);
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = this.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
  // 로그인 함수 테스트
  // Q&A
  //TODO
  // allow to send messages to que
  // interactive AI chat to respond
  $chat_log = {
    user: [],
    ai: [],
  };

  $chat_opt = {
    inputSelector: ".qnainput input[type=text]",
  };

  $chat = {
    msgcnt: 0, // 초기화된 msgcnt 변수 추가
    AddMessage: function (message, who) {
      if (message != "") {
        var $msg = '<div class="message ' + who + '">' + message + "</div>";
        $(".messages").append($msg);
        if (who.indexOf("ai") > -1) {
          $chat_log.ai.push($msg);
        } else {
          $chat_log.user.push($msg);
        }
      }
    },
    input: function () {
      if (!$(".idle").length && $($chat_opt.inputSelector).val() != "") {
        var userInput = $($chat_opt.inputSelector).val().trim();
        var response = "";
        $chat.AddMessage($($chat_opt.inputSelector).val(), "me");
        setTimeout(function () {
          $chat.Respond();
        });
        $($chat_opt.inputSelector).val("");
        switch (userInput) {
          case "1":
            response =
              "- 로그인/회원가입시 커뮤니티 글 작성, 후원굿즈 구매 등 다양한 혜택이 있습니다. <br><br> - 로그인/회원가입이 안되시는 경우, 별의온도 고객만족실 1234-4321으로 전화주시길 부탁드립니다.";
            break;
          case "2":
            response =
              "- 결제/후원 하는 방법은 카드/무통장입금이 있습니다.<br><br>- 후원금은 `기부금 공제` 대상으로 현금영수증과 중복 공제되지 않습니다.<br><br>- 자세한 사항은 고객만족실 1234-4321으로 전화주시길 부탁드립니다.";
            break;
          case "3":
            response =
              "후원 굿즈는 별의온도를 통해 기부해주시는 분들을 위한, 오직 별의온도에서만 볼 수 있는 특별한 굿즈 입니다. <br><br> 별의온도에서 후원하고 아티스트들의 후원 굿즈를 만나보세요. ";
            break;
          case "4":
            response =
              '별의온도에 대한 관심과 애용에 진심으로 감사의 말씀을 드립니다.<br><br>귀한 시간을 할애해 주신 점 감사드리며, 칭찬 내용을 별의온도 홈페이지 "고객지원-고객문의-칭찬상담"으로 접수해 주시면 칭찬 내용을 바탕으로 더 좋은 상품, 서비스를 제공하도록 하겠습니다. 감사합니다.';
            break;
          case "5":
            response =
              "불편을 드려 죄송합니다.<br><br>별의온도 이메일 starsondo@stars.com 혹은 별의온도 고객만족실 1234-4321으로 접수 부탁드립니다.";
            break;
          case "6":
            response =
              "그 외 기타사항은 별의온도 이메일 starsondo@stars.com 혹은 별의온도 고객만족실 1234-4321으로 접수 부탁드립니다.<br>감사합니다. ";
            break;
          default:
            response = "죄송합니다. 문의사항에 해당되는 번호를 입력해주세요.";
            break;
        }

        // 'userinput'에 입력한 내용을 'qnainput'에 추가
        var $qnainput = $(".qnainput input[type=text]");
        $qnainput.val(userInput);

        $chat.AddMessage(response, "ai");
        setTimeout(function () {
          $chat.Respond();
        }, 1000);

        // 'userinput' 초기화
        $qnainput.val("");
      }
    },
    Respond: function () {
      $(".idle").remove();
      $chat.AddMessage("<div></div><div></div><div></div>", "ai idle");
      setTimeout(function () {
        $(".idle").remove();
        var $msgcnt = $(".ai").length;
        // $chat.AddMessage($chat_opt.QAs["q" + ($msgcnt++)].q, "ai");
      }, 3000);
    },
  };

  $(document).ready(function () {
    setTimeout(function () {
      $chat.input();
    }, 1000);
  });
  // 모달창

  const modal = document.getElementById("my_modal");
  const iconmy = document.getElementById("icon_modal");
  const modal_wrap = document.querySelector(".modal_wrap");
  const openModalBtn = document.getElementById("my_li");
  const closeModalBtn = document.getElementById("close-my_modal");
  const closeModalBtn2 = document.getElementById("close-my");

  // 모달창 열기
  openModalBtn.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal_wrap.style.right = "0";
    modal.style.visibility = "visible";
    document.body.style.overflow = "hidden"; // 스크롤바 제거
  });
  // 모달창 닫기
  closeModalBtn.addEventListener("click", () => {
    // modal.style.display = "none";
    modal.style.opacity = "0";
    modal_wrap.style.right = "-100%";
    modal.style.visibility = "hidden";
    document.body.style.overflow = "auto"; // 스크롤바 보이기
  });
  closeModalBtn2.addEventListener("click", () => {
    // modal.style.display = "none";
    iconmy.style.display = "none";
  });
  const toggleButton = document.getElementById("toggleButton");
  const navMb = document.querySelector(".nav-mb");
  const icon = document.querySelector("#toggleButton");

  toggleButton.addEventListener("click", () => {
    if (navMb.style.opacity === "1") {
      navMb.style.opacity = "0";
      NavMb.style.display = "block";
      icon.className = "fa-solid fa-bars"; // 클래스 이름을 'fa-bars'로 설정
    } else {
      navMb.style.opacity = "1";
      icon.className = "fa-solid fa-times"; // 클래스 이름을 'fa-times'로 설정
    }
  });

  // ---------------------------------------------

  const iconModal = document.getElementById("icon_modal");
  // 모달창 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    const iconModal = document.getElementById("icon_modal");
    if (event.target == iconModal) {
      iconModal.style.display = "none";
    }
  });


  const NavMb = document.getElementById("navMb");
  let isNavVisible = false; // 네비게이션 가시성 상태

  toggleButton.addEventListener("click", () => {
    if (!isNavVisible) {
      // 네비게이션을 오른쪽에서 나타나게 함
      NavMb.style.display = "block";
      isNavVisible = true;
      NavMb.style.display = "block"; // 메뉴를 나타나게 함
    } else {
      // 네비게이션을 오른쪽으로 숨김
      NavMb.style.display = "none"; // 메뉴의 너비만큼 숨기도록 설정
      isNavVisible = false;
      NavMb.style.display = "none"; // 메뉴를 숨김
    }
  });

  // 마이페이지
  // $("#icon_my").click(function () {
  //   $(".icon_box").show();
  // })

  const IconBox = document.querySelector(".icon_box");
  const myToggleButton = document.getElementById("icon_my");

  myToggleButton.addEventListener("click", () => {
    if (IconBox.style.display === "block") {
      IconBox.style.display = "none";
    } else {
      IconBox.style.display = "block";
      IconBox.style.visibility = "visible";
    }
  });

  // icon.className = 'fa-solid fa-bars'; // 클래스 이름을 'fa-bars'로 설정
  // icon.className = 'fa-solid fa-times'; // 클래스 이름을 'fa-times'로 설정
});
