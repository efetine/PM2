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
    origin: "http://127.0.0.1:8080",
  })
);

server.use("/movies", moviesRouter);

module.exports = server;
