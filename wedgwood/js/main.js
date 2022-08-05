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
        slidesToShow: 6,
    });

    $('.tabMenu li').on('click', function () {
        var idx = $(this).index();
        console.log(idx)
        $('.contentWrap').removeClass('on')
        $('.contentWrap').eq(idx - 13).addClass('on')
    })

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

        console.log(sct)

        if (sct > $('.renai').offset().top) {
            $('.toTop').fadeIn()
        }
        else {
            $('.toTop').fadeOut()
        }

    });

});