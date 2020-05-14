const express = require("express");
const router = express.Router();
const Movies = require("../models/movies")




/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});


router.get("/movies", (req, res, next) => {
 Movies.find().then(moviesFromDb => {
   res.json({ movies : moviesFromDb })
 })
})

router.get("/movies/:id", (req, res, next) => {
  Movies.findById(req.params.id).then((movie) => {
    res.json(movie)
  })
  })


module.exports = router;
