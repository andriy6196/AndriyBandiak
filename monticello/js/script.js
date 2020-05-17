

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


$('.news__blocks').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    easing: 'ease',
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 769,
            settings: {
                dots: false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 425,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
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
