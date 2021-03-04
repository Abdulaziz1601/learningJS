'use strict';

const inputSUM = document.querySelector('#sum'),
      inputUSD = document.querySelector('#usd');
      
inputSUM.addEventListener('input', () => {
    const request = new XMLHttpRequest();
        
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if (request.status === 200) {
            console.log(request.response);   
            const data = JSON.parse(request.response);
            inputUSD.value =( +inputSUM.value / data.current.usd).toFixed(2);
        }
        
    } );

});