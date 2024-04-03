import {
    createDefended
} from "./createmanager"

export const answerQuestions = () => {
    const linksQuestionsBlock = document.querySelector('.tabs_all_list')
    const tabLinks = document.querySelectorAll('.link_tabs_btn')
    const tabContents = document.querySelectorAll('.tab_info_cont')

    const renderWorker = (target) => {
        const objRandomWorker = createDefended()

        if (target.children.length === 1) {
            target.insertAdjacentHTML('beforeEnd', `
        
        <div class="img_tab_">
        <img src="${objRandomWorker.pathImg}" alt="img" class="worker_tabs_img">
        <p class="name_worker">${objRandomWorker.name}</p>
        <p class="job">
            ${objRandomWorker.jobTitle}
        </p>
        <div class="block_connection__worker">
            <div class="conn_phone">
                <p class="tit_conn">
                    Как связаться:
                </p>
                <p class="tit_phone_conn">
                    ${objRandomWorker.phone}
                </p>
            </div>

            <div class="social_conn">
                <a href="https://api.whatsapp.com/send?phone=89267616799" class="link_wats"></a>
            </div>
        </div>
    </div>
        `)
        }
    }

    const changeTabBlock = (e) => {
        e.preventDefault()

        if (e.target.className === 'link_tabs_btn') {
            tabLinks.forEach((link, index) => {
                if (link === e.target) {
                    renderWorker(tabContents[index])

                    link.classList.add('_active_link')
                    tabContents[index].classList.add("active_tb")

                } else {
                    link.classList.remove('_active_link')
                    tabContents[index].classList.remove("active_tb")
                }
            })
        }
    }

    linksQuestionsBlock.addEventListener('click', changeTabBlock)
}