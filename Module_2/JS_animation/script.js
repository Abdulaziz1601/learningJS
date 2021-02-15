const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    // const timerId = setTimeout( logger, 2000);

     timerId = setInterval( logger, 500);
}
);
function logger () {
    if(i == 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}
//                            ____________function to execute
//                            |      |----------------------------------> ***
// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello');// 2nd arg is milliseconds, as 3RD arg we can put the parameters of anonymous function ***



// const timerId = setTimeout( logger, 2000);// 2nd arg is milliseconds, as 3RD arg we can put the parameters of anonymous function ***
// // We assigned settiomeout to variable because we neeed Universal Identificator of this function, if we wanna
// // stop it we will use this variable
 
// clearInterval(timerId); // We started and deleted Interval function

// function logger () {
//     console.log('text');
// }