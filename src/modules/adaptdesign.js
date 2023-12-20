export class adaptivDesign {
    constructor() {
        this.gabariteItem = document.querySelector(".blockgabarit");
        this.leftBlock = document.querySelector(".left_cont_card");
        this.rightBlock = document.querySelector(".right_cont_cad");
        this.tizerBlock = document.querySelector(".tizer_sub_char_block");
        this.linkExpan = document.querySelector(".link_expand");
        this.btnSign = document.querySelector(".btn_sign");
        this.textRallBlock = document.querySelector(".card_rall_text_block");
        this.linkExpanClone = document.querySelector(".link_expand").cloneNode(true);
        this.clonePriceBlock = document.querySelector(".price_buy_block").cloneNode(true);
        this.wrappTextBanners = document.querySelector(".wrapp_sub_text_banners");
        this.leftBlockPrice = document.querySelector(".left_cont_price");
        this.adaptStublock = document.querySelector(".adapt_block_stub");
        this.stubImg = document.querySelector(".stub_img_2");
        this.rightContPice = document.querySelector(".right_cont_price");
    }

    adaptCard = () => {
        if (window.innerWidth <= "540") {
            this.leftBlock.prepend(this.gabariteItem);
            this.rightBlock.append(this.tizerBlock);
            this.rightBlock.prepend(this.clonePriceBlock);
            this.clonePriceBlock.insertAdjacentElement("afterend", this.btnSign);
            this.textRallBlock.insertAdjacentElement("beforeend", this.linkExpanClone);
        } else if (window.innerWidth >= "540") {
            this.rightBlock.prepend(this.gabariteItem);
            this.linkExpan.insertAdjacentElement("afterend", this.tizerBlock);
            this.rightBlock.append(this.btnSign);
        }
    }

    removeNodes() {
        if (window.innerWidth >= "540" && this.rightBlock.contains(this.clonePriceBlock)) {
            this.rightBlock.removeChild(this.clonePriceBlock);
        } else if (window.innerWidth >= "540" && this.textRallBlock.contains(this.linkExpanClone)) {
            this.textRallBlock.removeChild(this.linkExpanClone);
        }
    }

    changeText() {
        if (window.innerWidth <= "532") {
            document.querySelector(".title_sup_mat").innerHTML = `Возможные <br> материалы и цвета -`;
            document.querySelector(".title_sub_mat").innerHTML = `выберете наиболее <br> подходящие для вашего дома`;
        } else if (window.innerWidth >= "532") {
            document.querySelector(".title_sup_mat").innerHTML = `Возможные материалы и цвета`;
            document.querySelector(".title_sub_mat").innerHTML = `выберете наиболее подходящие для вашего дома`;
        }

        if (window.innerWidth <= "522") {
            document.querySelector(".tit_catch_choose").innerHTML = `цепляющий итоговый текст `;
        } else if (window.innerWidth >= "522") {document.querySelector(".tit_catch_choose").innerHTML = `цепляющий <br> итоговый текст `;
        }

        if (window.innerWidth <= "440") {
            document.querySelector(".title_sert").innerHTML = ` Наша продукция сертифицирована по ГОСТ`;
        } else if (window.innerWidth >= "440") {
            document.querySelector(".title_sert").innerHTML = ` Наша продукция<br> сертифицирована<br>по ГОСТ`;
        } else if (window.innerWidth >= "310") {
            document.querySelector(".title_sert").innerHTML = ` Наша продукция<br> сертифицирована<br>по ГОСТ`;
        }
    }

    changePriceCalc() {
        if (window.innerWidth <= "830") {
            this.leftBlockPrice.appendChild(this.wrappTextBanners);
            this.adaptStublock.appendChild(this.stubImg);
        } else if (window.innerWidth >= "830") {
            this.rightContPice.appendChild(this.stubImg);
            this.rightContPice.appendChild(this.wrappTextBanners);
        }
    }

    adaptiveFunc = () => {
        this.adaptCard()
        this.removeNodes();
        this.changeText();
        this.changePriceCalc();
    }

    hendlerAdaptFunc(func, ms) {
        let timeOut;

        return function () {
            clearTimeout(timeOut);
            timeOut = setTimeout(func, ms);
        };
    }

    init() {
        

        window.addEventListener("load", this.adaptiveFunc);
        window.addEventListener("resize",this.hendlerAdaptFunc(this.adaptiveFunc, 250));
    }
}
