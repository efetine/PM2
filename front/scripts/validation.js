function validateInputs(form) {
  if (!form.checkvalidity()) {
    return false;
  } else {
    form.classList.add("was-validated");
    return true;
  }
}

module.export = validateInputs;
