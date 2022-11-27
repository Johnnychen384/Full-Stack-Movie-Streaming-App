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
const commentSchema = require('./models/commentsSchema')
const customSchema = require('./models/customSchema')
const favoriteSchema = require('./models/favoriteSchema')


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
// favoriteSchema.collection.drop()



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
                                        customSchema.find({}, (error, custom) => {
                                            res.render('index.ejs', {
                                                allAction: action,
                                                allComedy: comedy,
                                                allCrime: crime,
                                                allDocumentary: doc,
                                                allFantasy: fantasy,
                                                allHorror: horror,
                                                allRomance: rom,
                                                allAdventure: adventure,
                                                allScience: sci,
                                                allCustom: custom
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
    
})

// ========================================= //
// Show routes ============================== //
app.get('/action/:id', (req, res) => {
    actionSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: 'action', id: req.params.id})
        })
    })
})

app.get('/comedy/:id', (req, res) => {
    comedySchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: 'comedy', id: req.params.id})
        })
    })
})

app.get('/adventure/:id', (req, res) => {
    adventureSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `adventure`, id: req.params.id})
        })
    })
})

app.get('/crime/:id', (req, res) => {
    crimeSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `crime`, id: req.params.id})
        })
    })
})

app.get('/documentary/:id', (req, res) => {
    documentarySchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `documentary`, id: req.params.id})
        })
    })
})

app.get('/fantasy/:id', (req, res) => {
    fantasySchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `fantasy`, id: req.params.id})
        })
    })
})

app.get('/horror/:id', (req, res) => {
    horrorSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `horror`, id: req.params.id})
        })
    })
})

app.get('/romance/:id', (req, res) => {
    romanceSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `romance`, id: req.params.id})
        })
    })
})

app.get('/sci/:id', (req, res) => {
    scienceSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `sci`, id: req.params.id})
        })
    })
})

app.get('/custom/:id', (req, res) => {
    customSchema.findById(req.params.id, (error, movie) => {
        commentSchema.find({}, (error, comments) => {
            res.render('show.ejs', {movie, comments, url: `custom`, id: req.params.id})
        })
    })
})

app.get('/new', (req, res) => {
    res.render('new.ejs')
})

// ==================== Get Routes for Edits page ======================= //
app.get('/edit/action/:id', (req, res) => {
    actionSchema.findById(req.params.id, (error, movie) => {
        console.log("This is the " + movie)
        res.render('edit.ejs', {movie, url: 'action', id: req.params.id})
    })
})

app.get('/edit/comedy/:id', (req, res) => {
    comedySchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: 'comedy', id: req.params.id})
    })
})

app.get('/edit/adventure/:id', (req, res) => {
    adventureSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `adventure`, id: req.params.id})
    })
})

app.get('/edit/crime/:id', (req, res) => {
    crimeSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `crime`, id: req.params.id})
    })
})

app.get('/edit/documentary/:id', (req, res) => {
    documentarySchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `documentary`, id: req.params.id})
    })
})

app.get('/edit/fantasy/:id', (req, res) => {
    fantasySchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `fantasy`, id: req.params.id})
    })
})

app.get('/edit/horror/:id', (req, res) => {
    horrorSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `horror`, id: req.params.id})
    })
})

app.get('/edit/romance/:id', (req, res) => {
    romanceSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `romance`, id: req.params.id})
    })
})

app.get('/edit/sci/:id', (req, res) => {
    scienceSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `sci`, id: req.params.id})
    })
})

app.get('/edit/custom/:id', (req, res) => {
    customSchema.findById(req.params.id, (error, movie) => {
        res.render('edit.ejs', {movie, url: `custom`, id: req.params.id})
    })
})

// ==================== Get for favorite route ======================= //
// hash table used for favorite movies page. Allows for the favorite movies to trigger get route to show movie.
const genreHash = {
    28: "action",
    12: "adventure",
    35: "comedy",
    80: "crime",
    99: "documentary",
    14: "fantasy",
    27: "horror",
    10749: "roamnce",
    878: "sci"
}

// Route for favorite movies.
app.get('/movie/favorites', (req, res) => {
    favoriteSchema.find({}, (error, allMovies) => {
        // passes in just the movies array inside the "user" db
        // console.log(allMovies[0].movies)
        res.render('favorite.ejs', {allMovies: allMovies[0].movies, genreHash})
    })
    
})




// ================================================= //
// ==================== Post ======================= //

// Creates a SINGLE collection with a single document
// favoriteSchema.create({name: "Johnny"}, (req, res) => {
//     console.log("Done")
// })

