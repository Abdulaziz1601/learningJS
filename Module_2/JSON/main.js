"use strict";

// JSON (JavaScript Object Notation)

const person = {
    name: 'Alex',
    tel: '1234567',
    // Nested Object
    parents: {
        mom: 'Ozoda',
        dad: 'AbduNabi'
    } 
};  
// console.log(JSON.stringify(person)); //Make object ==>> JSON
// console.log(JSON.parse(JSON.stringify(person))); //Make JSON ==>> OBJECT

//How to make deep copy of the object
const clone = JSON.parse(JSON.stringify(person)); //Makes JSON ==>> OBJECT and assigns to New object
           // Firstly converted to JSON, then to OBJ

clone.parents.mom = 'Michelle Obama';
console.log(clone);
console.log(person);
//From that we can see that DEEP copy of an object was DONE, prop of the clone changed only


