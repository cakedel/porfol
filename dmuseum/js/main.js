document.addEventListener('DOMContentLoaded', function () {

    const whatSlider = new Swiper('.whatSlider', {
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        on: {
            'init': function () {
                document.querySelector('.num').innerHTML = (this.realIndex + 1) + " / " + (this.slides.length - 2)
            }
        }

    })

    whatSlider.on('slideChangeTransitionEnd', function () {

        document.querySelector('.num').innerHTML = (whatSlider.realIndex + 1) + " / " + (whatSlider.slides.length - 2)
    })

    const infoSlider = new Swiper('.infoSlider', {
        loop: true,
    })


    whatSlider.controller.control = infoSlider;
    infoSlider.controller.control = whatSlider;


    const tabMenu = document.querySelectorAll('.shop .tabMenu li')
    const tabContent = document.querySelectorAll('.shop .right .tabContent')
    tabMenu.forEach((el, idx) => {
        el.addEventListener('click', function () {
            tabMenu.forEach(el => el.classList.remove('on'))
            el.classList.add('on')
            tabContent.forEach(el => el.classList.remove('on'))
            tabContent[idx].classList.add('on')
        })
    })
})