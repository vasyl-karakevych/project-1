// 1. How do you saw films
let numberOfFilms = +prompt("How do you saw films?",'');
// console.log(numberOfFilms);

// 2. new object personalMowiesDB
let personalMoviesDB =  {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < numberOfFilms; i++){
    let nameOfFilm = '',
        ratingOfFilm = 0;
    do {
        nameOfFilm = prompt(`Вкажіть назву ${i+1} фільму`, '');
    }
    while(nameOfFilm == '' || nameOfFilm.length > 50 || nameOfFilm.length <= 1 )

    do{
        ratingOfFilm = +prompt(`Вкажіть рейтинг ${i+1} film`, '0');
    }
    while(ratingOfFilm < 0 || ratingOfFilm > 10)


    personalMoviesDB.movies[nameOfFilm] = ratingOfFilm;
}



console.log(personalMoviesDB);