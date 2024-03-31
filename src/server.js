const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
const notFound = require('./middlewares/notFound');

const server = express();

// desactivar informacion de express en los headers
server.disable('x-powered-by');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api', routes); // prefijo /api para deferenciarlas de las rutas del front end

server.use(notFound);

module.exports = server;
