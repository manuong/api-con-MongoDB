const {
  registerController,
  loginController,
  logoutController,
} = require('../controllers/auth.controllers');
const { validateSchema } = require('../middlewares/validationData.middleware');
const { registerSchema, loginSchema } = require('../schemas/auth.schema');

const authRoutes = require('express').Router();

authRoutes.post('/register', validateSchema(registerSchema), registerController);
authRoutes.post('/login', validateSchema(loginSchema), loginController);
authRoutes.post('/logout', logoutController);

module.exports = authRoutes;
