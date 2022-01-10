//وقتی می خوای از jQuery استفاده کنی این رو حتما بنویس :

(function ($) {

    $(document).ready(function () {

        function menuscroll() {
            let navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                navmenu.addClass('is-scrolling');
            } else {
                navmenu.removeClass('is-scrolling');
            }
        }

        menuscroll();
        $(window).on('scroll', menuscroll);

        /*-mySidenav-*/
        var navbar = document.getElementById('mySidenav');
        var btn = document.querySelector('.btn-menu');
        var closebtn = document.querySelector('.closebtn');
        if (btn) {
            btn.addEventListener('click', function () {
                navbar.style.right = 0;
            });
        }

        if (closebtn) {
            closebtn.addEventListener('click', function () {
                navbar.style.right = '100%';
            });
        }

    });

})(jQuery);
/*------swiper-----*/


var mySwiper = new Swiper('.slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let verticalPerView = 6;
if ($(document).width() < 992 && $(document).width() >= 768) {
    verticalPerView = 4;
} else if ($(document).width() < 768 && $(document).width() >= 500) {
    verticalPerView = 3;
} else if ($(document).width() < 500) {
    verticalPerView = 2;

}
new Swiper('.vertical .swiper-container', {
    spaceBetween: 0,
    slidesPerView: verticalPerView,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 3000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});
/*--*/
var swiper = new Swiper('.product-box .swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
    }
});

let button = document.getElementById("button")

/* swiper events */
swiper.on("slideChange", function () {
    console.log("slide changed - current slide is: " + this.realIndex)
    if (this.realIndex == 0) {
        console.log("first slide do something")
        button.disabled = false;
    } else {
        console.log("not first slide do somehing")
        button.disabled = true;
    }
});


var swiper = new Swiper('.last-article .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
        1240: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        370: {
            slidesPerView: 1,
            spaceBetween: 5,
        }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        loop: true,
        autoplay: {
            delay: 300,
        },

    },

});
