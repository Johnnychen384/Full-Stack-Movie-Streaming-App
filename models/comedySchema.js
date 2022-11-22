const mongoose = require('mongoose')


const comedySchema = new mongoose.Schema({
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

const Comedy = mongoose.model('Comedy', comedySchema)

module.exports = Comedy