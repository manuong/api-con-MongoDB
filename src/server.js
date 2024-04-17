const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
const notFound = require('./middlewares/notFound.middleware');
const handleErrors = require('./middlewares/handleErrors.middleware');
const cookieParser = require('cookie-parser'); // para pasar las cookies a json

const server = express();

// desactivar informacion de express en los headers
server.disable('x-powered-by');

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(cookieParser());

server.use('/api', routes); // prefijo /api para deferenciarlas de las rutas del front end

server.use(handleErrors);
server.use(notFound);

module.exports = server;
