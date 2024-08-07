const axios = require("axios");
const Movie = require("../models/movie");

function moviesService() {
  return axios
    .get("https://students-api.up.railway.app/movies")
    .then((res) => {
      return res.data;
    })
    .catch((reason) => {
      throw Error(reason);
    });
}

function getMovies() {
  // Asumamos que estos datos vinieron de una base de datos o de una API externa.
  const movies = [
    {
      title: "Guardians of the Galaxy Vol. 2",
      year: 2017,
      director: "James Gunn",
      duration: "2h 16min",
      genre: ["Action", "Adventure", "Comedy"],
      rate: 7.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpgImage preview",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      director: "George Lucas",
      duration: "2h 1min",
      genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
      rate: 8.7,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpgImage preview",
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
      director: "Peter Jackson",
      duration: "2h 58min",
      genre: ["Action", "Adventure", "Drama", "Fantasy"],
      rate: 8.8,
      poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpgImage preview",
    },
  ];

  const moviesInstances = movies.map((movie) => {
    const movieInstance = new Movie(
      movie.title,
      movie.director,
      movie.year,
      movie.duration,
      movie.genre,
      movie.rate,
      movie.poster
    );

    return movieInstance;
  });

  return moviesInstances;
}

function createMovie(req, res) {
  res.send("POST Hello from movies");
}

function updateMovie(req, res) {
  res.send("PUT Hello from movies");
}

function deleteMovie(req, res) {
  res.send("DELETE Hello from movies");
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
