const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;

// let str = "string"
// let num = 12345
// let obj = {
//   prop1: 1,
//   prop2: 2,
//   prop3: 3
// }
// let arr = [1,2,3,4]

// function func () {
//   console.log("hello")
// }

// module.exports = {movieModel, str, num, obj, arr, func};
