document.addEventListener('DOMContentLoaded', function () {
    const whatSlider = new Swiper('.whatSlider', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
    })

    const infoSlider = new Swiper('.infoSlider', {
        loop: true,
    })
    whatSlider.controller.control = infoSlider;
    infoSlider.controller.control = whatSlider;

    document.querySelector('.num').innerHTML = (whatSlider.realIndex + 1) + " / " + (whatSlider.slides.length - 2)
})