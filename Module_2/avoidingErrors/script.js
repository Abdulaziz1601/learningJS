"use strict";

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) { //If we have a doubt about this code we should write using try&catch
    console.log(e);
}

console.log('normal');  