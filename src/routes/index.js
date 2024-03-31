const authRoutes = require('./auth.routes');
const noteRoutes = require('./note.routes');
const userRoutes = require('./user.routes');

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hi! This is the api with mongodb');
});

routes.use(authRoutes);
routes.use(noteRoutes);
routes.use(userRoutes);

module.exports = routes;
