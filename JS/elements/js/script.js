'use strict';

// Older methods to work with browser elements
const box = document.getElementById('box');
 
console.log(box);

const btns = document.getElementsByTagName('button')[1]; // returns HTML - collection = pseudo-array

console.log(btns[0]); // returns first button

const circles = document.getElementsByClassName('circle');
console.log(circles);

// Newer version

const hearts = document.querySelectorAll('.heart'); //Selector is written

console.log(hearts);
 
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);