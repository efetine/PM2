require("dotenv").config();
console.log(process.env); // es un objeto donde adentro viene todas las variables de entorno
const { URI } = process.env;

const mongoose = require("mongoose");

async function dbdConexion() {
  try {
    const response = await mongoose.connect();
    return response;
  } catch (error) {
    throw error;
  }
}

module.exports = dbdConexion;

//! primero genero la conexion y despues levanto la base de datos
