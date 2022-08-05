$(function () {
    $('.topBanner i').on('click', function (e) {
        e.preventDefault()
        $('.topBanner').slideUp();
    })
    $('.sumSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        arrows: false,
    });

    $('.popArrows i:nth-child(1)').on('click', function () {
        $('.sumSlider').slick('slickPrev')
    });
    $('.popArrows i:nth-child(2)').on('click', function () {
        $('.sumSlider').slick('slickNext')
    });

    $('.tabMenu').slick({
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        infinite: true,
        asNavFor: '.tabContent',
    });
    $('.tabMenu').on('afterChange', function (s, e, c, n) {
        $('.slick-active').removeClass('on')
        $('.slick-current').addClass('on')
    })


    $('.tabContent').slick({
        arrows: false,
        speed: 0,
        swipe: false,
    });

    $('.tabArrows i:nth-child(1)').on('click', function () {
        $('.tabMenu').slick('slickPrev')
    });

    $('.tabArrows i:nth-child(2)').on('click', function () {
        $('.tabMenu').slick('slickNext')
    });

    $('.toTop').on('click', function () {
        scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    $('.toTop').hide()

    $(window).scroll(function () {

        var sct = $(window).scrollTop()

        if (sct > $('.renai').offset().top) {
            $('.toTop').fadeIn()
        }
        else {
            $('.toTop').fadeOut()
        }

    });

});