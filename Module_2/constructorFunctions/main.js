'use strict';

// const num = new Function(5);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => console.log(`Hello ${this.name}`); //So we can allso use functions
} //By this we can assign this function as a CONSTRUCTOR

User.prototype.exit = function() {
    console.log(`Bye ${this.name}`);
};

const abdulaziz = new User('Abdulaziz', 19); //It creates new object
const ivan = new User('Ivan', 27);

abdulaziz.hello();

abdulaziz.exit();
// This is used in ES5
// -------------------------------------------------------------------------------------------------------------------
// ES6 But classes are easier to use and they are syntactic sugar 
// In computer science, syntactic sugar is syntax within
// a programming language that is designed to make things easier to read or to express.
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;    
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Bye ${this.name}`);
    }
}
