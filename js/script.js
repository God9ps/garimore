(function ($) {

    "use strict";

    function choosePano(img) {
        var src = "../images/";
        $("#myPano").pano({
            img: src + img
        });
    }

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    //Update header style + Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var mainHeader = $('.main-header').height();
            var windowpos = $(window).scrollTop();
            if (windowpos >= mainHeader) {
                $('.sticky-header').addClass('now-visible');
                $('.scroll-to-top').fadeIn(300);
            } else {
                $('.sticky-header').removeClass('now-visible');
                $('.scroll-to-top').fadeOut(300);
            }
        }
    }

    headerStyle();


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function () {
            $(this).prev('ul').slideToggle(500);
        });


        //Disable dropdown parent link
        $('.navigation li.dropdown > a').on('click', function (e) {
            e.preventDefault();
        });
    }


    //Revolution Slider
    if ($('.main-slider .tp-banner').length) {

        jQuery('.main-slider .tp-banner').show().revolution({
            delay: 10000,
            startwidth: 1200,
            startheight: 720,
            hideThumbs: 600,

            thumbWidth: 80,
            thumbHeight: 50,
            thumbAmount: 5,

            navigationType: "bullet",
            navigationArrows: "0",
            navigationStyle: "preview4",

            touchenabled: "on",
            onHoverStop: "off",

            swipe_velocity: 0.7,
            swipe_min_touches: 1,
            swipe_max_touches: 1,
            drag_block_vertical: false,

            parallax: "mouse",
            parallaxBgFreeze: "on",
            parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],

            keyboardNavigation: "off",

            navigationHAlign: "center",
            navigationVAlign: "bottom",
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: "left",
            soloArrowLeftValign: "center",
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: "right",
            soloArrowRightValign: "center",
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            shadow: 0,
            fullWidth: "on",
            fullScreen: "off",

            spinner: "spinner4",

            stopLoop: "off",
            stopAfterLoops: -1,
            stopAtSlide: -1,

            shuffle: "off",

            autoHeight: "off",
            forceFullWidth: "on",

            hideThumbsOnMobile: "on",
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: "on",
            hideArrowsOnMobile: "on",
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0,
            videoJsPath: "",
            fullScreenOffsetContainer: ""
        });

    }


    //Tabs Box
    if ($('.tabs-box').length) {

        //Tabs
        $('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {

            e.preventDefault();
            var target = $($(this).attr('href'));

            target.parents('.tabs-box').children('.tab-buttons').children('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').children('.tab-content').children('.tab').fadeOut(0);
            target.parents('.tabs-box').children('.tab-content').children('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        });

    }


    //Sortable Masonary with Filters
    function enableMasonry() {
        if ($('.sortable-masonry').length) {

            var winDow = $(window);
            // Needed variables
            var $container = $('.sortable-masonry .items-container');
            var $filter = $('.filter-btns');

            $container.isotope({
                filter: '*',
                masonry: {
                    columnWidth: 2
                },
                animationOptions: {
                    duration: 500,
                    easing: 'linear'
                }
            });


            // Isotope Filter
            $filter.find('li').on('click', function () {
                var selector = $(this).attr('data-filter');

                try {
                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                } catch (err) {

                }
                return false;
            });


            winDow.bind('resize', function () {
                var selector = $filter.find('li.active').attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 500,
                        easing: 'linear',
                        queue: false
                    }
                });
            });


            var filterItemA = $('.filter-btns li');

            filterItemA.on('click', function () {
                var $this = $(this);
                if (!$this.hasClass('active')) {
                    filterItemA.removeClass('active');
                    $this.addClass('active');
                }
            });
        }
    }

    enableMasonry();


    // Nearby Locations Map
    if ($('#locations-box').length) {
        var myLatLng = {lat: 38.6426907, lng: -9.0540764};

        var map = new google.maps.Map(document.getElementById('locations-box'), {
            zoom: 16,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'O meu novo apartamento!'
        });
        /*$('#locations-box').gMap({
            controls: false,
            scrollwheel: false,
            maptype: 'TERRAIN', // 'HYBRID', 'SATELLITE', 'ROADMAP' or 'TERRAIN'
            markers: [
                {
                    latitude: 38.642687,
                    longitude: -9.053962,
                    icon: {
                        image: "images/icons/marker.png",
                        iconsize: [62, 84],
                        iconanchor: [62, 84]
                    }
                }],
            icon: {
                image: "images/icons/marker.png",
                iconsize: [62, 84],
                iconanchor: [62, 84]
            },
            latitude: 38.642687,
            longitude: -9.053962,
            zoom: 11

        });*/
    }


    //Testimonials Carousel Slider
    if ($('.testimonials-carousel').length) {
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            margin: 60,
            nav: true,
            autoplayHoverPause: false,
            autoplay: 5000,
            smartSpeed: 700,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                760: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1100: {
                    items: 3
                }
            }
        });
    }


    //Mixitup Gallery
    if ($('.filter-list').length) {
        $('.filter-list').mixItUp({});
    }


    //Tour Gallery Slider
    if ($('#tour-gallery').length) {
        var slider = new MasterSlider();
        slider.setup('masterslider', {
            width: 1170,
            height: 560,
            space: 10,
            preload: 3,
            view: 'basic'
        });
        slider.control('arrows');

        var gallery = new MSGallery('tour-gallery', slider);
        gallery.setup();
    }


    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.accord-btn', function () {

            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')) {
                //$(this).removeClass('active');
                return false;
                //$(this).next('.accord-content').slideUp(300);
            } else {
                $(this).addClass('active');
                $('.accordion').removeClass('active-block');
                $('.accordion .accord-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.accord-content').slideDown(300);
            }
        });
    }


    //Sponsors Slider
    if ($('.sponsors-slider').length) {
        $('.sponsors-slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: 4000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }


    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });
    }


    //Contact Form Validation
    if ($('#contact-form').length) {
        $('#contact-form').validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        });
    }


    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }


    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW(
            {
                boxClass: 'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0,          // distance to the element when triggering the animation (default is 0)
                mobile: true,       // trigger animations on mobile devices (default is true)
                live: true       // act on asynchronously loaded content (default is true)
            }
        );
        wow.init();
    }


    /* ==========================================================================
     When document is Scrollig, do
     ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
    });

    /* ==========================================================================
     When document is loaded, do
     ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();
        enableMasonry();

        $("#myPano").pano({
            img: "../images/sphere.jpg"
        });

        $(".choose").on("click", function () {
            choosePano($(this).attr('image'));
        });
    });


})(window.jQuery);

$(document).ready(function ($) {

    $(function () {
        $.ajaxSetup({
            type: "POST",

            /*"../trata.php"*/
            url: "classes/mail.php",
            dataType: "json",
            cache: "false",
            error: function (jqXHR, exception) {
                if (jqXHR.status === 0) {
                    console.log('No connecting.\n Verify Network.');
                } else if (jqXHR.status == 400) {
                    console.log('Bad Request. [400]');
                } else if (jqXHR.status == 404) {
                    console.log('Requested page not found. [404]');
                } else if (jqXHR.status == 500) {
                    console.log('Internal Server Error [500].');
                } else if (exception === 'parsererror') {
                    console.log(jqXHR.responseText);
                    console.log('Requested JSON parse failed.');
                } else if (exception === 'timeout') {
                    console.log('Time out error.');
                } else if (exception === 'abort') {
                    console.log('Ajax request aborted.');
                } else {
                    console.log('Uncaught Error: ' + jqXHR.responseText);
                }
            }
        });
    });

    $("#sendmail").submit(function () {
        var dados = $(this).serialize() + "&acao=sendmail";

        $.ajax({
            data: dados,
            success: function (data) {

                if (data.status) {
                    swal("Obrigado!", "A nossa resposta será tão breve quanto possível.", "success")
                } else {
                    swal("Ooops!", data.status + "!", "error")
                }
            }
        });
        return false;
    });

});