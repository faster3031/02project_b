//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {});

// 멀티미디어 리소스 로딩 완료 후 실행
// window.addEventListener("load", function () {
//   var personnel_CountCon = 1212121212;
//   var personnel2_CountCon = 4545454  ;

//   $({ val: 0 }).animate(
//     { val: personnel_CountCon },
//     {
//       duration: 2000,
//       step: function () {
//         var num = numberWithCommas(Math.floor(this.val));
//         $(".personnel_CountCon").text(num);
//       },
//       complete: function () {
//         var num = numberWithCommas(Math.floor(this.val));
//         $(".personnel_CountCon").text(num);
//       },
//     }
//   );
//   $({ val: 0 }).animate(
//     { val: personnel2_CountCon },
//     {
//       duration: 2000,
//       step: function () {
//         var num = numberWithCommas(Math.floor(this.val));
//         $(".personnel2_CountCon").text(num);
//       },
//       complete: function () {
//         var num = numberWithCommas(Math.floor(this.val));
//         $(".personnel2_CountCon").text(num);
//       },
//     }
//   );

//   //3자리마다 , 찍기
//   function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   }
// });
