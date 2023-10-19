$(function () {
  let baseline = -500;
  let img = $("#visual .wrap").length;
  let i = 0;
  let total = $(".con2_txt").length - 1;
  let line = 160;
  let header = 80;
  const width_size = window.outerWidth;
  /**********resize**************/
  $(window).on("resize", function () {
    if (width_size <= 1220) {
      /*content height*/
      const parentElement = document.querySelector("#visual");
      const childElement = document.querySelector(".img_wrap");
      const con1 = document.querySelector(".con1");
      const con2 = document.querySelector(".con2");
      const con3 = document.querySelector(".con3");
      const inner = document.querySelector(".inner");
      const ticket = document.querySelector(".ticket_wrap");

      const childHeight = childElement.offsetHeight;
      parentElement.style.height = `${childHeight + header}px`;
      const innerHeight = inner.offsetHeight;
      const ticketHeight = ticket.offsetHeight;
      con1.style.height = `${innerHeight + header}px`;
      con2.style.height = `${ticketHeight + header}px`;
      con3.style.height = `${innerHeight + header}px`;
      $(window).on("load", function () {
        let img = $("#visual .wrap").length;
        $("#visual .img_3rd .wrap:nth-of-type(5)").draggable({
          containment: "#visual",
          behavier: "smooth",
        });
        if ($(window).scrollTop() == 0) {
          $("#visual .img_wrap").addClass("on");
          $("#visual").addClass("up");
          setInterval(function () {
            let randomNumber = Math.floor(Math.random() * img);
            $("#visual .wrap").eq(randomNumber).addClass("on");
          }, 60);
        }
        if ($(window).scrollTop() > $(".con1").offset().top) {
          /*티켓 등장효과*/
          $(".con1 .ticket_wrap")
            .stop()
            .animate({ top: "40%", opacity: "1" }, 2000);

          setTimeout(function () {
            $(".con1").addClass("on");
          }, 2000);
          let j = 0;

          $(".ticket_wrap").on("click", function () {
            if (j == 0) {
              // 처음 클릭 시
              $(this).addClass("active");
              $(this).css({ opacity: "1" });
              $(".ticket_wrap").css({ opacity: " 0" });
              $("#close").stop().animate({ opacity: 1 }, 100);
              j = 1; // 상태를 flipped로 변경
            } else if (j == 1) {
              // 두 번째 클릭부터
              $(this).addClass("flip");
              j = 2;
            } else {
              $(this).removeClass("flip");
              j = 0;
            }
          });

          $("#close").on("click", function () {
            $(this).css({ opacity: "0" });
            $(".ticket_wrap").css({ opacity: "0" });
            $(".ticket_wrap").removeClass("on");
            setTimeout(function () {
              $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
              $(".ticket_wrap").removeClass("flip active");
              isFlipped = false; // 상태를 다시 초기화
            });
          });
        }
        if ($(window).scrollTop() > $(".con2").offset().top) {
          /*con2 화살표 효과*/
          $(".next").on("click", function () {
            if (i > total) {
              i = 0;
            } else {
              i++;
            }
            $(".inner_p").text(`0${i + 1}`);
            $(".con2_txt").removeClass("active");
            setTimeout(function () {
              $(".con2_txt").eq(i).addClass("active");
            });
            $(".con2 .flim").removeClass("active");
            $(".con2 .flim").eq(i).addClass("active");
          });

          $(".prev").on("click", function () {
            if (i < 0) {
              i = total;
              console.log(i);
            } else {
              i--;
            }
            $(".inner_p").text(`0${i + 1}`);
            $(".con2_txt").removeClass("active");
            setTimeout(function () {
              $(".con2_txt").eq(i).addClass("active");
              $(".con2 .flim").removeClass("active");
              $(".con2 .flim").eq(i).addClass("active");
            });
          });
          /*이미지 흐르는 효과*/
          function flowImages() {
            // $(".flim>img:first-child").appendTo(".flim");
            $(".flim").css({ left: "0%" });
          }
          setInterval(flowImages, 10000);
          $(".con2").addClass("on");
        }
        if ($(".scroll_section_wrap").scrollTop() > $(".con3").offset().top) {
          $(".con3").addClass("on");
        }
      });

      /*스크롤 효과*/
      $(window).on("scroll", function () {
        let img = $("#visual .wrap").length;
        let scrollTop = $(".scroll_section_wrap").scrollTop();
        console.log(scrollTop);
        if ($(".scroll_section_wrap").scrollTop() == 0) {
          $("#visual .img_wrap").addClass("on");
          $("#visual").addClass("up");
          setInterval(function () {
            let randomNumber = Math.floor(Math.random() * img);

            $("#visual .wrap").eq(randomNumber).addClass("on");
          }, 60);
        }
        if ($(window).scrollTop() > $(".con1").offset().top) {
          /*티켓 등장효과*/
          $(".con1 .ticket_wrap")
            .stop()
            .animate({ top: "40%", opacity: "1" }, 1000);

          setTimeout(function () {
            $(".con1").addClass("on");
          }, 1000);
          let j = 0;

          $(".ticket_wrap").on("click", function () {
            if (j == 0) {
              // 처음 클릭 시
              $(this).addClass("active");
              $(this).css({ opacity: "1" });
              $(".ticket_wrap").css({ opacity: " 0" });
              $("#close").stop().animate({ opacity: 1 }, 100);
              j = 1; // 상태를 flipped로 변경
            } else if (j == 1) {
              // 두 번째 클릭부터
              $(this).addClass("flip");
              j = 2;
            } else {
              $(this).removeClass("flip");
              j = 0;
            }
          });

          $("#close").on("click", function () {
            $(this).css({ opacity: "0" });
            $(".ticket_wrap").css({ opacity: "0" });
            $(".ticket_wrap").removeClass("on");
            setTimeout(function () {
              $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
              $(".ticket_wrap").removeClass("flip active");
              isFlipped = false; // 상태를 다시 초기화
            });
          });
        }
        if ($(window).scrollTop() > $(".con2").offset().top) {
          $(".con2").addClass("on");

          /*con2 화살표 효과*/
          let total = $(".con2_txt").length - 1;
          let i = 0;
          $(".con2_txt").eq(0).addClass("active");
          $(".con2 .flim").eq(0).addClass("active");
          $(".inner_p").text(`0${i + 1}`);
          $(".next").on("click", function () {
            i++;
            if (i > total) {
              i = 0;
            }
            $(".con2_txt").removeClass("active");
            setTimeout(function () {
              $(".con2_txt").eq(i).addClass("active");
            });
            $(".con2 .flim").removeClass("active");
            $(".con2 .flim").eq(i).addClass("active");
            $(".inner_p").text(`0${i + 1}`);
          });
          $(".prev").on("click", function () {
            i--;
            if (i < 0) {
              i = total;
              console.log(i);
            }
            $(".con2_txt").removeClass("active");
            setTimeout(function () {
              $(".con2_txt").eq(i).addClass("active");
              $(".con2 .flim").removeClass("active");
              $(".con2 .flim").eq(i).addClass("active");
              $(".inner_p").text(`0${i + 1}`);
            });
          });

          /*이미지 흐르는 효과*/
          function flowImages() {
            // $(".flim>img:first-child").appendTo(".flim");
            $(".flim").css({ left: "0%" });
          }
          setInterval(flowImages, 10000);
        }
        if ($(window).scrollTop() == 3251) {
          if ($(window).scrollTop() > $(".con3").offset().top) {
            $(".con3").addClass("on");
          } else {
            $(".con3").removeClass("on");
          }
        }
      });
    }
  });
  /****************************************************/
  $(window).on("load", function () {
    let img = $("#visual .wrap").length;
    $("#visual .img_3rd .wrap:nth-of-type(5)").draggable({
      containment: "#visual",
      behavier: "smooth",
    });
    if ($(".scroll_section_wrap").scrollTop() == 0) {
      $("#visual .img_wrap").addClass("on");
      $("#visual").addClass("up");
      setInterval(function () {
        let randomNumber = Math.floor(Math.random() * img);
        $("#visual .wrap").eq(randomNumber).addClass("on");
      }, 60);
    }
    if ($(".scroll_section_wrap").scrollTop() > $(".con1").offset().top) {
      /*티켓 등장효과*/
      $(".con1 .ticket_wrap")
        .stop()
        .animate({ top: "40%", opacity: "1" }, 2000);

      setTimeout(function () {
        $(".con1").addClass("on");
      }, 2000);
      let j = 0;

      $(".ticket_wrap").on("click", function () {
        if (j == 0) {
          // 처음 클릭 시
          $(this).addClass("active");
          $(this).css({ opacity: "1" });
          $(".ticket_wrap").css({ opacity: " 0" });
          $("#close").stop().animate({ opacity: 1 }, 100);
          j = 1; // 상태를 flipped로 변경
        } else if (j == 1) {
          // 두 번째 클릭부터
          $(this).addClass("flip");
          j = 2;
        } else {
          $(this).removeClass("flip");
          j = 0;
        }
      });

      $("#close").on("click", function () {
        $(this).css({ opacity: "0" });
        $(".ticket_wrap").css({ opacity: "0" });
        $(".ticket_wrap").removeClass("on");
        setTimeout(function () {
          $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
          $(".ticket_wrap").removeClass("flip active");
          isFlipped = false; // 상태를 다시 초기화
        });
      });
    }
    if ($(".scroll_section_wrap").scrollTop() > $(".con2").offset().top) {
      /*con2 화살표 효과*/
      $(".next").on("click", function () {
        if (i > total) {
          i = 0;
        } else {
          i++;
        }
        $(".inner_p").text(`0${i + 1}`);
        $(".con2_txt").removeClass("active");
        setTimeout(function () {
          $(".con2_txt").eq(i).addClass("active");
        });
        $(".con2 .flim").removeClass("active");
        $(".con2 .flim").eq(i).addClass("active");
      });

      $(".prev").on("click", function () {
        if (i < 0) {
          i = total;
          console.log(i);
        } else {
          i--;
        }
        $(".inner_p").text(`0${i + 1}`);
        $(".con2_txt").removeClass("active");
        setTimeout(function () {
          $(".con2_txt").eq(i).addClass("active");
          $(".con2 .flim").removeClass("active");
          $(".con2 .flim").eq(i).addClass("active");
        });
      });
      /*이미지 흐르는 효과*/
      function flowImages() {
        // $(".flim>img:first-child").appendTo(".flim");
        $(".flim").css({ left: "0%" });
      }
      setInterval(flowImages, 10000);
      $(".con2").addClass("on");
    }
    if ($(".scroll_section_wrap").scrollTop() > $(".con3").offset().top) {
      $(".con3").addClass("on");
    }
  });

  /*스크롤 효과*/
  $(".scroll_section_wrap").on("scroll", function () {
    let img = $("#visual .wrap").length;
    let scrollTop = $(".scroll_section_wrap").scrollTop();
    console.log(scrollTop);
    if ($(".scroll_section_wrap").scrollTop() == 0) {
      $("#visual .img_wrap").addClass("on");
      $("#visual").addClass("up");
      setInterval(function () {
        let randomNumber = Math.floor(Math.random() * img);

        $("#visual .wrap").eq(randomNumber).addClass("on");
      }, 60);
    }

    if ($(".scroll_section_wrap").scrollTop() > $(".con1").offset().top) {
      /*티켓 등장효과*/
      $(".con1 .ticket_wrap")
        .stop()
        .animate({ top: "40%", opacity: "1" }, 1000);

      setTimeout(function () {
        $(".con1").addClass("on");
      }, 1000);
      let j = 0;

      $(".ticket_wrap").on("click", function () {
        if (j == 0) {
          // 처음 클릭 시
          $(this).addClass("active");
          $(this).css({ opacity: "1" });
          $(".ticket_wrap").css({ opacity: " 0" });
          $("#close").stop().animate({ opacity: 1 }, 100);
          j = 1; // 상태를 flipped로 변경
        } else if (j == 1) {
          // 두 번째 클릭부터
          $(this).addClass("flip");
          j = 2;
        } else {
          $(this).removeClass("flip");
          j = 0;
        }
      });

      $("#close").on("click", function () {
        $(this).css({ opacity: "0" });
        $(".ticket_wrap").css({ opacity: "0" });
        $(".ticket_wrap").removeClass("on");
        setTimeout(function () {
          $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
          $(".ticket_wrap").removeClass("flip active");
          isFlipped = false; // 상태를 다시 초기화
        });
      });
    }
    if ($(".scroll_section_wrap").scrollTop() > $(".con2").offset().top) {
      $(".con2").addClass("on");

      /*con2 화살표 효과*/
      let total = $(".con2_txt").length - 1;
      let i = 0;
      $(".con2_txt").eq(0).addClass("active");
      $(".con2 .flim").eq(0).addClass("active");
      $(".inner_p").text(`0${i + 1}`);
      $(".next").on("click", function () {
        i++;
        if (i > total) {
          i = 0;
        }
        $(".con2_txt").removeClass("active");
        setTimeout(function () {
          $(".con2_txt").eq(i).addClass("active");
        });
        $(".con2 .flim").removeClass("active");
        $(".con2 .flim").eq(i).addClass("active");
        $(".inner_p").text(`0${i + 1}`);
      });
      $(".prev").on("click", function () {
        i--;
        if (i < 0) {
          i = total;
          console.log(i);
        }
        $(".con2_txt").removeClass("active");
        setTimeout(function () {
          $(".con2_txt").eq(i).addClass("active");
          $(".con2 .flim").removeClass("active");
          $(".con2 .flim").eq(i).addClass("active");
          $(".inner_p").text(`0${i + 1}`);
        });
      });

      /*이미지 흐르는 효과*/
      function flowImages() {
        // $(".flim>img:first-child").appendTo(".flim");
        $(".flim").css({ left: "0%" });
      }
      setInterval(flowImages, 10000);
    }
    if ($(".scroll_section_wrap").scrollTop() > 3251) {
      if ($(".scroll_section_wrap").scrollTop() > $(".con3").offset().top) {
        $(".con3").addClass("on");
      } else {
        $(".con3").removeClass("on");
      }
    }
  });
});

