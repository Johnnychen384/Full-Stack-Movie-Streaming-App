const mongoose = require('mongoose')


const horrorSchema = new mongoose.Schema({
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

const Horror = mongoose.model('Horror', horrorSchema)

module.exports = Horror