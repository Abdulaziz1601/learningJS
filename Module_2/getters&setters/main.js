"use strict";

//Svoystva dannoe i svoystva accessori

const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(person.userAge); //we do not write parenthesis when we use getter, so it is called accesser property

console.log(person.userAge = 30); //we set age

console.log(person.userAge);// we get age 
