//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  $("#comment-form").submit(function (event) {
    event.preventDefault();

    const commentText = $("#name").val();
    const profilePicUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NLneGh8hSCLKR5H-gHg45QZnXwDL1qGCJA&usqp=CAU"; // 고정된 이미지 URL
    const currentDateTime = new Date().toLocaleString(); // 현재 날짜와 시간을 문자열로 가져옴

    if (commentText) {
      const newComment = $("<li>").addClass("comment");
      const profilePic = $("<img>")
        .addClass("profile-pic")
        .attr("src", profilePicUrl) // 고정된 이미지 URL
        .attr("alt", "프로필 사진");
      const commentContent = $("<div>").text(commentText);
      const dateTime = $("<p>").text(currentDateTime); // 날짜와 시간을 추가

      newComment.append(profilePic, commentContent, dateTime);
      $("#comment-list").append(newComment);

      $("#name").val("");
    }
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {
  const number = 1000000; // 변환할 숫자

  // 숫자를 쉼표로 구분된 문자열로 변환
  const formattedNumber = number.toLocaleString();

  console.log(formattedNumber); // "1,000,000"
  // 모달창 열기
  const openPaymentModalBtn = document.getElementById("openPaymentModalBtn");
  const paymentModal = document.getElementById("paymentModal");
  const closePaymentModalBtn = document.getElementById("closePaymentModalBtn");

  openPaymentModalBtn.addEventListener("click", () => {
    paymentModal.style.display = "block";
  });

  // 모달창 닫기
  closePaymentModalBtn.addEventListener("click", () => {
    paymentModal.style.display = "none";
  });

  // 모달창 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target == paymentModal) {
      paymentModal.style.display = "none";
    }
  });

  // 금액 선택 버튼 클릭 시 처리
  const amountButtons = document.querySelectorAll(".amount-button");
  const customAmountInput = document.getElementById("custom-amount");
  const selectedAmountDisplay = document.getElementById(
    "selected-amount-display"
  );
  const confirmAmountBtn = document.getElementById("confirmAmountBtn");

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.getAttribute("data-amount");
      selectedAmountDisplay.textContent = amount + "원";
      customAmountInput.value = "";
      confirmAmountBtn.style.display = "block";
    });
  });

  let selectedAmount = 0; // 초기 선택 금액은 0원

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = parseInt(button.getAttribute("data-amount")); // 금액을 정수로 변환
      selectedAmount += amount; // 선택한 금액을 누적
      selectedAmountDisplay.textContent = selectedAmount + "원"; // 선택한 금액 표시
      confirmAmountBtn.style.display = "block";
    });
  });

  // 직접 금액 입력 필드 이벤트 처리
  customAmountInput.addEventListener("input", () => {
    selectedAmountDisplay.textContent = customAmountInput.value + "원";
    confirmAmountBtn.style.display = "block";
  });

  // 모달창 외부 클릭 시 닫기
  window.addEventListener("click", (event) => {
    if (event.target == paymentModal) {
      paymentModal.style.display = "none";

      // 모달이 닫힐 때 선택한 금액 초기화
      selectedAmount = 0;
      selectedAmountDisplay.textContent = "0원"; // 초기화된 금액을 화면에 표시
    }
  });

  // ... (이전 코드) ...

  // 확인 버튼 클릭 시 처리
  confirmAmountBtn.addEventListener("click", () => {
    confirmAmountBtn.style.display = "block";

    // 결제 확인 모달을 띄우는 부분 추가
    confirmPaymentModal.style.display = "block";
  });

  // 결제 확인 모달 창 닫기
  closeConfirmPaymentModalBtn.addEventListener("click", () => {
    confirmPaymentModal.style.display = "none";
  });

  // "예" 버튼 클릭 시 처리
  confirmPaymentBtn.addEventListener("click", () => {
    // 여기에서 실제 결제 로직을 추가하세요.

    // 결제 처리가 성공하면 모달을 닫을 수 있습니다.
    confirmPaymentModal.style.display = "none";

    // 결제 완료 메시지를 표시하거나 리다이렉션 등을 수행할 수 있습니다.
  });

  // "아니오" 버튼 클릭 시 처리
  cancelPaymentBtn.addEventListener("click", () => {
    confirmPaymentModal.style.display = "none";
  });

  // "예" 버튼 클릭 시 처리
  confirmPaymentBtn.addEventListener("click", () => {
    // 여기에서 실제 결제 로직을 추가하세요.

    // 결제 처리가 성공하면 결제 완료 모달을 띄우고 모든 모달을 닫습니다.
    confirmPaymentModal.style.display = "none";
    paymentCompleteModal.style.display = "block";

    // 결제 완료 모달이 닫힐 때 선택한 금액 초기화
    selectedAmount = 0;
    selectedAmountDisplay.textContent = "0원"; // 초기화된 금액을 화면에 표시
    // 결제 완료 모달 닫기 버튼 클릭 시 처리
    closePaymentCompleteModalBtn.addEventListener("click", () => {
      paymentCompleteModal.style.display = "none";
      paymentModal.style.display = "none";
    });
  });
  const checkbox = document.getElementById("anonymous-payment");
  const customCheckbox = document.querySelector(".custom-checkbox");

  // span을 클릭할 때도 체크박스를 토글합니다.
  customCheckbox.addEventListener("click", function () {
    checkbox.checked = !checkbox.checked;
    updateCheckboxStyle();
  });

  checkbox.addEventListener("change", function () {
    updateCheckboxStyle();
  });

  function updateCheckboxStyle() {
    if (checkbox.checked) {
      customCheckbox.classList.add("checked");
    } else {
      customCheckbox.classList.remove("checked");
    }
  }

  // 모달 닫기 버튼 클릭 이벤트를 처리합니다.
  paymentCompleteModal.addEventListener("click", () => {
    // 모달 닫힐 때 체크박스를 초기화합니다.
    checkbox.checked = false;

    // 모달을 숨깁니다.
    paymentModal.style.display = "none";
  });
  window.addEventListener("click", (event) => {
    if (event.target == paymentModal) {
      checkbox.checked = false;
    }
  });
  // 첫 번째 버튼을 클릭할 때 실행되는 함수
document.getElementById("openPaymentModalBtn").addEventListener("click", function () {
  openPaymentModal();
});

// 두 번째 버튼을 클릭할 때 실행되는 함수
document.getElementById("openPaymentModalBtn2").addEventListener("click", function () {
  openPaymentModal();
});

// 모달 열기 함수
function openPaymentModal() {
  const paymentModal = document.getElementById("paymentModal");
  paymentModal.style.display = "block";
}

// 모달 닫기 함수
function closePaymentModal() {
  const paymentModal = document.getElementById("paymentModal");
  paymentModal.style.display = "none";
}
});
