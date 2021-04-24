// "use strict";
// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`User name: ${this.name} age: ${userAge}`);
//     };

//     this.getAge = function() { //this method can access PRIVATE age property 
//         return userAge;
//     };

//     this.setAge = function(age) { //Here we can assign PRIVATE age, and also we can check and assign checked userAge 
//         if (typeof age  === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Invalid value!');
//         }
//     };

// }

// // const person = new User('Abdulaziz', 19);
// // console.log(person.name); //Abdulaziz
// // console.log(person.userAge); // returns "undefined" because userAge is imitated like private var 
// // // Methods can access private vars
// // person.say(); // User name: Abdulaziz age: 19

// // //userAge is not changed because it is PRIVATE (let creates UserAge inside constructor, so it cannot be accessed outside)
// // person.userAge = 20; 

// // person.name = 'Alex'; //name is changed

// // person.say(); //User name: Alex age: 19 

// const person = new User('Abdulaziz', 19);
// console.log(person.name); 
// console.log(person.getAge()); //getMethod can get the value

// person.setAge(30); //setMethod can change the value and also check
// person.setAge(300); //setMethod can change the value and also check
// console.log(person.getAge()); //getMethod can get the value

// person.say(); 

