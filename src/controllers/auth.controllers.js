const User = require('../models/user.model');

const loginController = async (req, res) => {
  res.send('Login');
};

const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
    });

    const userSaved = await newUser.save();

    res.status(201).json(userSaved);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
};

module.exports = {
  loginController,
  registerController,
};
