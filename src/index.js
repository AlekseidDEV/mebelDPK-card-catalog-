import { adaptivDesign } from './modules/adaptdesign'
import { gallOpened } from './modules/gallOpened'
import { slideBar } from './modules/slidebar'
import { sliderCard } from './modules/sliderCard'
import { sliders } from './modules/sliders'
import { zoomFunc } from './modules/zoomedImg'
import { selectMenu } from './modules/selectListOpen'
import { optionsChoice } from './modules/choiceOptions'
import { expandLink } from './modules/expandlink'
import { workerSlider } from './modules/workerslider'
import { swiper } from './modules/swiper'
import { generateDot } from './modules/dotswiper'
import { mouseSlider } from './modules/mouseslider'
import { projectSwip } from './modules/projectswipe'
import { mobileTabs } from './modules/mobiletabs'
import { answerQuestions } from './modules/tabs'
import { animateBlocks } from './modules/animateBlocks'

const adaptive = new adaptivDesign

const allsmalTitle = document.querySelectorAll('.grey_title')
const allBigTitle = document.querySelectorAll('.green_title')
const allBlocks = document.querySelectorAll('.card_material_animate')
const swapBlock = document.querySelectorAll('.block_swap_dowm')

const mouseSliders = document.querySelectorAll('.mouseSlider')

let test = false

const arrSlidersId = [
    "slider-1",
    "slider-2",
    "slider-3",
    "slider-4",
    "slide-5",
    "slider-7",
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

sliderCard()
gallOpened()
zoomFunc()
slideBar(arrSlidersId)
sliders(arrSlidersId)
selectMenu()
optionsChoice()
expandLink()

if(window.innerWidth <= 414){
    swiper([".card_block_turn", ".card_block_choose", ".card_block_ralling", ".wrapper_block_material"])
}

window.addEventListener('resize', () => {
    if(window.innerWidth <= 414){
        swiper([".card_block_turn", ".card_block_choose", ".card_block_ralling", ".wrapper_block_material"])
    } else if(window.innerWidth > 414 && window.innerWidth < 1100){
        location.reload()
    }
})

workerSlider()
generateDot()

if(window.innerWidth > 800){
        mouseSliders.forEach((slider) => {
            mouseSlider(slider)
    })
} else if(window.innerWidth <= 800){
    projectSwip()
}

if(window.innerWidth <= 575){
    mobileTabs()
} else{
    answerQuestions()
}








