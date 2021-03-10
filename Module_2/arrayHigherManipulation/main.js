'use strict';
// These loops, return NEW ARRAY, unlike for, for just used for teaversing

//filter

// const names = ['Abdulaziz', 'Abdunabi', 'Ozoda', 'Rahimahon', 'Rihsiyahon', 'Ali', 'Nur'];

// const shortNames = names.filter(function (name) {
//     //Filters names which lenght less than 5 chars
//     return name.length < 5;
// });

// console.log(shortNames); 

//--------------------------------------------------------------------------------------------------------------------

//map

//Allows us to change every element in the array

// const answers = ['IvAn', 'ANna', 'Hello'];
// const result = answers.map(item => {
//     return item.toLowerCase();
// });

// const answers = ['IvAn', 'ANna', 'Hello'];
//above code Optimized
//Converts each item to lowerCase
// const result = answers.map(item => item.toLowerCase());

// console.log(result); //[ 'ivan', 'anna', 'hello' ]

// let answers = ['IvAn', 'ANna', 'Hello'];
// // above code SUPER Optimized
// answers = answers.map(item => item.toLowerCase());

// console.log(answers); //[ 'ivan', 'anna', 'hello' ]

//--------------------------------------------------------------------------------------------------------------------

// every/some
// Traverses whole array and if element is fits for given condition it returns TRUE
// const some = [4, 'qwq', 'sfesefsdfsd'];

// if we have at least ONE "NUMBER" element 
// console.log(some.some(item => typeof(item) === 'number')); //true

// if every element is "NUMBER" 
// console.log(some.every(item => typeof(item) === 'number')); //false

// const some = [4, 3, 99];

// TRUE because every element is number
// console.log(some.every(item => typeof(item) === 'number')); //true

//--------------------------------------------------------------------------------------------------------------------

//reduce

// The reduce() method reduces the array to a single value.

// const arr = [4, 5, 1, 3, 2, 6];

// We wanna calculate the sum of arr[] 

// const arr = [4, 5, 1, 3, 2, 6];
                    // 0       4
                    // 4       5
                    // 9       1
                    // 10      3
                    // 13      2
                    // 15      6
                    // 21
// const res = arr.reduce((sum, current) => sum+current);

// console.log(res); //21

// reduce() with strings

// const arr = ['apple', 'macintosh', 'watermelon', 'pear'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(res);

// const arr = [4, 5, 1, 3, 2, 6];
                    // 5       4
                    // 4       5
                    // 9       1
                    // 10      3
                    // 13      2
                    // 15      6
                    // 21
// const res = arr.reduce((sum, current) => sum+current, 5); // We can also define initial value

// console.log(res); //21 + 5 => 26
//--------------------------------------------------------------------------------------------------------------------
//Practical part
//We wanna take keys of 'person' values, ivan and ann
const obj = {
    ivan: 'person',
    ann: 'person',
    cat: 'animal',
    dog: 'animal'
};

// const newArr = Object.entries(obj) // changes obj to arr
// .filter(item => item[1] === 'person')
// .map(item => item[0]);

// console.log(newArr);

const newArr = Object.entries(obj)
.filter(item => item[1] === 'animal')
.map(item => item[0]);// item = [ 'cat', 'animal' ]

console.log(newArr); //[ 'cat', 'dog' ]


 



