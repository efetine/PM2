const express = require("express");
const moviesController = require("../controllers/movies.controller");
const validateDataMovie = require("../middlewares/validate-movie.middleware");

const moviesRouter = express.Router();

moviesRouter.get("/", moviesController.getMovies);
// moviesRouter.get("/:id", moviesController.getMovie);
moviesRouter.post("/", validateDataMovie, moviesController.createMovie);
moviesRouter.put("/:id", validateDataMovie, moviesController.updateMovie);
// moviesRouter.patch("/:id", moviesController.updateMovie);
moviesRouter.delete("/:id", moviesController.deleteMovie);

module.exports = moviesRouter;