/**********백업용****************************************/
/*$("#visual .img_3rd .wrap:nth-of-type(5)").draggable({
  containment: "#visual",
  behavier: "smooth",
});
$(window).on("load", function () {
  if ($(".scroll_section_wrap").scrollTop() == 0) {
    $("#visual .img_wrap").addClass("on");
    $("#visual").addClass("up");
    setInterval(function () {
      let randomNumber = Math.floor(Math.random() * img);
      $("#visual .wrap").eq(randomNumber).addClass("on");
    }, 60);
  }
  if ($(".scroll_section_wrap").scrollTop() > $(".con1").offset().top) {
    /*티켓 등장효과*/
/*$(".con1 .ticket_wrap").stop().animate({ top: "40%", opacity: "1" }, 2000);

    setTimeout(function () {
      $(".con1").addClass("on");
    }, 2000);
    let j = 0;

    $(".ticket_wrap").on("click", function () {
      if (j == 0) {
        // 처음 클릭 시
        $(this).addClass("active");
        $(this).css({ opacity: "1" });
        $(".ticket_wrap").css({ opacity: " 0" });
        $("#close").stop().animate({ opacity: 1 }, 100);
        j = 1; // 상태를 flipped로 변경
      } else if (j == 1) {
        // 두 번째 클릭부터
        $(this).addClass("flip");
        j = 2;
      } else {
        $(this).removeClass("flip");
        j = 0;
      }
    });

    $("#close").on("click", function () {
      $(this).css({ opacity: "0" });
      $(".ticket_wrap").css({ opacity: "0" });
      $(".ticket_wrap").removeClass("on");
      setTimeout(function () {
        $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
        $(".ticket_wrap").removeClass("flip active");
        isFlipped = false; // 상태를 다시 초기화
      });
    });
  }
  if ($(".scroll_section_wrap").scrollTop() > $(".con2").offset().top) {
    /*con2 화살표 효과*/
