const userRoutes = require('express').Router();
const { getUsersController, profileController } = require('../controllers/user.controllers');
const { authUser } = require('../middlewares/validationToken');

userRoutes.get('/users', getUsersController);
userRoutes.get('/users/:userId', getUsersController);

//* Validar Token
// esta es una proteccion para las rutas que el usuario puede tener acceso solo si esta autenticado
// 'authUser' es un middleware definido por nosotros en este ejemplo para hacer la autenticacion antes
// de que entre al contralador
userRoutes.get('/profile', authUser, profileController);

module.exports = userRoutes;
