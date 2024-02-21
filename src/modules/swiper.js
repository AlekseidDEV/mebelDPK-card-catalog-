import Swiper from "swiper"

import 'swiper/css';

export const swiper = (array) => {
    const swiperTurn = new Swiper('.container_swiper_turn', {
        slidesPerView: "auto",
        spaceBetween: 20,
        passiveListeners: true,
        grabCursor: true,
    });

    swiperTurn.dotBlock = document.querySelector('.turn_dots')

    const swiperChose = new Swiper('.container_swip_chooce', {
        slidesPerView: "auto",
        spaceBetween: 20,
        passiveListeners: true,
        grabCursor: true,
    });

    swiperChose.dotBlock = document.querySelector('.choose_dt')

    const swiperRall = new Swiper('.container_rall_swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        passiveListeners: true,
        grabCursor: true,
    });

    swiperRall.dotBlock = document.querySelector('.rall_dt')

    const swiperMat = new Swiper('.container_mat_swiper', {
        slidesPerView: "auto",
        spaceBetween: 20,
        passiveListeners: true,
        grabCursor: true,
    });

    swiperMat.dotBlock = document.querySelector('.mat_dt')


    const changeDot = (index, block, elem, classElem) => {
        const allDots = block.querySelectorAll(elem)
        const activeDots = block.querySelector(classElem)

        activeDots.classList.remove(classElem.slice(1))
        allDots[index].classList.add(classElem.slice(1))
    }



    const delClass = () => {
        array.forEach((itemClass) => {
            const element = document.querySelector(itemClass)

            if(element){
                 element.classList.remove(itemClass.slice(1))
            } 
        })
    }

    delClass()

    swiperTurn.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiperTurn.dotBlock, 'span', '.dotActive')
    })
    swiperChose.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiperChose.dotBlock, 'span', '.dotActive')
    })
    swiperRall.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiperRall.dotBlock, 'span', '.dotActive')
    })
    swiperMat.on('slideChange', (e) => {
        changeDot(e.activeIndex, swiperMat.dotBlock, 'span', '.dotActive')
    })
}