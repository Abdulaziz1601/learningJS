export let  one = 1; //We can export variable

let two = 2;

export {two}; //Another way to export

// export function sayHi() { //We can also export functions
//     console.log("Hello");
// }


export default function sayHi() { //We export it by default
    console.log("Hello");
}

// RULE: default export must be only ONE
