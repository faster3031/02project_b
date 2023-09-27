//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
  // 페이지별 데이터와 요소 정보를 배열에 저장
  var pages = [
    {
      counts: [273401, 120, 25],
      elements: [
        $(".memberCountConTxt_1"),
        $(".memberCountConTxt_2"),
        $(".memberCountConTxt_3"),
      ],
    },
    {
      counts: [567401, 432, 45],
      elements: [
        $(".memberCountConTxt_4"),
        $(".memberCountConTxt_5"),
        $(".memberCountConTxt_6"),
      ],
    },
    {
      counts: [101201, 125, 22],
      elements: [
        $(".memberCountConTxt_7"),
        $(".memberCountConTxt_8"),
        $(".memberCountConTxt_9"),
      ],
    },
  ];

  // Animation 함수
  var animationInterval;
  function startAnimations() {
    animationInterval = setInterval(function () {
      animateNextPage();
    }, 1000); // 1초마다 애니메이션 시작 (원하는 시간으로 조절 가능)
  }

  function stopAnimations() {
    clearInterval(animationInterval);
  }

  function animateNextPage() {
    var currentIndex = swiper.realIndex;
    var nextPageIndex = (currentIndex + 1) % pages.length;
    animateMemberCounts(
      pages[nextPageIndex].counts,
      pages[nextPageIndex].elements
    );
  }

  // Animation 함수
  function animateMemberCounts(counts, elements) {
    var animations = [];

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var count = counts[i];

      var animation = animateSingleCount(count, element);
      animations.push(animation);
    }

    $.when.apply($, animations).then(function () {
      // 애니메이션 완료 후 처리할 내용 추가
    });
  }

  // 개별 숫자 애니메이션 함수
  function animateSingleCount(count, element) {
    return $({ val: 0 })
      .animate(
        { val: count },
        {
          duration: 2000,
          step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            element.text(num);
          },
          complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            element.text(num);
          },
        }
      )
      .promise();
  }

  // 3자리마다 , 찍기
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Swiper 슬라이더 초기화
  var swiper = new Swiper("#fandombox", {
    spaceBetween: 30,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        // Swiper 슬라이더 초기화 시 애니메이션 시작
        startAnimations();
        animateMemberCounts(pages[0].counts, pages[0].elements);
      },
      slideChangeTransitionStart: function () {
        // Swiper 슬라이더 전환 시작 시 애니메이션 중지
        stopAnimations();
      },
      slideChangeTransitionEnd: function () {
        // Swiper 슬라이더 전환 완료 시 애니메이션 다시 시작
        startAnimations();
      },
    },
  });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.addEventListener("load", function () {});
