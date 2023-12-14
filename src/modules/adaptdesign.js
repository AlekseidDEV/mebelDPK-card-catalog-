export const adaptivDesign = () => {

    const gabariteItem = document.querySelector('.blockgabarit')
    const leftBlock = document.querySelector('.left_cont_card')
    const rightBlock = document.querySelector('.right_cont_cad')
    const tizerBlock = document.querySelector('.tizer_sub_char_block')
    const linkExpan = document.querySelector('.link_expand')
    const btnSign = document .querySelector('.btn_sign')
    const textRallBlock = document.querySelector('.card_rall_text_block')

    const linkExpanClone = document.querySelector('.link_expand').cloneNode(true)
    const clonePriceBlock = document.querySelector('.price_buy_block').cloneNode(true)


    const wrappTextBanners = document.querySelector('.wrapp_sub_text_banners')
    const leftBlockPrice = document.querySelector('.left_cont_price')
    const adaptStublock = document.querySelector('.adapt_block_stub')
    const stubImg = document.querySelector('.stub_img_2')
    const rightContPice = document.querySelector('.right_cont_price')

    

const adaptiveFunc = () => {
    if(window.innerWidth <='540'){
        leftBlock.prepend(gabariteItem)
        rightBlock.append(tizerBlock)
        rightBlock.prepend(clonePriceBlock)
        clonePriceBlock.insertAdjacentElement('afterend', btnSign)
        textRallBlock.insertAdjacentElement("beforeend", linkExpanClone)
    } else if(window.innerWidth >='540'){
        rightBlock.prepend(gabariteItem)
        linkExpan.insertAdjacentElement('afterend', tizerBlock)
        rightBlock.append(btnSign)
    } 
    
    
    if(window.innerWidth >='540' && rightBlock.contains(clonePriceBlock)){
        rightBlock.removeChild(clonePriceBlock)
    } else if(window.innerWidth >= '540' && textRallBlock.contains(linkExpanClone)){
        textRallBlock.removeChild(linkExpanClone)
    }   
    


    if(window.innerWidth <= '532'){
        document.querySelector('.title_sup_mat').innerHTML = `Возможные <br> материалы и цвета -`
        document.querySelector('.title_sub_mat').innerHTML = `выберете наиболее <br> подходящие для вашего дома`
    } else if(window.innerWidth >='532'){
        document.querySelector('.title_sup_mat').innerHTML = `Возможные материалы и цвета`
        document.querySelector('.title_sub_mat').innerHTML = `выберете наиболее подходящие для вашего дома`
    }

    if(window.innerWidth <= '522'){
        document.querySelector('.tit_catch_choose').innerHTML = `цепляющий итоговый текст `
    } else if(window.innerWidth >= '522'){
        document.querySelector('.tit_catch_choose').innerHTML = `цепляющий <br> итоговый текст `
    }

    if(window.innerWidth <= '830'){
        leftBlockPrice.appendChild(wrappTextBanners)
        adaptStublock.appendChild(stubImg)
    } else if(window.innerWidth >= '830'){
        rightContPice.appendChild(stubImg)
        rightContPice.appendChild(wrappTextBanners)
    }

    if(window.innerWidth <= '440'){
        document.querySelector('.title_sert').innerHTML = ` Наша продукция сертифицирована
        по ГОСТ`
    } else if(window.innerWidth >='440'){
        document.querySelector('.title_sert').innerHTML = ` Наша продукция<br> сертифицирована<br>
        по ГОСТ`
    }
}

    window.addEventListener('resize' , adaptiveFunc)
    window.addEventListener('load' , adaptiveFunc)
}