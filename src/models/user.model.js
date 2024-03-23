const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

// metodo para modificar el "toJSON" como respuesta al guardar un nuevo documento
// este metodo no muta los documento de la base de datos
userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.password;
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//
//* Otra manera de crear un esquema

// const {Schema, model} = require("mongoose")

// const userSchema = new Schema({
//     username: {
//       type: String,
//       require: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       require: true,
//       trim: true,
//     },
//     password: {
//       type: String,
//       require: true,
//     },
//   });

//   const User = model('User', userSchema);
