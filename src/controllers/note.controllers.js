const Note = require('../models/note.model');

const getNoteController = async (req, res, next) => {
  // se definio en el middleware para hacer la autenticacion
  const userId = req.user.id;

  try {
    // metodo para buscar en la base de datos
    // const allNotes = await Note.find();

    // de esta forma solo buscamos las notas del usuario junto con sus datos
    const notes = await Note.find({
      user: userId,
    }).populate('user');

    res.status(200).json(notes);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    next(error);
  }
};

const postNoteController = async (req, res, next) => {
  const { title, content, important } = req.body;

  // se definio en el middleware para hacer la autenticacion
  const userId = req.user.id;

  try {
    // intanciando un nuevo objeto de "Note" y guardando despues
    const newNote = new Note({
      title,
      content,
      important,
      user: userId, // se hace la referencia al usuario dueño de la nota
    });

    const saveNote = await newNote.save();
    res.status(201).json(saveNote);
  } catch (error) {
    // res.status(404).json({ error: error.message });
    next(error);
  }
};

const putNoteController = async (req, res, next) => {
  // se definio en el middleware para hacer la autenticacion
  const userId = req.user.id;
  const { noteId } = req.params;
  const { title, content, important } = req.body;

  try {
    const newNoteInfo = {
      title,
      content,
      important,
    };

    // metodo para actualizar en la base de datos tambien existe 'findOneAndUpdate()'
    // const noteUpdate = await Note.findByIdAndUpdate(noteId, newNoteInfo, { new: true });

    // Para actualizar la nota solo si le pertenece al usuario logeado
    const noteUpdate = await Note.findOneAndUpdate({ _id: noteId, user: userId }, newNoteInfo, {
      new: true,
    });

    // en caso de no encontrar una nota
    if (!noteUpdate) return res.status(404).json({ error: 'No se encontro nota para actualizar' });

    res.status(200).json(noteUpdate);
  } catch (error) {
    // res.status(400).json({ error: error.message });
    next(error);
  }
};

const deleteNoteController = async (req, res, next) => {
  // se definio en el middleware para hacer la autenticacion
  const userId = req.user.id;
  const { noteId } = req.params;

  try {
    // Utiliza el método 'deleteOne()', 'findOneAndDelete()' o 'findByIdAndDelete()' de Mongoose para eliminar el documento de la base de datos.
    // const deletedNote = await Note.findByIdAndDelete(noteId);
    const deletedNote = await Note.findOneAndDelete({ _id: noteId, user: userId });
    if (!deletedNote) return res.status(404).json({ error: 'note not found' });

    res.status(200).send('deleted note successful');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNoteController,
  postNoteController,
  putNoteController,
  deleteNoteController,
};
