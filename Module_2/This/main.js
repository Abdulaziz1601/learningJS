//Context of calling this
'use strict';
//Imagine you are homeless and you live in the world you are not attached to somewhere -> so your context is the world
// However if you'll get home your context will be your home, because
// you are attached to your home and you can function there

// function showThis() {
//     console.log(this);// Show context of this 
// }

// showThis(); // We have seen that context of this in function is a global object window


// _________________________________________________________________________________________________________
// | 1) In a simple function: this = window, but if we use strict - undefined                               |
// | 2) Context in methods of the objects - is object Itself                                                |
// | 3) "this" in constructors and classes - is new  the object that                                        |
// |  will be created when that constructor is instantiated                                                 |
// | 4) Manual attachment of "this": call, apply, bind                                                      |
// |________________________________________________________________________________________________________|
//Almost all frameworks work on those 3 rules.

// Interview question
// function showThis(a, b) {
//     console.log(this);// Show context of this
//     function sum() {
//         console.log(this);
//         return a+b; // variable hoisting
//     }
    
//     console.log(sum());
// }

// showThis(4, 5);

// 2) Context in methods of the objects - is object Itself

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//             function shout() {
//                 console.log(this); //undefined
//             }
//             shout(); //It is not a method of an object, it is just function,so "this" is undefined 
//     }
// };

// obj.sum();

// 3) "this" in constructors and classes - is new  the object that will be created when that constructor is instantiated

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello "+ this.name);
//     };
// }
// let ivan = new User('Ivan', 23);

// 4) Manual attachment of "this": call, apply, bind  

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname );
// }

// const user = {
//     name: 'Jonh'
// };

// sayName.call(user, 'Doe'); //We are giving as parameter context of "this" operator
// sayName.apply(user, ['Doe']); //Same as call() but difference in a syntax of giving params

// function count(num) {
//     return this * num; //Here we can use bind()
// }

// const double = count.bind(2); // 2 goes in place of "this"
// console.log(double(5));

//Practice "this"

const btn = document.querySelector('button');

btn.addEventListener('click', function (e) {
    console.log(this);// elem Itself
    e.target.style.backgroundColor = 'red';//  ==  this.style.backgroundColor = 'red'; 
});

//If we write It like this.
// btn.addEventListener('click', () => {
//     this.style.backgroundColor = 'red'; 
//     // main.js:95 Uncaught TypeError: 
//     // Cannot set property 'backgroundColor' of undefined at HTMLButtonElement
// });
// Error because context of this in arrow func is lost. Because arrow funcs do not have their own this
// but they inherit it from the parent scope, however in this case we do not have a parent.


const obj = {
    num: 5,
    sayNumber: function () {

        const say = () => {
            console.log(this.num); // 5, it took five from Its parent (function) who's context is object Itself

            console.log(this); //In arrow funcs we don't have this keyword, so it takes "this"
            // From Its parent, Its parent's (function's) context is object
            //  , so this = {num: 5, sayNumber: ƒ} 
        };

        say();
        
    }
};

obj.sayNumber();


// const double = (a) => {
//     return a*2; //In a Classic Way
// };

//Modern
const double = a => a * 2;

console.log(double(5));