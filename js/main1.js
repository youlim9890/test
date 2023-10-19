$(document).ready(function () {
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

  setInterval(function () {
    $(".logo_move").addClass("on");
    setTimeout(function () {
      $(".logo_move").css({ opacity: "0" });
    }, 1500);
    setTimeout(function () {
      $(".logo").stop().animate({ opacity: "1" });
    }, 13000);
  });

  /*비주얼 타이핑, 커서 깜빡임*/

  setTimeout(function () {
    const content = "The Power of";
    const text = document.querySelector(".visual_text");
    const blink = document.querySelector(".blink");
    let i = 0;

    function typing() {
      let txt = content[i++];
      text.innerHTML += txt;
      if (i > content.length) {
        text.textContent = "";

        clearInterval(typingInterval); //타이핑멈춤
        text.innerHTML = "The Power of";
        clearInterval(cursorInterval);
        blink.classList.remove("on");
      }
    }
    function cursor() {
      blink.classList.add("on");
    }

    const typingInterval = setInterval(typing, 300);
    const cursorInterval = setInterval(cursor, 300);
  }, 13000);

  setTimeout(function () {
    setInterval(function () {
      $(".visual_typo_wrap").stop().animate({ opacity: "1" });
    }, 300);
  }, 11000);

  /*키워드 넘어가기*/
  let total = $(".keyword_slide h2").length;
  let i = 0;
  let hei = 100;
  let move;

  setTimeout(function () {
    $(".keyword_slide").stop().animate({ opacity: "1" });
    $(".bounce1").stop().animate({ opacity: "1" });
    $(".bounce2").stop().animate({ opacity: "1" });
    key = setInterval(function () {
      i++;
      if (i == total - 1) {
        $(".keyword_slide")
          .stop()
          .animate({ top: "-300%" }, function () {
            $(".keyword_slide").css({ top: 0 });
          });
        i = 0;
      } else {
        $(".keyword_slide")
          .stop()
          .animate({ top: -i * hei + "%" });
      }
    }, 3000);
  }, 18000);

  /*con1 자동 slide*/
  let j = 0;
  let con1Total = $(".con1_text").length;
  let fade;
  $(".con1_text").eq(0).addClass("on");
  $(".con1_icon img").eq(0).addClass("on");
  start();
  function start() {
    fade = setInterval(function () {
      if (j == con1Total - 1) {
        j = 0;
      } else {
        j++;
      }
      $(".con1_img img").css({ display: "none" });
      $(".con1_img img").eq(j).css({ display: "block" });
      $(".con1_text").removeClass("on");
      $(".con1_text").eq(j).addClass("on");
      $(".con1_icon img").removeClass("on");
      $(".con1_icon img").eq(j).addClass("on");
    }, 4000);
  }

  $(".next").click(function () {
    clearInterval(fade);

    if (j == con1Total - 1) {
      j = 0;
    } else {
      j++;
    }
    $(".con1_img img").css({ display: "none" });
    $(".con1_img img").eq(j).css({ display: "block" });
    $(".con1_text").removeClass("on");
    $(".con1_text").eq(j).addClass("on");
    $(".con1_icon img").removeClass("on");
    $(".con1_icon img").eq(j).addClass("on");

    start();
  });

  $(".prev").click(function () {
    clearInterval(fade);

    if (j == 0) {
      j = 2;
    } else {
      j--;
    }
    $(".con1_img img").css({ display: "none" });
    $(".con1_img img").eq(j).css({ display: "block" });
    $(".con1_text").removeClass("on");
    $(".con1_text").eq(j).addClass("on");
    $(".con1_icon img").removeClass("on");
    $(".con1_icon img").eq(j).addClass("on");

    start();
  });

  /*con2 자동 슬라이드*/
  let a = 0;
  let con2Total = $(".con2_wrap>video").length;
  let enter;

  $(".con2_wrap>video").eq(0).css({ display: "block" });
  $(".enter_wrap").eq(0).addClass("on");
  start2();
  function start2() {
    enter = setInterval(function () {
      if (a == con2Total - 1) {
        a = 0;
      } else {
        a++;
      }

      $(".con2_wrap>video").css({ display: "none" });
      $(".con2_wrap>video").eq(a).css({ display: "block" });
      $(".enter_wrap").removeClass("on");
      $(".enter_wrap").eq(a).addClass("on");
      $(".enter_wrap img").removeClass("on");
      $(".enter_wrap img").eq(a).addClass("on");
    }, 6000);
  }

  $(".enter_wrap a").click(function () {
    clearInterval(enter);

    a = $(this).parent().index();
    $(".enter_wrap").removeClass("on");
    $(this).parents(".enter_wrap").addClass("on");

    $(".con2_wrap>video").css({ display: "none" });
    $(".con2_wrap>video").eq(a).css({ display: "block" });

    start2();
  });

  /*con3 타이포 효과*/
  setInterval(function () {
    $(".h2_1, .h2_2, .h2_3").addClass("on");
  }, 2000);

  setTimeout(function () {
    setInterval(function () {
      $(".red, .orange, .blue").addClass("on");
    }, 1000);
  }, 2000);

  /*con4 mouseenter할때 변화*/
  $(".con4_partner").mouseenter(function () {
    a = $(this).index();
    $(this).stop().animate({ width: "800px" }, 500);
  });
  $(".con4_partner").mouseleave(function () {
    a = $(this).index();
    $(this).stop().animate({ width: "300px" }, 500);
  });

  /*스크롤제어*/
  let con1 = $(".con1").offset().top;
  let con2 = $(".con2").offset().top;
  let con3 = $(".con3").offset().top;
  let con4 = $(".con4").offset().top;
  console.log(con1);
  $(".scroll_section_wrap").scroll(function () {
    if (scroll > con1 && scroll < con2) {
    }
  });
});
