import { adaptivDesign } from './modules/adaptdesign'
import { animateBlocks } from './modules/animateBlocks'
import { sliderCard } from './modules/sliderCard'

const adaptive = new adaptivDesign

const allsmalTitle = document.querySelectorAll('.grey_title')
const allBigTitle = document.querySelectorAll('.green_title')
const allBlocks = document.querySelectorAll('.card_material_animate')
const swapBlock = document.querySelectorAll('.block_swap_dowm')



window.addEventListener('load', () => {
    if(window.innerWidth >= '950'){
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

adaptive.init()
sliderCard()

