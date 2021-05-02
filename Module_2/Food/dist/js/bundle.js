/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/js/modules/calc.js":
/*!*********************************!*\
  !*** ./dist/js/modules/calc.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
     // Calc

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio;

    //We'll check those values from locaSt, if they are in localSt we initialize them to variables
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }  
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }  
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '0';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round(( 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    function getStaticInformation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio')); //localStorace remembers what ratio, even after refreshing the page
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));//localSt remembers sex of person
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
            calcTotal();
            });
        });
    }

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            } 
            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc); // changed commonJS to es6 module structure

/***/ }),

/***/ "./dist/js/modules/cards.js":
/*!**********************************!*\
  !*** ./dist/js/modules/cards.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./dist/js/services/services.js");

function cards() {
    // Using Classes for cards 
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) { //We do not know how many classes we'll add to style
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 1; //We can change it, example if mney is in USD
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.changeToUAH();
        }
        
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0) {
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = ` 
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        }
    }
  
    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/menu")
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => { // item = element in array of objs was obj itself so we used object destructuring EX: {img, altimg, title, descr, price} = arrElem;
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //new MenuCard(obj.img, obj.altImg).render(); we could write like this, but it is not effcnt so we use object destructuring
            });
        });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards); // changed commonJS to es6 module structure


/***/ }),

/***/ "./dist/js/modules/forms.js":
/*!**********************************!*\
  !*** ./dist/js/modules/forms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./dist/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./dist/js/services/services.js");


function forms(formSelector, modalTimerId) {
    //Forms  

    const forms =  document.querySelectorAll(formSelector); //We are getting all forms

    const message = {
        loading: 'img/forms/spinner.svg',
        success: 'Thank you! We will contact you soon!',
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item); 
    });


    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading; // We could set src with setAttribute
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;// Adding styled classes like .show is the best way
            form.insertAdjacentElement('afterend', statusMessage);
             
            const formData = new FormData(form); // looks like JSON but It is object FormData
            //Most important thing is:
            //There has to be attribute name, js can't find form, so you've to check it

            //!!If we need to send data as json file, we need headers!!
            // request.setRequestHeader('Content-type', 'multipart/form-data'); //json
            // FormData object is specific object, so we cannot just turn it to JSON, as simple objects //json

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // starting debug from deepest bracket: turned formdata to arr -> turned arr to classic (simple) obj -> turned obj to JSON.


            // fetch('server.php', {
            //     method: "POST",
            //     headers:{ 
            //         "Content-type": "multipart/form-data"
            //     },
            //     body: JSON.stringify(object) //Converts an object to JSON //json //JSON object is sent not formData
            // })
            (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);  
                showThanksModal(message.success);
                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset(); //Deletes text after sending it to server or We can clear their values incrementally, It is same 
            });
        });
    }
    // Styling ater post of message, with JS
    // We wanna took just wraper (.modal__dialog) of the previous modal, and just replace it with 
    // texts such as succesc fail or etc
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        //We are hiding this element, before showing modal 
        prevModalDialog.classList.add('hide');// content is hidden, not deleted - in case user wants to access IT
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModal)('.modal', modalTimerId); //opens modal

        // Creating new THANKS content
        const thanksModal = document.createElement('div');// Wrapper is created inside main .modal class
        thanksModal.classList.add('modal__dialog'); //Remember, previous .modal__dialog class is hidden
        // and we are creating another new  .modal__dialog class inside main modal class
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModal)('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./dist/js/modules/modal.js":
/*!**********************************!*\
  !*** ./dist/js/modules/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "openModal": () => (/* binding */ openModal)
/* harmony export */ });
//DRY don't repeat yourself, code was written 2, so copied, because of this we created fucntion
function openModal(modalSelector, modalTimerID) {
    const modal = document.querySelector(modalSelector);//  '.modal'

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerID);
    if (modalTimerID) {
        clearInterval(modalTimerID); //Deletes an interval if user is already opened a modal
    }   
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);//  '.modal'

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; //browser automatically knows what to do
}

