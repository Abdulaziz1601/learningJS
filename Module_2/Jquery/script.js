import $ from 'jquery';

//Get something, ids, classes, tags and etc
// $('#btn'); // function similiar to querySelector or querySelectorAll 

// const btn = $('#btn'); //variable created

// console.log(btn);

//Check if DOMContent is LOADED

$(document).ready(function() {
    $('.list-item:first').hover(function() {
        $(this).toggleClass('active');
    });

    // //taking 3RD element, on is analog of addEventListener
    // $('.list-item:eq(2)').on('click', function() {
    //     //:even - takes 1 - 3 - 5 th elems, fadeToggle function, deletes an elem(display:none) 
    //    $('.image:even').fadeToggle('slow');
    // });

    // Difficult way to animate
    $('.list-item:eq(4)').on('click', function() {

       $('.image:odd').animate({
           opacity: 'toggle',
           height: 'toggle',
       }, 2000);
    });
});