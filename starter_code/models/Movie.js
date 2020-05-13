const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema - Iteration 1 - Create Fields for Recipe Scheme
    title: {
      type: String,  
      required: true
    },
    director: {
        type: String,  
        
    },
    stars: ([String]),
    image: {
      type: String,
      
    },
    description: String,
    showtimes: ([String])
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;