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
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        slidesToShow: 6,
        pauseOnHover: false,
        pauseOnFocus: false,
        rtl: false,
    });

    $('.tabMenu li').on('click', function () {
        var idx = $(this).index();
        console.log(idx)
        $('.contentWrap').removeClass('on')
        $('.contentWrap').eq(idx - 13).addClass('on')
    })

    $('.tabArrows i:nth-child(1)').on('mousedown', function () {
        $('.tabMenu').slick('slickSetOption', 'speed', '300')
    });
    $('.tabArrows i:nth-child(1)').on('mouseup', function () {

        $('.tabMenu').slick('slickSetOption', 'speed', '5000')
    });
    $('.tabArrows i:nth-child(2)').on('mousedown', function () {
        $('.tabMenu').slick('slickNext')
        $('.tabMenu').slick('slickSetOption', 'speed', '5000')
    });

    $('.toTop').on('click', function () {
        scrollTo({top:0, left:0, behavior:'smooth'});
    });


    $(window).scroll(function () {

        var sct = $(window).scrollTop()

        if (sct > $('.renai').offset().top) {
            $('.toTop').fadeIn()
        }
        else {
            $('.toTop').fadeOut()
        }
    })

});