export const sliders = (array) => {
    const bitrixBlock = document.querySelector(".bitrix_cont_zero");

    const slidersState = {}

    const changeStrip = (slideBar, index) => {
        const strips = slideBar.querySelectorAll('.progress_bar')
        const activeStripe = slideBar.querySelector('.active_bar')

        activeStripe.classList.add('progress_bar')
        activeStripe.classList.remove('active_bar')
        strips[index].classList.add('active_bar')

    }

    const nextSlide = (obj, act_slide) => {
        const { slider, slides, count } = obj;

        const activeslide = slider.querySelector(act_slide)

        obj.count++

        if(obj.count >= slides.length){
            obj.count = 0
        }

        changeStrip(slider.querySelector('.slide_bar'), obj.count)

        activeslide.classList.remove(act_slide.slice(1))
        slides[obj.count].classList.add(act_slide.slice(1))
    }

    const prevSlide = (obj, act_slide) => {
        const { slider, slides} = obj;

        const activeslide = slider.querySelector(act_slide)

        obj.count--

        if(obj.count < 0){
            obj.count = slides.length - 1
        }

        changeStrip(slider.querySelector('.slide_bar'), obj.count)

        activeslide.classList.remove(act_slide.slice(1))
        slides[obj.count].classList.add(act_slide.slice(1))
    }


    const startSlide = (arrow, id, wrapper) => {
        const slider = document.getElementById(id)
        const slides = slider.querySelectorAll(`${wrapper} > *`)

        if(!slidersState[id]){
            slidersState[id] = {
                slider,
                slides,
                count : 0
            }
        }

        const sliderState = slidersState[id];

        if (arrow === "arrow_green_slide_right" || arrow  === "arrow_grey_slide_right" || arrow  === "arrow_green_card_right") {
            nextSlide(sliderState, ".active_slide");
        } else if (arrow === "arrow_grey_slide_left" || arrow  === "arrow_green_slide_left" || arrow  === "arrow_green_card_left") {
            prevSlide(sliderState, '.active_slide');
        }
    }



    bitrixBlock.addEventListener("click", (e) => {
        let idSliders = ''

        if(e.target.closest('div[id]') === null){
            idSliders = 'null_id'
        } else{
            e.preventDefault()
            idSliders = e.target.closest('div[id]').id
        }

        array.forEach((id) => {
            if(id === idSliders){
                startSlide(e.target.className, id, '.wrapp_items_slides')
            } else{
                return
            }
        })
    });
};
