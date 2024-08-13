const moviesRepository = require("../repositories/movies.repository");

async function getMovies() {
  let movies = null;

  try {
    movies = await moviesRepository.getMovies();
  } catch (error) {
    throw Error("Error getting movies from repository");
  }

  return movies;
}

async function createMovie(movie) {
  try {
    const newMovie = await moviesRepository.createMovie(movie);
    return newMovie;
  } catch (error) {
    throw Error("Error creating a movie from repository");
  }
}

async function updateMovie(movieId, movie) {
  try {
    const newMovie = await moviesRepository.updateMovie(movieId, movie);
    return newMovie;
  } catch (error) {
    throw Error("Error updating a movie from repository");
  }
}

async function deleteMovie(movieId) {
  try {
    const newMovie = await moviesRepository.deleteMovie(movieId);
    return newMovie;
  } catch (error) {
    throw Error("Error deleting a movie from repository");
  }
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
