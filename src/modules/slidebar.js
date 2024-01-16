export const slideBar = (arr) => {

    const addStrip = (element) => {
        
        const countStrip = element.querySelectorAll('.wrapp_items_slides > *').length

        
        const slideBar = element.querySelector('.slide_bar')

        for(let i = 0; i <= countStrip - 1; i++){
            const newStrip = document.createElement('div')
            slideBar.append(newStrip)
        }

        const strips = slideBar.querySelectorAll('div')

        strips.forEach((elem, index) => {
            if(index === 0){
                elem.classList.add('active_bar')
            } else{
                elem.classList.add('progress_bar')
            }
        })
    }

    arr.forEach((id) => {
        const parentElem = document.getElementById(id)

        addStrip(parentElem)
    })
}