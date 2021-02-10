"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {
//     alert('Click');
// };
// // Changes the funciton and leads to errors and we cannot delete these listeners
// btn.onclick = function() {
//     alert('Second Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });
// // This style of EventListeners are more easier to use and we can add 1 or more events to the same variable
// btn.addEventListener('click', () => {
//     alert('Second Click');
// });


// btn.addEventListener('click', (event) => {
//     event.target.remove();
//     // console.log('Hover');
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};
// If we remove an event listener, func must be same, so we assigned it to the variable
// Event Bubbling
// btn.addEventListener('click', deleteElement);// arg2 is just reference to deleteElement() function
// // btn.removeEventListener('click', deleteElement); // parenthesis same as above
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();// Preventing default behaviour of a link

    console.log(event.target);

});