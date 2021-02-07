"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      wrapper = document.querySelector('.wrapper'),
      circles = document.getElementsByClassName('circle'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';// inline css is changed
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;'; // With cssText property we can write a lot of css code

btns[1].style.borderRadius = '100%';

// circles.style.backgroundColor = 'Lime'; //Error because we are accessing pseudo - array, 
// so we have to write index of the p array

circles[0].style.backgroundColor = 'Lime'; // First elem is in Lime color 

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
    
// }

hearts.forEach( item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was Heeere!');

div.classList.add('black');

// New version to append an elem to DOM
// document.body.append(div);

// document.querySelector('.wrapper').append(div);// We append elem into class .wrapper
// We can write this kind of code if we need it one time

// wrapper.append(div);// We append elem into class .wrapper

//Older version of appending 

// wrapper.appendChild(div);

wrapper.prepend(div); // Append an elem as first

// hearts[1].before(div); // appends an elem before 2nd elem

// hearts[0].after(div); // appends an elem after 2nd elem


//                node to append        ___---> before which node append
//                    |       _________|     
//                    |      |
// wrapper.insertBefore(div, hearts[0]); // appending before 1st elem of hearts so box will be 1st

// circles[0].remove(); // Removes the elem

// older v
//                     |-->which child remove
// wrapper.removeChild(hearts[0]); // 1stv child removed


// hearts[0].replaceWith(circles[0]); // First elem of hearts is replaced with first circle
//             put this element
//                       |            |->>>>>> replacing this element
//                       |            |
wrapper.replaceChild(circles[0], hearts[0]);

// Changing HTML and Text
// div.innerHTML = "Hello World!"; // Hello World inside div 

div.innerHTML = "<h1>Hello World!</h1>"; // headline 1 bold Hello World inside div 

// Only Text

// div.textContent = "<h1>Hello World!</h1>"; // HTML also turned to text

div.insertAdjacentHTML('afterend', '<h2>HI!</h2>');












