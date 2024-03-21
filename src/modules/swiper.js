import Splide from '@splidejs/splide'

export const swiperFunc = (idSwiper) => {
    const swiper = new Splide(idSwiper, {
        perPage: 1,
        arrows: false,
        gap: "30px", 
        pagination: false,
        perMove: 1, 
        flickMaxPages: 1, 
        mediaQuery: 'min',
        breakpoints: {
            630:{
                destroy: true,
            }
        }
    })

    const changeDot = () => {
        const activeDot = swiper.root.querySelector('.dotActive')
        const allDots = swiper.root.querySelectorAll('.dot')
        
        activeDot.classList.remove('dotActive')
        allDots[swiper.index].classList.add('dotActive')
    }

    const delClasses = () => {
        const delMat = document.getElementById('delMat')
        const delRall = document.getElementById('rallDel')
        const delTurn = document.getElementById('turnDel')
        const delChoose = document.getElementById('chooDel')

        const dotsWraper = swiper.root.querySelector('.dots_wrapper')

        if(window.innerWidth < 630){
            delMat.classList.remove('wrapper_block_material')
            delRall.classList.remove('card_block_ralling')
            delTurn.classList.remove('card_block_turn')
            delChoose.classList.remove('card_block_choose')

            dotsWraper.style.display = 'flex'
        } else{
            delMat.classList.add('wrapper_block_material')
            delRall.classList.add('card_block_ralling')
            delTurn.classList.add('card_block_turn')
            delChoose.classList.add('card_block_choose')

            dotsWraper.style.display = 'none'
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

    swiper.on('mounted move', changeDot)
    window.addEventListener('load', delClasses)
    window.addEventListener('resize', debounce(delClasses, 1000))
}