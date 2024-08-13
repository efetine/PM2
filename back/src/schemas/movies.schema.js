const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    director: {
      type: String,
      required: [true, "Director is required"],
    },
    year: {
      type: Number,
      required: [true, "Year is required"],
      max: [2024, "Cannot be greater than the current year"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
    },
    genre: {
      type: [String],
      required: [true, "Genre is required"],
    },
    rate: {
      type: Number,
      required: [true, "Rate is required"],
    },
    poster: {
      type: String,
      required: [true, "Url is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = movieSchema;