/*$(".next").on("click", function () {
      if (i > total) {
        i = 0;
      } else {
        i++;
      }
      $(".inner_p").text(`0${i + 1}`);
      $(".con2_txt").removeClass("active");
      setTimeout(function () {
        $(".con2_txt").eq(i).addClass("active");
      });
      $(".con2 .flim").removeClass("active");
      $(".con2 .flim").eq(i).addClass("active");
    });

    $(".prev").on("click", function () {
      if (i < 0) {
        i = total;
        console.log(i);
      } else {
        i--;
      }
      $(".inner_p").text(`0${i + 1}`);
      $(".con2_txt").removeClass("active");
      setTimeout(function () {
        $(".con2_txt").eq(i).addClass("active");
        $(".con2 .flim").removeClass("active");
        $(".con2 .flim").eq(i).addClass("active");
      });
    });
    /*이미지 흐르는 효과*/
/*function flowImages() {
      // $(".flim>img:first-child").appendTo(".flim");
      $(".flim").css({ left: "0%" });
    }
    setInterval(flowImages, 10000);
    $(".con2").addClass("on");
  }
  if ($(".scroll_section_wrap").scrollTop() > $(".con3").offset().top) {
    $(".con3").addClass("on");
  }
});

/*스크롤 효과*/
/*$(window).on("scroll", function () {
  let scrollTop = $(".scroll_section_wrap").scrollTop();
  console.log(scrollTop);
  if ($(".scroll_section_wrap").scrollTop() == 0) {
    $("#visual .img_wrap").addClass("on");
    $("#visual").addClass("up");
    setInterval(function () {
      let randomNumber = Math.floor(Math.random() * img);

      $("#visual .wrap").eq(randomNumber).addClass("on");
    }, 60);
  }
  if ($(".scroll_section_wrap").scrollTop() > $(".con1").offset().top) {
    /*티켓 등장효과*/
