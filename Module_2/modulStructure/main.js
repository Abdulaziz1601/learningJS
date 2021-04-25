'use strict';

// By using modules, we will not worry about same names of variables, and using global memory

// We wanted to create global app variable, it have us error because, app var was already created
const app = '212312'; // Uncaught SyntaxError: Identifier 'app' has already been declared

// modules help us hide vars in local memory, so they will not come over.

// 1ST way to created modules is: Using anonymous self calling function

const number = 1;

(function() { // anonymous self calling function
    let number = 2;
    console.log(number);
    console.log(number + 3);
}()); //We write in brackets, because we create function expression, without brackets it will be function declaration
// func declaration cannot be anonymous so we put it in brackets and make func expression
//By this WE CAN CREATE OUR OWN MODULE WITH ITS OWN AREA OF VISIBILITY

console.log(number); 

//Second Way of creating MODULE
const user = (function() {
    const privat = function() {
        console.log('I am private');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();