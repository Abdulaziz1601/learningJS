"use strict";

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script');
// script.src = 'OOP.js';
// script.async = false;// OFF async behaviour
// document.body.append(script); // It will behave like async

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.body.append(script); // It will behave like async
}
loadScript('OOP.js');
loadScript('dynamic_typing.js');

