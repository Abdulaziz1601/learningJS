    // • ­Какое будет выведено значение: let x = 5; alert( x++ ); ?

    // • Чему равно такое выражение: [ ] + false - null + true ?

    // • Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?

    // • Чему равна сумма [ ] + 1 + 2?

    // • Что выведет этот код: alert( "1"[0] )?

    // • Чему равно 2 && 1 && null && 0 && undefined ?

    // • Есть ли разница между выражениями? !!( a && b ) и (a && b)?

    // • Что выведет этот код: alert( null || 2 && 3 || 4 ); ?

    // • a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?

    // • Что выведет этот код: alert( +"Infinity" ); ?

    // • Верно ли сравнение: "Ёжик" > "яблоко"?

    // • Чему равно 0 || "" || 2 || undefined || true || falsе ?

"use strict";

// 1.
// let x = 5;
// alert(x++); // alert will print 5, but x will be 6, because (++) increment firstly assigns 5 and then increases "X"

// 2.
// console.log([ ] + false - null + true);//NaN
// console.log([ ] + false);// "false"
// // [] is same as "", so by dynamic typing we know that if we add "" to anything we get string1
// console.log(typeof([ ] + false));// string
// console.log([ ] + false - null); // If we substract something from string we get NaN(Not a Number)
// console.log([ ] + false - null + true);//NaN
// // NaN + true, will be NaN anything added to NaN will be NaN

// 3.
// let y = 1;
// let x = y = 2;
// alert(x);// 2, because 2 is assigned to y and y (2) is assigned to x,so y is equal to 2 it means that x is equal to 2

// 4.
// console.log(typeof([ ] + 1 + 2)); // string
// console.log([ ] + 1 + 2); // 12

// "" + 1 => "1" + 2 => 12 String Concatenation

// 5.
// alert( "1"[0] ); // 1
// We can access any char of string as an array

// 6.
// console.log(2 && 1 && null && 0 && undefined ); //null
// and stops at false and returns null

// 7.
// console.log(!!( 1 && 2 ));

// console.log((1 && 2));
 
// We have difference ? ? ?

// ILI zapineatsya na PRAVDE
// I zapineatsya na LJI

// 8.
                //   3
// alert( null || 2 && 3 || 4 ); 


// Operator precedence: 1 - &&, 2 - ||;
// If two of args in && operator is true than, second arg is returned
// null || 3 -> 3;
// 3 || 4 ->  3, or stops at true so when it see 3 it stops and does not run

// 9.

// Правда ли что a == b ?

// let a = [1, 2, 3], b = [1, 2, 3];


// console.log(a == b); // false

// 9.

// • Что выведет этот код: alert( +"Infinity" ); ?

// alert( +"Infinity" ); // "Infinity" is a string but when we put + next to it, it changes to a num, but 
// // we do not have Infinity sign in js so it just prints Infinity
// alert( typeof(+"Infinity") ); //number

// 10.

// • Верно ли сравнение: "Ёжик" > "яблоко"?

// console.log("apple" > "Apple"); //true
// a in ASCII is 97, A in ASCII is 65, so 97 > 65 -> true 

// console.log("Ёжик" > "яблоко"); //false

// 10.

// • Чему равно 0 || "" || 2 || undefined || true || falsе ?

// console.log(0 || "" || 2 || undefined || true || false);