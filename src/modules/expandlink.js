export const expandLink = () => {
    const links = document.querySelectorAll('.link_expand')

    
    let clicker = false

    const expandBlock = (link, dataUrl) => {
        const parentElem = document.querySelector(dataUrl)
        
        clicker = !clicker

        if(clicker){
            link.textContent = 'Скрыть'
            link.classList.add('grey_hide')
            parentElem.classList.add('expended')
        } else{
            link.textContent = 'Развернуть'
            link.classList.remove('grey_hide')
            parentElem.classList.remove('expended')
        }
    }

    links.forEach((link) => {
        link.addEventListener('click' , (e) => {
            e.preventDefault()

            expandBlock(e.target, e.target.dataset.link_block)
        })
    })
}