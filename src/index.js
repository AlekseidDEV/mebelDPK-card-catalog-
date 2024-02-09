import { adaptivDesign } from './modules/adaptdesign'
import { animateBlocks } from './modules/animateBlocks'
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

const adaptive = new adaptivDesign

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







