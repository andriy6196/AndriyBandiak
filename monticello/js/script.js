

// =============================================================
//                             NAV MENU
// =============================================================



// let overflowBody = false;
const x = document.querySelector(".a_nav");
const iconBg = document.querySelector('.a_nav-bg');
const body = document.querySelector('body');

x.addEventListener('click', () => {
    x.classList.toggle('responsive');
    iconBg.classList.toggle('a_nav-bg-visible');
    body.classList.remove('a_nav-overflow');
});

function myFunctionOne() {
    x.classList.toggle('responsive');
    iconBg.classList.toggle('a_nav-bg-visible');
    body.classList.add('a_nav-overflow');
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
            breakpoint: 951,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
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


$(window).scroll(function () {
    if ($(window).scrollTop() > 45) {
        $('.header__content-first').addClass('scroll');
    }
    else {
        $('.header__content-first').removeClass('scroll')
    }
});

// =============================================================
//                       Easy scroll
// =============================================================



$(document).ready(function () {
    $(".link__item").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
    });
});
// =============================================================
//                       Easy scroll
// =============================================================



// =============================================================
//                          MAP
// =============================================================


function initMap() {
    const pos = { lat: 40.694449, lng: -73.8978617 };
    const opt = {
        center: pos,
        zoom: 13,
        disableDefaultUI: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ]
    }
    const myMap = new google.maps.Map(document.getElementById("map"), opt);
    const marker = new google.maps.Marker({
        position: pos,
        map: myMap,
        title: "91 Nolan Extensions Suite 670",
        icon: 'img/Pin.png',
        animation: google.maps.Animation.BOUNCE,
    });

    const infowindow = new google.maps.InfoWindow({
        content: 'From 07:05AM to 19:30PM'
    });

    google.maps.event.addListener(marker, 'click', function () {
        console.log('click');
        infowindow.open(myMap, marker);
    });


}


// =============================================================
//                          MAP
// =============================================================

