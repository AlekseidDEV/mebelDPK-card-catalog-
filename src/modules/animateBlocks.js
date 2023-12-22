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
    const cardMaterial = document.querySelector(classMattCard);
    const titleGreen = document.querySelectorAll(greenTit);
    const titleGrey = document.querySelectorAll(greyTit);
    const blockRall = document.querySelector(rallBlock);
    const turnBlock = document.querySelector(blockTurn);
    const textRall = document.querySelector(rallText);
    const getBlock = document.querySelector(blockGet);
    const blockChoose = document.querySelector(choose);
    const discontBlock = document.querySelector(discont);
    const priceCalcBlock = document.querySelector(priceCalc);
    const factoryBlock = document.querySelector(factory);
    const sertBlock = document.querySelector(sertificate);
    const cardProj = document.querySelector(projCard);
    const thinBlock = document.querySelector(think);
    const imgBlocks = document.querySelector(imgIcons);
    const blockLinks = document.querySelector(socialLink);
    const textWork = document.querySelector(workerText);
    const workCard = document.querySelector(cardWork);
    const tabBlock = document.querySelector(tab);

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

    const heandlerCardAnime = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(cardMaterial, ".card_material");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandlGreenTit = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                entry.target.classList.add("green_tit_viss");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleGreyTit = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                entry.target.classList.add("grey_viss_tit");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleRallCard = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(blockRall, ".card_ralling_options");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleTurnCard = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(turnBlock, ".card_turn");
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleSwapBlock = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                entry.target.classList.add("swap_visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const handleChose = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(blockChoose, "div", 50);
                observer.unobserve(entry.target);
            }
        });
    };

    const heandlePriceCalc = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(priceCalcBlock, "div", 40);
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleFactory = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(factoryBlock, "div", 40);
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleSert = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(sertBlock, "div", 250);
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleThin = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(thinBlock, "div", 40);
                observer.unobserve(entry.target);
            }
        });
    };

    const heandleImg = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(imgBlocks, "div", 150);
                observer.unobserve(entry.target);
            }
        });
    };

    const handleCardWork = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting || isElementVisible(entry.target)) {
                swimCard(workCard, "div", 40);
                observer.unobserve(entry.target);
            }
        });
    };

    const cardObserver = new IntersectionObserver(heandlerCardAnime, {
        rootMargin: "240px",
        threshold: 0.3,
    });
    const titleGreenObserver = new IntersectionObserver(heandlGreenTit, {
        rootMargin: "50px",
        threshold: 0.9,
    });
    const greyTitObserver = new IntersectionObserver(heandleGreyTit, {
        rootMargin: "50px",
        threshold: 0.9,
    });
    const rallCardObserver = new IntersectionObserver(heandleRallCard, {
        rootMargin: "240px",
        threshold: 0.3,
    });
    const turnCardObserver = new IntersectionObserver(heandleTurnCard, {
        rootMargin: "50px",
        threshold: 0.6,
    });

    const rallTextObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.5,
    });

    const getBlockObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.1,
    });

    const chooseObserver = new IntersectionObserver(handleChose, {
        rootMargin: "280px",
        threshold: 0.4,
    });
    const discontBlockObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "240px",
        threshold: 0.2,
    });
    const priceCalcObserver = new IntersectionObserver(heandlePriceCalc, {
        rootMargin: "50px",
        threshold: 0.3,
    });
    const factoryBlockObserv = new IntersectionObserver(heandleFactory, {
        rootMargin: "60px",
        threshold: 0.4,
    });
    const sertObserver = new IntersectionObserver(heandleSert, {
        rootMargin: "50px",
        threshold: 0.2,
    });
    const projObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.3,
    });

    const thinObserver = new IntersectionObserver(heandleThin, {
        rootMargin: "50px",
        threshold: 0.3,
    });

    const imgObserver = new IntersectionObserver(heandleImg, {
        rootMargin: "50px",
        threshold: 0.3,
    });
    const linkObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.6,
    });

    const textWorkObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.3,
    });
    const workCardObserver = new IntersectionObserver(handleCardWork, {
        rootMargin: "100px",
        threshold: 0.2,
    });
    const tabObserver = new IntersectionObserver(heandleSwapBlock, {
        rootMargin: "50px",
        threshold: 0.4,
    });

    cardObserver.observe(cardMaterial);
    titleGreen.forEach((elem) => {
        titleGreenObserver.observe(elem);
    });
    titleGrey.forEach((elem) => {
        greyTitObserver.observe(elem);
    });
    rallCardObserver.observe(blockRall);
    turnCardObserver.observe(turnBlock);
    rallTextObserver.observe(textRall);
    getBlockObserver.observe(getBlock);
    chooseObserver.observe(blockChoose);
    discontBlockObserver.observe(discontBlock);
    priceCalcObserver.observe(priceCalcBlock);
    factoryBlockObserv.observe(factoryBlock);
    sertObserver.observe(sertBlock);
    projObserver.observe(cardProj);
    thinObserver.observe(thinBlock);
    imgObserver.observe(imgBlocks);
    linkObserver.observe(blockLinks);
    textWorkObserver.observe(textWork);
    workCardObserver.observe(workCard);
    tabObserver.observe(tabBlock);
};
