const btns = document.querySelectorAll("button"),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length); //How many class element have

// console.log(btns[0].classList.item(0)); //Shows 0th (1ST) class of this elem

// console.log(btns[1].classList.add('red')); //Add Class to the elem

// console.log(btns[0].classList.add('red', 'black')); //Add Class to the elem
// 'red', 'black' classes are added to 1st button
// console.log(btns[0].classList.remove('blue')); //Remove Class from the elem 
// 'blue' class is removed from 1st button

// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) { // Checks if elem contains this class
//     console.log('red is HEERE');
// }

// btns[0].addEventListener('click', () => {
// if (!btns[1].classList.contains('red')) {
//     btns[1].classList.add('red');
// } else {
//     btns[1].classList.remove('red');
// }
// btns[1].classList.toggle('red');
// });
// It is old property and returns classList as a one string
// console.log(btns[0].className);

// -----------------------------------------------------------------------------------------------------

// Event Delegation
// 
// If we want to add events for all btns, we cannot watch after dynamic buttons that will be added after 
// loop runs and adds event for all exsisting btns, thus we have to use eventDelegation which is adding event
// To the Parent element and then in it we will check which child was clicked. 

// event to Parent
wrapper.addEventListener('click', (event) => {
    // Also we can search for matcching elements
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');  
    }

//     if (event.target && event.target.tagName == "BUTTON") { //If button is clicked then Hello appears
//         console.log('Hello');
//     }
    
//     // if (event.target && event.target.classList.contains('blue')) { //If button is clicked then Hello appears
//     //     console.log('Hello');
//     // }
//     // We are delegating the event from parent to its child 
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {  
//         console.log('Hello');
//     });
// });
// We click buttons they worked, but dynamically added btn do not worked
// , because it doesnot know that events were added


const bt = document.createElement('button');
bt.classList.add('red');
wrapper.append(bt);
// We added bt to wraper and it has also eventListener even if it was added dynamically


