import { createDefended } from "./createmanager"

export const mobileTabs = () => {
    const linkBlock = document.querySelector('.tabs_all_list')
    const tabLinks = document.querySelectorAll('.link_tabs_btn')
    const tabContents = document.querySelectorAll('.tab_info_cont ')
    
    const activeLink = document.querySelector('._active_link')
    const activeTab = document.querySelector('.active_tb')

    if(activeLink || activeTab){
            activeLink.classList.remove('_active_link')
            activeTab.classList.remove('active_tb')
    } else{
        return
    }

    const changeTabs = (e) => {
        e.preventDefault()
        if(e.target.closest('.wrapper_links_answ')){
            tabLinks.forEach((link, index) => {
                if(link === e.target){
                
                    const img = tabContents[index].querySelector('.mobile_tit_block img')
                    const name = tabContents[index].querySelector('.mob_name_dafend')
                    const phone = tabContents[index].querySelector('.mob_tel_defend')
                    const objRandomWorker = createDefended()
                    
                    tabContents[index].style.maxHeight = `${tabContents[index].scrollHeight}px`

                    img.src = objRandomWorker.pathImg
                    name.textContent = objRandomWorker.name
                    phone.textContent = objRandomWorker.phone
                } else if(!e.target.closest('.text_tab_')){
                    tabContents[index].style.maxHeight = '0px'
                }
            })
        }
    }

    linkBlock.addEventListener('click', changeTabs)
}