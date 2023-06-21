$(function () {

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    // ================= fix nav ================
    if (scroll > 50) {
      $("#nav").addClass("fixNav");
      $(".fixNav").fadeIn(500);
    } else {

      $("#nav").removeClass("fixNav");
      $(".fixNav").fadeOut(500);
    }
    // =============== back to top ===============

    if (scroll > 300) {
      $(".goToTop").fadeIn(500);
    } else {

      $(".goToTop").fadeOut(500);
      $(".goToTop").css("visibility", "visible");
    }

  })
$(".goToTop").click(function(){
  $("html, body").animate({scrollTop: 0}, 1000)
})
  $(window).on("load", function(){
    $(".preLoader").delay(2500).fadeOut(500);
  })
});

// ============ count down =============

$("#day")
.countdown("2024/02/14", function(event) {
  $(this).text(
    event.strftime('%D')
    // event.strftime('%D days %H:%M:%S')
  );
});

$("#hour")
.countdown("2024/02/14", function(event) {
  $(this).text(
    event.strftime('%H')
    // event.strftime('%D days %H:%M:%S')
  );
});

$("#mints")
.countdown("2024/02/14", function(event) {
  $(this).text(
    event.strftime('%M')
    // event.strftime('%D days %H:%M:%S')
  );
});

$("#sects")
.countdown("2024/02/14", function(event) {
  $(this).text(
    event.strftime('%S')
    // event.strftime('%D days %H:%M:%S')
  );
  
});

//  ======== vanta animation ===========
// VANTA.BIRDS({
//   el: "#banner",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00
// })