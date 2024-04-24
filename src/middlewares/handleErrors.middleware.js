// podemos tener una middleware para recibir errores mas generales en las peticiones
// y poder darle estatus segun sea el caso, hay dos formas de utilizar el next una es sin parametro 'next()' y otra es pasandole el error 'next(error)'
// para poder mandar los error se tiene que utilizar "next(error)" en cada catch de las peticiones
const handleErrors = (error, req, res, next) => {
  if (error.name === 'SyntaxError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'CastError') {
    return res.status(400).json({ error: error.message });
  }

  if (error.name === 'MongoServerError') {
    if (error.code === 11000) return res.status(409).json({ error: ['Usuario existente'] });
  }

  // para los errores de validacion del framework que estamos utilizando "zod"
  if (error.name === 'ZodError') {
    const errorMessages = error.errors.map((error) => error.message);
    return res.status(400).json({ error: errorMessages });
  }

  res.status(500).json({ error: error.message });
  console.log(error.name);
};

module.exports = handleErrors;
