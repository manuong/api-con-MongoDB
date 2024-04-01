const User = require('../models/user.model');

const loginController = async (req, res) => {
  res.send('Login');
};

const registerController = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
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
      password,
    });

    const userSaved = await newUser.save();

    res.status(201).json(userSaved);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    // console.error(error.message);
    next(error);
  }
};

module.exports = {
  loginController,
  registerController,
};
