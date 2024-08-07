const moviesServices = require("../services/movies.services");

function movieController(req, res) {
  movieService()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    });
}

function getMovies(req, res) {
  let movies = null;

  try {
    movies = moviesServices.getMovies();
  } catch (error) {
    res.status(500);
    console.log(error.message);
    res.send();
    return;
  }

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
