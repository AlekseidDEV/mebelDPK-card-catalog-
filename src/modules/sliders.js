export const sliders = (id, wrapper) => {
    const slider = document.getElementById(id)
    const slides = slider.querySelectorAll(`${wrapper} > *`)

    let count = 0

    const changeStrip = (slideBar, index) => {
        const strips = slideBar.querySelectorAll('.progress_bar')
        const activeStripe = slideBar.querySelector('.active_bar')

        activeStripe.classList.add('progress_bar')
        activeStripe.classList.remove('active_bar')
        strips[index].classList.add('active_bar')
    }

    const nextSlide = (slider, slides, classActive) => {
        const activeSlide = slider.querySelector(classActive)
        
        ++count

        if(count >= slides.length){
            count = 0
        }

        activeSlide.classList.remove(classActive.slice(1))
        slides[count].classList.add(classActive.slice(1))

        if(id === 'slider-1'|| id === 'slider-2' || id === 'slider-3'){
            const parentEl = slides[count].parentElement.parentElement
            const paragraphAlt = parentEl.querySelector('.pos_char_lest')

            paragraphAlt.textContent = slides[count].alt
        }

        changeStrip(slider.querySelector('.slide_bar'), count)
    }

    const prevSlide = (slider, slides, classActive) => {
        const activeslide = slider.querySelector(classActive)

        --count

        if(count < 0){
            count = slides.length - 1
        }

        activeslide.classList.remove(classActive.slice(1))
        slides[count].classList.add(classActive.slice(1))
        
        if(id === 'slider-1'|| id === 'slider-2' || id === 'slider-3'){
            const parentEl = slides[count].parentElement.parentElement
            const paragraphAlt = parentEl.querySelector('.pos_char_lest')

            paragraphAlt.textContent = slides[count].alt
        }

        changeStrip(slider.querySelector('.slide_bar'), count)
    }


    slider.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.className === "arrow_green_slide_right" || e.target.className  === "arrow_grey_slide_right" || e.target.className  === "arrow_green_card_right") {
            nextSlide(slider, slides, ".active_slide")
        } else if (e.target.className === "arrow_grey_slide_left" || e.target.className  === "arrow_green_slide_left" || e.target.className  === "arrow_green_card_left") {
            prevSlide(slider, slides, ".active_slide")
        }
    })
};