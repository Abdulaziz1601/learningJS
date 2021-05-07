"use strict";

// Some errors can stop our CODE so, we can use try & catch, to deal with errors

// try { // "try" block is run properly, "catch" block is ignored
//     console.log("Normal");
//     console.log(a); //To check we are accessing non-existent variable, that will cause error
//     console.log('result');
// } catch(e) { // If any error happens "catch" block runs
//     console.log('Error');
// } 
// // Usually when error happens in code, it will stop running.
// // However Code written after trycatch will run and DON'T stop
 
// console.log('Code is still normal (working)');

// // Error without trycatch block

// console.log(a); //  ReferenceError: a is not defined
// // It will stop here ----------------------------------------------------------------------------------
// console.log('result'); 


try { 
    console.log("Normal");
    console.log(a);  // *
    console.log('result');
} catch(error) { 
    console.log(error.name); // ReferenceError
    console.log(error.message); // a is not defined
    console.log(error.stack); // ReferenceError: a is not defined at script.js:26 *
} finally { // Always runs as in Promises

} 

console.log('Still Normal');