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

  $(".tb3").click(function () {
    let j = $(this).index(".tb3");
    // console.log(j);
    let k = $(this).hasClass("on");

    if (k == true) {
      $(".tb3").removeClass("on");
      $(".slide").slideUp();
    } else {
      $(".tb3").removeClass("on");
      $(this).addClass("on");
      $(".slide").slideUp();
      $(".slide").eq(j).slideDown();
    }
  });
});
