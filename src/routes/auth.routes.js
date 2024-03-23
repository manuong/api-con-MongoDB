const { registerController, loginController } = require('../controllers/auth.controllers');

const authRoutes = require('express').Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);

module.exports = authRoutes;
