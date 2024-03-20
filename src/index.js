import { adaptivDesign } from './modules/adaptdesign'
import { slideBar } from './modules/slidebar'
import { sliders } from './modules/sliders'
import { selectMenu } from './modules/selectListOpen'
import { optionsChoice } from './modules/choiceOptions'
import { expandLink } from './modules/expandlink'
import { generateDot } from './modules/dotswiper'
import { mouseSlider } from './modules/mouseslider'
import { mobileTabs } from './modules/mobiletabs'
import { answerQuestions } from './modules/tabs'
import { animateBlocks } from './modules/animateBlocks'
import { maskPhone } from './modules/helpers'
import { swiperFunc } from './modules/swiper'
import { workerSlider } from './modules/workerslider'
import { projectSwiper } from './modules/projectswiper'

const adaptive = new adaptivDesign

import '@splidejs/splide/css/core'

const allsmalTitle = document.querySelectorAll('.grey_title')
const allBigTitle = document.querySelectorAll('.green_title')
const allBlocks = document.querySelectorAll('.card_material_animate')
const swapBlock = document.querySelectorAll('.block_swap_dowm')
const mouseSliders = document.querySelectorAll('.mouseSlider')

const arrSlidersId = [
    "slider-1",
    "slider-2",
    "slider-3",
    "slider-4",
    "slide-5",
    'touch-1',
    'touch-2',
    'touch-3'
]

adaptive.init()

if(window.innerWidth >= 850){
    animateBlocks(
        '.wrapper_block_material', 
        '.green_title', '.grey_title', 
        '.card_block_ralling', 
        '.card_block_turn', 
        '.card_rall_text_block', 
        '.get_catalog_block ', 
        '.block_choose_us', 
        '.card_block_disc', 
        '.price_calc_block', 
        '.block_cont_factory', 
        '.wrapper_block_sertif', 
        '.anim_swap', 
        '.wrapper_cont_think', 
        '.block_img_up', 
        '.block_social_link',
        '.wrap_text', 
        '.block_card_work',
        '.block_tab_cont'
        )
} else {
    allBlocks.forEach((elem) => {
        elem.classList.remove('card_material_animate')
    })

    allBigTitle.forEach((elem) => {
        elem.classList.remove('green_title')
    })

    allsmalTitle.forEach((elem) => {
        elem.classList.remove('grey_title')
    })

    swapBlock.forEach((elem) => {
        elem.classList.remove('block_swap_dowm')
    })
}

slideBar(arrSlidersId)
sliders(arrSlidersId)
selectMenu()
optionsChoice()
expandLink()

swiperFunc("#swiper1")
swiperFunc("#swiper2")
swiperFunc("#swiper3")
swiperFunc("#swiper4")

if(window.innerWidth >= 801){
    console.log(mouseSliders);
    mouseSliders.forEach((slider) => {
        mouseSlider(slider)
    })
} 

projectSwiper("#swiper5")
projectSwiper("#swiper6")

workerSlider()
generateDot()

if(window.innerWidth <= 575){
    mobileTabs()
} else{
    answerQuestions()
}

maskPhone('input[type="tel"]')








