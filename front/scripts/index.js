const axios = require("axios");

async function getMovies() {
  const response = await axios.get("http://localhost:3000/movies");

  console.log(response.data);

  // const movies = [...response.data, ...response.data, ...response.data];
  const movies = response.data;

  console.log({ movies });

  movies.map((movie) => createMovieHTML(movie));
}

getMovies();

async function deleteMovie(movieId) {
  await axios.delete(`http://localhost:3000/movies/${movieId}`);

  const movieCard = document.getElementById(movieId);

  movieCard.remove();
}

function createMovieHTML(movie) {
  const cardMovie = document.createElement("div");
  const cardBody = document.createElement("div");
  const movieTitle = document.createElement("h3");
  const movieDirector = document.createElement("h4");
  const movieYear = document.createElement("p");
  const movieDuration = document.createElement("p");
  const movieGenre = document.createElement("p");
  const movieRate = document.createElement("p");
  const moviePoster = document.createElement("img");
  const deleteButton = document.createElement("button");

  cardMovie.className = "card bg-dark text-white";
  cardMovie.style = "width: 18rem";
  cardMovie.id = movie._id;

  cardBody.className =
    "card-img-overlay d-flex flex-column justify-content-end";

  movieTitle.innerText = movie.title;
  movieTitle.className = "card-title";
  movieTitle.style = "font-size: 1.25rem";

  movieDirector.innerText = movie.director;
  movieDirector.style = "font-size: 1rem";
  movieYear.innerText = movie.year;
  movieDuration.innerText = movie.duration;
  movieGenre.innerText = movie.genre;
  movieRate.innerText = movie.rate;

  moviePoster.src = movie.poster;
  moviePoster.className = "card-img opacity-75";
  moviePoster.style = "width: 18rem; height: 28rem";
  // moviePoster.alt = `Poster of ${title}`;

  deleteButton.innerText = "X";
  deleteButton.className =
    "btn btn-secondary position-absolute top-0 end-0 m-1";
  deleteButton.style = "width: 3rem; height: 3rem;";
  // deleteButton.onclick = () => deleteMovie(movie._id);
  // deleteButton["data-bs-target"] = "delete-modal";

  cardBody.appendChild(movieTitle);
  cardBody.appendChild(movieDirector);
  cardBody.appendChild(movieYear);
  cardBody.appendChild(movieDuration);
  cardBody.appendChild(movieGenre);
  cardBody.appendChild(movieRate);
  cardMovie.appendChild(moviePoster);
  cardMovie.appendChild(cardBody);
  cardBody.appendChild(deleteButton);

  const moviesContainer = document.getElementById("movies-cards");
  moviesContainer.appendChild(cardMovie);
}

module.exports = {
  createMovieHTML,
};
