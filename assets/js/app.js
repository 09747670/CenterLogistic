$(function() {

/*_______________Nav Toggle on mobile____________________ */

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $('body').toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    $(window).on("resize", function(){
        $('body').removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    })


    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();


/*_______________Header scroll____________________ */

    headerScroll();

    $(window).on("scroll resize", function(){
        headerScroll();
    })

    function headerScroll() {

        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if (scrollTop >= (introH - headerH)) {
            header.addClass("header--dark");
            }
        else {
            header.removeClass("header--dark");
        }
    }

/*_______________Smooth scrol to section____________________ */


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $('body').removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
           scrollTop:  scrollElPos - headerH
        }, 500)

    });

/*_______________ScrolSpy____________________ */
    let windowH = $(window).height();

    scrollSpy(scrollTop);

    $(window).on("scroll", function(){

            scrollTop = $(this).scrollTop();

            scrollSpy(scrollTop);

        });

        function scrollSpy(scrollTop){

            $("[data-scrollspy]").each(function(){
            let $this = $(this);
            let sectionId = $this.data("scrollspy");
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.3);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        })
    }

/*_______________Modal____________________ */

     $('[data-modal]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function() {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });
    });


    $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });


    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });


    $('.modal__content').on('click', function(event) {
        event.stopPropagation();
    });


    function modalClose(modal) {
        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }


 /*_______________Intro slider____________________ */

    let introSlider = $('#introSlider');

    introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500
    });

    $('#introSliderPrev').on('click', function(){
        introSlider.slick('slickPrev');
    });

     $('#introSliderNext').on('click', function(){
        introSlider.slick('slickNext');
    });

/*_______________Reviews Slider____________________ */

    let reviewsSlider = $('#reviewsSlider');

    reviewsSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
//        fade: true,
        speed: 500
    });

});

