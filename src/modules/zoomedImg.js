
export const zoomFunc = () => {

    const zoomClickZone = document.querySelector('.items_big_slides')
    const elementDrag = document.querySelector('.act_trumb_img')
    
    let zoomState = false

    elementDrag.draggable = true

    const zoomTransform = () => {
        const elementZoom = document.querySelector('.act_trumb_img')

        zoomState = !zoomState

        if(zoomState){
            elementZoom.style.transform = 'scale(1.6)'
        } else{
            elementZoom.style.transform = 'scale(1)'
        }
    }


    zoomClickZone.addEventListener('click', zoomTransform)
    zoomClickZone.addEventListener('mousedown', () => {
        console.log("test");
    })
}