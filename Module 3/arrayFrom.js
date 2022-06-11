// Converting String into an Array
let str = "Abdullaev";

console.log([...str]);

const fromString = Array.from(str);

console.log(fromString);

// creating Array

const fromScartch = Array.from({ length: 5 }, (value, index) => index*index );

// Older Method for Array Creation

const fromScartchOld = (new Array(5)).fill(0).map((_, i) => i); // create array with 5 elements

console.log(fromScartchOld);

const arr = [1, 1, 2];

const uniqueElems = Array.from(new Set(arr));
console.log(uniqueElems);

// Without Array.from

const unique = [...new Set(arr)];

console.log(unique);

const foo = function() {
    console.log(Array.from(arguments).join());
}

foo('A', 'b', 'd', 'u', 'l', 'l', 'a', 'e', 'v');