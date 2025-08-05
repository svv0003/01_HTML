$(document).ready(function () {
  // class="container" 요소에 클릭 이벤트 리스너 추가
  $(".container").on("click", function () {
    // 클릭된 컨테이너의 자식 .instruction 요소를 찾아 슬라이드 토글
    $(this).find(".instruction").slideToggle();
  });
});
