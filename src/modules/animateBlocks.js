export const animateBlocks = (
    classMattCard,
    greenTit,
    greyTit,
    rallBlock,
    blockTurn,
    rallText,
    blockGet,
    choose,
    discont,
    priceCalc,
    factory,
    sertificate,
    projCard,
    think,
    imgIcons,
    socialLink,
    workerText,
    cardWork,
    tab
) => {

    const titleGreen = document.querySelectorAll(greenTit);
    const titleGrey = document.querySelectorAll(greyTit);

    const arrElems = [
        { elem: document.querySelector(rallText) },
        { elem: document.querySelector(blockGet) },
        { elem: document.querySelector(discont) },
        { elem: document.querySelector(projCard) },
        { elem: document.querySelector(socialLink) },
        { elem: document.querySelector(workerText) },
        { elem: document.querySelector(tab) },
    ];

    const arrElemsCard = [
        { elem: document.querySelector(classMattCard) },
        { elem: document.querySelector(rallBlock) },
        { elem: document.querySelector(blockTurn) },
        { elem: document.querySelector(choose) },
        { elem: document.querySelector(priceCalc) },
        { elem: document.querySelector(factory) },
        { elem: document.querySelector(sertificate) },
        { elem: document.querySelector(think) },
        { elem: document.querySelector(imgIcons) },
        { elem: document.querySelector(cardWork) },
    ];

    const isElementVisible = (element) => {
        const rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    };

    const swimCard = (classbBlock, classElem, time = 400) => {
        const cards = classbBlock.querySelectorAll(classElem);
        
        cards.forEach((card, index) => {
            const delay = time * index;

            setTimeout(() => {
                card.classList.add("card_visible");
            }, delay);
        });
    };

    const heandeElements = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)){
                switch (true) {
                    case entry.target.matches('.wrapper_block_material.swiper-wrapper'):
                        swimCard(entry.target, ".card_material");
                        observer.unobserve(entry.target);
                        break

                    case entry.target.matches('.card_block_ralling.swiper-wrapper'):
                        swimCard(entry.target, ".card_ralling_options");
                        observer.unobserve(entry.target);
                        break

                    case entry.target.matches('.card_block_turn.swiper-wrapper'):
                        swimCard(entry.target, ".card_turn");
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(choose.slice(1)):
                        swimCard(entry.target, ".chose_obs", 50);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(priceCalc.slice(1)):
                        swimCard(entry.target, ".obs_calc", 40);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(factory.slice(1)):
                        swimCard(entry.target, ".obs_factory", 40);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(sertificate.slice(1)):
                        swimCard(entry.target, ".obs_sert", 250);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(think.slice(1)):
                        swimCard(entry.target, ".obs_think", 40);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.classList.contains(imgIcons.slice(1)):
                        swimCard(entry.target, "div", 80);
                        observer.unobserve(entry.target);
                        break

                    case entry.target.id === 'worker-slider':
                        swimCard(entry.target, ".worker_card", 40);
                        observer.unobserve(entry.target);
                        break
                } 
            }
        })
    };

    const heandleSwapBlock = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                entry.target.classList.add("swap_visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleTitle = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                entry.target.classList.add("tit_viss");
                observer.unobserve(entry.target);
            }
        });
    };

    const titlesObserver = new IntersectionObserver(heandleTitle, {
        rootMargin: "50px",
        threshold: 0.9,
    });

    const swapObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.3,
    });

    const cardObserver = new IntersectionObserver(heandeElements,
        {rootMargin: "280px", threshold: 0.3}
    );

    titleGreen.forEach((elem) => {
        titlesObserver.observe(elem);
    });

    titleGrey.forEach((elem) => {
        titlesObserver.observe(elem);
    });

    arrElems.forEach((elem) => {
        swapObserver.observe(elem.elem);
    });

    arrElemsCard.forEach((elem) => {
        cardObserver.observe(elem.elem)
    })
};