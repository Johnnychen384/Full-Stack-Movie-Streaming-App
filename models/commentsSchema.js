const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    comments: {type: String}
}, {timestamps: true})

const comment = mongoose.model('Comment', commentSchema)

module.exports = comment