const express = require("express");
const router = express.Router();
const Movie = require('../models/Movie.js');

/* GET home page */
router.get("/", (req, res, next) => {
  console.log("called");
  res.json({ message: "a message from index.js!!!" });
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(moviesFromDb => {
    res.json({ movies: moviesFromDb }); //Sending movies to the client
  })
});

module.exports = router;

