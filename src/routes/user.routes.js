const userRoutes = require('express').Router();
const { getUsersController } = require('../controllers/user.controllers');

userRoutes.get('/users', getUsersController);

module.exports = userRoutes;
