import Swiper from "swiper";
import { Navigation, Pagination } from 'swiper/modules';

import "swiper/css/pagination";

export const workerSlider = () => {
    const arrowsBlock = document.querySelector('.wrapper_our_slide_arr')
    
    const workerSlider = new Swiper('.swiper-container_worker', {
        slidesPerView: 'auto',
        spaceBetween: 80,
        grabCursor: true,
        passiveListeners: true,
        slideClass: 'worker_card',
        modules : [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
            type: "progressbar",
          },
    })
    workerSlider.dotBlock = document.querySelector('.worker_bar')





    arrowsBlock.addEventListener("click", (e) => {
        if(e.target.className === 'link_slide_our'){
            workerSlider.slidePrev()
        } else if(e.target.className === 'link_slide_our_right'){
            workerSlider.slideNext()
        }
    })
}

