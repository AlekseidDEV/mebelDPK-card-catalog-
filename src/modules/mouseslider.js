export const mouseSlider = (slider) => {
    const ariaBlock = slider.querySelector('.chumb_project')
    const slides = slider.querySelectorAll('.track_slids > img')

    const changePagination = (eventElem, indexStrip) => {
        const pagination = eventElem.querySelectorAll('.progress_bar')
        const activePagin = eventElem.querySelector('.active_bar')

        activePagin.classList.remove('active_bar')
        pagination[indexStrip].classList.add('active_bar')
    }


    const changeItem = (eventElem, indexStrip) => {
        const activeSlide = eventElem.querySelector('.active_touch')
        const slidesEvent = eventElem.querySelectorAll('.track_slids > img')

        activeSlide.classList.remove('active_touch')
        slidesEvent[indexStrip].classList.add('active_touch')

        changePagination(eventElem, indexStrip)
    }

    const generateScroller = () => {

        let dataCounter = 0

        for (let item = 0; item < slides.length; item++) {
            const newSpan = document.createElement('span')

            newSpan.classList.add('wrapper_sect_item')
            newSpan.dataset.index_img = dataCounter++

            ariaBlock.appendChild(newSpan)
        }
    }

    generateScroller()

    ariaBlock.addEventListener('mouseover', (e) => {
        changeItem(e.target.closest('div[name]'), e.target.dataset['index_img'])
    })
}