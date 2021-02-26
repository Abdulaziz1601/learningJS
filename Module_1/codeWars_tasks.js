'use strict';

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
// var arr = pin.toString(10).replace(/\D/g, '0').split('').map(Number);
let arr = Array.from(String(pin), Number);
 if( arr.length == 6 || arr.length == 4) {
    for (const element of arr) {
        if(typeof(element) == "number" )
            return true;
    }
}
 return false;
}
console.log(validatePIN(23425));

// function addBinary(a,b) {
//     let sum = a+b;
//     let binary = '';
//     while(sum > 0 ) {
//       binary = ( sum % 2 ) + binary;
//       sum = Math.floor( sum / 2 ); 
//     }
//     return binary;
//   }
// console.log(addBinary(1,3)); 