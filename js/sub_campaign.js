//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  // 체크박스 요소와 캠페인 아이템 요소를 가져옵니다.
  const checkbox = document.getElementById("chk");
  const campaignItems = document.querySelectorAll(".close");

  // 체크박스의 상태를 저장할 변수를 만듭니다.
  let isChecked = false;

  // 체크박스를 클릭했을 때 실행할 함수를 정의합니다.
  function toggleCampaignItems() {
    // 체크박스의 상태를 반전시킵니다.
    isChecked = !isChecked;

    // 모든 캠페인 아이템을 순회하며 상태에 따라 보이거나 숨깁니다.
    campaignItems.forEach((item) => {
      if (isChecked) {
        // 체크된 상태일 때, 캠페인 아이템에 d-close 클래스가 없으면 보이도록 설정합니다.
        if (!item.classList.contains("d-close")) {
          item.style.display = "block";
        }
      } else {
        // 체크되지 않은 상태일 때, 캠페인 아이템에 d-close 클래스가 없으면 숨깁니다.
        if (!item.classList.contains("d-close")) {
          item.style.display = "none";
        }
      }
    });
  }

  // 체크박스의 상태 변화를 감지하는 이벤트 리스너를 추가합니다.
  checkbox.addEventListener("change", toggleCampaignItems);

  // 초기 상태에서는 체크박스가 체크되어 있지 않으므로 숨겨진 상태로 설정합니다.
  toggleCampaignItems();
});
