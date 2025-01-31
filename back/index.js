require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./src/server");

const { DATABASE_URL } = process.env;

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    server.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
