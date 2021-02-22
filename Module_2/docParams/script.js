'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');


// const width = box.clientWidth; //   width: 400px,   padding: 10px, => Clientwidth = 420px
// // without BorderBox width is 405 because scroll is 15px, 420-405 = 415
// // with BB width is 385
// const height = box.clientHeight;
// console.log(width, height);

// const width = box.offsetWidth; //  400 margin and border incl visible part

// const height = box.offsetHeight; // 350 margin and border incl visisble part 
// console.log(width, height);

const width = box.scrollWidth; //  385 without scroller

const height = box.scrollHeight; // 1352 whole document with scroll
console.log(width, height);

// Task: we are click btn and doc enlarges

btn.addEventListener('click', () => {
    box.style.height =  box.scrollHeight + 'px'; // doc enlarges
    console.log(box.scrollTop);
})

console.log(box.getBoundingClientRect().top); // Gets coordinates from left of dochtml

const style = window.getComputedStyle(box); // Gets al computed style from elem box


console.log(style);

console.log(document.documentElement.scrollTop);

// document.documentElement.scrollTop // We can change it and also we can do scroll to top elem.

document.documentElement.scrollTo(0, 200) // Scrolls from init position to 200px in the doc

document.documentElement.scrollBy(0, 200) //  Scrolls from your position to 200px in the doc