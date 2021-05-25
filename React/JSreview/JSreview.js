// var let const
// BUG of old var

// here our variable a is not defined, but it is already exist
// console.log(a); // undefined
// var a = 0;

// console.log(a); // error Cannot access 'a' before initialization
// let a = 0;

// let a = 0;
// console.log(a); //0
// Here it works 'cause a firstly defined and then called

// let obj = {
//     number: 5,
//     sayNumber: function () {
//         function say() {
//             // this - in function:
//             // 1. In strict mode - this = undefined
//             // 2. Without strict mode - this = global WINDOW object
//             console.log(this); // Window obj - 'cause it lost Its own this context
//         }
//         say();
//     }
// }

// obj.sayNumber();

// We can fix this by

// let obj = {
//     number: 5,
//     sayNumber: function () {
//             say = () => {
//             // arrow function do not have own this context
//             // arrow function will reference to parent of this arrow function
//             console.log(this); // {number: 5, sayNumber: ƒ}
//         }
//         say();
//     }
// }

// obj.sayNumber();

// MAP and FILTER methods

// let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// let shortNames = names.filter((name => { 
//     return name.length < 5;
// }));

// console.log(shortNames); // ["Ivan", "Ann"]  

// let answers = ['IvAn', 'AnnA', 'AbDuLaZiZ'];

// answers = answers.map((answer) => {
//     return answer.toLowerCase();
// });

// console.log(answers);

// Interpolation

// const uName = 'abdulaziz',
//       uSurname = 'abdullaev';
    
// console.log(`User's name is ${uName}, user's surname is ${uSurname}`);

// default parameters of function

// function fetchData(data, count=0) { // In default, count is equal to 0
//     console.log(`Data: ${data}, quantity: ${count}`);
// }

// fetchData('something');

// REST operator
// function max (...numbers) { //REST parameters let's us to take all numbers
//     console.log(numbers);
// }

// max(1,2,3,4,5,6,7); //[1, 2, 3, 4, 5, 6, 7]

// SPREAD operator

// const arr1 = [1, 2, 3]
    //   arr2 = [5, 6, 9];

//Our array is spreaded, so in max method herea are only numbers:  1, 2, 3, 5, 6, 9
// const res = Math.max(...arr1, ...arr2, 99, 7);  //we can also add antoher elements
// console.log(res);

// SPREAD operator with objects

// const user =  {
//     name: "default",
//     pass: "qwerty",
//     rigths: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// };

// const res = Object.assign(user, admin); //we overwritten admin to user

// Using spread operator

// const res = {...user, ...admin}; //spreaded our objects and assigned it to res obj
// console.log(res); //{ name: 'admin', pass: 'root', rigths: 'user' }

// const res = Object.assign({}, user, admin); //we combined user + admin and created new obj
// console.log(res); //{ name: 'admin', pass: 'root', rigths: 'user' }

// const x = 25, y = 10;

// const coords = {
//     x: x,
//     y: y
// };
// We can write above code like this, and it will be the same
// const coords = { // if we have variables that have the same names, which has to be assigned
//     x, // same as x: x
//     y
// };

// const avatar = 'Photo';


// const user =  {
//     name: "default",
//     pass: "qwerty",
//     rigths: 'user'
// };

// const admin = {
//     name: 'admin',
//     pass: 'root'
// };
    
// const res = {...user, ...admin, avatar}; //spreaded our objects and assigned it to res obj
// console.log(res); // { name: 'admin', pass: 'root', rigths: 'user', avatar: 'Photo' }

// const x = 25, y = 10;
// // old version VS Modern version
// const coords = {
//     x: x, 
//     y: y, 
//     calcSqr: function() {
//         console.log(this.x * this.y); // calculating area
//     }
// }

// const coords = {x, y,
//     calcSqr() { //method we write like this:
//         console.log(this.x * this.y); // calculating area
//     }
// }; // same code as above

// console.log(coords);
// coords.calcSqr();

// destructuring of objects and arrays

// const user =  {
//     name: {
//         first: "Abdulaziz",
//         second: "Abdullaev"
//     },
//     pass: "qwerty",
//     rights: 'user'
// };

// // If we wanna reuse It
// const userName = user.name;

// // To make it easy we use destructuring
// const {name: {first, second}, pass, rights} = user; //Here we take object inside an object(name)

// // We can check that we got all three properties in three resuable variables 

// console.log(first, second);

// function connect({
//     host = 'localhost',
//     port = 3000,
//     user = "default"} = {}){ // we assigned  this = {}, because if user does not write anything, it won't be an error
//         console.log(`host: ${host}, port: ${port}, user: ${user}`); // host: localhost, port: 232, user: default
// }

// connect({  // also  we can enter, at any sequence
//     port: 232 //user can forgot to enter another arguments, so by defult we already have them
// });

// const numbers = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const [a, b, c] = numbers;
// console.log(a, b, c); //  3, 5, 6

// const [, , , , , , , , , last] = numbers;
// console.log(last); // 13 last number in array

// if we have array in array

// const numbers = [[3, 5], [6, 6]];
// To acces first elem of first array
// numbers[0][0];

// We can use destructurig here

// const [[a,b], [c, d]] = numbers;

// console.log(a, b, c, d);

const country = {
    name: 'England',
    population: 200000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

// to take first elem in male arr we had to
// console.log(country.gender.male[0]); // 15%

// easier way is 

const {gender:{male:[malePopAbove18, maleAdult], female:[femalePopAbove18, femaleAdult]}} = country;
console.log(malePopAbove18, femaleAdult); // 15%, 29%
