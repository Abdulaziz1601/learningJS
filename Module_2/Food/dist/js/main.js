window.addEventListener('DOMContentLoaded', () => {
    // Tabs 
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { //Default Argument, if we do not have params i is 0
        // tabsContent[i].style.display = 'block'; //inline styles are not popular
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) { //If tab item found
            tabs.forEach((item, i) => { // loop through and find if clicked elem is the same as
                if (item == target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2021-04-01';
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
    setClock('.timer', deadline);

    // Modal
// All variables are taken
    const modalTrigger = document.querySelectorAll('[data-modal]'), //data attributes are appropriate here
          modal = document.querySelector('.modal');//data attributes are appropriate here

    //DRY don't repeat yourself, code was written 2, so copied, because of this we created fucntion
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerID); //Deletes an interval if user is already opened a modal
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; //browser automatically knows what to do
    }

    modalTrigger.forEach( item => item.addEventListener('click', openModal) );// adding events to all triggers to open modal
    
    modal.addEventListener('click', (e) => {
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();    
        }
    });

    // Event when key (esc) is pressed, modal is closed

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')){ //If modal is open
            closeModal();
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

    const modalTimerID = setTimeout(openModal, 50000); // After  50 seconds modal pops up

    //If user scrolls till end, then modal appears

    function showModalByScroll() {
        // user-scrolled-part      height-that-is-visible-to-client        whole-height-of-doc
        if(window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // after event is used it is removed but modal is still shown only event is removed
        }
    }
    window.addEventListener('scroll', showModalByScroll); // We cannot put here , {once: true} as 3RD arg because we added event to window so scroll changes in window
    // much time so when user starts scrolling and ends it event is triggered once and deleted

    //Creating Templates for food_tabs with Classes
    // const menuField = document.querySelector('.menu__field'),
    //       container = menuField.querySelector('.container');    

    // class Menu {
    //     constructor(src, alt, subttitle, descr, money ) {
    //         this.src = src;
    //         this.alt = alt;
    //         this.subttitle = subttitle;
    //         this.descr = descr;
    //         this.money = money;
    //         this.newTab = document.createElement('div');
    //     }

    //     storeProps() {
    //         this.newTab.classList.add('menu__item');
            
    //         this.newTab.innerHTML = 
    //         `<img src=${this.src} alt=${this.alt}>
    //         <h3 class="menu__item-subtitle">${this.subttitle}</h3>
    //         <div class="menu__item-descr">${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //         <div class="menu__item-cost">Цена:</div>
    //         <div class="menu__item-total"><span>${this.money}</span> грн/день</div>`;
    //     }

    //     appendTab() {
    //         container.append(this.newTab);
    //     }
    // }

    // const firstTab = new Menu('img/tabs/vegy.jpg', "vegy", 'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229),
    //       secondTab = new Menu('img/tabs/elite.jpg', "elite", 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550),
    //       thirdTab = new Menu('img/tabs/post.jpg', "post", 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430);
    
    // let allObj = [firstTab, secondTab, thirdTab];
    // allObj.forEach(tab => {
    //     tab.storeProps();
    //     tab.appendTab();
    // });

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
    
    const getResource = async (url) => { //Means that here will be some aschronous code. async cannot be used without await and vice versa
        const res = await fetch(url); //Here we only get data not post
        // The Problem is fetch won't stop if some error happens, fetch'll stop only when no connection or some critic errors
        // So, in this case we have to deal with that ourselves, with  ok and status props

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`); //Throws (Shows) an Error if smth happens
        }

        return await res.json();// Will return simple object why ???
    };

    // getResource("http://localhost:3000/menu")
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => { // item = element in array of objs was obj itself so we used object destructuring EX: {img, altimg, title, descr, price} = arrElem;
    //             new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //new MenuCard(obj.img, obj.altImg).render(); we could write like this, but it is not effcnt so we use object destructuring
    //         });
    //     });

    // Working with axios library

    axios.get("http://localhost:3000/menu")
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => { // item = element in array of objs was obj itself so we used object destructuring EX: {img, altimg, title, descr, price} = arrElem;
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //new MenuCard(obj.img, obj.altImg).render(); we could write like this, but it is not effcnt so we use object destructuring
            });
        });


    //Another way to get Data from server

    // getResource("http://localhost:3000/menu")
    //     .then(data => createCard(data));
    
    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add('menu__item');

    //         element.innerHTML = ` 
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }

    // We have some modals, we have  to take info from them and share to server in our case sever.php
    // We'll you use one function, It is good practice
    
    //Forms

    const forms =  document.querySelectorAll('form'); //We are getting all forms

    const message = {
        loading: 'img/forms/spinner.svg',
        success: 'Thank you! We will contact you soon!',
        failure: 'Something went wrong...'
    };

    forms.forEach(item => {
        bindPostData(item); 
    });

    const postData = async (url, data) => { //Means that here will be some aschronous code. async cannot be used without await and vice versa
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
            postData('http://localhost:3000/requests', json)
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
        openModal(); //opens modal

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
            closeModal();
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

    // Slider

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.offer__slider-wrapper'), // parent of a window 
          slidesField = document.querySelector('.offer__slider-inner'), // window to show slides
          width = window.getComputedStyle(slidesWrapper).width; // width of the parentWindow
    let slideIndex = 1; //Index to manipulate slides

    if (slides.length < 10) { // If length of slide is less than 10, then we add 0
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // If length of slide is more than 10, then we donot add 0
        current.textContent = slideIndex;
    }

    let offset = 0; // offset to move slides
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

    // Calc

    const result = document.querySelector('.calculating__result span');
    let sex = 'female',
        height, weight, age,
        ratio = 1.375;
    
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

    function getStaticInformation(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
            } else {
                sex = e.target.getAttribute('id');
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
            calcTotal();
            });
        });
    }

    getStaticInformation('#gender', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

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

}); 
