


// ========== slider for quote section  =======
$('.quote_wrapper').slick({
  infinite: true,
  speed: 800,
  prevArrow: ".quote_prev",
  nextArrow: ".quote_next",
  autoplay: true,
  lazyLoad: 'progressive',
});


$(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    // ========= fixed navbar ==========
    if (scroll > 50) {
      $("#nav").addClass("fixNav");
    } else {

      $("#nav").removeClass("fixNav");
    }
    // ======== go to top =========
    if (scroll > 500) {
      $(".goToTop").fadeIn(1000);

    } else {
      $(".goToTop").fadeOut(1000);
      $(".goToTop").css("visibility", "visible");
      $(".goToTop").css("display", "flex");

    }
    if (scroll > 300) {
      $(".goToTop_anim").fadeIn(1000);

    } else {
      $(".goToTop_anim").fadeOut(1000);
      $(".goToTop_anim").css("visibility", "visible");
      $(".goToTop_anim").css("display", "flex")
    }
  });
  $(".goToTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 500)
  });

  // ========= preloader ===========
  $(window).on("load", function () {
    $(".preLoader").delay(2100).fadeOut(500)
  })

});


// ============ pre loader =========
const items = [
  'Welcome',
  'to MoGo',
]
const app = document.getElementById('app')
let count = 0
let index = 0
let typingEffect = () => {
  let text = items[index]
  if (count < text.length) {
    setTimeout(() => {
      app.innerHTML += text[count]
      count++
      typingEffect()
    }, Math.floor(Math.random(10) * 100))
  } else {
    count = 0;
    index = (index + 1 < items.length) ? index + 1 : 0
    setTimeout(() => {
      app.innerHTML = ''
      typingEffect()
    }, 1000)
  }
}

typingEffect()

// ============ Counter up ============

$('.counter').counterUp({
  delay: 100,
  time: 1500
});

// ========= active menu ========
$(document).ready(function () {
  $("ul li").click(function () {
    $("li").removeClass("active");
    $(this).addClass("active");
  });
});



// ============= scroll to add active class ========
$(document).ready(function () {
  /*------------------------------------------------------
  adds active class to the nav element where the scroll position is currently at
  ------------------------------------------------------*/
  $(window).scroll(function () {
    //get current scroll position
    var scrollPosition = $(window).scrollTop();
    //get the position of the containers

    var banner = $("#banner").offset().top,
      about = $("#about").offset().top,
      service = $("#service").offset().top,
      work = $("#work").offset().top,
      footer = $("#footer").offset().top;

    var nav1 = $("#nav1"),
      nav2 = $("#nav2"),
      nav3 = $("#nav3"),
      nav4 = $("#nav4"),
      nav5 = $("#nav5");


    //if the scroll position is the same as the position of the container specified, add the "active" class to the corresponding nav element
    if (scrollPosition >= banner) {
      nav1.siblings().removeClass("active");
      nav1.addClass("active");
    }
    if (scrollPosition >= about) {
      nav2.siblings().removeClass("active");
      nav2.addClass("active");
    }
    if (scrollPosition >= service) {
      nav3.siblings().removeClass("active");
      nav3.addClass("active");
    }
    if (scrollPosition >= work) {
      nav4.siblings().removeClass("active");
      nav4.addClass("active");
    }
    if (scrollPosition >= footer) {
      nav5.siblings().removeClass("active");
      nav5.addClass("active");
    }

  });

});

// =========== scroll indicator =======

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}