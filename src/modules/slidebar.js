export const slideBar = (arr) => {

    const addStrip = (element) => {
        const countStrip = element.querySelectorAll('img').length

        const slideBar = element.querySelector('.slide_bar')

        for(let i = 0; i <= countStrip - 1; i++){
            const newStrip = document.createElement('div')
            slideBar.append(newStrip)
        }

        const strips = slideBar.querySelectorAll('div')

        strips.forEach((elem, index) => {
            if(index === 0){
                elem.classList.add('active_bar')
                elem.classList.add('progress_bar')
            } else{
                elem.classList.add('progress_bar')
            }
        })
    }

    arr.forEach((id) => {
        const parentElem = document.querySelector(`#${id}`)

        addStrip(parentElem)
    })
}