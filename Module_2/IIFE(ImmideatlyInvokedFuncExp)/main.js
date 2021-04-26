
// (IIFE)

(function () { // IIFE has no name and It is not stored in a variable
    console.log("My favorite number is 777");
})(); //First enclosing parenthesis makes function -> an expression and
// last parenthesis, invokes our anonymous function immideatly

// (favNumber = function (num = 3) { 
//     console.log("My favorite number is " + num);
// })();

// favNumber();


// let p = 222;
// (function() {
//     let p = 7;
//     console.log(p);
// })();

// console.log(p);

let b = 222;
{
    let b = 7;
    console.log(b);
} //In es6, we can create local vars, with the help of blocks and let 

console.log(b);