function modal(triggerSelector, modalSelector, modalTimerID) { //Adding args, to make our module reusable: to use open and close Modal funcs
    // Modal
// All variables are taken
    const modalTrigger = document.querySelectorAll(triggerSelector), // [data-modal]'
          modal = document.querySelector(modalSelector);//  '.modal'


    modalTrigger.forEach( btn =>
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerID)) // if we write like these: openModal(modalSelector), it will call after func immideatly after adding ev.listener so we have to wrap func like this: () => openModal(modalSelector), then func will be called when user will "click" on btn 
    );
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector, modalTimerID);    
        }
    });

    // Event when key (esc) is pressed, modal is closed

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')){ //If modal is open
            closeModal(modalSelector, modalTimerID);
        }
    });
    // With toggle function
    // modalTrigger.forEach((item) => { // adding events to all triggers to open modal
    //     item.addEventListener('click', () => {
    //         modal.classList.toggle('show');
    //         document.body.style.overflow = 'hidden';
    //     });
    // });
    
    // modalCloseBtn.addEventListener('click', () => { // adding events to all triggers to close modal
    //     modal.classList.toggle('show');
    //     document.body.style.overflow = ''; //browser automatically knows what to do
    // });

    // Task is when user scrolls till some point modal pops up


    //If user scrolls till end, then modal appears

    function showModalByScroll() {
        // user-scrolled-part      height-that-is-visible-to-client        whole-height-of-doc
        if(window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerID);
            window.removeEventListener('scroll', showModalByScroll); // after event is used it is removed but modal is still shown only event is removed
        }
    }
    window.addEventListener('scroll', showModalByScroll); // We cannot put here , {once: true} as 3RD arg because we added event to window so scroll changes in window
    // much time so when usemodalSelectorr starts scrolling and ends it event is triggered once and deleted

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);
 //Exported funcs, to use them in another script


/***/ }),

