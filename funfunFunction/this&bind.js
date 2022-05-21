// function talk(sound) {
//     console.log(sound);
// }

// talk('woooooof!!!');

// function talk() {
//     console.log(this.sound);
// }
// let boromir = {
//     sound: 'One does not simply walk into mordor'
// }

// let talkBoundToBoromir = talk.bind(boromir);
// talkBoundToBoromir();
// talk(); 

// PLacing reference to an object as a property

// function talk() {
//     console.log(this.sound);
// }

// let boromir = {
//     sound: 'One does not simply walk into mordor'
// };

// boromir.speak = talk//.bind(boromir);


// let blabber = boromir.speak;

// blabber();

function talk() {
    console.log(this.sound);
}

let boromir = {
    blabber: talk,
    sound: 'One does not simply walk into mordor'
};

let gollum = {
    jabber: boromir.blabber,
    sound: 'My preciousss....'
};

gollum.jabber();
