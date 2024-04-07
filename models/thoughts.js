const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reactions: [{
        type: String, // You can change this type to represent different types of reactions (e.g., like, love, haha, etc.)
        default: [],
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
