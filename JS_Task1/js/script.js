"use strict";

//1
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели,', 1);

//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//3
const nameMovie = prompt('Один из просмотренных фильмов', ''),
      rate = +prompt('На сколько оцените его?', 5),
      nameMovie2 = prompt('Один из просмотренных фильмов', ''),
      rate2 = +prompt('На сколько оцените его?', 5);

personalMovieDB.movies[nameMovie] = rate;
personalMovieDB.movies[nameMovie2] = rate2;

console.log(personalMovieDB);