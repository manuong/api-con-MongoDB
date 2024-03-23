const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
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
