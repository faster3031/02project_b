//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  let mixer = mixitup(".mix-wrapper", {
    // animation 설정
    animation: {
      // duration:애니메이션 지속속도
      duration: 250,
      // nudge:애니메이션 중에도 흔들리는 효과 줄지 여부
      nudge: true,
      // reverseOut:애니메이션 역방향으로 실행할지 여부
      reverseOut: false,
      // effects:애니메이션 적용될 효과들
      effects: "fade",
    },
  });
  $("#filter-select").change(function () {
    let value = $(this).val();
    mixer.filter(value);
  });
  $("#sort-select").change(function () {
    let value = $(this).val();
    mixer.sort(value);
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {});
