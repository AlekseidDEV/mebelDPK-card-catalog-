/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_adaptdesign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/adaptdesign */ \"./src/modules/adaptdesign.js\");\n\r\n\r\n\r\n(0,_modules_adaptdesign__WEBPACK_IMPORTED_MODULE_0__.adaptivDesign)()\n\n//# sourceURL=webpack://mebeldpk/./src/index.js?");

/***/ }),

/***/ "./src/modules/adaptdesign.js":
/*!************************************!*\
  !*** ./src/modules/adaptdesign.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   adaptivDesign: () => (/* binding */ adaptivDesign)\n/* harmony export */ });\nconst adaptivDesign = () => {\r\n\r\n    const gabariteItem = document.querySelector('.blockgabarit')\r\n    const leftBlock = document.querySelector('.left_cont_card')\r\n    const rightBlock = document.querySelector('.right_cont_cad')\r\n    const tizerBlock = document.querySelector('.tizer_sub_char_block')\r\n    const linkExpan = document.querySelector('.link_expand')\r\n    const btnSign = document .querySelector('.btn_sign')\r\n    const textRallBlock = document.querySelector('.card_rall_text_block')\r\n\r\n    const linkExpanClone = document.querySelector('.link_expand').cloneNode(true)\r\n    const clonePriceBlock = document.querySelector('.price_buy_block').cloneNode(true)\r\n\r\n\r\n    const wrappTextBanners = document.querySelector('.wrapp_sub_text_banners')\r\n    const leftBlockPrice = document.querySelector('.left_cont_price')\r\n    const adaptStublock = document.querySelector('.adapt_block_stub')\r\n    const stubImg = document.querySelector('.stub_img_2')\r\n    const rightContPice = document.querySelector('.right_cont_price')\r\n\r\n    \r\n\r\nconst adaptiveFunc = () => {\r\n    if(window.innerWidth <='540'){\r\n        leftBlock.prepend(gabariteItem)\r\n        rightBlock.append(tizerBlock)\r\n        rightBlock.prepend(clonePriceBlock)\r\n        clonePriceBlock.insertAdjacentElement('afterend', btnSign)\r\n        textRallBlock.insertAdjacentElement(\"beforeend\", linkExpanClone)\r\n    } else if(window.innerWidth >='540'){\r\n        rightBlock.prepend(gabariteItem)\r\n        linkExpan.insertAdjacentElement('afterend', tizerBlock)\r\n        rightBlock.append(btnSign)\r\n    } \r\n    \r\n    \r\n    if(window.innerWidth >='540' && rightBlock.contains(clonePriceBlock)){\r\n        rightBlock.removeChild(clonePriceBlock)\r\n    } else if(window.innerWidth >= '540' && textRallBlock.contains(linkExpanClone)){\r\n        textRallBlock.removeChild(linkExpanClone)\r\n    }   \r\n    \r\n\r\n\r\n    if(window.innerWidth <= '532'){\r\n        document.querySelector('.title_sup_mat').innerHTML = `Возможные <br> материалы и цвета -`\r\n        document.querySelector('.title_sub_mat').innerHTML = `выберете наиболее <br> подходящие для вашего дома`\r\n    } else if(window.innerWidth >='532'){\r\n        document.querySelector('.title_sup_mat').innerHTML = `Возможные материалы и цвета`\r\n        document.querySelector('.title_sub_mat').innerHTML = `выберете наиболее подходящие для вашего дома`\r\n    }\r\n\r\n    if(window.innerWidth <= '522'){\r\n        document.querySelector('.tit_catch_choose').innerHTML = `цепляющий итоговый текст `\r\n    } else if(window.innerWidth >= '522'){\r\n        document.querySelector('.tit_catch_choose').innerHTML = `цепляющий <br> итоговый текст `\r\n    }\r\n\r\n    if(window.innerWidth <= '830'){\r\n        leftBlockPrice.appendChild(wrappTextBanners)\r\n        adaptStublock.appendChild(stubImg)\r\n    } else if(window.innerWidth >= '830'){\r\n        rightContPice.appendChild(stubImg)\r\n        rightContPice.appendChild(wrappTextBanners)\r\n    }\r\n\r\n    if(window.innerWidth <= '440'){\r\n        document.querySelector('.title_sert').innerHTML = ` Наша продукция сертифицирована\r\n        по ГОСТ`\r\n    } else if(window.innerWidth >='440'){\r\n        document.querySelector('.title_sert').innerHTML = ` Наша продукция<br> сертифицирована<br>\r\n        по ГОСТ`\r\n    }\r\n}\r\n\r\n    window.addEventListener('resize' , adaptiveFunc)\r\n    window.addEventListener('load' , adaptiveFunc)\r\n}\n\n//# sourceURL=webpack://mebeldpk/./src/modules/adaptdesign.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;