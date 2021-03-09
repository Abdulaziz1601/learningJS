'use strict';
//Promises - if somthing happens we promise that we will do domething

// console.log('Requesting data...');
// //                               prms is done  |-----------means that promise is not done properly
// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing the data...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);    
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject(); if Error happens 
//         }, 2000);
//     });
// }).then((data) => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Error happened'); 
// }).finally(() => {
//     console.log('Finally');
// });

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
    };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then( () => { //Waits till all promises are done and after that It does somthing
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then( () => { // Promises are handled sequentially
    console.log('All'); // Shows up after 1 sec
});