"use strict";

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis=2) {
    // basis = basis || 2; // old default argument, leads to error
    return (number * basis);
}

console.log(calcOrDouble(3));