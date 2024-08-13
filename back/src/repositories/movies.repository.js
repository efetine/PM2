const mongoose = require("mongoose");
const Movie = require("../models/movie.models");

async function getMovies() {
  try {
    const movies = await Movie.find();

    return movies;
  } catch (error) {
    throw Error("Error accessing movies on database");
  }
}

async function createMovie(movie) {
  try {
    const newMovie = await Movie.create(movie);
    return newMovie;
  } catch (error) {
    throw Error("Error creating a movie on database");
  }
}

async function updateMovie(movieId, movie) {
  try {
    await Movie.findByIdAndUpdate(movieId, movie);

    const updatedMovie = Movie.findById(movieId);
    return updatedMovie;
  } catch (error) {
    console.log(error);
    throw Error("Error updating a movie on database");
  }
}

async function deleteMovie(movieId) {
  try {
    const newMovie = await Movie.findByIdAndDelete(movieId);
    return newMovie;
  } catch (error) {
    console.log(error);
    throw Error("Error deleting a movie on database");
  }
}

module.exports = {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
};
