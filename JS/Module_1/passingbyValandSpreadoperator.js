'use strict';

// let a = 5,
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Returns a reference of obj not copy

// copy.a = 10;
// console.log(obj);
// console.log(copy);

// function copy (mainObj) {
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 100, 
        y: 200
    }
};
// const newNumbs = copy(numbers);
// newNumbs.a = 125231351;
// console.log(newNumbs);
// console.log(numbers);
// newNumbs.c.x = 125;//Low level clonning was done so, nested object was passed by reference, if we change c.x then 2 of the objs also change
// console.log(numbers.c.x);
// console.log(newNumbs.c.x);

const add = {
    d: 17,
    e: 20
};
// console.log(Object.assign(numbers, add));// Adds two object, arg1 -> in this obj arg2 is added

const clone = Object.assign({}, add); // Create new obj and assigning to it arg2, then returning value to newObj

clone.d = 12345;

// console.log(add);
// console.log(clone);

// Copying an Array

const oldArray = ['a', 'b', 'c', 'd'];
const newArray = oldArray.slice();

newArray[1] = '010101010101010'; 

console.log(oldArray);
console.log(newArray);

// SPREAD operator
const video = ['youtube', 'tiktok', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'odno'];

console.log(internet);

function print(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [9, 8, 7];

print(...num);

const array = ['a', 'b'];
const newAarray = [...array];
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newobj = {...q};
console.log(newobj);

