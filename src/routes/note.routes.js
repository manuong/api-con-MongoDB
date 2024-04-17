const noteRoutes = require('express').Router();

const {
  getNoteController,
  postNoteController,
  putNoteController,
  deleteNoteController,
} = require('../controllers/note.controllers');
const { authUser } = require('../middlewares/validationToken.middleware');

//* Validar Token
// esta es una proteccion para las rutas que el usuario puede tener acceso solo si esta autenticado
// 'authUser' es un middleware definido por nosotros en este ejemplo para hacer la autenticacion antes
// de que entre al controlador
noteRoutes.get('/notes', authUser, getNoteController);
noteRoutes.post('/notes', authUser, postNoteController);
noteRoutes.put('/notes/:noteId', authUser, putNoteController);
noteRoutes.delete('/notes/:noteId', authUser, deleteNoteController);

module.exports = noteRoutes;