/*   $(".con1 .ticket_wrap").stop().animate({ top: "40%", opacity: "1" }, 1000);

    setTimeout(function () {
      $(".con1").addClass("on");
    }, 1000);
    let j = 0;

    $(".ticket_wrap").on("click", function () {
      if (j == 0) {
        // 처음 클릭 시
        $(this).addClass("active");
        $(this).css({ opacity: "1" });
        $(".ticket_wrap").css({ opacity: " 0" });
        $("#close").stop().animate({ opacity: 1 }, 100);
        j = 1; // 상태를 flipped로 변경
      } else if (j == 1) {
        // 두 번째 클릭부터
        $(this).addClass("flip");
        j = 2;
      } else {
        $(this).removeClass("flip");
        j = 0;
      }
    });

    $("#close").on("click", function () {
      $(this).css({ opacity: "0" });
      $(".ticket_wrap").css({ opacity: "0" });
      $(".ticket_wrap").removeClass("on");
      setTimeout(function () {
        $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
        $(".ticket_wrap").removeClass("flip active");
        isFlipped = false; // 상태를 다시 초기화
      });
    });
  }
  if ($(".scroll_section_wrap").scrollTop() > $(".con2").offset().top) {
    $(".con2").addClass("on");

    /*con2 화살표 효과*/
