

// =============================================================
//                             NAV MENU
// =============================================================





function myFunctionOne(y) {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}






// =============================================================
//                      Slick Slider
// =============================================================



$(document).ready(function () {
    $('.header__slick').slick({
        arrows: false,
        dots: true,
    });

});




// =============================================================
//                 FIXED menu(NOT WORK)
// =============================================================


// $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('.header__content-first').addClass('scroll');
//     }
//     else {
//         $('.header__content-first').removeClass('scroll')
//     }
// });

// =============================================================
//                       Easy scroll
// =============================================================



$(document).ready(function () {


    $("a.arrow_top").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


});

$(document).ready(function () {


    $("a.projects").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


});

$(document).ready(function () {


    $("a.news").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


});

$(document).ready(function () {


    $("a.contact").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


});

// =============================================================
//                       Easy scroll
// =============================================================
