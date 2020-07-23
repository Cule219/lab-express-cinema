const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
    title: String,
    director: String,
    stars: [ String ],
    image: String,
    description: String,
    showtimes: [ String ],
});

module.exports = Movie; 