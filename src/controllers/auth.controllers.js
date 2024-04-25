const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { createAccessToken } = require('../libs/jwt');

const registerController = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    // forma de encriptar la contraseña en la base de datos utilizando bcriptjs, el metodo hash resive como
    // primer parametro lo que se va a hashear, y segundo el numero de veces que queremos que se ejecute la funcion
    const passwordHash = await bcrypt.hash(password, 10);

    // una forma de guardar un nuevo registro en la base de datos puede ser la siguiente
    // newUser = await User.create({
    //   username,
    //   email,
    //   password,
    // })

    // otra forma de guardar un nuevo documento en la base de datos es instanciando un nuevo objeto de "User"
    // de esta forma podemos alterar el objeto y guardarlo despues
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    // funcion que creamos para general tokens
    const token = await createAccessToken({ id: userSaved._id });

    // el metodo que tiene express para establecer una cookie
    res.cookie('token', token);

    res.status(201).json(userSaved);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    // console.error(error.message);
    next(error);
  }
};

const loginController = async (req, res, next) => {
  const { emailOrUsername, password } = req.body;

  try {
    // Esta validacion ya se hace con Zod
    // if ((!emailOrUsername) || !password)
    //   return res.status(400).json({ error: 'Faltan datos requeridos' });

    // metodo para encontrar un registro, "$or" es un operador para poder buscar por email o username
    const userFound = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });

    if (!userFound) return res.status(400).json({ error: ['Usuario o contraseña incorrectos'] });

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);

    // una buena practica es no ser tan descriptivo con los mensajes de error en la parte de la seguridad
    if (!isPasswordMatch) return res.status(400).json({ error: ['Usuario o contraseña incorrectos'] });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie('token', token);
    res.status(200).json(userFound);
  } catch (error) {
    next(error);
  }
};

const logoutController = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

module.exports = {
  loginController,
  logoutController,
  registerController,
};
