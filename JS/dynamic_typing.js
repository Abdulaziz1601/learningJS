"use strict";

// To string

// 1. Old version
// console.log(typeof(String(null)));//srting
// console.log(typeof(String(5)));//srting

// // 2. Concatenatoin
// console.log(typeof(5 + '')); //string

// const num = 5;

// console.log("https/vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// To number

// 1. Old version
// console.log(typeof(Number('4 ')));//number

// 2. +
// console.log(typeof(+ '5')); // number

// 3.
// console.log((parseInt("15px", 10))); //15
// console.log(typeof(parseInt("15px", 10))); //number

// let answer = +prompt("Hi", ''); // + returns us a number 

// To Boolean

// 1.
// 0, '', null, undefined, NaN; //Always False

let switcher = null;

if(switcher) {
    console.log("Working...");
}

 switcher = 1;

if(switcher) {
    console.log("Working...");
}

// 2.
// console.log(typeof(Boolean('4')));// boolean

// 3.
console.log(typeof(!!'4'));// boolean
// It also converts to boolean



