import { createDefended } from "./createmanager"

export const answerQuestions = () => {
const linksQuestionsBlock = document.querySelector('.tabs_all_list')
const tabLinks = document.querySelectorAll('.link_tabs_btn')
const tabContents = document.querySelectorAll('.tab_info_cont')


const changeTabBlock = (e) => {
    e.preventDefault()

        if(e.target.className === 'link_tabs_btn'){
            tabLinks.forEach((link, index) => {
                if(link === e.target){
                    const img = tabContents[index].querySelector('.worker_tabs_img')
                    const name = tabContents[index].querySelector('.name_worker')
                    const titleJob = tabContents[index].querySelector('.job')
                    const phone = tabContents[index].querySelector('.tit_phone_conn')
                    const objRandomWorker = createDefended()
                    
                    link.classList.add('_active_link')
                    tabContents[index].classList.add("active_tb")

                    img.src = objRandomWorker.pathImg
                    name.textContent = objRandomWorker.name
                    titleJob.textContent = objRandomWorker.jobTitle
                    phone.textContent = objRandomWorker.phone
                } else{
                    link.classList.remove('_active_link')
                    tabContents[index].classList.remove("active_tb")
                }
            })
        }
}

linksQuestionsBlock.addEventListener('click', changeTabBlock)
}