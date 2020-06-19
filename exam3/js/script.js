

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






$(document).ready(function () {


    // =============================================================
    //                      EASY SCROLL
    // =============================================================

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



        // =============================================================
        //                      EASY SCROLL
        // =============================================================

    });




    // =============================================================
    //                      Slick Slider HEADER
    // =============================================================


    $('.header__slick').slick({
        arrows: true,
        dots: false,
    });


    $('.blog__sliders').slick({
        arrows: true,
        dots: false,
    });

});
// =============================================================
//                      Slick Slider HEADER
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


// =============================================================
//                    LOCATION BTN ACTIVE
// =============================================================

let activeBtnLoc;
let btnLoc = document.querySelectorAll('.location__content-text1-a');

function clickMenuHandler() {
    if (activeBtnLoc) {
        activeBtnLoc.classList.remove('active_btn-loc');
    }
    this.classList.add('active_btn-loc');
    activeBtnLoc = this;
}

for (var i = 0; i < btnLoc.length; i++) {
    btnLoc[i].addEventListener('click', clickMenuHandler);
}


// =============================================================
//                       LOCATION BTN ACTIVE
// =============================================================


// =============================================================
//                       POPUP PET CARE
// =============================================================




$(".location__find-see1-a1").on('click', function () {
    $(".custom-model-main").addClass('model-open');
    $('body').toggleClass('overflow');
});
$(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass('model-open');
    $('body').removeClass('overflow');
});






// =============================================================
//                      POPUP PET CARE
// =============================================================








