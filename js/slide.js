//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  var swiper = new Swiper(".slide_Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
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
