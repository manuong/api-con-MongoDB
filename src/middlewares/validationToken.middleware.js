const jwt = require('jsonwebtoken');
const { AuthError } = require('../errors');
const { TOKEN_SECRET_KEY } = process.env;

const authUser = (req, res, next) => {
  req.user = {};

  try {
    // esta es una forma de obtener las cookies, pero esto nos retorna un string con informacion extra, no solo el token
    //   const token = req.headers.cookie;
    //   console.log(token);

    // otra es utilizando un middleware para parcear las cookies en formato json
    const { token } = req.cookies;
    if (!token) throw new AuthError('no hay token');

    // metodo de verificacion que como primer parametro recive el token , despues la palabra clave que definimos
    // y por ultima una funcion que maneja el error o la informacion correspondiente del token
    jwt.verify(token, TOKEN_SECRET_KEY, (error, decoded) => {
      if (error) throw new AuthError('token no valido');

      // guardamos la informacion del usuario en user dentro de la request
      req.user = decoded;
    });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { authUser };
