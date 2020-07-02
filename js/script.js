// // 1. How do you saw films
// let numberOfFilms = +prompt("How do you saw films?",'');
// // console.log(numberOfFilms);

// 2. new object personalMowiesDB
let personalMoviesDB =  {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    questionNumberOfFilms: function(){
        this.count = +prompt("How do you saw films?",'');
    },

    toggleVisibleMyDB: function(){
        (this.privat === false)? this.privat = true: this.privat = false;
    },

    writeYourGenres: function(){
        let str;
        do {
            str = prompt("Please enter genres:", '');
            console.log(str)       ;
        }
        while(str == null || str == '' || str.length <3)

        this.genres = str.split(', '); 
        this.genres.forEach(function(value, i, genres){
            console.log(`Your ${i} favorite genre of films is: ${value}`);
        } );
    }
};

personalMoviesDB.writeYourGenres();
console.log(personalMoviesDB);


// for (let i = 0; i < numberOfFilms; i++){
//     let nameOfFilm = '',
//         ratingOfFilm = 0;
//     do {
//         nameOfFilm = prompt(`Вкажіть назву ${i+1} фільму`, '');
//     }
//     while(nameOfFilm == '' || nameOfFilm.length > 50 || nameOfFilm.length <= 1)

//     do{
//         ratingOfFilm = +prompt(`Вкажіть рейтинг ${i+1} film`, '0');
//     }
//     while(ratingOfFilm < 0 || ratingOfFilm > 10)


//     personalMoviesDB.movies[nameOfFilm] = ratingOfFilm;
// }

// // 3. //////
//     if (personalMoviesDB.count < 10){
//         alert('You watched few films !!!');
//     } else 
//     if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
//         alert('You are normal people !!!');
//     } else
//     if (personalMoviesDB.count >= 30){
//         alert('You are normal people !!!');
//     } else {
//         alert ('Error');
//     }


    
    
    // let {chName, chAge} = people.children;
    // console.log(chName);
    // console.log(chAge);
    

    // console.log(Object.keys(people).length);

    // for (let key in people){

    //         console.log(`${key} equals ${people[key]}`);

    // }

//  console.log(people.getName() +' '+ people.getSurname());