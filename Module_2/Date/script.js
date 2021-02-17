'use strict';                  

//                            _______->Month start from 0;
            //                |
// const now = new Date(2021, 2, 17, 20); //We can put here date, it can be returned from HTML5 date element

// const now = new Date(0); // 1970-01-01T00:00:00.000Z

// const now = new Date('2021-02-17'); 
// new Date.parse('2021-02-17'); // It is same as above


// console.log(now.setHours(18)); //We can also set hours

// console.log(now);


// console.log(now.getFullYear()); // Year

// console.log(now.getMonth()); //Month 

// console.log(now.getDate()); //Day

// console.log(now.getDay()); //Starts form 0, shows day of week

// console.log(now.getHours()); //Hours

// console.log(now.getUTCHours()); //WR to UTC: hours

// console.log(now.getTimezoneOffset()); //Difference between hours WR to computer and WR to UTC
// // shows 5 hours

// console.log(now.getTime());// Timestamp = quantity of milliseconds starting from 1970 year


let start = new Date();

for (let i = 0; i<100000; i++) {
    let some = i ** 3; //
}     

let end = new Date();

alert(`Loop worked ${end - start} milliseconds`); 