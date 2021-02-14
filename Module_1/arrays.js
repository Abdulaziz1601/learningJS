"use strict";

const arr = [100, 29, 34, 804, 15, 6];
arr.sort(compareNum);// uses quick sort algorithm
console.log(arr);// sort(), sorts only strings

function compareNum(a, b) {
    return a-b;
}

// arr[99] = 5;
// console.log(arr);

// arr.forEach(function(element, i, arr) {
//     console.log((`${i}: ${element} in array ${arr}`));
// // });

// const str = prompt("", "");// We input some products like: p1, p2, p3... 
// const products = str.split(", ");// split deletes commas and puts products in one array
// // console.log(products); //[" p1", "p2", "p3"]
// products.sort();
// console.log(products.join("; ")); // aa; ggg; hhh; ccc



// arr.pop(); // Deletes only last elem of arr
// console.log(arr); //[ 1, 2, 3, 4, 5 ]
// arr.push(10); //Adds only last elem to arr
// console.log(arr); // [ 1, 2, 3, 4, 5, 6, 10 ]

// // Simple for-loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // Shows from one to 6 i.e from first elem to the last
// }

//for of -loop

// for (let val of arr) {
//     console.log(val);// = arr[i]
// }
