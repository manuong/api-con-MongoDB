const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/auth.controllers');

const authRoutes = require('express').Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);
authRoutes.post('/logout', logoutController);

module.exports = authRoutes;
