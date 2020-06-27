// 1. How do you saw films
let numberOfFilms = prompt("How do you saw films?",'');
// console.log(numberOfFilms);

// 2. new object personalMowiesDB
let personalMoviesDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// console.log(personalMoviesDB);

//  3. two questions
let nameOfFilm = prompt("Write last name films which your saw",'James Bond'),
    ratingOfFilm = prompt("How rating?",'0');

 personalMoviesDB.movies = [nameOfFilm, ratingOfFilm];

console.log(personalMoviesDB.movies);