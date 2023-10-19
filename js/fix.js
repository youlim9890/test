
  $(window).on('scroll', function(){
    let height = $(".con2_text").offset().top;
    let height1 = $(".con4_text1").offset().top;
    let height2 = $(".con4_text2").offset().top;
    let height3 = $(".con4_text3").offset().top;
    let height4 = $(".con4_text4").offset().top;
    let shap1 = $(".shap1").offset().top;
    let shap2 = $(".shap2").offset().top;
    let shap3 = $(".shap3").offset().top;
    let shap4 = $(".shap4").offset().top;

    if($(window).scrollTop() < height - 500){
      $("header").removeClass("on");
      $(".menu_bar").removeClass("on");
      $(".wrap_con1").addClass("fix");
      $(".white").removeClass("on1");
      $(".black").addClass("on1");
      $(".cls-1").addClass("on");
    }else{
      $("header").addClass("on");
      $(".menu_bar").addClass("on");
        $(".wrap_con1").removeClass("fix");
        $(".black").removeClass("on1");
        $(".white").addClass("on1");
    }

    if($(window).scrollTop() > height1-500 && $(window).scrollTop() < height4 ){
        $("header").addClass("onw");
        $(".con4_text").addClass("on");
        $(".con4_textp").addClass("on");
        $(".con4_subtext").addClass("on");
        $(".con4img_circle1").addClass("fixed2");
        if($(window).scrollTop() > height1-500 && $(window).scrollTop() <  height1 ){
              $(".con4img_circle4").removeClass("fixed2");
              $(".con4img_circle2").removeClass("fixed2");
              $(".con4img_circle3").removeClass("fixed2");
              $(".con4img_circle1").addClass("fixed2");
          }else if($(window).scrollTop() >height1 && $(window).scrollTop() < height2){
              $(".con4img_circle4").removeClass("fixed2");
              $(".con4img_circle3").removeClass("fixed2");
              $(".con4img_circle1").removeClass("fixed2");
              $(".con4img_circle2").addClass("fixed2");
          }else if($(window).scrollTop() >height2-500 && $(window).scrollTop() < height3){
              $(".con4img_circle4").removeClass("fixed2");
              $(".con4img_circle2").removeClass("fixed2");
              $(".con4img_circle1").removeClass("fixed2");
              $(".con4img_circle3").addClass("fixed2");
          }else if($(window).scrollTop() >height3-500 && $(window).scrollTop() < height4){
              $(".con4img_circle3").removeClass("fixed2");
              $(".con4img_circle2").removeClass("fixed2");
              $(".con4img_circle1").removeClass("fixed2");
              $(".con4img_circle4").addClass("fixed2");
          }else{
              $(".con4img_circle4").removeClass("fixed2");
              $(".con4img_circle3").removeClass("fixed2");
              $(".con4img_circle2").removeClass("fixed2");
              $(".con4img_circle1").removeClass("fixed2");
          }
    }else{
      if( $(window).scrollTop() > shap1-500 && $(window).scrollTop() < shap2-500 ){
        $(".menu_bar").removeClass("on");
        $(".white").removeClass("on1");
        $(".black").addClass("on1");
        $(".con5_sub_text").addClass("go");
        $(".con5_sub_text").addClass("on");
        $(".roket").removeClass("on3");
        $(".roket").removeClass("on4");
        $(".roket").removeClass("on5");
        $('.roket').addClass("on2");
      }else if( $(window).scrollTop() > shap2-500 && $(window).scrollTop() < shap3-500 ){
        $(".menu_bar").removeClass("on");
        $(".white").removeClass("on1");
        $(".black").addClass("on1");
        $(".con5_sub1_text").addClass("go");
        $(".con5_sub1_text").addClass("on");
        $(".roket").removeClass("on2");
        $(".roket").removeClass("on4");
        $(".roket").removeClass("on5");
        $('.roket').addClass("on3");
      }else if( $(window).scrollTop() > shap3-500 && $(window).scrollTop() < shap4-500){
        $(".menu_bar").removeClass("on");
        $(".white").removeClass("on1");
        $(".black").addClass("on1");
        $(".menu_bar").removeClass("on");
        $(".white").removeClass("on1");
        $(".black").addClass("on1");
        $(".con5_sub2_text").addClass("go");
        $(".con5_sub2_text").addClass("on");
        $(".roket").removeClass("on2");
        $(".roket").removeClass("on3");
        $(".roket").removeClass("on5");
        $('.roket').addClass("on4");
      }else if($(window).scrollTop() > shap4-500){
        $(".menu_bar").removeClass("on");
        $(".white").removeClass("on1");
        $(".black").addClass("on1");
        $(".con5_sub3_text").addClass("go");
        $(".con5_sub3_text").addClass("on");
        $(".roket").removeClass("on2");
        $(".roket").removeClass("on3");
        $(".roket").removeClass("on4");
        $('.roket').addClass("on5");
      }
      $("header").removeClass("onw");
      $(".con4_text").removeClass("on");
      $(".con4_textp").removeClass("on");
      $(".con4_subtext").removeClass("on");
      $(".con4img_circle4").removeClass("fixed2");
      $(".con4img_circle2").removeClass("fixed2");
      $(".con4img_circle3").removeClass("fixed2");
      $(".con4img_circle1").removeClass("fixed2");
    }

});


