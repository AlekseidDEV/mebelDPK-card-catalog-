import { zoomFunc } from "./zoomedImg"
export const gallOpened = () => {
    const windowBlock = document.querySelector('.gallery_window')
    const centerImg = document.querySelector('.items_slide')
    const slidesWind = document.querySelectorAll('.trumb_image')
    const trumbIcons = document.querySelectorAll('.trumb_icon')
    const countText = document.querySelector('.count_trumb')

    const headerWrapper = document.querySelector('#header')
    const bxFixedHeader = document.querySelector('#headerfixed')
    const opener = document.querySelector('.opener')
    const iconDown = document.querySelector('.scroll-to-top')
    const topWrapper = document.querySelector('.top-block-wrapper')
    const mobHeader = document.querySelector('#mobileheader')

    

    let count = 0

    const openModal = () => {
        
        windowBlock.classList.add('gw_act')

        document.body.style.overflow = 'hidden'
        bxFixedHeader.style.display = 'none'
        opener.style.display = 'none'
        iconDown.style.display = 'none'
        topWrapper.style.display = 'none'
        headerWrapper.style.display = 'none'
        mobHeader.style.display = 'none'
    }

    const changeIcon = (index, curentSlide) => {
        curentSlide.classList.remove('trumb_act')
        curentSlide.classList.add('trumb_not')
        trumbIcons[index].classList.remove('trumb_not')
        trumbIcons[index].classList.add('trumb_act')
    }
    
    const prevSlide = (array, classElem) => {
        const activeSlide = document.querySelector(`.${classElem}`)
        count--
         
        if(count < 0) {
            count = slidesWind.length - 1
        }

        changeIcon(count, document.querySelector('.trumb_act'))
        countText.textContent = `${count + 1}/5`

        activeSlide.classList.remove(classElem)
        activeSlide.classList.remove('zoomebled')
        array[count].classList.add(classElem)

        zoomFunc(array[count])
    }

    const nextSlide = (array, classElem) => {
        const activeSlide = document.querySelector(`.${classElem}`)

        count++
        
        if(count >= slidesWind.length){
            count = 0
        }

        countText.textContent = `${count + 1}/5`

        changeIcon(count, document.querySelector('.trumb_act'))

        activeSlide.classList.remove(classElem)
        activeSlide.classList.remove('zoomebled')
        activeSlide.style.top = '0'
        activeSlide.style.left = '0'
        array[count].classList.add(classElem)

        zoomFunc( array[count])
    }

    const funcTranmbNails = (target, array, active, delClass) => {
        const activeIcon = document.querySelector(`.${active}`)
        const activeSlide = document.querySelector('.act_trumb_img')

        trumbIcons.forEach((elem, index) => {
            if(elem === target){
                count = index

                elem.classList.remove(delClass)
                elem.classList.add(active)

                activeIcon.classList.remove(active)
                activeIcon.classList.add(delClass)

                activeSlide.classList.remove('act_trumb_img')
                activeSlide.classList.remove('zoomebled')
                activeSlide.style.top = '0'
                activeSlide.style.left = '0'
                array[index].classList.add('act_trumb_img')
                countText.textContent = `${index + 1}/5`
            }
        })
    }

    centerImg.addEventListener('click', openModal)
    windowBlock.addEventListener('click', (e) => {
        if(e.target.className === 'close_wind'){
            windowBlock.classList.remove('gw_act')
            document.body.style.overflow = ''
            bxFixedHeader.style.display = 'block'
            opener.style.display = 'block'
            iconDown.style.display = 'block'
            topWrapper.style.display = 'block'
            headerWrapper.style.display = 'block'
            mobHeader.style.display = 'block'
        } else if(e.target.matches('.left_gall')){
            prevSlide(slidesWind, 'act_trumb_img', )
        } else if (e.target.matches('.right_gall')){
            nextSlide(slidesWind, 'act_trumb_img')
        }else if (e.target.closest('.slider_window')){
            funcTranmbNails(e.target, slidesWind, 'trumb_act', 'trumb_not')
        }
    })
}