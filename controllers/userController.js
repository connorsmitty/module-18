const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ status: 'OK', data: users });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while retrieving users' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ status: 'Not Found', message: 'User not found' });
    }
    res.status(200).json({ status: 'OK', data: user });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while retrieving user' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ status: 'Created', data: user });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while creating user' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ status: 'Not Found', message: 'User not found' });
    }
    res.status(200).json({ status: 'OK', data: user });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while updating user' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    if (!user) {
      return res.status(404).json({ status: 'Not Found', message: 'User not found' });
    }
    res.status(200).json({ status: 'OK', data: user });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while deleting user' });
  }
};