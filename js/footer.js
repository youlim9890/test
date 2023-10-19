$(function () {
  let i = 0;
  $(".family_site>p").click(function (event) {
    if (i == 0) {
      $(".family_site span").stop().animate({ rotate: "45deg" }, 500);
      i = 1;
    } else {
      $(".family_site span").stop().animate({ rotate: "0deg" }, 500);
      i = 0;
    }

    $(".box_w").stop().slideToggle();
    event.preventDefault();
  });
});
