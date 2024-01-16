import { adaptivDesign } from './modules/adaptdesign'
import { animateBlocks } from './modules/animateBlocks'
import { gallOpened } from './modules/gallOpened'
import { slideBar } from './modules/slidebar'
import { sliderCard } from './modules/sliderCard'
import { sliders } from './modules/sliders'
import { zoomFunc } from './modules/zoomedImg'

const adaptive = new adaptivDesign

const allsmalTitle = document.querySelectorAll('.grey_title')
const allBigTitle = document.querySelectorAll('.green_title')
const allBlocks = document.querySelectorAll('.card_material_animate')
const swapBlock = document.querySelectorAll('.block_swap_dowm')


const arrSlidersId = [
    "slider-1",
    "slider-2",
    "slider-3",
    "slider-4",
    "slide-5",
    "auto_slide-1",
    "auto_slide-2",
    "auto_slide-3",
    "auto_slide-4",
    "slide-6"
]

window.addEventListener('load', () => {
    if(window.innerWidth >= '850'){
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
})

sliders()
adaptive.init()
sliderCard()
gallOpened()
zoomFunc()
slideBar(arrSlidersId)


