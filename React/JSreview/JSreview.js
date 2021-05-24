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

let names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

let shortNames = names.filter((name => { 
    return name.length < 5;
}));

console.log(shortNames); // ["Ivan", "Ann"]  

let answers = ['IvAn', 'AnnA', 'AbDuLaZiZ'];

answers = answers.map((answer) => {
    return answer.toLowerCase();
});

console.log(answers);