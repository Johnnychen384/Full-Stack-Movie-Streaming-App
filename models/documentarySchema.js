const mongoose = require('mongoose')


const documentarySchema = new mongoose.Schema({
    genre_ids: [Number],
    id: {type: Number, default: 1},
    original_language: {type: String, default: "en"},
    overview: {type: String},
    poster_path: {type: String},
    title: {type: String},
    release_date: {type: String},
    vote_average: {type: Number},
    original_title: {type: String}
})

const Documentary = mongoose.model('Documentary', documentarySchema)

module.exports = Documentary