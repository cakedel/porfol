$(function () {
    $('.mainVisual').YTPlayer({
        videoURL: 'https://youtu.be/SdAdcDa2xRA',
        containment: '.video', autoPlay: true, mute: true, startAt: 5, opacity: 1, showControls: false, playOnlyIfVisible: true,
    })
    $('.slider').slick({
        arrows: false,
        autoplay: true,
        centerMode: true,
        pauseOnHover: false,
        centerPadding: '700px',
    });
    $(window).scroll(function () {

        var sct = $(document).scrollTop()

        if (sct > $('.mainSlider').offset().top) {
            $('header .gnb').addClass('on')
        }
        else {
            $('header .gnb').removeClass('on')
        }

        if (sct < $('.mainSlider').offset().top) {
            $('.slider').slick('slickPause');
        }
        else {
            $('.slider').slick('slickPlay');
        }
    });
    $('.pSlider').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,

    });
    $('.tMenu>li').on('click', () => {
        console.log('on')
        $(this).addClass('on')
    });
});