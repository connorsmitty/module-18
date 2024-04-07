const Thought = require('../models/thoughts');

exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.status(200).json({ status: 'OK', data: thoughts });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while retrieving thoughts' });
  }
};

exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ status: 'Not Found', message: 'Thought not found' });
    }
    res.status(200).json({ status: 'OK', data: thought });
  } catch (error) {
    res.status(500).json({ status: 'Error', message: 'An error occurred while retrieving thought' });
  }
};

// Add the rest of the controller functions here