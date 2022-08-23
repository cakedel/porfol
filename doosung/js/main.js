document.addEventListener('DOMContentLoaded', function () {
        const productSwiper = new Swiper('.swiper', {
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
});