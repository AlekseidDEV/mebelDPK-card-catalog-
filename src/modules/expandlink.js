import { animate } from "./helpers"

export const expandLink = () => {
    const links = document.querySelectorAll('.link_expand')

    let clicker = false


    const expandBlock = (link, dataUrl) => {
        const parentElem = document.querySelector(dataUrl)

        clicker = !clicker
        
        if(clicker){
            link.textContent = 'Скрыть'
            link.classList.add('grey_hide')
            animate({
                duration: 500, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    parentElem.style.height = `${parentElem.clientHeight + progress * (parentElem.scrollHeight - parentElem.clientHeight)}px`
                } 
              })
        } else{
            link.textContent = 'Развернуть'
            link.classList.remove('grey_hide')
            animate({
                duration: 200, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    parentElem.style.height = `${parentElem.scrollHeight - progress * (parentElem.scrollHeight / 2.2)}px`
                } 
              })
        }
    }

    links.forEach((link) => {
        link.addEventListener('click' , (e) => {
            expandBlock(e.target, e.target.dataset.link_block)
        })
    })
}