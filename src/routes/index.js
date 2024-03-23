const authRoutes = require('./auth.routes');
const noteRoutes = require('./note.routes');

const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hi! This is the api with mongodb');
});

routes.use(authRoutes);
routes.use(noteRoutes);

module.exports = routes;
