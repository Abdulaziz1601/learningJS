import {getResource} from '../services/services';
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
  
    getResource("http://localhost:3000/menu")
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => { // item = element in array of objs was obj itself so we used object destructuring EX: {img, altimg, title, descr, price} = arrElem;
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render(); //new MenuCard(obj.img, obj.altImg).render(); we could write like this, but it is not effcnt so we use object destructuring
            });
        });
}

export default  cards; // changed commonJS to es6 module structure
