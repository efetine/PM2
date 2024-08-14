const { cleanForm } = require("./clean-add-movie-form");
const { getMovies } = require("./get-movies");
const { createMovie } = require("./add-movie-form");

const formEl = document.getElementById("add-movie");

if (formEl !== null) {
  formEl.addEventListener("submit", createMovie);
}

const cleanFormButton = document.getElementById("clean-form-button");

if (cleanFormButton !== null) {
  cleanFormButton.addEventListener("click", cleanForm);
}

getMovies();
