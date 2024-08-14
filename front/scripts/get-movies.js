const axios = require("axios");
const { createMovieHTML } = require("./create-movie-html");

async function getMovies() {
  const response = await axios.get("http://localhost:3000/movies");

  const movies = response.data;

  console.log({ movies });

  movies.map((movie) => createMovieHTML(movie));
}

module.exports = {
  getMovies,
};
