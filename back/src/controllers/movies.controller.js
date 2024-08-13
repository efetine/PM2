const moviesServices = require("../services/movies.services");

async function getMovies(req, res) {
  try {
    const movies = await moviesServices.getMovies();
    return res.json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
}

// async function getMovie(req, res) {
//   try {
//     const movies = await moviesServices.getMovie();
//     return res.json(movies);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// }

async function createMovie(req, res) {
  const movie = req.body;

  try {
    const newMovie = await moviesServices.createMovie(movie);

    return res.status(201).json(newMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function updateMovie(req, res) {
  const movieId = req.params.id;
  const movie = req.body;

  try {
    const newMovie = await moviesServices.updateMovie(movieId, movie);

    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
}

async function deleteMovie(req, res) {
  const movieId = req.params.id;

  try {
    const newMovie = await moviesServices.deleteMovie(movieId);

    return res.status(200).json(newMovie);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