/***/ "./dist/js/modules/slider.js":
/*!***********************************!*\
  !*** ./dist/js/modules/slider.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
   
    let slideIndex = 1; //Index to manipulate slides
    let offset = 0; // offset to move slides

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper), // parent of a window 
          slidesField = document.querySelector(field), // window to show slides
          width = window.getComputedStyle(slidesWrapper).width; // width of the parentWindow

    if (slides.length < 10) { // If length of slide is less than 10, then we add 0
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // If length of slide is more than 10, then we donot add 0
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%'; //In our case it is 400%
    slidesField.style.display = 'flex'; // display:flex helps us to make elements in a row
    slidesField.style.transition = '.5s all'; //smooth transition

    slidesWrapper.style.overflow = 'hidden'; // we hide another slides, and move slidesFiel
    


    slides.forEach(slide => {
        slide.style.width = width; //We give the same width for all images to make them same
    });

    slider.style.position = 'relative'; // relatively to slider we move dots

    const indicators = document.createElement('ol'),
          dots = []; // arr to save all dots here and manipulate them

    indicators.classList.add('carousel-indicators');

    indicators.style.cssText = `
        position: absolute; 
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators); //appending dots to slider container

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li'); // Creating li elements: ol > li
        dot.setAttribute('data-slide-to', i + 1); // setting attributes to use them in event delegation
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1; //highlighting first dot 
        }

        indicators.append(dot); // appending  li dots in indicators - ol parent
        dots.push(dot); // pushing li dots to dots[] arr
    }

    const onlyNum = (str) => +str.replace(/\D/g, ''); //Return only number part of str
    
    next.addEventListener('click', () => {
        // offset = 650 * 3 == 1950, when offset is at the end, we change it to first slide
        if (offset == onlyNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += onlyNum(width); // when next is clicked offset grows
        } // so it will move to left to -X, by making slides to pass next after another
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) { // whenever index is at the end, it returns to first slide 
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //indicators
        dots.forEach(dot => dot.style.opacity = '.5'); //all dots are unhighlightened

        dots[slideIndex - 1].style.opacity = 1; // after next is pressed next dot is highlightened

    });

    prev.addEventListener('click', () => {
        if (offset == 0) { // when offset is at 0 - before 1St slide ->
            offset = onlyNum(width) * (slides.length - 1); // it will move to the last slide
        } else {
            offset -= onlyNum(width); // offset decreases so 
        }
        slidesField.style.transform = `translateX(-${offset}px)`; // field is moved to right, 
        // which imitates elements moving left

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //indicators
        dots.forEach(dot => dot.style.opacity = '.5');

        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // getting target number from 'data-slide-to'
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo; // slideTo givex index num to move slide
            offset = onlyNum(width) * (slideTo - 1); 
            // offsetting slide by multiplying width of one slide to the number of slide we are headed
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./dist/js/modules/tabs.js":
/*!*********************************!*\
  !*** ./dist/js/modules/tabs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
     // Tabs 
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {

        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) { //Default Argument, if we do not have params i is 0
        // tabsContent[i].style.display = 'block'; //inline styles are not popular
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) { //If tab item found
            tabs.forEach((item, i) => { // loop through and find if clicked elem is the same as
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
} 

// Using ES6 syntax

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./dist/js/modules/timer.js":
/*!**********************************!*\
  !*** ./dist/js/modules/timer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer(id, deadline) {
    function getTimeRemaining(endtime) {
         const t = Date.parse(endtime) - Date.parse(new Date()),
               days = Math.floor(t / (1000 * 60 * 60 * 24)),
               hours = Math.floor((t / (1000 * 60 * 60) % 24)),
               minutes = Math.floor((t / (1000 * 60)) % 60),
               seconds = Math.floor( (t / 1000) % 60);
 
         return {
             'total': t,
             'days': days,
             'hours': hours,
             'minutes': minutes,
             'seconds': seconds
         };
     }
 
     function getZero(num) {
         if (num >= 0 && num < 10) {
             return `0${num}`;
         } else {
             return num;
         }
     }
 
     function setClock(selector, endtime) {
         const timer =  document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock,1000);
 
         updateClock();
 
         function updateClock() {
             const t = getTimeRemaining(endtime);
 
             days.innerHTML = getZero(t.days);
             hours.innerHTML = getZero(t.hours);
             minutes.innerHTML = getZero(t.minutes);
             seconds.innerHTML = getZero(t.seconds);
 
             if (t.total <= 0) {
                 clearInterval(timeInterval);
             }
         }
     }
     setClock(id, deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./dist/js/services/services.js":
/*!**************************************!*\
  !*** ./dist/js/services/services.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => (/* binding */ postData),
/* harmony export */   "getResource": () => (/* binding */ getResource)
/* harmony export */ });
const postData = async (url, data) => { //Means that here will be some asinchronous code. async cannot be used without await and vice versa
    const res = await fetch(url, { //Here fetch will return some promise but will not complete, so we use await
        method: "POST",
        headers:{ 
            "Content-type": "application/json"
        },
        body: data
    } ); 
    // We dont know how much time, It will proccess the json data, so here we will use await to make code asynchronous (by standart it will wait 30 sec)
    return await res.json(); //res.json  will give error, so we have to change this func to synchronous code
};
  
async function getResource(url) { //Means that here will be some aschronous code. async cannot be used without await and vice versa
    let res = await fetch(url); //Here we only get data not post
    // The Problem is fetch won't stop if some error happens, fetch'll stop only when no connection or some critic errors
    // So, in this case we have to deal with that ourselves, with  ok and status props

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); //Throws (Shows) an Error if smth happens
    }

    return await res.json();// Will return simple object why ???
}




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./dist/js/script.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./dist/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./dist/js/modules/modal.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./dist/js/modules/timer.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./dist/js/modules/cards.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ "./dist/js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms */ "./dist/js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./dist/js/modules/slider.js");
 //We changed commonJS syntax to es6 module struct
 //import stmnts must be at top






// We imported all function, so we have to call them

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerID = setTimeout( () => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.openModal)('.modal', modalTimerID), 50000);

    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.default)('[data-modal]', '.modal', modalTimerID); 
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default)('.timer', '2021-05-25'); 
    (0,_modules_cards__WEBPACK_IMPORTED_MODULE_3__.default)(); 
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__.default)(); 
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_5__.default)('form', modalTimerID); 
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.default)({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    }); 
}); 

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map