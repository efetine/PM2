const moviesServices = require("../services/movies-service");

function getMovies(req, res) {
  const movies = moviesServices.getMovies();

  res.send(movies);
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
