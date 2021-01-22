$('.burger').on('click', function () {
    $(this).toggleClass('on');
    $('.menu').fadeToggle(200);
});


$(document).ready(function(){


    $('.tab-item:first-child').addClass('active-tab');
    $('.tab-body').hide();
    $('.tab-body:first').show();



    $('.tab-item').click(function(event) {

        $('.tab-item').removeClass('active-tab');
        $(this).addClass('active-tab');


        const activeTab = $(this).find('a').attr('href');
        $('.tab-body').hide();
        $(activeTab).fadeIn();

        return false;
    });

    $(".links").click(function () {
        $('.burger').removeClass('on');
        $('.menu').toggle();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;

    });
    $(".links1").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;

    });
});

const email = document.querySelector('input[name=email]');
const button = document.querySelector('#btn');
const text =  document.querySelector('#message');

const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
        text.innerText="";
    }else{
        text.innerText="Whoops, make sure it's an email";
    }
})

