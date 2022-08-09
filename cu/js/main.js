$(function () {
    $('.mainSlider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '500px',
        dots: true,
    })
    $('.arrows i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    })
    $('.arrows i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    })
});