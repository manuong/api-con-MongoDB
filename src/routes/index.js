const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Hi! This is the api with mongodb');
});

module.exports = routes;
