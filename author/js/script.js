
$(function () {
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    // =========== add class for fix nav ======== 
    if (scroll > 50) {
      $("#navbar").addClass("fixNav");
      $(".fixNav").fadeIn(1000);
    } else {
      $("#navbar").removeClass("fixNav");
      $(".fixNav").fadeOut(1000);
    };
    // =========== back to top ======== 

    
    if (scroll > 250) {
      $(".goToTop").fadeIn(1000);
      $(".goToTop").addClass("goToTop_slide");
    } else {
      $(".goToTop").fadeOut(1000);
      $(".goToTop").css("visibility", "visible");
      $(".goToTop").removeClass("goToTop_slide");
    };

  });
  $(".goToTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500)
  });
  $(window).on("load", function(){
    $(".loaderMain").delay(1500).fadeOut(1000);
  })
});