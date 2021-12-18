require('es6-promise').polyfill(); //pollyfill of promises were added. so we can use promises
import 'nodelist-foreach-polyfill'; //It will import automatically to bundle, from node modules 'cause we got foreach polyfill from npm

import tabs from './modules/tabs'; //We changed commonJS syntax to es6 module struct
import modal from './modules/modal'; //import stmnts must be at top
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';
// We imported all function, so we have to call them

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerID = setTimeout( () => openModal('.modal', modalTimerID), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerID); 
    timer('.timer', '2022-01-01'); 
    cards(); 
    calc(); 
    forms('form', modalTimerID); 
    slider({
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
