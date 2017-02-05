/* -------------------- *\
    GENERAL
\* -------------------- */

/**
 * Preloader
 */

$(window).load(function () {

    $('.preloader__img').fadeOut(500);
    setTimeout(function () {
        $('.preloader').addClass('active').delay(1000).fadeOut(500);
    }, 1000);


});

$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        $('#scrollUp').addClass('hideme');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
           
        }
    }
    
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $('#scrollUp').removeClass('hideme');
    } else {
        $('#scrollUp').addClass('hideme');
    }
});