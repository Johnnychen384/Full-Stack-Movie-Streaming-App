const mongoose = require('mongoose')
const actionSchema = require('./actionSchema')
const adventureSchema = require('./adventureSchema')
const comedySchema = require('./comedySchema')
const crimeSchema = require('./crimeSchema')
const documentarySchema = require('./documentarySchema')
const fantasySchema = require('./fantasySchema')
const horrorSchema = require('./horrorSchema')
const romanceSchema = require('./romanceSchema')
const scienceSchema = require('./scienceSchema')
const customSchema = require('./customSchema')


const favoriteSchema = new mongoose.Schema({
    name: {type: String},
    movies: [actionSchema.schema]
})

const favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = favorite