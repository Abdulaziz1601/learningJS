// import {one, two} from './main'; //{} are important

// console.log(`${one} and ${two}`); //We use imported variables

// // Browser cannot do bundling itself, so we can bundle it using webpack

// // Webpack bundled It to bundle.js and worked well

// import {one as first} from './main'; // we can also rename variables, using "as"
// // We use renaming, when variable name is big and ambigious 
// console.log(first); 

// import * as data from './main'; // To import all info, we use "*"

// // data is an object, which includes all data from code: vars, funcs and etc.

// console.log(`${data.one} and ${data.two}`); //1 and 2

// data.sayHi();// Hello   

import {one, two} from './main.js';
// import { default as sayHi} from './main'; // how works "default" exporting
import sayHi from './main.js'; // in default export, we don't have to write {}(object) notation,
// we can just use it simple function 


console.log(`${one} and ${two}`); //1 and 2

sayHi();