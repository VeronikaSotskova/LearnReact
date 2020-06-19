/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели,', 1);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let nameMovie = prompt('Один из просмотренных фильмов', ''),
        rate = +prompt('На сколько оцените его?', 5);
    if (nameMovie != null && rate != null && nameMovie != '' && rate != '' && nameMovie.length < 50) {
        personalMovieDB.movies[nameMovie] = rate;
        console.log('done');
    } else {
        console.log('err');
        i--;
    }
}

/* let ind = 0;
while (ind < 2) {
    let nameMovie = prompt('Один из просмотренных фильмов', ''),
        rate = +prompt('На сколько оцените его?', 5);
    if (nameMovie != null && rate != null && nameMovie != '' && rate != '' && nameMovie.length < 50) {
        personalMovieDB.movies[nameMovie] = rate;
        console.log('done');
    } else {
        console.log('err');
        ind--;
    }
    
    ind++;
}

ind = 0;
do {
    let nameMovie = prompt('Один из просмотренных фильмов', ''),
        rate = +prompt('На сколько оцените его?', 5);
    if (nameMovie != null && rate != null && nameMovie != '' && rate != '' && nameMovie.length < 50) {
        personalMovieDB.movies[nameMovie] = rate;
        console.log('done');
    } else {
        console.log('err');
        ind--;
    }
    
    ind++;
} while (ind < 2); */

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

let name1 = "John";

function sayHi() {
  alert("Hi, " + name1);
}

name1 = "Pete";

sayHi(); 