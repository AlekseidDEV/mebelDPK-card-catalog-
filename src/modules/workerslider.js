import Splide from '@splidejs/splide'

export const workerSlider = () => {
    const arrowsBlock = document.querySelector('.wrapper_our_slide_arr')
    const progressBar = document.querySelector('.progress_bar_worker')

    const splider = new Splide('#worker-slider', {
        arrows: false,
        width: '1560px',
        pagination: false,
        gap: "75px",
        flickMaxPages: 1,
        flickPower: 300,
        perPage: 4,
        perMove: 1, 
        breakpoints: {
            1310: {
                width: '1300px',
                gap: "30px",
            },
            1195: {
                width: '1190px',
                perPage: 3,
            },
            870: {
                width: '870px',
                perPage: 2,
            }, 
            595: {
                width: '595px',
                perPage: 1,
            }
        }, 
    })

    splider.mount()

    splider.on('mounted move', () => {
        let end = splider.Components.Controller.getEnd() + 1
        let rate = Math.min((splider.index + 1) / end, 1)
        progressBar.style.width = `${rate * 100}%`
    })

    arrowsBlock.addEventListener("click", (e) => {
        if(e.target.className === 'link_slide_our'){
            splider.go('-')
        }else if(e.target.className === 'link_slide_our_right'){
            splider.go('+')
        }
    })
}