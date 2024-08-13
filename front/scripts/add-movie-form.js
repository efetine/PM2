const axios = require("axios");
const { createMovieHTML } = require("./index");

const form = document.getElementById("add-movie");

form.addEventListener("submit", createMovie);

async function createMovie(event) {
  event.preventDefault();

  // 1. Traer los datos del form, los datos que puso el usuario.
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
  //
  // 2. Llamar a la API para que cree la pelicula con los datos
  try {
    const response = await axios.post("http://localhost:3000/movies", movie);

    const createdMovie = response.data;

    createMovieHTML(createdMovie);

    form.reset();

    const movieCreatedToastEl = document.getElementById("movie-created");

    const movieCreatedToast = new bootstrap.Toast(movieCreatedToastEl, {});

    movieCreatedToast.show();

    // const addMovieModalEl = document.getElementById("add-movie-modal");

    // const addMovieModal = new bootstrap.Modal(addMovieModalEl, {});

    // console.log(addMovieModal);

    // addMovieModal.hide();
  } catch (error) {
    alert("No se pudo crear la pelicula");
  }
  //
  // 3. Agregar la nueva pelicula a la pagina
}
