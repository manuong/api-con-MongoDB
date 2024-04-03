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

module.exports = {
  getUsersController,
};
