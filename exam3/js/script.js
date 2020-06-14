
// =============================================================
//                      Slick Slider HEADER
// =============================================================




$(document).ready(function () {
    $('.header__slick').slick({
        arrows: true,
        dots: false,
    });

});



// =============================================================
//                      Slick Slider HEADER
// =============================================================



// =============================================================
//                      BURGER MENU
// =============================================================


$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
    $('.slick-arrow').toggleClass('arrow-none');
    $('body').toggleClass('overflow');
    $('.header').toggleClass('height');
});


// =============================================================
//                      BURGER MENU
// =============================================================


// =============================================================
//                      EASY SCROLL
// =============================================================




$(document).ready(function () {
    $(".link__item").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        $('body').removeClass('overflow');
        $('#menu').removeClass('open');
        $('.header').removeClass('height');
        $('.slick-arrow').removeClass('arrow-none');
        $('.toggle-menu').removeClass('active');
    });

});


// =============================================================
//                      EASY SCROLL
// =============================================================


// =============================================================
//                      INPUT
// =============================================================


$("#сityid").on("keypress", function (e) {

    let char = /["a-zA-Z]/;
    let val = String.fromCharCode(e.which);
    let test = char.test(val);

    if (!test) return false;
})

// =============================================================
//                      INPUTS
// =============================================================
