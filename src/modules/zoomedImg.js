import Moveable from "moveable";

export const zoomFunc = () => {
    const zoneAnimate = document.querySelector('.items_big_slides')

    const moveable = new Moveable(document.querySelector('.items_big_slides'), {
        target: '',
        draggable: true,
        container: document.querySelector('.items_big_slides'),
    })

    let clicker = false


    const zoomImg = (e) => {
        

        clicker = !clicker

        
        if(clicker){
            e.target.classList.add('zoomebled')
            e.target.style.cursor = 'grab'
        } else{
            e.target.classList.remove('zoomebled')
            e.target.style.cursor = 'zoom-in'
        }
    }

    zoneAnimate.addEventListener('click', zoomImg)
  

    zoneAnimate.addEventListener('mouseover', (e) => {
        if(e.target.matches('.act_trumb_img')){
            moveable.target = e.target
        }
    })


    moveable.on('drag', ({target,  left, top}) => {
        target.style.left = `${left}px`;
        target.style.top = `${top}px`;
        target.style.cursor = 'grabbing'
    })


    moveable.on('dragEnd', ({target}) => {
        target.style.cursor = 'grab'
    })
}