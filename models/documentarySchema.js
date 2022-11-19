const mongoose = require('mongoose')


const documentarySchema = new mongoose.Schema({
    genre_ids: [{type: Number}],
    id: {type: Number},
    original_language: {type: String},
    original_title: {type: String},
    overview: {type: String},
    poster_path: {type: String},
    title: {type: String},
    release_date: {type: String},
    vote_average: {type: Number}
})

const Documentary = mongoose.model('Documentary', documentarySchema)

module.exports = Documentary