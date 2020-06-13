$(document).ready(function () {
    $('.header__slick').slick({
        arrows: true,
        dots: false,
    });

});

$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
    $('.slick-arrow').toggleClass('arrow-none');
    $('body').toggleClass('overflow');
    $('.header').toggleClass('height');
});