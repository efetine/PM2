const path = require("path");

module.exports = {
  entry: [
    "./scripts/index.js",
    "./scripts/add-movie-form.js",
    "./scripts/clean-add-movie-form.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
