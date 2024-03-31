const Note = require('../models/note.model');

const getNoteController = async (req, res) => {
  try {
    // metodo para buscar en la base de datos
    const allNotes = await Note.find();
    res.status(200).json(allNotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postNoteController = async (req, res) => {
  const { title, content, important } = req.body;

  try {
    // intanciando un nuevo objeto de "Note" y guardando despues
    const newNote = new Note({
      title,
      content,
      important,
    });

    const saveNote = await newNote.save();
    res.status(201).json(saveNote);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putNoteController = async (req, res) => {
  const { noteId } = req.params;
  const { title, content, important } = req.body;

  try {
    const newNoteInfo = {
      title,
      content,
      important,
    };

    // metodo para actualizar en la base de datos tambien existe 'findOneAndUpdate()'
    const noteUpdate = await Note.findByIdAndUpdate(noteId, newNoteInfo, { new: true });

    // en caso de no encontrar una nota
    if (!noteUpdate) return res.status(404).json({ error: 'No se encontro nota para actualizar' });

    res.status(200).json(noteUpdate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNoteController = async (req, res) => {
  res.send('delete note');
};

module.exports = {
  getNoteController,
  postNoteController,
  putNoteController,
  deleteNoteController,
};
