'use strict';

//regex consist of 2 parts
// 1. Patterns - Template - What we are looking for
// 2. Flags

// Creaating regex

//Old way
// new RegExp('pattern', 'flags');

// Modern way
// /pattern/f

// const ans = prompt('Enter your name: ');

// const reg = /n/ig;

// i // doesnt matter big letters or small
// m // multi-line regyme

// console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*")); //1St arg - what we're changing, 2ND arg to what we're changin

// console.log("123-47-59".replace(/-/g, "")); //1234759


// const ans = prompt('Enter your digit  :'); // 234

// const reg = /\d/ig;
// console.log(reg.test(ans)); //true

// \d all numbers
// \w all words 
// \s all spaces


// const ans = prompt('Enter your digit  :'); // 234

// const reg = /\d/;
// console.log(ans.match(reg)); // ["5", index: 10, input: "adasdsadsa5asd", groups: undefined]


// const ans = prompt('Enter your digit  :'); // 234px

// const onlyNum = /\d/g;
// console.log(ans.match(onlyNum)); // ["2", "3", "4"]

// const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i)); //R2D2

// \D not digits
// \W not words

// const str = 'My name is R2D2';

// console.log(str.match(/\D/i));


function redundant(str) {
    let foo  = function (str) {
        return str
    }
    let caller;
    return caller = () => foo(str);
}

function disemvowel(str) {
    return str.replace(/[euioa]/ig, '');
}
  console.log(disemvowel("Hello Worlds"));
  
const REGEXP = /$^/;
console.log(REGEXP.test(""));