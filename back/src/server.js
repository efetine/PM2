const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const moviesRouter = require("./routes/movies.router");

const server = express();

// middlewares   que ya vienen establecidos, uno ya puede instalar y configurar /pre build
server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    origin: "http://localhost",
  })
);

server.use("/movies", moviesRouter);

module.exports = server;
