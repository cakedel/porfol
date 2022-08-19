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
    $('.mainVisual .arrows i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })
    $('.mainVisual .arrows i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })
    if ($(window).width() < 1000) {
        $('.proGrid').slick({
            arrows: false,
        })
    }
    if ($(window).width() < 1000) {
        $('.story .container').slick({
            arrows: false,
            fade: true,
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
        if ($(window).width() > 1000) {
            $('.story .container').slick('unslick')
        }
        else {
            $('.story .container').slick({
                arrows: false,
            })
        }
    })
    $('.product .arrows i:nth-child(1)').on('click', function () {
        $('.proGrid').slick('slickPrev')
    })
    $('.product .arrows i:nth-child(2)').on('click', function () {
        $('.proGrid').slick('slickNext')
    })
    $('.story .arrows i:nth-child(1)').on('click', function () {
        $('.story .container').slick('slickPrev')
    })
    $('.story .arrows i:nth-child(2)').on('click', function () {
        $('.story .container').slick('slickNext')
    })
    $('.mbtn').on('click', function () {
        $('.gnb').toggleClass('on')
    })

});