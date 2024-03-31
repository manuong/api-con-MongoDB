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
  res.send('put note');
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