// adds movie to favoriteDB
app.post('/favorite/:url/:id', (req, res) => {
    
    // condition to help determine which schema to call findById on.
    const url = req.params.url

    if(url === "action"){
        actionSchema.findById(req.params.id, (error, item) => {  

            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/action/${req.params.id}`)
                })
            })
            
        })
    } else if(url === "adventure"){
        adventureSchema.findById(req.params.id, (error, item) => {
            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/adventure/${req.params.id}`)
                })
            })
        })
    } else if(url === "comedy"){
        comedySchema.findById(req.params.id, (error, item) => {
           // Finds the document with name Johnny
           favoriteSchema.find({name: "Johnny"}, (error, object) => {
            // pushs movie into the documents array
            object[0].movies.push(item)
            // saves
            object[0].save((error, data) => {
                res.redirect(`/comedy/${req.params.id}`)
            })
        })
            
        })
    } else if(url === "crime"){
        crimeSchema.findById(req.params.id, (error, item) => {
           // Finds the document with name Johnny
           favoriteSchema.find({name: "Johnny"}, (error, object) => {
            // pushs movie into the documents array
            object[0].movies.push(item)
            // saves
            object[0].save((error, data) => {
                res.redirect(`/crime/${req.params.id}`)
            })
        })
            
        })
    } else if(url === "custom"){
        customSchema.findById(req.params.id, (error, item) => {
           // Finds the document with name Johnny
           favoriteSchema.find({name: "Johnny"}, (error, object) => {
            // pushs movie into the documents array
            object[0].movies.push(item)
            // saves
            object[0].save((error, data) => {
                res.redirect(`/custom/${req.params.id}`)
            })
        })
            
        })
    } else if(url === "documentary"){
        documentarySchema.findById(req.params.id, (error, item) => {
            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/documentary/${req.params.id}`)
                })
            })
            
        })
    } else if(url === "fantasy"){
        fantasySchema.findById(req.params.id, (error, item) => {
           // Finds the document with name Johnny
           favoriteSchema.find({name: "Johnny"}, (error, object) => {
            // pushs movie into the documents array
            object[0].movies.push(item)
            // saves
            object[0].save((error, data) => {
                res.redirect(`/fantasy/${req.params.id}`)
            })
        })
            
        })
    } else if(url === "horror"){
        horrorSchema.findById(req.params.id, (error, item) => {
            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/horror/${req.params.id}`)
                })
            })
        })
    } else if(url === "romance"){
        romanceSchema.findById(req.params.id, (error, item) => {
            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/romance/${req.params.id}`)
                })
            })
        })
    } else if(url === "science"){
        scienceSchema.findById(req.params.id, (error, item) => {
            // Finds the document with name Johnny
            favoriteSchema.find({name: "Johnny"}, (error, object) => {
                // pushs movie into the documents array
                object[0].movies.push(item)
                // saves
                object[0].save((error, data) => {
                    res.redirect(`/science/${req.params.id}`)
                })
            })
        })
    } 
})

// creates new comment in show page
app.post('/show/comments/:url/:id', (req, res) => {
    commentSchema.create(req.body, (error, comment) => {
        res.redirect(`/${req.params.url}/${req.params.id}`)
    })
})

// Creates new movie
app.post('/new', (req, res) => {
    customSchema.create(req.body, (error, item) => {
        res.redirect('/')
    })
})



// ================================================= //
// ==================== Delete ======================= //
// delete movie from custom
app.delete('/custom/:id', (req, res) => {
    customSchema.findByIdAndRemove(req.params.id, (error, item) => {
        res.redirect('/')
    })
})

// Delete movie from favorites
app.delete('/delete/:id', (req, res) => {
    favoriteSchema.findOne({name: "Johnny"}, (error, object) => {
        object.movies.id(req.params.id).remove()
        object.save((error, data) => {
            res.redirect('/movie/favorites')
        })
        
    })
})

// ================================================= //
// ==================== PUT ======================= //
// Edit movie
app.put('/edit/:url/:id', (req, res) => {
    const url = req.params.url
    if(url === "action"){
        actionSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "adventure"){
        adventureSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "comedy"){
        comedySchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "crime"){
        crimeSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "custom"){
        customSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "documentary"){
        documentarySchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "fantasy"){
        fantasySchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "horror"){
        horrorSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "romance"){
        romanceSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } else if(url === "science"){
        scienceSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updated) => {
            res.redirect('/')
        })
    } 
})


// ================ Connections ==================== //
app.listen(3000)

mongoose.connect('mongodb://localhost:27017/moviedb', () => {
  console.log('The connection with mongod is established')
})