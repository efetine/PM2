function validateDataMovie(req, res, next) {
  const { title, director, year, duration, genre, rate, poster } = req.body;

  const movie = {
    title,
    director,
    year,
    duration,
    genre,
    rate,
    poster,
  };

  const missingsInputs = [];

  for (const key in movie) {
    if (!movie[key]) missingsInputs.push(key);
  }

  if (missingsInputs.length > 0) {
    res
      .status(400)
      .send({ message: "Faltan datos", missingsInputs: missingsInputs });
  } else {
    next();
  }
}

module.exports = validateDataMovie;
