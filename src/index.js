import { adaptivDesign } from './modules/adaptdesign'
import { animateBlocks } from './modules/animateBlocks'

const adaptive = new adaptivDesign


animateBlocks('.wrapper_block_material', '.green_title', 'grey_title')
adaptive.init()

