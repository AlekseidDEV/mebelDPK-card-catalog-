import Moveable from "moveable";

export const zoomFunc = (image) => {

    const moveable = new Moveable(document.querySelector('.items_big_slides'), {
        target: '.act_trumb_img',
        draggable: true,
        container: document.querySelector('.items_big_slides'),
        clickable: true
    })
    let clicker = false

    if(image === undefined){
        moveable.target = '.act_trumb_img'
    } else{
        moveable.target = image
    }
    
    const zoomImg = (elem) => {
        clicker = !clicker

        if(clicker){
            elem.classList.add('zoomebled')
            elem.style.cursor = 'grab'
        } else{
            elem.classList.remove('zoomebled')
            elem.style.cursor = 'zoom-in'
            elem.style.top = '0'
            elem.style.left = '0'
        }
    }

    moveable.on('click' , (e) => {
        zoomImg(e.target)
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