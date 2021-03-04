'use strict';

const inputRub = document.querySelector("#rub"),
      inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => { // If we input smth, it will notice, we have also change ev.listener, it works when placeholder loses focus
    const request = new XMLHttpRequest();
//                                                true, if you wanna assynchronic code
    // request.open(method,          url,          async, login,   pass               ); // Configures settings to make a request
//               post,get:reqst   path where we making request
// synchronic code: stops or waits other code blocks, and stops whole website
// assynchronic code: does not care about any other code blocks, and runs anytime
// AJAX request are assynchronic

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json charset=utd-8');
    request.send();
    
    // request.addEventListener('readystatechange', () => { //This event wathes for readyState 
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUSD.value =( +inputRub.value / data.current.usd).toFixed(2);// 2 numbs after dot 
    //     } else {
    //         inputUSD.value = 'Something Went Wrong';
    //     }
    // });

    request.addEventListener('load', () => { 
        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUSD.value =( +inputRub.value / data.current.usd).toFixed(2);// 2 numbs after dot 
        } else {
            inputUSD.value = 'Something Went Wrong';
        }
    });

    // status 404 || 301 || 200 || 100 || 502
    //statusText status in Text version. EX: 302: "FOUND"
    // response ==> response from backend
    // readyState 
                    // Значение	Состояние	Описание
                    // 0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
                    // 1	OPENED	Метод open() был вызван.
                    // 2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
                    // 3	LOADING	Загрузка; responseText содержит частичные данные.
                    // 4	DONE	Операция полностью завершена.




});