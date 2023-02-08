const mongoose = require('mongoose')

const statSchema =  new mongoose.Schema({
    wins: {
        type: Number,
        required: true
    },
    losses: {
        type: Number,
        required: true
    },
    earnings: {
        type: Number,
        required: true
    }
}, { timestamps: true})

module.exports = statSchema