const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');
let timerId,
    i = 0;

// function myAnimation() {
//     let pos = 0;
//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + "px";
//         }
//     }
// }

// Renewed function with requestAnimationFrame()

let pos = 0;

function myAnimation() {
    // We increment pos and change values
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + "px";

    if (pos < 300) {
        requestAnimationFrame(myAnimation); //takes only one arg of callback animation
    }
    //this func is really eloquent and synchronising with pc

}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);
// As in setInterval here we can stop animation with an id

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout( logger, 2000);

//      timerId = setInterval( logger, 500);
// }
// );
// function logger () {
//     if(i == 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');  
//     i++;
// }

//                            ____________function to execute
//                            |      |----------------------------------> ***
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');// 2nd arg is milliseconds, as 3RD arg we can put the parameters of anonymous function ***



// const timerId = setTimeout( logger, 2000);// 2nd arg is milliseconds,
//  as 3RD arg we can put the parameters of anonymous function ***
// // We assigned settiomeout to variable because we neeed Universal Identificator of this function, if we wanna
// // stop it we will use this variable
 
// clearInterval(timerId); // We started and deleted Interval function

// function logger () {
//     console.log('text');
// }


// How recursive settimeout is better than setInterval:
// When setIterval works It does not know how much time It will work Ex: we have to loop in difficult function 3 seconds
// when 3rd sec ends setIntereval it should keep for example 0.5 seconds and rerun the callback func, but setInterval
// errors and just momentally starts callback not waiting 0.5 seconds, It thinks that 0.5 secs are already wasted 
//in those 3 seconds, To SOLVE this issue, setTimeOut used recursively.

// EX:

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500); //**
// }, 500); 
// Same as setInterval, however It will wait till 0.5 seconds are wasted and run again

// SetTimeOut will run and wait till execution, after execution in ** it will wait roughly 0.5 seconds and
// Re run settimeout and callback func 