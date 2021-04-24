"use strict";
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`User name: ${this.name} age: ${this.age}`);
    };

}

const person = new User('Abdulaziz', 19);
console.log(person.name);
console.log(person.age);
person.say();

person.name = 'Alex';
person.age = 20;

person.say();