/* let total = $(".con2_txt").length - 1;
    let i = 0;
    $(".con2_txt").eq(0).addClass("active");
    $(".con2 .flim").eq(0).addClass("active");
    $(".inner_p").text(`0${i + 1}`);
    $(".next").on("click", function () {
      i++;
      if (i > total) {
        i = 0;
      }
      $(".con2_txt").removeClass("active");
      setTimeout(function () {
        $(".con2_txt").eq(i).addClass("active");
      });
      $(".con2 .flim").removeClass("active");
      $(".con2 .flim").eq(i).addClass("active");
      $(".inner_p").text(`0${i + 1}`);
    });
    $(".prev").on("click", function () {
      i--;
      if (i < 0) {
        i = total;
        console.log(i);
      }
      $(".con2_txt").removeClass("active");
      setTimeout(function () {
        $(".con2_txt").eq(i).addClass("active");
        $(".con2 .flim").removeClass("active");
        $(".con2 .flim").eq(i).addClass("active");
        $(".inner_p").text(`0${i + 1}`);
      });
    });

    /*이미지 흐르는 효과*/
/*  function flowImages() {
      // $(".flim>img:first-child").appendTo(".flim");
      $(".flim").css({ left: "0%" });
    }
    setInterval(flowImages, 10000);
  }
  if ($(".scroll_section_wrap").scrollTop() == 3251) {
    if ($(".scroll_section_wrap").scrollTop() > $(".con3").offset().top) {
      $(".con3").addClass("on");
    } else {
      $(".con3").removeClass("on");
    }
  }
});
/*티켓 회전 효과*/

/*$(".con1 .ticket_wrap:nth-of-type(1)").stop().animate({ rotate: "27deg" });
$(".con1 .ticket_wrap:nth-of-type(2)").stop().animate({ rotate: "9deg" });
$(".con1 .ticket_wrap:nth-of-type(3)").stop().animate({ rotate: "-9deg" });
$(".con1 .ticket_wrap:nth-of-type(4)").stop().animate({ rotate: "-27deg" });

/*티켓 효과*/
/*$(".ticket_wrap").on("click", function () {
  $(".ticket_wrap").css({ opacity: " 0" });
  $(this).addClass("active");
  $("#close").stop().animate({ opacity: 1 }, 100);
});
$(".ticket_wrap").on("click", function () {
  $(this).addClass("flip");
});

$("#close").on("click", function () {
  $(this).css({ opacity: "0" });
  $(".ticket_wrap").css({ opacity: "0" });
  $(".ticket_wrap").removeClass("on");
  setTimeout(function () {
    $(".ticket_wrap").stop().animate({ opacity: "1" }, 500);
    $(".ticket_wrap").css({ zIndex: "1" });
    $(".ticket_wrap").removeClass("flip");
    $(".ticket_wrap").removeClass("active");
  });
});
*/
/*이미지 흐르는 효과*/

/*start();
    function start() {
      timer = setInterval(function () {
        i++;
        if (i == total - 1) {
          $(".flim")
            .stop()
            .animate({ left: "-200%" }, function () {
              $(".flim").css({ left: "0%" });
            });
          i = 0;
        } else {
          $(".flim")
            .stop()
            .animate({
              left: -100 * i + "%",
            });
        }
      });
    }
*/
/******************************************************** */
