import Swiper from "swiper"

import 'swiper/css';

export const swiperFunc = (classSwiper, classDotsWrapper, delClass) => {
   
    let swiper = null

    const changeDot = (index, blockDots, activeClass) => {
        const allDots = blockDots.querySelectorAll('span')
        const activeDot = blockDots.querySelector(activeClass)

        activeDot.classList.remove(activeClass.slice(1))
        allDots[index].classList.add(activeClass.slice(1))
    }

    const initSwiper = () => {
        swiper = new Swiper(classSwiper,{
                slidesPerView: "auto",
                spaceBetween: 20,
                passiveListeners: true,
                grabCursor: true,
                centeredSlides: true,
            });

            swiper.hostEl.style.marginTop = '30px'
            swiper.dotBlock = document.querySelector(classDotsWrapper)
            swiper.dotBlock.style.display = 'flex'


        swiper.on('slideChange', (e) => {
                changeDot(e.activeIndex, swiper.dotBlock, '.dotActive')
            })
    }

    const defineClass = (check) => {
        let wrapperClass = document.querySelector(delClass)

        if(check && wrapperClass){
            wrapperClass.classList.remove(delClass.slice(1))
        } else if(!check){
            wrapperClass = document.querySelector(`${classSwiper} .swiper-wrapper`)
            wrapperClass.classList.add(delClass.slice(1))
        }
    }

    const destroySwiper = () => {
        if(swiper){
            swiper.destroy()
        } 
    }

    const watherWindowWidth = () => {
        if(window.innerWidth < 750){
            initSwiper()
            defineClass(true)
        } else if(window.innerWidth >= 750){
            destroySwiper()
            defineClass(false)
        }
    }

    const debounce = (func, ms) => {
        let timeOut

        return function(){
            timeOut = clearTimeout(timeOut)
            timeOut = setTimeout(func, ms)
        }
    }

    window.addEventListener('load', watherWindowWidth)
    window.addEventListener('resize', debounce(watherWindowWidth, 1000))
}