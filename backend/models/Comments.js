const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }    
})

module.exports = mongoose.model('Comment', commentSchema);