import { mobileTabs } from "./mobiletabs";
import { answerQuestions } from "./tabs";
import { projectSwip } from "./projectswipe";
import { mouseSlider } from "./mouseslider";
import { animateBlocks } from "./animateBlocks";

export class adaptivDesign {
    constructor() {
        this.gabariteItem = document.querySelector(".blockgabarit");
        this.leftBlock = document.querySelector(".left_cont_card");
        this.rightBlock = document.querySelector(".right_cont_cad");
        this.tizerBlock = document.querySelector(".tizer_sub_char_block");
        this.linkExpan = document.querySelector(".link_expand");
        this.btnSign = document.querySelector(".btn_sign");
        this.clonePriceBlock = document.querySelector(".price_buy_block").cloneNode(true);
        this.wrappTextBanners = document.querySelector(".wrapp_sub_text_banners");
        this.leftBlockPrice = document.querySelector(".left_cont_price");
        this.adaptStublock = document.querySelector(".adapt_block_stub");
        this.stubImg = document.querySelector(".stub_img_2");
        this.rightContPice = document.querySelector(".right_cont_price");
        this.mouseSliders = document.querySelectorAll('.mouseSlider')
        this.allsmalTitle = document.querySelectorAll('.grey_title')
        this.allBigTitle = document.querySelectorAll('.green_title')
        this.allBlocks = document.querySelectorAll('.card_material_animate')
        this.swapBlock = document.querySelectorAll('.block_swap_dowm')

        this.delMat = document.querySelector('#delMat')
        this.delTurn = document.querySelector('#turnDel')
        this.delChoose = document.querySelector('#chooDel')
        this.delRall = document.querySelector('#rallDel')
    }

    adaptCard = () => {
        if (window.innerWidth <= "540") {
            this.leftBlock.prepend(this.gabariteItem);
            this.rightBlock.append(this.tizerBlock);
            this.rightBlock.prepend(this.clonePriceBlock);
            this.clonePriceBlock.insertAdjacentElement("afterend", this.btnSign);
        } else if (window.innerWidth >= "540") {
            this.rightBlock.prepend(this.gabariteItem);
            this.linkExpan.insertAdjacentElement("afterend", this.tizerBlock);
            this.rightBlock.append(this.btnSign);
        }
    }

    removeNodes() {
        if (window.innerWidth >= "540" && this.rightBlock.contains(this.clonePriceBlock)) {
            this.rightBlock.removeChild(this.clonePriceBlock);
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

    tabsContentChange(){
        const linkBlockWrappers = document.querySelectorAll('.wrapper_links_answ')
        const allContentTab = document.querySelectorAll('.tab_info_cont')

        const tabContBlock = document.querySelector(".container_answer")
        
            if(window.innerWidth <= 575){
                for(let i = 0; i <= allContentTab.length - 1; i++){
                    linkBlockWrappers[i].append(allContentTab[i])
                }
            } else{
                for(let i = 0; i <= allContentTab.length - 1; i++){
                    if(!tabContBlock.contains(allContentTab[i])){
                        linkBlockWrappers[i].removeChild(allContentTab[i])
                        tabContBlock.appendChild(allContentTab[i])
                    }
                }
            }

    }

    adaptiveFunc = () => {
        this.adaptCard()
        this.removeNodes();
        this.changeText();
        this.changePriceCalc();
        this.tabsContentChange()



        if(window.innerWidth <= 575){
            mobileTabs()
        } else{
            answerQuestions()
        }

        if(window.innerWidth <= 800){
            projectSwip()
        }

        if(window.innerWidth > 800){
            this.mouseSliders.forEach((slider) => {
                mouseSlider(slider)
            })
        }

        if(window.innerWidth >= 850){
            animateBlocks(
                '.wrapper_block_material', 
                '.green_title', '.grey_title', 
                '.card_block_ralling', 
                '.card_block_turn', 
                '.card_rall_text_block', 
                '.get_catalog_block ', 
                '.block_choose_us', 
                '.card_block_disc', 
                '.price_calc_block', 
                '.block_cont_factory', 
                '.wrapper_block_sertif', 
                '.anim_swap', 
                '.wrapper_cont_think', 
                '.block_img_up', 
                '.block_social_link',
                '.wrap_text', 
                '.block_card_work',
                '.block_tab_cont'
                )
        } else {
            this.allBlocks.forEach((elem) => {
                elem.classList.remove('card_material_animate')
            })
    
            this.allBigTitle.forEach((elem) => {
                elem.classList.remove('green_title')
            })
    
            this.allsmalTitle.forEach((elem) => {
                elem.classList.remove('grey_title')
            })
    
            this.swapBlock.forEach((elem) => {
                elem.classList.remove('block_swap_dowm')
            })
        }
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
        window.addEventListener("resize",this.hendlerAdaptFunc(this.adaptiveFunc, 550));
    }
}
