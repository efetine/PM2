const axios = require("axios");

async function deleteMovie(movieId) {
  await axios.delete(`http://localhost:3000/movies/${movieId}`);

  const movieCard = document.getElementById(movieId);

  movieCard.remove();
}

module.exports = {
  deleteMovie,
};
