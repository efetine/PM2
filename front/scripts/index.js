const axios = require("axios")

async function getMovies() {
    const response = await axios.get("https://students-api.up.railway.app/movies")

    const movies = response.data

    movies.map((movie) => {
        const cardMovie = document.createElement("div");
        const movieTitle = document.createElement("h3");
        const movieDirector = document.createElement("h4");
        const movieYear = document.createElement("p");
        const movieDuration = document.createElement("p");
        const movieGenre = document.createElement("p");
        const movieRate = document.createElement("p");
        const moviePoster = document.createElement("img");
        
        movieTitle.innerText = movie.title;
        movieDirector.innerText = movie.director;
        movieYear.innerText = movie.year;
        movieDuration.innerText = movie.duration;
        movieGenre.innerText = movie.genre;
        movieRate.innerText = movie.rate;
        moviePoster.src = movie.poster;
        // moviePoster.alt = `Poster of ${title}`;
    
        cardMovie.appendChild(movieTitle);
        cardMovie.appendChild(movieDirector);
        cardMovie.appendChild(movieYear);
        cardMovie.appendChild(movieDuration);
        cardMovie.appendChild(movieGenre);
        cardMovie.appendChild(movieRate);
        cardMovie.appendChild(moviePoster);
    
        const moviesContainer = document.getElementById("movies-cards");
        moviesContainer.appendChild(cardMovie);
    })
}

getMovies()

// document.addEventListener("DOMContentLoaded", () => {
//     const cardsContainer = document.getElementById("cardsContainer");
//     const movies = buildMovies();
//     movies.forEach((movie) => cardsContainer.appendChild(movie));
// })


// function buildMovie (movie) {
//     const (title, year, director, duration, genre, rate, poster) = movie;
//     const movieTitle = document.createElement("h3");
//     const movieDirector = document.createElement("h4");
//     const movieYear = document.createElement("p");
//     const movieDuration = document.createElement("p");
//     const movieGenre = document.createElement("p");
//     const movieRate = document.createElement("p");
//     const moviePoster = document.createElement("img");

//     movieTitle.innerText = movie.title;
//     movieDirector.innerText = movie.director;
//     movieYear.innerText = movie.year;
//     movieDuration.innerText = movie.duration;
//     movieGenre.innerText = movie.genre;
//     movieRate.innerText = movie.rate;
//     moviePoster.src = movie.poster;

//     const cardFront = document.createElement("div")
//     const cardBack = document.createElement("div")

//     cardFront.appendChild(moviePoster);
//     cardBack.appendChild(movieTitle);
//     cardBack.appendChild(movieDirector);
//     cardBack.appendChild(movieYear);
//     cardBack.appendChild(movieDuration);
//     cardBack.appendChild(movieGenre);
//     cardBack.appendChild(movieRate);

//     const moviesContainer = document.getElementById("movies-cards");
//     moviesContainer.appendChild(cardMovie);

// }


// function buildMovies () {
//     $.get("https://students-api.up.railway.app/movies", (data, status) => {
            // console.log(data)
//     })
// } 

// // esto lo podes hacer de la forma que te guste
    // //! Esto es por si quieren agregar a cada genero un input o etiquetas
    // genre.map((gen) => document.createElement("h4"))
    // //! esto es porque como viene un array los una
    // genre.join("")