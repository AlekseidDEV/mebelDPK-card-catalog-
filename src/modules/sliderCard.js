export const sliderCard = () => {
    const slides = document.querySelectorAll('.slide_item')
    const imgCenter = document.querySelector('.center_img_slide')
    const slideBar = document.getElementById('cardBar')

    let counter = 0

    const addStripSlides = () => {
        for(let i = 0; i <= slides.length - 1; i++){
             const newStrip = document.createElement('div')
             slideBar.append(newStrip)
        }

        const strips = slideBar.querySelectorAll('div')

        strips.forEach((elem, index) => {
            if(index === 0){
                elem.classList.add('active_bar')
            } else{
                elem.classList.add('progress_bar')
            }
        })
    }

    const changeMainSlied = (elem) => {
        const urlNew = elem.getAttribute('src')
        imgCenter.src = urlNew
    }

    const changeBar = (indexStrip) => {
        const allStrips = slideBar.querySelectorAll('div')
        const activeStrip = slideBar.querySelector('.active_bar')



        if(activeStrip){
            activeStrip.classList.remove('active_bar')
            activeStrip.classList.add('progress_bar')
        }

        if(allStrips[indexStrip]) allStrips[indexStrip].classList.add('active_bar')
        counter = indexStrip
    }

    const changeTrambnails = (target, curentSlide, count) =>{

        slides.forEach((slide, index) => {
            if(slide === target){
                curentSlide.classList.remove('active')
                curentSlide.classList.add('not_active')
                target.classList.remove('not_active')
                target.classList.add('active')
               

                changeBar(count || index)
            }
        })
        changeMainSlied(target.querySelector('img'))
    }

    const prevSlide = () => {
        counter--

        const strips = slideBar.querySelectorAll('div')
        const activeItem = document.querySelector('.active')

        if(counter < 0){
            counter = strips.length - 1
        }

        changeTrambnails(slides[counter],activeItem, counter)
    }

    const nextSlide = () => {
        const strips = slideBar.querySelectorAll('div')
        const activeItem = document.querySelector('.active')
        
        counter++
        
        if(counter >= strips.length){
            counter = 0
        }

        changeTrambnails(slides[counter],activeItem, counter)
    }

    const swithSlides = (e) => {
        e.preventDefault()
        
        if(e.target.className === 'arrow_grey_slide_left'){
           prevSlide()
        } else if(e.target.className === 'arrow_grey_slide_right'){
            nextSlide()
        }
    }


    addStripSlides()

    document.querySelector('.slider_block').addEventListener('click', (e) => {
        if(e.target.closest('.slide_item')){
            changeTrambnails(e.target, document.querySelector('.active'))
        } else if(e.target.matches('.arrow_grey_slide_left, .arrow_grey_slide_right')){
            swithSlides(e)
        }
    })
}