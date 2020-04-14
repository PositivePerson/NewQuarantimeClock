


// -------- Header Nav Func -------------

$(function () {
  $(document).scroll(function () {
    var $nav = $("#navLogo");
    // if($(this).scrollTop() > $nav.height()){
    //   // $(this).css("z-index", "flex");
    // } else {
    //   $(this).css("display", "none");
    // }

    $(".searchPlace").toggleClass("scrolledSearchPlace", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
      var $nav = $("#navLogo");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $(".rightText").toggleClass("scrolledHidenText", $(this).scrollTop() > $nav.height());
      $(".fixedLogo li").toggleClass("scrolledHidenText", $(this).scrollTop() > $nav.height());
      // $(".staticNav").toggleClass("hideStaticNav", $(this).scrollTop() > $nav.height());
      // $("#firstfixedLogo").toggleClass("hideStaticNav", $(this).scrollTop() > $nav.height());

      // if($(this).scrollTop() > $nav.height()){
      //   $("#staticNav").fadeOut();
      // } else {
      //   $("#staticNav").fadeIn(200);
      // }


    });
});
