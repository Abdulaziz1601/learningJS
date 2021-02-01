"use strict";
  
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options.name); // test

// delete options.name;// deletes name property

// console.log(options); //{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`Property ${key}, has value ${options[key]}`);
        }
    }
    console.log(`Property ${key}, has value ${options[key]}`);
}
// for in loop shows whole object, key is property and options is object, key changes as properties of options object
