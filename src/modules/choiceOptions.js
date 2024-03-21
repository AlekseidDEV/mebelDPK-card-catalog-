export const optionsChoice = () => {
    const menuPanel = document.querySelector('.options_list')

    const changePanelMenu = (e, item) => {
        const activeOptions = document.querySelector('.cont_option_act')
        const cloneActiveElem = activeOptions.cloneNode(true)
        const dataValue = item.dataset.socials
        
        const textClickedPan = item.querySelector('p')
        const imgClickedPan = item.querySelector('img')

        activeOptions.innerHTML = ''
        activeOptions.appendChild(imgClickedPan)
        activeOptions.appendChild(textClickedPan)
        item.appendChild(cloneActiveElem)

        item.dataset.socials = activeOptions.dataset.socials
        activeOptions.dataset.socials = dataValue
    }

    menuPanel.addEventListener('click', (e) => {
        e.preventDefault()
        if(menuPanel.contains(e.target)){
            changePanelMenu(e, e.target.closest('div[data-socials]'))
        }
    }, true)
}