const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      trim: true,
      require: true,
    },
    important: {
      type: Boolean,
      default: false,
    },
    // "referencia de documento" o "referencia cruzada"
    // la manera de crear relaciones entre datos cuando se necesita relacionar documentos de diferentes colecciones.
    // varias notas pueden perteneces a un usuario, y en el esquema se define a que usuario pertenece
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// metodo para modificar el "toJSON" como respuesta al guardar un nuevo documento
// este metodo no muta los documento de la base de datos
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
