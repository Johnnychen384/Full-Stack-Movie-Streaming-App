const mongoose = require('mongoose')


const crimeSchema = new mongoose.Schema({
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

const Crime = mongoose.model('Crime', crimeSchema)

module.exports = Crime