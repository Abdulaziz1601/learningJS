/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
// 2.
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Скотт Пилигрим против...",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость"
        ]
    };
    
    const advert = document.querySelectorAll('.promo__adv'),
        poster = document.querySelector('.promo__bg'),      
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]'),
        deleteMovie = document.querySelector('.delete');
    
    function refreshMov() {
        movieDB.movies.sort();
        movieList.innerHTML = "";
        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    } 
    refreshMov();
    // 2.1
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (addInput.value == ""){
            alert("Enter something!!!");
        } else{
            if (addInput.value.length > 21) {
                addInput.value = addInput.value.slice(0,22);
                addInput.value+="...";
            }
            const newFilm = addInput.value;
            const favourite = checkbox.checked;
            if(favourite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            refreshMov();
        }
    });
    // 1.
    advert.forEach(item => {
        item.remove();
    });
    // 2.
    genre.textContent = "драма";
    poster.style.backgroundImage = 'url("img/bg.jpg")'; //be careful with "''", they shouldn't be same
    // 4.
   
    // movieList.forEach((item,i) => {
    // item.outerHTML = `<li class="promo__interactive-item">
    //                   ${i+1}. ${movieDB.movies[i]}
    //                   <div class="delete"></div>
    //                   </li>`;
    // }); 
    // 2.1
});