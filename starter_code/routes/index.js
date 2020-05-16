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
  console.log("We made it")
  // Movie.insertOne(req.params.body).then((movie) => {
  //   res.json(movie);
  // }).catch(err => console.log('Oh great, another error!'))
})

module.exports = router;