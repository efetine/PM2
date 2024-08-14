function cleanForm() {
  const form = document.getElementById("add-movie");

  form.reset();

  form.classList.remove("was-validated");
}

module.exports = {
  cleanForm,
};
