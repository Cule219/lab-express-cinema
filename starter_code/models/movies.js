const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;


// file that sets the model for the inputs into the database and all the information