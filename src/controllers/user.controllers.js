const User = require('../models/user.model');

const getUsersController = async (req, res, next) => {
  const { userId } = req.params;

  try {
    if (userId) {
      const userFound = await User.findById(userId);
      return res.status(200).json(userFound);
    }

    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

const profileController = async (req, res, next) => {
  // viene despues de la autenticacion
  const userId = req.user.id;

  try {
    const userProfile = await User.findById(userId);

    if (!userProfile) return res.status(404).json({ error: 'Usuario no registrado' });

    res.status(200).json(userProfile);
  } catch (error) {
    next(error);
  }
};

const updateUserController = async (req, res, next) => {
  const userId = req.user.id;
  const { name, username } = req.body;

  try {
    const newData = {
      name,
      username,
    };

    const updatedUser = await User.findOneAndUpdate({ _id: userId }, newData, { new: true });

    if (!updatedUser) return res.status(404).json({ error: ['Usuario no registrado'] });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsersController,
  profileController,
  updateUserController,
};
