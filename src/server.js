const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');

const server = express();

// desactivar informacion de express en los headers
server.disable('x-powered-by');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(routes);

server.use((req, res) => {
  res.status(404).json({ error: 'Rute not Found' });
});

module.exports = server;
