export class adaptivDesign {
    constructor() {
        this.linkExpan = document.querySelector(".link_expand");
        this.wrappTextBanners = document.querySelector(".wrapp_sub_text_banners");
        this.leftBlockPrice = document.querySelector(".left_cont_price");
        this.adaptStublock = document.querySelector(".adapt_block_stub");
        this.stubImg = document.querySelector(".stub_img_2");
        this.rightContPice = document.querySelector(".right_cont_price");
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
        this.changePriceCalc();
        this.tabsContentChange()
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
