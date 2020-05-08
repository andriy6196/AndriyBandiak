$(document).ready(function () {
    $('.blocks:first-child').addClass('active-tab');
    $('.body').hide();
    $('.body:first').show();


    $('.blocks').click(function (event) {
        event.preventDefault();
        $('.blocks').removeClass('active-tab');
        $(this).addClass('active-tab');

        const activeTab = $(this).find('a').attr('href');
        $('.body').hide();
        $(activeTab).fadeIn();
    });
});