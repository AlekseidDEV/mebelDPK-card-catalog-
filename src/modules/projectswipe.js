import Swiper from "swiper"


export const projectSwip = () => {
    
    const trackerSlider = document.querySelectorAll('.track_slids')
      
    document.querySelector('.touchOne').classList.add('swiper-container')
    document.querySelector('.touchTwo').classList.add('swiper-container')

    document.querySelectorAll('.touchTwo > .track_slids > img').forEach((item) => {
        item.classList.add('swiper-slide')
    })

    document.querySelectorAll('.touchOne > .track_slids > img').forEach((item) => {
        item.classList.add('swiper-slide')
    })
    
    trackerSlider.forEach((track) => {
        track.classList.remove('track_slids')

        track.classList.add('swiper-wrapper')
    })

    const swiper1 = new Swiper('.touchOne', {
        slidesPerView: "1",
        spaceBetween: 20,
        grabCursor: true,
    });
    swiper1.dotBlock = document.querySelector('.touch_bar_one')


    const swiper2 = new Swiper('.touchTwo', {
        slidesPerView: "auto",
        spaceBetween: 20,
        grabCursor: true,
    });
    swiper2.dotBlock = document.querySelector('.touch_bar_two')


    const changeDot = (index, block, elem, classElem) => {
        const allDots = block.querySelectorAll(elem)
        const activeDots = block.querySelector(classElem)

        activeDots.classList.remove(classElem.slice(1))
        allDots[index].classList.add(classElem.slice(1))
    }


    swiper1.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiper1.dotBlock, 'div', '.active_bar')
    }, { passive: true })
    swiper2.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiper2.dotBlock,  'div', '.active_bar')
    }, { passive: true })
}