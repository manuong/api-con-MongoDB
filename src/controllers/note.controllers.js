const getNoteController = async (req, res) => {
  res.send('get note');
};

const postNoteController = async (req, res) => {
  res.send('post note');
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
