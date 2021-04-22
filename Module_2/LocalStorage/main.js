"use strict";

// window.localStorage // storage can hold 5mb of data

// will write a key - number, with value - 5; number: 5 
// localStorage.setItem('number', 5);


// localStorage.getItem('number'); // Gets the value of number key

// console.log(localStorage.getItem('number')); //   number: 5  

// localStorage.removeItem('number'); // Deletes the value of number key

// console.log(localStorage.getItem('number')); //   null

// localStorage.setItem('number', 5000);

// localStorage.clear(); // cleares all keys and values 

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = '#e56';    
}
checkbox.addEventListener('change', () => { // checkbox's status is changing so we take change event
    localStorage.setItem('isChecked', true); //If checkb is checked then it will be true
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#e56';
    }
});

const person = { //We wanna save this obj in localStorage
    name: 'Alex',
    age: 19
};

const serializedPerson = JSON.stringify(person); //made obj -> JSON
localStorage.setItem('alex', serializedPerson); //made JSON -> obj

console.log(JSON.parse(localStorage.getItem('alex')));
