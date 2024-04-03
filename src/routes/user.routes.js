const userRoutes = require('express').Router();
const { getUsersController } = require('../controllers/user.controllers');

userRoutes.get('/users', getUsersController);
userRoutes.get('/users/:userId', getUsersController);

module.exports = userRoutes;
