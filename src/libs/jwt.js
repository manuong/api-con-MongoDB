const jwt = require('jsonwebtoken');
const { TOKEN_SECRET_KEY } = process.env;

// forma de generar un token utilizando "jsonwebtoken", el metodo sing nos pide como parametro
// un "payload" - el dato que quiero guardar dentro del token
// el "secretOrPrivateKey" - un string-llave que se va estar utlizando tanto para cifrar y desifrar el contenido
// opciones de cuanto tiempo queremos que dure el token y el algoritmo al que queremos que este basado
// callback si nosotros queremos manejarlo de manera asincrona que es lo mas comun
// info https://jwt.io/

// jwt.sign(
//   {
//     id: userSaved.id,
//   },
//   'secretKey123',
//   {
//     expiresIn: '7d',
//   },
//   (error, token) => {
//     if (error) return console.log(error);

// por lo general los tokens no viajan por el body de la peticion, estos normalmente viene en la cabezera de
// la peticion "header" o tambien como cookie establecida en le navegador
// el metodo que tiene express para establecer una cookie
//     res.cookie('token', token);

//     res.send('usuario registrado o logiado');
//   }
// );

const createAccessToken = async (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET_KEY,
      {
        expiresIn: '7d',
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
};

module.exports = { createAccessToken };
