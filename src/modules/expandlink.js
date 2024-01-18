import { animate } from "./helpers"

export const expandLink = () => {
    const links = document.querySelectorAll('.link_expand')

    let clicker = false


    const expandBlock = (link, dataUrl) => {
        const parentElem = document.querySelector(dataUrl)
        const initialHeight = parentElem.clientHeight

        console.dir(parentElem.clientHeight);

        clicker = !clicker
        
        if(clicker){
            link.textContent = 'Скрыть'
            link.classList.add('grey_hide')
            animate({
                duration: 200, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    // console.log(parentElem.clientHeight + progress * (parentElem.scrollHeight - parentElem.clientHeight));
                    console.log(parentElem.clientHeight + progress * (parentElem.scrollHeight - parentElem.clientHeight));
                } 
              })
        } else{
            link.textContent = 'Развернуть'
            link.classList.remove('grey_hide')
            // funcAnimated()
        }
    }

    links.forEach((link) => {
        link.addEventListener('click' , (e) => {
            expandBlock(e.target, e.target.dataset.link_block)
        })
    })



    // scrollHeight
}