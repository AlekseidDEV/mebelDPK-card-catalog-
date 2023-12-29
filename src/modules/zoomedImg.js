
export const zoomFunc = () => {

    const zoomClickZone = document.querySelector('.items_big_slides')
    const elementDrag = document.querySelector('.act_trumb_img')
    
    let zoomState = false

    elementDrag.draggable = true

    const zoomTransform = () => {
        const elementZoom = document.querySelector('.act_trumb_img')

        zoomState = !zoomState

        if(zoomState){
            elementZoom.classList.add('zoomebled')
        } else{
            elementZoom.classList.remove('zoomebled')
        }
    }

    // console.log(elementDrag.getBoundingClientRect());
    zoomClickZone.addEventListener('click', zoomTransform)
    elementDrag.addEventListener('dragstart', (e) => {
        const elem = document.createElement('div')
        document.body.appendChild(elem)

        e.dataTransfer.setDragImage(f, 500, 100)
    })
}