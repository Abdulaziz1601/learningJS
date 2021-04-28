function cards() {
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
}

module.exports = cards;
