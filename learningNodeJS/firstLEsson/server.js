// const colors = require('colors');

// console.log("Hello World 2".rainbow);

// function printRainbow(str) {
//     console.log(`${str}`.rainbow)
// }

// printRainbow('Hello There')

// const printRainbow = require('./print');

// printRainbow('Hello There');

// New Impport syntax "type":"module"

import {printRainbow} from './print.mjs'

printRainbow('Hello There');