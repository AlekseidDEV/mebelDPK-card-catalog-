export const animateBlocks = (classMattCard, greenTit, greyTit) => {
    const cardMaterial = document.querySelector(classMattCard)
    const titleGreen = document.querySelectorAll(greenTit)
    const titleGrey = document.querySelectorAll(greenTit)


    const optionCard = {
        rootMargin: '50px',
        threshold: 0.6
    }

    const optionGreenTit = {
        rootMargin: '50px',
        threshold: 0.9
    }

    const optionGreyTit = {
        rootMargin: '50px',
        threshold: 0.9
    }

    const swimCard = () => {
        const cards = cardMaterial.querySelectorAll('.card_material')

        cards.forEach((card, index) => {
            const delay = 400 * index

            setTimeout(() =>{
               card.classList.add('card_visible')
            }, delay)
        })
    }


    const heandlerCardAnime = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                swimCard('.card_material')
                observer.unobserve(entry.target)
            }
        })
    }

    const heandlGreenTit = (entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('green_tit_viss')
                observer.unobserve(entry.target)
            }
        })
    }

    const heandleGreyTit = () => {
        
    }
 

    const cardObserver = new IntersectionObserver(heandlerCardAnime, optionCard)
    const titleGreenObserver = new IntersectionObserver(heandlGreenTit, optionGreenTit)
    const greyTit = new IntersectionObserver(heandleGreyTit, optionGreyTit)

    cardObserver.observe(cardMaterial)
    titleGreen.forEach((elem) => {
        titleGreenObserver.observe(elem)
    })
}