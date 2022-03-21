// // // let dragon = (name, size, element) => 
// // //     name+ ' is a ' +
// // //     size + ' dragon that breathes ' + 
// // //     element + '!';

// // // console.log(dragon("Qoravoy", 'tiny', 'lightning'));

// // // With Currying

// // let dragon = 
// //     name => 
// //         size => 
// //             element => 
// //                 name+ ' is a ' +
// //                 size + ' dragon that breathes ' + 
// //                 element + '!';

// // let qoravoyDragon = dragon('Qoravoy');
// // let tinyDragon = qoravoyDragon('tiny');
// // console.log(tinyDragon('lightning'));
// import _ from 'lodash';

// let dragon = (name, size, element) => 
//     name+ ' is a ' +
//     size + ' dragon that breathes ' + 
//     element + '!';

// dragon = _.curry(dragon); // curries our function

// let qoravoyDragon = dragon('Qoravoy');
// let tinyDragon = qoravoyDragon('tiny');
// console.log(tinyDragon('lightning'));

// Usage

import _ from 'lodash';

let dragons = [
    {name: 'fluffikins', element: 'lightning'},
    {name: 'noomi', element: 'lightning'},
    {name: 'karo', element: 'fire'},
    {name: 'doomer', element: 'timewarp'},
];

let hasElement = 
    _.curry((element, obj) => obj.element === element);

let lightningDragons = 
    dragons.filter(hasElement('lightning'));

console.log(lightningDragons);














