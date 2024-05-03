const noteRoutes = require('express').Router();

const {
  getNoteController,
  postNoteController,
  putNoteController,
  deleteNoteController,
  getNoteDetailController,
} = require('../controllers/note.controllers');
const { validateSchema } = require('../middlewares/validationData.middleware');
const { authUser } = require('../middlewares/validationToken.middleware');
const { noteSchema } = require('../schemas/note.schema');

//* Validar Token
// esta es una proteccion para las rutas que el usuario puede tener acceso solo si esta autenticado
// 'authUser' es un middleware definido por nosotros en este ejemplo para hacer la autenticacion antes
// de que entre al controlador
noteRoutes.get('/notes', authUser, getNoteController);
noteRoutes.get('/notes/:noteId', authUser, getNoteDetailController);
noteRoutes.post('/notes', authUser, validateSchema(noteSchema), postNoteController);
noteRoutes.put('/notes/:noteId', authUser, validateSchema(noteSchema), putNoteController);
noteRoutes.delete('/notes/:noteId', authUser, deleteNoteController);

module.exports = noteRoutes;
