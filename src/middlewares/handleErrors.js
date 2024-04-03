// podemos tener una middleware para recibir errores mas generales en las peticiones
// y poder darle estatus segun sea el caso
// para poder mandar los error se tiene que utilizar "next(error)" en cada catch de las peticiones
const handleErrors = (error, req, res, next) => {
  console.log(error.name);

  if (error.name === 'SyntaxError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'CastError') {
    return res.status(400).json({ error: error.message });
  }

  res.status(500).json({ error: error.message });
};

module.exports = handleErrors;
