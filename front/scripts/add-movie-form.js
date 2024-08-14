const axios = require("axios");
const { createMovieHTML } = require("./index");

const form = document.getElementById("add-movie");

form.addEventListener("submit", createMovie);

async function createMovie(event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    event.stopPropagation();

    form.classList.add("was-validated");
  } else {
    const formData = new FormData(form);

    const title = formData.get("title");
    const director = formData.get("director");
    const year = formData.get("year");
    const duration = formData.get("duration");
    const genre = formData.get("genre");
    const rate = formData.get("rate");
    const poster = formData.get("poster");

    const movie = {
      title,
      director,
      year,
      duration,
      genre,
      rate,
      poster,
    };

    try {
      const response = await axios.post("http://localhost:3000/movies", movie);

      const createdMovie = response.data;

      createMovieHTML(createdMovie);

      const movieCreatedToastEl = document.getElementById("movie-created");

      const movieCreatedToast = new bootstrap.Toast(movieCreatedToastEl, {});

      movieCreatedToast.show();

      form.reset();
    } catch (error) {
      alert("No se pudo crear la pelicula");
    }
  }
}
