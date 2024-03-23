const mongoose = require('mongoose');
const { PASSWORD_DB, USER_DB, CLUSTER_DB, NAME_DB } = process.env;

const connectionString = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER_DB}.ismuwtp.mongodb.net/?retryWrites=true&w=majority&appName=${NAME_DB}`;

// const connectionString =
//   'mongodb+srv://manuong:guitardata2024@manuclusters.ismuwtp.mongodb.net/?retryWrites=true&w=majority&appName=notesapi';

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