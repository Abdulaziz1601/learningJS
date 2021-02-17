const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// Practice
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;
    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);

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