const express = require("express");
const moviesRouter = require("./routes/movies-router")

const server = express();

server.use("/movies", moviesRouter)

module.exports = server