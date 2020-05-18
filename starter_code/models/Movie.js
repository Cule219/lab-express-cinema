const mongoose = require ('mongoose')
const schema = mongoose.Schema

const movieSchema = new schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes:[String]

})

const movie = mongoose.model('Movie',movieSchema)

module.exports = movie

