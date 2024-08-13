const mongoose = require("mongoose");
const movieSchema = require("../schemas/movies.schema");

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;

// class Movie {
//   constructor(title, director, year, duration, genre, rate, poster) {
//     if (title === undefined) {
//       throw Error("Title is not defined");
//     }

//     if (poster === undefined) {
//       throw Error("Poster is not defined");
//     }

//     if (director === undefined) {
//       throw Error("Director is not defined");
//     }

//     this.title = title;
//     this.director = director;
//     this.year = year;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }

// module.exports = Movie;
