document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', () => {
        var SCT = window.scrollY
        console.log(SCT)
        SCT > 700
            ? document.querySelector('.header').classList.add('on')
            : document.querySelector('.header').classList.remove('on')
    })


    const whatSlider = new Swiper('.whatSlider', {
        spaceBetween:0,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        on: {
            'init': function () {
                document.querySelector('.num').innerHTML = (this.realIndex + 1) + " / " + (this.slides.length)
            }
        }

    })

    whatSlider.on('slideChangeTransitionEnd', function () {
        document.querySelector('.num').innerHTML = (whatSlider.realIndex + 1) + " / " + (whatSlider.slides.length)
    })

    const infoSlider = new Swiper('.infoSlider', {
        
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