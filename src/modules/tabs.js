export const answerQuestions = () => {
    const linksQuestionsBlock = document.querySelector('.tabs_all_list')
    const tabLinks = document.querySelectorAll('.link_tabs_btn')
    const tabContents = document.querySelectorAll('.tab_info_cont ')


    const changeTabs = (e) => {
        e.preventDefault()
        
        if(e.target.closest('.wrapper_links_answ') ){
            tabLinks.forEach((link, index) => {
                if(link === e.target){
                    link.classList.add('_active_link')
                    tabContents[index].classList.add("active_tb")
                } else{
                    link.classList.remove('_active_link')
                    tabContents[index].classList.remove("active_tb")
                }
            })
        }
    }

   linksQuestionsBlock.addEventListener('click', changeTabs)
}