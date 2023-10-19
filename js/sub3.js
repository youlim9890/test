/*헤더 스크롤 이벤트*/
let header = document.querySelector("header"),
  con3 = document.querySelector(".con3");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 100) {
    header.classList.add("on");
  } else {
    header.classList.remove("on");
  }
  let b = con3.offsetTop;
  //console.log(b);

  if (this.scrollY >= b - 10) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
});

/**비쥬얼 이벤트**/
$(".video_bg")
  .stop()
  .animate({ height: "100%" }, 1000, function () {
    setTimeout(function () {
      $(".video_bg").addClass("on");
    }, 100);
  });

/**컨테이너 1번 스크롤 이벤트**/
let con1 = document.querySelector(".con1"),
  con1Li1 = document.querySelector(".con1_inner li:first-child"),
  con1H2 = document.querySelector(".con1_inner h2"),
  con1P = document.querySelector(".con1_inner p");

window.addEventListener("scroll", function () {
  let a = con1.offsetTop;
  //console.log(a);
  if (this.scrollY >= a - 200) {
    con1Li1.classList.add("on");
    con1H2.classList.add("on");
    this.setTimeout(function () {
      con1P.classList.add("on");
    }, 300);
  }
});

/**컨테이너 2번 스크롤 이벤트***/
let con2 = document.querySelector(".con2"),
  con2Left = document.querySelector(".con2_left"),
  con2Btn = document.querySelectorAll(".con2_btn"),
  con2RightContent = document.querySelectorAll(".con2_right_content");

window.addEventListener("scroll", function () {
  if (this.scrollY >= con2.offsetTop - 200) {
    //컨테이너2 왼쪽
    con2Left.classList.add("on");

    //컨테이너2 왼쪽 티비버튼
    for (let btn = 0; btn <= con2Btn.length - 1; btn++) {
      this.setTimeout(function () {
        con2Btn[btn].classList.add("on");
      }, 400 * btn);
    }

    //컨테이너2 오른쪽 컨텐츠
    setTimeout(function () {
      for (let c = 0; c <= con2RightContent.length - 1; c++) {
        con2RightContent[c].classList.add("on");
      }
    }, 300);
  }
});

/***컨테이너 2번 채널 버튼 클릭시 이벤트***/
$(".con2_btn").click(function () {
  let i = $(this).index(".con2_btn");
  //console.log(i);
  $(".con2_right_content").fadeOut();
  $(".con2_right_content").eq(i).fadeIn();

  $(".con2_right_content")
    .children(".con2_right_content_title")
    .removeClass("on");
  $(".con2_right_content").children(".con2_slide").removeClass("on");

  setTimeout(function () {
    $(".con2_right_content")
      .eq(i)
      .children(".con2_right_content_title")
      .addClass("on");

    $(".con2_right_content").eq(i).children(".con2_slide").addClass("on");
  }, 500);
});

/***컨테이너 2번 (자동)슬라이드****/
let go = setInterval(goToSlide, 5000);
function goToSlide() {
  /* 티비엔 슬라이드 */
  $(".tvn_slide ul")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      $(".tvn_slide ul li").first().appendTo(".tvn_slide ul");
      $(".tvn_slide ul").css({ marginLeft: "0" });
    });

  /*엠넷 슬라이드*/
  $(".mnet_slide ul")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      $(".mnet_slide ul li").first().appendTo(".mnet_slide ul");
      $(".mnet_slide ul").css({ marginLeft: "0" });
    });

  /*오씨엔 슬라이드*/
  $(".ocn_slide ul")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      $(".ocn_slide ul li").first().appendTo(".ocn_slide ul");
      $(".ocn_slide ul").css({ marginLeft: "0" });
    });

  /*투니버스 슬라이드*/
  $(".tooni_slide ul")
    .stop()
    .animate({ marginLeft: "-100%" }, function () {
      $(".tooni_slide ul li").first().appendTo(".tooni_slide ul");
      $(".tooni_slide ul").css({ marginLeft: "0" });
    });
}
$(".slide_next_btn").click(function () {
  clearInterval(go);
  goToSlide();
  go = setInterval(goToSlide, 5000);
});

/*컨테이너 3번 스크롤 이벤트*/

let con3Inner = document.querySelector(".con3_inner"),
  con3TimeLine = document.querySelectorAll(".con3 .timeline");
//console.log(con3TimeLine.length);

window.addEventListener("scroll", function () {
  // let top = con3.offsetTop;
  // let scroll = this.scrollY;
  // console.log(`윈도우 스크롤값 ${scroll}`);
  // console.log(`컨테이너 3번 스크롤값 ${top}`);

  if (this.scrollY >= con3.offsetTop - 100) {
    con3Inner.classList.add("on");
    for (let t = 0; t <= con3TimeLine.length - 1; t++) {
      setTimeout(function () {
        con3TimeLine[t].classList.add("on");
      }, 300 * t);
    }
  }
});

/*컨테이너 3번 버튼 이벤트*/
let current = 0;

// 컨테이너 3번 좌우버튼 이벤트 함수
function goto(idx) {
  $(".time_drag")
    .stop()
    .animate({ marginLeft: `${-40 * idx}%` });
  current = idx;
}
// 컨테이너 3번 다음버튼 이벤트
$(".con3_next_btn").click(function () {
  if (current !== 4) {
    goto(current + 1);
  }
});
// 컨테이너 3번 이전버튼 이벤트
$(".con3_prev_btn").click(function () {
  if (current !== 0) {
    goto(current - 1);
  }
});
