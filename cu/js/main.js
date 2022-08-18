$(function () {
    $('.mainSlider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '500px',
        dots: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
    $('.arrows i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })
    if ($(window).width() < 1000) {
        $('.proGrid').slick({
            arrows: false,
        })
    }
        $(window).resize(function () {
            if ($(window).width() > 1000) {
                $('.proGrid').slick('unslick')
            }
            else {
                $('.proGrid').slick({
                    arrows: false,
                })
            }
        })
    $('.mbtn').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    })
});