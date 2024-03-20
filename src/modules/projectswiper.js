import Splide from "@splidejs/splide"

export const projectSwiper = (idSwiper) => {
    const swiper = new Splide(idSwiper, {
            perPage: 1,
            arrows: false,
            pagination: false,
            width: '367px',
            gap: "30px",
            perMove: 1, 
            flickMaxPages: 1, 
            mediaQuery: 'min',
            breakpoints: {
                801:{
                    destroy: true,
                }
            }
        })

const changePagin = () => {
    const activeFraction = swiper.root.querySelector('.active_bar')
    const allFraction = swiper.root.querySelectorAll('.progress_bar')

    activeFraction.classList.remove('active_bar')
    allFraction[swiper.index].classList.add('active_bar')
}

const correctClass = () => {
    const list = swiper.root.children[0].children[0]

    if(window.innerWidth < 801){
        list.classList.remove('track_slids')
    } else if(window.innerWidth >= 801){
        list.classList.add('track_slids')
    }
}

const debounce = (func, ms) => {
    let timeOut

    return function(){
        timeOut = clearTimeout(timeOut)
        timeOut = setTimeout(func, ms)
    }
}

swiper.mount()

swiper.on('mounted move', changePagin)
window.addEventListener('load', correctClass)
window.addEventListener('resize', debounce(correctClass, 1000))
}