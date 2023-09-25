//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {

});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
    var divs = document.querySelectorAll(".card-list div");
divs.forEach(function (elm) {
  elm.addEventListener("mouseenter", function () {
    var panel = document.querySelector(".highlight");
    panel.classList.toggle("highlight");
    elm.classList.toggle("highlight");
  });
});
window.focus();
});
