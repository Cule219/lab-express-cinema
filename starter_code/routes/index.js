const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "index" });
});

router.get("/movies", (req, res) => {
  Movie.find().then((movies) => {
    res.json({ movies });
  });
});

router.get("/movies/:id", (req, res) => {
  console.log(req.params.id)
  Movie.findById(req.params.id).then((movie) => {
    res.json(movie);
  });
});

router.post("/movies/new", (req, res) => {
  
  Movie.create(req.body).then(movie => {
    console.log("We made it", movie)
    res.json(movie);
  }).catch(err => console.log('Oh great, another error!'))
})

module.exports = router;