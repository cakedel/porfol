document.addEventListener('DOMContentLoaded', function () {
        const productSwiper = new Swiper('.productSlider', {
            slidesPerView: 4,
            spaceBetween : 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
              },
        });
        const floorExplain = new Swiper('.floorExplain', {
            slidesPerView: 1,
        });
        const floorSlider = new Swiper('.floorSlider', {
            slidesPerView: 1,
            spaceBetween : 30,
        });
});