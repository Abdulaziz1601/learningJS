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

    const advert = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),      
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]'),
          {movies: allMovies} = movieDB;

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let newFilm = addInput.value.toUpperCase();
        const favourite = checkbox.checked;

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0,22)}...`;
            }
            
            if(favourite) { 
                console.log("Добавляем любимый фильм");
            }
             
            allMovies.push(newFilm);
            createMovieList(allMovies, movieList);
        }
        // reset any text from form
        event.target.reset();

    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "драма";
        
        poster.style.backgroundImage = 'url("img/bg.jpg")'; //be careful with "''", they shouldn't be same
    };

    const sortArray = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i+1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                console.log(allMovies.splice(i, 1));
                
                createMovieList(allMovies, movieList);
            });
        });
    }
    
    deleteAdv(advert);
    makeChanges();
    createMovieList(allMovies, movieList);

});