$(function () {
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();

        // ========== fix nav ==============
        if (scroll > 50) {
            $("#nav").addClass("navFix");
            $(".navFix").fadeIn(1000);
        } else {
            $("#nav").removeClass("navFix");
            $(".navFix").fadeOut(1000);
        }

        // ============== back to top ==============

        if (scroll > 300) {
            $(".backToTop").fadeIn(1000);
        } else {
            $(".backToTop").fadeOut(1000);
            $(".backToTop").css("visibility", "visible");
        }
    })
    $(".backToTop").click(function(){
        $("body,html").animate({scrollTop: 0}, 1000)
    })
    // ======= preloader ==========
    $(window).on("load", function(){
        $("body,html").animate({scrollTop: 0}, 10)
        $(".preloader_main").delay(1000).fadeOut(500);

    })

})