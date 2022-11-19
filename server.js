const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const axious = require('axios')
const asnc = require('async')
const app = express()



// Schema files =====================================
const actionSchema = require('./models/actionSchema')
const adventureSchema = require('./models/adventureSchema')
const comedySchema = require('./models/comedySchema')
const crimeSchema = require('./models/crimeSchema')
const documentarySchema = require('./models/documentarySchema')
const fantasySchema = require('./models/fantasySchema')
const horrorSchema = require('./models/horrorSchema')
const romanceSchema = require('./models/romanceSchema')
const scienceSchema = require('./models/scienceSchema')




// Seed Data Functions ====================

const actionSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=28'
    try {
        const res = await axious.get(url)
        const data = await res.data
        actionSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const adventureSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=12'
    try {
        const res = await axious.get(url)
        const data = await res.data
        adventureSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const comedySeed= async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=35'
    try {
        const res = await axious.get(url)
        const data = await res.data
        comedySchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const crimeSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=80'
    try {
        const res = await axious.get(url)
        const data = await res.data
        crimeSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const documentarySeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=99'
    try {
        const res = await axious.get(url)
        const data = await res.data
        documentarySchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const fantasySeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=14'
    try {
        const res = await axious.get(url)
        const data = await res.data
        fantasySchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const horrorSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=27'
    try {
        const res = await axious.get(url)
        const data = await res.data
        horrorSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const romanceSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=10749'
    try {
        const res = await axious.get(url)
        const data = await res.data
        romanceSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const scienceSeed = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=b6d6ee9b341e256a502c80ece1ccb9b5&language=en-US&with_genres=878'
    try {
        const res = await axious.get(url)
        const data = await res.data
        scienceSchema.create(data.results, (error, item) => {
            console.log(item)
        })
    } catch (error) {
        console.error(error)
    }
}

const getSeedData = () => {
    actionSeed()
    adventureSeed()
    comedySeed()
    crimeSeed()
    documentarySeed()
    fantasySeed()
    horrorSeed()
    romanceSeed()
    scienceSeed()
    console.log("Seed Complete")
}

// Seed Route ================== //
// app.get('/seeds', () => {
//     getSeedData()
// })


// Remove collections ================== //
// actionSchema.collection.drop()
// adventureSchema.collection.drop()
// comedySchema.collection.drop()
// crimeSchema.collection.drop()
// documentarySchema.collection.drop()
// fantasySchema.collection.drop()
// horrorSchema.collection.drop()
// romanceSchema.collection.drop()
// scienceSchema.collection.drop()



// ========================================= //
// ========================================= //

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"))
app.use(methodOverride('_method'))


// ========================================= //
// Home route ============================== //
app.get('/', (req, res) => {

    // Async method ======= NOT WORKING YET
    // asnc.series([
    //     function(callback){
    //         actionSchema.find({}).exec(callback)
    //     },
    //     function(callback){
    //         adventureSchema.find({}, (error, adventure) => {
    //             allAdventure = adventure
    //         }).exec(callback)
    //     },
    //     function(callback){
    //         comedySchema.find({}, (error, comedy) => {
    //             allComedy = comedy
    //         }).exec(callback) 
    //     },
    //     function(callback){
    //         crimeSchema.find({}, (error, crime) => {
    //             allCrime = crime
    //         }).exec(callback)
    //     },
    //     function(callback){
    //         documentarySchema.find({}, (error, doc) => {
    //             allDocumentary = doc
    //         }).exec(callback)
    //     },
    //     function(callback){
    //         fantasySchema.find({}, (error, fantasy) => {
    //             allFantasy = fantasy
    //         }).exec(callback)
        
    //     },
    //     function(callback){
    //         horrorSchema.find({}, (error, horror) => {
    //             allHorror = horror
    //         }).exec(callback)
        
    //     },
    //     function(callback){
    //         romanceSchema.find({}, (error, rom) => {
    //             allRomance = rom
    //         }).exec(callback)
    //     },
    //     function(callback){
    //         scienceSchema.find({}, (error, sci) => {
    //             allScienceFiction = sci
    //         }).exec(callback)
        
    //     }
    // ], (err, results) => {
        
    //     console.log(results)
    //     res.render('index.ejs', {
    //         allAction: results[0],
    //         allAdventure: results[1],
    //         allComedy: results[2],
    //         allCrime: results[3],
    //         allDocumentary: results[4],
    //         allFantasy: results[5],
    //         allHorror: results[6],
    //         allRomance: results[7],
    //         allScienceFiction: results[8]
    //     })
    // })
    

   

    

   

   

    
    
    

   
    // console.log(allAction)
    // Passing into index.ejs each var
    
    

    // What is Callback Hell T_T!!!! ================================//
    actionSchema.find({}, (err, action) => {
        comedySchema.find({}, (error, comedy) => {
            crimeSchema.find({}, (error, crime) => {
                documentarySchema.find({}, (error, doc) => {
                    fantasySchema.find({}, (error, fantasy) => {
                        horrorSchema.find({}, (error, horror) => {
                            romanceSchema.find({}, (error, rom) => {
                                adventureSchema.find({}, (error, adventure) => {
                                    scienceSchema.find({}, (error, sci) => {
                                        res.render('index.ejs', {
                                            allAction: action,
                                            allComedy: comedy,
                                            allCrime: crime,
                                            allDocumentary: doc,
                                            allFantasy: fantasy,
                                            allHorror: horror,
                                            allRomance: rom,
                                            allAdventure: adventure,
                                            allScience: sci
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    
})

// ========================================= //
// Show route ============================== //






// ================ Connections ==================== //
app.listen(3000)

mongoose.connect('mongodb://localhost:27017/moviedb', () => {
  console.log('The connection with mongod is established')
})