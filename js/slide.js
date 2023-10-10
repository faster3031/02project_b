//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  var swiper = new Swiper(".slide_Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000, // 각 슬라이드 간의 재생 지연 시간 (밀리초 단위)
      disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생을 멈추지 않음
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
