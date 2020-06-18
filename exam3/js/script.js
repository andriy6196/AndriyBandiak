

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
    // $('.reviews__slider').slick({
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     easing: 'ease',
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     pauseOnFocus: true,
    //     pauseOnHover: true,
    //     pauseOnDotsHover: true,
    //     arrows: false,
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 1050,
    //             settings: "unslick"
    //         },
    //     ]
    // });
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



// =============================================================
//                       CONTACT HTML
// =============================================================


// Check for valid email syntax
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function closeForm() {
    document.contactform.name.value = '';
    document.contactform.email.value = '';
    document.contactform.message.value = '';

    $('.email').removeClass('typing');
    $('.name').removeClass('typing');
    $('.message').removeClass('typing');

    $('.cd-popup').removeClass('is-visible');
    $('.notification').addClass('is-visible');
    $('#notification-text').html("Thanks for contacting us!");
}

$(document).ready(function ($) {

    /* ------------------------- */
    /* Contact Form Interactions */
    /* ------------------------- */
    $('#contact').on('click', function (event) {
        event.preventDefault();

        $('#contactblurb').html('Questions, suggestions, and general comments are all welcome!');
        $('.contact').addClass('is-visible');

        if ($('#name').val().length != 0) {
            $('.name').addClass('typing');
        }
        if ($('#email').val().length != 0) {
            $('.email').addClass('typing');
        }
        if ($('#message').val().length != 0) {
            $('.message').addClass('typing');
        }
    });

    //close popup when clicking x or off popup
    $('.cd-popup').on('click', function (event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });

    /* ------------------- */
    /* Contact Form Labels */
    /* ------------------- */
    $('#name').keyup(function () {
        $('.name').addClass('typing');
        if ($(this).val().length == 0) {
            $('.name').removeClass('typing');
        }
    });
    $('#email').keyup(function () {
        $('.email').addClass('typing');
        if ($(this).val().length == 0) {
            $('.email').removeClass('typing');
        }
    });
    $('#message').keyup(function () {
        $('.message').addClass('typing');
        if ($(this).val().length == 0) {
            $('.message').removeClass('typing');
        }
    });

    /* ----------------- */
    /* Handle submission */
    /* ----------------- */
    $('#contactform').submit(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var human = $('#human:checked').val();

        if (human) {
            if (validateEmail(email)) {
                if (name) {
                    if (message) {

                        // Handle submitting data somewhere
                        // For a tutorial on submitting the form to a Google Spreadsheet, see:
                        // https://notnaturaltutorials.wordpress.com/2016/03/20/submit-form-to-spreadsheet/

                        /*
                                    var googleFormsURL = "https://docs.google.com/forms/d/1dHaFG67d7wwatDtiVNOL98R-FwW1rwdDwdFqqKJggBM3nFB4/formResponse";
                                    // replace these example entry numbers
                                    var spreadsheetFields = {
                                      "entry.212312005": name,
                                      "entry.1226278897": email,
                                      "entry.1835345325": message
                                    }
                                    $.ajax({
                                      url: googleFormsURL,
                                      data: spreadsheetFields,
                                      type: "POST",
                                      dataType: "xml",
                                      statusCode: {
                                        0: function() {
                        
                                        },
                                        200: function() {
                        
                                        }
                                      }
                                    });
                        */

                        closeForm();

                    } else {
                        $('#notification-text').html("<strong>Please let us know what you're thinking!</strong>");
                        $('.notification').addClass('is-visible');
                    }
                } else {
                    $('#notification-text').html('<strong>Please provide a name.</strong>');
                    $('.notification').addClass('is-visible');
                }
            } else {
                $('#notification-text').html('<strong>Please use a valid email address.</strong>');
                $('.notification').addClass('is-visible');
            }
        } else {
            $('#notification-text').html('<h3><strong><em>Warning: Please prove you are a human and not a robot.</em></strong></h3>');
            $('.notification').addClass('is-visible');
        }

        return false;
    });
});

// =============================================================
//                       CONTACT HTML
// =============================================================




// =============================================================
//                      MAP
// =============================================================


function initMap() {
    const pos = { lat: 48.923348, lng: 24.710384 };
    const opt = {
        center: pos,
        zoom: 15,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    }
    const myMap = new google.maps.Map(document.getElementById("map"), opt);
    const marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: "First City",
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        animation: google.maps.Animation.BOUNCE,
    });

    const infowindow = new google.maps.InfoWindow({
        content: 'Try this city'
    });

    google.maps.event.addListener(marker, 'click', function () {
        console.log('click');
        infowindow.open(myMap, marker);
    });

}

// =============================================================
//                      MAP
// =============================================================

