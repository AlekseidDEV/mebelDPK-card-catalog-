import Splide from "@splidejs/splide";

export const sliderAlt = () => {
    const container = document.querySelector('#slider-4')
    const arrowBlock = document.querySelector('.block_arrow_img_fac')
    const altParagraph = document.querySelector('.happ_photo_text')

    const slideAltel = new Splide('#altslider', {
        perPage: 1,
        arrows: false,
        pagination: false,
        fixedHeight: "493px",
        breakpoints:{
            619:{
                fixedHeight: null
            }
        }
    }).mount()

    const changePagin = () => {
        const activeFract = container.querySelector('.active_bar')
        const allFract = container.querySelectorAll('.progress_bar')
        const slides = slideAltel.root.querySelectorAll('.splide__slide')
        
        activeFract.classList.remove('active_bar')
        allFract[slideAltel.index].classList.add('active_bar')
        altParagraph.textContent = slides[slideAltel.index].alt
    }

    arrowBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.className === 'arrow_grey_slide_left'){
            slideAltel.go('-')
            changePagin()
        } else if(e.target.className === 'arrow_grey_slide_right'){
            slideAltel.go('+')
            changePagin()
        }
    })
    slideAltel.on('mounted move', (e) => {
        changePagin()
    })
}