$(function(){
  /*메뉴바*/
  $(".menu_bar").click(function () {
    $(this).children(".bar1, .bar2, .bar3").toggleClass("on");
    $(".menu_parent").toggleClass("on");
  });

  /*메뉴 hover시 글자색*/
  $(".menu_wrap a").mouseenter(function () {
    $(".menu_wrap a").css({ color: "rgb(104, 104, 104)" });
    $(this).css({ color: "#fff" });
  });
  $(".menu_wrap a").mouseleave(function () {
    $(".menu_wrap a").css({ color: "#fff" });
  });
})

