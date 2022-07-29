$(function () {
    $('.gnb .left').hover(function () {
        $('.gnb').addClass('hover')
        $('.smenu').addClass('on')
    },
        () => {
            $('.gnb').removeClass('hover')
            $('.smenu').removeClass('on')
        })
    $('.mainVisual').YTPlayer({
        videoURL: 'https://youtu.be/SdAdcDa2xRA',
        containment: '.video', autoPlay: true, mute: true, startAt: 3, opacity: 1, showControls: false, playOnlyIfVisible: true,
    })
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        centerMode: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        centerPadding: '700px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: '0px',
                    fade: true,
                }
            }
        ]
    });
    $(window).scroll(function () {

        var sct = $(document).scrollTop()

        if (sct > $('.mainVisual').offset().top * 5) {
            $('header .gnb').addClass('on');
        }
        else {
            $('header .gnb').removeClass('on');
        }

        if (sct > $('.mainSlider').offset().top) {
            $('header .gnb').addClass('down');
        }
        else {
            $('header .gnb').removeClass('down');
        }

        if (sct > $('.mainSlider').offset().top / 2) {
            $('.mainSlider span').addClass('on');
            $('.mainSlider h2').addClass('on');
            $('.mainSlider p').addClass('on');
            $('.mainSlider h2').addClass('on');
            $('.slider figure').addClass('on')
            $('.slider').slick('slickPlay');

        }
        else {
            $('.mainSlider span').removeClass('on');
            $('.mainSlider h2').removeClass('on');
            $('.mainSlider p').removeClass('on');
            $('.slider figure').removeClass('on')
            $('.slider').slick('slickPause');
        }
        if ($(window).width() < 1000) {
            $('.gnb').removeClass('on')
            $('.gnb').removeClass('down')
        }
    });

    $('.tMenu li').on('click', function (e) {
        e.preventDefault();
        $('.tMenu li').removeClass('on')
        $(this).addClass('on');

        var idx = $(this).index()
        $('.pSlider').removeClass('on');
        $('.pSlider').eq(idx).addClass('on');
        $('.pSlider').slick('setPosition');
    });

    $('.pSlider').slick({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.pArrows .left').on('click', function () {
        $('.pSlider').slick('slickPrev');
    })
    $('.pArrows .right').on('click', function () {
        $('.pSlider').slick('slickNext');
    });
    $('.mbtn i:nth-child(1)').on('click', function () {

        if ($(window).width() < 1000) {
            $(this).addClass('on')
            $('.mbtn i:nth-child(2)').addClass('on')
            $('.gnb').addClass('res')
        }


    })

    $('.mbtn i:nth-child(2)').on('click', function () {
        if ($(window).resize()) {
            if ($(window).width() < 1000) {
                $(this).removeClass('on')
                $('.mbtn i:nth-child(1)').removeClass('on')
                $('.gnb').removeClass('res')
                $('.gnb .smenu').hide()
            }
        }

    })
    $('.gnb .left>li>a').on('click', function (e) {
        e.preventDefault()
        if ($('.gnb').hasClass('res')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().children('ul').stop().slideUp();
        }
        else {
        }

    })
    $(window).resize(function () {
        if ($(window).width() >= 1000) {
            $('.gnb .smenu').css('display', 'block')
        }
        else {
            $('.gnb .smenu').css('display', 'none')
        }

    })
});