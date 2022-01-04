const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        require: true
    },
    detail: {
        type: String,
        require: true
    },
    complete: {
        type: Boolean,
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
})


module.exports = mongoose.model('todo', todoSchema);