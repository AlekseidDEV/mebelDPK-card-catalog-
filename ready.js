// $( document ).ready(function(){

// })

// <?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

// $this->setFrameMode(true);

// use \Bitrix\Main\Localization\Loc;

// $this->addExternalCss('/bitrix/templates/aspro_max/components/bitrix/catalog.element/main/custom.css');
// $this->addExternalJS("/bitrix/templates/aspro_max/components/bitrix/catalog.element/main/custom.js");
// ?>


workerImgsSlider .forEach((item) => {
    const srcItem = item.dataset["src"]

    console.log(srcItem);

    if(item.classList.length > 1){
        item.classList = ''

    }
})


mouseImgsSlider.forEach((item) => {
    const srcItem = item.dataset["src"]

    
    if(item.classList.length > 0){
        item.classList = ''
	    item.src = srcItem
    }
})