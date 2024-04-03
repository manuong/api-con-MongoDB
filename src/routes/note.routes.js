const noteRoutes = require('express').Router();

const {
  getNoteController,
  postNoteController,
  putNoteController,
  deleteNoteController,
} = require('../controllers/note.controllers');

noteRoutes.get('/notes', getNoteController);
noteRoutes.post('/notes', postNoteController);
noteRoutes.put('/notes/:noteId', putNoteController);
noteRoutes.delete('/notes/:noteId', deleteNoteController);

module.exports = noteRoutes;
