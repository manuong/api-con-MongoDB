const mongoose = require('mongoose');
const { PASSWORD_DB, USER_DB, CLUSTER_DB, NAME_DB } = process.env;

// connectionString es proporcionada por Atlas (BD en la nube) o por mongodb localmenten
const connectionString = `mongodb+srv://${USER_DB}:${PASSWORD_DB}@${CLUSTER_DB}.ismuwtp.mongodb.net/${NAME_DB}?retryWrites=true&w=majority&appName=notesapi`;

// const connectionString =
//   'mongodb+srv://manuong:guitardata2024@manuclusters.ismuwtp.mongodb.net/<nombre de la base de datos>?retryWrites=true&w=majority&appName=notesapi';

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