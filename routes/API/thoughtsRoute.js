const express = require('express');
const router = express.Router();
const thoughtsController = require('../controllers/thoughtsController');

router.get('/', thoughtsController.getAllThoughts);
router.get('/:thoughtId', thoughtsController.getThoughtById);
router.post('/', thoughtsController.createThought);
router.put('/:thoughtId', thoughtsController.updateThought);
router.delete('/:thoughtId', thoughtsController.deleteThought);

module.exports = router;