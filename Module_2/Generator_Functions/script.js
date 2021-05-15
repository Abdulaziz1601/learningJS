"use strict";

// Generator Function Creation:

// - Result changes depending on, how many times we are calling the function
// function* generator() { // asterisk (*) will before function* or before func *name 
//     yield "S"; //1ST time we get "S"
//     yield "c";
//     yield "r";
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next()); //{ value: 'S', done: false } - value - is our generator func is done or not
// console.log(str.next()); //{ value: 'c', done: false }
// console.log(str.next()); //{ value: 'r', done: false }
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// { value: 'S', done: false }
// { value: 'c', done: false }
// { value: 'r', done: false }
// { value: 'i', done: false }
// { value: 'p', done: false }
// { value: 't', done: false }

// console.log(str.next().value); //It returns obj so we can get value like this and value is = "S"

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}
// Also we can get result easily with for/of loop
for (let k of count(7)) {
    console.log(k); //counts from 0 to 6
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

