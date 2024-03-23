const mongoose = require('mongoose');

// connectionString es proporcionada por Atlas (BD en la nube) o por mongodb localmenten
const connectionString = process.env.MONGODB_URI;

// conexion a mongodb
const connectDB = mongoose
  .connect(connectionString)
  .then(() => {
    console.log(' >>> Database connected');
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = connectDB;
