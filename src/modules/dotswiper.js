export const generateDot = () => {
    const swipers = document.querySelectorAll('.container_osnov .cont_splider')

        const addDots = (slides, dots) => {
        for (let i = 0; i <= slides.length - 1; i++) {
            const newDot = document.createElement('span')
            dots.append(newDot)
        }

        const dotsItem = dots.querySelectorAll('span')

        dotsItem.forEach((elem, index) => {
            if (index === 0) {
                elem.classList.add('dot', "dotActive")
            } else {
                elem.classList.add('dot')
            }

        })
    }

    swipers.forEach((swip) => {
        const allSlides = swip.querySelectorAll('.splide__slide')
        const dotBlock = swip.querySelector('.dots_wrapper')


        addDots(allSlides, dotBlock)
    })
}