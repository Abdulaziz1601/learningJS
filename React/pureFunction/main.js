// const rndSum = a => Math.random() + a;

// // It is not pure function, invokiing with the same input does not give same output, every time random numbers show up
// console.log(rndSum(5));
// console.log(rndSum(5));
// console.log(rndSum(5));


// // This is pure function, 'cause we get the same result when invoked with same arguments
// const sum = (a, b) => a + b;

// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(1, 2));

// Our function can be changed to IMpure function easliy
let num = 0
const impureSum = a => num += a;
// Calling with same inputs, returns 3 different values
console.log(impureSum(5));
console.log(impureSum(5));
console.log(impureSum(5));

// Side effect are 
// console.log
// API calls, 'cause we won't know what willbe returned
// Working with DOM, we cannot expect same result everytime browser can give Error or smth can happen
//  Changing smth in file system (node.js)
// Changing INPUT data