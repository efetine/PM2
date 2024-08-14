const cleanFormButton = document.getElementById("clean-form-button");

cleanFormButton.addEventListener("click", cleanForm);

function cleanForm() {
  const form = document.getElementById("add-movie");

  form.reset();

  form.classList.remove("was-validated");
}
