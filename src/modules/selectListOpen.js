import { animate } from "./helpers"

export const selectMenu = () =>{
    const dropDownArrow = document.querySelector('.dropp_down')
    
    const options = document.querySelector('.options')

    let clicker = false

    const dropMenu = (e) => {
        clicker = !clicker

        const listOption = document.querySelector('.options_list')

        let initialOpacity = 1
        let initialtransform = 180
        let initialTop = 40

        if(clicker){
            listOption.style.visibility = 'visible'
            animate({
                duration: 200, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    dropDownArrow.style.transform = `rotate(${progress * -180}deg)`
                    listOption.style.top = `${progress * 53}px`
                    listOption.style.opacity = `${progress}`
                } 
              })
        } else {
            animate({
                duration: 150, 
                timing(timeFraction){
                  return timeFraction
                },
                draw(progress){
                    listOption.style.opacity = `${initialOpacity - progress}`
                    dropDownArrow.style.transform = `rotate(${initialtransform - progress * -180}deg)`
                } 
              })
              listOption.style.visibility = 'hidden'
        }
    }

    options.addEventListener('click', (e) => {

        if(options.contains(e.target)){
            dropMenu()
        } else{
            return
        }
    })
}
