const {
  registerController,
  loginController,
  logoutController,
  verifyTokenController,
} = require('../controllers/auth.controllers');
const { validateSchema } = require('../middlewares/validationData.middleware');
const { registerSchema, loginSchema } = require('../schemas/auth.schema');

const authRoutes = require('express').Router();

authRoutes.post('/register', validateSchema(registerSchema), registerController);
authRoutes.post('/login', validateSchema(loginSchema), loginController);
authRoutes.post('/logout', logoutController);
authRoutes.get('/verify', verifyTokenController);

module.exports = authRoutes;
