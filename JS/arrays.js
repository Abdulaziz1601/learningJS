"use strict";

const arr = [1, 2, 3, 4, 5, 6];

// arr.pop(); // Deletes only last elem of arr
// console.log(arr); //[ 1, 2, 3, 4, 5 ]
// arr.push(10); //Adds only last elem to arr
// console.log(arr); // [ 1, 2, 3, 4, 5, 6, 10 ]

// // Simple for-loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // Shows from one to 6 i.e from first elem to the last
// }

//for of -loop

for (let val of arr) {
    console.log(val);// = arr[i]
}
