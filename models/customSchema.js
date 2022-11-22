const mongoose = require('mongoose')


const customSchema = new mongoose.Schema({
    original_language: {type: String, default: "en"},
    overview: {type: String},
    poster_path: {type: String, default: 'https://media.istockphoto.com/id/1221240925/vector/coming-soon-lettering-coming-soon-for-promotion-advertisement-sale-marketing.jpg?s=612x612&w=0&k=20&c=RZPMOqmoyOwEEQfjnWm8_j-G1Ht2TBRxshHNR0nn96o='},
    title: {type: String},
    release_date: {type: String, default: "2022"},
    vote_average: {type: Number}
})

const Custom = mongoose.model('Custom', customSchema)

module.exports = Custom