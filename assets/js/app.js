$(function() {

    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();


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

        $("html, body").animate({
           scrollTop:  scrollElPos - headerH
        }, 500)

    })


})

